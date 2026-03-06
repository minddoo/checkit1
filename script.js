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
            'expectation_subtitle': '글로벌 의료 시장에서 경쟁력을 높이는 한국의 의료 서비스'
        },
        en: {
            'main_page_title': 'CHECKIT - Health Screening for Foreigners',
            'nav_home': 'Home', 'hero_cta': 'Request Consultation Now', 'learn_more': 'Learn More',
            'platform_title': 'CHECKIT Platform', 'platform_status_title': 'My Service Status',
            'platform_close': 'Close', 'contact_success': 'Your inquiry has been successfully submitted!',
            'admin_title': 'Manager Dashboard', 'onboarding_title': 'Complete Your Profile',
            'nav_mypage': 'My Page', 'nav_login': 'Login', 'nav_logout': 'Logout',
            'hero_title': 'Health screenings for foreigners,<br>comfortably, without language barriers.',
            'hero_subtitle': 'Missed schedules, confusing examination guides, results only in Korean.<br><br>CHECKIT resolves all non-medical processes.',
            'service_for_title': 'Who is this service for?',
            'individual_title': 'Individual Clients',
            'individual_desc': 'Supports foreigners residing in or visiting Korea<br>to comfortably receive health screenings without language barriers.',
            'corporate_title': 'Corporate Clients',
            'corporate_desc': 'Easily and efficiently manage group health screenings for foreign workers,<br>reducing the burden of health management for companies.',
            'why_us_title': 'Why choose CHECKIT?',
            'why_us_subtitle_new': 'Despite the high quality of medical services, foreigners face difficulties in \'non-medical processes\' such as booking, registration, and checking results.<br><br>CHECKIT fills this gap.',
            'why_us_feature1_title': 'Communication Expertise',
            'why_us_feature1_desc': 'From hospital selection to results translation, we solve all communication problems arising from language and cultural barriers.',
            'why_us_feature2_title': '100% Customer-Centric',
            'why_us_feature2_desc': 'Without contracts with hospitals, we solely from the customer\'s perspective, proposing and assisting with the optimal choices needed by the customer.',
            'why_us_feature3_title': 'Focus on Non-Medical Processes',
            'why_us_feature3_desc': 'We handle all incidental procedures except medical acts, allowing customers to focus solely on their health screening.',
            'why_us_feature4_title': 'Reasonable Cost',
            'why_us_feature4_desc': 'Operating independently without links to medical institutions, there are no unnecessary brokerage fees. Only pure service fees apply.',
            'process_title': 'CHECKIT Usage Process',
            'process_step1_title': 'Consultation & Hospital Selection Support',
            'process_step1_desc_new': 'After consulting on desired examination items and schedule, we provide a list of optimal hospitals that meet the conditions to aid selection and proceed with reservations.',
            'process_step2_title': 'Real-time Communication Support',
            'process_step2_desc_new': 'On the day of the examination, we provide real-time support for all communications within the hospital to ensure no inconvenience.',
            'process_step3_title_new': 'Delivery of Translated Results File',
            'process_step3_desc_new': 'We provide a simple translation and summary of the results provided by the customer in their language, delivered via email or messenger as a file.',
            'testimonials_title': 'CHECKIT Testimonials',
            'testimonials_subtitle': 'Hear directly from customers who have been with CHECKIT.',
            'testimonial1_text': '“Health screening in Korea was daunting at first, but thanks to CHECKIT, everything from hospital selection to booking and communication on the day of the exam was very smooth. The results translated into my native language were easy to understand.”',
            'testimonial1_author': 'Anna, International Student', 'testimonial1_type': 'Foreign Resident in Korea',
            'testimonial2_text': '“I wanted to invite my parents to Korea for a health screening, but I was very worried about language and procedures. The CHECKIT manager handled everything, which was very reassuring.”',
            'testimonial2_author': 'David, Overseas Resident', 'testimonial2_type': 'Family of Overseas Resident',
            'testimonial3_text': '“Group health screenings for foreign employees were always a headache, but thanks to CHECKIT, everything from booking to results management has become very simple. Employee satisfaction is very high.”',
            'testimonial3_author': 'Team Leader Park', 'testimonial3_type': 'Corporate Client Manager',
            'contact_title_new': 'Have any questions?',
            'contact_subtitle_new': 'CHECKIT\'s expert managers will respond quickly and kindly.',
            'contact_form_email_label': 'Email Address',
            'contact_form_email_placeholder': 'example@email.com',
            'contact_form_phone_label': 'Contact Number (Optional)',
            'contact_form_phone_placeholder': '010-0000-0000',
            'contact_form_message_label': 'Inquiry Details',
            'contact_form_message_placeholder': 'Please enter your inquiry.',
            'contact_form_submit_button': 'Submit Inquiry',
            'corporate_page_title': 'Corporate Client Total Solution',
            'corporate_page_subtitle': 'Systematically manage the health of foreign workers,<br>increasing corporate productivity and reducing the burden of health management.',
            'individual_page_title': 'Individual Client Services',
            'individual_page_subtitle': 'CHECKIT helps all foreigners residing in or visiting Korea<br><br>receive the best health screenings without language barriers.',
            'expectation_title': 'Korean Medical Services Expected by Foreigners',
            'expectation_subtitle': 'Korean medical services enhancing competitiveness in the global medical market'
        },
        zh: {
            'main_page_title': 'CHECKIT - 外国人健康体检预约',
            'nav_home': '首页', 'hero_cta': '立即申请咨询', 'learn_more': '了解更多',
            'platform_title': 'CHECKIT 平台', 'platform_status_title': '我的服务状态',
            'platform_close': '关闭', 'contact_success': '您的咨询已成功提交！',
            'admin_title': '经理仪表板', 'onboarding_title': '完成您的个人资料',
            'nav_mypage': '我的页面', 'nav_login': '登录', 'nav_logout': '注销',
            'hero_title': '为外国人提供健康体检，<br>无语言障碍，轻松便捷。',
            'hero_subtitle': '错过日程、难以理解的体检指南、只提供韩语的结果。<br><br>CHECKIT 解决所有非医疗流程。',
            'service_for_title': '此服务适用于谁？',
            'individual_title': '个人客户',
            'individual_desc': '支持居住在韩国或访问韩国的外国人<br>轻松进行健康体检，无语言障碍。',
            'corporate_title': '企业客户',
            'corporate_desc': '轻松高效地管理外国员工的团体健康体检，<br>减轻企业的健康管理负担。',
            'why_us_title': '为什么选择 CHECKIT？',
            'why_us_subtitle_new': '尽管医疗服务质量很高，但外国人在预约、登记和查看结果等“非医疗流程”中面临困难。<br><br>CHECKIT 弥补了这一空白。',
            'why_us_feature1_title': '沟通专家',
            'why_us_feature1_desc': '从医院选择到结果翻译，我们解决因语言和文化障碍引起的所有沟通问题。',
            'why_us_feature2_title': '100% 以客户为中心',
            'why_us_feature2_desc': '我们不与医院签订合同，完全从客户的角度出发，为客户提供并协助选择最符合需求的方案。',
            'why_us_feature3_title': '专注于非医疗流程',
            'why_us_feature3_desc': '我们处理医疗行为之外的所有附带程序，让客户可以专注于健康体检。',
            'why_us_feature4_title': '合理费用',
            'why_us_feature4_desc': '独立运营，不与医疗机构挂钩，无不必要的经纪费用。只需纯服务费。',
            'process_title': 'CHECKIT 使用流程',
            'process_step1_title': '咨询与医院选择支持',
            'process_step1_desc_new': '在咨询所需的检查项目和时间表后，我们将提供符合条件的最佳医院列表，以帮助选择并进行预约。',
            'process_step2_title': '实时沟通支持',
            'process_step2_desc_new': '在检查当天，我们提供医院内所有沟通的实时支持，确保无不便。',
            'process_step3_title_new': '提供翻译结果文件',
            'process_step3_desc_new': '我们将客户提供的结果进行简单翻译和总结，并通过电子邮件或消息以文件形式发送给客户。',
            'testimonials_title': 'CHECKIT 客户评价',
            'testimonials_subtitle': '直接听取使用 CHECKIT 客户的心声。',
            'testimonial1_text': '“第一次在韩国进行健康体检，感到茫然，但多亏了 CHECKIT，从医院选择到预约，再到体检当天的沟通都非常顺利。结果也翻译成我的母语，很容易理解。”',
            'testimonial1_author': '安娜，留学生', 'testimonial1_type': '居住在韩国的外国人',
            'testimonial2_text': '“我想邀请父母来韩国进行健康体检，但非常担心语言和程序问题。CHECKIT 经理处理了所有事情，这让我感到非常安心。”',
            'testimonial2_author': '大卫，海外居民', 'testimonial2_type': '海外居民家属',
            'testimonial3_text': '“外国员工的团体健康体检一直是一项令人头疼的工作，但多亏了 CHECKIT，从预约到结果管理都变得非常简单。员工满意度也极高。”',
            'testimonial3_author': '朴组长', 'testimonial3_type': '企业客户经理',
            'contact_title_new': '有任何疑问吗？',
            'contact_subtitle_new': 'CHECKIT 的专业经理将快速友善地回复您。',
            'contact_form_email_label': '电子邮件地址',
            'contact_form_email_placeholder': 'example@email.com',
            'contact_form_phone_label': '联系电话（可选）',
            'contact_form_phone_placeholder': '010-0000-0000',
            'contact_form_message_label': '咨询详情',
            'contact_form_message_placeholder': '请输入您的咨询内容。',
            'contact_form_submit_button': '提交咨询',
            'corporate_page_title': '企业客户整体解决方案',
            'corporate_page_subtitle': '系统管理外国员工的健康，<br>提高企业生产力，减轻健康管理负担。',
            'individual_page_title': '个人客户服务',
            'individual_page_subtitle': 'CHECKIT 帮助所有居住在韩国或访问韩国的外国人<br><br>无语言障碍地获得最佳健康体检服务。',
            'expectation_title': '外国人期望的韩国医疗服务',
            'expectation_subtitle': '韩国医疗服务在全球医疗市场中提升竞争力'
        },
        vn: {
            'main_page_title': 'CHECKIT - Đặt lịch khám sức khỏe cho người nước ngoài',
            'nav_home': 'Trang chủ', 'hero_cta': 'Yêu cầu tư vấn ngay', 'learn_more': 'Tìm hiểu thêm',
            'platform_title': 'Nền tảng CHECKIT', 'platform_status_title': 'Tình trạng dịch vụ của tôi',
            'platform_close': 'Đóng', 'contact_success': 'Yêu cầu của bạn đã được gửi thành công!',
            'admin_title': 'Bảng điều khiển quản lý', 'onboarding_title': 'Hoàn thành hồ sơ của bạn',
            'nav_mypage': 'Trang của tôi', 'nav_login': 'Đăng nhập', 'nav_logout': 'Đăng xuất',
            'hero_title': 'Khám sức khỏe cho người nước ngoài,<br>thoải mái, không rào cản ngôn ngữ.',
            'hero_subtitle': 'Bỏ lỡ lịch trình, hướng dẫn khám khó hiểu, kết quả chỉ bằng tiếng Hàn.<br><br>CHECKIT giải quyết tất cả các quy trình phi y tế.',
            'service_for_title': 'Dịch vụ này dành cho ai?',
            'individual_title': 'Khách hàng cá nhân',
            'individual_desc': 'Hỗ trợ người nước ngoài cư trú hoặc đến thăm Hàn Quốc<br>dễ dàng khám sức khỏe mà không gặp rào cản ngôn ngữ.',
            'corporate_title': 'Khách hàng doanh nghiệp',
            'corporate_desc': 'Quản lý khám sức khỏe tập thể cho người lao động nước ngoài<br>một cách dễ dàng và hiệu quả, giảm gánh nặng quản lý sức khỏe cho doanh nghiệp.',
            'why_us_title': 'Tại sao chọn CHECKIT?',
            'why_us_subtitle_new': 'Mặc dù chất lượng dịch vụ y tế cao, người nước ngoài vẫn gặp khó khăn trong các \'quy trình phi y tế\' như đặt lịch, đăng ký và kiểm tra kết quả.<br><br>CHECKIT lấp đầy khoảng trống này.',
            'why_us_feature1_title': 'Chuyên môn giao tiếp',
            'why_us_feature1_desc': 'Từ việc lựa chọn bệnh viện đến dịch thuật kết quả, chúng tôi giải quyết mọi vấn đề giao tiếp phát sinh do rào cản ngôn ngữ và văn hóa.',
            'why_us_feature2_title': '100% lấy khách hàng làm trung tâm',
            'why_us_feature2_desc': 'Không có hợp đồng với bệnh viện, chúng tôi chỉ từ góc độ của khách hàng, đề xuất và hỗ trợ các lựa chọn tối ưu mà khách hàng cần.',
            'why_us_feature3_title': 'Tập trung vào các quy trình phi y tế',
            'why_us_feature3_desc': 'Chúng tôi xử lý tất cả các thủ tục phụ trợ ngoại trừ các hành vi y tế, cho phép khách hàng chỉ tập trung vào việc khám sức khỏe của họ.',
            'why_us_feature4_title': 'Chi phí hợp lý',
            'why_us_feature4_desc': 'Hoạt động độc lập mà không liên kết với các tổ chức y tế, không có phí môi giới không cần thiết. Chỉ áp dụng phí dịch vụ thuần túy.',
            'process_title': 'Quy trình sử dụng CHECKIT',
            'process_step1_title': 'Tư vấn & Hỗ trợ lựa chọn bệnh viện',
            'process_step1_desc_new': 'Sau khi tư vấn về các hạng mục khám mong muốn và lịch trình, chúng tôi cung cấp danh sách các bệnh viện tối ưu đáp ứng các điều kiện để hỗ trợ lựa chọn và tiến hành đặt lịch.',
            'process_step2_title': 'Hỗ trợ giao tiếp thời gian thực',
            'process_step2_desc_new': 'Vào ngày khám, chúng tôi cung cấp hỗ trợ thời gian thực cho tất cả các giao tiếp trong bệnh viện để đảm bảo không có bất tiện.',
            'process_step3_title_new': 'Giao file kết quả đã dịch',
            'process_step3_desc_new': 'Chúng tôi cung cấp bản dịch và tóm tắt đơn giản các kết quả do khách hàng cung cấp bằng ngôn ngữ của họ, được gửi qua email hoặc tin nhắn dưới dạng tệp.',
            'testimonials_title': 'Lời chứng thực CHECKIT',
            'testimonials_subtitle': 'Nghe trực tiếp từ những khách hàng đã sử dụng CHECKIT.',
            'testimonial1_text': '“Lần đầu khám sức khỏe ở Hàn Quốc, tôi rất bối rối, nhưng nhờ CHECKIT, mọi thứ từ lựa chọn bệnh viện đến đặt lịch và giao tiếp vào ngày khám đều rất suôn sẻ. Kết quả được dịch sang tiếng mẹ đẻ của tôi rất dễ hiểu.”',
            'testimonial1_author': 'Anna, Sinh viên quốc tế', 'testimonial1_type': 'Người nước ngoài cư trú tại Hàn Quốc',
            'testimonial2_text': '“Tôi muốn mời bố mẹ sang Hàn Quốc khám sức khỏe, nhưng tôi rất lo lắng về vấn đề ngôn ngữ và thủ tục. Quản lý CHECKIT đã xử lý mọi thứ, điều này rất đáng yên tâm.”',
            'testimonial2_author': 'David, Cư dân nước ngoài', 'testimonial2_type': 'Gia đình cư dân nước ngoài',
            'testimonial3_text': '“Khám sức khỏe tập thể cho nhân viên nước ngoài luôn là một công việc đau đầu, nhưng nhờ CHECKIT, mọi thứ từ đặt lịch đến quản lý kết quả đã trở nên rất đơn giản. Mức độ hài lòng của nhân viên cũng rất cao.”',
            'testimonial3_author': 'Trưởng nhóm Park', 'testimonial3_type': 'Quản lý khách hàng doanh nghiệp',
            'contact_title_new': 'Có bất kỳ câu hỏi nào không?',
            'contact_subtitle_new': 'Các quản lý chuyên gia của CHECKIT sẽ phản hồi nhanh chóng và tử tế.',
            'contact_form_email_label': 'Địa chỉ Email',
            'contact_form_email_placeholder': 'example@email.com',
            'contact_form_phone_label': 'Số điện thoại (Tùy chọn)',
            'contact_form_phone_placeholder': '010-0000-0000',
            'contact_form_message_label': 'Chi tiết yêu cầu',
            'contact_form_message_placeholder': 'Vui lòng nhập yêu cầu của bạn.',
            'contact_form_submit_button': 'Gửi yêu cầu',
            'corporate_page_title': 'Giải pháp toàn diện cho khách hàng doanh nghiệp',
            'corporate_page_subtitle': 'Quản lý sức khỏe của người lao động nước ngoài một cách có hệ thống,<br>tăng năng suất của doanh nghiệp và giảm gánh nặng quản lý sức khỏe.',
            'individual_page_title': 'Dịch vụ khách hàng cá nhân',
            'individual_page_subtitle': 'CHECKIT giúp tất cả người nước ngoài cư trú hoặc đến thăm Hàn Quốc<br><br>nhận được dịch vụ khám sức khỏe tốt nhất mà không gặp rào cản ngôn ngữ.',
            'expectation_title': 'Dịch vụ y tế Hàn Quốc được mong đợi bởi người nước ngoài',
            'expectation_subtitle': 'Dịch vụ y tế Hàn Quốc nâng cao khả năng cạnh tranh trên thị trường y tế toàn cầu'
        }
    };

    function applyTranslations() {
        const lang = localStorage.getItem('lang') || 'ko';
        const currentTranslations = translations[lang];
        if (!currentTranslations) {
            console.warn(`No translations found for language: ${lang}. Using Korean as fallback.`);
            return;
        }

        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (currentTranslations[key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    if (element.hasAttribute('placeholder')) {
                        element.setAttribute('placeholder', currentTranslations[key]);
                    } else {
                        element.value = currentTranslations[key];
                    }
                } else if (key.includes('_html')) {
                    element.innerHTML = currentTranslations[key];
                } else {
                    element.textContent = currentTranslations[key];
                }
            }
        });
    }

    function setLanguage(lang) {
        localStorage.setItem('lang', lang);
        applyTranslations();
    }

    // --- 2. CHATBOT FUNCTIONALITY ---
    const chatbotContainer = document.getElementById('chatbot-container');
    const chatbotToggleBtn = document.getElementById('chatbot-toggle-btn');
    const sendButton = document.getElementById('send-button');
    const userInput = document.getElementById('user-input');
    const chatMessages = document.getElementById('chat-messages');

    function showChatbot() {
        if (chatbotContainer) chatbotContainer.classList.add('open');
    }

    function hideChatbot() {
        if (chatbotContainer) chatbotContainer.classList.remove('open');
    }

    function toggleChatbot() {
        if (chatbotContainer) chatbotContainer.classList.toggle('open');
    }

    async function sendMessage() {
        const userMessage = userInput.value.trim();
        if (userMessage === '') return;

        appendMessage('user', userMessage, true);
        userInput.value = '';

        // Simulate chatbot response (replace with actual backend API call)
        const botResponse = await getChatbotResponse(userMessage);
        appendMessage('bot', botResponse, false);
    }

    function appendMessage(sender, message, isUser) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message', isUser ? 'user-message' : 'bot-message');
        messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight; // Auto-scroll to bottom
    }

    async function getChatbotResponse(userMessage) {
        const lang = localStorage.getItem('lang') || 'ko';
        let responseKey = '';

        // Simple keyword-based responses for demonstration
        if (userMessage.includes('안녕') || userMessage.includes('hello')) {
            responseKey = 'chatbot_greeting';
        } else if (userMessage.includes('상담') || userMessage.includes('consultation')) {
            responseKey = 'chatbot_consultation';
        } else if (userMessage.includes('비용') || userMessage.includes('cost')) {
            responseKey = 'chatbot_cost';
        } else {
            responseKey = 'chatbot_default';
        }
        return translations[lang][responseKey] || translations['ko'][responseKey] || "Sorry, I don't understand.";
    }

    // --- 3. FIREBASE AUTHENTICATION & FIRESTORE INTEGRATION ---
    // Make sure Firebase is initialized in your HTML before this script runs
    const auth = firebase.auth();
    const db = firebase.firestore();

    auth.onAuthStateChanged(user => {
        const navLogin = document.getElementById('nav-login');
        const navLogout = document.getElementById('nav-logout');
        const navMypage = document.getElementById('nav-mypage');

        if (user) {
            // User is signed in.
            if (navLogin) navLogin.style.display = 'none';
            if (navLogout) navLogout.style.display = 'block';
            if (navMypage) navMypage.style.display = 'block';
            console.log("User logged in:", user.uid);

            // Redirect to appropriate My Page based on user role
            db.collection('users').doc(user.uid).get().then(doc => {
                if (doc.exists) {
                    const userData = doc.data();
                    if (userData.role === 'corporate_admin') {
                        window.location.href = 'mypage_corporate.html';
                    } else {
                        // Default to individual mypage or user role
                        window.location.href = 'mypage_individual.html';
                    }
                } else {
                    console.log("No user data found in Firestore, redirecting to onboarding.");
                    window.location.href = 'onboarding.html'; // Assuming an onboarding page
                }
            }).catch(error => {
                console.error("Error getting user data during auth state change:", error);
                // This is an error during login redirection, not mypage data load
                alert("로그인 중 사용자 데이터를 불러오는 데 문제가 발생했습니다. 인터넷 연결을 확인해주세요. 메인 페이지로 이동합니다.");
                auth.signOut();
                window.location.href = 'index.html';
            });

        } else {
            // User is signed out.
            if (navLogin) navLogin.style.display = 'block';
            if (navLogout) navLogout.style.display = 'none';
            if (navMypage) navMypage.style.display = 'none';
            console.log("User logged out.");
        }
    });

    // --- 4. CONTACT FORM SUBMISSION ---
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = contactForm.querySelector('#contact-email').value;
            const phone = contactForm.querySelector('#contact-phone').value;
            const message = contactForm.querySelector('#contact-message').value;

            try {
                await db.collection('contact_inquiries').add({
                    email,
                    phone,
                    message,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    language: localStorage.getItem('lang') || 'ko'
                });
                alert(translations[localStorage.getItem('lang') || 'ko'].contact_success);
                contactForm.reset();
            } catch (error) {
                console.error("Error submitting contact form:", error);
                alert("문의 제출 중 오류가 발생했습니다. 다시 시도해 주세요.");
            }
        });
    }

    // --- 5. MY PAGE SPECIFIC LOGIC (mypage_individual.html) ---
    if (window.location.pathname.includes('mypage_individual.html')) {
        auth.onAuthStateChanged(user => {
            if (user) {
                // User is signed in, load their data
                loadMyPageIndividualData(user, db);
            } else {
                // User is not signed in, redirect to home or login
                console.log("No user logged in on mypage_individual.html, redirecting to home.");
                window.location.href = 'index.html'; // Redirect to home
            }
        });
    }


    // This function will fetch and display individual user's data
    async function loadMyPageIndividualData(user, db) {
        try {
            const doc = await db.collection('users').doc(user.uid).get();
            if (doc.exists) {
                const userData = doc.data();
                document.getElementById('user-full-name').textContent = userData.fullName || 'N/A';
                document.getElementById('user-email').textContent = userData.email || 'N/A';
                document.getElementById('user-package-name').textContent = userData.packageName || '기본 패키지';
                
                const packageItemsContainer = document.getElementById('user-package-items');
                packageItemsContainer.innerHTML = ''; // Clear previous items
                if (userData.packageItems && userData.packageItems.length > 0) {
                    userData.packageItems.forEach(item => {
                        const li = document.createElement('li');
                        li.textContent = item;
                        packageItemsContainer.appendChild(li);
                    });
                } else {
                    const li = document.createElement('li');
                    li.textContent = '제공되는 서비스 항목이 없습니다.';
                    packageItemsContainer.appendChild(li);
                }
            } else {
                console.log("No user data found in Firestore for My Page.");
                // This might indicate a corrupted user profile or initial login issue
                alert("마이페이지 데이터를 불러오는 데 실패했습니다: 사용자 프로필을 찾을 수 없습니다. 메인 페이지로 이동합니다.");
                window.location.href = 'index.html';
            }
        } catch (error) {
            console.error("Error loading My Page data:", error);
            // This is the specific error that the user reported!
            alert("마이페이지 데이터를 불러오는 데 실패했습니다. 잠시 후 다시 시도하시거나 인터넷 연결을 확인해주세요. 메인 페이지로 이동합니다.");
            window.location.href = 'index.html';
        }
    }


    applyTranslations();
    setLanguage(localStorage.getItem('lang') || 'ko'); // Apply default or saved language

    // Initial language application on load
    const currentLang = localStorage.getItem('lang') || 'ko';
    applyTranslations(); // Apply translations based on currentLang
    setLanguage(currentLang);
});
