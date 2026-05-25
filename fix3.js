const fs = require('fs');

let js = fs.readFileSync('main.js', 'utf8');

// Normalize line endings to \n for easier matching
let normalizedJs = js.replace(/\r\n/g, '\n');

const target1 = `    if (scoreEl && resultDiv) {
        scoreEl.innerText = score + '%';
        resultDiv.style.display = 'block';
        form.style.display = 'none';
    }`;

const replacement1 = `    const submitBtn = document.getElementById('self-test-submit-btn');
    if (scoreEl && resultDiv) {
        scoreEl.innerText = score + '%';
        resultDiv.style.display = 'block';
        if (submitBtn) submitBtn.style.display = 'none';
        
        // Scroll to result smoothly
        resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }`;

if (normalizedJs.includes(target1)) {
    normalizedJs = normalizedJs.replace(target1, replacement1);
    console.log("Fix 1 (submitSelfTest) applied.");
} else {
    console.log("Fix 1 not found!");
}

const target2 = `    window.loadChatHistory = function() {
        const history = JSON.parse(localStorage.getItem(\`chat_history_\${localStorage.getItem('userEmail') || ''}\`) || '[]');
        if (history.length > 0) {
            chatMessages.innerHTML = '';`;

const replacement2 = `    window.loadChatHistory = function() {
        const history = JSON.parse(localStorage.getItem(\`chat_history_\${localStorage.getItem('userEmail') || ''}\`) || '[]');
        if (history.length > 0) {
            const selfTestEl = document.getElementById('step-self-test');
            const stepConsultationEl = document.getElementById('step-consultation');
            const welcomeEl = chatMessages.firstElementChild;
            const welcomeClone = (welcomeEl && welcomeEl.classList.contains('coord')) ? welcomeEl.cloneNode(true) : null;
            const selfTestClone = selfTestEl ? selfTestEl.cloneNode(true) : null;
            const stepConsultationClone = stepConsultationEl ? stepConsultationEl.cloneNode(true) : null;

            chatMessages.innerHTML = '';
            
            if (welcomeClone) chatMessages.appendChild(welcomeClone);`;

if (normalizedJs.includes(target2)) {
    normalizedJs = normalizedJs.replace(target2, replacement2);
    console.log("Fix 2 (loadChatHistory start) applied.");
} else {
    console.log("Fix 2 not found!");
}

const target4 = `                }
                
                chatMessages.appendChild(row);
            });
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    };`;

const replacement4 = `                }
                
                chatMessages.appendChild(row);
            });
            
            if (selfTestClone) chatMessages.appendChild(selfTestClone);
            if (stepConsultationClone) chatMessages.appendChild(stepConsultationClone);
            
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    };`;

if (normalizedJs.includes(target4)) {
    normalizedJs = normalizedJs.replace(target4, replacement4);
    console.log("Fix 3 (loadChatHistory end) applied.");
} else {
    console.log("Fix 3 not found!");
}

// Convert back to CRLF before writing (since the repo uses it)
fs.writeFileSync('main.js', normalizedJs.replace(/\n/g, '\r\n'), 'utf8');
console.log("Done.");
