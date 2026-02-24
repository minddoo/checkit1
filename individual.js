document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        ko: {
            'individual-hero-title': '당신의 건강, 당신의 언어로.',
            'individual-hero-subtitle': '한국 거주 외국인 및 의료 관광객을 위한 맞춤형 건강검진 서비스입니다.',
            'individual-hero-cta': '내 맞춤 플랜 받기',
            'individual-services-title': 'CHECKIT이 제공하는 것',
            'service-1-title': '간편한 예약',
            'service-1-desc': '고객님의 필요에 맞춰 최적의 병원을 찾고 전체 예약 과정을 대행합니다.',
            'service-2-title': '다국어 지원',
            'service-2-desc': '모든 안내, 검진 전 주의사항, 그리고 결과지를 원하시는 언어로 받아보세요.',
            'service-3-title': '번역된 결과지',
            'service-3-desc': '검진 결과지를 정확하게 번역하여 디지털로 전달해드립니다.',
            'contact-title': '당신의 여정을 시작하세요',
            'contact-subtitle-individual': '필요한 사항을 알려주시면, 당신만을 위한 맞춤 플랜을 만들어 드립니다.',
            'form-name': '이름',
            'form-email': '이메일',
            'form-message-individual': '어떤 검진을 찾고 계신가요? (예: 비자 발급용, 정기 검진)',
            'contact-submit-individual': '플랜 요청하기',
        },
        en: {
            'individual-hero-title': 'Your Health, Your Language.',
            'individual-hero-subtitle': 'Personalized health check-up services for foreign residents and medical tourists in Korea.',
            'individual-hero-cta': 'Get Your Personal Plan',
            'individual-services-title': 'What We Offer',
            'service-1-title': 'Effortless Scheduling',
            'service-1-desc': 'We find the right hospital and handle your entire booking process based on your needs.',
            'service-2-title': 'Multilingual Support',
            'service-2-desc': 'Receive all communication, pre-examination guides, and results in your preferred language.',
            'service-3-title': 'Translated Results',
            'service-3-desc': 'Get your check-up results accurately translated and delivered to you digitally.',
            'contact-title': 'Start Your Journey',
            'contact-subtitle-individual': 'Tell us about your needs, and we\'ll create a personalized plan for you.',
            'form-name': 'Your Name',
            'form-email': 'Your Email',
            'form-message-individual': 'What are you looking for? (e.g., visa check-up, annual screening)',
            'contact-submit-individual': 'Request Plan',
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