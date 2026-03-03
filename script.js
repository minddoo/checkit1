document.addEventListener('DOMContentLoaded', () => {

    // --- 1. FULL MULTILINGUAL DATA (Restored) ---
    const translations = {
        ko: {
            'nav_home': '홈', 'hero_cta': '지금 바로 상담 신청', 'learn_more': '더 알아보기',
            'platform_title': 'CHECKIT 플랫폼', 'platform_status_title': '나의 서비스 현황',
            'platform_close': '닫기', 'contact_success': '문의가 성공적으로 접수되었습니다!',
            'admin_title': '매니저 관리 대시보드', 'onboarding_title': '프로필 완성하기',
            'chatbot_manager_btn': '전담 매니저와 채팅하기',
            'expectation_title': '한국에서의 건강검진, 어떤 기대를 하시나요?',
            'reality_title': '하지만 현실은 생각보다 복잡합니다',
            'reality_overtime_title': '시간이 흐를수록 공백은 커져만 갑니다',
            'packages_title': 'CHECKIT 서비스 패키지'
        },
        en: {
            'nav_home': 'Home', 'hero_cta': 'Apply Now', 'learn_more': 'Learn More',
            'platform_title': 'CHECKIT PLATFORM', 'platform_status_title': 'My Service Status',
            'platform_close': 'Close', 'contact_success': 'Inquiry submitted successfully!',
            'admin_title': 'Manager Dashboard', 'onboarding_title': 'Complete Your Profile',
            'chatbot_manager_btn': 'Chat with Manager',
            'expectation_title': 'What do you expect from a health check-up in Korea?',
            'reality_title': 'But the reality is more complex than you think',
            'reality_overtime_title': 'As time goes by, the gap only gets bigger',
            'packages_title': 'CHECKIT Service Packages'
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
        const auth = firebase.auth(), db = firebase.firestore(), storage = firebase.storage();

        // 1. Unified Inquiry Logic
        document.querySelectorAll('.contact-form, .contact-form-body').forEach(form => {
            form.onsubmit = async (e) => {
                e.preventDefault();
                try {
                    await db.collection("contact_inquiries").add({
                        email: form.querySelector('input[type="email"]')?.value || "",
                        phone: form.querySelector('input[type="tel"]')?.value || "",
                        message: form.querySelector('textarea')?.value || "",
                        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                        language: currentLang, status: "new"
                    });
                    alert(translations[currentLang]['contact_success']);
                    form.reset();
                } catch (err) { alert("Error submitting inquiry."); }
            };
        });

        // 2. Onboarding Flow
        const checkOnboarding = async (user) => {
            const uRef = db.collection("users").doc(user.uid);
            const uSnap = await uRef.get();
            if (!uSnap.exists || !uSnap.data().fullName) showOnboardingModal(user);
        };

        const showOnboardingModal = (user) => {
            const lang = translations[currentLang];
            const modalHtml = `<div id="login-modal-overlay" style="display:flex;"><div class="login-modal-box onboarding-box"><h2 class="modal-logo">CHECKIT</h2><h3>${lang['onboarding_title']}</h3>
                <div class="form-group-auth"><input type="text" id="ob-name" placeholder="Full Name"><div class="form-row"><input type="text" id="ob-nat" placeholder="Nationality"><input type="text" id="ob-birth" placeholder="YYYY-MM-DD"></div></div>
                <button id="btn-ob-submit" class="btn-auth btn-primary">Start Service</button></div></div>`;
            document.body.insertAdjacentHTML('beforeend', modalHtml);
            document.getElementById('btn-ob-submit').onclick = async () => {
                const name = document.getElementById('ob-name').value, nat = document.getElementById('ob-nat').value, birth = document.getElementById('ob-birth').value;
                if (!name || !nat) return alert("Fill required fields.");
                await db.collection("users").doc(user.uid).update({ fullName: name, nationality: nat, dob: birth, onboardingComplete: true });
                location.reload();
            };
        };

        // 3. Platform Dashboards
        let platformSub = null, chatSub = null, filesSub = null;

        const renderMyPage = async (user) => {
            const overlay = document.getElementById('mypage-overlay');
            if(!overlay) return;
            overlay.style.display = 'flex';
            document.body.classList.add('platform-view-active');
            const uSnap = await db.collection("users").doc(user.uid).get();
            const userData = uSnap.data();
            if (userData?.role === 'super_admin') renderAdmin(user);
            else if (userData?.role === 'company_admin') renderCorporate(user, userData.companyId);
            else renderUser(user);
        };

        const renderAdmin = (admin) => {
            const overlay = document.getElementById('mypage-overlay');
            overlay.innerHTML = `<div class="mypage-header"><h2>Admin Dashboard</h2><button id="close-mypage" class="lang-btn">Close</button></div>
                <div class="admin-grid"><div class="admin-sidebar" id="admin-user-list"></div><div class="admin-main" id="admin-detail-view">Select a client.</div></div>`;
            document.getElementById('close-mypage').onclick = () => { overlay.style.display='none'; document.body.classList.remove('platform-view-active'); clearSubs(); };
            platformSub = db.collection("users").where("role", "==", "user").onSnapshot(snap => {
                const list = document.getElementById('admin-user-list'); list.innerHTML = "<h3>Clients</h3>";
                snap.forEach(doc => {
                    const u = doc.data();
                    const div = document.createElement('div'); div.className = 'safety-card'; div.style.padding='15px'; div.style.cursor='pointer'; div.style.marginBottom='10px';
                    div.innerHTML = `<strong>${u.fullName || u.email}</strong><br><small>${u.nationality || '...'}</small>`;
                    div.onclick = () => selectUser(doc.id, u); list.appendChild(div);
                });
            });
        };

        const selectUser = (uid, userData) => {
            const view = document.getElementById('admin-detail-view');
            view.innerHTML = `<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
                <div style="text-align:left;"><h3>${userData.fullName || userData.email}</h3><small>${userData.nationality}</small></div>
                <div class="platform-tabs" style="border:none; margin:0;"><div class="p-tab active" id="adm-tab-chat">Chat</div><div class="p-tab" id="adm-tab-files">Files</div></div></div>
                <div id="adm-dynamic-view"><div class="admin-chat-container"><div class="chat-messages" id="adm-msgs"></div>
                <div class="chat-input-area"><input type="text" id="adm-input"><button id="adm-send" class="lang-btn active">Send</button></div></div></div>`;
            document.getElementById('adm-tab-chat').onclick = () => selectUser(uid, userData);
            document.getElementById('adm-tab-files').onclick = () => renderFiles(uid, true);
            setupChat(uid, 'adm-msgs', 'adm-input', 'adm-send', 'bot');
        };

        const renderUser = (user) => {
            const overlay = document.getElementById('mypage-overlay'), lang = translations[currentLang];
            overlay.innerHTML = `<div class="mypage-header"><h2>${lang['platform_title']}</h2><button id="close-mypage" class="lang-btn">Close</button></div>
                <div class="container" id="u-dynamic-view" style="padding:20px 0;"><div class="status-timeline" id="u-timeline"></div>
                <div class="platform-grid"><div class="info-panel" id="u-info"></div>
                <div class="admin-chat-container"><div class="chat-messages" id="u-msgs"></div>
                <div class="chat-input-area"><input type="text" id="u-input"><button id="u-send" class="lang-btn active">Send</button></div></div></div></div>`;
            document.getElementById('close-mypage').onclick = () => { overlay.style.display='none'; document.body.classList.remove('platform-view-active'); clearSubs(); };
            platformSub = db.collection("user_process").doc(user.uid).onSnapshot(doc => {
                const data = doc.data(); if(!data) return;
                document.getElementById('u-timeline').innerHTML = data.steps.map(s => `<div class="status-step ${s.status}"><i class="${s.icon}"></i><span>${s.title}</span></div>`).join('');
                const active = data.steps.find(s => s.status === 'active') || data.steps[0];
                document.getElementById('u-info').innerHTML = `<h3>Progress</h3><p><strong>${active.title}</strong></p><p>${active.description}</p>`;
            });
            setupChat(user.uid, 'u-msgs', 'u-input', 'u-send', 'user');
        };

        const setupChat = (uid, msgsId, inpId, sendId, sender) => {
            if(chatSub) chatSub();
            chatSub = db.collection("user_process").doc(uid).collection("messages").orderBy("timestamp", "asc").onSnapshot(snap => {
                const el = document.getElementById(msgsId); if(!el) return; el.innerHTML = "";
                snap.forEach(m => {
                    const d = m.data(), time = d.timestamp ? new Date(d.timestamp.seconds*1000).toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'}) : "";
                    const div = document.createElement('div'); div.className = `message ${d.sender === sender ? 'user' : 'bot'}`;
                    div.innerHTML = `${d.text}<span class="msg-time">${time}</span>`; el.appendChild(div);
                });
                el.scrollTop = el.scrollHeight;
            });
            document.getElementById(sendId).onclick = async () => {
                const inp = document.getElementById(inpId);
                if(inp.value.trim()){ await db.collection("user_process").doc(uid).collection("messages").add({ text: inp.value.trim(), sender: sender, timestamp: firebase.firestore.FieldValue.serverTimestamp() }); inp.value = ""; }
            };
        };

        const renderFiles = (uid, isAdmin) => {
            const container = document.getElementById('adm-dynamic-view') || document.getElementById('u-dynamic-view');
            container.innerHTML = `<div class="info-panel"><h3>Documents</h3><input type="file" id="file-input" style="display:none;"><button class="cta-button-primary" onclick="document.getElementById('file-input').click()">Upload</button>
                <div class="file-list" id="platform-file-list" style="margin-top:20px;"></div></div>`;
            document.getElementById('file-input').onchange = (e) => uploadFile(uid, e.target.files[0], isAdmin);
            if(filesSub) filesSub();
            filesSub = db.collection("user_process").doc(uid).collection("files").orderBy("timestamp", "desc").onSnapshot(snap => {
                const list = document.getElementById('platform-file-list'); if(!list) return; list.innerHTML = "";
                snap.forEach(fDoc => {
                    const f = fDoc.data(), div = document.createElement('div'); div.className = 'file-item';
                    div.innerHTML = `<div class="file-info"><i class="fas fa-file-pdf"></i><div><div class="file-name">${f.name}</div><small>${f.type}</small></div></div>
                        <div class="file-actions"><a href="${f.url}" target="_blank" class="btn-icon"><i class="fas fa-download"></i></a></div>`;
                    list.appendChild(div);
                });
            });
        };

        const uploadFile = (uid, file, isAdmin) => {
            if(!file) return; const ref = storage.ref((isAdmin ? 'translated_results/' : 'user_files/') + uid + '/' + file.name);
            ref.put(file).then(async () => {
                const url = await ref.getDownloadURL();
                await db.collection("user_process").doc(uid).collection("files").add({ name: file.name, url: url, type: isAdmin ? "Translation" : "Original", timestamp: firebase.firestore.FieldValue.serverTimestamp() });
            });
        };

        const clearSubs = () => { [platformSub, chatSub, filesSub].forEach(s => s && s()); };

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
                    btn.textContent = 'Login'; btn.onclick = () => auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
                    document.getElementById('logout-btn')?.remove();
                }
            });
        };
        initAuthNav();
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