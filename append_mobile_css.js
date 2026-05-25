const fs = require('fs');

const cssToAppend = `

/* =========================================
   MOBILE VISUAL OVERHAUL (max-width: 768px)
   ========================================= */
@media (max-width: 768px) {
    /* 1. Hero Workflow Section */
    .hero-workflow {
        padding: 90px 0 40px !important;
        min-height: auto !important;
    }
    
    .hero-slider-content {
        gap: 0px !important;
    }
    
    /* 2. Text Section Compression */
    .step-text-container {
        min-height: auto !important;
        height: auto !important;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
    
    .step-item {
        margin-top: 0 !important;
    }

    .hero-text-side h2 {
        font-size: 1.5rem !important; 
        min-height: auto !important; 
        margin-top: 10px !important;
        margin-bottom: 5px !important;
        line-height: 1.3 !important;
    }
    
    .step-badge {
        width: 32px !important;
        height: 32px !important;
        font-size: 0.95rem !important;
        margin: 0 auto 10px auto !important;
    }
    
    /* 3. Dots Navigation Margin */
    .hero-nav {
        margin-top: 20px !important;
        margin-bottom: 25px !important;
    }
    
    /* 4. Phone Mockup Image Resizing */
    .hero-image-side {
        margin-top: 0 !important;
    }

    .img-slide img {
        width: 100% !important;
        max-width: 250px !important; 
        margin: 0 auto !important;
        border-radius: 20px !important;
        padding: 8px !important;
    }
}
`;

// Remove the syntax error at the end of the file
let content = fs.readFileSync('style.css', 'utf8');
const errorSnippet = `        grid-template-columns: 1fr !important;
        gap: 30px !important;
    }
}`;

if (content.endsWith(errorSnippet) || content.trim().endsWith(errorSnippet)) {
    content = content.replace(errorSnippet, '');
} else {
    // try removing just the last occurrence
    const idx = content.lastIndexOf("grid-template-columns: 1fr !important;");
    if (idx > -1 && idx > content.length - 200) {
        content = content.substring(0, idx);
    }
}

content += cssToAppend;
fs.writeFileSync('style.css', content);
console.log("Mobile CSS appended successfully!");
