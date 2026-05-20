const fs = require('fs');
const path = require('path');

// 1. Modify index.html safely
const indexHtmlPath = path.join(__dirname, 'index.html');
let indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');

const selfTestHtml = `                            <!-- Pre-payment Self-Test (Payment Inducement) -->
                            <div class="message-row system" id="step-self-test" style="position: relative; display: none;">
                                <div class="msg-options-wrap">
                                    <div class="msg-options-btn" onclick="window.deleteMessage(this)" title="삭제">
                                        <i class="fa-solid fa-ellipsis"></i>
                                    </div>
                                </div>
                                <div class="system-block" style="background: #fffbeb; border: 1.5px solid #fde68a; border-left: 4px solid #f59e0b; padding: 25px 20px; border-radius: 16px;">
                                    <div class="block-icon" style="color: #f59e0b; background: rgba(245, 158, 11, 0.15); width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.25rem; margin-bottom: 15px;">
                                        <i class="fa-solid fa-clipboard-question"></i>
                                    </div>
                                    <div class="block-content" style="width: 100%;">
                                        <h3 style="color: #92400e; font-weight: 800; font-size: 1.15rem; margin: 0 0 6px 0; font-family: 'Pretendard', sans-serif;">📊 나 홀로 한국 건강검진 가능성 테스트 (Self-Test)</h3>
                                        <p style="font-size: 0.85rem; color: #b45309; margin-bottom: 20px; line-height: 1.4; font-weight: 500;">
                                            한국에서 혼자 검진을 예약하고 진행할 수 있을지 7가지 문항을 통해 확인해 보세요.
                                        </p>
                                        
                                        <form id="self-test-form" onsubmit="event.preventDefault(); window.submitSelfTest();" style="display: flex; flex-direction: column; gap: 14px;">
                                            <div style="display: flex; flex-direction: column; gap: 12px; font-size: 0.85rem;">
                                                <div style="background: white; padding: 14px; border-radius: 10px; border: 1px solid #fde68a; box-shadow: 0 2px 4px rgba(0,0,0,0.02);">
                                                    <p style="margin: 0 0 10px 0; font-weight: 700; color: #78350f; line-height: 1.4;">1. 한국에서 검사를 받는데 의사소통에 문제가 없습니까?<br><span style="font-size: 0.75rem; color: #9a3412; font-weight: normal;">(Do you have any communication issues while receiving medical checkups in Korea?)</span></p>
                                                    <label style="margin-right: 20px; cursor: pointer; font-weight: 600; color: #4b5563;"><input type="radio" name="st1" value="yes" required style="margin-right: 5px;"> 예 (Yes)</label>
                                                    <label style="cursor: pointer; font-weight: 600; color: #4b5563;"><input type="radio" name="st1" value="no" style="margin-right: 5px;"> 아니오 (No)</label>
                                                </div>
                                                <div style="background: white; padding: 14px; border-radius: 10px; border: 1px solid #fde68a; box-shadow: 0 2px 4px rgba(0,0,0,0.02);">
                                                    <p style="margin: 0 0 10px 0; font-weight: 700; color: #78350f; line-height: 1.4;">2. 한국에서 건강검진을 받는 당일 말고 그 전부터 불편함 없이 순조롭게 병원 선택 및 희망 항목이 있는 병원을 찾을 수 있습니까?<br><span style="font-size: 0.75rem; color: #9a3412; font-weight: normal;">(Can you smoothly find and select a hospital with your desired packages before checkup day?)</span></p>
                                                    <label style="margin-right: 20px; cursor: pointer; font-weight: 600; color: #4b5563;"><input type="radio" name="st2" value="yes" required style="margin-right: 5px;"> 예 (Yes)</label>
                                                    <label style="cursor: pointer; font-weight: 600; color: #4b5563;"><input type="radio" name="st2" value="no" style="margin-right: 5px;"> 아니오 (No)</label>
                                                </div>
                                                <div style="background: white; padding: 14px; border-radius: 10px; border: 1px solid #fde68a; box-shadow: 0 2px 4px rgba(0,0,0,0.02);">
                                                    <p style="margin: 0 0 10px 0; font-weight: 700; color: #78350f; line-height: 1.4;">3. 한국에 본인의 건강검진 전체 과정에 문제가 발생하지 않게 도와줄 한국인 지인이 있습니까?<br><span style="font-size: 0.75rem; color: #9a3412; font-weight: normal;">(Do you have a Korean acquaintance to help you prevent issues during the entire checkup?)</span></p>
                                                    <label style="margin-right: 20px; cursor: pointer; font-weight: 600; color: #4b5563;"><input type="radio" name="st3" value="yes" required style="margin-right: 5px;"> 예 (Yes)</label>
                                                    <label style="cursor: pointer; font-weight: 600; color: #4b5563;"><input type="radio" name="st3" value="no" style="margin-right: 5px;"> 아니오 (No)</label>
                                                </div>
                                                <div style="background: white; padding: 14px; border-radius: 10px; border: 1px solid #fde68a; box-shadow: 0 2px 4px rgba(0,0,0,0.02);">
                                                    <p style="margin: 0 0 10px 0; font-weight: 700; color: #78350f; line-height: 1.4;">4. 한국에 머무는 기간동안 본인의 건강검진 결과를 받을 수 없을 경우 병원에 응급 요청하는 방법을 알고 있습니까?<br><span style="font-size: 0.75rem; color: #9a3412; font-weight: normal;">(Do you know how to make an emergency request to the hospital if you can't receive results during your stay?)</span></p>
                                                    <label style="margin-right: 20px; cursor: pointer; font-weight: 600; color: #4b5563;"><input type="radio" name="st4" value="yes" required style="margin-right: 5px;"> 예 (Yes)</label>
                                                    <label style="cursor: pointer; font-weight: 600; color: #4b5563;"><input type="radio" name="st4" value="no" style="margin-right: 5px;"> 아니오 (No)</label>
                                                </div>
                                                <div style="background: white; padding: 14px; border-radius: 10px; border: 1px solid #fde68a; box-shadow: 0 2px 4px rgba(0,0,0,0.02);">
                                                    <p style="margin: 0 0 10px 0; font-weight: 700; color: #78350f; line-height: 1.4;">5. 건강검진 종료 후 (내시경 같은 정밀 검사) 비행기 탑승 제한 안내가 한국어로 나오는데 단순 번역기만 사용하면 편리하다고 생각하십니까?<br><span style="font-size: 0.75rem; color: #9a3412; font-weight: normal;">(Do you think it's convenient to use simple translation tools for flight restriction notices in Korean?)</span></p>
                                                    <label style="margin-right: 20px; cursor: pointer; font-weight: 600; color: #4b5563;"><input type="radio" name="st5" value="yes" required style="margin-right: 5px;"> 예 (Yes)</label>
                                                    <label style="cursor: pointer; font-weight: 600; color: #4b5563;"><input type="radio" name="st5" value="no" style="margin-right: 5px;"> 아니오 (No)</label>
                                                </div>
                                                <div style="background: white; padding: 14px; border-radius: 10px; border: 1px solid #fde68a; box-shadow: 0 2px 4px rgba(0,0,0,0.02);">
                                                    <p style="margin: 0 0 10px 0; font-weight: 700; color: #78350f; line-height: 1.4;">6. 본인이 생각하는 검진 희망일에 맞추어 한국어 소통만 가능한 해당 병원의 예약 담당 직원과 정확하고 순조롭게 검진 항목 및 주의사항 등을 확답 받을 자신이 있습니까?<br><span style="font-size: 0.75rem; color: #9a3412; font-weight: normal;">(Are you confident to get precise confirmation of checkup items and precautions from hospital staff who only speak Korean?)</span></p>
                                                    <label style="margin-right: 20px; cursor: pointer; font-weight: 600; color: #4b5563;"><input type="radio" name="st6" value="yes" required style="margin-right: 5px;"> 예 (Yes)</label>
                                                    <label style="cursor: pointer; font-weight: 600; color: #4b5563;"><input type="radio" name="st6" value="no" style="margin-right: 5px;"> 아니오 (No)</label>
                                                </div>
                                                <div style="background: white; padding: 14px; border-radius: 10px; border: 1px solid #fde68a; box-shadow: 0 2px 4px rgba(0,0,0,0.02);">
                                                    <p style="margin: 0 0 10px 0; font-weight: 700; color: #78350f; line-height: 1.4;">7. 한국 병원은 영어나 자국어 서비스가 완벽하게 되어 있을 것이라 생각하고 언어 문제로 예약이 안되거나 당일 검사 거부 또는 결과 수령에 차질이 생기지 않을 것이라 확신하십니까?<br><span style="font-size: 0.75rem; color: #9a3412; font-weight: normal;">(Are you sure that Korean hospitals have perfect foreign language service and no booking/checkup rejection issues will occur?)</span></p>
                                                    <label style="margin-right: 20px; cursor: pointer; font-weight: 600; color: #4b5563;"><input type="radio" name="st7" value="yes" required style="margin-right: 5px;"> 예 (Yes)</label>
                                                    <label style="cursor: pointer; font-weight: 600; color: #4b5563;"><input type="radio" name="st7" value="no" style="margin-right: 5px;"> 아니오 (No)</label>
                                                </div>
                                                
                                                <button type="submit" id="self-test-submit-btn" style="margin-top: 10px; background: #f59e0b; border: none; color: white; padding: 16px; border-radius: 12px; font-weight: 800; cursor: pointer; font-size: 0.95rem; transition: all 0.2s; box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);">📊 결과 확인하기 (Show Results)</button>
                                            </div>
                                        </form>
                                        
                                        <!-- Test Result Area (Hidden initially) -->
                                        <div id="self-test-result" style="display: none; margin-top: 25px; background: white; padding: 25px 20px; border-radius: 16px; border: 1.5px solid #fcd34d; text-align: center; box-shadow: 0 10px 25px -5px rgba(245, 158, 11, 0.1);">
                                            <h4 style="color: #b45309; margin: 0 0 10px 0; font-size: 1.05rem; font-weight: 700;">나 홀로 검진 성공 확률 (Success Probability)</h4>
                                            <div style="font-size: 3.5rem; font-weight: 900; color: #ef4444; margin-bottom: 10px; font-family: 'Outfit', sans-serif;" id="self-test-score">0%</div>
                                            <p style="font-size: 0.9rem; color: #374151; margin-bottom: 20px; line-height: 1.6; font-weight: 700;" id="self-test-desc">
                                                의사소통 및 긴급 대처 문제로 인해 혼자서 검진을 진행하기 매우 어려울 수 있습니다.
                                            </p>
                                            
                                            <div style="background: #f8fafc; border-radius: 12px; padding: 18px; margin-bottom: 20px; text-align: left; border: 1px solid #e2e8f0;">
                                                <p style="margin: 0 0 10px 0; font-size: 0.85rem; font-weight: 800; color: #0ea5e9; display: flex; align-items: center; gap: 6px;">
                                                    <i class="fa-solid fa-circle-check"></i> CHECKIT 1:1 전담 서비스 지원 사항
                                                </p>
                                                <ul style="margin: 0; padding-left: 20px; font-size: 0.8rem; color: #475569; line-height: 1.7; font-weight: 600;">
                                                    <li>전문 다국어 코디네이터의 <b>1:1 전담 밀착 동행 및 소통</b></li>
                                                    <li>병원 예약, 희망 검진 항목 매칭 및 조율 <b>100% 대행</b></li>
                                                    <li>복잡한 한국어 결과지 및 의학 용어 <b>완벽한 번역 지원</b></li>
                                                    <li>검사 전/후 주의사항 및 응급 대처 <b>24시간 지원</b></li>
                                                </ul>
                                            </div>
                                            
                                            <button onclick="window.proceedToConsultationForm()" style="background: var(--primary); color: white; border: none; padding: 16px 20px; border-radius: 12px; font-weight: 800; cursor: pointer; width: 100%; box-shadow: 0 6px 20px rgba(16,185,129,0.3); font-size: 1.05rem; display: flex; align-items: center; justify-content: center; gap: 8px;">
                                                <i class="fa-solid fa-credit-card"></i> 💳 CHECKIT 서비스 결제하러 가기
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

`;

