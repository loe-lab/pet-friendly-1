// ---------------------------
// 데이터: 화면에 사용할 기본 콘텐츠
// - 실제 서비스라면 API/DB에서 받아오는 영역입니다.
// ---------------------------
// 히어로(상단 배너) 슬라이드 데이터
const heroSlides = [
  {
    title: "데일리펫과 함께 떠나는 반려견 여행",
    subtitle: "항공 규정부터 액티비티까지, 우리 아이와의 모든 여정을 큐레이션합니다.",
    image: "eva-darron-oCdVtGFeDC0-unsplash.jpg",
    tag: "WITH PAW CURATION",
  },
  {
    title: "발도장을 남기는 해변 루트",
    subtitle: "바람 좋은 해변과 산책 코스를 지금 만나보세요.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
    tag: "Beach Retreat",
  },
  {
    title: "액티비티와 쇼핑을 한눈에",
    subtitle: "산책, 클래스, 여행용품까지 감각적으로 준비하세요.",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1600&q=80",
    tag: "Travel Essentials",
  },
];

const destinationOptions = [
  { value: "any", label: "Anywhere" },
  { value: "icn", label: "인천 (ICN)" },
  { value: "gmp", label: "김포 (GMP)" },
  { value: "pus", label: "부산 (PUS)" },
  { value: "cju", label: "제주 (CJU)" },
  { value: "tae", label: "대구 (TAE)" },
  { value: "kwj", label: "광주 (KWJ)" },
  { value: "rsu", label: "여수 (RSU)" },
  { value: "usn", label: "울산 (USN)" },
  { value: "hin", label: "사천 (HIN)" },
  { value: "cjj", label: "청주 (CJJ)" },
  { value: "kpo", label: "포항경주 (KPO)" },
  { value: "wju", label: "원주 (WJU)" },
  { value: "kuv", label: "군산 (KUV)" },
  { value: "nrt", label: "도쿄/나리타 (NRT)" },
  { value: "hnd", label: "도쿄/하네다 (HND)" },
  { value: "kix", label: "오사카/간사이 (KIX)" },
  { value: "fuk", label: "후쿠오카 (FUK)" },
  { value: "cts", label: "삿포로 (CTS)" },
  { value: "oka", label: "오키나와 (OKA)" },
  { value: "myj", label: "마쓰야마 (MYJ)" },
  { value: "fsz", label: "시즈오카 (FSZ)" },
  { value: "tpe", label: "타이베이 (TPE)" },
  { value: "tsa", label: "타이베이/송산 (TSA)" },
  { value: "hkg", label: "홍콩 (HKG)" },
  { value: "tao", label: "칭다오 (TAO)" },
  { value: "pvg", label: "상하이/푸동 (PVG)" },
  { value: "bkk", label: "방콕 (BKK)" },
  { value: "cnx", label: "치앙마이 (CNX)" },
  { value: "dad", label: "다낭 (DAD)" },
  { value: "cxr", label: "나트랑/깜란 (CXR)" },
  { value: "pqc", label: "푸꾸옥 (PQC)" },
  { value: "han", label: "하노이 (HAN)" },
  { value: "sgn", label: "호치민 (SGN)" },
  { value: "mnl", label: "마닐라 (MNL)" },
  { value: "ceb", label: "세부 (CEB)" },
  { value: "crk", label: "클락 (CRK)" },
  { value: "sin", label: "싱가포르 (SIN)" },
  { value: "kul", label: "쿠알라룸푸르 (KUL)" },
  { value: "syd", label: "시드니 (SYD)" },
  { value: "gum", label: "괌 (GUM)" },
  { value: "spn", label: "사이판 (SPN)" },
  { value: "khh", label: "가오슝 (KHH)" },
  { value: "tag", label: "보홀 (TAG)" },
  { value: "dps", label: "발리 (DPS)" },
  { value: "lax", label: "로스앤젤레스 (LAX)" },
  { value: "jfk", label: "뉴욕/존 F.케네디 (JFK)" },
  { value: "ewr", label: "뉴욕/뉴어크 (EWR)" },
  { value: "sfo", label: "샌프란시스코 (SFO)" },
  { value: "sea", label: "시애틀 (SEA)" },
  { value: "ord", label: "시카고/오헤어 (ORD)" },
  { value: "atl", label: "애틀랜타 (ATL)" },
  { value: "iad", label: "워싱턴/덜레스 (IAD)" },
  { value: "las", label: "라스베이거스 (LAS)" },
  { value: "hnl", label: "호놀룰루 (HNL)" },
  { value: "yvr", label: "밴쿠버 (YVR)" },
  { value: "yyz", label: "토론토 (YYZ)" },
  { value: "cdg", label: "파리/샤를드골 (CDG)" },
  { value: "lhr", label: "런던/히드로 (LHR)" },
  { value: "fra", label: "프랑크푸르트 (FRA)" },
  { value: "muc", label: "뮌헨 (MUC)" },
  { value: "fco", label: "로마/피우미치노 (FCO)" },
  { value: "mxp", label: "밀라노/말펜사 (MXP)" },
  { value: "ams", label: "암스테르담 (AMS)" },
  { value: "bud", label: "부다페스트 (BUD)" },
  { value: "bcn", label: "바르셀로나 (BCN)" },
];

const destinationLabelMap = destinationOptions.reduce((acc, option) => {
  acc[option.value] = option.label;
  return acc;
}, {});

const destinationOptionsMarkup = destinationOptions
  .map((option) => `<option value="${option.value}">${option.label}</option>`)
  .join("");


