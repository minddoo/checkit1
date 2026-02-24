document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Comprehensive Translation Data ---
    const translations = {
        ko: {
            // Nav & General
            'nav_services': '서비스',
            'nav_process': '진행 과정',
            'nav_reviews': '이용 후기',
            'learn_more': '더 알아보기 →',
            'nav_home': '홈',

            // Hero
            'hero_title': '언어의 장벽 없이, <br> 편안한 건강검진을 경험하세요.',
            'hero_subtitle': 'CHECKIT은 국내 거주 외국인 및 해외 방문객을 위한 건강검진의 모든 과정을 지원합니다.',

            // Services
            'services_title': 'CHECKIT의 고객 맞춤 서비스',
            'services_individual_title': '개인 고객',
            'services_individual_desc': '한국 거주 중이거나 여행 중인 외국인 개인이 겪는 언어 문제와 병원 이용의 혼란을 해결합니다. 예약부터 결과 확인까지 전 과정을 1:1로 지원하여, 쉽고 정확한 건강검진을 보장합니다.',
            'services_corporate_title': '기업 고객',
            'services_corporate_desc': '외국인 근로자들의 건강검진은 이제 필수입니다. 보건관리자의 업무 부담을 줄이고, 체계적인 건강 관리로 복지 품질을 높이세요. 검진 참여율이 높아지고, 산업재해 예방과 업무 효율 증진에 기여합니다.',

            // Process
            'process_title': '간편한 진행 과정',
            'process_step1_title': '상담 및 예약',
            'process_step1_desc': '웹사이트를 통해 간단히 상담을 요청하면, 배정된 전담 매니저가 검진 항목부터 일정까지 조율하여 예약을 확정합니다.',
            'process_step2_title': '검진 당일 동행',
            'process_step2_desc': '예약된 병원에 전문 통역사가 동행하여 접수부터 검진의 모든 과정을 편안하게 마칠 수 있도록 지원합니다.',
            'process_step3_title': '결과 번역 및 안내',
            'process_step3_desc': '검진이 끝나면, 결과지를 원하는 언어로 번역하여 전달하고, 필요한 경우 후속 조치까지 상세히 안내합니다.',

            // Why Us
            'why_us_title': 'CHECKIT을 선택해야 하는 이유',
            'why_us_feat1_title': '전문 통역 지원',
            'why_us_feat1_desc': '의료 전문 용어에 능통한 통역사가 검진의 모든 과정에 동행하여 정확한 소통을 보장합니다.',
            'why_us_feat2_title': '1:1 맞춤 케어',
            'why_us_feat2_desc': '고객의 필요와 건강 상태에 맞는 최적의 검진 플랜을 추천하고, 전담 매니저가 모든 과정을 관리합니다.',
            'why_us_feat3_title': '합리적인 비용',
            'why_us_feat3_desc': '자체 제휴 병원 네트워크를 통해 추가 비용 없이 고품질의 건강검진 서비스를 제공합니다.',

            // Reviews
            'reviews_title': '이용 후기',
            'review1_text': '"언어 문제 때문에 병원 가는 게 늘 불안했는데, CHECKIT 덕분에 정말 편안하게 검진받을 수 있었어요. 통역사님이 정말 친절하셨어요."',
            'review2_text': '"회사 외국인 직원들 단체 건강검진을 진행했는데, 복잡한 과정 없이 한 번에 해결되어서 정말 편했습니다. 직원들 만족도도 높았어요."',

            // Contact
            'contact_title': '문의하기',
            'form_email_placeholder': '이메일 주소',
            'form_phone_placeholder': '전화번호',
            'form_message_placeholder': '문의 내용을 입력하세요',
            'form_submit_btn': '전송하기',
        },
        en: {
            // Nav & General
            'nav_services': 'Services',
            'nav_process': 'Process',
            'nav_reviews': 'Reviews',
            'learn_more': 'Learn More →',
            'nav_home': 'Home',

            // Hero
            'hero_title': 'Experience comfortable health check-ups <br> without language barriers.',
            'hero_subtitle': 'CHECKIT supports the entire health check-up process for foreigners residing in or visiting Korea.',

            // Services
            'services_title': 'Our Customized Services',
            'services_individual_title': 'Individual Clients',
            'services_individual_desc': 'We solve language problems for foreign individuals living in or visiting Korea. We provide 1:1 support from appointments to result confirmation.',
            'services_corporate_title': 'Corporate Clients',
            'services_corporate_desc': 'Health check-ups for foreign employees are essential. We reduce the burden on health managers and enhance welfare quality through systematic health management.',

            // Process
            'process_title': 'Simple Process',
            'process_step1_title': 'Consultation & Booking',
            'process_step1_desc': 'Request a consultation, and a dedicated manager will coordinate and confirm your appointment.',
            'process_step2_title': 'Accompanied on the Day',
            'process_step2_desc': 'A professional interpreter will accompany you to the hospital to ensure a smooth process.',
            'process_step3_title': 'Result Translation',
            'process_step3_desc': 'We translate the results into your language and provide follow-up guidance if needed.',

            // Why Us
            'why_us_title': 'Why Choose CHECKIT?',
            'why_us_feat1_title': 'Expert Interpretation',
            'why_us_feat1_desc': 'Our interpreters are fluent in medical terminology, ensuring accurate communication.',
            'why_us_feat2_title': '1:1 Personalized Care',
            'why_us_feat2_desc': 'We recommend the best check-up plan for your needs, managed by a dedicated manager.',
            'why_us_feat3_title': 'Reasonable Costs',
            'why_us_feat3_desc': 'We provide high-quality services at no extra cost through our network of partner hospitals.',

            // Reviews
            'reviews_title': 'Reviews',
            'review1_text': '"I was always anxious about going to the hospital due to the language barrier, but thanks to CHECKIT, it was so comfortable. The interpreter was very kind."',
            'review2_text': '"We conducted a group health check-up for our foreign employees, and it was so convenient to handle everything at once. The employees\' satisfaction was high."',

            // Contact
            'contact_title': 'Contact Us',
            'form_email_placeholder': 'Email Address',
            'form_phone_placeholder': 'Phone Number',
            'form_message_placeholder': 'Enter your message',
            'form_submit_btn': 'Submit',
        },
        cn: {
            // Nav & General
            'nav_services': '服务',
            'nav_process': '流程',
            'nav_reviews': '评价',
            'learn_more': '了解更多 →',
            'nav_home': '首页',

            // Hero
            'hero_title': '体验无语言障碍的<br>舒适体检。',
            'hero_subtitle': 'CHECKIT为居住在韩国或来访的外国人提供全面的体检支持。',

            // Services
            'services_title': '我们的定制服务',
            'services_individual_title': '个人客户',
            'services_individual_desc': '我们为居住在或访问韩国的外国个人解决语言问题。我们提供从预约到结果确认的1:1支持。',
            'services_corporate_title': '企业客户',
            'services_corporate_desc': '外国员工的健康检查至关重要。我们通过系统的健康管理，减轻健康管理人员的负担，提高福利质量。',

            // Process
            'process_title': '简单的流程',
            'process_step1_title': '咨询与预订',
            'process_step1_desc': '请求咨询，专属经理将协调并确认您的预约。',
            'process_step2_title': '当天陪同',
            'process_step2_desc': '专业口译员将陪同您前往医院，确保流程顺利。',
            'process_step3_title': '结果翻译',
            'process_step3_desc': '我们将结果翻译成您的语言，并在需要时提供后续指导。',

            // Why Us
            'why_us_title': '为什么选择CHECKIT？',
            'why_us_feat1_title': '专业口译',
            'why_us_feat1_desc': '我们的口译员精通医学术语，确保准确沟通。',
            'why_us_feat2_title': '1:1个性化护理',
            'why_us_feat2_desc': '我们由专属经理管理，为您推荐最适合您需求的体检计划。',
            'why_us_feat3_title': '合理的费用',
            'why_us_feat3_desc': '我们通过合作医院网络以无额外费用的方式提供高质量的服务。',

            // Reviews
            'reviews_title': '评价',
            'review1_text': '“由于语言障碍，我总是对去医院感到焦虑，但多亏了CHECKIT，过程非常舒适。口译员非常友善。”',
            'review2_text': '“我们为公司的外籍员工进行了集体体检，一次性处理所有事情非常方便。员工的满意度很高。”',

            // Contact
            'contact_title': '联系我们',
            'form_email_placeholder': '电子邮件地址',
            'form_phone_placeholder': '电话号码',
            'form_message_placeholder': '输入您的留言',
            'form_submit_btn': '提交',
        },
        vn: {
            // Nav & General
            'nav_services': 'Dịch vụ',
            'nav_process': 'Quy trình',
            'nav_reviews': 'Đánh giá',
            'learn_more': 'Tìm hiểu thêm →',
            'nav_home': 'Trang chủ',

            // Hero
            'hero_title': 'Trải nghiệm kiểm tra sức khỏe thoải mái<br>không rào cản ngôn ngữ.',
            'hero_subtitle': 'CHECKIT hỗ trợ toàn bộ quy trình kiểm tra sức khỏe cho người nước ngoài cư trú hoặc đến thăm Hàn Quốc.',

            // Services
            'services_title': 'Dịch vụ tùy chỉnh của chúng tôi',
            'services_individual_title': 'Khách hàng cá nhân',
            'services_individual_desc': 'Chúng tôi giải quyết các vấn đề ngôn ngữ cho người nước ngoài sống hoặc đến thăm Hàn Quốc. Chúng tôi hỗ trợ 1:1 từ việc đặt hẹn đến xác nhận kết quả.',
            'services_corporate_title': 'Khách hàng doanh nghiệp',
            'services_corporate_desc': 'Kiểm tra sức khỏe cho nhân viên nước ngoài là rất cần thiết. Chúng tôi giảm bớt gánh nặng cho người quản lý sức khỏe và nâng cao chất lượng phúc lợi thông qua quản lý sức khỏe có hệ thống.',

            // Process
            'process_title': 'Quy trình đơn giản',
            'process_step1_title': 'Tư vấn & Đặt hẹn',
            'process_step1_desc': 'Yêu cầu tư vấn, và một người quản lý riêng sẽ phối hợp và xác nhận cuộc hẹn của bạn.',
            'process_step2_title': 'Đi cùng trong ngày',
            'process_step2_desc': 'Một thông dịch viên chuyên nghiệp sẽ đi cùng bạn đến bệnh viện để đảm bảo quy trình diễn ra suôn sẻ.',
            'process_step3_title': 'Dịch kết quả',
            'process_step3_desc': 'Chúng tôi dịch kết quả sang ngôn ngữ của bạn và cung cấp hướng dẫn theo dõi nếu cần.',

            // Why Us
            'why_us_title': 'Tại sao chọn CHECKIT?',
            'why_us_feat1_title': 'Thông dịch chuyên môn',
            'why_us_feat1_desc': 'Thông dịch viên của chúng tôi thông thạo thuật ngữ y tế, đảm bảo giao tiếp chính xác.',
            'why_us_feat2_title': 'Chăm sóc cá nhân 1:1',
            'why_us_feat2_desc': 'Chúng tôi đề xuất kế hoạch kiểm tra phù hợp nhất với nhu cầu của bạn, được quản lý bởi một người quản lý riêng.',
            'why_us_feat3_title': 'Chi phí hợp lý',
            'why_us_feat3_desc': 'Chúng tôi cung cấp dịch vụ chất lượng cao mà không phải trả thêm phí thông qua mạng lưới các bệnh viện đối tác của chúng tôi.',

            // Reviews
            'reviews_title': 'Đánh giá',
            'review1_text': '"Tôi luôn lo lắng về việc đến bệnh viện vì rào cản ngôn ngữ, nhưng nhờ CHECKIT, mọi việc rất thoải mái. Người thông dịch rất tốt bụng."',
            'review2_text': '"Chúng tôi đã tiến hành kiểm tra sức khỏe nhóm cho các nhân viên nước ngoài của công ty và rất tiện lợi khi xử lý mọi thứ cùng một lúc. Sự hài lòng của nhân viên rất cao."',

            // Contact
            'contact_title': 'Liên hệ với chúng tôi',
            'form_email_placeholder': 'Địa chỉ email',
            'form_phone_placeholder': 'Số điện thoại',
            'form_message_placeholder': 'Nhập tin nhắn của bạn',
            'form_submit_btn': 'Gửi',
        }
    };

    // --- 2. Website Language Translation Logic ---
    const currentLang = localStorage.getItem('language') || 'ko';

    const translatePage = (lang) => {
        document.querySelectorAll('[data-lang-key]').forEach(el => {
            const key = el.getAttribute('data-lang-key');
            if (translations[lang] && translations[lang][key]) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = translations[lang][key];
                } else {
                    el.innerHTML = translations[lang][key];
                }
            }
        });
        localStorage.setItem('language', lang);
    };

    window.changeLanguage = (lang) => {
        translatePage(lang);
    };

    // --- 3. Chatbot UI Control ---
    const checkbotIcon = document.getElementById('checkbot-icon');
    const chatWindow = document.getElementById('checkbot-chat-window');
    const closeChatBtn = document.getElementById('close-chat-btn');

    if (checkbotIcon) {
        checkbotIcon.addEventListener('click', () => {
            chatWindow.classList.remove('hidden');
            checkbotIcon.classList.add('hidden');
        });

        closeChatBtn.addEventListener('click', () => {
            chatWindow.classList.add('hidden');
            checkbotIcon.classList.remove('hidden');
        });
    }

    // --- 4. Chatbot Conversation Logic ---
    const chatMessages = document.querySelector('.chat-messages');
    const inputField = document.getElementById('chat-input-field');
    const sendBtn = document.getElementById('chat-send-btn');
    let chatLanguage = 'ko'; // Default chat language

    const chatResponses = {
        ko: {
            'default': '안녕하세요! Check봇입니다. 무엇을 도와드릴까요? (예: 서비스, 진행 과정, 비용)',
            'service': 'CHECKIT은 개인 및 기업 고객을 위한 맞춤 건강검진 지원 서비스를 제공합니다. 어떤 서비스가 궁금하신가요?',
        },
        en: {
            'default': 'Hello! I am Checkbot. How can I help you? (e.g., services, process, cost)',
            'service': 'CHECKIT offers customized health check-up support for individual and corporate clients. Which service are you interested in?',
        },
        cn: {
            'default': '你好！我是Checkbot。我能为您做些什么？ (例如: 服务, 流程, 费用)',
            'service': 'CHECKIT为个人和企业客户提供定制的健康检查支持服务。您对哪项服务感兴趣？',
        },
        vn: {
            'default': 'Xin chào! Tôi là Checkbot. Tôi có thể giúp gì cho bạn? (ví dụ: dịch vụ, quy trình, chi phí)',
            'service': 'CHECKIT cung cấp dịch vụ hỗ trợ khám sức khỏe tùy chỉnh cho khách hàng cá nhân và doanh nghiệp. Bạn quan tâm đến dịch vụ nào?',
        }
    };

    const addChatMessage = (message, sender) => {
        if (!chatMessages) return;
        const msgDiv = document.createElement('div');
        msgDiv.classList.add('chat-message', `${sender}-message`);
        msgDiv.textContent = message;
        chatMessages.appendChild(msgDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    };

    const getBotResponse = (userInput) => {
        userInput = userInput.toLowerCase();
        let response = chatResponses[chatLanguage].default;
        if (userInput.includes('service') || userInput.includes('서비스') || userInput.includes('服务') || userInput.includes('dịch vụ')) {
            response = chatResponses[chatLanguage].service;
        }
        addChatMessage(response, 'bot');
    };

    if (sendBtn) {
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
    }

    // --- 5. Chatbot Language Switching ---
    window.setChatLanguage = (lang) => {
        chatLanguage = lang;
        if (!inputField) return;
        const placeholders = { ko: '메시지를 입력하세요...', en: 'Type your message...', cn: '输入您的留言...', vn: 'Nhập tin nhắn của bạn...' };
        inputField.placeholder = placeholders[lang];
        chatMessages.innerHTML = ''; // Clear chat
        addChatMessage(chatResponses[lang].default, 'bot');
    };

    // --- Initial Load ---
    translatePage(currentLang);
    if (chatMessages) {
        addChatMessage(chatResponses[chatLanguage].default, 'bot');
    }
});
