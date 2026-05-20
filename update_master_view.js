const fs = require('fs');

// --- 1. Modify main.js ---
let mainJs = fs.readFileSync('main.js', 'utf8');

const hookCode = `// Hook localStorage.getItem to support impersonation for Master viewing customer My Page
(function() {
    const urlParams = new URLSearchParams(window.location.search);
    const impEmail = urlParams.get('impersonate_email');
    const impName = urlParams.get('impersonate_name');
    if (impEmail) {
        localStorage.setItem('impersonate_email', impEmail);
        localStorage.setItem('isLoggedIn', 'true');
        if (impName) {
            localStorage.setItem('impersonate_name', impName);
        } else {
            localStorage.setItem('impersonate_name', 'Customer');
        }
    }

    const originalGetItem = localStorage.getItem;
    localStorage.getItem = function(key) {
        if (key === 'userEmail') {
            const impersonateEmail = originalGetItem.call(localStorage, 'impersonate_email');
            if (impersonateEmail) return impersonateEmail;
        }
        if (key === 'userName') {
            const impersonateName = originalGetItem.call(localStorage, 'impersonate_name');
            if (impersonateName) return impersonateName;
        }
        return originalGetItem.call(localStorage, key);
    };

    // Impersonation exit listener
    document.addEventListener('DOMContentLoaded', () => {
        const impersonateEmail = originalGetItem.call(localStorage, 'impersonate_email');
        const impersonateName = originalGetItem.call(localStorage, 'impersonate_name') || 'Customer';
        if (impersonateEmail) {
            // Create the banner element
            const banner = document.createElement('div');
            banner.id = 'master-impersonate-banner';
            banner.style.cssText = "position: fixed; top: 0; left: 0; width: 100%; background: #10b981; color: white; text-align: center; padding: 12px; z-index: 100000; font-weight: bold; display: flex; justify-content: center; align-items: center; gap: 15px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); font-family: 'Pretendard', sans-serif;";
            banner.innerHTML = \`
                <span>🔧 [마스터 모드] <strong>\${impersonateName} (\${impersonateEmail})</strong> 고객의 마이페이지를 조회 중입니다.</span>
                <button onclick="exitImpersonate()" style="background: white; color: #10b981; border: none; padding: 6px 14px; border-radius: 8px; font-weight: 700; cursor: pointer; transition: all 0.2s; font-size: 0.85rem; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">대시보드로 돌아가기</button>
            \`;
            document.body.appendChild(banner);
            document.body.style.paddingTop = '45px'; // Push content down

            // Expose exitImpersonate function globally
            window.exitImpersonate = function() {
                localStorage.removeItem('impersonate_email');
                localStorage.removeItem('impersonate_name');
                window.location.href = 'master_dashboard.html';
            };

            // Auto-show My Page view directly
            setTimeout(() => {
                if (typeof window.showView === 'function') {
                    window.showView('mypage');
                }
            }, 300);
        }
    });
})();

`;

// Insert hookCode at the very beginning of main.js
mainJs = hookCode + mainJs;
fs.writeFileSync('main.js', mainJs);
console.log('Successfully injected hookCode into main.js');

// --- 2. Modify master_dashboard.html ---
let dashboard = fs.readFileSync('master_dashboard.html', 'utf8');

// A. Update table headers in Tab 1 (users-list)
dashboard = dashboard.replace(
    /<th>최근 로그인<\/th>\s*<\/tr>/,
    `<th>최근 로그인</th>\n                                <th>마이페이지 조회</th>\n                            </tr>`
);

// B. Update HTML template in Tab 1 loop (users-list)
dashboard = dashboard.replace(
    /<td style="font-size: 0.8rem; color: #888;">\${loginStr}<\/td>\s*<\/tr>/,
    `<td style="font-size: 0.8rem; color: #888;">\${loginStr}</td>
                             <td>
                                 <button class="btn-payment-action pay" onclick="viewCustomerMypage('\${user.email}', '\${(user.displayName || 'Unnamed User').replace(/'/g, "\\\\'")}')" style="background: #10b981; padding: 6px 12px; border-radius: 8px; font-weight: 700; font-size: 0.8rem; font-family: 'Pretendard', sans-serif;">
                                     <i class="fa-solid fa-eye"></i> 마이페이지 보기
                                 </button>
                             </td>
                         </tr>`
);

// C. Update table headers in Tab 2 (payments-tab)
dashboard = dashboard.replace(
    /<th>활성화 제어<\/th>\s*<\/tr>/,
    `<th>활성화 제어</th>\n                                <th>마이페이지 조회</th>\n                            </tr>`
);

// D. Update HTML template in Tab 2 loop (payments-tab)
dashboard = dashboard.replace(
    /<button class="btn-status-toggle \${isActive \? 'deactivate' : 'activate'}" onclick="toggleMypageActive\('\${id}', \${isActive}\)">\s*<i class="fa-solid \${isActive \? 'fa-circle-xmark' : 'fa-circle-check'}"><\/i>\s*\${isActive \? 'Deactivate Mypage' : 'Activate Mypage'}\s*<\/button>\s*<\/td>\s*<\/tr>/,
    `<button class="btn-status-toggle \${isActive ? 'deactivate' : 'activate'}" onclick="toggleMypageActive('\${id}', \${isActive})">
                                     <i class="fa-solid \${isActive ? 'fa-circle-xmark' : 'fa-circle-check'}"></i>
                                     \${isActive ? 'Deactivate Mypage' : 'Activate Mypage'}
                                 </button>
                             </td>
                             <td>
                                 <button class="btn-payment-action pay" onclick="viewCustomerMypage('\${user.email}', '\${(user.displayName || 'Unnamed User').replace(/'/g, "\\\\'")}')" style="background: #10b981; padding: 6px 12px; border-radius: 8px; font-weight: 700; font-size: 0.8rem; font-family: 'Pretendard', sans-serif;">
                                     <i class="fa-solid fa-eye"></i> 마이페이지 보기
                                 </button>
                             </td>
                         </tr>`
);

// E. Append helper function before </script>
const helperFunction = `
        // Action: View Customer My Page
        function viewCustomerMypage(email, name) {
            localStorage.setItem('impersonate_email', email);
            localStorage.setItem('impersonate_name', name);
            localStorage.setItem('isLoggedIn', 'true');
            window.location.href = 'index.html?view=mypage';
        }
    </script>`;

dashboard = dashboard.replace(/<\/script>\s*<\/body>\s*<\/html>/, helperFunction + `\n</body>\n</html>`);

fs.writeFileSync('master_dashboard.html', dashboard);
console.log('Successfully updated master_dashboard.html');