// 항공사 규정 데이터 (flight.text 기준으로 정리)
// - 화면 필터는 maxCabinWeight(kg) 기준으로 동작합니다.
// - 실제 규정/운임은 항공사 정책에 따라 변동될 수 있습니다.
const airlineData = [
  {
    id: "korean",
    name: "대한항공 (Korean Air)",
    badge: "KOREAN AIR",
    reservationNote:
      "항공권 발권 이후 서비스 신청 · 출발 48시간 전까지 서비스 확약 필요",
    cabin: {
      maxWeight: 7,
      cage: "소프트: 32×45×25cm 이하 (눌렀을 때 19cm 이하) · 하드: 32×45×19cm 이하",
      note: "기내 동반: 생후 8주 이상",
    },
    cargo: {
      maxWeight: 45,
      cage: "하드 케이지: 3면 합 291cm 이하 · 최대 높이 84cm 이하",
      note: "화물칸 동반: 생후 16주 이상",
    },
    fees:
      "국내선 30,000원\n국제선 150,000~600,000원 (노선/거리/무게에 따라 상이)\n단거리 150,000원 · 중거리 225,000원 · 장거리 300,000원",
    routes:
      "(국내) 전 노선 · (해외) 미주/유럽/아시아 등 전 세계",
    contact: "1588-2001",
    destinations: [],
    maxCabinWeight: 7,
    maxCargoWeight: 45,
    breeds: ["small", "medium"],
  },
  {
    id: "asiana",
    name: "아시아나항공 (Asiana Airlines)",
    badge: "ASIANA",
    cabin: {
      maxWeight: 7,
      cage: "소프트: 32×45×26cm 이하 (눌렀을 때 21cm 이하) · 하드: 32×45×21cm 이하",
      note: "기내 동반: 생후 8주 이상",
    },
    cargo: {
      maxWeight: 45,
      cage: "하드 케이지: 3면 합 285cm 이하 · 최대 높이 84cm 이하",
      note: "화물칸 동반: 생후 16주 이상",
    },
    fees:
      "국내선 30,000원 (~32kg) / 60,000원 (32~45kg)\n국제선: 한국↔일본/중국/대만/홍콩/몽골 140,000원(USD140)~290,000원(USD290)\n그 외 아시아(괌/사이판 포함) 210,000원(USD210)~440,000원(USD440)\n미주/유럽/대양주 290,000원(USD290)~590,000원(USD590)",
    routes: "(국내) 전 노선 · (해외) 미주/유럽 등 전 세계",
    contact: "1588-8000",
    destinations: [],
    maxCabinWeight: 7,
    maxCargoWeight: 45,
    breeds: ["small", "medium"],
  },
  {
    id: "tway",
    name: "티웨이항공 (T'way Air)",
    badge: "T'WAY",
    cabin: {
      maxWeight: 9,
      cage: "소프트: 37×23×26cm 이하 · 하드: 37×23×23cm 이하",
      note: "기내 동반: 생후 8주 이상",
    },
    cargo: { maxWeight: 0, cage: "불가", note: "화물칸 동반 불가" },
    fees: "국내선 30,000원\n국제선 100,000~200,000원 (노선별 상이)",
    routes: "(국내) 전 노선 · (해외) 유럽/일본/동남아/시드니 등",
    contact: "1688-8686",
    destinations: [],
    maxCabinWeight: 9,
    maxCargoWeight: 0,
    breeds: ["small", "medium"],
  },
  {
    id: "jeju",
    name: "제주항공 (Jeju Air)",
    badge: "JEJU AIR",
    cabin: {
      maxWeight: 9,
      cage: "소프트: 37×23×26cm 이하 · 하드: 37×23×23cm 이하",
      note: "기내 동반: 생후 8주 이상 · 펫멤버십 운영(고급형/기본형)",
    },
    cargo: { maxWeight: 0, cage: "불가", note: "화물칸 동반 불가" },
    fees:
      "국내선 25,000원\n국제선 $70~$100 (노선별 상이)\n일본/중국(산동성) 70,000원(USD70)\n홍콩/마카오/대만/중국(산동성 외)/러시아/몽골 85,000원(USD85)\n동남아/괌/사이판 100,000원(USD100)\n펫멤버십: 고급형 240,000원 / 기본형 98,000원",
    routes: "(국내) 전 노선 · (해외) 일본/동남아/대양주 등",
    contact: "1599-1500",
    destinations: [],
    maxCabinWeight: 9,
    maxCargoWeight: 0,
    breeds: ["small", "medium"],
  },
  {
    id: "jinair",
    name: "진에어 (Jin Air)",
    badge: "JIN AIR",
    cabin: {
      maxWeight: 7,
      cage: "소프트: 37×23×26cm 이하 · 하드: 37×23×23cm 이하",
      note: "기내 동반: 생후 8주 이상",
    },
    cargo: { maxWeight: 0, cage: "불가", note: "화물칸 동반 불가" },
    fees:
      "국내선 20,000원\n국제선 70,000~100,000원\n일본/중국/대만 70,000원 · 동남아/괌/몽골 100,000원",
    routes: "(국내) 전 노선 · (해외) 일본/동남아/괌 등",
    contact: "1600-6200",
    destinations: [],
    maxCabinWeight: 7,
    maxCargoWeight: 0,
    breeds: ["small", "medium"],
  },
  {
    id: "eastar",
    name: "이스타항공 (Eastar Jet)",
    badge: "EASTAR",
    cabin: {
      maxWeight: 9,
      cage: "소프트: (가로+세로+높이) 합 100cm 이하 · 가로 최대 43cm · 높이 25cm 이하\n하드: (가로+세로+높이) 합 100cm 이하 · 가로 최대 37cm · 높이 23cm 이하",
      note: "기내 동반: 생후 8주 이상",
    },
    cargo: { maxWeight: 0, cage: "불가", note: "화물칸 동반 불가" },
    fees:
      "국내선 30,000원\n국제선 일본 120,000원(USD120) · 중국/대만 150,000원(USD150) · 동남아 200,000원(USD200)",
    routes:
      "(국내) 전 노선 · (해외) 일본/타이베이/동남아 등",
    contact: "1544-0080",
    destinations: [],
    maxCabinWeight: 9,
    maxCargoWeight: 0,
    breeds: ["small", "medium"],
  },
  {
    id: "airbusan",
    name: "에어부산 (Air Busan)",
    badge: "AIR BUSAN",
    cabin: {
      maxWeight: 9,
      cage: "기내 케이지: 가로 41cm · 세로 21cm · 높이 24cm 이내",
      note: "기내 동반: 생후 8주 이상",
    },
    cargo: {
      maxWeight: 32,
      cage: "하드 케이지: 3면 합 246cm 이하 · 높이 84cm 이하 (국내선만 가능)",
      note: "화물칸 동반: 국내선만 가능",
    },
    fees:
      "국내선 20,000원 (편도 구간 당)\n국제선 일본/칭다오/시안/옌지/장자제/싼야/홍콩/마카오/타이베이/가오슝 70,000원/70USD\n러시아/동남아/몽골 90,000원/90USD",
    routes: "(국내) 전 노선 · (해외) 일본/동남아 등",
    contact: "1666-3060",
    destinations: [],
    maxCabinWeight: 9,
    maxCargoWeight: 32,
    breeds: ["small", "medium"],
  },
  {
    id: "airpremia",
    name: "에어프레미아 (Air Premia)",
    badge: "AIR PREMIA",
    cabin: {
      maxWeight: 7,
      cage: "소프트: 가로 38cm 이하 · 세로 22cm 이하 · 높이 26cm 이하\n하드: 가로 38cm 이하 · 세로 22cm 이하 · 높이 23cm 이하",
      note: "기내 동반: 생후 8주 이상",
    },
    cargo: {
      maxWeight: 45,
      cage: "하드 케이지: 3면 합 285cm 이하 · 높이 84cm 이하",
      note: "화물칸 동반 가능",
    },
    fees:
      "동북아 KRW 130,000(32kg 이하) / 280,000(33~45kg)\n동남아 KRW 200,000(32kg 이하) / 430,000(33~45kg)\n미주 KRW 280,000(32kg 이하) / 580,000(33~45kg)",
    routes: "(해외) 미주/일본/동남아 등",
    contact: "1800-2626",
    destinations: [],
    maxCabinWeight: 7,
    maxCargoWeight: 45,
    breeds: ["small", "medium"],
  },
  {
    id: "vietnam",
    name: "베트남항공 (Vietnam Airlines)",
    badge: "VIETNAM",
    cabin: {
      maxWeight: 6,
      cage: "기내 케이지: 35×30×20cm 이내",
      note: "기내 동반: 생후 10주 이상",
    },
    cargo: {
      maxWeight: 32,
      cage: "위탁(화물) 동반 가능 (최대 32kg)",
      note: "위탁 동반: 생후 10~12주 이상",
    },
    fees:
      "A 지역 300 USD (베트남/태국/인도네시아/말레이시아/싱가포르/라오스/캄보디아/미얀마/필리핀/홍콩/마카오)\nB 지역 400 USD (대만/중국/한국/일본/인도 등)\nC 지역 600 USD (프랑스/독일/영국/러시아/이탈리아/덴마크/호주/아메리카 및 기타)\nD 지역 650 USD (미국 및 아메리카 대륙 국가)",
    routes: "(해외) 하노이/호치민/다낭/나트랑 등",
    contact: "02-757-8920",
    destinations: [],
    maxCabinWeight: 6,
    maxCargoWeight: 32,
    breeds: ["small", "medium"],
  },
  {
    id: "lufthansa",
    name: "루프트한자 (Lufthansa)",
    badge: "LUFTHANSA",
    reservationNote: "출발 72시간 전까지 예약 필수",
    cabin: {
      maxWeight: 8,
      cage: "기내 케이지: 118cm (55×40×23cm) · 하드 55×40×23cm 이하",
      note:
        "기내 동반: 생후 12주 이상 (독일 출발/도착/경유는 15주 이상 권장 · 미국 도착 반려견 6개월)",
    },
    cargo: { maxWeight: 32, cage: "화물칸 동반 가능 (최대 32kg)", note: "" },
    fees: "항공편별 상이",
    routes: "(해외) 프랑크푸르트/뮌헨 등 유럽 노선",
    contact: "02-6022-4228",
    destinations: [],
    maxCabinWeight: 8,
    maxCargoWeight: 32,
    breeds: ["small", "medium"],
  },
  {
    id: "delta",
    name: "델타항공 (Delta Airlines)",
    badge: "DELTA",
    cabin: {
      maxWeight: 99,
      cage: "하드 케이지(권장): 45×28×28cm",
      note: "기내 동반: 국제선 기준 생후 16주 이상 · 무게 제한 없음",
    },
    cargo: { maxWeight: 0, cage: "불가", note: "화물칸 동반 불가 (별도 카고 서비스만 가능)" },
    fees: "",
    routes: "(해외) 애틀랜타/디트로이트/시애틀 등 미주 노선",
    contact: "0079-8651-7538",
    destinations: [],
    maxCabinWeight: 99,
    maxCargoWeight: 0,
    breeds: ["small", "medium"],
  },
  {
    id: "aircanada",
    name: "에어캐나다 (Air Canada)",
    badge: "AIR CANADA",
    cabin: {
      maxWeight: 10,
      cage:
        "기내 소프트 케이지(기종별 상이)\n- 40×55×27cm 이하 (일부 기종)\n- 40×43×20cm 이하 (A220/A319/A320/A321/A330/737MAX/777/787 등)\n- 21×41×28cm 이하 (A330/777/787 비즈니스 클래스)",
      note: "기내 동반: 생후 10주 이상",
    },
    cargo: {
      maxWeight: 45,
      cage: "화물칸 케이지: 선형치수 292cm(115인치) (길이+너비+높이)",
      note: "화물칸 동반: 생후 12주 이상",
    },
    fees: "기내 $100~$120 · 화물칸 $270~$324",
    routes: "(해외) 밴쿠버/토론토 등 캐나다 노선",
    contact: "02-3788-0100",
    destinations: [],
    maxCabinWeight: 10,
    maxCargoWeight: 45,
    breeds: ["small", "medium"],
  },
  {
    id: "finnair",
    name: "핀에어 (Finnair)",
    badge: "FINNAIR",
    cabin: {
      maxWeight: 8,
      cage: "소프트: 55×40×23cm · 하드: 35×30×20cm",
      note: "기내 동반: 생후 12주 이상 권장",
    },
    cargo: {
      maxWeight: 75,
      cage: "화물칸 하드 케이지: 122×81×89cm",
      note: "",
    },
    fees: "기내 60~130유로 · 화물 140~650유로 (노선별 상이)",
    routes: "(해외) 헬싱키 및 유럽 노선",
    contact: "02-3455-8000",
    destinations: [],
    maxCabinWeight: 8,
    maxCargoWeight: 75,
    breeds: ["small", "medium"],
  },
];

