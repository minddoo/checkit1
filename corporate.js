document.addEventListener("DOMContentLoaded", () => {
    const translations = {
        en: {
            "nav-services": "Services",
            "nav-process": "Process",
            "nav-testimonials": "Reviews",
            "nav-contact": "Contact",
            "corporate-hero-title": "Customized Health Screening Solutions for Businesses",
            "corporate-hero-subtitle": "Effortlessly manage your employees' health without language barriers.",
            "corporate-hero-cta": "Request Corporate Consultation",
            "benefits-title": "Why CHECKIT for Your Business?",
            "benefit-1-title": "Streamlined Management",
            "benefit-1-text": "Request and manage reservations for multiple employees at once. We handle the complex scheduling for you.",
            "benefit-2-title": "Dedicated Manager",
            "benefit-2-text": "A dedicated corporate manager handles the entire process from start to finish, providing a single point of contact.",
            "benefit-3-title": "Integrated Reporting",
            "benefit-3-text": "Receive translated and summarized health reports tailored for corporate needs, helping you understand your team's health status.",
            "benefit-4-title": "Reduced Workplace Risks",
            "benefit-4-text": "Proactively manage employee health to prevent accidents and boost overall productivity and team morale.",
            "corporate-process-title": "Our Corporate Service Process",
            "corporate-process-1-title": "Consultation & Pricing",
            "corporate-process-1-desc": "Quotation is based on (Number of Employees x Unit Price). Contact us for a tailored proposal.",
            "corporate-process-2-title": "Employee Registration",
            "corporate-process-2-desc": "Simply provide an employee list. We coordinate all schedules and details.",
            "corporate-process-3-title": "Hassle-Free Examinations",
            "corporate-process-3-desc": "Employees receive comfortable exams with native language guidance.",
            "corporate-process-4-title": "Follow-up & Progress Management",
            "corporate-process-4-desc": "We provide integrated reports and manage follow-ups for re-examinations.",
            "corporate-contact-title": "Get Started with CHECKIT",
            "corporate-contact-subtitle": "Fill out the form below, and our corporate manager will contact you shortly.",
            "form-company-name": "Company Name",
            "form-contact-person": "Your Name",
            "form-email": "Email Address",
            "form-phone": "Phone Number",
            "form-employee-count": "Number of Employees",
            "form-message": "Your Message (Optional)",
            "form-submit": "Submit Inquiry",
            "footer-copy": "© 2024 CHECKIT. All rights reserved."
        },
        ko: {
            "nav-services": "서비스",
            "nav-process": "프로세스",
            "nav-testimonials": "고객 후기",
            "nav-contact": "문의하기",
            "corporate-hero-title": "기업을 위한 맞춤형 건강검진 솔루션",
            "corporate-hero-subtitle": "언어 장벽 없이 간편하게 직원의 건강을 관리하세요.",
            "corporate-hero-cta": "기업 상담 신청하기",
            "benefits-title": "왜 기업은 CHECKIT을 선택해야 할까요?",
            "benefit-1-title": "간소화된 관리",
            "benefit-1-text": "한 번의 요청으로 여러 명의 직원 예약을 한 번에 처리하세요. 복잡한 일정 조율은 저희가 담당합니다.",
            "benefit-2-title": "전담 매니저",
            "benefit-2-text": "기업 고객 전담 매니저가 처음부터 끝까지 모든 과정을 책임지고 관리하여, 커뮤니케이션 창구를 단일화합니다.",
            "benefit-3-title": "통합 리포팅",
            "benefit-3-text": "기업 맞춤형으로 번역 및 요약된 건강검진 결과 보고서를 통해 팀의 건강 상태를 쉽게 파악할 수 있습니다.",
            "benefit-4-title": "산업 재해 예방",
            "benefit-4-text": "직원 건강의 선제적 관리를 통해 산업 재해를 예방하고, 전반적인 업무 효율성과 팀 사기를 증진시킵니다.",
            "corporate-process-title": "기업 서비스 프로세스",
            "corporate-process-1-title": "상담 및 견적",
            "corporate-process-1-desc": "견적은 (인원수 x 1인 단가)로 측정됩니다. 맞춤형 제안을 위해 문의해주세요.",
            "corporate-process-2-title": "직원 등록",
            "corporate-process-2-desc": "직원 명단을 제공해주시면, 모든 일정과 세부사항을 조율합니다.",
            "corporate-process-3-title": "편리한 검진 진행",
            "corporate-process-3-desc": "직원들은 모국어 안내와 함께 편안한 검진을 받습니다.",
            "corporate-process-4-title": "사후 관리 및 경과 추적",
            "corporate-process-4-desc": "통합 보고서를 제공하고 재검 대상자의 사후관리를 지원합니다.",
            "corporate-contact-title": "CHECKIT과 함께 시작하기",
            "corporate-contact-subtitle": "아래 양식을 작성해주시면 기업 담당 매니저가 신속하게 연락드리겠습니다.",
            "form-company-name": "회사명",
            "form-contact-person": "담당자 이름",
            "form-email": "이메일 주소",
            "form-phone": "연락처",
            "form-employee-count": "직원 수",
            "form-message": "문의 내용 (선택 사항)",
            "form-submit": "문의 제출하기",
            "footer-copy": "© 2024 CHECKIT. 모든 권리 보유."
        },
        zh: {
            "nav-services": "服务",
            "nav-process": "流程",
            "nav-testimonials": "客户评价",
            "nav-contact": "联系我们",
            "corporate-hero-title": "为企业量身定制的健康体检解决方案",
            "corporate-hero-subtitle": "轻松管理员工健康，无语言障碍。",
            "corporate-hero-cta": "申请企业咨询",
            "benefits-title": "为什么您的企业需要 CHECKIT？",
            "benefit-1-title": "简化管理",
            "benefit-1-text": "一次性申请和管理多名员工的预约。我们为您处理复杂的日程安排。",
            "benefit-2-title": "专属客户经理",
            "benefit-2-text": "专属的企业客户经理将从始至终处理整个流程，提供单一联系点。",
            "benefit-3-title": "综合报告",
            "benefit-3-text": "接收为企业需求量身定制的翻译和总结性健康报告，帮助您了解团队的健康状况。",
            "benefit-4-title": "降低工伤风险",
            "benefit-4-text": "主动管理员工健康，预防工伤事故，提高整体生产力和团队士气。",
            "corporate-process-title": "我们的企业服务流程",
            "corporate-process-1-title": "咨询与定价",
            "corporate-process-1-desc": "报价基于 (员工人数 x 单价)。请联系我们获取方案。",
            "corporate-process-2-title": "员工注册",
            "corporate-process-2-desc": "只需提供员工名单。我们协调所有日程和细节。",
            "corporate-process-3-title": "无忧体检",
            "corporate-process-3-desc": "员工在母语指导下接受舒适的体检。",
            "corporate-process-4-title": "后续管理与进度跟踪",
            "corporate-process-4-desc": "我们提供综合报告并管理复检人员的后续跟进。",
            "corporate-contact-title": "开始使用 CHECKIT",
            "corporate-contact-subtitle": "请填写以下表格，我们的企业客户经理将很快与您联系。",
            "form-company-name": "公司名称",
            "form-contact-person": "您的姓名",
            "form-email": "电子邮件地址",
            "form-phone": "电话号码",
            "form-employee-count": "员工人数",
            "form-message": "您的留言（可选）",
            "form-submit": "提交咨询",
            "footer-copy": "© 2024 CHECKIT. 保留所有权利。"
        },
        vi: {
            "nav-services": "Dịch vụ",
            "nav-process": "Quy trình",
            "nav-testimonials": "Đánh giá",
            "nav-contact": "Liên hệ",
            "corporate-hero-title": "Giải pháp khám sức khỏe tùy chỉnh cho doanh nghiệp",
            "corporate-hero-subtitle": "Dễ dàng quản lý sức khỏe của nhân viên mà không gặp rào cản ngôn ngữ.",
            "corporate-hero-cta": "Yêu cầu tư vấn cho doanh nghiệp",
            "benefits-title": "Tại sao doanh nghiệp của bạn nên chọn CHECKIT?",
            "benefit-1-title": "Quản lý tinh gọn",
            "benefit-1-text": "Yêu cầu và quản lý đặt hẹn cho nhiều nhân viên cùng một lúc. Chúng tôi xử lý lịch trình phức tạp cho bạn.",
            "benefit-2-title": "Quản lý riêng",
            "benefit-2-text": "Một quản lý riêng cho doanh nghiệp sẽ xử lý toàn bộ quy trình từ đầu đến cuối, cung cấp một đầu mối liên hệ duy nhất.",
            "benefit-3-title": "Báo cáo tích hợp",
            "benefit-3-text": "Nhận các báo cáo sức khỏe được dịch và tóm tắt phù hợp với nhu cầu của công ty, giúp bạn hiểu rõ tình trạng sức khỏe của đội ngũ.",
            "benefit-4-title": "Giảm thiểu rủi ro tai nạn lao động",
            "benefit-4-text": "Chủ động quản lý sức khỏe nhân viên để phòng ngừa tai nạn và tăng năng suất cũng như tinh thần đồng đội.",
            "corporate-process-title": "Quy trình dịch vụ cho doanh nghiệp của chúng tôi",
            "corporate-process-1-title": "Tư vấn & Báo giá",
            "corporate-process-1-desc": "Báo giá dựa trên (Số nhân viên x Đơn giá). Liên hệ để nhận đề xuất.",
            "corporate-process-2-title": "Đăng ký nhân viên",
            "corporate-process-2-desc": "Chỉ cần cung cấp danh sách nhân viên. Chúng tôi điều phối lịch trình.",
            "corporate-process-3-title": "Khám bệnh không phiền phức",
            "corporate-process-3-desc": "Nhân viên được khám thoải mái với hướng dẫn bằng tiếng mẹ đẻ.",
            "corporate-process-4-title": "Quản lý theo dõi & Tiến độ",
            "corporate-process-4-desc": "Chúng tôi cung cấp báo cáo và quản lý theo dõi cho các lần tái khám.",
            "corporate-contact-title": "Bắt đầu với CHECKIT",
            "corporate-contact-subtitle": "Điền vào biểu mẫu dưới đây và quản lý doanh nghiệp của chúng tôi sẽ sớm liên hệ với bạn.",
            "form-company-name": "Tên công ty",
            "form-contact-person": "Tên của bạn",
            "form-email": "Địa chỉ email",
            "form-phone": "Số điện thoại",
            "form-employee-count": "Số lượng nhân viên",
            "form-message": "Lời nhắn của bạn (Tùy chọn)",
            "form-submit": "Gửi yêu cầu",
            "footer-copy": "© 2024 CHECKIT. Đã đăng ký Bản quyền."
        }
    };

    const languageSwitchers = document.querySelectorAll(".lang-switcher");
    const hamburger = document.querySelector(".hamburger");
    const navUl = document.querySelector("header nav ul");

    function setLanguage(lang) {
        document.documentElement.lang = lang;
        localStorage.setItem('language', lang);

        const elements = document.querySelectorAll("[data-i18n]");
        elements.forEach(el => {
            const key = el.getAttribute("data-i18n");
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        const placeholderElements = document.querySelectorAll("[data-i18n-placeholder]");
        placeholderElements.forEach(el => {
            const key = el.getAttribute("data-i18n-placeholder");
            if (translations[lang] && translations[lang][key]) {
                el.placeholder = translations[lang][key];
            }
        });

        languageSwitchers.forEach(switcher => {
            const activeButton = switcher.querySelector(".active");
            if (activeButton) activeButton.classList.remove("active");
            const buttonToActivate = switcher.querySelector(`[data-lang="${lang}"]`);
            if (buttonToActivate) buttonToActivate.classList.add("active");
        });
    }

    languageSwitchers.forEach(switcher => {
        switcher.addEventListener("click", (e) => {
            if (e.target.tagName === "BUTTON") {
                const lang = e.target.getAttribute("data-lang");
                if (lang) setLanguage(lang);
            }
        });
    });

    hamburger.addEventListener("click", () => {
        navUl.classList.toggle("is-active");
    });

    // Get stored language or default to 'en' and set it
    const savedLang = localStorage.getItem('language') || 'en';
    setLanguage(savedLang);
});
