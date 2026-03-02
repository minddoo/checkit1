// Translations Data (Existing translations kept for full functionality)
// ... [Existing translations object assumed to be above this block] ...

document.addEventListener('DOMContentLoaded', () => {
    let currentLang = 'ko';
    const allTranslatableElements = document.querySelectorAll('[data-lang-key]');
    const mainLangButtons = document.querySelectorAll('#language-switcher .lang-btn');
    const chatbotLangButtons = document.querySelectorAll('#chatbot-lang-buttons .chatbot-lang-btn');
    const chatbotContainer = document.getElementById('chatbot-container');
    const openChatbotBtn = document.getElementById('open-chatbot');
    const closeChatbotBtn = document.getElementById('close-chatbot');
    const chatbotMessages = document.getElementById('chatbot-messages');
    const suggestedQuestionsContainer = document.getElementById('chatbot-suggested-questions');
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotSendBtn = document.getElementById('chatbot-send');

    const switchLanguage = (newLang) => {
        currentLang = newLang;
        document.documentElement.lang = newLang;
        const langData = translations[newLang] || translations['ko'];

        allTranslatableElements.forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (langData[key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = langData[key];
                } else {
                    element.innerHTML = langData[key];
                }
            }
        });

        mainLangButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.lang === newLang));
        if (chatbotLangButtons) {
            chatbotLangButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.lang === newLang));
        }
    };

    // --- 텍스트 표시 보장 (최상단 실행) ---
    const initialLang = new URLSearchParams(window.location.search).get('lang') || 'ko';
    switchLanguage(initialLang);

    // ====================================================
    // [CHECKIT Platform] Firebase Auth & Notification System
    // ====================================================
    
    // Cloudflare pages.dev 배포 환경 최적화 Config
    const firebaseConfig = {
        apiKey: "AIzaSy...", // 여기에 실제 API Key를 정확히 입력하세요.
        authDomain: "checkit-app.firebaseapp.com",
        projectId: "checkit-app",
        storageBucket: "checkit-app.appspot.com",
        messagingSenderId: "...",
        appId: "..."
    };

    if (typeof firebase !== 'undefined') {
        if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
        const auth = firebase.auth();
        const db = firebase.firestore();
        let currentUser = null;

        // --- Formspree 관리자 자동 메일 전송 (fetch 방식) ---
        const sendAdminNotification = async (type, user, provider) => {
            const messageBody = `
CHECKIT 회원 활동 알림

유형: ${type === 'SIGNUP' ? '회원가입' : '로그인'}
이름: ${user.displayName || '이메일 회원'}
이메일: ${user.email}
UID: ${user.uid}
Provider: ${provider}
시간: ${new Date().toLocaleString('ko-KR')}
            `;

            try {
                await fetch('https://formspree.io/f/xaqdljye', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email: user.email, message: messageBody })
                });
            } catch (e) { console.warn('Notification failed:', e); }
        };

        // --- Firestore 사용자 데이터 동기화 ---
        const syncUserToFirestore = async (user, provider, isNew = false) => {
            const userRef = db.collection('users').doc(user.uid);
            const now = firebase.firestore.FieldValue.serverTimestamp();
            
            if (isNew) {
                await userRef.set({
                    email: user.email,
                    name: user.displayName || '이메일 회원',
                    provider: provider,
                    createdAt: now,
                    lastLoginAt: now,
                    status: "가입완료"
                });
                await sendAdminNotification('SIGNUP', user, provider);
            } else {
                await userRef.set({ lastLoginAt: now }, { merge: true });
                await sendAdminNotification('LOGIN', user, provider);
            }
        };

        // --- 통합 로그인 모달 UI 및 로직 ---
        const showLoginModal = () => {
            let overlay = document.getElementById('login-modal-overlay');
            if (!overlay) {
                const modalHtml = `
                    <div id="login-modal-overlay" style="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.85);z-index:3000;display:flex;justify-content:center;align-items:center;font-family:inherit;">
                        <div class="login-modal-box" style="background:#fff;padding:40px;border-radius:24px;width:90%;max-width:400px;text-align:center;position:relative;box-shadow:0 20px 50px rgba(0,0,0,0.3);">
                            <button id="close-login-modal" style="position:absolute;top:20px;right:20px;background:none;border:none;font-size:28px;cursor:pointer;color:#ccc;">&times;</button>
                            <h2 style="margin-bottom:10px;font-weight:800;color:#27ae60;">CHECKIT</h2>
                            <p style="color:#666;margin-bottom:30px;font-size:0.9rem;">외국인 건강검진 행정 지원 플랫폼</p>
                            
                            <div id="login-view-main" style="display:flex;flex-direction:column;gap:12px;">
                                <button id="login-google" style="background:#fff;border:1px solid #eee;padding:14px;border-radius:12px;display:flex;align-items:center;justify-content:center;gap:12px;cursor:pointer;font-weight:600;">
                                    <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" width="20"> Google로 로그인
                                </button>
                                <button id="btn-goto-email" style="background:#f8f9fa;border:1px solid #eee;padding:14px;border-radius:12px;cursor:pointer;font-weight:600;">이메일로 계속하기</button>
                            </div>

                            <div id="login-view-email" style="display:none; flex-direction:column; gap:12px; text-align:left;">
                                <input type="email" id="auth-email" placeholder="이메일 주소" style="padding:14px; border:1px solid #ddd; border-radius:10px; outline:none;">
                                <input type="password" id="auth-pw" placeholder="비밀번호" style="padding:14px; border:1px solid #ddd; border-radius:10px; outline:none;">
                                <div id="signup-confirm-wrap" style="display:none; flex-direction:column; gap:12px;">
                                    <input type="password" id="auth-pw-confirm" placeholder="비밀번호 확인" style="padding:14px; border:1px solid #ddd; border-radius:10px; outline:none;">
                                </div>
                                <button id="btn-auth-submit" style="background:#27ae60; color:#fff; border:none; padding:14px; border-radius:12px; cursor:pointer; font-weight:700; font-size:1rem;">로그인</button>
                                <p style="text-align:center; font-size:0.85rem; color:#666; cursor:pointer; margin-top:10px;" id="btn-toggle-mode">아직 계정이 없으신가요? 회원가입</p>
                                <button id="btn-auth-back" style="background:none; border:none; color:#aaa; font-size:0.85rem; cursor:pointer; margin-top:10px;">뒤로 가기</button>
                            </div>
                        </div>
                    </div>
                `;
                document.body.insertAdjacentHTML('beforeend', modalHtml);
                overlay = document.getElementById('login-modal-overlay');
                const viewMain = document.getElementById('login-view-main');
                const viewEmail = document.getElementById('login-view-email');
                const signupWrap = document.getElementById('signup-confirm-wrap');
                const submitBtn = document.getElementById('btn-auth-submit');
                const toggleBtn = document.getElementById('btn-toggle-mode');
                let mode = 'LOGIN';

                document.getElementById('close-login-modal').onclick = () => overlay.style.display = 'none';
                document.getElementById('btn-goto-email').onclick = () => { viewMain.style.display = 'none'; viewEmail.style.display = 'flex'; };
                document.getElementById('btn-auth-back').onclick = () => { viewMain.style.display = 'flex'; viewEmail.style.display = 'none'; };

                toggleBtn.onclick = () => {
                    mode = (mode === 'LOGIN') ? 'SIGNUP' : 'LOGIN';
                    signupWrap.style.display = (mode === 'SIGNUP') ? 'flex' : 'none';
                    submitBtn.textContent = (mode === 'SIGNUP') ? '회원가입' : '로그인';
                    toggleBtn.textContent = (mode === 'SIGNUP') ? '이미 계정이 있으신가요? 로그인' : '아직 계정이 없으신가요? 회원가입';
                };

                // 구글 로그인
                document.getElementById('login-google').onclick = () => {
                    auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(res => {
                        syncUserToFirestore(res.user, 'google');
                        overlay.style.display = 'none';
                    }).catch(e => alert(e.message));
                };

                // 이메일 로그인/가입
                submitBtn.onclick = async () => {
                    const email = document.getElementById('auth-email').value;
                    const pw = document.getElementById('auth-pw').value;
                    if (!email || !pw) { alert('이메일과 비밀번호를 입력해주세요.'); return; }

                    try {
                        if (mode === 'SIGNUP') {
                            const pwConfirm = document.getElementById('auth-pw-confirm').value;
                            if (pw !== pwConfirm) throw new Error('비밀번호가 일치하지 않습니다.');
                            const res = await auth.createUserWithEmailAndPassword(email, pw);
                            await res.user.sendEmailVerification();
                            await syncUserToFirestore(res.user, 'email', true);
                            alert('인증 메일이 발송되었습니다. 확인 후 로그인해주세요.');
                            overlay.style.display = 'none';
                        } else {
                            const res = await auth.signInWithEmailAndPassword(email, pw);
                            if (!res.user.emailVerified) {
                                alert('이메일 인증이 필요합니다.'); await auth.signOut();
                            } else {
                                await syncUserToFirestore(res.user, 'email');
                                overlay.style.display = 'none';
                            }
                        }
                    } catch (e) {
                        if (e.code === 'auth/user-not-found') {
                            if (confirm('계정이 없습니다. 회원가입 하시겠습니까?')) {
                                mode = 'SIGNUP'; signupWrap.style.display = 'flex'; submitBtn.textContent = '회원가입';
                            }
                        } else { alert(e.message); }
                    }
                };
            }
            overlay.style.display = 'flex';
        };

        // --- 로그인 상태 감지 및 UI 업데이트 ---
        const initAuthUI = () => {
            const nav = document.querySelector('#language-switcher');
            if (!nav) return;
            let authBtn = document.getElementById('platform-auth-btn');
            if (!authBtn) {
                authBtn = document.createElement('button');
                authBtn.id = 'platform-auth-btn';
                authBtn.className = 'lang-btn';
                authBtn.style.cssText = 'margin-left:15px; background:#27ae60; color:#fff; border:none; padding:8px 20px; font-weight:700; cursor:pointer;';
                nav.appendChild(authBtn);
            }

            auth.onAuthStateChanged(user => {
                currentUser = user;
                if (user) {
                    authBtn.textContent = currentLang === 'ko' ? '마이페이지' : 'My Page';
                    authBtn.onclick = () => window.location.href = 'individual.html?view=mypage';
                    
                    let logoutBtn = document.getElementById('platform-logout-btn');
                    if (!logoutBtn) {
                        logoutBtn = document.createElement('button');
                        logoutBtn.id = 'platform-logout-btn';
                        logoutBtn.className = 'lang-btn';
                        logoutBtn.style.cssText = 'margin-left:10px; background:#e74c3c; color:#fff; border:none; padding:8px 15px; font-weight:600; cursor:pointer;';
                        logoutBtn.textContent = currentLang === 'ko' ? '로그아웃' : 'Logout';
                        logoutBtn.onclick = () => auth.signOut().then(() => window.location.href = 'index.html');
                        authBtn.parentNode.appendChild(logoutBtn);
                    }
                } else {
                    authBtn.textContent = currentLang === 'ko' ? '로그인' : 'Login';
                    authBtn.onclick = showLoginModal;
                    const lBtn = document.getElementById('platform-logout-btn'); if (lBtn) lBtn.remove();
                }
            });
        };

        initAuthUI();
        if (new URLSearchParams(window.location.search).get('view') === 'mypage') {
            auth.onAuthStateChanged(user => { if (user) document.body.classList.add('platform-view-active'); });
        }
    }

    // --- 기존 챗봇 및 기타 로직 (생략 - 실제 파일에는 포함됨) ---
});
