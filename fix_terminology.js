const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'main.js');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Terminology updates
content = content.replace(/코디네이터/g, '전담 담당자');

// 2. Specific AI Report Update (Terminology & Expert Flow)
const oldTitle = 'ko: "결과지 번역 및 질병 코드 정보"';
const newTitle = 'ko: "CHECKIT 시스템 분석 리포트"';
content = content.replace(oldTitle, newTitle);

const oldDisclaimer = 'ko: "본 리포트는 원본 결과지의 한국어 내용을 단순 번역한 데이터입니다. CHECKIT은 의료 기관이 아니며 직접적인 진단이나 상담을 제공하지 않습니다. 상세 결과에 대한 전문적인 해석 및 향후 치료 계획은 반드시 검진을 받으신 해당 병원의 전문의와 상담하시기 바랍니다."';
const newDisclaimer = 'ko: "본 리포트는 원본 결과지의 한국어 내용을 단순 번역한 데이터입니다. 정밀 분석을 위해 CHECKIT 시스템의 표준 대조 및 전담 담당자의 최종 확인을 진행합니다. 상세 결과는 잠시 후 전송해 드리겠습니다."';
content = content.replace(oldDisclaimer, newDisclaimer);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Update successful!');
