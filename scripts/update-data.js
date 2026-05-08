import { createClient } from '@supabase/supabase-js';
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const CRAWL_RESULTS_FILE = join(__dirname, 'crawl-results.json');
const FLIGHT_TEXT_FILE = join(__dirname, '..', 'flight.text');

// Supabase 설정 (환경변수에서 읽기)
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;

function loadCrawlResults() {
  try {
    const data = readFileSync(CRAWL_RESULTS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('크롤링 결과 파일 로드 실패:', error.message);
    return null;
  }
}

function generateFlightText(airlines) {
  const sections = {
    fsc: [], // 대형 항공사
    lcc: [], // 저비용 항공사
    foreign: [] // 해외 항공사
  };

  const fscIds = ['korean', 'asiana'];
  const lccIds = ['tway', 'jeju', 'jinair', 'eastar', 'airbusan', 'airpremia'];
  const foreignIds = ['vietnam', 'lufthansa', 'aircanada', 'klm'];

  for (const airline of airlines) {
    let text = '';

    if (fscIds.includes(airline.id) || lccIds.includes(airline.id)) {
      const letter = String.fromCharCode(65 + (fscIds.includes(airline.id) ? fscIds.indexOf(airline.id) : fscIds.length + lccIds.indexOf(airline.id)));

      text = `${letter}. ${airline.name}

사전예약 및 안내번호: 📞 ${airline.contact}

기내 동반 무게: ${airline.cabinMaxWeight}kg 이하 (${airline.cabinNote || '생후 8주 이상'})

케이지 (기내): ${airline.cabinCage}
`;

      if (airline.cargoMaxWeight > 0) {
        text += `
화물칸 동반 무게: ${airline.cargoMaxWeight}kg 이하 (${airline.cargoNote || ''})

하드 케이지 (화물칸): ${airline.cargoCage}
`;
      } else {
        text += `
화물칸 동반: 불가
`;
      }

      text += `
취항노선 (공항명): * ${airline.routes}

반려동물 탑승 금액:

${airline.fees}`;

      if (fscIds.includes(airline.id)) {
        sections.fsc.push(text);
      } else {
        sections.lcc.push(text);
      }
    } else if (foreignIds.includes(airline.id)) {
      const letter = String.fromCharCode(73 + foreignIds.indexOf(airline.id)); // I, J, K, L

      text = `${letter}. ${airline.name}

안내번호: ${airline.contact}
기내 동반 무게: ${airline.cabinMaxWeight}kg 이하 (${airline.cabinNote || ''})
케이지(기내): ${airline.cabinCage}`;

      if (airline.cargoMaxWeight > 0) {
        text += `
화물칸 동반 무게: ${airline.cargoMaxWeight}kg 이하`;
      }

      if (airline.routes) {
        text += `

취항노선 (공항명): ${airline.routes}`;
      }

      if (airline.fees) {
        text += `

탑승 금액: ${airline.fees}`;
      }

      sections.foreign.push(text);
    }
  }

  return `
1. 국내 대형 항공사 (FSC)
${sections.fsc.join('\n')}
2. 국내 저비용 항공사 (LCC) & 하이브리드
${sections.lcc.join('\n')}
3. 해외 주요 항공사 (인천 취항)
${sections.foreign.join('\n')}
`.trim();
}

async function updateSupabase(airlines) {
  if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
    console.log('Supabase 환경변수 없음 - DB 업데이트 건너뜀');
    return false;
  }

  const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

  console.log('\nSupabase airlines 테이블 업데이트 시작...');

  for (const airline of airlines) {
    const row = {
      id: airline.id,
      name: airline.name,
      badge: airline.badge,
      cabin_max_weight: airline.cabinMaxWeight,
      cabin_cage: airline.cabinCage,
      cabin_note: airline.cabinNote,
      cargo_max_weight: airline.cargoMaxWeight,
      cargo_cage: airline.cargoCage,
      cargo_note: airline.cargoNote,
      fees: airline.fees,
      routes: airline.routes,
      contact: airline.contact,
      destinations: airline.destinations || [],
      reservation_note: airline.reservationNote,
      crawled_at: airline.crawledAt,
      source_url: airline.sourceUrl
    };

    const { error } = await supabase
      .from('airlines')
      .upsert(row, { onConflict: 'id' });

    if (error) {
      console.error(`  [${airline.id}] 업데이트 실패:`, error.message);
    } else {
      console.log(`  [${airline.id}] 업데이트 성공`);
    }
  }

  return true;
}

async function main() {
  console.log('========================================');
  console.log('항공사 데이터 업데이트 시작');
  console.log('========================================');

  const crawlResults = loadCrawlResults();
  if (!crawlResults) {
    console.error('크롤링 결과 없음. 먼저 crawl-airlines.js 실행 필요');
    process.exit(1);
  }

  console.log(`\n크롤링 결과: ${crawlResults.totalAirlines}개 항공사`);
  console.log(`성공: ${crawlResults.successCount}개`);
  console.log(`크롤링 시간: ${crawlResults.crawledAt}`);

  // 1. flight.text 업데이트
  console.log('\n[1] flight.text 업데이트...');
  try {
    const flightText = generateFlightText(crawlResults.airlines);
    writeFileSync(FLIGHT_TEXT_FILE, flightText, 'utf-8');
    console.log('  - flight.text 업데이트 완료');
  } catch (error) {
    console.error('  - flight.text 업데이트 실패:', error.message);
  }

  // 2. Supabase 업데이트
  console.log('\n[2] Supabase 업데이트...');
  await updateSupabase(crawlResults.airlines);

  console.log('\n========================================');
  console.log('데이터 업데이트 완료');
  console.log('========================================');
}

main().catch(console.error);
