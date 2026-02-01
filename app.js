// ---------------------------
// Data models
// ---------------------------
const heroSlides = [
  {
    title: "데일리펫과 함께 떠나는 반려견 여행",
    subtitle: "항공 규정부터 액티비티까지, 우리 아이와의 모든 여정을 큐레이션합니다.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
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


const airlineData = [
  {
    id: "korean",
    name: "대한항공",
    badge: "KOREAN AIR",
    cabin: { maxWeight: 7, cage: "32 x 45 x 25cm", note: "좌석 아래 배치, 사전 예약 필수" },
    cargo: { maxWeight: 32, cage: "90 x 60 x 70cm", note: "화물칸 전용 케이지, 건강 확인서 필요" },
    maxCabinWeight: 7,
    maxCargoWeight: 32,
    breeds: ["small", "medium"],
  },
  {
    id: "asiana",
    name: "아시아나",
    badge: "ASIANA",
    cabin: { maxWeight: 7, cage: "45 x 30 x 20cm", note: "국내선 최대 2마리" },
    cargo: { maxWeight: 30, cage: "85 x 55 x 65cm", note: "국제선 예약 필수" },
    maxCabinWeight: 7,
    maxCargoWeight: 30,
    breeds: ["small", "medium"],
  },
  {
    id: "jeju",
    name: "제주항공",
    badge: "JEJU AIR",
    cabin: { maxWeight: 9, cage: "40 x 30 x 20cm", note: "케이지 포함 9kg 미만" },
    cargo: { maxWeight: 20, cage: "80 x 50 x 55cm", note: "국제선 제한 노선" },
    maxCabinWeight: 9,
    maxCargoWeight: 20,
    breeds: ["small", "medium"],
  },
  {
    id: "tway",
    name: "티웨이",
    badge: "T'WAY",
    cabin: { maxWeight: 9, cage: "45 x 35 x 25cm", note: "기내 반입 좌석 수 제한" },
    cargo: { maxWeight: 25, cage: "85 x 55 x 65cm", note: "사전 접수 필수" },
    maxCabinWeight: 9,
    maxCargoWeight: 25,
    breeds: ["small", "medium"],
  },
  {
    id: "airbusan",
    name: "에어부산",
    badge: "AIR BUSAN",
    cabin: { maxWeight: 8, cage: "35 x 45 x 20cm", note: "사전 예약 필수, 국제선 유료" },
    cargo: { maxWeight: 28, cage: "88 x 58 x 68cm", note: "케이지 별도 확인" },
    maxCabinWeight: 8,
    maxCargoWeight: 28,
    breeds: ["small", "medium"],
  },
];

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

const bottomNav = [
  { label: "홈", icon: "🏠" },
  { label: "검색", icon: "🔍" },
  { label: "내 주변", icon: "📍" },
  { label: "마이", icon: "👤" },
];

let currentAirlines = [...airlineData];
let currentShopItems = [...shopItems];
const shopState = { category: "all", sort: "recommend" };

// ---------------------------
// Root containers
// ---------------------------
const heroEl = document.getElementById("hero");
const airlineEl = document.getElementById("airline");
const mobileNavEl = document.getElementById("mobile-nav");
const bottomSheetEl = document.getElementById("bottom-sheet");

// ---------------------------
// Render functions
// ---------------------------
function renderHero() {
  heroEl.innerHTML = `
    <!-- Hero section -->
    <div class="hero-stage shadow-soft" style="background-image:url('${heroSlides[0].image}')">
      <div class="hero-overlay"></div>
      <div class="relative z-10 flex h-full flex-col justify-start gap-6 px-8 py-[50px] text-ink">
        <span class="hero-tag inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1 text-[10px] uppercase tracking-[0.35em] text-deep">
          ${heroSlides[0].tag}
        </span>
        <div>
          <h1 class="hero-title text-3xl font-semibold md:text-4xl">${heroSlides[0].title}</h1>
          <p class="mt-2 max-w-xl text-sm text-slate-600">${heroSlides[0].subtitle}</p>
        </div>
        <div class="flex flex-wrap items-center gap-3 rounded-2xl bg-white/90 p-4 text-ink">
          <label class="grid gap-1 text-xs">
            견종
            <select id="hero-breed" class="rounded-xl border border-line px-3 py-2 text-sm">
              <option value="small">소형견</option>
              <option value="medium">중형견</option>
              <option value="large">대형견</option>
            </select>
          </label>
          <label class="grid gap-1 text-xs">
            몸무게
            <select id="hero-weight" class="rounded-xl border border-line px-3 py-2 text-sm">
              <option value="5">5kg 이하</option>
              <option value="7">7kg 이하</option>
              <option value="9">9kg 이하</option>
              <option value="12">12kg 이하</option>
              <option value="20">20kg 이하</option>
            </select>
          </label>
          <label class="grid gap-1 text-xs">
            나이
            <select id="hero-age" class="rounded-xl border border-line px-3 py-2 text-sm">
              <option value="puppy">1살 이하</option>
              <option value="adult">1~7살</option>
              <option value="senior">7살 이상</option>
            </select>
          </label>
          <button id="hero-search" class="rounded-full bg-deep px-5 py-2 text-sm font-semibold text-white">
            항공사 검색
          </button>
        </div>
        <div class="flex flex-wrap gap-3">
          <button class="float-cta rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-soft">
            지금 우리 아이와 떠나기
          </button>
          <button class="rounded-full border border-line px-6 py-3 text-sm text-slate-600">
            큐레이션 둘러보기
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderAirlines(airlines = currentAirlines) {
  currentAirlines = airlines;
  airlineEl.innerHTML = `
    <!-- Airline + Shopping section -->
    <div class="rounded-[32px] border border-line bg-white p-8 text-ink shadow-card" id="shopping">
      <div class="flex flex-wrap items-start justify-between gap-6">
        <div>
          <p class="text-xs uppercase tracking-[0.4em] text-slate-500">Flight rules</p>
          <h2 class="mt-2 text-3xl font-semibold text-deep">항공사별 탑승 규정</h2>
          <p class="mt-2 text-sm text-slate-500">견종 · 나이 · 무게를 선택하면 가능한 항공사를 안내합니다.</p>
        </div>
        <div class="flex gap-2">
          <button class="view-tab rounded-full bg-deep px-4 py-2 text-xs font-semibold text-white" data-view="rules">탑승 규정</button>
        </div>
      </div>

      <!-- Rule panel -->
      <div class="view-panel tab-panel active mt-6" data-view-panel="rules">
        <div class="grid gap-4 rounded-2xl border border-line bg-slate-50 p-4 text-sm lg:grid-cols-[1.5fr_1fr]">
          <div class="grid gap-3 sm:grid-cols-3">
            <label class="grid gap-2">
              견종 크기
              <select id="breed-select" class="rounded-xl border border-line bg-white px-3 py-2 text-sm">
                <option value="small">소형견</option>
                <option value="medium">중형견</option>
                <option value="large">대형견</option>
              </select>
            </label>
            <label class="grid gap-2">
              몸무게
              <select id="weight-select" class="rounded-xl border border-line bg-white px-3 py-2 text-sm">
                <option value="5">5kg 이하</option>
                <option value="7">7kg 이하</option>
                <option value="9">9kg 이하</option>
                <option value="12">12kg 이하</option>
                <option value="20">20kg 이하</option>
              </select>
            </label>
            <label class="grid gap-2">
              나이
              <select id="age-select" class="rounded-xl border border-line bg-white px-3 py-2 text-sm">
                <option value="puppy">1살 이하</option>
                <option value="adult">1~7살</option>
                <option value="senior">7살 이상</option>
              </select>
            </label>
          </div>
          <div class="flex items-center justify-between gap-4">
            <div>
              <p class="text-xs text-slate-500">탑승 가능 항공사</p>
              <div id="eligible-list" class="mt-2 flex flex-wrap gap-2 text-xs"></div>
              <p id="age-note" class="mt-2 text-xs text-slate-400"></p>
            </div>
            <button id="open-sheet" class="rounded-full border border-line px-4 py-2 text-xs text-slate-500 md:hidden">
              필터 열기
            </button>
          </div>
        </div>

        <div class="mt-6 flex flex-wrap items-center justify-between gap-4">
          <h3 class="text-base font-semibold">항공사 규정 상세</h3>
          <div class="airline-tabs flex flex-wrap gap-2">
            ${airlines
              .map(
                (airline, idx) => `
                <button class="${idx === 0 ? "active" : ""}" data-airline="${airline.id}">
                  ${airline.badge}
                </button>
              `
              )
              .join("")}
          </div>
        </div>

        <div class="mt-6 grid items-start gap-6 lg:grid-cols-[1.1fr_1fr]">
          <div class="space-y-4">
            ${airlines
              .map(
                (airline, idx) => `
                <div class="airline-card tab-panel ${idx === 0 ? "active" : ""} rounded-2xl border border-line bg-white p-5" data-panel="${airline.id}">
                  <div class="flex items-center justify-between">
                    <h4 class="text-lg font-semibold">${airline.name}</h4>
                    <span class="rounded-full bg-deep/10 px-3 py-1 text-xs text-deep">규정 요약</span>
                  </div>
                  <div class="mt-4 grid gap-4 sm:grid-cols-2">
                    <div class="rounded-xl border border-line bg-slate-50 p-4">
                      <p class="text-xs font-semibold text-deep">기내 동반</p>
                      <p class="mt-2 text-xs text-slate-500">무게 제한</p>
                      <div class="mt-2 h-2 rounded-full bg-slate-200">
                        <div class="h-full rounded-full bg-brand" style="width:${airline.cabin.maxWeight * 10}%"></div>
                      </div>
                      <p class="mt-1 text-xs text-slate-500">케이지 포함 ${airline.cabin.maxWeight}kg 미만</p>
                      <div class="mt-3 flex items-center gap-3">
                        <div class="cage-iso"></div>
                        <div>
                          <strong class="text-sm text-ink">${airline.cabin.cage}</strong>
                          <p class="text-xs text-slate-500">케이지 규격</p>
                        </div>
                      </div>
                      <p class="mt-3 text-xs text-slate-500">${airline.cabin.note}</p>
                    </div>
                    <div class="rounded-xl border border-line bg-slate-50 p-4">
                      <p class="text-xs font-semibold text-deep">화물칸 동반</p>
                      <p class="mt-2 text-xs text-slate-500">무게 제한</p>
                      <div class="mt-2 h-2 rounded-full bg-slate-200">
                        <div class="h-full rounded-full bg-deep" style="width:${Math.min(airline.cargo.maxWeight, 40) * 2.5}%"></div>
                      </div>
                      <p class="mt-1 text-xs text-slate-500">${airline.cargo.maxWeight}kg 이하</p>
                      <div class="mt-3 flex items-center gap-3">
                        <div class="cage-iso"></div>
                        <div>
                          <strong class="text-sm text-ink">${airline.cargo.cage}</strong>
                          <p class="text-xs text-slate-500">케이지 규격</p>
                        </div>
                      </div>
                      <p class="mt-3 text-xs text-slate-500">${airline.cargo.note}</p>
                    </div>
                  </div>
                </div>
              `
              )
              .join("")}
          </div>

          <div class="rounded-[24px] border border-line bg-white p-5">
            <h4 class="text-base font-semibold">항공사 비교 테이블</h4>
            <div class="no-scrollbar mt-3 overflow-x-auto">
              <table class="min-w-[520px] text-left text-xs">
                <thead class="text-slate-500">
                  <tr>
                    <th class="py-2 pr-4">항공사</th>
                    <th class="py-2 pr-4">기내</th>
                    <th class="py-2 pr-4">화물칸</th>
                    <th class="py-2 pr-4">케이지 규격</th>
                  </tr>
                </thead>
                <tbody class="text-slate-600">
                  ${airlines
                    .map(
                      (airline) => `
                      <tr class="border-t border-line">
                        <td class="py-2 pr-4 font-semibold">${airline.name}</td>
                        <td class="py-2 pr-4">${airline.cabin.maxWeight}kg 미만</td>
                        <td class="py-2 pr-4">${airline.cargo.maxWeight}kg 이하</td>
                        <td class="py-2 pr-4">${airline.cabin.cage}</td>
                      </tr>
                    `
                    )
                    .join("")}
                </tbody>
              </table>
            </div>
            <p class="mt-3 text-xs text-slate-400">모바일에서는 좌우 스와이프로 표를 확인하세요.</p>
          </div>
        </div>
        <div class="mt-6">
          <h4 class="text-base font-semibold">탑승 가능 항공사 리스트</h4>
        <div id="eligible-cards" class="mt-3 grid gap-4 md:grid-cols-2"></div>
        </div>
      </div>

    </div>
  `;
}

function renderMobileNav() {
  mobileNavEl.innerHTML = `
    <!-- Mobile bottom nav -->
    <div class="fixed bottom-0 left-0 right-0 z-30 flex bg-white/90 px-4 py-3 text-xs text-slate-500 shadow-card md:hidden">
      ${bottomNav
        .map(
          (item, idx) => `
          <button class="flex w-full flex-col items-center gap-1 ${idx === 0 ? "text-brand" : ""}">
            <span>${item.icon}</span>
            <span>${item.label}</span>
          </button>
        `
        )
        .join("")}
    </div>
  `;
}

// ---------------------------
// Interaction logic
// ---------------------------
function setupHeroCarousel() {
  return;
}

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

function setupSkeletons() {
  setTimeout(() => {
    document.querySelectorAll(".loading").forEach((card) => {
      card.classList.remove("loading");
    });
  }, 1200);
}

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

let renderEligibleList = () => {};

function setupEligibilityFilter() {
  const breedSelect = document.getElementById("breed-select");
  const weightSelect = document.getElementById("weight-select");
  const ageSelect = document.getElementById("age-select");
  const listEl = document.getElementById("eligible-list");
  const ageNoteEl = document.getElementById("age-note");
  const cardsEl = document.getElementById("eligible-cards");

  renderEligibleList = function () {
    const breed = breedSelect.value;
    const weight = Number(weightSelect.value);
    const age = ageSelect.value;
    const eligible = currentAirlines.filter((airline) => {
      const cabinOk =
        airline.maxCabinWeight >= weight && airline.breeds.includes(breed) && breed !== "large";
      const cargoOk = airline.maxCargoWeight >= weight;
      return cabinOk || cargoOk;
    });
    listEl.innerHTML = eligible.length
      ? eligible
          .map(
            (airline) =>
              `<span class="rounded-full bg-deep/10 px-3 py-1 text-xs text-deep">${airline.name}</span>`
          )
          .join("")
      : `<span class="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-400">조건에 맞는 항공사가 없습니다.</span>`;
    ageNoteEl.textContent =
      age === "puppy"
        ? "1살 이하 강아지는 항공사별 건강 확인서가 필요할 수 있습니다."
        : age === "senior"
        ? "7살 이상 강아지는 탑승 전 건강 체크를 권장합니다."
        : "성견 기준의 기본 규정을 적용했습니다.";

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
                </div>
                <div class="rounded-xl bg-slate-50 p-3">
                  <p class="font-semibold text-deep">화물칸 동반</p>
                  <p class="mt-1">무게: ${airline.cargo.maxWeight}kg 이하</p>
                  <p class="mt-1">케이지: ${airline.cargo.cage}</p>
                </div>
              </div>
            </article>
          `
          )
          .join("")
      : `<div class="rounded-2xl border border-line bg-slate-50 p-4 text-sm text-slate-400">조건에 맞는 항공사가 없습니다.</div>`;
  };

  breedSelect.addEventListener("change", renderEligibleList);
  weightSelect.addEventListener("change", renderEligibleList);
  ageSelect.addEventListener("change", renderEligibleList);
  renderEligibleList();
}

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

  function openSheet() {
    bottomSheetEl.classList.remove("hidden");
    sheetBreed.value = breedSelect.value;
    sheetWeight.value = weightSelect.value;
    sheetAge.value = ageSelect.value;
  }

  function closeSheet() {
    bottomSheetEl.classList.add("hidden");
  }

  openBtn?.addEventListener("click", openSheet);
  closeBtn?.addEventListener("click", closeSheet);
  bottomSheetEl?.addEventListener("click", (event) => {
    if (event.target === bottomSheetEl) closeSheet();
  });
  applyBtn?.addEventListener("click", () => {
    breedSelect.value = sheetBreed.value;
    weightSelect.value = sheetWeight.value;
    ageSelect.value = sheetAge.value;
    closeSheet();
    renderEligibleList();
  });
}

