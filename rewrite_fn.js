const fs = require('fs');

let js = fs.readFileSync('main.js', 'utf8');
const normalized = js.replace(/\r\n/g, '\n');

// Find the exact boundaries of subscribeToUserActiveState
const fnStart = normalized.indexOf('window.subscribeToUserActiveState = function(email) {');
if (fnStart === -1) {
    console.log('ERROR: function not found!');
    process.exit(1);
}

// Find the closing }; by counting braces
let depth = 0;
let i = fnStart;
let fnEnd = -1;
while (i < normalized.length) {
    if (normalized[i] === '{') depth++;
    else if (normalized[i] === '}') {
        depth--;
        if (depth === 0) {
            // Check if followed by ;
            let j = i + 1;
            while (j < normalized.length && (normalized[j] === ' ' || normalized[j] === '\r')) j++;
            if (normalized[j] === ';') {
                fnEnd = j + 1;
            } else {
                fnEnd = i + 1;
            }
            break;
        }
    }
    i++;
}

if (fnEnd === -1) {
    console.log('ERROR: could not find function end!');
    process.exit(1);
}

console.log('Found function from', fnStart, 'to', fnEnd);
console.log('Old function:\n', normalized.substring(fnStart, fnEnd).substring(0, 300), '...\n');

const newFn = `window.subscribeToUserActiveState = function(email) {
    // Unsubscribe any previous listener
    if (userActiveListener) {
        userActiveListener();
        userActiveListener = null;
    }

    const stepConsultation = document.getElementById('step-consultation');
    const stepSelfTest = document.getElementById('step-self-test');

    // DEFAULT STATE: show self-test, hide consultation form
    if (stepConsultation) stepConsultation.style.display = 'none';
    if (stepSelfTest) stepSelfTest.style.display = 'block';

    if (!email || typeof db === 'undefined' || !db) return;

    // If user already submitted Step 1, hide everything (consultation already in history)
    const savedData = localStorage.getItem('consultationData_' + email);
    if (savedData) {
        if (stepSelfTest) stepSelfTest.style.display = 'none';
        if (stepConsultation) stepConsultation.style.display = 'none';
        return;
    }

    // Listen to user_activations collection (allow read: if true - no Firebase Auth needed)
    // Master dashboard writes here when activating/deactivating a customer
    userActiveListener = db.collection('user_activations').doc(email).onSnapshot(function(snapshot) {
        const stepC = document.getElementById('step-consultation');
        const stepS = document.getElementById('step-self-test');
        const saved = localStorage.getItem('consultationData_' + email);

        if (saved) {
            if (stepS) stepS.style.display = 'none';
            if (stepC) stepC.style.display = 'none';
            return;
        }

        const myPageActive = snapshot.exists && snapshot.data().myPageActive === true;

        if (myPageActive) {
            // ACTIVATED by Master: self-test stays visible + show consultation form below
            if (stepS) stepS.style.display = 'block';
            if (stepC) stepC.style.display = 'block';
            renderInlineConsultationForm();
        } else {
            // NOT YET ACTIVATED (pre-payment): only self-test visible
            if (stepC) stepC.style.display = 'none';
            if (stepS) stepS.style.display = 'block';
        }
    }, function(err) {
        console.error('Activation listener error:', err);
        // On error, safe default: show self-test only
        const stepC = document.getElementById('step-consultation');
        const stepS = document.getElementById('step-self-test');
        if (stepC) stepC.style.display = 'none';
        if (stepS) stepS.style.display = 'block';
    });
};`;

const before = normalized.substring(0, fnStart);
const after = normalized.substring(fnEnd);
const result = before + newFn + after;

fs.writeFileSync('main.js', result.replace(/\n/g, '\r\n'), 'utf8');
console.log('Fix 3: main.js subscribeToUserActiveState rewritten successfully');
console.log('New function preview:\n', newFn.substring(0, 200));
