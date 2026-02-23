
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
            'business-cta': '문의하기',
            'process-title': 'CHECKIT 이용 과정', 
            'process-1-title': '상담 신청', 'process-1-desc': '웹사이트를 통해 간단히 상담을 신청하고, 전담 매니저가 배정됩니다.',
            'process-2-title': '맞춤 컨설팅', 'process-2-desc': '필요한 검진, 일정, 언어를 조율하고 최종 예약을 확정합니다.',
            'process-3-title': '검진 및 결과', 'process-3-desc': '편안하게 검진을 받고, 번역된 결과지와 후속 안내까지 제공받습니다.',
            'testimonials-title': '사용자 후기', 
            'testimonial-1-text': '“정말 최고의 서비스였습니다. 예약부터 통역까지 완벽하게 도와주셔서 정말 편안하게 건강검진을 마칠 수 있었습니다.”',
            'testimonial-2-text': '“한국 병원 방문이 처음이라 막막했는데, CHECKIT 덕분에 모든 것이 순조로웠습니다. 강력히 추천합니다!”',
            'contact-title': '궁금한 점이 있으신가요?', 'contact-subtitle': '24시간 내에 전문 매니저가 답변해드립니다.',
            'contact-email': '이메일 주소를 입력하세요', 'contact-message': '문의 내용을 입력하세요', 'contact-submit': '상담 신청하기',
            'footer-copy': '© 2024 CHECKIT. All rights reserved.',
            'chat-title': 'CHECKIT봇', 
            'chat-welcome': '안녕하세요! 궁금한 점을 물어보세요. 아래에서 자주 묻는 질문을 선택하거나 직접 입력해 주세요.',
            'chat-input-placeholder': '메시지를 입력하세요...',
            'faq-1': '서비스는 어떤 종류가 있나요?',
            'faq-2': '비용은 얼마인가요?',
            'faq-3': '예약 절차는 어떻게 되나요?',
            'faq-1-ans': 'CHECKIT은 개인 맞춤형 건강검진 예약, 통역, 결과 번역 등 비의료 전 과정을 지원합니다. 자세한 내용은 <a href="/individual.html">개인 고객 페이지</a>를 참고하세요.',
            'faq-2-ans': '비용은 선택하시는 검진 프로그램과 부가 서비스에 따라 다릅니다. 기본 플랜은 ...부터 시작하며, 자세한 내용은 <a href="/individual.html#pricing">요금 안내</a>를 확인해주세요.',
            'faq-3-ans': '홈페이지의 '상담 신청'을 통해 문의를 남겨주시면, 전문 매니저가 24시간 내에 연락드려 모든 과정을 안내해 드립니다.',
            'faq-default-ans': '죄송합니다. 아직 학습 중이라 답변을 드릴 수 없어요. 더 자세한 문의는 홈페이지의 문의 섹션을 이용해주세요.'
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
            'business-cta': 'Contact Us',
            'process-title': 'How CHECKIT Works', 
            'process-1-title': 'Consultation Request', 'process-1-desc': 'Simply request a consultation through our website, and a dedicated manager will be assigned.',
            'process-2-title': 'Custom Consulting', 'process-2-desc': 'We coordinate the necessary exams, schedules, and languages to confirm your final reservation.',
            'process-3-title': 'Exam & Results', 'process-3-desc': 'Comfortably get your check-up and receive your translated results and follow-up guidance all at once.',
            'testimonials-title': 'User Reviews', 
            'testimonial-1-text': '“Absolutely the best service. They helped perfectly from reservation to interpretation, so I could complete my health check-up very comfortably.”',
            'testimonial-2-text': '“It was my first time visiting a Korean hospital and I was lost, but thanks to CHECKIT, everything went smoothly. Highly recommend!”',
            'contact-title': 'Have Any Questions?', 'contact-subtitle': 'A professional manager will respond within 24 hours.',
            'contact-email': 'Enter your email address', 'contact-message': 'Enter your message', 'contact-submit': 'Request Consultation',
            'footer-copy': '© 2024 CHECKIT. All rights reserved.',
            'chat-title': 'CHECKIT Bot', 
            'chat-welcome': 'Hello! Feel free to ask anything. Select a frequently asked question below or type your own.',
            'chat-input-placeholder': 'Type your message...',
            'faq-1': 'What types of services are there?',
            'faq-2': 'How much does it cost?',
            'faq-3': 'What is the reservation process?',
            'faq-1-ans': 'CHECKIT supports the entire non-medical process, including personalized health check-up reservations, interpretation, and result translation. For more details, please refer to the <a href="/individual.html">For Individuals page</a>.',
            'faq-2-ans': 'The cost varies depending on the check-up program and additional services you choose. Basic plans start from..., and you can find more details on our <a href="/individual.html#pricing">Pricing page</a>.',
            'faq-3-ans': 'If you leave an inquiry through the 'Request Consultation' on our website, a professional manager will contact you within 24 hours to guide you through the process.',
            'faq-default-ans': 'I apologize, I am still learning and cannot provide an answer. For more detailed inquiries, please use the contact section on our homepage.'
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
            'business-cta': '联系我们',
            'process-title': 'CHECKIT 使用流程', 
            'process-1-title': '申请咨询', 'process-1-desc': '通过网站简单申请咨询，我们将为您分配专属经理。',
            'process-2-title': '定制咨询', 'process-2-desc': '协调所需的检查、日程和语言，确认最终预订。',
            'process-3-title': '体检与结果', 'process-3-desc': '在预定日期轻松接受体检，一次性收到翻译好的结果报告和后续指南。',
            'testimonials-title': '用户评价', 
            'testimonial-1-text': '“绝对是最好的服务。从预订到翻译，他们都给予了完美的帮助，让我非常舒适地完成了健康体检。”',
            'testimonial-2-text': '“这是我第一次访问韩国医院，感到很迷茫，但多亏了CHECKIT，一切都进行得很顺利。强烈推荐！”',
            'contact-title': '有任何疑问吗？', 'contact-subtitle': '专业经理将在24小时内回复。',
            'contact-email': '请输入您的电子邮件地址', 'contact-message': '请输入您的留言', 'contact-submit': '申请咨询',
            'footer-copy': '© 2024 CHECKIT. 版权所有。',
            'chat-title': 'CHECKIT 机器人', 
            'chat-welcome': '你好！随时提问。请选择下面的常见问题或自行输入。',
            'chat-input-placeholder': '请输入您想问的问题...',
            'faq-1': '有哪些服务类型？',
            'faq-2': '费用是多少？',
            'faq-3': '预订流程是怎样的？',
            'faq-1-ans': 'CHECKIT 支持整个非医疗过程，包括个性化的健康检查预订、口译和结果翻译。有关详细信息，请参阅<a href="/individual.html">个人客户页面</a>。',
            'faq-2-ans': '费用因您选择的体检项目和附加服务而异。基本计划的起始价格为...，您可以在我们的<a href="/individual.html#pricing">价格页面</a>上找到更多详细信息。',
            'faq-3-ans': '如果您通过我们网站上的“请求咨询”留下查询，专业经理将在24小时内与您联系，指导您完成整个过程。',
            'faq-default-ans': '很抱歉，我还在学习中，无法提供答案。如需更详细的查询，请使用我们主页上的联系部分。'
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
            'business-cta': 'Liên hệ chúng tôi',
            'process-title': 'Quy trình hoạt động của CHECKIT', 
            'process-1-title': 'Yêu cầu tư vấn', 'process-1-desc': 'Chỉ cần yêu cầu tư vấn qua trang web của chúng tôi và một người quản lý riêng sẽ được chỉ định.',
            'process-2-title': 'Tư vấn tùy chỉnh', 'process-2-desc': 'Chúng tôi phối hợp các kỳ thi, lịch trình và ngôn ngữ cần thiết để xác nhận đặt chỗ cuối cùng của bạn.',
            'process-3-title': 'Khám & Kết quả', 'process-3-desc': 'Thoải mái kiểm tra sức khỏe và nhận kết quả đã được dịch cùng hướng dẫn theo dõi tất cả trong một lần.',
            'testimonials-title': 'Đánh giá của người dùng', 
            'testimonial-1-text': '“Dịch vụ tuyệt vời nhất. Họ đã giúp đỡ hoàn hảo từ việc đặt trước đến phiên dịch, vì vậy tôi có thể hoàn thành việc kiểm tra sức khỏe của mình một cách rất thoải mái.”',
            'testimonial-2-text': '“Đây là lần đầu tiên tôi đến bệnh viện Hàn Quốc và tôi đã bị lạc, nhưng nhờ có CHECKIT, mọi thứ đều diễn ra suôn sẻ. Rất khuyến khích!”',
            'contact-title': 'Bạn có câu hỏi nào không?', 'contact-subtitle': 'Một người quản lý chuyên nghiệp sẽ trả lời trong vòng 24 giờ.',
            'contact-email': 'Nhập địa chỉ email của bạn', 'contact-message': 'Nhập tin nhắn của bạn', 'contact-submit': 'Yêu cầu tư vấn',
            'footer-copy': '© 2024 CHECKIT. Mọi quyền được bảo lưu.',
            'chat-title': 'Bot CHECKIT', 
            'chat-welcome': 'Xin chào! Cứ tự nhiên hỏi bất cứ điều gì. Chọn một câu hỏi thường gặp bên dưới hoặc tự nhập câu hỏi của bạn.',
            'chat-input-placeholder': 'Nhập tin nhắn của bạn...',
            'faq-1': 'Có những loại dịch vụ nào?',
            'faq-2': 'Chi phí là bao nhiêu?',
            'faq-3': 'Quy trình đặt hẹn như thế nào?',
            'faq-1-ans': 'CHECKIT hỗ trợ toàn bộ quy trình phi y tế, bao gồm đặt chỗ khám sức khỏe cá nhân, phiên dịch và dịch kết quả. Để biết thêm chi tiết, vui lòng tham khảo <a href="/individual.html">trang Dành cho Cá nhân</a>.',
            'faq-2-ans': 'Chi phí thay đổi tùy thuộc vào chương trình khám sức khỏe và các dịch vụ bổ sung bạn chọn. Các gói cơ bản bắt đầu từ ..., và bạn có thể tìm thêm chi tiết trên <a href="/individual.html#pricing">trang Giá cả</a> của chúng tôi.',
            'faq-3-ans': 'Nếu bạn để lại yêu cầu qua mục 'Yêu cầu tư vấn' trên trang web của chúng tôi, một người quản lý chuyên nghiệp sẽ liên hệ với bạn trong vòng 24 giờ để hướng dẫn bạn trong suốt quá trình.',
            'faq-default-ans': 'Tôi xin lỗi, tôi vẫn đang học và không thể cung cấp câu trả lời. Đối với các yêu cầu chi tiết hơn, vui lòng sử dụng phần liên hệ trên trang chủ của chúng tôi.'
        }
    };

    let currentLang = localStorage.getItem('checkitLang') || 'en';

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

        const allLangButtons = document.querySelectorAll('[data-lang]');
        allLangButtons.forEach(button => {
            button.classList.toggle('active', button.dataset.lang === lang);
        });

        updateFAQButtons(lang);
    }

    function setupLangSwitchers() {
        const allLangButtons = document.querySelectorAll('[data-lang]');
        allLangButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const newLang = e.target.dataset.lang;
                if (newLang !== currentLang) {
                    currentLang = newLang;
                    localStorage.setItem('checkitLang', newLang);
                    updateTexts(newLang);
                    // Also update the initial bot message
                    const chatMessages = document.getElementById('chat-messages');
                    const welcomeMsg = chatMessages.querySelector('.bot-message p');
                    if(welcomeMsg) {
                        welcomeMsg.innerHTML = translations[currentLang]['chat-welcome'];
                    }
                }
            });
        });
    }

    // 2. CHATBOT --------------------------------------
    function updateFAQButtons(lang) {
        const faqContainer = document.getElementById('faq-options');
        if (!faqContainer) return;
        faqContainer.innerHTML = '';
        for (let i = 1; i <= 3; i++) {
            const key = `faq-${i}`;
            if (translations[lang] && translations[lang][key]) {
                const button = document.createElement('button');
                button.textContent = translations[lang][key];
                button.addEventListener('click', () => {
                    const chatInput = document.getElementById('chat-input');
                    chatInput.value = button.textContent;
                    document.getElementById('chat-send').click();
                });
                faqContainer.appendChild(button);
            }
        }
    }

    function setupChatbot() {
        const chatWindow = document.getElementById('chat-window');
        const chatToggle = document.getElementById('chat-toggle');
        const chatClose = document.getElementById('chat-close');
        const chatInput = document.getElementById('chat-input');
        const chatSend = document.getElementById('chat-send');
        const chatMessages = document.getElementById('chat-messages');

        if (!chatWindow || !chatToggle || !chatClose || !chatInput || !chatSend || !chatMessages) return;

        const openChat = (e) => {
            if (e) e.stopPropagation();
            chatWindow.classList.remove('hidden');
            chatToggle.classList.add('hidden');
        };

        const closeChat = (e) => {
            if (e) e.stopPropagation();
            chatWindow.classList.add('hidden');
            chatToggle.classList.remove('hidden');
        };

        chatToggle.addEventListener('click', openChat);
        chatClose.addEventListener('click', closeChat);

        const sendMessage = () => {
            const messageText = chatInput.value.trim();
            if (!messageText) return;

            appendMessage('user', messageText);
            chatInput.value = '';
            showTypingIndicator();

            setTimeout(() => {
                getBotResponse(messageText);
            }, 1200);
        };
        
        const appendMessage = (sender, text) => {
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('message', `${sender}-message`);
            messageDiv.innerHTML = text; // Use innerHTML to render links
            chatMessages.appendChild(messageDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        };

        const showTypingIndicator = () => {
            const indicator = document.createElement('div');
            indicator.className = 'typing-indicator';
            indicator.innerHTML = '<span></span><span></span><span></span>';
            chatMessages.appendChild(indicator);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        };

        const removeTypingIndicator = () => {
            const indicator = chatMessages.querySelector('.typing-indicator');
            if (indicator) {
                chatMessages.removeChild(indicator);
            }
        };
        
        const getBotResponse = (userMessage) => {
            let responseKey = 'faq-default-ans'; // Default response

            for (let i = 1; i <= 3; i++) {
                const faqKey = `faq-${i}`;
                // Check if the user message contains the FAQ question text
                if (translations[currentLang][faqKey] && userMessage.includes(translations[currentLang][faqKey])) {
                    responseKey = `faq-${i}-ans`;
                    break;
                }
            }

            const responseText = translations[currentLang][responseKey];
            removeTypingIndicator();
            appendMessage('bot', responseText);
        };

        chatSend.addEventListener('click', sendMessage);
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendMessage();
        });
    }

    // 3. MOBILE NAVIGATION ---------------------------
    function setupHamburgerMenu() {
        const hamburger = document.querySelector('.hamburger');
        const navUl = document.querySelector('header nav ul');

        if (hamburger && navUl) {
            hamburger.addEventListener('click', () => {
                navUl.classList.toggle('is-active');
                const icon = hamburger.querySelector('i');
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
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
    updateTexts(currentLang);
    setupLangSwitchers();
    setupChatbot();
    setupHamburgerMenu();
});
