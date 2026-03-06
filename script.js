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
            'reality_overtime_p11': '이전까지의 약속들은 도착해서 마주한 현실과 전혀 일치하지 않았습니다.',
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
            'corp_sec4_side2_p3': '실시간 텍스트 소통 지원',
            'corp_sec4_side2_p4': '결과지 단순 번역 및 요약 파일 전달',
            'corp_sec4_side2_p5': '사후 관리(재검 안내) 소통 대행',
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
            'corp_sec6_title': 'Không thay đổi quy trình',
            'corp_sec6_subtitle': 'Tuân thủ luật, hiệu quả.',
            'corp_sec6_item1_title': 'Không vi phạm',
            'corp_sec6_item1_desc': 'Hỗ trợ hành chính.',
            'corp_sec6_item2_title': 'Không hợp đồng',
            'corp_sec6_item2_desc': 'Bệnh viện hiện có.',
            'corp_sec6_item3_title': 'Áp dụng ngay',
            'corp_sec6_item3_desc': 'Cải thiện từ ngày mai.',
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
            'corp_sec7_step4_title': '04. 당태 지원',
            'corp_sec7_step4_1': '沟通解决',
            'corp_sec7_step4_2': '完成管理',
            'corp_sec7_step5_title': '05. 結果 관리',
            'corp_sec7_step5_1': '周期指南',
            'corp_sec7_step5_2': '摘要翻譯',
            'corp_sec7_step5_3': '提交管理',
            'corp_sec7_step6_title': '06. 最终报告',
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
            'chatbot_q2': '2. Các bạn có hợp đồng với bệnh viện/ác sĩ không?',
            'chatbot_a2': 'Không. CHECKIT không có quan hệ hợp đồng với các bệnh viện cụ thể. Chúng tôi cung cấp thông tin khách quan để giúp bạn tìm thấy bệnh viện phù hợp nhất từ góc độ của mình.',
            'chatbot_q3': '3. Các bạn có thực hiện hành vi y tế hoặc giới thiệu bệnh nhân không?',
            'chatbot_a3': 'Không, CHECKIT tuân thủ luật y tế and không thực hiện bất kỳ hành vi y tế or giới thiệu nào. Chúng tôi tập trung vào \"quy trình phi y tế\" như đặt lịch, thông dịch and dịch kết quả.',
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
            'signup_welcome_message': 'Chào mừng đến với CHECKIT！',
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
            'stat_total_clients': 'Tổng khách hàng', 'stat_pending_leads': '미처리 문의'
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
            'reality_title': 'Nhưng thực tế là...', 'reality_item_title_1': '1. Không hỗ trợ ngôn ngữ',
            'reality_item_1_point_1': 'Nhân viên tránh cuộc gọi ngoại ngữ.',
            'reality_item_1_point_2': 'Thông báo đều bằng tiếng Hàn.',
            'reality_item_1_point_3': 'Không giải설명 thỏa đáng.',
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
            'package2_title': 'Zero-Mistake Plan',
            'package2_price': '₩650,000',
            'package2_includes': '(No-Confusion +)',
            'package2_feature1': 'Bảng câu hỏi nâng cao',
            'package2_feature2': 'Cảnh báo lỗi',
            'package2_feature3': '表格审核',
            'package2_feature4': '시간선 가이드',
            'package2_feature5': '대장내시경 준비 기본',
            'package2_feature6': '시간에 민감한 문제에 대한 우선 메시지',
            'package2_feature7': '결과 후속 조치',
            'package2_feature8': '누락 또는 지연된 서류에 대한 알림',
            'package2_feature9': '일정 변경 지원',
            'package2_recommend_desc': '실수를 최소화하고 중요한 알림을 놓치고 싶지 않은 분.',
            'package3_title': 'Total-Safe Plan',
            'package3_price': '₩800,000',
            'package3_includes': '(Zero-Mistake +)',
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
            'corp_sec4_side2_p3': '실시간 텍스트 소통 지원',
            'corp_sec4_side2_p4': '결과지 단순 번역 및 요약 파일 전달',
            'corp_sec4_side2_p5': '사후 관리(재검 안내) 소통 대행',
            'corp_sec5_title': 'Why Only CHECKIT?',
            'corp_sec5_subtitle': '我们打造外国员工管理标准. ',
            'corp_sec5_item1_title': '人才库',
            'corp_sec5_item1_desc': '了解医疗系统的经理. ',
            'corp_sec5_item2_title': '现场响应',
            'corp_sec5_item2_desc': '即时响应系统. ',
            'corp_sec5_item3_title': '独立性',
            'corp_sec5_item3_desc': '不隶属于医院. ',
            'corp_sec5_item4_title': '母语报告',
            'corp_sec5_item4_desc': '准确了解健康状况. ',
            'corp_sec6_title': 'Không thay đổi quy trình',
            'corp_sec6_subtitle': 'Tuân thủ luật, hiệu quả.',
            'corp_sec6_item1_title': 'Không vi phạm',
            'corp_sec6_item1_desc': 'Hỗ trợ hành chính.',
            'corp_sec6_item2_title': 'Không hợp đồng',
            'corp_sec6_item2_desc': 'Bệnh viện hiện có.',
            'corp_sec6_item3_title': 'Áp dụng ngay',
            'corp_sec6_item3_desc': 'Cải thiện từ ngày mai.',
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
            'corp_sec7_step4_title': '04. 당태 지원',
            'corp_sec7_step4_1': '沟通解决',
            'corp_sec7_step4_2': '完成管理',
            'corp_sec7_step5_title': '05. 結果 관리',
            'corp_sec7_step5_1': '周期指南',
            'corp_sec7_step5_2': '摘要翻譯',
            'corp_sec7_step5_3': '提交管理',
            'corp_sec7_step6_title': '06. 最终报告',
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
            'chatbot_a3': 'Không, CHECKIT tuân thủ luật y tế and không thực hiện bất kỳ hành vi y tế or giới thiệu nào. Chúng tôi tập trung vào \"quy trình phi y tế\" như đặt lịch, thông dịch and dịch kết quả.',
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
            'signup_welcome_message': 'Chào mừng đến với CHECKIT！',
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
            'stat_total_clients': 'Tổng khách hàng', 'stat_pending_leads': '미처리 문의'
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

    // This is the beginning of the Firebase-dependent block to be moved
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
        console.log("Firebase global object is available.");
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
            console.log("Firebase app initialized.");
        } else {
            console.log("Firebase app already initialized.");
        }
        const auth = firebase.auth(), db = firebase.firestore(), storage = firebase.storage();

        let platformSub = null;
        let chatUnsubscribe = null; // To store the Firestore unsubscribe function for chat

        // Utility function to display messages
        const displayMessage = (messageData, currentUserId) => {
            const messagesContainer = document.getElementById('user-chat-messages');
            if (!messagesContainer) return;

            const messageElement = document.createElement('div');
            messageElement.classList.add('chat-message');
            messageElement.classList.add(messageData.senderId === currentUserId ? 'sent' : 'received');

            const timestamp = messageData.timestamp ? new Date(messageData.timestamp.toDate()).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '';

            if (messageData.fileUrl) {
                const fileLink = document.createElement('a');
                fileLink.href = messageData.fileUrl;
                fileLink.target = '_blank';
                fileLink.textContent = messageData.fileName || '파일 다운로드';
                fileLink.classList.add('file-link');
                messageElement.appendChild(fileLink);
            } else {
                messageElement.textContent = messageData.text;
            }
            
            const timestampElement = document.createElement('span');
            timestampElement.classList.add('timestamp');
            timestampElement.textContent = timestamp;
            messageElement.appendChild(timestampElement);

            messagesContainer.appendChild(messageElement);
        };

        // Utility function to scroll chat to bottom
        const scrollToBottom = () => {
            const messagesContainer = document.getElementById('user-chat-messages');
            if (messagesContainer) {
                messagesContainer.scrollTop = messagesContainer.scrollHeight;
            }
        };

        const renderMyPage = async (user) => {
            try {
                const uSnap = await db.collection("users").doc(user.uid).get();
                const userData = uSnap.data() || {};

                if (userData.role === 'user') {
                    window.location.href = 'mypage_individual.html';
                    return;
                }
                if (userData.role === 'company_admin') {
                    window.location.href = 'mypage_corporate.html';
                    return;
                }
                if (userData.role === 'super_admin') {
                    // super_admin still uses the overlay for dashboard
                    const overlay = document.getElementById('mypage-overlay');
                    if(!overlay) { 
                        // If no overlay, redirect to a default admin view or home
                        window.location.href = 'index.html'; // Or a dedicated admin page
                        return;
                    }
                    overlay.style.display = 'flex';
                    document.body.classList.add('platform-view-active');
                    renderAdmin(user);
                    return;
                }

                // Fallback for any other role or if role is not explicitly set
                window.location.href = 'mypage_individual.html'; // Default redirect for authenticated users
                return;

            } catch (err) { 
                console.error("Error in renderMyPage:", err);
                alert(`Error loading My Page data: ${err.message}. Redirecting to home.`); // Informative alert
                // If reading the user data fails for any reason, redirect to home page
                window.location.href = 'index.html';
            }
        };

        const renderAdmin = (admin) => {
            const overlay = document.getElementById('mypage-overlay');
            overlay.innerHTML = `<div class="mypage-header"><h2>Admin Dashboard</h2><button id="close-mypage" class="lang-btn">Close</button></div>
                <div class="admin-grid"><div class="admin-sidebar" id="admin-user-list"></div><div class="admin-main" id="admin-stats"></div></div>`;
            document.getElementById('close-mypage').onclick = () => { overlay.style.display='none'; document.body.classList.remove('platform-view-active'); if(platformSub) platformSub(); };
        };

        const renderCorporate = (user, companyId) => {
            // This function is now deprecated in favor of mypage_corporate.html
            // Kept for potential future use or reference
            const overlay = document.getElementById('mypage-overlay');
            overlay.innerHTML = `<div class="mypage-header"><h2>Corporate: ${companyId}</h2><button id="close-mypage" class="lang-btn">Close</button></div>
                <div class="container" style="padding:40px 0;"><div id="corp-stats" class="corp-stats-grid"></div><div class="info-panel"><table class="admin-table"><thead><tr><th>Name</th><th>Status</th></tr></thead><tbody id="corp-list"></tbody></table></div></div>`;
            document.getElementById('close-mypage').onclick = () => { overlay.style.display='none'; document.body.classList.remove('platform-view-active'); if(platformSub) platformSub(); };
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
                            packageName: '기본 패키지', // Default package name for new users
                            packageItems: ['상담 지원', '예약 대행'], // Default package items
                            createdAt: firebase.firestore.FieldValue.serverTimestamp() 
                        }, { merge: true });
                    }
                    // Explicitly set role to 'user' if logged in via individual tab
                    if (loginType === 'user') {
                        await userRef.set({ role: 'user' }, { merge: true });
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

        const loadMyPageIndividualData = async (user, db, storage) => {
            if (!user) {
                window.location.href = 'index.html'; 
                return;
            }

            const nameElement = document.getElementById('user-profile-name');
            const emailElement = document.getElementById('user-profile-email');
            const packageNameElement = document.getElementById('user-package-name');
            const packageItemsElement = document.getElementById('user-package-items');
            const messagesContainer = document.getElementById('user-chat-messages');
            const messageInput = document.getElementById('chat-message-input');
            const sendButton = document.getElementById('chat-send-btn');
            const uploadButton = document.getElementById('chat-upload-btn');
            const fileInput = document.getElementById('chat-file-upload');

            

                                if (nameElement) nameElement.textContent = user.displayName || user.email;

                                if (emailElement) emailElement.textContent = user.email;

                                

                                try {

                                    const userRef = db.collection("users").doc(user.uid);

                                    const doc = await userRef.get();

                                    const userData = doc.data();
                    

                                    if (userData) {

                                        if (nameElement) nameElement.textContent = userData.fullName || user.displayName || user.email;

                                        

                                        const packageName = userData.packageName || "기본 패키지"; 

                                        const packageItems = userData.packageItems || ["기본 서비스 1", "기본 서비스 2"]; 

                    

                                        if (packageNameElement) packageNameElement.textContent = packageName;

                                        if (packageItemsElement) {

                                            packageItemsElement.innerHTML = '';

                                            packageItems.forEach(item => {

                                                const li = document.createElement('li');
