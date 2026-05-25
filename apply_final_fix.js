/**
 * DEFINITIVE FIX - apply_final_fix.js
 *
 * ROOT CAUSE: Customers use Google One-tap (not Firebase Auth),
 * so firebase.auth().currentUser is null.
 * subscribeToUserActiveState calls firebase.auth().currentUser → null → early return → only welcome shows.
 *
 * SOLUTION:
 * 1. Add 'user_activations' public collection to Firestore rules (allow read: if true)
 * 2. master_dashboard.html: toggleMypageActive also writes to user_activations/{email}
 * 3. main.js: subscribeToUserActiveState reads from user_activations (no auth needed)
 */

const fs = require('fs');

// ============================================================
// FIX 1: firestore.rules - Add user_activations collection
// ============================================================
let rules = fs.readFileSync('firestore.rules', 'utf8');

const newRule = `
    // [8] USER_ACTIVATIONS: Publicly readable activation status (no auth required for customers)
    match /user_activations/{email} {
      allow read: if true;
      allow write: if isMaster();
    }`;

if (!rules.includes('user_activations')) {
    rules = rules.replace(
        `    // [7] BLOG_POSTS: Public read, admin/master write`,
        `${newRule}

    // [7] BLOG_POSTS: Public read, admin/master write`
    );
    fs.writeFileSync('firestore.rules', rules, 'utf8');
    console.log('Fix 1: firestore.rules updated');
} else {
    console.log('Fix 1: user_activations already exists in firestore.rules');
}

// ============================================================
// FIX 2: master_dashboard.html
// Pass user.email to toggleMypageActive AND update user_activations
// ============================================================
let dashboard = fs.readFileSync('master_dashboard.html', 'utf8');

// Step 2a: Pass email to toggleMypageActive in the button onclick
const oldBtn = `onclick=\"toggleMypageActive('${id}', ${isActive})\"`;
// We need to do a string replace in the file content
const oldBtnStr = "onclick=\\\"toggleMypageActive('${id}', ${isActive})\\\"";
// The actual text in the file is: onclick="toggleMypageActive('${id}', ${isActive})"
const actualOldBtn = `onclick="toggleMypageActive('${id}', ${isActive})"`;
const actualNewBtn = `onclick="toggleMypageActive('${id}', ${isActive}, '${user.email}')"`;

// Since we're in the template literal in the HTML file, let's search for the exact string:
const oldBtnInFile = `onclick="toggleMypageActive('` + "${id}', " + "${isActive})" + `"`;
const newBtnInFile = `onclick="toggleMypageActive('` + "${id}', " + "${isActive}, '${user.email}')" + `"`;

if (dashboard.includes(oldBtnInFile)) {
    dashboard = dashboard.replace(oldBtnInFile, newBtnInFile);
    console.log('Fix 2a: toggleMypageActive button updated with email param');
} else {
    // Try alternate format
    const alt1 = "onclick=\"toggleMypageActive('${id}', ${isActive})\"";
    const alt2 = "onclick=\"toggleMypageActive('${id}', ${isActive}, '${user.email}')\"";
    if (dashboard.includes(alt1)) {
        dashboard = dashboard.replace(alt1, alt2);
        console.log('Fix 2a: toggleMypageActive button updated (alternate format)');
    } else {
        console.log('Fix 2a: WARN - button onclick not found. Current pattern:');
        const idx = dashboard.indexOf('toggleMypageActive');
        if (idx > -1) console.log(dashboard.substring(idx-10, idx+80));
    }
}

// Step 2b: Update toggleMypageActive function to also write to user_activations
const oldToggleFn = `        // Action: Toggle My Page Active
        function toggleMypageActive(userId, currentStatus) {
            db.collection('users').doc(userId).update({
                myPageActive: !currentStatus
            }).then(() => {
                console.log(\`Toggled mypage activation of user \${userId} to \${!currentStatus}\`);
            }).catch(err => {
                alert(\`Error toggling mypage state: \${err.message}\`);
            });
        }`;

const newToggleFn = `        // Action: Toggle My Page Active
        function toggleMypageActive(userId, currentStatus, userEmail) {
            const newStatus = !currentStatus;
            const batch = db.batch();
            // Update users collection
            batch.update(db.collection('users').doc(userId), { myPageActive: newStatus });
            // Update user_activations collection (publicly readable - for customer page)
            if (userEmail) {
                batch.set(db.collection('user_activations').doc(userEmail), {
                    myPageActive: newStatus,
                    updatedAt: firebase.firestore.FieldValue.serverTimestamp()
                });
            }
            batch.commit().then(() => {
                console.log(\`Toggled mypage activation of user \${userId} (\${userEmail}) to \${newStatus}\`);
            }).catch(err => {
                alert(\`Error toggling mypage state: \${err.message}\`);
            });
        }`;

