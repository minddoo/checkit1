
document.addEventListener('DOMContentLoaded', () => {
    const currencyData = {
        ko: { rate: 1380, format: (val) => `₩${Math.round(val).toLocaleString()}` },
        en: { rate: 1, format: (val) => `${Math.round(val)} USD` },
        zh: { rate: 7.25, format: (val) => `¥${Math.round(val).toLocaleString()}` },
        vi: { rate: 25450, format: (val) => `${Math.round(val).toLocaleString()} VND` }
    };

    const translations = {
        'ko': {
            'logo': 'CHECKIT',
            'nav-reality': '현실', 'nav-services': '서비스', 'nav-contact': '문의',
            'individual-hero-title': '한국 건강검진의 기대와 현실',
            'individual-hero-subtitle': '세계적 수준의 서비스를 기대하지만, 종종 혼란과 불안을 겪습니다.<br>CHECKIT이 그 간극을 메웁니다.',
            'view-reality-cta': '현실 확인하기',
            
            'expectation-title': '한국 의료 서비스에 대한 당신의 기대',
            'exp1-title': '#1. 비용 효율성', 'exp1-desc': '“한국의 의료 서비스는 미국보다 훨씬 저렴하다고 알려져 있습니다.”',
            'exp2-title': '#2. 편리함', 'exp2-desc': '“전체 과정이 간단하고 번거로움이 없을 것으로 기대됩니다.”',
            'exp3-title': '#3. 전문적인 수준', 'exp3-desc': '“시설과 의료 수준이 세계적일 것으로 기대됩니다.”',
            'exp4-title': '#4. 시간 효율성', 'exp4-desc': '“일정에 최소한의 영향을 미치며 신속할 것으로 기대됩니다.”',
            
            'reality-intro-title': '하지만, 현실은 다릅니다.',
            'reality1-title': '영어 지원 부재', 
            'reality1-li1': '직원들은 영어를 못해서 전화를 피합니다.',
            'reality1-li2': '안내, 준비 가이드, 알림이 모두 한국어입니다.',
            'reality1-li3': '민감한 질문(생리, 수술, 증상)에 대해 제대로 된 설명을 받지 못합니다.',
            'reality1-li4': '검진 중 모든 안내 방송은 한국어로만 나옵니다.',
            
            'reality2-title': '혼란스러운 과정', 
            'reality2-li1': '검진 패키지에 무엇이 포함되어 있는지조차 모릅니다.',
            'reality2-li2': '준비 물품이 사용법에 대한 설명 없이 도착합니다.',
            'reality2-li3': '대장내시경 약은 한국어로만 설명되어 → 검사에 실패합니다.',
            'reality2-li4': '사전 문진표는 길고 복잡하며 전부 한국어입니다.',
            
            'reality3-title': '불확실한 일정', 
            'reality3-li1': '예약을 잡는 데만 2-3일이 걸립니다.',
            'reality3-li2': '직원마다 다른 답변을 하며 — 아무도 책임지지 않습니다.',
            'reality3-li3': '한국 전화번호가 없으면 → 알림이나 준비 안내를 받지 못합니다.',
            'reality3-li4': '해외 시차로 인해 → 통화가 실패하고 예약이 지연됩니다.',

            'reality4-title': '지연된 결과 및 책임 부재', 
            'reality4-li1': '당신이 없는 주소로 결과가 우편 발송됩니다.',
            'reality4-li2': '한국을 떠난 후에도 결과가 몇 주 동안 지연됩니다.',
            'reality4-li3': '해외 전화 인증 제한으로 영수증을 받을 수 없습니다.',
            'reality4-li4': '검사 후 규칙(예: 용종 제거 후 비행)에 대한 설명이 없습니다.',

            'solution-title': 'CHECKIT이 바로 해결책입니다',
            'solution-desc': '저희가 모든 비의료 과정을 처리하므로 당신은 건강에만 집중할 수 있습니다. 혼란, 실수, 스트레스 없이 편안하게 검진받으세요.',

            'pricing-title': '플랜 선택하기',
            'plan-included': '포함 내역',
            'plan-best-for': '추천 대상:',
            'plan-cta': '시작하기',
            
            'plan1-title': 'No-Confusion Plan', 
            'plan1-feat1': '중립적인 병원 목록 (추천 없음)', 'plan1-feat2': '프로그램 및 가격 구조 (공식 정보 번역만 제공)', 'plan1-feat3': '단계별 예약 가이드', 'plan1-feat4': '모든 병원 서류의 영어 번역', 'plan1-feat5': '필수 문진표 가이드 (간단, 실수 방지)', 'plan1-feat6': '필수 검진 전 안내 (금식 및 기본 준비)', 'plan1-feat7': '검진 당일 준비물 안내', 'plan1-feat8': '이메일을 통한 안전한 결과 전달', 'plan1-feat9': '결과 지연 1회 확인 포함',
            'plan1-best-for': '명확한 정보와 함께 스스로 과정을 관리하고 싶은 분.',

            'plan2-title': 'Zero-Mistake Plan', 
            'plan2-included': '(400 플랜 모두 포함 +)',
            'plan2-feat1': '강화된 문진표 가이드 (상세, 실수 방지 중심)', 'plan2-feat2': '외국인들이 자주 놓치는 실수 알림', 'plan2-feat3': '1회 서식 확인 (누락 항목, 서명, 날짜)', 'plan2-feat4': '검진 전 가이드 팩 (타임라인 + 지연 유발 요인)', 'plan2-feat5': '대장내시경 준비 기본 (해당 시)', 'plan2-feat6': '시간에 민감한 문제에 대한 우선 메시지', 'plan2-feat7': '결과 후속 조치 (1회)', 'plan2-feat8': '누락 또는 지연된 서류에 대한 알림', 'plan2-feat9': '일정 변경 지원 (1회 포함)',
            'plan2-best-for': '흔한 실수와 일정 지연을 방지하고 싶은 분.',

            'plan3-title': 'Total-Safe Plan',
            'plan3-included': '(500 플랜 모두 포함 +)',
            'plan3-feat1': '프리미엄 문진표 관리', 'plan3-feat2': '위험 포인트 설명 (비의료적, 절차 기반)', 'plan3-feat3': '복잡한 서식 항목을 위한 영어 답변 템플릿', 'plan3-feat4': '전체 서식 확인 (모든 페이지, 서명, 첨부파일)', 'plan3-feat5': '프리미엄 검진 전 팩 (상세 타임라인, 실수 대응 플로우)', 'plan3-feat6': '실시간 검진 당일 채팅 지원', 'plan3-feat7': '병원 내 동선 가이드 (그래픽)', 'plan3-feat8': '영문 영수증 요청 (대행)', 'plan3-feat9': 'CD / 추가 서류 요청', 'plan3-feat10': '결과 나올 때까지 완전한 검진 후 후속 조치', 'plan3-feat11': '결과 구성 (비의료적, 내용 구성만)', 'plan3-feat12': '병원 소통용 템플릿', 'plan3-feat13': '일정 변경 지원 (최대 3회 포함)',
            'plan3-best-for': '완벽하게 스트레스 없는 경험을 원하는 모든 분.',

            'options-title': '옵션', 
            'option1-title': '영문 영수증 요청', 'option1-desc': '보험 목적에 적합한 영문 영수증을 대신 요청합니다.',
            'option2-title': 'CD 결과 요청', 'option2-desc': '검사 CD 또는 추가 영상 파일을 대신 요청합니다.',
            'option3-title': '긴급 결과 후속 조치', 'option3-desc': '병원에 긴급 후속 조치 메시지를 한 번 보냅니다.',
            'option4-title': '프로그램 & 사후관리 팩', 'option4-desc': '검사 항목, 결과 구조 및 검사 후 관리에 대한 비의료적 가이드입니다.',
            'option5-title': '그래픽 동선 가이드', 'option5-desc': '정확한 병원 내 동선과 이동 흐름을 보여줍니다. 첫 방문객에게 유용합니다.',
            'option6-title': '일정 변경', 'option6-desc': '예약 후 예약을 변경해야 하는 고객을 위한 옵션입니다.',
            'option6-sub1': '1회 변경', 'option6-sub2': '2회 패키지', 'option6-sub3': '무제한 변경',
            
            'contact-title': '시작할 준비가 되셨나요?', 'contact-subtitle': '필요한 사항을 알려주시면, 전담 매니저가 24시간 내에 답변해드립니다.', 'contact-email': '이메일 주소를 입력하세요', 'contact-message': '문의 내용을 입력하세요', 'contact-submit': '상담 신청하기',
            'footer-copy': '© 2024 CHECKIT. All rights reserved.',
            
            'notice-title': '공지',
            'notice-subtitle': '왜 외국인은 한국에서 동일한 건강검진에 더 많은 비용을 지불할까요?',
            'notice-q-intro': '저희는 종종 이런 질문을 받습니다.',
            'notice-q': '"왜 당신의 옵션이 병원에서 제공하는 것보다 저렴한가요?"',
            'notice-a1-title': '간단한 답변:',
            'notice-a1-p1': '검사가 달라서가 아닙니다.',
            'notice-a1-p2': '가격 구조 때문입니다.',
            'notice-a2-title': '실제 많은 병원에서 일어나는 일',
            'notice-a2-p1': '대부분의 병원은 별도의 "외국인 패키지"를 만듭니다. 이 패키지에는 현지인이 지불하지 않는 서비스가 포함되어 총 가격이 올라갑니다.',
            'notice-a3-title': '외국인 고객에게서 흔히 볼 수 있는 상황',
            'notice-a3-p1': '한 고객은 외국인 패키지에 대해 1,800,000원을 견적 받았습니다. 저희의 안내를 통해 동일한 검사를 1,050,000원에 예약했습니다.',
        },
        'en': {
            'logo': 'CHECKIT',
            'nav-reality': 'The Reality', 'nav-services': 'Services', 'nav-contact': 'Contact',
            'individual-hero-title': 'Health Check-ups in Korea: Expectation vs. Reality',
            'individual-hero-subtitle': 'You expect world-class service, but what you often get is confusion and anxiety.<br>CHECKIT bridges the gap.',
            'view-reality-cta': 'See the Reality',
            
            'expectation-title': 'What You Expect from Korean Healthcare',
            'exp1-title': '#1. Cost Efficiency', 'exp1-desc': '“Medical care in Korea is known to be dramatically cheaper than in the U.S.”',
            'exp2-title': '#2. Convenience', 'exp2-desc': '“The entire process is expected to be simple and hassle-free.”',
            'exp3-title': '#3. Professional Quality', 'exp3-desc': '“Facilities and medical standards are expected to be world-class.”',
            'exp4-title': '#4. Time Safety', 'exp4-desc': '“It’s expected to be quick, with minimal impact on your schedule.”',
            
            'reality-intro-title': 'But then, reality hits.',
            'reality1-title': 'No English Support',
            'reality1-li1': 'Staff members avoid calls because they can’t speak English.',
            'reality1-li2': 'Instructions, prep guides, and alerts are all in Korean.',
            'reality1-li3': 'Sensitive questions (periods, surgery, symptoms) receive no real explanation.',
            'reality1-li4': 'During the exam, every announcement is in Korean only.',
            
            'reality2-title': 'Confusing Process',
            'reality2-li1': 'You don’t even know what’s included in your check-up package.',
            'reality2-li2': 'Prep items arrive with no explanation on how to use them.',
            'reality2-li3': 'Colonoscopy medication is explained only in Korean → exam fails.',
            'reality2-li4': 'The pre-check questionnaire is long, complicated, and entirely in Korean.',

            'reality3-title': 'Unreliable Scheduling',
            'reality3-li1': 'It takes 2-3 days just to secure a reservation.',
            'reality3-li2': 'Different staff give different answers — no one takes responsibility.',
            'reality3-li3': 'No Korean phone number → no reminders or prep instructions.',
            'reality3-li4': 'Overseas time difference → calls fail, booking gets delayed.',

            'reality4-title': 'Delayed Results & Zero Accountability',
            'reality4-li1': 'Results mailed physically to an address you don’t have.',
            'reality4-li2': 'Results delayed for weeks — even after you leave Korea.',
            'reality4-li3': 'You can’t get receipts due to overseas phone verification limits.',
            'reality4-li4': 'No explanation about post-exam rules (e.g., flying after polyp removal).',

            'solution-title': 'CHECKIT is the Solution',
            'solution-desc': 'We handle the entire non-medical process so you can focus on your health. No confusion, no mistakes, no stress.',
            
            'pricing-title': 'Choose Your Plan',
            'plan-included': 'Included',
            'plan-best-for': 'Best for:',
            'plan-cta': 'Get Started',

            'plan1-title': 'No-Confusion Plan',
            'plan1-feat1': 'Neutral hospital list (no recommendations)', 'plan1-feat2': 'Program & price structure (official info translated only)', 'plan1-feat3': 'Step-by-step reservation guide', 'plan1-feat4': 'English translation of all hospital documents', 'plan1-feat5': 'Essential Questionnaire Guide (simple, mistake-free)', 'plan1-feat6': 'Essential pre-check instructions (fasting & basic preparation)', 'plan1-feat7': 'What to bring on exam day', 'plan1-feat8': 'Secure result delivery via email', 'plan1-feat9': 'One-time result delay check included',
            'plan1-best-for': 'Travelers who want clarity and self-guided support.',

            'plan2-title': 'Zero-Mistake Plan',
            'plan2-included': 'Included (everything in 400 +)',
            'plan2-feat1': 'Enhanced Questionnaire Guide (detailed, mistake-prevention focused)', 'plan2-feat2': 'Common mistake alerts that foreigners often miss', 'plan2-feat3': 'One-time format check (missing fields, signatures, dates)', 'plan2-feat4': 'Pre-check Guide Pack (timeline + what commonly causes delays)', 'plan2-feat5': 'Colonoscopy preparation basics (if relevant)', 'plan2-feat6': 'Priority messaging for time-sensitive issues', 'plan2-feat7': 'Result follow-up (1 time)', 'plan2-feat8': 'Document alerts for missing or delayed paperwork', 'plan2-feat9': 'Schedule change support (1 time included)',
            'plan2-best-for': 'Those who want to avoid common mistakes and delays.',

            'plan3-title': 'Total-Safe Plan',
            'plan3-included': 'Included (everything in 500 +)',
            'plan3-feat1': 'Premium Questionnaire Management', 'plan3-feat2': 'Risk-point explanation (non-medical, process-based)', 'plan3-feat3': 'English answer templates for complex form items', 'plan3-feat4': 'Complete format check (all pages, signatures, attachments)', 'plan3-feat5': 'Premium Pre-check Pack (detailed timeline, mistake-response flow)', 'plan3-feat6': 'Real-time exam-day chat support', 'plan3-feat7': 'Hospital navigation guide (graphic)', 'plan3-feat8': 'English receipt request (handled on your behalf)', 'plan3-feat9': 'CD / additional document request', 'plan3-feat10': 'Full post-exam follow-up until results are delivered', 'plan3-feat11': 'Result structuring (non-medical, content organization only)', 'plan3-feat12': 'Templates for communicating with the hospital', 'plan3-feat13': 'Schedule change support (up to 3 times included)',
            'plan3-best-for': 'Anyone who wants a completely stress-free experience.',

            'options-title': 'Options',
            'option1-title': 'English Receipt Request', 'option1-desc': 'We request an English receipt on your behalf, suitable for insurance purposes.',
            'option2-title': 'CD Result Request', 'option2-desc': 'We request your exam CD or additional imaging files on your behalf.',
            'option3-title': 'Urgent Result Follow-up', 'option3-desc': 'We send one urgent follow-up message to the hospital on your behalf.',
            'option4-title': 'Program & Aftercare Pack', 'option4-desc': 'A non-medical guide explaining your exam conditions, result structure, and post-exam care.',
            'option5-title': 'Graphic Navigation Guide', 'option5-desc': 'Shows the exact hospital layout and movement flow. Helpful for first-time visitors.',
            'option6-title': 'Schedule Change', 'option6-desc': 'For customers who need to change their reservation after booking.',
            'option6-sub1': 'Single Change', 'option6-sub2': 'Double Package', 'option6-sub3': 'Unlimited Changes',

            'contact-title': 'Ready to Get Started?', 'contact-subtitle': 'Tell us your needs, and a dedicated manager will respond within 24 hours.', 'contact-email': 'Enter your email address', 'contact-message': 'Enter your inquiry', 'contact-submit': 'Request Consultation',
            'footer-copy': '© 2024 CHECKIT. All rights reserved.',
            
            'notice-title': 'NOTICE',
            'notice-subtitle': 'Why foreigners pay more for the same medical checkups in Korea',
            'notice-q-intro': 'We're often asked this question.',
            'notice-q': '"Why are your options cheaper than what hospitals offer?"',
            'notice-a1-title': 'The short answer:',
            'notice-a1-p1': 'It's not because the tests are different.',
            'notice-a1-p2': 'It's because the pricing structure is.',
            'notice-a2-title': 'What actually happens in many hospitals',
            'notice-a2-p1': 'Most hospitals create separate "foreigner packages." These packages often bundle services that locals don't pay for – which raises the total price.',
            'notice-a3-title': 'A common situation we see with foreign clients',
            'notice-a3-p1': 'A client was quoted ₩1,800,000 for a foreigner package. With guidance, the same tests were booked for ₩1,050,000.',
        },
        'zh': {
            'logo': 'CHECKIT',
            'nav-reality': '现实', 'nav-services': '服务', 'nav-contact': '联系我们',
            'individual-hero-title': '韩国健康体检：期望与现实',
            'individual-hero-subtitle': '您期望世界一流的服务，但常常得到的是困惑和焦虑。<br>CHECKIT 弥合了这一差距。',
            'view-reality-cta': '看看现实',
            
            'expectation-title': '您对韩国医疗保健的期望',
            'exp1-title': '#1. 成本效益', 'exp1-desc': '“众所周知，韩国的医疗保健费用比美国便宜得多。”',
            'exp2-title': '#2. 便利性', 'exp2-desc': '“整个过程预计将简单无忧。”',
            'exp3-title': '#3. 专业品质', 'exp3-desc': '“设施和医疗标准有望达到世界一流水平。”',
            'exp4-title': '#4. 时间安全', 'exp4-desc': '“预计会很快，对您的日程安排影响最小。”',
            
            'reality-intro-title': '但是，现实是残酷的。',
            'reality1-title': '无英语支持',
            'reality1-li1': '工作人员因为不会说英语而避免接听电话。',
            'reality1-li2': '说明、准备指南和提醒都使用韩语。',
            'reality1-li3': '敏感问题（月经、手术、症状）得不到真正的解释。',
            'reality1-li4': '检查期间，所有广播都只用韩语。',
            
            'reality2-title': '流程混乱',
            'reality2-li1': '您甚至不知道您的体检套餐包括哪些内容。',
            'reality2-li2': '准备物品送达时没有如何使用的说明。',
            'reality2-li3': '结肠镜检查药物仅以韩语说明 → 检查失败。',
            'reality2-li4': '预检问卷冗长、复杂，并且完全是韩语。',

            'reality3-title': '不可靠的日程安排',
            'reality3-li1': '仅确保预订就需要 2-3 天。',
            'reality3-li2': '不同的工作人员给出不同的答案 — 没人负责。',
            'reality3-li3': '没有韩国电话号码 → 没有提醒或准备说明。',
            'reality3-li4': '海外时差 → 通話失败，预订延迟。',

            'reality4-title': '结果延迟和零责任制',
            'reality4-li1': '结果通过邮件寄到您没有的地址。',
            'reality4-li2': '即使在您离开韩国后，结果仍延迟数周。',
            'reality4-li3': '由于海外电话验证限制，您无法获得收据。',
            'reality4-li4': '没有关于检查后规则的解释（例如，息肉切除后飞行）。',

            'solution-title': 'CHECKIT 是解决方案',
            'solution-desc': '我们处理整个非医疗流程，因此您可以专注于您的健康。没有困惑，没有错误，没有压力。',
            
            'pricing-title': '选择您的计划',
            'plan-included': '包含',
            'plan-best-for': '最适合：',
            'plan-cta': '开始',

            'plan1-title': '无忧计划',
            'plan1-feat1': '中立医院名单（无推荐）', 'plan1-feat2': '项目和价格结构（仅翻译官方信息）', 'plan1-feat3': '分步预订指南', 'plan1-feat4': '所有医院文件的英文翻译', 'plan1-feat5': '基本问卷指南（简单，无错误）', 'plan1-feat6': '基本预检说明（禁食和基本准备）', 'plan1-feat7': '检查当天携带物品', 'plan1-feat8': '通过电子邮件安全发送结果', 'plan1-feat9': '包括一次性结果延迟检查',
            'plan1-best-for': '希望获得清晰信息并进行自我指导的旅行者。',

            'plan2-title': '零失误计划',
            'plan2-included': '（包括 400 计划中的所有内容 +）',
            'plan2-feat1': '增强版问卷指南（详细，注重防错）', 'plan2-feat2': '外国人常犯的错误提醒', 'plan2-feat3': '一次性格式检查（缺失字段、签名、日期）', 'plan2-feat4': '预检指南包（时间表+通常导致延迟的原因）', 'plan2-feat5': '结肠镜检查准备基础知识（如果相关）', 'plan2-feat6': '时间敏感问题的优先消息传递', 'plan2-feat7': '结果跟进（1次）', 'plan2-feat8': '文件丢失或延迟的提醒', 'plan2-feat9': '日程变更支持（包括1次）',
            'plan2-best-for': '希望避免常见错误和延误的人士。',

            'plan3-title': '全面安全计划',
            'plan3-included': '（包括 500 计划中的所有内容 +）',
            'plan3-feat1': '高级问卷管理', 'plan3-feat2': '风险点解释（非医疗，基于流程）', 'plan3-feat3': '复杂表格项目的英文答案模板', 'plan3-feat4': '完整的格式检查（所有页面、签名、附件）', 'plan3-feat5': '高级预检包（详细时间表，错误响应流程）', 'plan3-feat6': '实时检查日聊天支持', 'plan3-feat7': '医院导航指南（图文）', 'plan3-feat8': '英文收据请求（代为处理）', 'plan3-feat9': 'CD/附加文件请求', 'plan3-feat10': '直到结果交付的全面检查后跟进', 'plan3-feat11': '结果结构化（非医疗，仅内容组织）', 'plan3-feat12': '与医院沟通的模板', 'plan3-feat13': '日程变更支持（最多包括3次）',
            'plan3-best-for': '任何想要完全无压力体验的人。',

            'options-title': '选项',
            'option1-title': '英文收据请求', 'option1-desc': '我们代您申请英文收据，适用于保险目的。',
            'option2-title': 'CD 结果请求', 'option2-desc': '我们代您申请您的检查 CD 或其他影像文件。',
            'option3-title': '紧急结果跟进', 'option3-desc': '我们代您向医院发送一条紧急跟进信息。',
            'option4-title': '项目与护理包', 'option4-desc': '解释您的检查条件、结果结构和检查后护理的非医疗指南。',
            'option5-title': '图文导航指南', 'option5-desc': '显示确切的医院布局和移动流程。对首次访客有帮助。',
            'option6-title': '日程变更', 'option6-desc': '适用于预订后需要更改预订的客户。',
            'option6-sub1': '单次变更', 'option6-sub2': '双次套餐', 'option6-sub3': '无限次变更',

            'contact-title': '准备好开始了吗？', 'contact-subtitle': '告诉我们您的需求，专属经理将在 24 小时内回复。', 'contact-email': '请输入您的电子邮件地址', 'contact-message': '请输入您的咨询内容', 'contact-submit': '申请咨询',
            'footer-copy': '© 2024 CHECKIT. 版权所有。',
            
            'notice-title': 'NOTICE',
            'notice-subtitle': 'Why foreigners pay more for the same medical checkups in Korea',
            'notice-q-intro': 'We're often asked this question.',
            'notice-q': '"Why are your options cheaper than what hospitals offer?"',
            'notice-a1-title': 'The short answer:',
            'notice-a1-p1': 'It's not because the tests are different.',
            'notice-a1-p2': 'It's because the pricing structure is.',
            'notice-a2-title': 'What actually happens in many hospitals',
            'notice-a2-p1': 'Most hospitals create separate "foreigner packages." These packages often bundle services that locals don't pay for – which raises the total price.',
            'notice-a3-title': 'A common situation we see with foreign clients',
            'a3-p1': 'A client was quoted ₩1,800,000 for a foreigner package. With guidance, the same tests were booked for ₩1,050,000.',
        },
        'vi': {
            'logo': 'CHECKIT',
            'nav-reality': 'Thực tế', 'nav-services': 'Dịch vụ', 'nav-contact': 'Liên hệ',
            'individual-hero-title': 'Khám sức khỏe tại Hàn Quốc: Kỳ vọng và Thực tế',
            'individual-hero-subtitle': 'Bạn mong đợi dịch vụ đẳng cấp thế giới, nhưng những gì bạn thường nhận được là sự nhầm lẫn và lo lắng.<br>CHECKIT thu hẹp khoảng cách đó.',
            'view-reality-cta': 'Xem thực tế',

            'expectation-title': 'Những gì bạn mong đợi từ chăm sóc sức khỏe Hàn Quốc',
            'exp1-title': '#1. Hiệu quả chi phí', 'exp1-desc': '“Chăm sóc y tế ở Hàn Quốc được biết là rẻ hơn đáng kể so với ở Hoa Kỳ”',
            'exp2-title': '#2. Sự tiện lợi', 'exp2-desc': '“Toàn bộ quá trình được cho là đơn giản và không phức tạp.”',
            'exp3-title': '#3. Chất lượng chuyên môn', 'exp3-desc': '“Cơ sở vật chất và tiêu chuẩn y tế được kỳ vọng sẽ đạt đẳng cấp thế giới.”',
            'exp4-title': '#4. An toàn thời gian', 'exp4-desc': '“Nó được cho là nhanh chóng, với tác động tối thiểu đến lịch trình của bạn.”',

            'reality-intro-title': 'Nhưng rồi, thực tế phũ phàng.',
            'reality1-title': 'Không hỗ trợ tiếng Anh',
            'reality1-li1': 'Nhân viên tránh các cuộc gọi vì họ không thể nói tiếng Anh.',
            'reality1-li2': 'Hướng dẫn, hướng dẫn chuẩn bị và cảnh báo đều bằng tiếng Hàn.',
            'reality1-li3': 'Các câu hỏi nhạy cảm (kinh nguyệt, phẫu thuật, triệu chứng) không nhận được giải thích thực sự.',
            'reality1-li4': 'Trong quá trình khám, mọi thông báo chỉ bằng tiếng Hàn.',
            
            'reality2-title': 'Quy trình khó hiểu',
            'reality2-li1': 'Bạn thậm chí không biết những gì được bao gồm trong gói khám sức khỏe của mình.',
            'reality2-li2': 'Các vật dụng chuẩn bị đến mà không có giải thích về cách sử dụng chúng.',
            'reality2-li3': 'Thuốc nội soi đại tràng chỉ được giải thích bằng tiếng Hàn → khám thất bại.',
            'reality2-li4': 'Bảng câu hỏi trước khi kiểm tra dài, phức tạp và hoàn toàn bằng tiếng Hàn.',

            'reality3-title': 'Lập lịch không đáng tin cậy',
            'reality3-li1': 'Chỉ mất 2-3 ngày để đảm bảo đặt chỗ.',
            'reality3-li2': 'Các nhân viên khác nhau đưa ra các câu trả lời khác nhau - không ai chịu trách nhiệm.',
            'reality3-li3': 'Không có số điện thoại Hàn Quốc → không có lời nhắc hoặc hướng dẫn chuẩn bị.',
            'reality3-li4': 'Chênh lệch múi giờ ở nước ngoài → cuộc gọi không thành công, việc đặt chỗ bị trì hoãn.',

            'reality4-title': 'Kết quả chậm trễ và không có trách nhiệm giải trình',
            'reality4-li1': 'Kết quả được gửi bằng thư đến một địa chỉ bạn không có.',
            'reality4-li2': 'Kết quả bị trì hoãn trong nhiều tuần - ngay cả sau khi bạn rời Hàn Quốc.',
            'reality4-li3': 'Bạn không thể nhận được biên lai do giới hạn xác minh điện thoại ở nước ngoài.',
            'reality4-li4': 'Không có giải thích về các quy tắc sau kỳ thi (ví dụ: bay sau khi cắt bỏ polyp). ',

            'solution-title': 'CHECKIT là giải pháp',
            'solution-desc': 'Chúng tôi xử lý toàn bộ quy trình phi y tế để bạn có thể tập trung vào sức khỏe của mình. Không nhầm lẫn, không sai sót, không căng thẳng.',
            
            'pricing-title': 'Chọn gói của bạn',
            'plan-included': 'Bao gồm',
            'plan-best-for': 'Tốt nhất cho:',
            'plan-cta': 'Bắt đầu',

            'plan1-title': 'Gói Không Nhầm lẫn',
            'plan1-feat1': 'Danh sách bệnh viện trung lập (không khuyến nghị)', 'plan1-feat2': 'Cấu trúc chương trình và giá (chỉ dịch thông tin chính thức)', 'plan1-feat3': 'Hướng dẫn đặt chỗ từng bước', 'plan1-feat4': 'Bản dịch tiếng Anh của tất cả các tài liệu bệnh viện', 'plan1-feat5': 'Hướng dẫn câu hỏi cần thiết (đơn giản, không sai sót)', 'plan1-feat6': 'Hướng dẫn trước khi kiểm tra cần thiết (nhịn ăn và chuẩn bị cơ bản)', 'plan1-feat7': 'Những gì cần mang theo vào ngày thi', 'plan1-feat8': 'Gửi kết quả an toàn qua email', 'plan1-feat9': 'Bao gồm kiểm tra chậm kết quả một lần',
            'plan1-best-for': 'Du khách muốn sự rõ ràng và hỗ trợ tự hướng dẫn.',

            'plan2-title': 'Gói Không Sai sót',
            'plan2-included': '(Bao gồm mọi thứ trong 400 +)',
            'plan2-feat1': 'Hướng dẫn câu hỏi nâng cao (chi tiết, tập trung vào phòng ngừa sai sót)', 'plan2-feat2': 'Cảnh báo lỗi thường gặp mà người nước ngoài hay bỏ qua', 'plan2-feat3': 'Kiểm tra định dạng một lần (thiếu trường, chữ ký, ngày tháng)', 'plan2-feat4': 'Gói hướng dẫn trước khi kiểm tra (mốc thời gian + những gì thường gây chậm trễ)', 'plan2-feat5': 'Kiến thức cơ bản về chuẩn bị nội soi đại tràng (nếu có)', 'plan2-feat6': 'Ưu tiên nhắn tin cho các vấn đề nhạy cảm về thời gian', 'plan2-feat7': 'Theo dõi kết quả (1 lần)', 'plan2-feat8': 'Cảnh báo tài liệu thiếu hoặc chậm', 'plan2-feat9': 'Hỗ trợ thay đổi lịch trình (bao gồm 1 lần)',
            'plan2-best-for': 'Những người muốn tránh các lỗi phổ biến và sự chậm trễ.',

            'plan3-title': 'Gói An toàn Toàn diện',
            'plan3-included': '(Bao gồm mọi thứ trong 500 +)',
            'plan3-feat1': 'Quản lý câu hỏi cao cấp', 'plan3-feat2': 'Giải thích điểm rủi ro (phi y tế, dựa trên quy trình)', 'plan3-feat3': 'Mẫu câu trả lời tiếng Anh cho các mục biểu mẫu phức tạp', 'plan3-feat4': 'Kiểm tra định dạng hoàn chỉnh (tất cả các trang, chữ ký, tệp đính kèm)', 'plan3-feat5': 'Gói trước khi kiểm tra cao cấp (mốc thời gian chi tiết, quy trình phản hồi lỗi)', 'plan3-feat6': 'Hỗ trợ trò chuyện trong ngày thi theo thời gian thực', 'plan3-feat7': 'Hướng dẫn điều hướng bệnh viện (đồ họa)', 'plan3-feat8': 'Yêu cầu biên lai tiếng Anh (thay mặt bạn)', 'plan3-feat9': 'Yêu cầu CD / tài liệu bổ sung', 'plan3-feat10': 'Theo dõi đầy đủ sau kỳ thi cho đến khi có kết quả', 'plan3-feat11': 'Cấu trúc kết quả (phi y tế, chỉ tổ chức nội dung)', 'plan3-feat12': 'Mẫu để giao tiếp với bệnh viện', 'plan3-feat13': 'Hỗ trợ thay đổi lịch trình (bao gồm tối đa 3 lần)',
            'plan3-best-for': 'Bất kỳ ai muốn có một trải nghiệm hoàn toàn không căng thẳng.',

            'options-title': 'Tùy chọn',
            'option1-title': 'Yêu cầu biên lai tiếng Anh', 'option1-desc': 'Chúng tôi thay mặt bạn yêu cầu biên lai tiếng Anh, phù hợp cho mục đích bảo hiểm.',
            'option2-title': 'Yêu cầu kết quả CD', 'option2-desc': 'Chúng tôi thay mặt bạn yêu cầu CD kỳ thi hoặc các tệp hình ảnh bổ sung của bạn.',
            'option3-title': 'Theo dõi kết quả khẩn cấp', 'option3-desc': 'Chúng tôi thay mặt bạn gửi một tin nhắn theo dõi khẩn cấp đến bệnh viện.',
            'option4-title': 'Gói chương trình & Chăm sóc sau', 'option4-desc': 'Một hướng dẫn phi y tế giải thích các điều kiện khám, cấu trúc kết quả và chăm sóc sau khám của bạn.',
            'option5-title': 'Hướng dẫn điều hướng đồ họa', 'option5-desc': 'Hiển thị bố cục bệnh viện và luồng di chuyển chính xác. Hữu ích cho những người lần đầu đến.',
            'option6-title': 'Thay đổi lịch trình', 'option6-desc': 'Dành cho những khách hàng cần thay đổi đặt chỗ sau khi đã đặt.',
            'option6-sub1': 'Thay đổi một lần', 'option6-sub2': 'Gói đôi', 'option6-sub3': 'Thay đổi không giới hạn',

            'contact-title': 'Sẵn sàng để bắt đầu?', 'contact-subtitle': 'Hãy cho chúng tôi biết nhu cầu của bạn và một người quản lý riêng sẽ trả lời trong vòng 24 giờ.', 'contact-email': 'Nhập địa chỉ email của bạn', 'contact-message': 'Nhập câu hỏi của bạn', 'contact-submit': 'Yêu cầu tư vấn',
            'footer-copy': '© 2024 CHECKIT. Mọi quyền được bảo lưu.',
            
            'notice-title': 'NOTICE',
            'notice-subtitle': 'Why foreigners pay more for the same medical checkups in Korea',
            'notice-q-intro': 'We're often asked this question.',
            'notice-q': '"Why are your options cheaper than what hospitals offer?"',
            'notice-a1-title': 'The short answer:',
            'notice-a1-p1': 'It's not because the tests are different.',
            'notice-a1-p2': 'It's because the pricing structure is.',
            'notice-a2-title': 'What actually happens in many hospitals',
            'notice-a2-p1': 'Most hospitals create separate "foreigner packages." These packages often bundle services that locals don't pay for – which raises the total price.',
            'notice-a3-title': 'A common situation we see with foreign clients',
            'a3-p1': 'A client was quoted ₩1,800,000 for a foreigner package. With guidance, the same tests were booked for ₩1,050,000.',
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
