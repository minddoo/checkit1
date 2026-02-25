document.addEventListener('DOMContentLoaded', () => {

    // --- 1. FULL, CORRECT & FINAL TRANSLATION DATA ---
    const translations = {
        ko: {
            'nav_home': '홈',
            'hero_title': '외국인을 위한 건강검진,\n언어의 장벽 없이 편안하게.',
            'hero_subtitle': '일정 누락, 이해하기 어려운 검진 안내, 한국어로만 제공되는 결과지까지.\nCHECKIT이 모든 비의료 과정을 해결합니다.',
            'hero_cta': '지금 바로 상담 신청',
            'service_for_title': '누구를 위한 서비스인가요?', 'individual_title': '개인 고객', 'individual_desc': '한국 거주/방문 외국인 개인이 언어 장벽 없이\n편안하게 건강검진을 받을 수 있도록 지원합니다.', 'corporate_title': '기업 고객', 'corporate_desc': '외국인 근로자의 단체 건강검진을 쉽고 효율적으로 관리하여,\n기업의 보건 관리 부담을 줄여드립니다.', 'learn_more': '더 알아보기',
            'why_us_title': '왜 CHECKIT을 선택해야 할까요?', 'why_us_subtitle_new': '의료 서비스의 높은 질에도 불구하고, 외국인들은 예약, 접수, 결과 확인 등 \'비의료 과정\'에서 어려움을 겪습니다.\nCHECKIT은 바로 이 공백을 채웁니다.',
            'why_us_feature1_title': '커뮤니케이션 전문', 'why_us_feature1_desc': '병원 선택부터 결과 번역까지, 언어와 문화의 장벽으로 인한 모든 소통 문제를 해결합니다.', 'why_us_feature2_title': '100% 고객 중심', 'why_us_feature2_desc': '병원과의 계약 없이 오직 고객의 입장에서, 고객에게 필요한 최적의 선택지를 제안하고 과정을 돕습니다.', 'why_us_feature3_title': '비의료 과정에 집중', 'why_us_feature3_desc': '의료 행위를 제외한 모든 부수적인 절차를 대행하여, 고객이 오직 건강검진에만 집중할 수 있도록 합니다.',
            'why_us_feature4_title': '합리적인 비용', 'why_us_feature4_desc': '의료기관과 연계 없이 독립적으로 운영되므로, 불필요한 중개 수수료가 없습니다. 순수 서비스 이용료만으로 이용 가능합니다.',
            'process_title': 'CHECKIT 이용 과정', 'process_step1_title': '상담 및 병원 선택 지원', 'process_step1_desc_new': '원하는 검진 항목과 일정 상담 후, 조건에 맞는 최적의 병원 리스트를 제공하여 선택을 돕고 예약을 진행합니다.', 'process_step2_title': '실시간 소통 지원', 'process_step2_desc_new': '검진 당일, 병원 내에서 발생하는 모든 소통을 실시간으로 지원하여 불편함이 없도록 합니다.', 'process_step3_title_new': '결과 번역 파일 전달', 'process_step3_desc_new': '고객님이 전달해주신 결과지를 고객님의 언어로 단순 번역 및 요약하여, 이메일이나 메신저를 통해 파일로 전달합니다.',
            'testimonials_title': '생생한 고객 후기', 'testimonials_subtitle': 'CHECKIT과 함께한 고객들의 목소리를 직접 들어보세요.',
            'testimonial1_text': '“한국에서 건강검진은 처음이라 막막했는데, CHECKIT 덕분에 병원 선택부터 예약, 검진 당일 소통까지 정말 편하게 진행했어요. 결과지도 모국어로 번역해주셔서 이해가 쉬웠습니다.”', 'testimonial1_author': '안나, 유학생', 'testimonial1_type': '한국 거주 외국인',
            'testimonial2_text': '“부모님을 한국에 초청해 건강검진을 시켜드리고 싶었는데, 언어와 절차 문제로 걱정이 많았어요. CHECKIT 매니저님이 모든 과정을 알아서 처리해주셔서 정말 든든했습니다.”', 'testimonial2_author': '데이비드, 해외 거주', 'testimonial2_type': '해외 거주 외국인 가족',
            'testimonial3_text': '“외국인 직원들의 단체 건강검진이 항상 골치 아픈 업무였는데, CHECKIT 덕분에 예약부터 결과 관리까지 정말 간편해졌습니다. 직원들의 만족도도 매우 높아요.”', 'testimonial3_author': '박팀장', 'testimonial3_type': '기업 고객 담당자',
            'contact_title_new': '궁금한 점이 있으신가요?', 'contact_subtitle_new': 'CHECKIT의 전문 매니저가 신속하고 친절하게 답변해 드립니다.', 
            'contact_form_email_label': '이메일 주소', 'contact_form_email_placeholder': '예: example@checkit.com', 'contact_form_phone_label': '연락처 (선택사항)', 'contact_form_phone_placeholder': '예: 010-1234-5678', 'contact_form_message_label': '문의 내용', 'contact_form_message_placeholder': '궁금한 점을 자세히 적어주세요.', 'contact_form_submit_button': '문의하기',
            'individual_page_title': '개인 고객 맞춤 서비스', 'individual_page_subtitle': 'CHECKIT은 한국에 거주하거나 방문하는 모든 외국인 개인이 언어의 장벽 없이 최상의 건강검진을 받을 수 있도록 돕습니다.',
            'individual_service1_title': '1:1 전담 매니저', 'individual_service1_desc': '상담 요청 즉시, 고객님의 언어를 구사하는 전담 매니저가 배정됩니다. 병원 선택, 예약, 일정 조율까지 모든 과정을 책임지고 관리합니다.',
            'individual_service2_title_new': '실시간 소통 지원', 'individual_service2_desc_new': '검진 당일, 물리적 동행 대신 메신저를 통해 병원 내 접수, 문진, 수납 등 모든 의사소통 과정을 실시간으로 지원하여 불편함이나 외로움 없이 검진에만 집중하도록 돕습니다.',
            'individual_service3_title_new': '결과지 번역 · 요약', 'individual_service3_desc_new': '고객님께서 병원으로부터 수령한 한국어 결과지를 사진이나 파일로 전달해주시면, 모국어로 핵심 내용을 단순 번역 및 요약하여 전달해 드립니다. (의료적 소견이나 상세 설명은 미포함)',
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
            'chatbot_header': 'Check봇',
            'chatbot_placeholder': '메시지를 입력하세요...',
            'chatbot_greeting': '안녕하세요! CHECKIT에 대해 궁금한 점이 있으신가요? 아래에서 질문을 선택하거나 직접 입력해주세요.',
            'greeting_response': '안녕하세요! 만나서 반가워요. CHECKIT에 대해 궁금한 점이 있으시면 아래 질문을 선택하거나 직접 물어보세요.',
            'q1': '예약은 어떻게 하나요?', 'a1': 'CHECKIT 전담 매니저가 도와드립니다. 원하시는 검진 항목과 일정을 알려주시면, 조건에 맞는 병원 목록을 전달드려 선택을 돕고, 예약까지 한 번에 진행해드립니다. \'지금 바로 상담 신청\' 버튼을 눌러 문의를 남겨주세요!',
            'q2': '병원/의료인과 계약된 구조인가요?', 'a2': '아닙니다. CHECKIT은 특정 병원과 계약 관계를 맺지 않습니다. 저희는 오직 고객님의 입장에서, 가장 적합한 병원을 찾으실 수 있도록 객관적인 정보 제공으로 선택을 돕습니다. 고객님의 건강과 만족이 저희의 최우선 목표입니다.',
            'q3': '의료 행위나 진료 알선을 하나요?', 'a3': '아니요, CHECKIT은 의료법을 준수하며 어떠한 의료 행위나 진료 알선도 하지 않습니다. 저희는 병원 예약, 통역, 결과지 번역 등 \'비의료 과정\'에 집중하여 고객님께서 건강검진에만 집중하실 수 있도록 돕는 서비스입니다.',
            'q4': '검진 당일 어떤 도움을 받을 수 있나요?', 'a4': '검진 당일, 언어의 장벽으로 인해 혼자라는 느낌이 들지 않도록 Check봇 매니저가 모든 순간을 함께합니다. 병원 내 접수, 문진, 수납 등 모든 의사소통 과정을 실시간으로 지원하여, 언어 문제로 인한 불편함이나 외로움 없이 편안하게 검진에만 집중하실 수 있도록 돕습니다.',
            'q5': '결과지는 어떻게 전달되나요?', 'a5': '고객님께서 병원으로부터 수령한 한국어 결과지를 전달해주시면, 저희가 고객님의 모국어로 핵심 내용을 단순 번역 및 요약하여 전달해 드립니다. 저희는 의료법을 준수하기에, 의학적 소견이나 상세한 설명은 제공하지 않습니다.',
            'unsupported_input': '흥미로운 질문이네요! 현재는 정해진 답변만 드릴 수 있지만, 더 자세한 내용은 \'상담 신청\'을 통해 문의하시면, 전문 매니저가 친절하게 안내해 드릴 거예요.'
        },
        en: {
            'nav_home': 'Home',
            'hero_title': 'Health Check-ups for Foreigners,\nComfortable Without Language Barriers.', 'hero_subtitle': 'From missed schedules and difficult-to-understand check-up guides to results provided only in Korean.\nCHECKIT solves all non-medical processes.', 'hero_cta': 'Apply for a Consultation Now',
            'service_for_title': 'Who is this service for?', 'individual_title': 'Individual Clients', 'individual_desc': 'We support foreign individuals residing in or visiting Korea to receive health check-ups comfortably\nwithout language barriers.', 'corporate_title': 'Corporate Clients', 'corporate_desc': 'We manage group health check-ups for foreign employees easily and efficiently,\nreducing the burden of corporate health care.', 'learn_more': 'Learn More',
            'why_us_title': 'Why Choose CHECKIT?', 'why_us_subtitle_new': 'Despite the high quality of medical services, foreigners face difficulties in \'non-medical processes\' such as booking, registration, and result checking.\nCHECKIT fills this very gap.',
            'why_us_feature1_title': 'Communication Specialists', 'why_us_feature1_desc': 'From hospital selection to result translation, we solve all communication problems caused by language and cultural barriers.', 'why_us_feature2_title': '100% Client-Centric', 'why_us_feature2_desc': 'Without any contracts with hospitals, we solely represent our clients, proposing the best options and assisting in the process.', 'why_us_feature3_title': 'Focus on Non-Medical Processes', 'why_us_feature3_desc': 'We handle all auxiliary procedures, excluding medical practice, allowing clients to focus solely on their health check-up.',
            'why_us_feature4_title': 'Reasonable Cost', 'why_us_feature4_desc': 'We operate independently without ties to medical institutions, so there are no unnecessary brokerage fees. You can use our service with only a pure service fee.',
            'process_title': 'CHECKIT Process', 'process_step1_title': 'Consultation & Hospital Selection Support', 'process_step1_desc_new': 'After consulting on desired check-up items and schedule, we provide a list of optimal hospitals that meet the conditions to help you choose and proceed with the reservation.', 'process_step2_title': 'Real-time Communication Support', 'process_step2_desc_new': 'On the day of the check-up, we provide real-time support for all communication within the hospital to ensure no inconvenience.', 'process_step3_title_new': 'Translated Result File Delivery', 'process_step3_desc_new': 'We provide a simple translation and summary of the result sheet you provide, and deliver it as a file via email or messenger.',
            'testimonials_title': 'Real Customer Reviews', 'testimonials_subtitle': 'Hear directly from customers who have been with CHECKIT.',
            'testimonial1_text': '“It was my first time getting a health check-up in Korea, so I was at a loss, but thanks to CHECKIT, the process from hospital selection to reservation and communication on the day of the check-up was really comfortable. The results were also easy to understand as they were translated into my native language.”', 'testimonial1_author': 'Anna, International Student', 'testimonial1_type': 'Foreign Resident in Korea',
            'testimonial2_text': '“I wanted to invite my parents to Korea for a health check-up, but I was worried about the language and procedures. I was so relieved that the CHECKIT manager took care of the entire process.”', 'testimonial2_author': 'David, Living Abroad', 'testimonial2_type': 'Family of Foreigner Living Abroad',
            'testimonial3_text': '“Group health check-ups for foreign employees were always a headache, but thanks to CHECKIT, everything from reservations to results management has become so simple. The employees are also very satisfied.”', 'testimonial3_author': 'Mr. Park', 'testimonial3_type': 'Corporate Client Manager',
            'contact_title_new': 'Do You Have Any Questions?', 'contact_subtitle_new': 'A CHECKIT professional manager will respond quickly and kindly.', 
            'contact_form_email_label': 'Email Address', 'contact_form_email_placeholder': 'e.g., example@checkit.com', 'contact_form_phone_label': 'Phone Number (Optional)', 'contact_form_phone_placeholder': 'e.g., 010-1234-5678', 'contact_form_message_label': 'Your Message', 'contact_form_message_placeholder': 'Please write your inquiry in detail.', 'contact_form_submit_button': 'Submit Inquiry',
            'individual_page_title': 'Personalized Services for Individual Clients', 'individual_page_subtitle': 'CHECKIT helps all foreign individuals residing in or visiting Korea receive the best health check-ups without language barriers.',
            'individual_service1_title': '1:1 Dedicated Manager', 'individual_service1_desc': 'As soon as you request a consultation, a dedicated manager who speaks your language is assigned. They responsibly manage the entire process from hospital selection, reservation, to schedule coordination.',
            'individual_service2_title_new': 'Real-time Communication Support', 'individual_service2_desc_new': 'Instead of physical accompaniment on the day of the check-up, we provide real-time support for all communication processes like hospital reception, consultation, and payment via messenger to help you focus on your check-up without inconvenience or loneliness.',
            'individual_service3_title_new': 'Result Translation & Summary', 'individual_service3_desc_new': 'If you provide us with the Korean result sheet received from the hospital as a photo or file, we will translate and summarize the key contents into your native language. (Medical opinions or detailed explanations are not included.)',
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
            'chatbot_header': 'Check Bot', 'chatbot_placeholder': 'Type a message...', 'chatbot_greeting': 'Hello! Do you have any questions about CHECKIT? Please select a question below or type your own.',
            'greeting_response': 'Hello! Nice to meet you. If you have any questions about CHECKIT, feel free to select a question below or ask me directly.',
            'q1': 'How do I make a reservation?', 'a1': 'Your dedicated CHECKIT manager will assist you. Just tell us your desired check-up items and schedule, and we will provide a list of hospitals that fit your criteria to help you choose, and then handle the reservation for you. Click the \'Apply for a Consultation Now\' button to leave an inquiry!',
            'q2': 'Are you contracted with hospitals/medical staff?', 'a2': 'No. CHECKIT does not have contractual relationships with any specific hospitals. We help you choose the most suitable hospital by providing objective information from your perspective. Your health and satisfaction are our top priorities.',
            'q3': 'Do you perform medical acts or arrange treatments?', 'a3': 'No, CHECKIT complies with the Medical Service Act and does not perform any medical acts or arrange treatments. We are a service that helps you focus solely on your health check-up by concentrating on \'non-medical processes\' such as hospital reservations, interpretation, and result translation.',
            'q4': 'What kind of help can I get on the day of the check-up?', 'a4': 'On the day of your check-up, your Check Bot manager is with you every step of the way so you don\'t feel alone due to language barriers. We provide real-time support for all communication processes within the hospital, such as registration, consultations, and payment, helping you focus comfortably on your check-up without inconvenience or loneliness caused by language issues.',
            'q5': 'How are the results delivered?', 'a5': 'Once you provide us with the Korean results you received from the hospital, we will provide a simple translation and summary of the key contents in your native language. To comply with medical law, we do not provide medical opinions or detailed explanations.',
            'unsupported_input': 'That\'s an interesting question! I can only provide pre-set answers for now, but if you inquire through \'Apply for a Consultation\', a professional manager will kindly guide you.'
        },
        cn: {
            'nav_home': '首页',
            'hero_title': '为外国人提供健康体检，\n无语言障碍，舒心便捷。', 'hero_subtitle': '从错过日程、难以理解的体检指南，到仅提供韩语版本的结果报告。\nCHECKIT为您解决所有非医疗过程中的难题。', 'hero_cta': '立即申请咨询',
            'service_for_title': '这项服务是为谁准备的？', 'individual_title': '个人客户', 'individual_desc': '我们帮助居住或访问韩国的外国个人无语言障碍地\n舒适接受健康体检。', 'corporate_title': '企业客户', 'corporate_desc': '我们轻松高效地管理外国员工的团体健康体检，\n减轻企业保健管理的负担。', 'learn_more': '了解更多',
            'why_us_title': '为什么选择CHECKIT？', 'why_us_subtitle_new': '尽管医疗服务质量很高，但外国人在预约、登记、确认结果等“非医疗过程”中仍面临困难。\nCHECKIT正是填补了这一空白。',
            'why_us_feature1_title': '沟通专家', 'why_us_feature1_desc': '从选择医院到结果翻译，我们解决所有因语言和文化障碍引起的沟通问题。', 'why_us_feature2_title': '100%以客户为中心', 'why_us_feature2_desc': '我们不与任何医院签订合同，完全代表客户，提出最佳选择并协助整个过程。', 'why_us_feature3_title': '专注于非医疗过程', 'why_us_feature3_desc': '我们处理除医疗行为外的所有辅助程序，让客户可以专注于他们的健康体检。',
            'why_us_feature4_title': '合理的费用', 'why_us_feature4_desc': '我们独立运营，不与医疗机构挂钩，因此没有不必要的中介费。只需支付纯粹的服务费即可使用。',
            'process_title': 'CHECKIT 使用流程', 'process_step1_title': '咨询与医院选择支持', 'process_step1_desc_new': '在就期望的体检项目和日程进行咨询后，我们提供符合条件的最佳医院列表，以帮助您选择并进行预约。', 'process_step2_title': '实时沟通支持', 'process_step2_desc_new': '在体检当天，我们为医院内的所有沟通提供实时支持，以确保没有不便。', 'process_step3_title_new': '翻译结果文件交付', 'process_step3_desc_new': '我们将您提供的结果报告进行简单的翻译和摘要,然后通过电子邮件或即时通讯工具以文件形式交付。',
            'testimonials_title': '真实客户评价', 'testimonials_subtitle': '听听CHECKIT客户的真实心声。',
            'testimonial1_text': '“这是我第一次在韩国做健康检查，本来很迷茫，但多亏了CHECKIT，从选择医院、预约到检查当天的沟通，一切都进行得非常顺利。结果报告也用我的母语进行了翻译，很容易理解。”', 'testimonial1_author': '安娜，留学生', 'testimonial1_type': '居住在韩国的外国人',
            'testimonial2_text': '“我想邀请父母来韩国做健康检查，但很担心语言和程序问题。CHECKIT的经理处理了所有过程，让我感到非常安心和可靠。”', 'testimonial2_author': '大卫，居住在海外', 'testimonial2_type': '海外居住的韩国家庭',
            'testimonial3_text': '“为外国员工安排集体健康检查一直是一件头疼的事，但多亏了CHECKIT，从预约到结果管理都变得非常简单。员工们的满意度也非常高。”', 'testimonial3_author': '朴经理', 'testimonial3_type': '企业客户负责人',
            'contact_title_new': '您有任何疑问吗？', 'contact_subtitle_new': 'CHECKIT的专业经理将迅速、亲切地为您解答。', 
            'contact_form_email_label': '电子邮件地址', 'contact_form_email_placeholder': '例如：example@checkit.com', 'contact_form_phone_label': '联系电话 (可选)', 'contact_form_phone_placeholder': '例如：010-1234-5678', 'contact_form_message_label': '咨询内容', 'contact_form_message_placeholder': '请详细填写您的问题。', 'contact_form_submit_button': '提交咨询',
            'individual_page_title': '个人客户专属服务', 'individual_page_subtitle': 'CHECKIT 帮助所有居住或访问韩国的外国个人无语言障碍地获得最佳的健康体检服务。',
            'individual_service1_title': '1:1专属经理', 'individual_service1_desc': '一旦您请求咨询，我们会立即为您指派一位能说您语言的专属经理。他们将负责管理从医院选择、预约到日程协调的整个过程。',
            'individual_service2_title_new': '实时沟通支持', 'individual_service2_desc_new': '体检当天，我们不提供实体陪同，而是通过即时通讯工具为医院接待、问诊、缴费等所有沟通环节提供实时支持，帮助您专注于体检，无任何不便或孤独感。',
            'individual_service3_title_new': '结果翻译与摘要', 'individual_service3_desc_new': '您将从医院收到的韩文结果单以照片或文件形式发送给我们，我们将为您翻译核心内容并提供摘要。（不包括医疗意见或详细解释。）',
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
            'chatbot_header': 'Check Bot', 'chatbot_placeholder': '输入消息...', 'chatbot_greeting': '您好！对CHECKIT有什么疑问吗？请从下方选择问题或直接输入。',
            'greeting_response': '您好！很高兴见到您。如果您对CHECKIT有任何疑问，请随时从下方选择问题或直接提问。',
            'q1': '如何预约？', 'a1': 'CHECKIT的专属经理将为您提供帮助。只需告诉我们您想要的检查项目和日程，我们将提供符合您条件的医院列表以帮助您选择，并一次性为您完成预约。请点击\'立即申请咨询\'按钮留下您的问题！',
            'q2': '是否与医院/医务人员签订了合同？', 'a2': '不是的。CHECKIT不与任何特定医院签订合同。我们完全从您的立场出发，通过提供客观信息来帮助您选择最合适的医院。您的健康和满意是我们的首要目标。',
            'q3': '你们是否提供医疗行为或安排治疗？', 'a3': '不，CHECKIT遵守医疗服务法，不进行任何医疗行为或安排治疗。我们是一项专注于\'非医疗过程\'的服务，如医院预约、口译和结果翻译，以帮助您专注于您的健康检查。',
            'q4': '体检当天能得到什么帮助？', 'a4': '体检当天，Check Bot经理将全程陪伴您，让您不会因为语言障碍而感到孤单。我们为医院内的所有沟通环节（如挂号、问诊、缴费等）提供实时支持，帮助您舒适地专注于体检，而不会因语言问题感到不便或孤独。', 
            'q5': '结果如何传递？', 'a5': '当您向我们提供您从医院收到的韩文结果报告后,我们将以您的母语提供核心内容的简单翻译和摘要。为遵守医疗法,我们不提供医疗意见或详细解释。',
            'unsupported_input': '这是一个有趣的问题！目前我只能提供预设的答案，但如果您通过“申请咨询”进行查询，专业的经理会亲切地为您引导。'
        },
        vn: {
            'nav_home': 'Trang chủ',
            'hero_title': 'Khám sức khỏe cho người nước ngoài,\nThoải mái không rào cản ngôn ngữ.', 'hero_subtitle': 'Từ lịch trình bị bỏ lỡ, hướng dẫn khám khó hiểu, đến kết quả chỉ có bằng tiếng Hàn.\nCHECKIT giải quyết mọi quy trình phi y tế.', 'hero_cta': 'Đăng ký tư vấn ngay',
            'service_for_title': 'Dịch vụ này dành cho ai?', 'individual_title': 'Khách hàng cá nhân', 'individual_desc': 'Chúng tôi hỗ trợ người nước ngoài cư trú hoặc đến thăm Hàn Quốc nhận khám sức khỏe một cách thoải mái\nmà không có rào cản ngôn ngữ.', 'corporate_title': 'Khách hàng doanh nghiệp', 'corporate_desc': 'Chúng tôi quản lý các cuộc khám sức khỏe nhóm cho nhân viên nước ngoài một cách dễ dàng và hiệu quả,\ngiảm bớt gánh nặng quản lý chăm sóc sức khỏe của doanh nghiệp.', 'learn_more': 'Tìm hiểu thêm',
            'why_us_title': 'Tại sao chọn CHECKIT?', 'why_us_subtitle_new': 'Mặc dù chất lượng dịch vụ y tế cao, người nước ngoài vẫn gặp khó khăn trong các “quy trình phi y tế” như đặt hẹn, đăng ký và kiểm tra kết quả.\nCHECKIT lấp đầy khoảng trống này.',
            'why_us_feature1_title': 'Chuyên gia giao tiếp', 'why_us_feature1_desc': 'Từ việc lựa chọn bệnh viện đến dịch kết quả, chúng tôi giải quyết mọi vấn đề giao tiếp do rào cản ngôn ngữ và văn hóa.', 'why_us_feature2_title': '100% lấy khách hàng làm trung tâm', 'why_us_feature2_desc': 'Không có bất kỳ hợp đồng nào với bệnh viện, chúng tôi hoàn toàn đại diện cho khách hàng của mình, đề xuất các lựa chọn tốt nhất và hỗ trợ trong quá trình này.', 'why_us_feature3_title': 'Tập trung vào các quy trình phi y tế', 'why_us_feature3_desc': 'Chúng tôi xử lý tất cả các thủ tục phụ trợ, không bao gồm hành nghề y tế, cho phép khách hàng chỉ tập trung vào việc khám sức khỏe của họ.',
            'why_us_feature4_title': 'Chi phí hợp lý', 'why_us_feature4_desc': 'Chúng tôi hoạt động độc lập mà không có ràng buộc với các tổ chức y tế, vì vậy không có phí môi giới không cần thiết. Bạn có thể sử dụng dịch vụ của chúng tôi chỉ với một khoản phí dịch vụ thuần túy.',
            'process_title': 'Quy trình sử dụng CHECKIT', 'process_step1_title': 'Tư vấn & Hỗ trợ lựa chọn bệnh viện', 'process_step1_desc_new': 'Sau khi tư vấn về các mục khám và lịch trình mong muốn, chúng tôi cungdQuy trình sử dụng CHECKIT cấp danh sách các bệnh viện tối ưu đáp ứng các điều kiện để giúp bạn lựa chọn và tiến hành đặt hẹn.', 'process_step2_title': 'Hỗ trợ giao tiếp thời gian thực', 'process_step2_desc_new': 'Vào ngày khám, chúng tôi cung cấp hỗ trợ thời gian thực cho tất cả các giao tiếp trong bệnh viện để đảm bảo không có sự bất tiện nào.', 'process_step3_title_new': 'Giao tệp kết quả đã dịch', 'process_step3_desc_new': 'Chúng tôi cung cấp một bản dịch và tóm tắt đơn giản của bảng kết quả mà bạn cung cấp, và gửi nó dưới dạng tệp qua email hoặc messenger.',
            'testimonials_title': 'Đánh giá thực tế của khách hàng', 'testimonials_subtitle': 'Hãy nghe trực tiếp từ những khách hàng đã đồng hành cùng CHECKIT.',
            'testimonial1_text': '“Đây là lần đầu tiên tôi đi khám sức khỏe ở Hàn Quốc nên rất hoang mang, nhưng nhờ có CHECKIT, quá trình từ chọn bệnh viện, đặt hẹn đến giao tiếp trong ngày khám đều rất thoải mái. Kết quả cũng được dịch sang tiếng mẹ đẻ của tôi nên rất dễ hiểu.”', 'testimonial1_author': 'Anna, Sinh viên quốc tế', 'testimonial1_type': 'Người nước ngoài cư trú tại Hàn Quốc',
            'testimonial2_text': '“Tôi muốn mời bố mẹ sang Hàn Quốc khám sức khỏe nhưng lại lo lắng về vấn đề ngôn ngữ và thủ tục. Tôi thực sự yên tâm vì đã có quản lý của CHECKIT lo toàn bộ quá trình.”', 'testimonial2_author': 'David, Sống ở nước ngoài', 'testimonial2_type': 'Gia đình người nước ngoài sống ở nước ngoài',
            'testimonial3_text': '“Việc khám sức khỏe định kỳ cho nhân viên nước ngoài luôn là một vấn đề đau đầu, nhưng nhờ có CHECKIT, mọi thứ từ đặt hẹn đến quản lý kết quả đã trở nên vô cùng đơn giản. Nhân viên của chúng tôi cũng rất hài lòng.”', 'testimonial3_author': 'Trưởng phòng Park', 'testimonial3_type': 'Quản lý khách hàng doanh nghiệp',
            'contact_title_new': 'Bạn có câu hỏi nào không?', 'contact_subtitle_new': 'Một quản lý chuyên nghiệp của CHECKIT sẽ trả lời nhanh chóng và thân thiện.', 
            'contact_form_email_label': 'Địa chỉ email', 'contact_form_email_placeholder': 'ví dụ: example@checkit.com', 'contact_form_phone_label': 'Số điện thoại (Tùy chọn)', 'contact_form_phone_placeholder': 'ví dụ: 010-1234-5678', 'contact_form_message_label': 'Nội dung yêu cầu', 'contact_form_message_placeholder': 'Vui lòng viết chi tiết yêu cầu của bạn.', 'contact_form_submit_button': 'Gửi yêu cầu',
            'individual_page_title': 'Dịch vụ Cá nhân hóa cho Khách hàng Cá nhân', 'individual_page_subtitle': 'CHECKIT giúp mọi cá nhân nước ngoài đang cư trú hoặc đến thăm Hàn Quốc được khám sức khỏe tốt nhất mà không gặp rào cản ngôn ngữ.',
            'individual_service1_title': 'Quản lý riêng 1:1', 'individual_service1_desc': 'Ngay khi bạn yêu cầu tư vấn, một quản lý riêng nói ngôn ngữ của bạn sẽ được chỉ định. Họ chịu trách nhiệm quản lý toàn bộ quy trình từ lựa chọn bệnh viện, đặt hẹn đến điều phối lịch trình.',
            'individual_service2_title_new': 'Hỗ trợ giao tiếp thời gian thực', 'individual_service2_desc_new': 'Thay vì đi cùng vào ngày khám, chúng tôi cung cấp hỗ trợ thời gian thực cho tất cả các quy trình giao tiếp như tiếp nhận tại bệnh viện, tư vấn và thanh toán qua ứng dụng nhắn tin để giúp bạn tập trung vào việc khám sức khỏe mà không gặp bất tiện hay cô đơn.',
            'individual_service3_title_new': 'Dịch và Tóm tắt Kết quả', 'individual_service3_desc_new': 'Nếu bạn cung cấp cho chúng tôi phiếu kết quả tiếng Hàn nhận được từ bệnh viện dưới dạng ảnh hoặc tệp, chúng tôi sẽ dịch và tóm tắt nội dung chính sang ngôn ngữ mẹ đẻ của bạn. (Không bao gồm ý kiến y tế hoặc giải thích chi tiết.)',
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
            'chatbot_header': 'Check Bot', 'chatbot_placeholder': 'Nhập tin nhắn...', 'chatbot_greeting': 'Xin chào! Bạn có câu hỏi nào về CHECKIT không? Vui lòng chọn một câu hỏi dưới đây hoặc tự nhập câu hỏi của bạn.',
            'greeting_response': 'Xin chào! Rất vui được gặp bạn. Nếu bạn có bất kỳ câu hỏi nào về CHECKIT, hãy chọn một câu hỏi dưới đây hoặc hỏi trực tiếp.',
            'q1': 'Làm cách nào để đặt lịch hẹn?', 'a1': 'Quản lý CHECKIT tận tâm của bạn sẽ hỗ trợ bạn. Chỉ cần cho chúng tôi biết các mục khám và lịch trình mong muốn của bạn, chúng tôi sẽ cung cấp danh sách các bệnh viện phù hợp với tiêu chí của bạn để giúp bạn lựa chọn và xử lý việc đặt lịch hẹn cho bạn. Nhấp vào nút \'Đăng ký tư vấn ngay\' để để lại yêu cầu!',
            'q2': 'Bạn có hợp đồng với bệnh viện/nhân viên y tế không?', 'a2': 'Không. CHECKIT không có mối quan hệ hợp đồng với bất kỳ bệnh viện cụ thể nào. Chúng tôi giúp bạn chọn bệnh viện phù hợp nhất một cách khách quan bằng cách cung cấp thông tin từ góc độ của bạn. Sức khỏe và sự hài lòng của bạn là ưu tiên hàng đầu của chúng tôi.',
            'q3': 'Bạn có thực hiện các hành vi y tế hoặc sắp xếp các phương pháp điều trị không?', 'a3': 'Không, CHECKIT tuân thủ Đạo luật Dịch vụ Y tế và không thực hiện bất kỳ hành vi y tế hoặc sắp xếp phương pháp điều trị nào. Chúng tôi là một dịch vụ giúp bạn chỉ tập trung vào việc kiểm tra sức khỏe bằng cách tập trung vào các \'quy trình phi y tế\' như đặt lịch hẹn bệnh viện, phiên dịch và dịch kết quả.',
            'q4': 'Tôi có thể nhận được sự giúp đỡ gì vào ngày khám?', 'a4': 'Vào ngày khám, quản lý của Check Bot sẽ đồng hành cùng bạn trong mọi khoảnh khắc để bạn không cảm thấy đơn độc vì rào cản ngôn ngữ. Chúng tôi hỗ trợ thời gian thực cho tất cả các quy trình giao tiếp trong bệnh viện như đăng ký, tư vấn và thanh toán, giúp bạn thoải mái tập trung vào việc khám sức khỏe mà không gặp phải sự bất tiện hay cô đơn do vấn đề ngôn ngữ.',
            'q5': 'Kết quả được gửi như thế nào?', 'a5': 'Sau khi bạn cung cấp cho chúng tôi kết quả bằng tiếng Hàn mà bạn nhận được từ bệnh viện, chúng tôi sẽ cung cấp một bản dịch và tóm tắt đơn giản về nội dung chính bằng tiếng mẹ đẻ của bạn. Để tuân thủ luật y tế, chúng tôi không cung cấp ý kiến y tế hoặc giải thích chi tiết.',
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
                    element.innerHTML = langData[key].replace(/\n/g, '<br>');
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
                        if(loadingIndicator) chatbotMessages.removeChild(loadingIndicator);
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
                if(loadingIndicator) chatbotMessages.removeChild(loadingIndicator);
                
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
