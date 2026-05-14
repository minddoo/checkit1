const fs = require('fs');
const filePath = 'main.js';
let content = fs.readFileSync(filePath, 'utf8');

const startMarker = 'const workflowTranslations = {';
const endMarker = '};';

let startIndex = content.indexOf(startMarker);
let endIndex = content.indexOf(endMarker, startIndex) + 2;

if (startIndex === -1) {
    console.log('Could not find start marker');
    process.exit(1);
}

const targetTranslations = `const workflowTranslations = {
    'ko': {
        phase: '병원 및 프로그램 선정',
        steps: [
            '개인 맞춤형 프로필 생성 후<br><span class="highlight">전담 1:1 관리의 시작</span>',
            '24시간 채팅 상담 서비스 및<br><span class="highlight">전문 다국어 지원 모듈 기능</span>',
            '고객의 입출국 일자와<br><span class="highlight">희망 기간 및 상세 요구 파악</span>',
            '니즈에 적합한 병원 리스트와<br><span class="highlight">의료기관 즉시 확인 기능</span>',
            '병원별 프로그램 항목 비교와<br><span class="highlight">본인 맞춤형 검진 자동 매칭</span>',
            '최종 병원 및 프로그램 결정 후<br><span class="highlight">본격적인 예약 절차 진행</span>',
            '희망 항목이 있는 병원 검색 기능 및<br><span class="highlight">위치, 정보 구글/네이버 실시간 확인</span>'
        ]
    },
    'en': {
        phase: 'Hospital & Program Selection',
        steps: [
            'Create a Personalized Profile<br><span class="highlight">Start 1:1 Professional Care</span>',
            '24H Chat-Based Consultation<br><span class="highlight">& Multilingual Support Service</span>',
            'Entrance & Departure Logistics<br><span class="highlight">Analyzing Detailed Requirements</span>',
            'Tailored Hospital & Program List<br><span class="highlight">Real-Time Availability Check</span>',
            'Comparing Specialized Programs<br><span class="highlight">Auto-Matching Your Best Fit</span>',
            'Finalize Selection & Decision<br><span class="highlight">Starting the Booking Support</span>',
            'Search for Hospitals with Desired Items<br><span class="highlight">& Real-Time Google/Naver Location Check</span>'
        ]
    },
    'ja': {
        phase: '病院及びプログラム選定',
        steps: [
            '個別化されたプロフィールの作成<br><span class="highlight">1:1専任管理のスタート</span>',
            '24時間チャット相談および<br><span class="highlight">専門多言語支援モジュール</span>',
            '出入国の日程と<br><span class="highlight">希望期間および詳細要件の把握</span>',
            'ニーズに合った病院リストと<br><span class="highlight">医療機関の即時確認機能</span>',
            '病院別プログラムの比較と<br><span class="highlight">本人に合わせた検診マッチング</span>',
            '最終的な病院およびプログラムの選択<br><span class="highlight">本格的な予約手続きの開始</span>',
            '希望項目がある病院の検索機能および<br><span class="highlight">位置・情報をGoogle/Naverでリアルタイム確認</span>'
        ]
    },
    'zh-CN': {
        phase: '医院及项目选择',
        steps: [
            '创建个人定制档案<br><span class="highlight">开启 1:1 专属管理服务</span>',
            '24小时在线咨询服务<br><span class="highlight">及专业多语种支持模块</span>',
            '出入境日程及<br><span class="highlight">详细需求分析与评估</span>',
            '定制化医院及项目清单<br><span class="highlight">实时资源确认与对接</span>',
            '对比各院特色检查项目<br><span class="highlight">自动匹配最佳健康方案</span>',
            '敲定最终医院及项目<br><span class="highlight">启动正式预约行政支持</span>',
            '基于需求项目的医院搜索功能及<br><span class="highlight">Google/Naver地图实时位置确认</span>'
        ]
    },
    'vi': {
        phase: 'Lựa chọn Bệnh viện & Chương trình',
        steps: [
            'Tạo Hồ sơ Cá nhân hóa<br><span class="highlight">Bắt đầu Hỗ trợ 1:1 Chuyên nghiệp</span>',
            'Tư vấn qua Chat 24/7 và<br><span class="highlight">Mô-đun Hỗ trợ Đa ngôn ngữ</span>',
            'Lịch trình Nhập cảnh/Xuất cảnh<br><span class="highlight">Phân tích Yêu cầu Chi tiết</span>',
            'Danh sách Bệnh viện Phù hợp<br><span class="highlight">Kiểm tra Trạng thái Thời gian Thực</span>',
            'So sánh Các Chương trình Khám<br><span class="highlight">Tự động Khớp với Nhu cầu</span>',
            'Chốt Bệnh viện & Chương trình<br><span class="highlight">Bắt đầu Quy trình Đặt lịch</span>',
            'Tính năng tìm kiếm bệnh viện theo nhu cầu và<br><span class="highlight">Kiểm tra vị trí thực tế qua Google/Naver</span>'
        ]
    },
    'th': {
        phase: 'การเลือกโรงพยาบาลและโปรแกรม',
        steps: [
            'สร้างโปรไฟล์ส่วนบุคคล<br><span class="highlight">เริ่มต้นการดูแลแบบ 1:1</span>',
            'ให้คำปรึกษาผ่านแชท 24 ชม.<br><span class="highlight">และโมดูลรองรับหลายภาษา</span>',
            'กำหนดการเดินทางและ<br><span class="highlight">การวิเคราะห์ความต้องการเชิงลึก</span>',
            'รายการโรงพยาบาลที่เหมาะสม<br><span class="highlight">ตรวจสอบพิกัดได้แบบเรียลไทม์</span>',
            'เปรียบเทียบรายการโปรแกรมตรวจ<br><span class="highlight">จับคู่สิ่งที่เหมาะสมกับคุณที่สุด</span>',
            'ยืนยันโรงพยาบาลและโปรแกรม<br><span class="highlight">เริ่มขั้นตอนการจองอย่างเป็นทางการ</span>',
            'ฟีเจอร์ค้นหาโรงพยาบาลตามหัวข้อที่ต้องการและ<br><span class="highlight">ตรวจสอบตำแหน่งเรียลไทม์ผ่าน Google/Naver</span>'
        ]
    },
    'ru': {
        phase: 'Выбор клиники и программы',
        steps: [
            'Создание личного профиля<br><span class="highlight">Начало персонального сопровождения</span>',
            'Круглосуточный чат-сервис и<br><span class="highlight">многоязычный модуль поддержки</span>',
            'График прилета и вылета,<br><span class="highlight">анализ детальных требований</span>',
            'Список подходящих клиник<br><span class="highlight">Мгновенная проверка доступности</span>',
            'Сравнение медицинских программ<br><span class="highlight">Авто-подбор под ваши нужды</span>',
            'Финальный выбор клиники<br><span class="highlight">Запуск процедуры бронирования</span>',
            'Поиск клиник по нужным параметрам и<br><span class="highlight">проверка местоположения в Google/Naver</span>'
        ]
    }
};`;

content = content.substring(0, startIndex) + targetTranslations + content.substring(endIndex);
fs.writeFileSync(filePath, content);
console.log('Fixed translations block successfully');
