document.addEventListener('DOMContentLoaded', () => {

    // --- 1. FULL MULTILINGUAL DATA RESTORATION ---
    const translations = {
        ko: {
            'nav_home': '홈', 'hero_cta': '지금 바로 상담 신청', 'learn_more': '더 알아보기',
            'platform_title': 'CHECKIT 플랫폼', 'platform_status_title': '나의 서비스 현황',
            'platform_close': '닫기', 'contact_success': '문의가 성공적으로 접수되었습니다!',
            'admin_title': '매니저 관리 대시보드', 'onboarding_title': '프로필 완성하기',
            'nav_mypage': '마이페이지', 'nav_login': '로그인', 'nav_logout': '로그아웃',
            'hero_title': '외국인을 위한 건강검진,<br>언어의 장벽 없이 편안하게.',
            'hero_subtitle': '일정 누락, 이해하기 어려운 검진 안내, 한국어로만 제공되는 결과지까지.<br><br>CHECKIT이 모든 비의료 과정을 해결합니다.',
            'service_for_title': '누구를 위한 서비스인가요?',
            'individual_title': '개인 고객',
            'individual_desc': '한국 거주/방문 외국인 개인이 언어 장벽 없이<br>편안하게 건강검진을 받을 수 있도록 지원합니다',
            'corporate_title': '기업 고객',
            'corporate_desc': '외국인 근로자의 단체 건강검진을 쉽고 효율적으로 관리하여,<br>기업의 보건 관리 부담을 줄여드립니다.',
            'why_us_title': '왜 CHECKIT을 선택해야 할까요?',
            'why_us_subtitle_new': '의료 서비스의 높은 질에도 불구하고, 외국인들은 예약, 접수, 결과 확인 등 \'비의료 과정\'에서 어려움을 겪습니다.<br><br>CHECKIT은 바로 이 공백을 채웁니다.',
            'why_us_feature1_title': '커뮤니케이션 전문',
            'why_us_feature1_desc': '병원 선택부터 결과 번역까지, 언어와 문화의 장벽으로 인한 모든 소통 문제를 해결합니다.',
            'why_us_feature2_title': '100% 고객 중심',
            'why_us_feature2_desc': '병원과의 계약 없이 오직 고객의 입장에서, 고객에게 필요한 최적의 선택지를 제안하고 과정을 돕습니다.',
            'why_us_feature3_title': '비의료 과정에 집중',
            'why_us_feature3_desc': '의료 행위를 제외한 모든 부수적인 절차를 대행하여, 고객이 오직 건강검진에만 집중할 수 있도록 합니다.',
            'why_us_feature4_title': '합리적인 비용',
            'why_us_feature4_desc': '의료기관과 연계 없이 독립적으로 운영되므로, 불필요한 중개 수수료가 없습니다. 순수 서비스 이용료만으로 이용 가능합니다.',
            'process_title': '이용 프로세스',
            'process_step1_title': '서비스 신청',
            'process_step1_desc_new': '웹사이트 또는 챗봇을 통해 상담을 신청합니다.',
            'process_step2_title': '예약 및 안내',
            'process_step2_desc_new': '매니저가 병원 예약을 완료하고 주의사항을 안내합니다.',
            'process_step3_title_new': '검진 및 사후 관리',
            'process_step3_desc_new': '검진 당일 지원과 결과지 요약본을 전달받습니다.',
            'testimonials_title': '고객 후기',
            'testimonials_subtitle': '이미 많은 외국인 고객분들이 CHECKIT과 함께하고 있습니다.',
            'testimonial1_text': '한국 병원이 처음이라 걱정이 많았는데, 매니저님이 친절하게 도와주셔서 무사히 검진을 마쳤어요.',
            'testimonial1_author': 'Nguyen Thuy', 'testimonial1_type': '베트남 고객',
            'testimonial2_text': '회사를 통해 단체 검진을 받았는데, 결과지를 제 나라 말로 읽을 수 있어서 정말 안심됐습니다.',
            'testimonial2_author': 'Li Wei', 'testimonial2_type': '중국 기업 고객',
            'testimonial3_text': '언어 때문에 검진을 미루고 있었는데, CHECKIT 덕분에 제 건강 상태를 정확히 알게 되었습니다.',
            'testimonial3_author': 'John Doe', 'testimonial3_type': '영어권 개인 고객',
            'contact_title_new': '궁금한 점이 있으신가요?',
            'contact_subtitle_new': 'CHECKIT의 전문 매니저가 신속하고 친절하게 답변해 드립니다.',
            'contact_form_email_label': '이메일 주소',
            'contact_form_email_placeholder': 'example@email.com',
            'contact_form_phone_label': '연락처 (선택사항)',
            'contact_form_phone_placeholder': '010-0000-0000',
            'contact_form_message_label': '문의 내용',
            'contact_form_message_placeholder': '궁금하신 내용을 입력해주세요.',
            'contact_form_submit_button': '문의하기',
            'corporate_page_title': '기업 고객 토탈 솔루션',
            'individual_page_title': '개인 고객 서비스',
            'individual_page_subtitle': 'CHECKIT은 한국에 거주하거나 방문하는 모든 외국인 개인이<br><br>언어의 장벽 없이 최상의 건강검진을 받을 수 있도록 돕습니다.',
            'reality_title': '하지만 현실은....',
            'reality_item_title_1': '1. 다국어 지원 부재',
            'reality_item_1_point_1': '직원들은 외국어를 못해서 전화를 피합니다.',
            'reality_item_1_point_2': '안내, 준비 가이드, 알림이 모두 한국어입니다.',
            'reality_item_1_point_3': '민감한 질문(생리, 수술, 증상)에 대해 제대로 된 설명을 받지 못합니다.',
            'reality_item_1_point_4': '검진 중 모든 안내 방송은 한국어로만 나옵니다.',
            'reality_item_title_2': '2. 혼란스러운 과정',
            'reality_item_2_point_1': '검진 패키지에 무엇이 포함되어 있는지조차 모릅니다.',
            'reality_item_2_point_2': '준비 물품이 사용법에 대한 설명 없이 도착합니다.',
            'reality_item_2_point_3': '대장내시경 약은 한국어로만 설명되어 → 검사에 실패합니다.',
            'reality_item_2_point_4': '사전 문진표는 길고 복잡하며 전부 한국어입니다.',
            'reality_item_title_3': '3. 불확실한 일정',
            'reality_item_3_point_1': '예약을 잡는 데만 2-3일이 걸립니다.',
            'reality_item_3_point_2': '직원마다 다른 답변을 하며 — 아무도 책임지지 않습니다.',
            'reality_item_3_point_3': '한국 전화번호가 없으면 → 알림이나 준비 안내를 받지 못합니다.',
            'reality_item_3_point_4': '해외 시차로 인해 → 통화가 실패하고 예약이 지연됩니다.',
            'reality_item_title_4': '4. 지연된 결과 및 책임 부재',
            'reality_item_4_point_1': '당신이 없는 주소로 결과가 우편 발송됩니다.',
            'reality_item_4_point_2': '한국을 떠난 후에도 결과가 몇 주 동안 지연됩니다.',
            'reality_item_4_point_3': '해외 전화 인증 제한으로 영수증을 받을 수 없습니다.',
            'reality_item_4_point_4': '검사 후 규칙(예: 용종 제거 후 비행)에 대한 설명이 없습니다.',
            'reality_overtime_title': '글로는 사소해 보이는 문제들. 현실은 이렇습니다.',
            'reality_overtime_p1': '한국에 오기 전에는 모든 것이 안심되었습니다.',
            'reality_overtime_p2': '다국어 지원이 가능하고, 외국인들이 자주 이용하며, 전체 과정이 순조롭고 잘 안내될 것이라고 들었습니다.',
            'reality_overtime_p3': '그리고 예약을 시도했습니다.',
            'reality_overtime_p4': '그때부터 모든 것이 무너지기 시작했습니다.',
            'reality_overtime_p5': '실제로 내 언어를 할 수 있는 사람은 아무도 없었습니다.',
            'reality_overtime_p6': '모든 안내, 알림, 준비 메모는 한국어로만 되어 있어 제가 약속받았던 것과는 너무나 달랐습니다.',
            'reality_overtime_p7': '일정을 확정하는 데만 며칠이 걸렸습니다. 전화는 받지 않았고, 답장은 늦거나 아예 오지 않았습니다. 후속 조치를 할 때마다 제가 너무 많은 것을 요구하는 것처럼 느껴졌습니다... 저는 단지 기본적인 것을 이해하려고 했을 뿐인데도 말이죠.',
            'reality_overtime_p8': '검사 당일, 혼란은 극에 달했습니다. 누군가 안내해 줄 것이라고 했지만, 어디로 가야 할지, 무엇을 가져가야 할지, 누구에게 물어봐야 할지 전혀 몰랐습니다.',
            'reality_overtime_p9': '직원들은 한국어로 빠르게 말하고, 애매하게 가리키고는 그냥 가버렸습니다. 한 검사는 아무 설명 없이 중간에 중단되었고, 다른 곳으로 가라는 간단한 손짓만 있었습니다.',
            'reality_overtime_p10': '그순간, 저는 완전히 혼자라는 것을 깨달았습니다.',
            'reality_overtime_p11': '결과도 받지 못한 채 한국을 떠났습니다. 며칠이 몇 주가 되었습니다. 후속 조치도, 명확한 답변도 없었습니다. 책임감을 느끼는 사람도 아무도 없었습니다. 그리고 마침내 중요한 것을 깨달았습니다. 오기 전에 들었던 약속들은 도착해서 마주한 현실과 전혀 일치하지 않았다는 것을요.',
            'solution_title': 'CHECKIT의 솔루션',
            'solution_subtitle': '불편함, 외로움, 불안함 없이 건강검진의 전 과정에 온전히 집중할 수 있도록 CHECKIT이 함께합니다.',
            'individual_service1_title': '1:1 전담 매니저',
            'individual_service1_desc': '상담 요청 즉시, 고객님의 언어를 구사하는 전담 매니저가 배정됩니다. 병원 선택, 예약, 일정 조율까지 모든 과정을 책임지고 관리합니다.',
            'individual_service2_title_new': '실시간 소통 지원',
            'individual_service2_desc_new': '검진 당일, 물리적 동행 대신 메신저를 통해 병원 내 접수, 문진, 수납 등 모든 의사소통 과정을 실시간으로 지원하여 불편함이나 외로움 없이 검진에만 집중하도록 돕습니다.',
            'individual_service3_title_new': '결과지 번역 · 요약',
            'individual_service3_desc_new': '고객님께서 병원으로부터 수령한 한국어 결과지를 사진이나 파일로 전달해주시면, 모국어로 핵심 내용을 단순 번역 및 요약하여 전달해 드립니다. (의료적 소견이나 상세 설명은 미포함)',
            'packages_title': 'CHECKIT의 패키지',
            'packages_subtitle': '고객님의 필요에 맞는 완벽한 플랜을 선택하세요.',
            'package1_title': 'No-Confusion Plan',
            'package1_price': '₩500,000',
            'package_includes': '포함 내역',
            'package1_feature1': '중립적인 병원 목록 (추천 없음)',
            'package1_feature2': '프로그램 및 가격 구조 (공식 정보 번역만 제공)',
            'package1_feature3': '단계별 예약 가이드',
            'package1_feature4': '모든 병원 서류의 영어 번역',
            'package1_feature5': '필수 문진표 가이드 (간단, 실수 방지)',
            'package1_feature6': '필수 검진 전 안내 (금식 및 기본 준비)',
            'package1_feature7': '검진 당일 준비물 안내',
            'package1_feature8': '이메일을 통한 안전한 결과 전달',
            'package1_feature9': '결과 지연 1회 확인 포함',
            'package_recommend_title': '추천 대상',
            'package1_recommend_desc': '명확한 정보와 함께 스스로 과정을 관리하고 싶은 분.',
            'package2_title': 'Zero-Mistake Plan',
            'package2_price': '₩650,000',
            'package2_includes': '(NO-CONFUSION PLAN 모두 포함 +)',
            'package2_feature1': '강화된 문진표 가이드 (상세, 실수 방지 중심)',
            'package2_feature2': '외국인들이 자주 놓치는 실수 알림',
            'package2_feature3': '1회 서식 확인 (누락 항목, 서명, 날짜)',
            'package2_feature4': '검진 전 가이드 팩 (타임라인 + 지연 유발 요인)',
            'package2_feature5': '대장내시경 준비 기본 (해당 시)',
            'package2_feature6': '시간에 민감한 문제에 대한 우선 메시지',
            'package2_feature7': '결과 후속 조치 (1회)',
            'package2_feature8': '누락 또는 지연된 서류에 대한 알림',
            'package2_feature9': '일정 변경 지원 (1회 포함)',
            'package2_recommend_desc': '실수를 최소화하고 중요한 알림을 놓치고 싶지 않은 분.',
            'package3_title': 'Total-Safe Plan',
            'package3_price': '₩800,000',
            'package3_includes': '(ZERO-MISTAKE PLAN 모두 포함 +)',
            'package3_feature1': '프리미엄 문진표 관리',
            'package3_feature2': '위험 포인트 설명 (비의료적, 절차 기반)',
            'package3_feature3': '복잡한 서식 항목을 위한 영어 답변 템플릿',
            'package3_feature4': '전체 서식 확인 (모든 페이지, 서명, 첨부파일)',
            'package3_feature5': '프리미엄 검진 전 팩 (상세 타임라인, 실수 대응 플로우)',
            'package3_feature6': '실시간 검진 당일 채팅 지원',
            'package3_feature7': '병원 내 동선 가이드 (그래픽)',
            'package3_feature8': '영문 영수증 요청 (대행)',
            'package3_feature9': 'CD / 추가 서류 요청',
            'package3_feature10': '결과 나올 때까지 완전한 검진 후 후속 조치',
            'package3_feature11': '결과 구성 (비의료적, 내용 구성만)',
            'package3_feature12': '병원 소통용 템플릿',
            'package3_feature13': '일정 변경 지원 (최대 3회 포함)',
            'package3_recommend_desc': '가장 안전하고 완벽하게 관리받고 싶은 분.',
            'price_structure_title': '왜 외국인은 한국에서 동일한 건강검진에 더 많은 비용을 지불할까요?',
            'price_structure_q': '저희는 종종 이런 질문을 받습니다. “왜 당신의 옵션이 병원에서 제공하는 것보다 저렴한가요?”',
            'price_structure_a_title': '간단한 답변',
            'price_structure_a_text': '검사가 달라서가 아닙니다. 가격 구조 때문입니다.',
            'price_structure_reality_title': '실제 많은 병원에서 일어나는 일',
            'price_structure_reality_text': '대부분의 병원은 별도의 “외국인 패키지”를 만듭니다. 이 패키지에는 현지인이 지불하지 않는 서비스가 포함되어 총 가격이 올라갑니다.',
            'price_structure_example_title': '외국인 고객에게서 흔히 볼 수 있는 상황',
            'price_structure_example_text': '한 고객은 외국인 패키지에 대해 1,800,000원을 견적 받았습니다. 저희의 안내를 통해 동일한 검사를 1,050,000원에 예약했습니다.',
            'stat_total_clients': '전체 고객', 'stat_pending_leads': '미처리 문의'
        },
        en: {
            'nav_home': 'Home', 'hero_cta': 'Apply Now', 'learn_more': 'Learn More',
            'platform_title': 'CHECKIT PLATFORM', 'platform_status_title': 'My Service Status',
            'platform_close': 'Close', 'nav_mypage': 'My Page', 'nav_login': 'Login', 'nav_logout': 'Logout',
            'hero_title': 'Specialized Health Check-up Booking for Foreigners',
            'hero_subtitle': 'Complex Korean hospital bookings and check-ups, CHECKIT helps you perfectly in your native language.',
            'why_us_title': 'Why CHECKIT?',
            'process_title': 'Service Process',
            'testimonials_title': 'Testimonials',
            'contact_title_new': 'Any Questions?',
            'corporate_page_title': 'Total Solutions for Corporate',
            'individual_page_title': 'Individual Client Services'
        },
        cn: {
            'nav_home': '首页', 'hero_cta': '立即申请', 'learn_more': '了解更多',
            'platform_title': 'CHECKIT 平台', 'nav_mypage': '我的页面', 'nav_login': '登录', 'nav_logout': '登出',
            'hero_title': '面向外国人的专业健康检查 예약 서비스',
            'hero_subtitle': '复杂的韩国医院预约和健康检查，CHECKIT 用您的母语为您提供完美帮助。'
        },
        vn: {
            'nav_home': 'Trang chủ', 'hero_cta': 'Đăng ký ngay', 'learn_more': 'Xem thêm',
            'platform_title': 'Nền tảng CHECKIT', 'nav_mypage': 'Trang của tôi', 'nav_login': 'Đăng nhập', 'nav_logout': 'Đăng xuất',
            'hero_title': 'Dịch vụ đặt lịch khám sức khỏe chuyên nghiệp cho người nước ngoài',
            'hero_subtitle': 'Đặt lịch bệnh viện and khám sức khỏe tại Hàn Quốc không còn khó khăn, CHECKIT hỗ trợ bạn hoàn hảo bằng tiếng mẹ đẻ.'
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
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    if (key.includes('placeholder')) el.setAttribute('placeholder', data[key]);
                    else el.value = data[key];
                } else {
                    el.innerHTML = data[key];
                }
            }
        });
        const authBtn = document.getElementById('platform-auth-btn');
        if (authBtn) {
            const user = firebase.auth().currentUser;
            authBtn.textContent = user ? (data['nav_mypage'] || 'My Page') : (data['nav_login'] || 'Login');
        }
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

        let platformSub = null;

        const renderMyPage = async (user) => {
            const overlay = document.getElementById('mypage-overlay');
            if(!overlay) return;
            overlay.style.display = 'flex';
            document.body.classList.add('platform-view-active');
            
            try {
                const uSnap = await db.collection("users").doc(user.uid).get();
                const userData = uSnap.data();
                if (userData?.role === 'super_admin') renderAdmin(user);
                else if (userData?.role === 'company_admin') renderCorporate(user, userData.companyId);
                else renderUser(user);
            } catch (err) { renderUser(user); }
        };

        const renderAdmin = (admin) => {
            const overlay = document.getElementById('mypage-overlay');
            overlay.innerHTML = `<div class="mypage-header"><h2>Admin Dashboard</h2><button id="close-mypage" class="lang-btn">Close</button></div>
                <div class="admin-grid"><div class="admin-sidebar" id="admin-user-list"></div><div class="admin-main" id="admin-stats"></div></div>`;
            document.getElementById('close-mypage').onclick = () => { overlay.style.display='none'; document.body.classList.remove('platform-view-active'); if(platformSub) platformSub(); };
        };

        const renderCorporate = (user, companyId) => {
            const overlay = document.getElementById('mypage-overlay');
            overlay.innerHTML = `<div class="mypage-header"><h2>Corporate: ${companyId}</h2><button id="close-mypage" class="lang-btn">Close</button></div>
                <div class="container" style="padding:40px 0;"><div id="corp-stats" class="corp-stats-grid"></div><div class="info-panel"><table class="admin-table"><thead><tr><th>Name</th><th>Status</th></tr></thead><tbody id="corp-list"></tbody></table></div></div>`;
            document.getElementById('close-mypage').onclick = () => { overlay.style.display='none'; document.body.classList.remove('platform-view-active'); if(platformSub) platformSub(); };
        };

        const renderUser = (user) => {
            const overlay = document.getElementById('mypage-overlay');
            // Restore premium design for Individual Page
            overlay.innerHTML = `
                <div class="mypage-header">
                    <h2 data-lang-key="platform_title">CHECKIT PLATFORM</h2>
                    <button id="close-mypage" class="lang-btn" data-lang-key="platform_close">Close</button>
                </div>
                <div class="container" style="padding:20px 0;">
                    <div class="status-timeline" id="u-timeline"></div>
                    <div class="platform-grid">
                        <div class="info-panel" id="u-info">
                            <h3 data-lang-key="platform_status_title">My Service Status</h3>
                            <div id="u-status-content" style="margin-top:20px;"></div>
                        </div>
                        <div class="admin-chat-container">
                            <div class="chat-header">1:1 Support</div>
                            <div class="chat-messages" id="u-msgs"></div>
                            <div class="chat-input-area">
                                <input type="text" id="u-input" placeholder="Type message...">
                                <button id="u-send" class="lang-btn active">Send</button>
                            </div>
                        </div>
                    </div>
                </div>`;
            document.getElementById('close-mypage').onclick = () => { overlay.style.display='none'; document.body.classList.remove('platform-view-active'); if(platformSub) platformSub(); };
            
            platformSub = db.collection("user_process").doc(user.uid).onSnapshot(doc => {
                const data = doc.data() || { steps: [
                    { title: 'Applied', status: 'active', icon: 'fas fa-file-signature', description: 'Your inquiry has been received.' },
                    { title: 'Booking', status: 'pending', icon: 'fas fa-calendar-check', description: 'Matching with the best hospital.' },
                    { title: 'Check-up', status: 'pending', icon: 'fas fa-hospital-user', description: 'Support on the day of visit.' },
                    { title: 'Result', status: 'pending', icon: 'fas fa-poll-h', description: 'Translating and summarizing results.' }
                ]};
                document.getElementById('u-timeline').innerHTML = data.steps.map(s => `<div class="status-step ${s.status}"><i class="${s.icon}"></i><span>${s.title}</span></div>`).join('');
                const active = data.steps.find(s => s.status === 'active') || data.steps[0];
                document.getElementById('u-status-content').innerHTML = `
                    <div style="padding:25px; background:linear-gradient(135deg, #fff 0%, #f9f9f9 100%); border-radius:15px; border-left:6px solid var(--primary-color); box-shadow:var(--shadow-sm);">
                        <h4 style="color:var(--primary-dark); font-size:1.2rem; margin-bottom:10px;">${active.title}</h4>
                        <p style="color:var(--text-color); opacity:0.8;">${active.description || '진행 상황을 확인 중입니다.'}</p>
                    </div>`;
            });
        };

        const showLoginModal = () => {
            if(document.getElementById('login-modal-overlay')) return;
            const modalHtml = `<div id="login-modal-overlay" style="display:flex;">
                <div class="login-modal-box">
                    <button id="close-login-modal" style="position:absolute; top:15px; right:20px; background:none; border:none; font-size:24px; cursor:pointer;">&times;</button>
                    <h2 class="modal-logo">CHECKIT LOGIN</h2>
                    <div class="platform-tabs" style="justify-content:center; margin-bottom:20px;">
                        <div class="p-tab active" id="tab-type-user">개인 고객</div>
                        <div class="p-tab" id="tab-type-corp">기업 관리자</div>
                        <div class="p-tab" id="tab-type-master">마스터</div>
                    </div>
                    <div id="key-field-container" style="display:none; margin-bottom:20px;">
                        <input type="text" id="global-admin-key" placeholder="보안 KEY 입력" style="padding:12px; border:2px solid var(--primary-color); border-radius:10px; width:100%; text-align:center;">
                    </div>
                    <div style="display:flex; flex-direction:column; gap:12px;">
                        <button id="btn-google-login" class="btn-auth btn-google">Google 로그인</button>
                        <hr style="border:none; border-top:1px solid #eee; margin:10px 0;">
                        <input type="email" id="auth-email" placeholder="Email" style="padding:12px; border:1px solid #ddd; border-radius:10px;">
                        <input type="password" id="auth-pass" placeholder="Password" style="padding:12px; border:1px solid #ddd; border-radius:10px;">
                        <button id="btn-email-login" class="btn-auth btn-primary">로그인</button>
                    </div>
                </div></div>`;
            document.body.insertAdjacentHTML('beforeend', modalHtml);

            const keyContainer = document.getElementById('key-field-container'), keyInput = document.getElementById('global-admin-key');
            let selectedType = 'user';

            const updateTabs = (type) => {
                selectedType = type;
                document.querySelectorAll('.p-tab').forEach(t => t.classList.remove('active'));
                document.getElementById(`tab-type-${type}`).classList.add('active');
                keyContainer.style.display = type === 'user' ? 'none' : 'block';
            };
            document.getElementById('tab-type-user').onclick = () => updateTabs('user');
            document.getElementById('tab-type-corp').onclick = () => updateTabs('corp');
            document.getElementById('tab-type-master').onclick = () => updateTabs('master');

            const handleSuccess = async (user) => {
                const key = keyInput.value.trim();
                if (selectedType === 'master' && key === "CHECKIT_MASTER_2026") await db.collection("users").doc(user.uid).set({ role: 'super_admin' }, { merge: true });
                else if (selectedType === 'corp' && key.startsWith("COMP_")) await db.collection("users").doc(user.uid).set({ role: 'company_admin', companyId: key.replace("COMP_", "") }, { merge: true });
                else await db.collection("users").doc(user.uid).set({ role: 'user' }, { merge: true });
                document.getElementById('login-modal-overlay').remove();
                renderMyPage(user);
            };

            document.getElementById('close-login-modal').onclick = () => document.getElementById('login-modal-overlay').remove();
            document.getElementById('btn-google-login').onclick = async () => { try { const res = await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()); handleSuccess(res.user); } catch(e) { alert(e.message); } };
            document.getElementById('btn-email-login').onclick = async () => {
                const email = document.getElementById('auth-email').value.trim(), pass = document.getElementById('auth-pass').value;
                try { const res = await auth.signInWithEmailAndPassword(email, pass); handleSuccess(res.user); } catch(e) { alert(e.message); }
            };
        };

        const initAuthNav = () => {
            auth.onAuthStateChanged(user => {
                const nav = document.querySelector('#language-switcher');
                let btn = document.getElementById('platform-auth-btn') || document.createElement('button');
                if(!btn.id) { btn.id='platform-auth-btn'; btn.className='lang-btn auth-main-btn'; nav.appendChild(btn); }
                btn.textContent = user ? 'My Page' : 'Login';
                btn.onclick = () => user ? renderMyPage(user) : showLoginModal();
                if(user && !document.getElementById('logout-btn')) {
                    const lo = document.createElement('button'); lo.id='logout-btn'; lo.className='lang-btn logout-btn'; lo.textContent='Logout';
                    lo.onclick = () => auth.signOut().then(() => location.reload()); nav.appendChild(lo);
                }
            });
        };
        initAuthNav();
    }
    switchLanguage('ko');
});