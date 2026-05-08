import { chromium } from 'playwright';
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const airlinesConfig = JSON.parse(
  readFileSync(join(__dirname, 'airline-urls.json'), 'utf-8')
);

const CRAWL_OUTPUT_FILE = join(__dirname, 'crawl-results.json');

// 크롤링 설정
const CONFIG = {
  maxRetries: 3,
  timeout: 45000,
  retryDelay: 3000,
  pageLoadDelay: 3000,
  betweenSitesDelay: 2500
};

// 기존 flight.text 데이터 (fallback용)
const existingData = {
  korean: {
    cabinMaxWeight: 7,
    cabinCage: '소프트: 32×45×25cm 이하 (눌렀을 때 19cm 이하) · 하드: 32×45×19cm 이하',
    cabinNote: '기내 동반: 생후 8주 이상',
    cargoMaxWeight: 45,
    cargoCage: '하드 케이지: 3면 합 291cm 이하 · 최대 높이 84cm 이하',
    cargoNote: '화물칸 동반: 생후 16주 이상',
    fees: '(국내선) 30,000원\n(국제선) 단거리 150,000원 / 중거리 225,000원 / 장거리 300,000원',
    routes: '(국내) 김포·제주·김해·대구·청주 (해외) 나리타·하네다·간사이·후쿠오카·베이징·상하이·방콕·다낭·나트랑·푸껫·싱가포르·LA·JFK·파리·런던',
    destinations: ['gmp','cju','pus','tae','cjj','nrt','hnd','kix','fuk','pek','pvg','bkk','dad','cxr','hkt','sin','lax','jfk','cdg','lhr']
  },
  asiana: {
    cabinMaxWeight: 7,
    cabinCage: '소프트: 32×45×26cm 이하 (눌렀을 때 21cm 이하) · 하드: 32×45×21cm 이하',
    cabinNote: '기내 동반: 생후 8주 이상',
    cargoMaxWeight: 45,
    cargoCage: '하드 케이지: 3면 합 285cm 이하 · 최대 높이 84cm 이하',
    cargoNote: '화물칸 동반: 생후 16주 이상',
    fees: '(국내선) 30,000원 (~32kg), 60,000원 (32~45kg)\n(국제선) 일본/중국/대만 등 140,000~290,000원 · 아시아 내(괌/사이판) 210,000~440,000원 · 미주/유럽/대양주 290,000~590,000원',
    routes: '(국내) 김포·제주·광주·여수 (해외) 나리타·하네다·간사이·후쿠오카·베이징·상하이·방콕·다낭·마닐라·LA·JFK·프랑크푸르트·파리',
    destinations: ['gmp','cju','kwj','rsu','nrt','hnd','kix','fuk','pek','pvg','bkk','dad','mnl','lax','jfk','fra','cdg']
  },
  tway: {
    cabinMaxWeight: 9,
    cabinCage: '소프트: 37×23×26cm 이하 · 하드: 37×23×23cm 이하',
    cabinNote: '기내 동반: 생후 8주 이상',
    cargoMaxWeight: 0,
    cargoCage: '불가',
    cargoNote: '화물칸 동반 불가',
    fees: '(국내선) 30,000원 / (국제선) 100,000~200,000원',
    routes: '(국내) 김포·제주·대구·청주 (해외) 나리타·간사이·후쿠오카·삿포로·다낭·방콕·시드니·파리·로마',
    destinations: ['gmp','cju','tae','cjj','nrt','kix','fuk','cts','dad','bkk','syd','cdg','fco']
  },
  jeju: {
    cabinMaxWeight: 9,
    cabinCage: '소프트: 37×23×26cm 이하 · 하드: 37×23×23cm 이하',
    cabinNote: '기내 동반: 생후 8주 이상',
    cargoMaxWeight: 0,
    cargoCage: '불가',
    cargoNote: '화물칸 동반 불가',
    fees: '(국내선) 25,000원\n(국제선) 일본/산동성 70,000원 · 기타 아시아 85,000원 · 동남아/대양주 100,000원',
    routes: '(국내) 김포·제주·김해 (해외) 나리타·간사이·베이징 다싱·상하이·칭다오·웨이하이·다낭·방콕·세부·괌·사이판',
    destinations: ['gmp','cju','pus','cxr','nrt','kix','pkx','pvg','tao','weh','dad','bkk','ceb','gum','spn']
  },
  jinair: {
    cabinMaxWeight: 7,
    cabinCage: '소프트: 37×23×26cm 이하 · 하드: 37×23×23cm 이하',
    cabinNote: '기내 동반: 생후 8주 이상',
    cargoMaxWeight: 0,
    cargoCage: '불가',
    cargoNote: '화물칸 동반 불가',
    fees: '(국내선) 20,000원\n(국제선) 일본/중국/대만 70,000원 · 동남아/괌/몽골 100,000원',
    routes: '(국내) 김포·제주·김해 (해외) 나리타·간사이·후쿠오카·상하이·타이베이·울란바토르·다낭·방콕·세부·괌',
    destinations: ['gmp','cju','pus','cxr','nrt','kix','fuk','pvg','tpe','ubn','dad','bkk','ceb','gum']
  },
  eastar: {
    cabinMaxWeight: 9,
    cabinCage: '소프트: (가로+세로+높이) 합 100cm 이하 · 가로 최대 43cm · 높이 25cm 이하\n하드: (가로+세로+높이) 합 100cm 이하 · 가로 최대 37cm · 높이 23cm 이하',
    cabinNote: '기내 동반: 생후 8주 이상',
    cargoMaxWeight: 0,
    cargoCage: '불가',
    cargoNote: '화물칸 동반 불가',
    fees: '(국내선) 30,000원 / (국제선) 일본 120,000원 · 중국/대만 150,000원 · 동남아 200,000원',
    routes: '(국내) 김포·제주·청주·군산·부산 (해외) 나리타·간사이·후쿠오카·삿포로·상하이·타이베이·방콕·다낭·푸꾸옥',
    destinations: ['gmp','cju','cjj','kuv','pus','nrt','kix','fuk','cts','pvg','tpe','bkk','dad','pqc']
  },
  airbusan: {
    cabinMaxWeight: 9,
    cabinCage: '기내 케이지: 가로 41cm · 세로 21cm · 높이 24cm 이내',
    cabinNote: '기내 동반: 생후 8주 이상',
    cargoMaxWeight: 32,
    cargoCage: '하드 케이지: 3면 합 246cm 이하 · 높이 84cm 이하 (국내선만 가능)',
    cargoNote: '화물칸 동반: 국내선만 가능',
    fees: '(국내선) 20,000원\n(국제선) 일본/중국/대만 70,000원 · 동남아/몽골/러시아 90,000원',
    routes: '(국내) 김해·김포·제주 (해외) 나리타·간사이·칭다오·타이베이·가오슝·다낭·방콕·나트랑',
    destinations: ['pus','gmp','cju','nrt','kix','tao','tpe','khh','dad','bkk','cxr']
  },
  airpremia: {
    cabinMaxWeight: 7,
    cabinCage: '소프트: 가로 38cm 이하 · 세로 22cm 이하 · 높이 26cm 이하\n하드: 가로 38cm 이하 · 세로 22cm 이하 · 높이 23cm 이하',
    cabinNote: '기내 동반: 생후 8주 이상',
    cargoMaxWeight: 45,
    cargoCage: '하드 케이지: 3면 합 285cm 이하 · 높이 84cm 이하',
    cargoNote: '화물칸 동반 가능',
    fees: '동북아 130,000~280,000원 / 동남아 200,000~430,000원 / 미주 280,000~580,000원',
    routes: '(해외) LA·뉴어크·샌프란시스코·나리타·방콕',
    destinations: ['lax','ewr','sfo','nrt','bkk']
  },
  lufthansa: {
    cabinMaxWeight: 8,
    cabinCage: '기내 케이지: 118cm (55×40×23cm) · 하드 55×40×23cm 이하',
    cabinNote: '기내 동반: 생후 12주 이상 (독일 출발/도착/경유는 15주 이상 권장 · 미국 도착 반려견 6개월)',
    cargoMaxWeight: 32,
    cargoCage: '화물칸 동반 가능 (최대 32kg)',
    cargoNote: '',
    fees: '항공편별 상이',
    routes: '(해외) 프랑크푸르트·뮌헨',
    destinations: ['fra','muc']
  },
  aircanada: {
    cabinMaxWeight: 10,
    cabinCage: '기내 케이지: 23×40×55cm 이하',
    cabinNote: '기내 동반 가능',
    cargoMaxWeight: 45,
    cargoCage: '화물칸 동반 가능',
    cargoNote: '',
    fees: '(기내) $100 ~ $120 / (화물칸) $270 ~ $324',
    routes: '(해외) 밴쿠버·토론토',
    destinations: ['yvr','yyz']
  },
  klm: {
    cabinMaxWeight: 8,
    cabinCage: '기내 케이지: 46×28×24cm',
    cabinNote: '기내 동반: 생후 15주 이상',
    cargoMaxWeight: 75,
    cargoCage: '화물칸 동반 가능 (최대 75kg)',
    cargoNote: '',
    fees: '항공편별 상이',
    routes: '(해외) 암스테르담',
    destinations: ['ams']
  }
};

