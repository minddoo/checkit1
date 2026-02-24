document.addEventListener('DOMContentLoaded', () => {

    // --- 1. FULL, CORRECT & FINAL TRANSLATION DATA ---
    const translations = {
        ko: {
            'hero_title': '외국인을 위한 건강검진,\n언어의 장벽 없이 편안하게.',
            'hero_subtitle': '일정 누락, 이해하기 어려운 검진 안내, 한국어로만 제공되는 결과지까지. CHECKIT이 모든 비의료 과정을 해결합니다.',
            'hero_cta': '지금 바로 상담 신청',
            'service_for_title': '누구를 위한 서비스인가요?', 'individual_title': '개인 고객', 'individual_desc': '한국 거주/방문 외국인 개인이 언어 장벽 없이 편안하게 건강검진을 받을 수 있도록 지원합니다.', 'corporate_title': '기업 고객', 'corporate_desc': '외국인 근로자의 단체 건강검진을 쉽고 효율적으로 관리하여, 기업의 보건 관리 부담을 줄여드립니다.', 'learn_more': '더 알아보기',
            'why_us_title': '왜 CHECKIT을 선택해야 할까요?', 'why_us_subtitle_new': '의료 서비스의 높은 질에도 불구하고, 외국인들은 예약, 접수, 결과 확인 등 \'비의료 과정\'에서 어려움을 겪습니다. CHECKIT은 바로 이 공백을 채웁니다.',
            'why_us_feature1_title': '커뮤니케이션 전문', 'why_us_feature1_desc': '병원 선택부터 결과 수령까지, 언어와 문화의 장벽으로 인한 모든 소통 문제를 해결합니다.', 'why_us_feature2_title': '100% 고객 중심', 'why_us_feature2_desc': '병원과의 계약 없이 오직 고객의 입장에서, 고객에게 필요한 최적의 선택지를 제안하고 과정을 돕습니다.', 'why_us_feature3_title': '비의료 과정에 집중', 'why_us_feature3_desc': '의료 행위를 제외한 모든 부수적인 절차를 대행하여, 고객이 오직 건강검진에만 집중할 수 있도록 합니다.',
            'process_title': 'CHECKIT 이용 과정', 'process_step1_title': '상담 및 병원 선택 지원', 'process_step1_desc_new': '원하는 검진 항목과 일정 상담 후, 조건에 맞는 최적의 병원 리스트를 제공하여 선택을 돕고 예약을 진행합니다.', 'process_step2_title': '실시간 소통 지원', 'process_step2_desc_new': '검진 당일, 병원 내에서 발생하는 모든 소통을 실시간으로 지원하여 불편함이 없도록 합니다.', 'process_step3_title_new': '결과 번역 파일 전달', 'process_step3_desc_new': '검진 결과를 수령하여 고객이 이해하기 쉬운 언어로 번역한 후, 이메일이나 메신저를 통해 파일로 전달합니다.',
            'contact_title_new': '궁금한 점이 있으신가요?', 'contact_subtitle_new': 'CHECKIT의 전문 매니저가 신속하고 친절하게 답변해 드립니다.', 'contact_cta_new': '지금 바로 문의하기',
            'chatbot_header': 'Check봇',
            'chatbot_placeholder': '메시지를 입력하세요...',
            'chatbot_greeting': '안녕하세요! CHECKIT에 대해 궁금한 점이 있으신가요? 아래에서 질문을 선택하거나 직접 입력해주세요.',
            'q1': '예약은 어떻게 하나요?', 'a1': 'CHECKIT 전담 매니저가 도와드립니다. 원하시는 검진 항목과 일정을 알려주시면, 조건에 맞는 병원 목록을 전달드려 선택을 돕고, 예약까지 한 번에 진행해드립니다. \'지금 바로 상담 신청\' 버튼을 눌러 문의를 남겨주세요!',
            'q2': '병원/의료인과 계약된 구조인가요?', 'a2': '아닙니다. CHECKIT은 특정 병원과 계약 관계를 맺지 않습니다. 저희는 오직 고객님의 입장에서, 가장 적합한 병원을 찾으실 수 있도록 객관적인 정보 제공으로 선택을 돕습니다. 고객님의 건강과 만족이 저희의 최우선 목표입니다.',
            'q3': '의료 행위나 진료 알선을 하나요?', 'a3': '아니요, CHECKIT은 의료법을 준수하며 어떠한 의료 행위나 진료 알선도 하지 않습니다. 저희는 병원 예약, 통역, 결과지 번역 등 \'비의료 과정\'에 집중하여 고객님께서 건강검진에만 집중하실 수 있도록 돕는 서비스입니다.',
            'q4': '검진 당일 어떤 도움을 받을 수 있나요?', 'a4': '검진 당일, 언어의 장벽으로 인해 혼자라는 느낌이 들지 않도록 Check봇 매니저가 모든 순간을 함께합니다. 병원 내 접수, 문진, 수납 등 모든 의사소통 과정을 실시간으로 지원하여, 언어 문제로 인한 불편함이나 외로움 없이 편안하게 검진에만 집중하실 수 있도록 돕습니다.',
            'q5': '결과지는 어떻게 전달되나요?', 'a5': '검진이 끝나면 저희가 병원으로부터 결과지를 수령합니다. 이후 고객님의 모국어로 단순 번역하여, 원하시는 방법으로 안전하게 전달해 드립니다. 저희는 의료법을 준수하기에, 의학 용어에 대한 상세한 설명이나 의료적 소견은 제공하지 않습니다.',
            'unsupported_input': '죄송합니다. 현재는 준비된 질문에 대해서만 답변을 드릴 수 있습니다. 아래 목록에서 궁금한 점을 다시 선택해주세요.'
        },
        en: {
            'hero_title': 'Health Check-ups for Foreigners,\nComfortable Without Language Barriers.', 'hero_subtitle': 'From missed schedules and difficult-to-understand check-up guides to results provided only in Korean. CHECKIT solves all non-medical processes.', 'hero_cta': 'Apply for a Consultation Now',
            'service_for_title': 'Who is this service for?', 'individual_title': 'Individual Clients', 'individual_desc': 'We support foreign individuals residing in or visiting Korea to receive health check-ups comfortably without language barriers.', 'corporate_title': 'Corporate Clients', 'corporate_desc': 'We manage group health check-ups for foreign employees easily and efficiently, reducing the burden of corporate health care.', 'learn_more': 'Learn More',
            'why_us_title': 'Why Choose CHECKIT?', 'why_us_subtitle_new': 'Despite the high quality of medical services, foreigners face difficulties in \'non-medical processes\' such as booking, registration, and result checking. CHECKIT fills this very gap.',
            'why_us_feature1_title': 'Communication Specialists', 'why_us_feature1_desc': 'From hospital selection to result collection, we solve all communication problems caused by language and cultural barriers.', 'why_us_feature2_title': '100% Client-Centric', 'why_us_feature2_desc': 'Without any contracts with hospitals, we solely represent our clients, proposing the best options and assisting in the process.', 'why_us_feature3_title': 'Focus on Non-Medical Processes', 'why_us_feature3_desc': 'We handle all auxiliary procedures, excluding medical practice, allowing clients to focus solely on their health check-up.',
            'process_title': 'CHECKIT Process', 'process_step1_title': 'Consultation & Hospital Selection Support', 'process_step1_desc_new': 'After consulting on desired check-up items and schedule, we provide a list of optimal hospitals that meet the conditions to help you choose and proceed with the reservation.', 'process_step2_title': 'Real-time Communication Support', 'process_step2_desc_new': 'On the day of the check-up, we provide real-time support for all communication within the hospital to ensure no inconvenience.', 'process_step3_title_new': 'Translated Result File Delivery', 'process_step3_desc_new': 'We receive the check-up results, translate them into a language the client can easily understand, and deliver them as a file via email or messenger.',
            'contact_title_new': 'Do You Have Any Questions?', 'contact_subtitle_new': 'A CHECKIT professional manager will respond quickly and kindly.', 'contact_cta_new': 'Contact Us Now',
            'chatbot_header': 'Check Bot', 'chatbot_placeholder': 'Type a message...', 'chatbot_greeting': 'Hello! Do you have any questions about CHECKIT? Please select a question below or type your own.',
            'q1': 'How do I make a reservation?', 'a1': 'Your dedicated CHECKIT manager will assist you. Just tell us your desired check-up items and schedule, and we will provide a list of hospitals that fit your criteria to help you choose, and then handle the reservation for you. Click the \'Apply for a Consultation Now\' button to leave an inquiry!',
            'q2': 'Are you contracted with hospitals/medical staff?', 'a2': 'No. CHECKIT does not have contractual relationships with any specific hospitals. We help you choose the most suitable hospital by providing objective information from your perspective. Your health and satisfaction are our top priorities.',
            'q3': 'Do you perform medical acts or arrange treatments?', 'a3': 'No, CHECKIT complies with the Medical Service Act and does not perform any medical acts or arrange treatments. We are a service that helps you focus solely on your health check-up by concentrating on \'non-medical processes\' such as hospital reservations, interpretation, and result translation.',
            'q4': 'What kind of help can I get on the day of the check-up?', 'a4': 'On the day of your check-up, your Check Bot manager is with you every step of the way so you don\'t feel alone due to language barriers. We provide real-time support for all communication processes within the hospital, such as registration, consultations, and payment, helping you focus comfortably on your check-up without inconvenience or loneliness caused by language issues.',
            'q5': 'How are the results delivered?', 'a5': 'After your check-up, we will collect the results from the hospital. We then provide a simple translation into your native language and securely deliver it to you in your preferred way. To comply with medical law, we do not provide detailed explanations of medical terms or medical opinions.',
            'unsupported_input': 'I am sorry, but I can only answer the prepared questions for now. Please select another question from the list below.'
        },
        cn: {
            'hero_title': '为外国人提供健康体检，\n无语言障碍，舒心便捷。', 'hero_subtitle': '从错过日程、难以理解的体检指南，到仅提供韩语版本的结果报告。CHECKIT为您解决所有非医疗过程中的难题。', 'hero_cta': '立即申请咨询',
            'service_for_title': '这项服务是为谁准备的？', 'individual_title': '个人客户', 'individual_desc': '我们帮助居住或访问韩国的外国个人无语言障碍地舒适接受健康体检。', 'corporate_title': '企业客户', 'corporate_desc': '我们轻松高效地管理外国员工的团体健康体检，减轻企业保健管理的负担。', 'learn_more': '了解更多',
            'why_us_title': '为什么选择CHECKIT？', 'why_us_subtitle_new': '尽管医疗服务质量很高，但外国人在预约、登记、确认结果等“非医疗过程”中仍面临困难。CHECKIT正是填补了这一空白。',
            'why_us_feature1_title': '沟通专家', 'why_us_feature1_desc': '从选择医院到收取结果，我们解决所有因语言和文化障碍引起的沟通问题。', 'why_us_feature2_title': '100%以客户为中心', 'why_us_feature2_desc': '我们不与任何医院签订合同，完全代表客户，提出最佳选择并协助整个过程。', 'why_us_feature3_title': '专注于非医疗过程', 'why_us_feature3_desc': '我们处理除医疗行为外的所有辅助程序，让客户可以专注于他们的健康体检。',
            'process_title': 'CHECKIT 使用流程', 'process_step1_title': '咨询与医院选择支持', 'process_step1_desc_new': '在就期望的体检项目和日程进行咨询后，我们提供符合条件的最佳医院列表，以帮助您选择并进行预约。', 'process_step2_title': '实时沟通支持', 'process_step2_desc_new': '在体检当天，我们为医院内的所有沟通提供实时支持，以确保没有不便。', 'process_step3_title_new': '翻译结果文件交付', 'process_step3_desc_new': '我们收到体检结果后，将其翻译成客户易于理解的语言，并通过电子邮件或即时通讯工具以文件形式交付。',
            'contact_title_new': '您有任何疑问吗？', 'contact_subtitle_new': 'CHECKIT的专业经理将迅速、亲切地为您解答。', 'contact_cta_new': '立即联系我们',
            'chatbot_header': 'Check Bot', 'chatbot_placeholder': '输入消息...', 'chatbot_greeting': '您好！对CHECKIT有什么疑问吗？请从下方选择问题或直接输入。',
            'q1': '如何预约？', 'a1': 'CHECKIT的专属经理将为您提供帮助。只需告诉我们您想要的检查项目和日程，我们将提供符合您条件的医院列表以帮助您选择，并一次性为您完成预约。请点击\'立即申请咨询\'按钮留下您的问题！',
            'q2': '是否与医院/医务人员签订了合同？', 'a2': '不是的。CHECKIT不与任何特定医院签订合同。我们完全从您的立场出发，通过提供客观信息来帮助您选择最合适的医院。您的健康和满意是我们的首要目标。',
            'q3': '你们是否提供医疗行为或安排治疗？', 'a3': '不，CHECKIT遵守医疗服务法，不进行任何医疗行为或安排治疗。我们是一项专注于\'非医疗过程\'的服务，如医院预约、口译和结果翻译，以帮助您专注于您的健康检查。',
            'q4': '体检当天能得到什么帮助？', 'a4': '体检当天，Check Bot经理将全程陪伴您，让您不会因为语言障碍而感到孤单。我们为医院内的所有沟通环节（如挂号、问诊、缴费等）提供实时支持，帮助您舒适地专注于体检，而不会因语言问题感到不便或孤独。', 
            'q5': '结果如何传递？', 'a5': '体检结束后，我们将从医院领取结果报告。然后，我们会提供一个简单的母语翻译版本，并以您喜欢的方式安全地发送给您。为遵守医疗法，我们不提供医学术语的详细解释或医疗意见。',
            'unsupported_input': '很抱歉，目前我只能回答预设的问题。请从下面的列表中重新选择您的问题。'
        },
        vn: {
            'hero_title': 'Khám sức khỏe cho người nước ngoài,\nThoải mái không rào cản ngôn ngữ.', 'hero_subtitle': 'Từ lịch trình bị bỏ lỡ, hướng dẫn khám khó hiểu, đến kết quả chỉ có bằng tiếng Hàn. CHECKIT giải quyết mọi quy trình phi y tế.', 'hero_cta': 'Đăng ký tư vấn ngay',
            'service_for_title': 'Dịch vụ này dành cho ai?', 'individual_title': 'Khách hàng cá nhân', 'individual_desc': 'Chúng tôi hỗ trợ người nước ngoài cư trú hoặc đến thăm Hàn Quốc nhận khám sức khỏe một cách thoải mái mà không có rào cản ngôn ngữ.', 'corporate_title': 'Khách hàng doanh nghiệp', 'corporate_desc': 'Chúng tôi quản lý các cuộc khám sức khỏe nhóm cho nhân viên nước ngoài một cách dễ dàng và hiệu quả, giảm bớt gánh nặng quản lý chăm sóc sức khỏe của doanh nghiệp.', 'learn_more': 'Tìm hiểu thêm',
            'why_us_title': 'Tại sao chọn CHECKIT?', 'why_us_subtitle_new': 'Mặc dù chất lượng dịch vụ y tế cao, người nước ngoài vẫn gặp khó khăn trong các “quy trình phi y tế” như đặt hẹn, đăng ký và kiểm tra kết quả. CHECKIT lấp đầy khoảng trống này.',
            'why_us_feature1_title': 'Chuyên gia giao tiếp', 'why_us_feature1_desc': 'Từ việc lựa chọn bệnh viện đến nhận kết quả, chúng tôi giải quyết mọi vấn đề giao tiếp do rào cản ngôn ngữ và văn hóa.', 'why_us_feature2_title': '100% lấy khách hàng làm trung tâm', 'why_us_feature2_desc': 'Không có bất kỳ hợp đồng nào với bệnh viện, chúng tôi hoàn toàn đại diện cho khách hàng của mình, đề xuất các lựa chọn tốt nhất và hỗ trợ trong quá trình này.', 'why_us_feature3_title': 'Tập trung vào các quy trình phi y tế', 'why_us_feature3_desc': 'Chúng tôi xử lý tất cả các thủ tục phụ trợ, không bao gồm hành nghề y tế, cho phép khách hàng chỉ tập trung vào việc khám sức khỏe của họ.',
            'process_title': 'Quy trình sử dụng CHECKIT', 'process_step1_title': 'Tư vấn & Hỗ trợ lựa chọn bệnh viện', 'process_step1_desc_new': 'Sau khi tư vấn về các mục khám và lịch trình mong muốn, chúng tôi cungdQuy trình sử dụng CHECKIT cấp danh sách các bệnh viện tối ưu đáp ứng các điều kiện để giúp bạn lựa chọn và tiến hành đặt hẹn.', 'process_step2_title': 'Hỗ trợ giao tiếp thời gian thực', 'process_step2_desc_new': 'Vào ngày khám, chúng tôi cung cấp hỗ trợ thời gian thực cho tất cả các giao tiếp trong bệnh viện để đảm bảo không có sự bất tiện nào.', 'process_step3_title_new': 'Giao tệp kết quả đã dịch', 'process_step3_desc_new': 'Chúng tôi nhận kết quả khám, dịch chúng sang ngôn ngữ mà khách hàng có thể dễ dàng hiểu và gửi chúng dưới dạng tệp qua email hoặc messenger.',
            'contact_title_new': 'Bạn có câu hỏi nào không?', 'contact_subtitle_new': 'Một quản lý chuyên nghiệp của CHECKIT sẽ trả lời nhanh chóng và thân thiện.', 'contact_cta_new': 'Liên hệ ngay bây giờ',
            'chatbot_header': 'Check Bot', 'chatbot_placeholder': 'Nhập tin nhắn...', 'chatbot_greeting': 'Xin chào! Bạn có câu hỏi nào về CHECKIT không? Vui lòng chọn một câu hỏi dưới đây hoặc tự nhập câu hỏi của bạn.',
            'q1': 'Làm cách nào để đặt lịch hẹn?', 'a1': 'Quản lý CHECKIT tận tâm của bạn sẽ hỗ trợ bạn. Chỉ cần cho chúng tôi biết các mục khám và lịch trình mong muốn của bạn, chúng tôi sẽ cung cấp danh sách các bệnh viện phù hợp với tiêu chí của bạn để giúp bạn lựa chọn và xử lý việc đặt lịch hẹn cho bạn. Nhấp vào nút \'Đăng ký tư vấn ngay\' để để lại yêu cầu!',
            'q2': 'Bạn có hợp đồng với bệnh viện/nhân viên y tế không?', 'a2': 'Không. CHECKIT không có mối quan hệ hợp đồng với bất kỳ bệnh viện cụ thể nào. Chúng tôi giúp bạn chọn bệnh viện phù hợp nhất một cách khách quan bằng cách cung cấp thông tin từ góc độ của bạn. Sức khỏe và sự hài lòng của bạn là ưu tiên hàng đầu của chúng tôi.',
            'q3': 'Bạn có thực hiện các hành vi y tế hoặc sắp xếp các phương pháp điều trị không?', 'a3': 'Không, CHECKIT tuân thủ Đạo luật Dịch vụ Y tế và không thực hiện bất kỳ hành vi y tế hoặc sắp xếp phương pháp điều trị nào. Chúng tôi là một dịch vụ giúp bạn chỉ tập trung vào việc kiểm tra sức khỏe bằng cách tập trung vào các \'quy trình phi y tế\' như đặt lịch hẹn bệnh viện, phiên dịch và dịch kết quả.',
            'q4': 'Tôi có thể nhận được sự giúp đỡ gì vào ngày khám?', 'a4': 'Vào ngày khám, quản lý của Check Bot sẽ đồng hành cùng bạn trong mọi khoảnh khắc để bạn không cảm thấy đơn độc vì rào cản ngôn ngữ. Chúng tôi hỗ trợ thời gian thực cho tất cả các quy trình giao tiếp trong bệnh viện như đăng ký, tư vấn và thanh toán, giúp bạn thoải mái tập trung vào việc khám sức khỏe mà không gặp phải sự bất tiện hay cô đơn do vấn đề ngôn ngữ.',
            'q5': 'Kết quả được gửi như thế nào?', 'a5': 'Sau khi bạn khám xong, chúng tôi sẽ nhận kết quả từ bệnh viện. Sau đó, chúng tôi cung cấp một bản dịch đơn giản sang ngôn ngữ mẹ đẻ của bạn và gửi cho bạn một cách an toàn theo cách bạn muốn. Để tuân thủ luật y tế, chúng tôi không cung cấp giải thích chi tiết về các thuật ngữ y tế hoặc ý kiến y tế.',
            'unsupported_input': 'Xin lỗi, hiện tại tôi chỉ có thể trả lời các câu hỏi đã được chuẩn bị sẵn. Vui lòng chọn một câu hỏi khác từ danh sách dưới đây.'
        }
    };

    let currentLang = 'ko';
    const allTranslatableElements = document.querySelectorAll('[data-lang-key]');
    const mainLangButtons = document.querySelectorAll('#language-switcher .lang-btn');
    const chatbotLangButtons = document.querySelectorAll('#chatbot-lang-buttons .chatbot-lang-btn');
    const chatbotContainer = document.getElementById('chatbot-container');
    const openChatbotBtn = document.getElementById('open-chatbot');
    const closeChatbotBtn = document.getElementById('close-chatbot');
    const chatbotMessages = document.getElementById('chatbot-messages');
    const suggestedQuestionsContainer = document.getElementById('chatbot-suggested-questions');
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotSendBtn = document.getElementById('chatbot-send');

    const switchLanguage = (newLang) => {
        currentLang = newLang;
        const langData = translations[newLang] || translations['ko'];

        allTranslatableElements.forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (langData[key]) {
                if (element.placeholder) {
                    element.placeholder = langData[key];
                } else {
                    element.innerHTML = langData[key].replace(/\n/g, '<br>');
                }
            }
        });

        mainLangButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.lang === newLang));
        chatbotLangButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.lang === newLang));
        
        resetAndShowGreeting();
    };

    const addMessage = (text, sender) => {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', sender);
        messageElement.innerHTML = text.replace(/\n/g, '<br>');
        chatbotMessages.appendChild(messageElement);
        scrollToBottom();
        return messageElement;
    };
    
    const addLoadingIndicator = () => {
        const loadingElement = document.createElement('div');
        loadingElement.classList.add('message', 'bot', 'loading-indicator');
        loadingElement.innerHTML = '<span></span><span></span><span></span>';
        chatbotMessages.appendChild(loadingElement);
        scrollToBottom();
        return loadingElement;
    };

    const scrollToBottom = () => {
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    };

    const showSuggestedQuestions = () => {
        suggestedQuestionsContainer.innerHTML = '';
        const langData = translations[currentLang];
        for (let i = 1; i <= 5; i++) {
            const qKey = `q${i}`;
            if (langData[qKey]) {
                const questionBtn = document.createElement('button');
                questionBtn.classList.add('suggested-question-btn');
                questionBtn.textContent = langData[qKey];
                questionBtn.addEventListener('click', () => {
                    addMessage(langData[qKey], 'user');
                    const loadingIndicator = addLoadingIndicator();

                    setTimeout(() => {
                        chatbotMessages.removeChild(loadingIndicator);
                        addMessage(langData[`a${i}`], 'bot');
                    }, 1200); // Simulate thinking time
                });
                suggestedQuestionsContainer.appendChild(questionBtn);
            }
        }
        suggestedQuestionsContainer.style.display = 'flex';
        scrollToBottom();
    };
    
    const resetAndShowGreeting = () => {
        chatbotMessages.innerHTML = '';
        const greeting = translations[currentLang]['chatbot_greeting'];
        addMessage(greeting, 'bot');
        showSuggestedQuestions();
    };

    mainLangButtons.forEach(button => {
        button.addEventListener('click', () => switchLanguage(button.dataset.lang));
    });
    chatbotLangButtons.forEach(button => {
        button.addEventListener('click', () => switchLanguage(button.dataset.lang));
    });

    openChatbotBtn.addEventListener('click', () => {
        chatbotContainer.classList.add('show');
        document.body.classList.add('chatbot-open');
        resetAndShowGreeting();
    });

    closeChatbotBtn.addEventListener('click', () => {
        chatbotContainer.classList.remove('show');
        document.body.classList.remove('chatbot-open');
    });

    const handleSendMessage = () => {
        const userMessage = chatbotInput.value.trim();
        if (userMessage) {
            addMessage(userMessage, 'user');
            chatbotInput.value = '';
            const loadingIndicator = addLoadingIndicator();
            
            setTimeout(() => {
                chatbotMessages.removeChild(loadingIndicator);
                const unsupportedMsg = translations[currentLang]['unsupported_input'];
                addMessage(unsupportedMsg, 'bot');
            }, 1200);
        }
    };

    chatbotSendBtn.addEventListener('click', handleSendMessage);
    chatbotInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    });

    // Initialize
    switchLanguage('ko');
});
