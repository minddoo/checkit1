const fs = require('fs');
let content = fs.readFileSync('main.js', 'utf8');

const keys = ['chat_history', 'consultationData', 'changeCount', 'isUnlimited'];
keys.forEach(key => {
    content = content.replace(new RegExp(`'${key}'`, 'g'), `\`${key}_\${localStorage.getItem('userEmail') || ''}\``);
    content = content.replace(new RegExp(`"${key}"`, 'g'), `\`${key}_\${localStorage.getItem('userEmail') || ''}\``);
});

const logout_logic = `                // Keep consultationData and change info for session continuity
                const consultationData = localStorage.getItem(\`consultationData_\${localStorage.getItem('userEmail') || ''}\`);
                const changeCount = localStorage.getItem(\`changeCount_\${localStorage.getItem('userEmail') || ''}\`);
                const isUnlimited = localStorage.getItem(\`isUnlimited_\${localStorage.getItem('userEmail') || ''}\`);
                const chatHistory = localStorage.getItem(\`chat_history_\${localStorage.getItem('userEmail') || ''}\`);
                
                localStorage.clear();
                
                if (consultationData) localStorage.setItem(\`consultationData_\${localStorage.getItem('userEmail') || ''}\`, consultationData);
                if (changeCount) localStorage.setItem(\`changeCount_\${localStorage.getItem('userEmail') || ''}\`, changeCount);
                if (isUnlimited) localStorage.setItem(\`isUnlimited_\${localStorage.getItem('userEmail') || ''}\`, isUnlimited);
                if (chatHistory) localStorage.setItem(\`chat_history_\${localStorage.getItem('userEmail') || ''}\`, chatHistory);`;

const old_logout_logic = `                // Keep consultationData and change info for session continuity
                const consultationData = localStorage.getItem('consultationData');
                const changeCount = localStorage.getItem('changeCount');
                const isUnlimited = localStorage.getItem('isUnlimited');
                const chatHistory = localStorage.getItem('chat_history');
                
                localStorage.clear();
                
                if (consultationData) localStorage.setItem('consultationData', consultationData);
                if (changeCount) localStorage.setItem('changeCount', changeCount);
                if (isUnlimited) localStorage.setItem('isUnlimited', isUnlimited);
                if (chatHistory) localStorage.setItem('chat_history', chatHistory);`;


const new_logout_logic = `                // Clear only session tokens to preserve namespaced user data
                localStorage.removeItem('isLoggedIn');
                localStorage.removeItem('userName');
                localStorage.removeItem('userEmail');
                localStorage.removeItem('userPicture');`;

content = content.replace(logout_logic, new_logout_logic);
content = content.replace(old_logout_logic, new_logout_logic);

fs.writeFileSync('main.js', content, 'utf8');
console.log('Done Node');
