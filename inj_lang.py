import re

with open('worker_portal.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Make sure we don't duplicate
if 'const workerTranslations' not in html:
    # Add data-lang-key to specific elements
    replacements = [
        (r'나의 진행상황', r'<span data-lang-key="menuProgress">나의 진행상황</span>'),
        (r'CHECKIT 1:1 대화방', r'<span data-lang-key="menuChat">CHECKIT 1:1 대화방</span>'),
        (r'결과 관리', r'<span data-lang-key="menuResults">결과 관리</span>'),
        (r'<h2>안녕하세요, <span id="welcomeName">-</span> 님 👋</h2>', r'<h2><span data-lang-key="welcomePre">안녕하세요, </span><span id="welcomeName">-</span><span data-lang-key="welcomePost"> 님</span> 👋</h2>'),
        (r'<p>나의 건강검진 현황과 제휴 병원 정보를 확인하세요.</p>', r'<p data-lang-key="bannerSub">나의 건강검진 현황과 제휴 병원 정보를 확인하세요.</p>'),
        (r'<h3>나의 검진 현황</h3>', r'<h3 data-lang-key="h_myStatus">나의 검진 현황</h3>'),
        (r'<h3>제휴 병원 안내</h3>', r'<h3 data-lang-key="h_hospitals">제휴 병원 안내</h3>'),
        (r'<h3>기업 필요 서류</h3>', r'<h3 data-lang-key="h_required">기업 필요 서류</h3>'),
        (r'<h4 style="font-size: 1rem; color: var\(--text\);">CHECKIT 1:1 케어 센터</h4>', r'<h4 style="font-size: 1rem; color: var(--text);" data-lang-key="h_chatTitle">CHECKIT 1:1 케어 센터</h4>'),
        (r'온라인 상담 대기 중', r'<span data-lang-key="p_chatStatus">온라인 상담 대기 중</span>'),
        (r'<h3>기업에 결과지 제출하기</h3>', r'<h3 data-lang-key="h_submitResult">기업에 결과지 제출하기</h3>'),
        (r'>아직 제출된 결과지가 없습니다.</p>', r' data-lang-key="p_noResult">아직 제출된 결과지가 없습니다.</p>'),
        (r'>사진 업로드', r' data-lang-key="b_uploadPhoto"><i class="fa-solid fa-camera"></i> 사진 업로드'),
        (r'>바로 제출하기', r' data-lang-key="b_submitNow"><i class="fa-solid fa-paper-plane"></i> 바로 제출하기'),
        (r'<h3>나의 언어로 번역보기 \(Translation\)</h3>', r'<h3 data-lang-key="h_transTitle">나의 언어로 번역보기 (Translation)</h3>'),
        (r'제출하신 한국어 결과지를 분석하여 나의 언어로 번역된 결과를 제공합니다.', r'<span data-lang-key="transDesc1">제출하신 한국어 결과지를 분석하여 나의 언어로 번역된 결과를 제공합니다.</span>'),
        (r'번역된 결과 확인하기', r'<span data-lang-key="b_transCheck">번역된 결과 확인하기</span>'),
        (r'>검진 결과 번역 \(Translated Result\)</h3>', r' data-lang-key="h_transModalTitle">검진 결과 번역 (Translated Result)</h3>'),
        (r'>읽어보시고 꼭 참고해 주세요!</p>', r' data-lang-key="transAlertTitle">읽어보시고 꼭 참고해 주세요!</p>'),
        (r'불러오는 중...', r'<span class="t-loading" data-lang-key="t_loading">불러오는 중...</span>')
    ]
    
    for old, new in replacements:
        html = re.sub(old, new, html)
        
    # Inject chatInput replacement uniquely
    html = html.replace('id="chatInput" placeholder="궁금한 점을 남겨주세요..."', 'id="chatInput" placeholder="궁금한 점을 남겨주세요..." data-lang-key="chatInput"')

    # Add the script just before Firebase SDKs
    script_content = """
<script>
    const workerTranslations = {
        ko: {
            menuProgress: '나의 진행상황',
            menuChat: '1:1 대화방',
            menuResults: '결과 관리',
            welcomePre: '안녕하세요, ',
            welcomePost: ' 님',
            bannerSub: '나의 건강검진 현황과 제휴 병원 정보를 확인하세요.',
            h_myStatus: '나의 검진 현황',
            h_hospitals: '제휴 병원 안내',
            h_required: '기업 필요 서류',
            h_chatTitle: 'CHECKIT 1:1 케어 센터',
            p_chatStatus: '온라인 상담 대기 중',
            chatInput: '궁금한 점을 남겨주세요...',
            h_submitResult: '기업에 결과지 제출하기',
            p_noResult: '아직 제출된 결과지가 없습니다.',
            b_uploadPhoto: '<i class="fa-solid fa-camera"></i> 사진 업로드',
            b_submitNow: '<i class="fa-solid fa-paper-plane"></i> 바로 제출하기',
            t_loading: '불러오는 중...',
            h_transTitle: '나의 언어로 번역보기 (Translation)',
            transDesc1: '제출하신 한국어 결과지를 분석하여 나의 언어로 번역된 결과를 제공합니다.',
            b_transCheck: '번역된 결과 확인하기',
            h_transModalTitle: '검진 결과 번역 (Translated Result)',
            transAlertTitle: '읽어보시고 꼭 참고해 주세요!'
        },
        en: {
            menuProgress: 'My Progress',
            menuChat: '1:1 Chat',
            menuResults: 'Results',
            welcomePre: 'Welcome, ',
            welcomePost: '',
            bannerSub: 'Check your health checkup status and partner hospitals.',
            h_myStatus: 'My Checkup Status',
            h_hospitals: 'Partner Hospitals',
            h_required: 'Required Documents',
            h_chatTitle: 'CHECKIT 1:1 Care Center',
            p_chatStatus: 'Counselors Online',
            chatInput: 'Type your message here...',
            h_submitResult: 'Submit Results',
            p_noResult: 'No results submitted yet.',
            b_uploadPhoto: '<i class="fa-solid fa-camera"></i> Upload Photo',
            b_submitNow: '<i class="fa-solid fa-paper-plane"></i> Submit Now',
            t_loading: 'Loading...',
            h_transTitle: 'View Translation',
            transDesc1: 'We provide translated results based on your submitted Korean result sheet.',
            b_transCheck: 'Check Translated Result',
            h_transModalTitle: 'Translated Result',
            transAlertTitle: 'Please read carefully!'
        },
        cn: {
            menuProgress: '我的进度',
            menuChat: '1:1 聊天',
            menuResults: '结果管理',
            welcomePre: '您好, ',
            welcomePost: '',
            bannerSub: '查看您的健康体检状态和合作医院。',
            h_myStatus: '我的体检状态',
            h_hospitals: '合作医院指南',
            h_required: '企业所需文件',
            h_chatTitle: 'CHECKIT 1:1 护理中心',
            p_chatStatus: '客服在线',
            chatInput: '请写下您的问题...',
            h_submitResult: '向企业提交结果',
            p_noResult: '尚未提交结果。',
            b_uploadPhoto: '<i class="fa-solid fa-camera"></i> 上传照片',
            b_submitNow: '<i class="fa-solid fa-paper-plane"></i> 立即提交',
            t_loading: '加载中...',
            h_transTitle: '查看翻译',
            transDesc1: '我们将根据您提交的韩语体检结果为您提供翻译。',
            b_transCheck: '查看翻译结果',
            h_transModalTitle: '体检结果翻译',
            transAlertTitle: '请务必阅读！'
        },
        vn: {
            menuProgress: 'Tiến độ của tôi',
            menuChat: 'Trò chuyện 1:1',
            menuResults: 'Quản lý kết quả',
            welcomePre: 'Xin chào, ',
            welcomePost: '',
            bannerSub: 'Kiểm tra tình trạng sức khỏe và bệnh viện liên kết.',
            h_myStatus: 'Tình trạng kiểm tra',
            h_hospitals: 'Bệnh viện liên kết',
            h_required: 'Giấy tờ yêu cầu',
            h_chatTitle: 'Trung tâm chăm sóc 1:1 CHECKIT',
            p_chatStatus: 'Tư vấn viên trực tuyến',
            chatInput: 'Nhập câu hỏi của bạn...',
            h_submitResult: 'Nộp kết quả',
            p_noResult: 'Chưa có kết quả nào.',
            b_uploadPhoto: '<i class="fa-solid fa-camera"></i> Tải ảnh lên',
            b_submitNow: '<i class="fa-solid fa-paper-plane"></i> Nộp ngay',
            t_loading: 'Đang tải...',
            h_transTitle: 'Xem bản dịch',
            transDesc1: 'Chúng tôi cung cấp kết quả dịch dựa trên giấy tờ tiếng Hàn của bạn.',
            b_transCheck: 'Xem kết quả đã dịch',
            h_transModalTitle: 'Kết quả đã dịch',
            transAlertTitle: 'Vui lòng đọc kỹ!'
        }
    };

    window.changePortalLanguage = function(lang) {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });
        
        const t = workerTranslations[lang] || workerTranslations.ko;
        
        document.querySelectorAll('[data-lang-key]').forEach(el => {
            if (!t[el.getAttribute('data-lang-key')]) return;
            const textContent = t[el.getAttribute('data-lang-key')];
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = textContent;
            } else {
                el.innerHTML = textContent;
            }
        });

        const user = window.auth && window.auth.currentUser;
        if (user && window.db) {
            window.db.collection('users').doc(user.uid).get().then(doc => {
                if(doc.exists && doc.data().workerDocId) {
                    window.db.collection('workers').doc(doc.data().workerDocId).update({ prefLang: lang });
                }
            }).catch(e => console.error("Lang save error", e));
        }
        
        localStorage.setItem('checkit_lang', lang);
    };

    document.addEventListener("DOMContentLoaded", () => {
        const savedLang = localStorage.getItem('checkit_lang');
        if (savedLang) {
            setTimeout(() => window.changePortalLanguage(savedLang), 500);
        }
    });
</script>
<!-- Firebase SDKs -->"""
    
    html = html.replace('<!-- Firebase SDKs -->', script_content)
    
    with open('worker_portal.html', 'w', encoding='utf-8') as f:
        f.write(html)
    print("Injected successfully")
else:
    print("Already injected")
