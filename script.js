document.addEventListener('DOMContentLoaded', () => {

    // --- 1. FULL MULTILINGUAL DATA ---
    const translations = {
        ko: {
            'nav_home': '홈', 'hero_cta': '지금 바로 상담 신청', 'learn_more': '더 알아보기',
            'platform_title': 'CHECKIT 플랫폼', 'platform_status_title': '나의 서비스 현황',
            'platform_close': '닫기', 'contact_success': '문의가 성공적으로 접수되었습니다!',
            'admin_title': '매니저 관리 대시보드', 'onboarding_title': '프로필 완성하기',
            'nav_mypage': '마이페이지', 'nav_login': '로그인', 'nav_logout': '로그아웃'
        }
        // ... (EN, CN, VN translations remain consistent in project context)
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
    };

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
        const auth = firebase.auth(), db = firebase.firestore(), storage = firebase.storage();

        db.enablePersistence({ synchronizeTabs: true }).catch(err => console.error("Persistence fail:", err.code));

        let platformSub = null, chatSub = null, filesSub = null, leadsSub = null, statsSub = null;

        const renderMyPage = async (user) => {
            const overlay = document.getElementById('mypage-overlay');
            if(!overlay) return;
            
            overlay.style.display = 'flex';
            document.body.classList.add('platform-view-active');
            overlay.innerHTML = '<div class="mypage-header"><h2>Loading...</h2></div>';
            
            try {
                const uSnap = await db.collection("users").doc(user.uid).get();
                const userData = uSnap.data();
                
                if (userData) {
                    if (userData.role === 'super_admin') renderAdmin(user);
                    else if (userData.role === 'company_admin') renderCorporate(user, userData.companyId);
                    else renderUser(user);
                } else {
                    renderUser(user); // Fallback for new users
                }
            } catch (err) {
                console.error("Routing error:", err);
                renderUser(user);
            }
        };

        const renderAdmin = (admin) => {
            const overlay = document.getElementById('mypage-overlay');
            overlay.innerHTML = `
                <div class="mypage-header"><h2>Master Admin Dashboard</h2>
                <div style="display:flex; gap:10px;"><button class="lang-btn active" id="tab-users">Clients</button><button id="close-mypage" class="lang-btn">Close</button></div></div>
                <div class="admin-grid">
                    <div class="admin-sidebar"><div id="admin-user-list" style="padding:10px;">Loading users...</div></div>
                    <div class="admin-main" id="admin-detail-view" style="padding:40px; text-align:center;">
                        <h3>Welcome, Master Admin</h3>
                        <p>왼쪽 리스트에서 고객을 선택하여 관리하세요.</p>
                    </div>
                </div>`;
            
            document.getElementById('close-mypage').onclick = () => { overlay.style.display='none'; document.body.classList.remove('platform-view-active'); clearSubs(); };
            
            db.collection("users").where("role", "==", "user").onSnapshot(snap => {
                const list = document.getElementById('admin-user-list');
                if(!list) return;
                list.innerHTML = snap.docs.map(doc => {
                    const u = doc.data();
                    return `<div class="stat-card" style="margin-bottom:10px; cursor:pointer;" onclick="alert('User: ${u.fullName}')">
                        <strong>${u.fullName || u.email}</strong><br><small>${u.nationality || '-'}</small>
                    </div>`;
                }).join('');
            });
        };

        const renderCorporate = (user, companyId) => {
            const overlay = document.getElementById('mypage-overlay');
            overlay.innerHTML = `
                <div class="mypage-header">
                    <h2>Corporate Portal: ${companyId}</h2>
                    <div style="display:flex; gap:10px;">
                        <button class="btn-export" id="btn-csv-export"><i class="fas fa-download"></i> 리포트 다운로드 (CSV)</button>
                        <button id="close-mypage" class="lang-btn">Close</button>
                    </div>
                </div>
                <div class="container" style="padding:40px 0;">
                    <div id="corp-stats-container" class="corp-stats-grid"></div>
                    <div class="corp-filter-bar">
                        <input type="text" id="corp-search" class="corp-search" placeholder="직원 성명 또는 현장 검색...">
                        <select id="corp-site-filter" class="corp-select"><option value="all">모든 현장</option></select>
                    </div>
                    <div class="info-panel">
                        <h3 id="site-display-title">직원 검진 관리 명단</h3>
                        <div class="admin-table-container">
                            <table class="admin-table">
                                <thead><tr><th>성명</th><th>현장</th><th>예약 기간</th><th>검진 기간</th><th>병원</th><th>상태</th></tr></thead>
                                <tbody id="corp-list"></tbody>
                            </table>
                        </div>
                    </div>
                </div>`;

            document.getElementById('close-mypage').onclick = () => { overlay.style.display='none'; document.body.classList.remove('platform-view-active'); clearSubs(); };
            
            const listEl = document.getElementById('corp-list'), statsEl = document.getElementById('corp-stats-container');
            const formatDate = (ts) => { if(!ts) return '-'; const date = ts.seconds ? new Date(ts.seconds * 1000) : new Date(ts); return date.toISOString().split('T')[0]; };

            platformSub = db.collection("user_process").where("companyId", "==", companyId).onSnapshot(snap => {
                const allData = snap.docs.map(doc => doc.data());
                listEl.innerHTML = allData.map(d => `<tr>
                    <td><strong>${d.name || '-'}</strong></td>
                    <td>${d.site || '-'}</td>
                    <td>${formatDate(d.reservationStart)} ~ ${formatDate(d.reservationEnd)}</td>
                    <td>${formatDate(d.examStart)} ~ ${formatDate(d.examEnd)}</td>
                    <td>${d.hospital || '-'}</td>
                    <td><span class="status-pill ${d.status}">${d.status}</span></td>
                </tr>`).join('');
                
                const stats = { pending: 0, reserved: 0, completed: 0 };
                allData.forEach(d => { if(stats.hasOwnProperty(d.status)) stats[d.status]++; });
                statsEl.innerHTML = `<div class="corp-stat-card"><span class="corp-stat-val">${allData.length}</span><span class="corp-stat-label">전체</span></div>
                    <div class="corp-stat-card pending"><span class="corp-stat-val">${stats.pending}</span><span class="corp-stat-label">대기</span></div>
                    <div class="corp-stat-card reserved"><span class="corp-stat-val">${stats.reserved}</span><span class="corp-stat-label">예약</span></div>`;
            });
        };

        const renderUser = (user) => {
            const overlay = document.getElementById('mypage-overlay');
            overlay.innerHTML = `<div class="mypage-header"><h2>CHECKIT PLATFORM</h2>
                <div style="display:flex; gap:10px;"><button id="close-mypage" class="lang-btn">Close</button></div></div>
                <div class="container" style="padding:20px 0;"><div class="status-timeline" id="u-timeline"></div>
                <div class="platform-grid"><div class="info-panel" id="u-info"></div><div class="admin-chat-container"><div class="chat-header">1:1 Support</div><div class="chat-messages" id="u-msgs"></div></div></div></div>`;
            document.getElementById('close-mypage').onclick = () => { overlay.style.display='none'; document.body.classList.remove('platform-view-active'); clearSubs(); };
            
            platformSub = db.collection("user_process").doc(user.uid).onSnapshot(doc => {
                const data = doc.data() || { steps: [{ title: 'Applied', status: 'active', icon: 'fas fa-file-signature' }, { title: 'Booking', status: 'pending', icon: 'fas fa-calendar-check' }]};
                document.getElementById('u-timeline').innerHTML = data.steps.map(s => `<div class="status-step ${s.status}"><i class="${s.icon}"></i><span>${s.title}</span></div>`).join('');
                document.getElementById('u-info').innerHTML = `<h3>Current Status</h3><div class="info-panel" style="margin-top:20px; border-left:5px solid var(--primary-color);"><h4>${data.steps.find(s=>s.status==='active')?.title || 'Applied'}</h4><p>검진 일정을 준비 중입니다.</p></div>`;
            });
        };

        const clearSubs = () => { [platformSub, chatSub, leadsSub, statsSub].forEach(s => s && s()); };

        const showLoginModal = () => {
            if(document.getElementById('login-modal-overlay')) return;
            const modalHtml = `
                <div id="login-modal-overlay" style="display:flex;">
                    <div class="login-modal-box">
                        <button id="close-login-modal" style="position:absolute; top:15px; right:20px; background:none; border:none; font-size:24px; cursor:pointer;">&times;</button>
                        <h2 class="modal-logo" style="color:var(--primary-color);">CHECKIT</h2>
                        <div class="platform-tabs" style="justify-content:center; margin-bottom:20px;">
                            <div class="p-tab active" id="tab-type-user">개인 고객</div>
                            <div class="p-tab" id="tab-type-corp">기업 관리자</div>
                            <div class="p-tab" id="tab-type-master">CHECKIT 관리자</div>
                        </div>
                        <div id="key-field-container" style="display:none; margin-bottom:20px;">
                            <input type="text" id="global-admin-key" placeholder="보안 KEY 입력" style="padding:12px; border:2px solid var(--primary-color); border-radius:10px; width:100%; box-sizing:border-box; text-align:center; font-weight:700;">
                        </div>
                        <div id="auth-main-view" style="display:flex; flex-direction:column; gap:12px;">
                            <button id="btn-google-login" class="btn-auth btn-google" style="background:#fff; border:1px solid #ddd; padding:12px; border-radius:12px; cursor:pointer; font-weight:600;">Google로 계속하기</button>
                            <button id="show-email-login" class="btn-auth btn-email" style="background:#f8f9fa; border:1px solid #eee; padding:12px; border-radius:12px; cursor:pointer; font-weight:600;">이메일로 로그인</button>
                        </div>
                        <div id="auth-email-view" style="display:none; flex-direction:column; gap:15px;">
                            <input type="email" id="auth-email" placeholder="이메일" style="padding:14px; border:1px solid #ddd; border-radius:10px;">
                            <input type="password" id="auth-pass" placeholder="비밀번호" style="padding:14px; border:1px solid #ddd; border-radius:10px;">
                            <button id="btn-email-action" class="btn-auth btn-primary" style="background:var(--primary-color); color:#fff; border:none; padding:14px; border-radius:12px; cursor:pointer; font-weight:700;">로그인</button>
                            <button id="btn-auth-back" style="background:none; border:none; color:#888; cursor:pointer;">뒤로 가기</button>
                        </div>
                    </div>
                </div>`;
            document.body.insertAdjacentHTML('beforeend', modalHtml);

            const overlay = document.getElementById('login-modal-overlay'), keyContainer = document.getElementById('key-field-container'), keyInput = document.getElementById('global-admin-key');
            let selectedType = 'user';

            const updateTabs = (type) => {
                selectedType = type;
                document.querySelectorAll('.p-tab').forEach(t => t.classList.remove('active'));
                if(type === 'user') { document.getElementById('tab-type-user').classList.add('active'); keyContainer.style.display = 'none'; }
                else { document.getElementById(`tab-type-${type}`).classList.add('active'); keyContainer.style.display = 'block'; keyInput.placeholder = type === 'corp' ? "기업 보안 KEY (COMP_아이디)" : "CHECKIT 마스터 KEY 입력"; }
            };
            document.getElementById('tab-type-user').onclick = () => updateTabs('user');
            document.getElementById('tab-type-corp').onclick = () => updateTabs('corp');
            document.getElementById('tab-type-master').onclick = () => updateTabs('master');

            const finalizeAuth = (user) => { 
                if(document.getElementById('login-modal-overlay')) document.getElementById('login-modal-overlay').remove(); 
                renderMyPage(user); 
            };

            const showSuccessState = (title, subtitle, user) => {
                const box = document.querySelector('.login-modal-box');
                if(!box) return finalizeAuth(user);
                box.innerHTML = `<div style="padding: 20px 0; text-align:center;"><div style="width: 60px; height: 60px; background: #e8f5e9; color: var(--primary-color); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; font-size: 30px;"><i class="fas fa-check"></i></div><h2>${title}</h2><p>${subtitle}</p></div>`;
                setTimeout(() => finalizeAuth(user), 800);
            };

            const handleAdminPromotion = async (user, key) => {
                try {
                    if (selectedType === 'master' && key === "CHECKIT_MASTER_2026") {
                        await db.collection("users").doc(user.uid).set({ role: "super_admin" }, { merge: true });
                        showSuccessState("Master Admin", "관리자 대시보드로 진입합니다.", user);
                        return true;
                    }
                    if (selectedType === 'corp' && key.startsWith("COMP_")) {
                        const cid = key.replace("COMP_", "");
                        await db.collection("users").doc(user.uid).set({ role: "company_admin", companyId: cid }, { merge: true });
                        showSuccessState("Corporate Admin", `${cid} 기업 포털로 진입합니다.`, user);
                        return true;
                    }
                    if (selectedType === 'user') {
                        await db.collection("users").doc(user.uid).set({ role: "user" }, { merge: true });
                        showSuccessState("Welcome!", "체킷 플랫폼에 접속합니다.", user);
                        return true;
                    }
                    alert("보안 KEY가 올바르지 않습니다.");
                    await auth.signOut();
                    return false;
                } catch (e) {
                    finalizeAuth(user);
                }
            };

            document.getElementById('close-login-modal').onclick = () => overlay.remove();
            document.getElementById('btn-google-login').onclick = async () => {
                try {
                    const result = await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
                    await handleAdminPromotion(result.user, keyInput.value.trim());
                } catch (err) { console.error(err); }
            };
            document.getElementById('show-email-login').onclick = () => { document.getElementById('auth-main-view').style.display = 'none'; document.getElementById('auth-email-view').style.display = 'flex'; };
            document.getElementById('btn-auth-back').onclick = () => { document.getElementById('auth-email-view').style.display = 'none'; document.getElementById('auth-main-view').style.display = 'flex'; };
            
            document.getElementById('btn-email-action').onclick = async () => {
                const email = document.getElementById('auth-email').value.trim(), pass = document.getElementById('auth-pass').value;
                const btn = document.getElementById('btn-email-action');
                btn.disabled = true; btn.textContent = '로그인 중...';
                try {
                    const result = await auth.signInWithEmailAndPassword(email, pass);
                    await handleAdminPromotion(result.user, keyInput.value.trim());
                } catch (err) {
                    alert("오류: " + err.message);
                    btn.disabled = false; btn.textContent = '로그인';
                }
            };
        };

        const initAuthNav = () => {
            auth.onAuthStateChanged(user => {
                const btn = document.getElementById('platform-auth-btn') || document.createElement('button');
                if(!btn.id) { btn.id='platform-auth-btn'; btn.className='lang-btn auth-main-btn'; document.querySelector('#language-switcher').appendChild(btn); }
                if(user) { btn.textContent = 'My Page'; btn.onclick = () => renderMyPage(user); }
                else { btn.textContent = 'Login'; btn.onclick = () => showLoginModal(); }
            });
        };
        initAuthNav();
    }
});