async function delay(ms) {
  // 랜덤 지연 추가 (봇 탐지 우회)
  const randomDelay = ms + Math.random() * 1000;
  return new Promise(resolve => setTimeout(resolve, randomDelay));
}

async function crawlWithRetry(page, airline, retryCount = 0) {
  try {
    // 다양한 wait 전략 시도
    const waitStrategies = ['domcontentloaded', 'load', 'networkidle'];
    const strategy = waitStrategies[Math.min(retryCount, waitStrategies.length - 1)];

    console.log(`  - 시도 ${retryCount + 1}/${CONFIG.maxRetries} (${strategy})...`);

    await page.goto(airline.url, {
      waitUntil: strategy,
      timeout: CONFIG.timeout
    });

    // 페이지 로드 대기
    await delay(CONFIG.pageLoadDelay);

    // JavaScript 렌더링 대기
    await page.waitForLoadState('domcontentloaded');

    // 추가 대기 (동적 콘텐츠)
    await delay(1500);

    // 페이지 전체 텍스트 추출
    const pageText = await page.evaluate(() => document.body.innerText);

    if (!pageText || pageText.length < 100) {
      throw new Error('페이지 콘텐츠 부족');
    }

    return { success: true, pageText };

  } catch (error) {
    if (retryCount < CONFIG.maxRetries - 1) {
      console.log(`  - 재시도 대기 중... (${error.message})`);
      await delay(CONFIG.retryDelay);
      return crawlWithRetry(page, airline, retryCount + 1);
    }
    return { success: false, error: error.message };
  }
}

