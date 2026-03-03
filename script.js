document.addEventListener('DOMContentLoaded', () => {

    // --- 1. FULL MULTILINGUAL DATA (KO, EN, CN, VN) ---
    const translations = {
        ko: {
            'nav_home': '홈', 'hero_cta': '지금 바로 상담 신청', 'learn_more': '더 알아보기',
            'platform_title': 'CHECKIT 플랫폼', 'platform_status_title': '나의 서비스 현황',
            'platform_close': '닫기', 'contact_success': '문의가 성공적으로 접수되었습니다!',
            'admin_title': '매니저 관리 대시보드', 'onboarding_title': '프로필 완성하기',
            'chatbot_manager_btn': '전담 매니저와 채팅하기',
            'stat_total_clients': '전체 고객', 'stat_pending_leads': '미처리 문의',
            'chart_distribution_title': '단계별 고객 분포',
            'admin_search_placeholder': '고객명 또는 이메일 검색...',
            'admin_filter_all': '전체 보기',
            'btn_export_csv': '리포트 다운로드 (CSV)',
            'btn_convert_client': '고객으로 등록',
            'nav_mypage': '마이페이지', 'nav_login': '로그인', 'nav_logout': '로그아웃',
            'platform_step1': '신청 완료', 'platform_step1_desc': '문의가 정상적으로 접수되었습니다.',
            'platform_step2': '예약 진행', 'platform_step2_desc': '희망하시는 지역의 병원과 일정을 조율 중입니다.',
            'platform_step3': '검진 안내', 'platform_step3_desc': '검진 당일 주의사항과 위치를 안내해 드립니다.',
            'platform_step4': '결과 확인', 'platform_step4_desc': '검진 결과 요약본이 준비되었습니다.',
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
            'testimonial1_text': '한국 병원이 처음이라 걱정이 많았는데, 매니저님이 친절하게 도와주셔서 무사히 검진을 마쳤어요.',
            'testimonial1_author': 'Nguyen Thuy', 'testimonial1_type': '베트남 고객',
            'testimonial2_text': '회사를 통해 단체 검진을 받았는데, 결과지를 제 나라 말로 읽을 수 있어서 정말 안심됐습니다.',
            'testimonial2_author': 'Li Wei', 'testimonial2_type': '중국 기업 고객',
            'testimonial3_text': '언어 때문에 검진을 미루고 있었는데, CHECKIT 덕분에 제 건강 상태를 정확히 알게 되었습니다.',
            'testimonial3_author': 'John Doe', 'testimonial3_type': '영어권 개인 고객',
            'contact_title_new': '궁금한 점이 있으신가요?',
            'contact_subtitle_new': 'CHECKIT의 전문가 팀이 최적의 솔루션을 제안해 드립니다.',
            'contact_form_email_label': '이메일 주소', 'contact_form_email_placeholder': '이메일을 입력하세요',
            'contact_form_phone_label': '전화번호', 'contact_form_phone_placeholder': '전화번호를 입력하세요',
            'contact_form_message_label': '문의 내용', 'contact_form_message_placeholder': '문의하실 내용을 입력하세요',
            'contact_form_submit_button': '문의하기',
            'chatbot_header': 'CHECKIT 고객센터', 'chatbot_placeholder': '궁금한 점을 물어보세요...',
            'corporate_page_title': '기업 고객 토탈 솔루션',
            'corporate_page_subtitle': '외국인 근로자의 건강을 체계적으로 관리하여, 기업의 생산성을 높이고 보건 관리 부담을 덜어드립니다.',
            'view_workflow': '실무과정 보기',
            'corp_sec1_title': '외국인 근로자, 이제 선택이 아닌 필수입니다',
            'corp_sec1_subtitle': '변화하는 산업 현장, 기업의 지속 가능한 성장을 위해 외국인 인력 확보와 관리는 가장 중요한 과제가 되었습니다.',
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
            'reality_item_title_2': '예약의 어려움',
            'reality_item_2_point_1': '외국인 전용 예약 창구 부족', 'reality_item_2_point_2': '본인 인증 절차의 번거로움',
            'reality_item_2_point_3': '희망 일정 조율의 어려움', 'reality_item_2_point_4': '대기 시간 발생에 대한 안내 부족',
            'reality_item_title_3': '사후 관리 부재',
            'reality_item_3_point_1': '결과지 수령 방법의 복잡함', 'reality_item_3_point_2': '이상 소견 발견 시 대처 미흡',
            'reality_item_3_point_3': '재검사 필요 시 안내 부족', 'reality_item_3_point_4': '지속적인 건강 관리의 한계',
            'reality_item_title_4': '심리적 불안감',
            'reality_item_4_point_1': '낯선 환경에서의 소외감', 'reality_item_4_point_2': '잘못된 진단에 대한 걱정',
            'reality_item_4_point_3': '비용 과다 청구에 대한 우려', 'reality_item_4_point_4': '정보 부족으로 인한 막연한 두려움',
            'reality_overtime_title': '시간이 지날수록 늘어나는 고민',
            'reality_overtime_p1': '검진을 미룰수록 건강에 대한 불안은 커져만 갑니다.',
            'reality_overtime_p2': '작은 증상을 방치하다 더 큰 병으로 이어지기도 합니다.',
            'reality_overtime_p3': '한국 생활의 안정은 건강에서 시작됩니다.',
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
            'package1_feature4': '1:1 전담 매니저 매칭', 'package1_feature5': '병원 위치 안내', 'package1_feature6': '검진 주의사항 안내',
            'package1_feature7': '검진 일정 리마인드', 'package1_feature8': '병원 행정 지원', 'package1_feature9': '기본 사후 관리',
            'package1_recommend_desc': '검진 경험이 있고 행정 지원만 필요한 분',
            'package2_feature1': '안심 플랜 모든 기능 포함', 'package2_feature2': '전문 의료 번역 (심화)', 'package2_feature3': '병원 현장 실시간 서포트',
            'package2_feature4': '이상 소견 발생 시 즉시 안내', 'package2_feature5': '추가 검사 예약 지원', 'package2_feature6': '의료진 소통 중개',
            'package2_feature7': '맞춤형 건강 리포트', 'package2_feature8': '영양 및 생활 가이드', 'package2_feature9': '우선 상담 혜택',
            'package2_recommend_desc': '한국 병원이 낯설고 꼼꼼한 케어를 원하는 분',
            'package3_feature1': '표준 플랜 모든 기능 포함', 'package3_feature2': '병원 현장 동행 서비스', 'package3_feature3': '결과지 심층 분석 및 상담',
            'package3_feature4': '24시간 응급 핫라인', 'package3_feature5': '대학병원 연계 서비스', 'package3_feature6': '가족 건강 관리 지원',
            'package3_feature7': 'VIP 전용 대기실 안내', 'package3_feature8': '프리미엄 건강 검진 설계', 'package3_feature9': '사후 정밀 추적 관리',
            'package3_feature10': '전문 통역사 배정', 'package3_feature11': '맞춤 식단 제공 (검진 후)', 'package3_feature12': '교통편 예약 지원', 'package3_feature13': '전담 간호사 상담',
            'package3_recommend_desc': '최고 수준의 의료 서비스와 완벽한 케어를 원하는 분',
            'options_title_new': '추가 옵션 서비스'
        },
        en: {
            'nav_home': 'Home', 'hero_cta': 'Apply Now', 'learn_more': 'Learn More',
            'platform_title': 'CHECKIT PLATFORM', 'platform_status_title': 'My Service Status',
            'platform_close': 'Close', 'contact_success': 'Inquiry submitted successfully!',
            'admin_title': 'Manager Dashboard', 'onboarding_title': 'Complete Your Profile',
            'chatbot_manager_btn': 'Chat with Manager',
            'stat_total_clients': 'Total Clients', 'stat_pending_leads': 'Pending Leads',
            'chart_distribution_title': 'Workflow Distribution',
            'admin_search_placeholder': 'Search by name or email...',
            'admin_filter_all': 'All Stages',
            'btn_export_csv': 'Download CSV',
            'btn_convert_client': 'Convert to Client',
            'nav_mypage': 'My Page', 'nav_login': 'Login', 'nav_logout': 'Logout',
            'platform_step1': 'Applied', 'platform_step1_desc': 'Your inquiry has been successfully received.',
            'platform_step2': 'Booking', 'platform_step2_desc': 'Coordinating with hospitals in your preferred area.',
            'platform_step3': 'Check-up Guide', 'platform_step3_desc': 'Providing precautions and location for your visit.',
            'platform_step4': 'Result', 'platform_step4_desc': 'Your health report summary is now available.',
            'hero_title': 'Specialized Health Check-up Booking for Foreigners',
            'hero_subtitle': 'Complex Korean hospital bookings and check-ups, CHECKIT helps you perfectly in your native language.',
            'service_for_title': 'Who is this service for?',
            'individual_title': 'Individual Clients',
            'individual_desc': 'From difficult bookings to result translations, a 1:1 dedicated manager takes care of you.',
            'corporate_title': 'Corporate Clients',
            'corporate_desc': 'Systematically manage foreign employees\' health to improve company productivity.',
            'why_us_title': 'Why CHECKIT?',
            'why_us_subtitle_new': 'The new standard in health check-up management for both foreign employees and companies.',
            'why_us_feature1_title': 'Native 1:1 Consulting',
            'why_us_feature1_desc': 'Relieve anxiety through communication without language barriers.',
            'why_us_feature2_title': 'Hospital Booking Agency',
            'why_us_feature2_desc': 'Book the optimal hospital according to your preferred region and schedule.',
            'why_us_feature3_title': 'Simple Result Translation',
            'why_us_feature3_desc': 'Summarize difficult medical terms into easy-to-understand native language.',
            'why_us_feature4_title': 'Reasonable Cost',
            'why_us_feature4_desc': 'Enjoy premium care services at an affordable price.',
            'process_title': 'Service Process',
            'process_step1_title': 'Application',
            'process_step1_desc_new': 'Apply for a consultation through the website or chatbot.',
            'process_step2_title': 'Booking & Guide',
            'process_step2_desc_new': 'The manager completes the booking and provides precautions.',
            'process_step3_title_new': 'Check-up & Follow-up',
            'process_step3_desc_new': 'Receive support on the day of the check-up and a summary of results.',
            'testimonials_title': 'Testimonials',
            'testimonials_subtitle': 'Many foreign clients are already with CHECKIT.',
            'testimonial1_text': 'I was worried about my first Korean hospital visit, but the manager helped me kindly, and I finished the check-up safely.',
            'testimonial1_author': 'Nguyen Thuy', 'testimonial1_type': 'Vietnamese Client',
            'testimonial2_text': 'I had a group check-up through my company, and I was so relieved to read the results in my own language.',
            'testimonial2_author': 'Li Wei', 'testimonial2_type': 'Chinese Corporate Client',
            'contact_title_new': 'Any Questions?',
            'contact_subtitle_new': 'The CHECKIT expert team will propose the optimal solution.',
            'contact_form_email_label': 'Email Address', 'contact_form_email_placeholder': 'Enter your email',
            'contact_form_phone_label': 'Phone Number', 'contact_form_phone_placeholder': 'Enter your phone number',
            'contact_form_message_label': 'Message', 'contact_form_message_placeholder': 'Enter your inquiry',
            'contact_form_submit_button': 'Submit',
            'chatbot_header': 'CHECKIT Help Center', 'chatbot_placeholder': 'Ask any questions...',
            'corporate_page_title': 'Total Solutions for Corporate',
            'corporate_page_subtitle': 'Systematically manage the health of foreign workers to increase productivity and reduce the burden of health management.',
            'view_workflow': 'View Workflow',
            'corp_sec1_title': 'Foreign Workers: Now a Necessity, Not a Choice',
            'individual_page_title': 'Individual Client Services',
            'individual_page_subtitle': 'Complex health check-ups, now receive them comfortably in your native language.',
            'expectation_title': 'Korean Healthcare: Expectation vs. Reality',
            'expectation_subtitle': 'Excellent Korean medical system, but still a high wall for foreigners.',
            'expectation_item_title_1': 'Reasonable Cost', 'expectation_item_desc_1': 'Enjoy world-class medical services at reasonable prices.',
            'expectation_item_title_2': 'Convenient Accessibility', 'expectation_item_desc_2': 'Professional hospitals are located near you everywhere.',
            'expectation_item_title_3': 'Advanced Medical Equipment', 'expectation_item_desc_3': 'Accurate diagnosis is possible with the latest technology and equipment.',
            'expectation_item_title_4': 'Fast Process', 'expectation_item_desc_4': 'Proceed quickly from booking to check-up without waiting.',
            'reality_title': 'But the reality is different',
            'reality_item_title_1': 'Communication Barriers',
            'reality_item_1_point_1': 'Limited understanding of medical terms', 'reality_item_1_point_2': 'Difficulty in explaining symptoms',
            'reality_item_1_point_3': 'Canceled tests due to misunderstandings', 'reality_item_1_point_4': 'Anxiety about navigating hospitals',
            'reality_item_title_2': 'Booking Difficulties',
            'reality_item_2_point_1': 'Lack of dedicated reservation counters', 'reality_item_2_point_2': 'Cumbersome authentication procedures',
            'reality_item_2_point_3': 'Difficulty in coordinating schedules', 'reality_item_2_point_4': 'Insufficient information about waiting times',
            'reality_overtime_title': 'Growing Concerns Over Time',
            'solution_title': 'CHECKIT Solution',
            'solution_subtitle': 'We\'ll handle the difficult process. You just think about your health.',
            'individual_service1_title': '1:1 Dedicated Manager', 'individual_service1_desc': 'A reliable partner guiding you in your native language.',
            'individual_service2_title_new': 'Real-time Communication', 'individual_service2_desc_new': 'We immediately resolve any situations at the hospital.',
            'individual_service3_title_new': 'Simple Result Summary', 'individual_service3_desc_new': 'We summarize complex medical terms into easy words.',
            'packages_title': 'Recommended Packages',
            'package1_title': 'Safety Plan', 'package1_price': '₩50,000',
            'package2_title': 'Standard Plan', 'package2_price': '₩100,000',
            'package3_title': 'Premium Plan', 'package3_price': '₩200,000',
            'package_includes': 'Includes', 'package_recommend_title': 'Recommended For',
            'package1_feature1': 'Hospital Booking Agency', 'package1_feature2': 'Questionnaire Translation', 'package1_feature3': 'Result Summary (PDF)',
            'package1_recommend_desc': 'Those who need administrative support only.',
            'options_title_new': 'Additional Optional Services'
        },
        cn: {
            'nav_home': '首页', 'hero_cta': '立即申请', 'learn_more': '了解更多',
            'platform_title': 'CHECKIT 平台', 'platform_status_title': '我的服务状态',
            'platform_close': '关闭', 'contact_success': '咨询已成功提交！',
            'admin_title': '经理管理后台', 'onboarding_title': '完善个人资料',
            'chatbot_manager_btn': '与经理聊天',
            'stat_total_clients': '总客户数', 'stat_pending_leads': '待处理咨询',
            'chart_distribution_title': '各阶段客户分布',
            'admin_search_placeholder': '搜索姓名或邮箱...',
            'admin_filter_all': '所有阶段',
            'btn_export_csv': '下载 CSV',
            'btn_convert_client': '注册为客户',
            'nav_mypage': '我的页面', 'nav_login': '登录', 'nav_logout': '登出',
            'platform_step1': '申请完成', 'platform_step1_desc': '您的咨询已成功受理。',
            'platform_step2': '正在预约', 'platform_step2_desc': '正在为您协调偏好地区的医院和时间。',
            'platform_step3': '体检指南', 'platform_step3_desc': '为您提供体检当天的注意事项和位置。',
            'platform_step4': '结果确认', 'platform_step4_desc': '体检结果摘要已准备就绪。',
            'hero_title': '面向外国人的专业健康检查预约服务',
            'hero_subtitle': '复杂的韩国医院预约和健康检查，CHECKIT 用您的母语为您提供完美帮助。',
            'service_for_title': '该服务面向谁？',
            'individual_title': '个人客户',
            'individual_desc': '从困难的预约到结果翻译，1:1 专属经理为您提供全方位照顾。',
            'corporate_title': '企业客户',
            'corporate_desc': '系统管理外籍员工 health，提高企业生产力。',
            'why_us_title': '为什么选择 CHECKIT？',
            'why_us_subtitle_new': '外籍员工和企业都满意的健康检查管理新标准',
            'why_us_feature1_title': '母语 1:1 咨询',
            'why_us_feature1_desc': '通过无语言障碍的沟通消除焦虑。',
            'why_us_feature2_title': '医院预约代办',
            'why_us_feature2_desc': '根据您偏好的地区和时间预约最合适的医院。',
            'why_us_feature3_title': '结果单简易翻译',
            'why_us_feature3_desc': '将困难的医学术语总结为易于理解的母语。',
            'why_us_feature4_title': '费用合理',
            'why_us_feature4_desc': '以实惠的价格享受优质的护理服务。',
            'process_title': '服务流程',
            'process_step1_title': '申请服务',
            'process_step1_desc_new': '通过网站或聊天机器人申请咨询。',
            'process_step2_title': '预约及指南',
            'process_step2_desc_new': '经理完成医院预约并告知注意事项。',
            'process_step3_title_new': '检查及后续管理',
            'process_step3_desc_new': '在检查当天获得支持并收到结果单摘要。',
            'testimonials_title': '客户评价',
            'testimonials_subtitle': '已有许多外国客户选择了 CHECKIT。',
            'testimonial1_text': '我第一次去韩国医院很担心，但经理非常亲切地帮助我，让我顺利完成了检查。',
            'testimonial1_author': '阮翠', 'testimonial1_type': '越南客户',
            'testimonial2_text': '我通过公司参加了集体检查，能用母语阅读结果单让我感到非常安心。',
            'testimonial2_author': '李伟', 'testimonial2_type': '中国企业客户',
            'contact_title_new': '有什么疑问吗？',
            'contact_subtitle_new': 'CHECKIT 专家团队将为您提供最佳解决方案。',
            'contact_form_email_label': '电子邮箱', 'contact_form_email_placeholder': '请输入邮箱',
            'contact_form_phone_label': '电话号码', 'contact_form_phone_placeholder': '请输入电话',
            'contact_form_message_label': '咨询内容', 'contact_form_message_placeholder': '请输入咨询内容',
            'contact_form_submit_button': '提交咨询',
            'chatbot_header': 'CHECKIT 帮助中心', 'chatbot_placeholder': '请问有什么可以帮您...',
            'corporate_page_title': '企业客户整体解决方案',
            'corporate_page_subtitle': '系统管理外籍员工 health，提高企业生产力，减轻健康管理负担。',
            'view_workflow': '查看业务流程',
            'individual_page_title': '个人客户服务',
            'individual_page_subtitle': '复杂的健康检查，现在用母语轻松完成。',
            'expectation_title': '韩国医疗：期待与现实',
            'reality_title': '但现实并非如此',
            'solution_title': 'CHECKIT 解决方案',
            'solution_subtitle': '把困难交给由于我们，您只需关注健康。',
            'individual_service1_title': '1:1 专属经理',
            'individual_service2_title_new': '实时沟通',
            'individual_service3_title_new': '结果单简易摘要',
            'packages_title': '推荐套餐',
            'package1_title': '安心计划', 'package1_price': '₩50,000',
            'package2_title': '标准计划', 'package2_price': '₩100,000',
            'package3_title': '至尊计划', 'package3_price': '₩200,000',
            'package_includes': '包含内容', 'package_recommend_title': '推荐对象',
            'options_title_new': '附加可选服务'
        },
        vn: {
            'nav_home': 'Trang chủ', 'hero_cta': 'Đăng ký ngay', 'learn_more': 'Xem thêm',
            'platform_title': 'Nền tảng CHECKIT', 'platform_status_title': 'Trạng thái dịch vụ',
            'platform_close': 'Đóng', 'contact_success': 'Yêu cầu đã được gửi thành công!',
            'admin_title': 'Bảng điều khiển quản lý', 'onboarding_title': 'Hoàn thiện hồ sơ',
            'chatbot_manager_btn': 'Chat với quản lý',
            'stat_total_clients': 'Tổng khách hàng', 'stat_pending_leads': 'Yêu cầu chưa xử lý',
            'chart_distribution_title': 'Phân bổ theo giai đoạn',
            'admin_search_placeholder': 'Tìm theo tên hoặc email...',
            'admin_filter_all': 'Tất cả giai đoạn',
            'btn_export_csv': 'Tải xuống CSV',
            'btn_convert_client': 'Đăng ký khách hàng',
            'nav_mypage': 'Trang của tôi', 'nav_login': 'Đăng nhập', 'nav_logout': 'Đăng xuất',
            'platform_step1': 'Đã đăng ký', 'platform_step1_desc': 'Yêu cầu của bạn đã được tiếp nhận thành công.',
            'platform_step2': 'Đang đặt lịch', 'platform_step2_desc': 'Đang điều phối với bệnh viện tại khu vực bạn mong muốn.',
            'platform_step3': 'Hướng dẫn khám', 'platform_step3_desc': 'Cung cấp các lưu ý và địa điểm cho ngày khám.',
            'platform_step4': 'Kết quả', 'platform_step4_desc': 'Bản tóm tắt kết quả khám sức khỏe đã sẵn sàng.',
            'hero_title': 'Dịch vụ đặt lịch khám sức khỏe chuyên nghiệp cho người nước ngoài',
            'hero_subtitle': 'Đặt lịch bệnh viện và khám sức khỏe tại Hàn Quốc không còn khó khăn, CHECKIT hỗ trợ bạn hoàn hảo bằng tiếng mẹ đẻ.',
            'service_for_title': 'Dịch vụ này dành cho ai?',
            'individual_title': 'Khách hàng cá nhân',
            'individual_desc': 'Từ đặt lịch khó khăn đến dịch kết quả, quản lý riêng 1:1 sẽ chăm sóc bạn.',
            'corporate_title': 'Khách hàng doanh nghiệp',
            'corporate_desc': 'Quản lý sức khỏe lao động nước ngoài một cách hệ thống để tăng năng suất doanh nghiệp.',
            'why_us_title': 'Tại sao chọn CHECKIT?',
            'why_us_subtitle_new': 'Tiêu chuẩn mới trong quản lý khám sức khỏe cho cả người lao động nước ngoài và doanh nghiệp.',
            'why_us_feature1_title': 'Tư vấn 1:1 bằng tiếng mẹ đẻ',
            'why_us_feature1_desc': 'Giải tỏa lo lắng thông qua giao tiếp không rào cản ngôn ngữ.',
            'why_us_feature2_title': 'Đại lý đặt lịch bệnh viện',
            'why_us_feature2_desc': 'Đặt lịch bệnh viện tối ưu theo khu vực và lịch trình mong muốn.',
            'why_us_feature3_title': 'Dịch kết quả đơn giản',
            'why_us_feature3_desc': 'Tóm tắt các thuật ngữ y khoa khó hiểu sang tiếng mẹ đẻ dễ hiểu.',
            'why_us_feature4_title': 'Chi phí hợp lý',
            'why_us_feature4_desc': 'Tận hưởng dịch vụ chăm sóc cao cấp với mức giá phải chăng.',
            'process_title': 'Quy trình dịch vụ',
            'process_step1_title': 'Đăng ký dịch vụ',
            'process_step1_desc_new': 'Đăng ký tư vấn qua website hoặc chatbot.',
            'process_step2_title': 'Đặt lịch & Hướng dẫn',
            'process_step2_desc_new': 'Quản lý hoàn tất đặt lịch và hướng dẫn các lưu ý.',
            'process_step3_title_new': 'Khám & Chăm sóc sau khám',
            'process_step3_desc_new': 'Nhận hỗ trợ vào ngày khám và bản tóm tắt kết quả.',
            'testimonials_title': 'Đánh giá của khách hàng',
            'testimonials_subtitle': 'Nhiều khách hàng nước ngoài đã tin dùng CHECKIT.',
            'testimonial1_text': 'Lần đầu đi bệnh viện Hàn Quốc tôi rất lo lắng, nhưng quản lý đã giúp đỡ tận tình nên tôi đã hoàn thành khám sức khỏe an toàn.',
            'testimonial1_author': 'Nguyễn Thủy', 'testimonial1_type': 'Khách hàng Việt Nam',
            'testimonial2_text': 'Tôi đã khám sức khỏe tập thể qua công ty, và thật an tâm khi có thể đọc kết quả bằng ngôn ngữ của mình.',
            'testimonial2_author': 'Lý Vĩ', 'testimonial2_type': 'Khách hàng doanh nghiệp Trung Quốc',
            'contact_title_new': 'Bạn có thắc mắc?',
            'contact_subtitle_new': 'Đội ngũ chuyên gia của CHECKIT sẽ đề xuất giải pháp tối ưu.',
            'contact_form_email_label': 'Địa chỉ Email', 'contact_form_email_placeholder': 'Nhập email của bạn',
            'contact_form_phone_label': 'Số điện thoại', 'contact_form_phone_placeholder': 'Nhập số điện thoại',
            'contact_form_message_label': 'Nội dung liên hệ', 'contact_form_message_placeholder': 'Nhập nội dung thắc mắc',
            'contact_form_submit_button': 'Gửi yêu cầu',
            'chatbot_header': 'Trung tâm hỗ trợ CHECKIT', 'chatbot_placeholder': 'Hãy đặt câu hỏi...',
            'corporate_page_title': 'Giải pháp tổng thể cho doanh nghiệp',
            'corporate_page_subtitle': 'Quản lý sức khỏe lao động nước ngoài một cách hệ thống, tăng năng suất và giảm gánh nặng quản lý y tế.',
            'view_workflow': 'Xem quy trình làm việc',
            'individual_page_title': 'Dịch vụ khách hàng cá nhân',
            'individual_page_subtitle': 'Khám sức khỏe phức tạp, giờ đây hãy thực hiện thoải mái bằng tiếng mẹ đẻ.',
            'expectation_title': 'Y tế Hàn Quốc: Kỳ vọng và Thực tế',
            'reality_title': 'Nhưng thực tế lại khác',
            'solution_title': 'Giải pháp CHECKIT',
            'solution_subtitle': 'Hãy để chúng tôi lo những việc khó khăn. Bạn chỉ cần lo cho sức khỏe의 mình.',
            'individual_service1_title': 'Quản lý riêng 1:1',
            'individual_service2_title_new': 'Giao tiếp thời gian thực',
            'individual_service3_title_new': 'Tóm tắt kết quả đơn giản',
            'packages_title': 'Gói dịch vụ đề xuất',
            'package1_title': 'Gói An Tâm', 'package1_price': '₩50,000',
            'package2_title': 'Gói Tiêu Chuẩn', 'package2_price': '₩100,000',
            'package3_title': 'Gói Cao Cấp', 'package3_price': '₩200,000',
            'package_includes': 'Bao gồm', 'package_recommend_title': 'Dành cho',
            'options_title_new': 'Dịch vụ tùy chọn thêm'
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
        
        const authBtn = document.getElementById('platform-auth-btn');
        if (authBtn) {
            const user = firebase.auth().currentUser;
            if (user) authBtn.textContent = data['nav_mypage'] || 'My Page';
            else authBtn.textContent = data['nav_login'] || 'Login';
        }
        const logoutBtn = document.getElementById('logout-btn');
        if (logoutBtn) logoutBtn.textContent = data['nav_logout'] || 'Logout';
    };
    window.changeLanguage = switchLanguage;

    const initLangSwitch = () => {
        document.querySelectorAll('#language-switcher .lang-btn').forEach(btn => {
            btn.onclick = () => switchLanguage(btn.dataset.lang);
        });
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
        const auth = firebase.auth(), db = firebase.firestore(), storage = firebase.storage();

        db.enablePersistence({ synchronizeTabs: true }).catch(err => console.error("Persistence fail:", err.code));

        document.querySelectorAll('.contact-form, .contact-form-body').forEach(form => {
            form.onsubmit = async (e) => {
                e.preventDefault();
                const btn = form.querySelector('button[type="submit"]');
                btn.disabled = true;
                try {
                    await db.collection("contact_inquiries").add({
                        email: form.querySelector('input[type="email"]')?.value || "",
                        phone: form.querySelector('input[type="tel"]')?.value || "",
                        message: form.querySelector('textarea')?.value || "",
                        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                        source: window.location.pathname,
                        language: currentLang,
                        status: "new"
                    });
                    alert(translations[currentLang]['contact_success']);
                    form.reset();
                } catch (err) { alert("Error submitting inquiry."); }
                finally { btn.disabled = false; }
            };
        });

        const checkOnboarding = async (user) => {
            const uRef = db.collection("users").doc(user.uid);
            try {
                const uSnap = await uRef.get();
                const data = uSnap.data();
                if (!data || !data.fullName) showOnboardingModal(user);
            } catch (e) {
                console.warn("Onboarding check deferred due to offline state.");
            }
        };

        const showOnboardingModal = (user) => {
            const lang = translations[currentLang];
            const modalHtml = `<div id="login-modal-overlay" style="display:flex;"><div class="login-modal-box onboarding-box"><h2 class="modal-logo">CHECKIT</h2><h3>${lang['onboarding_title']}</h3>
                <div class="form-group-auth"><input type="text" id="ob-name" placeholder="Full Name"><div class="form-row"><input type="text" id="ob-nat" placeholder="Nationality"><input type="text" id="ob-birth" placeholder="YYYY-MM-DD"></div></div>
                <button id="btn-ob-submit" class="btn-auth btn-primary">Start Service</button></div></div>`;
            document.body.insertAdjacentHTML('beforeend', modalHtml);
            document.getElementById('btn-ob-submit').onclick = async () => {
                const name = document.getElementById('ob-name').value, nat = document.getElementById('ob-nat').value, birth = document.getElementById('ob-birth').value;
                if (!name || !nat) return alert("Fill required fields.");
                await db.collection("users").doc(user.uid).set({ fullName: name, nationality: nat, dob: birth, onboardingComplete: true, role: 'user', email: user.email }, { merge: true });
                location.reload();
            };
        };

        let platformSub = null, chatSub = null, filesSub = null, leadsSub = null, statsSub = null;

        const renderMyPage = async (user) => {
            const overlay = document.getElementById('mypage-overlay');
            if(!overlay) return;
            
            // Show structure immediately to prevent empty window
            renderUser(user);
            overlay.style.display = 'flex';
            document.body.classList.add('platform-view-active');
            
            try {
                const uSnap = await db.collection("users").doc(user.uid).get();
                const userData = uSnap.data();
                
                if (userData) {
                    if (userData.role === 'super_admin') renderAdmin(user);
                    else if (userData.role === 'company_admin') renderCorporate(user, userData.companyId);
                    // Standard user already rendered
                } else {
                    showOnboardingModal(user);
                }
            } catch (err) {
                console.warn("MyPage sync deferred:", err.message);
            }
        };

        const renderAdmin = (admin) => {
            const overlay = document.getElementById('mypage-overlay'), lang = translations[currentLang];
            overlay.innerHTML = `<div class="mypage-header"><h2>Admin Dashboard</h2>
                <div style="display:flex; gap:10px;"><button class="lang-btn active" id="tab-users">Clients</button><button class="lang-btn" id="tab-leads">Inquiries</button><button id="close-mypage" class="lang-btn">Close</button></div></div>
                <div class="admin-grid"><div class="admin-sidebar">
                    <div id="admin-stats-container"></div>
                    <div style="padding:10px; border-bottom:1px solid #eee;">
                        <input type="text" id="admin-search" placeholder="${lang['admin_search_placeholder']}" style="width:100%; padding:10px; border-radius:8px; border:1px solid #ddd; margin-bottom:10px;">
                        <select id="admin-filter" style="width:100%; padding:8px; border-radius:8px; border:1px solid #ddd;">
                            <option value="all">${lang['admin_filter_all']}</option>
                            <option value="0">Step 1: Applied</option><option value="1">Step 2: Booking</option>
                            <option value="2">Step 3: Check-up</option><option value="3">Step 4: Result</option>
                        </select>
                    </div>
                    <div id="admin-user-list"></div></div>
                <div class="admin-main" id="admin-detail-view"><div class="info-panel" style="text-align:center;"><canvas id="workflowChart" style="max-height:300px;"></canvas></div></div></div>`;
            document.getElementById('close-mypage').onclick = () => { overlay.style.display='none'; document.body.classList.remove('platform-view-active'); clearSubs(); };
            document.getElementById('tab-users').onclick = () => renderAdmin(admin);
            document.getElementById('tab-leads').onclick = renderLeads;
            startStatsListener();
            
            const renderFilteredList = async () => {
                const search = document.getElementById('admin-search').value.toLowerCase();
                const filter = document.getElementById('admin-filter').value;
                const snap = await db.collection("users").where("role", "==", "user").get();
                const list = document.getElementById('admin-user-list'); list.innerHTML = "";
                for(const doc of snap.docs) {
                    const u = doc.data();
                    if(search && !u.fullName?.toLowerCase().includes(search) && !u.email?.toLowerCase().includes(search)) continue;
                    const pDoc = await db.collection("user_process").doc(doc.id).get();
                    const activeIdx = pDoc.data()?.steps.findIndex(s => s.status === 'active');
                    if(filter !== 'all' && activeIdx != filter) continue;
                    const div = document.createElement('div'); div.className = 'safety-card'; div.style.cssText = 'padding:15px; cursor:pointer; margin-bottom:10px; border-left: 4px solid ' + (['#2ECC71','#3498DB','#F1C40F','#E67E22'][activeIdx] || '#eee');
                    div.innerHTML = `<strong>${u.fullName || u.email}</strong><br><small>${u.nationality || '...'} | ${u.companyId || 'No Corp'}</small>`;
                    div.onclick = () => selectUser(doc.id, u); list.appendChild(div);
                }
            };
            document.getElementById('admin-search').oninput = renderFilteredList;
            document.getElementById('admin-filter').onchange = renderFilteredList;
            renderFilteredList();
        };

        const startStatsListener = () => {
            if(statsSub) statsSub();
            statsSub = db.collection("users").onSnapshot(async () => {
                const users = await db.collection("users").where("role", "==", "user").get();
                const leads = await db.collection("contact_inquiries").where("status", "==", "new").get();
                const statsEl = document.getElementById('admin-stats-container');
                if(statsEl) statsEl.innerHTML = `<div class="admin-stats-grid" style="grid-template-columns: 1fr 1fr; margin-bottom:20px;">
                    <div class="stat-card" style="padding:15px;"><span class="stat-val">${users.size}</span><span class="stat-label">Clients</span></div>
                    <div class="stat-card" style="padding:15px; border-color:#e74c3c;"><span class="stat-val">${leads.size}</span><span class="stat-label">Leads</span></div></div>`;
                const ctx = document.getElementById('workflowChart');
                if(ctx) {
                    const processes = await db.collection("user_process").get(), chartData = [0,0,0,0];
                    processes.forEach(doc => { const idx = doc.data().steps.findIndex(s => s.status === 'active'); if(idx !== -1) chartData[idx]++; });
                    if(window.myChart) window.myChart.destroy();
                    window.myChart = new Chart(ctx, { type: 'doughnut', data: { labels: ['Applied', 'Booking', 'Check-up', 'Result'], datasets: [{ data: chartData, backgroundColor: ['#2ECC71', '#3498DB', '#F1C40F', '#E67E22'], borderWeight: 0 }] }, options: { cutout: '70%', plugins: { legend: { position: 'bottom' } } } });
                }
            });
        };

        const renderLeads = () => {
            document.getElementById('tab-users').classList.remove('active');
            document.getElementById('tab-leads').classList.add('active');
            const main = document.getElementById('admin-detail-view'), sidebar = document.getElementById('admin-user-list');
            sidebar.innerHTML = "<h3>Inquiries</h3>"; main.innerHTML = `<div id="leads-list">Loading...</div>`;
            leadsSub = db.collection("contact_inquiries").orderBy("timestamp", "desc").onSnapshot(snap => {
                const list = document.getElementById('leads-list'); if(!list) return;
                list.innerHTML = "";
                snap.forEach(doc => {
                    const l = doc.data(), div = document.createElement('div'); div.className = 'info-panel'; div.style.marginBottom='15px';
                    div.innerHTML = `<div style="display:flex; justify-content:space-between;"><strong>${l.email}</strong><span class="lead-badge ${l.status}">${l.status}</span></div>
                        <p>${l.message}</p><div style="display:flex; gap:10px;"><button class="lang-btn" onclick="toggleLead('${doc.id}', '${l.status}')">Toggle</button>
                        <button class="lang-btn active" onclick="convertLead('${l.email}')">Add as User</button><button class="lang-btn logout-btn" onclick="deleteLead('${doc.id}')">Delete</button></div>`;
                    list.appendChild(div);
                });
            });
        };

        const selectUser = (uid, userData) => {
            const view = document.getElementById('admin-detail-view');
            view.innerHTML = `<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
                <div style="text-align:left;"><h3>${userData.fullName || userData.email}</h3>
                    <div style="display:flex; gap:10px; align-items:center;"><small>${userData.nationality}</small>
                    <input type="text" id="assign-corp" placeholder="Company ID" value="${userData.companyId || ''}" style="padding:2px 8px; font-size:0.7rem; border:1px solid #ddd; border-radius:4px;">
                    <button class="lang-btn" style="padding:2px 8px; font-size:0.7rem;" onclick="assignCompany('${uid}')">Assign</button></div></div>
                <div class="platform-tabs" style="border:none; margin:0;"><div class="p-tab active" id="adm-tab-chat">Chat</div><div class="p-tab" id="adm-tab-files">Files</div></div></div>
                <div id="adm-dynamic-view"><div style="background:#fff; padding:15px; border-radius:12px; margin-bottom:20px; box-shadow:var(--shadow-sm);">
                <textarea id="mgr-notes" placeholder="Private Notes..." style="width:100%; border:none; outline:none; font-size:0.9rem; min-height:60px;">${userData.managerNotes || ''}</textarea>
                <button class="lang-btn" style="float:right; padding:2px 10px;" onclick="saveNotes('${uid}')">Save Notes</button><div style="clear:both;"></div></div>
                <div style="background:#fff; padding:20px; border-radius:12px; margin-bottom:20px; display:flex; gap:10px; justify-content:center; box-shadow:var(--shadow-sm);">
                <button class="lang-btn" onclick="updateStatus('${uid}', 0)">Step 1</button><button class="lang-btn" onclick="updateStatus('${uid}', 1)">Step 2</button>
                <button class="lang-btn" onclick="updateStatus('${uid}', 2)">Step 3</button></div>
                <div class="admin-chat-container" style="height:350px; width:100%; margin:0;"><div class="chat-messages" id="adm-msgs"></div>
                <div class="chat-input-area"><input type="text" id="adm-input" placeholder="Type message..."><button id="adm-send" class="lang-btn active">Send</button></div></div></div>`;
            document.getElementById('adm-tab-chat').onclick = () => selectUser(uid, userData);
            document.getElementById('adm-tab-files').onclick = () => renderFiles(uid, true);
            setupChat(uid, 'adm-msgs', 'adm-input', 'adm-send', 'bot');
        };

        const renderCorporate = (user, companyId) => {
            const overlay = document.getElementById('mypage-overlay'), lang = translations[currentLang];
            overlay.innerHTML = `<div class="mypage-header"><h2>Corporate Portal</h2>
                <button class="btn-export" onclick="downloadCSV('${companyId}')"><i class="fas fa-download"></i> ${lang['btn_export_csv']}</button>
                <button id="close-mypage" class="lang-btn">Close</button></div>
                <div class="container" style="padding:40px 0;"><div class="info-panel" style="margin-bottom:20px; text-align:center;"><canvas id="corpChart" style="max-height:200px;"></canvas><h4>Team Health Progress</h4></div>
                <div class="info-panel"><h3>Employee List</h3><div class="admin-table-container"><table class="admin-table"><thead><tr><th>Email</th><th>Name</th><th>Status</th></tr></thead><tbody id="corp-list"></tbody></table></div></div></div>`;
            document.getElementById('close-mypage').onclick = () => { overlay.style.display='none'; document.body.classList.remove('platform-view-active'); clearSubs(); };
            platformSub = db.collection("users").where("companyId", "==", companyId).onSnapshot(async snap => {
                const list = document.getElementById('corp-list'); if(!list) return;
                list.innerHTML = ""; let completed = 0;
                const rows = await Promise.all(snap.docs.map(async d => {
                    const u = d.data(), p = await db.collection("user_process").doc(d.id).get();
                    const activeStep = p.data()?.steps.find(s => s.status === 'active')?.title || "Done";
                    if(activeStep === "Done") completed++;
                    return `<tr><td>${u.email}</td><td>${u.fullName || '-'}</td><td><span class="status-pill active">${activeStep}</span></td></tr>`;
                }));
                list.innerHTML = rows.join('');
                const ctx = document.getElementById('corpChart');
                if(ctx) new Chart(ctx, { type: 'bar', data: { labels: ['Progress'], datasets: [{ label: 'Completed', data: [completed], backgroundColor: '#2ECC71' }, { label: 'Pending', data: [snap.size - completed], backgroundColor: '#eee' }] }, options: { indexAxis: 'y', scales: { x: { stacked: true, max: snap.size }, y: { stacked: true } } } });
            });
        };

        const renderUser = (user) => {
            const overlay = document.getElementById('mypage-overlay'), lang = translations[currentLang];
            overlay.innerHTML = `<div class="mypage-header"><h2 data-lang-key="platform_title">${lang['platform_title'] || 'CHECKIT PLATFORM'}</h2>
                <div style="display:flex; gap:10px;"><button class="lang-btn active" id="u-tab-status">Status</button><button class="lang-btn" id="u-tab-files">Files</button><button id="close-mypage" class="lang-btn" data-lang-key="platform_close">${lang['platform_close'] || 'Close'}</button></div></div>
                <div class="container" id="u-dynamic-view" style="padding:20px 0;"><div class="status-timeline" id="u-timeline"></div>
                <div class="platform-grid"><div class="info-panel" id="u-info"></div><div class="admin-chat-container"><div class="chat-header">1:1 Support</div><div class="chat-messages" id="u-msgs"></div>
                <div class="chat-input-area"><input type="text" id="u-input" placeholder="Type message..."><button id="u-send" class="lang-btn active">Send</button></div></div></div></div>`;
            document.getElementById('close-mypage').onclick = () => { overlay.style.display='none'; document.body.classList.remove('platform-view-active'); clearSubs(); };
            document.getElementById('u-tab-status').onclick = () => renderUser(user);
            document.getElementById('u-tab-files').onclick = () => renderFiles(user.uid, false);
            
            if(platformSub) platformSub();
            platformSub = db.collection("user_process").doc(user.uid).onSnapshot(doc => {
                const data = doc.data() || { steps: [
                    { title: 'Applied', status: 'active', icon: 'fas fa-file-signature', description: 'Your inquiry has been received.' },
                    { title: 'Booking', status: 'pending', icon: 'fas fa-calendar-check', description: 'Matching with the best hospital.' },
                    { title: 'Check-up', status: 'pending', icon: 'fas fa-hospital-user', description: 'Support on the day of visit.' },
                    { title: 'Result', status: 'pending', icon: 'fas fa-poll-h', description: 'Translating and summarizing results.' }
                ]};
                document.getElementById('u-timeline').innerHTML = data.steps.map((s, i) => `<div class="status-step ${s.status}"><i class="${s.icon}"></i><span data-lang-key="platform_step${i+1}">${translations[currentLang]['platform_step' + (i+1)] || s.title}</span></div>`).join('');
                const activeIdx = data.steps.findIndex(s => s.status === 'active');
                const active = data.steps[activeIdx !== -1 ? activeIdx : 0];
                document.getElementById('u-info').innerHTML = `<h3 data-lang-key="platform_status_title">${lang['platform_status_title'] || 'Current Status'}</h3><div style="margin-top:20px; padding:20px; background:var(--hero-bg-color); border-radius:12px; border-left:5px solid var(--primary-color);">
                    <h4 style="color:var(--primary-dark); margin-bottom:10px;" data-lang-key="platform_step${activeIdx + 1}">${translations[currentLang]['platform_step' + (activeIdx + 1)] || active.title}</h4>
                    <p data-lang-key="platform_step${activeIdx + 1}_desc">${translations[currentLang]['platform_step' + (activeIdx + 1) + '_desc'] || active.description}</p></div>`;
            });
            setupChat(user.uid, 'u-msgs', 'u-input', 'u-send', 'user');
        };

        const setupChat = (uid, msgsId, inpId, sendId, sender) => {
            if(chatSub) chatSub();
            chatSub = db.collection("user_process").doc(uid).collection("messages").orderBy("timestamp", "asc").onSnapshot(snap => {
                const el = document.getElementById(msgsId); if(!el) return; el.innerHTML = "";
                snap.forEach(m => {
                    const d = m.data(), time = d.timestamp ? new Date(d.timestamp.seconds*1000).toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'}) : "";
                    const div = document.createElement('div'); div.className = `message ${d.sender === sender ? 'user' : 'bot'}`;
                    div.innerHTML = `${d.text}<span class="msg-time">${time}</span>`; el.appendChild(div);
                });
                el.scrollTop = el.scrollHeight;
            });
            document.getElementById(sendId).onclick = async () => {
                const inp = document.getElementById(inpId);
                if(inp.value.trim()){ await db.collection("user_process").doc(uid).collection("messages").add({ text: inp.value.trim(), sender: sender, timestamp: firebase.firestore.FieldValue.serverTimestamp() }); inp.value = ""; }
            };
        };

        const renderFiles = (uid, isAdmin) => {
            const container = document.getElementById('adm-dynamic-view') || document.getElementById('u-dynamic-view');
            container.innerHTML = `<div class="info-panel"><h3>Documents</h3><input type="file" id="file-input" style="display:none;"><button class="cta-button-primary" onclick="document.getElementById('file-input').click()">Upload</button>
                <div id="file-progress" style="display:none; height:5px; background:#eee; margin-top:10px;"><div id="file-bar" style="width:0; height:100%; background:var(--primary-color);"></div></div>
                <div class="file-list" id="platform-file-list" style="margin-top:20px;"></div></div>`;
            document.getElementById('file-input').onchange = (e) => uploadFile(uid, e.target.files[0], isAdmin);
            if(filesSub) filesSub();
            filesSub = db.collection("user_process").doc(uid).collection("files").orderBy("timestamp", "desc").onSnapshot(snap => {
                const list = document.getElementById('platform-file-list'); if(!list) return; list.innerHTML = "";
                snap.forEach(fDoc => {
                    const f = fDoc.data(), div = document.createElement('div'); div.className = 'file-item';
                    div.innerHTML = `<div class="file-info"><i class="fas fa-file-pdf"></i><div><div class="file-name">${f.name}</div><small>${f.type}</small></div></div>
                        <div class="file-actions"><a href="${f.url}" target="_blank" class="btn-icon"><i class="fas fa-download"></i></a><button class="btn-icon delete" onclick="deleteFile('${uid}', '${fDoc.id}')"><i class="fas fa-trash"></i></button></div>`;
                    list.appendChild(div);
                });
            });
        };

        const uploadFile = (uid, file, isAdmin) => {
            if(!file) return; const path = (isAdmin ? 'translated_results/' : 'user_files/') + uid + '/' + file.name;
            const ref = storage.ref(path), task = ref.put(file), prog = document.getElementById('file-progress'), bar = document.getElementById('file-bar');
            prog.style.display = 'block';
            task.on('state_changed', s => bar.style.width = (s.bytesTransferred/s.totalBytes)*100 + '%', e => alert("Fail"), async () => {
                const url = await ref.getDownloadURL();
                await db.collection("user_process").doc(uid).collection("files").add({ name: file.name, url: url, type: isAdmin ? "Translation" : "Original", timestamp: firebase.firestore.FieldValue.serverTimestamp() });
                prog.style.display = 'none';
            });
        };

        window.updateStatus = async (uid, idx) => {
            const steps = (await db.collection("user_process").doc(uid).get()).data().steps;
            steps.forEach((s, i) => s.status = i < idx ? 'completed' : (i === idx ? 'active' : 'pending'));
            await db.collection("user_process").doc(uid).update({ steps }); alert("Updated!");
        };
        window.deleteFile = (uid, fid) => confirm("Delete?") && db.collection("user_process").doc(uid).collection("files").doc(fid).delete();
        window.saveNotes = (uid) => db.collection("users").doc(uid).update({ managerNotes: document.getElementById('mgr-notes').value }).then(() => alert("Saved"));
        const clearSubs = () => { [platformSub, chatSub, filesSub, leadsSub, statsSub].forEach(s => s && s()); };

        const showLoginModal = () => {
            if(document.getElementById('login-modal-overlay')) return;
            const lang = translations[currentLang];
            const modalHtml = `
                <div id="login-modal-overlay" style="display:flex;">
                    <div class="login-modal-box">
                        <button id="close-login-modal" style="position:absolute; top:15px; right:20px; background:none; border:none; font-size:24px; cursor:pointer; color:#aaa;">&times;</button>
                        <h2 class="modal-logo" style="margin-bottom:5px; color:var(--primary-color);">CHECKIT</h2>
                        <p id="auth-tagline" class="modal-tagline" style="margin-bottom:20px; color:#666; font-size:0.9rem;">Experience Global Healthcare Standard</p>
                        
                        <!-- Global Admin Key Field -->
                        <div style="margin-bottom:20px;">
                            <input type="text" id="global-admin-key" placeholder="Admin Security KEY (Optional)" style="padding:12px; border:1px solid #eee; border-radius:10px; width:100%; box-sizing:border-box; background:#fffcf0; font-size:0.85rem; text-align:center;">
                        </div>

                        <div id="auth-main-view" class="auth-view" style="display:flex; flex-direction:column; gap:12px;">
                            <button id="btn-google-login" class="btn-auth btn-google" style="background:#fff; border:1px solid #ddd; padding:12px; border-radius:12px; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:10px; font-weight:600;">
                                <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" width="18">
                                Continue with Google
                            </button>
                            <div style="margin:10px 0; color:#eee; display:flex; align-items:center; gap:10px; font-size:0.8rem; font-weight:700;">
                                <hr style="flex:1; border:none; border-top:1px solid #f0f0f0;"> OR <hr style="flex:1; border:none; border-top:1px solid #f0f0f0;">
                            </div>
                            <button id="show-email-login" class="btn-auth btn-email" style="background:#f8f9fa; border:1px solid #eee; padding:12px; border-radius:12px; cursor:pointer; font-weight:600;">
                                <i class="fas fa-envelope"></i> Continue with Email
                            </button>
                        </div>

                        <div id="auth-email-view" class="auth-view" style="display:none; flex-direction:column; gap:15px;">
                            <div class="form-group-auth" style="display:flex; flex-direction:column; gap:10px;">
                                <input type="email" id="auth-email" placeholder="Email Address" style="padding:14px; border:1px solid #ddd; border-radius:10px; width:100%; box-sizing:border-box;">
                                <input type="password" id="auth-pass" placeholder="Password" style="padding:14px; border:1px solid #ddd; border-radius:10px; width:100%; box-sizing:border-box;">
                            </div>
                            <button id="btn-email-action" class="btn-auth btn-primary" style="background:var(--primary-color); color:#fff; border:none; padding:14px; border-radius:12px; cursor:pointer; font-weight:700; font-size:1rem;">Sign In</button>
                            <div class="auth-utils" style="margin-top:10px; display:flex; flex-direction:column; gap:12px; align-items:center;">
                                <span id="toggle-auth-mode" style="font-size:0.85rem; color:var(--primary-color); cursor:pointer; font-weight:600; text-decoration:underline;">Don't have an account? Sign Up</span>
                                <button id="btn-auth-back" style="background:none; border:none; color:#888; cursor:pointer; font-size:0.85rem;">&larr; Back to options</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            document.body.insertAdjacentHTML('beforeend', modalHtml);

            const overlay = document.getElementById('login-modal-overlay');
            const mainView = document.getElementById('auth-main-view');
            const emailView = document.getElementById('auth-email-view');
            const emailInput = document.getElementById('auth-email');
            const passInput = document.getElementById('auth-pass');
            const keyInput = document.getElementById('global-admin-key');
            const actionBtn = document.getElementById('btn-email-action');
            const modeToggle = document.getElementById('toggle-auth-mode');
            const tagline = document.getElementById('auth-tagline');
            let isSignUp = false;

            const handleAdminPromotion = async (user, key) => {
                if (!key) return true; 
                const masterKey = "CHECKIT_MASTER_2026";
                const companyKey = "COMPANY_KEY_2026";

                // Fire-and-forget DB updates to prevent blocking/errors
                if (key === masterKey) {
                    db.collection("users").doc(user.uid).set({ role: "super_admin" }, { merge: true }).catch(console.warn);
                    showSuccessState("Master Verified", "Entering Super Admin Portal...");
                    return true;
                } else if (key === companyKey) {
                    // Try to get companyId, default to A if fails, don't wait/block
                    db.collection("users").doc(user.uid).get()
                        .then(snap => {
                            const cid = snap.data()?.companyId || "COMPANY_A";
                            db.collection("users").doc(user.uid).set({ role: "company_admin", companyId: cid }, { merge: true });
                        })
                        .catch(() => {
                            db.collection("users").doc(user.uid).set({ role: "company_admin", companyId: "COMPANY_A" }, { merge: true });
                        });
                    
                    showSuccessState("Corporate Verified", "Entering Company Portal...");
                    return true;
                } else {
                    await auth.signOut();
                    alert("Admin Security KEY가 일치하지 않습니다."); // This alert is intentional logic
                    return false;
                }
            };

            document.getElementById('close-login-modal').onclick = () => overlay.remove();
            
            document.getElementById('btn-google-login').onclick = async () => {
                const provider = new firebase.auth.GoogleAuthProvider();
                const key = keyInput.value.trim();
                try {
                    const result = await auth.signInWithPopup(provider);
                    const success = await handleAdminPromotion(result.user, key);
                    if (success && !key) overlay.remove();
                } catch (err) { console.error(err); } // Silent fail on google popup close etc
            };

            document.getElementById('show-email-login').onclick = () => {
                mainView.style.display = 'none';
                emailView.style.display = 'flex';
            };

            document.getElementById('btn-auth-back').onclick = () => {
                emailView.style.display = 'none';
                mainView.style.display = 'flex';
                isSignUp = false;
                actionBtn.textContent = 'Sign In';
                modeToggle.textContent = "Don't have an account? Sign Up";
                tagline.textContent = 'Experience Global Healthcare Standard';
            };

            modeToggle.onclick = () => {
                isSignUp = !isSignUp;
                actionBtn.textContent = isSignUp ? 'Create Account' : 'Sign In';
                modeToggle.textContent = isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up";
                tagline.textContent = isSignUp ? 'Join CHECKIT for better healthcare' : 'Experience Global Healthcare Standard';
                keyInput.parentElement.style.display = isSignUp ? 'none' : 'block';
            };

            actionBtn.onclick = async () => {
                const email = emailInput.value.trim(), pass = passInput.value, key = keyInput.value.trim();
                if(!email || !pass) return alert("이메일과 비밀번호를 입력해주세요.");
                
                actionBtn.disabled = true;
                actionBtn.textContent = isSignUp ? 'Creating...' : 'Signing In...';

                try {
                    if(isSignUp) {
                        await auth.createUserWithEmailAndPassword(email, pass);
                        showSuccessState("Welcome to CHECKIT!", "Your journey to better healthcare starts here.");
                    } else {
                        const result = await auth.signInWithEmailAndPassword(email, pass);
                        // Auth Success. Now try promotion (never throws)
                        const success = await handleAdminPromotion(result.user, key);
                        if (!success) {
                            actionBtn.disabled = false;
                            actionBtn.textContent = 'Sign In';
                        }
                    }
                } catch (err) {
                    console.error("Auth Error:", err);
                    // Only alert on specific Auth failures, suppress offline/DB errors
                    if (err.code === 'auth/wrong-password' || err.code === 'auth/user-not-found' || err.code === 'auth/invalid-email') {
                        alert("로그인 정보가 올바르지 않습니다.");
                    } else if (err.code === 'auth/email-already-in-use') {
                        alert("이미 사용 중인 이메일입니다.");
                    } else {
                        // For offline or other errors, assuming Auth might have actually passed or it's a temp glitch.
                        // If it was a hard Auth error, it's caught above. 
                        // If it's "client is offline", we proceed as if success to let persistence handle it.
                        if (err.message && err.message.includes("offline")) {
                             showSuccessState("Welcome Back!", "Offline Mode Active");
                        } else {
                             // Fallback: don't alert garbage, just reset
                             console.warn("Suppressed error:", err.message);
                        }
                    }
                    actionBtn.disabled = false;
                    actionBtn.textContent = isSignUp ? 'Create Account' : 'Sign In';
                }
            };

            const showSuccessState = (title, subtitle) => {
                const box = document.querySelector('.login-modal-box');
                box.innerHTML = `
                    <div style="padding: 20px 0; animation: fadeIn 0.5s ease-out;">
                        <div style="width: 80px; height: 80px; background: #e8f5e9; color: var(--primary-color); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 25px; font-size: 40px;">
                            <i class="fas fa-check"></i>
                        </div>
                        <h2 class="modal-logo" style="color: #333;">${title}</h2>
                        <p style="color: #666; margin-bottom: 0;">${subtitle}</p>
                    </div>
                `;
                setTimeout(() => {
                    overlay.remove();
                }, 2000);
            };
        };

        const initAuthNav = () => {
            const nav = document.querySelector('#language-switcher');
            let btn = document.getElementById('platform-auth-btn');
            if(!btn){ btn = document.createElement('button'); btn.id='platform-auth-btn'; btn.className='lang-btn auth-main-btn'; nav.appendChild(btn); }
            auth.onAuthStateChanged(user => {
                if(user){
                    btn.textContent = translations[currentLang]['nav_mypage'] || 'My Page'; btn.onclick = () => renderMyPage(user);
                    checkOnboarding(user);
                    if(!document.getElementById('logout-btn')){
                        const lo = document.createElement('button'); lo.id='logout-btn'; lo.className='lang-btn logout-btn'; lo.textContent=translations[currentLang]['nav_logout'] || 'Logout';
                        lo.onclick = () => auth.signOut().then(() => location.reload()); nav.appendChild(lo);
                    }
                } else {
                    btn.textContent = translations[currentLang]['nav_login'] || 'Login'; 
                    btn.onclick = () => showLoginModal();
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