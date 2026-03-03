document.addEventListener('DOMContentLoaded', () => {

    // --- 1. FULL MULTILINGUAL DATA (RESTORING ALL KEYS) ---
    const translations = {
        ko: {
            'nav_home': '홈', 'hero_cta': '지금 바로 상담 신청', 'learn_more': '더 알아보기',
            'platform_title': 'CHECKIT 플랫폼', 'platform_status_title': '나의 서비스 현황',
            'platform_close': '닫기', 'contact_success': '문의가 성공적으로 접수되었습니다!',
            'admin_title': '매니저 관리 대시보드', 'onboarding_title': '프로필 완성하기',
            'nav_mypage': '마이페이지', 'nav_login': '로그인', 'nav_logout': '로그아웃',
            'hero_title': '외국인을 위한 전문 건강검진 예약 서비스',
            'hero_subtitle': '어려운 한국 병원 예약과 건강검진, CHECKIT이 모국어로 완벽하게 도와드립니다.',
            'why_us_title': '왜 CHECKIT인가요?',
            'why_us_subtitle_new': '외국인 근로자와 기업 모두가 만족하는 건강검진 관리의 새로운 표준',
            'process_title': '이용 프로세스',
            'testimonials_title': '고객 후기',
            'contact_title_new': '궁금한 점이 있으신가요?',
            'corporate_page_title': '기업 고객 토탈 솔루션',
            'individual_page_title': '개인 고객 서비스',
            'stat_total_clients': '전체 고객', 'stat_pending_leads': '미처리 문의'
        },
        en: {
            'nav_home': 'Home', 'hero_cta': 'Apply Now', 'learn_more': 'Learn More',
            'platform_title': 'CHECKIT PLATFORM', 'platform_status_title': 'My Service Status',
            'platform_close': 'Close', 'nav_mypage': 'My Page', 'nav_login': 'Login', 'nav_logout': 'Logout',
            'hero_title': 'Health Check-up Booking for Foreigners',
            'hero_subtitle': 'Complex Korean hospital bookings, CHECKIT helps you perfectly in your native language.'
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
            'hero_title': 'Dịch vụ đặt lịch khám sức khỏe cho người nước ngoài',
            'hero_subtitle': 'Đặt lịch bệnh viện Hàn Quốc không còn khó khăn, CHECKIT hỗ trợ bạn hoàn hảo bằng tiếng mẹ đẻ.'
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

        db.enablePersistence({ synchronizeTabs: true }).catch(() => {});

        let platformSub = null;

        const renderMyPage = async (user) => {
            const overlay = document.getElementById('mypage-overlay');
            if(!overlay) return;
            
            overlay.style.display = 'flex';
            document.body.classList.add('platform-view-active');
            overlay.innerHTML = '<div class="mypage-header"><h2>Loading Dashboard...</h2></div>';
            
            try {
                const uSnap = await db.collection("users").doc(user.uid).get();
                const userData = uSnap.data();
                
                if (userData) {
                    if (userData.role === 'super_admin') renderAdmin(user);
                    else if (userData.role === 'company_admin') renderCorporate(user, userData.companyId);
                    else renderUser(user);
                } else {
                    renderUser(user);
                }
            } catch (err) {
                renderUser(user);
            }
        };

        const renderAdmin = (admin) => {
            const overlay = document.getElementById('mypage-overlay');
            overlay.innerHTML = `
                <div class="mypage-header"><h2>Master Admin Dashboard</h2><button id="close-mypage" class="lang-btn">Close</button></div>
                <div class="admin-grid">
                    <div class="admin-sidebar" style="padding:20px; border-right:1px solid #eee;">
                        <h3>User Management</h3><div id="admin-user-list"></div>
                    </div>
                    <div class="admin-main" style="padding:20px;"><div id="admin-stats" class="corp-stats-grid"></div></div>
                </div>`;
            document.getElementById('close-mypage').onclick = () => { overlay.style.display='none'; document.body.classList.remove('platform-view-active'); if(platformSub) platformSub(); };
            
            platformSub = db.collection("users").where("role", "==", "user").onSnapshot(snap => {
                document.getElementById('admin-user-list').innerHTML = snap.docs.map(doc => `<div class="stat-card" style="margin-bottom:10px; padding:10px;">${doc.data().email}</div>`).join('');
                document.getElementById('admin-stats').innerHTML = `<div class="corp-stat-card"><span class="corp-stat-val">${snap.size}</span><span class="corp-stat-label">Total Users</span></div>`;
            });
        };

        const renderCorporate = (user, companyId) => {
            const overlay = document.getElementById('mypage-overlay');
            overlay.innerHTML = `
                <div class="mypage-header">
                    <h2>Corporate Portal: ${companyId}</h2>
                    <div style="display:flex; gap:10px;"><button class="btn-export" id="btn-csv-export">Export CSV</button><button id="close-mypage" class="lang-btn">Close</button></div>
                </div>
                <div class="container" style="padding:40px 0;">
                    <div id="corp-stats-container" class="corp-stats-grid"></div>
                    <div class="info-panel">
                        <table class="admin-table">
                            <thead><tr><th>Name</th><th>Site</th><th>Reservation</th><th>Exam</th><th>Hospital</th><th>Status</th></tr></thead>
                            <tbody id="corp-list"></tbody>
                        </table>
                    </div>
                </div>`;

            document.getElementById('close-mypage').onclick = () => { overlay.style.display='none'; document.body.classList.remove('platform-view-active'); if(platformSub) platformSub(); };
            const listEl = document.getElementById('corp-list'), statsEl = document.getElementById('corp-stats-container');
            const formatDate = (ts) => { if(!ts) return '-'; const date = ts.seconds ? new Date(ts.seconds * 1000) : new Date(ts); return date.toISOString().split('T')[0]; };

            platformSub = db.collection("user_process").where("companyId", "==", companyId).onSnapshot(snap => {
                const data = snap.docs.map(doc => doc.data());
                listEl.innerHTML = data.map(d => `<tr>
                    <td><strong>${d.name || '-'}</strong></td>
                    <td>${d.site || '-'}</td>
                    <td><small>${formatDate(d.reservationStart)} ~ ${formatDate(d.reservationEnd)}</small></td>
                    <td><small>${formatDate(d.examStart)} ~ ${formatDate(d.examEnd)}</small></td>
                    <td>${d.hospital || '-'}</td>
                    <td><span class="status-pill ${d.status}">${d.status}</span></td>
                </tr>`).join('');
                
                const stats = { pending: 0, reserved: 0, completed: 0 };
                data.forEach(d => { if(stats.hasOwnProperty(d.status)) stats[d.status]++; });
                statsEl.innerHTML = `<div class="corp-stat-card"><span class="corp-stat-val">${data.length}</span><span class="corp-stat-label">Total</span></div>
                    <div class="corp-stat-card pending"><span class="corp-stat-val">${stats.pending}</span><span class="corp-stat-label">Pending</span></div>
                    <div class="corp-stat-card reserved"><span class="corp-stat-val">${stats.reserved}</span><span class="corp-stat-label">Reserved</span></div>`;
            });
        };

        const renderUser = (user) => {
            const overlay = document.getElementById('mypage-overlay');
            overlay.innerHTML = `<div class="mypage-header"><h2>My Status</h2><button id="close-mypage" class="lang-btn">Close</button></div>
                <div class="container" style="padding:20px 0;"><div class="status-timeline" id="u-timeline"></div><div class="info-panel" id="u-info"></div></div>`;
            document.getElementById('close-mypage').onclick = () => { overlay.style.display='none'; document.body.classList.remove('platform-view-active'); if(platformSub) platformSub(); };
            
            platformSub = db.collection("user_process").doc(user.uid).onSnapshot(doc => {
                const d = doc.data() || { steps: [{title:'Applied', status:'active', icon:'fas fa-file-signature'}] };
                document.getElementById('u-timeline').innerHTML = d.steps.map(s => `<div class="status-step ${s.status}"><i class="${s.icon}"></i><span>${s.title}</span></div>`).join('');
                document.getElementById('u-info').innerHTML = `<div class="info-panel" style="border-left:5px solid var(--primary-color);"><h4>Current: ${d.steps.find(s=>s.status==='active')?.title}</h4><p>We are managing your health check-up process.</p></div>`;
            });
        };

        const showLoginModal = () => {
            if(document.getElementById('login-modal-overlay')) return;
            const modalHtml = `<div id="login-modal-overlay" style="display:flex;">
                <div class="login-modal-box">
                    <button id="close-login-modal" style="position:absolute; top:15px; right:20px; background:none; border:none; font-size:24px; cursor:pointer;">&times;</button>
                    <h2 class="modal-logo" style="color:var(--primary-color);">CHECKIT</h2>
                    <div class="platform-tabs" style="justify-content:center; margin-bottom:20px;">
                        <div class="p-tab active" id="tab-type-user">개인 고객</div>
                        <div class="p-tab" id="tab-type-corp">기업 관리자</div>
                        <div class="p-tab" id="tab-type-master">마스터</div>
                    </div>
                    <div id="key-field-container" style="display:none; margin-bottom:20px;">
                        <input type="text" id="global-admin-key" placeholder="보안 KEY 입력" style="padding:12px; border:2px solid var(--primary-color); border-radius:10px; width:100%; text-align:center; font-weight:700;">
                    </div>
                    <div style="display:flex; flex-direction:column; gap:12px;">
                        <button id="btn-google-login" class="btn-auth btn-google" style="background:#fff; border:1px solid #ddd; padding:12px; border-radius:12px; cursor:pointer; font-weight:600;">Google로 계속하기</button>
                        <div style="text-align:center; color:#ccc; font-size:0.8rem;">OR</div>
                        <input type="email" id="auth-email" placeholder="이메일" style="padding:12px; border:1px solid #ddd; border-radius:10px;">
                        <input type="password" id="auth-pass" placeholder="비밀번호" style="padding:12px; border:1px solid #ddd; border-radius:10px;">
                        <button id="btn-email-login" class="btn-auth btn-primary" style="background:var(--primary-color); color:#fff; border:none; padding:14px; border-radius:12px; cursor:pointer; font-weight:700;">로그인</button>
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
                const box = document.querySelector('.login-modal-box');
                box.innerHTML = `<div style="text-align:center; padding:30px;"><div style="font-size:50px; color:var(--primary-color); margin-bottom:20px;"><i class="fas fa-check-circle"></i></div><h3>로그인 성공!</h3><p>대시보드로 이동합니다.</p></div>`;
                
                if (selectedType === 'master' && key === "CHECKIT_MASTER_2026") await db.collection("users").doc(user.uid).set({ role: 'super_admin' }, { merge: true });
                else if (selectedType === 'corp' && key.startsWith("COMP_")) await db.collection("users").doc(user.uid).set({ role: 'company_admin', companyId: key.replace("COMP_", "") }, { merge: true });
                else await db.collection("users").doc(user.uid).set({ role: 'user' }, { merge: true });

                setTimeout(() => { document.getElementById('login-modal-overlay').remove(); renderMyPage(user); }, 1000);
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