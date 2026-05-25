import re
with open(r'C:\Users\pc\.gemini\antigravity\scratch\-1-new\main.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()
for i, line in enumerate(lines):
    if '메일' in line or '이메일' in line or '알림' in line:
        print(f"{i+1}: {line.strip()}")