async function crawlAirline(page, airline) {
  console.log(`\n[${airline.id}] ${airline.name} 크롤링 시작...`);

  const crawlResult = await crawlWithRetry(page, airline);

  if (!crawlResult.success) {
    console.error(`  - 크롤링 실패: ${crawlResult.error}`);
    return {
      id: airline.id,
      name: airline.name,
      badge: airline.badge,
      contact: airline.contact,
      sourceUrl: airline.url,
      crawledAt: new Date().toISOString(),
      crawlSuccess: false,
      error: crawlResult.error,
      ...existingData[airline.id]
    };
  }

  const pageText = crawlResult.pageText;

  // 기본 구조: 기존 데이터 유지 + 크롤링 시도
  const result = {
    id: airline.id,
    name: airline.name,
    badge: airline.badge,
    contact: airline.contact,
    sourceUrl: airline.url,
    crawledAt: new Date().toISOString(),
    crawlSuccess: false,
    rawText: pageText.substring(0, 5000),
    ...existingData[airline.id]
  };

  // 무게 정보 추출 시도 (숫자 + kg 패턴)
  const weightMatch = pageText.match(/(\d+)\s*kg/gi);
  if (weightMatch && weightMatch.length > 0) {
    console.log(`  - 무게 정보 발견: ${weightMatch.slice(0, 5).join(', ')}`);
    result.crawlSuccess = true;
  }

  // 케이지 사이즈 추출 시도 (cm 패턴)
  const sizeMatch = pageText.match(/\d+\s*[×xX]\s*\d+\s*[×xX]\s*\d+\s*cm/gi);
  if (sizeMatch && sizeMatch.length > 0) {
    console.log(`  - 케이지 사이즈 발견: ${sizeMatch.slice(0, 3).join(', ')}`);
    result.crawlSuccess = true;
  }

  // 가격 정보 추출 시도 (원 또는 $ 패턴)
  const priceMatch = pageText.match(/[\d,]+\s*(원|USD|\$)/gi);
  if (priceMatch && priceMatch.length > 0) {
    console.log(`  - 가격 정보 발견: ${priceMatch.slice(0, 5).join(', ')}`);
    result.crawlSuccess = true;
  }

  console.log(`  - 크롤링 ${result.crawlSuccess ? '성공' : '실패 (fallback 사용)'}`);
  return result;
}

