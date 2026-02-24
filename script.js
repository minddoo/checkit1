
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. COMPREHENSIVE & COMPLETE TRANSLATION DATA ---
    const translations = {
        ko: {
            // Main Page
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
            'hero_title': 'Health Check-ups for Foreigners, Simplified with CHECKIT', 
            'hero_subtitle': 'From language barriers to complex reservations and insurance processing, CHECKIT’s dedicated managers are with you from start to finish.',
            'hero_cta': 'Get a Consultation Now',
            'why_us_title': 'Why Choose CHECKIT?',
            'why_us_subtitle': 'CHECKIT solves existing inconveniences and provides a health check-up service optimized for foreign clients.',
            'feature_1_title': '1:1 Dedicated Manager', 'feature_1_desc': 'A dedicated manager meticulously handles everything from consultation to hospital reservations and result checking.',
            'feature_2_title': 'Multilingual Support', 'feature_2_desc': 'We break down language barriers with multilingual interpretation services, including English, Chinese, and Vietnamese.',
            'feature_3_title': 'Easy Insurance Claims', 'feature_3_desc': 'CHECKIT helps with the complex insurance claim process, from document preparation to submission.',
            'process_title': 'Simple 4-Step Check-up Process',
            'process_subtitle': 'Complete your health check-up reservation in just a few clicks and experience CHECKIT’s care.',
            'process_step1_title': 'Consult & Book', 'process_step1_desc': 'A professional manager will find and book the optimal hospital for you based on your desired check-up items and schedule.',
            'process_step2_title': 'Real-time Communication Support', 'process_step2_desc': 'On the day of your check-up, we provide a real-time communication service to prevent any difficulties.',
            'process_step3_title': 'Check & Manage Results', 'process_step3_desc': 'After the check-up, view your translated results via app/web and continuously manage your health.',
            'process_step4_title': 'Insurance Claim Support', 'process_step4_desc': 'We help you get your insurance reimbursement easily, from preparing necessary documents to filing the claim.',
            'checkup_title': 'Not Sure Which Check-up to Get?',
            'checkup_national_title': 'National Health Check-up', 'checkup_national_desc': 'If you are enrolled in the National Health Insurance Service, get your national health check-up conveniently at no extra cost.',
            'checkup_comprehensive_title': 'Comprehensive Health Check-up', 'checkup_comprehensive_desc': 'If you want a more detailed examination, find affordable comprehensive check-ups at our partner hospitals.',
            'contact_title_new': 'Do You Have Any Questions?', 'contact_subtitle_new': 'A CHECKIT professional manager will respond quickly and kindly.', 'contact_cta_new': 'Contact Us Now',

            'chatbot_header': 'CHECKIT AI Chatbot', 'chatbot_placeholder': 'Type a message...', 'chatbot_send': 'Send',
            'chatbot_greeting': 'Hello! This is the CHECKIT chatbot. How can I help you?',
            'q1': 'What are the fees?', 'a1': 'CHECKIT does not receive brokerage fees from hospitals. You only pay for our service.',
            'q2': 'Do you provide medical consultations?', 'a2': 'No, we comply with medical laws and do not provide medical advice, judgments, or recommendations.',
            'q3': 'Do you recommend hospitals?', 'a3': 'Instead of recommending specific hospitals, we provide a list of optimal hospitals that match your desired check-up items to help you choose.',
            'q4': 'Do you accompany on the check-up day?', 'a4': 'We do not offer an accompaniment service, but we provide real-time communication support on the day to ease any communication difficulties.',
            'q5': 'My company has a partner hospital, can I use your service?', 'a5': 'Yes, you can. We are not contracted with specific hospitals, so you can use our services freely.',
            'q6': 'Are there restrictions on hospital choice?', 'a6': 'No, not at all. You have complete freedom in choosing a hospital.'
        },
        cn: {
            'hero_title': '外国人体检，CHECKIT让一切变得简单', 
            'hero_subtitle': '从语言障碍到复杂的预约和保险处理，CHECKIT的专业经理将全程陪伴您的体检之旅。',
            'hero_cta': '立即咨询',
            'why_us_title': '为什么选择CHECKIT？', 
            'why_us_subtitle': 'CHECKIT解决了现有的不便，为外国客户提供优化的体检服务。',
            'feature_1_title': '1:1专属经理', 'feature_1_desc': '从咨询到医院预约、结果确认，专属经理将为您精心管理一切。',
            'feature_2_title': '多语言支持', 'feature_2_desc': '我们提供英语、中文、越南语等多语言翻译服务，打破语言障碍。',
            'feature_3_title': '简便的保险报销', 'feature_3_desc': '复杂的保险报销流程，从文件准备到提交，CHECKIT都将为您提供帮助。',
            'process_title': '简单的四步体检流程', 
            'process_subtitle': '只需几次点击即可完成体检预约，体验CHECKIT的关怀。',
            'process_step1_title': '咨询与预约', 'process_step1_desc': '专业经理将根据您希望的体检项目和日程，为您寻找并预约最合适的医院。',
            'process_step2_title': '实时沟通支持', 'process_step2_desc': '体检当天，我们提供实时沟通服务，避免任何沟通困难。',
            'process_step3_title': '结果确认与管理', 'process_step3_desc': '体检后，通过应用/网站查看翻译好的结果报告，持续管理您的健康。',
            'process_step4_title': '保险报销支持', 'process_step4_desc': '从准备必要文件到向保险公司申请，我们帮助您轻松获得保险退款。',
            'checkup_title': '不确定该接受哪种体检？', 
            'checkup_national_title': '国民健康体检', 'checkup_national_desc': '如果您是国民健康保险的参保者，可以方便地免费接受国民健康体检。',
            'checkup_comprehensive_title': '综合健康体检', 'checkup_comprehensive_desc': '如果您希望进行更详细的检查，可以在我们的合作医院以合理的费用进行综合体检。',
            'contact_title_new': '您有任何疑问吗？', 'contact_subtitle_new': 'CHECKIT的专业经理将迅速、亲切地为您解答。', 'contact_cta_new': '立即咨询',

            'chatbot_header': 'CHECKIT AI 聊天机器人', 'chatbot_placeholder': '输入消息...', 'chatbot_send': '发送',
            'chatbot_greeting': '你好！我是CHECKIT聊天机器人。我能为您做些什么？',
            'q1': '费用是多少？', 'a1': 'CHECKIT不向医院收取任何中介费。您只需支付我们的服务费。',
            'q2': '你们提供医疗咨询吗？', 'a2': '不，我们遵守医疗法，不提供任何医疗建议、判断或推荐。',
            'q3': '你们推荐医院吗？', 'a3': '我们不推荐特定医院，而是提供符合您所需检查项目的最佳医院列表，以帮助您做出选择。',
            'q4': '体检当天你们会陪同吗？', 'a4': '我们不提供陪同服务，但在当天提供实时沟通支持，以缓解任何沟通困难。',
            'q5': '我的公司有合作医院，我还能使用你们的服务吗？', 'a5': '是的，可以。我们不与特定医院签约，因此您可以自由使用我们的服务。',
            'q6': '选择医院有限制吗？', 'a6': '不，完全没有。您可以完全自由地选择医院。'
        },
        vn: {
            'hero_title': 'Khám sức khỏe cho người nước ngoài, đơn giản hơn với CHECKIT', 
            'hero_subtitle': 'Từ rào cản ngôn ngữ đến các đặt hẹn phức tạp và xử lý bảo hiểm, các quản lý chuyên nghiệp của CHECKIT sẽ đồng hành cùng bạn từ đầu đến cuối.',
            'hero_cta': 'Nhận tư vấn ngay',
            'why_us_title': 'Tại sao nên chọn CHECKIT?', 
            'why_us_subtitle': 'CHECKIT giải quyết những bất tiện hiện có và cung cấp dịch vụ khám sức khỏe tối ưu cho khách hàng nước ngoài.',
            'feature_1_title': 'Quản lý riêng 1:1', 'feature_1_desc': 'Một quản lý riêng sẽ xử lý tỉ mỉ mọi thứ từ tư vấn đến đặt hẹn bệnh viện và kiểm tra kết quả.',
            'feature_2_title': 'Hỗ trợ đa ngôn ngữ', 'feature_2_desc': 'Chúng tôi phá vỡ rào cản ngôn ngữ với các dịch vụ phiên dịch đa ngôn ngữ, bao gồm tiếng Anh, tiếng Trung và tiếng Việt.',
            'feature_3_title': 'Yêu cầu bảo hiểm dễ dàng', 'feature_3_desc': 'CHECKIT giúp đỡ với quy trình yêu cầu bảo hiểm phức tạp, từ chuẩn bị tài liệu đến nộp hồ sơ.',
            'process_title': 'Quy trình khám 4 bước đơn giản', 
            'process_subtitle': 'Hoàn thành đặt hẹn khám sức khỏe của bạn chỉ trong vài cú nhấp chuột và trải nghiệm sự chăm sóc của CHECKIT.',
            'process_step1_title': 'Tư vấn & Đặt hẹn', 'process_step1_desc': 'Một quản lý chuyên nghiệp sẽ tìm và đặt bệnh viện tối ưu cho bạn dựa trên các mục khám và lịch trình mong muốn của bạn.',
            'process_step2_title': 'Hỗ trợ giao tiếp thời gian thực', 'process_step2_desc': 'Vào ngày khám, chúng tôi cung cấp dịch vụ giao tiếp thời gian thực để ngăn chặn bất kỳ khó khăn nào.',
            'process_step3_title': 'Kiểm tra & Quản lý kết quả', 'process_step3_desc': 'Sau khi khám, xem kết quả đã được dịch của bạn qua ứng dụng/web và quản lý sức khỏe của bạn liên tục.',
            'process_step4_title': 'Hỗ trợ yêu cầu bảo hiểm', 'process_step4_desc': 'Chúng tôi giúp bạn nhận tiền hoàn trả bảo hiểm một cách dễ dàng, từ việc chuẩn bị các tài liệu cần thiết đến việc nộp đơn yêu cầu.',
            'checkup_title': 'Không chắc nên chọn loại khám nào?', 
            'checkup_national_title': 'Khám sức khỏe quốc gia', 'checkup_national_desc': 'Nếu bạn đã đăng ký Dịch vụ Bảo hiểm Y tế Quốc gia, hãy khám sức khỏe quốc gia một cách tiện lợi mà không mất thêm chi phí.',
            'checkup_comprehensive_title': 'Khám sức khỏe tổng quát', 'checkup_comprehensive_desc': 'Nếu bạn muốn một cuộc kiểm tra chi tiết hơn, hãy tìm các gói khám tổng quát giá cả phải chăng tại các bệnh viện đối tác của chúng tôi.',
            'contact_title_new': 'Bạn có câu hỏi nào không?', 'contact_subtitle_new': 'Một quản lý chuyên nghiệp của CHECKIT sẽ trả lời nhanh chóng và thân thiện.', 'contact_cta_new': 'Liên hệ ngay',

            'chatbot_header': 'Chatbot AI của CHECKIT', 'chatbot_placeholder': 'Nhập tin nhắn...', 'chatbot_send': 'Gửi',
            'chatbot_greeting': 'Xin chào! Đây là chatbot của CHECKIT. Tôi có thể giúp gì cho bạn?',
            'q1': 'Phí dịch vụ là bao nhiêu?', 'a1': 'CHECKIT không nhận phí môi giới từ bệnh viện. Bạn chỉ trả tiền cho dịch vụ của chúng tôi.',
            'q2': 'Bạn có cung cấp tư vấn y tế không?', 'a2': 'Không, chúng tôi tuân thủ luật y tế và không cung cấp lời khuyên, phán đoán hoặc khuyến nghị y tế.',
            'q3': 'Bạn có giới thiệu bệnh viện không?', 'a3': 'Thay vì giới thiệu các bệnh viện cụ thể, chúng tôi cung cấp danh sách các bệnh viện tối ưu phù hợp với các mục khám bạn mong muốn để giúp bạn lựa chọn.',
            'q4': 'Bạn có đi cùng vào ngày khám không?', 'a4': 'Chúng tôi không cung cấp dịch vụ đi cùng, nhưng chúng tôi cung cấp hỗ trợ giao tiếp thời gian thực trong ngày để giảm bớt mọi khó khăn trong giao tiếp.',
            'q5': 'Công ty của tôi có bệnh viện đối tác, tôi có thể sử dụng dịch vụ của bạn không?', 'a5': 'Vâng, bạn có thể. Chúng tôi không ký hợp đồng với các bệnh viện cụ thể, vì vậy bạn có thể tự do sử dụng dịch vụ của chúng tôi.',
            'q6': 'Có giới hạn nào về việc lựa chọn bệnh viện không?', 'a6': 'Không, không hề. Bạn hoàn toàn có quyền tự do lựa chọn bệnh viện.'
        }
    };

    const suggestedQuestionKeys = ["q1", "q2", "q3", "q4", "q5", "q6"];
    let currentLang = 'ko';
    let chatHistory = [];

    const allTranslatableElements = document.querySelectorAll('[data-lang-key]');
    const chatbotContainer = document.getElementById('chatbot-container');
    const openChatbotBtn = document.getElementById('open-chatbot');
    const closeChatbotBtn = document.getElementById('close-chatbot');
    const messagesContainer = document.getElementById('chatbot-messages');
    const inputElem = document.getElementById('chatbot-input');
    const sendBtn = document.getElementById('chatbot-send');
    const chatbotLangButtons = document.querySelectorAll('.chatbot-lang-btn');
    const suggestedQuestionsContainer = document.getElementById('chatbot-suggested-questions');

    const switchLanguage = (newLang) => {
        currentLang = newLang;
        const langData = translations[newLang] || translations['ko'];

        allTranslatableElements.forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (langData[key]) {
                if (element.tagName === 'INPUT') {
                    element.placeholder = langData[key];
                } else {
                    element.textContent = langData[key];
                }
            }
        });

        messagesContainer.innerHTML = '';
        chatHistory.forEach(msg => {
            const translatedText = (msg.key && langData[msg.key]) ? langData[msg.key] : msg.text;
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('message', msg.sender);
            messageDiv.textContent = translatedText;
            messagesContainer.appendChild(messageDiv);
        });
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        
        displaySuggestedQuestions();

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
        const langData = translations[currentLang] || translations['ko'];
        const text = isKey ? (langData[keyOrText] || keyOrText) : keyOrText;
        
        chatHistory.push({ sender, key: isKey ? keyOrText : null, text: isKey ? null : text });

        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', sender);
        messageDiv.textContent = text;
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    };

    const displaySuggestedQuestions = () => {
        const langData = translations[currentLang] || translations['ko'];
        suggestedQuestionsContainer.innerHTML = '';
        suggestedQuestionKeys.forEach(key => {
            const button = document.createElement('button');
            button.classList.add('suggested-question-btn');
            button.textContent = langData[key];
            button.addEventListener('click', () => {
                addMessage('user', key);
                suggestedQuestionsContainer.innerHTML = '';
                setTimeout(() => {
                    addMessage('bot', key.replace('q', 'a'));
                    displaySuggestedQuestions();
                }, 400);
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

    openChatbotBtn.addEventListener('click', () => toggleChatbot(true));
    closeChatbotBtn.addEventListener('click', () => toggleChatbot(false));
    sendBtn.addEventListener('click', handleSendMessage);
    inputElem.addEventListener('keypress', (e) => e.key === 'Enter' && handleSendMessage());
    chatbotLangButtons.forEach(button => {
        button.addEventListener('click', () => switchLanguage(button.dataset.lang));
    });

    switchLanguage('ko');
    toggleChatbot(false);
});
