$html = @"
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>CHECKIT - Worker Portal</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Pretendard:wght@400;500;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary: #3b82f6; --primary-dark: #1d4ed8; --secondary: #64748b;
            --bg-body: #f8fafc; --white: #ffffff; --text-main: #1e293b;
            --text-sub: #64748b; --border: #e2e8f0; --warning: #f59e0b; --success: #10b981;
        }
        * { font-family: 'Pretendard', sans-serif; box-sizing: border-box; }
        body { background-color: var(--bg-body); color: var(--text-main); margin: 0; padding: 0; line-height: 1.6; }
        .safe-area-top { height: env(safe-area-inset-top, 0px); background-color: var(--primary); }
        header { background-color: var(--primary); padding: 15px 20px; color: var(--white); position: sticky; top: 0; z-index: 100; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .logo { font-size: 1.25rem; font-weight: 700; display: flex; align-items: center; gap: 8px; }
        .language-switcher { display: flex; gap: 4px; background: rgba(255, 255, 255, 0.2); padding: 4px; border-radius: 20px; margin-top: 10px; }
        .lang-btn { flex: 1; padding: 4px 8px; border-radius: 16px; font-size: 0.75rem; color: #fff; cursor: pointer; transition: all 0.2s; border: none; background: transparent; }
        .lang-btn.active { background: #fff; color: var(--primary); font-weight: 700; }
        nav { background: var(--white); border-bottom: 1px solid var(--border); display: flex; overflow-x: auto; -webkit-overflow-scrolling: touch; }
        .nav-item { flex: 1; text-align: center; padding: 15px 0; color: var(--text-sub); font-weight: 500; min-width: 100px; border-bottom: 3px solid transparent; cursor: pointer; white-space: nowrap; }
        .nav-item.active { color: var(--primary); border-bottom-color: var(--primary); }
        main { padding: 20px; padding-bottom: 80px; }
        .card { background: var(--white); border-radius: 16px; padding: 20px; margin-bottom: 20px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
        .card-title { font-weight: 700; font-size: 1.1rem; margin-bottom: 15px; display: flex; align-items: center; justify-content: space-between; }
        .status-badge { padding: 6px 12px; border-radius: 20px; font-size: 0.85rem; font-weight: 600; }
        .status-badge.in_progress { background: #dbeafe; color: #1e40af; }
        .status-badge.completed { background: #dcfce7; color: #166534; }
        .status-badge.pending { background: #fef3c7; color: #92400e; }
        .status-badge.recheck { background: #fee2e2; color: #991b1b; }
        .progress-stepper { display: flex; justify-content: space-between; position: relative; margin: 30px 0; }
        .progress-stepper::before { content: ''; position: absolute; top: 15px; left: 0; right: 0; height: 3px; background: #e2e8f0; z-index: 1; }
        .step { position: relative; z-index: 2; display: flex; flex-direction: column; align-items: center; flex: 1; }
        .step-circle { width: 32px; height: 32px; border-radius: 50%; background: #fff; border: 3px solid #e2e8f0; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; font-weight: 700; color: #94a3b8; transition: all 0.3s; }
        .step.active .step-circle { background: var(--primary); border-color: var(--primary); color: #fff; box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.2); }
        .step.completed .step-circle { background: #10b981; border-color: #10b981; color: #fff; }
        .step-label { font-size: 0.75rem; font-weight: 500; margin-top: 8px; color: var(--text-sub); text-align: center; }
        .btn { width: 100%; padding: 16px; border-radius: 12px; font-weight: 700; font-size: 1rem; cursor: pointer; border: none; display: flex; align-items: center; justify-content: center; gap: 8px; transition: all 0.2s; }
        .btn-primary { background: var(--primary); color: #fff; }
        .btn-outline { background: #fff; color: var(--primary); border: 2px solid var(--primary); }
        .btn-ghost { background: #f1f5f9; color: var(--text-main); }
        #chatMessages { display: flex; flex-direction: column; gap: 15px; height: 50vh; overflow-y: auto; padding-right: 5px; }
        .msg { max-width: 85%; padding: 12px 16px; border-radius: 16px; font-size: 0.95rem; line-height: 1.5; }
        .msg.admin { align-self: flex-start; background: #f1f5f9; border-bottom-left-radius: 4px; color: var(--text-main); }
        .msg.worker { align-self: flex- end; background: var(--primary); color: #fff; border-bottom-right-radius: 4px; }
        .loading-screen { position: fixed; inset: 0; background: #fff; z-index: 9999; display: flex; flex-direction: column; align-items: center; justify-content: center; }
        .loader { width: 40px; height: 40px; border: 4px solid #f3f3f3; border-top: 4px solid var(--primary); border-radius: 50%; animation: spin 1s linear infinite; }
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
    </style>
</head>
<body>
    <div id="pageLoader" class="loading-screen">
        <div class="loader"></div>
        <p style="margin-top: 15px; font-weight: 600; color: #64748b;" id="loadingText">...</p>
    </div>
    <div class="safe-area-top"></div>
    <header>
        <div class="flex justify-between items-center">
            <div class="logo"><i class="fa-solid fa-notes-medical"></i><span>CHECKIT</span></div>
            <div style="font-size: 0.85rem; font-weight: 500;" id="welcomeUser"></div>
        </div>
        <div class="language-switcher">
            <button class="lang-btn" data-lang="ko" id="btn_ko" onclick="window.changePortalLanguage('ko')">KO</button>
            <button class="lang-btn" data-lang="en" id="btn_en" onclick="window.changePortalLanguage('en')">EN</button>
            <button class="lang-btn" data-lang="cn" id="btn_cn" onclick="window.changePortalLanguage('cn')">CN</button>
            <button class="lang-btn" data-lang="vn" id="btn_vn" onclick="window.changePortalLanguage('vn')">VN</button>
        </div>
    </header>
    <nav>
        <div class="nav-item active" onclick="window.switchSection('progress')" id="menuProgress">...</div>
        <div class="nav-item" onclick="window.switchSection('chat')" id="menuChat">...</div>
        <div class="nav-item" onclick="window.switchSection('results')" id="menuResults">...</div>
    </nav>
    <main>
        <div id="section-progress" class="section active">
            <div class="card">
                <div class="card-title"><span id="h_myStatus">...</span><div id="overallBadge"></div></div>
                <div class="progress-stepper" id="stepper"></div>
                <div class="info-grid" id="infoGrid"></div>
            </div>
            <div class="card">
                <div class="card-title"><span id="c_book_t">...</span></div>
                <div class="flex gap-3">
                    <button class="btn btn-ghost flex-1 py-3 text-sm" onclick="window.open('hospital_list.html', '_blank')" id="c_book_b1">...</button>
                    <button class="btn btn-primary flex-1 py-3 text-sm" id="c_book_b2" onclick="window.openBookingModal()">...</button>
                </div>
            </div>
        </div>
        <div id="section-chat" class="section">
            <div class="card" style="margin-bottom: 70px;"><div id="chatMessages"><div class="text-center py-10 text-gray-400 text-sm" id="t_loadChat">...</div></div></div>
            <div class="chat-input-area" style="position: fixed; bottom: 0; left: 0; right: 0; background: #fff; padding: 15px; border-top: 1px solid #e2e8f0; display: flex; gap: 10px;">
                <input type="text" id="chatInput" placeholder="..." style="flex: 1; padding: 12px; border: 1px solid #e2e8f0; border-radius: 8px;">
                <button onclick="window.sendChatMessage()" style="background: var(--primary); color: #fff; width: 44px; height: 44px; border-radius: 8px; border: none;"><i class="fa-solid fa-paper-plane"></i></button>
            </div>
        </div>
        <div id="section-results" class="section">
            <div class="card">
                <div class="card-title" id="h_submitResult">...</div>
                <div class="flex flex-col gap-3">
                    <input type="file" id="resultFile" accept="image/*" class="hidden" onchange="window.previewImage(this)">
                    <button class="btn btn-outline" onclick="document.getElementById('resultFile').click()"><span id="b_uploadPhoto">...</span></button>
                    <button class="btn btn-primary" id="submitBtn" onclick="window.submitResult()" disabled><span id="b_submitNow">...</span></button>
                </div>
            </div>
        </div>
    </main>
    <script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-auth.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-storage.js"></script>
    <script src="fb-config.js"></script>
    <script>
        (function() {
            window.transTable = {
                ko: { 
                    menuProgress: '\ub098\uc758 \uc9c4\ud589\uc0c1\ud669', 
                    menuChat: '1:1 \ub300\ud654\ubc29', 
                    menuResults: '\uacb0\uacbc \uad00\ub9ac',
                    h_myStatus: '\ub098\uc758 \uac80\uc9c4 \ud604\ud669', 
                    c_book_t: '\uac80\uc9c4 \uc608\uc57d \ub2e8\uacc4', 
                    c_book_b1: '\uc81c\ud734 \ubcd1\uc6d0 \ubaa9\ub85d',
                    c_book_b2: '\uc608\uc57d \uc2e0\ucb2d\uc11c \uc791\uc131', 
                    h_submitResult: '\uae30\uc5c5\uc5d0 \uacb0\uacbc\uc9c0 \uc81c\ucd9c\ud558\uae30',
                    b_uploadPhoto: '\uc0ac\uc9c4 \uc5c5\ub85c\ub4dc', 
                    b_submitNow: '\ubc14\ub85c \uc81c\ucd9c\ud558\uae30', 
                    loadingText: '\ud3ec\ud118\uc744 \ubd88\ub7ec\uc624\ub294 \uc911...',
                    t_loadChat: '\ub300\ud654 \ub0b4\uc6a9\uc744 \ubd88\ub7ec\uc624\ub294 \uc911...'
                },
                en: { 
                    menuProgress: 'Progress', menuChat: '1:1 Chat', menuResults: 'Results',
                    h_myStatus: 'Status', c_book_t: 'Booking', c_book_b1: 'Hospitals',
                    c_book_b2: 'Request', h_submitResult: 'Submit Result',
                    b_uploadPhoto: 'Upload Photo', b_submitNow: 'Submit Now', loadingText: 'Loading...',
                    t_loadChat: 'Loading messages...'
                },
                cn: { 
                    menuProgress: '\ub9db\ubea6', 
                    menuChat: '1:1 \ud0cc\ud329', 
                    menuResults: '\ubed3\ub2dd\uad00\ub9ac',
                    h_myStatus: '\ub098\uc758 \ud478\ucd42\ubcca\ud301', 
                    c_book_t: '\ud478\ucd42\uc608\uc57d\ubd80\ud3f0', 
                    c_book_b1: '\ubcd1\uc6d0\ubaa9\ub85d',
                    c_book_b2: '\ud15d\uc48c\uc2e0\ucb2d', 
                    h_submitResult: '\ud5a5\uacf5\uc0ac\uc81c\ucd9c\ubed3\ub2dd',
                    b_uploadPhoto: '\uc0ac\uc9c4\uc5c5\ub85c\ub4dc', 
                    b_submitNow: '\ud404\uc7ac\uc81c\ucd9c', 
                    loadingText: '\uc815\uac00\uc7ac...', 
                    t_loadChat: '\uac00\uc7ac\uc2e0\ud1a1...'
                },
                vn: { 
                    menuProgress: 'Ti\u1ebfn \u0111\u1ed9', 
                    menuChat: 'Tr\u00f2 chuy\u1ec7n 1:1', 
                    menuResults: 'K\u1ebft qu\u1ea3',
                    h_myStatus: 'Tr\u1ea1ng th\u00e1i', 
                    c_book_t: 'C\u00e1c b\u01b0\u1edbc \u0111\u1eb7t l\u1ecbch', 
                    c_book_b1: 'Danh s\u00e1ch b\u1ec7nh vi\u1ec7n',
                    c_book_b2: 'Vi\u1ebft \u0111\u01a1n', 
                    h_submitResult: 'G\u1eedi k\u1ebft qu\u1ea3',
                    b_uploadPhoto: 'T\u1ea3i \u1ea3nh', 
                    b_submitNow: 'G\u1eedi ngay', 
                    loadingText: '\u0110ang t\u1ea3i...', 
                    t_loadChat: '\u0110ang t\u1ea3i tin nh\u1eafn...'
                }
            };
            window.translateUI = function(lang) {
                const t = window.transTable[lang] || window.transTable.ko;
                Object.keys(t).forEach(id => { const el = document.getElementById(id); if (el) el.textContent = t[id]; });
                document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
            };
            window.changePortalLanguage = function(lang) {
                window.prefLang = lang; window.translateUI(lang);
                if (window.currentWorkerDocId) db.collection('workers').doc(window.currentWorkerDocId).update({ prefLang: lang });
            };
            window.switchSection = function(target) {
                document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
                const s = document.getElementById('section-' + target); if (s) s.classList.add('active');
                document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
            };
            window.loadChatMessages = function(wid) {
                if(!wid) return;
                db.collection('chats').where('workerDocId', '==', wid).orderBy('serverTimestamp', 'asc').onSnapshot(snap => {
                    const b = document.getElementById('chatMessages'); b.innerHTML = '';
                    snap.forEach(doc => {
                        const m = doc.data(); const d = document.createElement('div');
                        d.className = 'msg ' + (m.senderType === 'worker' ? 'worker' : 'admin');
                        d.textContent = m.message; b.appendChild(d);
                    });
                    b.scrollTop = b.scrollHeight;
                });
            };
            window.sendChatMessage = async function() {
                const i = document.getElementById('chatInput'); if (!i.value.trim() || !window.currentWorkerDocId) return;
                await db.collection('chats').add({ workerDocId: window.currentWorkerDocId, senderType: 'worker', message: i.value, serverTimestamp: firebase.firestore.FieldValue.serverTimestamp() });
                i.value = '';
            };
            window.previewImage = function(input) { if (input.files && input.files[0]) document.getElementById('submitBtn').disabled = false; };
            window.submitResult = async function() {
                const file = document.getElementById('resultFile').files[0]; if (!file || !window.currentWorkerDocId) return;
                try {
                    const ref = storage.ref().child('results/' + window.currentWorkerDocId + '/' + Date.now() + '_' + file.name);
                    await ref.put(file); const url = await ref.getDownloadURL();
                    await db.collection('results').add({ workerDocId: window.currentWorkerDocId, fileUrl: url, fileName: file.name, submittedAt: firebase.firestore.FieldValue.serverTimestamp() });
                    await db.collection('workers').doc(window.currentWorkerDocId).update({ checkupStatus: 'completed' });
                    alert('Submitted!');
                } catch(e) { console.error(e); alert('Error'); }
            };
            window.openBookingModal = () => alert('Booking...');

            auth.onAuthStateChanged(async (user) => {
                try {
                    const params = new URLSearchParams(window.location.search);
                    window.currentWorkerDocId = params.get('workerDocId');
                    if (user) {
                        if (!window.currentWorkerDocId) {
                            const uSnap = await db.collection('users').doc(user.uid).get();
                            if (uSnap.exists) window.currentWorkerDocId = uSnap.data().workerDocId;
                        }
                        if (window.currentWorkerDocId) {
                            const snap = await db.collection('workers').doc(window.currentWorkerDocId).get();
                            if (snap.exists) {
                                const w = snap.data(); window.prefLang = w.prefLang || 'ko';
                                window.translateUI(window.prefLang); window.loadChatMessages(window.currentWorkerDocId);
                                const wel = document.getElementById('welcomeUser'); if(wel) wel.textContent = w.name;
                            }
                        }
                    } else {
                        window.location.href = 'index.html';
                    }
                } catch (e) {
                    console.error("Portal Init Error:", e);
                } finally {
                    const l = document.getElementById('pageLoader'); if(l) l.style.display = 'none';
                    window.translateUI(window.prefLang || 'ko');
                }
            });
        })();
    </script>
</body>
</html>
"@
[System.IO.File]::WriteAllText("c:\Users\pc\.gemini\antigravity\scratch\checkit1-main\worker_portal.html", $html, [System.Text.Encoding]::UTF8)