function setupHeroSearch() {
  const heroBreed = document.getElementById("hero-breed");
  const heroWeight = document.getElementById("hero-weight");
  const heroAge = document.getElementById("hero-age");
  const heroBtn = document.getElementById("hero-search");

  if (!heroBtn) return;

  heroBtn.addEventListener("click", () => {
    const breedSelect = document.getElementById("breed-select");
    const weightSelect = document.getElementById("weight-select");
    const ageSelect = document.getElementById("age-select");

    if (breedSelect && weightSelect && ageSelect) {
      breedSelect.value = heroBreed.value;
      weightSelect.value = heroWeight.value;
      ageSelect.value = heroAge.value;
      renderEligibleList();
    }
  });
}

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

async function initApiData() {
  const [airlines, products] = await Promise.all([
    fetchAirlinesFromApi(),
    fetchShopItemsFromApi(),
  ]);

  if (airlines && airlineEl) {
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

function renderShopGrid(category = "all", sort = "recommend") {
  const gridEl = document.getElementById("shop-grid");
  if (!gridEl) return;

  const filtered = currentShopItems.filter((item) =>
    category === "all" ? true : item.category === category
  );

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
// Boot
// ---------------------------
if (heroEl) renderHero();
if (airlineEl) renderAirlines();
if (mobileNavEl) renderMobileNav();

if (heroEl) {
  setupCountdown();
  setupHeroSearch();
}
setupSkeletons();
if (airlineEl) {
  setupAirlineTabs();
  setupViewTabs();
  setupEligibilityFilter();
  setupBottomSheet();
  setupShopFilters();
}

const pageType = document.body?.dataset?.page;
if (pageType === "shopping" && airlineEl) {
  const shopTab = airlineEl.querySelector('.view-tab[data-view="shop"]');
  shopTab?.click();
}

initApiData();
