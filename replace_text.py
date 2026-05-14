
import os
import io

files = [r'c:\Users\pc\.gemini\antigravity\scratch\-1-new\index.html', r'c:\Users\pc\.gemini\antigravity\scratch\-1-new\main.js']
for f in files:
    with io.open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    content = content.replace('한국어 결과지 본인 언어로 단순 번역 제공 + KCD, ICD 질병코드 제공 및 파일 다운로드 기능 제공', '고객이 올린 파일 원본 그대로 단순 번역 기능 + 실제 공시 질병코드 사이트에서 제공하는 질병코드를 고객이 올린 파일에서 질병 및 코드를 정확히 분석하여 제공')
    content = content.replace('고객님의 언어로 완벽하게 번역해 드리는 것은 물론, <b>KCD, ICD 질병코드 분석</b>을 포함한 원본과 번역본을 모두 제공해 드립니다.', '고객이 올린 파일 원본 그대로 단순 번역 기능과 실제 공시 질병코드 사이트에서 제공하는 질병코드를 고객이 올린 파일에서 질병 및 코드를 정확히 분석하여 제공해 드립니다.')
    with io.open(f, 'w', encoding='utf-8') as file:
        file.write(content)
print('Done!')

