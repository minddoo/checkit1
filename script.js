document.addEventListener('DOMContentLoaded', () => {

    // --- 1. FULL TRANSLATION DATA ---
    const translations = {
        ko: {
            'nav_home': '홈', 'hero_cta': '지금 바로 상담 신청', 'learn_more': '더 알아보기',
            'platform_title': 'CHECKIT 플랫폼', 'platform_status_title': '나의 서비스 현황',
            'platform_current_step': '현재 단계', 'platform_details': '상세 안내',
            'platform_manager_title': '전담 매니저 매칭 완료', 'platform_chat_title': '1:1 행정 지원 채팅',
            'platform_chat_placeholder': '메시지를 입력하세요...', 'platform_chat_send': '전송',
            'platform_close': '닫기', 'platform_loading': '데이터를 불러오는 중입니다...',
            'platform_manager_spec': '영어/한국어 전문 매니저',
            'contact_success': '문의가 성공적으로 접수되었습니다!',
            'admin_title': '매니저 관리 대시보드', 'admin_tab_users': '고객 관리', 'admin_tab_leads': '상담 문의',
            'onboarding_title': '프로필 완성하기', 'onboarding_subtitle': '정확한 상담을 위해 기본 정보를 입력해 주세요.',
            'onboarding_name': '이름 (여권 영문)', 'onboarding_nat': '국적', 'onboarding_birth': '생년월일 (YYYY-MM-DD)',
            'onboarding_submit': '저장하고 시작하기',
            'chatbot_manager_btn': '전담 매니저와 채팅하기'
        },
        en: {
            'nav_home': 'Home', 'hero_cta': 'Apply Now', 'learn_more': 'Learn More',
            'platform_title': 'CHECKIT PLATFORM', 'platform_status_title': 'My Service Status',
            'platform_current_step': 'Current Step', 'platform_details': 'Details',
            'platform_manager_title': 'Manager Matched', 'platform_chat_title': '1:1 Support Chat',
            'platform_chat_placeholder': 'Type a message...', 'platform_chat_send': 'Send',
            'platform_close': 'Close', 'platform_loading': 'Loading data...',
            'platform_manager_spec': 'English/Korean Specialist',
            'contact_success': 'Inquiry submitted successfully!',
            'admin_title': 'Manager Dashboard', 'admin_tab_users': 'Clients', 'admin_tab_leads': 'Inquiries',
            'onboarding_title': 'Complete Your Profile', 'onboarding_subtitle': 'Please provide basic info for better service.',
            'onboarding_name': 'Full Name (Passport)', 'onboarding_nat': 'Nationality', 'onboarding_birth': 'Date of Birth (YYYY-MM-DD)',
            'onboarding_submit': 'Save & Start',
            'chatbot_manager_btn': 'Chat with Manager'
        }
    };

    let currentLang = 'ko';
    const switchLanguage = (newLang) => {
        currentLang = newLang;
        document.documentElement.lang = newLang;
        const data = translations[newLang] || translations['ko'];
        document.querySelectorAll('[data-lang-key]').forEach(el => {
            const key = el.getAttribute('data-lang-key');
            if (data[key]) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.placeholder = data[key];
                else el.innerHTML = data[key];
            }
        });
        document.querySelectorAll('#language-switcher .lang-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === newLang));
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

        // --- Onboarding Flow ---
        const checkOnboarding = async (user) => {
            const uRef = db.collection("users").doc(user.uid);
            const uSnap = await uRef.get();
            const data = uSnap.data();
            if (!data || !data.fullName) {
                showOnboardingModal(user);
            }
        };

        const showOnboardingModal = (user) => {
            const lang = translations[currentLang];
            const modalHtml = `
                <div id="login-modal-overlay" style="display:flex;">
                    <div class="login-modal-box onboarding-box">
                        <h2 class="modal-logo">CHECKIT</h2>
                        <h3>${lang['onboarding_title']}</h3>
                        <p>${lang['onboarding_subtitle']}</p>
                        <div class="form-group-auth">
                            <input type="text" id="ob-name" placeholder="${lang['onboarding_name']}">
                            <div class="form-row">
                                <input type="text" id="ob-nat" placeholder="${lang['onboarding_nat']}">
                                <input type="text" id="ob-birth" placeholder="${lang['onboarding_birth']}">
                            </div>
                        </div>
                        <button id="btn-ob-submit" class="btn-auth btn-primary">${lang['onboarding_submit']}</button>
                    </div>
                </div>
            `;
            document.body.insertAdjacentHTML('beforeend', modalHtml);
            document.getElementById('btn-ob-submit').onclick = async () => {
                const name = document.getElementById('ob-name').value;
                const nat = document.getElementById('ob-nat').value;
                const birth = document.getElementById('ob-birth').value;
                if (!name || !nat) return alert("Please fill essential fields.");
                
                await db.collection("users").doc(user.uid).update({
                    fullName: name, nationality: nat, dob: birth, onboardingComplete: true
                });
                location.reload();
            };
        };

        // --- Platform Dashboards ---
        let platformSub = null, chatSub = null;

        const renderMyPage = async (user) => {
            const overlay = document.getElementById('mypage-overlay');
            overlay.style.display = 'flex';
            document.body.classList.add('platform-view-active');
            const uSnap = await db.collection("users").doc(user.uid).get();
            if (uSnap.data()?.role === 'super_admin') renderAdmin(user);
            else renderUser(user);
        };

        const renderAdmin = (admin) => {
            const overlay = document.getElementById('mypage-overlay');
            overlay.innerHTML = `<div class="mypage-header"><h2>Admin Dashboard</h2><button id="close-mypage" class="lang-btn">Close</button></div>
                <div class="admin-grid"><div class="admin-sidebar" id="admin-user-list"></div>
                <div class="admin-main" id="admin-detail-view">Select a client to manage.</div></div>`;
            document.getElementById('close-mypage').onclick = () => { overlay.style.display='none'; document.body.classList.remove('platform-view-active'); if(platformSub) platformSub(); };
            platformSub = db.collection("users").where("role", "==", "user").onSnapshot(snap => {
                const list = document.getElementById('admin-user-list'); list.innerHTML = "<h3>Active Clients</h3>";
                snap.forEach(doc => {
                    const u = doc.data();
                    const div = document.createElement('div'); div.className = 'safety-card'; div.style.padding='15px'; div.style.cursor='pointer'; div.style.marginBottom='10px';
                    div.innerHTML = `<strong>${u.fullName || u.email}</strong><br><small>${u.nationality || 'Unknown'} | ${u.selectedPlan || 'No Plan'}</small>`;
                    div.onclick = () => selectUser(doc.id, u);
                    list.appendChild(div);
                });
            });
        };

        const selectUser = (uid, userData) => {
            const view = document.getElementById('admin-detail-view');
            view.innerHTML = `
                <div style="text-align:left; background:#fff; padding:20px; border-radius:12px; margin-bottom:20px; box-shadow:var(--shadow-sm);">
                    <h3 style="margin:0;">${userData.fullName || userData.email}</h3>
                    <p style="color:#888;">${userData.nationality} | ${userData.dob} | ${userData.email}</p>
                </div>
                <div id="status-btns" style="margin-bottom:20px; display:flex; gap:10px;"></div>
                <div class="admin-chat-container" style="height:400px; width:100%; margin:0;"><div class="chat-messages" id="admin-msgs"></div>
                <div class="chat-input-area"><input type="text" id="admin-chat-input"><button id="admin-send" class="lang-btn active">Send</button></div></div>
            `;
            const btnContainer = document.getElementById('status-btns');
            [0,1,2,3].forEach(i => {
                const b = document.createElement('button'); b.innerText = `Step ${i+1}`; b.className='lang-btn';
                b.onclick = () => updateUserStatus(uid, i); btnContainer.appendChild(b);
            });
            if(chatSub) chatSub();
            chatSub = db.collection("user_process").doc(uid).collection("messages").orderBy("timestamp", "asc").onSnapshot(snap => {
                const el = document.getElementById('admin-msgs'); el.innerHTML = "";
                snap.forEach(m => {
                    const d = document.createElement('div'); d.className = `message ${m.data().sender === 'user' ? 'bot' : 'user'}`;
                    d.textContent = m.data().text; el.appendChild(d);
                });
                el.scrollTop = el.scrollHeight;
            });
            document.getElementById('admin-send').onclick = async () => {
                const inp = document.getElementById('admin-chat-input');
                if(inp.value.trim()){
                    await db.collection("user_process").doc(uid).collection("messages").add({ text: inp.value.trim(), sender: "bot", timestamp: firebase.firestore.FieldValue.serverTimestamp() });
                    inp.value = "";
                }
            };
        };

        const updateUserStatus = async (uid, idx) => {
            const ref = db.collection("user_process").doc(uid);
            const steps = (await ref.get()).data().steps;
            steps.forEach((s, i) => s.status = i < idx ? 'completed' : (i === idx ? 'active' : 'pending'));
            await ref.update({ steps }); alert("Status Updated!");
        };

        const renderUser = (user) => {
            const overlay = document.getElementById('mypage-overlay');
            const lang = translations[currentLang];
            overlay.innerHTML = `<div class="mypage-header"><h2>${lang['platform_title']}</h2><button id="close-mypage" class="lang-btn">${lang['platform_close']}</button></div>
                <div class="status-timeline" id="u-timeline"></div><div class="platform-grid"><div class="info-panel" id="u-info"></div>
                <div class="admin-chat-container"><div class="chat-header"><i class="fas fa-headset"></i> ${lang['platform_chat_title']}</div>
                <div class="chat-messages" id="u-msgs"></div><div class="chat-input-area">
                <input type="text" id="u-chat-input"><button id="u-send" class="lang-btn active">Send</button></div></div></div>`;
            document.getElementById('close-mypage').onclick = () => { overlay.style.display='none'; document.body.classList.remove('platform-view-active'); if(platformSub) platformSub(); if(chatSub) chatSub(); };
            platformSub = db.collection("user_process").doc(user.uid).onSnapshot(doc => {
                const data = doc.data(); if(!data) return;
                document.getElementById('u-timeline').innerHTML = data.steps.map(s => `<div class="status-step ${s.status}"><i class="${s.icon}"></i><span>${s.title}</span></div>`).join('');
                const active = data.steps.find(s => s.status === 'active') || data.steps[0];
                document.getElementById('u-info').innerHTML = `<h3>${lang['platform_status_title']}</h3><p><strong>${active.title}</strong></p><p>${active.description}</p>`;
            });
            chatSub = db.collection("user_process").doc(user.uid).collection("messages").orderBy("timestamp", "asc").onSnapshot(snap => {
                const el = document.getElementById('u-msgs'); el.innerHTML = "";
                snap.forEach(m => {
                    const d = document.createElement('div'); d.className = `message ${m.data().sender === 'user' ? 'user' : 'bot'}`;
                    d.textContent = m.data().text; el.appendChild(d);
                });
                el.scrollTop = el.scrollHeight;
            });
            document.getElementById('u-send').onclick = async () => {
                const inp = document.getElementById('u-chat-input');
                if(inp.value.trim()){
                    await db.collection("user_process").doc(user.uid).collection("messages").add({ text: inp.value.trim(), sender: "user", timestamp: firebase.firestore.FieldValue.serverTimestamp() });
                    inp.value = "";
                }
            };
        };

        const initAuthNav = () => {
            const nav = document.querySelector('#language-switcher');
            let btn = document.getElementById('platform-auth-btn');
            if(!btn){ btn = document.createElement('button'); btn.id='platform-auth-btn'; btn.className='lang-btn auth-main-btn'; nav.appendChild(btn); }
            auth.onAuthStateChanged(user => {
                if(user){
                    btn.textContent = currentLang === 'ko' ? '마이페이지' : 'My Page'; btn.onclick = () => renderMyPage(user);
                    checkOnboarding(user);
                    if(!document.getElementById('logout-btn')){
                        const lo = document.createElement('button'); lo.id='logout-btn'; lo.className='lang-btn logout-btn'; lo.textContent='Logout';
                        lo.onclick = () => auth.signOut().then(() => location.reload()); nav.appendChild(lo);
                    }
                } else {
                    btn.textContent = 'Login'; btn.onclick = () => { const p = new firebase.auth.GoogleAuthProvider(); auth.signInWithPopup(p); };
                    document.getElementById('logout-btn')?.remove();
                }
            });
        };
        initAuthNav();
    }

    // --- Chatbot Upgrades ---
    const chatbotMessages = document.getElementById('chatbot-messages');
    if (chatbotMessages) {
        const obs = new MutationObserver(() => {
            const botMsgs = chatbotMessages.querySelectorAll('.message.bot');
            const last = botMsgs[botMsgs.length - 1];
            if (last && (last.innerText.includes('도움') || last.innerText.includes('help')) && !last.querySelector('.suggested-question-btn')) {
                const btn = document.createElement('button');
                btn.className = 'suggested-question-btn';
                btn.style.marginTop = '10px';
                btn.innerText = translations[currentLang]['chatbot_manager_btn'];
                btn.onclick = () => renderMyPage(firebase.auth().currentUser);
                last.appendChild(btn);
            }
        });
        obs.observe(chatbotMessages, { childList: true });
    }

    // --- B2B Slider ---
    const initB2B = () => {
        const open = document.getElementById('openProcessSlide'), modal = document.getElementById('processModal');
        if (!open || !modal) return;
        const img = document.getElementById('processImage'), ind = document.getElementById('indicator'), next = document.getElementById('nextBtn'), prev = document.getElementById('prevBtn');
        const imgs = Array.from({length:18}, (_,i) => `assets/process_${(i+1).toString().padStart(2,'0')}.png`);
        let cur = 0;
        const up = () => { if(img) img.src = imgs[cur]; if(ind) ind.innerText = `${cur+1}/18`; prev.disabled = cur===0; next.disabled = cur===17; };
        open.onclick = (e) => { e.preventDefault(); modal.style.display='flex'; up(); };
        document.getElementById('closeProcess').onclick = () => modal.style.display='none';
        next.onclick = () => { if(cur<17) { cur++; up(); } };
        prev.onclick = () => { if(cur>0) { cur--; up(); } };
    };
    initB2B();
});