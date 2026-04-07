const fs = require('fs');

function splitLayout() {
    let html = fs.readFileSync('index.html', 'utf-8');
    
    // Add pc-layout-wrapper
    html = html.replace(/<main>/g, '<main>\n    <div class="pc-layout-wrapper">');
    
    // Extract everything between pc-layout-wrapper and </main>
    const match = html.match(/<main>\n    <div class="pc-layout-wrapper">([\s\S]*?)<\/main>/);
    if (match) {
        let mainContent = match[1];
        
        // Duplicate and rename ids for mobile wrapper
        let mobileContent = mainContent.replace(/id="([^"]+)"/g, 'id="$1-mobile"');
        
        let newMainBlock = `<main>
    <!-- ============================================== -->
    <!-- PC VERSION LAYOUT (Strictly Protected)         -->
    <!-- ============================================== -->
    <div class="pc-layout-wrapper">
${mainContent}
    </div> <!-- /pc-layout-wrapper -->

    <!-- ============================================== -->
    <!-- MOBILE VERSION LAYOUT (Customizable)           -->
    <!-- ============================================== -->
    <div class="mobile-layout-wrapper">
${mobileContent}
    </div> <!-- /mobile-layout-wrapper -->
</main>`;

        html = html.replace(/<main>[\s\S]*?<\/main>/, newMainBlock);
        
        fs.writeFileSync('index.html', html, 'utf-8');
        console.log("Successfully split index.html via Node.");
    } else {
        console.log("Failed to find main content.");
    }
}

splitLayout();
