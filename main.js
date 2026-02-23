
document.addEventListener('DOMContentLoaded', () => {

    // 1. TRANSLATIONS & LANGUAGE -------------------
    const translations = {
        ko: {
            'logo': 'CHECKIT',
            'nav-services': '서비스', 'nav-process': '프로세스', 'nav-testimonials': '후기', 'nav-contact': '문의',
            'hero-title': '외국인을 위한 건강검진, <br>언어의 장벽 없이 편안하게.',
            'hero-subtitle': '일정 누락, 이해하기 어려운 검진 안내, 한국어로만 제공되는 결과지까지. CHECKIT이 모든 비의료 과정을 해결합니다.',
            'hero-cta': '지금 바로 상담 신청',
            'services-title': '누구를 위한 서비스인가요?',
            'individuals-title': '개인 고객', 'individuals-desc': '개인 맞춤형 건강검진 여정을 경험하세요. 한국 거주자 및 의료 관광객을 위한 서비스입니다.',
            'individuals-cta': '더 알아보기',
            'business-title': '기업 고객', 'business-desc': '외국인 직원의 건강을 체계적으로 관리하여 산업 재해를 예방하고 업무 효율을 높이세요.',
            'business-cta': '더 알아보기',
            'process-title': 'CHECKIT 이용 과정', 
            'process-1-title': '상담 신청', 'process-1-desc': '웹사이트를 통해 간단히 상담을 신청하고, 전담 매니저가 배정됩니다.',
            'process-2-title': '맞춤 컨설팅', 'process-2-desc': '필요한 검진, 일정, 언어를 조율하고 최종 예약을 확정합니다.',
            'process-3-title': '검진 및 결과', 'process-3-desc': '편안하게 검진을 받고, 번역된 결과지와 후속 안내까지 제공받습니다.',
            'testimonials-title': '사용자 후기', 
            'testimonial-1-text': '“장기 체류자로서 병원에서의 언어 장벽 때문에 항상 어려움을 겪었습니다. CHECKIT은 예약부터 최종 번역된 결과지 전달까지 모든 것을 완벽하게 관리해주었습니다. 한국에서 겪었던 의료 경험 중 가장 스트레스가 없었습니다.”',
            'testimonial-1-author': '- Michael. L (미국, 거주자)',
            'testimonial-2-text': '“단기 여행으로 한국을 방문했는데, 빠르고 신뢰할 수 있는 건강검진이 필요했습니다. CHECKIT의 과정은 놀라울 정도로 효율적이었습니다. 제 근처의 병원을 찾아주고 모든 소통을 처리해주었습니다. 며칠 만에 이메일로 영어 결과지를 받았습니다. 놀라운 서비스예요!”',
            'testimonial-2-author': '- A. Tran (베트남, 관광객)',
            'testimonial-3-text': '“다양한 국적의 외국인 직원들을 위한 건강검진을 관리하는 것은 끔찍한 악몽이었습니다. 예약 누락, 언어 문제, 결과 지연이 흔했습니다. CHECKIT을 사용한 후로 저희의 프로세스는 간소화되었고, 직원들은 진정으로 케어받고 있다고 느낍니다. 팀의 웰빙이 크게 향상되었습니다.”',
            'testimonial-3-author': '- J. Kim (HR 매니저, 기술 회사)',
            'contact-title': '궁금한 점이 있으신가요?', 'contact-subtitle': '24시간 내에 전문 매니저가 답변해드립니다.',
            'contact-email': '이메일 주소를 입력하세요', 'contact-message': '문의 내용을 입력하세요', 'contact-submit': '상담 신청하기',
            'footer-copy': '© 2024 CHECKIT. All rights reserved.',
            'chat-title': 'CHECKIT봇', 
            'chat-welcome': '안녕하세요! CHECKIT에 대해 궁금한 점이 있으신가요? 아래에서 질문을 선택하거나 직접 입력해주세요.',
            'chat-input-placeholder': '메시지를 입력하세요...',
            'faq-1': '예약은 어떻게 하나요?',
            'faq-2': '병원/의료인과 계약된 구조인가요?',
            'faq-3': '의료 행위나 진료 알선을 하나요?',
            'faq-4': '검진 당일 동행 서비스도 있나요?',
            'faq-5': '결과지는 어떻게 전달되나요?',
            'ans-1': '예약은 사이트 하단 \'상담하기\'를 통해 말씀해주시면, 담당 매니저가 1:1 관리를 시작합니다.',
            'ans-2': '아니요, 저희는 특정 병원을 \'추천\'하지 않습니다. 대신, 고객님의 필요와 선호도에 맞는 병원들의 \'리스트\'를 제공하여, 직접 최적의 병원을 선택하실 수 있도록 돕습니다.',
            'ans-3': '아니요, 명확히 말씀드리지만 저희는 의료 행위나 진료 알선을 하지 않습니다. 이는 의료법에 저촉될 수 있기 때문입니다. 저희의 역할은 고객님이 원활하게 검진을 받으실 수 있도록 비의료적인 부분(예약, 통역, 안내)을 돕는 것입니다.',
            'ans-4': '아니요, 저희 매니저가 물리적으로 \'동행\'하지는 않습니다. 대신, 검진 당일 접수부터 종료까지 실시간으로 필요한 모든 의사소통을 원격으로 지원하여 불편함이 없도록 돕는 \'실시간 소통 서비스\'를 제공합니다.',
            'ans-5': '검진 결과지는 병원에서 발급받는 즉시, 고객님이 요청하신 언어로 번역하여 전달해 드립니다. 저희는 결과에 대한 어떠한 의학적 판단이나 진단을 추가하지 않고, 원본의 내용을 충실하게 번역만 제공합니다.',
            'faq-default-ans': '문의해주셔서 감사합니다. 해당 내용에 대해서는 홈페이지의 문의 섹션을 통해 질문을 남겨주시면, 전문 매니저가 신속하게 답변해드리겠습니다.'
        },
        en: {
            'logo': 'CHECKIT',
            'nav-services': 'Services', 'nav-process': 'Process', 'nav-testimonials': 'Reviews', 'nav-contact': 'Contact',
            'hero-title': 'Health Check-ups for Foreigners, <br>Comfortable Without Language Barriers.',
            'hero-subtitle': 'From missed schedules and confusing instructions to results only in Korean. CHECKIT solves all non-medical processes.',
            'hero-cta': 'Request a Consultation Now',
            'services-title': 'Who is This Service For?',
            'individuals-title': 'For Individuals', 'individuals-desc': 'Experience a personalized health check-up journey. Services for residents in Korea and medical tourists.',
            'individuals-cta': 'Learn More',
            'business-title': 'For Business', 'business-desc': 'Systematically manage the health of your foreign employees to prevent industrial accidents and increase work efficiency.',
            'business-cta': 'Learn More',
            'process-title': 'How CHECKIT Works', 
            'process-1-title': 'Consultation Request', 'process-1-desc': 'Simply request a consultation through our website, and a dedicated manager will be assigned.',
            'process-2-title': 'Custom Consulting', 'process-2-desc': 'We coordinate the necessary exams, schedules, and languages to confirm your final reservation.',
            'process-3-title': 'Exam & Results', 'process-3-desc': 'Comfortably get your check-up and receive your translated results and follow-up guidance all at once.',
            'testimonials-title': 'User Reviews', 
            'testimonial-1-text': '“As a long-term resident, I\'ve always struggled with the language barrier at hospitals. CHECKIT managed everything perfectly, from scheduling to the final translated report. It was the most stress-free medical experience I\'ve had in Korea.”',
            'testimonial-1-author': '- Michael. L (USA, Resident)',
            'testimonial-2-text': '“I was visiting Korea for a short trip and needed a quick, reliable check-up. CHECKIT\'s process was incredibly efficient. They found a hospital near me and handled all communication. I got my English results via email in just a few days. Amazing service!”',
            'testimonial-2-author': '- A. Tran (Vietnam, Tourist)',
            'testimonial-3-text': '“Managing health checks for our diverse team of foreign employees was a logistical nightmare. Missed appointments, language issues, and delayed results were common. Since using CHECKIT, our process is streamlined, and our employees feel truly cared for. It has significantly improved our team\'s well-being.”',
            'testimonial-3-author': '- J. Kim (HR Manager, Tech Firm)',
            'contact-title': 'Have Any Questions?', 'contact-subtitle': 'A professional manager will respond within 24 hours.',
            'contact-email': 'Enter your email address', 'contact-message': 'Enter your message', 'contact-submit': 'Request Consultation',
            'footer-copy': '© 2024 CHECKIT. All rights reserved.',
            'chat-title': 'CHECKIT Bot', 
            'chat-welcome': 'Hello! Do you have any questions about CHECKIT? Please select a question below or type your own.',
            'chat-input-placeholder': 'Type your message...',
            'faq-1': 'How do I make a reservation?',
            'faq-2': 'Is it a contract structure with hospitals/doctors?',
            'faq-3': 'Do you perform medical acts or referrals?',
            'faq-4': 'Do you also offer same-day accompaniment?',
            'faq-5': 'How are the results delivered?',
            'ans-1': 'For reservations, please use the \'Request Consultation\' at the bottom of our site. A dedicated manager will then begin your 1:1 care.',
            'ans-2': 'No, we don\'t \'recommend\' a specific hospital. Instead, we provide a \'list\' of hospitals that fit your needs and preferences, helping you choose the optimal one yourself.',
            'ans-3': 'No, to be clear, we do not perform medical acts or make medical referrals as this could violate medical laws. Our role is to assist with the non-medical aspects (reservations, interpretation, guidance) to ensure you have a smooth check-up experience.',
            'ans-4': 'No, our managers do not physically \'accompany\' you. Instead, we offer a \'real-time communication service\' on the day of the exam to remotely assist with all necessary communication from check-in to check-out, ensuring a smooth process.',
            'ans-5': 'As soon as the examination results are issued by the hospital, we translate them into your requested language and deliver them to you. We do not add any medical judgment or diagnosis to the results; we only provide a faithful translation of the original content.',
            'faq-default-ans': 'Thank you for your inquiry. For this matter, please leave a question through the contact section on our homepage, and a professional manager will respond promptly.'
        },
        zh: {
            'logo': 'CHECKIT',
            'nav-services': '服务', 'nav-process': '流程', 'nav-testimonials': '评价', 'nav-contact': '联系我们',
            'hero-title': '为外国人提供健康体检，<br>无语言障碍，舒适便捷。',
            'hero-subtitle': '从错过日程、难以理解的检查指南，到只有韩文的结果报告。CHECKIT为您解决所有非医疗过程。',
            'hero-cta': '立即申请咨询',
            'services-title': '这项服务适合谁？',
            'individuals-title': '个人客户', 'individuals-desc': '体验个性化的健康体检之旅。为韩国居民和医疗游客提供服务。',
            'individuals-cta': '了解更多',
            'business-title': '企业客户', 'business-desc': '系统地管理外籍员工的健康，预防工伤事故，提高工作效率。',
            'business-cta': '了解更多',
            'process-title': 'CHECKIT 使用流程', 
            'process-1-title': '申请咨询', 'process-1-desc': '通过网站简单申请咨询，我们将为您分配专属经理。',
            'process-2-title': '定制咨询', 'process-2-desc': '协调所需的检查、日程和语言，确认最终预订。',
            'process-3-title': '体检与结果', 'process-3-desc': '在预定日期轻松接受体检，一次性收到翻译好的结果报告和后续指南。',
            'testimonials-title': '用户评价', 
            'testimonial-1-text': '“作为一名长期居民，我一直在医院里为语言障碍而苦恼。CHECKIT完美地处理了一切，从安排预约到最终的翻译报告。这是我在韩国最无压力的医疗体验。”',
            'testimonial-1-author': '- Michael. L (美国, 居民)',
            'testimonial-2-text': '“我来韩国短期旅行，需要一次快速可靠的体检。CHECKIT的流程效率惊人。他们帮我找到了附近的医院并处理了所有沟通。几天之内我就通过电子邮件收到了我的英文结果。服务太棒了！”',
            'testimonial-2-author': '- A. Tran (越南, 游客)',
            'testimonial-3-text': '“为我们多元化的外籍员工团队管理健康检查是一场后勤噩梦。错过预约、语言问题和结果延迟是常有的事。自从使用CHECKIT后，我们的流程变得顺畅，员工们也感受到了真正的关怀。这极大地改善了我们团队的福祉。”',
            'testimonial-3-author': '- J. Kim (人力资源经理, 科技公司)',
            'contact-title': '有任何疑问吗？', 'contact-subtitle': '专业经理将在24小时内回复。',
            'contact-email': '请输入您的电子邮件地址', 'contact-message': '请输入您的留言', 'contact-submit': '申请咨询',
            'footer-copy': '© 2024 CHECKIT. 版权所有。',
            'chat-title': 'CHECKIT 机器人', 
            'chat-welcome': '你好！对CHECKIT有任何疑问吗？请选择以下问题或自行输入。',
            'chat-input-placeholder': '请输入您想问的问题...',
            'faq-1': '如何进行预订？',
            'faq-2': '是与医院/医生签约的模式吗？',
            'faq-3': '你们是否提供医疗行为或转诊服务？',
            'faq-4': '体检当天是否提供陪同服务？',
            'faq-5': '检查结果如何传达？',
            'ans-1': '预订请通过网站底部的“申请咨询”进行，专属经理将开始您的1:1管理。',
            'ans-2': '不，我们不“推荐”特定医院。我们会根据您的需求和偏好，提供一份医院“列表”，帮助您自己选择最合适的医院。',
            'ans-3': '不，我们明确声明不进行医疗行为或医疗转诊，因为这可能违反医疗法规。我们的职责是帮助您顺利完成体检的非医疗部分（预订、翻译、引导）。',
            'ans-4': '不，我们的经理不会亲自“陪同”您。但在体检当天，我们提供“实时沟通服务”，远程协助您完成从挂号到结束的所有必要沟通，确保过程顺利。',
            'ans-5': '医院出具检查结果后，我们会立即将其翻译成您要求的语言并交付给您。我们不会对结果添加任何医疗判断或诊断，仅提供对原始内容的忠实翻译。',
            'faq-default-ans': '感谢您的询问。关于此事，请通过我们主页上的联系部分留下问题，专业经理将迅速回复。'
        },
        vi: {
            'logo': 'CHECKIT',
            'nav-services': 'Dịch vụ', 'nav-process': 'Quy trình', 'nav-testimonials': 'Đánh giá', 'nav-contact': 'Liên hệ',
            'hero-title': 'Khám sức khỏe cho người nước ngoài, <br>Thoải mái không rào cản ngôn ngữ.',
            'hero-subtitle': 'Từ lịch hẹn bị lỡ, hướng dẫn khó hiểu, đến kết quả chỉ có bằng tiếng Hàn. CHECKIT giải quyết mọi quy trình phi y tế.',
            'hero-cta': 'Yêu cầu tư vấn ngay',
            'services-title': 'Dịch vụ này dành cho ai?',
            'individuals-title': 'Dành cho cá nhân', 'individuals-desc': 'Trải nghiệm hành trình khám sức khỏe cá nhân hóa. Dịch vụ dành cho người cư trú tại Hàn Quốc và khách du lịch y tế.',
            'individuals-cta': 'Tìm hiểu thêm',
            'business-title': 'Dành cho doanh nghiệp', 'business-desc': 'Quản lý sức khỏe của nhân viên nước ngoài một cách có hệ thống để phòng ngừa tai nạn lao động và nâng cao hiệu quả công việc.',
            'business-cta': 'Tìm hiểu thêm',
            'process-title': 'Quy trình hoạt động của CHECKIT', 
            'process-1-title': 'Yêu cầu tư vấn', 'process-1-desc': 'Chỉ cần yêu cầu tư vấn qua trang web của chúng tôi và một người quản lý riêng sẽ được chỉ định.',
            'process-2-title': 'Tư vấn tùy chỉnh', 'process-2-desc': 'Chúng tôi phối hợp các kỳ thi, lịch trình và ngôn ngữ cần thiết để xác nhận đặt chỗ cuối cùng của bạn.',
            'process-3-title': 'Khám & Kết quả', 'process-3-desc': 'Thoải mái kiểm tra sức khỏe và nhận kết quả đã được dịch cùng hướng dẫn theo dõi tất cả trong một lần.',
            'testimonials-title': 'Đánh giá của người dùng', 
            'testimonial-1-text': '“Là một người cư trú lâu năm, tôi luôn phải vật lộn với rào cản ngôn ngữ tại các bệnh viện. CHECKIT đã quản lý mọi thứ một cách hoàn hảo, từ việc lên lịch hẹn cho đến báo cáo cuối cùng đã được dịch thuật. Đó là trải nghiệm y tế không căng thẳng nhất mà tôi từng có ở Hàn Quốc.”',
            'testimonial-1-author': '- Michael. L (Hoa Kỳ, Cư dân)',
            'testimonial-2-text': '“Tôi đến Hàn Quốc trong một chuyến đi ngắn và cần một cuộc kiểm tra sức khỏe nhanh chóng, đáng tin cậy. Quy trình của CHECKIT cực kỳ hiệu quả. Họ đã tìm một bệnh viện gần tôi và xử lý mọi giao tiếp. Tôi nhận được kết quả bằng tiếng Anh qua email chỉ trong vài ngày. Dịch vụ tuyệt vời!”',
            'testimonial-2-author': '- A. Tran (Việt Nam, Khách du lịch)',
            'testimonial-3-text': '“Việc quản lý kiểm tra sức khỏe cho đội ngũ nhân viên nước ngoài đa dạng của chúng tôi là một cơn ác mộng về hậu cần. Các cuộc hẹn bị bỏ lỡ, vấn đề ngôn ngữ và kết quả chậm trễ là chuyện thường tình. Kể từ khi sử dụng CHECKIT, quy trình của chúng tôi đã được sắp xếp hợp lý và nhân viên của chúng tôi cảm thấy được quan tâm thực sự. Điều này đã cải thiện đáng kể sức khỏe của đội ngũ chúng tôi.”',
            'testimonial-3-author': '- J. Kim (Trưởng phòng Nhân sự, Công ty Công nghệ)',
            'contact-title': 'Bạn có câu hỏi nào không?', 'contact-subtitle': 'Một người quản lý chuyên nghiệp sẽ trả lời trong vòng 24 giờ.',
            'contact-email': 'Nhập địa chỉ email của bạn', 'contact-message': 'Nhập tin nhắn của bạn', 'contact-submit': 'Yêu cầu tư vấn',
            'footer-copy': '© 2024 CHECKIT. Mọi quyền được bảo lưu.',
            'chat-title': 'Bot CHECKIT', 
            'chat-welcome': 'Xin chào! Bạn có câu hỏi nào về CHECKIT không? Vui lòng chọn một câu hỏi bên dưới hoặc tự nhập câu hỏi của bạn.',
            'chat-input-placeholder': 'Nhập tin nhắn của bạn...',
            'faq-1': 'Làm cách nào để đặt chỗ?',
            'faq-2': 'Đây có phải là cấu trúc hợp đồng với bệnh viện/bác sĩ không?',
            'faq-3': 'Bạn có thực hiện các hành vi y tế hoặc giới thiệu không?',
            'faq-4': 'Bạn có cung cấp dịch vụ đi cùng trong ngày không?',
            'faq-5': 'Kết quả được giao như thế nào?',
            'ans-1': 'Để đặt hẹn, vui lòng sử dụng mục \'Yêu cầu Tư vấn\' ở cuối trang web của chúng tôi. Một người quản lý riêng sẽ bắt đầu chăm sóc 1:1 cho bạn.',
            'ans-2': 'Không, chúng tôi không \'đề xuất\' một bệnh viện cụ thể. Thay vào đó, chúng tôi cung cấp một \'danh sách\' các bệnh viện phù hợp với nhu cầu và sở thích của bạn, giúp bạn tự mình chọn lựa bệnh viện tối ưu nhất.',
            'ans-3': 'Không, để rõ ràng, chúng tôi không thực hiện các hành vi y tế hoặc giới thiệu y tế vì điều này có thể vi phạm luật y tế. Vai trò của chúng tôi là hỗ trợ các khía cạnh phi y tế (đặt chỗ, phiên dịch, hướng dẫn) để đảm bảo bạn có một trải nghiệm khám sức khỏe thuận lợi.',
            'ans-4': 'Không, người quản lý của chúng tôi không \'đi cùng\' bạn. Thay vào đó, chúng tôi cung cấp \'dịch vụ giao tiếp thời gian thực\' vào ngày khám để hỗ trợ từ xa mọi giao tiếp cần thiết từ lúc đăng ký cho đến khi kết thúc, đảm bảo quá trình diễn ra suôn sẻ.',
            'ans-5': 'Ngay sau khi kết quả khám được bệnh viện cấp, chúng tôi sẽ dịch chúng sang ngôn ngữ bạn yêu cầu và giao cho bạn. Chúng tôi không thêm bất kỳ nhận định hoặc chẩn đoán y tế nào vào kết quả; chúng tôi chỉ cung cấp một bản dịch trung thành của nội dung gốc.',
            'faq-default-ans': 'Cảm ơn bạn đã yêu cầu. Về vấn đề này, vui lòng để lại câu hỏi qua phần liên hệ trên trang chủ của chúng tôi và một người quản lý chuyên nghiệp sẽ trả lời nhanh chóng.'
        }
    };

    let currentLang = localStorage.getItem('checkitLang') || 'ko';

    function updateTexts(lang) {
        currentLang = lang;
        localStorage.setItem('checkitLang', lang);
        document.documentElement.lang = lang; // Set language on <html> tag

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang]?.[key]) {
                el.innerHTML = translations[lang][key];
            }
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[lang]?.[key]) {
                el.placeholder = translations[lang][key];
            }
        });

        document.querySelectorAll('.lang-switcher button').forEach(button => {
            button.classList.toggle('active', button.dataset.lang === lang);
        });

        updateChatUI(lang);
    }

    function setupLangSwitchers() {
        document.querySelectorAll('.lang-switcher button').forEach(button => {
            button.addEventListener('click', (e) => {
                updateTexts(e.target.dataset.lang);
            });
        });
    }

    // 2. CHATBOT --------------------------------------
    function updateChatUI(lang) {
        const chatMessages = document.getElementById('chat-messages');
        const faqContainer = document.getElementById('faq-options');
        if (!chatMessages || !faqContainer) return;

        // Clear existing content
        chatMessages.innerHTML = '';
        faqContainer.innerHTML = '';

        // Add welcome message
        appendMessage('bot', translations[lang]['chat-welcome']);

        // Add new FAQ buttons
        for (let i = 1; i <= 5; i++) {
            const key = `faq-${i}`;
            if (translations[lang]?.[key]) {
                const button = document.createElement('button');
                button.textContent = translations[lang][key];
                button.dataset.questionKey = key;
                button.addEventListener('click', () => {
                    handleFAQClick(key);
                });
                faqContainer.appendChild(button);
            }
        }
    }

    function handleFAQClick(questionKey) {
        const userMessage = translations[currentLang][questionKey];
        appendMessage('user', userMessage);
        showTypingIndicator();
        
        setTimeout(() => {
            getBotResponse(questionKey, true);
        }, 1200);
    }

    function setupChatbot() {
        const chatWindow = document.getElementById('chat-window');
        const chatToggle = document.getElementById('chat-toggle');
        const chatClose = document.getElementById('chat-close');
        const chatInput = document.getElementById('chat-input');
        const chatSend = document.getElementById('chat-send');

        if (!chatWindow || !chatToggle || !chatClose || !chatInput || !chatSend) return;

        chatToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            chatWindow.classList.remove('hidden');
            chatToggle.classList.add('hidden');
            updateTexts(currentLang); // Initialize chat with current language
        });

        chatClose.addEventListener('click', (e) => {
            e.stopPropagation();
            chatWindow.classList.add('hidden');
            chatToggle.classList.remove('hidden');
        });

        const sendMessage = () => {
            const messageText = chatInput.value.trim();
            if (!messageText) return;

            appendMessage('user', messageText);
            chatInput.value = '';
            showTypingIndicator();

            setTimeout(() => {
                getBotResponse(messageText, false);
            }, 1200);
        };
        
        chatSend.addEventListener('click', sendMessage);
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                sendMessage();
            }
        });
    }

    function appendMessage(sender, text) {
        const chatMessages = document.getElementById('chat-messages');
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', `${sender}-message`);
        messageDiv.innerHTML = text; // Use innerHTML to render links from answers
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function showTypingIndicator() {
        const chatMessages = document.getElementById('chat-messages');
        const indicator = document.createElement('div');
        indicator.className = 'typing-indicator';
        indicator.innerHTML = '<span></span><span></span><span></span>';
        chatMessages.appendChild(indicator);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function removeTypingIndicator() {
        const chatMessages = document.getElementById('chat-messages');
        const indicator = chatMessages.querySelector('.typing-indicator');
        if (indicator) {
            chatMessages.removeChild(indicator);
        }
    }
    
    function getBotResponse(message, isFaqClick) {
        removeTypingIndicator();
        let responseText = '';
    
        if (isFaqClick) {
            // For FAQ clicks, get the specific corresponding answer
            const answerKey = `ans-${message.slice(-1)}`; // message is the questionKey, e.g., 'faq-1'
            responseText = translations[currentLang][answerKey];
        } else {
            // For free text, try to match it to a question
            let matched = false;
            for (let i = 1; i <= 5; i++) {
                const questionKey = `faq-${i}`;
                const answerKey = `ans-${i}`;
                // A simple check if the user's message contains the question text
                if (translations[currentLang][questionKey] && message.toLowerCase().includes(translations[currentLang][questionKey].toLowerCase())) {
                    responseText = translations[currentLang][answerKey];
                    matched = true;
                    break;
                }
            }
            if (!matched) {
                responseText = translations[currentLang]['faq-default-ans'];
            }
        }
    
        appendMessage('bot', responseText);
    }

    // 3. MOBILE NAVIGATION ---------------------------
    function setupHamburgerMenu() {
        const hamburger = document.querySelector('.hamburger');
        const navUl = document.querySelector('header nav ul');

        if (hamburger && navUl) {
            hamburger.addEventListener('click', () => {
                navUl.classList.toggle('is-active');
                hamburger.querySelector('i').classList.toggle('fa-bars');
                hamburger.querySelector('i').classList.toggle('fa-times');
            });
            document.querySelectorAll('header nav ul a').forEach(link => {
                link.addEventListener('click', () => {
                    if (navUl.classList.contains('is-active')) {
                        navUl.classList.remove('is-active');
                        hamburger.querySelector('i').classList.add('fa-bars');
                        hamburger.querySelector('i').classList.remove('fa-times');
                    }
                });
            });
        }
    }

    // INITIALIZE ALL --------------------------------
    setupLangSwitchers();
    setupChatbot();
    setupHamburgerMenu();
    // Set initial language based on localStorage or default
    updateTexts(currentLang);
});
