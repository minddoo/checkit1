import re

def split_layout():
    with open('index.html', 'r', encoding='utf-8') as f:
        html = f.read()
    
    # 1. Add pc-layout-wrapper right after <main>
    html = re.sub(r'<main>', r'<main>\n    <div class="pc-layout-wrapper">', html)
    
    # 2. Extract everything inside the new <div class="pc-layout-wrapper"> up to </main>
    pattern = r'<main>\n    <div class="pc-layout-wrapper">(.*?)\s*</main>'
    match = re.search(pattern, html, re.DOTALL)
    
    if match:
        main_content = match.group(1)
        
        # 3. Create the mobile copy by renaming IDs to avoid collisions
        # We need to replace ids like id="hero" with id="hero-mobile"
        mobile_content = main_content
        mobile_content = re.sub(r'id="([^"]+)"', r'id="\1-mobile"', mobile_content)
        
        # 4. Construct the new main block
        new_main_block = f"""<main>
    <!-- ============================================== -->
    <!-- PC VERSION LAYOUT (Strictly Protected)         -->
    <!-- ============================================== -->
    <div class="pc-layout-wrapper">
{main_content}
    </div> <!-- /pc-layout-wrapper -->

    <!-- ============================================== -->
    <!-- MOBILE VERSION LAYOUT (Customizable)           -->
    <!-- ============================================== -->
    <div class="mobile-layout-wrapper">
{mobile_content}
    </div> <!-- /mobile-layout-wrapper -->
</main>"""
        
        # 5. Bring in Mobile 9-Step Hero styling and insert into mobile version
        # Replace the entire hero-mobile section in the mobile block
        # We'll just leave it directly cloned for now so the UI is identical,
        # but in the next step, I'll inject the 9-step mobile hero over it.
        
        # Replace old <main> block
        html = re.sub(r'<main>.*?</main>', new_main_block, html, flags=re.DOTALL)
        
        with open('index.html', 'w', encoding='utf-8') as f:
            f.write(html)
        print("Successfully split index.html into PC and Mobile wrappers.")
    else:
        print("Failed to find main content.")

if __name__ == '__main__':
    split_layout()
