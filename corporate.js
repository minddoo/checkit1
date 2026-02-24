document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        ko: {
            'corporate-hero-title': '직원 건강 관리를 간소화하세요',
            'corporate-hero-subtitle': '외국인 직원을 위한 포괄적인 건강검진 솔루션입니다.',
            'corporate-hero-cta': '제안서 요청하기',
            'benefits-title': '왜 기업은 CHECKIT을 선택해야 할까요?',
            'benefit-1-title': '간소화된 관리',
            'benefit-1-desc': '전담 매니저가 모든 일정과 커뮤니케이션을 처리하여 HR팀의 업무 부담을 덜어줍니다.',
            'benefit-2-title': '산업 재해 감소',
            'benefit-2-desc': '선제적인 건강 관리는 사고를 예방하고 더 안전한 근무 환경을 보장합니다.',
            'benefit-3-title': '생산성 향상',
            'benefit-3-desc': '건강하고 잘 관리된 직원은 더 집중하고 생산적이며 사기가 높습니다.',
            'corporate-contact-title': '맞춤 제안서 받기',
            'corporate-contact-subtitle': '귀사의 필요에 맞는 건강 관리 계획을 함께 만들어보세요.',
            'form-company-name': '회사명',
            'form-your-name': '담당자명',
            'form-work-email': '업무용 이메일',
            'form-employee-count': '직원 수',
            'corporate-contact-submit': '제출하기',
        },
        en: {
            'corporate-hero-title': 'Streamline Employee Health Management',
            'corporate-hero-subtitle': 'Comprehensive health check-up solutions for your international workforce.',
            'corporate-hero-cta': 'Request a Proposal',
            'benefits-title': 'Why CHECKIT for Your Business?',
            'benefit-1-title': 'Simplified Management',
            'benefit-1-desc': 'A dedicated manager handles all scheduling and communication, freeing up your HR team.',
            'benefit-2-title': 'Reduced Workplace Risk',
            'benefit-2-desc': 'Proactive health management helps prevent accidents and ensures a safer work environment.',
            'benefit-3-title': 'Improved Productivity',
            'benefit-3-desc': 'Healthy, well-cared-for employees are more focused, productive, and have higher morale.',
            'corporate-contact-title': 'Get a Custom Proposal',
            'corporate-contact-subtitle': 'Let\'s build a health management plan that fits your company\'s needs.',
            'form-company-name': 'Company Name',
            'form-your-name': 'Your Name',
            'form-work-email': 'Work Email',
            'form-employee-count': 'Number of Employees',
            'corporate-contact-submit': 'Submit',
        }
    };

    function updateTexts(lang) {
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
    }

    // Assume language is switched from a switcher on the page
    // For simplicity, this example just defaults to English.
    // A full implementation would have a language switcher UI.
    updateTexts('en'); 
});
