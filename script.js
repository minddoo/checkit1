document.addEventListener('DOMContentLoaded', () => {

    // --- 1. TRANSLATIONS ---
    const translations = {
        ko: {
            'nav_home': '홈', 'hero_cta': '지금 바로 상담 신청', 'learn_more': '더 알아보기',
            'platform_title': 'CHECKIT 플랫폼', 'platform_status_title': '나의 서비스 현황',
            'platform_close': '닫기', 'contact_success': '문의가 성공적으로 접수되었습니다!',
            'admin_title': '매니저 관리 대시보드', 'onboarding_title': '프로필 완성하기',
            'chatbot_manager_btn': '전담 매니저와 채팅하기',
            'stat_total_clients': '전체 고객', 'stat_pending_leads': '미처리 문의',
            'chart_distribution_title': '단계별 고객 분포'
        },
        en: {
            'nav_home': 'Home', 'hero_cta': 'Apply Now', 'learn_more': 'Learn More',
            'platform_title': 'CHECKIT PLATFORM', 'platform_status_title': 'My Service Status',
            'platform_close': 'Close', 'contact_success': 'Inquiry submitted successfully!',
            'admin_title': 'Manager Dashboard', 'onboarding_title': 'Complete Your Profile',
            'chatbot_manager_btn': 'Chat with Manager',
            'stat_total_clients': 'Total Clients', 'stat_pending_leads': 'Pending Leads',
            'chart_distribution_title': 'Workflow Distribution'
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
                const btn = form.querySelector('button[type="submit"]');
                btn.disabled = true;
                try {
                    await db.collection("contact_inquiries").add({
                        email: form.querySelector('input[type="email"]')?.value || "",
                        phone: form.querySelector('input[type="tel"]')?.value || "",
                        message: form.querySelector('textarea')?.value || "",
                        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                        source: window.location.pathname,
                        language: currentLang,
                        status: "new"
                    });
                    alert(translations[currentLang]['contact_success']);
                    form.reset();
                } catch (err) { alert("Error submitting inquiry."); }
                finally { btn.disabled = false; }
            };
        });

        // 2. Onboarding Flow
        const checkOnboarding = async (user) => {
            const uRef = db.collection("users").doc(user.uid);
            const uSnap = await uRef.get();
            const data = uSnap.data();
            if (!data || !data.fullName) showOnboardingModal(user);
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
        let platformSub = null, chatSub = null, filesSub = null, leadsSub = null, statsSub = null;

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
            const overlay = document.getElementById('mypage-overlay'), lang = translations[currentLang];
            overlay.innerHTML = `<div class="mypage-header"><h2>Admin Analytics</h2>
                <div style="display:flex; gap:10px;"><button class="lang-btn active" id="tab-users">Clients</button><button class="lang-btn" id="tab-leads">Inquiries</button><button id="close-mypage" class="lang-btn">Close</button></div></div>
                <div class="admin-grid"><div class="admin-sidebar"><div id="admin-stats-container"></div><div id="admin-user-list"></div></div>
                <div class="admin-main" id="admin-detail-view"><div class="info-panel" style="text-align:center;"><canvas id="workflowChart" style="max-height:300px;"></canvas><h4 style="margin-top:20px;">${lang['chart_distribution_title']}</h4></div></div></div>`;
            document.getElementById('close-mypage').onclick = () => { overlay.style.display='none'; document.body.classList.remove('platform-view-active'); clearSubs(); };
            document.getElementById('tab-users').onclick = () => renderAdmin(admin);
            document.getElementById('tab-leads').onclick = renderLeads;
            
            startStatsListener();
            platformSub = db.collection("users").where("role", "==", "user").onSnapshot(snap => {
                const list = document.getElementById('admin-user-list'); if(!list) return;
                list.innerHTML = "<h3>Active Clients</h3>";
                snap.forEach(doc => {
                    const u = doc.data();
                    const div = document.createElement('div'); div.className = 'safety-card'; div.style.padding='15px'; div.style.cursor='pointer'; div.style.marginBottom='10px';
                    div.innerHTML = `<strong>${u.fullName || u.email}</strong><br><small>${u.nationality || '...'} | ${u.companyId || 'No Corp'}</small>`;
                    div.onclick = () => selectUser(doc.id, u); list.appendChild(div);
                });
            });
        };

        const startStatsListener = () => {
            if(statsSub) statsSub();
            statsSub = db.collection("users").onSnapshot(async () => {
                const users = await db.collection("users").where("role", "==", "user").get();
                const leads = await db.collection("contact_inquiries").where("status", "==", "new").get();
                const statsEl = document.getElementById('admin-stats-container');
                if(statsEl) statsEl.innerHTML = `<div class="admin-stats-grid" style="grid-template-columns: 1fr 1fr; margin-bottom:20px;">
                    <div class="stat-card" style="padding:15px;"><span class="stat-val">${users.size}</span><span class="stat-label">Clients</span></div>
                    <div class="stat-card" style="padding:15px; border-color:#e74c3c;"><span class="stat-val">${leads.size}</span><span class="stat-label">New Leads</span></div></div>`;
                
                const ctx = document.getElementById('workflowChart');
                if(ctx) {
                    const processes = await db.collection("user_process").get();
                    const chartData = [0,0,0,0];
                    processes.forEach(doc => {
                        const idx = doc.data().steps.findIndex(s => s.status === 'active');
                        if(idx !== -1) chartData[idx]++;
                    });
                    if(window.myChart) window.myChart.destroy();
                    window.myChart = new Chart(ctx, {
                        type: 'doughnut',
                        data: { labels: ['Applied', 'Booking', 'Check-up', 'Result'], datasets: [{ data: chartData, backgroundColor: ['#2ECC71', '#3498DB', '#F1C40F', '#E67E22'], borderWeight: 0 }] },
                        options: { cutout: '70%', plugins: { legend: { position: 'bottom' } } }
                    });
                }
            });
        };

        const renderLeads = () => {
            document.getElementById('tab-users').classList.remove('active');
            document.getElementById('tab-leads').classList.add('active');
            const main = document.getElementById('admin-detail-view'), sidebar = document.getElementById('admin-user-list');
            sidebar.innerHTML = "<h3>Inquiries</h3>"; main.innerHTML = `<div id="leads-list">Loading...</div>`;
            leadsSub = db.collection("contact_inquiries").orderBy("timestamp", "desc").onSnapshot(snap => {
                const list = document.getElementById('leads-list'); if(!list) return;
                list.innerHTML = "";
                snap.forEach(doc => {
                    const l = doc.data(), div = document.createElement('div'); div.className = 'info-panel'; div.style.marginBottom='15px';
                    div.innerHTML = `<div style="display:flex; justify-content:space-between;"><strong>${l.email}</strong><span class="lead-badge ${l.status}">${l.status}</span></div>
                        <p>${l.message}</p><div style="display:flex; gap:10px;"><button class="lang-btn" onclick="toggleLead('${doc.id}', '${l.status}')">Toggle</button>
                        <button class="lang-btn logout-btn" onclick="deleteLead('${doc.id}')">Delete</button></div>`;
                    list.appendChild(div);
                });
            });
        };

        window.toggleLead = (id, cur) => db.collection("contact_inquiries").doc(id).update({ status: cur === 'new' ? 'resolved' : 'new' });
        window.deleteLead = (id) => confirm("Delete?") && db.collection("contact_inquiries").doc(id).delete();

        const selectUser = (uid, userData) => {
            const view = document.getElementById('admin-detail-view');
            view.innerHTML = `<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
                <div style="text-align:left;"><h3>${userData.fullName || userData.email}</h3>
                    <div style="display:flex; gap:10px; align-items:center;"><small>${userData.nationality}</small>
                    <input type="text" id="assign-corp" placeholder="Company ID" value="${userData.companyId || ''}" style="padding:2px 8px; font-size:0.7rem; border:1px solid #ddd; border-radius:4px;">
                    <button class="lang-btn" style="padding:2px 8px; font-size:0.7rem;" onclick="assignCompany('${uid}')">Assign</button></div>
                </div>
                <div class="platform-tabs" style="border:none; margin:0;"><div class="p-tab active" id="adm-tab-chat">Chat</div><div class="p-tab" id="adm-tab-files">Files</div></div></div>
                <div id="adm-dynamic-view"><div style="background:#fff; padding:20px; border-radius:12px; margin-bottom:20px; display:flex; gap:10px; justify-content:center; box-shadow:var(--shadow-sm);">
                <button class="lang-btn" onclick="updateStatus('${uid}', 0)">Step 1</button><button class="lang-btn" onclick="updateStatus('${uid}', 1)">Step 2</button>
                <button class="lang-btn" onclick="updateStatus('${uid}', 2)">Step 3</button></div>
                <div class="admin-chat-container" style="height:400px; width:100%; margin:0;"><div class="chat-messages" id="adm-msgs"></div>
                <div class="chat-input-area"><input type="text" id="adm-input" placeholder="Reply..."><button id="adm-send" class="lang-btn active">Send</button></div></div></div>`;
            document.getElementById('adm-tab-chat').onclick = () => selectUser(uid, userData);
            document.getElementById('adm-tab-files').onclick = () => renderFiles(uid, true);
            setupChat(uid, 'adm-msgs', 'adm-input', 'adm-send', 'bot');
        };

        window.assignCompany = async (uid) => {
            const cid = document.getElementById('assign-corp').value;
            await db.collection("users").doc(uid).update({ companyId: cid });
            alert("Company Assigned!");
        };

        const renderUser = (user) => {
            const overlay = document.getElementById('mypage-overlay'), lang = translations[currentLang];
            overlay.innerHTML = `<div class="mypage-header"><h2>${lang['platform_title']}</h2>
                <div style="display:flex; gap:10px;"><button class="lang-btn active" id="u-tab-status">Status</button><button class="lang-btn" id="u-tab-files">Files</button><button id="close-mypage" class="lang-btn">Close</button></div></div>
                <div class="container" id="u-dynamic-view" style="padding:20px 0;"><div class="status-timeline" id="u-timeline"></div>
                <div class="platform-grid"><div class="info-panel" id="u-info"></div>
                <div class="admin-chat-container"><div class="chat-header">1:1 Support</div><div class="chat-messages" id="u-msgs"></div>
                <div class="chat-input-area"><input type="text" id="u-input" placeholder="Ask..."><button id="u-send" class="lang-btn active">Send</button></div></div></div></div>`;
            document.getElementById('close-mypage').onclick = () => { overlay.style.display='none'; document.body.classList.remove('platform-view-active'); clearSubs(); };
            document.getElementById('u-tab-status').onclick = () => renderUser(user);
            document.getElementById('u-tab-files').onclick = () => renderFiles(user.uid, false);
            platformSub = db.collection("user_process").doc(user.uid).onSnapshot(doc => {
                const data = doc.data(); if(!data) return;
                document.getElementById('u-timeline').innerHTML = data.steps.map(s => `<div class="status-step ${s.status}"><i class="${s.icon}"></i><span>${s.title}</span></div>`).join('');
                const active = data.steps.find(s => s.status === 'active') || data.steps[0];
                document.getElementById('u-info').innerHTML = `<h3>Progress</h3><p><strong>${active.title}</strong></p><p>${active.description}</p>`;
            });
            setupChat(user.uid, 'u-msgs', 'u-input', 'u-send', 'user');
        };

        const renderCorporate = (user, companyId) => {
            const overlay = document.getElementById('mypage-overlay');
            overlay.innerHTML = `<div class="mypage-header"><h2>Corporate Dashboard</h2><button id="close-mypage" class="lang-btn">Close</button></div>
                <div class="container" style="padding:40px 0;"><div class="info-panel" style="margin-bottom:20px; text-align:center;"><canvas id="corpChart" style="max-height:200px;"></canvas><h4>Team Health Progress</h4></div>
                <div class="info-panel"><h3>Employee List</h3><div class="admin-table-container"><table class="admin-table"><thead><tr><th>Email</th><th>Name</th><th>Status</th></tr></thead><tbody id="corp-list"></tbody></table></div></div></div>`;
            document.getElementById('close-mypage').onclick = () => { overlay.style.display='none'; document.body.classList.remove('platform-view-active'); clearSubs(); };
            
            platformSub = db.collection("users").where("companyId", "==", companyId).onSnapshot(async snap => {
                const list = document.getElementById('corp-list'); if(!list) return;
                list.innerHTML = ""; let completed = 0;
                const rows = await Promise.all(snap.docs.map(async d => {
                    const u = d.data(), p = await db.collection("user_process").doc(d.id).get();
                    const activeStep = p.data()?.steps.find(s => s.status === 'active')?.title || "Done";
                    if(activeStep === "Done") completed++;
                    return `<tr><td>${u.email}</td><td>${u.fullName || '-'}</td><td><span class="status-pill active">${activeStep}</span></td></tr>`;
                }));
                list.innerHTML = rows.join('');
                const ctx = document.getElementById('corpChart');
                if(ctx) new Chart(ctx, { type: 'bar', data: { labels: ['Progress'], datasets: [{ label: 'Completed', data: [completed], backgroundColor: '#2ECC71' }, { label: 'Pending', data: [snap.size - completed], backgroundColor: '#eee' }] }, options: { indexAxis: 'y', scales: { x: { stacked: true, max: snap.size }, y: { stacked: true } } } });
            });
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
                <div id="file-progress" style="display:none; height:5px; background:#eee; margin-top:10px;"><div id="file-bar" style="width:0; height:100%; background:var(--primary-color);"></div></div>
                <div class="file-list" id="platform-file-list" style="margin-top:20px;"></div></div>`;
            document.getElementById('file-input').onchange = (e) => uploadFile(uid, e.target.files[0], isAdmin);
            if(filesSub) filesSub();
            filesSub = db.collection("user_process").doc(uid).collection("files").orderBy("timestamp", "desc").onSnapshot(snap => {
                const list = document.getElementById('platform-file-list'); if(!list) return;
                list.innerHTML = "";
                snap.forEach(fDoc => {
                    const f = fDoc.data(), div = document.createElement('div'); div.className = 'file-item';
                    div.innerHTML = `<div class="file-info"><i class="fas fa-file-pdf"></i><div><div class="file-name">${f.name}</div><small>${f.type}</small></div></div>
                        <div class="file-actions"><a href="${f.url}" target="_blank" class="btn-icon"><i class="fas fa-download"></i></a><button class="btn-icon delete" onclick="deleteFile('${uid}', '${fDoc.id}')"><i class="fas fa-trash"></i></button></div>`;
                    list.appendChild(div);
                });
            });
        };

        const uploadFile = (uid, file, isAdmin) => {
            if(!file) return; const path = (isAdmin ? 'translated_results/' : 'user_files/') + uid + '/' + file.name;
            const ref = storage.ref(path), task = ref.put(file), prog = document.getElementById('file-progress'), bar = document.getElementById('file-bar');
            prog.style.display = 'block';
            task.on('state_changed', s => bar.style.width = (s.bytesTransferred/s.totalBytes)*100 + '%', e => alert("Fail"), async () => {
                const url = await ref.getDownloadURL();
                await db.collection("user_process").doc(uid).collection("files").add({ name: file.name, url: url, type: isAdmin ? "Translation" : "Original", timestamp: firebase.firestore.FieldValue.serverTimestamp() });
                prog.style.display = 'none';
            });
        };

        window.updateStatus = async (uid, idx) => {
            const steps = (await db.collection("user_process").doc(uid).get()).data().steps;
            steps.forEach((s, i) => s.status = i < idx ? 'completed' : (i === idx ? 'active' : 'pending'));
            await db.collection("user_process").doc(uid).update({ steps }); alert("Done!");
        };
        window.deleteFile = (uid, fid) => confirm("Delete?") && db.collection("user_process").doc(uid).collection("files").doc(fid).delete();
        const clearSubs = () => { [platformSub, chatSub, filesSub, leadsSub, statsSub].forEach(s => s && s()); };

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