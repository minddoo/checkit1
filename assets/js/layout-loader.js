/**
 * CHECKIT Layout Loader
 * Centralizes Header and Footer for all pages.
 */

const LayoutLoader = {
    getHeaderHTML: () => `
        <div class="container">
            <a href="index.html" class="logo">
                <img src="assets/로고2.png" alt="CHECKIT Logo" class="header-logo">
                CHECKIT
            </a>
            <nav>
                <div id="language-switcher">
                    <button class="lang-btn active" data-lang="ko">KR</button>
                    <button class="lang-btn" data-lang="en">EN</button>
                    <button class="lang-btn" data-lang="cn">CN</button>
                    <button class="lang-btn" data-lang="vn">VN</button>
                </div>
                <button id="nav-login" class="cta-button-secondary" data-lang-key="nav_login">로그인</button>
                <button id="nav-mypage" class="cta-button-secondary" style="display: none;" data-lang-key="mypage">마이페이지</button>
                <button id="nav-logout" class="cta-button-secondary" style="display: none;" data-lang-key="logout">로그아웃</button>
            </nav>
        </div>
    `,

    getFooterHTML: () => `
        <div class="container">
            <div class="footer-grid">
                <div class="footer-info">
                    <h4 class="footer-title">쇼핑몰 기본정보</h4>
                    <p>상호명: <strong>주식회사 체킷</strong></p>
                    <p>대표자명: 김선홍</p>
                    <p>사업장 주소: 경기도 남양주시 다산지금로202, 제8층 제에이에프08-0019호(다산동, 현대테라타워디아이엠씨)</p>
                    <p>대표 전화: 01051093459</p>
                    <p>사업자 등록번호: 8718803241</p>
                    <p>개인정보보호책임자: 남민정</p>
                </div>
                <div class="footer-cs">
                    <h4 class="footer-title">고객센터 정보</h4>
                    <p>상담/주문 전화: <strong>010-5109-3459</strong></p>
                    <p>상담/주문 이메일: <strong>checkit082@gmail.com</strong></p>
                    <p>CS운영시간: 평일 10:00 - 18:00 (주말 및 공휴일 휴무)</p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 주식회사 체킷 (CHECKIT). All Rights Reserved.</p>
            </div>
        </div>
    `,

    init: function() {
        const header = document.getElementById('main-header');
        const footer = document.querySelector('.site-footer') || document.getElementById('main-footer');

        if (header) {
            header.innerHTML = this.getHeaderHTML();
        }
        if (footer) {
            footer.innerHTML = this.getFooterHTML();
            footer.className = 'site-footer'; // Ensure consistent class
        }
    }
};

// Initialize before other scripts
LayoutLoader.init();