// 쇼핑 카드 샘플 데이터
const shopItems = [
  {
    id: "carry-1",
    brand: "WITH PAW",
    name: "기내용 소프트 캐리어",
    price: 89000,
    originalPrice: 99000,
    discount: 10,
    likes: 1933,
    reviews: 0,
    rating: 0,
    badge: "GIFT SET",
    category: "carrier",
    image:
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "carry-2",
    brand: "WITH PAW",
    name: "에어 라이트 하드쉘",
    price: 156000,
    originalPrice: 183000,
    discount: 15,
    likes: 16154,
    reviews: 971,
    rating: 5,
    badge: "BEST",
    category: "carrier",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "carry-3",
    brand: "WITH PAW",
    name: "슬림 트래블 캐리어",
    price: 129000,
    originalPrice: null,
    discount: 0,
    likes: 1039,
    reviews: 0,
    rating: 0,
    badge: "NEW",
    category: "carrier",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "popular-1",
    brand: "WITH PAW",
    name: "미니 트래블 키트",
    price: 57200,
    originalPrice: 65000,
    discount: 12,
    likes: 11652,
    reviews: 1115,
    rating: 5,
    badge: "HOT",
    category: "popular",
    image:
      "https://images.unsplash.com/photo-1474690455603-a369ec1293d0?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "popular-2",
    brand: "WITH PAW",
    name: "프리미엄 보울 세트",
    price: 28900,
    originalPrice: null,
    discount: 0,
    likes: 1039,
    reviews: 0,
    rating: 0,
    badge: "SET",
    category: "popular",
    image:
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "popular-3",
    brand: "WITH PAW",
    name: "에어 쿠션 트래블 매트",
    price: 74200,
    originalPrice: 82000,
    discount: 9,
    likes: 8421,
    reviews: 322,
    rating: 4,
    badge: "추천",
    category: "popular",
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "kit-1",
    brand: "WITH PAW",
    name: "올인원 트래블 키트",
    price: 92000,
    originalPrice: 114000,
    discount: 19,
    likes: 5820,
    reviews: 210,
    rating: 4,
    badge: "SET",
    category: "kit",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "kit-2",
    brand: "WITH PAW",
    name: "라이트 트래블 파우치",
    price: 28600,
    originalPrice: 32000,
    discount: 10,
    likes: 2140,
    reviews: 42,
    rating: 4,
    badge: "NEW",
    category: "kit",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  },
];

// 모바일 하단 네비게이션 버튼
const bottomNav = [
  { label: "홈", icon: "home", href: "index.html" },
  { label: "검색", icon: "search", href: "#" },
  { label: "항공정보", icon: "flight_takeoff", href: "airline.html" },
  { label: "추천장소", icon: "place", href: "daily.html" },
  { label: "마이페이지", icon: "person", href: "#" },
];

// 화면 상태(현재 선택/필터)
let currentAirlines = [...airlineData];
let currentShopItems = [...shopItems];
const shopState = { category: "all", sort: "recommend" };

// ---------------------------
// DOM 루트: HTML에서 id로 연결되는 영역
// ---------------------------
const heroEl = document.getElementById("hero");
const dailyEl = document.getElementById("daily");
const dailyPageEl = document.getElementById("daily-page");
const placesEl = document.getElementById("places");
const airlineEl = document.getElementById("airline");
const mobileNavEl = document.getElementById("mobile-nav");
const bottomSheetEl = document.getElementById("bottom-sheet");
bottomSheetEl?.classList.add("hidden");
const pageType = document.body?.dataset?.page;

// ---------------------------
// 렌더 함수: 데이터 → HTML 문자열 생성
// ---------------------------
// 히어로 섹션 생성
function renderHero() {
  heroEl.innerHTML = `
    <!-- Hero section: 타이틀 + 검색 필터 -->
    <div class="hero-stage shadow-soft" style="background-image:url('${heroSlides[0].image}')">
      <div class="relative z-10 flex h-full flex-col justify-start gap-6 px-8 py-[50px] text-ink">
        <span class="hero-tag inline-flex w-fit max-w-[1136px] items-center gap-2 rounded-full bg-white/80 px-4 py-1 text-[10px] uppercase tracking-[0.35em] text-deep">
          FLIGHT RULES
        </span>
        <div>
          <h1 class="hero-title text-3xl font-semibold md:text-4xl">항공사별 탑승 규정</h1>
          <p class="mt-2 max-w-xl text-sm text-slate-600">견종 · 나이 · 무게를 선택하면 가능한 항공사를 안내합니다.</p>
        </div>
        <div class="mx-auto flex w-full flex-col gap-3 rounded-2xl bg-white/90 px-4 py-4 text-ink">
          <div class="flex flex-wrap items-center justify-center gap-3">
            <label class="grid min-w-[160px] flex-1 gap-1 text-xs">
              출발지
              <select id="hero-departure" class="w-full rounded-xl border border-line px-4 py-2 pr-10 text-sm">
                <option value="icn">인천 (ICN)</option>
                <option value="gmp">김포 (GMP)</option>
                <option value="pus">부산 (PUS)</option>
                <option value="cju">제주 (CJU)</option>
                <option value="tae">대구 (TAE)</option>
              </select>
            </label>
            <label class="grid min-w-[160px] flex-1 gap-1 text-xs">
              도착지
              <select id="hero-destination" class="w-full rounded-xl border border-line px-4 py-2 pr-10 text-sm">
                ${destinationOptionsMarkup}
              </select>
            </label>
            <label class="grid min-w-[160px] flex-1 gap-1 text-xs">
              몸무게(기내탑승 기준)
              <select id="hero-weight" class="w-full rounded-xl border border-line px-4 py-2 pr-10 text-sm">
                <option value="5">5kg 이하</option>
                <option value="7">7kg 이하</option>
                <option value="9">9kg 이하</option>
                <option value="12">12kg 이하</option>
                <option value="20">20kg 이하</option>
              </select>
            </label>
          </div>
          <p class="text-center text-xs text-slate-400">반려동물 탑승 규정은 달라질 수 있으므로, 각 항공사에 사전 문의 바랍니다.</p>
        </div>
        <div class="flex w-full flex-wrap justify-center gap-3">
          <button id="hero-search" class="float-cta rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-soft">
            지금 우리 아이와 떠나기
          </button>
        </div>
      </div>
      <div class="hero-overlay"></div>
    </div>
  `;
}

const travelSpots = [
  {
    title: "제주 애월 해안 산책길",
    location: "제주 · 애월",
    category: "domestic",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "강릉 바다 앞 힐링 코스",
    location: "강원 · 강릉",
    category: "domestic",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "남해 독일마을 뷰 포인트",
    location: "경남 · 남해",
    category: "domestic",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "가평 숲길 캠핑 스팟",
    location: "경기 · 가평",
    category: "domestic",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "부산 해운대 펫 프렌들리",
    location: "부산 · 해운대",
    category: "domestic",
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "속초 바다 전망 드라이브",
    location: "강원 · 속초",
    category: "domestic",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "오사카 강변 산책 루트",
    location: "일본 · 오사카",
    category: "overseas",
    image:
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "바르셀로나 해안 산책",
    location: "스페인 · 바르셀로나",
    category: "overseas",
    image:
      "https://images.unsplash.com/photo-1495562569060-2eec283d3391?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "시드니 하버 루트",
    location: "호주 · 시드니",
    category: "overseas",
    image:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "하롱베이 크루즈 뷰",
    location: "베트남 · 하롱베이",
    category: "overseas",
    image:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "밴쿠버 해안 산책",
    location: "캐나다 · 밴쿠버",
    category: "overseas",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "베네치아 운하 루트",
    location: "이탈리아 · 베네치아",
    category: "overseas",
    image:
      "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "유럽 감성 시티워크",
    location: "유럽 · 로망 코스",
    category: "overseas",
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=900&q=80",
  },
];

