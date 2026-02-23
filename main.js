document.addEventListener('DOMContentLoaded', () => {
    const currencyData = {
        ko: { rate: 1380, format: (val) => `₩${Math.round(val).toLocaleString()}` },
        en: { rate: 1, format: (val) => `${Math.round(val)} USD` },
        zh: { rate: 7.25, format: (val) => `¥${Math.round(val).toLocaleString()}` },
        vi: { rate: 25450, format: (val) => `${Math.round(val).toLocaleString()} VND` }
    };

    const translations = {
        'ko': {
            'nav-services': '서비스', 'nav-process': '이용 과정', 'nav-contact': '문의',
            'logo': 'CHECKIT',
            'individual-hero-title': '오직 당신을 위한 건강검진 여정,<br>CHECKIT과 함께라면 걱정 없습니다.',
            'individual-hero-subtitle': '한국에서의 건강검진, 언어의 장벽과 복잡한 절차에 부딪히셨나요? 이제는 편안하게 최상의 케어를 경험하세요.',
            'view-plans-cta': '내게 맞는 서비스 찾아보기',
            'story-before-title': 'CHECKIT이 없으면...',
            'problem1-title': '불투명한 비용', 'problem1-desc': '어떤 검사가 필요한지, 비용은 적절한지 알 수 없어 답답합니다.',
            'problem2-title': '복잡한 예약', 'problem2-desc': '전화로만 가능한 예약, 낯선 한국어 의료 용어. 예약부터 장벽에 부딪힙니다.',
            'problem3-title': '불안한 검진 과정', 'problem3-desc': '의료진의 설명을 이해하지 못해 추가 검사가 필요한 상황을 놓치기 쉽습니다.',
            'story-after-title': 'CHECKIT과 함께하면!',
            'solution-desc': '이 모든 어려움을 해결하고, 당신에게 꼭 맞는 서비스를 제공합니다.', 'solution-sub-desc': '투명한 비용, 간편한 예약, 편안한 소통까지. 건강에만 집중하세요.',
            'pricing-title': '나에게 꼭 맞는 플랜을 선택하세요',
            'plan-included': '포함 내역',
            'plan-best-for': '이런 분들께 추천합니다:',
            'plan-cta': '상담 신청',
            'plan-popular-badge': '가장 인기있는 플랜',

            'plan1-title': '헷갈림 없는 플랜 (No-Confusion)', 
            'plan1-included': '포함 내역',
            'plan1-feat1': '중립적인 병원 목록 (추천 없음)', 'plan1-feat2': '프로그램 및 가격 구조 (공식 정보 번역만 제공)', 'plan1-feat3': '단계별 예약 가이드', 'plan1-feat4': '모든 병원 서류의 영어 번역', 'plan1-feat5': '필수 문진표 가이드 (간단, 실수 방지)', 'plan1-feat6': '필수 검진 전 안내 (금식 및 기본 준비)', 'plan1-feat7': '검진 당일 준비물 안내', 'plan1-feat8': '이메일을 통한 안전한 결과 전달', 'plan1-feat9': '결과 지연 1회 확인 포함',
            'plan1-best-for': '추가 서비스 없이 명확함만 원하는 셀프 가이드 여행객.',

            'plan2-title': '실수 제로 플랜 (Zero-Mistake)', 
            'plan2-included': '(400 플랜 모두 포함 +)',
            'plan2-feat1': '강화된 문진표 가이드 (상세, 실수 방지 중심)', 'plan2-feat2': '외국인들이 자주 놓치는 실수 알림', 'plan2-feat3': '1회 서식 확인 (누락 항목, 서명, 날짜)', 'plan2-feat4': '검진 전 가이드 팩 (타임라인 + 지연 유발 요인)', 'plan2-feat5': '대장내시경 준비 기본 (해당 시)', 'plan2-feat6': '시간에 민감한 문제에 대한 우선 메시지', 'plan2-feat7': '결과 후속 조치 (1회)', 'plan2-feat8': '누락 또는 지연된 서류에 대한 알림', 'plan2-feat9': '일정 변경 지원 (1회 포함)',
            'plan2-best-for': '외국인이 흔히 저지르는 모든 실수를 피하고 싶은 여행객.',

            'plan3-title': '완전 안심 플랜 (Total-Safe)',
            'plan3-included': '(500 플랜 모두 포함 +)',
            'plan3-feat1': '프리미엄 문진표 관리 (체계적 지원, 비의료적)', 'plan3-feat2': '위험 포인트 설명 (비의료적, 절차 기반)', 'plan3-feat3': '복잡한 서식 항목을 위한 영어 답변 템플릿', 'plan3-feat4': '전체 서식 확인 (모든 페이지, 서명, 첨부파일)', 'plan3-feat5': '프리미엄 검진 전 팩 (상세 타임라인, 실수 대응 플로우)', 'plan3-feat6': '실시간 검진 당일 채팅 지원', 'plan3-feat7': '병원 내 동선 가이드 (그래픽)', 'plan3-feat8': '영문 영수증 요청 (대행)', 'plan3-feat9': 'CD / 추가 서류 요청', 'plan3-feat10': '결과 나올 때까지 완전한 검진 후 후속 조치', 'plan3-feat11': '결과 구성 (비의료적, 내용 구성만)', 'plan3-feat12': '병원 소통용 템플릿 (이메일로 발송)', 'plan3-feat13': '일정 변경 지원 (최대 3회 포함)',
            'plan3-best-for': '위험과 번거로움을 전혀 원하지 않는 임원, 주재원 및 모든 분들.',

            'options-title': '+옵션', 'options-subtitle': '추가 지원이 필요한 경우에만 플랜을 강화하세요.',
            'option1-title': '영문 영수증 요청', 'option1-desc': '보험 또는 환급 목적에 적합한 영문 영수증을 대신 요청합니다. 검사 후 영문 공식 서류가 필요한 경우 유용합니다.',
            'option2-title': 'CD 결과 요청', 'option2-desc': '검사 CD 또는 추가 영상 파일을 대신 요청합니다.',
            'option3-title': '긴급 결과 후속 조치', 'option3-desc': '결과가 지연될 경우, 병원에 긴급 후속 조치 메시지를 한 번 보냅니다. 표준 후속 조치보다 빠른 조치가 필요한 고객을 위한 옵션입니다.',
            'option4-title': '프로그램 및 사후관리 구조 팩', 'option4-desc': '선택한 검사가 어떤 상태를 식별할 수 있는지, 결과 서류가 어떻게 구성되는지, 검사 후 주의할 점을 설명하는 비의료적 가이드입니다. 검사와 결과에 대한 명확하고 체계적인 이해를 원하는 고객을 위한 것입니다.',
            'option5-title': '그래픽 동선 가이드', 'option5-desc': '정확한 병원 내 동선과 이동 흐름을 보여줍니다. 첫 방문객과 대형 병원에 유용합니다.',
            'option6-title': '일정 변경 옵션', 'option6-desc': '예약 후 예약을 변경해야 하는 고객을 위한 옵션입니다.',
            'option6-sub1': '1회 변경', 'option6-sub2': '2회 패키지', 'option6-sub3': '무제한 변경',
            'option6-note': '포함 플랜: 500 플랜 → 1회 일정 변경 포함, 700 플랜 → 3회 일정 변경 포함. 추가 변경 시 이 옵션이 필요합니다.',
            
            'process-title': 'CHECKIT 이용 과정', 'process-1-title': '온라인 상담 신청', 'process-1-desc': '웹사이트를 통해 간단히 상담을 신청하고, 전담 매니저가 배정됩니다.', 'process-2-title': '맞춤 컨설팅 및 예약', 'process-2-desc': '필요한 검진, 일정, 언어를 조율하고 최종 예약을 확정합니다.', 'process-3-title': '검진 및 결과 안내', 'process-3-desc': '예약된 날짜에 편안하게 검진을 받고, 번역된 결과지와 후속 안내까지 한번에 제공받습니다.',
            'contact-title': '궁금한 점이 있으신가요?', 'contact-subtitle': '24시간 내에 전문 매니저가 답변해드립니다.', 'contact-email': '이메일 주소를 입력하세요', 'contact-message': '문의 내용을 입력하세요', 'contact-submit': '상담 신청하기',
            'footer-copy': '© 2024 CHECKIT. All rights reserved.',
        },
        'en': {
            'nav-services': 'Services', 'nav-process': 'Process', 'nav-contact': 'Contact',
            'logo': 'CHECKIT',
            'individual-hero-title': 'A Health Check-up Journey Just for You,<br>No Worries with CHECKIT.',
            'individual-hero-subtitle': 'Facing language barriers and complex procedures for health check-ups in Korea? Now, experience top-tier care with comfort.',
            'view-plans-cta': 'Find My Service',
            'story-before-title': 'Without CHECKIT...',
            'problem1-title': 'Opaque Costs', 'problem1-desc': "It's frustrating not knowing which tests are necessary or if the cost is appropriate.",
            'problem2-title': 'Complex Booking', 'problem2-desc': 'Phone-only reservations, unfamiliar Korean medical terms. The barriers start with booking.',
            'problem3-title': 'Anxious Check-up Process', 'problem3-desc': "It's easy to miss the need for additional tests because you can't understand the medical staff's explanations.",
            'story-after-title': 'With CHECKIT!',
            'solution-desc': 'We solve all these difficulties and provide the service that is perfect for you.', 'solution-sub-desc': 'From transparent costs and simple booking to comfortable communication. Just focus on your health.',
            'pricing-title': 'Choose the Perfect Plan for You',
            'plan-included': 'Included',
            'plan-best-for': 'Best for:',
            'plan-cta': 'Get Started',
            'plan-popular-badge': 'Most Popular',

            'plan1-title': 'No-Confusion Plan',
            'plan1-included': 'Included',
            'plan1-feat1': 'Neutral hospital list (no recommendations)', 'plan1-feat2': 'Program & price structure (official info translated only)', 'plan1-feat3': 'Step-by-step reservation guide', 'plan1-feat4': 'English translation of all hospital documents', 'plan1-feat5': 'Essential Questionnaire Guide (simple, mistake-free)', 'plan1-feat6': 'Essential pre-check instructions (fasting & basic preparation)', 'plan1-feat7': 'What to bring on exam day', 'plan1-feat8': 'Secure result delivery via email', 'plan1-feat9': 'One-time result delay check included',
            'plan1-best-for': 'Self-guided travelers who want clarity without extra services.',

            'plan2-title': 'Zero-Mistake Plan',
            'plan2-included': 'Included (everything in 400 +)',
            'plan2-feat1': 'Enhanced Questionnaire Guide (detailed, mistake-prevention focused)', 'plan2-feat2': 'Common mistake alerts that foreigners often miss', 'plan2-feat3': 'One-time format check (missing fields, signatures, dates)', 'plan2-feat4': 'Pre-check Guide Pack (timeline + what commonly causes delays)', 'plan2-feat5': 'Colonoscopy preparation basics (if relevant)', 'plan2-feat6': 'Priority messaging for time-sensitive issues', 'plan2-feat7': 'Result follow-up (1 time)', 'plan2-feat8': 'Document alerts for missing or delayed paperwork', 'plan2-feat9': 'Schedule change support (1 time included)',
            'plan2-best-for': 'Travelers who want to avoid all common foreigner mistakes.',

            'plan3-title': 'Total-Safe Plan',
            'plan3-included': 'Included (everything in 500 +)',
            'plan3-feat1': 'Premium Questionnaire Management (structured assistance, non-medical)', 'plan3-feat2': 'Risk-point explanation (non-medical, process-based)', 'plan3-feat3': 'English answer templates for complex form items', 'plan3-feat4': 'Complete format check (all pages, signatures, attachments)', 'plan3-feat5': 'Premium Pre-check Pack (detailed timeline, mistake-response flow)', 'plan3-feat6': 'Real-time exam-day chat support', 'plan3-feat7': 'Hospital navigation guide (graphic)', 'plan3-feat8': 'English receipt request (handled on your behalf)', 'plan3-feat9': 'CD / additional document request', 'plan3-feat10': 'Full post-exam follow-up until results are delivered', 'plan3-feat11': 'Result structuring (non-medical, content organization only)', 'plan3-feat12': 'Templates for communicating with the hospital (sent to your email)', 'plan3-feat13': 'Schedule change support (up to 3 times included)',
            'plan3-best-for': 'Executives, expats, and anyone who wants zero risk and zero hassle.',

            'options-title': '+Option', 'options-subtitle': 'Enhance your plan only if you need extra support.',
            'option1-title': 'English Receipt Request', 'option1-desc': 'We request an English receipt on your behalf, suitable for insurance or reimbursement purposes. Useful if you need official documents in English after your exam.',
            'option2-title': 'CD Result Request', 'option2-desc': 'We request your exam CD or additional imaging files on your behalf.',
            'option3-title': 'Urgent Result Follow-up', 'option3-desc': 'If your results are delayed, we send one urgent follow-up message to the hospital on your behalf. This option is for customers who need faster action beyond the standard follow-up.',
            'option4-title': 'Program & Aftercare Structure Pack', 'option4-desc': 'A non-medical guide explaining: What conditions your chosen exam can identify, How your result documents are structured, What to pay attention to after the exam. For customers who want clear, structured understanding of their exam and results.',
            'option5-title': 'Graphic Navigation Guide', 'option5-desc': 'Showing the exact hospital layout and movement flow. Helpful for first-time visitors and large hospitals.',
            'option6-title': 'Schedule Change Options', 'option6-desc': 'For customers who need to change their reservation after booking.',
            'option6-sub1': 'Single Change', 'option6-sub2': 'Double Package', 'option6-sub3': 'Unlimited Changes',
            'option6-note': 'Included in plans: 500 Plan → 1 schedule change included, 700 Plan → 3 schedule changes included. Additional changes require this option.',

            'process-title': 'How CHECKIT Works', 'process-1-title': 'Online Consultation Request', 'process-1-desc': 'Simply request a consultation through our website, and a dedicated manager will be assigned to you.', 'process-2-title': 'Customized Consulting & Booking', 'process-2-desc': 'We coordinate the necessary tests, schedule, and language, then confirm the final booking.', 'process-3-title': 'Checkup & Results Guidance', 'process-3-desc': 'Receive your checkup comfortably on the scheduled date, and get your translated results and follow-up guidance all at once.',
            'contact-title': 'Do you have any questions?', 'contact-subtitle': 'A professional manager will respond within 24 hours.', 'contact-email': 'Enter your email address', 'contact-message': 'Enter your inquiry', 'contact-submit': 'Request Consultation',
            'footer-copy': '© 2024 CHECKIT. All rights reserved.',
        },
        'zh': {
            'nav-services': '服务', 'nav-process': '过程', 'nav-contact': '询问',
            'logo': 'CHECKIT',
            'individual-hero-title': '专为您打造的健康体检之旅，<br>有CHECKIT，无后顾之忧。',
            'individual-hero-subtitle': '在韩国进行健康体检时是否遇到语言障碍和复杂程序？现在，舒适地体验顶级的关怀吧。',
            'view-plans-cta': '查找适合我的服务',
            'story-before-title': '如果没有 CHECKIT...',
            'problem1-title': '不透明的费用', 'problem1-desc': '不清楚需要哪些检查，费用是否合理，让人感到很郁闷。',
            'problem2-title': '复杂的预约', 'problem2-desc': '只能通过电话预约，还有陌生的韩语医疗术语。从预约开始就处处碰壁。',
            'problem3-title': '不安的体检过程', 'problem3-desc': '因为听不懂医护人员的说明，很容易错过需要追加检查的情况。',
            'story-after-title': '有了 CHECKIT！',
            'solution-desc': '我们为您解决所有这些困难，并提供最适合您的服务。', 'solution-sub-desc': '从透明的费用、便捷的预约到舒适的沟通。您只需专注于您的健康。',
            'pricing-title': '选择最适合您的计划',
            'plan-included': '包含',
            'plan-best-for': '最适合：',
            'plan-cta': '开始咨询',
            'plan-popular-badge': '最受欢迎',
            
            'plan1-title': '无忧计划', 
            'plan1-included': '包含',
            'plan1-feat1': '中立医院名单（无推荐）', 'plan1-feat2': '项目和价格结构（仅翻译官方信息）', 'plan1-feat3': '分步预订指南', 'plan1-feat4': '所有医院文件的英文翻译', 'plan1-feat5': '基本问卷指南（简单，无错误）', 'plan1-feat6': '基本预检说明（禁食和基本准备）', 'plan1-feat7': '检查当天携带物品', 'plan1-feat8': '通过电子邮件安全发送结果', 'plan1-feat9': '包括一次性结果延迟检查',
            'plan1-best-for': '想要清晰明了而不需要额外服务的自助旅行者。',
            
            'plan2-title': '零失误计划', 
            'plan2-included': '（包括 400 计划中的所有内容 +）',
            'plan2-feat1': '增强版问卷指南（详细，注重防错）', 'plan2-feat2': '外国人常犯的错误提醒', 'plan2-feat3': '一次性格式检查（缺失字段、签名、日期）', 'plan2-feat4': '预检指南包（时间表+通常导致延迟的原因）', 'plan2-feat5': '结肠镜检查准备基础知识（如果相关）', 'plan2-feat6': '时间敏感问题的优先消息传递', 'plan2-feat7': '结果跟进（1次）', 'plan2-feat8': '文件丢失或延迟的提醒', 'plan2-feat9': '日程变更支持（包括1次）',
            'plan2-best-for': '希望避免所有常见外国人错误的旅行者。',
            
            'plan3-title': '全面安全计划',
            'plan3-included': '（包括 500 计划中的所有内容 +）',
            'plan3-feat1': '高级问卷管理（结构化协助，非医疗）', 'plan3-feat2': '风险点解释（非医疗，基于流程）', 'plan3-feat3': '复杂表格项目的英文答案模板', 'plan3-feat4': '完整的格式检查（所有页面、签名、附件）', 'plan3-feat5': '高级预检包（详细时间表，错误响应流程）', 'plan3-feat6': '实时检查日聊天支持', 'plan3-feat7': '医院导航指南（图文）', 'plan3-feat8': '英文收据请求（代为处理）', 'plan3-feat9': 'CD/附加文件请求', 'plan3-feat10': '直到结果交付的全面检查后跟进', 'plan3-feat11': '结果结构化（非医疗，仅内容组织）', 'plan3-feat12': '与医院沟通的模板（发送到您的电子邮件）', 'plan3-feat13': '日程变更支持（最多包括3次）',
            'plan3-best-for': '想要零风险零麻烦的管理人员、外籍人士和任何人。',
            
            'options-title': '+选项', 'options-subtitle': '仅在需要额外支持时才增强您的计划。',
            'option1-title': '英文收据请求', 'option1-desc': '我们代您申请英文收据，适用于保险或报销目的。如果您在检查后需要英文的正式文件，此项服务非常有用。',
            'option2-title': 'CD 结果请求', 'option2-desc': '我们代您申请您的检查 CD 或其他影像文件。',
            'option3-title': '紧急结果跟进', 'option3-desc': '如果您的结果延迟，我们会代您向医院发送一条紧急跟进信息。此选项适用于需要比标准跟进更快的行动的客户。',
            'option4-title': '项目和后续护理结构包', 'option4-desc': '一份非医疗指南，解释您选择的检查可以识别哪些状况，您的结果文件如何构成，以及检查后应注意什么。适用于希望清晰、有条理地了解其检查和结果的客户。',
            'option5-title': '图文导航指南', 'option5-desc': '显示确切的医院布局和移动流程。对首次访客和大型医院有帮助。',
            'option6-title': '日程变更选项', 'option6-desc': '适用于预订后需要更改预订的客户。',
            'option6-sub1': '单次变更', 'option6-sub2': '双次套餐', 'option6-sub3': '无限次变更',
            'option6-note': '包含在计划中：500 计划 → 包括 1 次日程变更，700 计划 → 包括 3 次日程变更。额外变更需要此选项。',

            'process-title': 'CHECKIT 使用流程', 'process-1-title': '在线申请咨询', 'process-1-desc': '通过网站简单申请咨询，我们将为您分配专属经理。', 'process-2-title': '定制咨询及预约', 'process-2-desc': '协调必要的检查、日程和语言，并确定最终预约。', 'process-3-title': '体检及结果指南', 'process-3-desc': '在预定日期轻松接受体检，并一次性收到翻译好的结果报告和后续指南。',
            'contact-title': '您有什么问题吗？', 'contact-subtitle': '专业经理将在24小时内回复。', 'contact-email': '请输入您的电子邮件地址', 'contact-message': '请输入您的咨询内容', 'contact-submit': '申请咨询',
            'footer-copy': '© 2024 CHECKIT. 版权所有。',
        },
        'vi': {
            'nav-services': 'Dịch vụ', 'nav-process': 'Quy trình', 'nav-contact': 'Liên hệ',
            'logo': 'CHECKIT',
            'individual-hero-title': 'Hành trình khám sức khỏe dành riêng cho bạn,<br>Không còn lo lắng với CHECKIT.',
            'individual-hero-subtitle': 'Bạn có gặp phải rào cản ngôn ngữ và thủ tục phức tạp khi khám sức khỏe tại Hàn Quốc? Giờ đây, hãy trải nghiệm sự chăm sóc hàng đầu một cách thoải mái.',
            'view-plans-cta': 'Tìm dịch vụ phù hợp',
            'story-before-title': 'Nếu không có CHECKIT...',
            'problem1-title': 'Chi phí không minh bạch', 'problem1-desc': 'Thật khó chịu khi không biết cần xét nghiệm gì và chi phí có hợp lý hay không.',
            'problem2-title': 'Đặt hẹn phức tạp', 'problem2-desc': 'Chỉ có thể đặt hẹn qua điện thoại, các thuật ngữ y tế tiếng Hàn xa lạ. Rào cản bắt đầu ngay từ khi đặt hẹn.',
            'problem3-title': 'Quá trình khám đầy lo lắng', 'problem3-desc': 'Rất dễ bỏ lỡ các tình huống cần xét nghiệm bổ sung vì không hiểu giải thích của nhân viên y tế.',
            'story-after-title': 'Với CHECKIT!',
            'solution-desc': 'Chúng tôi giải quyết tất cả những khó khăn này và cung cấp dịch vụ hoàn hảo cho bạn.', 'solution-sub-desc': 'Từ chi phí minh bạch, đặt hẹn đơn giản đến giao tiếp thoải mái. Bạn chỉ cần tập trung vào sức khỏe của mình.',
            'pricing-title': 'Chọn gói phù hợp nhất cho bạn',
            'plan-included': 'Bao gồm',
            'plan-best-for': 'Tốt nhất cho:',
            'plan-cta': 'Bắt đầu',
            'plan-popular-badge': 'Phổ biến nhất',
            
            'plan1-title': 'Gói Không Nhầm lẫn',
            'plan1-included': 'Bao gồm',
            'plan1-feat1': 'Danh sách bệnh viện trung lập (không khuyến nghị)', 'plan1-feat2': 'Cấu trúc chương trình và giá (chỉ dịch thông tin chính thức)', 'plan1-feat3': 'Hướng dẫn đặt chỗ từng bước', 'plan1-feat4': 'Bản dịch tiếng Anh của tất cả các tài liệu bệnh viện', 'plan1-feat5': 'Hướng dẫn câu hỏi cần thiết (đơn giản, không sai sót)', 'plan1-feat6': 'Hướng dẫn trước khi kiểm tra cần thiết (nhịn ăn và chuẩn bị cơ bản)', 'plan1-feat7': 'Những gì cần mang theo vào ngày thi', 'plan1-feat8': 'Gửi kết quả an toàn qua email', 'plan1-feat9': 'Bao gồm kiểm tra chậm kết quả một lần',
            'plan1-best-for': 'Khách du lịch tự túc muốn sự rõ ràng mà không cần thêm dịch vụ.',

            'plan2-title': 'Gói Không Sai sót',
            'plan2-included': '(Bao gồm mọi thứ trong 400 +)',
            'plan2-feat1': 'Hướng dẫn câu hỏi nâng cao (chi tiết, tập trung vào phòng ngừa sai sót)', 'plan2-feat2': 'Cảnh báo lỗi thường gặp mà người nước ngoài hay bỏ qua', 'plan2-feat3': 'Kiểm tra định dạng một lần (thiếu trường, chữ ký, ngày tháng)', 'plan2-feat4': 'Gói hướng dẫn trước khi kiểm tra (mốc thời gian + những gì thường gây chậm trễ)', 'plan2-feat5': 'Kiến thức cơ bản về chuẩn bị nội soi đại tràng (nếu có)', 'plan2-feat6': 'Ưu tiên nhắn tin cho các vấn đề nhạy cảm về thời gian', 'plan2-feat7': 'Theo dõi kết quả (1 lần)', 'plan2-feat8': 'Cảnh báo tài liệu thiếu hoặc chậm', 'plan2-feat9': 'Hỗ trợ thay đổi lịch trình (bao gồm 1 lần)',
            'plan2-best-for': 'Khách du lịch muốn tránh tất cả các lỗi phổ biến của người nước ngoài.',
            
            'plan3-title': 'Gói An toàn Toàn diện',
            'plan3-included': '(Bao gồm mọi thứ trong 500 +)',
            'plan3-feat1': 'Quản lý câu hỏi cao cấp (hỗ trợ có cấu trúc, phi y tế)', 'plan3-feat2': 'Giải thích điểm rủi ro (phi y tế, dựa trên quy trình)', 'plan3-feat3': 'Mẫu câu trả lời tiếng Anh cho các mục biểu mẫu phức tạp', 'plan3-feat4': 'Kiểm tra định dạng hoàn chỉnh (tất cả các trang, chữ ký, tệp đính kèm)', 'plan3-feat5': 'Gói trước khi kiểm tra cao cấp (mốc thời gian chi tiết, quy trình phản hồi lỗi)', 'plan3-feat6': 'Hỗ trợ trò chuyện trong ngày thi theo thời gian thực', 'plan3-feat7': 'Hướng dẫn điều hướng bệnh viện (đồ họa)', 'plan3-feat8': 'Yêu cầu biên lai tiếng Anh (thay mặt bạn)', 'plan3-feat9': 'Yêu cầu CD / tài liệu bổ sung', 'plan3-feat10': 'Theo dõi đầy đủ sau kỳ thi cho đến khi có kết quả', 'plan3-feat11': 'Cấu trúc kết quả (phi y tế, chỉ tổ chức nội dung)', 'plan3-feat12': 'Mẫu để giao tiếp với bệnh viện (gửi đến email của bạn)', 'plan3-feat13': 'Hỗ trợ thay đổi lịch trình (bao gồm tối đa 3 lần)',
            'plan3-best-for': 'Giám đốc điều hành, người nước ngoài và bất kỳ ai muốn không có rủi ro và không phức tạp.',

            'options-title': '+Tùy chọn', 'options-subtitle': 'Chỉ nâng cao gói của bạn nếu bạn cần hỗ trợ thêm.',
            'option1-title': 'Yêu cầu biên lai tiếng Anh', 'option1-desc': 'Chúng tôi thay mặt bạn yêu cầu biên lai tiếng Anh, phù hợp cho mục đích bảo hiểm hoặc hoàn trả. Hữu ích nếu bạn cần các tài liệu chính thức bằng tiếng Anh sau kỳ thi của mình.',
            'option2-title': 'Yêu cầu kết quả CD', 'option2-desc': 'Chúng tôi thay mặt bạn yêu cầu CD kỳ thi hoặc các tệp hình ảnh bổ sung của bạn.',
            'option3-title': 'Theo dõi kết quả khẩn cấp', 'option3-desc': 'Nếu kết quả của bạn bị chậm, chúng tôi sẽ thay mặt bạn gửi một tin nhắn theo dõi khẩn cấp đến bệnh viện. Tùy chọn này dành cho những khách hàng cần hành động nhanh hơn ngoài việc theo dõi tiêu chuẩn.',
            'option4-title': 'Gói cấu trúc chương trình & chăm sóc sau', 'option4-desc': 'Một hướng dẫn phi y tế giải thích: Kỳ thi bạn đã chọn có thể xác định những tình trạng nào, Tài liệu kết quả của bạn được cấu trúc như thế nào, Cần chú ý điều gì sau kỳ thi. Dành cho những khách hàng muốn hiểu rõ ràng, có cấu trúc về kỳ thi và kết quả của họ.',
            'option5-title': 'Hướng dẫn điều hướng đồ họa', 'option5-desc': 'Hiển thị bố cục bệnh viện và luồng di chuyển chính xác. Hữu ích cho những người lần đầu đến và các bệnh viện lớn.',
            'option6-title': 'Tùy chọn thay đổi lịch trình', 'option6-desc': 'Dành cho những khách hàng cần thay đổi đặt chỗ sau khi đã đặt.',
            'option6-sub1': 'Thay đổi một lần', 'option6-sub2': 'Gói đôi', 'option6-sub3': 'Thay đổi không giới hạn',
            'option6-note': 'Bao gồm trong các gói: Gói 500 → bao gồm 1 lần thay đổi lịch trình, Gói 700 → bao gồm 3 lần thay đổi lịch trình. Các thay đổi bổ sung yêu cầu tùy chọn này.',

            'process-title': 'Quy trình hoạt động của CHECKIT', 'process-1-title': 'Yêu cầu tư vấn trực tuyến', 'process-1-desc': 'Chỉ cần yêu cầu tư vấn qua trang web của chúng tôi và một người quản lý riêng sẽ được chỉ định cho bạn.', 'process-2-title': 'Tư vấn & Đặt lịch tùy chỉnh', 'process-2-desc': 'Chúng tôi điều phối các xét nghiệm cần thiết, lịch trình và ngôn ngữ, sau đó xác nhận đặt lịch cuối cùng.', 'process-3-title': 'Hướng dẫn khám & kết quả', 'process-3-desc': 'Thực hiện khám một cách thoải mái vào ngày đã lên lịch và nhận kết quả đã được dịch cũng như hướng dẫn theo dõi tất cả cùng một lúc.',
            'contact-title': 'Bạn có câu hỏi nào không？', 'contact-subtitle': 'Một người quản lý chuyên nghiệp sẽ trả lời trong vòng 24 giờ.', 'contact-email': 'Nhập địa chỉ email của bạn', 'contact-message': 'Nhập câu hỏi của bạn', 'contact-submit': 'Yêu cầu tư vấn',
            'footer-copy': '© 2024 CHECKIT. Mọi quyền được bảo lưu.',
        }
    };

    const langSwitchers = document.querySelectorAll('.lang-switcher button');
    let currentLang = 'en';

    function updatePrices(lang) {
        const currency = currencyData[lang];
        if (!currency) return;

        document.querySelectorAll('[data-price-usd]').forEach(el => {
            const usdPrice = parseFloat(el.getAttribute('data-price-usd'));
            const convertedPrice = usdPrice * currency.rate;
            el.innerHTML = currency.format(convertedPrice);
        });
    }

    function updateTexts(lang) {
        localStorage.setItem('checkitLang', lang);
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
        langSwitchers.forEach(button => {
            button.classList.toggle('active', button.dataset.lang === lang);
        });
        currentLang = lang;
        updatePrices(lang);
    }

    langSwitchers.forEach(button => {
        button.addEventListener('click', (e) => {
            updateTexts(e.target.dataset.lang);
        });
    });
    
    const savedLang = localStorage.getItem('checkitLang') || 'en';
    updateTexts(savedLang);

    const hamburger = document.querySelector('.hamburger');
    const navUl = document.querySelector('header nav ul');
    const navLinks = document.querySelectorAll('header nav ul a');

    if (hamburger && navUl) {
        const toggleNav = () => {
            navUl.classList.toggle('is-active');
            document.body.classList.toggle('nav-active');
            const icon = hamburger.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        };
        hamburger.addEventListener('click', toggleNav);
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navUl.classList.contains('is-active')) {
                    toggleNav();
                }
            });
        });
    }
});
