// Translations Data
const translations = {
    'ko': {
        'view_workflow': '실무과정 보기',
        'workflow_title': 'CHECKIT 실무 과정',
        'step_label': '단계',
        'corp_step1_t': '검진 대상자 명단 전달',
        'corp_step1_d': '기업이 엑셀 또는 구글시트로 작성한 검진 대상자 명단을 CHECKIT 담당자 메일로 전달합니다.',
        'corp_step2_t': '우선순위 기반 명단 정리',
        'corp_step2_d': '예약 가능 기한 기준으로 내림차순 정리. 기한 임박 대상자 상단 배치. 누락 없이 체계적 관리.',
        'corp_step3_t': '검진 대상자 1:1 컨택 시작',
        'corp_step3_d': '예약 가능 시작일부터 대상자와 소통 시작. 연락 수단 공란 시 모든 수단으로 시도.',
        'corp_step4_t': '병원 및 일정 조율',
        'corp_step4_d': '기업 연계 병원 리스트 제공. 프로그램 비교 안내. 희망 일정 조율 후 병원 선택 지원.',
        'corp_step5_t': '예약 확정 및 번역 안내',
        'corp_step5_d': '검진기관 확정 문자 수신 후 근로자 언어로 전달.',
        'corp_step6_t': '검진 전 알림 관리',
        'corp_step6_d': '7일·3일·2일·1일 전 및 당일 알림 제공. 필요 서류 및 준비물 사전 안내.',
        'corp_step7_t': '검사 당일 실시간 소통 지원',
        'corp_step7_d': '접수부터 종료까지 실시간 지원. 의사소통 어려움 최소화.',
        'corp_step8_t': '당일 검사 완료 여부 관리',
        'corp_step8_d': '미검 항목 확인. 필수 서류 수령 여부 관리. 재내원 최소화.',
        'corp_step9_t': '결과 수령 방법 재확인',
        'corp_step9_d': '이메일·우편·카톡 수령 방식 확인. 오류 발생 시 해결 안내.',
        'corp_step10_t': '결과 번역 및 재검 여부 확인',
        'corp_step10_d': '의료적 해석 없이 단순 번역 제공. 재검 대상자 분류.',
        'corp_step11_t': '기업 제출 서류 관리',
        'corp_step11_d': '기업 요구 서류 안내. 근로자 제출 완료까지 확인.',
        'corp_step12_t': '진행 현황 정리 후 기업 공유',
        'corp_step12_d': '우선순위 및 진행 상황 정리된 명단을 기업 담당자 메일로 전달.',
        // ... (이전의 모든 KO 번역 데이터 유지)
    },
    'en': {
        'view_workflow': 'View Workflow',
        'workflow_title': 'CHECKIT Workflow',
        'step_label': 'STEP',
        'corp_step1_t': 'Submission of Candidate List',
        'corp_step1_d': 'The company sends the list of candidates (Excel/Google Sheets) to the CHECKIT manager via email.',
        'corp_step2_t': 'Priority-Based List Sorting',
        'corp_step2_d': 'Sorting by reservation deadline. Urgent candidates are placed at the top for systematic management.',
        'corp_step3_t': '1:1 Contact with Candidates',
        'corp_step3_d': 'Communication starts from the earliest available date. Multiple methods used if contact info is missing.',
        'corp_step4_t': 'Hospital and Schedule Coordination',
        'corp_step4_d': 'Providing affiliated hospital lists, program comparisons, and supporting hospital selection after scheduling.',
        'corp_step5_t': 'Booking Confirmation & Translation',
        'corp_step5_d': 'After receiving confirmation from the clinic, the details are sent in the workers native language.',
        'corp_step6_t': 'Pre-Examination Notification',
        'corp_step6_d': 'Notifications sent 7, 3, 2, 1 days before and on the day. Instructions on required documents provided.',
        'corp_step7_t': 'Real-Time Communication Support',
        'corp_step7_d': 'Real-time support from registration to completion to minimize language barriers.',
        'corp_step8_t': 'On-Site Completion Management',
        'corp_step8_d': 'Checking for skipped items and managing document collection to minimize return visits.',
        'corp_step9_t': 'Reconfirming Result Delivery',
        'corp_step9_d': 'Confirming delivery via email, mail, or KakaoTalk. Troubleshooting delivery issues.',
        'corp_step10_t': 'Result Translation & Re-test Check',
        'corp_step10_d': 'Providing simple translation without medical interpretation. Categorizing candidates for re-testing.',
        'corp_step11_t': 'Corporate Document Management',
        'corp_step11_d': 'Instructions on company-required documents and confirming completion of submission.',
        'corp_step12_t': 'Progress Report to Company',
        'corp_step12_d': 'Sending the organized list with priorities and progress status to the company manager via email.',
        // ... (이전의 모든 EN 번역 데이터 유지)
    },
    'cn': {
        'view_workflow': '查看工作流程',
        'workflow_title': 'CHECKIT 实务流程',
        'step_label': '步骤',
        'corp_step1_t': '提交体检对象名单',
        'corp_step1_d': '企业将体检对象名单（Excel或Google表格）发送至CHECKIT负责人邮箱。',
        'corp_step2_t': '基于优先级的名单整理',
        'corp_step2_d': '按预约截止日期降序排列。优先处理即将到期的对象，确保无遗漏管理。',
        'corp_step3_t': '开始1:1联系体检对象',
        'corp_step3_d': '从可预约开始日进行沟通。如果联系方式空白，将尝试所有可能的沟通手段。',
        'corp_step4_t': '医院及日程协调',
        'corp_step4_d': '提供企业合作医院名单、项目对比指南，并在协调日程后支持医院选择。',
        'corp_step5_t': '预约确认及翻译指南',
        'corp_step5_d': '收到体检机构确认短信后，将其翻译成劳工母语并发送。',
        'corp_step6_t': '体检前提醒管理',
        'corp_step6_d': '在体检前7天、3天、2天、1天及当天提供提醒。预先告知所需材料及准备物品。',
        'corp_step7_t': '体检当天实时沟通支持',
        'corp_step7_d': '从挂号到体检结束提供实时支持，尽量减少沟通困难。',
        'corp_step8_t': '当天体检完成情况管理',
        'corp_step8_d': '确认漏检项目，管理必要文件领取情况，减少再次访问。',
        'corp_step9_t': '再次确认结果领取方式',
        'corp_step9_d': '确认通过邮件、邮寄、微信/Kakao领取。解决领取过程中出现的错误。',
        'corp_step10_t': '结果翻译及复检确认',
        'corp_step10_d': '提供不含医疗解释的简单翻译。对复检对象进行分类。',
        'corp_step11_t': '企业提交文件管理',
        'corp_step11_d': '告知企业要求的文件，确认劳工完成提交。',
        'corp_step12_t': '整理进度并共享至企业',
        'corp_step12_d': '将整理好优先级及进度的名单通过邮件发送给企业负责人。',
        // ... (이전의 모든 CN 번역 데이터 유지)
    },
    'vn': {
        'view_workflow': 'Xem quy trình',
        'workflow_title': 'Quy trình CHECKIT',
        'step_label': 'BƯỚC',
        'corp_step1_t': 'Gửi danh sách đối tượng khám',
        'corp_step1_d': 'Doanh nghiệp gửi danh sách đối tượng (Excel/Google Sheets) cho người phụ trách CHECKIT qua email.',
        'corp_step2_t': 'Sắp xếp danh sách theo ưu tiên',
        'corp_step2_d': 'Sắp xếp theo hạn chót đặt lịch. Ưu tiên đối tượng sắp hết hạn để quản lý chặt chẽ.',
        'corp_step3_t': 'Bắt đầu liên hệ 1:1 với đối tượng',
        'corp_step3_d': 'Liên lạc từ ngày bắt đầu đặt lịch. Sử dụng mọi phương thức nếu thông tin liên hệ trống.',
        'corp_step4_t': 'Điều phối bệnh viện và lịch trình',
        'corp_step4_d': 'Cung cấp danh sách bệnh viện liên kết, so sánh chương trình và hỗ trợ chọn bệnh viện.',
        'corp_step5_t': 'Xác nhận đặt lịch & dịch thuật',
        'corp_step5_d': 'Gửi thông tin xác nhận từ bệnh viện cho người lao động bằng ngôn ngữ của họ.',
        'corp_step6_t': 'Quản lý thông báo trước khi khám',
        'corp_step6_d': 'Thông báo trước 7, 3, 2, 1 ngày và trong ngày khám. Hướng dẫn chuẩn bị giấy tờ cần thiết.',
        'corp_step7_t': 'Hỗ trợ giao tiếp trực tiếp ngày khám',
        'corp_step7_d': 'Hỗ trợ từ khi đăng ký đến khi kết thúc để giảm thiểu khó khăn trong giao tiếp.',
        'corp_step8_t': 'Quản lý hoàn thành khám trong ngày',
        'corp_step8_d': 'Kiểm tra các hạng mục chưa khám, quản lý nhận giấy tờ để hạn chế việc phải đi lại nhiều lần.',
        'corp_step9_t': 'Xác nhận lại phương thức nhận kết quả',
        'corp_step9_d': 'Xác nhận nhận qua email, bưu điện hoặc Zalo/Kakao. Xử lý lỗi khi nhận kết quả.',
        'corp_step10_t': 'Dịch kết quả & Kiểm tra tái khám',
        'corp_step10_d': 'Dịch tóm tắt kết quả (không giải thích y khoa). Phân loại đối tượng cần tái khám.',
        'corp_step11_t': 'Quản lý hồ sơ nộp cho doanh nghiệp',
        'corp_step11_d': 'Hướng dẫn các hồ sơ doanh nghiệp yêu cầu và xác nhận người lao động đã nộp đủ.',
        'corp_step12_t': 'Tổng hợp và báo cáo cho doanh nghiệp',
        'corp_step12_d': 'Gửi danh sách tiến độ và thứ tự ưu tiên cho người phụ trách doanh nghiệp qua email.',
        // ... (이전의 모든 VN 번역 데이터 유지)
    }
};

