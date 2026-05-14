const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'main.js');
let content = fs.readFileSync(filePath, 'utf8');

// The target string to replace in the AI report
const targetTableStart = '<h5 style="margin: 0 0 10px; font-size: 0.9rem; color: #475569;"><i class="fa-solid fa-barcode"></i> Matched Disease Codes (KCD/ICD-10)</h5>';

const replacementTableStart = `<div style="margin-bottom: 15px; padding: 12px; background: #e0f2fe; border-left: 4px solid #0ea5e9; border-radius: 8px;">
                    <p style="margin: 0; font-size: 0.8rem; color: #0369a1; font-weight: 600;">
                        <i class="fa-solid fa-microchip"></i> 본 화면은 원본 결과지 내용을 100% 반영하여 공식 질병코드(KOICD/ICD-10) 사이트와 실시간 대조 후 제공되는 '분석 리포트'의 데모 UI입니다. (아래는 출력 예시입니다)
                    </p>
                </div>
                <h5 style="margin: 0 0 10px; font-size: 0.9rem; color: #475569;"><i class="fa-solid fa-magnifying-glass-chart"></i> 원본 기반 공식 질병코드 매칭 결과 (KOICD/ICD-10)</h5>`;

content = content.replace(targetTableStart, replacementTableStart);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Report UI updated successfully!');
