document.addEventListener('DOMContentLoaded', () => {

    // --- 1. FULL MULTILINGUAL DATA RESTORATION ---
    const translations = {
        ko: {
            'main_page_title': 'CHECKIT - 외국인 건강검진 예약',
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
            'process_title': 'CHECKIT 이용 과정',
            'process_step1_title': '상담 및 병원 선택 지원',
            'process_step1_desc_new': '원하는 검진 항목과 일정 상담 후, 조건에 맞는 최적의 병원 리스트를 제공하여 선택을 돕고 예약을 진행합니다.',
            'process_step2_title': '실시간 소통 지원',
            'process_step2_desc_new': '검진 당일, 병원 내에서 발생하는 모든 소통을 실시간으로 지원하여 불편함이 없도록 합니다.',
            'process_step3_title_new': '결과 번역 파일 전달',
            'process_step3_desc_new': '고객님이 전달해주신 결과지를 고객님의 언어로 단순 번역 및 요약하여, 이메일이나 메신저를 통해 파일로 전달합니다.',
            'testimonials_title': 'CHECKIT 이용 후기',
            'testimonials_subtitle': 'CHECKIT과 함께한 고객들의 목소리를 직접 들어보세요.',
            'testimonial1_text': '“한국에서 건강검진은 처음이라 막막했는데, CHECKIT 덕분에 병원 선택부터 예약, 검진 당일 소통까지 정말 편하게 진행했어요. 결과지도 모국어로 번역해주셔서 이해가 쉬웠습니다.”',
            'testimonial1_author': '안나, 유학생', 'testimonial1_type': '한국 거주 외국인',
            'testimonial2_text': '“부모님을 한국에 초청해 건강검진을 시켜드리고 싶었는데, 언어와 절차 문제로 걱정이 많았어요. CHECKIT 매니저님이 모든 과정을 알아서 처리해주셔서 정말 든든했습니다.”',
            'testimonial2_author': '데이비드, 해외 거주', 'testimonial2_type': '해외 거주 외국인 가족',
            'testimonial3_text': '“외국인 직원들의 단체 건강검진이 항상 골치 아픈 업무였는데, CHECKIT 덕분에 예약부터 결과 관리까지 정말 간편해졌습니다. 직원들의 만족도도 매우 높아요.”',
            'testimonial3_author': '박팀장', 'testimonial3_type': '기업 고객 담당자',
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
            'corporate_page_subtitle': '외국인 근로자의 건강을 체계적으로 관리하여,<br>기업의 생산성을 높이고 보건 관리 부담을 덜어드립니다.',
            'individual_page_title': '개인 고객 서비스',
            'individual_page_subtitle': 'CHECKIT은 한국에 거주하거나 방문하는 모든 외국인 개인이<br><br>언어의 장벽 없이 최상의 건강검진을 받을 수 있도록 돕습니다.',
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
            'chatbot_header': 'Check봇',
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
            'login_tab_user': '개인 고객',
            'login_tab_corp': '기업 관리자',
            'login_tab_master': '마스터',
            'login_key_placeholder': '보안 KEY 입력',
            'login_google': 'Google 로그인',
            'login_email_placeholder': '이메일',
            'login_pass_placeholder': '비밀번호',
            'login_success_msg': '로그인에 성공했습니다! 환영합니다.',
            'signup_title': '회원가입',
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
            'signup_privacy_content': '1. 수집 항목: 이름, 이메일, 휴대전화 번호, 생년월일\n2. 수집 목적: 회원 가입 및 서비스 제공, 연령 확인, 본인 식별, 상담 대응\n3. 보유 기간: 회원 탈퇴 시까지 (단, 관련 법령에 따른 보존 의무가 있는 경우 해당 법령에 따름)',
            'stat_total_clients': '전체 고객', 'stat_pending_leads': '미처리 문의'
        },
        en: {
            'main_page_title': 'CHECKIT - Health Check-up for Foreigners',
            'nav_home': 'Home', 'hero_cta': 'Apply Now', 'learn_more': 'Learn More',
            'platform_title': 'CHECKIT PLATFORM', 'platform_status_title': 'Service Status',
            'platform_close': 'Close', 'contact_success': 'Message Sent!',
            'nav_mypage': 'My Page', 'nav_login': 'Login', 'nav_logout': 'Logout',
            'hero_title': 'Health Check-ups for Foreigners,<br>Comfortable Without Language Barriers.',
            'hero_subtitle': 'From missing schedules to difficult instructions and results only in Korean.<br><br>CHECKIT solves all non-medical processes.',
            'service_for_title': 'Who is this for?',
            'individual_title': 'Individual',
            'individual_desc': 'Supporting foreigners living in or visiting Korea to receive health check-ups comfortably without language barriers.',
            'corporate_title': 'Corporate',
            'corporate_desc': 'Managing group health check-ups for foreign employees easily and efficiently, reducing the burden on corporate health management.',
            'why_us_title': 'Why Choose CHECKIT?',
            'why_us_subtitle_new': 'Despite high-quality medical services, foreigners face difficulties in "non-medical processes" such as booking and results.<br><br>CHECKIT fills this gap.',
            'why_us_feature1_title': 'Communication Experts',
            'why_us_feature1_desc': 'From hospital selection to result translation, we solve all communication issues caused by language and cultural barriers.',
            'why_us_feature2_title': '100% Customer Centric',
            'why_us_feature2_desc': 'Without hospital contracts, we propose the best options and assist the process solely from the customer\'s perspective.',
            'why_us_feature3_title': 'Non-Medical Focus',
            'why_us_feature3_desc': 'We handle all incidental procedures except medical acts, allowing customers to focus solely on their health check-up.',
            'why_us_feature4_title': 'Reasonable Cost',
            'why_us_feature4_desc': 'Operating independently without medical institution links, there are no unnecessary brokerage fees. Only service fees apply.',
            'process_title': 'Service Process',
            'process_step1_title': 'Consultation & Hospital Support',
            'process_step1_desc_new': 'After consulting on check-up items and schedules, we provide an optimal hospital list and proceed with the booking.',
            'process_step2_title': 'Real-time Support',
            'process_step2_desc_new': 'On the day of the check-up, we provide real-time communication support within the hospital to ensure no discomfort.',
            'process_step3_title_new': 'Result Translation Delivery',
            'process_step3_desc_new': 'We translate and summarize the results you provide into your language and deliver them via email or messenger.',
            'testimonials_title': 'Testimonials',
            'testimonials_subtitle': 'Listen to the voices of customers who used CHECKIT.',
            'testimonial1_text': '"It was my first time having a check-up in Korea, but thanks to CHECKIT, everything from hospital selection to booking was easy. The translated results were very helpful."',
            'testimonial1_author': 'Anna, Student', 'testimonial1_type': 'Foreigner in Korea',
            'testimonial2_text': '"I wanted my parents to have a check-up in Korea, but I was worried about language. The CHECKIT manager handled everything perfectly."',
            'testimonial2_author': 'David, Overseas', 'testimonial2_type': 'Family of Foreigner',
            'testimonial3_text': '"Managing foreign employees\' check-ups was always a headache, but CHECKIT made it simple. Employee satisfaction is very high."',
            'testimonial3_author': 'Manager Park', 'testimonial3_type': 'Corporate Client',
            'contact_title_new': 'Any Questions?',
            'contact_subtitle_new': 'CHECKIT\'s expert managers will respond quickly and kindly.',
            'contact_form_email_label': 'Email Address',
            'contact_form_email_placeholder': 'example@email.com',
            'contact_form_phone_label': 'Phone (Optional)',
            'contact_form_phone_placeholder': '010-0000-0000',
            'contact_form_message_label': 'Message',
            'contact_form_message_placeholder': 'Enter your inquiry here.',
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
            'chatbot_header': 'CheckBot',
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
            'login_tab_user': 'Individual',
            'login_tab_corp': 'Corporate Admin',
            'login_tab_master': 'Master',
            'login_key_placeholder': 'Security KEY',
            'login_google': 'Login with Google',
            'login_email_placeholder': 'Email',
            'login_pass_placeholder': 'Password',
            'login_btn': 'Login',
            'login_success_msg': 'Login successful! Welcome.',
            'signup_title': 'Sign Up',
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
            'signup_privacy_content': '1. Items: Name, Email, Phone, Date of Birth\n2. Purpose: Sign-up, Service provision, Age verification, Identity confirmation, Consultation\n3. Period: Until account deletion (unless legal retention obligations apply)',
            'stat_total_clients': 'Total Clients', 'stat_pending_leads': 'Pending Inquiries',
            'signup_dob_placeholder': 'Date of Birth'
        },
        cn: {
            'main_page_title': 'CHECKIT - 外国人健康检查预约',
            'nav_home': '首页', 'hero_cta': '立即申请', 'learn_more': '了解更多',
            'platform_title': 'CHECKIT 平台', 'platform_status_title': '我的服务状态',
            'platform_close': '关闭', 'contact_success': '咨询已成功受理！',
            'nav_mypage': '我的页面', 'nav_login': '登录', 'nav_logout': '登出',
            'hero_title': '面向外国人的健康检查,<br>无语言障碍，倍感舒适。',
            'hero_subtitle': '从日程遗漏、难以理解的检查指南到仅提供韩文的结果报告。<br><br>CHECKIT 解决所有非医疗过程。',
            'service_for_title': '这是为谁准备的服务？',
            'individual_title': '个人客户',
            'individual_desc': '支持居住或访问韩国的外国个人，在无语言障碍的情况下轻松进行健康检查',
            'corporate_title': '企业客户',
            'corporate_desc': '轻松高效地管理外国员工的团体健康检查，减轻企业健康管理负担。',
            'why_us_title': '为什么选择 CHECKIT？',
            'why_us_subtitle_new': '尽管医疗服务质量很高，但外国人在预约、挂号、结果确认等“非医疗过程”中仍面临困难。<br><br>CHECKIT 填补了这一空白。',
            'why_us_feature1_title': '沟通专家',
            'why_us_feature1_desc': '从医院选择到结果翻译，我们解决因语言和文化障碍引起的所有沟通问题。',
            'why_us_feature2_title': '100% 以客户为中心',
            'why_us_feature2_desc': '在不与医院签约的情况下，仅从客户的角度出发，建议并协助完成最佳选择。',
            'why_us_feature3_title': '专注于非医疗过程',
            'why_us_feature3_desc': '我们代办除医疗行为外的所有附带程序，让客户只专注于健康检查。',
            'why_us_feature4_title': '费用合理',
            'why_us_feature4_desc': '与医疗机构无关联独立运营，无不必要的中介费。仅收取纯服务费。',
            'process_title': '服务流程',
            'process_step1_title': '咨询与医院支持',
            'process_step1_desc_new': '在咨询检查项目和日程后，提供最佳医院列表并进行预约。',
            'process_step2_title': '实时沟通支持',
            'process_step2_desc_new': '检查当天，提供医院内发生的实时沟通支持，确保无不便。',
            'process_step3_title_new': '结果翻译文件交付',
            'process_step3_desc_new': '将您提供的韩文结果翻译并总结成您的母语，通过邮件或社交软件发送。',
            'testimonials_title': '客户评价',
            'testimonials_subtitle': '听听使用过 CHECKIT 的客户的声音。',
            'testimonial1_text': '“第一次在韩国体检，多亏了 CHECKIT，从预约到沟通都很顺利。结果也翻译成了母语。”',
            'testimonial1_author': 'Anna, 留学生', 'testimonial1_type': '在韩外国人',
            'testimonial2_text': '“想给父母预约体检，语言问题很头疼. CHECKIT 经理帮我处理了一切。”',
            'testimonial2_author': 'David, 海外', 'testimonial2_type': '海外客户',
            'testimonial3_text': '“外国员工体检一直很麻烦，多亏了 CHECKIT，变得非常简单。”',
            'testimonial3_author': '朴经理', 'testimonial3_type': '企业客户',
            'contact_title_new': '有什么疑问吗？',
            'contact_subtitle_new': 'CHECKIT 的专业经理将快速亲切地为您解答。',
            'contact_form_email_label': '电子邮箱',
            'contact_form_email_placeholder': 'example@email.com',
            'contact_form_phone_label': '联系电话（可选）',
            'contact_form_phone_placeholder': '010-0000-0000',
            'contact_form_message_label': '咨询内容',
            'contact_form_message_placeholder': '请输入您的咨询内容。',
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
            'chatbot_header': '机器人',
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
            'login_tab_user': '个人客户',
            'login_tab_corp': '企业管理员',
            'login_tab_master': '大師',
            'login_key_placeholder': '输入安全密钥',
            'login_google': '通过 Google 登录',
            'login_email_placeholder': '电子邮箱',
            'login_pass_placeholder': '密码',
            'login_btn': '登录',
            'login_success_msg': '登录成功！欢迎。',
            'signup_title': '注册',
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
            'signup_privacy_content': '1. 收集项目: 姓名、邮箱、电话、出生日期\n2. 收集目的: 会员注册、提供服务、年龄确认、身份识别、咨询回复\n3. 保有期间: 注销会员为止 (但法律规定需保留时，按相关法律执行)',
            'stat_total_clients': '总客户', 'stat_pending_leads': '待处理咨询'
        },
        vn: {
            'main_page_title': 'CHECKIT - Đặt lịch khám sức khỏe cho người nước ngoài',
            'nav_home': 'Trang chủ', 'hero_cta': 'Đăng ký ngay', 'learn_more': 'Xem thêm',
            'platform_title': 'Nền tảng CHECKIT', 'platform_status_title': 'Trạng thái dịch vụ',
            'platform_close': 'Đóng', 'contact_success': 'Đã gửi yêu cầu!',
            'nav_mypage': 'Trang của tôi', 'nav_login': 'Đăng nhập', 'nav_logout': 'Đăng xuất',
            'hero_title': 'Khám sức khỏe cho người nước ngoài,<br>Thoải mái không rào cản ngôn ngữ.',
            'hero_subtitle': 'Từ việc lỡ lịch trình đến hướng dẫn khó hiểu và kết quả chỉ bằng tiếng Hàn.<br><br>CHECKIT giải quyết tất cả quy trình phi y tế.',
            'service_for_title': 'Dịch vụ dành cho ai?',
            'individual_title': 'Cá nhân',
            'individual_desc': 'Hỗ trợ người nước ngoài sống hoặc đến thăm Hàn Quốc khám sức khỏe thoải mái không rào cản ngôn ngữ.',
            'corporate_title': 'Doanh nghiệp',
            'corporate_desc': 'Quản lý khám sức khỏe định kỳ cho nhân viên nước ngoài hiệu quả, giảm gánh nặng quản lý y tế.',
            'why_us_title': 'Tại sao chọn CHECKIT?',
            'why_us_subtitle_new': 'Bất chấp dịch vụ y tế chất lượng cao, người nước ngoài vẫn gặp khó khăn trong "quy trình phi y tế".<br><br>CHECKIT lấp thêm khoảng trống này.',
            'why_us_feature1_title': 'Chuyên gia giao tiếp',
            'why_us_feature1_desc': 'Từ chọn bệnh viện đến dịch kết quả, chúng tôi giải quyết mọi vấn đề giao tiếp.',
            'why_us_feature2_title': '100% hướng tới khách hàng',
            'why_us_feature2_desc': 'Chúng tôi đề xuất phương án tốt nhất chỉ từ góc độ khách hàng.',
            'why_us_feature3_title': 'Tập trung phi y tế',
            'why_us_feature3_desc': 'Chúng tôi xử lý mọi thủ tục phụ trừ hành vi y tế.',
            'why_us_feature4_title': 'Chi phí hợp lý',
            'why_us_feature4_desc': 'Hoạt động độc lập, không có phí môi giới. Chỉ áp dụng phí dịch vụ.',
            'process_title': 'Quy trình dịch vụ',
            'process_step1_title': 'Tư vấn & Hỗ trợ',
            'process_step1_desc_new': 'Sau khi tư vấn, chúng tôi cung cấp danh sách bệnh viện and đặt lịch.',
            'process_step2_title': 'Hỗ trợ thời gian thực',
            'process_step2_desc_new': 'Hỗ trợ giao tiếp thời gian thực trong bệnh viện vào ngày khám.',
            'process_step3_title_new': 'Giao kết quả dịch',
            'process_step3_desc_new': 'Chúng tôi dịch and tóm tắt kết quả sang ngôn ngữ của bạn.',
            'testimonials_title': 'Cảm nhận khách hàng',
            'testimonials_subtitle': 'Lắng nghe khách hàng của CHECKIT.',
            'testimonial1_text': '"Lần đầu khám tại Hàn, CHECKIT đã giúp tôi mọi thứ thật dễ dàng."',
            'testimonial1_author': 'Anna, Sinh viên', 'testimonial1_type': 'Người nước ngoài tại Hàn',
            'testimonial2_text': '"CHECKIT đã giúp bố mẹ tôi khám sức khỏe tại Hàn rất hoàn hảo."',
            'testimonial2_author': 'David, Hải ngoại', 'testimonial2_type': 'Khách hàng hải ngoại',
            'testimonial3_text': '"CHECKIT giúp việc quản lý khám cho nhân viên đơn giản hơn nhiều."',
            'testimonial3_author': 'Quản lý Park', 'testimonial3_type': 'Doanh nghiệp',
            'contact_title_new': 'Bạn có thắc mắc?',
            'contact_subtitle_new': 'Quản lý của CHECKIT sẽ phản hồi nhanh chóng.',
            'contact_form_email_label': 'Địa chỉ Email',
            'contact_form_email_placeholder': 'example@email.com',
            'contact_form_phone_label': 'Số điện thoại',
            'contact_form_phone_placeholder': '010-0000-0000',
            'contact_form_message_label': 'Nội dung',
            'contact_form_message_placeholder': 'Nhập nội dung thắc mắc.',
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
            'chatbot_header': 'CheckBot',
            'chatbot_placeholder': 'Nhập tin nhắn...',
            'chatbot_welcome': 'Xin chào! Đây là chatbot hỗ trợ của CHECKIT. Tôi có thể giúp gì cho bạn?',
            'chatbot_q1': '1. Làm thế nào để đặt lịch?',
            'chatbot_a1': 'Quản lý tận tâm của CHECKIT sẽ giúp bạn. Hãy cho chúng tôi biết các hạng mục khám and lịch trình mong muốn, chúng tôi sẽ cung cấp danh sách bệnh viện phù hợp and xử lý việc đặt lịch. Nhấn \'Đăng ký ngay\' để gửi yêu cầu!',
            'chatbot_q2': '2. Các bạn có hợp đồng với bệnh viện/bác sĩ không?',
            'chatbot_a2': 'Không. CHECKIT không có quan hệ hợp đồng với các bệnh viện cụ thể. Chúng tôi cung cấp thông tin khách quan để giúp bạn tìm thấy bệnh viện phù hợp nhất từ góc độ của mình.',
            'chatbot_q3': '3. Các bạn có thực hiện hành vi y tế hoặc giới thiệu bệnh nhân không?',
            'chatbot_a3': 'Không, CHECKIT tuân thủ luật y tế and không thực hiện bất kỳ hành vi y tế or giới thiệu nào. Chúng tôi tập trung vào "quy trình phi y tế" như đặt lịch, thông dịch and dịch kết quả.',
            'chatbot_q4': '4. Tôi có thể nhận được sự giúp đỡ gì vào ngày khám?',
            'chatbot_a4': 'Vào ngày khám, quản lý CheckBot của chúng tôi sẽ đồng hành cùng bạn để bạn không cảm thấy cô đơn do rào cản ngôn ngữ. Chúng tôi hỗ trợ tất cả quy trình giao tiếp trong bệnh viện theo thời gian thực.',
            'chatbot_q5': '5. Kết quả được giao như thế nào?',
            'chatbot_a5': 'Hãy gửi cho chúng tôi kết quả tiếng Hàn bạn nhận được từ bệnh viện, chúng tôi sẽ dịch and tóm tắt nội dung cốt lõi sang ngôn ngữ của bạn. Chúng tôi không cung cấp ý kiến y khoa.',
            'chatbot_greeting_reply': 'Xin chào! Rất vui được gặp bạn. Tôi có thể giúp gì cho bạn?',
            'chatbot_fallback_reply': 'Cảm ơn sự tư vấn quý báu của bạn! Nội dung bạn nhập sẽ được quản lý phụ trách kiểm tra and phản hồi sớm. Để được phản hồi chính xác hơn, vui lòng để lại lời nhắn qua mục \'Liên hệ\' ở cuối trang chủ.',
            'login_title': 'CHECKIT ĐĂNG NHẬP',
            'login_tab_user': 'Cá nhân',
            'login_tab_corp': 'Quản lý doanh nghiệp',
            'login_tab_master': 'Bậc thầy',
            'login_key_placeholder': 'Nhập mã bảo mật',
            'login_google': 'Đăng nhập bằng Google',
            'login_email_placeholder': 'Email',
            'login_pass_placeholder': 'Mật khẩu',
            'login_btn': 'Đăng nhập',
            'login_success_msg': 'Đăng nhập thành công! Chào mừng.',
            'signup_title': 'Đăng ký',
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
            'signup_privacy_content': '1. Các mục: Tên, Email, Số điện thoại, Ngày sinh\n2. Mục đích: Đăng ký, Cung cấp dịch vụ, Xác minh tuổi, Xác nhận danh tính, Tư vấn\n3. Thời hạn: Cho đến khi hủy tài khoản (trừ khi có nghĩa vụ lưu giữ theo quy định pháp luật)',
            'stat_total_clients': 'Tổng khách hàng', 'stat_pending_leads': 'Thắc mắc chưa xử lý',
            'signup_dob_placeholder': 'Ngày sinh'
        }
    };

    let currentLang = 'ko';
    const switchLanguage = (newLang) => {
        currentLang = newLang;
        document.documentElement.lang = newLang;
        const data = translations[newLang] || translations['ko'];
        
        // Update all elements with data-lang-key
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

        // Update active state of buttons
        document.querySelectorAll('.lang-btn, .chatbot-lang-btn').forEach(btn => {
            if (btn.getAttribute('data-lang') === newLang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        const authBtn = document.getElementById('platform-auth-btn');
        if (authBtn) {
            const user = firebase.auth().currentUser;
            authBtn.textContent = user ? (translations[currentLang]?.['nav_mypage'] || translations['ko']['nav_mypage']) : (translations[currentLang]?.['nav_login'] || translations['ko']['nav_login']);
        }

        // Update suggested questions if chatbot is initialized
        renderSuggestedQuestions();
    };
    window.changeLanguage = switchLanguage;

    // Attach click listeners to language buttons
    document.addEventListener('click', (e) => {
        const langBtn = e.target.closest('.lang-btn, .chatbot-lang-btn');
        if (langBtn && langBtn.hasAttribute('data-lang')) {
            const newLang = langBtn.getAttribute('data-lang');
            switchLanguage(newLang);
        }
    });

    // --- Chatbot Logic ---
    const chatbotContainer = document.getElementById('chatbot-container');
    const openChatbotBtn = document.getElementById('open-chatbot');
    const closeChatbotBtn = document.getElementById('close-chatbot');
    const chatbotMessages = document.getElementById('chatbot-messages');
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotSend = document.getElementById('chatbot-send');
    const suggestedContainer = document.getElementById('chatbot-suggested-questions');

    function renderSuggestedQuestions() {
        if (!suggestedContainer) return;
        const data = translations[currentLang] || translations['ko'];
        suggestedContainer.innerHTML = '';
        for (let i = 1; i <= 5; i++) {
            const btn = document.createElement('button');
            btn.className = 'suggested-question-btn';
            btn.textContent = data[`chatbot_q${i}`];
            btn.onclick = () => handleUserInput(data[`chatbot_q${i}`], data[`chatbot_a${i}`]);
            suggestedContainer.appendChild(btn);
        }
    }

    const greetingKeywords = {
        ko: ['안녕', '반가', '하이', '헬로'],
        en: ['hi', 'hello', 'hey', 'greetings'],
        cn: ['你好', '您好'],
        vn: ['xin chào', 'chào']
    };

    async function handleUserInput(userInput, presetAnswer = null) {
        addUserMessage(userInput);
        
        // Show loading indicator
        const loadingMsg = document.createElement('div');
        loadingMsg.className = 'message bot loading-indicator';
        loadingMsg.innerHTML = '<span></span><span></span><span></span>';
        chatbotMessages.appendChild(loadingMsg);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

        // Simulate delay
        setTimeout(() => {
            loadingMsg.remove();
            const data = translations[currentLang] || translations['ko'];
            if (presetAnswer) {
                addBotMessage(presetAnswer);
            } else {
                const lowerInput = userInput.toLowerCase();
                const keywords = greetingKeywords[currentLang] || greetingKeywords['ko'];
                const isGreeting = keywords.some(k => lowerInput.includes(k));

                if (isGreeting) {
                    addBotMessage(data['chatbot_greeting_reply']);
                } else {
                    addBotMessage(data['chatbot_fallback_reply']);
                }
            }
        }, 1000);
    }

    function addUserMessage(text) {
        if (!chatbotMessages) return;
        const msg = document.createElement('div');
        msg.className = 'message user';
        msg.innerHTML = text;
        chatbotMessages.appendChild(msg);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    if (openChatbotBtn && chatbotContainer && closeChatbotBtn) {
        openChatbotBtn.addEventListener('click', () => {
            chatbotContainer.classList.add('show');
            document.body.classList.add('chatbot-open');
            if (chatbotMessages && chatbotMessages.children.length === 0) {
                addBotMessage(getWelcomeMessage(currentLang), 'chatbot_welcome');
                renderSuggestedQuestions();
            }
        });

        closeChatbotBtn.addEventListener('click', () => {
            chatbotContainer.classList.remove('show');
            document.body.classList.remove('chatbot-open');
        });
    }

    if (chatbotSend && chatbotInput) {
        chatbotSend.addEventListener('click', () => {
            const text = chatbotInput.value.trim();
            if (text) {
                handleUserInput(text);
                chatbotInput.value = '';
            }
        });
        chatbotInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const text = chatbotInput.value.trim();
                if (text) {
                    handleUserInput(text);
                    chatbotInput.value = '';
                }
            }
        });
    }

    function addBotMessage(text, langKey = null) {
        if (!chatbotMessages) return;
        const msg = document.createElement('div');
        msg.className = 'message bot';
        if (langKey) {
            msg.setAttribute('data-lang-key', langKey);
        }
        msg.innerHTML = text;
        chatbotMessages.appendChild(msg);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    function getWelcomeMessage(lang) {
        const data = translations[lang] || translations['ko'];
        return data['chatbot_welcome'];
    }

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
            let overlay = document.getElementById('mypage-overlay');
            if (!overlay) { // If overlay doesn't exist, create it dynamically to preserve main content
                overlay = document.createElement('div');
                overlay.id = 'mypage-overlay';
                overlay.className = 'mypage-overlay';
                document.body.appendChild(overlay);
            }
            
            // Restore premium design for Individual Page - My Page Content ONLY
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
            
            overlay.style.display = 'flex'; // Show overlay
            document.body.classList.add('platform-view-active'); // Lock body scroll

            document.getElementById('close-mypage').onclick = () => { 
                overlay.style.display='none'; 
                document.body.classList.remove('platform-view-active'); 
                if(platformSub) platformSub(); 
            };
            
            platformSub = db.collection("user_process").doc(user.uid).onSnapshot(doc => {
                const data = doc.data() || { steps: [
                    { title: 'Applied', status: 'active', icon: 'fas fa-file-signature', description: 'Your inquiry has been received.' },
                    { title: 'Booking', status: 'pending', icon: 'fas fa-calendar-check', description: 'Matching with the best hospital.' },
                    { title: 'Check-up', status: 'pending', icon: 'fas fa-hospital-user', description: 'Support on the day of visit.' },
                    { title: 'Result', status: 'pending', icon: 'fas fa-poll-h', description: 'Translating and summarizing results.' }
                ]};
                const timeline = document.getElementById('u-timeline');
                if(timeline) timeline.innerHTML = data.steps.map(s => `<div class="status-step ${s.status}"><i class="${s.icon}"></i><span>${s.title}</span></div>`).join('');
                
                const statusContent = document.getElementById('u-status-content');
                if(statusContent) {
                    const active = data.steps.find(s => s.status === 'active') || data.steps[0];
                    statusContent.innerHTML = `
                        <div style="padding:25px; background:linear-gradient(135deg, #fff 0%, #f9f9f9 100%); border-radius:15px; border-left:6px solid var(--primary-color); box-shadow:var(--shadow-sm);">
                            <h4 style="color:var(--primary-dark); font-size:1.2rem; margin-bottom:10px;">${active.title}</h4>
                            <p style="color:var(--text-color); opacity:0.8;">${active.description || '진행 상황을 확인 중입니다.'}</p>
                        </div>`;
                }
            });
        };

        const showLoginModal = () => {
            if(document.getElementById('login-modal-overlay')) return;
            const data = translations[currentLang] || translations['ko'];
            let currentView = 'login'; // 'login', 'signup', 'find'
            let selectedType = 'user'; // 'user', 'corp', 'master'

            const createModalContent = () => {
                const d = translations[currentLang] || translations['ko'];
                let viewTitle = d['login_title'];
                if(currentView === 'signup') viewTitle = d['signup_title'];
                if(currentView === 'find') viewTitle = d['find_pass_title'];

                return `
                <div class="login-modal-box">
                    <button id="close-login-modal" style="position:absolute; top:15px; right:20px; background:none; border:none; font-size:24px; cursor:pointer;">&times;</button>
                    <h2 class="modal-logo">${viewTitle}</h2>
                    
                    ${currentView === 'login' ? `
                    <div class="platform-tabs" style="justify-content:center; margin-bottom:20px;">
                        <div class="p-tab ${selectedType === 'user' ? 'active' : ''}" id="tab-type-user" data-lang-key="login_tab_user">${d['login_tab_user']}</div>
                        <div class="p-tab ${selectedType === 'corp' ? 'active' : ''}" id="tab-type-corp" data-lang-key="login_tab_corp">${d['login_tab_corp']}</div>
                        <div class="p-tab ${selectedType === 'master' ? 'active' : ''}" id="tab-type-master" data-lang-key="login_tab_master">${d['login_tab_master']}</div>
                    </div>` : ''}

                    <div id="key-field-container" style="display:${(currentView === 'login' && selectedType !== 'user') ? 'block' : 'none'}; margin-bottom:20px;">
                        <input type="text" id="global-admin-key" placeholder="${d['login_key_placeholder']}" style="padding:12px; border:2px solid var(--primary-color); border-radius:10px; width:100%; text-align:center;">
                    </div>

                    <div style="display:flex; flex-direction:column; gap:12px;">
                        ${currentView === 'signup' ? `
                        <input type="text" id="signup-name" placeholder="${d['signup_name_placeholder']}" style="padding:12px; border:1px solid #ddd; border-radius:10px;">
                        <input type="date" id="signup-dob" placeholder="${d['signup_dob_placeholder']}" max="${new Date().toISOString().split('T')[0]}" style="padding:12px; border:1px solid #ddd; border-radius:10px;">
                        <input type="email" id="auth-email" placeholder="${d['login_email_placeholder']}" style="padding:12px; border:1px solid #ddd; border-radius:10px;">
                        <input type="password" id="auth-pass" placeholder="${d['login_pass_placeholder']}" style="padding:12px; border:1px solid #ddd; border-radius:10px;">
                        <div class="signup-privacy-box" style="background:#f9f9f9; padding:10px; border-radius:10px; border:1px solid #eee; font-size:0.75rem; text-align:left;">
                            <h4 style="margin-bottom:5px; font-size:0.8rem;">${d['signup_privacy_title']}</h4>
                            <div style="height:60px; overflow-y:auto; color:#666; margin-bottom:10px; white-space:pre-line;">${d['signup_privacy_content']}</div>
                            <label style="display:flex; align-items:center; gap:8px; cursor:pointer;">
                                <input type="checkbox" id="privacy-agree"> <span>${d['signup_privacy_agree']}</span>
                            </label>
                        </div>
                        ` : `
                        <input type="email" id="auth-email" placeholder="${d['login_email_placeholder']}" style="padding:12px; border:1px solid #ddd; border-radius:10px;">
                        ${currentView !== 'find' ? `<input type="password" id="auth-pass" placeholder="${d['login_pass_placeholder']}" style="padding:12px; border:1px solid #ddd; border-radius:10px;">` : ''}
                        `}
                        
                        <button id="btn-main-action" class="btn-auth btn-primary">
                            ${currentView === 'login' ? d['login_btn'] : (currentView === 'signup' ? d['signup_btn'] : d['find_pass_btn'])}
                        </button>

                        <button id="btn-google-auth" class="btn-auth btn-google">${d['login_google']}</button>

                        ${currentView === 'login' ? `
                        <hr style="border:none; border-top:1px solid #eee; margin:10px 0;">
                        <div style="display:flex; justify-content:space-between; font-size:0.85rem;">
                            <span id="go-signup" style="color:var(--primary-color); cursor:pointer; font-weight:600;">${d['switch_to_signup']}</span>
                            <span id="go-find" style="color:#888; cursor:pointer;">${d['switch_to_find']}</span>
                        </div>` : `
                        <div style="text-align:center; font-size:0.85rem; margin-top:10px;">
                            <span id="go-login" style="color:var(--primary-color); cursor:pointer; font-weight:600;">${d['switch_to_login']}</span>
                        </div>`}
                    </div>
                </div>`;
            };

            const overlay = document.createElement('div');
            overlay.id = 'login-modal-overlay';
            overlay.style.display = 'flex';
            document.body.appendChild(overlay);

            const renderModal = () => {
                overlay.innerHTML = createModalContent();
                attachEvents();
            };

            const attachEvents = () => {
                const d = translations[currentLang] || translations['ko'];
                document.getElementById('close-login-modal').onclick = () => overlay.remove();
                
                if(currentView === 'login') {
                    document.getElementById('tab-type-user').onclick = () => { selectedType = 'user'; renderModal(); };
                    document.getElementById('tab-type-corp').onclick = () => { selectedType = 'corp'; renderModal(); };
                    document.getElementById('tab-type-master').onclick = () => { selectedType = 'master'; renderModal(); };
                    document.getElementById('go-signup').onclick = () => { currentView = 'signup'; renderModal(); };
                    document.getElementById('go-find').onclick = () => { currentView = 'find'; renderModal(); };
                } else {
                    document.getElementById('go-login').onclick = () => { currentView = 'login'; renderModal(); };
                }

                document.getElementById('btn-google-auth').onclick = async () => {
                    const privacyAgree = document.getElementById('privacy-agree');
                    if (currentView === 'signup' && privacyAgree && !privacyAgree.checked) {
                        alert(d['signup_privacy_error']);
                        return;
                    }
                    try { 
                        const res = await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()); 
                        handleSuccess(res.user); 
                    } 
                    catch(e) { alert(e.message); }
                };

                document.getElementById('btn-main-action').onclick = async () => {
                    const btnMainAction = document.getElementById('btn-main-action');
                    btnMainAction.disabled = true; // Disable button immediately
                    const email = document.getElementById('auth-email').value.trim();
                    const pass = document.getElementById('auth-pass')?.value;
                    const name = document.getElementById('signup-name')?.value;
                    const key = document.getElementById('global-admin-key')?.value.trim();
                    const privacyAgree = document.getElementById('privacy-agree');

                    try {
                        if (currentView === 'login') {
                            const res = await auth.signInWithEmailAndPassword(email, pass);
                            handleSuccess(res.user, key);
                        } else if (currentView === 'signup') {
                            if(!privacyAgree.checked) { alert(d['signup_privacy_error']); return; }

                            const res = await auth.createUserWithEmailAndPassword(email, pass);
                            const dob = document.getElementById('signup-dob')?.value;
                            // Temporarily comment out Firestore set to debug silent failure
                            // await db.collection("users").doc(res.user.uid).set({ fullName: name, dob: dob, role: 'user', createdAt: firebase.firestore.FieldValue.serverTimestamp() });
                            alert(d['signup_welcome_message']);
                            overlay.remove(); // Close the current (signup) modal
                            currentView = 'login';
                            showLoginModal(); // Open a *new* modal, showing login form
                        } else if (currentView === 'find') {
                            await auth.sendPasswordResetEmail(email);
                            alert(d['find_pass_success']);
                            currentView = 'login';
                            renderModal();
                        }
                    } catch(e) {

                        alert(e.message);
                    } finally {
                        btnMainAction.disabled = false; // Re-enable button
                    }
                };
            };

            const handleSuccess = async (user, key = "") => {
                if (!user) return;
                const loginType = selectedType;
                
                // 1. Remove modal IMMEDIATELY
                overlay.remove(); 



                // 3. Process DB updates in background
                try {
                    const userRef = db.collection("users").doc(user.uid);
                    const doc = await userRef.get();
                    
                    if (!doc.exists) {
                        // New User (Sign-up via Google or missing profile)
                        await userRef.set({ 
                            fullName: user.displayName || "User", 
                            email: user.email,
                            role: 'user', 
                            createdAt: firebase.firestore.FieldValue.serverTimestamp() 
                        }, { merge: true });
                    }

                    if (loginType === 'master' && key === "CHECKIT_MASTER_2026") {
                        await userRef.set({ role: 'super_admin' }, { merge: true });
                    } else if (loginType === 'corp' && key.startsWith("COMP_")) {
                        await userRef.set({ role: 'company_admin', companyId: key.replace("COMP_", "") }, { merge: true });
                    }
                } catch (dbErr) { console.error("Background DB Error:", dbErr); }
                
                renderMyPage(user);
            };

            renderModal();
        };

        const initAuthNav = () => {
            auth.onAuthStateChanged(user => {
                const nav = document.querySelector('#language-switcher');
                let btn = document.getElementById('platform-auth-btn') || document.createElement('button');
                if(!btn.id) { btn.id='platform-auth-btn'; btn.className='lang-btn auth-main-btn'; nav.appendChild(btn); }
                // Instead of setting text directly, call switchLanguage to ensure consistent updates
                switchLanguage(currentLang); 
                btn.onclick = () => user ? renderMyPage(user) : showLoginModal();
                if(user && !document.getElementById('logout-btn')) {
                    const lo = document.createElement('button'); lo.id='logout-btn'; lo.className='lang-btn logout-btn'; lo.textContent=translations[currentLang]?.['nav_logout'] || translations['ko']['nav_logout'];
                    lo.onclick = () => auth.signOut().then(() => location.reload()); nav.appendChild(lo);
                }
            });
        };
        initAuthNav();
    }
    switchLanguage('ko');
});