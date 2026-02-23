
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
        appendMessage('bot', translations[lang]?.[ 'chat-welcome']);

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
        if (!text) return; // Add a guard clause
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
                if (translations[currentLang]?.[questionKey] && message.toLowerCase().includes(translations[currentLang][questionKey].toLowerCase())) {
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
