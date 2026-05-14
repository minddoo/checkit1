const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');
const newIndexHtml = indexHtml.replace('한국어 결과지 본인 언어로 단순 번역 제공 + KCD, ICD 질병코드 제공 및 파일 다운로드 기능 제공', '고객이 올린 파일 원본 그대로 단순 번역 기능 + 실제 공시 질병코드 사이트에서 제공하는 질병코드를 고객이 올린 파일에서 질병 및 코드를 정확히 분석하여 제공');
fs.writeFileSync('index.html', newIndexHtml, 'utf8');

const mainJs = fs.readFileSync('main.js', 'utf8');
const newMainJs = mainJs.replace('고객님의 언어로 완벽하게 번역해 드리는 것은 물론, <b>KCD, ICD 질병코드 분석</b>을 포함한 원본과 번역본을 모두 제공해 드립니다.', '고객이 올린 파일 원본 그대로 단순 번역 기능과 실제 공시 질병코드 사이트에서 제공하는 질병코드를 고객이 올린 파일에서 질병 및 코드를 정확히 분석하여 제공해 드립니다.');
fs.writeFileSync('main.js', newMainJs, 'utf8');

console.log('Replacement done in index.html and main.js');

