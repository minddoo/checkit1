import re

def update_index_html():
    with open('index.html', 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Update hero brand chip text
    content = content.replace(
        '<div class="hero-brand-chip"><i class="fas fa-circle"></i> CHECKIT의 체계적이고 지속가능한 인프라</div>',
        '<div class="hero-brand-chip"><i class="fas fa-circle"></i> <span data-lang-key="hero_brand_chip_text">CHECKIT의 체계적이고 지속가능한 인프라</span></div>'
    )

    # 2. Update 9 hero captions
    # We will use regex to find each hero-caption block
    for i in range(1, 10):
        # We look for the <p class="hero-caption-headline"> ... </p> followed by the description text
        # Because we only have 9 elements, we can do a targeted replace for each.
        
        # It's better to just use a custom regex to find the headline and body
        # Let's find exactly the headline text for each step and the description and replace them manually.
        pass

    # A simpler way: just regex the whole hero-caption div
    # Match: <div class="hero-caption"(.*?)>\s*<p class="hero-caption-headline">(.*?)</p>\s*(.*?)\s*</div>
    pattern = re.compile(r'(<div class="hero-caption".*?data-index="(\d+)".*?>\s*)<p class="hero-caption-headline">(.*?)</p>\s*(.*?)(?=\s*</div>)', re.DOTALL)
    
    def repl(match):
        prefix = match.group(1)
        idx = int(match.group(2)) + 1 # 1 to 9
        headline = match.group(3)
        desc = match.group(4)
        
        # Add data-lang-key to headline
        new_headline = f'<p class="hero-caption-headline" data-lang-key="mobile_step{idx}_title">{headline}</p>'
        
        # Add span data-lang-key to desc
        new_desc = f'<span data-lang-key="mobile_step{idx}_desc">{desc}</span>'
        
        return f'{prefix}{new_headline}\n                        {new_desc}'

    content = pattern.sub(repl, content)

    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(content)

def update_script_js():
    with open('script.js', 'r', encoding='utf-8') as f:
        content = f.read()

    # Add translated hero_brand_chip_text to ko, en, cn, vn
    # ko
    content = content.replace(
        "'mypage': '마이페이지', 'logout': '로그아웃',",
        "'mypage': '마이페이지', 'logout': '로그아웃',\n            'hero_brand_chip_text': 'CHECKIT의 체계적이고 지속가능한 인프라',"
    )
    # en
    content = content.replace(
        "'mypage': 'My Page', 'logout': 'Logout',",
        "'mypage': 'My Page', 'logout': 'Logout',\n            'hero_brand_chip_text': 'CHECKIT\\'s Systematic and Sustainable Infra',"
    )
    # cn
    content = content.replace(
        "'mypage': '我的页面', 'logout': '登出',",
        "'mypage': '我的页面', 'logout': '登出',\n            'hero_brand_chip_text': 'CHECKIT 系统化且可持续的基础设施',"
    )
    # vn
    content = content.replace(
        "'mypage': 'Trang của tôi', 'logout': 'Đăng xuất',",
        "'mypage': 'Trang của tôi', 'logout': 'Đăng xuất',\n            'hero_brand_chip_text': 'Hạ tầng hệ thống và bền vững của CHECKIT',"
    )

    with open('script.js', 'w', encoding='utf-8') as f:
        f.write(content)

if __name__ == '__main__':
    update_index_html()
    update_script_js()
    print("Done")
