import re

with open('main.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace specific keys with namespaced keys
keys = ['chat_history', 'consultationData', 'changeCount', 'isUnlimited']

def get_replacement(key):
    return "`" + key + "_${localStorage.getItem('userEmail') || ''}`"

for key in keys:
    # We want to replace 'key' with `key_${localStorage.getItem('userEmail') || ''}`
    # using regex to match exactly 'key' or "key"
    content = re.sub(f"'{key}'", get_replacement(key), content)
    content = re.sub(f'"{key}"', get_replacement(key), content)

# Fix logout logic
logout_logic = """                // Keep consultationData and change info for session continuity
                const consultationData = localStorage.getItem(`consultationData_${localStorage.getItem('userEmail') || ''}`);
                const changeCount = localStorage.getItem(`changeCount_${localStorage.getItem('userEmail') || ''}`);
                const isUnlimited = localStorage.getItem(`isUnlimited_${localStorage.getItem('userEmail') || ''}`);
                const chatHistory = localStorage.getItem(`chat_history_${localStorage.getItem('userEmail') || ''}`);
                
                localStorage.clear();
                
                if (consultationData) localStorage.setItem(`consultationData_${localStorage.getItem('userEmail') || ''}`, consultationData);
                if (changeCount) localStorage.setItem(`changeCount_${localStorage.getItem('userEmail') || ''}`, changeCount);
                if (isUnlimited) localStorage.setItem(`isUnlimited_${localStorage.getItem('userEmail') || ''}`, isUnlimited);
                if (chatHistory) localStorage.setItem(`chat_history_${localStorage.getItem('userEmail') || ''}`, chatHistory);"""

new_logout_logic = """                // Clear only session tokens to preserve namespaced user data
                localStorage.removeItem('isLoggedIn');
                localStorage.removeItem('userName');
                localStorage.removeItem('userEmail');
                localStorage.removeItem('userPicture');"""

content = content.replace(logout_logic, new_logout_logic)

with open('main.js', 'w', encoding='utf-8') as f:
    f.write(content)

print('Done')
