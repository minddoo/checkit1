document.addEventListener('DOMContentLoaded', () => {

    // --- 1. FULL & RESTORED TRANSLATION DATA ---
    const translations = {
        ko: {
            'nav_home': '홈',
            'hero_title': '외국인을 위한 건강검진,<br>언어의 장벽 없이 편안하게.',
            'hero_subtitle': '일정 누락, 이해하기 어려운 검진 안내, 한국어로만 제공되는 결과지까지.<br>CHECKIT이 모든 비의료 과정을 해결합니다.',
            'hero_cta': '지금 바로 상담 신청',
            'individual_title': '개인 고객',
            'corporate_title': '기업 고객',
            'learn_more': '더 알아보기',
            'platform_title': 'CHECKIT 플랫폼',
            'platform_status_title': '나의 서비스 현황',
            'platform_current_step': '현재 단계',
            'platform_details': '상세 안내',
            'platform_manager_title': '전담 매니저 매칭 완료',
            'platform_chat_title': '1:1 행정 지원 채팅',
            'platform_chat_placeholder': '메시지를 입력하세요...',
            'platform_chat_send': '전송',
            'platform_close': '닫기',
            'platform_loading': '데이터를 불러오는 중입니다...',
            'platform_error': '서버 연결 지연 (Firestore 설정 확인 필요)',
            'platform_manager_spec': '영어/한국어 전문 매니저',
            'contact_success': '문의가 성공적으로 접수되었습니다. 곧 담당 매니저가 연락드리겠습니다!',
            'contact_error': '문의 접수 중 오류가 발생했습니다. 다시 시도해 주세요.',
            'admin_title': '매니저 관리 대시보드',
            'admin_tab_users': '고객 관리',
            'admin_tab_leads': '상담 문의',
            'admin_user_list': '활성 고객 리스트',
            'admin_select_user': '고객을 선택하여 관리를 시작하세요.',
            'admin_status_updated': '상태가 업데이트되었습니다.',
            'corp_admin_title': '기업 보건 관리 대시보드',
            'corp_admin_subtitle': '소속 임직원의 건강검진 진행 현황을 실시간으로 확인하세요.',
            'corp_admin_table_name': '이메일',
            'corp_admin_table_plan': '선택 패키지',
            'corp_admin_table_status': '현재 단계',
            'corp_admin_no_employees': '현재 등록된 임직원이 없습니다.',
            'tab_files': '나의 파일',
            'file_upload_btn': '파일 업로드',
            'file_no_files': '등록된 파일이 없습니다.',
            'file_translated': '번역본',
            'file_original': '원본 결과지'
        },
        en: {
            'nav_home': 'Home',
            'hero_title': 'Health Check-ups for Foreigners,<br>Comfortable Without Language Barriers.',
            'hero_subtitle': 'From missed schedules to Korean-only results. CHECKIT solves all non-medical processes.',
            'hero_cta': 'Apply Now',
            'individual_title': 'Individuals',
            'corporate_title': 'Corporate',
            'learn_more': 'Learn More',
            'platform_title': 'CHECKIT PLATFORM',
            'platform_status_title': 'My Service Status',
            'platform_current_step': 'Current Step',
            'platform_details': 'Details',
            'platform_manager_title': 'Manager Matched',
            'platform_chat_title': '1:1 Support Chat',
            'platform_chat_placeholder': 'Type a message...',
            'platform_chat_send': 'Send',
            'platform_close': 'Close',
            'platform_loading': 'Loading data...',
            'platform_error': 'Connection delay (Check Firestore settings)',
            'platform_manager_spec': 'English/Korean Specialist',
            'contact_success': 'Inquiry submitted successfully! A manager will contact you soon.',
            'contact_error': 'Error submitting inquiry. Please try again.',
            'admin_title': 'Manager Dashboard',
            'admin_tab_users': 'Clients',
            'admin_tab_leads': 'Inquiries',
            'admin_user_list': 'Active Client List',
            'admin_select_user': 'Select a client to start management.',
            'admin_status_updated': 'Status Updated!',
            'corp_admin_title': 'Corporate Health Dashboard',
            'corp_admin_subtitle': 'Monitor your employees\' health check-up status in real-time.',
            'corp_admin_table_name': 'Email',
            'corp_admin_table_plan': 'Selected Plan',
            'corp_admin_table_status': 'Current Step',
            'corp_admin_no_employees': 'No employees found.',
            'tab_files': 'My Files',
            'file_upload_btn': 'Upload File',
            'file_no_files': 'No files uploaded yet.',
            'file_translated': 'Translation',
            'file_original': 'Original'
        }
    };

    let currentLang = 'ko';
    const allTranslatableElements = document.querySelectorAll('[data-lang-key]');
    const mainLangButtons = document.querySelectorAll('#language-switcher .lang-btn');

    const switchLanguage = (newLang) => {
        currentLang = newLang;
        document.documentElement.lang = newLang;
        const data = translations[newLang] || translations['ko'];
        allTranslatableElements.forEach(el => {
            const key = el.getAttribute('data-lang-key');
            if (data[key]) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.placeholder = data[key];
                else el.innerHTML = data[key];
            }
        });
        mainLangButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.lang === newLang));
        if (document.body.classList.contains('platform-view-active')) {
            const user = firebase.auth().currentUser;
            if (user) renderMyPage(user);
        }
    };
    window.changeLanguage = switchLanguage;
    mainLangButtons.forEach(btn => btn.onclick = () => switchLanguage(btn.dataset.lang));

    // --- Firebase Logic ---
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

        // 1. Unified Inquiry Logic
        document.querySelectorAll('.contact-form').forEach(form => {
            form.onsubmit = async (e) => {
                e.preventDefault();
                const btn = form.querySelector('button[type="submit"]');
                btn.disabled = true;
                try {
                    await db.collection("contact_inquiries").add({
                        email: form.querySelector('input[type="email"]')?.value || "",
                        phone: form.querySelector('input[placeholder*="010"], input[placeholder*="Phone"]')?.value || "",
                        company: form.querySelector('input[placeholder*="기업명"], input[placeholder*="Company"]')?.value || "",
                        message: form.querySelector('textarea')?.value || "",
                        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                        source: window.location.pathname,
                        language: currentLang,
                        status: "new"
                    });
                    alert(translations[currentLang]['contact_success']);
                    form.reset();
                } catch (err) { alert(translations[currentLang]['contact_error']); }
                finally { btn.disabled = false; }
            };
        });

        // 2. Auth Initialization
        const initUserDoc = async (user) => {
            const uRef = db.collection("users").doc(user.uid);
            const uSnap = await uRef.get();
            if (!uSnap.exists) {
                await uRef.set({ role: "user", email: user.email, companyId: "", createdAt: firebase.firestore.FieldValue.serverTimestamp() }, { merge: true });
                await db.collection("user_process").doc(user.uid).set({
                    steps: [
                        { title: "상담 및 신청", description: "접수 대기 중입니다.", status: "active", icon: "fas fa-file-alt" },
                        { title: "병원 예약", description: "병원 선정 대기 중", status: "pending", icon: "fas fa-hospital" },
                        { title: "검진 완료", description: "현장 지원 대기", status: "pending", icon: "fas fa-notes-medical" },
                        { title: "결과 번역", description: "결과지 수령 대기", status: "pending", icon: "fas fa-language" }
                    ]
                });
            }
        };

        // 3. Platform Dashboards
        let platformSub = null, chatSub = null, leadsSub = null, notificationSub = null, filesSub = null;

        const renderMyPage = async (user) => {
            const overlay = document.getElementById('mypage-overlay');
            overlay.style.display = 'flex';
            document.body.classList.add('platform-view-active');
            
            const uSnap = await db.collection("users").doc(user.uid).get();
            const userData = uSnap.data() || { role: "user" };

            if (userData.role === 'super_admin') renderAdminDashboard(user);
            else if (userData.role === 'company_admin') renderCorporateDashboard(user, userData.companyId);
            else renderUserDashboard(user);
        };

        const renderAdminDashboard = (admin) => {
            const overlay = document.getElementById('mypage-overlay');
            const lang = translations[currentLang];
            overlay.innerHTML = `
                <div class="mypage-header">
                    <h2>${lang['admin_title']}</h2>
                    <div style="display:flex; gap:10px;">
                        <button class="lang-btn active" id="tab-users">${lang['admin_tab_users']}</button>
                        <button class="lang-btn" id="tab-leads">${lang['admin_tab_leads']}</button>
                        <button id="close-mypage" class="lang-btn">${lang['platform_close']}</button>
                    </div>
                </div>
                <div class="admin-grid">
                    <div class="admin-sidebar" id="admin-user-list">Loading...</div>
                    <div class="admin-main" id="admin-content-view">
                        <div style="text-align:center; color:#ccc; margin-top:100px;">
                            <i class="fas fa-user-shield fa-4x"></i><p>${lang['admin_select_user']}</p>
                        </div>
                    </div>
                </div>
            `;

            document.getElementById('close-mypage').onclick = () => { overlay.style.display='none'; document.body.classList.remove('platform-view-active'); clearSubs(); };
            document.getElementById('tab-users').onclick = () => renderAdminDashboard(admin);
            document.getElementById('tab-leads').onclick = renderLeadsTab;

            platformSub = db.collection("users").where("role", "==", "user").onSnapshot(snap => {
                const list = document.getElementById('admin-user-list'); list.innerHTML = "<h3>Active Clients</h3>";
                snap.forEach(doc => {
                    const u = doc.data();
                    const div = document.createElement('div'); div.className = 'safety-card'; div.style.cssText = "padding:15px; margin-bottom:10px; cursor:pointer; text-align:left; border:1px solid #eee;";
                    div.innerHTML = `<strong>${u.email}</strong><br><small>${u.selectedPlan || 'No Plan'}</small>`;
                    div.onclick = () => selectUserForAdmin(doc.id, u.email);
                    list.appendChild(div);
                });
            });
        };

        const renderLeadsTab = () => {
            document.getElementById('tab-users').classList.remove('active');
            document.getElementById('tab-leads').classList.add('active');
            const main = document.querySelector('.admin-main');
            const sidebar = document.querySelector('.admin-sidebar');
            sidebar.innerHTML = "<h3>Leads Management</h3><p style='font-size:0.8rem; color:#888;'>Filter: New Inquiries</p>";
            main.innerHTML = `<div id="leads-container">Loading inquiries...</div>`;
            
            leadsSub = db.collection("contact_inquiries").orderBy("timestamp", "desc").limit(50).onSnapshot(snap => {
                const container = document.getElementById('leads-container'); container.innerHTML = "";
                snap.forEach(doc => {
                    const l = doc.data();
                    const date = l.timestamp ? new Date(l.timestamp.seconds*1000).toLocaleDateString() : "New";
                    const div = document.createElement('div');
                    div.className = 'safety-card'; div.style.cssText = "padding:20px; margin-bottom:15px; text-align:left; border-left:5px solid "+(l.status==='resolved'?'#eee':'var(--primary-color)');
                    div.innerHTML = `<div style="display:flex; justify-content:space-between;"><strong>${l.email}</strong><small>${date}</small></div>
                        <p>${l.message}</p>
                        <div class="lead-actions">
                            <button class="lang-btn" onclick="resolveLead('${doc.id}')">${l.status==='resolved'?'Reopen':'Resolve'}</button>
                            <button class="lang-btn logout-btn" onclick="deleteLead('${doc.id}')">Delete</button>
                        </div>`;
                    container.appendChild(div);
                });
            });
        };

        window.resolveLead = (id) => db.collection("contact_inquiries").doc(id).get().then(doc => db.collection("contact_inquiries").doc(id).update({status: doc.data().status==='resolved'?'new':'resolved'}));
        window.deleteLead = (id) => confirm("Delete lead?") && db.collection("contact_inquiries").doc(id).delete();

        const selectUserForAdmin = (uid, email) => {
            const main = document.querySelector('.admin-main');
            const lang = translations[currentLang];
            main.innerHTML = `
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
                    <h3>Managing: ${email}</h3>
                    <div class="platform-tabs" style="border:none; margin:0;">
                        <div class="p-tab active" id="adm-tab-chat">Chat</div>
                        <div class="p-tab" id="adm-tab-files">Files</div>
                    </div>
                </div>
                <div id="adm-dynamic-view">
                    <div style="background:#fff; padding:20px; border-radius:12px; margin-bottom:20px; display:flex; gap:10px; justify-content:center; box-shadow:var(--shadow-sm);">
                        <button class="lang-btn" onclick="updateUserStatus('${uid}', 0)">Step 1</button>
                        <button class="lang-btn" onclick="updateUserStatus('${uid}', 1)">Step 2</button>
                        <button class="lang-btn" onclick="updateUserStatus('${uid}', 2)">Step 3</button>
                        <button class="lang-btn" onclick="updateUserStatus('${uid}', 3)">Step 4</button>
                    </div>
                    <div class="admin-chat-container" style="height:450px; width:100%; margin:0;">
                        <div class="chat-messages" id="admin-msgs"></div>
                        <div class="chat-input-area">
                            <input type="text" id="admin-chat-input" placeholder="Admin reply...">
                            <button id="admin-send" class="lang-btn active">Send</button>
                        </div>
                    </div>
                </div>
            `;

            document.getElementById('adm-tab-chat').onclick = () => selectUserForAdmin(uid, email);
            document.getElementById('adm-tab-files').onclick = () => renderFilesTab(uid, true);

            if(chatSub) chatSub();
            const msgsEl = document.getElementById('admin-msgs');
            chatSub = db.collection("user_process").doc(uid).collection("messages").orderBy("timestamp", "asc").onSnapshot(snap => {
                msgsEl.innerHTML = "";
                snap.forEach(mDoc => {
                    const m = mDoc.data();
                    const div = document.createElement('div');
                    div.className = `message ${m.sender === 'user' ? 'bot' : 'user'}`; // Inverted for admin
                    div.textContent = m.text; msgsEl.appendChild(div);
                });
                msgsEl.scrollTop = msgsEl.scrollHeight;
            });
            document.getElementById('admin-send').onclick = async () => {
                const inp = document.getElementById('admin-chat-input');
                if(inp.value.trim()){
                    await db.collection("user_process").doc(uid).collection("messages").add({
                        text: inp.value.trim(), sender: "bot", timestamp: firebase.firestore.FieldValue.serverTimestamp()
                    });
                    inp.value = "";
                }
            };
        };

        const renderFilesTab = (uid, isAdmin) => {
            const container = document.getElementById('adm-dynamic-view') || document.getElementById('user-dynamic-view');
            const lang = translations[currentLang];
            container.innerHTML = `
                <div class="info-panel">
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                        <h3>${lang['tab_files']}</h3>
                        <button class="cta-button-primary" style="padding:10px 20px; font-size:0.8rem;" onclick="simulateUpload('${uid}', ${isAdmin})">${lang['file_upload_btn']}</button>
                    </div>
                    <div class="file-list" id="platform-file-list">Loading files...</div>
                </div>
            `;
            if(filesSub) filesSub();
            filesSub = db.collection("user_process").doc(uid).collection("files").orderBy("timestamp", "desc").onSnapshot(snap => {
                const list = document.getElementById('platform-file-list'); list.innerHTML = "";
                if(snap.empty) list.innerHTML = `<p style="color:#888;">${lang['file_no_files']}</p>`;
                snap.forEach(fDoc => {
                    const f = fDoc.data();
                    const div = document.createElement('div'); div.className = 'file-item';
                    div.innerHTML = `<div class="file-info"><i class="fas fa-file-pdf"></i>
                        <div><div class="file-name">${f.name}</div><small style="color:#aaa;">${f.type === 'translation' ? lang['file_translated'] : lang['file_original']}</small></div></div>
                        <div class="file-actions"><a href="${f.url}" target="_blank" class="btn-icon"><i class="fas fa-download"></i></a>
                        <button class="btn-icon delete" onclick="deleteFile('${uid}', '${fDoc.id}')"><i class="fas fa-trash"></i></button></div>`;
                    list.appendChild(div);
                });
            });
        };

        window.simulateUpload = async (uid, isAdmin) => {
            const name = prompt("File name (e.g., Result_Translation.pdf):", isAdmin ? "Translated_Report.pdf" : "My_Result.pdf");
            if(!name) return;
            await db.collection("user_process").doc(uid).collection("files").add({
                name: name, url: "#", type: isAdmin ? "translation" : "original", timestamp: firebase.firestore.FieldValue.serverTimestamp()
            });
        };
        window.deleteFile = (uid, fid) => confirm("Delete file?") && db.collection("user_process").doc(uid).collection("files").doc(fid).delete();

        window.updateUserStatus = async (uid, idx) => {
            const ref = db.collection("user_process").doc(uid);
            const snap = await ref.get();
            const steps = snap.data().steps;
            steps.forEach((s, i) => s.status = i < idx ? 'completed' : (i === idx ? 'active' : 'pending'));
            await ref.update({ steps }); alert(translations[currentLang]['admin_status_updated']);
        };

        const renderUserDashboard = (user) => {
            const overlay = document.getElementById('mypage-overlay');
            const lang = translations[currentLang];
            overlay.innerHTML = `
                <div class="mypage-header">
                    <h2>${lang['platform_title']}</h2>
                    <div style="display:flex; gap:10px;">
                        <button class="lang-btn active" id="u-tab-status">Status</button>
                        <button class="lang-btn" id="u-tab-files">Files</button>
                        <button id="close-mypage" class="lang-btn">${lang['platform_close']}</button>
                    </div>
                </div>
                <div class="container" id="user-dynamic-view" style="padding:20px 0;">
                    <div class="status-timeline" id="u-timeline"></div>
                    <div class="platform-grid">
                        <div class="info-panel" id="u-info"></div>
                        <div class="admin-chat-container">
                            <div class="chat-header"><i class="fas fa-headset"></i> ${lang['platform_chat_title']}</div>
                            <div class="chat-messages" id="u-msgs"></div>
                            <div class="chat-input-area">
                                <input type="text" id="u-chat-input" placeholder="${lang['platform_chat_placeholder']}">
                                <button id="u-send" class="lang-btn active">${lang['platform_chat_send']}</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            
            document.getElementById('close-mypage').onclick = () => { overlay.style.display='none'; document.body.classList.remove('platform-view-active'); clearSubs(); };
            document.getElementById('u-tab-status').onclick = () => renderUserDashboard(user);
            document.getElementById('u-tab-files').onclick = () => {
                document.getElementById('u-tab-status').classList.remove('active');
                document.getElementById('u-tab-files').classList.add('active');
                renderFilesTab(user.uid, false);
            };

            platformSub = db.collection("user_process").doc(user.uid).onSnapshot(doc => {
                const data = doc.data(); if(!data) return;
                const timeline = document.getElementById('u-timeline');
                if(timeline) timeline.innerHTML = data.steps.map(s => `<div class="status-step ${s.status}"><i class="${s.icon || 'fas fa-check'}"></i><span>${s.title}</span></div>`).join('');
                const info = document.getElementById('u-info');
                const active = data.steps.find(s => s.status === 'active') || data.steps[0];
                if(info) info.innerHTML = `<h3>${lang['platform_status_title']}</h3><p><strong>${active.title}</strong> <span class="status-pill active">Active</span></p><p>${active.description}</p>
                    <hr style="margin:20px 0; border:0; border-top:1px solid #eee;"><h4>Sarah Manager</h4><p style="font-size:0.9rem; color:#666;">${lang['platform_manager_spec']}</p>`;
            });

            chatSub = db.collection("user_process").doc(user.uid).collection("messages").orderBy("timestamp", "asc").onSnapshot(snap => {
                const el = document.getElementById('u-msgs'); if(!el) return; el.innerHTML = "";
                snap.forEach(m => {
                    const d = document.createElement('div'); d.className = `message ${m.data().sender === 'user' ? 'user' : 'bot'}`;
                    d.textContent = m.data().text; el.appendChild(d);
                });
                el.scrollTop = el.scrollHeight;
            });

            document.getElementById('u-send').onclick = async () => {
                const inp = document.getElementById('u-chat-input');
                if(inp.value.trim()){
                    await db.collection("user_process").doc(user.uid).collection("messages").add({
                        text: inp.value.trim(), sender: "user", timestamp: firebase.firestore.FieldValue.serverTimestamp()
                    });
                    inp.value = "";
                }
            };
        };

        const renderCorporateDashboard = async (admin, companyId) => {
            const overlay = document.getElementById('mypage-overlay');
            const lang = translations[currentLang];
            overlay.innerHTML = `
                <div class="mypage-header">
                    <h2>${lang['corp_admin_title']}</h2>
                    <button id="close-mypage" class="lang-btn">${lang['platform_close']}</button>
                </div>
                <div class="container" style="padding:40px 0;">
                    <div class="info-panel" style="text-align:left;">
                        <h3>${lang['corp_admin_subtitle']}</h3>
                        <div class="admin-table-container"><table class="admin-table">
                            <thead><tr><th>${lang['corp_admin_table_name']}</th><th>${lang['corp_admin_table_plan']}</th><th>${lang['corp_admin_table_status']}</th></tr></thead>
                            <tbody id="corp-user-list"><tr><td colspan="3">Loading...</td></tr></tbody>
                        </table></div>
                    </div>
                </div>
            `;
            document.getElementById('close-mypage').onclick = () => { overlay.style.display='none'; document.body.classList.remove('platform-view-active'); clearSubs(); };

            platformSub = db.collection("users").where("companyId", "==", companyId).onSnapshot(async snap => {
                const list = document.getElementById('corp-user-list'); list.innerHTML = "";
                if(snap.empty) { list.innerHTML = `<tr><td colspan="3">${lang['corp_admin_no_employees']}</td></tr>`; return; }
                const promises = snap.docs.map(async d => {
                    const u = d.data();
                    const p = await db.collection("user_process").doc(d.id).get();
                    const step = p.data()?.steps.find(s => s.status === 'active')?.title || "Done";
                    return `<tr><td>${u.email}</td><td>${u.selectedPlan || '-'}</td><td><span class="status-pill active">${step}</span></td></tr>`;
                });
                const rows = await Promise.all(promises);
                list.innerHTML = rows.join('');
            });
        };

        const clearSubs = () => { [platformSub, chatSub, leadsSub, notificationSub, filesSub].forEach(s => s && s()); };

        const initAuthNav = () => {
            const nav = document.querySelector('#language-switcher');
            let btn = document.getElementById('platform-auth-btn');
            if(!btn){ btn = document.createElement('button'); btn.id='platform-auth-btn'; btn.className='lang-btn auth-main-btn'; nav.appendChild(btn); 
                const badge = document.createElement('span'); badge.className='notification-badge'; badge.id='msg-badge'; nav.appendChild(badge);
            }
            auth.onAuthStateChanged(user => {
                if(user){
                    btn.textContent = currentLang === 'ko' ? '마이페이지' : 'My Page';
                    btn.onclick = () => renderMyPage(user);
                    if(!document.getElementById('logout-btn')){
                        const lo = document.createElement('button'); lo.id='logout-btn'; lo.className='lang-btn logout-btn'; lo.textContent='Logout';
                        lo.onclick = () => auth.signOut().then(() => location.reload());
                        nav.appendChild(lo);
                    }
                    notificationSub = db.collection("user_process").doc(user.uid).collection("messages").where("sender", "==", "bot").orderBy("timestamp", "desc").limit(1).onSnapshot(snap => {
                        const badge = document.getElementById('msg-badge');
                        if(!snap.empty && !document.body.classList.contains('platform-view-active')) { badge.style.display = 'block'; badge.innerText = "N"; }
                        else { badge.style.display = 'none'; }
                    });
                } else {
                    btn.textContent = currentLang === 'ko' ? '로그인' : 'Login';
                    btn.onclick = () => { const p = new firebase.auth.GoogleAuthProvider(); auth.signInWithPopup(p).then(res => initUserDoc(res.user)); };
                    document.getElementById('logout-btn')?.remove(); if(notificationSub) notificationSub();
                }
            });
        };
        initAuthNav();
    }

    // --- Package Selection ---
    document.addEventListener('click', async (e) => {
        const btn = e.target.closest('.package-card button');
        if(!btn || typeof firebase === 'undefined') return;
        const user = firebase.auth().currentUser;
        if(!user) return alert(currentLang === 'ko' ? "먼저 로그인이 필요합니다." : "Please login first.");
        const plan = btn.closest('.package-card').querySelector('h3').textContent;
        btn.disabled = true;
        await firebase.firestore().collection("users").doc(user.uid).update({ selectedPlan: plan });
        await firebase.firestore().collection("user_process").doc(user.uid).update({ "steps.0.description": `${plan} selected.` });
        alert(`${plan} selected!`);
        window.location.href = 'individual.html?view=mypage';
    });

    // --- B2B Slide Logic ---
    const initB2B = () => {
        const open = document.getElementById('openProcessSlide'), modal = document.getElementById('processModal');
        if(!open || !modal) return;
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