const targetComment = '<!-- Step 1: Detailed Consultation Form -->';
if (indexHtml.includes(targetComment)) {
    indexHtml = indexHtml.replace(targetComment, selfTestHtml + '\n' + targetComment);
    fs.writeFileSync(indexHtmlPath, indexHtml, 'utf8');
    console.log('index.html updated successfully');
} else {
    throw new Error('index.html update target not found!');
}

// 2. Modify main.js safely
const mainJsPath = path.join(__dirname, 'main.js');
let mainJs = fs.readFileSync(mainJsPath, 'utf8');

const targetStrCRLF = '    } else {\r\n        renderInlineConsultationForm();\r\n    }';
const targetStrLF = '    } else {\n        renderInlineConsultationForm();\n    }';

const replacementBlock = `    } else {
        if (typeof window.subscribeToUserActiveState === 'function') {
            window.subscribeToUserActiveState(localStorage.getItem('userEmail') || '');
        } else {
            renderInlineConsultationForm();
        }
    }`;

let replaced = false;
if (mainJs.includes(targetStrCRLF)) {
    mainJs = mainJs.replace(targetStrCRLF, replacementBlock);
    replaced = true;
    console.log('main.js block replaced (CRLF)');
} else if (mainJs.includes(targetStrLF)) {
    mainJs = mainJs.replace(targetStrLF, replacementBlock);
    replaced = true;
    console.log('main.js block replaced (LF)');
} else {
    // Try custom spacing regex with escaped { }
    const regex = /\} else \{\s*renderInlineConsultationForm\(\);\s*\}/;
    if (regex.test(mainJs)) {
        mainJs = mainJs.replace(regex, `} else {
        if (typeof window.subscribeToUserActiveState === 'function') {
            window.subscribeToUserActiveState(localStorage.getItem('userEmail') || '');
        } else {
            renderInlineConsultationForm();
        }
    }`);
        replaced = true;
        console.log('main.js block replaced (Regex)');
    }
}

