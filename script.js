document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Language Translation Data ---
    const translations = {
        ko: {
            // Navigation
            '서비스': '서비스',
            '진행 과정': '진행 과정',
            '이용 후기': '이용 후기',
            '지금 바로 상담 시작하기': '지금 바로 상담 시작하기',
            '이메일로 문의하기': '이메일로 문의하기',

            // Hero
            '언어의 장벽 없이, <br> 편안한 건강검진을 경험하세요.': '언어의 장벽 없이, <br> 편안한 건강검진을 경험하세요.',
            'CHECKIT은 국내 거주 외국인 및 해외 방문객을 위한 건강검진의 모든 과정을 지원합니다.': 'CHECKIT은 국내 거주 외국인 및 해외 방문객을 위한 건강검진의 모든 과정을 지원합니다.',

            // Services
            'CHECKIT의 고객 맞춤 서비스': 'CHECKIT의 고객 맞춤 서비스',
            '개인 고객': '개인 고객',
            '기업 고객': '기업 고객',
            '한국 거주 중이거나 여행 중인 외국인 개인이 겪는 언어 문제와 병원 이용의 혼란을 해결합니다. 예약부터 결과 확인까지 전 과정을 1:1로 지원하여, 쉽고 정확한 건강검진을 보장합니다.': '한국 거주 중이거나 여행 중인 외국인 개인이 겪는 언어 문제와 병원 이용의 혼란을 해결합니다. 예약부터 결과 확인까지 전 과정을 1:1로 지원하여, 쉽고 정확한 건강검진을 보장합니다.',
            '외국인 근로자들의 건강검진은 이제 필수입니다. 보건관리자의 업무 부담을 줄이고, 체계적인 건강 관리로 복지 품질을 높이세요. 검진 참여율이 높아지고, 산업재해 예방과 업무 효율 증진에 기여합니다.': '외국인 근로자들의 건강검진은 이제 필수입니다. 보건관리자의 업무 부담을 줄이고, 체계적인 건강 관리로 복지 품질을 높이세요. 검진 참여율이 높아지고, 산업재해 예방과 업무 효율 증진에 기여합니다.',

            // Footer
            '궁금한 점이 있으신가요?': '궁금한 점이 있으신가요?',
            '24시간 내로 전문 매니저가 답변해 드립니다.': '24시간 내로 전문 매니저가 답변해 드립니다.',
        },
        en: {
            // Navigation
            '서비스': 'Services',
            '진행 과정': 'Process',
            '이용 후기': 'Reviews',
            '지금 바로 상담 시작하기': 'Start Consultation Now',
            '이메일로 문의하기': 'Contact via Email',

            // Hero
            '언어의 장벽 없이, <br> 편안한 건강검진을 경험하세요.': 'Experience comfortable health check-ups <br> without language barriers.',
            'CHECKIT은 국내 거주 외국인 및 해외 방문객을 위한 건강검진의 모든 과정을 지원합니다.': 'CHECKIT supports the entire health check-up process for foreigners residing in or visiting Korea.',

            // Services
            'CHECKIT의 고객 맞춤 서비스': 'CHECKIT\'s Customized Services',
            '개인 고객': 'Individual Clients',
            '기업 고객': 'Corporate Clients',
            '한국 거주 중이거나 여행 중인 외국인 개인이 겪는 언어 문제와 병원 이용의 혼란을 해결합니다. 예약부터 결과 확인까지 전 과정을 1:1로 지원하여, 쉽고 정확한 건강검진을 보장합니다.': 'We solve language problems and confusion in hospital use for individuals living in or traveling to Korea. We provide 1:1 support from reservation to result confirmation, ensuring easy and accurate health check-ups.',
            '외국인 근로자들의 건강검진은 이제 필수입니다. 보건관리자의 업무 부담을 줄이고, 체계적인 건강 관리로 복지 품질을 높이세요. 검진 참여율이 높아지고, 산업재해 예방과 업무 효율 증진에 기여합니다.': 'Health check-ups for foreign workers are now essential. Reduce the burden on health managers and improve welfare quality with systematic health management. It increases participation in check-ups and contributes to preventing industrial accidents and improving work efficiency.',
            
            // Footer
            '궁금한 점이 있으신가요?': 'Do you have any questions?',
            '24시간 내로 전문 매니저가 답변해 드립니다.': 'A professional manager will respond within 24 hours.',
        }
    };

    // --- 2. Website Language Translation Logic ---
    window.changeLanguage = (lang) => {
        document.querySelectorAll('[data-lang="ko"]').forEach(el => {
            const key = el.innerHTML.trim(); // Use innerHTML to handle <br>
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
    };

    // --- 3. Chatbot UI Control ---
    const checkbotIcon = document.getElementById('checkbot-icon');
    const chatWindow = document.getElementById('checkbot-chat-window');
    const closeChatBtn = document.getElementById('close-chat-btn');

    checkbotIcon.addEventListener('click', () => {
        chatWindow.classList.remove('hidden');
        checkbotIcon.classList.add('hidden');
    });

    closeChatBtn.addEventListener('click', () => {
        chatWindow.classList.add('hidden');
        checkbotIcon.classList.remove('hidden');
    });

    // --- 4. Chatbot Conversation Logic ---
    const chatMessages = document.querySelector('.chat-messages');
    const inputField = document.getElementById('chat-input-field');
    const sendBtn = document.getElementById('chat-send-btn');
    let chatLanguage = 'ko'; // Default chat language

    const chatResponses = {
        ko: {
            'default': '안녕하세요! Check봇입니다. 무엇을 도와드릴까요? (예: 서비스, 기업, 개인)',
            '서비스': 'CHECKIT은 개인 및 기업 고객을 위한 맞춤 건강검진 지원 서비스를 제공합니다. 어떤 서비스가 궁금하신가요?',
            '기업': '기업 고객을 위해 외국인 근로자의 체계적인 건강검진을 도와드립니다. 산업재해 예방과 복지 증진에 기여할 수 있습니다.',
            '개인': '한국에 계신 외국인 개인을 위해 예약, 동행 통역, 결과 번역까지 모든 과정을 지원하여 언어의 불편함 없이 검진을 받으실 수 있도록 돕습니다.',
        },
        en: {
            'default': 'Hello! I\'m Checkbot. How can I help you? (e.g., services, corporate, individual)',
            'services': 'CHECKIT offers customized health check-up support for individual and corporate clients. Which service are you interested in?',
            'corporate': 'We assist with systematic health check-ups for foreign employees of our corporate clients, helping to prevent industrial accidents and improve welfare.',
            'individual': 'We support the entire process for foreign individuals in Korea, including reservations, interpretation, and result translation, to ensure a comfortable experience without language barriers.',
        }
    };

    // Function to add a message to the chat
    const addChatMessage = (message, sender) => {
        const msgDiv = document.createElement('div');
        msgDiv.classList.add('chat-message', `${sender}-message`);
        msgDiv.textContent = message;
        chatMessages.appendChild(msgDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to bottom
    };

    // Function to get a response from the bot
    const getBotResponse = (userInput) => {
        userInput = userInput.toLowerCase();
        let response = chatResponses[chatLanguage].default;

        if (userInput.includes('서비스') || userInput.includes('service')) {
            response = chatResponses[chatLanguage].services;
        } else if (userInput.includes('기업') || userInput.includes('corporate')) {
            response = chatResponses[chatLanguage].corporate;
        } else if (userInput.includes('개인') || userInput.includes('individual')) {
            response = chatResponses[chatLanguage].individual;
        }
        
        addChatMessage(response, 'bot');
    };

    // Event listener for sending a message
    sendBtn.addEventListener('click', () => {
        const userInput = inputField.value.trim();
        if (userInput) {
            addChatMessage(userInput, 'user');
            setTimeout(() => getBotResponse(userInput), 500);
            inputField.value = '';
        }
    });
    
    inputField.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendBtn.click();
        }
    });

    // --- 5. Chatbot Language Switching ---
    window.setChatLanguage = (lang) => {
        chatLanguage = lang;
        inputField.placeholder = lang === 'ko' ? '메시지를 입력하세요...' : 'Type your message...';
        chatMessages.innerHTML = ''; // Clear chat
        addChatMessage(chatResponses[lang].default, 'bot');
    };
    
    // Initial bot message
    addChatMessage(chatResponses[chatLanguage].default, 'bot');
});
