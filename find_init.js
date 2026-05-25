const fs = require('fs');
const lines = fs.readFileSync('main.js', 'utf8').split('\n');
lines.forEach((line, i) => {
    if (line.includes('window.showView') || line.includes('function showView') || line.includes('appendMessage') && line.includes('안녕하세요')) {
        console.log(`${i+1}: ${line.trim()}`);
    }
});
