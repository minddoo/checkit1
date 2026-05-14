const fs = require('fs');
const mainJs = fs.readFileSync('main.js', 'utf8');
const oldStr = `ko: "본 리포트는 원본 결과지의 한국어 내용을 단순 번역한 데이터입니다. 정밀 분석을 위해 CHECKIT 시스템의 표준 대조 및 전담 담당자의 최종 확인을 진행합니다. 상세 결과는 잠시 후 전송해 드리겠습니다.",`;
const newStr = `ko: "본 리포트는 고객이 올린 파일 원본 그대로 단순 번역 기능과 실제 공시 질병코드 사이트에서 제공하는 질병코드를 고객이 올린 파일에서 질병 및 코드를 정확히 분석하여 제공하는 데이터입니다. CHECKIT은 의료기관이 아니며 직접적인 진단이나 상담을 제공하지 않습니다. 상세 결과의 전문적인 해석 및 향후 치료 계획은 반드시 검진을 받으신 해당 병원의 전문의와 상담하시기 바랍니다.",`;
const newMainJs = mainJs.replace(oldStr, newStr);
fs.writeFileSync('main.js', newMainJs, 'utf8');
console.log('Done');
