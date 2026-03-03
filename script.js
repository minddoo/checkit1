document.addEventListener('DOMContentLoaded', () => {

    // --- 1. FULL MULTILINGUAL DATA (KO, EN, CN, VN) ---
    const translations = {
        ko: {
            'nav_home': '홈', 'hero_cta': '지금 바로 상담 신청', 'learn_more': '더 알아보기',
            'platform_title': 'CHECKIT 플랫폼', 'platform_status_title': '나의 서비스 현황',
            'platform_close': '닫기', 'contact_success': '문의가 성공적으로 접수되었습니다!',
            'admin_title': '매니저 관리 대시보드', 'onboarding_title': '프로필 완성하기',
            'chatbot_manager_btn': '전담 매니저와 채팅하기',
            'stat_total_clients': '전체 고객', 'stat_pending_leads': '미처리 문의',
            'chart_distribution_title': '단계별 고객 분포',
            'admin_search_placeholder': '고객명 또는 이메일 검색...',
            'admin_filter_all': '전체 보기',
            'btn_export_csv': '리포트 다운로드 (CSV)',
            'btn_convert_client': '고객으로 등록',
            'nav_mypage': '마이페이지', 'nav_login': '로그인', 'nav_logout': '로그아웃',
            'platform_step1': '신청 완료', 'platform_step1_desc': '문의가 정상적으로 접수되었습니다.',
            'platform_step2': '예약 진행', 'platform_step2_desc': '희망하시는 지역의 병원과 일정을 조율 중입니다.',
            'platform_step3': '검진 안내', 'platform_step3_desc': '검진 당일 주의사항과 위치를 안내해 드립니다.',
            'platform_step4': '결과 확인', 'platform_step4_desc': '검진 결과 요약본이 준비되었습니다.',
            'hero_title': '외국인을 위한 전문 건강검진 예약 서비스',
            'hero_subtitle': '어려운 한국 병원 예약과 건강검진, CHECKIT이 모국어로 완벽하게 도와드립니다.',
            'service_for_title': '누구를 위한 서비스인가요?',
            'individual_title': '개인 고객',
            'individual_desc': '혼자 하기 힘든 병원 예약부터 결과지 번역까지, 1:1 전담 매니저가 케어해드립니다.',
            'corporate_title': '기업 고객',
            'corporate_desc': '외국인 근로자의 건강 관리를 체계적으로 지원하여 기업의 생산성을 높여드립니다.',
            'why_us_title': '왜 CHECKIT인가요?',
            'why_us_subtitle_new': '외국인 근로자와 기업 모두가 만족하는 건강검진 관리의 새로운 표준',
            'why_us_feature1_title': '모국어 1:1 상담',
            'why_us_feature1_desc': '언어 장벽 없는 소통으로 불안감을 해소합니다.',
            'why_us_feature2_title': '병원 예약 대행',
            'why_us_feature2_desc': '원하는 지역과 일정에 맞춰 최적의 병원을 예약합니다.',
            'why_us_feature3_title': '결과지 단순 번역',
            'why_us_feature3_desc': '어려운 의학 용어를 이해하기 쉬운 모국어로 요약해 드립니다.',
            'why_us_feature4_title': '합리적인 비용',
            'why_us_feature4_desc': '부담 없는 가격으로 프리미엄 케어 서비스를 누리세요.',
            'process_title': '利用 프로세스',
            'process_step1_title': '서비스 신청',
            'process_step1_desc_new': '웹사이트 또는 챗봇을 통해 상담을 신청합니다.',
            'process_step2_title': '예약 및 안내',
            'process_step2_desc_new': '매니저가 병원 예약을 완료하고 주의사항을 안내합니다.',
            'process_step3_title_new': '검진 및 사후 관리',
            'process_step3_desc_new': '검진 당일 지원과 결과지 요약본을 전달받습니다.',
            'testimonials_title': '고객 후기',
            'testimonials_subtitle': '이미 많은 외국인 고객분들이 CHECKIT과 함께하고 있습니다.',
            'testimonial1_text': '한국 병원이 처음이라 걱정이 많았는데, 매니저님이 친절하게 도와주셔서 무사히 검진을 마쳤어요.',
            'testimonial1_author': 'Nguyen Thuy', 'testimonial1_type': '베트남 고객',
            'testimonial2_text': '회사를 통해 단체 검진을 받았는데, 결과지를 제 나라 말로 읽을 수 있어서 정말 안심됐습니다.',
            'testimonial2_author': 'Li Wei', 'testimonial2_type': '중국 기업 고객',
            'testimonial3_text': '언어 때문에 검진을 미루고 있었는데, CHECKIT 덕분에 제 건강 상태를 정확히 알게 되었습니다.',
            'testimonial3_author': 'John Doe', 'testimonial3_type': '영어권 개인 고객',
            'contact_title_new': '궁금한 점이 있으신가요?',
            'contact_subtitle_new': 'CHECKIT의 전문가 팀이 최적의 솔루션을 제안해 드립니다.',
            'contact_form_email_label': '이메일 주소', 'contact_form_email_placeholder': '이메일을 입력하세요',
            'contact_form_phone_label': '전화번호', 'contact_form_phone_placeholder': '전화번호를 입력하세요',
            'contact_form_message_label': '문의 내용', 'contact_form_message_placeholder': '문의하실 내용을 입력하세요',
            'contact_form_submit_button': '문의하기',
            'chatbot_header': 'CHECKIT 고객센터', 'chatbot_placeholder': '궁금한 점을 물어보세요...',
            'corporate_page_title': '기업 고객 토탈 솔루션',
            'corporate_page_subtitle': '외국인 근로자의 건강을 체계적으로 관리하여, 기업의 생산성을 높이고 보건 관리 부담을 덜어드립니다.',
            'view_workflow': '실무과정 보기',
            'corp_sec1_title': '외국인 근로자, 이제 선택이 아닌 필수입니다',
            'corp_sec1_subtitle': '변화하는 산업 현장, 기업의 지속 가능한 성장을 위해 외국인 인력 확보와 관리는 가장 중요한 과제가 되었습니다.',
            'individual_page_title': '개인 고객 서비스',
            'individual_page_subtitle': '복잡한 건강검진, 이제 모국어로 편안하게 받으세요.',
            'expectation_title': '한국 의료, 기대와 현실의 차이',
            'reality_title': '하지만 현실은 다릅니다',
            'solution_title': 'CHECKIT 솔루션',
            'solution_subtitle': '어려운 과정은 저희가 맡겠습니다. 당신은 건강만 생각하세요.'
        },
        en: {
            'nav_home': 'Home', 'hero_cta': 'Apply Now', 'learn_more': 'Learn More',
            'platform_title': 'CHECKIT PLATFORM', 'platform_status_title': 'My Service Status',
            'platform_close': 'Close', 'contact_success': 'Inquiry submitted successfully!',
            'admin_title': 'Manager Dashboard', 'onboarding_title': 'Complete Your Profile',
            'chatbot_manager_btn': 'Chat with Manager',
            'nav_mypage': 'My Page', 'nav_login': 'Login', 'nav_logout': 'Logout',
            'hero_title': 'Specialized Health Check-up Booking for Foreigners',
            'hero_subtitle': 'Complex Korean hospital bookings and check-ups, CHECKIT helps you perfectly in your native language.',
            'service_for_title': 'Who is this service for?',
            'individual_title': 'Individual Clients',
            'corporate_title': 'Corporate Clients',
            'why_us_title': 'Why CHECKIT?',
            'process_title': 'Service Process',
            'testimonials_title': 'Testimonials',
            'contact_title_new': 'Any Questions?',
            'contact_form_submit_button': 'Submit',
            'chatbot_header': 'CHECKIT Help Center', 'chatbot_placeholder': 'Ask any questions...',
            'corporate_page_title': 'Total Solutions for Corporate',
            'corporate_page_subtitle': 'Systematically manage the health of foreign workers to increase productivity.',
            'individual_page_title': 'Individual Client Services',
            'individual_page_subtitle': 'Complex health check-ups, now receive them comfortably in your native language.',
            'expectation_title': 'Korean Healthcare: Expectation vs. Reality',
            'reality_title': 'But the reality is different',
            'solution_title': 'CHECKIT Solution'
        },
        cn: {
            'nav_home': '首页', 'hero_cta': '立即申请', 'learn_more': '了解更多',
            'platform_title': 'CHECKIT 平台', 'platform_status_title': '我的服务状态',
            'platform_close': '关闭', 'contact_success': '咨询已成功提交！',
            'admin_title': '经理管理后台', 'onboarding_title': '完善个人资料',
            'chatbot_manager_btn': '与经理聊天',
            'nav_mypage': '我的页面', 'nav_login': '登录', 'nav_logout': '登出',
            'hero_title': '面向外国人的专业健康检查预约服务',
            'hero_subtitle': '复杂的韩国医院预约和健康检查，CHECKIT 用您的母语为您提供完美帮助。',
            'service_for_title': '该服务面向谁？',
            'individual_title': '个人客户',
            'corporate_title': '企业客户',
            'why_us_title': '为什么选择 CHECKIT？',
            'process_title': '服务流程',
            'testimonials_title': '客户评价',
            'contact_title_new': '有什么疑问吗？',
            'contact_form_submit_button': '提交咨询',
            'chatbot_header': 'CHECKIT 帮助中心', 'chatbot_placeholder': '请问有什么可以帮您...',
            'corporate_page_title': '企业客户整体解决方案',
            'individual_page_title': '个人客户服务',
            'expectation_title': '韩国医疗：期待与现实',
            'reality_title': '但现实并非如此',
            'solution_title': 'CHECKIT 解决方案'
        },
        vn: {
            'nav_home': 'Trang chủ', 'hero_cta': 'Đăng ký ngay', 'learn_more': 'Xem thêm',
            'platform_title': 'Nền tảng CHECKIT', 'platform_status_title': 'Trạng thái dịch vụ',
            'platform_close': 'Đóng', 'contact_success': 'Yêu cầu đã được gửi thành công!',
            'admin_title': 'Bảng điều khiển quản lý', 'onboarding_title': 'Hoàn thiện hồ sơ',
            'chatbot_manager_btn': 'Chat với quản lý',
            'nav_mypage': 'Trang của tôi', 'nav_login': 'Đăng nhập', 'nav_logout': 'Đăng xuất',
            'hero_title': 'Dịch vụ đặt lịch khám sức khỏe chuyên nghiệp cho người nước ngoài',
            'hero_subtitle': 'Đặt lịch bệnh viện and khám sức khỏe tại Hàn Quốc không còn khó khăn, CHECKIT hỗ trợ bạn hoàn hảo bằng tiếng mẹ đẻ.',
            'service_for_title': 'Dịch vụ này dành cho ai?',
            'individual_title': 'Khách hàng cá nhân',
            'corporate_title': 'Khách hàng doanh nghiệp',
            'why_us_title': 'Tại sao chọn CHECKIT?',
            'process_title': 'Quy trình dịch vụ',
            'testimonials_title': 'Đánh giá của khách hàng',
            'contact_title_new': 'Bạn có thắc mắc?',
            'contact_form_submit_button': 'Gửi yêu cầu',
            'chatbot_header': 'Trung tâm hỗ trợ CHECKIT', 'chatbot_placeholder': 'Hãy đặt câu hỏi...',
            'corporate_page_title': 'Giải pháp tổng thể cho doanh nghiệp',
            'individual_page_title': 'Dịch vụ khách hàng cá nhân',
            'expectation_title': 'Y tế Hàn Quốc: Kỳ vọng and Thực tế',
            'reality_title': 'Nhưng thực tế lại khác',
            'solution_title': 'Giải pháp CHECKIT'
        }
    };

    let currentLang = 'ko';
    const switchLanguage = (newLang) => {
        currentLang = newLang;
        document.documentElement.lang = newLang;
        const data = translations[newLang] || translations['ko'];
        document.querySelectorAll('[data-lang-key]').forEach(el => {
            const key = el.getAttribute('data-lang-key');
            if (data[key]) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.placeholder = data[key];
                else el.innerHTML = data[key];
            }
        });
        document.querySelectorAll('#language-switcher .lang-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === newLang));
        
        const authBtn = document.getElementById('platform-auth-btn');
        if (authBtn) {
            const user = firebase.auth().currentUser;
            if (user) authBtn.textContent = data['nav_mypage'] || 'My Page';
            else authBtn.textContent = data['nav_login'] || 'Login';
        }
        const logoutBtn = document.getElementById('logout-btn');
        if (logoutBtn) logoutBtn.textContent = data['nav_logout'] || 'Logout';
    };
    window.changeLanguage = switchLanguage;

    const initLangSwitch = () => {
        document.querySelectorAll('#language-switcher .lang-btn').forEach(btn => {
            btn.onclick = () => switchLanguage(btn.dataset.lang);
        });
        switchLanguage('ko'); 
    };
    initLangSwitch();

    // --- Firebase Setup ---
    const firebaseConfig = {
        apiKey: "AIzaSyDAdW_vJHUHuDaun2Kh94uC8ywlfOdyPco",
        authDomain: "checkit-43341.firebaseapp.com",
        projectId: "checkit-43341",
        storageBucket: "checkit-43341.firebasestorage.app",
        messagingSenderId: "818434232492",
        appId: "1:818434232492:web:713836b01fc11196150f09",
        measurementId: "G-WVDWXTJ1TR"
    };

    if (typeof firebase !== 'undefined') {
        if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
        const auth = firebase.auth(), db = firebase.firestore(), storage = firebase.storage();

        db.enablePersistence({ synchronizeTabs: true }).catch(err => console.error("Persistence fail:", err.code));

        let platformSub = null, chatSub = null, filesSub = null, leadsSub = null, statsSub = null;

        const renderMyPage = async (user) => {
            const overlay = document.getElementById('mypage-overlay');
            if(!overlay) return;
            
            overlay.style.display = 'flex';
            document.body.classList.add('platform-view-active');
            overlay.innerHTML = '<div class="mypage-header"><h2>Loading...</h2></div>';
            
            try {
                const uSnap = await db.collection("users").doc(user.uid).get();
                const userData = uSnap.data();
                
                if (userData) {
                    if (userData.role === 'super_admin') renderAdmin(user);
                    else if (userData.role === 'company_admin') renderCorporate(user, userData.companyId);
                    else renderUser(user);
                } else {
                    showOnboardingModal(user);
                }
            } catch (err) {
                renderUser(user);
            }
        };

        const renderCorporate = (user, companyId) => {
            const overlay = document.getElementById('mypage-overlay');
            overlay.innerHTML = `
                <div class="mypage-header">
                    <h2>Corporate Portal: ${companyId}</h2>
                    <div style="display:flex; gap:10px;">
                        <button class="btn-export" id="btn-csv-export"><i class="fas fa-download"></i> 리포트 다운로드 (CSV)</button>
                        <button id="close-mypage" class="lang-btn">Close</button>
                    </div>
                </div>
                <div class="container" style="padding:40px 0;">
                    <div id="corp-stats-container" class="corp-stats-grid"></div>
                    <div class="corp-filter-bar">
                        <input type="text" id="corp-search" class="corp-search" placeholder="직원 성명 또는 현장 검색...">
                        <select id="corp-site-filter" class="corp-select"><option value="all">모든 현장</option></select>
                        <select id="corp-status-filter" class="corp-select">
                            <option value="all">전체 상태</option>
                            <option value="pending">pending</option>
                            <option value="reserved">reserved</option>
                            <option value="completed">completed</option>
                            <option value="expired">expired</option>
                        </select>
                    </div>
                    <div class="info-panel">
                        <h3 id="site-display-title">직원 검진 관리 명단</h3>
                        <div class="admin-table-container">
                            <table class="admin-table">
                                <thead><tr><th>성명</th><th>현장</th><th>예약 기간</th><th>검진 기간</th><th>병원 / 타입</th><th>지원금</th><th>상태</th><th>최종 업데이트</th></tr></thead>
                                <tbody id="corp-list"></tbody>
                            </table>
                        </div>
                    </div>
                </div>`;

            document.getElementById('close-mypage').onclick = () => { overlay.style.display='none'; document.body.classList.remove('platform-view-active'); clearSubs(); };
            
            const listEl = document.getElementById('corp-list'), statsEl = document.getElementById('corp-stats-container'), searchInp = document.getElementById('corp-search'), siteFilt = document.getElementById('corp-site-filter'), statusFilt = document.getElementById('corp-status-filter'), exportBtn = document.getElementById('btn-csv-export'), siteTitle = document.getElementById('site-display-title');
            let allData = [], availableSites = new Set();

            const formatDate = (ts) => { if(!ts) return '-'; const date = ts.seconds ? new Date(ts.seconds * 1000) : new Date(ts); return date.toISOString().split('T')[0]; };

            const renderUI = () => {
                const search = searchInp.value.toLowerCase(), status = statusFilt.value, siteId = siteFilt.value;
                const filtered = allData.filter(d => {
                    const matchesSearch = !search || d.name?.toLowerCase().includes(search) || d.site?.toLowerCase().includes(search);
                    const matchesStatus = status === 'all' || d.status === status;
                    const matchesSite = siteId === 'all' || d.site === siteId;
                    return matchesSearch && matchesStatus && matchesSite;
                });
                siteTitle.textContent = `검진 관리 명단 (${siteId === 'all' ? '전체 현장' : siteId})`;
                listEl.innerHTML = filtered.map(d => `<tr>
                    <td><strong>${d.name || 'Unknown'}</strong></td>
                    <td><small>${d.site || '-'}</small></td>
                    <td><small>${formatDate(d.reservationStart)} ~ ${formatDate(d.reservationEnd)}</small></td>
                    <td><small>${formatDate(d.examStart)} ~ ${formatDate(d.examEnd)}</small></td>
                    <td><div>${d.hospital || '-'}</div><small style="color:var(--text-light)">${d.examType || '-'}</small></td>
                    <td>${d.supportAmount ? '₩' + Number(d.supportAmount).toLocaleString() : '-'}</td>
                    <td><span class="status-pill ${d.status || 'pending'}">${d.status || 'pending'}</span></td>
                    <td><small>${formatDate(d.updatedAt)}</small></td>
                </tr>`).join('');

                const stats = { pending: 0, reserved: 0, completed: 0, expired: 0 };
                const statsSource = siteId === 'all' ? allData : allData.filter(d => d.site === siteId);
                statsSource.forEach(d => { if(stats.hasOwnProperty(d.status)) stats[d.status]++; });
                statsEl.innerHTML = `<div class="corp-stat-card"><span class="corp-stat-val">${statsSource.length}</span><span class="corp-stat-label">전체 대상</span></div>
                    <div class="corp-stat-card pending"><span class="corp-stat-val">${stats.pending}</span><span class="corp-stat-label">대기</span></div>
                    <div class="corp-stat-card reserved"><span class="corp-stat-val">${stats.reserved}</span><span class="corp-stat-label">예약</span></div>
                    <div class="corp-stat-card completed"><span class="corp-stat-val">${stats.completed}</span><span class="corp-stat-label">완료</span></div>
                    <div class="corp-stat-card expired"><span class="corp-stat-val">${stats.expired}</span><span class="corp-stat-label">만료</span></div>`;
            };

            const updateSiteFilter = () => {
                const currentSelection = siteFilt.value;
                siteFilt.innerHTML = '<option value="all">모든 현장</option>';
                Array.from(availableSites).sort().forEach(site => { const opt = document.createElement('option'); opt.value = site; opt.textContent = site; siteFilt.appendChild(opt); });
                siteFilt.value = availableSites.has(currentSelection) ? currentSelection : 'all';
            };

            searchInp.oninput = renderUI; statusFilt.onchange = renderUI; siteFilt.onchange = renderUI;
            exportBtn.onclick = () => {
                const headers = ["성명", "현장", "예약시작", "예약종료", "검진시작", "검진종료", "병원", "지원금액", "상태"];
                const rows = allData.map(d => [d.name, d.site, formatDate(d.reservationStart), formatDate(d.reservationEnd), formatDate(d.examStart), formatDate(d.examEnd), d.hospital, d.supportAmount, d.status]);
                let csvContent = "\uFEFF" + headers.join(",") + "\n" + rows.map(e => e.join(",")).join("\n");
                const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
                const link = document.createElement("a"); link.href = URL.createObjectURL(blob); link.setAttribute("download", `Checkit_Report_${companyId}.csv`); document.body.appendChild(link); link.click(); document.body.removeChild(link);
            };

            platformSub = db.collection("user_process").where("companyId", "==", companyId).onSnapshot(snap => {
                allData = snap.docs.map(doc => ({ uid: doc.id, ...doc.data() }));
                availableSites = new Set(); allData.forEach(d => { if(d.site) availableSites.add(d.site); });
                updateSiteFilter(); renderUI();
            });
        };

        const renderUser = (user) => {
            const overlay = document.getElementById('mypage-overlay');
            overlay.innerHTML = `<div class="mypage-header"><h2>CHECKIT PLATFORM</h2>
                <div style="display:flex; gap:10px;"><button class="lang-btn active" id="u-tab-status">Status</button><button id="close-mypage" class="lang-btn">Close</button></div></div>
                <div class="container" id="u-dynamic-view" style="padding:20px 0;"><div class="status-timeline" id="u-timeline"></div>
                <div class="platform-grid"><div class="info-panel" id="u-info"></div><div class="admin-chat-container"><div class="chat-header">1:1 Support</div><div class="chat-messages" id="u-msgs"></div>
                <div class="chat-input-area"><input type="text" id="u-input" placeholder="Type message..."><button id="u-send" class="lang-btn active">Send</button></div></div></div></div>`;
            document.getElementById('close-mypage').onclick = () => { overlay.style.display='none'; document.body.classList.remove('platform-view-active'); clearSubs(); };
            
            if(platformSub) platformSub();
            platformSub = db.collection("user_process").doc(user.uid).onSnapshot(doc => {
                const data = doc.data() || { steps: [{ title: 'Applied', status: 'active', icon: 'fas fa-file-signature' }, { title: 'Booking', status: 'pending', icon: 'fas fa-calendar-check' }, { title: 'Check-up', status: 'pending', icon: 'fas fa-hospital-user' }, { title: 'Result', status: 'pending', icon: 'fas fa-poll-h' }]};
                document.getElementById('u-timeline').innerHTML = data.steps.map((s, i) => `<div class="status-step ${s.status}"><i class="${s.icon}"></i><span>${s.title}</span></div>`).join('');
                const active = data.steps.find(s => s.status === 'active') || data.steps[0];
                document.getElementById('u-info').innerHTML = `<h3>Current Status</h3><div style="margin-top:20px; padding:20px; background:var(--hero-bg-color); border-radius:12px; border-left:5px solid var(--primary-color);"><h4>${active.title}</h4><p>당신의 건강검진이 ${active.title} 단계에 있습니다.</p></div>`;
            });
            setupChat(user.uid, 'u-msgs', 'u-input', 'u-send', 'user');
        };

        const renderAdmin = (admin) => { /* Super Admin View (Existing logic) */ };
        const setupChat = (uid, msgsId, inpId, sendId, sender) => {
            if(chatSub) chatSub();
            chatSub = db.collection("user_process").doc(uid).collection("messages").orderBy("timestamp", "asc").onSnapshot(snap => {
                const el = document.getElementById(msgsId); if(!el) return; el.innerHTML = "";
                snap.forEach(m => {
                    const d = m.data(), time = d.timestamp ? new Date(d.timestamp.seconds*1000).toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'}) : "";
                    const div = document.createElement('div'); div.className = `message ${d.sender === sender ? 'user' : 'bot'}`;
                    div.innerHTML = `${d.text}<span class="msg-time">${time}</span>`; el.appendChild(div);
                });
                el.scrollTop = el.scrollHeight;
            });
            document.getElementById(sendId).onclick = async () => {
                const inp = document.getElementById(inpId);
                if(inp.value.trim()){ await db.collection("user_process").doc(uid).collection("messages").add({ text: inp.value.trim(), sender: sender, timestamp: firebase.firestore.FieldValue.serverTimestamp() }); inp.value = ""; }
            };
        };

        const clearSubs = () => { [platformSub, chatSub, leadsSub, statsSub].forEach(s => s && s()); };

        const showLoginModal = () => {
            if(document.getElementById('login-modal-overlay')) return;
            const modalHtml = `
                <div id="login-modal-overlay" style="display:flex;">
                    <div class="login-modal-box">
                        <button id="close-login-modal" style="position:absolute; top:15px; right:20px; background:none; border:none; font-size:24px; cursor:pointer; color:#aaa;">&times;</button>
                        <h2 class="modal-logo" style="margin-bottom:10px; color:var(--primary-color);">CHECKIT</h2>
                        <div class="platform-tabs" style="justify-content:center; margin-bottom:20px;">
                            <div class="p-tab active" id="tab-type-user">개인 고객</div>
                            <div class="p-tab" id="tab-type-corp">기업 관리자</div>
                            <div class="p-tab" id="tab-type-master">CHECKIT 관리자</div>
                        </div>
                        <p id="auth-tagline" class="modal-tagline" style="margin-bottom:20px; color:#666; font-size:0.9rem;">외국인 건강검진의 새로운 표준, 체킷</p>
                        <div id="key-field-container" style="display:none; margin-bottom:20px;">
                            <input type="text" id="global-admin-key" placeholder="보안 KEY 입력" style="padding:12px; border:2px solid var(--primary-color); border-radius:10px; width:100%; box-sizing:border-box; background:#fffcf0; font-size:0.85rem; text-align:center; font-weight:700;">
                        </div>
                        <div id="auth-main-view" class="auth-view" style="display:flex; flex-direction:column; gap:12px;">
                            <button id="btn-google-login" class="btn-auth btn-google" style="background:#fff; border:1px solid #ddd; padding:12px; border-radius:12px; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:10px; font-weight:600;">
                                <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" width="18"> Google로 계속하기
                            </button>
                            <div style="margin:10px 0; color:#eee; display:flex; align-items:center; gap:10px; font-size:0.8rem; font-weight:700;"><hr style="flex:1; border:none; border-top:1px solid #f0f0f0;"> 또는 <hr style="flex:1; border:none; border-top:1px solid #f0f0f0;"></div>
                            <button id="show-email-login" class="btn-auth btn-email" style="background:#f8f9fa; border:1px solid #eee; padding:12px; border-radius:12px; cursor:pointer; font-weight:600;"><i class="fas fa-envelope"></i> 이메일로 계속하기</button>
                        </div>
                        <div id="auth-email-view" class="auth-view" style="display:none; flex-direction:column; gap:15px;">
                            <div class="form-group-auth" style="display:flex; flex-direction:column; gap:10px;">
                                <input type="email" id="auth-email" placeholder="이메일 주소" style="padding:14px; border:1px solid #ddd; border-radius:10px; width:100%; box-sizing:border-box;">
                                <input type="password" id="auth-pass" placeholder="비밀번호" style="padding:14px; border:1px solid #ddd; border-radius:10px; width:100%; box-sizing:border-box;">
                            </div>
                            <button id="btn-email-action" class="btn-auth btn-primary" style="background:var(--primary-color); color:#fff; border:none; padding:14px; border-radius:12px; cursor:pointer; font-weight:700; font-size:1rem;">로그인</button>
                            <div class="auth-utils" style="margin-top:10px; display:flex; flex-direction:column; gap:12px; align-items:center;"><span id="toggle-auth-mode" style="font-size:0.85rem; color:var(--primary-color); cursor:pointer; font-weight:600; text-decoration:underline;">계정이 없으신가요? 회원가입</span><button id="btn-auth-back" style="background:none; border:none; color:#888; cursor:pointer; font-size:0.85rem;">&larr; 뒤로 가기</button></div>
                        </div>
                    </div>
                </div>`;
            document.body.insertAdjacentHTML('beforeend', modalHtml);

            const overlay = document.getElementById('login-modal-overlay'), keyContainer = document.getElementById('key-field-container'), keyInput = document.getElementById('global-admin-key');
            let selectedType = 'user';

            const updateTabs = (type) => {
                selectedType = type; document.querySelectorAll('.p-tab').forEach(t => t.classList.remove('active'));
                if(type === 'user') { document.getElementById('tab-type-user').classList.add('active'); keyContainer.style.display = 'none'; }
                else { document.getElementById(`tab-type-${type}`).classList.add('active'); keyContainer.style.display = 'block'; keyInput.placeholder = type === 'corp' ? "기업 보안 KEY (COMP_아이디)" : "CHECKIT 마스터 KEY 입력"; }
            };
            document.getElementById('tab-type-user').onclick = () => updateTabs('user');
            document.getElementById('tab-type-corp').onclick = () => updateTabs('corp');
            document.getElementById('tab-type-master').onclick = () => updateTabs('master');

            const finalizeAuth = (user) => { overlay.remove(); renderMyPage(user); };
            const showSuccessState = (title, subtitle, user) => {
                const box = document.querySelector('.login-modal-box'); if(!box) return finalizeAuth(user);
                box.innerHTML = `<div style="padding: 20px 0; animation: fadeIn 0.5s ease-out;"><div style="width: 80px; height: 80px; background: #e8f5e9; color: var(--primary-color); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 25px; font-size: 40px;"><i class="fas fa-check"></i></div><h2 class="modal-logo" style="color: #333;">${title}</h2><p style="color: #666; margin-bottom: 0;">${subtitle}</p></div>`;
                setTimeout(() => finalizeAuth(user), 650);
            };

            const handleAdminPromotion = async (user, key) => {
                if (selectedType === 'master' && key === "CHECKIT_MASTER_2026") { await db.collection("users").doc(user.uid).set({ role: "super_admin" }, { merge: true }); showSuccessState("Master Verified", "마스터 대시보드로 진입합니다.", user); return true; }
                if (selectedType === 'corp' && key.startsWith("COMP_")) { const cid = key.replace("COMP_", ""); if (!cid) { alert("기업 코드를 입력해주세요."); await auth.signOut(); return false; } await db.collection("users").doc(user.uid).set({ role: "company_admin", companyId: cid }, { merge: true }); showSuccessState("Corporate Verified", `${cid} 기업 포털로 진입합니다.`, user); return true; }
                if (selectedType === 'user') { await db.collection("users").doc(user.uid).set({ role: "user" }, { merge: true }); showSuccessState("반갑습니다!", "체킷 플랫폼에 접속합니다.", user); return true; }
                alert("입력하신 보안 KEY가 일치하지 않습니다."); await auth.signOut(); return false;
            };

            document.getElementById('close-login-modal').onclick = () => overlay.remove();
            document.getElementById('btn-google-login').onclick = async () => { try { const result = await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()); await handleAdminPromotion(result.user, keyInput.value.trim()); } catch (err) { console.error(err); }};
            document.getElementById('show-email-login').onclick = () => { document.getElementById('auth-main-view').style.display = 'none'; document.getElementById('auth-email-view').style.display = 'flex'; };
            document.getElementById('btn-auth-back').onclick = () => { document.getElementById('auth-email-view').style.display = 'none'; document.getElementById('auth-main-view').style.display = 'flex'; };
            
            let isSignUp = false;
            document.getElementById('toggle-auth-mode').onclick = () => { isSignUp = !isSignUp; document.getElementById('btn-email-action').textContent = isSignUp ? '회원가입' : '로그인'; document.getElementById('toggle-auth-mode').textContent = isSignUp ? '이미 계정이 있으신가요? 로그인' : '계정이 없으신가요? 회원가입'; };
            document.getElementById('btn-email-action').onclick = async () => {
                const email = document.getElementById('auth-email').value.trim(), pass = document.getElementById('auth-pass').value, key = keyInput.value.trim();
                if(!email || !pass) return alert("이메일과 비밀번호를 입력해주세요.");
                const btn = document.getElementById('btn-email-action'); btn.disabled = true; btn.textContent = isSignUp ? '가입 중...' : '로그인 중...';
                try {
                    if(isSignUp) { const result = await auth.createUserWithEmailAndPassword(email, pass); await db.collection("users").doc(result.user.uid).set({ role: "user", email: email }, { merge: true }); showSuccessState("가입 환영합니다!", "성공적으로 계정이 생성되었습니다.", result.user); }
                    else { const result = await auth.signInWithEmailAndPassword(email, pass); await handleAdminPromotion(result.user, key); }
                } catch (err) { alert("오류: " + err.message); btn.disabled = false; btn.textContent = isSignUp ? '회원가입' : '로그인'; }
            };
        };

        const initAuthNav = () => {
            const nav = document.querySelector('#language-switcher');
            let btn = document.getElementById('platform-auth-btn') || document.createElement('button');
            if(!btn.id) { btn.id='platform-auth-btn'; btn.className='lang-btn auth-main-btn'; nav.appendChild(btn); }
            auth.onAuthStateChanged(user => {
                if(user){ btn.textContent = 'My Page'; btn.onclick = () => renderMyPage(user); if(!document.getElementById('logout-btn')){ const lo = document.createElement('button'); lo.id='logout-btn'; lo.className='lang-btn logout-btn'; lo.textContent='Logout'; lo.onclick = () => auth.signOut().then(() => location.reload()); nav.appendChild(lo); }}
                else { btn.textContent = 'Login'; btn.onclick = () => showLoginModal(); document.getElementById('logout-btn')?.remove(); }
            });
        };
        initAuthNav();
    }

    const initB2B = () => {
        const open = document.getElementById('openProcessSlide'), modal = document.getElementById('processModal');
        if (!open || !modal) return;
        const img = document.getElementById('processImage'), ind = document.getElementById('indicator'), next = document.getElementById('nextBtn'), prev = document.getElementById('prevBtn');
        const imgs = Array.from({length:18}, (_,i) => `assets/process_${(i+1).toString().padStart(2,'0')}.png`);
        let cur = 0;
        const up = () => { if(img) img.src = imgs[cur]; if(ind) ind.innerText = `${cur+1}/18`; prev.disabled = cur===0; next.disabled = cur===17; };
        open.onclick = (e) => { e.preventDefault(); modal.style.display='flex'; up(); };
        document.getElementById('closeProcess').onclick = () => modal.style.display='none';
        next.onclick = () => { if(cur<17) { cur++; up(); } };
        prev.onclick = () => { if(cur>0) { cur--; up(); } };
    };
    initB2B();
});