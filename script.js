
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. COMPREHENSIVE TRANSLATION DATA ---
    const translations = {
        ko: {
            // Main Page
            'nav_home': '홈', 'nav_services': '서비스', 'nav_about': '회사소개', 'nav_contact': '문의하기',
            'hero_title': '외국인 건강검진, CHECKIT과 함께라면 복잡하지 않아요',
            'hero_subtitle': '언어 장벽, 복잡한 예약, 보험 처리까지 CHECKIT의 전문 매니저가 당신의 건강검진 여정을 처음부터 끝까지 함께합니다.',
            'hero_cta': '지금 바로 상담 받기',
            'why_us_title': '왜 CHECKIT을 선택해야 할까요?',
            'why_us_subtitle': 'CHECKIT은 기존의 불편함을 해결하고, 외국인 고객에게 최적화된 건강검진 서비스를 제공합니다.',
            'feature_1_title': '1:1 전담 매니저', 'feature_1_desc': '상담부터 병원 예약, 결과 확인까지 전담 매니저가 꼼꼼하게 관리합니다.',
            'feature_2_title': '다국어 통역 지원', 'feature_2_desc': '영어, 중국어, 베트남어 등 다국어 통역 서비스로 언어의 장벽을 허뭅니다.',
            'feature_3_title': '간편 보험 청구', 'feature_3_desc': '복잡한 보험 청구 절차, CHECKIT이 서류 준비부터 처리까지 도와드립니다.',
            'process_title': '간편한 4단계 검진 프로세스',
            'process_subtitle': '단 몇 번의 클릭만으로 건강검진 예약을 완료하고, CHECKIT의 케어를 경험해보세요.',
            'process_step1_title': '상담 및 예약', 'process_step1_desc': '원하는 검진 항목과 일정에 맞춰 전문 매니저가 최적의 병원을 찾아 예약해 드립니다.',
            'process_step2_title': '실시간 소통 지원', 'process_step2_desc': '검진 당일, 소통의 어려움을 겪지 않도록 실시간 커뮤니케이션 서비스를 제공합니다.',
            'process_step3_title': '결과 확인 및 관리', 'process_step3_desc': '검진 후, 번역된 결과지를 앱/웹으로 확인하고 지속적으로 건강을 관리하세요.',
            'process_step4_title': '보험금 청구 지원', 'process_step4_desc': '필요 서류 준비부터 보험사 청구까지, 간편하게 보험금을 환급받을 수 있도록 돕습니다.',
            'checkup_title': '어떤 검진을 받아야 할지 모르겠다면?',
            'checkup_national_title': '국가 건강검진', 'checkup_national_desc': '국민건강보험공단 가입자라면, 추가 비용 없이 편리하게 국가 건강검진을 받으세요.',
            'checkup_comprehensive_title': '종합 건강검진', 'checkup_comprehensive_desc': '더 정밀한 검사를 원한다면, 제휴 병원에서 합리적인 비용의 종합검진을 만나보세요.',
            'contact_title_new': '궁금한 점이 있으신가요?', 'contact_subtitle_new': 'CHECKIT의 전문 매니저가 신속하고 친절하게 답변해 드립니다.', 'contact_cta_new': '지금 바로 문의하기',

            // Chatbot
            'chatbot_header': 'CHECKIT AI 챗봇', 'chatbot_placeholder': '메시지를 입력하세요...', 'chatbot_send': '전송',
            'chatbot_greeting': '안녕하세요! CHECKIT 챗봇입니다. 무엇을 도와드릴까요?',
            'q1': '수수료는 어떻게 되나요?', 'a1': 'CHECKIT은 병원으로부터 중개 수수료를 받지 않으며, 서비스 이용료만 받습니다.',
            'q2': '의료 상담도 가능한가요?', 'a2': '아니요, 저희는 의료법을 준수하며 의료 행위, 의학적 판단, 진료 추천을 하지 않습니다.',
            'q3': '병원을 추천해주나요?', 'a3': '특정 병원 추천 대신, 원하시는 검진 항목에 맞는 최적의 병원 리스트를 제공하여 선택을 돕습니다.',
            'q4': '검진일에 동행해주나요?', 'a4': '동행 서비스는 없지만, 검진 당일 실시간 커뮤니케이션 지원으로 소통의 어려움을 덜어드립니다.',
            'q5': '회사 제휴 병원이 있는데 이용 가능한가요?', 'a5': '네, 가능합니다. 저희는 특정 병원과 계약 관계가 아니므로 자유롭게 서비스를 이용할 수 있습니다.',
            'q6': '병원 선택에 제한이 있나요?', 'a6': '아니요, 전혀 없습니다. 병원 선택은 매우 자유롭습니다.'
        },
        en: {
            // Main Page
            'hero_title': 'Health Check-ups for Foreigners, Simplified with CHECKIT', 
            'hero_subtitle': 'From language barriers to complex reservations and insurance processing, CHECKIT’s dedicated managers are with you from start to finish.',
            // ... (All other main page translations)

            // Chatbot
            'chatbot_header': 'CHECKIT AI Chatbot', 'chatbot_placeholder': 'Type a message...', 'chatbot_send': 'Send',
            'chatbot_greeting': 'Hello! This is the CHECKIT chatbot. How can I help you?',
            'q1': 'What are the fees?', 'a1': 'CHECKIT does not receive brokerage fees from hospitals. You only pay for our service.',
            'q2': 'Do you provide medical consultations?', 'a2': 'No, we comply with medical laws and do not provide medical advice, judgments, or recommendations.',
            'q3': 'Do you recommend hospitals?', 'a3': 'Instead of recommending specific hospitals, we provide a list of optimal hospitals that match your desired check-up items to help you choose.',
            'q4': 'Do you accompany on the check-up day?', 'a4': 'We do not offer an accompaniment service, but we provide real-time communication support on the day to ease any communication difficulties.',
            'q5': 'My company has a partner hospital, can I use your service?', 'a5': 'Yes, you can. We are not contracted with specific hospitals, so you can use our services freely.',
            'q6': 'Are there restrictions on hospital choice?', 'a6': 'No, not at all. You have complete freedom in choosing a hospital.'
        },
        // CN and VN translations would be similarly structured
        cn: {},
        vn: {}
    };

    const suggestedQuestionKeys = ["q1", "q2", "q3", "q4", "q5", "q6"];
    let currentLang = 'ko';
    let chatHistory = []; // Stores {sender, key, text}

    // --- 2. DOM Elements ---
    const allTranslatableElements = document.querySelectorAll('[data-lang-key]');
    const chatbotContainer = document.getElementById('chatbot-container');
    const openChatbotBtn = document.getElementById('open-chatbot');
    const closeChatbotBtn = document.getElementById('close-chatbot');
    const messagesContainer = document.getElementById('chatbot-messages');
    const inputElem = document.getElementById('chatbot-input');
    const sendBtn = document.getElementById('chatbot-send');
    const chatbotLangButtons = document.querySelectorAll('.chatbot-lang-btn');
    const suggestedQuestionsContainer = document.getElementById('chatbot-suggested-questions');

    // --- 3. Core Functions ---
    const switchLanguage = (newLang) => {
        currentLang = newLang;
        const langData = translations[newLang] || translations['ko'];

        // A) Update all static text on the main page AND chatbot UI
        allTranslatableElements.forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (langData[key]) {
                element.textContent = langData[key];
            }
        });
        // Specific for placeholders/buttons
        inputElem.placeholder = langData.chatbot_placeholder;
        sendBtn.textContent = langData.chatbot_send;

        // B) Re-render chat history in the new language
        messagesContainer.innerHTML = '';
        chatHistory.forEach(msg => {
            const translatedText = langData[msg.key] || msg.text; // Use original text as fallback
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('message', msg.sender);
            messageDiv.textContent = translatedText;
            messagesContainer.appendChild(messageDiv);
        });
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        
        // C) Re-render suggested questions in the new language
        displaySuggestedQuestions();

        // D) Update active language button
        chatbotLangButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === newLang);
        });
    };

    const toggleChatbot = (show) => {
        chatbotContainer.classList.toggle('hidden', !show);
        if (show && chatHistory.length === 0) {
            addMessage('bot', 'chatbot_greeting');
            displaySuggestedQuestions();
        }
    };
    
    const addMessage = (sender, keyOrText, isKey = true) => {
        const text = isKey ? (translations[currentLang][keyOrText] || keyOrText) : keyOrText;
        chatHistory.push({ sender, key: isKey ? keyOrText : null, text: isKey ? null : keyOrText });

        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', sender);
        messageDiv.textContent = text;
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    };

    const displaySuggestedQuestions = () => {
        suggestedQuestionsContainer.innerHTML = '';
        suggestedQuestionKeys.forEach(key => {
            const button = document.createElement('button');
            button.classList.add('suggested-question-btn');
            button.textContent = translations[currentLang][key];
            button.addEventListener('click', () => {
                addMessage('user', key);
                suggestedQuestionsContainer.innerHTML = '';
                setTimeout(() => {
                    addMessage('bot', key.replace('q', 'a'));
                    displaySuggestedQuestions();
                }, 500);
            });
            suggestedQuestionsContainer.appendChild(button);
        });
    };
    
    const handleSendMessage = () => {
        const text = inputElem.value.trim();
        if (text) {
            addMessage('user', text, false);
            inputElem.value = '';
            setTimeout(() => {
                addMessage('bot', 'chatbot_greeting');
            }, 500);
        }
    };

    // --- 4. Event Listeners ---
    openChatbotBtn.addEventListener('click', () => toggleChatbot(true));
    closeChatbotBtn.addEventListener('click', () => toggleChatbot(false));
    sendBtn.addEventListener('click', handleSendMessage);
    inputElem.addEventListener('keypress', (e) => e.key === 'Enter' && handleSendMessage());
    chatbotLangButtons.forEach(button => {
        button.addEventListener('click', () => switchLanguage(button.dataset.lang));
    });

    // --- 5. Initial Load ---
    switchLanguage('ko'); // Set initial language for the whole page
    toggleChatbot(false); // Ensure chatbot is hidden on load
});
