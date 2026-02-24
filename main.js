document.addEventListener('DOMContentLoaded', () => {

    // 1. TRANSLATIONS & LANGUAGE -------------------
    const translations = {
        ko: {
            'logo': 'CHECKIT',
            'nav-services': '서비스', 'nav-process': '프로세스', 'nav-testimonials': '후기', 'nav-contact': '문의',
            'hero-title': '외국인을 위한 건강검진, 언어의 장벽 없이 편안하게.',
            'hero-subtitle': '일정 누락, 이해하기 어려운 검진 안내, 한국어로만 제공되는 결과지까지. CHECKIT이 모든 비의료 과정을 해결합니다.',
            'hero-cta': '지금 바로 상담 신청',
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
            'hero-title': 'Health Check-ups for Foreigners, Comfortable Without Language Barriers.',
            'hero-subtitle': 'From missed schedules and confusing instructions to results only in Korean. CHECKIT solves all non-medical processes.',
            'hero-cta': 'Request a Consultation Now',
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
            'hero-title': '为外国人提供健康体检，无语言障碍，舒适便捷。',
            'hero-subtitle': '从错过日程、难以理解的检查指南，到只有韩文的结果报告。CHECKIT为您解决所有非医疗过程。',
            'hero-cta': '立即申请咨询',
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
            'hero-title': 'Khám sức khỏe cho người nước ngoài, Thoải mái không rào cản ngôn ngữ.',
            'hero-subtitle': 'Từ lịch hẹn bị lỡ, hướng dẫn khó hiểu, đến kết quả chỉ có bằng tiếng Hàn. CHECKIT giải quyết mọi quy trình phi y tế.',
            'hero-cta': 'Yêu cầu tư vấn ngay',
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
        document.documentElement.lang = lang;

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang]?.[key]) {
                el.textContent = translations[lang][key];
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

    function updateChatUI(lang) {
        const chatMessages = document.getElementById('chat-messages');
        const faqContainer = document.getElementById('faq-options');
        if (!chatMessages || !faqContainer) return;

        chatMessages.innerHTML = '';
        faqContainer.innerHTML = '';

        appendMessage('bot', translations[lang]?.['chat-welcome']);

        for (let i = 1; i <= 5; i++) {
            const key = `faq-${i}`;
            if (translations[lang]?.[key]) {
                const button = document.createElement('button');
                button.textContent = translations[lang][key];
                button.addEventListener('click', () => handleFAQClick(key));
                faqContainer.appendChild(button);
            }
        }
    }

    function handleFAQClick(questionKey) {
        const userMessage = translations[currentLang][questionKey];
        appendMessage('user', userMessage);

        setTimeout(() => {
            const answerKey = `ans-${questionKey.slice(-1)}`;
            const botResponse = translations[currentLang][answerKey] || translations[currentLang]['faq-default-ans'];
            appendMessage('bot', botResponse);
        }, 500);
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
            updateTexts(currentLang);
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

            setTimeout(() => {
                appendMessage('bot', translations[currentLang]['faq-default-ans']);
            }, 500);
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
        if (!text) return;
        const chatMessages = document.getElementById('chat-messages');
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', `${sender}-message`);
        messageDiv.textContent = text;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function setupHamburgerMenu() {
        const hamburger = document.querySelector('.hamburger');
        const navUl = document.querySelector('header nav ul');

        if (hamburger && navUl) {
            hamburger.addEventListener('click', () => {
                navUl.classList.toggle('is-active');
            });
        }
    }

    // Initialize
    setupLangSwitchers();
    setupChatbot();
    setupHamburgerMenu();
    updateTexts(currentLang);
});