const dailyThemes = [
  {
    title: "날씨 걱정 No! 실내 애견동반 카페",
    image: "3.thumbnail_notebook.png",
    tags: ["카공족", "실내동반 가능"],
  },
  {
    title: "실내동반 가능! 애견동반 식당",
    image: "0.thumbnail_food.png",
    tags: ["실내동반 가능"],
  },
  {
    title: "애견동반 가능한 축제 | 전시회",
    image: "2.thumbnail_festival.png",
    tags: ["축제/전시"],
  },
  {
    title: "아이와 강아지가 함께 즐길 수 있는 곳",
    image: "4.thumbnail_kids.png",
    tags: ["아이와 함께", "천연잔디", "자연과 함께"],
  },
  {
    title: "꼼꼼한 관리와 천연잔디는 기본!<br/>추천 애견운동장",
    image: "5.thumbnail_play.png",
    tags: ["오프리쉬 가능", "천연잔디", "자연과 함께"],
  },
  {
    title: "강아지와 함께 자연 즐기기",
    image: "6.thumbnail_hiking.png",
    tags: ["천연잔디", "자연과 함께"],
  },
];

const dailyPlaces = [
  {
    title: "스테이포레스트 카페",
    location: "서울 · 강남",
    region: "서울",
    category: "카페",
    tags: ["실내동반 가능", "카공족"],
    image:
      "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "햇살 실내 펫카페",
    location: "서울 · 송파",
    region: "서울",
    category: "카페",
    tags: ["실내동반 가능", "카공족"],
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "펫프렌들리 아트페어",
    location: "서울 · 마포",
    region: "서울",
    category: "카페",
    tags: ["축제/전시", "아이와 함께"],
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "아이와 함께 놀이터 파크",
    location: "경기 · 수원",
    region: "경기남부",
    category: "리조트/펜션",
    tags: ["아이와 함께", "천연잔디", "자연체험"],
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "천연잔디 애견운동장",
    location: "경기 · 고양",
    region: "경기북부",
    category: "리조트/펜션",
    tags: ["천연잔디", "자연체험", "오프리쉬 가능"],
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "오프리쉬 펫런 파크",
    location: "경기 · 광주",
    region: "경기남부",
    category: "리조트/펜션",
    tags: ["자연체험", "오프리쉬 가능"],
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "루프탑 펫존 카페",
    location: "부산 · 해운대",
    region: "부산",
    category: "카페",
    tags: ["카공족", "실내동반 가능"],
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "리빙 전시 & 펫마켓",
    location: "서울 · 목동",
    region: "서울",
    category: "카페",
    tags: ["실내동반 가능", "축제/전시", "아이와 함께"],
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "자연 힐링 캠핑장",
    location: "경기 · 가평",
    region: "경기북부",
    category: "리조트/펜션",
    tags: ["캠핑장", "자연체험"],
    image:
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "제주 펫프렌들리 카페",
    location: "제주 · 애월",
    region: "제주",
    category: "카페",
    tags: ["실내동반 가능", "자연체험"],
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "남양주 힐링 캠프",
    location: "남양주",
    region: "남양주",
    category: "리조트/펜션",
    tags: ["캠핑장", "자연체험", "천연잔디"],
    image:
      "https://images.unsplash.com/photo-1533873984035-25970ab07461?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "펫프렌들리 브런치 레스토랑",
    location: "서울 · 성수",
    region: "서울",
    category: "식당",
    tags: ["실내동반 가능", "아이와 함께"],
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "가든 테라스 식당",
    location: "경기 · 용인",
    region: "경기남부",
    category: "식당",
    tags: ["실내동반 가능", "자연체험"],
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80",
  },
];

// 항공사 규정 + 쇼핑 섹션 생성
function renderAirlines(airlines = currentAirlines) {
  currentAirlines = airlines;

  if (pageType !== "airline") {
    airlineEl.innerHTML = `
      <!-- Travel recommendations (숨김 처리) -->
      <div class="hidden rounded-[32px] border border-line bg-white p-8 text-ink shadow-card" id="shopping">
        <div class="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p class="text-xs uppercase tracking-[0.4em] text-slate-500">Recommended</p>
            <h2 class="mt-2 text-3xl font-semibold text-deep">추천 여행지</h2>
            <p class="mt-2 text-sm text-slate-500">반려견과 함께 가기 좋은 여행지를 모았어요.</p>
          </div>
          <div class="flex items-center gap-2 rounded-full border border-line bg-white p-1 text-xs">
            <button class="travel-tab rounded-full bg-deep px-4 py-2 font-semibold text-white" data-category="domestic">
              국내
            </button>
            <button class="travel-tab rounded-full px-4 py-2 font-semibold text-slate-500" data-category="overseas">
              해외
            </button>
          </div>
        </div>
        <div id="travel-grid" class="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3"></div>
      </div>
    `;
    return;
  }

  airlineEl.innerHTML = `
    <!-- Airline section: 규정 + 항공사 목록 -->
    <div class="rounded-[32px] border border-line bg-white p-8 text-ink shadow-card" id="shopping">
      <div class="flex flex-wrap items-start justify-between gap-6">
        <div>
          <p class="text-xs uppercase tracking-[0.4em] text-slate-500">Flight rules</p>
          <h2 class="mt-2 text-3xl font-semibold text-deep">항공사별 탑승 규정</h2>
          <p class="mt-2 text-sm text-slate-500">견종 · 나이 · 무게를 선택하면 가능한 항공사를 안내합니다.</p>
          <p class="mt-2 text-xs text-slate-400">반려동물 탑승 규정은 달라질 수 있으므로, 각 항공사에 사전 문의 바랍니다.</p>
        </div>
        <div class="flex gap-2"></div>
      </div>

      <!-- Rule panel: 필터/규정 UI -->
      <div class="view-panel tab-panel active mt-6" data-view-panel="rules">
        <div class="grid gap-4 rounded-2xl border border-line bg-slate-50 p-4 text-sm">
          <div class="grid justify-items-center gap-3 sm:grid-cols-3 sm:justify-items-stretch">
            <label class="grid gap-2">
              출발지
              <select id="departure-select" class="rounded-xl border border-line bg-white px-3 py-2 text-sm">
                <option value="icn">인천 (ICN)</option>
                <option value="gmp">김포 (GMP)</option>
                <option value="pus">부산 (PUS)</option>
                <option value="cju">제주 (CJU)</option>
                <option value="tae">대구 (TAE)</option>
              </select>
            </label>
            <label class="grid gap-2">
              도착지
              <select id="destination-select" class="rounded-xl border border-line bg-white px-3 py-2 text-sm">
                ${destinationOptionsMarkup}
              </select>
            </label>
            <label class="grid gap-2">
              몸무게(기내탑승 기준)
              <select id="weight-select" class="rounded-xl border border-line bg-white px-3 py-2 text-sm">
                <option value="5">5kg 이하</option>
                <option value="7">7kg 이하</option>
                <option value="9">9kg 이하</option>
                <option value="12">12kg 이하</option>
                <option value="20">20kg 이하</option>
              </select>
            </label>
            <button
              id="rules-search"
              class="w-fit rounded-full bg-deep px-20 py-2 text-sm font-semibold text-white shadow-soft sm:col-start-2 sm:justify-self-center"
            >
              항공사 검색
            </button>
            <p class="text-center text-xs text-slate-500 sm:col-span-3">
              검색 버튼을 누르면 결과 페이지에서 항공사 규정을 확인할 수 있어요.
            </p>
          </div>
          <div class="flex items-center justify-end gap-4">
            <button id="open-sheet" class="rounded-full border border-line px-4 py-2 text-xs text-slate-500 md:hidden">
              필터 열기
            </button>
          </div>
        </div>

      </div>

      <div class="mt-10">
        <p class="text-xs uppercase tracking-[0.4em] text-slate-500">Directory</p>
        <h3 class="mt-2 text-xl font-semibold text-deep">항공사 규정 한눈에 보기</h3>
        <p class="mt-2 text-sm text-slate-500">아래 정보는 flight.text 기준으로 정리했습니다.</p>
        <div class="mt-6 grid gap-4 md:grid-cols-2">
          ${currentAirlines
            .map((airline) => {
              const lines = (airline.fees || "")
                .split("\n")
                .map((l) => l.trim())
                .filter(Boolean)
                .slice(0, 6);
              return `
              <article class="rounded-2xl border border-line bg-white p-5">
                <div class="flex items-start justify-between gap-4">
                  <div>
                    <h4 class="text-base font-semibold text-deep">${airline.name}</h4>
                    <p class="mt-1 text-xs text-slate-400">${airline.badge || ""}</p>
                    ${airline.reservationNote ? `<p class="mt-2 text-xs text-slate-500">${airline.reservationNote}</p>` : ""}
                    ${airline.routes ? `<p class="mt-2 text-xs text-slate-500">${airline.routes}</p>` : ""}
                  </div>
                  ${airline.contact ? `<span class="whitespace-nowrap rounded-full bg-slate-50 px-3 py-2 text-xs text-slate-600">문의 ${airline.contact}</span>` : ""}
                </div>
                <div class="mt-4 grid gap-3 text-xs text-slate-600 sm:grid-cols-2">
                  <div class="rounded-xl bg-slate-50 p-3">
                    <p class="font-semibold text-deep">기내 동반</p>
                    <p class="mt-1">무게: ${airline.cabin?.maxWeight >= 99 ? "제한 없음" : `${airline.cabin?.maxWeight}kg 이하`}</p>
                    ${airline.cabin?.cage ? `<p class="mt-1 whitespace-pre-line">케이지: ${airline.cabin.cage}</p>` : ""}
                    ${airline.cabin?.note ? `<p class="mt-2 text-xs text-slate-500">${airline.cabin.note}</p>` : ""}
                  </div>
                  ${renderCargoBlock(airline)}
                </div>
                ${
                  lines.length
                    ? `<div class="mt-4 rounded-xl border border-line bg-white p-3 text-xs text-slate-600">
                        <p class="font-semibold text-deep">요금</p>
                        <ul class="mt-2 grid gap-1">
                          ${lines.map((l) => `<li>• ${l}</li>`).join("")}
                        </ul>
                      </div>`
                    : ""
                }
              </article>
            `;
            })
            .join("")}
        </div>
      </div>

    </div>
  `;
}