// ... (Translations Object 생략 - 실제 코드에서는 위 translations 객체와 합쳐짐)

document.addEventListener('DOMContentLoaded', () => {
    let currentLang = 'ko';
    let currentIndex = 0; // 슬라이드 현재 인덱스 전역 관리

    // --- UI Update Logic ---
    const switchLanguage = (newLang) => {
        currentLang = newLang;
        document.documentElement.lang = newLang;
        const langData = translations[newLang] || translations['ko'];

        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (langData[key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = langData[key];
                } else {
                    element.innerHTML = langData[key];
                }
            }
        });

        // 슬라이드가 열려있는 경우 내용 즉시 번역
        if (!document.getElementById('processModal').classList.contains('hidden')) {
            renderSlide();
        }
    };

    // --- B2B 실무 과정 슬라이드 렌더링 로직 ---
    const renderSlide = () => {
        const content = document.getElementById('slideContent');
        const indicator = document.getElementById('slideIndicator');
        const prevBtn = document.getElementById('prevSlide');
        const nextBtn = document.getElementById('nextSlide');
        const langData = translations[currentLang];

        const stepCount = 12;
        const stepTitle = langData[`corp_step${currentIndex + 1}_t`];
        const stepDesc = langData[`corp_step${currentIndex + 1}_d`];
        const stepLabel = langData['step_label'] || 'STEP';

        content.innerHTML = `
            <div style="color: #27ae60; font-weight: 700; margin-bottom: 10px; font-size: 0.9rem;">${stepLabel} ${currentIndex + 1}</div>
            <h3 style="margin-top: 0; word-break: keep-all;">${stepTitle}</h3>
            <p style="word-break: keep-all;">${stepDesc}</p>
        `;
        
        indicator.textContent = `${currentIndex + 1} / ${stepCount}`;
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === stepCount - 1;
    };

    // --- 초기화 및 이벤트 바인딩 ---
    const initialLang = new URLSearchParams(window.location.search).get('lang') || 'ko';
    switchLanguage(initialLang);

    // 슬라이드 모달 제어
    const openBtn = document.getElementById('openProcessSlide');
    const modal = document.getElementById('processModal');
    const closeBtn = document.getElementById('closeProcess');

    openBtn?.addEventListener('click', () => {
        currentIndex = 0;
        modal.classList.remove('hidden');
        modal.style.display = 'flex';
        renderSlide();
    });

    const closeAction = () => {
        modal.classList.add('hidden');
        modal.style.display = 'none';
    };

    closeBtn?.addEventListener('click', closeAction);
    modal?.querySelector('.modal-overlay')?.addEventListener('click', closeAction);

    document.getElementById('prevSlide')?.addEventListener('click', (e) => {
        e.stopPropagation();
        if (currentIndex > 0) { currentIndex--; renderSlide(); }
    });

    document.getElementById('nextSlide')?.addEventListener('click', (e) => {
        e.stopPropagation();
        if (currentIndex < 11) { currentIndex++; renderSlide(); }
    });

    // 언어 버튼 클릭 시 슬라이드 포함 실시간 번역
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => switchLanguage(btn.dataset.lang));
    });

    // ... (Firebase Auth 및 나머지 플랫폼 로직 유지)
});
