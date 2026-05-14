const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'main.js');
let content = fs.readFileSync(filePath, 'utf8');
const lines = content.split('\n');

// 1. Remove misplaced lines around 1309-1311
// We search for the specific Japanese text to be safe
const misplacedText = '希望項目がある病院の検索機能';
let badIndices = [];
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes(misplacedText) && (i < 1500)) { // Only in the early part where it shouldn't be
        badIndices.push(i);
        // Also remove the two lines before it if they look like Step 07/08
        if (lines[i-1] && lines[i-1].includes('08.')) badIndices.push(i-1);
        if (lines[i-2] && lines[i-2].includes('07.')) badIndices.push(i-2);
    }
}

let newLines = lines.filter((_, index) => !badIndices.includes(index));

// 2. Add correct Step 07 to 'ja' translation
// Search for 'ja' translation block
content = newLines.join('\n');
const jaStepsStart = content.indexOf("'ja': {");
const jaStepsEnd = content.indexOf(']', jaStepsStart);
const jaStepsBlock = content.substring(jaStepsStart, jaStepsEnd);

if (!jaStepsBlock.includes('希望項目がある病院')) {
    const lastStepIndex = content.lastIndexOf("'", jaStepsEnd - 5);
    const updatedContent = content.substring(0, jaStepsEnd - 5).trimEnd() + 
        ",\n            '希望項目がある病院の検索機能および<br><span class=\"highlight\">位置・情報をGoogle/Naverでリアルタイム確認</span>'\n        ]";
    content = updatedContent + content.substring(jaStepsEnd + 1);
}

fs.writeFileSync(filePath, content);
console.log('Fixed main.js successfully');