// 검색 결과 페이지 렌더
function renderCargoBlock(airline) {
  const cargo = airline?.cargo;
  const cargoBlocked =
    !cargo ||
    !cargo.maxWeight ||
    cargo.maxWeight <= 0 ||
    (typeof cargo.cage === "string" && cargo.cage.includes("불가"));

  if (cargoBlocked) {
    return `
      <div class="rounded-xl bg-slate-50 p-3">
        <p class="font-semibold text-deep">화물칸 동반</p>
        <p class="mt-1">화물칸 동반 불가</p>
      </div>
    `;
  }

  return `
    <div class="rounded-xl bg-slate-50 p-3">
      <p class="font-semibold text-deep">화물칸 동반</p>
      <p class="mt-1">무게: ${cargo.maxWeight}kg 이하</p>
      <p class="mt-1">케이지: ${cargo.cage}</p>
      ${cargo?.note ? `<p class="mt-1 text-xs text-slate-500">${cargo.note}</p>` : ""}
    </div>
  `;
}

function renderResultsPage() {
  const rootEl = document.getElementById("results-root");
  if (!rootEl) return;

  const params = new URLSearchParams(window.location.search);
  const breed = params.get("breed") || "small";
  const weight = Number(params.get("weight") || 5);
  const age = params.get("age") || "puppy";
  const destination = params.get("destination") || "any";
  const eligible = currentAirlines.filter((airline) => {
    const cabinOk =
      airline.maxCabinWeight >= weight && airline.breeds.includes(breed) && breed !== "large";
    const destinationOk =
      destination === "any" || (airline.destinations || []).includes(destination);
    return cabinOk && destinationOk;
  });

  const breedLabel = breed === "small" ? "소형견" : breed === "medium" ? "중형견" : "대형견";
  const ageLabel = age === "puppy" ? "1살 이하" : age === "senior" ? "7살 이상" : "1~7살";
  const destinationLabel = destinationLabelMap[destination] || destination.toUpperCase();

  rootEl.innerHTML = `
    <main class="mx-auto flex w-[min(1000px,92%)] flex-col gap-8 pb-20 pt-10">
      <div class="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p class="text-xs uppercase tracking-[0.35em] text-slate-400">Search Results</p>
          <h1 class="mt-2 text-3xl font-semibold text-deep">탑승 가능 항공사</h1>
          <p class="mt-2 text-sm text-slate-500">${weight}kg · ${ageLabel} · ${destinationLabel}</p>
          <p class="mt-2 text-xs text-slate-400">반려동물 탑승 규정은 달라질 수 있으므로, 각 항공사에 사전 문의 바랍니다.</p>
        </div>
      </div>

      <div id="results-loading" class="results-loading">
        <p class="text-xs uppercase tracking-[0.35em] text-slate-400">Loading</p>
        <div class="results-spinner"></div>
        <div id="results-airlines" class="results-airlines"></div>
      </div>

      <div id="results-content" class="hidden">
        <div id="results-list" class="grid gap-4 md:grid-cols-2"></div>
      </div>
    </main>
  `;

  const loadingEl = rootEl.querySelector("#results-loading");
  const contentEl = rootEl.querySelector("#results-content");
  const airlinesEl = rootEl.querySelector("#results-airlines");
  const listEl = rootEl.querySelector("#results-list");

  airlinesEl.innerHTML = (eligible.length ? eligible : currentAirlines)
    .map(
      (airline, idx) =>
        `<span class="results-airline" style="--delay:${idx * 0.12}s">${airline.name}</span>`
    )
    .join("");

  const cardsMarkup = eligible.length
    ? eligible
        .map(
          (airline) => `
        <article class="rounded-2xl border border-line bg-white p-5">
          <div class="flex items-center justify-between">
            <h4 class="text-base font-semibold text-deep">${airline.name}</h4>
            <span class="text-xs text-slate-400">${airline.badge}</span>
          </div>
          <div class="mt-3 grid gap-3 text-xs text-slate-500 sm:grid-cols-2">
            <div class="rounded-xl bg-slate-50 p-3">
              <p class="font-semibold text-deep">기내 동반</p>
              <p class="mt-1">무게: ${airline.cabin.maxWeight}kg 미만</p>
              <p class="mt-1">케이지: ${airline.cabin.cage}</p>
              ${airline.contact ? `<p class="mt-1">사전예약 및 안내: ${airline.contact}</p>` : ""}
            </div>
            ${renderCargoBlock(airline)}
          </div>
        </article>
      `
        )
        .join("")
    : `<div class="rounded-2xl border border-line bg-slate-50 p-4 text-sm text-slate-400">조건에 맞는 항공사가 없습니다.</div>`;

  setTimeout(() => {
    loadingEl.classList.add("hidden");
    contentEl.classList.remove("hidden");
    listEl.innerHTML = cardsMarkup;
  }, 1200);
}

function renderDailyCarousel() {
  if (!dailyEl) return;
  dailyEl.innerHTML = `
    <div class="rounded-[32px] bg-white p-8 text-ink shadow-card">
      <div class="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p class="text-xs uppercase tracking-[0.4em] text-slate-500">Daily themes</p>
          <h2 class="mt-2 text-3xl font-semibold text-deep">추천 일상 테마</h2>
          <p class="mt-2 text-sm text-slate-500">반려견과 함께 즐길 수 있는 테마를 모았어요.</p>
        </div>
      </div>
      <div class="daily-banners mt-6">
        ${dailyThemes
          .map((theme) => {
            const imageSrc = theme.image.startsWith("http")
              ? theme.image
              : `${theme.image}?v=2026`;
            return `
          <article class="daily-banner">
            <img src="${imageSrc}" alt="${theme.title}" />
            <div class="daily-banner__overlay">
              <h3>${theme.title}</h3>
            </div>
          </article>
        `;
          })
          .join("")}
      </div>
    </div>
  `;
}

