const fs = require('fs');

// 1. Remove Corporate Tab and Form from index.html
let html = fs.readFileSync('index.html', 'utf8');
html = html.replace(/<button class="auth-tab" data-tab="corporate">Corporate<\/button>/, '');
html = html.replace(/<!-- Corporate Login Form \(Master Code\) -->[\s\S]*?<\/form>/, '');
fs.writeFileSync('index.html', html);

// 2. Update CSS in style.css
let css = fs.readFileSync('style.css', 'utf8');

// Update .modal-container
const oldModalContainer = /\.modal-container \{\s*background: rgba\(255, 255, 255, 0\.85\);\s*backdrop-filter: blur\(20px\);\s*width: 95%;\s*max-width: 400px;\s*padding: 24px 32px;\s*border-radius: 24px;\s*position: relative;\s*transform: translateY\(40px\) scale\(0\.95\);\s*transition: all 0\.5s cubic-bezier\(0\.16, 1, 0\.3, 1\);\s*box-shadow: 0 25px 50px -12px rgba\(0, 0, 0, 0\.25\);\s*border: 1px solid rgba\(255, 255, 255, 0\.5\);\s*\}/;

const newModalContainer = `.modal-container {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(25px);
    width: 95%;
    max-width: 480px;
    padding: 35px 40px;
    border-radius: 30px;
    position: relative;
    transform: translateY(40px) scale(0.95);
    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: 0 30px 60px -15px rgba(46, 204, 113, 0.15), 0 0 0 1px rgba(46, 204, 113, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.8);
}`;
css = css.replace(oldModalContainer, newModalContainer);

// Update .auth-tabs
const oldAuthTabs = /\.auth-tabs \{\s*display: flex;\s*justify-content: space-between;\s*gap: 10px;\s*border-bottom: 2px solid rgba\(0,0,0,0\.05\);\s*margin-bottom: 24px;\s*\}/;
const newAuthTabs = `.auth-tabs {
    display: flex;
    justify-content: center;
    gap: 40px;
    border-bottom: 2px solid rgba(0,0,0,0.05);
    margin-bottom: 30px;
}`;
css = css.replace(oldAuthTabs, newAuthTabs);

// Update .auth-submit
const oldAuthSubmit = /\.auth-submit \{\s*width: 100%;\s*padding: 12px;\s*border-radius: 12px;\s*font-weight: 800;\s*font-size: 1rem;\s*margin-bottom: 16px;\s*\}/;
const newAuthSubmit = `.auth-submit {
    width: 100%;
    padding: 15px;
    border-radius: 16px;
    font-weight: 800;
    font-size: 1.05rem;
    margin-bottom: 16px;
    background: linear-gradient(135deg, var(--primary), var(--primary-dark));
    color: white;
    border: none;
    cursor: pointer;
    box-shadow: 0 8px 20px rgba(46, 204, 113, 0.25);
    transition: all 0.3s ease;
}
.auth-submit:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 25px rgba(46, 204, 113, 0.35);
}`;
css = css.replace(oldAuthSubmit, newAuthSubmit);

// Make inputs look cooler
const oldInputFocus = /\.input-icon-wrap input:focus \{\s*border-color: var\(--primary\);\s*outline: none;\s*box-shadow: 0 0 0 4px rgba\(46, 204, 113, 0\.1\);\s*\}/;
const newInputFocus = `.input-icon-wrap input:focus {
    border-color: var(--primary);
    outline: none;
    box-shadow: 0 0 0 4px rgba(46, 204, 113, 0.15);
    background: #fcfcfc;
}`;
css = css.replace(oldInputFocus, newInputFocus);

fs.writeFileSync('style.css', css);
console.log('Done modifying auth modal styles and html.');
