document.addEventListener('DOMContentLoaded', () => {

    // --- 1. FULL MULTILINGUAL DATA ---
    const translations = {
        ko: {
            'nav_home': '홈', 'hero_cta': '지금 바로 상담 신청', 'learn_more': '더 알아보기',
            'platform_title': 'CHECKIT 플랫폼', 'platform_status_title': '나의 서비스 현황',
            'platform_close': '닫기', 'contact_success': '문의가 성공적으로 접수되었습니다!',
            'admin_title': '매니저 관리 대시보드', 'onboarding_title': '프로필 완성하기',
            'chatbot_manager_btn': '전담 매니저와 채팅하기',
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
            'contact_title_new': '궁금한 점이 있으신가요?',
            'contact_subtitle_new': 'CHECKIT의 전문가 팀이 최적의 솔루션을 제안해 드립니다.',
            'contact_form_email_label': '이메일 주소',
            'contact_form_phone_label': '전화번호',
            'contact_form_message_label': '문의 내용',
            'contact_form_submit_button': '문의하기',
            'corporate_page_title': '기업 고객용 토탈 솔루션',
            'corporate_page_subtitle': '외국인 근로자의 건강을 체계적으로 관리하여, 기업의 생산성을 높이고 보건 관리 부담을 덜어드립니다.',
            'individual_page_title': '개인 고객 서비스',
            'individual_page_subtitle': '복잡한 건강검진, 이제 모국어로 편안하게 받으세요.',
            'expectation_title': '한국 의료, 기대와 현실의 차이',
            'expectation_subtitle': '우수한 한국 의료 시스템, 하지만 외국인에게는 여전히 높기만 한 벽입니다.',
            'expectation_item_title_1': '합리적인 비용',
            'expectation_item_title_2': '편리한 접근성',
            'expectation_item_title_3': '첨단 의료 장비',
            'expectation_item_title_4': '신속한 프로세스',
            'reality_title': '하지만 현실은 다릅니다',
            'solution_title': 'CHECKIT 솔루션',
            'packages_title': '추천 패키지',
            'options_title_new': '추가 옵션 서비스'
        },
        en: {
            'nav_home': 'Home', 'hero_cta': 'Apply Now', 'learn_more': 'Learn More',
            'platform_title': 'CHECKIT PLATFORM', 'platform_status_title': 'My Service Status',
            'platform_close': 'Close', 'contact_success': 'Inquiry submitted successfully!',
            'admin_title': 'Manager Dashboard', 'onboarding_title': 'Complete Your Profile',
            'chatbot_manager_btn': 'Chat with Manager'
        },
        cn: {
            'nav_home': '首页', 'hero_cta': '立即申请', 'learn_more': '了解更多',
            'platform_title': 'CHECKIT 平台', 'platform_status_title': '我的服务状态',
            'platform_close': '关闭', 'contact_success': '咨询已成功提交！',
            'admin_title': '经理管理后台', 'onboarding_title': '完善个人资料',
            'chatbot_manager_btn': '与经理聊天'
        },
        vn: {
            'nav_home': 'Trang chủ', 'hero_cta': 'Đăng ký ngay', 'learn_more': 'Xem thêm',
            'platform_title': 'Nền tảng CHECKIT', 'platform_status_title': 'Trạng thái dịch vụ',
            'platform_close': 'Đóng', 'contact_success': 'Yêu cầu đã được gửi thành công!',
            'admin_title': 'Bảng điều khiển quản lý', 'onboarding_title': 'Hoàn thiện hồ sơ',
            'chatbot_manager_btn': 'Chat với quản lý'
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

    const initLangSwitch = () => {
        const btns = document.querySelectorAll('#language-switcher .lang-btn');
        btns.forEach(btn => btn.onclick = () => switchLanguage(btn.dataset.lang));
        switchLanguage('ko');
    };
    initLangSwitch();

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
        db.settings({ experimentalForceLongPolling: true, merge: true });

        // 1. Unified Inquiry Logic
        document.querySelectorAll('.contact-form, .contact-form-body').forEach(form => {
            form.onsubmit = async (e) => {
                e.preventDefault();
                const btn = form.querySelector('button[type="submit"]');
                btn.disabled = true;
                try {
                    await db.collection("contact_inquiries").add({
                        email: form.querySelector('input[type="email"]')?.value || "",
                        phone: form.querySelector('input[type="tel"], input[placeholder*="010"]')?.value || "",
                        message: form.querySelector('textarea')?.value || "",
                        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                        source: window.location.pathname,
                        language: currentLang,
                        status: "new"
                    });
                    alert(translations[currentLang]['contact_success']);
                    form.reset();
                } catch (err) { console.error(err); }
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
            const modalHtml = `<div id="login-modal-overlay" style="display:flex; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.7); z-index:10000; justify-content:center; align-items:center;">
                <div class="login-modal-box onboarding-box" style="background:#fff; padding:30px; border-radius:15px; width:90%; max-width:400px; text-align:center;">
                    <h2 class="modal-logo">CHECKIT</h2><h3>${lang['onboarding_title']}</h3>
                    <div class="form-group-auth" style="margin:20px 0;"><input type="text" id="ob-name" placeholder="Full Name" style="width:100%; padding:10px; margin-bottom:10px; border:1px solid #ddd; border-radius:8px;">
                    <div class="form-row" style="display:flex; gap:10px;"><input type="text" id="ob-nat" placeholder="Nationality" style="flex:1; padding:10px; border:1px solid #ddd; border-radius:8px;"><input type="text" id="ob-birth" placeholder="YYYY-MM-DD" style="flex:1; padding:10px; border:1px solid #ddd; border-radius:8px;"></div></div>
                    <button id="btn-ob-submit" class="cta-button-primary" style="width:100%;">Start Service</button></div></div>`;
            document.body.insertAdjacentHTML('beforeend', modalHtml);
            document.getElementById('btn-ob-submit').onclick = async () => {
                const name = document.getElementById('ob-name').value, nat = document.getElementById('ob-nat').value, birth = document.getElementById('ob-birth').value;
                if (!name || !nat) return alert("Fill required fields.");
                await db.collection("users").doc(user.uid).update({ fullName: name, nationality: nat, dob: birth, onboardingComplete: true });
                location.reload();
            };
        };

        // 3. Platform Dashboards
        let platformSub = null;

        const renderMyPage = async (user) => {
            const overlay = document.getElementById('mypage-overlay');
            if(!overlay) return;
            overlay.style.display = 'flex';
            document.body.classList.add('platform-view-active');
            
            try {
                const uRef = db.collection("users").doc(user.uid);
                let uSnap = await uRef.get().catch(() => null);
                if (!uSnap || !uSnap.exists) {
                    await initUserDoc(user);
                    uSnap = await uRef.get().catch(() => ({ exists: true, data: () => ({ role: 'user' }) }));
                }
                const userData = uSnap.data() || { role: "user" };
                renderUser(user);
            } catch (e) { renderUser(user); }
        };

        const renderUser = (user) => {
            const overlay = document.getElementById('mypage-overlay'), lang = translations[currentLang];
            overlay.innerHTML = `<div class="mypage-header"><h2>${lang['platform_title']}</h2><div style="display:flex; gap:10px;"><button id="close-mypage" class="lang-btn">${lang['platform_close']}</button></div></div>
                <div class="container" id="u-dynamic-view" style="padding:20px 0;"><div id="u-status-content">Loading status...</div></div>`;
            document.getElementById('close-mypage').onclick = () => { overlay.style.display='none'; document.body.classList.remove('platform-view-active'); if(platformSub) platformSub(); };
            platformSub = db.collection("user_process").doc(user.uid).onSnapshot(doc => {
                const data = doc.data(); if(!data) return;
                const activeStep = data.steps.find(s => s.status === 'active') || data.steps[0];
                document.getElementById('u-status-content').innerHTML = `<div class="info-panel"><h3>${lang['platform_status_title']}</h3><p><strong>${activeStep.title}</strong></p><p>${activeStep.description}</p></div>`;
            });
        };

        const initUserDoc = async (user) => {
            try {
                const uRef = db.collection("users").doc(user.uid);
                const uSnap = await uRef.get({ source: 'server' }).catch(() => uRef.get());
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
            } catch (e) { console.warn("Init skipped:", e); }
        };

        const initAuthNav = () => {
            const nav = document.querySelector('#language-switcher');
            let btn = document.getElementById('platform-auth-btn');
            if(!btn){ btn = document.createElement('button'); btn.id='platform-auth-btn'; btn.className='lang-btn auth-main-btn'; nav.appendChild(btn); }
            auth.onAuthStateChanged(user => {
                if(user){
                    btn.textContent = currentLang === 'ko' ? '마이페이지' : 'My Page';
                    btn.onclick = () => renderMyPage(user);
                    checkOnboarding(user);
                    if(!document.getElementById('logout-btn')){
                        const lo = document.createElement('button'); lo.id='logout-btn'; lo.className='lang-btn logout-btn'; lo.textContent='Logout';
                        lo.onclick = () => auth.signOut().then(() => location.reload()); nav.appendChild(lo);
                    }
                    if (new URLSearchParams(window.location.search).get('view') === 'mypage') renderMyPage(user);
                } else {
                    btn.textContent = currentLang === 'ko' ? '로그인' : 'Login';
                    btn.onclick = () => { const p = new firebase.auth.GoogleAuthProvider(); auth.signInWithPopup(p); };
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