function renderDailyPanel(targetEl) {
  if (!targetEl) return;
  const filterTags = [
    "실내동반 가능",
    "오프리쉬 가능",
    "카공족",
    "아이와 함께",
    "천연잔디",
    "자연체험",
    "캠핑장",
    "축제/전시",
  ];
  const categoryOptions = [
    "전체",
    "카페",
    "호텔",
    "리조트/펜션",
    "식당",
  ];
  const regionOptions = [
    "전체",
    "서울",
    "경기북부",
    "경기남부",
    "인천",
    "남양주",
    "여주",
    "춘천",
    "대구",
    "대전",
    "목포",
    "부산",
    "제주",
    "해외",
  ];

  targetEl.innerHTML = `
    <div class="rounded-[32px] bg-white p-8 text-ink">
      <div>
        <p class="text-xs uppercase tracking-[0.4em] text-slate-500">Daily spots</p>
        <h2 class="mt-2 text-3xl font-semibold text-deep">찐 반려인들이 검증한 추천 장소</h2>
        <p class="mt-2 text-sm text-slate-500">반려동물과 함께 행복한 일상을 만들어보세요.</p>
      </div>
      <div class="tag-filter mt-5">
        <div class="filter-dropdown">
          <select id="category-filter" class="tag-chip-select">
            ${categoryOptions.map((cat) => `<option value="${cat}">${cat === "전체" ? "카테고리" : cat}</option>`).join("")}
          </select>
          <img src="Chevron down.png" alt="" class="filter-dropdown__icon" />
        </div>
        <div class="filter-dropdown">
          <select id="region-filter" class="tag-chip-select">
            ${regionOptions.map((region) => `<option value="${region}">${region === "전체" ? "지역" : region}</option>`).join("")}
          </select>
          <img src="Chevron down.png" alt="" class="filter-dropdown__icon" />
        </div>
        ${filterTags.map((tag) => `<button class="tag-chip" data-tag="${tag}">${tag}</button>`).join("")}
      </div>
      <div id="daily-grid" class="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3"></div>
    </div>
  `;

  const gridEl = targetEl.querySelector("#daily-grid");
  const tags = Array.from(targetEl.querySelectorAll(".tag-chip"));
  const categorySelect = targetEl.querySelector("#category-filter");
  const regionSelect = targetEl.querySelector("#region-filter");
  const activeTags = new Set();
  let activeCategory = "전체";
  let activeRegion = "전체";

  // Supabase에서 장소 데이터 로드 후 병합
  async function loadSupabasePlaces() {
    if (typeof supabaseClient === 'undefined') return;
    try {
      const { data, error } = await supabaseClient
        .from('places')
        .select('*')
        .order('id', { ascending: false });
      if (error) { console.error('Supabase 장소 로드 에러:', error); return; }
      if (!data || data.length === 0) return;

      // Supabase 데이터를 dailyPlaces 형식으로 변환
      const supabasePlaces = data.map(p => {
        let parsedTags = p.tags || [];
        if (typeof parsedTags === 'string') {
          try { parsedTags = JSON.parse(parsedTags); } catch(e) { parsedTags = parsedTags.split(',').map(t => t.trim()).filter(Boolean); }
        }
        // location에서 region 추출
        const locParts = (p.location || '').split('·').map(s => s.trim());
        const region = locParts[0] || '';
        return {
          id: p.id,
          title: p.title,
          location: p.location || '',
          region: region,
          category: p.category || '',
          tags: parsedTags,
          image: p.image_url || '',
          address: p.address || '',
          fromSupabase: true
        };
      });

      // 기존 하드코딩 데이터에서 Supabase에 같은 이름이 있으면 교체
      const supabaseTitles = new Set(supabasePlaces.map(p => p.title));
      const filteredHardcoded = dailyPlaces.filter(p => !supabaseTitles.has(p.title));
      
      // Supabase 데이터를 앞에, 하드코딩 데이터를 뒤에
      dailyPlaces.length = 0;
      dailyPlaces.push(...supabasePlaces, ...filteredHardcoded);
      
      console.log('Supabase 장소 병합 완료:', supabasePlaces.length, '건');
      renderDailyGrid();
    } catch (err) {
      console.error('Supabase 장소 로드 실패:', err);
    }
  }

  loadSupabasePlaces();

  function renderDailyGrid() {
    let filtered = dailyPlaces;
    
    // 태그 필터링
    if (activeTags.size) {
      filtered = filtered.filter((place) => [...activeTags].every((tag) => place.tags.includes(tag)));
    }
    
    // 카테고리 필터링
    if (activeCategory && activeCategory !== "전체") {
      filtered = filtered.filter((place) => place.category === activeCategory);
    }
    
    // 지역 필터링
    if (activeRegion && activeRegion !== "전체") {
      filtered = filtered.filter((place) => place.region === activeRegion);
    }
    
    gridEl.innerHTML = filtered
      .map(
        (place) => `
        <article class="daily-place" data-id="${place.id || ''}" data-title="${place.title}" data-image="${place.image}" data-location="${place.location}" data-category="${place.category || ''}" data-tags="${(place.tags || []).join(',')}">
          <div class="daily-place__media">
            <img class="daily-place__like-icon" src="${typeof LikesManager !== 'undefined' && LikesManager.isLiked(place.title) ? 'base-icon-heart-selected.svg' : 'base-icon-heart.svg'}" alt="좋아요" />
            <img src="${place.image}" alt="${place.title}" />
          </div>
          <div class="daily-place__body">
            <p class="daily-place__location">${place.location}</p>
            <h3>${place.title}</h3>
            <div class="daily-place__tags">
              ${place.tags.map((tag) => `<span>${tag}</span>`).join("")}
            </div>
          </div>
        </article>
      `
      )
      .join("");

    // 좋아요 아이콘 클릭 이벤트 + localStorage 저장
    gridEl.querySelectorAll('.daily-place__like-icon').forEach(icon => {
      icon.addEventListener('click', (e) => {
        e.stopPropagation();
        const card = icon.closest('.daily-place');
        const placeData = {
          title: card.dataset.title || '',
          image: card.dataset.image || '',
          location: card.dataset.location || '',
          tags: (card.dataset.tags || '').split(',').filter(Boolean),
          category: card.dataset.category || '',
        };
        if (typeof LikesManager !== 'undefined') {
          const liked = LikesManager.toggle(placeData);
          icon.src = liked ? 'base-icon-heart-selected.svg' : 'base-icon-heart.svg';
        } else {
          const isSelected = icon.src.includes('selected');
          icon.src = isSelected ? 'base-icon-heart.svg' : 'base-icon-heart-selected.svg';
        }
      });
    });

    // 카드 클릭 시 상세페이지로 이동
    gridEl.querySelectorAll('.daily-place').forEach(card => {
      card.style.cursor = 'pointer';
      card.addEventListener('click', (e) => {
        // 좋아요 아이콘 클릭은 제외
        if (e.target.classList.contains('daily-place__like-icon')) return;
        const title = card.dataset.title;
        const image = card.dataset.image;
        const location = card.dataset.location;
        const placeId = card.dataset.id;
        const params = new URLSearchParams({ title, image, category: location });
        if (placeId) params.set('id', placeId);
        window.location.href = 'detail.html?' + params.toString();
      });
    });
  }

  tags.forEach((tagBtn) => {
    tagBtn.addEventListener("click", () => {
      const tag = tagBtn.dataset.tag;
      if (activeTags.has(tag)) {
        activeTags.clear();
        tags.forEach((btn) => btn.classList.remove("active"));
      } else {
        activeTags.clear();
        tags.forEach((btn) => btn.classList.remove("active"));
        activeTags.add(tag);
        tagBtn.classList.add("active");
      }
      renderDailyGrid();
    });
  });

  // 카테고리 필터 이벤트
  if (categorySelect) {
    categorySelect.addEventListener("change", (e) => {
      activeCategory = e.target.value;
      if (activeCategory !== "전체") {
        categorySelect.classList.add("active");
      } else {
        categorySelect.classList.remove("active");
      }
      renderDailyGrid();
    });
  }

  // 지역 필터 이벤트
  if (regionSelect) {
    regionSelect.addEventListener("change", (e) => {
      activeRegion = e.target.value;
      if (activeRegion !== "전체") {
        regionSelect.classList.add("active");
      } else {
        regionSelect.classList.remove("active");
      }
      renderDailyGrid();
    });
  }

  renderDailyGrid();
}

function renderDailyPage() {
  renderDailyPanel(dailyPageEl);
}


function renderTravelGrid(category = "domestic") {
  const gridEl = document.getElementById("travel-grid");
  if (!gridEl) return;
  const filtered = travelSpots.filter((spot) => spot.category === category);
  gridEl.innerHTML = filtered
    .map(
      (spot) => `
      <article class="overflow-hidden rounded-2xl border border-line bg-white shadow-card">
        <div class="aspect-[4/3] w-full overflow-hidden">
          <img src="${spot.image}" alt="${spot.title}" class="h-full w-full object-cover" />
        </div>
        <div class="p-4">
          <p class="text-xs uppercase tracking-[0.2em] text-slate-400">${spot.location}</p>
          <h3 class="mt-2 text-base font-semibold text-deep">${spot.title}</h3>
          <p class="mt-2 text-xs text-slate-500">산책, 식사, 숙소까지 펫 프렌들리 루트</p>
        </div>
      </article>
    `
    )
    .join("");
}

