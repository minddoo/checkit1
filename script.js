
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. FULL, CORRECT & FINAL TRANSLATION DATA ---
    const translations = {
        ko: {
            // Main Page
            'service_for_title': '누구를 위한 서비스인가요?', 'individual_title': '개인 고객', 'individual_desc': '한국 거주/방문 외국인 개인이 언어 장벽 없이 편안하게 건강검진을 받을 수 있도록 지원합니다.', 'corporate_title': '기업 고객', 'corporate_desc': '외국인 근로자의 단체 건강검진을 쉽고 효율적으로 관리하여, 기업의 보건 관리 부담을 줄여드립니다.', 'learn_more': '더 알아보기',
            'why_us_title': '왜 CHECKIT을 선택해야 할까요?', 'why_us_subtitle_new': '의료 서비스의 높은 질에도 불구하고, 외국인들은 예약, 접수, 결과 확인 등 \'비의료 과정\'에서 어려움을 겪습니다. CHECKIT은 바로 이 공백을 채웁니다.',
            'why_us_feature1_title': '커뮤니케이션 전문', 'why_us_feature1_desc': '병원 선택부터 결과 수령까지, 언어와 문화의 장벽으로 인한 모든 소통 문제를 해결합니다.', 'why_us_feature2_title': '100% 고객 중심', 'why_us_feature2_desc': '병원과의 계약 없이 오직 고객의 입장에서, 고객에게 필요한 최적의 선택지를 제안하고 과정을 돕습니다.', 'why_us_feature3_title': '비의료 과정에 집중', 'why_us_feature3_desc': '의료 행위를 제외한 모든 부수적인 절차를 대행하여, 고객이 오직 건강검진에만 집중할 수 있도록 합니다.',
            'process_title': '간편한 3단계 서비스 절차', 'process_step1_title': '상담 및 병원 선택 지원', 'process_step1_desc_new': '원하는 검진 항목과 일정 상담 후, 조건에 맞는 최적의 병원 리스트를 제공하여 선택을 돕고 예약을 진행합니다.', 'process_step2_title': '실시간 소통 지원', 'process_step2_desc_new': '검진 당일, 병원 내에서 발생하는 모든 소통을 실시간으로 지원하여 불편함이 없도록 합니다.', 'process_step3_title_new': '결과 번역 파일 전달', 'process_step3_desc_new': '검진 결과를 수령하여 고객이 이해하기 쉬운 언어로 번역한 후, 이메일이나 메신저를 통해 파일로 전달합니다.',
            'contact_title_new': '궁금한 점이 있으신가요?', 'contact_subtitle_new': 'CHECKIT의 전문 매니저가 신속하고 친절하게 답변해 드립니다.', 'contact_cta_new': '지금 바로 문의하기',
            // Chatbot
            'chatbot_header': 'CHECK봇', 'chatbot_placeholder': '메시지를 입력하세요...',
            'chatbot_greeting': '안녕하세요! CHECKIT 챗봇입니다. 무엇을 도와드릴까요?',
            'q1': '수수료는 어떻게 되나요?', 'a1': 'CHECKIT은 병원으로부터 중개 수수료를 받지 않으며, 서비스 이용료만 받습니다.',
            'q2': '의료 상담도 가능한가요?', 'a2': '아니요, 저희는 의료법을 준수하며 의료 행위, 의학적 판단, 진료 추천을 하지 않습니다.',
            'q3': '병원을 추천해주나요?', 'a3': '특정 병원 추천 대신, 원하시는 검진 항목에 맞는 최적의 병원 리스트를 제공하여 선택을 돕습니다.'
        },
        en: {
            'service_for_title': 'Who is this service for?', 'individual_title': 'Individual Clients', 'individual_desc': 'We support foreign individuals residing in or visiting Korea to receive health check-ups comfortably without language barriers.', 'corporate_title': 'Corporate Clients', 'corporate_desc': 'We manage group health check-ups for foreign employees easily and efficiently, reducing the burden of corporate health care.', 'learn_more': 'Learn More',
            'why_us_title': 'Why Choose CHECKIT?', 'why_us_subtitle_new': 'Despite the high quality of medical services, foreigners face difficulties in \'non-medical processes\' such as booking, registration, and result checking. CHECKIT fills this very gap.',
            'why_us_feature1_title': 'Communication Specialists', 'why_us_feature1_desc': 'From hospital selection to result collection, we solve all communication problems caused by language and cultural barriers.', 'why_us_feature2_title': '100% Client-Centric', 'why_us_feature2_desc': 'Without any contracts with hospitals, we solely represent our clients, proposing the best options and assisting in the process.', 'why_us_feature3_title': 'Focus on Non-Medical Processes', 'why_us_feature3_desc': 'We handle all auxiliary procedures, excluding medical practice, allowing clients to focus solely on their health check-up.',
            'process_title': 'Simple 3-Step Service Procedure', 'process_step1_title': 'Consultation & Hospital Selection Support', 'process_step1_desc_new': 'After consulting on desired check-up items and schedule, we provide a list of optimal hospitals that meet the conditions to help you choose and proceed with the reservation.', 'process_step2_title': 'Real-time Communication Support', 'process_step2_desc_new': 'On the day of the check-up, we provide real-time support for all communication within the hospital to ensure no inconvenience.', 'process_step3_title_new': 'Translated Result File Delivery', 'process_step3_desc_new': 'We receive the check-up results, translate them into a language the client can easily understand, and deliver them as a file via email or messenger.',
            'contact_title_new': 'Do You Have Any Questions?', 'contact_subtitle_new': 'A CHECKIT professional manager will respond quickly and kindly.', 'contact_cta_new': 'Contact Us Now',
            'chatbot_header': 'CHECK Bot', 'chatbot_placeholder': 'Type a message...', 'chatbot_greeting': 'Hello! This is the CHECKIT chatbot. How can I help you?', 'q1': 'What are the fees?', 'a1': 'CHECKIT does not receive brokerage fees from hospitals. You only pay for our service.', 'q2': 'Do you provide medical consultations?', 'a2': 'No, we comply with medical laws and do not provide medical advice, judgments, or recommendations.', 'q3': 'Do you recommend hospitals?', 'a3': 'Instead of recommending specific hospitals, we provide a list of optimal hospitals that match your desired check-up items to help you choose.'
        },
        cn: {
            'service_for_title': '这项服务是为谁准备的？', 'individual_title': '个人客户', 'individual_desc': '我们帮助居住或访问韩国的外国个人无语言障碍地舒适接受健康体检。', 'corporate_title': '企业客户', 'corporate_desc': '我们轻松高效地管理外国员工的团体健康体检，减轻企业保健管理的负担。', 'learn_more': '了解更多',
            'why_us_title': '为什么选择CHECKIT？', 'why_us_subtitle_new': '尽管医疗服务质量很高，但外国人在预约、登记、确认结果等“非医疗过程”中仍面临困难。CHECKIT正是填补了这一空白。',
            'why_us_feature1_title': '沟通专家', 'why_us_feature1_desc': '从选择医院到收取结果，我们解决所有因语言和文化障碍引起的沟通问题。', 'why_us_feature2_title': '100%以客户为中心', 'why_us_feature2_desc': '我们不与任何医院签订合同，完全代表客户，提出最佳选择并协助整个过程。', 'why_us_feature3_title': '专注于非医疗过程', 'why_us_feature3_desc': '我们处理除医疗行为外的所有辅助程序，让客户可以专注于他们的健康体检。',
            'process_title': '简单的三步服务流程', 'process_step1_title': '咨询与医院选择支持', 'process_step1_desc_new': '在就期望的体检项目和日程进行咨询后，我们提供符合条件的最佳医院列表，以帮助您选择并进行预约。', 'process_step2_title': '实时沟通支持', 'process_step2_desc_new': '在体检当天，我们为医院内的所有沟通提供实时支持，以确保没有不便。', 'process_step3_title_new': '翻译结果文件交付', 'process_step3_desc_new': '我们收到体检结果后，将其翻译成客户易于理解的语言，并通过电子邮件或即时通讯工具以文件形式交付。',
            'contact_title_new': '您有任何疑问吗？', 'contact_subtitle_new': 'CHECKIT的专业经理将迅速、亲切地为您解答。', 'contact_cta_new': '立即联系我们',
            'chatbot_header': 'CHECK Bot', 'chatbot_placeholder': '输入消息...', 'chatbot_greeting': '你好！我是CHECKIT聊天机器人。我能为您做些什么？', 'q1': '费用是多少？', 'a1': 'CHECKIT不向医院收取任何中介费。您只需支付我们的服务费。', 'q2': '你们提供医疗咨询吗？', 'a2': '不，我们遵守医疗法，不提供任何医疗建议、判断或推荐。', 'q3': '你们推荐医院吗？', 'a3': '我们不推荐特定医院，而是提供符合您所需检查项目的最佳医院列表，以帮助您做出选择。'
        },
        vn: {
            'service_for_title': 'Dịch vụ này dành cho ai?', 'individual_title': 'Khách hàng cá nhân', 'individual_desc': 'Chúng tôi hỗ trợ người nước ngoài cư trú hoặc đến thăm Hàn Quốc nhận khám sức khỏe một cách thoải mái mà không có rào cản ngôn ngữ.', 'corporate_title': 'Khách hàng doanh nghiệp', 'corporate_desc': 'Chúng tôi quản lý các cuộc khám sức khỏe nhóm cho nhân viên nước ngoài một cách dễ dàng và hiệu quả, giảm bớt gánh nặng quản lý chăm sóc sức khỏe của doanh nghiệp.', 'learn_more': 'Tìm hiểu thêm',
            'why_us_title': 'Tại sao chọn CHECKIT?', 'why_us_subtitle_new': 'Mặc dù chất lượng dịch vụ y tế cao, người nước ngoài vẫn gặp khó khăn trong các “quy trình phi y tế” như đặt hẹn, đăng ký và kiểm tra kết quả. CHECKIT lấp đầy khoảng trống này.',
            'why_us_feature1_title': 'Chuyên gia giao tiếp', 'why_us_feature1_desc': 'Từ việc lựa chọn bệnh viện đến nhận kết quả, chúng tôi giải quyết mọi vấn đề giao tiếp do rào cản ngôn ngữ và văn hóa.', 'why_us_feature2_title': '100% lấy khách hàng làm trung tâm', 'why_us_feature2_desc': 'Không có bất kỳ hợp đồng nào với bệnh viện, chúng tôi hoàn toàn đại diện cho khách hàng của mình, đề xuất các lựa chọn tốt nhất và hỗ trợ trong quá trình này.', 'why_us_feature3_title': 'Tập trung vào các quy trình phi y tế', 'why_us_feature3_desc': 'Chúng tôi xử lý tất cả các thủ tục phụ trợ, không bao gồm hành nghề y tế, cho phép khách hàng chỉ tập trung vào việc khám sức khỏe của họ.',
            'process_title': 'Quy trình dịch vụ 3 bước đơn giản', 'process_step1_title': 'Tư vấn & Hỗ trợ lựa chọn bệnh viện', 'process_step1_desc_new': 'Sau khi tư vấn về các mục khám và lịch trình mong muốn, chúng tôi cung cấp danh sách các bệnh viện tối ưu đáp ứng các điều kiện để giúp bạn lựa chọn và tiến hành đặt hẹn.', 'process_step2_title': 'Hỗ trợ giao tiếp thời gian thực', 'process_step2_desc_new': 'Vào ngày khám, chúng tôi cung cấp hỗ trợ thời gian thực cho tất cả các giao tiếp trong bệnh viện để đảm bảo không có sự bất tiện nào.', 'process_step3_title_new': 'Giao tệp kết quả đã dịch', 'process_step3_desc_new': 'Chúng tôi nhận kết quả khám, dịch chúng sang ngôn ngữ mà khách hàng có thể dễ dàng hiểu và gửi chúng dưới dạng tệp qua email hoặc messenger.',
            'contact_title_new': 'Bạn có câu hỏi nào không?', 'contact_subtitle_new': 'Một quản lý chuyên nghiệp của CHECKIT sẽ trả lời nhanh chóng và thân thiện.', 'contact_cta_new': 'Liên hệ ngay bây giờ',
            'chatbot_header': 'CHECK Bot', 'chatbot_placeholder': 'Nhập tin nhắn...', 'chatbot_greeting': 'Xin chào! Đây là chatbot của CHECKIT. Tôi có thể giúp gì cho bạn?', 'q1': 'Phí dịch vụ là bao nhiêu?', 'a1': 'CHECKIT không nhận phí môi giới từ bệnh viện. Bạn chỉ trả tiền cho dịch vụ của chúng tôi.', 'q2': 'Bạn có cung cấp tư vấn y tế không?', 'a2': 'Không, chúng tôi tuân thủ luật y tế và không cung cấp lời khuyên, phán đoán hoặc khuyến nghị y tế.', 'q3': 'Bạn có giới thiệu bệnh viện không?', 'a3': 'Thay vì giới thiệu các bệnh viện cụ thể, chúng tôi cung cấp danh sách các bệnh viện tối ưu phù hợp với các mục khám bạn mong muốn để giúp bạn lựa chọn。'
        }
    };

    // ... (The rest of the script.js file with all the logic for language switching and chatbot functionality remains exactly the same as the correct version from the previous step) ...

    let currentLang = 'ko';

    const allTranslatableElements = document.querySelectorAll('[data-lang-key]');
    const mainLangButtons = document.querySelectorAll('#language-switcher .lang-btn');
    // ... (and so on for all other element selectors)

    // Switch Language Function
    const switchLanguage = (newLang) => {
        currentLang = newLang;
        const langData = translations[newLang] || translations['ko'];

        allTranslatableElements.forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (langData[key]) {
                if(element.placeholder) element.placeholder = langData[key];
                else element.textContent = langData[key];
            }
        });

        mainLangButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === newLang);
        });
        
        const chatbotLangButtons = document.querySelectorAll('#chatbot-lang-buttons .chatbot-lang-btn');
        chatbotLangButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === newLang);
        });
    };

    mainLangButtons.forEach(button => {
        button.addEventListener('click', () => {
            switchLanguage(button.dataset.lang);
        });
    });
    
    // --- Initialize default language ---
    switchLanguage('ko');

});