if (dashboard.includes(oldToggleFn)) {
    dashboard = dashboard.replace(oldToggleFn, newToggleFn);
    console.log('Fix 2b: toggleMypageActive function updated');
} else {
    // Try normalized whitespace match
    const simpleTarget = 'function toggleMypageActive(userId, currentStatus) {';
    const simpleReplace = 'function toggleMypageActive(userId, currentStatus, userEmail) {';
    if (dashboard.includes(simpleTarget)) {
        dashboard = dashboard.replace(simpleTarget, simpleReplace);
        
        // Also update the function body
        const bodyOld = `            db.collection('users').doc(userId).update({
                myPageActive: !currentStatus
            }).then(() => {
                console.log(\`Toggled mypage activation of user \${userId} to \${!currentStatus}\`);
            }).catch(err => {
                alert(\`Error toggling mypage state: \${err.message}\`);
            });
        }`;
        const bodyNew = `            const newStatus = !currentStatus;
            const batch = db.batch();
            batch.update(db.collection('users').doc(userId), { myPageActive: newStatus });
            if (userEmail) {
                batch.set(db.collection('user_activations').doc(userEmail), {
                    myPageActive: newStatus,
                    updatedAt: firebase.firestore.FieldValue.serverTimestamp()
                });
            }
            batch.commit().then(() => {
                console.log(\`Toggled mypage activation of user \${userId} (\${userEmail}) to \${newStatus}\`);
            }).catch(err => {
                alert(\`Error toggling mypage state: \${err.message}\`);
            });
        }`;
        if (dashboard.includes(bodyOld)) {
            dashboard = dashboard.replace(bodyOld, bodyNew);
            console.log('Fix 2b: toggleMypageActive function body updated');
        } else {
            console.log('Fix 2b: WARN - function body not matched, checking...');
            const idx2 = dashboard.indexOf('function toggleMypageActive');
            if (idx2 > -1) console.log('Found at:', idx2, '\n', dashboard.substring(idx2, idx2+400));
        }
    } else {
        console.log('Fix 2b: WARN - function signature not found');
    }
}

fs.writeFileSync('master_dashboard.html', dashboard, 'utf8');
console.log('Fix 2: master_dashboard.html saved');

// ============================================================
// FIX 3: main.js - Rewrite subscribeToUserActiveState
// ============================================================
let js = fs.readFileSync('main.js', 'utf8');

// Normalize line endings
const normalized = js.replace(/\r\n/g, '\n');

// Find the old function - use a regex to capture it
const fnStart = normalized.indexOf('window.subscribeToUserActiveState = function(email) {');
const fnEnd = normalized.indexOf('\n};\n', fnStart) + 4; // include \n};\n

if (fnStart === -1) {
    console.log('Fix 3: WARN - subscribeToUserActiveState not found!');
    process.exit(1);
}

const oldFn = normalized.substring(fnStart, fnEnd);
console.log('Fix 3: Old function found, length:', oldFn.length);

const newFn = `window.subscribeToUserActiveState = function(email) {
    // Unsubscribe any previous listener
    if (userActiveListener) {
        userActiveListener();
        userActiveListener = null;
    }

    const stepConsultation = document.getElementById('step-consultation');
    const stepSelfTest = document.getElementById('step-self-test');

    // Default state: show self-test, hide consultation form
    if (stepConsultation) stepConsultation.style.display = 'none';
    if (stepSelfTest) stepSelfTest.style.display = 'block';

    if (!email || typeof db === 'undefined' || !db) return;

    // If user already submitted Step 1 form, hide everything
    const savedData = localStorage.getItem('consultationData_' + email);
    if (savedData) {
        if (stepSelfTest) stepSelfTest.style.display = 'none';
        if (stepConsultation) stepConsultation.style.display = 'none';
        return;
    }

    // Listen to user_activations collection (publicly readable - no Firebase Auth required)
    // Master writes here when activating/deactivating a customer
    userActiveListener = db.collection('user_activations').doc(email).onSnapshot(function(snapshot) {
        const stepC = document.getElementById('step-consultation');
        const stepS = document.getElementById('step-self-test');
        const saved = localStorage.getItem('consultationData_' + email);

        if (saved) {
            // Already submitted Step 1 - hide both
            if (stepS) stepS.style.display = 'none';
            if (stepC) stepC.style.display = 'none';
            return;
        }

        const myPageActive = snapshot.exists && snapshot.data().myPageActive === true;

        if (myPageActive) {
            // ACTIVATED by Master: show self-test AND consultation form
            if (stepS) stepS.style.display = 'block';
            if (stepC) stepC.style.display = 'block';
            renderInlineConsultationForm();
        } else {
            // NOT activated (pre-payment): only self-test visible
            if (stepC) stepC.style.display = 'none';
            if (stepS) stepS.style.display = 'block';
        }
    }, function(err) {
        console.error('Activation listener error:', err);
        // On error - show self-test (safe default)
        const stepC = document.getElementById('step-consultation');
        const stepS = document.getElementById('step-self-test');
        if (stepC) stepC.style.display = 'none';
        if (stepS) stepS.style.display = 'block';
    });
};`;

const result = normalized.replace(oldFn, newFn);

if (result === normalized) {
    console.log('Fix 3: WARN - replacement had no effect! Manual check needed.');
    console.log('Old fn preview:', oldFn.substring(0, 200));
} else {
    // Convert back to CRLF
    fs.writeFileSync('main.js', result.replace(/\n/g, '\r\n'), 'utf8');
    console.log('Fix 3: main.js subscribeToUserActiveState rewritten successfully');
}

console.log('\n=== All fixes applied ===');
console.log('Next: git commit & firebase deploy');
