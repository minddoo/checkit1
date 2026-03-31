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

            <!-- Mobile Language Switcher (Visible in Header) -->
            <div class="mobile-only mobile-header-lang">
                <button class="lang-btn active" data-lang="ko">KR</button>
                <button class="lang-btn" data-lang="en">EN</button>
                <button class="lang-btn" data-lang="cn">CN</button>
                <button class="lang-btn" data-lang="vn">VN</button>
            </div>

            <!-- Mobile Navigation Toggle -->
            <button id="mobile-menu-toggle" class="mobile-only">
                <i class="fas fa-bars"></i>
            </button>

            <!-- Main Navigation -->
            <nav id="main-nav">
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

            <!-- Mobile Menu Overlay -->
            <div id="mobile-menu-overlay" class="mobile-only">
                <div class="mobile-menu-content">
                    <button id="close-mobile-menu">&times;</button>
                    
                    <div class="mobile-menu-links">
                        <a href="index.html" data-lang-key="nav_home">홈</a>
                        <a href="corporate.html" data-lang-key="nav_corporate">기업 서비스</a>
                        <div class="mobile-menu-auth">
                            <button id="mobile-nav-login" class="cta-button-secondary" data-lang-key="nav_login">로그인</button>
                            <button id="mobile-nav-mypage" class="cta-button-secondary" style="display: none;" data-lang-key="mypage">마이페이지</button>
                            <button id="mobile-nav-logout" class="cta-button-secondary" style="display: none;" data-lang-key="logout">로그아웃</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,

    getFooterHTML: () => `
        <div class="container">
            <div class="footer-grid">
                <div class="footer-info">
                    <h4 class="footer-title" data-lang-key="footer_company_title">플랫폼 이용 정보</h4>
                    <p data-lang-key="footer_company_name">상호명: <strong>주식회사 체킷</strong></p>
                    <p data-lang-key="footer_representative">대표자명: 김선홍</p>
                    <p data-lang-key="footer_address">사업장 주소: 경기도 남양주시 다산지금로202, 제8층 제에이에프08-0019호(다산동, 현대테라타워디아이엠씨)</p>
                    <p data-lang-key="footer_phone">대표 전화: 01051093459</p>
                    <p data-lang-key="footer_business_no">사업자 등록번호: 8718803241</p>
                    <p data-lang-key="footer_privacy_officer">개인정보보호책임자: 남민정</p>
                </div>
                <div class="footer-cs">
                    <h4 class="footer-title" data-lang-key="footer_cs_title">고객센터 정보</h4>
                    <p data-lang-key="footer_cs_phone">상담 전화: <strong>010-5109-3459 / 010-2209-7951</strong></p>
                    <p data-lang-key="footer_cs_email">상담 이메일: <strong>checkit082@gmail.com</strong></p>
                </div>
            </div>
            <div class="footer-bottom">
                <p data-lang-key="footer_copyright">&copy; 2026 주식회사 체킷 (CHECKIT)</p>
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