async function main() {
  console.log('========================================');
  console.log('항공사 반려동물 정책 크롤러 시작');
  console.log(`대상: ${airlinesConfig.airlines.length}개 항공사`);
  console.log(`설정: 최대 ${CONFIG.maxRetries}회 재시도, ${CONFIG.timeout/1000}초 타임아웃`);
  console.log('========================================');

  const browser = await chromium.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-accelerated-2d-canvas',
      '--disable-gpu',
      '--window-size=1920,1080'
    ]
  });

  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    locale: 'ko-KR',
    timezoneId: 'Asia/Seoul',
    viewport: { width: 1920, height: 1080 },
    extraHTTPHeaders: {
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
      'Accept-Language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7',
      'Accept-Encoding': 'gzip, deflate, br',
      'Cache-Control': 'no-cache',
      'Pragma': 'no-cache',
      'Sec-Ch-Ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Google Chrome";v="122"',
      'Sec-Ch-Ua-Mobile': '?0',
      'Sec-Ch-Ua-Platform': '"macOS"',
      'Sec-Fetch-Dest': 'document',
      'Sec-Fetch-Mode': 'navigate',
      'Sec-Fetch-Site': 'none',
      'Sec-Fetch-User': '?1',
      'Upgrade-Insecure-Requests': '1'
    }
  });

  // 쿠키 동의 팝업 등 자동 처리
  context.on('page', async (page) => {
    page.on('dialog', async (dialog) => {
      await dialog.accept();
    });
  });

  const page = await context.newPage();

  // 자동화 탐지 우회
  await page.addInitScript(() => {
    Object.defineProperty(navigator, 'webdriver', { get: () => false });
    Object.defineProperty(navigator, 'plugins', { get: () => [1, 2, 3, 4, 5] });
    Object.defineProperty(navigator, 'languages', { get: () => ['ko-KR', 'ko', 'en-US', 'en'] });
  });

  const results = [];

  for (const airline of airlinesConfig.airlines) {
    const result = await crawlAirline(page, airline);
    results.push(result);

    // Rate limiting: 각 사이트 간 랜덤 대기
    await delay(CONFIG.betweenSitesDelay);
  }

  await browser.close();

  // 결과 저장
  const output = {
    crawledAt: new Date().toISOString(),
    totalAirlines: results.length,
    successCount: results.filter(r => r.crawlSuccess).length,
    failedCount: results.filter(r => !r.crawlSuccess).length,
    airlines: results
  };

  writeFileSync(CRAWL_OUTPUT_FILE, JSON.stringify(output, null, 2), 'utf-8');

  console.log('\n========================================');
  console.log(`크롤링 완료: ${output.successCount}/${output.totalAirlines} 성공`);
  console.log(`실패: ${output.failedCount}개 (fallback 데이터 사용)`);
  console.log(`결과 저장: ${CRAWL_OUTPUT_FILE}`);
  console.log('========================================');
}

main().catch(console.error);
