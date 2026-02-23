
document.addEventListener('DOMContentLoaded', () => {

    // 1. DATA ----------------------------------------
    const currencyData = {
        ko: { rate: 1380, format: (val) => `₩${Math.round(val).toLocaleString()}` },
        en: { rate: 1, format: (val) => `${Math.round(val)} USD` },
        zh: { rate: 7.25, format: (val) => `¥${Math.round(val).toLocaleString()}` },
        vi: { rate: 25450, format: (val) => `${Math.round(val).toLocaleString()} VND` }
    };

    const translations = {
        'ko': {
            'logo': 'CHECKIT',
            'nav-services': '서비스', 'nav-process': '프로세스', 'nav-testimonials': '후기', 'nav-contact': '문의',
            'nav-reality': '현실', 
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
            'faq-default-ans': '문의해주셔서 감사합니다. 해당 내용에 대해서는 홈페이지의 문의 섹션을 통해 질문을 남겨주시면, 전문 매니저가 신속하게 답변해드리겠습니다.',
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
            'solution-desc': '저희가 모든 비의료 과정을 처리하므로 당신은 건강에만 집중할 수 있습니다.<br>혼란, 실수, 스트레스 없이 편안하게 검진받으세요.',
            'pricing-title': '플랜 선택하기',
            'plan-included': '포함 내역',
            'plan-best-for': '추천 대상:',
            'plan-cta': '시작하기',
            'plan1-title': 'No-Confusion Plan', 
            'plan1-feat1': '중립적인 병원 목록 (추천 없음)', 'plan1-feat2': '프로그램 및 가격 구조 (공식 정보 번역만 제공)', 'plan1-feat3': '단계별 예약 가이드', 'plan1-feat4': '모든 병원 서류의 영어 번역', 'plan1-feat5': '필수 문진표 가이드 (간단, 실수 방지)', 'plan1-feat6': '필수 검진 전 안내 (금식 및 기본 준비)', 'plan1-feat7': '검진 당일 준비물 안내', 'plan1-feat8': '이메일을 통한 안전한 결과 전달', 'plan1-feat9': '결과 지연 1회 확인 포함',
            'plan1-best-for': '명확한 정보와 함께 스스로 과정을 관리하고 싶은 분.',
            'plan2-title': 'Zero-Mistake Plan', 
            'plan2-included': '(No-Confusion Plan 모두 포함 +)',
            'plan2-feat1': '강화된 문진표 가이드 (상세, 실수 방지 중심)', 'plan2-feat2': '외국인들이 자주 놓치는 실수 알림', 'plan2-feat3': '1회 서식 확인 (누락 항목, 서명, 날짜)', 'plan2-feat4': '검진 전 가이드 팩 (타임라인 + 지연 유발 요인)', 'plan2-feat5': '대장내시경 준비 기본 (해당 시)', 'plan2-feat6': '시간에 민감한 문제에 대한 우선 메시지', 'plan2-feat7': '결과 후속 조치 (1회)', 'plan2-feat8': '누락 또는 지연된 서류에 대한 알림', 'plan2-feat9': '일정 변경 지원 (1회 포함)',
            'plan2-best-for': '흔한 실수와 일정 지연을 방지하고 싶은 분.',
            'plan3-title': 'Total-Safe Plan',
            'plan3-included': '(Zero-Mistake Plan 모두 포함 +)',
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
        },
        'en': {
            'logo': 'CHECKIT',
            'nav-services': 'Services', 'nav-process': 'Process', 'nav-testimonials': 'Reviews', 'nav-contact': 'Contact',
            'nav-reality': 'The Reality', 
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
            'faq-default-ans': 'Thank you for your inquiry. For this matter, please leave a question through the contact section on our homepage, and a professional manager will respond promptly.',
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
            'solution-desc': 'We handle the entire non-medical process so you can focus on your health.<br>Enjoy a check-up experience with no confusion, no mistakes, and no stress.',
            'pricing-title': 'Choose Your Plan',
            'plan-included': 'Included',
            'plan-best-for': 'Best for:',
            'plan-cta': 'Get Started',
            'plan1-title': 'No-Confusion Plan',
            'plan1-feat1': 'Neutral hospital list (no recommendations)', 'plan1-feat2': 'Program & price structure (official info translated only)', 'plan1-feat3': 'Step-by-step reservation guide', 'plan1-feat4': 'English translation of all hospital documents', 'plan1-feat5': 'Essential Questionnaire Guide (simple, mistake-free)', 'plan1-feat6': 'Essential pre-check instructions (fasting & basic preparation)', 'plan1-feat7': 'What to bring on exam day', 'plan1-feat8': 'Secure result delivery via email', 'plan1-feat9': 'One-time result delay check included',
            'plan1-best-for': 'Travelers who want clarity and self-guided support.',
            'plan2-title': 'Zero-Mistake Plan',
            'plan2-included': 'Included (everything in No-Confusion Plan +)',
            'plan2-feat1': 'Enhanced Questionnaire Guide (detailed, mistake-prevention focused)', 'plan2-feat2': 'Common mistake alerts that foreigners often miss', 'plan2-feat3': 'One-time format check (missing fields, signatures, dates)', 'plan2-feat4': 'Pre-check Guide Pack (timeline + what commonly causes delays)', 'plan2-feat5': 'Colonoscopy preparation basics (if relevant)', 'plan2-feat6': 'Priority messaging for time-sensitive issues', 'plan2-feat7': 'Result follow-up (1 time)', 'plan2-feat8': 'Document alerts for missing or delayed paperwork', 'plan2-feat9': 'Schedule change support (1 time included)',
            'plan2-best-for': 'Those who want to avoid common mistakes and delays.',
            'plan3-title': 'Total-Safe Plan',
            'plan3-included': 'Included (everything in Zero-Mistake Plan +)',
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
        },
        'zh': {
            'logo': 'CHECKIT',
            'nav-services': '服务', 'nav-process': '流程', 'nav-testimonials': '评价', 'nav-contact': '联系我们',
            'nav-reality': '现实', 
            'hero-title': '为外国人提供健康体检，<br>无语言障碍，舒适便捷。',
            'hero-subtitle': '从错过日程、难以理解的检查指南，到只有韩文的结果报告。CHECKIT为您解决所有非医疗过程。',
            'hero-cta': '立即申请咨询',
            'services-title': '这项服务适合谁？',
            'individuals-title': '个人客户', 'individuals-desc': '体验个性化的健康体检之旅。为韩国居民和医疗游客提供服务。',
            'individuals-cta': '了解更多',
            'business-title': '企业客户', 'business-desc': '系统地管理外籍员工的健康，预防工伤事故，提高工作效率。',
            'business-cta': '了解更多',
            'process-title': 'CHECKIT 使用流程', 
            'process-1-title': '申请咨询', 'process-1-desc': '通过网站简单申请咨询，我们将为您分配专属经理。',
            'process-2-title': '定制咨询', 'process-2-desc': '协调所需的检查、日程和语言，确认最终预订。',
            'process-3-title': '体检与结果', 'process-3-desc': '在预定日期轻松接受体检，一次性收到翻译好的结果报告和后续指南。',
            'testimonials-title': '用户评价', 
            'testimonial-1-text': '“作为一名长期居民，我一直在医院里为语言障碍而苦恼。CHECKIT完美地处理了一切，从安排预约到最终的翻译报告。这是我在韩国最无压力的医疗体验。”',
            'testimonial-1-author': '- Michael. L (美国, 居民)',
            'testimonial-2-text': '“我来韩国短期旅行，需要一次快速可靠的体检。CHECKIT的流程效率惊人。他们帮我找到了附近的医院并处理了所有沟通。几天之内我就通过电子邮件收到了我的英文结果。服务太棒了！”',
            'testimonial-2-author': '- A. Tran (越南, 游客)',
            'testimonial-3-text': '“为我们多元化的外籍员工团队管理健康检查是一场后勤噩梦。错过预约、语言问题和结果延迟是常有的事。自从使用CHECKIT后，我们的流程变得顺畅，员工们也感受到了真正的关怀。这极大地改善了我们团队的福祉。”',
            'testimonial-3-author': '- J. Kim (人力资源经理, 科技公司)',
            'contact-title': '有任何疑问吗？', 'contact-subtitle': '专业经理将在24小时内回复。',
            'contact-email': '请输入您的电子邮件地址', 'contact-message': '请输入您的留言', 'contact-submit': '申请咨询',
            'footer-copy': '© 2024 CHECKIT. 版权所有。',
            'chat-title': 'CHECKIT 机器人', 
            'chat-welcome': '你好！对CHECKIT有任何疑问吗？请选择以下问题或自行输入。',
            'chat-input-placeholder': '请输入您想问的问题',
            'faq-1': '如何进行预订？',
            'faq-2': '是与医院/医生签约的模式吗？',
            'faq-3': '你们是否提供医疗行为或转诊服务？',
            'faq-4': '体检当天是否提供陪同服务？',
            'faq-5': '检查结果如何传达？',
            'ans-1': '预订请通过网站底部的“申请咨询”进行，专属经理将开始您的1:1管理。',
            'ans-2': '不，我们不“推荐”特定医院。我们会根据您的需求和偏好，提供一份医院“列表”，帮助您自己选择最合适的医院。',
            'ans-3': '不，我们明确声明不进行医疗行为或医疗转诊，因为这可能违反医疗法规。我们的职责是帮助您顺利完成体检的非医疗部分（预订、翻译、引导）。',
            'ans-4': '不，我们的经理不会亲自“陪同”您。但在体检当天，我们提供“实时沟通服务”，远程协助您完成从挂号到结束的所有必要沟通，确保过程顺利。',
            'ans-5': '医院出具检查结果后，我们会立即将其翻译成您要求的语言并交付给您。我们不会对结果添加任何医疗判断或诊断，仅提供对原始内容的忠实翻译。',
            'faq-default-ans': '感谢您的询问。关于此事，请通过我们主页上的联系部分留下问题，专业经理将迅速回复。',
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
            'solution-desc': '我们处理整个非医疗流程，因此您可以专注于您的健康。<br>体验无忧、无误、无压力的体检。',
            'pricing-title': '选择您的计划',
            'plan-included': '包含',
            'plan-best-for': '最适合：',
            'plan-cta': '开始',
            'plan1-title': '无忧计划',
            'plan1-feat1': '中立医院名单（无推荐）', 'plan1-feat2': '项目和价格结构（仅翻译官方信息）', 'plan1-feat3': '分步预订指南', 'plan1-feat4': '所有医院文件的英文翻译', 'plan1-feat5': '基本问卷指南（简单，无错误）', 'plan1-feat6': '基本预检说明（禁食和基本准备）', 'plan1-feat7': '检查当天携带物品', 'plan1-feat8': '通过电子邮件安全发送结果', 'plan1-feat9': '包括一次性结果延迟检查',
            'plan1-best-for': '希望获得清晰信息并进行自我指导的旅行者。',
            'plan2-title': '零失误计划',
            'plan2-included': '（包括 No-Confusion Plan 中的所有内容 +）',
            'plan2-feat1': '增强版问卷指南（详细，注重防错）', 'plan2-feat2': '外国人常犯的错误提醒', 'plan2-feat3': '一次性格式检查（缺失字段、签名、日期）', 'plan2-feat4': '预检指南包（时间表+通常导致延迟的原因）', 'plan2-feat5': '结肠镜检查准备基础知识（如果相关）', 'plan2-feat6': '时间敏感问题的优先消息传递', 'plan2-feat7': '结果跟进（1次）', 'plan2-feat8': '文件丢失或延迟的提醒', 'plan2-feat9': '日程变更支持（包括1次）',
            'plan2-best-for': '希望避免常见错误和延误的人士。',
            'plan3-title': '全面安全计划',
            'plan3-included': '（包括 Zero-Mistake Plan 中的所有内容 +）',
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
        },
        'vi': {
            'logo': 'CHECKIT',
            'nav-services': 'Dịch vụ', 'nav-process': 'Quy trình', 'nav-testimonials': 'Đánh giá', 'nav-contact': 'Liên hệ',
            'nav-reality': 'Thực tế', 
            'hero-title': 'Khám sức khỏe cho người nước ngoài, <br>Thoải mái không rào cản ngôn ngữ.',
            'hero-subtitle': 'Từ lịch hẹn bị lỡ, hướng dẫn khó hiểu, đến kết quả chỉ có bằng tiếng Hàn. CHECKIT giải quyết mọi quy trình phi y tế.',
            'hero-cta': 'Yêu cầu tư vấn ngay',
            'services-title': 'Dịch vụ này dành cho ai?',
            'individuals-title': 'Dành cho cá nhân', 'individuals-desc': 'Trải nghiệm hành trình khám sức khỏe cá nhân hóa. Dịch vụ dành cho người cư trú tại Hàn Quốc và khách du lịch y tế.',
            'individuals-cta': 'Tìm hiểu thêm',
            'business-title': 'Dành cho doanh nghiệp', 'business-desc': 'Quản lý sức khỏe của nhân viên nước ngoài một cách có hệ thống để phòng ngừa tai nạn lao động và nâng cao hiệu quả công việc.',
            'business-cta': 'Tìm hiểu thêm',
            'process-title': 'Quy trình hoạt động của CHECKIT', 
            'process-1-title': 'Yêu cầu tư vấn', 'process-1-desc': 'Chỉ cần yêu cầu tư vấn qua trang web của chúng tôi và một người quản lý riêng sẽ được chỉ định.',
            'process-2-title': 'Tư vấn tùy chỉnh', 'process-2-desc': 'Chúng tôi phối hợp các kỳ thi, lịch trình và ngôn ngữ cần thiết để xác nhận đặt chỗ cuối cùng của bạn.',
            'process-3-title': 'Khám & Kết quả', 'process-3-desc': 'Thoải mái kiểm tra sức khỏe và nhận kết quả đã được dịch cùng hướng dẫn theo dõi tất cả trong một lần.',
            'testimonials-title': 'Đánh giá của người dùng', 
            'testimonial-1-text': '“Là một người cư trú lâu năm, tôi luôn phải vật lộn với rào cản ngôn ngữ tại các bệnh viện. CHECKIT đã quản lý mọi thứ một cách hoàn hảo, từ việc lên lịch hẹn cho đến báo cáo cuối cùng đã được dịch thuật. Đó là trải nghiệm y tế không căng thẳng nhất mà tôi từng có ở Hàn Quốc.”',
            'testimonial-1-author': '- Michael. L (Hoa Kỳ, Cư dân)',
            'testimonial-2-text': '“Tôi đến Hàn Quốc trong một chuyến đi ngắn và cần một cuộc kiểm tra sức khỏe nhanh chóng, đáng tin cậy. Quy trình của CHECKIT cực kỳ hiệu quả. Họ đã tìm một bệnh viện gần tôi và xử lý mọi giao tiếp. Tôi nhận được kết quả bằng tiếng Anh qua email chỉ trong vài ngày. Dịch vụ tuyệt vời!”',
            'testimonial-2-author': '- A. Tran (Việt Nam, Khách du lịch)',
            'testimonial-3-text': '“Việc quản lý kiểm tra sức khỏe cho đội ngũ nhân viên nước ngoài đa dạng của chúng tôi là một cơn ác mộng về hậu cần. Các cuộc hẹn bị bỏ lỡ, vấn đề ngôn ngữ và kết quả chậm trễ là chuyện thường tình. Kể từ khi sử dụng CHECKIT, quy trình của chúng tôi đã được sắp xếp hợp lý và nhân viên của chúng tôi cảm thấy được quan tâm thực sự. Điều này đã cải thiện đáng kể sức khỏe của đội ngũ chúng tôi.”',
            'testimonial-3-author': '- J. Kim (Trưởng phòng Nhân sự, Công ty Công nghệ)',
            'contact-title': 'Bạn có câu hỏi nào không?', 'contact-subtitle': 'Một người quản lý chuyên nghiệp sẽ trả lời trong vòng 24 giờ.',
            'contact-email': 'Nhập địa chỉ email của bạn', 'contact-message': 'Nhập tin nhắn của bạn', 'contact-submit': 'Yêu cầu tư vấn',
            'footer-copy': '© 2024 CHECKIT. Mọi quyền được bảo lưu.',
            'chat-title': 'Bot CHECKIT', 
            'chat-welcome': 'Xin chào! Bạn có câu hỏi nào về CHECKIT không? Vui lòng chọn một câu hỏi bên dưới hoặc tự nhập câu hỏi của bạn.',
            'chat-input-placeholder': 'Nhập tin nhắn của bạn...',
            'faq-1': 'Làm cách nào để đặt chỗ?',
            'faq-2': 'Đây có phải là cấu trúc hợp đồng với bệnh viện/bác sĩ không?',
            'faq-3': 'Bạn có thực hiện các hành vi y tế hoặc giới thiệu không?',
            'faq-4': 'Bạn có cung cấp dịch vụ đi cùng trong ngày không?',
            'faq-5': 'Kết quả được giao như thế nào?',
            'ans-1': 'Để đặt hẹn, vui lòng sử dụng mục \'Yêu cầu Tư vấn\' ở cuối trang web của chúng tôi. Một người quản lý riêng sẽ bắt đầu chăm sóc 1:1 cho bạn.',
            'ans-2': 'Không, chúng tôi không \'đề xuất\' một bệnh viện cụ thể. Thay vào đó, chúng tôi cung cấp một \'danh sách\' các bệnh viện phù hợp với nhu cầu và sở thích của bạn, giúp bạn tự mình chọn lựa bệnh viện tối ưu nhất.',
            'ans-3': 'Không, để rõ ràng, chúng tôi không thực hiện các hành vi y tế hoặc giới thiệu y tế vì điều này có thể vi phạm luật y tế. Vai trò của chúng tôi là hỗ trợ các khía cạnh phi y tế (đặt chỗ, phiên dịch, hướng dẫn) để đảm bảo bạn có một trải nghiệm khám sức khỏe thuận lợi.',
            'ans-4': 'Không, người quản lý của chúng tôi không \'đi cùng\' bạn. Thay vào đó, chúng tôi cung cấp \'dịch vụ giao tiếp thời gian thực\' vào ngày khám để hỗ trợ từ xa mọi giao tiếp cần thiết từ lúc đăng ký cho đến khi kết thúc, đảm bảo quá trình diễn ra suôn sẻ.',
            'ans-5': 'Ngay sau khi kết quả khám được bệnh viện cấp, chúng tôi sẽ dịch chúng sang ngôn ngữ bạn yêu cầu và giao cho bạn. Chúng tôi không thêm bất kỳ nhận định hoặc chẩn đoán y tế nào vào kết quả; chúng tôi chỉ cung cấp một bản dịch trung thành của nội dung gốc.',
            'faq-default-ans': 'Cảm ơn bạn đã yêu cầu. Về vấn đề này, vui lòng để lại câu hỏi qua phần liên hệ trên trang chủ của chúng tôi và một người quản lý chuyên nghiệp sẽ trả lời nhanh chóng.',
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
            'solution-desc': 'Chúng tôi xử lý toàn bộ quy trình phi y tế để bạn có thể tập trung vào sức khỏe của mình.<br>Trải nghiệm khám bệnh không nhầm lẫn, không sai sót và không căng thẳng.',
            'pricing-title': 'Chọn gói của bạn',
            'plan-included': 'Bao gồm',
            'plan-best-for': 'Tốt nhất cho:',
            'plan-cta': 'Bắt đầu',
            'plan1-title': 'Gói Không Nhầm lẫn',
            'plan1-feat1': 'Danh sách bệnh viện trung lập (không khuyến nghị)', 'plan1-feat2': 'Cấu trúc chương trình và giá (chỉ dịch thông tin chính thức)', 'plan1-feat3': 'Hướng dẫn đặt chỗ từng bước', 'plan1-feat4': 'Bản dịch tiếng Anh của tất cả các tài liệu bệnh viện', 'plan1-feat5': 'Hướng dẫn câu hỏi cần thiết (đơn giản, không sai sót)', 'plan1-feat6': 'Hướng dẫn trước khi kiểm tra cần thiết (nhịn ăn và chuẩn bị cơ bản)', 'plan1-feat7': 'Những gì cần mang theo vào ngày thi', 'plan1-feat8': 'Gửi kết quả an toàn qua email', 'plan1-feat9': 'Bao gồm kiểm tra chậm kết quả một lần',
            'plan1-best-for': 'Du khách muốn sự rõ ràng và hỗ trợ tự hướng dẫn.',
            'plan2-title': 'Gói Không Sai sót',
            'plan2-included': '(Bao gồm mọi thứ trong Gói Không Nhầm lẫn +)',
            'plan2-feat1': 'Hướng dẫn câu hỏi nâng cao (chi tiết, tập trung vào phòng ngừa sai sót)', 'plan2-feat2': 'Cảnh báo lỗi thường gặp mà người nước ngoài hay bỏ qua', 'plan2-feat3': 'Kiểm tra định dạng một lần (thiếu trường, chữ ký, ngày tháng)', 'plan2-feat4': 'Gói hướng dẫn trước khi kiểm tra (mốc thời gian + những gì thường gây chậm trễ)', 'plan2-feat5': 'Kiến thức cơ bản về chuẩn bị nội soi đại tràng (nếu có)', 'plan2-feat6': 'Ưu tiên nhắn tin cho các vấn đề nhạy cảm về thời gian', 'plan2-feat7': 'Theo dõi kết quả (1 lần)', 'plan2-feat8': 'Cảnh báo tài liệu thiếu hoặc chậm', 'plan2-feat9': 'Hỗ trợ thay đổi lịch trình (bao gồm 1 lần)',
            'plan2-best-for': 'Những người muốn tránh các lỗi phổ biến và sự chậm trễ.',
            'plan3-title': 'Gói An toàn Toàn diện',
            'plan3-included': '(Bao gồm mọi thứ trong Gói Không Sai sót +)',
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
        }
    };

    let currentLang = localStorage.getItem('checkitLang') || 'ko';

    // 2. CORE FUNCTIONS --------------------------------
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
        currentLang = lang;
        localStorage.setItem('checkitLang', lang);
        document.documentElement.lang = lang;

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

        updatePrices(lang);
        if (document.getElementById('chat-window')) {
            updateChatUI(lang);
        }
    }

    function setupLangSwitchers() {
        const switchers = document.querySelectorAll('.lang-switcher button');
        switchers.forEach(button => {
            button.addEventListener('click', (e) => {
                updateTexts(e.target.dataset.lang);
            });
        });
    }

    // 3. CHATBOT --------------------------------------
    function updateChatUI(lang) {
        const chatMessages = document.getElementById('chat-messages');
        const faqContainer = document.getElementById('faq-options');
        if (!chatMessages || !faqContainer) return;

        chatMessages.innerHTML = '';
        faqContainer.innerHTML = '';

        appendMessage('bot', translations[lang]?.['chat-welcome']);

        for (let i = 1; i <= 5; i++) {
            const key = `faq-${i}`;
            if (translations[lang]?.[key]) {
                const button = document.createElement('button');
                button.textContent = translations[lang][key];
                button.dataset.questionKey = key;
                button.addEventListener('click', () => handleFAQClick(key));
                faqContainer.appendChild(button);
            }
        }
    }

    function handleFAQClick(questionKey) {
        const userMessage = translations[currentLang][questionKey];
        appendMessage('user', userMessage);
        showTypingIndicator();
        setTimeout(() => getBotResponse(questionKey, true), 1200);
    }

    function getBotResponse(message, isFaqClick) {
        removeTypingIndicator();
        let responseText;
        if (isFaqClick) {
            const answerKey = `ans-${message.slice(-1)}`;
            responseText = translations[currentLang][answerKey];
        } else {
            responseText = translations[currentLang]['faq-default-ans'];
        }
        appendMessage('bot', responseText);
    }

    function setupChatbot() {
        const chatWindow = document.getElementById('chat-window');
        const chatToggle = document.getElementById('chat-toggle');
        const chatClose = document.getElementById('chat-close');
        const chatInput = document.getElementById('chat-input');
        const chatSend = document.getElementById('chat-send');

        if (!chatWindow) return;

        chatToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            chatWindow.classList.remove('hidden');
            chatToggle.classList.add('hidden');
            updateTexts(currentLang);
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
            setTimeout(() => getBotResponse(messageText, false), 1200);
        };
        
        chatSend.addEventListener('click', sendMessage);
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                sendMessage();
            }
        });

        document.querySelectorAll('#faq-options button').forEach(btn => {
            btn.addEventListener('click', () => handleFAQClick(btn.dataset.questionKey));
        });
    }

    function appendMessage(sender, text) {
        const chatMessages = document.getElementById('chat-messages');
        if (!chatMessages || !text) return;
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('chat-message', sender);
        messageDiv.innerHTML = text;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function showTypingIndicator() {
        const chatMessages = document.getElementById('chat-messages');
        if (!chatMessages) return;
        const indicator = document.createElement('div');
        indicator.className = 'typing-indicator';
        indicator.innerHTML = '<span></span><span></span><span></span>';
        chatMessages.appendChild(indicator);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function removeTypingIndicator() {
        const indicator = document.querySelector('.typing-indicator');
        if (indicator) indicator.remove();
    }

    // 4. MOBILE NAVIGATION ---------------------------
    function setupHamburgerMenu() {
        const hamburger = document.querySelector('.hamburger');
        const navUl = document.querySelector('header nav ul');
        if (!hamburger || !navUl) return;

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

    // INITIALIZE ALL --------------------------------
    setupLangSwitchers();
    setupHamburgerMenu();
    if (document.getElementById('chat-window')) {
        setupChatbot();
    }
    
    // Set initial language and prices
    updateTexts(currentLang);
});