if (!replaced) {
    throw new Error('main.js renderInlineConsultationForm() block replacement target not found!');
}

// Append new self-test logic and Firestore listener functions to main.js if not already added
const functionsToAppend = `
// ==========================================
// Checkit Psychology/Self-Test Module
// ==========================================
let userActiveListener = null;

window.subscribeToUserActiveState = function(email) {
    if (userActiveListener) {
        userActiveListener(); // unsubscribe previous
        userActiveListener = null;
    }
    if (!email || typeof db === 'undefined' || !db) {
        const stepConsultation = document.getElementById('step-consultation');
        const stepSelfTest = document.getElementById('step-self-test');
        if (stepConsultation) stepConsultation.style.display = 'none';
        if (stepSelfTest) stepSelfTest.style.display = 'block';
        return;
    }

    userActiveListener = db.collection('users').where('email', '==', email).onSnapshot(snapshot => {
        let myPageActive = false;
        if (!snapshot.empty) {
            const data = snapshot.docs[0].data();
            myPageActive = data.myPageActive === true;
        }

        const stepConsultation = document.getElementById('step-consultation');
        const stepSelfTest = document.getElementById('step-self-test');
        const savedData = localStorage.getItem(\`consultationData_\${email}\`);

        if (savedData) {
            // Already submitted Step 1 Form, hide both survey & step 1 form
            if (stepSelfTest) stepSelfTest.style.display = 'none';
            if (stepConsultation) stepConsultation.style.display = 'none';
        } else {
            if (myPageActive) {
                // Activated by Master dashboard -> Show Step 1 form, hide self-test
                if (stepSelfTest) stepSelfTest.style.display = 'none';
                if (stepConsultation) stepConsultation.style.display = 'block';
                renderInlineConsultationForm();
            } else {
                // Inactive / Pre-payment -> Show self-test, hide Step 1 form
                if (stepConsultation) stepConsultation.style.display = 'none';
                if (stepSelfTest) stepSelfTest.style.display = 'block';
            }
        }
    }, err => {
        console.error("Firestore user active listener error:", err);
    });
};

window.submitSelfTest = function() {
    const form = document.getElementById('self-test-form');
    if (!form.checkValidity()) {
        alert('모든 문항에 답변해 주세요.');
        return;
    }
    
    const formData = new FormData(form);
    let yesCount = 0;
    for (let [key, value] of formData.entries()) {
        if (value === 'yes') yesCount++;
    }
    
    // Calculate success score: Base 10%, each YES adds score (Max 35% total)
    let score = 10;
    const addValues = [4, 4, 4, 4, 3, 3, 3];
    for (let i = 0; i < yesCount; i++) {
        score += addValues[i] || 0;
    }
    
    const scoreEl = document.getElementById('self-test-score');
    const resultDiv = document.getElementById('self-test-result');
    
    if (scoreEl && resultDiv) {
        scoreEl.innerText = score + '%';
        resultDiv.style.display = 'block';
        form.style.display = 'none';
    }
};

window.proceedToConsultationForm = function() {
    localStorage.setItem(\`selfTestDone_\${localStorage.getItem('userEmail') || ''}\`, 'true');
    // Hide self-test, switch to home page and scroll to payment section
    window.showView('home');
    setTimeout(() => {
        const paymentSection = document.getElementById('payment');
        if (paymentSection) {
            paymentSection.scrollIntoView({ behavior: 'smooth' });
        }
    }, 300);
};
`;

mainJs += functionsToAppend;
fs.writeFileSync(mainJsPath, mainJs, 'utf8');
console.log('main.js functions appended successfully');
