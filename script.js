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
            'why_us_subtitle_new': '의료 서비스의 높은 질에도 불구하고, 외국인들은 예약, 접수, 결과 확인 등 \'비의료 과정\'에서 어려움을 겪습니다.<br>CHECKIT은 바로 이 공백을 채웁니다.',
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
            'corporate_page_title': '기업 고객 - 토탈 솔루션',
            'corporate_page_subtitle': 'CHECKIT은 외국인 근로자의 건강을 체계적으로 관리하여,<br>기업의 보건 관리 부담을 줄여드립니다.',
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
            'corp_sec5_item1_desc': '단순 통역이 아닌, 병원 예약부터 결과지 번역 및 사후 관리까지 모든 비의료 과정을 전문 매니저가 직접 관리합니다.',
            'corp_sec5_item2_title': '실시간 실무 대응 역량',
            'corp_sec5_item2_desc': '검진 현장에서 발생하는 돌발 상황에 즉각적으로 대응할 수 있는 시스템을 갖추고 있습니다.',
            'corp_sec5_item3_title': '고객 중심의 독립성',
            'corp_sec5_item3_desc': '특정 병원에 종속되지 않아 오직 근로자의 편의와 기업의 효율만을 위해 최적의 선택지를 제안합니다.',
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
            'corp_sec7_step1_title': '명단 수령 및 분석',
            'corp_sec7_step1_1': '기업으로부터 검진 대상자 명단 수령 ',
            'corp_sec7_step1_2': '명단 확인 후 예약 및 검진 기간 우선순위 정리',
            'corp_sec7_step2_title': '개인별 예약 및 확정',
            'corp_sec7_step2_1': '근로자 대상 1:1 컨택 및 희망 일정·병원 선택',
            'corp_sec7_step2_2': '신속한 예약 진행 및 확정 문자 발송',
            'corp_sec7_step3_title': '집중 사전 가이드',
            'corp_sec7_step3_1': '검진 전 준비사항 및 주의사항 상세 안내',
            'corp_sec7_step3_2': '7일·3일·2일·1일 전 및 당일 실시간 1:1 알림 제공',
            'corp_sec7_step4_title': '검진 당일 현장 지원',
            'corp_sec7_step4_1': '검사 당일 실시간 소통 지원 및 불편 해소',
            'corp_sec7_step4_2': '진행 상황 모니터링 및 미검 항목 없는 완료 관리',
            'corp_sec7_step5_title': '결과 관리 및 사후 케어',
            'corp_sec7_step5_1': '검진 완료 후 결과 소요 기간 및 수령 방법 안내',
            'corp_sec7_step5_2': '결과 수령 후 단순 번역 제공 및 재검 여부 확인',
            'corp_sec7_step5_3': '회사 필수 제출 서류 안내 및 최종 제출까지 관리',
            'corp_sec7_step6_title': '최종 보고 및 데이터 업데이트',
            'corp_sec7_step6_1': '명단 파일에 개인별 진행 상황 및 특이사항 업데이트 저장',
            'corp_sec7_step6_2': '기업 요청 시 실시간 진행 현황 및 완료 명단 보고',
            'contact_form_company_label': '기업명',
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
            'corporate_page_title': 'Total Solutions for Corporate Clients',
            'corporate_page_subtitle': 'CHECKIT contributes to increasing productivity and reducing health management burdens by systematically managing the health of foreign employees.',
            'corp_sec1_title': 'Foreign Workers: Now a Necessity, Not an Option',
            'corp_sec1_subtitle': 'In a changing industrial landscape, securing and managing foreign talent has become the most critical task for sustainable growth.',
            'corp_sec1_item1_title': 'Surging Foreign Workforce',
            'corp_sec1_item1_desc': 'The proportion of foreigners in domestic manufacturing, production, construction, and all field-based enterprises is hitting record highs every year.',
            'corp_sec1_item2_title': 'Strengthened Legal Protection',
            'corp_sec1_item2_desc': 'Foreign workers are subject to the same Occupational Safety and Health Act and examination requirements as domestic workers.',
            'corp_sec1_item3_title': 'Core of Corporate Competitiveness',
            'corp_sec1_item3_desc': 'Retaining excellent foreign talent directly correlates with a company\'s productivity.',
            'corp_sec2_title': 'Health Check-ups Become the Most Powerful Welfare Benefit',
            'corp_sec2_subtitle': 'Differentiated health check-up support increases employee loyalty and enhances the corporate image.',
            'corp_sec2_item1_title': 'A Company People Want to Work For',
            'corp_sec2_item1_desc': 'Health management without language barriers is the #1 welfare benefit preferred by foreign workers.',
            'corp_sec2_item2_title': 'Maximizing Productivity',
            'corp_sec2_item2_desc': 'When healthy workers work stably, a company\'s production efficiency is maximized.',
            'corp_sec2_item3_title': 'Practice of ESG Management',
            'corp_sec2_item3_desc': 'Prove your value as a leading company that respects diversity and protects human rights.',
            'corp_sec3_title': 'However, the Reality Faced on the Ground is Different',
            'corp_sec3_subtitle': 'What is harder than the \'day\' of booking and receiving a check-up is the \'management gap\' before and after.',
            'corp_sec3_item1_title': 'Before Check-up: Helplessness and Fear',
            'corp_sec3_item1_p1': 'Questionnaires and precautions in Korean have limits even with translators.',
            'corp_sec3_item1_p2': 'Misunderstanding fasting instructions leads to cancelled tests or accidents.',
            'corp_sec3_item1_p3': 'They feel severe anxiety about communication even on the way to the hospital.',
            'corp_sec3_item2_title': 'After Check-up: Neglected Results',
            'corp_sec3_item2_p1': 'They can\'t read a single word of the result sheets they worked hard to get.',
            'corp_sec3_item2_p2': 'Missing red flags for re-examination frequently causes illnesses to worsen.',
            'corp_sec3_item2_p3': 'Companies only store the results; the communication gap with workers remains.',
            'corp_sec4_title': 'The Management Gap that Only CHECKIT Can Fill',
            'corp_sec4_subtitle': 'Hospitals only perform medical acts, and companies only receive results. CHECKIT handles \'every process\' in between.',
            'corp_sec4_side1_title': 'Domain of Hospitals & Companies',
            'corp_sec4_side1_p1': 'Conduct professional medical examinations',
            'corp_sec4_side1_p2': 'Generate check-up result data',
            'corp_sec4_side1_p3': 'Maintain legal mandatory records',
            'corp_sec4_side2_title': 'Domain of CHECKIT (Non-medical Processes)',
            'corp_sec4_side2_p1': '1:1 Native language dedicated manager matching',
            'corp_sec4_side2_p2': 'Perfect translation guide for questionnaires and precautions',
            'corp_sec4_side2_p3': 'Real-time text communication support on check-up day',
            'corp_sec4_side2_p4': 'Delivery of simple translation and summary files of results',
            'corp_sec4_side2_p5': 'Communication proxy for follow-up care (re-exam guides)',
            'corp_sec5_title': 'Why Only CHECKIT is Possible',
            'corp_sec5_subtitle': 'We set the standard for foreign worker management with incomparable expertise and technology.',
            'corp_sec5_item1_title': 'Multilingual Professional Talent Pool',
            'corp_sec5_item1_desc': 'Beyond simple interpretation, professional managers handle every non-medical stage, from hospital bookings to result translation and follow-up care.',
            'corp_sec5_item2_title': 'Real-time Operational Response',
            'corp_sec5_item2_desc': 'Equipped with systems to respond immediately to unexpected situations occurring at the check-up site.',
            'corp_sec5_item3_title': 'Client-Centric Independence',
            'corp_sec5_item3_desc': 'Independent from specific hospitals, we propose optimal options solely for worker convenience and corporate efficiency.',
            'corp_sec6_title': 'No Need to Change Existing Processes',
            'corp_sec6_subtitle': 'Perfectly complying with medical laws, we maximize only corporate operational efficiency.',
            'corp_sec6_item1_title': 'No Violation of Medical Law',
            'corp_sec6_item1_desc': 'We do not engage in patient solicitation or referral; there is zero legal risk as we only act as a proxy for non-medical communication.',
            'corp_sec6_item2_title': 'No Hospital Contract Structure',
            'corp_sec6_item2_desc': 'We do not have a structure of exchanging fees with hospitals. You may continue to use your company\'s existing affiliated hospitals.',
            'corp_sec6_item3_title': 'Immediate Implementation Possible',
            'corp_sec6_item3_desc': 'Without complex system integration, foreign workers\' check-up environments improve from tomorrow just by applying.',
            'corp_sec7_title': 'Sophisticated & Systematic Operating Process',
            'corp_sec7_subtitle': 'From list receipt to final reporting, CHECKIT manages and takes responsibility for every step.',
            'corp_sec7_step1_title': 'List Receipt & Analysis',
            'corp_sec7_step1_1': 'Receive candidate list from company ',
            'corp_sec7_step1_2': 'Verify list and organize priority by booking/check-up period',
            'corp_sec7_step2_title': 'Individual Booking & Confirmation',
            'corp_sec7_step2_1': '1:1 contact with workers; select preferred schedule/hospital',
            'corp_sec7_step2_2': 'Quick reservation processing and confirmation SMS delivery',
            'corp_sec7_step3_title': 'Intensive Pre-guidance',
            'corp_sec7_step3_1': 'Detailed instructions on preparation and precautions',
            'corp_sec7_step3_2': '1:1 real-time alerts (7, 3, 2, 1 days before & day of check-up)',
            'corp_sec7_step4_title': 'On-site Support on Check-up Day',
            'corp_sec7_step4_1': 'Real-time communication support and problem-solving',
            'corp_sec7_step4_2': 'Monitor progress and manage completion (no missing items)',
            'corp_sec7_step5_title': 'Result Management & Follow-up Care',
            'corp_sec7_step5_1': 'Guide on result duration and receiving method after completion',
            'corp_sec7_step5_2': 'Provide simple translation and check for re-examination need',
            'corp_sec7_step5_3': 'Guide on required documents and manage until final submission',
            'corp_sec7_step6_title': 'Final Reporting & Data Update',
            'corp_sec7_step6_1': 'Update and store individual progress and special notes in file',
            'corp_sec7_step6_2': 'Provide real-time progress status and completed list to company',
            'contact_form_company_label': 'Company Name',
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
            'hero_title': '为外国人提供健康体检，<br>无语言障碍，舒心便捷.',
            'hero_subtitle': '从错过日程、难以理解的体检指南，到仅提供韩语版本的结果报告.<br>CHECKIT为您解决所有非医疗过程中的难题.',
            'hero_cta': '立即申请咨询',
            'service_for_title': '这项服务是为谁准备的？',
            'individual_title': '个人客户',
            'individual_desc': '我们帮助居住或访问韩国的外国个人无语言障碍地<br>舒适接受健康体检.',
            'corporate_title': '企业客户',
            'corporate_desc': '我们轻松高效地管理外国员工의团体健康体检，<br>减轻企业保健管理的负担.',
            'learn_more': '了解更多',
            'why_us_title': '为什么选择CHECKIT？',
            'why_us_subtitle_new': '尽管医疗服务质量很高，但外国人在预约、登记、确认结果等“非医疗过程”中仍面临困难.<br>CHECKIT正是填补了这一空白.',
            'why_us_feature1_title': '沟通专家',
            'why_us_feature1_desc': '从选择医院到结果翻译，我们解决所有因语言 and 文化障碍引起的沟通问题.',
            'why_us_feature2_title': '100%以客户为中心',
            'why_us_feature2_desc': '我们不与任何医院签订合同，完全代表客户，提出最佳选择并协助整个过程.',
            'why_us_feature3_title': '专注于非医疗过程',
            'why_us_feature3_desc': '我们处理除医疗行为外的所有辅助程序，让客户可以专注于他们的健康体检.',
            'why_us_feature4_title': '合理的费用',
            'why_us_feature4_desc': '我们独立运营，不与医疗机构挂钩，因此没有不必要的中介费. 只需支付纯粹的服务费即可使用.',
            'process_title': 'CHECKIT 使用流程',
            'process_step1_title': '咨询与医院选择支持',
            'process_step1_desc_new': '在就期望的体检项目和日程进行咨询后，我们提供符合条件的最佳医院列表，以帮助您选择并进行预约.',
            'process_step2_title': '实时沟通支持',
            'process_step2_desc_new': '在体检当天，我们为医院内的所有沟通提供实时支持，以确保没有不便.',
            'process_step3_title_new': '翻译结果文件交付',
            'process_step3_desc_new': '我们将您提供的结果报告进行简单的翻译及摘要,然后通过电子邮件或即时通讯工具以文件形式交付.',
            'testimonials_title': '真实客户评价',
            'testimonials_subtitle': '听听CHECKIT客户的真实心声.',
            'testimonial1_text': '“这是我第一次在韩国做健康检查，本来很迷茫，但多亏了CHECKIT，从选择医院、预约到检查当天的沟通，一切都进行得非常顺利. 结果报告也用我的母语进行了翻译，很容易理解.”',
            'testimonial1_author': '安娜，留学生',
            'testimonial1_type': '居住在韩国的外国人',
            'testimonial2_text': '“我想邀请父母来韩国做健康检查，但很担心语言 and 程序问题. CHECKIT的经理处理了所有过程，让我感到非常安心 and 可靠.”',
            'testimonial2_author': '大卫，居住在海外',
            'testimonial2_type': '海外居住的韩国家庭',
            'testimonial3_text': '“为外国员工安排集体健康检查一直是一件头疼的事，但多亏了CHECKIT，从预约到结果管理都变得非常简单. 员工们的满意度也非常高.”',
            'testimonial3_author': '朴经理',
            'testimonial3_type': '企业客户负责人',
            'contact_title_new': '您有任何疑问吗？',
            'contact_subtitle_new': 'CHECKIT의专业经理将迅速、亲切地为您解答.',
            'contact_form_email_label': '电子邮件地址',
            'contact_form_email_placeholder': '例如：example@checkit.com',
            'contact_form_phone_label': '联系电话 (可选)',
            'contact_form_phone_placeholder': '例如：010-1234-5678',
            'contact_form_message_label': '咨询内容',
            'contact_form_message_placeholder': '请详细填写您的问题.',
            'contact_form_submit_button': '提交咨询',
            'individual_page_title': '个人客户专属服务',
            'individual_page_subtitle': 'CHECKIT 帮助所有居住 or 访问韩国的外国个人无语言障碍地获得最佳的健康体检服务.',
            'corporate_page_title': '企业客户全面解决方案',
            'corporate_page_subtitle': 'CHECKIT通过系统化管理外国员工健康，助力企业提高生产力并减轻健康管理负担.',
            'corp_sec1_title': '外国员工：现在是必然选择，而非可选',
            'corp_sec1_subtitle': '在不断变化的工业格局中，吸引和管理外国人才已成为企业可持续发展的最关键任务.',
            'corp_sec1_item1_title': '外国劳动力激增',
            'corp_sec1_item1_desc': '国内制造、生产、建设及所有现场企业的外国人比例每年都在创历史新高.',
            'corp_sec1_item2_title': '加强法律保护义务',
            'corp_sec1_item2_desc': '外国员工也同样受《职业安全卫生法》及体检义务的约束.',
            'corp_sec1_item3_title': '企业竞争力的核心',
            'corp_sec1_item3_desc': '保留优秀的外国人才直接关系到企业的生产力.',
            'corp_sec2_title': '健康体检成为最强大的福利制度',
            'corp_sec2_subtitle': '差异化的健康体检支持可提高员工忠诚度并提升企业形象.',
            'corp_sec2_item1_title': '向往的企业',
            'corp_sec2_item1_desc': '无语言障碍的健康管理是外国员工最青睐的第一大福利.',
            'corp_sec2_item2_title': '生产力最大化',
            'corp_sec2_item2_desc': '当健康的员工稳定 work 时，企业的生产效率才能得到最大发挥.',
            'corp_sec2_item3_title': 'ESG经营의实践',
            'corp_sec2_item3_desc': '证明您作为尊重多样性和保护人权的领先企业的价值.',
            'corp_sec3_title': '然而，在现场面临的现实却大不相同',
            'corp_sec3_subtitle': '比起预约 and 体检의“当天”，更困难的是前后的“管理真空”.',
            'corp_sec3_item1_title': '体检前：茫然与恐惧',
            'corp_sec3_item1_p1': '韩语填写的问卷 and 注意事项，即使使用翻译机也有局限.',
            'corp_sec3_item1_p2': '误解禁食说明导致检查取消 or 发生事故.',
            'corp_sec3_item1_p3': '从去医院的路上就开始对沟通感到严重的焦虑.',
            'corp_sec3_item2_title': '体检后：被忽视的结果',
            'corp_sec3_item2_p1': '辛辛苦苦拿到的结果单，自己却一个字也看不懂.',
            'corp_sec3_item2_p2': '错过需要复检的危险信号，经常导致病情恶化.',
            'corp_sec3_item2_p3': '企业只是存档结果单，与员工的沟通断层依然存在.',
            'corp_sec4_title': '只有 CHECKIT 才能填补的管理空白',
            'corp_sec4_subtitle': '医院只负责医疗行为，企业只负责接收结果. CHECKIT 负责两者之间的“所有过程”.',
            'corp_sec4_side1_title': '医院与企业的领域',
            'corp_sec4_side1_p1': '实施专业的医疗检查',
            'corp_sec4_side1_p2': '生成体检结果数据',
            'corp_sec4_side1_p3': '法律强制记录存档',
            'corp_sec4_side2_title': 'CHECKIT 的领域（非医疗过程）',
            'corp_sec4_side2_p1': '1:1 母语专属经理匹配',
            'corp_sec4_side2_p2': '问卷及事前注意事项完美翻译指南',
            'corp_sec4_side2_p3': '体检当天实时文字沟通支持',
            'corp_sec4_side2_p4': '交付结果单简单翻译及摘要文件',
            'corp_sec4_side2_p5': '代理后续管理（复检指南）沟通',
            'corp_sec5_title': '为什么只有 CHECKIT 能做到',
            'corp_sec5_subtitle': '我们以无可比拟的专业性和技术力树立外国员工管理的标准.',
            'corp_sec5_item1_title': '多语种专业人才库',
            'corp_sec5_item1_desc': '并非简单的翻译，而是由完美理解韩国医疗体系的多语种经理直接管理.',
            'corp_sec5_item2_title': '实时业务应对能力',
            'corp_sec5_item2_desc': '拥有能够立即应对体检现场发生的突发状况的体系.',
            'corp_sec5_item3_title': '以客户为中心的独立性',
            'corp_sec5_item3_desc': '不隶属于特定医院，仅为员工的便利 and 企业的效率提供最佳选择.',
            'corp_sec6_title': '无需改变现有流程',
            'corp_sec6_subtitle': '完美遵守医疗法，仅最大化企业的运营效率.',
            'corp_sec6_item1_title': '无违反医疗法行为',
            'corp_sec6_item1_desc': '不从事诱导 or 介绍患者的行为；仅代理非医疗沟通，完全没有法律风险.',
            'corp_sec6_item2_title': '无医院签约结构',
            'corp_sec6_item2_desc': '不与医院进行佣金交易. 您可以继续使用企业现有的合作医院.',
            'corp_sec6_item3_title': '可立即导入',
            'corp_sec6_item3_desc': '无需复杂的系统对接，只需申请服务，从明天起即可改善外国员工的体检环境.',
            'corp_sec7_title': '精细化、系统化的运营流程',
            'corp_sec7_subtitle': '从接收名单到最终报告，CHECKIT 负责并管理每一个环节.',
            'corp_sec7_step1_title': '名单接收与分析',
            'corp_sec7_step1_1': '从企业接收体检对象名单（如：西熙建设）',
            'corp_sec7_step1_2': '核实名单后根据预约/体检周期整理优先级',
            'corp_sec7_step2_title': '个人预约与确认',
            'corp_sec7_step2_1': '与员工进行 1:1 联系；选择期望日程及医院',
            'corp_sec7_step2_2': '快速办理预约并发送确认短信',
            'corp_sec7_step3_title': '强化事前引导',
            'corp_sec7_step3_1': '详细说明体检前准备工作及注意事项',
            'corp_sec7_step3_2': '提供 1:1 实时提醒（体检前 7、3、2、1 天及当天）',
            'corp_sec7_step4_title': '体检当天现场支持',
            'corp_sec7_step4_1': '体检当天实时沟通支持及问题解决',
            'corp_sec7_step4_2': '监控进度并管理完成情况（确保无遗漏项目）',
            'corp_sec7_step5_title': '结果管理与后续关怀',
            'corp_sec7_step5_1': '体检完成后告知结果所需时间及领取方式',
            'corp_sec7_step5_2': '领取结果后提供简单翻译并核实是否需要复检',
            'corp_sec7_step5_3': '指导公司必交文件并管理直至最终提交',
            'corp_sec7_step6_title': '最终报告与数据更新',
            'corp_sec7_step6_1': '在名单文件中更新并保存 personal 进度及特殊备注',
            'corp_sec7_step6_2': '根据企业要求报告实时进度及已完成人员名单',
            'contact_form_company_label': '企业名称',
            'chatbot_header': 'Check Bot',
            'chatbot_placeholder': '输入消息...',
            'chatbot_greeting': '您好！对CHECKIT有什么疑问吗？请从下方选择问题 or 直接输入.',
            'greeting_response': '您好！很高興见到您. 如果您对CHECKIT有任何疑问，请随时从下方选择问题 or 直接提问.',
            'q1': '如何预约？',
            'a1': 'CHECKIT 的专属经理将为您提供帮助. 只需告诉我们您想要的检查项目及日程，我们将提供符合您条件的医院列表以帮助您选择，并一次性为您完成预约. 请点击“立即申请咨询”按钮留下您的问题！',
            'q2': '是否与医院/医务人员签订了合同？',
            'a2': '不. CHECKIT 不与任何特定医院签订合同. 我们从您的角度出发，通过提供客观信息来帮助您选择最合适的医院. 您的健康 and 满意是我们的首要任务.',
            'q3': '你们是否从事医疗行为 or 安排治疗？',
            'a3': '不，CHECKIT 遵守医疗服务法，不从事任何医疗行为 or 安排治疗. 我们是一项专注于“非医疗过程”的服务，例如医院预约、口译 and 结果翻译，以帮助您只专注于您的健康检查.',
            'q4': '体检当天能得到什么帮助？',
            'a4': '在您体检当天，您的 Check Bot 经理会全程陪伴您，让您不会因为语言障碍而感到孤单. 我们为医院内的所有沟通流程（如挂号、会诊 and 付款）提供实时支持，帮助您在没有语言问题造成的不便 or 孤独感的情况下舒适地专注于您的检查.',
            'q5': '结果如何发送？',
            'a5': '您将从医院收到的韩文结果单发送给我们，我们将为您翻译核心内容 and 提供摘要. 为遵守医疗法，我们不提供医疗意见 or 详细解释.',
            'unsupported_input': '这是一个有趣的问题！目前我只能提供预设的答案，但如果您通过“申请咨询”进行查询，专业的经理会亲切地为您引导.'
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
            'why_us_subtitle_new': 'Mặc dù chất lượng dịch vụ y tế cao, người nước ngoài vẫn gặp khó khăn trong các “quy trình phi y tế” như đặt hẹn, đăng ký và kiểm tra kết quả.<br>CHECKIT lấp khoảng trống này.',
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
            'process_step1_desc_new': 'Sau khi tư vấn về các mục khám và lịch trình mong muốn, chúng tôi cung cấp danh sách các bệnh viện tối ưu đáp ứng các điều kiện để giúp bạn lựa chọn và tiến hành đặt hẹn.',
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
            'corporate_page_title': 'Giải pháp toàn diện cho khách hàng doanh nghiệp',
            'corporate_page_subtitle': 'CHECKIT góp phần nâng cao năng suất và giảm gánh nặng quản lý sức khỏe bằng cách quản lý sức khỏe của nhân viên nước ngoài một cách có hệ thống.',
            'corp_sec1_title': 'Lao động nước ngoài: Giờ là sự cần thiết, không phải lựa chọn',
            'corp_sec1_subtitle': 'Trong bối cảnh công nghiệp thay đổi, việc thu hút và quản lý nhân tài nước ngoài đã trở thành nhiệm vụ quan trọng nhất cho sự phát triển bền vững của doanh nghiệp.',
            'corp_sec1_item1_title': 'Lực lượng lao động nước ngoài tăng vọt',
            'corp_sec1_item1_desc': 'Tỷ lệ người nước ngoài trong các doanh nghiệp sản xuất, chế tạo, xây dựng và tất cả các doanh nghiệp tại hiện trường trong nước đang đạt mức cao kỷ lục mỗi năm.',
            'corp_sec1_item2_title': 'Tăng cường nghĩa vụ bảo vệ pháp lý',
            'corp_sec1_item2_desc': 'Người lao động nước ngoài cũng đối mặt với cùng một Đạo luật An toàn và Sức khỏe Nghề nghiệp và các yêu cầu khám sức khỏe như lao động trong nước.',
            'corp_sec1_item3_title': 'Cốt lõi của năng lực cạnh tranh doanh nghiệp',
            'corp_sec1_item3_desc': 'Giữ chân nhân tài nước ngoài xuất sắc có liên quan trực tiếp đến năng suất của một công ty.',
            'corp_sec2_title': 'Khám sức khỏe trở thành chế độ phúc lợi mạnh mẽ nhất',
            'corp_sec2_subtitle': 'Hỗ trợ khám sức khỏe khác biệt làm tăng sự trung thành của nhân viên và nâng cao hình ảnh công ty.',
            'corp_sec2_item1_title': 'Công ty mà mọi người muốn làm việc',
            'corp_sec2_item1_desc': 'Quản lý sức khỏe không rào cản ngôn ngữ là phúc lợi số 1 được người lao động nước ngoài ưa chuộng.',
            'corp_sec2_item2_title': 'Tối đa hóa năng suất',
            'corp_sec2_item2_desc': 'Khi nhân viên khỏe mạnh làm việc ổn định, hiệu quả sản xuất của công ty sẽ được tối đa hóa.',
            'corp_sec2_item3_title': 'Thực hành quản trị ESG',
            'corp_sec2_item3_desc': 'Chứng minh giá trị của bạn như một công ty hàng đầu tôn trọng sự đa dạng và bảo vệ nhân quyền.',
            'corp_sec3_title': 'Tuy nhiên, thực tế tại hiện trường lại khác biệt',
            'corp_sec3_subtitle': 'Điều khó khăn hơn cả \'ngày\' đặt hẹn và đi khám là \'khoảng trống quản lý\' trước và sau đó.',
            'corp_sec3_item1_title': 'Trước khi khám: Sự bất lực và sợ hãi',
            'corp_sec3_item1_p1': 'Các bảng câu hỏi và lưu ý bằng tiếng Hàn có giới hạn ngay cả khi sử dụng máy dịch.',
            'corp_sec3_item1_p2': 'Hiểu lầm hướng dẫn nhịn ăn dẫn đến việc hủy kiểm tra hoặc xảy ra tai nạn.',
            'corp_sec3_item1_p3': ' Họ cảm thấy lo lắng tột độ về giao tiếp ngay cả trên đường đến bệnh viện.',
            'corp_sec3_item2_title': 'Sau khi khám: Kết quả bị bỏ ngỏ',
            'corp_sec3_item2_p1': 'Họ không thể đọc nổi một chữ trong phiếu kết quả mà mình đã vất vả mới có được.',
            'corp_sec3_item2_p2': 'Bỏ lỡ các cảnh báo đỏ về việc cần khám lại thường khiến bệnh tình trở nên trầm trọng hơn.',
            'corp_sec3_item2_p3': 'Các công ty chỉ lưu trữ kết quả; khoảng cách giao tiếp với công nhân vẫn còn đó.',
            'corp_sec4_title': 'Khoảng trống quản lý mà chỉ CHECKIT có thể lấp đầy',
            'corp_sec4_subtitle': 'Bệnh viện chỉ thực hiện các hành vi y tế, và công ty chỉ nhận kết quả. CHECKIT xử lý \'mọi quy trình\' ở giữa.',
            'corp_sec4_side1_title': 'Lĩnh vực của Bệnh viện & Doanh nghiệp',
            'corp_sec4_side1_p1': 'Thực hiện các cuộc khám y tế chuyên nghiệp',
            'corp_sec4_side1_p2': 'Tạo dữ liệu kết quả khám sức khỏe',
            'corp_sec4_side1_p3': 'Lưu trữ hồ sơ bắt buộc theo luật định',
            'corp_sec4_side2_title': 'Lĩnh vực của CHECKIT (Quy trình phi y tế)',
            'corp_sec4_side2_p1': 'Kết nối quản lý chuyên trách 1:1 theo tiếng mẹ đẻ',
            'corp_sec4_side2_p2': 'Hướng dẫn dịch thuật hoàn hảo cho bảng câu hỏi và lưu ý',
            'corp_sec4_side2_p3': 'Hỗ trợ giao tiếp bằng văn bản thời gian thực vào ngày khám',
            'corp_sec4_side2_p4': 'Giao các tệp dịch thuật và tóm tắt đơn giản kết quả',
            'corp_sec4_side2_p5': 'Đại diện giao tiếp cho việc chăm sóc sau khám (hướng dẫn tái khám)',
            'corp_sec5_title': 'Tại sao chỉ có CHECKIT mới khả thi',
            'corp_sec5_subtitle': 'Chúng tôi thiết lập tiêu chuẩn cho việc quản lý lao động nước ngoài với chuyên môn và công nghệ không thể so sánh được.',
            'corp_sec5_item1_title': 'Đội ngũ nhân tài chuyên nghiệp đa ngôn ngữ',
            'corp_sec5_item1_desc': 'Không chỉ dừng lại ở việc phiên dịch đơn thuần, các quản lý chuyên nghiệp sẽ trực tiếp đảm nhận toàn bộ quy trình phi y tế, từ đặt lịch hẹn bệnh viện đến dịch kết quả và chăm sóc sau khám.',
            'corp_sec5_item2_title': 'Khả năng ứng biến vận hành thời gian thực',
            'corp_sec5_item2_desc': 'Được trang bị hệ thống để phản ứng ngay lập tức với các tình huống bất ngờ xảy ra tại hiện trường khám.',
            'corp_sec5_item3_title': 'Sự độc lập lấy khách hàng làm trung tâm',
            'corp_sec5_item3_desc': 'Độc lập với các bệnh viện cụ thể, chúng tôi đề xuất các lựa chọn tối ưu chỉ vì sự thuận tiện của công nhân và hiệu quả của doanh nghiệp.',
            'corp_sec6_title': 'Không cần thay đổi quy trình hiện có',
            'corp_sec6_subtitle': 'Tuân thủ hoàn hảo các luật lệ y tế, chúng tôi chỉ tối đa hóa hiệu quả vận hành của doanh nghiệp.',
            'corp_sec6_item1_title': 'Không vi phạm luật y tế',
            'corp_sec6_item1_desc': 'Chúng tôi không thực hiện hành vi lôi kéo hoặc giới thiệu bệnh nhân; không có rủi ro pháp lý vì chúng tôi chỉ đóng vai trò đại diện giao tiếp phi y tế.',
            'corp_sec6_item2_title': 'Không có cấu trúc hợp đồng với bệnh viện',
            'corp_sec6_item2_desc': 'Chúng tôi không có cấu trúc trao đổi phí với bệnh viện. Quý công ty có thể tiếp tục sử dụng các bệnh viện liên kết hiện có.',
            'corp_sec6_item3_title': 'Có thể triển khai ngay lập tức',
            'corp_sec6_item3_desc': 'Không cần tích hợp hệ thống phức tạp, môi trường khám sức khỏe của lao động nước ngoài sẽ cải thiện từ ngày mai chỉ bằng cách đăng ký.',
            'corp_sec7_title': 'Quy trình vận hành tinh vi và hệ thống',
            'corp_sec7_subtitle': 'Từ khi nhận danh sách đến báo cáo cuối cùng, CHECKIT quản lý và chịu trách nhiệm cho mọi bước.',
            'corp_sec7_step1_title': 'Tiếp nhận danh sách & Phân tích',
            'corp_sec7_step1_1': 'Nhận danh sách ứng viên từ công ty ',
            'corp_sec7_step1_2': 'Xác minh danh sách và sắp xếp ưu tiên theo lịch đặt hẹn/khám',
            'corp_sec7_step2_title': 'Đặt hẹn & Xác nhận cá nhân',
            'corp_sec7_step2_1': 'Liên hệ 1:1 với người lao động; chọn lịch trình/bệnh viện mong muốn',
            'corp_sec7_step2_2': 'Xử lý đặt hẹn nhanh chóng và gửi tin nhắn xác nhận SMS',
            'corp_sec7_step3_title': 'Hướng dẫn chuyên sâu trước khi khám',
            'corp_sec7_step3_1': 'Hướng dẫn chi tiết về các công việc chuẩn bị và lưu ý',
            'corp_sec7_step3_2': 'Thông báo nhắc nhở 1:1 (7, 3, 2, 1 ngày trước và ngày khám)',
            'corp_sec7_step4_title': 'Hỗ trợ tại hiện trường ngày khám',
            'corp_sec7_step4_1': 'Hỗ trợ giao tiếp thời gian thực và giải quyết vấn đề',
            'corp_sec7_step4_2': 'Theo dõi tiến độ và quản lý việc hoàn thành (không bỏ sót mục)',
            'corp_sec7_step5_title': 'Quản lý kết quả & Chăm sóc sau khám',
            'corp_sec7_step5_1': 'Hướng dẫn về thời gian chờ kết quả và cách thức nhận sau khi khám',
            'corp_sec7_step5_2': 'Cung cấp bản dịch đơn giản và kiểm tra nhu cầu tái khám',
            'corp_sec7_step5_3': 'Hướng dẫn các hồ sơ bắt buộc của công ty và quản lý đến khi nộp',
            'corp_sec7_step6_title': 'Báo cáo cuối cùng & Cập nhật dữ liệu',
            'corp_sec7_step6_1': 'Cập nhật và lưu trữ tiến độ cá nhân cùng các ghi chú đặc biệt',
            'corp_sec7_step6_2': 'Cung cấp báo cáo tiến độ thời gian thực và danh sách hoàn thành',
            'contact_form_company_label': 'Tên công ty',
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
