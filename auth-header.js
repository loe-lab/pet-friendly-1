// 헤더 로그인 상태 관리
(async function initAuthHeader() {
  // 헤더 로그인/회원가입 UI 임시 숨김 토글
  // 다시 노출하려면 false로 변경
  const HIDE_HEADER_AUTH_UI = true;

  // supabase.js에서 초기화된 클라이언트 사용
  if (typeof supabaseClient === 'undefined') return;

  const authBtn = document.getElementById('auth-btn');
  if (!authBtn) return;

  if (HIDE_HEADER_AUTH_UI) {
    authBtn.classList.add('hidden');
    return;
  }

  const { data: { user } } = await supabaseClient.auth.getUser();

  if (user) {
    // 탈퇴 후 재로그인 등으로 프로필이 없을 수 있음: 자동 생성하지 않고 가입 정보 입력 유도
    let hasProfile = false;
    try {
      const { data: existing } = await supabaseClient
        .from('profiles')
        .select('id')
        .eq('id', user.id)
        .single();
      hasProfile = !!existing;
    } catch (_) {
      hasProfile = false;
    }

    if (!hasProfile) {
      // 메인/일반 페이지에서는 강제 이동하지 않음 (무한 리다이렉트 방지)
      // 가입 보완은 auth.html OAuth 콜백 흐름에서만 처리
      console.warn('프로필 미완성 사용자: 강제 이동 없이 현재 페이지 유지');
    }

    // 로그인 상태: 마이페이지 드롭다운으로 변경
    authBtn.outerHTML = `
      <div class="relative" id="mypage-dropdown">
        <button id="mypage-btn" class="rounded-full border-1-5 border-line bg-white px-5 py-2 text-sm font-semibold text-brand shadow-soft flex items-center gap-2">
          마이페이지
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <div id="mypage-menu" class="hidden absolute right-0 top-full mt-2 w-44 bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden z-50">
          <a href="my-profile.html" class="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5.5" r="2.5" stroke="#64748b" stroke-width="1.2"/><path d="M3 13.5c0-2.5 2.2-4 5-4s5 1.5 5 4" stroke="#64748b" stroke-width="1.2" stroke-linecap="round"/></svg>
            프로필
          </a>
          <a href="my-likes.html" class="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition flex items-center gap-2 border-t border-gray-100">
            <img src="base-icon-heart-selected.svg" alt="좋아요" width="16" height="16" />
            좋아요
          </a>
          <a href="mailto:uixstudio.official@gmail.com" class="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition flex items-center gap-2 border-t border-gray-100">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1.5" y="3.5" width="13" height="9" rx="1.5" stroke="#64748b" stroke-width="1.2"/><path d="M2 4.5l6 4.5 6-4.5" stroke="#64748b" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            문의하기
          </a>
          <button id="logout-header-btn" class="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition flex items-center gap-2 border-t border-gray-100">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 14H3a1 1 0 01-1-1V3a1 1 0 011-1h3M11 11l3-3-3-3M14 8H6" stroke="#64748b" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            로그아웃
          </button>
        </div>
      </div>
    `;

    // 드롭다운 토글
    const mypageBtn = document.getElementById('mypage-btn');
    const mypageMenu = document.getElementById('mypage-menu');

    mypageBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      mypageMenu.classList.toggle('hidden');
    });

    // 바깥 클릭 시 닫기
    document.addEventListener('click', () => {
      mypageMenu.classList.add('hidden');
    });

    // 메뉴 내부 클릭 시 닫힘 방지
    mypageMenu.addEventListener('click', (e) => {
      e.stopPropagation();
    });

    // 로그아웃
    document.getElementById('logout-header-btn').addEventListener('click', async () => {
      await supabaseClient.auth.signOut();
      window.location.reload();
    });
  }
})();