function setupTravelTabs() {
  const tabs = document.querySelectorAll(".travel-tab");
  if (!tabs.length) return;
  let currentCategory = "domestic";
  renderTravelGrid(currentCategory);
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((item) => {
        item.classList.remove("bg-deep", "text-white");
        item.classList.add("text-slate-500");
      });
      tab.classList.add("bg-deep", "text-white");
      tab.classList.remove("text-slate-500");
      currentCategory = tab.dataset.category;
      renderTravelGrid(currentCategory);
    });
  });
}

// 모바일 하단 네비게이션 생성
function renderMobileNav() {
  const current = window.location.pathname.split("/").pop() || "index.html";
  mobileNavEl.innerHTML = `
    <!-- Mobile bottom nav -->
    <div class="fixed bottom-0 left-0 right-0 z-30 flex bg-white/90 px-4 py-3 text-xs text-slate-500 shadow-card md:hidden">
      ${bottomNav
        .map(
          (item) => `
          <a href="${item.href}" class="flex w-full flex-col items-center gap-1 ${
            item.href === current ? "text-brand" : ""
          }">
            <span class="material-icons">${item.icon}</span>
            <span>${item.label}</span>
          </a>
        `
        )
        .join("")}
    </div>
  `;
}

// ---------------------------
// 인터랙션 로직: 클릭/변경 이벤트 연결
// ---------------------------
// 히어로 슬라이드(현재는 사용하지 않음)
function setupHeroCarousel() {
  return;
}

// 이벤트용 카운트다운(샘플 기능)
function setupCountdown() {
  const countdownEl = document.getElementById("countdown");
  if (!countdownEl) return;
  let remaining = 2 * 3600 + 58 * 60 + 42;

  setInterval(() => {
    remaining = remaining > 0 ? remaining - 1 : 0;
    const hours = String(Math.floor(remaining / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((remaining % 3600) / 60)).padStart(2, "0");
    const seconds = String(remaining % 60).padStart(2, "0");
    countdownEl.textContent = `${hours}:${minutes}:${seconds}`;
  }, 1000);
}

// 로딩 스켈레톤 제거 타이밍
function setupSkeletons() {
  setTimeout(() => {
    document.querySelectorAll(".loading").forEach((card) => {
      card.classList.remove("loading");
    });
  }, 1200);
}

// 항공사 탭(규정 카드 전환)
function setupAirlineTabs() {
  const tabs = airlineEl.querySelectorAll(".airline-tabs button");
  const panels = airlineEl.querySelectorAll(".airline-card");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((item) => item.classList.remove("active"));
      tab.classList.add("active");
      panels.forEach((panel) => {
        panel.classList.toggle("active", panel.dataset.panel === tab.dataset.airline);
      });
    });
  });
}

// 규정/쇼핑 탭 전환(상단 보기 버튼)
function setupViewTabs() {
  const viewTabs = airlineEl.querySelectorAll(".view-tab");
  const panels = airlineEl.querySelectorAll(".view-panel");

  viewTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      viewTabs.forEach((item) => {
        item.classList.remove("bg-deep", "text-white");
        item.classList.add("border", "border-line", "text-slate-500");
      });
      tab.classList.add("bg-deep", "text-white");
      tab.classList.remove("border", "border-line", "text-slate-500");
      panels.forEach((panel) => {
        panel.classList.toggle(
          "active",
          panel.dataset.viewPanel === tab.dataset.view
        );
      });
    });
  });
}

// 필터 결과 렌더 함수(아래에서 실제 로직 지정)
let renderEligibleList = () => {};

// 필터 조건에 따라 항공사 목록 업데이트
function setupEligibilityFilter() {
  const breedSelect = document.getElementById("breed-select");
  const weightSelect = document.getElementById("weight-select");
  const ageSelect = document.getElementById("age-select");
  const destinationSelect = document.getElementById("destination-select");
  const rulesSearchBtn = document.getElementById("rules-search");

  renderEligibleList = function () {
    const cardsEl = document.getElementById("eligible-cards");
    if (!cardsEl) return;
    const breed = breedSelect?.value || "small";
    const weight = Number(weightSelect?.value || 5);
    const age = ageSelect?.value || "adult";
    const destination = destinationSelect?.value || "any";
    const eligible = currentAirlines.filter((airline) => {
      const cabinOk =
        airline.maxCabinWeight >= weight && airline.breeds.includes(breed) && breed !== "large";
      const destinationOk =
        destination === "any" || (airline.destinations || []).includes(destination);
      return cabinOk && destinationOk;
    });
    cardsEl.innerHTML = eligible.length
      ? eligible
          .map(
            (airline) => `
            <article class="rounded-2xl border border-line bg-white p-4">
              <div class="flex items-center justify-between">
                <h4 class="text-sm font-semibold text-deep">${airline.name}</h4>
                <span class="text-xs text-slate-400">${airline.badge}</span>
              </div>
              <div class="mt-3 grid gap-3 text-xs text-slate-500 sm:grid-cols-2">
                <div class="rounded-xl bg-slate-50 p-3">
                  <p class="font-semibold text-deep">기내 동반</p>
                  <p class="mt-1">무게: ${airline.cabin.maxWeight}kg 미만</p>
                  <p class="mt-1">케이지: ${airline.cabin.cage}</p>
                  ${airline.contact ? `<p class="mt-1">사전예약 및 안내: ${airline.contact}</p>` : ""}
                </div>
                ${renderCargoBlock(airline)}
              </div>
            </article>
          `
          )
          .join("")
      : `<div class="rounded-2xl border border-line bg-slate-50 p-4 text-sm text-slate-400">조건에 맞는 항공사가 없습니다.</div>`;
  };

  breedSelect?.addEventListener("change", renderEligibleList);
  weightSelect?.addEventListener("change", renderEligibleList);
  ageSelect?.addEventListener("change", renderEligibleList);
  destinationSelect?.addEventListener("change", renderEligibleList);
  rulesSearchBtn?.addEventListener("click", () => {
    const params = new URLSearchParams({
      breed: breedSelect?.value || "small",
      weight: weightSelect?.value || "5",
      age: ageSelect?.value || "adult",
      destination: destinationSelect?.value || "any",
    });
    window.location.href = `results.html?${params.toString()}`;
  });
}

// 모바일 필터 바텀시트 열기/닫기
function setupBottomSheet() {
  const openBtn = document.getElementById("open-sheet");
  const closeBtn = document.getElementById("close-sheet");
  const applyBtn = document.getElementById("apply-sheet");
  const breedSelect = document.getElementById("breed-select");
  const weightSelect = document.getElementById("weight-select");
  const sheetBreed = document.getElementById("sheet-breed");
  const sheetWeight = document.getElementById("sheet-weight");
  const sheetAge = document.getElementById("sheet-age");
  const ageSelect = document.getElementById("age-select");
  if (!weightSelect || !sheetWeight) return;

  // 바텀시트 열기: 현재 필터 값을 복사해서 보여줌
  function openSheet() {
    bottomSheetEl.classList.remove("hidden");
    if (sheetBreed && breedSelect) sheetBreed.value = breedSelect.value;
    sheetWeight.value = weightSelect.value;
    if (sheetAge && ageSelect) sheetAge.value = ageSelect.value;
  }

  // 바텀시트 닫기
  function closeSheet() {
    bottomSheetEl.classList.add("hidden");
  }

  // 새로고침 시 항상 닫힘 상태로 유지
  closeSheet();

  openBtn?.addEventListener("click", openSheet);
  closeBtn?.addEventListener("click", closeSheet);
  bottomSheetEl?.addEventListener("click", (event) => {
    if (event.target === bottomSheetEl) closeSheet();
  });
  applyBtn?.addEventListener("click", () => {
    if (sheetBreed && breedSelect) breedSelect.value = sheetBreed.value;
    weightSelect.value = sheetWeight.value;
    if (sheetAge && ageSelect) ageSelect.value = sheetAge.value;
    closeSheet();
    renderEligibleList();
  });
}

// 히어로 영역에서 선택한 값을 규정 필터에 반영
function setupHeroSearch() {
  const heroWeight = document.getElementById("hero-weight");
  const heroDestination = document.getElementById("hero-destination");
  const heroBtn = document.getElementById("hero-search");

  if (!heroBtn) return;

  heroBtn.addEventListener("click", () => {
    if (!document.getElementById("page-loading")) {
      const overlay = document.createElement("div");
      overlay.id = "page-loading";
      overlay.className = "page-loading";
      overlay.innerHTML = `
        <div class="page-loading__card">
          <p class="text-xs uppercase tracking-[0.35em] text-slate-400">Loading</p>
          <div class="results-spinner"></div>
          <p class="text-sm text-slate-500">탑승 가능한 항공사를 찾는 중...</p>
        </div>
      `;
      document.body.appendChild(overlay);
    }
    heroBtn.setAttribute("disabled", "true");
    const params = new URLSearchParams({
      breed: "small",
      weight: heroWeight?.value || "5",
      age: "adult",
      destination: heroDestination?.value || "any",
    });
    setTimeout(() => {
      window.location.href = `results.html?${params.toString()}`;
    }, 500);
  });
}

