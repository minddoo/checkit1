document.addEventListener('DOMContentLoaded', () => {

    // --- 0. MODERN UI ENHANCEMENTS (Animations & Header) ---
    const header = document.getElementById('main-header');
    const revealElements = document.querySelectorAll('.reveal');

    // [Mobile Menu Toggle Logic]
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const closeMobileMenu = document.getElementById('close-mobile-menu');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

    if (mobileMenuToggle && mobileMenuOverlay) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenuOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    if (closeMobileMenu && mobileMenuOverlay) {
        closeMobileMenu.addEventListener('click', () => {
            mobileMenuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // Close mobile menu on link click
    document.querySelectorAll('.mobile-menu-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenuOverlay) {
                mobileMenuOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    // [Mobile Sticky CTA Generator]
    function renderMobileStickyCTA() {
        if (window.innerWidth <= 768 && !document.getElementById('sticky-mobile-cta')) {
            const stickyCTA = document.createElement('div');
            stickyCTA.id = 'sticky-mobile-cta';
            stickyCTA.className = 'mobile-only';
            stickyCTA.innerHTML = `
                <a href="#contact-form" class="sticky-cta-btn">
                    <i class="fas fa-paper-plane"></i>
                    <span data-lang-key="hero_cta">기업 서비스 상담 신청</span>
                </a>
            `;
            document.body.appendChild(stickyCTA);
            
            // Re-translate new element
            if (typeof updateTranslations === 'function') {
                updateTranslations();
            }
        }
    }

    // Header scroll background effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Initial check for mobile features
    renderMobileStickyCTA();
    window.addEventListener('resize', renderMobileStickyCTA);

    // Intersection Observer for Reveal Animations
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // --- 1. FULL MULTILINGUAL DATA RESTORATION ---
    const translations = {
        ko: {
            'main_page_title': 'CHECKIT - 외국인 건강검진 예약',
            'nav_home': '홈', 'hero_cta': '지금 바로 상담 신청', 'learn_more': '더 알아보기',
            'platform_title': 'CHECKIT 플랫폼', 'platform_status_title': '나의 서비스 현황',
            'platform_close': '닫기', 'contact_success': '문의가 성공적으로 접수되었습니다!',
            'admin_title': '매니저 관리 대시보드', 'onboarding_title': '프로필 완성하기',
            'nav_home': '홈', 'nav_corporate': '기업 서비스', 'nav_mypage': '마이페이지', 'nav_login': '로그인', 'nav_logout': '로그아웃',
            'mypage': '마이페이지', 'logout': '로그아웃',
            'hero_title': '기업을 위한 <br class="mobile-only">근로자 보건관리 플랫폼',
            'hero_subtitle': '빠르게 증가하는 근로자의 보건관리를 <br class="mobile-only">하나의 흐름으로 체계적이고, <br class="desktop-only">지속 가능한 구조로 만들어줍니다.',
            'service_for_title': '빠르게 늘어나는 외국인 근로자가 <br class="mobile-only">필수인 기업을 위한 서비스',
            'corporate_title': '현장 업계 기업 전문',
            'corporate_desc': '현장 인력의 보건관리와 검진 프로세스를 자동화하여, <br class="mobile-only">기업의 운영 효율성과 성장을 돕습니다.',
            'why_us_title': '왜 <span class="highlight">CHECKIT</span>을 선택해야 할까요?',
            'why_us_subtitle_new': '복잡한 외국인 근로자 보건관리, <br class="mobile-only">이제 단 하나의 플랫폼으로 해결하세요.',
            'why_us_feature1_title': '실시간 보건관리 모니터링',
            'why_us_feature1_desc': '엑셀 명단 업로드 한 번으로 수백 명의 근로자 검진 현황을 실시간 파워 대시보드에서 즉각 확인할 수 있습니다.',
            'why_us_feature2_title': '1:1 모국어 전담 매니저 매칭',
            'why_us_feature2_desc': '전담 매니저가 근로자와 1:1로 소통하며, 예약부터 행정 안내까지 모든 과정을 밀착 관리합니다.',
            'why_us_feature3_title': '모국어 결과지 번역 및 데이터화',
            'why_us_feature3_desc': '한국어 결과지를 모국어로 단순 번역하여 근로자의 알 권리를 보장하고, 기업에는 표준화된 건강 지표를 보고합니다.',
            'why_us_feature4_title': '법적 리스크 및 OHS 완벽 대응',
            'why_us_feature4_desc': '산업안전보건법 및 의료법을 엄격히 준수하며, 검진 누락 방지와 사후 관리를 통해 기업의 법적 책임을 빈틈없이 지원합니다.',
            'process_title': 'CHECKIT 이용 과정',
            'process_step1_title': '상담 및 <br class="mobile-only">병원 선택 지원',
            'process_step1_desc_new': '원하는 검진 항목과 일정 상담 후, <br class="mobile-only">조건에 맞는 최적의 병원 리스트를 제공합니다.',
            'process_step2_title': '실시간 소통 지원',
            'process_step2_desc_new': '검진 당일, 병원 내에서 발생하는 <br class="mobile-only">모든 소통을 실시간으로 지원합니다.',
            'process_step3_title_new': '결과 번역 파일 전달',
            'process_step3_desc_new': '고객님이 전달해주신 결과지를 고객님의 언어로 단순 번역 및 요약하여, 이메일이나 메신저를 통해 파일로 전달합니다.',
                        'testimonials_title': '기업 고객 이용 후기',
                        'testimonials_subtitle': '이미 많은 기업들이 CHECKIT을 통해 <br class="mobile-only">외국인 근로자 보건관리를 혁신하고 있습니다.',
                        'testimonial1_text': '“외국인 직원 300명의 정기 검진 예약이 매년 큰 업무 부담이었는데, CHECKIT 도입 후 모든 과정이 자동화되었습니다. 특히 결과지 요약 서비스에 대한 직원들의 만족도가 매우 높습니다.”',
                        'testimonial1_author': '김이사', 'testimonial1_type': '건설사 인사팀',
                        'testimonial2_text': '“병원마다 다른 예약 방식과 언어 소통 문제로 현장 관리자들이 고생이 많았어요. CHECKIT은 하나의 창구로 모든 소통이 가능해져 실무진의 업무 효율이 2배 이상 올랐습니다.”',
                        'testimonial2_author': '이팀장', 'testimonial2_type': '제조 기업 보건관리자',
                        'testimonial3_text': '“단순히 검진 예약을 넘어, 검진 당일 실시간 소통 지원이 정말 큰 도움이 됩니다. 병원 내에서 길을 잃거나 문진표 작성을 어려워하던 직원들이 이제는 걱정 없이 검진을 받습니다.”',
                        'testimonial3_author': '박부장', 'testimonial3_type': '토목 기업 관리자',
            'contact_title_new': '궁금한 점이 있으신가요?',
            'contact_subtitle_new': 'CHECKIT의 전문 매니저가 신속하고 친절하게 답변해 드립니다.',
            'contact_form_email_label': '이메일 주소',
            'contact_form_email_placeholder': '',
            'contact_form_phone_label': '연락처 (선택사항)',
            'contact_form_phone_placeholder': '',
            'contact_form_message_label': '문의 내용',
            'contact_form_message_placeholder': '',
            'contact_form_submit_button': '문의하기',
            'corporate_page_title': '기업 고객 <br class="mobile-only">토탈 솔루션',
            'corporate_page_subtitle': '외국인 근로자의 건강을 <br class="mobile-only">체계적으로 관리하여, <br class="desktop-only">기업의 생산성을 높이고 보건 관리 부담을 덜어드립니다.',
            'individual_page_title': '개인 고객 서비스',
            'individual_page_subtitle': '언어의 장벽 없이 <br class="mobile-only">최상의 건강검진을 받을 수 있도록 돕습니다.',
            'expectation_title': '외국인들이 기대하는 한국 의료 서비스',
            'expectation_subtitle': '"한국에서 건강검진을 받아볼까?"<br>해외 커뮤니티에서 자주 언급되는 한국 의료의 특징들',
            'expectation_item_title_1': '#1. 비용 효율성',
            'expectation_item_desc_1': '“미국에 비해 한국의 의료비가 훨씬 저렴하다는 것은 잘 알려져 있습니다.”',
            'expectation_item_title_2': '#2. 편리함',
            'expectation_item_desc_2': '“전체 과정이 간단하고 번거로움 없이 진행될 것으로 기대됩니다.”',
            'expectation_item_title_3': '#3. 전문적인 수준',
            'expectation_item_desc_3': '“시설과 의료 수준이 세계적일 것으로 기대됩니다.”',
            'expectation_item_title_4': '#4. 시간 절약',
            'expectation_item_desc_4': '“일정에 거의 영향을 주지 않고 신속하게 진행될 것으로 기대됩니다.”',
            'reality_title': '하지만 현실은....',
            'reality_item_title_1': '1. 다국어 지원 부재',
            'reality_item_1_point_1': '직원들은 외국어를 못해서 전화를 피합니다.',
            'reality_item_1_point_2': '안내, 준비 가이드, 알림이 모두 한국어입니다.',
            'reality_item_1_point_3': '민감한 질문(생리, 수술, 증상)에 대해 제대로 된 설명을 받지 못합니다.',
            'reality_item_1_point_4': '검진 중 모든 안내 방송은 한국어로만 나온다.',
            'reality_item_title_2': '2. 혼란스러운 과정',
            'reality_item_2_point_1': '검진 패키지에 무엇이 포함되어 있는지조차 모른다.',
            'reality_item_2_point_2': '준비 물품이 사용법에 대한 설명 없이 도착한다.',
            'reality_item_2_point_3': '대장내시경 약은 한국어로만 설명되어 → 검사에 실패한다.',
            'reality_item_2_point_4': '사전 문진표는 길고 복잡하며 전부 한국어이다.',
            'reality_item_title_3': '3. 불확실한 일정',
            'reality_item_3_point_1': '예약을 잡는 데만 2-3일이 걸린다.',
            'reality_item_3_point_2': '직원마다 다른 답변을 하며 — 아무도 책임지지 않는다.',
            'reality_item_3_point_3': '한국 전화번호가 없으면 → 알림이나 준비 안내를 받지 못한다.',
            'reality_item_3_point_4': '해외 시차로 인해 → 통화가 실패하고 예약이 지연된다.',
            'reality_item_title_4': '4. 지연된 결과 및 책임 부재',
            'reality_item_4_point_1': '당신이 없는 주소로 결과가 우편 발송된다.',
            'reality_item_4_point_2': '한국을 떠난 후에도 결과가 몇 주 동안 지연된다.',
            'reality_item_4_point_3': '해외 전화 인증 제한으로 영수증을 받을 수 없다.',
            'reality_item_4_point_4': '검사 후 규칙(예: 용종 제거 후 비행)에 대한 설명이 없다.',
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
            'package3_feature3': '영어 답변 템플릿',
            'package3_feature4': '전체 서식 확인 (모든 페이지, 서명, 첨부파일)',
            'package3_feature5': '프리미엄 검진 전 팩 (상세 타임라인, 실수 대응 플로우)',
            'package3_feature6': '실시간 검진 당일 채팅 지원',
            'package3_feature7': '병원 내 동선 가이드 (그래픽)',
            'package3_feature8': '영문 영수증 요청 (대행)',
            'package3_feature9': 'CD / 추가 서류 요청',
            'package3_feature10': '완전한 검진 후 후속 조치',
            'package3_feature11': '결과 구성 (비의료적, 내용 구성만)',
            'package3_feature12': '병원 소통용 템플릿',
            'package3_feature13': '일정 변경 지원 (최대 3회 포함)',
            'package3_recommend_desc': '가장 안전하고 완벽하게 관리받고 싶은 분.',
            'price_structure_title': '왜 외국인은 한국에서 동일한 건강검진에 더 많은 비용을 지불할까?',
            'price_structure_q': '저희는 종종 이런 질문을 받습니다. “왜 당신의 옵션이 병원에서 제공하는 것보다 저렴한가요?”',
            'price_structure_a_title': '간단한 답변',
            'price_structure_a_text': '검사가 달라서가 아닙니다. 가격 구조 때문입니다.',
            'price_structure_reality_title': '실제 많은 병원에서 일어나는 일',
            'price_structure_reality_text': '대부분의 병원은 별도의 “외국인 패키지”를 만듭니다. 이 패키지에는 현지인이 지불하지 않는 서비스가 포함되어 총 가격이 올라갑니다.',
            'price_structure_example_title': '외국인 고객에게서 흔히 볼 수 있는 상황',
            'price_structure_example_text': '한 고객은 외국인 패키지에 대해 1,800,000원을 견적 받았습니다. 저희의 안내를 통해 동일한 검사를 1,050,000원에 예약했습니다.',
            'corp_sec1_title': '외국인 근로자, 이제 선택이 아닌 필수입니다',
            'corp_sec1_subtitle': '변화하는 산업 현장, 기업의 지속 가능한 성장을 위해 외국인 인력 확보와 관리는 가장 중요한 과제가 되었습니다.',
            'corp_sec1_item1_title': '급증하는 외국인 인력',
            'corp_sec1_item1_desc': '국내 제조, 생산, 건설, 모든 현장 기업의 외국인 비중은 매년 최고치를 경신하고 있습니다.',
            'corp_sec1_item2_title': '법적 보호 의무 강화',
            'corp_sec1_item2_desc': '외국인 근로자 또한 내국인과 동일한 산업안전보건법 및 검진 의무의 대상입니다.',
            'corp_sec1_item3_title': '기업 경쟁력의 핵심',
            'corp_sec1_item3_desc': '우수한 외국인 인력을 유지(Retention)하는 것이 곧 기업의 생산성과 직결됩니다.',
            'corp_sec2_title': '건강검진, 가장 강력한 복지 혜택이 됩니다',
            'corp_sec2_subtitle': '차별화된 건강검진 지원은 근로자의 애사심을 높이고 기업의 이미지를 제고합니다.',
            'corp_sec2_item1_title': '일하고 싶은 기업',
            'corp_sec2_item1_desc': '언어 장벽 없는 건강 관리는 외국인 근로자가 가장 선호하는 복지 1순위입니다.',
            'corp_sec2_item2_title': '생산성 극대화',
            'corp_sec2_item2_desc': '건강한 근로자가 안정적으로 근무할 때 기업의 생산 효율은 최대로 발휘됩니다.',
            'corp_sec2_item3_title': 'ESG 경영의 실천',
            'corp_sec2_item3_desc': '다양성을 존중하고 인권을 보호하는 선도적인 기업으로서의 가치를 증명하세요.',
            'corp_sec3_title': '하지만, 현장에서 마주하는 현실은 다릅니다',
            'corp_sec3_subtitle': '병원을 예약하고 검진을 받는 \'당일\'보다 더 힘든 것은 그 전후의 \'관리 공백\'입니다.',
            'corp_sec3_item1_title': '검진 전: 막막함과 두려움',
            'corp_sec3_item1_p1': '한국어로 된 문진표와 주의사항, 번역기로도 한계가 있습니다.',
            'corp_sec3_item1_p2': '금식 안내를 오해하여 검사가 취소되거나 사고가 발생하기도 합니다.',
            'corp_sec3_item1_p3': '병원을 찾아가는 길부터 소통에 대한 심한 불안감을 느낍니다.',
            'corp_sec3_item2_title': '검진 후: 방치된 결과',
            'corp_sec3_item2_p1': '어렵게 받은 결과지, 정작 본인은 내용을 한 글자도 읽지 못합니다.',
            'corp_sec3_item2_p2': '재검사가 필요한 위험 신호를 놓쳐 병을 키우는 경우가 빈번합니다.',
            'corp_sec3_item2_p3': '기업은 결과지만 보관할 뿐, 근로자와의 소통 공백은 여전합니다.',
            'corp_sec4_title': 'CHECKIT만이 채울 수 있는 관리의 공백',
            'corp_sec4_subtitle': '병원은 의료 행위만 하고, 기업은 결과만 받습니다. 그 사이의 \'모든 과정\'은 CHECKIT이 책임집니다.',
            'corp_sec4_side1_title': '병원과 기업의 영역',
            'corp_sec4_side1_p1': '전문적인 의료 검사 시행',
            'corp_sec4_side1_p2': '검진 결과 데이터 생성',
            'corp_sec4_side1_p3': '법적 의무 기록 보관',
            'corp_sec4_side2_title': 'CHECKIT의 영역 (비의료 과정)',
            'corp_sec4_side2_p1': '1:1 모국어 전담 매니저 매칭',
            'corp_sec4_side2_p2': '문진표 및 사전 주의사항 완벽 번역 가이드',
            'corp_sec4_side2_p3': '검진 당일 실시간 텍스트 소통 지원',
            'corp_sec4_side2_p4': '결과지 단순 번역 및 요약 파일 전달',
            'corp_sec4_side2_p5': '사후 관리(재검 안내) 소통 대행',
            'corp_sec5_title': '오직 CHECKIT만이 가능한 이유',
            'corp_sec5_subtitle': '흉내 낼 수 없는 전문성과 기술력으로 외국인 근로자 관리의 표준을 만듭니다.',
            'corp_sec5_item1_title': '다국어 전문 인력풀',
            'corp_sec5_item1_desc': '단순 번역이 아닌 한국 의료 시스템을 완벽히 이해하는 다국어 매니저가 직접 관리합니다.',
            'corp_sec5_item2_title': '실시간 실무 대응 역량',
            'corp_sec5_item2_desc': '검진 현장에서 발생하는 돌발 상황에 즉각적으로 대응할 수 있는 시스템을 갖추고 있습니다.',
            'corp_sec5_item3_title': '고객 중심의 독립성',
            'corp_sec5_item3_desc': '특정 병원에 종속되지 않아 오직 근로자의 편의와 기업의 효율만을 위해 최적의 선택지를 제안합니다.',
            'corp_sec5_item4_title': '모국어 결과지 제공',
            'corp_sec5_item4_desc': '검진 결과를 근로자의 모국어로 단순 번역하여 전달함으로써, 본인의 건강 상태를 정확히 파악하고 사후 관리에 적극 참여할 수 있도록 돕습니다.',
            'corp_sec6_title': '기존 프로세스를 바꿀 필요가 없습니다',
            'corp_sec6_subtitle': '의료법을 완벽히 준수하며, 기업의 운영 효율만을 극대화합니다.',
            'corp_sec6_item1_title': '의료법 위반 없음',
            'corp_sec6_item1_desc': '환자 유인·알선 행위를 하지 않으며, 비의료적 소통 및 행정 서비스만을 대행하여 법적 리스크가 전혀 없습니다.',
            'corp_sec6_item2_title': '병원 계약 구조 없음',
            'corp_sec6_item2_desc': '병원과 수수료를 주고받는 구조가 아닙니다. 기업이 기존에 이용하던 연계 병원을 그대로 사용하셔도 무방합니다.',
            'corp_sec6_item3_title': '즉각 도입 가능',
            'corp_sec6_item3_desc': '복잡한 시스템 연동 없이 서비스 신청만으로 내일부터 바로 외국인 근로자들의 검진 환경이 개선됩니다.',
            'corp_sec7_title': '정교하고 체계적인 운영 프로세스',
            'corp_sec7_subtitle': '명단 수령부터 최종 보고까지, CHECKIT이 모든 과정을 책임지고 관리합니다.',
            'corp_sec7_step1_title': '01. 명단 수령 및 분석',
            'corp_sec7_step1_1': '기업으로부터 검진 대상자 명단 수령',
            'corp_sec7_step1_2': '명단 확인 후 예약 및 검진 기간 우선순위 정리',
            'corp_sec7_step2_title': '02. 개인별 예약 및 확정',
            'corp_sec7_step2_1': '근로자 대상 1:1 컨택 및 희망 일정·병원 선택',
            'corp_sec7_step2_2': '신속한 예약 진행 및 확정 문자 발송',
            'corp_sec7_step3_title': '03. 집중 사전 가이드',
            'corp_sec7_step3_1': '검진 전 준비사항 및 주의사항 상세 안내',
            'corp_sec7_step3_2': '7일·3일·2일·1일 전 및 당일 실시간 1:1 알림 제공',
            'corp_sec7_step4_title': '04. 검진 당일 현장 지원',
            'corp_sec7_step4_1': '검사 당일 실시간 소통 지원 및 불편 해소',
            'corp_sec7_step4_2': '진행 상황 모니터링 및 미검 항목 없는 완료 관리',
            'corp_sec7_step5_title': '05. 결과 관리 및 사후 케어',
            'corp_sec7_step5_1': '검진 완료 후 결과 소요 기간 및 수령 방법 안내',
            'corp_sec7_step5_2': '결과지 단순 번역 제공 및 재검 필요 여부 확인',
            'corp_sec7_step5_3': '회사 필수 제출 서류 안내 및 최종 제출까지 관리',
            'corp_sec7_step6_title': '06. 최종 보고 및 데이터 업데이트',
            'corp_sec7_step6_1': '명단 파일에 개인별 진행 상황 및 특이사항 업데이트',
            'corp_sec7_step6_2': '기업 요청 시 실시간 진행 현황 및 완료 명단 보고',
            'corp_faq_title': '자주 묻는 질문 (FAQ)',
            'corp_faq_subtitle': '기업 고객분들이 가장 궁금해하시는 질문들을 모았습니다.',
            'corp_faq_q1': '기존 제휴 병원을 그대로 이용할 수 있나요?',
            'corp_faq_a1': '네, 가능합니다. CHECKIT은 특정 병원에 종속되지 않은 독립적인 서비스입니다. 기업이 기존에 이용하시던 병원을 바꾸실 필요 없이, 예약과 소통 관리 공백만 저희가 채워드립니다.',
            'corp_faq_q2': '의료법 위반 소지는 없나요?',
            'corp_faq_a2': 'CHECKIT은 환자 유인/알선 등 의료법 위반 행위를 엄격히 금지합니다. 저희는 의료 행위가 아닌 예약 대행, 통역, 결과지 단순 번역 등 \'비의료적 행정 지원\'에만 집중하므로 법적으로 매우 안전합니다.',
            'corp_faq_q3': '근로자 개인정보는 어떻게 관리되나요?',
            'corp_faq_a3': '모든 과정에서 개인정보 보호법을 준수합니다. 검진 명단은 보안이 강화된 방식으로 수령하며, 검진 완료 후 필요 기간이 지나면 규정에 따라 안전하게 처리됩니다.',
            'corp_faq_q4': '도입 시 시스템 연동 같은 복잡한 과정이 필요한가요?',
            'corp_faq_a4': '전혀 필요 없습니다. 별도의 소프트웨어 설치나 시스템 연동 없이, 검진 대상자 명단 전달과 간단한 일정 협의만으로 즉시 도입이 가능합니다.',
            'corp_faq_q5': '결과지 번역은 어느 수준까지 제공되나요?',
            'corp_faq_a5': '전문 용어가 가득한 한국어 결과지를 근로자가 이해하기 쉬운 모국어 핵심 요약본으로 제공합니다. 이는 의학적 소견이 아닌 \'내용 전달\' 목적의 단순 번역으로, 근로자의 알 권리를 보장합니다.',
            'contact_form_company_label': '기업명',
            'view_workflow': '실무과정 보기',
            'chatbot_header': '자주 하는 질문 (FAQ)',
            'chatbot_subtitle': 'CHECKIT에 대해 가장 궁금해하시는 질문들을 모았습니다.',
            'chatbot_placeholder': '메시지를 입력하세요...',
            'chatbot_welcome': '안녕하세요! CHECKIT 상담 봇입니다. 무엇을 도와드릴까요?',
            'chatbot_q1': '1. 예약은 어떻게 하나요?',
            'chatbot_a1': 'CHECKIT 전담 매니저가 도와드립니다. 원하시는 검진 항목과 일정을 알려주시면, 조건에 맞는 병원 목록을 전달드려 선택을 돕고, 예약까지 한 번에 진행해드립니다. \'지금 바로 상담 신청\' 버튼을 눌러 문의를 남겨주세요!',
            'chatbot_q2': '2. 병원/의료인과 계약 구조인가요?',
            'chatbot_a2': '아닙니다. CHECKIT은 특정 병과 계약 관계를 맺지 않습니다. 저희는 오직 고객님의 입장에서, 가장 적합한 병원을 찾으실 수 있도록 객관적인 정보 제공으로 선택을 돕습니다. 고객님의 건강과 만족이 저희의 최우선 목표입니다.',
            'chatbot_q3': '3. 의료행위나 진료 알선도 하나요?',
            'chatbot_a3': '아니요, CHECKIT은 의료법을 준수하며 어떠한 의료 행위나 진료 알선도 하지 않습니다. 저희는 병원 예약, 통역, 결과지 번역 등 \'비의료 과정\'에 집중하여 고객님께서 건강검진에만 집중하실 수 있도록 돕는 서비스입니다.',
            'chatbot_q4': '4. 검진 당일 어떤 도움을 받을 수 있나요?',
            'chatbot_a4': '검진 당일, 언어의 장벽으로 인해 혼자라는 느낌이 들지 않도록 Check봇 매니저가 모든 순간을 함께합니다. 병원 내 접수, 문진, 수납 등 모든 의사소통 과정을 실시간으로 지원하여, 언어 문제로 인한 불편함이나 외로움 없이 편안하게 검진에만 집중하실 수 있도록 돕습니다.',
            'chatbot_q5': '5. 결과지는 어떻게 전달이 되나요?',
            'chatbot_a5': '고객님께서 병원으로부터 수령한 한국어 결과지를 전달해주시면, 저희가 고객님의 모국어로 핵심 내용을 단순 번역 및 요약하여 전달해 드립니다. 저희는 의료법을 준수하기에, 의학적 소견이나 상세한 설명은 제공하지 않습니다.',
            'chatbot_greeting_reply': '안녕하세요! 만나서 반갑습니다. 무엇을 도와드릴까요?',
            'chatbot_fallback_reply': '소중한 문의 감사합니다! 현재 입력하신 내용은 담당 매니저가 확인 후 답변 드릴 예정입니다. 보다 상세한 안내를 원하시면 메인 페이지 하단의 \'문의하기\'를 통해 메시지를 남겨주시면 더욱 정확한 답변이 가능합니다.',
            'login_title': 'CHECKIT 로그인',
            'login_tab_individual': '개인 고객',
            'login_tab_corporate': '기업 관리자',
            'login_tab_admin': 'CHECKIT 관리자',
            'login_google': 'Google 계정으로 로그인',
            'login_divider': '또는',
            'login_company_key_label': '회사 입력키',
            'login_security_key_label': '암호키<br><span class="label-subtext">관리자는 부여받은 암호키 입력</span><span class="label-subtext">근로자는 회원가입 시 등록한 worker로 시작하는 암호키 입력</span>',
            'login_email_label': '이메일',
            'login_password_label': '비밀번호',
            'login_btn': '로그인',
            'login_success_msg': '로그인에 성공했습니다! 환영합니다.',
            'signup_title': '회원가입',
            'signup_company_name_label': '회사 이름',
            'signup_role_label': '가입 유형 (역할)',
            'signup_company_key_label': '회사 입력키 (기업 코드)',
            'signup_security_key_label': '사용할 암호키',
            'signup_role_worker': '회사 근로자',
            'signup_role_admin': '회사 관리자(보건관리자)',
            'signup_btn': '회원가입하기',
            'signup_success': '회원가입이 완료되었습니다! 로그인해 주세요.',
            'signup_welcome_message': 'CHECKIT에 오신 것을 환영합니다!',
            'find_pass_title': '비밀번호 재설정',
            'find_pass_btn': '재설정 메일 보내기',
            'find_pass_success': '비밀번호 재설정 이메일을 보냈습니다.',
            'switch_to_signup': '계정이 없으신가요? 회원가입',
            'switch_to_login': '이미 계정이 있으신가요? 로그인',
            'switch_to_find': '비밀번호를 잊으셨나요?',
            'signup_name_placeholder': '이름',
            'signup_privacy_title': '개인정보 수집 및 이용 동의',
            'signup_privacy_agree': '개인정보 수집 및 이용에 동의합니다 (필수)',
            'signup_privacy_error': '개인정보 수집 및 이용에 동의해주세요.',
            'signup_consent_privacy_detail': '<strong>수집 항목:</strong> 성명, 생년월일, 국적, 외국인등록번호(앞자리), 휴대전화번호, 주소, 소속 현장.<br><br><strong>수집 목적:</strong> 본인 식별, 검진 대상자 명단 확인, 현장별 검진 일정 안내 및 관리.<br><br><strong>보관 및 파기:</strong> 관련 법령에 의거하여 서비스 탈퇴 후 5년간 보관 후 파기 (의료법 및 대화 내용 증빙용).',
            'signup_consent_admin_detail': "<strong>서비스 정의:</strong> '체킷'은 의료법상 진료 알선이나 유인을 하지 않는 <strong>'비의료 소통 지원 플랫폼'</strong>입니다. 병원과 수수료 계약이 없으며, 오직 병원-근로자-기업 사이의 의사소통 및 행정 공백을 채우는 역할만 수행합니다.<br><br><strong>대리 예약 및 행정 지원:</strong> 원활한 검진을 위해 근로자를 대신하여 검진 기간/예약 가능 기간 확인, 필수 검진 항목 체크, 예약 접수, 필요 서류 안내를 대행하는 것에 동의합니다.<br><br><strong>지원 범위:</strong> 서비스는 검진 결과 수령 후 기업 제출용 필수 서류 발급 지원 및 재검사 완료 시점까지의 행정 소통에 한정됩니다.",
            'signup_consent_medical_detail': '<strong>제공 내용:</strong> 병원으로부터 발행된 원본 결과지와 함께, 이해를 돕기 위한 단순 번역 결과지 및 질병분류코드(KCD/ICD) 정보를 수신하고 이를 소속 기업 관리자와 공유하는 것에 동의합니다.<br><br><strong>의료 면책 고지:</strong> 제공되는 번역문과 질병코드는 단순 참고용이며 법적/의학적 효력이 없습니다. 정확한 진단과 치료는 반드시 검진 기관(병원)에 직접 내원하여 의료진과 상담해야 합니다.',
            'stat_total_clients': '전체 고객', 'stat_pending_leads': '미처리 문의',
            'login_tab_corp': '기업용', 'login_tab_worker': '근로자용',
            'login_worker_company_key_label': '회사 입력키 (Company Input Key)',
            'login_worker_company_key_placeholder': '부여받은 회사 입력키 입력',
            'login_worker_security_key_label': '암호키 (Security Key)',
            'login_worker_security_key_placeholder': '부여받은 암호키',
            'login_worker_btn': '기존 계정으로 로그인',
            'login_no_account': '계정이 아직 없으신가요?',
            'signup_link_text': '회원가입 하기',
            'signup_tab_worker': '근로자 회원가입',
            'signup_worker_name_label': '성함 (Name)',
            'signup_worker_name_placeholder': '예: 홍길동',
            'signup_worker_dob_label': '생년월일 (DOB)',
            'signup_worker_dob_placeholder': 'YYYY-MM-DD',
            'signup_worker_company_key_label': '회사 입력키 (Company Input Key)',
            'signup_worker_company_key_placeholder': '관리자에게 공유받은 키 입력',
            'signup_worker_security_key_label': '생성할 암호키 (Security Key)',
            'signup_worker_security_key_placeholder': 'worker+영문,숫자,특수문자 포함 6자리 이상',
            'signup_worker_security_hint': '형식: worker로 시작 (예: worker123!@)',
            'signup_essential_consent': '필수 동의 항목',
            'signup_consent_required_hint': '* 모두 동의해야 가입이 완료됩니다',
            'signup_consent_all': '위 약관에 모두 동의합니다',
            'signup_complete_btn': '회원가입 완료',
            'signup_consent_privacy_label': '[필수] 개인정보 수집 및 이용 동의',
            'signup_consent_admin_label': '[필수] 비의료 행정 지원 및 대리 예약 서비스 동의',
            'signup_consent_medical_label': '[필수] 민감정보(의료 데이터) 처리 및 결과지 수신 동의',
            'signup_consent_view_details': '내용 보기 ▾',
            'footer_company_title': '플랫폼 이용 정보',
            'footer_company_name': '상호명: <strong>주식회사 체킷</strong>',
            'footer_representative': '대표자명: 김선홍',
            'footer_address': '사업장 주소: 경기도 남양주시 다산지금로202, 제8층 제에이에프08-0019호(다산동, 현대테라타워디아이엠씨)',
            'footer_phone': '대표 전화: 01051093459',
            'footer_business_no': '사업자 등록번호: 8718803241',
            'footer_privacy_officer': '개인정보보호책임자: 남민정',
            'footer_cs_title': '고객센터 정보',
            'footer_cs_phone': '상담 전화: <strong>010-5109-3459 / 010-2209-7951</strong>',
            'footer_cs_email': '상담 이메일: <strong>checkit082@gmail.com</strong>',
            'footer_copyright': '&copy; 2026 주식회사 체킷 (CHECKIT)'
        },
        en: {
            'main_page_title': 'CHECKIT - Health Check-up for Foreigners',
            'nav_home': 'Home', 'hero_cta': 'Apply Now', 'learn_more': 'Learn More',
            'platform_title': 'CHECKIT PLATFORM', 'platform_status_title': 'Service Status',
            'platform_close': 'Close', 'contact_success': 'Message Sent!',
            'nav_home': 'Home', 'nav_corporate': 'Business Service', 'nav_mypage': 'My Page', 'nav_login': 'Login', 'nav_logout': 'Logout',
            'mypage': 'My Page', 'logout': 'Logout',
            'hero_title': 'Worker Health Management Platform for Enterprises',
            'hero_subtitle': 'We transform the rapidly increasing healthcare management of workers into a systematic and sustainable structure through a single flow.',
            'service_for_title': 'Services for companies where foreign workers are essential',
            'corporate_title': 'Construction · Manufacturing · Civil industries',
            'corporate_desc': 'We help operational efficiency and sustainable growth by automating health management and check-up processes for field workers.',
            'why_us_title': 'Why Choose CHECKIT for Corporate Health Management?',
            'why_us_subtitle_new': 'Smartly solve complex health management for foreign workers with a single platform.',
            'why_us_feature1_title': 'Real-time Monitoring & Efficiency',
            'why_us_feature1_desc': 'Upload employee lists and monitor check-up status in real-time on our dashboard, significantly reducing HR workload.',
            'why_us_feature2_title': '1:1 Native Language Managers',
            'why_us_feature2_desc': 'Dedicated managers communicate 1:1 with workers, providing close management for all processes from booking to administrative guidance.',
            'why_us_feature3_title': 'Result Summaries & Translation',
            'why_us_feature3_desc': 'We provide core summaries of Korean medical results in native languages, ensuring workers\' right to know while providing standardized data.',
            'why_us_feature4_title': 'Legal Compliance & Safety',
            'why_us_feature4_desc': 'Fully compliant with the Industrial Safety and Health Act and Medical Act, minimizing legal risks through thorough follow-up management.',
            'process_title': 'Service Process',
            'process_step1_title': 'Consultation & Hospital Support',
            'process_step1_desc_new': 'After consulting on check-up items and schedules, we provide an optimal hospital list and proceed with the booking.',
            'process_step2_title': 'Real-time Support',
            'process_step2_desc_new': 'On the day of the check-up, we provide real-time communication support within the hospital to ensure no discomfort.',
            'process_step3_title_new': 'Result Translation Delivery',
            'process_step3_desc_new': 'We translate and summarize the results you provide into your language and deliver them via email or messenger.',
            'testimonials_title': 'Corporate Client Testimonials',
            'testimonials_subtitle': 'Many companies are already innovating their foreign worker health management with CHECKIT.',
            'testimonial1_text': '"Booking regular check-ups for 300 foreign employees was a huge burden every year, but after adopting CHECKIT, the entire process was automated. Employee satisfaction with the result summary service is particularly high."',
            'testimonial1_author': 'Director Kim', 'testimonial1_type': 'Construction HR Team',
            'testimonial2_text': '"Field managers struggled with different booking methods and language barriers at each hospital. With CHECKIT, all communication is possible through one channel, increasing staff efficiency by more than double."',
            'testimonial2_author': 'Manager Lee', 'testimonial2_type': 'Manufacturing Health Manager',
            'testimonial3_text': '"Beyond simple bookings, real-time communication support on the check-up day is a huge help. Employees who used to get lost in the hospital or struggle with questionnaires now receive check-ups without worry."',
            'testimonial3_author': 'Director Park', 'testimonial3_type': 'Civil Engineering Manager',
            'contact_title_new': 'Any Questions?',
            'contact_subtitle_new': 'CHECKIT\'s expert managers will respond quickly and kindly.',
            'contact_form_email_label': 'Email Address',
            'contact_form_email_placeholder': '',
            'contact_form_phone_label': 'Phone (Optional)',
            'contact_form_phone_placeholder': '',
            'contact_form_message_label': 'Message',
            'contact_form_message_placeholder': '',
            'contact_form_submit_button': 'Send Inquiry',
            'corporate_page_title': 'Corporate Total Solution',
            'corporate_page_subtitle': 'Systematically manage the health of foreign employees,<br>increase productivity and<br>reduce health management burdens.',
            'individual_page_title': 'Individual Service',
            'individual_page_subtitle': 'CHECKIT helps all foreigners living in or visiting Korea<br><br>receive the best health check-ups without language barriers.',
            'expectation_title': 'Medical Expectations in Korea',
            'expectation_subtitle': '"Should I get a check-up in Korea?"<br>Common features of Korean medical care mentioned in overseas communities',
            'expectation_item_title_1': '#1. Cost Efficiency',
            'expectation_item_desc_1': '"It is well known that medical costs in Korea are much cheaper than in the US."',
            'expectation_item_title_2': '#2. Convenience',
            'expectation_item_desc_2': '"The whole process is expected to be simple and hassle-free."',
            'expectation_item_title_3': '#3. Professionalism',
            'expectation_item_desc_3': '"Facilities and medical standards are expected to be world-class."',
            'expectation_item_title_4': '#4. Time Saving',
            'expectation_item_desc_4': '"It is expected to proceed quickly without much impact on the schedule."',
            'reality_title': 'But the reality is...',
            'reality_item_title_1': '1. No Multilingual Support',
            'reality_item_1_point_1': 'Staff avoid calls because they can\'t speak foreign languages.',
            'reality_item_1_point_2': 'Guides, instructions, and notifications are all in Korean.',
            'reality_item_1_point_3': 'No proper explanation for sensitive questions.',
            'reality_item_1_point_4': 'All announcements during check-up are in Korean.',
            'reality_item_title_2': '2. Confusing Process',
            'reality_item_2_point_1': 'Don\'t even know what\'s included in the package.',
            'reality_item_2_point_2': 'Supplies arrive without instructions on how to use them.',
            'reality_item_2_point_3': 'Colonoscopy prep is only in Korean → resulting in failure.',
            'reality_item_2_point_4': 'Questionnaires are long, complex, and all in Korean.',
            'reality_item_title_3': '3. Uncertain Schedule',
            'reality_item_3_point_1': 'It takes 2-3 days just to get a booking.',
            'reality_item_3_point_2': 'Staff give different answers — no one takes responsibility.',
            'reality_item_3_point_3': 'No local phone number → no notifications or prep guides.',
            'reality_item_3_point_4': 'Time zone differences → failed calls and delayed bookings.',
            'reality_item_title_4': '4. Delayed Results & No Accountability',
            'reality_item_4_point_1': 'Results mailed to an address where you are not present.',
            'reality_item_4_point_2': 'Results delayed for weeks even after leaving Korea.',
            'reality_item_4_point_3': 'Can\'t get receipts due to local phone authentication.',
            'reality_item_4_point_4': 'No explanation of post-checkup rules (e.g., flying after polyps).',
            'reality_overtime_title': 'Issues that look minor on paper. Here is the reality.',
            'reality_overtime_p1': 'Before coming to Korea, everything seemed reassuring.',
            'reality_overtime_p2': 'I heard multilingual support was available and the process was smooth.',
            'reality_overtime_p3': 'Then I tried to book.',
            'reality_overtime_p4': 'That\'s when everything started falling apart.',
            'reality_overtime_p5': 'Actually, no one could speak my language.',
            'reality_overtime_p6': 'All instructions and notifications were only in Korean, so different from what was promised.',
            'reality_overtime_p7': 'It took days just to confirm the schedule. No one answered the phone, and replies were late or never came.',
            'reality_overtime_p8': 'On the day of the exam, confusion reached its peak. I didn\'t know where to go or what to do.',
            'reality_overtime_p9': 'Staff spoke fast in Korean and just pointed vaguely. One test was stopped without explanation.',
            'reality_overtime_p10': 'At that moment, I realized I was completely alone.',
            'reality_overtime_p11': 'I left Korea without even receiving the results. Promises made before arrival did not match reality.',
            'solution_title': 'CHECKIT\'s Solution',
            'solution_subtitle': 'CHECKIT is with you to focus solely on the health check-up process without discomfort or anxiety.',
            'individual_service1_title': '1:1 Dedicated Manager',
            'individual_service1_desc': 'Upon request, a manager who speaks your language is assigned to handle everything from hospital selection to booking.',
            'individual_service2_title_new': 'Real-time Support',
            'individual_service2_desc_new': 'On the day of the check-up, we provide real-time communication support via messenger instead of physical accompaniment.',
            'individual_service3_title_new': 'Result Translation',
            'individual_service3_desc_new': 'Provide the Korean result, and we will translate and summarize the core content into your native language.',
            'packages_title': 'CHECKIT Packages',
            'packages_subtitle': 'Choose the perfect plan for your needs.',
            'package1_title': 'No-Confusion Plan',
            'package1_price': '₩500,000',
            'package_includes': 'Includes',
            'package1_feature1': 'Neutral hospital list (No recommendations)',
            'package1_feature2': 'Official info translation only',
            'package1_feature3': 'Step-by-step booking guide',
            'package1_feature4': 'English translation of all hospital docs',
            'package1_feature5': 'Simple questionnaire guide',
            'package1_feature6': 'Essential prep instructions',
            'package1_feature7': 'Day of check-up prep guide',
            'package1_feature8': 'Secure result delivery via email',
            'package1_feature9': 'One-time result delay check',
            'package_recommend_title': 'Recommended for',
            'package1_recommend_desc': 'Those who want to manage the process themselves with clear info.',
            'package2_title': 'Zero-Mistake Plan',
            'package2_price': '₩650,000',
            'package2_includes': '(All in No-Confusion +)',
            'package2_feature1': 'Enhanced questionnaire guide',
            'package2_feature2': 'Common mistake alerts',
            'package2_feature3': 'One-time form review',
            'package2_feature4': 'Prep guide pack (Timeline)',
            'package2_feature5': 'Colonoscopy prep basics',
            'package2_feature6': 'Priority messaging for urgent issues',
            'package2_feature7': 'Result follow-up (One-time)',
            'package2_feature8': 'Alerts for missing docs',
            'package2_feature9': 'Schedule change support (One-time)',
            'package2_recommend_desc': 'Those who want to minimize mistakes and alerts.',
            'package3_title': 'Total-Safe Plan',
            'package3_price': '₩800,000',
            'package3_includes': '(All in Zero-Mistake +)',
            'package3_feature1': 'Premium questionnaire management',
            'package3_feature2': 'Risk point explanation',
            'package3_feature3': 'English template for complex items',
            'package3_feature4': 'Full form review (All pages)',
            'package3_feature5': 'Premium prep pack',
            'package3_feature6': 'Real-time day-of-checkup chat',
            'package3_feature7': 'Hospital route guide (Graphic)',
            'package3_feature8': 'English receipt request',
            'package3_feature9': 'CD / Extra docs request',
            'package3_feature10': 'Complete post-checkup follow-up',
            'package3_feature11': 'Result structure guide',
            'package3_feature12': 'Hospital communication templates',
            'package3_feature13': 'Schedule change support (Max 3)',
            'package3_recommend_desc': 'Those who want the safest and most complete management.',
            'price_structure_title': 'Why Foreigners Pay More in Korea?',
            'price_structure_q': 'We are often asked: "Why is your option cheaper than the hospital\'s?"',
            'price_structure_a_title': 'Short Answer',
            'price_structure_a_text': 'It\'s not the tests, it\'s the price structure.',
            'price_structure_reality_title': 'What Happens in Hospitals',
            'price_structure_reality_text': 'Most hospitals create "Foreigner Packages" with extra costs for services locals don\'t pay for.',
            'price_structure_example_title': 'Common Case',
            'price_structure_example_text': 'A client quoted 1.8M KRW for a package booked the same tests for 1.05M KRW via our guide.',
            'corp_sec1_title': 'Foreign Employees, Now Essential',
            'corp_sec1_subtitle': 'Managing foreign talent has become a key task for corporate growth.',
            'corp_sec1_item1_title': 'Surging Foreign Workforce',
            'corp_sec1_item1_desc': 'The proportion of foreign workers in manufacturing and construction is hitting record highs.',
            'corp_sec1_item2_title': 'Strengthened Legal Duty',
            'corp_sec1_item2_desc': 'Foreign workers are subject to the same health check-up duties as locals.',
            'corp_sec1_item3_title': 'Key to Competitiveness',
            'corp_sec1_item3_desc': 'Retaining excellent foreign talent directly links to productivity.',
            'corp_sec2_title': 'Health Check-ups as a Powerful Benefit',
            'corp_sec2_subtitle': 'Differentiated support increases loyalty and corporate image.',
            'corp_sec2_item1_title': 'A Company People Want to Work For',
            'corp_sec2_item1_desc': 'Health care without language barriers is the #1 preferred welfare.',
            'corp_sec2_item2_title': 'Maximized Productivity',
            'corp_sec2_item2_desc': 'Productivity is best when healthy workers work stably.',
            'corp_sec2_item3_title': 'ESG Management Practice',
            'corp_sec2_item3_desc': 'Prove your value as a company that respects diversity and human rights.',
            'corp_sec3_title': 'But the Reality on Site is Different',
            'corp_sec3_subtitle': 'The "management gap" before and after is harder than the check-up day.',
            'corp_sec3_item1_title': 'Before: Confusion and Fear',
            'corp_sec3_item1_p1': 'Questionnaires and prep notes in Korean are limited by translators.',
            'corp_sec3_item1_p2': 'Misunderstanding fasting leads to canceled tests or accidents.',
            'corp_sec3_item1_p3': 'Anxiety about communication starts from finding the hospital.',
            'corp_sec3_item2_title': 'After: Neglected Results',
            'corp_sec3_item2_p1': 'Can\'t read a single word of the result received with difficulty.',
            'corp_sec3_item2_p2': 'Frequent cases of missing risk signals for re-examination.',
            'corp_sec3_item2_p3': 'Companies just keep the results, communication gap remains.',
            'corp_sec4_title': 'The Gap Only CHECKIT Can Fill',
            'corp_sec4_subtitle': 'Hospitals only do medical acts, companies only receive results. CHECKIT handles "the rest".',
            'corp_sec4_side1_title': 'Hospital & Company Domain',
            'corp_sec4_side1_p1': 'Professional medical exams',
            'corp_sec4_side1_p2': 'Generate result data',
            'corp_sec4_side1_p3': 'Keep legal records',
            'corp_sec4_side2_title': 'CHECKIT Domain (Non-Medical)',
            'corp_sec4_side2_p1': '1:1 native language manager matching',
            'corp_sec4_side2_p2': 'Perfect translation guide for prep notes',
            'corp_sec4_side2_p3': 'Real-time text support on check-up day',
            'corp_sec4_side2_p4': 'Summary translation of results',
            'corp_sec4_side2_p5': 'Follow-up communication support',
            'corp_sec5_title': 'Why Only CHECKIT?',
            'corp_sec5_subtitle': 'We create the standard for foreign worker management with expertise.',
            'corp_sec5_item1_title': 'Multilingual Talent Pool',
            'corp_sec5_item1_desc': 'Managers who understand the Korean medical system handle management.',
            'corp_sec5_item2_title': 'Real-time Field Response',
            'corp_sec5_item2_desc': 'Equipped with a system for immediate response to unexpected situations.',
            'corp_sec5_item3_title': 'Customer-Centric Independence',
            'corp_sec5_item3_desc': 'Not subordinate to specific hospitals, we propose the best choices.',
            'corp_sec5_item4_title': 'Native Language Results',
            'corp_sec5_item4_desc': 'Allowing workers to accurately understand their health status.',
            'corp_sec6_title': 'No Need to Change Existing Processes',
            'corp_sec6_subtitle': 'Complying with medical law while maximizing corporate efficiency.',
            'corp_sec6_item1_title': 'No Medical Law Violations',
            'corp_sec6_item1_desc': 'No patient inducement, strictly non-medical administrative support.',
            'corp_sec6_item2_title': 'No Hospital Contract Structure',
            'corp_sec6_item2_desc': 'No commission structure with hospitals. Use your existing hospitals.',
            'corp_sec6_item3_title': 'Immediate Introduction',
            'corp_sec6_item3_desc': 'Improve environments from tomorrow just by applying.',
            'corp_sec7_title': 'Sophisticated Operating Process',
            'corp_sec7_subtitle': 'CHECKIT takes responsibility for all steps from list to final report.',
            'corp_sec7_step1_title': '01. List Reception & Analysis',
            'corp_sec7_step1_1': 'Receive candidate list from corporate',
            'corp_sec7_step1_2': 'Organize booking and check-up priorities',
            'corp_sec7_step2_title': '02. Individual Booking & Confirmation',
            'corp_sec7_step2_1': '1:1 contact for schedule and hospital choice',
            'corp_sec7_step2_2': 'Quick booking and confirmation SMS',
            'corp_sec7_step3_title': '03. Intensive Prep Guide',
            'corp_sec7_step3_1': 'Detailed prep and caution guidance',
            'corp_sec7_step3_2': 'Real-time 1:1 notifications (7d/3d/2d/1d before)',
            'corp_sec7_step4_title': '04. Day of Check-up Support',
            'corp_sec7_step4_1': 'Real-time communication and discomfort resolution',
            'corp_sec7_step4_2': 'Monitoring and completion management',
            'corp_sec7_step5_title': '05. Result Management & Follow-up',
            'corp_sec7_step5_1': 'Guidance on result period and collection',
            'corp_sec7_step5_2': 'Summary translation and re-exam check',
            'corp_sec7_step5_3': 'Manage until final submission of docs',
            'corp_sec7_step6_title': '06. Final Report & Data Update',
            'corp_sec7_step6_1': 'Update individual status and notes in the list',
            'corp_sec7_step6_2': 'Real-time progress reporting to corporate',
            'corp_faq_title': 'Frequently Asked Questions',
            'corp_faq_subtitle': 'Questions corporate clients ask most.',
            'corp_faq_q1': 'Can we use our existing partner hospitals?',
            'corp_faq_a1': 'Yes. CHECKIT is an independent service. We fill the management gap without changing your hospitals.',
            'corp_faq_q2': 'Are there any legal risks?',
            'corp_faq_a2': 'CHECKIT prohibits illegal patient inducement. We focus on non-medical administrative support, ensuring safety.',
            'corp_faq_q3': 'How is personal information managed?',
            'corp_faq_a3': 'We comply with privacy laws. Lists are received securely and processed according to regulations.',
            'corp_faq_q4': 'Is complex system integration required?',
            'corp_faq_a4': 'No. Immediate introduction is possible with just a list and schedule consultation.',
            'corp_faq_q5': 'What level of translation is provided?',
            'corp_faq_a5': 'We provide summaries in native languages for "delivery of content," ensuring the worker\'s right to know.',
            'contact_form_company_label': 'Company Name',
            'view_workflow': 'View Workflow',
            'chatbot_header': '자주 하는 질문 (FAQ)',
            'chatbot_subtitle': 'The most frequently asked questions about CHECKIT.',
            'chatbot_placeholder': 'Type a message...',
            'chatbot_welcome': 'Hello! This is the CHECKIT support bot. How can I help you today?',
            'chatbot_q1': '1. How do I make a reservation?',
            'chatbot_a1': 'A CHECKIT dedicated manager will help you. Let us know the desired check-up items and schedule, and we will provide a list of hospitals that meet your conditions and handle the booking. Click \'Apply Now\' to leave an inquiry!',
            'chatbot_q2': '2. Do you have contracts with hospitals/doctors?',
            'chatbot_a2': 'No. CHECKIT does not have contract relationships with specific hospitals. We provide objective information to help you find the most suitable hospital from your perspective.',
            'chatbot_q3': '3. Do you perform medical acts or referrals?',
            'chatbot_a3': 'No, CHECKIT complies with medical laws and does not perform any medical acts or referrals. We focus on "non-medical processes" like booking, interpretation, and result translation.',
            'chatbot_q4': '4. What help can I get on the day of check-up?',
            'chatbot_a4': 'On the day of the check-up, our CheckBot manager will be with you every moment so you don\'t feel alone due to language barriers. We support all communication processes in real-time.',
            'chatbot_q5': '5. How are the results delivered?',
            'chatbot_a5': 'Provide the Korean result you received from the hospital, and we will translate and summarize the core content into your native language. We do not provide medical opinions or detailed medical explanations.',
            'chatbot_greeting_reply': 'Hello! Nice to meet you. How can I help you today?',
            'chatbot_fallback_reply': 'Thank you for your valuable inquiry! A dedicated manager will check your message and respond soon. For a more detailed response, please leave a message via the \'Contact Us\' section at the bottom of the main page.',
            'login_title': 'CHECKIT LOGIN',
            'login_tab_individual': 'Individual Customer',
            'login_tab_corporate': 'Corporate Admin',
            'login_tab_admin': 'CHECKIT Admin',
            'login_google': 'Login with Google',
            'login_divider': 'OR',
            'login_company_key_label': 'Company Key',
            'login_security_key_label': 'Security Key',
            'login_email_label': 'Email',
            'login_password_label': 'Password',
            'login_btn': 'Login',
            'login_success_msg': 'Login successful! Welcome.',
            'signup_title': 'Sign Up',
            'signup_company_name_label': 'Company Name',
            'signup_role_label': 'Account Type (Role)',
            'signup_company_key_label': 'Company Key (Code)',
            'signup_security_key_label': 'Security Key to Use',
            'signup_role_worker': 'Company Worker',
            'signup_role_admin': 'Company Admin',
            'signup_btn': 'Create Account',
            'signup_success': 'Sign up complete! Please login.',
            'signup_welcome_message': 'Welcome to CHECKIT!',
            'find_pass_title': 'Reset Password',
            'find_pass_btn': 'Send Reset Email',
            'find_pass_success': 'Reset email has been sent.',
            'switch_to_signup': 'No account? Sign Up',
            'switch_to_login': 'Have an account? Login',
            'switch_to_find': 'Forgot password?',
            'signup_name_placeholder': 'Full Name',
            'signup_privacy_title': 'Privacy Policy Agreement',
            'signup_privacy_agree': 'I agree to the collection and use of personal info (Required)',
            'signup_privacy_error': 'Please agree to the privacy policy.',
            'signup_consent_privacy_detail': '<strong>Collected Items:</strong> Name, DOB, Nationality, Phone, Address, Worksite.<br><br><strong>Purpose:</strong> Identity verification, check-up list confirmation, schedule guidance and management.<br><br><strong>Retention:</strong> 5 years after service withdrawal per legal regulations.',
            'signup_consent_admin_detail': "<strong>Service Definition:</strong> 'CHECKIT' is a <strong>'non-medical communication platform'</strong>. We have no commission contracts with hospitals and only fill administrative gaps between hospital-worker-company.<br><br><strong>Proxy Booking & Support:</strong> Agreement to proxy check-up period confirmation, mandatory item checks, booking, and document guidance.<br><br><strong>Scope:</strong> Support is limited to issuance of mandatory documents for submission after results and administrative communication until re-examination.",
            'signup_consent_medical_detail': '<strong>Content Provided:</strong> Agreement to receive the original result from the hospital along with a simple translation and KCD/ICD codes, and share them with the company admin.<br><br><strong>Medical Disclaimer:</strong> Provided translations and codes are for reference only and have no legal/medical effect. For accurate diagnosis, consult the medical institution directly.',
            'stat_total_clients': 'Total Clients', 'stat_pending_leads': 'Pending Inquiries',
            'signup_dob_placeholder': 'Date of Birth',
            'login_tab_corp': 'For Companies', 'login_tab_worker': 'For Workers',
            'login_worker_company_key_label': 'Company Input Key',
            'login_worker_company_key_placeholder': 'Enter company input key',
            'login_worker_security_key_label': 'Security Key',
            'login_worker_security_key_placeholder': 'Enter security key',
            'login_worker_btn': 'Login with existing account',
            'login_no_account': "Don't have an account yet?",
            'signup_link_text': 'Sign Up',
            'signup_tab_worker': 'Worker Sign Up',
            'signup_worker_name_label': 'Full Name',
            'signup_worker_name_placeholder': 'e.g. John Doe',
            'signup_worker_dob_label': 'Date of Birth',
            'signup_worker_dob_placeholder': 'YYYY-MM-DD',
            'signup_worker_company_key_label': 'Company Input Key',
            'signup_worker_company_key_placeholder': 'Enter company key provided by admin',
            'signup_worker_security_key_label': 'Security Key to Create',
            'signup_worker_security_key_placeholder': 'At least 6 chars with Eng+Num+Special',
            'signup_worker_security_hint': "Format: Starts with 'worker' (e.g. worker123!@)",
            'signup_essential_consent': 'Essential Consents',
            'signup_consent_required_hint': '* All items must be agreed to complete signup',
            'signup_consent_all': 'I agree to all terms above',
            'signup_complete_btn': 'Complete Signup',
            'signup_consent_privacy_label': '[Required] Personal Information Collection and Use',
            'signup_consent_admin_label': '[Required] Non-medical Administrative Support & Proxy Booking',
            'signup_consent_medical_label': '[Required] Sensitive Info (Medical Data) Processing',
            'signup_consent_view_details': 'View Details ▾',
            'footer_company_title': 'Platform Information',
            'footer_company_name': 'Company Name: <strong>CHECKIT Co., Ltd.</strong>',
            'footer_representative': 'Representative: Sang-hong Kim',
            'footer_address': 'Business Address: Room AF08-0019, 8th Floor, 202 Dasanjigeum-ro, Namyangju-si, Gyeonggi-do (Hyundai Terra Tower DIMC)',
            'footer_phone': 'Representative Phone: +82 10 5109 3459',
            'footer_business_no': 'Business Registration No: 8718803241',
            'footer_privacy_officer': 'Privacy Officer: Min-jung Nam',
            'footer_cs_title': 'Customer Service Info',
            'footer_cs_phone': 'Consultation Phone: <strong>010-5109-3459 / 010-2209-7951</strong>',
            'footer_cs_email': 'Consultation Email: <strong>checkit082@gmail.com</strong>',
            'footer_copyright': '&copy; 2026 CHECKIT Co., Ltd.'
        },
        cn: {
            'main_page_title': 'CHECKIT - 外国人健康检查预约',
            'nav_home': '首页', 'hero_cta': '立即申请', 'learn_more': '了解更多',
            'platform_title': 'CHECKIT 平台', 'platform_status_title': '我的服务状态',
            'platform_close': '关闭', 'contact_success': '咨询已成功受理！',
            'nav_home': '首页', 'nav_corporate': '企业服务', 'nav_mypage': '我的页面', 'nav_login': '登录', 'nav_logout': '登出',
            'mypage': '我的页面', 'logout': '登出',
            'hero_title': '面向企业的员工健康管理平台',
            'hero_subtitle': '我们将快速增长的员工健康管理转化为单一流程中系统化、可持续的结构。',
            'service_for_title': '面向日益增长的外国劳动力至关 중요한 企业的服务',
            'corporate_title': '建设 · 制造 · 土木等现场企业',
            'corporate_desc': '我们通过自动化现场人员的健康管理和检查流程，帮助企业实现运营效率和可持续增长。',
            'why_us_title': '为什么选择 CHECKIT 企业健康管理解决方案？',
            'why_us_subtitle_new': '通过一个平台，智能解决外国员工复杂的健康管理问题。',
            'why_us_feature1_title': '实时健康管理监控',
            'why_us_feature1_desc': '只需上传 Excel 名单，即可在实时仪表板中即时查看数百名员工的体检状态，大幅提高 HR 管理效率。',
            'why_us_feature2_title': '1:1 母语专属经理匹配',
            'why_us_feature2_desc': '专属经理与员工进行 1:1 沟通，提供从预约到行政指导的全流程贴身管理。',
            'why_us_feature3_title': '母语结果翻译与数据化',
            'why_us_feature3_desc': '将韩文结果简单翻译为母语，保障员工的知情权，并为企业提供标准化的健康指标报告。',
            'why_us_feature4_title': '法律风险与 OHS 完美应对',
            'why_us_feature4_desc': '严格遵守《产业安全保健法》和《医疗法》，通过防止体检漏检和事后管理，全面支持企业的法律责任履行。',
            'process_title': '服务流程',
            'process_step1_title': '咨询与医院支持',
            'process_step1_desc_new': '在咨询检查项目和日程后，提供最佳医院列表并进行预约。',
            'process_step2_title': '实时沟通支持',
            'process_step2_desc_new': '检查当天，提供医院内发生的实时沟通支持，确保无不便。',
            'process_step3_title_new': '结果翻译文件交付',
            'process_step3_desc_new': '将您提供的韩文结果翻译并总结成您的母语，通过邮件或社交软件发送。',
            'testimonials_title': '企业客户评价',
            'testimonials_subtitle': '许多企业已经在通过 CHECKIT 创新其外国员工的健康管理。',
            'testimonial1_text': '“每年为 300 名外国员工预约定期检查都是巨大的工作负担，但在引入 CHECKIT 后，所有流程都实现了自动化。尤其是员工对结果摘要服务的满意度非常高。”',
            'testimonial1_author': '金董事', 'testimonial1_type': '建设公司人力资源团队',
            'testimonial2_text': '“由于各家医院预约方式不同且存在语言障碍，现场管理人员曾非常辛苦。现在通过 CHECKIT 统一窗口沟通，实务人员的工作效率提高了一倍以上。”',
            'testimonial2_author': '李团队长', 'testimonial2_type': '制造企业健康管理员',
            'testimonial3_text': '“除了简单的体检预约，体检当天的实时沟通支持也提供了巨大的帮助。以前在医院里迷路或难以填写问卷的员工，现在都能安心体检了。”',
            'testimonial3_author': '朴部长', 'testimonial3_type': '土木工程企业管理员',
            'contact_title_new': '有什么疑问吗？',
            'contact_subtitle_new': 'CHECKIT 的专业经理将快速亲切地为您解答。',
            'contact_form_email_label': '电子邮箱',
            'contact_form_email_placeholder': '',
            'contact_form_phone_label': '联系电话（可选）',
            'contact_form_phone_placeholder': '',
            'contact_form_message_label': '咨询内容',
            'contact_form_message_placeholder': '',
            'contact_form_submit_button': '提交咨询',
            'corporate_page_title': '企业客户全面解决方案',
            'corporate_page_subtitle': '系统管理外国员工健康，提高生产力，减轻管理负担。',
            'individual_page_title': '个人客户服务',
            'individual_page_subtitle': 'CHECKIT 帮助所有在韩 or 访韩的外国人，在没有语言障碍的情况下接受最好的健康检查。',
            'expectation_title': '对韩国医疗服务的期待',
            'expectation_subtitle': '“要在韩国做体检吗？”<br>海外社区经常提到的韩国医疗特色',
            'expectation_item_title_1': '#1. 成本效益',
            'expectation_item_desc_1': '“众所周知，韩国的医疗费用比美国便宜得多。”',
            'expectation_item_title_2': '#2. 便利性',
            'expectation_item_desc_2': '“预计整个过程会很简单，没有任何麻烦。”',
            'expectation_item_title_3': '#3. 专业水平',
            'expectation_item_desc_3': '“设施和医疗水平预计将是世界一流的。”',
            'expectation_item_title_4': '#4. 节省时间',
            'expectation_item_desc_4': '“预计会迅速进行，几乎不会影响日程。”',
            'reality_title': '但现实是....',
            'reality_item_title_1': '1. 缺乏多语言支持',
            'reality_item_1_point_1': '职员因为不会外语而回避电话. ',
            'reality_item_1_point_2': '指南、准备指南、通知全部是韩文. ',
            'reality_item_1_point_3': '敏感问题无法得到妥善解释. ',
            'reality_item_1_point_4': '体检中的所有广播仅提供韩语. ',
            'reality_item_title_2': '2. 流程混乱',
            'reality_item_2_point_1': '甚至不知道体检套餐包含什么内容. ',
            'reality_item_2_point_2': '准备物品送达时没有使用说明. ',
            'reality_item_2_point_3': '肠镜药说明仅提供韩文 → 导致检查失败. ',
            'reality_item_2_point_4': '问卷长且复杂，且全部是韩文. ',
            'reality_item_title_3': '3. 日程不确定',
            'reality_item_3_point_1': '仅预约就需要2-3天. ',
            'reality_item_3_point_2': '职员回答各异 — 无人负责. ',
            'reality_item_3_point_3': '收不到通知. ',
            'reality_item_3_point_4': '由于海外时差 → 通话失败且预约延迟. ',
            'reality_item_title_4': '4. 结果延迟且责任缺失',
            'reality_item_4_point_1': '结果被邮寄到您不在的地址. ',
            'reality_item_4_point_2': '离开韩国后结果仍延迟数周. ',
            'reality_item_4_point_3': '无法获取收据. ',
            'reality_item_4_point_4': '没有关于检查后规则（如飞行）的说明. ',
            'reality_overtime_title': '纸面上看似微小的问题。现实却是如此。',
            'reality_overtime_p1': '来韩国之前，一切都令人安心. ',
            'reality_overtime_p2': '我听说提供多语言支持，过程会很顺畅. ',
            'reality_overtime_p3': '然后我尝试预约. ',
            'reality_overtime_p4': '就在那时，一切开始崩溃. ',
            'reality_overtime_p5': '实际上，没有人能说我的语言. ',
            'reality_overtime_p6': '所有指南和通知都只有韩文，与承诺完全不同. ',
            'reality_overtime_p7': '仅确认日程就花了好几天. ',
            'reality_overtime_p8': '体检当天，混乱达到了顶点. ',
            'reality_overtime_p9': '职员用韩语快速说话并含糊地指点. ',
            'reality_overtime_p10': '那一刻，我意识到我完全是孤身一人. ',
            'reality_overtime_p11': '离开韩国时甚至没收到结果. ',
            'solution_title': 'CHECKIT 的解决方案',
            'solution_subtitle': 'CHECKIT 与您同行，让您在无不适 or 焦虑的情况下专注于体检流程。',
            'individual_service1_title': '1:1 专属经理',
            'individual_service1_desc': '申请后立即分配专属经理，负责从医院选择到预约的一切事务。',
            'individual_service2_title_new': '实时沟通支持',
            'individual_service2_desc_new': '检查当天，我们通过通讯软件提供实时支持. ',
            'individual_service3_title_new': '结果翻译与总结',
            'individual_service3_desc_new': '提供韩文结果，我们将核心内容翻译并总结成您的母语. ',
            'packages_title': 'CHECKIT 套餐',
            'packages_subtitle': '选择最适合您需求的计划。',
            'package1_title': '无忧计划',
            'package1_price': '₩500,000',
            'package_includes': '包含内容',
            'package1_feature1': '中立医院列表',
            'package1_feature2': '官方信息翻译',
            'package1_feature3': '预约指南',
            'package1_feature4': '英文翻译文件',
            'package1_feature5': '简单问卷指南',
            'package1_feature6': '基本准备说明',
            'package1_feature7': '当天准备指南',
            'package1_feature8': '邮件交付结果',
            'package1_feature9': '延迟确认',
            'package_recommend_title': '推荐对象',
            'package1_recommend_desc': '希望自行管理流程的人. ',
            'package2_title': '零失误计划',
            'package2_price': '₩650,000',
            'package2_includes': '(包含无忧计划所有内容 +)',
            'package2_feature1': '强化问卷指南',
            'package2_feature2': '错误提醒',
            'package2_feature3': '表格审核',
            'package2_feature4': '时间线指南',
            'package2_feature5': '肠镜准备',
            'package2_feature6': '优先消息',
            'package2_feature7': '后续跟踪',
            'package2_feature8': '文件警报',
            'package2_feature9': '日程变更',
            'package2_recommend_desc': '希望最大限度减少失误的人. ',
            'package3_title': '全安计划',
            'package3_price': '₩800,000',
            'package3_includes': '(包含零失误计划所有内容 +)',
            'package3_feature1': '高级管理',
            'package3_feature2': '风险解释',
            'package3_feature3': '英文模板',
            'package3_feature4': '完整审核',
            'package3_feature5': '高级准备包',
            'package3_feature6': '实时聊天',
            'package3_feature7': '路线指南',
            'package3_feature8': '英文收据',
            'package3_feature9': 'CD/额外文件',
            'package3_feature10': '完整跟踪',
            'package3_feature11': '结构指南',
            'package3_feature12': '沟通模板',
            'package3_feature13': '变更支持',
            'package3_recommend_desc': '希望获得最安全管理的人. ',
            'price_structure_title': '为什么外国人在韩国支付更多？',
            'price_structure_q': '“为什么您的选项比医院的便宜？”',
            'price_structure_a_title': '简单回答',
            'price_structure_a_text': '不是检查不同，而是价格结构. ',
            'price_structure_reality_title': '医院真实情况',
            'price_structure_reality_text': '大多数医院创建“外国人套餐”，包含额外服务费用. ',
            'price_structure_example_title': '常见案例',
            'price_structure_example_text': '报价 180 万韩元的客户，通过我们仅用 105 万韩元预约了相同检查. ',
            'corp_sec1_title': '外国员工，现已必不可少',
            'corp_sec1_subtitle': '管理外国人才已成为企业发展的关键任务. ',
            'corp_sec1_item1_title': '外国劳动力激增',
            'corp_sec1_item1_desc': '制造业和建筑业中外国工人的比例正创下历史新高. ',
            'corp_sec1_item2_title': '法律义务强化',
            'corp_sec1_item2_desc': '外国工人须履行与本地人相同的体检义务. ',
            'corp_sec1_item3_title': '竞争力的关键',
            'corp_sec1_item3_desc': '留住优秀的外国人才直接关系到生产力. ',
            'corp_sec2_title': '健康检查是强大福利',
            'corp_sec2_subtitle': '差异化的支持可提高忠诚度. ',
            'corp_sec2_item1_title': '向往的企业',
            'corp_sec2_item1_desc': '无语言障碍的医疗服务是排名第一的福利. ',
            'corp_sec2_item2_title': '生产力最大化',
            'corp_sec2_item2_desc': '健康的工人能带来最佳生产力. ',
            'corp_sec2_item3_title': 'ESG 经营',
            'corp_sec2_item3_desc': '证明您是一家尊重多样性的公司. ',
            'corp_sec3_title': '现场的现实不同',
            'corp_sec3_subtitle': '前后的“管理真空”很难处理. ',
            'corp_sec3_item1_title': '之前：困惑',
            'corp_sec3_item1_p1': '韩文问卷受翻译器限制. ',
            'corp_sec3_item1_p2': '误解空腹导致取消. ',
            'corp_sec3_item1_p3': '寻找医院时的焦虑. ',
            'corp_sec3_item2_title': '之后：被忽视',
            'corp_sec3_item2_p1': '无法阅读结果. ',
            'corp_sec3_item2_p2': '错过复检信号. ',
            'corp_sec3_item2_p3': '公司仅保留结果，沟通鸿沟. ',
            'corp_sec4_title': 'CHECKIT 填补空白',
            'corp_sec4_subtitle': '医院负责医疗，CHECKIT 处理“其余部分”. ',
            'corp_sec4_side1_title': '医院与公司',
            'corp_sec4_side1_p1': '专业医疗检查',
            'corp_sec4_side1_p2': '生成结果 data',
            'corp_sec4_side1_p3': '保留法律记录',
            'corp_sec4_side2_title': 'CHECKIT 领域',
            'corp_sec4_side2_p1': '母语经理匹配',
            'corp_sec4_side2_p2': '翻译指南',
            'corp_sec4_side2_p3': '实时文字支持',
            'corp_sec4_side2_p4': '结果摘要',
            'corp_sec4_side2_p5': '后续沟通',
            'corp_sec5_title': '为什么只有 CHECKIT？',
            'corp_sec5_subtitle': '我们打造外国员工管理标准. ',
            'corp_sec5_item1_title': '人才库',
            'corp_sec5_item1_desc': '了解医疗系统的经理. ',
            'corp_sec5_item2_title': '现场响应',
            'corp_sec5_item2_desc': '即时响应系统. ',
            'corp_sec5_item3_title': '独立性',
            'corp_sec5_item3_desc': '不隶属于医院. ',
            'corp_sec5_item4_title': '母语报告',
            'corp_sec5_item4_desc': '准确了解健康状况. ',
            'corp_sec6_title': '无需更改流程',
            'corp_sec6_subtitle': '遵守法律同时提高效率. ',
            'corp_sec6_item1_title': '无违规',
            'corp_sec6_item1_desc': '严格行政支持. ',
            'corp_sec6_item2_title': '无合同',
            'corp_sec6_item2_desc': '使用现有医院. ',
            'corp_sec6_item3_title': '立即引入',
            'corp_sec6_item3_desc': '只需申请即可改善. ',
            'corp_sec7_title': '精密流程',
            'corp_sec7_subtitle': 'CHECKIT 负责所有步骤. ',
            'corp_sec7_step1_title': '01. 名单分析',
            'corp_sec7_step1_1': '接收名单',
            'corp_sec7_step1_2': '组织优先级',
            'corp_sec7_step2_title': '02. 个人预约',
            'corp_sec7_step2_1': '联系选择医院',
            'corp_sec7_step2_2': '短信确认',
            'corp_sec7_step3_title': '03. 准备指南',
            'corp_sec7_step3_1': '详细指导',
            'corp_sec7_step3_2': '实时通知',
            'corp_sec7_step4_title': '04. 当태 지원',
            'corp_sec7_step4_1': '沟通解决',
            'corp_sec7_step4_2': '完成管理',
            'corp_sec7_step5_title': '05. 결과 관리',
            'corp_sec7_step5_1': '周期指南',
            'corp_sec7_step5_2': '摘要翻译',
            'corp_sec7_step5_3': '提交管理',
            'corp_sec7_step6_title': '06. 最终报告',
            'corp_sec7_step6_1': '更新备注',
            'corp_sec7_step6_2': '进度报告',
            'corp_faq_title': '常见问题',
            'corp_faq_subtitle': '企业客户关注的问题. ',
            'corp_faq_q1': '现有医院？',
            'corp_faq_a1': '可以. 独立服务. ',
            'corp_faq_q2': '法律风险？',
            'corp_faq_a2': '无. 专注行政. ',
            'corp_faq_q3': '信息管理？',
            'corp_faq_a3': '遵守法律. ',
            'corp_faq_q4': '系统集成？',
            'corp_faq_a4': '不需要. ',
            'corp_faq_q5': '翻译级别？',
            'corp_faq_a5': '母语摘要. ',
            'contact_form_company_label': '企业名称',
            'view_workflow': '查看流程',
            'chatbot_header': '자주 하는 질문 (FAQ)',
            'chatbot_subtitle': '收集了关于 CHECKIT 最常被问到的问题。',
            'chatbot_placeholder': '输入消息...',
            'chatbot_welcome': '您好！我是 CHECKIT 咨询机器人。有什么我可以帮您的吗？',
            'chatbot_q1': '1. 如何预约？',
            'chatbot_a1': 'CHECKIT 专属经理将为您提供帮助. 请告知我们您希望的检查项目 and 日程，我们将提供符合您条件的医院列表并协助您完成预约. 点击“立即申请”留下您的咨询！',
            'chatbot_q2': '2. 你们与医院/医生有合同关系吗？',
            'chatbot_a2': '不. CHECKIT 与特定医院没有合同关系. 我们仅从您的角度出发，提供客观信息以帮助您找到最合适的医院。',
            'chatbot_q3': '3. 你们也提供医疗行为 or 医疗中介吗？',
            'chatbot_a3': '不, CHECKIT 遵守医疗法，不提供任何医疗行为 or 中介. 我们专注于预约、翻译、结果报告翻译等“非医疗过程”。',
            'chatbot_q4': '4. 检查当天我可以得到什么帮助？',
            'chatbot_a4': '检查当天，我们的 Check 机器人经理将全程陪伴您，解决因语言障碍引起的孤独感. 我们实时支持医院内的挂号、问诊、结算等所有沟通环节。',
            'chatbot_q5': '5. 结果报告如何交付？',
            'chatbot_a5': '请将您从医院收到的韩文结果报告发送给我们，我们将把核心内容翻译并总结成您的母语. 我们遵守医疗法，不提供医疗建议. ',
            'chatbot_greeting_reply': '您好！见到您很高兴. 有什么我可以帮您的吗？',
            'chatbot_fallback_reply': '感谢您的宝贵咨询！目前您输入的内容将由担当经理确认后进行答复. 如需更详细的说明，请通过首页下方的“联系我们”留下信息，以便我们提供更准确的回复. ',
            'login_title': 'CHECKIT 登录',
            'login_tab_individual': '个人客户',
            'login_tab_corporate': '企业管理员',
            'login_tab_admin': 'CHECKIT 管理员',
            'login_google': '通过 Google 登录',
            'login_divider': '或',
            'login_company_key_label': '公司代码',
            'login_security_key_label': '安全密钥',
            'login_email_label': '电子邮箱',
            'login_password_label': '密码',
            'login_btn': '登录',
            'login_success_msg': '登录成功！欢迎。',
            'signup_title': '注册',
            'signup_company_name_label': '公司名称',
            'signup_role_label': '注册类型 (角色)',
            'signup_company_key_label': '公司代码',
            'signup_security_key_label': '使用的安全密钥',
            'signup_role_worker': '公司员工',
            'signup_role_admin': '公司管理员',
            'signup_btn': '立即注册',
            'signup_success': '注册成功！请登录。',
            'signup_welcome_message': '欢迎来到 CHECKIT！',
            'find_pass_title': '重置密码',
            'find_pass_btn': '发送重置邮件',
            'find_pass_success': '重置邮件已发送。',
            'switch_to_signup': '没有账号？立即注册',
            'switch_to_login': '已有账号？登录',
            'switch_to_find': '忘记密码？',
            'signup_name_placeholder': '姓名',
            'signup_privacy_title': '个人信息收集及使用同意',
            'signup_privacy_agree': '我同意收集和使用个人信息 (必填)',
            'signup_privacy_error': '请同意个人信息收集及使用条约。',
            'signup_consent_privacy_detail': '<strong>收集项目:</strong> 姓名、出生日期、国籍、电话、地址、所属现场。<br><br><strong>收集目的:</strong> 身份识别、确认检查名单、现场检查日程通知及管理。<br><br><strong>保留及销毁:</strong> 根据相关法律，注销会员后保留5年（医疗法及对话证据用）。',
            'signup_consent_admin_detail': "<strong>服务定义:</strong> 'CHECKIT' 是不进行医疗法规定诊疗中介的 <strong>'非医疗沟通支援平台'</strong>。与医院无手续费合约，仅履行沟通及行政职务。<br><br><strong>代办预约及行政支援:</strong> 同意代办检查及预约期间确认、必检项检查、预约受理、必备文件通知。<br><br><strong>支援范围:</strong> 支援仅限于结果出来后企业提交用文件的发放及再次检查完成前的行政沟通。",
            'signup_consent_medical_detail': '<strong>提供内容:</strong> 同意接收医院签发的原始结果以及为理解及翻译结果、KCD/ICD信息，并与公司管理员共享。<br><br><strong>医疗免责声明:</strong> 提供的翻译及代码仅供参考，不具法律/医学效力。 准确的诊断及治疗必须咨询医疗机构。',
            'stat_total_clients': '总客户', 'stat_pending_leads': '待处理咨询',
            'login_tab_corp': '企业用', 'login_tab_worker': '员工用',
            'login_worker_company_key_label': '企业输入码',
            'login_worker_company_key_placeholder': '输入企业代码',
            'login_worker_security_key_label': '密码密钥',
            'login_worker_security_key_placeholder': '输入密码密钥',
            'login_worker_btn': '使用现有账户登录',
            'login_no_account': '还没有账号吗？',
            'signup_link_text': '注册账户',
            'signup_tab_worker': '员工注册',
            'signup_worker_name_label': '姓名',
            'signup_worker_name_placeholder': '例如：张三',
            'signup_worker_dob_label': '出生日期',
            'signup_worker_dob_placeholder': 'YYYY-MM-DD',
            'signup_worker_company_key_label': '企业输入码',
            'signup_worker_company_key_placeholder': '输入管理员提供的企业代码',
            'signup_worker_security_key_label': '设置密码密钥',
            'signup_worker_security_key_placeholder': '至少6位，包括英文字母、数字和符号',
            'signup_worker_security_hint': "格式：以'worker'开头 (例如: worker123!@)",
            'signup_essential_consent': '必要同意事项',
            'signup_consent_required_hint': '* 必须同意所有项才能完成注册',
            'signup_consent_all': '同意以上所有条款',
            'signup_complete_btn': '完成注册',
            'signup_consent_privacy_label': '[必选] 个人信息收集及使用同意',
            'signup_consent_admin_label': '[必选] 非医疗行政支援及代办预约服务同意',
            'signup_consent_medical_label': '[必选] 敏感信息（医疗数据）处理同意',
            'signup_consent_view_details': '查看详情 ▾',
            'footer_company_title': '平台基本信息',
            'footer_company_name': '公司名称: <strong>株式会社 CHECKIT</strong>',
            'footer_representative': '代表人: 金善洪',
            'footer_address': '营业地址: 京畿道南杨州市多山至今路202, 第8层 AF08-0019号 (多山洞, 现代 Terra Tower DIMC)',
            'footer_phone': '代表电话: 01051093459',
            'footer_business_no': '工商注册号: 8718803241',
            'footer_privacy_officer': '个人信息保护负责人: 南敏正',
            'footer_cs_title': '客户服务中心',
            'footer_cs_phone': '咨询电话: <strong>010-5109-3459 / 010-2209-7951</strong>',
            'footer_cs_email': '咨询电邮: <strong>checkit082@gmail.com</strong>',
            'footer_copyright': '&copy; 2026 株式会社 CHECKIT (CHECKIT)'
        },
        vn: {
            'main_page_title': 'CHECKIT - Đặt lịch khám sức khỏe cho người nước ngoài',
            'nav_home': 'Trang chủ', 'hero_cta': 'Đăng ký ngay', 'learn_more': 'Xem thêm',
            'platform_title': 'Nền tảng CHECKIT', 'platform_status_title': 'Trạng thái dịch vụ',
            'platform_close': 'Đóng', 'contact_success': 'Đã gửi yêu cầu!',
            'nav_home': 'Trang chủ', 'nav_corporate': 'Dịch vụ doanh nghiệp', 'nav_mypage': 'Trang của tôi', 'nav_login': 'Đăng nhập', 'nav_logout': 'Đăng xuất',
            'mypage': 'Trang của tôi', 'logout': 'Đăng xuất',
            'hero_title': 'Nền tảng quản lý sức khỏe người lao động cho doanh nghiệp',
            'hero_subtitle': 'Chúng tôi chuyển đổi việc quản lý sức khỏe đang tăng nhanh của người lao động thành một cấu trúc hệ thống và bền vững thông qua một quy trình duy nhất.',
            'service_for_title': 'Dịch vụ dành cho các doanh nghiệp mà lao động nước ngoài là thiết yếu',
            'corporate_title': 'Doanh nghiệp tại hiện trường như Xây dựng · Sản xuất · Công trình dân dụng',
            'corporate_desc': 'Chúng tôi hỗ trợ hiệu quả vận hành và tăng trưởng bền vững bằng cách tự động hóa quy trình quản lý và kiểm tra sức khỏe của nhân viên.',
            'why_us_title': 'Tại sao nên chọn giải pháp quản lý sức khỏe doanh nghiệp CHECKIT?',
            'why_us_subtitle_new': 'Giải quyết thông minh quy trình quản lý sức khỏe lao động nước ngoài với một nền tảng duy nhất.',
            'why_us_feature1_title': 'Giám sát sức khỏe thời gian thực',
            'why_us_feature1_desc': 'Chỉ với một lần tải danh sách Excel, có thể kiểm tra ngay lập tức tình trạng khám sức khỏe của hàng trăm nhân viên thông qua Dashboard thời gian thực.',
            'why_us_feature2_title': 'Manager chuyên trách 1:1 bằng tiếng mẹ đẻ',
            'why_us_feature2_desc': 'Manager chuyên trách trao đổi 1:1 với lao động, quản lý sát sao toàn bộ quy trình từ đặt lịch đến hướng dẫn hành chính.',
            'why_us_feature3_title': 'Dịch và dữ liệu hóa kết quả tiếng mẹ đẻ',
            'why_us_feature3_desc': 'Cung cấp bản dịch tóm tắt kết quả tiếng Hàn sang tiếng mẹ đẻ để đảm bảo quyền được biết của lao động và báo cáo chỉ số sức khỏe tiêu chuẩn cho doanh nghiệp.',
            'why_us_feature4_title': 'Ứng phó rủi ro pháp lý và OHS hoàn hảo',
            'why_us_feature4_desc': 'Tuân thủ nghiêm ngặt Luật An toàn Sức khỏe Nghề nghiệp và Luật Y tế, hỗ trợ đầy đủ trách nhiệm pháp lý doanh nghiệp qua việc quản lý tình trạng khám và sau khám.',
            'process_title': 'Quy trình dịch vụ',
            'process_step1_title': 'Tư vấn & Hỗ trợ',
            'process_step1_desc_new': 'Sau khi tư vấn, chúng tôi cung cấp danh sách bệnh viện and đặt lịch.',
            'process_step2_title': 'Hỗ trợ thời gian thực',
            'process_step2_desc_new': 'Hỗ trợ giao tiếp thời gian thực trong bệnh viện vào ngày khám.',
            'process_step3_title_new': 'Giao kết quả dịch',
            'process_step3_desc_new': 'Chúng tôi dịch and tóm tắt kết quả sang ngôn ngữ của bạn.',
            'testimonials_title': 'Cảm nhận từ khách hàng doanh nghiệp',
            'testimonials_subtitle': 'Nhiều doanh nghiệp đã đổi mới việc quản lý sức khỏe lao động nước ngoài với CHECKIT.',
            'testimonial1_text': '"Việc đặt lịch khám cho 300 lao động nước ngoài từng là gánh nặng lớn, nhưng với CHECKIT, mọi quy trình đã được tự động hóa. Nhân viên rất hài lòng với bản tóm tắt kết quả."',
            'testimonial1_author': 'Giám đốc Kim', 'testimonial1_type': 'Phòng Nhân sự Xây dựng',
            'testimonial2_text': '"Quản lý hiện trường từng gặp khó khăn do rào cản ngôn ngữ tại bệnh viện. CHECKIT giúp mọi việc trở nên thông suốt, tăng gấp đôi hiệu quả công việc cho đội ngũ của chúng tôi."',
            'testimonial2_author': 'Trưởng phòng Lee', 'testimonial2_type': 'Quản lý sức khỏe Sản xuất',
            'testimonial3_text': '"Ngoài việc đặt lịch, hỗ trợ giao tiếp thời gian thực vào ngày khám là một điểm cộng lớn. Nhân viên của chúng tôi giờ đây có thể yên tâm khám sức khỏe mà không lo lạc đường."',
            'testimonial3_author': 'Giám đốc Park', 'testimonial3_type': 'Quản lý Công trình dân dụng',
            'contact_title_new': 'Bạn có thắc mắc?',
            'contact_subtitle_new': 'Quản lý của CHECKIT sẽ phản hồi nhanh chóng.',
            'contact_form_email_label': 'Địa chỉ Email',
            'contact_form_email_placeholder': '',
            'contact_form_phone_label': 'Số điện thoại',
            'contact_form_phone_placeholder': '',
            'contact_form_message_label': 'Nội dung',
            'contact_form_message_placeholder': '',
            'contact_form_submit_button': 'Gửi thắc mắc',
            'corporate_page_title': 'Giải pháp doanh nghiệp',
            'corporate_page_subtitle': 'Quản lý sức khỏe nhân viên, tăng năng suất.',
            'individual_page_title': 'Dịch vụ cá nhân',
            'individual_page_subtitle': 'CHECKIT giúp người nước ngoài khám sức khỏe tốt nhất không rào cản ngôn ngữ.',
            'expectation_title': 'Kỳ vọng y tế tại Hàn',
            'expectation_subtitle': 'Các đặc điểm y tế Hàn Quốc thường được nhắc đến.',
            'expectation_item_title_1': '#1. Hiệu quả chi phí',
            'expectation_item_desc_1': '"Chi phí y tế tại Hàn rẻ hơn nhiều so với Mỹ."',
            'expectation_item_title_2': '#2. Tiện lợi',
            'expectation_item_desc_2': '"Quy trình đơn giản and không gặp rắc rối."',
            'expectation_item_title_3': '#3. Chuyên nghiệp',
            'expectation_item_desc_3': '"Tiêu chuẩn y tế đẳng cấp thế giới."',
            'expectation_item_title_4': '#4. Tiết kiệm thời gian',
            'expectation_item_desc_4': '"Diễn ra nhanh chóng, không ảnh hưởng lịch trình."',
            'reality_title': 'Nhưng thực tế là...',
            'reality_item_title_1': '1. Không hỗ trợ ngôn ngữ',
            'reality_item_1_point_1': 'Nhân viên tránh cuộc gọi ngoại ngữ.',
            'reality_item_1_point_2': 'Thông báo đều bằng tiếng Hàn.',
            'reality_item_1_point_3': 'Không giải thích thỏa đáng.',
            'reality_item_1_point_4': 'Phát thanh bằng tiếng Hàn.',
            'reality_item_title_2': '2. Quy trình gây rối',
            'reality_item_2_point_1': 'Không biết gói khám có gì.',
            'reality_item_2_point_2': 'Thiếu hướng dẫn sử dụng đồ chuẩn bị.',
            'reality_item_2_point_3': 'Hướng dẫn nội soi chỉ có tiếng Hàn.',
            'reality_item_2_point_4': 'Bảng câu hỏi phức tạp.',
            'reality_item_title_3': '3. Lịch trình không chắc chắn',
            'reality_item_3_point_1': 'Mất nhiều ngày để đặt lịch.',
            'reality_item_3_point_2': 'Nhân viên trả lời khác nhau.',
            'reality_item_3_point_3': 'Không có số điện thoại địa phương.',
            'reality_item_3_point_4': 'Chênh lệch múi giờ.',
            'reality_item_title_4': '4. Kết quả chậm',
            'reality_item_4_point_1': 'Gửi nhầm địa chỉ.',
            'reality_item_4_point_2': 'Kết quả chậm nhiều tuần.',
            'reality_item_4_point_3': 'Không lấy được hóa đơn.',
            'reality_item_4_point_4': 'Không có giải thích sau khám.',
            'reality_overtime_title': 'Vấn đề thực tế.',
            'reality_overtime_p1': 'Mọi thứ ban đầu có vẻ an tâm.',
            'reality_overtime_p2': 'Tôi nghe nói quy trình suôn sẻ.',
            'reality_overtime_p3': 'Sau đó tôi cố gắng đặt lịch.',
            'reality_overtime_p4': 'Mọi thứ bắt đầu sụp đổ.',
            'reality_overtime_p5': 'Không ai nói ngôn ngữ của tôi.',
            'reality_overtime_p6': 'Thông báo chỉ bằng tiếng Hàn.',
            'reality_overtime_p7': 'Mất nhiều ngày xác nhận lịch.',
            'reality_overtime_p8': 'Ngày khám bối rối cực điểm.',
            'reality_overtime_p9': 'Nhân viên chỉ trỏ mơ hồ.',
            'reality_overtime_p10': 'Tôi hoàn toàn cô độc.',
            'reality_overtime_p11': 'Kết quả không khớp thực tế.',
            'solution_title': 'Giải pháp CHECKIT',
            'solution_subtitle': 'Tập trung khám sức khỏe không lo lắng.',
            'individual_service1_title': 'Quản lý 1:1',
            'individual_service1_desc': 'Quản lý nói ngôn ngữ của bạn sẽ xử lý mọi việc.',
            'individual_service2_title_new': 'Hỗ trợ thời gian thực',
            'individual_service2_desc_new': 'Hỗ trợ qua tin nhắn ngày khám.',
            'individual_service3_title_new': 'Dịch kết quả',
            'individual_service3_desc_new': 'Dịch và tóm tắt kết quả sang tiếng mẹ đẻ.',
            'packages_title': 'Gói CHECKIT',
            'packages_subtitle': 'Chọn kế hoạch phù hợp.',
            'package1_title': 'Gói No-Confusion',
            'package1_price': '₩500,000',
            'package_includes': 'Bao gồm',
            'package1_feature1': 'Danh sách bệnh viện',
            'package1_feature2': 'Dịch thông tin chính thức',
            'package1_feature3': 'Hướng dẫn đặt lịch',
            'package1_feature4': 'Dịch hồ sơ',
            'package1_feature5': 'Hướng dẫn bảng câu hỏi',
            'package1_feature6': 'Hướng dẫn chuẩn bị',
            'package1_feature7': 'Hướng dẫn ngày khám',
            'package1_feature8': 'Giao kết quả',
            'package1_feature9': 'Kiểm tra chậm kết quả',
            'package_recommend_title': 'Dành cho',
            'package1_recommend_desc': 'Người muốn tự quản lý.',
            'package2_title': 'Gói Zero-Mistake',
            'package2_price': '₩650,000',
            'package2_includes': '(No-Confusion +)',
            'package2_feature1': 'Bảng câu hỏi nâng cao',
            'package2_feature2': 'Cảnh báo lỗi',
            'package2_feature3': 'Xem lại hồ sơ',
            'package2_feature4': 'Gói chuẩn bị',
            'package2_feature5': 'Nội soi đại tràng',
            'package2_feature6': 'Tin nhắn ưu tiên',
            'package2_feature7': 'Theo dõi kết quả',
            'package2_feature8': 'Cảnh báo hồ sơ',
            'package2_feature9': 'Đổi lịch',
            'package2_recommend_desc': 'Người muốn giảm sai sót.',
            'package3_title': 'Gói Total-Safe',
            'package3_price': '₩800,000',
            'package3_includes': '(Zero-Mistake +)',
            'package3_feature1': 'Quản lý cao cấp',
            'package3_feature2': 'Giải thích rủi ro',
            'package3_feature3': 'Mẫu tiếng Anh',
            'package3_feature4': 'Xem lại toàn bộ',
            'package3_feature5': 'Gói chuẩn bị cao cấp',
            'package3_feature6': 'Chat ngày khám',
            'package3_feature7': 'Đường đi bệnh viện',
            'package3_feature8': 'Hóa đơn tiếng Anh',
            'package3_feature9': 'CD / Hồ sơ bổ sung',
            'package3_feature10': 'Theo dõi hoàn chỉnh',
            'package3_feature11': 'Cấu trúc kết quả',
            'package3_feature12': 'Mẫu giao tiếp',
            'package3_feature13': 'Đổi lịch (3 lần)',
            'package3_recommend_desc': 'Người muốn quản lý tốt nhất.',
            'price_structure_title': 'Tại sao trả nhiều tiền hơn?',
            'price_structure_q': '"Tại sao dịch vụ của bạn rẻ hơn?"',
            'price_structure_a_title': 'Trả lời ngắn',
            'price_structure_a_text': 'Do cấu trúc giá.',
            'price_structure_reality_title': 'Thực tế bệnh viện',
            'price_structure_reality_text': 'Bệnh viện tạo gói người nước ngoài giá cao.',
            'price_structure_example_title': 'Trường hợp điển hình',
            'price_structure_example_text': 'Tiết kiệm đáng kể qua hướng dẫn của chúng tôi.',
            'corp_sec1_title': 'Nhân viên nước ngoài tất yếu',
            'corp_sec1_subtitle': 'Quản lý nhân tài là then chốt.',
            'corp_sec1_item1_title': 'Lao động tăng vọt',
            'corp_sec1_item1_desc': 'Tỷ lệ lao động cao kỷ록.',
            'corp_sec1_item2_title': 'Nghĩa vụ pháp lý',
            'corp_sec1_item2_desc': 'Nghĩa vụ khám sức khỏe.',
            'corp_sec1_item3_title': 'Năng lực cạnh tranh',
            'corp_sec1_item3_desc': 'Giữ chân nhân tài.',
            'corp_sec2_title': 'Phúc lợi mạnh mẽ',
            'corp_sec2_subtitle': 'Tăng lòng trung thành.',
            'corp_sec2_item1_title': 'Doanh nghiệp mơ ước',
            'corp_sec2_item1_desc': 'Chăm sóc không rào cản.',
            'corp_sec2_item2_title': 'Năng suất tối đa',
            'corp_sec2_item2_desc': 'Công nhân khỏe mạnh.',
            'corp_sec2_item3_title': 'Quản lý ESG',
            'corp_sec2_item3_desc': 'Tôn trọng sự đa dạng.',
            'corp_sec3_title': 'Thực tế hiện trường',
            'corp_sec3_subtitle': 'Khoảng trống quản lý.',
            'corp_sec3_item1_title': 'Trước: Bối rối',
            'corp_sec3_item1_p1': 'Hạn chế của trình dịch.',
            'corp_sec3_item1_p2': 'Hủy xét nghiệm do hiểu lầm.',
            'corp_sec3_item1_p3': 'An tâm từ việc tìm bệnh viện.',
            'corp_sec3_item2_title': 'Sau: Bỏ mặc',
            'corp_sec3_item2_p1': 'Không thể đọc kết quả.',
            'corp_sec3_item2_p2': 'Bỏ lỡ tín hiệu khám lại.',
            'corp_sec3_item2_p3': 'Khoảng cách giao tiếp.',
            'corp_sec4_title': 'CHECKIT lấp đầy khoảng trống',
            'corp_sec4_subtitle': 'Xử lý "phần còn lại".',
            'corp_sec4_side1_title': 'Bệnh viện & Công ty',
            'corp_sec4_side1_p1': 'Khám y khoa chuyên nghiệp',
            'corp_sec4_side1_p2': 'Dữ liệu kết quả',
            'corp_sec4_side1_p3': 'Hồ sơ pháp lý',
            'corp_sec4_side2_title': 'Lĩnh vực CHECKIT',
            'corp_sec4_side2_p1': 'Ghép quản lý 1:1',
            'corp_sec4_side2_p2': 'Hướng dẫn dịch thuật',
            'corp_sec4_side2_p3': 'Hỗ trợ tin nhắn',
            'corp_sec4_side2_p4': 'Dịch tóm tắt',
            'corp_sec4_side2_p5': 'Hỗ trợ sau khám',
            'corp_sec5_title': 'Tại sao chỉ CHECKIT?',
            'corp_sec5_subtitle': 'Tiêu chuẩn quản lý nhân viên.',
            'corp_sec5_item1_title': 'Nhân lực đa ngôn ngữ',
            'corp_sec5_item1_desc': 'Quản lý hiểu y tế Hàn.',
            'corp_sec5_item2_title': 'Phản ứng hiện trường',
            'corp_sec5_item2_desc': 'Phản ứng tức thì.',
            'corp_sec5_item3_title': 'Độc lập',
            'corp_sec5_item3_desc': 'Đề xuất lựa chọn tốt nhất.',
            'corp_sec5_item4_title': 'Kết quả tiếng mẹ đẻ',
            'corp_sec5_item4_desc': 'Hiểu rõ tình trạng sức khỏe.',
            'corp_sec6_title': 'Không thay đổi quy trình',
            'corp_sec6_subtitle': 'Tuân thủ luật, hiệu quả.',
            'corp_sec6_item1_title': 'Không vi phạm',
            'corp_sec6_item1_desc': 'Hỗ trợ hành chính.',
            'corp_sec6_item2_title': 'Không hợp đồng',
            'corp_sec6_item2_desc': 'Bệnh viện hiện có.',
            'corp_sec6_item3_title': 'Áp dụng ngay',
            'corp_sec6_item3_desc': 'Cải thiện từ ngày mai.',
            'corp_sec7_title': 'Quy trình vận hành',
            'corp_sec7_subtitle': 'CHECKIT chịu trách nhiệm.',
            'corp_sec7_step1_title': '01. Tiếp nhận danh sách',
            'corp_sec7_step1_1': 'Nhận danh sách',
            'corp_sec7_step1_2': 'Tổ chức ưu tiên',
            'corp_sec7_step2_title': '02. Đặt lịch cá nhân',
            'corp_sec7_step2_1': 'Liên hệ đặt lịch',
            'corp_sec7_step2_2': 'Xác nhận SMS',
            'corp_sec7_step3_title': '03. Hướng dẫn chuẩn bị',
            'corp_sec7_step3_1': 'Hướng dẫn chi tiết',
            'corp_sec7_step3_2': 'Thông báo thời gian thực',
            'corp_sec7_step4_title': '04. 당태 지원',
            'corp_sec7_step4_1': 'Giải quyết bất tiện',
            'corp_sec7_step4_2': 'Quản lý hoàn thành',
            'corp_sec7_step5_title': '05. 결과 관리',
            'corp_sec7_step5_1': '周期指南',
            'corp_sec7_step5_2': '摘要翻譯',
            'corp_sec7_step5_3': '提交管理',
            'corp_sec7_step6_title': '06. 最終報告',
            'corp_sec7_step6_1': '更新备注',
            'corp_sec7_step6_2': '进度报告',
            'corp_faq_title': 'Câu hỏi thường gặp',
            'corp_faq_subtitle': 'Thắc mắc doanh nghiệp.',
            'corp_faq_q1': 'Bệnh viện hiện có?',
            'corp_faq_a1': 'Có. Dịch vụ độc lập.',
            'corp_faq_q2': 'Rủi ro pháp lý?',
            'corp_faq_a2': 'Không. Hỗ trợ hành chính.',
            'corp_faq_q3': 'Thông tin cá nhân?',
            'corp_faq_a3': 'Tuân thủ luật.',
            'corp_faq_q4': 'Tích hợp hệ thống?',
            'corp_faq_a4': 'Không cần thiết.',
            'corp_faq_q5': 'Mức độ dịch?',
            'corp_faq_a5': 'Tóm tắt tiếng mẹ đẻ.',
            'contact_form_company_label': 'Tên doanh nghiệp',
            'view_workflow': 'Quy trình thực vụ',
            'chatbot_header': '자주 하는 질문 (FAQ)',
            'chatbot_subtitle': 'Những câu hỏi thường gặp nhất về CHECKIT.',
            'chatbot_placeholder': 'Nhập tin nhắn...',
            'chatbot_welcome': 'Xin chào! Đây là chatbot hỗ trợ của CHECKIT. Tôi có thể giúp gì cho bạn?',
            'chatbot_q1': '1. Làm thế nào để đặt lịch?',
            'chatbot_a1': 'Quản lý tận tâm của CHECKIT sẽ giúp bạn. Hãy cho chúng tôi biết các hạng mục khám and lịch trình mong muốn, chúng tôi sẽ cung cấp danh sách bệnh viện phù hợp and xử lý việc đặt lịch. Nhấn \'Đăng ký ngay\' để gửi yêu cầu!',
            'chatbot_q2': '2. Các bạn có hợp đồng với bệnh viện/bác sĩ không?',
            'chatbot_a2': 'Không. CHECKIT không có quan hệ hợp đồng với các bệnh viện cụ thể. Chúng tôi cungGLISH thông tin khách quan để giúp bạn tìm thấy bệnh viện phù hợp nhất từ góc độ của mình.',
            'chatbot_q3': '3. Các bạn có thực hiện hành vi y tế hoặc giới thiệu bệnh nhân không?',
            'chatbot_a3': 'Không, CHECKIT tuân thủ luật y tế and không thực hiện bất kỳ hành vi y tế or giới thiệu nào. Chúng tôi tập trung vào "quy trình phi y tế" như đặt lịch, thông dịch and dịch kết quả.',
            'chatbot_q4': '4. Tôi có thể nhận được sự giúp đỡ gì vào ngày khám?',
            'chatbot_a4': 'Vào ngày khám, quản lý CheckBot của chúng tôi sẽ đồng hành cùng bạn để bạn không cảm thấy cô đơn do rào cản ngôn ngữ. Chúng tôi hỗ trợ tất cả quy trình giao tiếp trong bệnh viện theo thời gian thực.',
            'chatbot_q5': '5. Kết quả được giao như thế nào?',
            'chatbot_a5': 'Hãy gửi cho chúng tôi kết quả tiếng Hàn bạn nhận được từ bệnh viện, chúng tôi sẽ dịch and tóm tắt nội dung cốt lõi sang ngôn ngữ của bạn. Chúng tôi không cung cấp ý kiến y khoa.',
            'chatbot_greeting_reply': 'Xin chào! Rất vui được gặp bạn. Tôi có thể giúp gì cho bạn?',
            'chatbot_fallback_reply': 'Cảm ơn sự tư vấn quý báu của bạn! Nội dung bạn nhập sẽ được quản lý phụ trách kiểm tra and phản hồi sớm. Để được phản hồi chính xác hơn, vui lòng để lại lời nhắn qua mục \'Liên hệ\' ở cuối trang chủ.',
            'login_title': 'CHECKIT ĐĂNG NHẬP',
            'login_tab_individual': 'Cá nhân',
            'login_tab_corporate': 'Quản lý doanh nghiệp',
            'login_tab_admin': 'Quản trị viên CHECKIT',
            'login_google': 'Đăng nhập bằng Google',
            'login_divider': 'hoặc',
            'login_company_key_label': 'Mã công ty',
            'login_security_key_label': 'Mã bảo mật',
            'login_email_label': 'E-mail',
            'login_password_label': 'Mật khẩu',
            'login_btn': 'Đăng nhập',
            'login_success_msg': 'Đăng nhập thành công! Chào mừng.',
            'signup_title': 'Đăng ký',
            'signup_company_name_label': 'Tên công ty',
            'signup_role_label': 'Loại tài khoản (Vai trò)',
            'signup_company_key_label': 'Mã công ty',
            'signup_security_key_label': 'Mã bảo mật sử dụng',
            'signup_role_worker': 'Nhân viên công ty',
            'signup_role_admin': 'Quản trị viên công ty',
            'signup_btn': 'Đăng ký',
            'signup_success': 'Đăng ký thành công! Vui lòng đăng nhập.',
            'signup_welcome_message': 'Chào mừng đến với CHECKIT!',
            'find_pass_title': 'Đặt lại mật khẩu',
            'find_pass_btn': '재설정 메일 보내기',
            'find_pass_success': '비밀번호 재설정 이메일을 보냈습니다.',
            'switch_to_signup': '계정이 없으신가요? 회원가입',
            'switch_to_login': '이미 계정이 있으신가요? 로그인',
            'switch_to_find': '비밀번호를 잊으셨나요?',
            'signup_name_placeholder': '이름',
            'signup_privacy_title': '개인정보 수집 및 이용 동의',
            'signup_privacy_agree': '개인정보 수집 및 이용에 동의합니다 (필수)',
            'signup_privacy_error': '개인정보 수집 및 이용에 동의해주세요.',
            'signup_consent_privacy_detail': '<strong>Mục thu thập:</strong> Họ tên, ngày sinh, quốc tịch, số điện thoại, địa chỉ, công trường.<br><br><strong>Mục đích:</strong> Xác nhận danh tính, kiểm tra danh sách khám, quản lý lịch trình.<br><br><strong>Lưu giữ:</strong> 5 năm sau khi hủy tài khoản theo quy định pháp luật.',
            'signup_consent_admin_detail': "<strong>Định nghĩa dịch vụ:</strong> 'CHECKIT' là <strong>'Nền tảng hỗ trợ giao tiếp phi y tế'</strong>. Không có hợp đồng hoa hồng với bệnh viện, chỉ thực hiện vai trò hỗ trợ hành chính.<br><br><strong>Đặt lịch hộ & Hỗ trợ hành chính:</strong> Đồng ý thay mặt nhân viên kiểm tra thời gian khám, hạng mục bắt buộc, đăng ký và hướng dẫn hồ sơ.<br><br><strong>Phạm vi hỗ trợ:</strong> Hỗ trợ cấp hồ sơ sau khi có kết quả và các giao tiếp hành chính cho đến khi tái khám xong.",
            'signup_consent_medical_detail': '<strong>Nội dung cung cấp:</strong> Đồng ý nhận kết quả gốc từ bệnh viện kèm bản dịch đơn giản và mã KCD/ICD, đồng thời chia sẻ với quản lý công ty.<br><br><strong>Miễn trừ trách nhiệm y tế:</strong> Bản dịch và mã số chỉ mang tính chất tham khảo, không có giá trị pháp lý/y tế. Để chẩn đoán chính xác, cần tư vấn trực tiếp với bác sĩ.',
            'stat_total_clients': 'Tổng khách hàng', 'stat_pending_leads': 'Thắc mắc chưa xử lý',
            'signup_dob_placeholder': 'Ngày sinh',
            'login_tab_corp': 'Doanh nghiệp', 'login_tab_worker': 'Nhân viên',
            'login_worker_company_key_label': 'Mã nhập công ty',
            'login_worker_company_key_placeholder': 'Nhập mã công ty đã cấp',
            'login_worker_security_key_label': 'Mã bảo mật',
            'login_worker_security_key_placeholder': 'Nhập mã bảo mật',
            'login_worker_btn': 'Đăng nhập với tài khoản có sẵn',
            'login_no_account': 'Bạn chưa có tài khoản?',
            'signup_link_text': 'Đăng ký ngay',
            'signup_tab_worker': 'Đăng ký nhân viên',
            'signup_worker_name_label': 'Họ và tên',
            'signup_worker_name_placeholder': 'VD: Nguyễn Văn A',
            'signup_worker_dob_label': 'Ngày sinh',
            'signup_worker_dob_placeholder': 'YYYY-MM-DD',
            'signup_worker_company_key_label': 'Mã nhập công ty',
            'signup_worker_company_key_placeholder': 'Nhập mã từ quản lý',
            'signup_worker_security_key_label': 'Tạo mã bảo mật',
            'signup_worker_security_key_placeholder': 'Ít nhất 6 ký tự',
            'signup_worker_security_hint': "Định dạng: worker... (VD: worker123!@)",
            'signup_essential_consent': 'Các mục bắt buộc',
            'signup_consent_required_hint': '* Phải đồng ý tất cả',
            'signup_consent_all': 'Tôi đồng ý với tất cả',
            'signup_complete_btn': 'Hoàn tất đăng ký',
            'signup_consent_privacy_label': '[Bắt buộc] Thu thập thông tin cá nhân',
            'signup_consent_admin_label': '[Bắt buộc] Hỗ trợ hành chính',
            'signup_consent_medical_label': '[Bắt buộc] Xử lý dữ liệu y tế',
            'signup_consent_view_details': 'Xem chi tiết ▾',
            'footer_company_title': 'Thông tin cơ bản về nền tảng',
            'footer_company_name': 'Tên công ty: <strong>Công ty Cổ phần CHECKIT</strong>',
            'footer_representative': 'Người đại diện: Kim Sun-hong',
            'footer_address': 'Địa chỉ kinh doanh: Phòng AF08-0019, Tầng 8, 202 Dasanjigeum-ro, Namyangju-si, Gyeonggi-do (Dasan-dong, Hyundai Terra Tower DIMC)',
            'footer_phone': 'Điện thoại đại diện: 01051093459',
            'footer_business_no': 'Mã số đăng ký kinh doanh: 8718803241',
            'footer_privacy_officer': 'Người chịu trách nhiệm bảo mật thông tin cá nhân: Nam Min-jung',
            'footer_cs_title': 'Thông tin Trung tâm Khách hàng',
            'footer_cs_phone': 'Điện thoại Tư vấn: <strong>010-5109-3459 / 010-2209-7951</strong>',
            'footer_cs_email': 'Email Tư vấn: <strong>checkit082@gmail.com</strong>',
            'footer_copyright': '&copy; 2026 Công ty Cổ phần CHECKIT (CHECKIT)'
        }
    };

    let currentLang = 'ko';
    const switchLanguage = (newLang) => {
        currentLang = newLang;
        localStorage.setItem('preferredLanguage', newLang);
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

        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === newLang);
        });
    };
    window.changeLanguage = switchLanguage;

    document.addEventListener('click', (e) => {
        const langBtn = e.target.closest('.lang-btn');
        if (langBtn && langBtn.hasAttribute('data-lang')) {
            switchLanguage(langBtn.getAttribute('data-lang'));
        }
    });


    
    // --- Firebase & Auth Logic ---
    const firebaseConfig = {
        apiKey: "AIzaSyDAdW_vJHUHuDaun2Kh94uC8ywlfOdyPco",
        authDomain: "checkit-43341.firebaseapp.com",
        projectId: "checkit-43341",
        storageBucket: "checkit-43341.appspot.com",
        messagingSenderId: "818434232492",
        appId: "1:818434232492:web:713836b01fc11196150f09",
        measurementId: "G-WVDWXTJ1TR"
    };

    if (typeof firebase !== 'undefined' && !firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    const auth = firebase.auth();
    // 세션 지속성 설정 (브라우저 종료 시 로그아웃)
    auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).catch(console.error);
    const db = firebase.firestore();

    const navLogin = document.getElementById('nav-login');
    const navLogout = document.getElementById('nav-logout');
    const navMyPage = document.getElementById('nav-mypage');
    const loginBtn = document.getElementById('login-btn');
    const loginModalOverlay = document.getElementById('login-modal-overlay');
    const closeLoginModal = document.getElementById('close-login-modal');

    let currentUserData = { role: 'customer', cid: null };

    auth.onAuthStateChanged(user => {
        const updateButtons = (isLoggedIn) => {
            const loginBtns = [navLogin, loginBtn, document.getElementById('mobile-nav-login')];
            const logoutBtns = [navLogout, document.getElementById('mobile-nav-logout')];
            const mypageBtns = [navMyPage, document.getElementById('mobile-nav-mypage')];

            loginBtns.forEach(btn => btn && (btn.style.display = isLoggedIn ? 'none' : 'inline-block'));
            logoutBtns.forEach(btn => btn && (btn.style.display = isLoggedIn ? 'inline-block' : 'none'));
            mypageBtns.forEach(btn => btn && (btn.style.display = isLoggedIn ? 'inline-block' : 'none'));
        };

        if (user) {
            updateButtons(true);
            if (loginModalOverlay) loginModalOverlay.style.display = 'none';
            
            db.collection('users').doc(user.uid).get().then(doc => {
                if (doc.exists) {
                    const data = doc.data();
                    currentUserData.role = data.role || 'customer';
                    currentUserData.cid = data.companyId || null;
                    currentUserData.securityKey = data.securityKey || null;
                }
            }).catch(err => console.error("Error fetching user data:", err));
        } else {
            updateButtons(false);
            currentUserData = { role: 'customer', cid: null };
        }
    });

    // Robust event delegation for nav-login to handle dynamic header injection
    document.addEventListener('click', (e) => {
        // Login
        if (e.target.closest('#nav-login') || e.target.closest('#mobile-nav-login')) {
            if (loginModalOverlay) loginModalOverlay.style.display = 'flex';
            if (mobileMenuOverlay) mobileMenuOverlay.classList.remove('active');
        }
        
        // Logout
        if (e.target.closest('#nav-logout') || e.target.closest('#mobile-nav-logout')) {
            auth.signOut();
            location.reload();
        }

        // My Page
        if (e.target.closest('#nav-mypage') || e.target.closest('#mobile-nav-mypage')) {
            handleMyPageNavigation();
        }
    });

    function handleMyPageNavigation() {
        const user = auth.currentUser;
        if (!user) {
            if (loginModalOverlay) loginModalOverlay.style.display = 'flex';
            return;
        }

        if (user.email === "master@checkit.com") {
            window.location.href = 'platform.html?role=master';
            return;
        }

        db.collection('users').doc(user.uid).get().then(doc => {
            let role = 'worker';
            if (doc.exists) role = doc.data().role;

            if (role === 'master' || role === 'super_admin') {
                window.location.href = 'platform.html?role=master';
            } else if (role === 'company_admin') {
                window.location.href = `company_dashboard.html`;
            } else {
                window.location.href = 'platform.html?role=worker';
            }
        }).catch(err => {
            console.error("Error on My Page redirection:", err);
            window.location.href = 'platform.html';
        });
    }

    closeLoginModal.addEventListener('click', () => {
        loginModalOverlay.style.display = 'none';
    });

    loginModalOverlay.addEventListener('click', (e) => {
        if (e.target === loginModalOverlay) {
            loginModalOverlay.style.display = 'none';
        }
    });

    const corporateLoginForm = document.getElementById('login-form-corporate');
    if (corporateLoginForm) {
        corporateLoginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const companyKeyInput = document.getElementById('login-company-key').value.trim();
            const securityKey = document.getElementById('login-security-key').value.trim();

            if (!companyKeyInput || !securityKey) {
                return alert("회사 입력키와 암호키를 모두 입력해주세요.");
            }

            // [강력 로직] 마스터 계정 즉시 판별 (지원되는 모든 암호키 포함)
            const isMaster = (companyKeyInput.toLowerCase() === 'comp_체킷' && (securityKey === 'checkit03080!!' || securityKey === 'checkit082082!'));
            let companyKey = companyKeyInput; // 원본 케이스 유지
            let isValidAdmin = false;
            let targetRole = 'worker';

            const loader = document.getElementById('pageLoader') || { style: {} };
            loader.style.display = 'flex';

            if (isMaster) {
                console.log("Master login detected in script.js");
                // 마스터는 항상 고정된 이메일과 역할을 사용
                const masterEmail = "master@checkit.com";
                const masterPw = "master1234!";
                
                const handleMasterLogin = async (user) => {
                    await db.collection('users').doc(user.uid).set({
                        role: 'master',
                        name: '체킷 마스터',
                        lastLogin: firebase.firestore.FieldValue.serverTimestamp()
                    }, { merge: true });
                    
                    const data = translations[currentLang] || translations['ko'];
                    alert(data['login_success_msg'] || '로그인에 성공했습니다!');
                    window.location.href = 'platform.html?role=master';
                };

                auth.signInWithEmailAndPassword(masterEmail, masterPw)
                    .then(res => handleMasterLogin(res.user))
                    .catch(async () => {
                        try {
                            const res = await auth.createUserWithEmailAndPassword(masterEmail, masterPw);
                            handleMasterLogin(res.user);
                        } catch(e) {
                            alert("마스터 로그인 중 오류가 발생했습니다.");
                            loader.style.display = 'none';
                        }
                    });
                return;
            }

            // 1. 일반 기업 정보 확인 (마스터가 생성한 키인지 검증)
            const inputCid = companyKey.replace('comp_', '');
            try {
                // 정확한 케이스로 조회 확인 (접두어 제거 버전)
                let compDoc = await db.collection('company_info').doc(inputCid).get();
                
                // 원본 입력값 자체가 문서 ID로 저장되었을지도 모르니 확인 (대소문자 유지)
                if (!compDoc.exists) {
                    compDoc = await db.collection('company_info').doc(companyKey).get();
                }

                // 없으면 소문자로 재시도 (접두어 제거 버전)
                if (!compDoc.exists) {
                    compDoc = await db.collection('company_info').doc(inputCid.toLowerCase()).get();
                }

                // 없으면 소문자로 재시도 (원본 버전)
                if (!compDoc.exists) {
                    compDoc = await db.collection('company_info').doc(companyKey.toLowerCase()).get();
                }

                if (compDoc.exists) {
                    const cData = compDoc.data();
                    if (securityKey === cData.adminKey) {
                        isValidAdmin = true;
                        targetRole = 'company_admin';
                        companyKey = cData.companyKey || 'comp_' + compDoc.id; // DB에 저장된 정확한 케이스 유지
                    }
                }
            } catch (err) { console.warn("Company verify skip:", err); }

            // 2. 인증용 가상 계정 정보 생성
            const safeCompanyKey = companyKey.toLowerCase(); // 계정 중복 생성을 막기 위해 이메일은 소문자로
            const stringToHex = (str) => Array.from(str).map(c => c.charCodeAt(0).toString(16).padStart(2, '0')).join('');
            const email = `${stringToHex(securityKey)}@${stringToHex(safeCompanyKey)}.checkit.com`;
            const password = `${safeCompanyKey}_${securityKey}!2026`;

            const handleLoginSuccess = async (user) => {
                const companyId = companyKey.replace('comp_', '');
                let role = targetRole;

                // [데이터 연동 & 권한 체크]
                // 1. 기업용 탭에서는 관리자만 로그인 성공 허용
                if (role !== 'company_admin') {
                    alert("이 탭은 기업 관리자 전용입니다. 근로자이신 경우 '근로자용' 탭에서 로그인해 주세요.");
                    auth.signOut();
                    loader.style.display = 'none';
                    return;
                }

                db.collection('users').doc(user.uid).set({
                    role: role,
                    companyId: companyId,
                    securityKey: securityKey,
                    lastLogin: firebase.firestore.FieldValue.serverTimestamp()
                }, { merge: true }).then(() => {
                    const data = translations[currentLang] || translations['ko'];
                    alert(data['login_success_msg'] || '관리자 로그인에 성공했습니다!');
                    window.location.href = `company_dashboard.html`;
                });
            };

            // 3. 로그인 시도 및 자동 계정 생성 (Bypass Signup)
            auth.signInWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    handleLoginSuccess(userCredential.user);
                })
                .catch(async (error) => {
                    // 마스터가 등록한 관리자 키인 경우 즉시 계정 생성 후 로그인
                    if (isValidAdmin) {
                        try {
                            const newUser = await auth.createUserWithEmailAndPassword(email, password);
                            handleLoginSuccess(newUser.user);
                        } catch (createErr) {
                            console.error("Auto-auth failed:", createErr);
                            alert("시스템 오류가 발생했습니다. 관리자에게 문의하세요.");
                            loader.style.display = 'none';
                        }
                    } else {
                        alert("가입되지 않은 계정이거나 정보가 올바르지 않습니다.\n근로자의 경우 회원가입을 먼저 진행해주세요.");
                        loader.style.display = 'none';
                    }
                });
        });
    }


    // --- Signup Modal Logic ---
    const signupLinkCorp = document.getElementById('signup-link-corp');
    const signupModalOverlay = document.getElementById('signup-modal-overlay');
    const closeSignupModal = document.getElementById('close-signup-modal');
    const backToLoginLink = document.getElementById('back-to-login');
    const signupForm = document.getElementById('signup-form');

    if (signupLinkCorp) {
        signupLinkCorp.addEventListener('click', (e) => {
            e.preventDefault();
            if (loginModalOverlay) loginModalOverlay.style.display = 'none';
            if (signupModalOverlay) signupModalOverlay.style.display = 'flex';
        });
    }

    if (backToLoginLink) {
        backToLoginLink.addEventListener('click', (e) => {
            e.preventDefault();
            if (signupModalOverlay) signupModalOverlay.style.display = 'none';
            if (loginModalOverlay) loginModalOverlay.style.display = 'flex';
        });
    }

    if (closeSignupModal) {
        closeSignupModal.addEventListener('click', () => {
            if (signupModalOverlay) signupModalOverlay.style.display = 'none';
        });
    }

    if (signupModalOverlay) {
        signupModalOverlay.addEventListener('click', (e) => {
            if (e.target === signupModalOverlay) {
                signupModalOverlay.style.display = 'none';
            }
        });
    }

    // --- [유도리] 회사 이름 정규화 함수 ---
    const normalizeName = (name) => {
        if (!name) return "";
        let n = name.toLowerCase().replace(/\s+/g, ""); // 공백 제거 및 소문자화
        // 한국어 접미사 제거
        n = n.replace(/(주식회사|유한회사|사단법인|재단법인|\(주\)|\(유\))/g, "");
        // 영어 접미사 제거
        n = n.replace(/(co\.,ltd\.|ltd\.|inc\.|corp\.|corporation|company)/g, "");
        // 중국어 접미사 제거
        n = n.replace(/(有限公司|公司)/g, "");
        // 베트남어 접미사 제거
        n = n.replace(/(congty|tnhh|cp)/g, "");
        return n;
    };

    if (signupForm) {
        signupForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const companyName = document.getElementById('signup-company-name').value.trim();
            const companyKey = document.getElementById('signup-company-key').value.trim().toLowerCase();
            let securityKey = document.getElementById('signup-security-key').value.trim();

            if (!companyName || !companyKey || !securityKey) {
                return alert("모든 항목을 입력해주세요.");
            }

            // --- Validation Logic ---
            if (!companyKey.startsWith('comp_')) {
                return alert("회사 입력키는 'comp_회사명' 형식으로 시작해야 합니다.");
            }

            // Security Key validation: 6+ chars, Eng + Num + Special
            const hasEnglish = /[a-zA-Z]/.test(securityKey);
            const hasNumber = /[0-9]/.test(securityKey);
            const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(securityKey);

            if (securityKey.length < 6 || !hasEnglish || !hasNumber || !hasSpecial) {
                return alert("암호키는 영문, 숫자, 특수문자를 포함하여 6자리 이상으로 설정해야 합니다.");
            }

            // CHECKIT 담당자가 생성해준 코드(admin 접두사)에 따라 역할 자동 부여
            const role = securityKey.startsWith('admin') ? 'company_admin' : 'worker';

            // Generate a valid safe email (Hex encoding to support Korean/Special chars in Auth)
            const stringToHex = (str) => {
                return Array.from(str).map(c => c.charCodeAt(0).toString(16).padStart(2, '0')).join('');
            };
            const safePrefix = stringToHex(securityKey);
            const safeDomain = stringToHex(companyKey);
            const email = `${safePrefix}@${safeDomain}.checkit.com`;
            const password = `${companyKey}_${securityKey}!2026`;

            try {
                const userCredential = await auth.createUserWithEmailAndPassword(email, password);
                const user = userCredential.user;
                const companyId = companyKey.replace('comp_', '');

                await db.collection('users').doc(user.uid).set({
                    role: role,
                    companyId: companyId,
                    companyName: companyName,
                    normalizedCompanyName: normalizeName(companyName), // 유도리 매칭용
                    displayName: companyName,
                    securityKey: securityKey,
                    lastLogin: firebase.firestore.FieldValue.serverTimestamp()
                }, { merge: true });

                if (role === 'company_admin') {
                    try {
                        await db.collection('company_info').doc(companyId).set({
                            name: companyName,
                            normalizedName: normalizeName(companyName), // 유도리 매칭용
                            adminKey: securityKey,
                            companyKey: companyKey,
                            createdAt: firebase.firestore.FieldValue.serverTimestamp()
                        }, { merge: true });
                    } catch (companyErr) {
                        console.warn("Company info auto-init failed:", companyErr);
                    }
                }

                alert("회원가입이 완료되었습니다! 이제 로그인할 수 있습니다.");
                auth.signOut();
                if (signupModalOverlay) signupModalOverlay.style.display = 'none';
                if (loginModalOverlay) loginModalOverlay.style.display = 'flex';
                
            } catch (error) {
                console.error("Signup Detail Error:", error);
                if (error.code === 'auth/email-already-in-use') {
                    alert("이미 해당 기업코드와 암호키로 가입된 사용자가 있습니다.");
                } else {
                    alert("회원가입 중 시스템 오류가 발생했습니다: " + (error.message || "알 수 없는 오류"));
                }
            }
        });
    }

    const savedLang = localStorage.getItem('preferredLanguage') || 'ko';
    switchLanguage(savedLang);

    // --- Tab Switching for Login/Signup modals ---
    window.switchLoginTab = (role) => {
        const corp = document.getElementById('login-corp-content');
        const worker = document.getElementById('login-worker-content');
        const btnCorp = document.getElementById('tab-btn-corp');
        const btnWorker = document.getElementById('tab-btn-worker');
        if (!corp || !worker) return;
        if (role === 'corp') {
            corp.style.display = 'block'; worker.style.display = 'none';
            if (btnCorp) { btnCorp.style.color = 'var(--primary)'; btnCorp.style.borderBottom = '2px solid var(--primary)'; }
            if (btnWorker) { btnWorker.style.color = '#64748b'; btnWorker.style.borderBottom = 'none'; }
        } else {
            corp.style.display = 'none'; worker.style.display = 'block';
            if (btnWorker) { btnWorker.style.color = 'var(--primary)'; btnWorker.style.borderBottom = '2px solid var(--primary)'; }
            if (btnCorp) { btnCorp.style.color = '#64748b'; btnCorp.style.borderBottom = 'none'; }
        }
    };
    window.switchSignupTab = (role) => {
        const corp = document.getElementById('signup-corp-content');
        const worker = document.getElementById('signup-worker-content');
        const btnCorp = document.getElementById('signup-tab-corp');
        const btnWorker = document.getElementById('signup-tab-worker');
        if (!corp || !worker) return;
        if (role === 'corp') {
            corp.style.display = 'block'; worker.style.display = 'none';
            if (btnCorp) { btnCorp.style.color = 'var(--primary)'; btnCorp.style.borderBottom = '2px solid var(--primary)'; }
            if (btnWorker) { btnWorker.style.color = '#64748b'; btnWorker.style.borderBottom = 'none'; }
        } else {
            corp.style.display = 'none'; worker.style.display = 'block';
            if (btnWorker) { btnWorker.style.color = 'var(--primary)'; btnWorker.style.borderBottom = '2px solid var(--primary)'; }
            if (btnCorp) { btnCorp.style.color = '#64748b'; btnCorp.style.borderBottom = 'none'; }
        }
    };

    // --- Worker Login Handler ---
    // --- Simplified Worker Login Handler ---
    const loginFormWorkerSimplified = document.getElementById('login-form-worker-simplified');
    if (loginFormWorkerSimplified) {
        loginFormWorkerSimplified.addEventListener('submit', async (e) => {
            e.preventDefault();
            const companyKey = document.getElementById('login-worker-company-key').value.trim();
            const securityKey = document.getElementById('login-worker-security-key').value.trim();

            if (!companyKey || !securityKey) {
                return alert("회사 입력키와 암호키를 모두 입력해주세요.");
            }

            const loader = document.getElementById('pageLoader') || { style: {} };
            loader.style.display = 'flex';

            const safeCompanyKey = companyKey.toLowerCase();
            const stringToHex = (str) => Array.from(str).map(c => c.charCodeAt(0).toString(16).padStart(2, '0')).join('');
            const email = `${stringToHex(securityKey)}@${stringToHex(safeCompanyKey)}.checkit.com`;
            const password = `${safeCompanyKey}_${securityKey}!2026`;

            auth.signInWithEmailAndPassword(email, password)
                .then(async (cred) => {
                    const userDoc = await db.collection('users').doc(cred.user.uid).get();
                    if (userDoc.exists && userDoc.data().role === 'worker') {
                        const userData = userDoc.data();
                        const companyId = companyKey.replace('comp_', '');
                        
                        // [데이터 연동] workerDocId가 없거나 새로 로그인한 경우 연동 시도
                        if (!userData.workerDocId) {
                            try {
                                const workerSnap = await db.collection('workers')
                                    .where('companyId', '==', companyId)
                                    .where('passwordKey', '==', securityKey)
                                    .limit(1)
                                    .get();
                                
                                if (!workerSnap.empty) {
                                    await db.collection('users').doc(cred.user.uid).update({
                                        workerDocId: workerSnap.docs[0].id
                                    });
                                    console.log("Worker document linked on direct login:", workerSnap.docs[0].id);
                                }
                            } catch (err) {
                                console.warn("Worker link search failed on direct login:", err);
                            }
                        }

                        // [핵심 수정] 업데이트 이후 최신 문서를 재조회하여 workerDocId를 정확히 가져옴
                        const freshUserDoc = await db.collection('users').doc(cred.user.uid).get();
                        const workerId = freshUserDoc.data()?.workerDocId || '';

                        const data = translations[currentLang] || translations['ko'];
                        alert(data['login_success_msg'] || '로그인에 성공했습니다!');
                        window.location.href = `worker_portal.html?workerDocId=${workerId}`;
                    } else {
                        alert('근로자 계정이 아닙니다. 관리자 계정으로 로그인하시려면 기업용 탭을 이용해주세요.');
                        auth.signOut();
                        loader.style.display = 'none';
                    }
                })
                .catch(err => {
                    alert('정보가 올바르지 않거나 가입되지 않은 계정입니다. 회원가입을 먼저 진행해 주세요.');
                    loader.style.display = 'none';
                });
        });
    }

    // --- Simplified Worker Signup Handler ---
    const signupFormWorkerSimplified = document.getElementById('signup-form-worker-simplified');

    // --- 전체 동의 체크박스 로직 ---
    const consentAll = document.getElementById('signup-worker-consent-all');
    const consentPrivacy = document.getElementById('signup-worker-consent-privacy');
    const consentAdmin = document.getElementById('signup-worker-consent-admin');
    const consentMedical = document.getElementById('signup-worker-consent-medical');
    const consentBoxes = [consentPrivacy, consentAdmin, consentMedical];

    if (consentAll) {
        consentAll.addEventListener('change', () => {
            consentBoxes.forEach(cb => { if (cb) cb.checked = consentAll.checked; });
        });
        consentBoxes.forEach(cb => {
            if (cb) cb.addEventListener('change', () => {
                consentAll.checked = consentBoxes.every(c => c && c.checked);
            });
        });
    }

    if (signupFormWorkerSimplified) {
        signupFormWorkerSimplified.addEventListener('submit', async (e) => {
            e.preventDefault();

            // --- 동의 체크 검증 ---
            if (!consentPrivacy?.checked || !consentAdmin?.checked || !consentMedical?.checked) {
                return alert('필수 동의 항목에 모두 체크해 주세요.');
            }
            const name = document.getElementById('signup-worker-name').value.trim();
            const birthDate = document.getElementById('signup-worker-birth').value;
            const companyKey = document.getElementById('signup-worker-company-key').value.trim().toLowerCase();
            const securityKey = document.getElementById('signup-worker-security-key').value.trim();

            if (!name || !birthDate || !companyKey || !securityKey) {
                return alert("모든 항목을 입력해주세요.");
            }

            // 1. Format Check: must start with 'worker'
            if (!securityKey.startsWith('worker')) {
                return alert("암호키는 반드시 'worker'로 시작해야 합니다. (예: worker123!@)");
            }

            // 2. Format Check: Eng + Num + Special, 6+ chars
            const hasEnglish = /[a-zA-Z]/.test(securityKey);
            const hasNumber = /[0-9]/.test(securityKey);
            const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(securityKey);
            if (securityKey.length < 6 || !hasEnglish || !hasNumber || !hasSpecial) {
                return alert("암호키는 'worker'를 포함하여 영문, 숫자, 특수문자를 모두 포함한 6자리 이상이어야 합니다.");
            }

            const loader = document.getElementById('pageLoader') || { style: {} };
            loader.style.display = 'flex';

            try {
                const companyId = companyKey.replace('comp_', '');
                
                // 3. Roster Check (Name + CompanyId) - 생년월일 체크 제외 요청 반영
                const workerSnap = await db.collection('workers')
                    .where('companyId', '==', companyId)
                    .where('name', '==', name)
                    .get();

                if (workerSnap.empty) {
                    throw new Error('입력하신 성함과 생년월일이 기업의 직원 명단과 일치하지 않습니다. 관리자에게 확인해 주세요.');
                }

                const workerDoc = workerSnap.docs[0];
                if (workerDoc.data().uid) {
                    throw new Error('이미 가입된 정보입니다. 로그인을 시도해 주세요.');
                }

                // 4. Create Account
                const stringToHex = (str) => Array.from(str).map(c => c.charCodeAt(0).toString(16).padStart(2, '0')).join('');
                const email = `${stringToHex(securityKey)}@${stringToHex(companyKey)}.checkit.com`;
                const password = `${companyKey}_${securityKey}!2026`;

                const userCredential = await auth.createUserWithEmailAndPassword(email, password);
                const user = userCredential.user;

                // 5. Link User and Save Metadata
                const consentTimestamp = new Date().toISOString();
                const batch = db.batch();
                batch.set(db.collection('users').doc(user.uid), {
                    role: 'worker',
                    companyId: companyId,
                    name: name,
                    securityKey: securityKey,
                    workerDocId: workerDoc.id,
                    consent: {
                        privacy: { agreed: true, agreedAt: consentTimestamp },
                        adminService: { agreed: true, agreedAt: consentTimestamp },
                        medicalData: { agreed: true, agreedAt: consentTimestamp }
                    },
                    lastLogin: firebase.firestore.FieldValue.serverTimestamp()
                }, { merge: true });

                batch.update(db.collection('workers').doc(workerDoc.id), {
                    uid: user.uid,
                    linkedAt: firebase.firestore.FieldValue.serverTimestamp()
                });

                await batch.commit();

                alert("근로자 회원가입이 완료되었습니다! 이제 로그인할 수 있습니다.");
                auth.signOut();
                if (signupModalOverlay) signupModalOverlay.style.display = 'none';
                if (loginModalOverlay) loginModalOverlay.style.display = 'flex';
                
            } catch (error) {
                console.error("Worker Signup Error:", error);
                alert(error.message || "회원가입 중 오류가 발생했습니다.");
            } finally {
                loader.style.display = 'none';
            }
        });
    }

    // --- Worker Signup Link Handler ---
    const signupLinkWorker = document.getElementById('signup-link-worker');
    if (signupLinkWorker) {
        signupLinkWorker.addEventListener('click', (e) => {
            e.preventDefault();
            if (loginModalOverlay) loginModalOverlay.style.display = 'none';
            if (signupModalOverlay) signupModalOverlay.style.display = 'flex';
        });
    }

    // --- Corporate Page Slideshow Logic 제거됨 ---

    // --- Corporate FAQ Accordion Logic ---
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            // Close all other items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Toggle current item
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });
});
