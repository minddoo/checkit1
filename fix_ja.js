const fs = require('fs');
const filePath = 'main.js';
let content = fs.readFileSync(filePath, 'utf8');

const jaHeader = "'ja': {";
const jaStepsHeader = "steps: [";
const jaEnd = "]";

let start = content.indexOf(jaHeader);
let stepsStart = content.indexOf(jaStepsHeader, start);
let stepsEnd = content.indexOf(jaEnd, stepsStart);

let stepsBlock = content.substring(stepsStart, stepsEnd);
if (!stepsBlock.includes('希望項目')) {
    // Replace the last step with Step 6 + Step 7
    const lastStepMatch = stepsBlock.match(/'[^']+'\s*$/);
    if (lastStepMatch) {
        const lastStep = lastStepMatch[0];
        const newSteps = lastStep + ",\n            '希望項目がある病院の検索機能および<br><span class=\"highlight\">位置・情報をGoogle/Naverでリアルタイム確認</span>'";
        content = content.substring(0, stepsStart + lastStepMatch.index) + newSteps + content.substring(stepsEnd);
    }
}

fs.writeFileSync(filePath, content);
console.log('Fixed ja translation successfully');