function setupThemeRowScroll() {
  const tracks = document.querySelectorAll(".theme-row__track");
  if (!tracks.length) return;
  tracks.forEach((track) => {
    track.addEventListener(
      "wheel",
      (event) => {
        if (Math.abs(event.deltaX) < Math.abs(event.deltaY)) {
          event.preventDefault();
          track.scrollLeft += event.deltaY;
        }
      },
      { passive: false }
    );
  });
}

// (옵션) 외부 API에서 항공사 데이터 가져오기
async function fetchAirlinesFromApi() {
  try {
    const response = await fetch("https://api.instantwebtools.net/v1/airlines");
    if (!response.ok) return null;
    const data = await response.json();
    if (!Array.isArray(data)) return null;
    const weights = [7, 8, 9, 10];
    const cargoWeights = [20, 25, 30, 32, 35];
    const cages = ["32 x 45 x 25cm", "40 x 30 x 20cm", "45 x 35 x 25cm", "35 x 45 x 20cm"];
    const cargoCages = ["80 x 50 x 55cm", "85 x 55 x 65cm", "90 x 60 x 70cm"];
    const sliced = data.slice(0, 8);
    // 외부 데이터를 현재 화면 구조에 맞게 가공
    return sliced.map((item, idx) => {
      const cabinWeight = weights[idx % weights.length];
      const cargoWeight = cargoWeights[idx % cargoWeights.length];
      return {
        id: item.id ? String(item.id) : `air-${idx}`,
        name: item.name || "항공사",
        badge: item.iataCode || item.icaoCode || "AIR",
        cabin: {
          maxWeight: cabinWeight,
          cage: cages[idx % cages.length],
          note: "기내 반입 규정은 항공사별로 상이합니다.",
        },
        cargo: {
          maxWeight: cargoWeight,
          cage: cargoCages[idx % cargoCages.length],
          note: "화물칸 동반은 사전 예약이 필요합니다.",
        },
        maxCabinWeight: cabinWeight,
        maxCargoWeight: cargoWeight,
        breeds: ["small", "medium", "large"],
        logo: item.logo || "",
        website: item.website || "",
      };
    });
  } catch (error) {
    return null;
  }
}

// (옵션) 외부 API에서 쇼핑 아이템 가져오기
async function fetchShopItemsFromApi() {
  try {
    const response = await fetch("https://dummyjson.com/products?limit=24");
    if (!response.ok) return null;
    const data = await response.json();
    if (!data?.products?.length) return null;
    return data.products.map((product, idx) => {
      const categoryMap = idx % 3 === 0 ? "carrier" : idx % 3 === 1 ? "popular" : "kit";
      const discount = Math.round(product.discountPercentage || 0);
      const price = Math.round(product.price * 1000);
      const originalPrice = discount
        ? Math.round(price / (1 - discount / 100))
        : null;
      return {
        id: `api-${product.id}`,
        brand: product.brand || "WITH PAW",
        name: product.title,
        price,
        originalPrice,
        discount,
        likes: Math.round((product.rating || 4) * 1000 + product.stock * 5),
        reviews: Math.round((product.rating || 4) * 120),
        rating: Math.round(product.rating || 4),
        badge: idx % 2 === 0 ? "BEST" : "NEW",
        category: categoryMap,
        image: product.thumbnail,
      };
    });
  } catch (error) {
    return null;
  }
}

// 외부 API 데이터가 있으면 화면을 갱신
async function initApiData() {
  const [airlines, products] = await Promise.all([
    fetchAirlinesFromApi(),
    fetchShopItemsFromApi(),
  ]);

  if (airlines && airlineEl && pageType === "airline") {
    renderAirlines(airlines);
    setupAirlineTabs();
    setupViewTabs();
    setupEligibilityFilter();
    setupBottomSheet();
  }

  if (products) {
    currentShopItems = products;
    renderShopGrid(shopState.category, shopState.sort);
  }
}

// 쇼핑 카드 그리드 렌더
function renderShopGrid(category = "all", sort = "recommend") {
  const gridEl = document.getElementById("shop-grid");
  if (!gridEl) return;

  // 카테고리 필터
  const filtered = currentShopItems.filter((item) =>
    category === "all" ? true : item.category === category
  );

  // 정렬 기준 적용
  const sorted = [...filtered].sort((a, b) => {
    if (sort === "price-high") return b.price - a.price;
    if (sort === "price-low") return a.price - b.price;
    return b.likes - a.likes;
  });

  gridEl.innerHTML = sorted
    .map((item) => {
      const priceText = `${item.price.toLocaleString()}원`;
      const originalText = item.originalPrice
        ? `${item.originalPrice.toLocaleString()}원`
        : "";
      const discountText = item.discount ? `${item.discount}%` : "";
      const ratingText = item.rating ? `★ ${item.rating}` : "";
      const reviewText = item.reviews ? `(${item.reviews.toLocaleString()})` : "(0)";
      return `
        <article class="shop-card overflow-hidden rounded-[24px] border border-line bg-white shadow-card">
          <div class="relative">
            <img src="${item.image}" alt="${item.name}" class="h-52 w-full object-cover" />
            <div class="shop-hover absolute inset-x-0 bottom-0 translate-y-full bg-white/90 p-3 text-xs text-slate-600">
              <div class="flex items-center justify-between">
                <span>할인 적용가</span>
                <span class="font-semibold text-deep">${priceText}</span>
              </div>
              <p class="mt-1 text-[11px] text-slate-400">항공 규격 테스트 완료</p>
            </div>
            <button class="absolute bottom-3 right-3 rounded-full bg-white/80 px-2 py-1 text-xs">♡</button>
          </div>
          <div class="p-4">
            <p class="text-xs text-slate-400">${item.brand}</p>
            <h4 class="mt-1 text-sm font-semibold">${item.name}</h4>
            <div class="mt-2 flex items-center gap-2 text-sm font-semibold text-ink">
              ${discountText ? `<span class="text-brand">${discountText}</span>` : ""}
              <span>${priceText}</span>
              ${originalText ? `<span class="text-xs text-slate-400 line-through">${originalText}</span>` : ""}
            </div>
            <div class="mt-2 flex flex-wrap items-center gap-2 text-xs text-slate-400">
              <span>${item.badge}</span>
              <span>조건부 무료배송</span>
            </div>
            <div class="mt-2 flex items-center gap-2 text-xs text-slate-500">
              <span>❤ ${item.likes.toLocaleString()}</span>
              <span>${ratingText} ${reviewText}</span>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

// 쇼핑 탭/정렬 이벤트 연결
function setupShopFilters() {
  const tabs = document.querySelectorAll(".shop-tab");
  const sortSelect = document.getElementById("shop-sort");
  if (!tabs.length || !sortSelect) return;

  let currentCategory = "all";
  let currentSort = "recommend";

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((item) => {
        item.classList.remove("bg-deep", "text-white");
        item.classList.add("border-line", "text-slate-500");
      });
      tab.classList.add("bg-deep", "text-white");
      tab.classList.remove("text-slate-500");
      currentCategory = tab.dataset.category;
      shopState.category = currentCategory;
      renderShopGrid(currentCategory, currentSort);
    });
  });

  sortSelect.addEventListener("change", () => {
    currentSort = sortSelect.value;
    shopState.sort = currentSort;
    renderShopGrid(currentCategory, currentSort);
  });

  renderShopGrid(currentCategory, currentSort);
}

// ---------------------------
// Boot: 페이지 로드 시 실행 순서
// ---------------------------
// 히어로는 airline 페이지에서만 렌더링
if (heroEl && pageType === "airline") renderHero();
if (dailyEl) renderDailyCarousel();
if (airlineEl) renderAirlines();
if (mobileNavEl) renderMobileNav();

if (heroEl && pageType === "airline") {
  setupCountdown();
  setupHeroSearch();
}
setupSkeletons();
if (airlineEl && pageType === "airline") {
  setupAirlineTabs();
  setupViewTabs();
  setupEligibilityFilter();
  setupBottomSheet();
  setupShopFilters();
}
setupThemeRowScroll();
if (airlineEl && pageType !== "airline" && pageType !== "results") {
  setupTravelTabs();
}
if (pageType === "daily") {
  renderDailyPage();
}
if (pageType === "shopping" && airlineEl) {
  const shopTab = airlineEl.querySelector('.view-tab[data-view="shop"]');
  shopTab?.click();
}
if (pageType === "results") {
  renderResultsPage();
}

initApiData();
