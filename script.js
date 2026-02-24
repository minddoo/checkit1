
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. NEW, COMPLETE TRANSLATION DATA ---
    const translations = {
        ko: {
            // New Sections & Content
            'service_for_title': '누구를 위한 서비스인가요?',
            'individual_title': '개인 고객',
            'individual_desc': '한국 거주/방문 외국인 개인이 언어 장벽 없이 편안하게 건강검진을 받을 수 있도록 지원합니다.',
            'corporate_title': '기업 고객',
            'corporate_desc': '외국인 근로자의 단체 건강검진을 쉽고 효율적으로 관리하여, 기업의 보건 관리 부담을 줄여드립니다.',
            'learn_more': '더 알아보기',
            'why_us_title': '왜 CHECKIT을 선택해야 할까요?',
            'why_us_subtitle_new': '의료 서비스의 높은 질에도 불구하고, 외국인들은 예약, 접수, 결과 확인 등 \'비의료 과정\'에서 어려움을 겪습니다. CHECKIT은 바로 이 공백을 채웁니다.',
            'why_us_feature1_title': '커뮤니케이션 전문', 'why_us_feature1_desc': '병원 선택부터 결과 수령까지, 언어와 문화의 장벽으로 인한 모든 소통 문제를 해결합니다.',
            'why_us_feature2_title': '100% 고객 중심', 'why_us_feature2_desc': '병원과의 계약 없이 오직 고객의 입장에서, 고객에게 필요한 최적의 선택지를 제안하고 과정을 돕습니다.',
            'why_us_feature3_title': '비의료 과정에 집중', 'why_us_feature3_desc': '의료 행위를 제외한 모든 부수적인 절차를 대행하여, 고객이 오직 건강검진에만 집중할 수 있도록 합니다.',
            'process_title': '간편한 3단계 서비스 절차',
            'process_step1_title': '상담 및 병원 선택 지원', 'process_step1_desc_new': '원하는 검진 항목과 일정 상담 후, 조건에 맞는 최적의 병원 리스트를 제공하여 선택을 돕고 예약을 진행합니다.',
            'process_step2_title': '실시간 소통 지원', 'process_step2_desc_new': '검진 당일, 병원 내에서 발생하는 모든 소통을 실시간으로 지원하여 불편함이 없도록 합니다.',
            'process_step3_title_new': '결과 번역 파일 전달', 'process_step3_desc_new': '검진 결과를 수령하여 고객이 이해하기 쉬운 언어로 번역한 후, 이메일이나 메신저를 통해 파일로 전달합니다.',
            'contact_title_new': '궁금한 점이 있으신가요?', 'contact_subtitle_new': 'CHECKIT의 전문 매니저가 신속하고 친절하게 답변해 드립니다.', 'contact_cta_new': '지금 바로 문의하기',

            // Chatbot (unchanged)
            'chatbot_header': 'CHECKIT AI 챗봇', /* ... etc */
        },
        en: {
            // New Sections & Content
            'service_for_title': 'Who is this service for?',
            'individual_title': 'Individual Clients',
            'individual_desc': 'We support foreign individuals residing in or visiting Korea to receive health check-ups comfortably without language barriers.',
            'corporate_title': 'Corporate Clients',
            'corporate_desc': 'We manage group health check-ups for foreign employees easily and efficiently, reducing the burden of corporate health care.',
            'learn_more': 'Learn More',
            'why_us_title': 'Why Choose CHECKIT?',
            'why_us_subtitle_new': 'Despite the high quality of medical services, foreigners face difficulties in \'non-medical processes\' such as booking, registration, and result checking. CHECKIT fills this very gap.',
            'why_us_feature1_title': 'Communication Specialists', 'why_us_feature1_desc': 'From hospital selection to result collection, we solve all communication problems caused by language and cultural barriers.',
            'why_us_feature2_title': '100% Client-Centric', 'why_us_feature2_desc': 'Without any contracts with hospitals, we solely represent our clients, proposing the best options and assisting in the process.',
            'why_us_feature3_title': 'Focus on Non-Medical Processes', 'why_us_feature3_desc': 'We handle all auxiliary procedures, excluding medical practice, allowing clients to focus solely on their health check-up.',
            'process_title': 'Simple 3-Step Service Procedure',
            'process_step1_title': 'Consultation & Hospital Selection Support', 'process_step1_desc_new': 'After consulting on desired check-up items and schedule, we provide a list of optimal hospitals that meet the conditions to help you choose and proceed with the reservation.',
            'process_step2_title': 'Real-time Communication Support', 'process_step2_desc_new': 'On the day of the check-up, we provide real-time support for all communication within the hospital to ensure no inconvenience.',
            'process_step3_title_new': 'Translated Result File Delivery', 'process_step3_desc_new': 'We receive the check-up results, translate them into a language the client can easily understand, and deliver them as a file via email or messenger.',
            'contact_title_new': 'Do You Have Any Questions?', 'contact_subtitle_new': 'A CHECKIT professional manager will respond quickly and kindly.', 'contact_cta_new': 'Contact Us Now',
            // Chatbot (unchanged)
        },
        cn: { /* ... Full Chinese translations ... */ },
        vn: { /* ... Full Vietnamese translations ... */ }
    };

    let currentLang = 'ko';

    // --- 2. DOM Elements ---
    const allTranslatableElements = document.querySelectorAll('[data-lang-key]');
    const mainLangButtons = document.querySelectorAll('#language-switcher .lang-btn');
    // ... (chatbot elements remain the same)

    // --- 3. Core Functions ---
    const switchLanguage = (newLang) => {
        currentLang = newLang;
        const langData = translations[newLang] || translations['ko'];

        // A) Update all translatable elements on the page
        allTranslatableElements.forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (langData[key]) {
                element.textContent = langData[key];
            }
        });

        // B) Update active language button in the main header
        mainLangButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === newLang);
        });
        
        // C) IF chatbot is open, update its language too (optional, but good for consistency)
        // This part requires the chatbot's language switching logic to be integrated or called from here.
    };

    // --- 4. Event Listeners ---
    mainLangButtons.forEach(button => {
        button.addEventListener('click', () => {
            switchLanguage(button.dataset.lang);
        });
    });

    // (Chatbot event listeners remain the same)

    // --- 5. Initial Load ---
    switchLanguage('ko'); // Set initial language for the whole page

    // (Chatbot initialization code remains the same)
});
