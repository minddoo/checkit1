document.addEventListener('DOMContentLoaded', () => {

    // --- 1. FULL MULTILINGUAL DATA (EXACT ORIGINAL PHRASING RESTORED) ---
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
            'contact_form_email_label': '이메일 주소', 'contact_form_email_placeholder': '이메일을 입력하세요',
            'contact_form_phone_label': '전화번호', 'contact_form_phone_placeholder': '전화번호를 입력하세요',
            'contact_form_message_label': '문의 내용', 'contact_form_message_placeholder': '문의하실 내용을 입력하세요',
            'contact_form_submit_button': '문의하기',
            'chatbot_header': 'CHECKIT 고객센터', 'chatbot_placeholder': '궁금한 점을 물어보세요...',
            
            // --- INDIVIDUAL PAGE ORIGINAL MENTS ---
            'individual_page_title': '개인 고객 서비스',
            'individual_page_subtitle': '복잡한 건강검진, 이제 모국어로 편안하게 받으세요.',
            'expectation_title': '한국 의료, 기대와 현실의 차이',
            'expectation_subtitle': '우수한 한국 의료 시스템, 하지만 외국인에게는 여전히 높기만 한 벽입니다.',
            'expectation_item_title_1': '합리적인 비용', 'expectation_item_desc_1': '세계 최고 수준의 의료 서비스를 합리적인 가격에 누릴 수 있습니다.',
            'expectation_item_title_2': '편리한 접근성', 'expectation_item_desc_2': '어디서나 가까운 곳에 전문 병원이 위치하고 있습니다.',
            'expectation_item_title_3': '첨단 의료 장비', 'expectation_item_desc_3': '최신 기술과 장비로 정확한 진단이 가능합니다.',
            'expectation_item_title_4': '신속한 프로세스', 'expectation_item_desc_4': '예약부터 검진까지 기다림 없이 빠르게 진행됩니다.',
            'reality_title': '하지만 현실은 다릅니다',
            'reality_item_title_1': '의사소통의 벽',
            'reality_item_1_point_1': '전문 의학 용어의 이해 한계', 'reality_item_1_point_2': '증상 설명의 어려움',
            'reality_item_1_point_3': '주의사항 오해로 인한 검사 취소', 'reality_item_1_point_4': '병원 내 길 찾기 및 소통 불안',
            'reality_item_title_2': '복잡한 예약 시스템',
            'reality_item_2_point_1': '외국인 전용 예약 창구 부족', 'reality_item_2_point_2': '본인 인증 절차의 번거로움',
            'reality_item_2_point_3': '희망 일정 조율의 어려움', 'reality_item_2_point_4': '대기 시간 발생에 대한 안내 부족',
            'reality_item_title_3': '사후 관리의 공백',
            'reality_item_3_point_1': '한국어로만 된 결과지', 'reality_item_3_point_2': '이상 소견 발생 시 설명 부족',
            'reality_item_3_point_3': '추가 검사 필요성 이해 불가', 'reality_item_3_point_4': '결과지 수령 방법의 복합함',
            'reality_item_title_4': '심리적 장벽',
            'reality_item_4_point_1': '낯선 병원 환경에 대한 두려움', 'reality_item_4_point_2': '문화 차이로 인한 오해',
            'reality_item_4_point_3': '도움을 청할 곳이 없다는 고립감', 'reality_item_4_point_4': '개인정보 유출에 대한 우려',
            'reality_overtime_title': '시간이 지날수록 늘어나는 고민',
            'reality_overtime_p1': '검진을 미룰수록 건강에 대한 불안은 커져만 갑니다.',
            'reality_overtime_p2': '작은 증상을 방치하다 더 큰 병으로 이어지기도 합니다.',
            'solution_title': 'CHECKIT 솔루션',
            'solution_subtitle': '어려운 과정은 저희가 맡겠습니다. 당신은 건강만 생각하세요.',
            'individual_service1_title': '1:1 전담 매니저', 'individual_service1_desc': '당신의 모국어로 모든 과정을 안내하는 든든한 파트너입니다.',
            'individual_service2_title_new': '실시간 커뮤니케이션', 'individual_service2_desc_new': '병원 현장에서 발생하는 모든 상황을 즉시 해결해 드립니다.',
            'individual_service3_title_new': '결과지 단순 요약', 'individual_service3_desc_new': '복잡한 의학 용어를 이해하기 쉬운 단어로 요약해 드립니다.',
            'packages_title': '추천 패키지',
            'packages_subtitle': '나에게 꼭 필요한 구성으로 선택하세요.',
            'package1_title': '안심 플랜', 'package1_price': '₩50,000',
            'package2_title': '표준 플랜', 'package2_price': '₩100,000',
            'package3_title': '프리미엄 플랜', 'package3_price': '₩200,000',
            'package_includes': '포함 내역', 'package_recommend_title': '추천 대상',
            'package1_feature1': '병원 예약 대행', 'package1_feature2': '기본 문진표 번역', 'package1_feature3': '결과지 요약 (PDF)',
            'package1_recommend_desc': '검진 경험이 있고 행정 지원만 필요한 분',
            'options_title_new': '추가 옵션 서비스'
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

        const renderMyPage = async (user) => {
            const uSnap = await db.collection("users").doc(user.uid).get();
            const userData = uSnap.data() || { role: "user" };
            if (userData.role === 'super_admin') window.location.href = 'platform.html';
            else {
                const overlay = document.getElementById('mypage-overlay');
                if(overlay) { 
                    overlay.style.display = 'flex'; document.body.classList.add('platform-view-active'); 
                    overlay.innerHTML = `<div class="mypage-header"><h2>Dashboard</h2><button onclick="location.reload()" class="lang-btn">Close</button></div>`;
                }
            }
        };

        const initAuthNav = () => {
            const nav = document.querySelector('#language-switcher');
            if(!nav) return;
            let btn = document.getElementById('platform-auth-btn');
            if(!btn){ 
                btn = document.createElement('button'); btn.id='platform-auth-btn'; btn.className='lang-btn auth-main-btn'; 
                btn.style.marginLeft = '10px'; btn.style.background = '#2ECC71'; btn.style.color = '#fff'; btn.style.padding = '5px 15px'; btn.style.borderRadius = '5px';
                nav.appendChild(btn); 
            }
            auth.onAuthStateChanged(user => {
                if(user){
                    btn.textContent = currentLang === 'ko' ? '마이페이지' : 'My Page';
                    btn.onclick = () => renderMyPage(user);
                } else {
                    btn.textContent = currentLang === 'ko' ? '로그인' : 'Login';
                    btn.onclick = () => { const p = new firebase.auth.GoogleAuthProvider(); auth.signInWithPopup(p); };
                }
            });
        };
        initAuthNav();
    }

    const initB2B = () => {
        const open = document.getElementById('openProcessSlide'), modal = document.getElementById('processModal');
        if (!open || !modal) return;
        open.onclick = () => modal.style.display='flex';
        document.getElementById('closeProcess').onclick = () => modal.style.display='none';
    };
    initB2B();
});