document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        'ko': {
            'nav-services': '서비스',
            'nav-process': '프로세스',
            'nav-testimonials': '후기',
            'nav-contact': '문의',
            'logo': 'CHECKIT',
            'hero-title': '외국인을 위한 건강검진, <br>언어의 장벽 없이 편안하게.',
            'hero-subtitle': '일정 누락, 이해하기 어려운 검진 안내, 한국어로만 제공되는 결과지까지. CHECKIT이 모든 비의료 과정을 해결합니다.',
            'hero-cta': '지금 바로 상담 신청',
            'individuals-title': '개인 고객',
            'individuals-desc': '개인 맞춤형 건강검진 여정을 경험하세요. 한국 거주자 및 의료 관광객을 위한 서비스입니다.',
            'individuals-cta': '더 알아보기',
            'business-title': '기업 고객',
            'business-desc': '외국인 직원의 건강을 체계적으로 관리하여 산업 재해를 예방하고 업무 효율을 높이세요.',
            'business-cta': '더 알아보기',
            'services-title': 'CHECKIT 주요 서비스',
            'service-1-title': '검진 안내 및 예약 보조',
            'service-1-desc': '언어 혼란 없이, 필요한 검진 항목을 파악하고 최적의 병원으로 예약을 도와드립니다.',
            'service-2-title': '전 과정 다국어 안내',
            'service-2-desc': '검진 전 주의사항부터 검진 당일 소통까지, 모든 과정을 지정된 언어로 편안하게 안내합니다.',
            'service-3-title': '결과 번역 및 관리',
            'service-3-desc': '검진 결과를 알기 쉽게 번역하고, 필요시 재검 일정 관리를 꼼꼼하게 돕습니다.',
            'service-4-title': '서류 및 행정 지원',
            'service-4-desc': '보험사 제출 서류 등 건강검진과 관련된 모든 서류 및 행정 절차를 지원합니다.',
            'process-title': 'CHECKIT 이용 과정',
            'process-1-title': '온라인 상담 신청',
            'process-1-desc': '웹사이트를 통해 간단히 상담을 신청하고, 전담 매니저가 배정됩니다.',
            'process-2-title': '맞춤 컨설팅 및 예약 보조',
            'process-2-desc': '필요한 검진, 일정, 언어를 조율하고 최종 예약을 확정합니다.',
            'process-3-title': '검진 및 결과 안내',
            'process-3-desc': '예약된 날짜에 편안하게 검진을 받고, 번역된 결과지와 후속 안내까지 한번에 제공받습니다.',
            'testimonials-title': '사용자 후기',
            'testimonial-1-text': '“정말 최고의 서비스였습니다. 예약부터 통역까지 완벽하게 도와주셔서 정말 편안하게 건강검진을 마칠 수 있었습니다.”',
            'testimonial-2-text': '“한국 병원 방문이 처음이라 막막했는데, CHECKIT 덕분에 모든 것이 순조로웠습니다. 강력히 추천합니다!”',
            'contact-title': '궁금한 점이 있으신가요?',
            'contact-subtitle': '24시간 내에 전문 매니저가 답변해드립니다.',
            'contact-email': '이메일 주소를 입력하세요',
            'contact-message': '문의 내용을 입력하세요',
            'contact-submit': '상담 신청하기',
            'footer-copy': '© 2024 CHECKIT. All rights reserved.',
            'chat-title': 'CHECKIT봇',
            'chat-welcome': '안녕하세요! CHECKIT봇입니다. 아래 목록에서 궁금한 점을 선택하거나, 간단한 인사를 나눠보세요.',
            'chat-input-placeholder': '메시지를 입력하세요...',
        },
        'en': {
            'nav-services': 'Services',
            'nav-process': 'Process',
            'nav-testimonials': 'Testimonials',
            'nav-contact': 'Contact',
            'logo': 'CHECKIT',
            'hero-title': 'Health Checkups for Foreigners, <br>Comfortable Without Language Barriers.',
            'hero-subtitle': 'From missed appointments and confusing guides to results only in Korean, CHECKIT resolves all non-medical challenges.',
            'hero-cta': 'Apply for Consultation Now',
            'individuals-title': 'For Individuals',
            'individuals-desc': 'Experience a personalized health check-up journey. Services for residents in Korea and medical tourists.',
            'individuals-cta': 'Learn More',
            'business-title': 'For Business',
            'business-desc': 'Systematically manage the health of your foreign employees to prevent industrial accidents and increase work efficiency.',
            'business-cta': 'Learn More',
            'services-title': 'Key Services of CHECKIT',
            'service-1-title': 'Guidance & Booking Assistance',
            'service-1-desc': 'We help you identify necessary checkup items and assist with booking at an optimal hospital without language confusion.',
            'service-2-title': 'Full Multilingual Support',
            'service-2-desc': 'From pre-checkup instructions to communication on the day of the checkup, we provide guidance in your preferred language.',
            'service-3-title': 'Result Translation & Management',
            'service-3-desc': 'We translate your checkup results for easy understanding and help manage follow-up appointments if needed.',
             'service-4-title': 'Document & Administrative Support',
            'service-4-desc': 'We assist with all paperwork and administrative procedures related to your health checkup, including documents for insurance.',
            'process-title': 'How CHECKIT Works',
            'process-1-title': 'Online Consultation Request',
            'process-1-desc': 'Simply request a consultation through our website, and a dedicated manager will be assigned to you.',
            'process-2-title': 'Customized Consulting & Booking',
            'process-2-desc': 'We coordinate the necessary tests, schedule, and language, then confirm the final booking.',
            'process-3-title': 'Checkup & Results Guidance',
            'process-3-desc': 'Receive your checkup comfortably on the scheduled date, and get your translated results and follow-up guidance all at once.',
            'testimonials-title': 'User Reviews',
            'testimonial-1-text': '"This was truly the best service. They helped me perfectly from booking to interpretation, so I could complete my health checkup very comfortably."',
            'testimonial-2-text': '"It was my first time visiting a hospital in Korea and I was lost, but thanks to CHECKIT, everything went smoothly. I highly recommend it!"',
            'contact-title': 'Do you have any questions?',
            'contact-subtitle': 'A professional manager will respond within 24 hours.',
            'contact-email': 'Enter your email address',
            'contact-message': 'Enter your inquiry',
            'contact-submit': 'Request Consultation',
            'footer-copy': '© 2024 CHECKIT. All rights reserved.',
            'chat-title': 'CHECKIT Bot',
            'chat-welcome': 'Hello! I\'m CHECKIT Bot. Please select a question from the list below, or say a simple greeting.',
            'chat-input-placeholder': 'Type your message...',
        },
        'zh': {
             'nav-services': '服务',
            'nav-process': '过程',
            'nav-testimonials': '评价',
            'nav-contact': '询问',
            'logo': 'CHECKIT',
            'hero-title': '为外国人提供健康体检，<br>无语言障碍，舒心体验。',
            'hero-subtitle': '从错过预约、难以理解的体检指南，<br>到仅提供韩语版本的结果报告，CHECKIT为您解决所有非医疗过程中的难题。',
            'hero-cta': '立即申请咨询',
            'individuals-title': '个人客户',
            'individuals-desc': '体验个性化的健康检查之旅。为韩国居民和医疗游客提供服务。',
            'individuals-cta': '了解更多',
            'business-title': '企业客户',
            'business-desc': '系统地管理外籍员工的健康，以预防工业事故并提高工作效率。',
            'business-cta': '了解更多',
            'services-title': 'CHECKIT 主要服务',
            'service-1-title': '体检指南及预约协助',
            'service-1-desc': '无需担心语言混乱，我们将帮助您确定必要的体检项目，并协助您在最合适的医院进行预约。',
            'service-2-title': '全程多语种服务',
            'service-2-desc': '从体检前的注意事项到体检当天的沟通，所有过程都将以您指定的语言进行，让您倍感舒适。',
            'service-3-title': '结果翻译及管理',
            'service-3-desc': '我们将体检结果翻译成易于理解的语言，并在必要时细心帮助您管理复查日程。',
            'service-4-title': '文件及行政支持',
            'service-4-desc': '我们为与您的健康体检相关的所有文件和行政程序提供支持，包括提交给保险公司的文件。',
            'process-title': 'CHECKIT 使用流程',
            'process-1-title': '在线申请咨询',
            'process-1-desc': '通过网站简单申请咨询，我们将为您分配专属经理。',
            'process-2-title': '定制咨询及预约协助',
            'process-2-desc': '协调必要的检查、日程和语言，并确定最终预约。',
            'process-3-title': '体检及结果指南',
            'process-3-desc': '在预定日期轻松接受体检，并一次性收到翻译好的结果报告和后续指南。',
            'testimonials-title': '用户评价',
            'testimonial-1-text': '“这真的是最棒的服务。从预约到口译，他们都完美地帮助了我，让我非常舒适地完成了健康体检。”',
            'testimonial-2-text': '“这是我第一次来韩国的医院，感到很迷茫，但多亏了CHECKIT，一切都进行得很顺利。我强烈推荐！”',
            'contact-title': '您有什么问题吗？',
            'contact-subtitle': '专业经理将在24小时内回复。',
            'contact-email': '请输入您的电子邮件地址',
            'contact-message': '请输入您的咨询内容',
            'contact-submit': '申请咨询',
            'footer-copy': '© 2024 CHECKIT. 版权所有。',
            'chat-title': 'CHECKIT 机器人',
            'chat-welcome': '你好！我是CHECKIT机器人。请从下面的列表中选择一个问题，或者说一句简单的问候。',
            'chat-input-placeholder': '输入您的留言...',
        },
        'vi': {
            'nav-services': 'Dịch vụ',
            'nav-process': 'Quy trình',
            'nav-testimonials': 'Đánh giá',
            'nav-contact': 'Liên hệ',
            'logo': 'CHECKIT',
            'hero-title': 'Khám sức khỏe cho người nước ngoài, <br>Thoải mái không rào cản ngôn ngữ.',
            'hero-subtitle': 'Từ việc bỏ lỡ lịch hẹn, hướng dẫn khám khó hiểu, đến kết quả chỉ có bằng tiếng Hàn, CHECKIT giải quyết mọi vấn đề phi y tế.',
            'hero-cta': 'Đăng ký tư vấn ngay',
            'individuals-title': 'Dành cho cá nhân',
            'individuals-desc': 'Trải nghiệm hành trình kiểm tra sức khỏe được cá nhân hóa. Dịch vụ dành cho người cư trú tại Hàn Quốc và khách du lịch y tế.',
            'individuals-cta': 'Tìm hiểu thêm',
            'business-title': 'Dành cho doanh nghiệp',
            'business-desc': 'Quản lý sức khỏe của nhân viên nước ngoài một cách có hệ thống để ngăn ngừa tai nạn lao động và tăng hiệu quả công việc.',
            'business-cta': 'Tìm hiểu thêm',
            'services-title': 'Dịch vụ chính của CHECKIT',
            'service-1-title': 'Hướng dẫn & Hỗ trợ đặt lịch',
            'service-1-desc': 'Chúng tôi giúp bạn xác định các mục khám cần thiết và hỗ trợ đặt lịch tại bệnh viện tối ưu mà không gặp khó khăn về ngôn ngữ.',
            'service-2-title': 'Hỗ trợ đa ngôn ngữ toàn diện',
            'service-2-desc': 'Từ những lưu ý trước khi khám đến giao tiếp trong ngày khám, chúng tôi cung cấp hướng dẫn bằng ngôn ngữ bạn muốn.',
            'service-3-title': 'Dịch & Quản lý kết quả',
            'service-3-desc': 'Chúng tôi dịch kết quả khám của bạn để dễ hiểu và giúp quản lý các cuộc hẹn tái khám nếu cần.',
            'service-4-title': 'Hỗ trợ giấy tờ & hành chính',
            'service-4-desc': 'Chúng tôi hỗ trợ tất cả các thủ tục giấy tờ và hành chính liên quan đến việc khám sức khỏe của bạn, bao gồm cả các tài liệu cho bảo hiểm.',
            'process-title': 'Quy trình hoạt động của CHECKIT',
            'process-1-title': 'Yêu cầu tư vấn trực tuyến',
            'process-1-desc': 'Chỉ cần yêu cầu tư vấn qua trang web của chúng tôi và một người quản lý riêng sẽ được chỉ định cho bạn.',
            'process-2-title': 'Tư vấn & Đặt lịch tùy chỉnh',
            'process-2-desc': 'Chúng tôi điều phối các xét nghiệm cần thiết, lịch trình và ngôn ngữ, sau đó xác nhận đặt lịch cuối cùng.',
            'process-3-title': 'Hướng dẫn khám & kết quả',
            'process-3-desc': 'Thực hiện khám một cách thoải mái vào ngày đã lên lịch và nhận kết quả đã được dịch cũng như hướng dẫn theo dõi tất cả cùng một lúc.',
            'testimonials-title': 'Đánh giá của người dùng',
            'testimonial-1-text': '"Đây thực sự là dịch vụ tốt nhất. Họ đã giúp tôi một cách hoàn hảo từ việc đặt lịch đến phiên dịch, vì vậy tôi có thể hoàn thành việc khám sức khỏe của mình một cách rất thoải mái."',
            'testimonial-2-text': '"Đây là lần đầu tiên tôi đến bệnh viện ở Hàn Quốc và tôi đã bị lạc lõng, nhưng nhờ có CHECKIT, mọi thứ đã diễn ra suôn sẻ. Tôi rất muốn giới thiệu nó!"',
            'contact-title': 'Bạn có câu hỏi nào không？',
            'contact-subtitle': 'Một người quản lý chuyên nghiệp sẽ trả lời trong vòng 24 giờ.',
            'contact-email': 'Nhập địa chỉ email của bạn',
            'contact-message': 'Nhập câu hỏi của bạn',
            'contact-submit': 'Yêu cầu tư vấn',
            'footer-copy': '© 2024 CHECKIT. Mọi quyền được bảo lưu.',
            'chat-title': 'CHECKIT Bot',
            'chat-welcome': 'Xin chào! Tôi là CHECKIT Bot. Vui lòng chọn một câu hỏi từ danh sách dưới đây, hoặc nói một lời chào đơn giản.',
            'chat-input-placeholder': 'Nhập tin nhắn của bạn...',
        }
    };

    const langSwitchers = document.querySelectorAll('.lang-switcher button, .chat-lang-selector button');
    let currentLang = 'ko';

    function updateTexts(lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[lang] && translations[lang][key]) {
                el.placeholder = translations[lang][key];
            }
        });

        langSwitchers.forEach(button => {
            if (button.dataset.lang === lang) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
        currentLang = lang;
        updateFaqButtons(lang);
    }

    langSwitchers.forEach(button => {
        button.addEventListener('click', (e) => {
            const lang = e.target.dataset.lang;
            updateTexts(lang);
        });
    });

    // --- Chatbot Logic --- 
    const chatToggle = document.getElementById('chat-toggle');
    const chatWindow = document.getElementById('chat-window');
    const chatClose = document.getElementById('chat-close');
    const chatMessages = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input');
    const chatSend = document.getElementById('chat-send');
    const faqOptions = document.getElementById('faq-options');

    chatToggle.addEventListener('click', () => {
        chatWindow.classList.toggle('hidden');
        if (!chatWindow.classList.contains('hidden')) {
            updateTexts(currentLang);
        }
    });

    chatClose.addEventListener('click', () => {
        chatWindow.classList.add('hidden');
    });

    function addMessage(text, sender) {
        const messageEl = document.createElement('div');
        messageEl.classList.add('message', `${sender}-message`);
        messageEl.textContent = text;
        chatMessages.appendChild(messageEl);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    const botResponses = {
        ko: { greeting: "안녕하세요! 무엇을 도와드릴까요?", fallback: "기본 질문 외의 문의는 '문의하기'를 통해 상세 내용을 남겨주시면, 담당 매니저가 직접 연락드리겠습니다." },
        en: { greeting: "Hello! How can I help you?", fallback: "For questions other than the basic ones, please leave the details via 'Contact Us', and a manager will contact you directly." },
        zh: { greeting: "你好！我能帮你什么？", fallback: "对于基本问题以外的查询，请通过\"联系我们\"留下详细信息，经理将直接与您联系。" },
        vi: { greeting: "Xin chào! Tôi có thể giúp gì cho bạn?", fallback: "Đối với các câu hỏi khác ngoài những câu hỏi cơ bản, vui lòng để lại chi tiết qua 'Liên hệ' và người quản lý sẽ liên hệ trực tiếp với bạn." }
    };
    
    const greetings = ['안녕', 'hello', 'hi', 'hey', '你好', 'xin chào'];

    function handleUserInput() {
        const userText = chatInput.value.trim().toLowerCase();
        if (userText) {
            addMessage(chatInput.value, 'user');
            const isGreeting = greetings.some(greeting => userText.includes(greeting));
            setTimeout(() => addMessage(isGreeting ? botResponses[currentLang].greeting : botResponses[currentLang].fallback, "bot"), 500);
            chatInput.value = '';
        }
    }

    chatSend.addEventListener('click', handleUserInput);
    chatInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') handleUserInput(); });

    const faq = {
        ko: [
            { q: "검진 예약은 어떻게 하나요?", a: "'문의하기'로 요청을 남겨주시면, 담당 매니저가 신속하게 절차를 안내해 드립니다." },
            { q: "중개 수수료가 있나요?", a: "아니요. 저희는 병원/의료인과 어떠한 계약도 없으므로 알선/중개 수수료가 전혀 없습니다. 상담 시 안내드리는 소정의 서비스 이용료만 발생합니다." },
            { q: "병원 추천도 해주시나요?", a: "특정 병원을 추천하지는 않습니다. 대신 원하시는 검진 항목에 맞는 병원 및 프로그램 리스트를 제공하여, 고객님께서 직접 선택하시는 데 도움을 드립니다." },
            { q: "검진 당일, 동행해주시나요?", a: "아니요, 저희는 물리적인 동행 서비스는 제공하지 않습니다. 다만, 검진 당일 필요한 소통을 도와드리는 '커뮤니케이션 서비스'는 제공됩니다." },
            { q: "검진 결과는 어떻게 알려주나요?", a: "결과지에 대한 '단순 번역'만 제공합니다. 의료적 판단, 사후 진료 알선은 절대 하지 않으며, 번역본 전달과 함께 재검 일정 관리, 주의사항 안내를 도와드립니다." }
        ],
        en: [
            { q: "How do I book a checkup?", a: "Please leave your request through the 'Contact Us' form. A manager will quickly guide you through the process." },
            { q: "Are there any brokerage fees?", a: "No. We have no contracts with hospitals or doctors, so there are absolutely no brokerage or commission fees. You only need to pay our service fee, which will be detailed during your consultation." },
            { q: "Can you recommend a hospital?", a: "We do not recommend specific hospitals. Instead, we provide a list of hospitals and programs that match your desired checkup items to help you make your own choice." },
            { q: "Do you accompany me to the hospital on the day of the checkup?", a: "No, we do not offer a physical accompaniment service. However, we do provide a 'communication service' to help you with necessary communication on the day of your checkup." },
            { q: "How do you inform me of the checkup results?", a: "We provide a 'simple translation' of your results only. We do not offer medical interpretations, judgments, or arrange follow-up treatments. We assist with managing your re-examination schedule and informing you of any precautions along with the translated copy." }
        ],
         zh: [
            { q: "如何预约体检？", a: "请通过\"联系我们\"表格留下您的请求。经理会迅速引导您完成流程。" },
            { q: "有中介费吗？", a: "没有。我们与医院或医生没有任何合同，因此完全没有中介费或佣金。您只需支付我们的服务费，这将在您的咨询中详细说明。" },
            { q: "你们推荐医院吗？", a: "我们不推荐具体医院。相反，我们会提供符合您期望检查项目的医院和项目列表，以帮助您自己做出选择。" },
            { q: "体检当天你们会陪同我去医院吗？", a: "不，我们不提供实体陪同服务。但是，我们提供\"沟通服务\"，以帮助您在体检当天进行必要的沟通。" },
            { q: "你们如何告知我体检结果？", a: "我们只提供您结果的\"简单翻译\"。我们不提供医疗解释、判断或安排后续治疗。我们会协助管理您的复查日程，并在提供翻译副本的同时告知您任何预防措施。" }
        ],
        vi: [
            { q: "Làm cách nào để đặt lịch khám sức khỏe?", a: "Vui lòng để lại yêu cầu của bạn qua biểu mẫu 'Liên hệ với chúng tôi'. Một người quản lý sẽ nhanh chóng hướng dẫn bạn qua quy trình." },
            { q: "Có phí môi giới không?", a: "Không. Chúng tôi không có hợp đồng với bệnh viện hoặc bác sĩ, vì vậy hoàn toàn không có phí môi giới hoặc hoa hồng. Bạn chỉ cần trả phí dịch vụ của chúng tôi, sẽ được trình bày chi tiết trong buổi tư vấn của bạn." },
            { q: "Bạn có giới thiệu bệnh viện không?", a: "Chúng tôi không giới thiệu bệnh viện cụ thể. Thay vào đó, chúng tôi cung cấp danh sách các bệnh viện và chương trình phù hợp với các mục khám bạn mong muốn để giúp bạn tự đưa ra lựa chọn." },
            { q: "Bạn có đi cùng tôi đến bệnh viện vào ngày khám không?", a: "Không, chúng tôi không cung cấp dịch vụ đi kèm thể chất. Tuy nhiên, chúng tôi cungV cấp 'dịch vụ giao tiếp' để giúp bạn giao tiếp cần thiết vào ngày khám." },
            { q: "Làm thế nào bạn thông báo cho tôi kết quả khám?", a: "Chúng tôi chỉ cung cấp 'bản dịch đơn giản' kết quả của bạn. Chúng tôi không cung cấp các diễn giải y tế, phán đoán hoặc sắp xếp các phương pháp điều trị tiếp theo. Chúng tôi hỗ trợ quản lý lịch tái khám và thông báo cho bạn về bất kỳ biện pháp phòng ngừa nào cùng với bản dịch." }
        ]
    };

    function updateFaqButtons(lang) {
        faqOptions.innerHTML = '';
        if (faq[lang]) {
            faq[lang].forEach(item => {
                const button = document.createElement('button');
                button.classList.add('faq-button');
                button.textContent = item.q;
                button.addEventListener('click', () => {
                    addMessage(item.q, 'user');
                    setTimeout(() => addMessage(item.a, 'bot'), 500);
                });
                faqOptions.appendChild(button);
            });
        }
    }

    updateTexts(currentLang);

    // --- Hamburger Menu Logic (Safely Added) --- 
    const hamburger = document.querySelector('.hamburger');
    const navUl = document.querySelector('header nav ul');
    const navLinks = document.querySelectorAll('header nav ul a');

    const toggleNav = () => {
        navUl.classList.toggle('is-active');
        document.body.classList.toggle('nav-active');
        const icon = hamburger.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    };

    hamburger.addEventListener('click', toggleNav);

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navUl.classList.contains('is-active')) {
                toggleNav();
            }
        });
    });
});
