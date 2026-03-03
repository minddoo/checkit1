document.addEventListener('DOMContentLoaded', () => {

    // --- 1. FULL MULTILINGUAL DATA RESTORATION ---
    const translations = {
        ko: {
            'nav_home': '홈', 'hero_cta': '지금 바로 상담 신청', 'learn_more': '더 알아보기',
            'platform_title': 'CHECKIT 플랫폼', 'platform_status_title': '나의 서비스 현황',
            'platform_close': '닫기', 'contact_success': '문의가 성공적으로 접수되었습니다!',
            'admin_title': '매니저 관리 대시보드', 'onboarding_title': '프로필 완성하기',
            'nav_mypage': '마이페이지', 'nav_login': '로그인', 'nav_logout': '로그아웃',
            'hero_title': '외국인을 위한 전문 건강검진 예약 서비스',
            'hero_subtitle': '어려운 한국 병원 예약과 건강검진, CHECKIT이 모국어로 완벽하게 도와드립니다.',
            'service_for_title': '누구를 위한 서비스인가요?',
            'individual_title': '개인 고객',
            'individual_desc': '혼자 하기 힘든 병원 예약부터 결과지 번역까지, 1:1 전담 매니저가 케어해드립니다.',
            'corporate_title': '기업 고객',
            'corporate_desc': '외국인 근로자의 건강 관리를 체계적으로 지원하여 기업의 생산성을 높여드립니다.',
            'why_us_title': '왜 CHECKIT인가요?',
            'why_us_subtitle_new': '외국인 근로자와 기업 모두가 만족하는 건강검진 관리의 새로운 표준',
            'why_us_feature1_title': '모국어 1:1 상담',
            'why_us_feature1_desc': '언어 장벽 없는 소통으로 불안감을 해소합니다.',
            'why_us_feature2_title': '병원 예약 대행',
            'why_us_feature2_desc': '원하는 지역과 일정에 맞춰 최적의 병원을 예약합니다.',
            'why_us_feature3_title': '결과지 단순 번역',
            'why_us_feature3_desc': '어려운 의학 용어를 이해하기 쉬운 모국어로 요약해 드립니다.',
            'why_us_feature4_title': '합리적인 비용',
            'why_us_feature4_desc': '부담 없는 가격으로 프리미엄 케어 서비스를 누리세요.',
            'process_title': '이용 프로세스',
            'process_step1_title': '서비스 신청',
            'process_step1_desc_new': '웹사이트 또는 챗봇을 통해 상담을 신청합니다.',
            'process_step2_title': '예약 및 안내',
            'process_step2_desc_new': '매니저가 병원 예약을 완료하고 주의사항을 안내합니다.',
            'process_step3_title_new': '검진 및 사후 관리',
            'process_step3_desc_new': '검진 당일 지원과 결과지 요약본을 전달받습니다.',
            'testimonials_title': '고객 후기',
            'testimonials_subtitle': '이미 많은 외국인 고객분들이 CHECKIT과 함께하고 있습니다.',
            'testimonial1_text': '한국 병원이 처음이라 걱정이 많았는데, 매니저님이 친절하게 도와주셔서 무사히 검진을 마쳤어요.',
            'testimonial1_author': 'Nguyen Thuy', 'testimonial1_type': '베트남 고객',
            'testimonial2_text': '회사를 통해 단체 검진을 받았는데, 결과지를 제 나라 말로 읽을 수 있어서 정말 안심됐습니다.',
            'testimonial2_author': 'Li Wei', 'testimonial2_type': '중국 기업 고객',
            'testimonial3_text': '언어 때문에 검진을 미루고 있었는데, CHECKIT 덕분에 제 건강 상태를 정확히 알게 되었습니다.',
            'testimonial3_author': 'John Doe', 'testimonial3_type': '영어권 개인 고객',
            'contact_title_new': '궁금한 점이 있으신가요?',
            'contact_subtitle_new': 'CHECKIT의 전문가 팀이 최적의 솔루션을 제안해 드립니다.',
            'corporate_page_title': '기업 고객 토탈 솔루션',
            'individual_page_title': '개인 고객 서비스',
            'individual_page_subtitle': 'CHECKIT은 한국에 거주하거나 방문하는 모든 외국인 개인이<br><br>언어의 장벽 없이 최상의 건강검진을 받을 수 있도록 돕습니다.',
            'stat_total_clients': '전체 고객', 'stat_pending_leads': '미처리 문의'
        },
        en: {
            'nav_home': 'Home', 'hero_cta': 'Apply Now', 'learn_more': 'Learn More',
            'platform_title': 'CHECKIT PLATFORM', 'platform_status_title': 'My Service Status',
            'platform_close': 'Close', 'nav_mypage': 'My Page', 'nav_login': 'Login', 'nav_logout': 'Logout',
            'hero_title': 'Specialized Health Check-up Booking for Foreigners',
            'hero_subtitle': 'Complex Korean hospital bookings and check-ups, CHECKIT helps you perfectly in your native language.',
            'why_us_title': 'Why CHECKIT?',
            'process_title': 'Service Process',
            'testimonials_title': 'Testimonials',
            'contact_title_new': 'Any Questions?',
            'corporate_page_title': 'Total Solutions for Corporate',
            'individual_page_title': 'Individual Client Services'
        },
        cn: {
            'nav_home': '首页', 'hero_cta': '立即申请', 'learn_more': '了解更多',
            'platform_title': 'CHECKIT 平台', 'nav_mypage': '我的页面', 'nav_login': '登录', 'nav_logout': '登出',
            'hero_title': '面向外国人的专业健康检查 예약 서비스',
            'hero_subtitle': '复杂的韩国医院预约和健康检查，CHECKIT 用您的母语为您提供完美帮助。'
        },
        vn: {
            'nav_home': 'Trang chủ', 'hero_cta': 'Đăng ký ngay', 'learn_more': 'Xem thêm',
            'platform_title': 'Nền tảng CHECKIT', 'nav_mypage': 'Trang của tôi', 'nav_login': 'Đăng nhập', 'nav_logout': 'Đăng xuất',
            'hero_title': 'Dịch vụ đặt lịch khám sức khỏe chuyên nghiệp cho người nước ngoài',
            'hero_subtitle': 'Đặt lịch bệnh viện and khám sức khỏe tại Hàn Quốc không còn khó khăn, CHECKIT hỗ trợ bạn hoàn hảo bằng tiếng mẹ đẻ.'
        }
    };

    let currentLang = 'ko';
    const switchLanguage = (newLang) => {
        currentLang = newLang;
        document.documentElement.lang = newLang;
        const data = translations[newLang] || translations['ko'];
        document.querySelectorAll('[data-lang-key]').forEach(el => {
            const key = el.getAttribute('data-lang-key');
            if (data[key]) el.innerHTML = data[key];
        });
        const authBtn = document.getElementById('platform-auth-btn');
        if (authBtn) {
            const user = firebase.auth().currentUser;
            authBtn.textContent = user ? (data['nav_mypage'] || 'My Page') : (data['nav_login'] || 'Login');
        }
    };
    window.changeLanguage = switchLanguage;

    // --- Firebase Setup ---
    const firebaseConfig = {
        apiKey: "AIzaSyDAdW_vJHUHuDaun2Kh94uC8ywlfOdyPco",
        authDomain: "checkit-43341.firebaseapp.com",
        projectId: "checkit-43341",
        storageBucket: "checkit-43341.firebasestorage.app",
        messagingSenderId: "818434232492",
        appId: "1:818434232492:web:713836b01fc11196150f09",
        measurementId: "G-WVDWXTJ1TR"
    };

    if (typeof firebase !== 'undefined') {
        if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
        const auth = firebase.auth(), db = firebase.firestore();

        let platformSub = null;

        const renderMyPage = async (user) => {
            const overlay = document.getElementById('mypage-overlay');
            if(!overlay) return;
            overlay.style.display = 'flex';
            document.body.classList.add('platform-view-active');
            
            try {
                const uSnap = await db.collection("users").doc(user.uid).get();
                const userData = uSnap.data();
                if (userData?.role === 'super_admin') renderAdmin(user);
                else if (userData?.role === 'company_admin') renderCorporate(user, userData.companyId);
                else renderUser(user);
            } catch (err) { renderUser(user); }
        };

        const renderAdmin = (admin) => {
            const overlay = document.getElementById('mypage-overlay');
            overlay.innerHTML = `<div class="mypage-header"><h2>Admin Dashboard</h2><button id="close-mypage" class="lang-btn">Close</button></div>
                <div class="admin-grid"><div class="admin-sidebar" id="admin-user-list"></div><div class="admin-main" id="admin-stats"></div></div>`;
            document.getElementById('close-mypage').onclick = () => { overlay.style.display='none'; document.body.classList.remove('platform-view-active'); if(platformSub) platformSub(); };
        };

        const renderCorporate = (user, companyId) => {
            const overlay = document.getElementById('mypage-overlay');
            overlay.innerHTML = `<div class="mypage-header"><h2>Corporate: ${companyId}</h2><button id="close-mypage" class="lang-btn">Close</button></div>
                <div class="container" style="padding:40px 0;"><div id="corp-stats" class="corp-stats-grid"></div><div class="info-panel"><table class="admin-table"><thead><tr><th>Name</th><th>Status</th></tr></thead><tbody id="corp-list"></tbody></table></div></div>`;
            document.getElementById('close-mypage').onclick = () => { overlay.style.display='none'; document.body.classList.remove('platform-view-active'); if(platformSub) platformSub(); };
        };

        const renderUser = (user) => {
            const overlay = document.getElementById('mypage-overlay');
            // Restore premium design for Individual Page
            overlay.innerHTML = `
                <div class="mypage-header">
                    <h2 data-lang-key="platform_title">CHECKIT PLATFORM</h2>
                    <button id="close-mypage" class="lang-btn" data-lang-key="platform_close">Close</button>
                </div>
                <div class="container" style="padding:20px 0;">
                    <div class="status-timeline" id="u-timeline"></div>
                    <div class="platform-grid">
                        <div class="info-panel" id="u-info">
                            <h3 data-lang-key="platform_status_title">My Service Status</h3>
                            <div id="u-status-content" style="margin-top:20px;"></div>
                        </div>
                        <div class="admin-chat-container">
                            <div class="chat-header">1:1 Support</div>
                            <div class="chat-messages" id="u-msgs"></div>
                            <div class="chat-input-area">
                                <input type="text" id="u-input" placeholder="Type message...">
                                <button id="u-send" class="lang-btn active">Send</button>
                            </div>
                        </div>
                    </div>
                </div>`;
            document.getElementById('close-mypage').onclick = () => { overlay.style.display='none'; document.body.classList.remove('platform-view-active'); if(platformSub) platformSub(); };
            
            platformSub = db.collection("user_process").doc(user.uid).onSnapshot(doc => {
                const data = doc.data() || { steps: [
                    { title: 'Applied', status: 'active', icon: 'fas fa-file-signature', description: 'Your inquiry has been received.' },
                    { title: 'Booking', status: 'pending', icon: 'fas fa-calendar-check', description: 'Matching with the best hospital.' },
                    { title: 'Check-up', status: 'pending', icon: 'fas fa-hospital-user', description: 'Support on the day of visit.' },
                    { title: 'Result', status: 'pending', icon: 'fas fa-poll-h', description: 'Translating and summarizing results.' }
                ]};
                document.getElementById('u-timeline').innerHTML = data.steps.map(s => `<div class="status-step ${s.status}"><i class="${s.icon}"></i><span>${s.title}</span></div>`).join('');
                const active = data.steps.find(s => s.status === 'active') || data.steps[0];
                document.getElementById('u-status-content').innerHTML = `
                    <div style="padding:25px; background:linear-gradient(135deg, #fff 0%, #f9f9f9 100%); border-radius:15px; border-left:6px solid var(--primary-color); box-shadow:var(--shadow-sm);">
                        <h4 style="color:var(--primary-dark); font-size:1.2rem; margin-bottom:10px;">${active.title}</h4>
                        <p style="color:var(--text-color); opacity:0.8;">${active.description || '진행 상황을 확인 중입니다.'}</p>
                    </div>`;
            });
        };

        const showLoginModal = () => {
            if(document.getElementById('login-modal-overlay')) return;
            const modalHtml = `<div id="login-modal-overlay" style="display:flex;">
                <div class="login-modal-box">
                    <button id="close-login-modal" style="position:absolute; top:15px; right:20px; background:none; border:none; font-size:24px; cursor:pointer;">&times;</button>
                    <h2 class="modal-logo">CHECKIT LOGIN</h2>
                    <div class="platform-tabs" style="justify-content:center; margin-bottom:20px;">
                        <div class="p-tab active" id="tab-type-user">개인 고객</div>
                        <div class="p-tab" id="tab-type-corp">기업 관리자</div>
                        <div class="p-tab" id="tab-type-master">마스터</div>
                    </div>
                    <div id="key-field-container" style="display:none; margin-bottom:20px;">
                        <input type="text" id="global-admin-key" placeholder="보안 KEY 입력" style="padding:12px; border:2px solid var(--primary-color); border-radius:10px; width:100%; text-align:center;">
                    </div>
                    <div style="display:flex; flex-direction:column; gap:12px;">
                        <button id="btn-google-login" class="btn-auth btn-google">Google 로그인</button>
                        <hr style="border:none; border-top:1px solid #eee; margin:10px 0;">
                        <input type="email" id="auth-email" placeholder="Email" style="padding:12px; border:1px solid #ddd; border-radius:10px;">
                        <input type="password" id="auth-pass" placeholder="Password" style="padding:12px; border:1px solid #ddd; border-radius:10px;">
                        <button id="btn-email-login" class="btn-auth btn-primary">로그인</button>
                    </div>
                </div></div>`;
            document.body.insertAdjacentHTML('beforeend', modalHtml);

            const keyContainer = document.getElementById('key-field-container'), keyInput = document.getElementById('global-admin-key');
            let selectedType = 'user';

            const updateTabs = (type) => {
                selectedType = type;
                document.querySelectorAll('.p-tab').forEach(t => t.classList.remove('active'));
                document.getElementById(`tab-type-${type}`).classList.add('active');
                keyContainer.style.display = type === 'user' ? 'none' : 'block';
            };
            document.getElementById('tab-type-user').onclick = () => updateTabs('user');
            document.getElementById('tab-type-corp').onclick = () => updateTabs('corp');
            document.getElementById('tab-type-master').onclick = () => updateTabs('master');

            const handleSuccess = async (user) => {
                const key = keyInput.value.trim();
                if (selectedType === 'master' && key === "CHECKIT_MASTER_2026") await db.collection("users").doc(user.uid).set({ role: 'super_admin' }, { merge: true });
                else if (selectedType === 'corp' && key.startsWith("COMP_")) await db.collection("users").doc(user.uid).set({ role: 'company_admin', companyId: key.replace("COMP_", "") }, { merge: true });
                else await db.collection("users").doc(user.uid).set({ role: 'user' }, { merge: true });
                document.getElementById('login-modal-overlay').remove();
                renderMyPage(user);
            };

            document.getElementById('close-login-modal').onclick = () => document.getElementById('login-modal-overlay').remove();
            document.getElementById('btn-google-login').onclick = async () => { try { const res = await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()); handleSuccess(res.user); } catch(e) { alert(e.message); } };
            document.getElementById('btn-email-login').onclick = async () => {
                const email = document.getElementById('auth-email').value.trim(), pass = document.getElementById('auth-pass').value;
                try { const res = await auth.signInWithEmailAndPassword(email, pass); handleSuccess(res.user); } catch(e) { alert(e.message); }
            };
        };

        const initAuthNav = () => {
            auth.onAuthStateChanged(user => {
                const nav = document.querySelector('#language-switcher');
                let btn = document.getElementById('platform-auth-btn') || document.createElement('button');
                if(!btn.id) { btn.id='platform-auth-btn'; btn.className='lang-btn auth-main-btn'; nav.appendChild(btn); }
                btn.textContent = user ? 'My Page' : 'Login';
                btn.onclick = () => user ? renderMyPage(user) : showLoginModal();
                if(user && !document.getElementById('logout-btn')) {
                    const lo = document.createElement('button'); lo.id='logout-btn'; lo.className='lang-btn logout-btn'; lo.textContent='Logout';
                    lo.onclick = () => auth.signOut().then(() => location.reload()); nav.appendChild(lo);
                }
            });
        };
        initAuthNav();
    }
    switchLanguage('ko');
});