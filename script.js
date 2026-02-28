document.addEventListener('DOMContentLoaded', () => {

    // --- 1. FULL, CORRECT & FINAL TRANSLATION DATA ---
    const translations = {
        ko: {
            'nav_home': '홈',
            'hero_title': '외국인을 위한 건강검진,<br>언어의 장벽 없이 편안하게.',
            'hero_subtitle': '일정 누락, 이해하기 어려운 검진 안내, 한국어로만 제공되는 결과지까지.<br>CHECKIT이 모든 비의료 과정을 해결합니다.',
            'hero_cta': '지금 바로 상담 신청',
            'service_for_title': '누구를 위한 서비스인가요?',
            'individual_title': '개인 고객',
            'individual_desc': '한국 거주/방문 외국인 개인이 언어 장벽 없이<br>편안하게 건강검진을 받을 수 있도록 지원합니다.',
            'corporate_title': '기업 고객',
            'corporate_desc': '외국인 근로자의 단체 건강검진을 쉽고 효율적으로 관리하여,<br>기업의 보건 관리 부담을 줄여드립니다.',
            'learn_more': '더 알아보기',
            'why_us_title': '왜 CHECKIT을 선택해야 할까요?',
            'why_us_subtitle_new': '의료 서비스의 높은 질에도 불구하고, 외국인들은 예약, 접수, 결과 확인 등 \'비의료 과정\\'에서 어려움을 겪습니다.<br>CHECKIT은 바로 이 공백을 채웁니다.',
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
            'testimonials_title': '생생한 고객 후기',
            'testimonials_subtitle': 'CHECKIT과 함께한 고객들의 목소리를 직접 들어보세요.',
            'testimonial1_text': '“한국에서 건강검진은 처음이라 막막했는데, CHECKIT 덕분에 병원 선택부터 예약, 검진 당일 소통까지 정말 편하게 진행했어요. 결과지도 모국어로 번역해주셔서 이해가 쉬웠습니다.”',
            'testimonial1_author': '안나, 유학생',
            'testimonial1_type': '한국 거주 외국인',
            'testimonial2_text': '“부모님을 한국에 초청해 건강검진을 시켜드리고 싶었는데, 언어와 절차 문제로 걱정이 많았어요. CHECKIT 매니저님이 모든 과정을 알아서 처리해주셔서 정말 든든했습니다.”',
            'testimonial2_author': '데이비드, 해외 거주',
            'testimonial2_type': '해외 거주 외국인 가족',
            'testimonial3_text': '“외국인 직원들의 단체 건강검진이 항상 골치 아픈 업무였는데, CHECKIT 덕분에 예약부터 결과 관리까지 정말 간편해졌습니다. 직원들의 만족도도 매우 높아요.”',
            'testimonial3_author': '박팀장',
            'testimonial3_type': '기업 고객 담당자',
            'contact_title_new': '궁금한 점이 있으신가요?',
            'contact_subtitle_new': 'CHECKIT의 전문 매니저가 신속하고 친절하게 답변해 드립니다.',
            'contact_form_email_label': '이메일 주소',
            'contact_form_email_placeholder': '예: example@checkit.com',
            'contact_form_phone_label': '연락처 (선택사항)',
            'contact_form_phone_placeholder': '예: 010-1234-5678',
            'contact_form_message_label': '문의 내용',
            'contact_form_message_placeholder': '궁금한 점을 자세히 적어주세요.',
            'contact_form_submit_button': '문의하기',
            'individual_page_title': '개인 고객 맞춤 서비스',
            'individual_page_subtitle': 'CHECKIT은 한국에 거주하거나 방문하는 모든 외국인 개인이 언어의 장벽 없이 최상의 건강검진을 받을 수 있도록 돕습니다.',
            'solution_title': 'CHECKIT의 솔루션',
            'solution_subtitle': '불편함, 외로움, 불안함 없이 건강검진의 전 과정에 온전히 집중할 수 있도록 CHECKIT이 함께합니다.',
            'individual_service1_title': '1:1 전담 매니저',
            'individual_service1_desc': '상담 요청 즉시, 고객님의 언어를 구사하는 전담 매니저가 배정됩니다. 병원 선택, 예약, 일정 조율까지 모든 과정을 책임지고 관리합니다.',
            'individual_service2_title_new': '실시간 소통 지원',
            'individual_service2_desc_new': '검진 당일, 물리적 동행 대신 메신저를 통해 병원 내 접수, 문진, 수납 등 모든 의사소통 과정을 실시간으로 지원하여 불편함이나 외로움 없이 검진에만 집중하도록 돕습니다.',
            'individual_service3_title_new': '결과지 번역 · 요약',
            'individual_service3_desc_new': '고객님께서 병원으로부터 수령한 한국어 결과지를 사진이나 파일로 전달해주시면, 모국어로 핵심 내용을 단순 번역 및 요약하여 전달해 드립니다. (의료적 소견이나 상세 설명은 미포함)',
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
            'reality_title': '하지만 현실은...',
            'reality_item_title_1': '다국어 지원 부재',
            'reality_item_1_point_1': '직원들은 외국어를 못해서 전화를 피합니다.',
            'reality_item_1_point_2': '안내, 준비 가이드, 알림이 모두 한국어입니다.',
            'reality_item_1_point_3': '민감한 질문(생리, 수술, 증상)에 대해 제대로 된 설명을 받지 못합니다.',
            'reality_item_1_point_4': '검진 중 모든 안내 방송은 한국어로만 나옵니다.',
            'reality_item_title_2': '혼란스러운 과정',
            'reality_item_2_point_1': '검진 패키지에 무엇이 포함되어 있는지조차 모릅니다.',
            'reality_item_2_point_2': '준비 물품이 사용법에 대한 설명 없이 도착합니다.',
            'reality_item_2_point_3': '대장내시경 약은 한국어로만 설명되어 → 검사에 실패합니다.',
            'reality_item_2_point_4': '사전 문진표는 길고 복잡하며 전부 한국어입니다.',
            'reality_item_title_3': '불확실한 일정',
            'reality_item_3_point_1': '예약을 잡는 데만 2-3일이 걸립니다.',
            'reality_item_3_point_2': '직원마다 다른 답변을 하며 — 아무도 책임지지 않습니다.',
            'reality_item_3_point_3': '한국 전화번호가 없으면 → 알림이나 준비 안내를 받지 못합니다.',
            'reality_item_3_point_4': '해외 시차로 인해 → 통화가 실패하고 예약이 지연됩니다.',
            'reality_item_title_4': '지연된 결과 및 책임 부재',
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
            'reality_overtime_p10': '그 순간, 저는 완전히 혼자라는 것을 깨달았습니다.',
            'reality_overtime_p11': '결과도 받지 못한 채 한국을 떠났습니다. 며칠이 몇 주가 되었습니다. 후속 조치도, 명확한 답변도 없었습니다. 책임감을 느끼는 사람도 아무도 없었습니다. 그리고 마침내 중요한 것을 깨달았습니다. 오기 전에 들었던 약속들은 도착해서 마주한 현실과 전혀 일치하지 않았다는 것을요.',
            'packages_title': '우리의 패키지',
            'packages_subtitle': '귀하의 필요에 맞는 완벽한 플랜을 선택하세요.',
            'package_includes': '포함 내역',
            'package2_includes': '(NO-CONFUSION PLAN 모두 포함 +)',
            'package3_includes': '(ZERO-MISTAKE PLAN 모두 포함 +)',
            'package_recommend_title': '추천 대상',
            'package1_title': 'No-Confusion Plan',
            'package1_price': '₩500,000',
            'package1_feature1': '중립적인 병원 목록 (추천 없음)',
            'package1_feature2': '프로그램 및 가격 구조 (공식 정보 번역만 제공)',
            'package1_feature3': '단계별 예약 가이드',
            'package1_feature4': '모든 병원 서류의 영어 번역',
            'package1_feature5': '필수 문진표 가이드 (간단, 실수 방지)',
            'package1_feature6': '필수 검진 전 안내 (금식 및 기본 준비)',
            'package1_feature7': '검진 당일 준비물 안내',
            'package1_feature8': '이메일을 통한 안전한 결과 전달',
            'package1_feature9': '결과 지연 1회 확인 포함',
            'package1_recommend_desc': '명확한 정보와 함께 스스로 과정을 관리하고 싶은 분.',
            'package2_title': 'Zero-Mistake Plan',
            'package2_price': '₩650,000',
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
            'package3_feature11': '결果 구성 (비의료적, 내용 구성만)',
            'package3_feature12': '병원 소통용 템플릿',
            'package3_feature13': '일정 변경 지원 (최대 3회 포함)',
            'package3_recommend_desc': '가장 안전하고 완벽하게 관리받고 싶은 분.',
            'options_title_new': '옵션 서비스',
            'option_card_title_1': '비의료적 가이드',
            'option_card_price_1': '₩82,800',
            'option_card_desc_1': '검사 항목, 결과 구조 및 검사 후 관리에 대한 비의료적 가이드입니다.',
            'option_card_title_2': '병원 동선 안내',
            'option_card_price_2': '₩27,600',
            'option_card_desc_2': '정확한 병원 내 동선과 이동 흐름을 보여줍니다. 첫 방문객에게 유용합니다.',
            'option_card_title_3': '예약 변경 옵션',
            'option_card_desc_3': '예약 후 예약을 변경해야 하는 고객을 위한 옵션입니다.',
            'option_card_3_item_1': '1회 변경:',
            'option_card_3_item_2': '2회 패키지:',
            'option_card_3_item_3': '무제한 변경:',
            'option_card_title_4': '영문 영수증 요청',
            'option_card_price_4': '₩27,600',
            'option_card_desc_4': '보험 목적에 적합한 영문 영수증을 대신 요청합니다.',
            'option_card_title_5': 'CD 결과 요청',
            'option_card_price_5': '₩27,600',
            'option_card_desc_5': '검사 CD 또는 추가 영상 파일을 대신 요청합니다.',
            'option_card_title_6': '긴급 결과 후속 조치',
            'option_card_price_6': '₩27,600',
            'option_card_desc_6': '병원에 긴급 후속 조치 메시지를 한 번 보냅니다.',
            'chatbot_header': 'Check봇',
            'chatbot_placeholder': '메시지를 입력하세요...',
            'chatbot_greeting': '안녕하세요! CHECKIT에 대해 궁금한 점이 있으신가요? 아래에서 질문을 선택하거나 직접 입력해주세요.',
            'greeting_response': '안녕하세요! 만나서 반가워요. CHECKIT에 대해 궁금한 점이 있으시면 아래 질문을 선택하거나 직접 물어보세요.',
            'q1': '예약은 어떻게 하나요?',
            'a1': 'CHECKIT 전담 매니저가 도와드립니다. 원하시는 검진 항목과 일정을 알려주시면, 조건에 맞는 병원 목록을 전달드려 선택을 돕고, 예약까지 한 번에 진행해드립니다. \'지금 바로 상담 신청\' 버튼을 눌러 문의를 남겨주세요!',
            'q2': '병원/의료인과 계약된 구조인가요?',
            'a2': '아닙니다. CHECKIT은 특정 병원과 계약 관계를 맺지 않습니다. 저희는 오직 고객님의 입장에서, 가장 적합한 병원을 찾으실 수 있도록 객관적인 정보 제공으로 선택을 돕습니다. 고객님의 건강과 만족이 저희의 최우선 목표입니다.',
            'q3': '의료 행위나 진료 알선을 하나요?',
            'a3': '아니요, CHECKIT은 의료법을 준수하며 어떠한 의료 행위나 진료 알선도 하지 않습니다. 저희는 병원 예약, 통역, 결과지 번역 등 \'비의료 과정\'에 집중하여 고객님께서 건강검진에만 집중하실 수 있도록 돕는 서비스입니다.',
            'q4': '검진 당일 어떤 도움을 받을 수 있나요?',
            'a4': '검진 당일, 언어의 장벽으로 인해 혼자라는 느낌이 들지 않도록 Check봇 매니저가 모든 순간을 함께합니다. 병원 내 접수, 문진, 수납 등 모든 의사소통 과정을 실시간으로 지원하여, 언어 문제로 인한 불편함이나 외로움 없이 편안하게 검진에만 집중하실 수 있도록 돕습니다.',
            'q5': '결과지는 어떻게 전달되나요?',
            'a5': '고객님께서 병원으로부터 수령한 한국어 결과지를 전달해주시면, 저희가 고객님의 모국어로 핵심 내용을 단순 번역 및 요약하여 전달해 드립니다. 저희는 의료법을 준수하기에, 의학적 소견이나 상세한 설명은 제공하지 않습니다.',
            'unsupported_input': '흥미로운 질문이네요! 현재는 정해진 답변만 드릴 수 있지만, 더 자세한 내용은 \'상담 신청\'을 통해 문의하시면, 전문 매니저가 친절하게 안내해 드릴 거예요.'
        },
        en: {
            'nav_home': 'Home',
            'hero_title': 'Health Check-ups for Foreigners,<br>Comfortable Without Language Barriers.',
            'hero_subtitle': 'From missed schedules and difficult-to-understand check-up guides to results provided only in Korean.<br>CHECKIT solves all non-medical processes.',
            'hero_cta': 'Apply for a Consultation Now',
            'service_for_title': 'Who is this service for?',
            'individual_title': 'Individual Clients',
            'individual_desc': 'We support foreign individuals residing in or visiting Korea to receive health check-ups comfortably<br>without language barriers.',
            'corporate_title': 'Corporate Clients',
            'corporate_desc': 'We manage group health check-ups for foreign employees easily and efficiently,<br>reducing the burden of corporate health care.',
            'learn_more': 'Learn More',
            'why_us_title': 'Why Choose CHECKIT?',
            'why_us_subtitle_new': 'Despite the high quality of medical services, foreigners face difficulties in \'non-medical processes\' such as booking, registration, and result checking.<br>CHECKIT fills this very gap.',
            'why_us_feature1_title': 'Communication Specialists',
            'why_us_feature1_desc': 'From hospital selection to result translation, we solve all communication problems caused by language and cultural barriers.',
            'why_us_feature2_title': '100% Client-Centric',
            'why_us_feature2_desc': 'Without any contracts with hospitals, we solely represent our clients, proposing the best options and assisting in the process.',
            'why_us_feature3_title': 'Focus on Non-Medical Processes',
            'why_us_feature3_desc': 'We handle all auxiliary procedures, excluding medical practice, allowing clients to focus solely on their health check-up.',
            'why_us_feature4_title': 'Reasonable Cost',
            'why_us_feature4_desc': 'We operate independently without ties to medical institutions, so there are no unnecessary brokerage fees. You can use our service with only a pure service fee.',
            'process_title': 'CHECKIT Process',
            'process_step1_title': 'Consultation & Hospital Selection Support',
            'process_step1_desc_new': 'After consulting on desired check-up items and schedule, we provide a list of optimal hospitals that meet the conditions to help you choose and proceed with the reservation.',
            'process_step2_title': 'Real-time Communication Support',
            'process_step2_desc_new': 'On the day of the check-up, we provide real-time support for all communication within the hospital to ensure no inconvenience.',
            'process_step3_title_new': 'Translated Result File Delivery',
            'process_step3_desc_new': 'We provide a simple translation and summary of the result sheet you provide, and deliver it as a file via email or messenger.',
            'testimonials_title': 'Real Customer Reviews',
            'testimonials_subtitle': 'Hear directly from customers who have been with CHECKIT.',
            'testimonial1_text': '“It was my first time getting a health check-up in Korea, so I was at a loss, but thanks to CHECKIT, the process from hospital selection to reservation and communication on the day of the check-up was really comfortable. The results were also easy to understand as they were translated into my native language.”',
            'testimonial1_author': 'Anna, International Student',
            'testimonial1_type': 'Foreign Resident in Korea',
            'testimonial2_text': '“I wanted to invite my parents to Korea for a health check-up, but I was worried about the language and procedures. I was so relieved that the CHECKIT manager took care of the entire process.”',
            'testimonial2_author': 'David, Living Abroad',
            'testimonial2_type': 'Family of Foreigner Living Abroad',
            'testimonial3_text': '“Group health check-ups for foreign employees were always a headache, but thanks to CHECKIT, everything from reservations to results management has become so simple. The employees are also very satisfied.”',
            'testimonial3_author': 'Mr. Park',
            'testimonial3_type': 'Corporate Client Manager',
            'contact_title_new': 'Do You Have Any Questions?',
            'contact_subtitle_new': 'A CHECKIT professional manager will respond quickly and kindly.',
            'contact_form_email_label': 'Email Address',
            'contact_form_email_placeholder': 'e.g., example@checkit.com',
            'contact_form_phone_label': 'Phone Number (Optional)',
            'contact_form_phone_placeholder': 'e.g., 010-1234-5678',
            'contact_form_message_label': 'Your Message',
            'contact_form_message_placeholder': 'Please write your inquiry in detail.',
            'contact_form_submit_button': 'Submit Inquiry',
            'individual_page_title': 'Personalized Services for Individual Clients',
            'individual_page_subtitle': 'CHECKIT helps all foreign individuals residing in or visiting Korea receive the best health check-ups without language barriers.',
            'solution_title': 'CHECKIT\'s Solution',
            'solution_subtitle': 'CHECKIT is with you throughout the entire health check-up process, ensuring you can focus solely on your health without any inconvenience, loneliness, or anxiety.',
            'individual_service1_title': '1:1 Dedicated Manager',
            'individual_service1_desc': 'As soon as you request a consultation, a dedicated manager who speaks your language is assigned. They responsibly manage the entire process from hospital selection, reservation, to schedule coordination.',
            'individual_service2_title_new': 'Real-time Communication Support',
            'individual_service2_desc_new': 'Instead of physical accompaniment on the day of the check-up, we provide real-time support for all communication processes like hospital reception, consultation, and payment via messenger to help you focus on your check-up without inconvenience or loneliness.',
            'individual_service3_title_new': 'Result Translation & Summary',
            'individual_service3_desc_new': 'If you provide us with the Korean result sheet received from the hospital as a photo or file, we will translate and summarize the key contents into your native language. (Medical opinions or detailed explanations are not included.)',
            'expectation_title': 'What Foreigners Expect from Korean Medical Services',
            'expectation_subtitle': '"Should I get a health check-up in Korea?"<br>Features of Korean healthcare frequently mentioned in overseas communities',
            'expectation_item_title_1': '#1. Cost Efficiency',
            'expectation_item_desc_1': '“Medical care in Korea is known to be dramatically cheaper than in the U.S.”',
            'expectation_item_title_2': '#2. Convenience',
            'expectation_item_desc_2': '“The entire process is expected to be simple and hassle-free.”',
            'expectation_item_title_3': '#3. Professional Quality',
            'expectation_item_desc_3': '“Facilities and medical standards are expected to be world-class.”',
            'expectation_item_title_4': '#4. Time Safety',
            'expectation_item_desc_4': '“It\'s expected to be quick, with minimal impact on your schedule.”',
            'reality_title': 'But the reality is...',
            'reality_item_title_1': 'Lack of Multilingual Support',
            'reality_item_1_point_1': 'Staff avoid calls because they can\'t speak foreign languages.',
            'reality_item_1_point_2': 'Instructions, preparation guides, and notifications are all in Korean.',
            'reality_item_1_point_3': 'Sensitive questions (menstruation, surgery, symptoms) are not properly explained.',
            'reality_item_1_point_4': 'All announcements during the check-up are only in Korean.',
            'reality_item_title_2': 'Confusing Process',
            'reality_item_2_point_1': 'You don\'t even know what\'s included in the check-up package.',
            'reality_item_2_point_2': 'Preparation items arrive without instructions on how to use them.',
            'reality_item_2_point_3': 'Colonoscopy medicine is explained only in Korean → leading to test failure.',
            'reality_item_2_point_4': 'The pre-examination questionnaire is long, complicated, and entirely in Korean.',
            'reality_item_title_3': 'Uncertain Scheduling',
            'reality_item_3_point_1': 'It takes 2-3 days just to make an appointment.',
            'reality_item_3_point_2': 'Different staff give different answers — no one takes responsibility.',
            'reality_item_3_point_3': 'No Korean phone number → no notifications or preparation guides.',
            'reality_item_3_point_4': 'Due to time differences abroad → calls fail and appointments are delayed.',
            'reality_item_title_4': 'Delayed Results & Lack of Accountability',
            'reality_item_4_point_1': 'Results are mailed to an address where you are not present.',
            'reality_item_4_point_2': 'Results are delayed for weeks even after leaving Korea.',
            'reality_item_4_point_3': 'Cannot receive receipts due to restrictions on overseas phone verification.',
            'reality_item_4_point_4': 'No explanation of post-examination rules (e.g., flying after polyp removal).',
            'reality_overtime_title': 'Problems that seem trivial in writing. This is the reality.',
            'reality_overtime_p1': 'Before coming to Korea, I was reassured about everything.',
            'reality_overtime_p2': 'I was told multilingual support was available, that foreigners used the service frequently, and that the entire process would be smooth and well-guided.',
            'reality_overtime_p3': 'And then I tried to book an appointment.',
            'reality_overtime_p4': 'That’s when everything started to fall apart.',
            'reality_overtime_p5': 'There was no one who could actually speak my language.',
            'reality_overtime_p6': 'Every guide, notification, and preparation note was in Korean only, which was so different from what I was promised.',
            'reality_overtime_p7': 'It took days just to confirm a schedule. Calls went unanswered, and replies were late or never came. Every time I followed up, I felt like I was asking for too much... even though I was just trying to understand the basics.',
            'reality_overtime_p8': 'On the day of the exam, the confusion was at its peak. I was told someone would guide me, but I had no idea where to go, what to bring, or who to ask.',
            'reality_overtime_p9': 'Staff spoke quickly in Korean, pointed vaguely, and just left. One test was stopped midway with no explanation, just a simple gesture to go elsewhere.',
            'reality_overtime_p10': 'In that moment, I realized I was completely alone.',
            'reality_overtime_p11': 'I left Korea without even receiving my results. Days turned into weeks. No follow-up, no clear answers. No one seemed to feel responsible. And then I finally realized something important: the promises I heard before I came did not match the reality I faced upon arrival at all.',
            'packages_title': 'Our Packages',
            'packages_subtitle': 'Choose the perfect plan that fits your needs.',
            'package_includes': 'What\'s Included',
            'package2_includes': '(Includes everything in the NO-CONFUSION PLAN +)',
            'package3_includes': '(Includes everything in the ZERO-MISTAKE PLAN +)',
            'package_recommend_title': 'Recommended For',
            'package1_title': 'No-Confusion Plan',
            'package1_price': '₩500,000',
            'package1_feature1': 'Neutral hospital list (no recommendations)',
            'package1_feature2': 'Program and price structure (official information translation only)',
            'package1_feature3': 'Step-by-step reservation guide',
            'package1_feature4': 'English translation of all hospital documents',
            'package1_feature5': 'Essential pre-examination questionnaire guide (simple, error-prevention)',
            'package1_feature6': 'Essential pre-examination instructions (fasting and basic preparation)',
            'package1_feature7': 'Guidance on what to bring on the day of the exam',
            'package1_feature8': 'Secure result delivery via email',
            'package1_feature9': 'Includes one follow-up on result delays',
            'package1_recommend_desc': 'Those who want to manage the process themselves with clear information.',
            'package2_title': 'Zero-Mistake Plan',
            'package2_price': '₩650,000',
            'package2_feature1': 'Enhanced pre-exam guide (detailed, mistake prevention-focused)',
            'package2_feature2': 'Alerts for common mistakes foreigners make',
            'package2_feature3': '1 form check (missing items, signature, date)',
            'package2_feature4': 'Pre-exam guide pack (timeline + delay factors)',
            'package2_feature5': 'Basic colonoscopy prep (if applicable)',
            'package2_feature6': 'Priority messaging for time-sensitive issues',
            'package2_feature7': 'Post-result follow-up (1 time)',
            'package2_feature8': 'Alert for missing or delayed documents',
            'package2_feature9': 'Schedule change support (1 time included)',
            'package2_recommend_desc': 'Those who want to minimize mistakes and not miss important alerts.',
            'package3_title': 'Total-Safe Plan',
            'package3_price': '₩800,000',
            'package3_feature1': 'Premium pre-exam management',
            'package3_feature2': 'Risk point explanation (non-medical, procedure-based)',
            'package3_feature3': 'English answer templates for complex forms',
            'package3_feature4': 'Full form check (all pages, signatures, attachments)',
            'package3_feature5': 'Premium pre-exam pack (detailed timeline, mistake response flow)',
            'package3_feature6': 'Real-time chat support on exam day',
            'package3_feature7': 'Hospital navigation guide (graphic)',
            'package3_feature8': 'Request for English receipt (proxy)',
            'package3_feature9': 'Request for CD / additional documents',
            'package3_feature10': 'Full post-exam follow-up until results are out',
            'package3_feature11': 'Result organization (non-medical, content organization only)',
            'package3_feature12': 'Hospital communication templates',
            'package3_feature13': 'Schedule change support (up to 3 times included)',
            'package3_recommend_desc': 'Those who want the safest and most perfectly managed experience.',
            'options_title_new': 'Optional Services',
            'option_card_title_1': 'Non-Medical Guide',
            'option_card_price_1': '₩82,800',
            'option_card_desc_1': 'A non-medical guide on examination items, result structure, and post-examination care.',
            'option_card_title_2': 'Hospital Route Guide',
            'option_card_price_2': '₩27,600',
            'option_card_desc_2': 'Shows the precise route and movement flow within the hospital. Useful for first-time visitors.',
            'option_card_title_3': 'Reservation Change Option',
            'option_card_desc_3': 'An option for customers who need to change their reservation after it has been made.',
            'option_card_3_item_1': '1 Change:',
            'option_card_3_item_2': '2-Change Package:',
            'option_card_3_item_3': 'Unlimited Changes:',
            'option_card_title_4': 'English Receipt Request',
            'option_card_price_4': '₩27,600',
            'option_card_desc_4': 'We request an English receipt suitable for insurance purposes on your behalf.',
            'option_card_title_5': 'CD Result Request',
            'option_card_price_5': '₩27,600',
            'option_card_desc_5': 'We request the examination CD or additional image files on your behalf.',
            'option_card_title_6': 'Urgent Result Follow-up',
            'option_card_price_6': '₩27,600',
            'option_card_desc_6': 'A one-time urgent follow-up message will be sent to the hospital.',
            'chatbot_header': 'Check Bot',
            'chatbot_placeholder': 'Type a message...',
            'chatbot_greeting': 'Hello! Do you have any questions about CHECKIT? Please select a question below or type your own.',
            'greeting_response': 'Hello! Nice to meet you. If you have any questions about CHECKIT, feel free to select a question below or ask me directly.',
            'q1': 'How do I make a reservation?',
            'a1': 'Your dedicated CHECKIT manager will assist you. Just tell us your desired check-up items and schedule, and we will provide a list of hospitals that fit your criteria to help you choose, and then handle the reservation for you. Click the \'Apply for a Consultation Now\' button to leave an inquiry!',
            'q2': 'Are you contracted with hospitals/medical staff?',
            'a2': 'No. CHECKIT does not have contractual relationships with any specific hospitals. We help you choose the most suitable hospital by providing objective information from your perspective. Your health and satisfaction are our top priorities.',
            'q3': 'Do you perform medical acts or arrange treatments?',
            'a3': 'No, CHECKIT complies with the Medical Service Act and does not perform any medical acts or arrange treatments. We are a service that helps you focus solely on your health check-up by concentrating on \'non-medical processes\' such as hospital reservations, interpretation, and result translation.',
            'q4': 'What kind of help can I get on the day of the check-up?',
            'a4': 'On the day of your check-up, your Check Bot manager is with you every step of the way so you don\'t feel alone due to language barriers. We provide real-time support for all communication processes within the hospital, such as registration, consultations, and payment, helping you focus comfortably on your check-up without inconvenience or loneliness caused by language issues.',
            'q5': 'How are the results delivered?',
            'a5': 'Once you provide us with the Korean results you received from the hospital, we will provide a simple translation and summary of the key contents in your native language. To comply with medical law, we do not provide medical opinions or detailed explanations.',
            'unsupported_input': 'That\'s an interesting question! I can only provide pre-set answers for now, but if you inquire through \'Apply for a Consultation\', a professional manager will kindly guide you.'
        },
        cn: {
            'nav_home': '首页',
            'hero_title': '为外国人提供健康体检，<br>无语言障碍，舒心便捷。',
            'hero_subtitle': '从错过日程、难以理解的体检指南，到仅提供韩语版本的结果报告。<br>CHECKIT为您解决所有非医疗过程中的难题。',
            'hero_cta': '立即申请咨询',
            'service_for_title': '这项服务是为谁准备的？',
            'individual_title': '个人客户',
            'individual_desc': '我们帮助居住或访问韩国的外国个人无语言障碍地<br>舒适接受健康体检。',
            'corporate_title': '企业客户',
            'corporate_desc': '我们轻松高效地管理外国员工的团体健康体检，<br>减轻企业保健管理的负担。',
            'learn_more': '了解更多',
            'why_us_title': '为什么选择CHECKIT？',
            'why_us_subtitle_new': '尽管医疗服务质量很高，但外国人在预约、登记、确认结果等“非医疗过程”中仍面临困难。<br>CHECKIT正是填补了这一空白。',
            'why_us_feature1_title': '沟通专家',
            'why_us_feature1_desc': '从选择医院到结果翻译，我们解决所有因语言和文化障碍引起的沟通问题。',
            'why_us_feature2_title': '100%以客户为中心',
            'why_us_feature2_desc': '我们不与任何医院签订合同，完全代表客户，提出最佳选择并协助整个过程。',
            'why_us_feature3_title': '专注于非医疗过程',
            'why_us_feature3_desc': '我们处理除医疗行为外的所有辅助程序，让客户可以专注于他们的健康体检。',
            'why_us_feature4_title': '合理的费用',
            'why_us_feature4_desc': '我们独立运营，不与医疗机构挂钩，因此没有不必要的中介费。只需支付纯粹的服务费即可使用。',
            'process_title': 'CHECKIT 使用流程',
            'process_step1_title': '咨询与医院选择支持',
            'process_step1_desc_new': '在就期望的体检项目和日程进行咨询后，我们提供符合条件的最佳医院列表，以帮助您选择并进行预约。',
            'process_step2_title': '实时沟通支持',
            'process_step2_desc_new': '在体检当天，我们为医院内的所有沟通提供实时支持，以确保没有不便。',
            'process_step3_title_new': '翻译结果文件交付',
            'process_step3_desc_new': '我们将您提供的结果报告进行简单的翻译和摘要,然后通过电子邮件或即时通讯工具以文件形式交付。',
            'testimonials_title': '真实客户评价',
            'testimonials_subtitle': '听听CHECKIT客户的真实心声。',
            'testimonial1_text': '“这是我第一次在韩国做健康检查，本来很迷茫，但多亏了CHECKIT，从选择医院、预约到检查当天的沟通，一切都进行得非常顺利。结果报告也用我的母语进行了翻译，很容易理解。”',
            'testimonial1_author': '安娜，留学生',
            'testimonial1_type': '居住在韩国的外国人',
            'testimonial2_text': '“我想邀请父母来韩国做健康检查，但很担心语言和程序问题。CHECKIT的经理处理了所有过程，让我感到非常安心和可靠。”',
            'testimonial2_author': '大卫，居住在海外',
            'testimonial2_type': '海外居住的韩国家庭',
            'testimonial3_text': '“为外国员工安排集体健康检查一直是一件头疼的事，但多亏了CHECKIT，从预约到结果管理都变得非常简单。员工们的满意度也非常高。”',
            'testimonial3_author': '朴经理',
            'testimonial3_type': '企业客户负责人',
            'contact_title_new': '您有任何疑问吗？',
            'contact_subtitle_new': 'CHECKIT的专业经理将迅速、亲切地为您解答。',
            'contact_form_email_label': '电子邮件地址',
            'contact_form_email_placeholder': '例如：example@checkit.com',
            'contact_form_phone_label': '联系电话 (可选)',
            'contact_form_phone_placeholder': '例如：010-1234-5678',
            'contact_form_message_label': '咨询内容',
            'contact_form_message_placeholder': '请详细填写您的问题。',
            'contact_form_submit_button': '提交咨询',
            'individual_page_title': '个人客户专属服务',
            'individual_page_subtitle': 'CHECKIT 帮助所有居住或访问韩国的外国个人无语言障碍地获得最佳的健康体检服务。',
            'solution_title': 'CHECKIT的解决方案',
            'solution_subtitle': 'CHECKIT 伴随您完成整个体检过程，确保您可以完全专注于自己的健康，没有任何不便、孤独或焦虑。',
            'individual_service1_title': '1:1专属经理',
            'individual_service1_desc': '一旦您请求咨询，我们会立即为您指派一位能说您语言的专属经理。他们将负责管理从医院选择、预约到日程协调的整个过程。',
            'individual_service2_title_new': '实时沟通支持',
            'individual_service2_desc_new': '体检当天，我们不提供实体陪同，而是通过即时通讯工具为医院接待、问诊、缴费等所有沟通环节提供实时支持，帮助您专注于体检，无任何不便或孤独感。',
            'individual_service3_title_new': '结果翻译与摘要',
            'individual_service3_desc_new': '您将从医院收到的韩文结果单以照片或文件形式发送给我们，我们将为您翻译核心内容并提供摘要。（不包括医疗意见或详细解释。）',
            'expectation_title': '外国人期待的韩国医疗服务',
            'expectation_subtitle': '“要不要在韩国做个健康体检？”<br>海外社区经常提到的韩国医疗特点',
            'expectation_item_title_1': '#1. 成本效益',
            'expectation_item_desc_1': '“众所周知，韩国的医疗费用比美国便宜得多。”',
            'expectation_item_title_2': '#2. 便利性',
            'expectation_item_desc_2': '“整个过程预计将是简单且无忧的。”',
            'expectation_item_title_3': '#3. 专业品质',
            'expectation_item_desc_3': '“设施和医疗标准有望达到世界一流水平。”',
            'expectation_item_title_4': '#4. 时间安全',
            'expectation_item_desc_4': '“预计会很快，对您的日程安排影响最小。”',
            'reality_title': '但现实是...',
            'reality_item_title_1': '缺乏多语言支持',
            'reality_item_1_point_1': '员工因不会外语而回避电话。',
            'reality_item_1_point_2': '指南、准备导引和通知都只有韩语。',
            'reality_item_1_point_3': '对于敏感问题（月经、手术、症状）无法获得适当的解释。',
            'reality_item_1_point_4': '体检过程中的所有广播仅使用韩语。',
            'reality_item_title_2': '混乱的过程',
            'reality_item_2_point_1': '甚至不知道体检套餐里包含了什么。',
            'reality_item_2_point_2': '准备物品送达时没有使用说明。',
            'reality_item_2_point_3': '结肠镜药物仅用韩语说明 → 导致检查失败。',
            'reality_item_2_point_4': '预检问卷又长又复杂，而且全是韩语。',
            'reality_item_title_3': '不确定的日程',
            'reality_item_3_point_1': '仅预约就需要2-3天。',
            'reality_item_3_point_2': '不同员工给出不同答复 — 没人负责。',
            'reality_item_3_point_3': '没有韩国电话号码 → 收不到通知或准备指南。',
            'reality_item_3_point_4': '因海外时差 → 通话失败，预约被延迟。',
            'reality_item_title_4': '结果延迟与责任缺失',
            'reality_item_4_point_1': '结果被邮寄到您不在的地址。',
            'reality_item_4_point_2': '离开韩国后，结果仍延迟数周。',
            'reality_item_4_point_3': '因海外电话验证限制而无法收到收据。',
            'reality_item_4_point_4': '没有关于检查后规则（例如：息肉切除后飞行）的说明。',
            'reality_overtime_title': '文字中看似琐碎的问题。现实就是如此。',
            'reality_overtime_p1': '来韩国之前，我对一切都很放心。',
            'reality_overtime_p2': '我听说有多语言支持，外国人经常使用，整个过程会很顺利，并有很好的引导。',
            'reality_overtime_p3': '然后我尝试预约。',
            'reality_overtime_p4': '从那时起，一切都开始崩溃了。',
            'reality_overtime_p5': '实际上没有人会说我的语言。',
            'reality_overtime_p6': '所有的指南、通知和准备说明都只有韩语，这与我得到的承诺大相径庭。',
            'reality_overtime_p7': '仅仅是确定日程就花了好几天。电话无人接听，回复要么很晚，要么根本没有。每次我跟进时，都感觉自己要求太多了……尽管我只是想了解一些基本情况。',
            'reality_overtime_p8': '体检当天，混乱达到了顶峰。有人告诉我会有向导，但我完全不知道该去哪里，该带什么，或者该问谁。',
            'reality_overtime_p9': '工作人员用韩语快速说话，含糊地指了指，然后就走开了。一项检查在没有解释的情况下中途停止了，只有一个简单的手势让我去别处。',
            'reality_overtime_p10': '在那一刻，我意识到我完全是孤身一人。',
            'reality_overtime_p11': '我甚至没有收到结果就离开了韩国。几天变成了几周。没有跟进，没有明确的答复。似乎没有人感到有责任。最后我终于意识到了一件重要的事情：我来之前听到的承诺与我到达后面对的现实完全不符。',
            'packages_title': '我们的套餐',
            'packages_subtitle': '选择最适合您需求的完美计划。',
            'package_includes': '包含内容',
            'package2_includes': '(包括NO-CONFUSION PLAN的所有内容+)',
            'package3_includes': '(包括ZERO-MISTAKE PLAN的所有内容+)',
            'package_recommend_title': '推荐对象',
            'package1_title': '无忧套餐',
            'package1_price': '₩500,000',
            'package1_feature1': '中立的医院列表（无推荐）',
            'package1_feature2': '项目和价格结构（仅提供官方信息翻译）',
            'package1_feature3': '分步预约指南',
            'package1_feature4': '所有医院文件的英文翻译',
            'package1_feature5': '基本预检问卷指南（简单，防错）',
            'package1_feature6': '基本预检说明（禁食和基本准备）',
            'package1_feature7': '体检当天携带物品指南',
            'package1_feature8': '通过电子邮件安全发送结果',
            'package1_feature9': '包括一次结果延迟跟进',
            'package1_recommend_desc': '希望通过明确信息自行管理流程的人士。',
            'package2_title': '零失误计划',
            'package2_price': '₩650,000',
            'package2_feature1': '强化版预检指南（详细，注重防错）',
            'package2_feature2': '针对外国人常见错误的提醒',
            'package2_feature3': '1次表格检查（遗漏项、签名、日期）',
            'package2_feature4': '预检指南包（时间表+延迟因素）',
            'package2_feature5': '基本结肠镜准备（如适用）',
            'package2_feature6': '时间敏感问题的优先消息',
            'package2_feature7': '结果后跟进（1次）',
            'package2_feature8': '遗漏或延迟文件的提醒',
            'package2_feature9': '日程变更支持（包含1次）',
            'package2_recommend_desc': '希望尽量减少错误，不错过重要提醒的人。',
            'package3_title': '全程无忧计划',
            'package3_price': '₩800,000',
            'package3_feature1': '高级预检管理',
            'package3_feature2': '风险点说明（非医疗，基于程序）',
            'package3_feature3': '复杂表格的英文答案模板',
            'package3_feature4': '完整表格检查（所有页面、签名、附件）',
            'package3_feature5': '高级预检包（详细时间表，错误应对流程）',
            'package3_feature6': '体检当天实时聊天支持',
            'package3_feature7': '医院导航指南（图文）',
            'package3_feature8': '英文收据申请（代办）',
            'package3_feature9': 'CD/附加文件申请',
            'package3_feature10': '体检后直至结果出来的全程跟进',
            'package3_feature11': '结果整理（非医疗，仅内容整理）',
            'package3_feature12': '医院沟通模板',
            'package3_feature13': '日程变更支持（最多包含3次）',
            'package3_recommend_desc': '希望获得最安全、最完善管理体验的人。',
            'options_title_new': '可选服务',
            'option_card_title_1': '非医疗指南',
            'option_card_price_1': '₩82,800',
            'option_card_desc_1': '关于检查项目、结果结构及检查后管理的非医疗性指南。',
            'option_card_title_2': '医院路线指南',
            'option_card_price_2': '₩27,600',
            'option_card_desc_2': '展示医院内的准确路线和移动流程。对初次访客非常有用。',
            'option_card_title_3': '预约变更选项',
            'option_card_desc_3': '为预约后需要变更预约的顾客提供的选项。',
            'option_card_3_item_1': '变更1次:',
            'option_card_3_item_2': '2次套餐:',
            'option_card_3_item_3': '无限次变更:',
            'option_card_title_4': '英文收据申请',
            'option_card_price_4': '₩27,600',
            'option_card_desc_4': '代您申请适用于保险目的的英文收据。',
            'option_card_title_5': 'CD结果申请',
            'option_card_price_5': '₩27,600',
            'option_card_desc_5': '代您申请检查CD或额外的影像文件。',
            'option_card_title_6': '紧急结果跟进',
            'option_card_price_6': '₩27,600',
            'option_card_desc_6': '向医院发送一次紧急跟进信息。',
            'chatbot_header': 'Check Bot',
            'chatbot_placeholder': '输入消息...',
            'chatbot_greeting': '您好！对CHECKIT有什么疑问吗？请从下方选择问题或直接输入。',
            'greeting_response': '您好！很高兴见到您。如果您对CHECKIT有任何疑问，请随时从下方选择问题或直接提问。',
            'q1': '如何预约？',
            'a1': 'CHECKIT的专属经理将为您提供帮助。只需告诉我们您想要的检查项目和日程，我们将提供符合您条件的医院列表以帮助您选择，并一次性为您完成预约。请点击\'立即申请咨询\'按钮留下您的问题！',
            'q2': '是否与医院/医务人员签订了合同？',
            'a2': '不。CHECKIT不与任何特定医院签订合同。我们从您的角度出发，通过提供客观信息来帮助您选择最合适的医院。您的健康和满意是我们的首要任务。',
            'q3': '你们是否从事医疗行为或安排治疗？',
            'a3': '不，CHECKIT遵守医疗服务法，不从事任何医疗行为或安排治疗。我们是一项专注于“非医疗过程”的服务，例如医院预约、口译和结果翻译，以帮助您只专注于您的健康检查。',
            'q4': '体检当天能得到什么帮助？',
            'a4': '在您体检当天，您的Check Bot经理会全程陪伴您，让您不会因为语言障碍而感到孤单。我们为医院内的所有沟通流程（如挂号、会诊和付款）提供实时支持，帮助您在没有语言问题造成的不便或孤独感的情况下舒适地专注于您的检查。',
            'q5': '结果如何发送？',
            'a5': '您将从医院收到的韩文结果单以照片或文件形式发送给我们，我们将为您翻译核心内容并提供摘要。为遵守医疗法，我们不提供医疗意见或详细解释。',
            'unsupported_input': '这是一个有趣的问题！目前我只能提供预设的答案，但如果您通过“申请咨询”进行查询，专业的经理会亲切地为您引导。'
        },
        vn: {
            'nav_home': 'Trang chủ',
            'hero_title': 'Khám sức khỏe cho người nước ngoài,<br>Thoải mái không rào cản ngôn ngữ.',
            'hero_subtitle': 'Từ lịch trình bị bỏ lỡ, hướng dẫn khám khó hiểu, đến kết quả chỉ có bằng tiếng Hàn.<br>CHECKIT giải quyết mọi quy trình phi y tế.',
            'hero_cta': 'Đăng ký tư vấn ngay',
            'service_for_title': 'Dịch vụ này dành cho ai?',
            'individual_title': 'Khách hàng cá nhân',
            'individual_desc': 'Chúng tôi hỗ trợ người nước ngoài cư trú hoặc đến thăm Hàn Quốc nhận khám sức khỏe một cách thoải mái<br>mà không có rào cản ngôn ngữ.',
            'corporate_title': 'Khách hàng doanh nghiệp',
            'corporate_desc': 'Chúng tôi quản lý các cuộc khám sức khỏe nhóm cho nhân viên nước ngoài một cách dễ dàng và hiệu quả,<br>giảm bớt gánh nặng quản lý chăm sóc sức khỏe của doanh nghiệp.',
            'learn_more': 'Tìm hiểu thêm',
            'why_us_title': 'Tại sao chọn CHECKIT?',
            'why_us_subtitle_new': 'Mặc dù chất lượng dịch vụ y tế cao, người nước ngoài vẫn gặp khó khăn trong các “quy trình phi y tế” như đặt hẹn, đăng ký và kiểm tra kết quả.<br>CHECKIT lấp đầy khoảng trống này.',
            'why_us_feature1_title': 'Chuyên gia giao tiếp',
            'why_us_feature1_desc': 'Từ việc lựa chọn bệnh viện đến dịch kết quả, chúng tôi giải quyết mọi vấn đề giao tiếp do rào cản ngôn ngữ và văn hóa.',
            'why_us_feature2_title': '100% lấy khách hàng làm trung tâm',
            'why_us_feature2_desc': 'Không có bất kỳ hợp đồng nào với bệnh viện, chúng tôi hoàn toàn đại diện cho khách hàng của mình, đề xuất các lựa chọn tốt nhất và hỗ trợ trong quá trình này.',
            'why_us_feature3_title': 'Tập trung vào các quy trình phi y tế',
            'why_us_feature3_desc': 'Chúng tôi xử lý tất cả các thủ tục phụ trợ, không bao gồm hành nghề y tế, cho phép khách hàng chỉ tập trung vào việc khám sức khỏe của họ.',
            'why_us_feature4_title': 'Chi phí hợp lý',
            'why_us_feature4_desc': 'Chúng tôi hoạt động độc lập mà không có ràng buộc với các tổ chức y tế, vì vậy không có phí môi giới không cần thiết. Bạn có thể sử dụng dịch vụ của chúng tôi chỉ với một khoản phí dịch vụ thuần túy.',
            'process_title': 'Quy trình sử dụng CHECKIT',
            'process_step1_title': 'Tư vấn & Hỗ trợ lựa chọn bệnh viện',
            'process_step1_desc_new': 'Sau khi tư vấn về các mục khám và lịch trình mong muốn, chúng tôi cungdQuy trình sử dụng CHECKIT cấp danh sách các bệnh viện tối ưu đáp ứng các điều kiện để giúp bạn lựa chọn và tiến hành đặt hẹn.',
            'process_step2_title': 'Hỗ trợ giao tiếp thời gian thực',
            'process_step2_desc_new': 'Vào ngày khám, chúng tôi cung cấp hỗ trợ thời gian thực cho tất cả các giao tiếp trong bệnh viện để đảm bảo không có sự bất tiện nào.',
            'process_step3_title_new': 'Giao tệp kết quả đã dịch',
            'process_step3_desc_new': 'Chúng tôi cung cấp một bản dịch và tóm tắt đơn giản của bảng kết quả mà bạn cung cấp, và gửi nó dưới dạng tệp qua email hoặc messenger.',
            'testimonials_title': 'Đánh giá thực tế của khách hàng',
            'testimonials_subtitle': 'Hãy nghe trực tiếp từ những khách hàng đã đồng hành cùng CHECKIT.',
            'testimonial1_text': '“Đây là lần đầu tiên tôi đi khám sức khỏe ở Hàn Quốc nên rất hoang mang, nhưng nhờ có CHECKIT, quá trình từ chọn bệnh viện, đặt hẹn đến giao tiếp trong ngày khám đều rất thoải mái. Kết quả cũng được dịch sang tiếng mẹ đẻ của tôi nên rất dễ hiểu.”',
            'testimonial1_author': 'Anna, Sinh viên quốc tế',
            'testimonial1_type': 'Người nước ngoài cư trú tại Hàn Quốc',
            'testimonial2_text': '“Tôi muốn mời bố mẹ sang Hàn Quốc khám sức khỏe nhưng lại lo lắng về vấn đề ngôn ngữ và thủ tục. Tôi thực sự yên tâm vì đã có quản lý của CHECKIT lo toàn bộ quá trình.”',
            'testimonial2_author': 'David, Sống ở nước ngoài',
            'testimonial2_type': 'Gia đình người nước ngoài sống ở nước ngoài',
            'testimonial3_text': '“Việc khám sức khỏe định kỳ cho nhân viên nước ngoài luôn là một vấn đề đau đầu, nhưng nhờ có CHECKIT, mọi thứ từ đặt hẹn đến quản lý kết quả đã trở nên vô cùng đơn giản. Nhân viên của chúng tôi cũng rất hài lòng.”',
            'testimonial3_author': 'Trưởng phòng Park',
            'testimonial3_type': 'Quản lý khách hàng doanh nghiệp',
            'contact_title_new': 'Bạn có câu hỏi nào không?',
            'contact_subtitle_new': 'Một quản lý chuyên nghiệp của CHECKIT sẽ trả lời nhanh chóng và thân thiện.',
            'contact_form_email_label': 'Địa chỉ email',
            'contact_form_email_placeholder': 'ví dụ: example@checkit.com',
            'contact_form_phone_label': 'Số điện thoại (Tùy chọn)',
            'contact_form_phone_placeholder': 'ví dụ: 010-1234-5678',
            'contact_form_message_label': 'Nội dung yêu cầu',
            'contact_form_message_placeholder': 'Vui lòng viết chi tiết yêu cầu của bạn.',
            'contact_form_submit_button': 'Gửi yêu cầu',
            'individual_page_title': 'Dịch vụ Cá nhân hóa cho Khách hàng Cá nhân',
            'individual_page_subtitle': 'CHECKIT giúp mọi cá nhân nước ngoài đang cư trú hoặc đến thăm Hàn Quốc được khám sức khỏe tốt nhất mà không gặp rào cản ngôn ngữ.',
            'solution_title': 'Giải pháp của CHECKIT',
            'solution_subtitle': 'CHECKIT đồng hành cùng bạn trong suốt quá trình khám sức khỏe, đảm bảo bạn có thể hoàn toàn tập trung vào sức khỏe của mình mà không gặp bất kỳ sự bất tiện, cô đơn hay lo lắng nào.',
            'individual_service1_title': 'Quản lý riêng 1:1',
            'individual_service1_desc': 'Ngay khi bạn yêu cầu tư vấn, một quản lý riêng nói ngôn ngữ của bạn sẽ được chỉ định. Họ chịu trách nhiệm quản lý toàn bộ quy trình từ lựa chọn bệnh viện, đặt hẹn đến điều phối lịch trình.',
            'individual_service2_title_new': 'Hỗ trợ giao tiếp thời gian thực',
            'individual_service2_desc_new': 'Thay vì đi cùng vào ngày khám, chúng tôi cung cấp hỗ trợ thời gian thực cho tất cả các quy trình giao tiếp như tiếp nhận tại bệnh viện, tư vấn và thanh toán qua ứng dụng nhắn tin để giúp bạn tập trung vào việc khám sức khỏe mà không gặp bất tiện hay cô đơn.',
            'individual_service3_title_new': 'Dịch và Tóm tắt Kết quả',
            'individual_service3_desc_new': 'Nếu bạn cung cấp cho chúng tôi phiếu kết quả tiếng Hàn nhận được từ bệnh viện dưới dạng ảnh hoặc tệp, chúng tôi sẽ dịch và tóm tắt nội dung chính sang ngôn ngữ mẹ đẻ của bạn. (Không bao gồm ý kiến y tế hoặc giải thích chi tiết.)',
            'expectation_title': 'Dịch vụ Y tế Hàn Quốc mà Người nước ngoài Mong đợi',
            'expectation_subtitle': '"Tôi có nên đi khám sức khỏe ở Hàn Quốc không?"<br>Những đặc điểm của y tế Hàn Quốc thường được nhắc đến trong các cộng đồng nước ngoài',
            'expectation_item_title_1': '#1. Hiệu quả về chi phí',
            'expectation_item_desc_1': '“Chi phí chăm sóc y tế ở Hàn Quốc được biết là rẻ hơn đáng kể so với ở Mỹ.”',
            'expectation_item_title_2': '#2. Sự tiện lợi',
            'expectation_item_desc_2': '“Toàn bộ quy trình dự kiến sẽ đơn giản và không phức tạp.”',
            'expectation_item_title_3': '#3. Chất lượng chuyên nghiệp',
            'expectation_item_desc_3': '“Các cơ sở vật chất và tiêu chuẩn y tế được kỳ vọng sẽ đạt đẳng cấp thế giới.”',
            'expectation_item_title_4': '#4. An toàn về thời gian',
            'expectation_item_desc_4': '“Nó được mong đợi là nhanh chóng, với tác động tối thiểu đến lịch trình của bạn.”',
            'reality_title': 'Nhưng thực tế là...',
            'reality_item_title_1': 'Thiếu hỗ trợ đa ngôn ngữ',
            'reality_item_1_point_1': 'Nhân viên tránh nghe điện thoại vì không nói được tiếng nước ngoài.',
            'reality_item_1_point_2': 'Hướng dẫn, chỉ dẫn chuẩn bị và thông báo đều bằng tiếng Hàn.',
            'reality_item_1_point_3': 'Không nhận được giải thích đầy đủ về các câu hỏi nhạy cảm (kinh nguyệt, phẫu thuật, triệu chứng).',
            'reality_item_1_point_4': 'Tất cả các thông báo trong quá trình khám đều chỉ bằng tiếng Hàn.',
            'reality_item_title_2': 'Quy trình khó hiểu',
            'reality_item_2_point_1': 'Thậm chí không biết gói khám sức khỏe bao gồm những gì.',
            'reality_item_2_point_2': 'Vật dụng chuẩn bị được gửi đến mà không có hướng dẫn sử dụng.',
            'reality_item_2_point_3': 'Thuốc nội soi đại tràng chỉ được giải thích bằng tiếng Hàn → dẫn đến thất bại trong kiểm tra.',
            'reality_item_2_point_4': 'Phiếu câu hỏi tiền kiểm tra dài, phức tạp và hoàn toàn bằng tiếng Hàn.',
            'reality_item_title_3': 'Lịch trình không chắc chắn',
            'reality_item_3_point_1': 'Mất 2-3 ngày chỉ để đặt lịch hẹn.',
            'reality_item_3_point_2': 'Mỗi nhân viên đưa ra câu trả lời khác nhau — không ai chịu trách nhiệm.',
            'reality_item_3_point_3': 'Không có số điện thoại Hàn Quốc → không nhận được thông báo hoặc hướng dẫn chuẩn bị.',
            'reality_item_3_point_4': 'Do chênh lệch múi giờ ở nước ngoài → cuộc gọi thất bại và lịch hẹn bị trì hoãn.',
            'reality_item_title_4': 'Kết quả chậm trễ & Thiếu trách nhiệm',
            'reality_item_4_point_1': 'Kết quả được gửi đến địa chỉ mà bạn không có mặt.',
            'reality_item_4_point_2': 'Kết quả bị trì hoãn vài tuần ngay cả sau khi rời Hàn Quốc.',
            'reality_item_4_point_3': 'Không thể nhận biên lai do hạn chế xác minh điện thoại ở nước ngoài.',
            'reality_item_4_point_4': 'Không có giải thích về các quy tắc sau kiểm tra (ví dụ: bay sau khi cắt polyp).',
            'reality_overtime_title': 'Những vấn đề có vẻ nhỏ nhặt trên giấy tờ. Đây là thực tế.',
            'reality_overtime_p1': 'Trước khi đến Hàn Quốc, tôi đã được trấn an về mọi thứ.',
            'reality_overtime_p2': 'Tôi được cho biết rằng có hỗ trợ đa ngôn ngữ, người nước ngoài thường xuyên sử dụng dịch vụ và toàn bộ quy trình sẽ diễn ra suôn sẻ và được hướng dẫn kỹ càng.',
            'reality_overtime_p3': 'Và rồi tôi đã cố gắng đặt lịch hẹn.',
            'reality_overtime_p4': 'Đó là lúc mọi thứ bắt đầu sụp đổ.',
            'reality_overtime_p5': 'Thực tế không có ai có thể nói được ngôn ngữ của tôi.',
            'reality_overtime_p6': 'Mọi hướng dẫn, thông báo và ghi chú chuẩn bị đều chỉ bằng tiếng Hàn, điều này hoàn toàn khác với những gì tôi đã được hứa.',
            'reality_overtime_p7': 'Chỉ việc xác nhận lịch trình cũng mất vài ngày. Cuộc gọi không được trả lời, và phản hồi thì chậm trễ hoặc không bao giờ có. Mỗi lần tôi theo dõi, tôi đều cảm thấy như mình đang đòi hỏi quá nhiều... mặc dù tôi chỉ đang cố gắng hiểu những điều cơ bản.',
            'reality_overtime_p8': 'Vào ngày khám, sự hỗn loạn lên đến đỉnh điểm. Tôi được cho biết sẽ có người hướng dẫn, nhưng tôi hoàn toàn không biết phải đi đâu, mang theo gì, hay hỏi ai.',
            'reality_overtime_p9': 'Nhân viên nói nhanh bằng tiếng Hàn, chỉ trỏ một cách mơ hồ rồi bỏ đi. Một cuộc kiểm tra đã bị dừng lại giữa chừng mà không có lời giải thích, chỉ có một cử chỉ đơn giản yêu cầu tôi đi nơi khác.',
            'reality_overtime_p10': 'Vào khoảnh khắc đó, tôi nhận ra mình hoàn toàn đơn độc.',
            'reality_overtime_p11': 'Tôi đã rời Hàn Quốc mà không hề nhận được kết quả. Vài ngày trôi qua thành vài tuần. Không có sự theo dõi, không có câu trả lời rõ ràng. Dường như không ai cảm thấy có trách nhiệm. Và cuối cùng tôi đã nhận ra một điều quan trọng: những lời hứa tôi nghe được trước khi đến hoàn toàn không khớp với thực tế mà tôi phải đối mặt khi đến nơi.',
            'packages_title': 'Gói của chúng tôi',
            'packages_subtitle': 'Chọn gói hoàn hảo phù hợp với nhu cầu của bạn.',
            'package_includes': 'Bao gồm những gì',
            'package2_includes': '(Bao gồm mọi thứ trong Gói không nhầm lẫn +)',
            'package3_includes': '(Bao gồm mọi thứ trong Gói không sai sót +)',
            'package_recommend_title': 'Dành cho',
            'package1_title': 'Gói không nhầm lẫn',
            'package1_price': '₩500,000',
            'package1_feature1': 'Danh sách bệnh viện trung lập (không có đề xuất)',
            'package1_feature2': 'Chương trình và cấu trúc giá (chỉ dịch thông tin chính thức)',
            'package1_feature3': 'Hướng dẫn đặt hẹn từng bước',
            'package1_feature4': 'Dịch tiếng Anh tất cả các tài liệu của bệnh viện',
            'package1_feature5': 'Hướng dẫn câu hỏi tiền khám cần thiết (đơn giản, phòng ngừa lỗi)',
            'package1_feature6': 'Hướng dẫn cần thiết trước khi khám (nhịn ăn và chuẩn bị cơ bản)',
            'package1_feature7': 'Hướng dẫn những gì cần mang theo trong ngày khám',
            'package1_feature8': 'Gửi kết quả an toàn qua email',
            'package1_feature9': 'Bao gồm một lần theo dõi về sự chậm trễ của kết quả',
            'package1_recommend_desc': 'Những người muốn tự quản lý quy trình với thông tin rõ ràng.',
            'package2_title': 'Gói không sai sót',
            'package2_price': '₩650,000',
            'package2_feature1': 'Hướng dẫn trước khi khám nâng cao (chi tiết, tập trung vào phòng ngừa sai sót)',
            'package2_feature2': 'Cảnh báo về các lỗi thường gặp của người nước ngoài',
            'package2_feature3': 'Kiểm tra 1 biểu mẫu (mục thiếu, chữ ký, ngày tháng)',
            'package2_feature4': 'Gói hướng dẫn trước khi khám (lịch trình + yếu tố gây chậm trễ)',
            'package2_feature5': 'Chuẩn bị nội soi đại tràng cơ bản (nếu có)',
            'package2_feature6': 'Nhắn tin ưu tiên cho các vấn đề nhạy cảm về thời gian',
            'package2_feature7': 'Theo dõi sau kết quả (1 lần)',
            'package2_feature8': 'Cảnh báo về tài liệu bị thiếu hoặc chậm trễ',
            'package2_feature9': 'Hỗ trợ thay đổi lịch trình (bao gồm 1 lần)',
            'package2_recommend_desc': 'Những người muốn giảm thiểu sai sót và không bỏ lỡ các cảnh báo quan trọng.',
            'package3_title': 'Gói An toàn Toàn diện',
            'package3_price': '₩800,000',
            'package3_feature1': 'Quản lý trước kỳ thi cao cấp',
            'package3_feature2': 'Giải thích điểm rủi ro (phi y tế, dựa trên thủ tục)',
            'package3_feature3': 'Mẫu trả lời tiếng Anh cho các biểu mẫu phức tạp',
            'package3_feature4': 'Kiểm tra toàn bộ biểu mẫu (tất cả các trang, chữ ký, tệp đính kèm)',
            'package3_feature5': 'Gói trước kỳ thi cao cấp (lịch trình chi tiết, quy trình phản hồi lỗi)',
            'package3_feature6': 'Hỗ trợ trò chuyện thời gian thực vào ngày thi',
            'package3_feature7': 'Hướng dẫn điều hướng bệnh viện (đồ họa)',
            'package3_feature8': 'Yêu cầu nhận hóa đơn tiếng Anh (ủy quyền)',
            'package3_feature9': 'Yêu cầu CD / tài liệu bổ sung',
            'package3_feature10': 'Theo dõi đầy đủ sau kỳ thi cho đến khi có kết quả',
            'package3_feature11': 'Tổ chức kết quả (phi y tế, chỉ tổ chức nội dung)',
            'package3_feature12': 'Mẫu giao tiếp bệnh viện',
            'package3_feature13': 'Hỗ trợ thay đổi lịch trình (bao gồm tối đa 3 lần)',
            'package3_recommend_desc': 'Những người muốn có trải nghiệm an toàn và được quản lý hoàn hảo nhất.',
            'options_title_new': 'Dịch vụ tùy chọn',
            'option_card_title_1': 'Hướng dẫn phi y tế',
            'option_card_price_1': '₩82,800',
            'option_card_desc_1': 'Hướng dẫn phi y tế về các mục khám, cấu trúc kết quả và chăm sóc sau khám.',
            'option_card_title_2': 'Sơ đồ bệnh viện',
            'option_card_price_2': '₩27,600',
            'option_card_desc_2': 'Hiển thị sơ đồ và luồng di chuyển chính xác trong bệnh viện. Hữu ích cho người lần đầu đến.',
            'option_card_title_3': 'Tùy chọn thay đổi lịch hẹn',
            'option_card_desc_3': 'Tùy chọn dành cho khách hàng cần thay đổi lịch hẹn sau khi đã đặt.',
            'option_card_3_item_1': '1 lần thay đổi:',
            'option_card_3_item_2': 'Gói 2 lần thay đổi:',
            'option_card_3_item_3': 'Thay đổi không giới hạn:',
            'option_card_title_4': 'Yêu cầu hóa đơn tiếng Anh',
            'option_card_price_4': '₩27,600',
            'option_card_desc_4': 'Chúng tôi thay mặt bạn yêu cầu hóa đơn tiếng Anh phù hợp cho mục đích bảo hiểm.',
            'option_card_title_5': 'Yêu cầu kết quả CD',
            'option_card_price_5': '₩27,600',
            'option_card_desc_5': 'Chúng tôi thay mặt bạn yêu cầu đĩa CD kết quả hoặc các tệp hình ảnh bổ sung.',
            'option_card_title_6': 'Theo dõi kết quả khẩn',
            'option_card_price_6': '₩27,600',
            'option_card_desc_6': 'Gửi một tin nhắn theo dõi khẩn cấp đến bệnh viện.',
            'chatbot_header': 'Check Bot',
            'chatbot_placeholder': 'Nhập tin nhắn...',
            'chatbot_greeting': 'Xin chào! Bạn có câu hỏi nào về CHECKIT không? Vui lòng chọn một câu hỏi dưới đây hoặc tự nhập câu hỏi của bạn.',
            'greeting_response': 'Xin chào! Rất vui được gặp bạn. Nếu bạn có bất kỳ câu hỏi nào về CHECKIT, hãy chọn một câu hỏi dưới đây hoặc hỏi trực tiếp.',
            'q1': 'Làm cách nào để đặt lịch hẹn?',
            'a1': 'Quản lý CHECKIT tận tâm của bạn sẽ hỗ trợ bạn. Chỉ cần cho chúng tôi biết các mục khám và lịch trình mong muốn của bạn, chúng tôi sẽ cung cấp danh sách các bệnh viện phù hợp với tiêu chí của bạn để giúp bạn lựa chọn và xử lý việc đặt lịch hẹn cho bạn. Nhấp vào nút \'Đăng ký tư vấn ngay\' để để lại yêu cầu!',
            'q2': 'Bạn có hợp đồng với bệnh viện/nhân viên y tế không?',
            'a2': 'Không. CHECKIT không có mối quan hệ hợp đồng với bất kỳ bệnh viện cụ thể nào. Chúng tôi giúp bạn chọn bệnh viện phù hợp nhất bằng cách cung cấp thông tin khách quan theo quan điểm của bạn. Sức khỏe và sự hài lòng của bạn là ưu tiên hàng đầu của chúng tôi.',
            'q3': 'Bạn có thực hiện các hành vi y tế hoặc sắp xếp điều trị không?',
            'a3': 'Không, CHECKIT tuân thủ Đạo luật Dịch vụ Y tế và không thực hiện bất kỳ hành vi y tế hoặc sắp xếp phương pháp điều trị nào. Chúng tôi là một dịch vụ giúp bạn chỉ tập trung vào việc kiểm tra sức khỏe bằng cách tập trung vào các \'quy trình phi y tế\' như đặt lịch hẹn bệnh viện, phiên dịch và dịch kết quả.',
            'q4': 'Tôi có thể nhận được sự giúp đỡ gì vào ngày khám?',
            'a4': 'Vào ngày khám sức khỏe, người quản lý Check Bot của bạn sẽ đồng hành cùng bạn trên mọi nẻo đường để bạn không cảm thấy đơn độc do rào cản ngôn ngữ. Chúng tôi cung cấp hỗ trợ thời gian thực cho tất cả các quy trình giao tiếp trong bệnh viện, chẳng hạn như đăng ký, tư vấn và thanh toán, giúp bạn thoải mái tập trung vào việc kiểm tra sức khỏe mà không gặp bất tiện hay cô đơn do vấn đề ngôn ngữ.',
            'q5': 'Kết quả được gửi như thế nào?',
            'a5': 'Sau khi bạn cung cấp cho chúng tôi kết quả bằng tiếng Hàn mà bạn nhận được từ bệnh viện, chúng tôi sẽ cung cấp một bản dịch và tóm tắt đơn giản về nội dung chính bằng tiếng mẹ đẻ của bạn. Để tuân thủ luật y tế, chúng tôi không cung cấp ý kiến y tế hoặc giải thích chi tiết.',
            'unsupported_input': 'Đó là một câu hỏi thú vị! Hiện tại tôi chỉ có thể cung cấp các câu trả lời được cài sẵn, nhưng nếu bạn yêu cầu thông qua \'Đăng ký tư vấn\', một người quản lý chuyên nghiệp sẽ vui lòng hướng dẫn bạn.'
        }
    };

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
                if (element.placeholder) {
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

        if (chatbotContainer && chatbotContainer.classList.contains('show')) {
            resetAndShowGreeting();
        }
    };

    function changeLanguage(lang) {
        switchLanguage(lang);
    }

    const addMessage = (text, sender) => {
        if (!chatbotMessages) return;
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', sender);
        messageElement.innerHTML = text.replace(/\n/g, '<br>');
        chatbotMessages.appendChild(messageElement);
        scrollToBottom();
        return messageElement;
    };

    const addLoadingIndicator = () => {
        if (!chatbotMessages) return null;
        const loadingElement = document.createElement('div');
        loadingElement.classList.add('message', 'bot', 'loading-indicator');
        loadingElement.innerHTML = '<span></span><span></span><span></span>';
        chatbotMessages.appendChild(loadingElement);
        scrollToBottom();
        return loadingElement;
    };

    const scrollToBottom = () => {
        if (chatbotMessages) {
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        }
    };

    const showSuggestedQuestions = () => {
        if (!suggestedQuestionsContainer) return;
        suggestedQuestionsContainer.innerHTML = '';
        const langData = translations[currentLang];
        for (let i = 1; i <= 5; i++) {
            const qKey = `q${i}`;
            if (langData[qKey]) {
                const questionBtn = document.createElement('button');
                questionBtn.classList.add('suggested-question-btn');
                questionBtn.textContent = langData[qKey];
                questionBtn.addEventListener('click', () => {
                    addMessage(langData[qKey], 'user');
                    const loadingIndicator = addLoadingIndicator();

                    setTimeout(() => {
                        if (loadingIndicator) chatbotMessages.removeChild(loadingIndicator);
                        addMessage(langData[`a${i}`], 'bot');
                    }, 1200);
                });
                suggestedQuestionsContainer.appendChild(questionBtn);
            }
        }
        suggestedQuestionsContainer.style.display = 'flex';
        scrollToBottom();
    };

    const resetAndShowGreeting = () => {
        if (!chatbotMessages) return;
        chatbotMessages.innerHTML = '';
        const greeting = translations[currentLang]['chatbot_greeting'];
        addMessage(greeting, 'bot');
        showSuggestedQuestions();
    };

    mainLangButtons.forEach(button => {
        button.addEventListener('click', () => switchLanguage(button.dataset.lang));
    });

    if (chatbotLangButtons) {
        chatbotLangButtons.forEach(button => {
            button.addEventListener('click', () => switchLanguage(button.dataset.lang));
        });
    }

    window.changeLanguage = changeLanguage;

    if (openChatbotBtn) {
        openChatbotBtn.addEventListener('click', () => {
            if (chatbotContainer) {
                chatbotContainer.classList.add('show');
                document.body.classList.add('chatbot-open');
                resetAndShowGreeting();
            }
        });
    }

    if (closeChatbotBtn) {
        closeChatbotBtn.addEventListener('click', () => {
            if (chatbotContainer) {
                chatbotContainer.classList.remove('show');
                document.body.classList.remove('chatbot-open');
            }
        });
    }

    const handleSendMessage = () => {
        if (!chatbotInput || !chatbotMessages) return;
        const userMessage = chatbotInput.value.trim();
        if (userMessage) {
            addMessage(userMessage, 'user');
            chatbotInput.value = '';
            const loadingIndicator = addLoadingIndicator();

            setTimeout(() => {
                if (loadingIndicator) chatbotMessages.removeChild(loadingIndicator);

                const lowerCaseMessage = userMessage.toLowerCase();
                const langData = translations[currentLang];
                let response;

                const greetings = ['안녕', 'hi', 'hello', 'hey', '你好', 'xin chào'];
                if (greetings.some(greeting => lowerCaseMessage.includes(greeting))) {
                    response = langData['greeting_response'];
                } else {
                    response = langData['unsupported_input'];
                }

                addMessage(response, 'bot');
            }, 1200);
        }
    };

    if (chatbotSendBtn) {
        chatbotSendBtn.addEventListener('click', handleSendMessage);
    }

    if (chatbotInput) {
        chatbotInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleSendMessage();
            }
        });
    }

    const initialLang = new URLSearchParams(window.location.search).get('lang') || 'ko';
    switchLanguage(initialLang);
});
