const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');
const target = 'id="step-consultation" style="position: relative;"';
const replacement = 'id="step-consultation" style="position: relative; display: none;"';

if (html.includes(target)) {
    html = html.replace(target, replacement);
    fs.writeFileSync('index.html', html, 'utf8');
    console.log("Replaced");
} else {
    console.log("Target not found");
}
