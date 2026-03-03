document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        ko: {
            'nav_home': '홈', 'hero_cta': '지금 바로 상담 신청', 'learn_more': '더 알아보기',
            'platform_title': 'CHECKIT 플랫폼', 'platform_status_title': '나의 서비스 현황',
            'platform_current_step': '현재 단계', 'platform_details': '상세 안내',
            'platform_manager_title': '전담 매니저 매칭 완료', 'platform_chat_title': '1:1 행정 지원 채팅',
            'platform_chat_placeholder': '메시지를 입력하세요...', 'platform_chat_send': '전송',
            'platform_close': '닫기', 'platform_loading': '로딩 중...',
            'platform_manager_spec': '영어/한국어 전문 매니저',
            'contact_success': '문의가 접수되었습니다!', 'contact_error': '오류가 발생했습니다.',
            'admin_title': '매니저 대시보드', 'admin_user_list': '고객 리스트', 'admin_select_user': '고객을 선택하세요.'
        },
        en: {
            'nav_home': 'Home', 'hero_cta': 'Apply Now', 'learn_more': 'Learn More',
            'platform_title': 'CHECKIT PLATFORM', 'platform_status_title': 'Service Status',
            'platform_current_step': 'Current Step', 'platform_details': 'Details',
            'platform_manager_title': 'Manager Matched', 'platform_chat_title': '1:1 Support Chat',
            'platform_chat_placeholder': 'Type a message...', 'platform_chat_send': 'Send',
            'platform_close': 'Close', 'platform_loading': 'Loading...',
            'platform_manager_spec': 'English/Korean Specialist',
            'contact_success': 'Inquiry submitted!', 'contact_error': 'An error occurred.',
            'admin_title': 'Admin Dashboard', 'admin_user_list': 'Client List', 'admin_select_user': 'Select a client.'
        },
        cn: { 'nav_home': '首页', 'hero_cta': '立即申请', 'platform_title': 'CHECKIT 平台', 'platform_close': '关闭' },
        vn: { 'nav_home': 'Trang chủ', 'hero_cta': 'Đăng ký ngay', 'platform_title': 'Nền tảng CHECKIT', 'platform_close': 'Đóng' }
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
        if (document.body.classList.contains('platform-view-active')) renderMyPage(firebase.auth().currentUser);
    };
    window.changeLanguage = switchLanguage;
    document.querySelectorAll('#language-switcher .lang-btn').forEach(btn => btn.onclick = () => switchLanguage(btn.dataset.lang));

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

        document.querySelectorAll('.contact-form').forEach(form => {
            form.onsubmit = async (e) => {
                e.preventDefault();
                await db.collection("contact_inquiries").add({
                    email: form.querySelector('input[type="email"]')?.value || "",
                    message: form.querySelector('textarea')?.value || "",
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    language: currentLang
                });
                alert(translations[currentLang]['contact_success']);
                form.reset();
            };
        });

        const initUserDoc = async (user) => {
            const uRef = db.collection("users").doc(user.uid);
            const uSnap = await uRef.get();
            if (!uSnap.exists) {
                await uRef.set({ role: "user", email: user.email, createdAt: firebase.firestore.FieldValue.serverTimestamp() }, { merge: true });
                await db.collection("user_process").doc(user.uid).set({
                    steps: [
                        { title: "상담/신청", description: "접수 대기 중", status: "active", icon: "fas fa-file-alt" },
                        { title: "병원예약", description: "대기 중", status: "pending", icon: "fas fa-hospital" },
                        { title: "결과번역", description: "대기 중", status: "pending", icon: "fas fa-language" }
                    ]
                });
            }
        };

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
                <div class="platform-grid"><div class="info-panel"><h3>Clients</h3><div id="admin-user-list"></div></div>
                <div id="admin-detail-view" class="info-panel">Select a user to manage.</div></div>`;
            document.getElementById('close-mypage').onclick = () => { overlay.style.display='none'; document.body.classList.remove('platform-view-active'); if(platformSub) platformSub(); };
            platformSub = db.collection("users").where("role", "==", "user").onSnapshot(snap => {
                const list = document.getElementById('admin-user-list'); list.innerHTML = "";
                snap.forEach(doc => {
                    const u = doc.data();
                    const div = document.createElement('div'); div.className = 'safety-card'; div.style.padding='10px'; div.style.cursor='pointer';
                    div.innerHTML = `<strong>${u.email}</strong>`; div.onclick = () => selectUser(doc.id, u.email);
                    list.appendChild(div);
                });
            });
        };

        const selectUser = (uid, email) => {
            const view = document.getElementById('admin-detail-view');
            view.innerHTML = `<h3>${email}</h3><div id="status-btns"></div><div class="admin-chat-container" style="height:300px;"><div class="chat-messages" id="admin-msgs"></div>
                <div class="chat-input-area"><input type="text" id="admin-chat-input"><button id="admin-send" class="lang-btn">Send</button></div></div>`;
            const btnContainer = document.getElementById('status-btns');
            [0,1,2].forEach(i => {
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
            await ref.update({ steps }); alert("Updated!");
        };

        const renderUser = (user) => {
            const overlay = document.getElementById('mypage-overlay');
            const lang = translations[currentLang];
            overlay.innerHTML = `<div class="mypage-header"><h2>${lang['platform_title']}</h2><button id="close-mypage" class="lang-btn">${lang['platform_close']}</button></div>
                <div class="status-timeline" id="u-timeline"></div><div class="platform-grid"><div class="info-panel" id="u-info"></div>
                <div class="admin-chat-container"><div class="chat-messages" id="u-msgs"></div><div class="chat-input-area">
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
                    if(!document.getElementById('logout-btn')){
                        const lo = document.createElement('button'); lo.id='logout-btn'; lo.className='lang-btn logout-btn'; lo.textContent='Logout';
                        lo.onclick = () => auth.signOut().then(() => location.reload()); nav.appendChild(lo);
                    }
                } else {
                    btn.textContent = 'Login'; btn.onclick = () => { const p = new firebase.auth.GoogleAuthProvider(); auth.signInWithPopup(p).then(res => initUserDoc(res.user)); };
                    document.getElementById('logout-btn')?.remove();
                }
            });
        };
        initAuthNav();
    }

    const initB2B = () => {
        const open = document.getElementById('openProcessSlide'), modal = document.getElementById('processModal');
        if (!open || !modal) return;
        const img = document.getElementById('processImage'), ind = document.getElementById('indicator'), next = document.getElementById('nextBtn'), prev = document.getElementById('prevBtn');
        const imgs = Array.from({length:18}, (_,i) => `assets/process_${(i+1).toString().padStart(2,'0')}.png`);
        let cur = 0;
        const up = () => { img.src = imgs[cur]; ind.innerText = `${cur+1}/18`; prev.disabled = cur===0; next.disabled = cur===17; };
        open.onclick = (e) => { e.preventDefault(); modal.style.display='flex'; up(); };
        document.getElementById('closeProcess').onclick = () => modal.style.display='none';
        next.onclick = () => { if(cur<17) { cur++; up(); } };
        prev.onclick = () => { if(cur>0) { cur--; up(); } };
    };
    initB2B();
});