const fs = require('fs');

const mainJsPath = 'C:/Users/pc/.gemini/antigravity/scratch/-1-new/main.js';
let mainJs = fs.readFileSync(mainJsPath, 'utf8');

const newBlogData = `const BLOG_SEED_DATA = [
    {
        id: 'post-1',
        title: '불투명한 수수료를 없앤 CHECKIT의 투명한 결제 구조',
        category: '체킷소식',
        thumbnail: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=600&q=80',
        summary: '병원 결제와 CHECKIT 서비스 이용료를 처음부터 100% 분리합니다. 어떠한 경우에도 병원 비용 안에 중개 수수료가 숨겨져 있지 않습니다.',
        content: \`<p>외국인이 한국 병원을 이용할 때 가장 우려하는 것은 '가격 부풀리기'입니다. CHECKIT은 의료 중개나 알선 업체가 아니기 때문에, 환자를 병원에 소개하고 뒷돈(리베이트)을 받는 구조를 철저히 배격합니다.</p><p>CHECKIT은 행정/번역 인프라를 제공하는 SaaS(소프트웨어) 및 컨시어지 서비스입니다. 따라서 병원에 지불하는 진료비는 한국인과 동일한 100% 투명한 정찰제로 고객이 직접 결제하며, CHECKIT에는 오직 시스템 이용 및 행정 지원 수수료만 지불하게 됩니다.</p><p>신뢰는 투명한 영수증에서 시작됩니다. 저희는 고객의 비용과 건강을 담보로 타협하지 않습니다.</p>\`,
        author: 'CHECKIT',
        createdAt: '2025.05.25'
    },
    {
        id: 'post-2',
        title: '단순 통역이 아닌, 검진 전 과정을 관리하는 비의료 행정 지원',
        category: '체킷소식',
        thumbnail: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=600&q=80',
        summary: '예약 확정부터 검진 당일까지, 복용 시간표, 식단 제한, 제출 서류, 이동 동선까지 모국어로 정리한 문서를 제공합니다.',
        content: \`<p>한국 건강검진을 처음 예약했을 때, 대장내시경 전 준비 약품의 복용법과 전날 식이 제한 지침이 한국어로만 제공되어 완전히 막막한 경우가 많습니다. 번역 앱을 사용해봐도 의학 용어가 섞여 있어 불안하기 마련입니다.</p><p>CHECKIT의 비의료 행정 전담 지원은 다릅니다. 예약이 확정된 순간부터 검진 당일까지, 복용 시간표, 식단 제한 항목, 병원 도착 시 제출해야 할 서류, 검사 당일 이동 동선까지 — 모든 내용을 제 모국어로 정리한 문서로 제공합니다.</p><p>언어가 통하는 것을 넘어, 완전히 준비된 상태로 검진에 임할 수 있도록 완벽한 행정 가이드를 제공하는 것 — 그것이 CHECKIT 서비스의 핵심입니다.</p>\`,
        author: 'CHECKIT',
        createdAt: '2025.05.20'
    },
    {
        id: 'post-3',
        title: '한국어 결과지, 이제 모국어로 그대로 읽는다',
        category: '건강정보',
        thumbnail: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=600&q=80',
        summary: '원본 결과지의 내용을 모국어로 번역한 문서와 국제 표준 질병 코드(ICD-10)를 함께 제공합니다.',
        content: \`<p>건강검진이 끝나고 두꺼운 한국어 결과지를 받았을 때의 막막함을 해결해 드립니다. CHECKIT은 병원이 발행한 원본 결과지의 내용을 고객의 모국어로 정교하게 번역한 문서를 제공합니다.</p><p>단순 번역을 넘어 각 검사 항목과 결과에 해당하는 국제 표준 질병 코드(ICD-10/KCD)를 함께 맵핑하여 제공합니다. 이를 통해 본국으로 돌아가 주치의와 상담할 때 언어의 장벽 없이 정확한 의학적 소통이 가능해집니다.</p><p>의료적 판단은 전문의에게 맡기고, CHECKIT은 그 과정에 필요한 완벽한 언어 및 서류 지원만을 전문적으로 수행합니다.</p>\`,
        author: 'CHECKIT',
        createdAt: '2025.05.15'
    },
    {
        id: 'post-4',
        title: '영문 영수증과 CD, 검진확인서 — 복잡한 서류 발급의 자동화',
        category: '건강정보',
        thumbnail: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80',
        summary: '검진 당일 현장에서 요청해야 하는 보험 청구용 영문 영수증과 영상 CD 발급을 사전에 셋팅합니다.',
        content: \`<p>건강검진을 마친 뒤 본국 보험사에 청구할 영문 영수증이나 후속 진료를 위한 영상 CD, 검진확인서가 필요한 경우가 많습니다. 문제는 이를 검진이 끝난 후 뒤늦게 요청하면 발급이 매우 번거롭다는 점입니다.</p><p>CHECKIT 시스템은 예약 단계에서 고객이 필요로 하는 행정 서류를 미리 체크받습니다. 검진 당일 현장에서 매끄럽게 서류가 발급될 수 있도록 병원 원무과에 사전 요청을 완료해 둡니다.</p><p>출국 전 필요한 모든 서류를 빠짐없이 챙겨가실 수 있도록 돕는 빈틈없는 행정 서비스입니다.</p>\`,
        author: 'CHECKIT',
        createdAt: '2025.05.10'
    },
    {
        id: 'post-5',
        title: '외국인 고객을 위한 검진 전 문진표 다국어 사전 작성 시스템',
        category: '체킷소식',
        thumbnail: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=600&q=80',
        summary: '병원 현장에서 작성하기 까다로운 한국어 문진표를 CHECKIT 플랫폼에서 모국어로 미리 작성할 수 있습니다.',
        content: \`<p>건강검진의 첫 관문인 '문진표 작성'은 과거 병력, 가족력, 생활 습관 등을 묻기 때문에 매우 정밀한 답변이 요구됩니다. 병원 현장에서 수십 장의 한국어 문진표를 번역기를 돌려가며 작성하는 것은 엄청난 스트레스입니다.</p><p>CHECKIT은 이 과정을 100% 디지털화 및 다국어화했습니다. 고객은 병원 방문 전, 편안하게 자신의 모국어로 온라인 문진표를 작성합니다.</p><p>작성된 데이터는 한국어로 자동 번역되어 병원 시스템에 전달되며, 현장에서의 대기 시간과 오류를 획기적으로 줄여줍니다.</p>\`,
        author: 'CHECKIT',
        createdAt: '2025.05.05'
    },
    {
        id: 'post-6',
        title: '예약 확정 알림부터 당일 D-day 안내까지, 100% 모국어 지원',
        category: '체킷소식',
        thumbnail: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=600&q=80',
        summary: '예약 확정 후 모국어 알림 발송, D-day 준비사항 안내를 카카오톡, 이메일 또는 WhatsApp으로 제공합니다.',
        content: \`<p>검진 예약이 완료된 뒤 가장 불안한 것은 커뮤니케이션의 부재입니다. CHECKIT은 예약 확정 즉시 고객의 모국어로 된 상세 확인 알림을 발송합니다.</p><p>또한 검진 3일 전, 1일 전, 당일 아침에 각각 필요한 준비사항(금식 여부, 채변 요령 등)과 일정을 다시 한번 정리한 D-day 리마인더를 발송합니다.</p><p>병원과의 모든 복잡한 연락과 확인은 CHECKIT이 대신하며, 고객은 편안하게 모국어 안내만 따라오시면 됩니다.</p>\`,
        author: 'CHECKIT',
        createdAt: '2025.04.28'
    },
    {
        id: 'post-7',
        title: '금식부터 식단 조절까지 — 내시경 검사 전 행정 가이드',
        category: '건강정보',
        thumbnail: 'https://images.unsplash.com/photo-1498837167922-41c543085fe9?auto=format&fit=crop&w=600&q=80',
        summary: '검진 항목별로 엄격하게 지켜야 하는 금식 시간과 전날 식단 가이드를 알기 쉽게 안내합니다.',
        content: \`<p>수면 내시경이나 정밀 초음파 검사가 포함된 경우, 금식은 검사 결과의 정확도를 좌우하는 가장 중요한 요소입니다. 하지만 외국인의 입장에서 한국식 식재료 기준의 식단 조절 가이드는 이해하기 어려울 수 있습니다.</p><p>CHECKIT은 단순 번역이 아닌, 외국인이 직관적으로 이해할 수 있는 글로벌 식재료 기준의 '금식 및 식이 제한 가이드라인'을 제공합니다.</p><p>무엇을 먹어도 되고 무엇을 피해야 하는지 시각적인 자료와 함께 모국어로 안내하여, 검진 당일 재검사를 받아야 하는 불상사를 미연에 방지합니다.</p>\`,
        author: 'CHECKIT',
        createdAt: '2025.04.20'
    },
    {
        id: 'post-8',
        title: '체킷 이용 고객 후기: "의료 중개 없이 투명해서 믿을 수 있었습니다"',
        category: '고객후기',
        thumbnail: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80',
        summary: '미국에서 온 Michael 고객의 투명한 행정 시스템 이용 후기를 공유합니다.',
        content: \`<p>"예전에 다른 에이전시를 이용했을 때는 검진 비용이 터무니없이 비쌌고, 수수료가 얼마인지 알려주지도 않았습니다. 하지만 CHECKIT은 병원 공식 웹사이트에 나온 정가 그대로 결제하게 해주었고, 자신들의 행정 서비스 비용만 따로 청구했습니다."</p><p>"의료 관광을 알선하는 브로커가 아니라, 제가 주도적으로 병원을 선택하고 그 행정 절차만 도와주는 순수한 비서 서비스 같아서 무척 신뢰가 갔습니다. 번역된 서류의 퀄리티도 훌륭했습니다."</p>\`,
        author: 'Michael T.',
        createdAt: '2025.04.15'
    },
    {
        id: 'post-9',
        title: '수면 내시경 검사 후 보호자 규정 및 행정 절차 안내',
        category: '건강정보',
        thumbnail: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=600&q=80',
        summary: '한국 병원들의 수면 내시경 보호자 동반 규정과 퇴원 후 안전 수칙에 대한 행정 안내입니다.',
        content: \`<p>한국의 종합 병원에서 수면 내시경을 받을 때, 많은 병원이 안전을 위해 보호자 동반을 강제하거나 서면 동의서를 요구합니다. 홀로 방문하는 외국인의 경우 이 규정을 현장에서 알게 되어 당황하는 경우가 많습니다.</p><p>CHECKIT은 예약 진행 전 해당 병원의 보호자 규정을 명확히 안내하고, 보호자 동반이 어려운 고객을 위해 규정이 유연한 병원을 안내하거나 필수 면책 동의서 작성을 사전 지원합니다.</p><p>모든 행정적 변수를 미리 통제하여 당일 접수 거부를 완벽하게 예방합니다.</p>\`,
        author: 'CHECKIT',
        createdAt: '2025.04.10'
    },
    {
        id: 'post-10',
        title: '해외 보험 청구를 위한 의무기록 사본 발급 대행 안내',
        category: '한국생활',
        thumbnail: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80',
        summary: '본국 보험사에 청구할 필수 서류들을 위임장을 통해 대신 발급받는 절차를 소개합니다.',
        content: \`<p>한국에서 검진을 받은 후 출국해버렸는데, 본국 보험사에서 추가적인 상세 의무기록 사본이나 의사 소견서를 요구할 때가 있습니다. 직접 병원을 방문할 수 없는 외국인에게는 청천벽력 같은 일입니다.</p><p>CHECKIT 플랫폼을 통해 사전에 적법한 위임장 서류 행정을 갖추면, 추후 필요한 추가 서류 발급을 원격으로 지원받을 수 있습니다. 의료법을 준수하는 범위 내에서 철저한 비의료 행정 서비스를 제공하여 사후 관리까지 책임집니다.</p>\`,
        author: 'CHECKIT',
        createdAt: '2025.04.05'
    },
    {
        id: 'post-11',
        title: '체킷 고객 후기: "병원에서의 대기 시간과 혼란이 사라졌습니다"',
        category: '고객후기',
        thumbnail: 'https://images.unsplash.com/photo-1527613426401-41c9eeea4ab6?auto=format&fit=crop&w=600&q=80',
        summary: '일본에서 방문한 Yuka 고객의 행정 지원 서비스 만족 후기입니다.',
        content: \`<p>"한국어를 전혀 못 해서 대학병원 검진 센터에 갔을 때 미아가 될까 봐 두려웠습니다. 하지만 CHECKIT이 제공해 준 '검사 동선 가이드'와 '다국어 질문 카드' 덕분에 스마트폰만 보고도 모든 검사장을 스스로 찾아갈 수 있었습니다."</p><p>"특히 간호사가 하는 일반적인 질문(금식하셨나요?, 알레르기 있나요?)에 대한 모범 답안이 미리 번역되어 있어서 보여주기만 하면 끝났습니다. 완벽한 행정 가이드 덕분에 스트레스 제로였습니다."</p>\`,
        author: 'Yuka S.',
        createdAt: '2025.04.01'
    },
    {
        id: 'post-12',
        title: '여권 이름과 예약 이름 불일치 방지를 위한 실명 검증 시스템',
        category: '체킷소식',
        thumbnail: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80',
        summary: '병원 전산망과 외국인 여권 이름의 띄어쓰기, 스펠링 불일치로 인한 접수 오류를 방지합니다.',
        content: \`<p>한국 병원 시스템은 영문 이름의 띄어쓰기나 순서(First Name, Last Name)가 여권과 단 한 글자만 달라도 본인 인증을 거부하는 경우가 많습니다.</p><p>CHECKIT은 회원가입 및 예약 단계에서 여권 OCR 시스템 또는 엄격한 실명 검증 양식을 통해 병원 전산과 100% 일치하는 데이터만을 전송합니다.</p><p>사소해 보이지만 가장 빈번하게 발생하는 현장 접수 오류를 원천 차단하는 CHECKIT만의 디테일한 행정 기술입니다.</p>\`,
        author: 'CHECKIT',
        createdAt: '2025.03.25'
    },
    {
        id: 'post-13',
        title: '한국 건강검진센터의 종류와 차이점 요약',
        category: '건강정보',
        thumbnail: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80',
        summary: '대학병원, 종합검진센터, 전문클리닉의 차이점과 서류 처리 방식을 객관적으로 비교합니다.',
        content: \`<p>외국인이 한국 건강검진을 예약할 때 가장 많이 묻는 질문은 대학병원과 전문 종합검진센터의 차이입니다. CHECKIT은 특정 병원을 영업하거나 중개하지 않으므로, 철저히 객관적인 관점에서 시스템적 차이를 안내합니다.</p><p>대학병원은 중증 질환 발견 시 연계 치료가 수월하지만 예약 대기가 길며, 전문 검진센터는 최신 장비와 쾌적한 시설을 자랑하며 검사 동선이 빠릅니다. 고객은 객관적인 비교 데이터를 바탕으로 자신의 일정과 필요에 맞는 병원을 스스로 결정할 수 있습니다.</p>\`,
        author: 'CHECKIT',
        createdAt: '2025.03.20'
    },
    {
        id: 'post-14',
        title: '결과지에 등장하는 KCD 코드가 무엇인가요?',
        category: '한국생활',
        thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80',
        summary: '한국표준질병사인분류(KCD)와 글로벌 ICD-10 코드의 차이와 행정적 호환성을 안내합니다.',
        content: \`<p>한국 병원에서 발행된 결과지에는 종종 영문 의학 용어 대신 KCD(한국표준질병사인분류) 코드가 기재됩니다. 본국으로 돌아간 외국인 환자가 이 코드만 보고 정확한 진단명을 파악하기란 불가능합니다.</p><p>CHECKIT 시스템은 결과지 번역 단계에서 한국 고유의 KCD 코드를 WHO 기준의 국제 질병 분류인 ICD-10 코드로 변환 매핑하는 행정 데이터를 제공합니다. 전 세계 어느 병원을 가더라도 정확한 인계를 받을 수 있도록 돕습니다.</p>\`,
        author: 'CHECKIT',
        createdAt: '2025.03.15'
    },
    {
        id: 'post-15',
        title: '검진 후 처방전 발급과 약국 이용 행정 가이드',
        category: '한국생활',
        thumbnail: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=600&q=80',
        summary: '위염, 헬리코박터균 등 검진 중 발견된 가벼운 질환에 대한 처방전 약국 접수 방법을 안내합니다.',
        content: \`<p>내시경 검사 중 헬리코박터균이 발견되거나 경미한 위염이 있어 당일 처방전이 발급되는 경우가 있습니다. 외국인의 경우 처방전을 들고 약국에 가서 어떻게 약을 받고 복용법을 이해해야 하는지 막막할 수 있습니다.</p><p>CHECKIT은 처방전 발급 시 한국 약국의 이용 프로세스와 '식후 30분, 하루 3번'과 같은 복약 지도 문구를 다국어로 번역한 퀵 가이드를 제공하여, 원활한 처방약 수령을 돕습니다.</p>\`,
        author: 'CHECKIT',
        createdAt: '2025.03.10'
    },
    {
        id: 'post-16',
        title: '비자 발급을 위한 의료기관 예약확인증 원격 지원',
        category: '건강정보',
        thumbnail: 'https://images.unsplash.com/photo-1569982175971-d92b01cf8694?auto=format&fit=crop&w=600&q=80',
        summary: '한국 단기 방문 비자 발급에 필수적인 병원 공식 예약확인증을 사전에 전달해 드립니다.',
        content: \`<p>일부 국가의 국민은 한국에 단기 방문 시 비자가 필요하며, 건강검진을 목적으로 할 경우 병원에서 공식 발행한 명확한 예약확인증을 대사관에 제출해야 합니다.</p><p>CHECKIT은 고객의 예약이 확정되는 즉시, 병원 원무과와 협의하여 영사관 제출용 요건에 부합하는 공식 예약확인증(PDF)을 발급받아 고객의 이메일로 안전하게 전달하는 행정 업무를 수행합니다.</p>\`,
        author: 'CHECKIT',
        createdAt: '2025.03.05'
    },
    {
        id: 'post-17',
        title: '고객 데이터 프라이버시와 강력한 보안 시스템',
        category: '체킷소식',
        thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80',
        summary: '고객의 민감한 의료 정보와 결과지를 다루는 CHECKIT의 철저한 데이터 보안 정책을 공개합니다.',
        content: \`<p>건강검진 결과지와 문진표에는 가장 민감한 개인 정보가 포함되어 있습니다. 무분별한 에이전시들은 카카오톡이나 위챗으로 결과지 사진을 주고받으며 보안 위협을 야기합니다.</p><p>CHECKIT은 글로벌 클라우드 보안 표준을 준수하는 전용 플랫폼(SaaS) 내에서만 데이터를 처리하며, 번역된 결과지는 암호화된 상태로 고객 본인의 계정에서만 열람 가능하도록 통제합니다. 철저한 IT 기반의 비의료 행정 시스템이기에 가능한 보안입니다.</p>\`,
        author: 'CHECKIT',
        createdAt: '2025.02.28'
    },
    {
        id: 'post-18',
        title: '체킷 고객 후기: "중간 마진 없는 진짜 소프트웨어 서비스"',
        category: '고객후기',
        thumbnail: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=600&q=80',
        summary: '베트남에서 이용한 Tran 고객의 합리적인 시스템 이용 후기입니다.',
        content: \`<p>"한국의 많은 에이전시들이 '무료 수속'을 내세우지만, 알고 보면 병원비 안에 막대한 바가지요금이 포함되어 있다는 것을 알게 되었습니다. CHECKIT은 처음부터 시스템 이용료를 정액으로 고지하고, 병원비는 병원에 직접 내게 해 주었습니다."</p><p>"플랫폼 인터페이스가 매우 훌륭했고, 제가 원할 때 언제든 번역된 문서를 다운로드할 수 있어서 정말 편리한 '나만의 의료 비서 소프트웨어'를 구독한 느낌이었습니다."</p>\`,
        author: 'Tran H.',
        createdAt: '2025.02.20'
    },
    {
        id: 'post-19',
        title: '신용카드 결제 및 취소 규정 행정 안내',
        category: '한국생활',
        thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80',
        summary: '해외 신용카드 결제 시 병원 시스템의 호환성과 취소/환불 규정에 대한 명확한 가이드입니다.',
        content: \`<p>한국 병원에서 해외 신용카드(Visa, MasterCard 등)로 직접 결제할 때 겪을 수 있는 한도 문제나 해외 승인 거절 문제에 대한 사전 안내를 제공합니다.</p><p>또한, 검사 며칠 전 취소할 경우 병원의 위약금 규정이나 예약금 환불 규정을 명확하게 다국어로 안내하여, 결제와 관련된 어떠한 숨겨진 분쟁도 발생하지 않도록 사전 행정 고지를 철저히 이행합니다.</p>\`,
        author: 'CHECKIT',
        createdAt: '2025.02.15'
    },
    {
        id: 'post-20',
        title: '의료법을 철저히 준수하는 CHECKIT의 비의료 행정 가이드라인',
        category: '체킷소식',
        thumbnail: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=600&q=80',
        summary: 'CHECKIT이 어떠한 의료적 개입이나 진단도 하지 않음을 명시하는 컴플라이언스 선언입니다.',
        content: \`<p>CHECKIT은 대한민국 의료법 제27조 3항(환자 유인 및 알선 금지) 및 관련 법규를 엄격하게 준수하는 IT 행정 플랫폼입니다. 당사는 고객에게 특정 병원의 진료를 강제하거나 수익을 배분받는 행위를 하지 않습니다.</p><p>당사의 모든 서비스는 언어 번역, 예약 조율, 서류 데이터화 등 순수한 '비의료적 행정 업무'에 국한되며, 번역된 결과지 또한 원본의 언어적 변환일 뿐 어떠한 의료적 소견도 추가하지 않습니다. 철저한 준법 경영을 바탕으로 신뢰할 수 있는 플랫폼을 만들어갑니다.</p>\`,
        author: 'CHECKIT',
        createdAt: '2025.02.10'
    }
];`;

const startIndex = mainJs.indexOf('const BLOG_SEED_DATA = [');
const endIndex = mainJs.indexOf('];', startIndex) + 2;

if (startIndex !== -1 && endIndex !== -1) {
    mainJs = mainJs.substring(0, startIndex) + newBlogData + mainJs.substring(endIndex);
    fs.writeFileSync(mainJsPath, mainJs, 'utf8');
    console.log('Successfully replaced BLOG_SEED_DATA in main.js');
} else {
    console.error('Could not find BLOG_SEED_DATA in main.js');
}
