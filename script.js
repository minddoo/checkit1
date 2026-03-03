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
            'solution_title': 'CHECKIT 솔루션',
            'solution_subtitle': '어려운 과정은 저희가 맡겠습니다. 당신은 건강만 생각하세요.',
            'packages_title': '추천 패키지',
            'packages_subtitle': '나에게 꼭 필요한 구성으로 선택하세요.',
            'package1_title': '안심 플랜', 'package1_price': '₩50,000',
            'package2_title': '표준 플랜', 'package2_price': '₩100,000',
            'package3_title': '프리미엄 플랜', 'package3_price': '₩200,000',
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
            'solution_title': 'CHECKIT Solution',
            'solution_subtitle': 'We\'ll handle the difficult process. You just think about your health.',
            'packages_title': 'Recommended Packages',
            'packages_subtitle': 'Choose the configuration that\'s right for you.',
            'package1_title': 'Safe Plan', 'package1_price': '₩50,000',
            'package2_title': 'Standard Plan', 'package2_price': '₩100,000',
            'package3_title': 'Premium Plan', 'package3_price': '₩200,000',
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
            'hero_title': '面向外国人的专业健康检查预约服务',
            'hero_subtitle': '复杂的韩国医院预约和健康检查，CHECKIT 用您的母语为您提供完美帮助。',
            'service_for_title': '该服务面向谁？',
            'individual_title': '个人客户',
            'individual_desc': '从困难的预约到结果翻译，1:1 专属经理为您提供全方位照顾。',
            'corporate_title': '企业客户',
            'corporate_desc': '系统管理外籍员工健康，提高企业生产力。',
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
            'corporate_page_subtitle': '系统管理外籍员工健康，提高企业生产力，减轻健康管理负担。',
            'view_workflow': '查看业务流程',
            'individual_page_title': '个人客户服务',
            'individual_page_subtitle': '复杂的健康检查，现在用母语轻松完成。'
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
            'individual_page_subtitle': 'Khám sức khỏe phức tạp, giờ đây hãy thực hiện thoải mái bằng tiếng mẹ đẻ.'
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

    // --- Language Switcher Initialization ---
    const initLangSwitch = () => {
        document.querySelectorAll('#language-switcher .lang-btn').forEach(btn => {
            btn.onclick = () => switchLanguage(btn.dataset.lang);
        });
        switchLanguage('ko'); // Initial call to populate text
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

        // 1. Unified Inquiry Logic
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

        // 2. Onboarding Flow
        const checkOnboarding = async (user) => {
            const uRef = db.collection("users").doc(user.uid);
            const uSnap = await uRef.get();
            const data = uSnap.data();
            if (!data || !data.fullName) showOnboardingModal(user);
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
                await db.collection("users").doc(user.uid).update({ fullName: name, nationality: nat, dob: birth, onboardingComplete: true });
                location.reload();
            };
        };

        // 3. Platform Dashboards
        let platformSub = null, chatSub = null, filesSub = null, leadsSub = null, statsSub = null;

        const renderMyPage = async (user) => {
            const overlay = document.getElementById('mypage-overlay');
            if(!overlay) return;
            overlay.style.display = 'flex';
            document.body.classList.add('platform-view-active');
            const uSnap = await db.collection("users").doc(user.uid).get();
            const userData = uSnap.data();
            if (userData?.role === 'super_admin') renderAdmin(user);
            else if (userData?.role === 'company_admin') renderCorporate(user, userData.companyId);
            else renderUser(user);
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

        window.convertLead = (email) => { if(confirm(`Invite ${email} as a new user?`)) alert(`Invite sent to ${email}. (Logic: Admin would now create Firestore record manually or send magic link)`); };

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

        window.downloadCSV = async (companyId) => {
            const snap = await db.collection("users").where("companyId", "==", companyId).get();
            let csv = "Email,Name,Status\n";
            for(const doc of snap.docs) {
                const u = doc.data(), p = await db.collection("user_process").doc(doc.id).get();
                const step = p.data()?.steps.find(s => s.status === 'active')?.title || "Done";
                csv += `${u.email},${u.fullName || '-'},${step}\n`;
            }
            const blob = new Blob([csv], { type: 'text/csv' }), url = window.URL.createObjectURL(blob), a = document.createElement('a');
            a.href = url; a.download = `checkit_report_${companyId}.csv`; a.click();
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

        const initAuthNav = () => {
            const nav = document.querySelector('#language-switcher');
            let btn = document.getElementById('platform-auth-btn');
            if(!btn){ btn = document.createElement('button'); btn.id='platform-auth-btn'; btn.className='lang-btn auth-main-btn'; nav.appendChild(btn); }
            auth.onAuthStateChanged(user => {
                if(user){
                    btn.textContent = currentLang === 'ko' ? '마이페이지' : 'My Page'; btn.onclick = () => renderMyPage(user);
                    checkOnboarding(user);
                    if(!document.getElementById('logout-btn')){
                        const lo = document.createElement('button'); lo.id='logout-btn'; lo.className='lang-btn logout-btn'; lo.textContent='Logout';
                        lo.onclick = () => auth.signOut().then(() => location.reload()); nav.appendChild(lo);
                    }
                } else {
                    btn.textContent = 'Login'; btn.onclick = () => auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
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