# Blueprint: CHECKIT Website Restoration

## 1. Project Overview

This project is a complete restoration of the CHECKIT website, based on the live version provided at [https://faf9a52c.checkit1111.pages.dev/](https://faf9a52c.checkit1111.pages.dev/). The goal was to replicate the original site's structure, functionality, and design pixel-for-pixel, starting from an empty directory.

The restored application is a static, single-page website built with modern, framework-less HTML, CSS, and JavaScript. It serves as an informational portal for CHECKIT's health check-up assistance services for foreigners in Korea.

## 2. Core Features & Design

The restored website includes the following key features and design elements:

### **Design & Layout**

*   **Modern & Clean UI:** A visually balanced layout with a professional green and light-grey color palette, clean typography, and ample whitespace.
*   **Sticky Header:** A navigation header that remains fixed at the top of the page for easy access.
*   **Responsive Hero Section:** A prominent hero section with a clear headline, subtitle, and a call-to-action button that adapts to all screen sizes.
*   **Mobile-First Responsive Design:** The layout is fully responsive and optimized for a seamless experience on both mobile devices and desktops, featuring a hamburger menu for navigation on smaller screens.

### **Functionality**

*   **Multilingual Support (i18n):** The entire user interface, including the chatbot, can be dynamically switched between four languages: Korean (KR), English (EN), Chinese (CN), and Vietnamese (VI). The selected language is saved in `localStorage` to persist across sessions.
*   **Interactive Chatbot:**
    *   A floating chat icon is fixed to the bottom-right corner of the screen for easy access.
    *   The chatbot window provides a welcoming message and a list of Frequently Asked Questions (FAQs).
    *   Users can click on an FAQ to get an instant, pre-defined answer or type their own message.
    *   The chatbot's language dynamically updates to match the main site's language setting.
*   **Modular JavaScript:** The application logic is handled by `main.js`, which is organized into clear, reusable functions for managing language switching, chatbot interactions, and mobile navigation.

## 3. File Structure

*   `index.html`: The main HTML file containing the entire structure of the webpage.
*   `style.css`: The CSS file that provides all styling, layout, and responsive design rules.
*   `main.js`: The JavaScript file that controls all interactive features, including the language switcher and the chatbot.
*   `blueprint.md`: This document, providing a comprehensive overview of the restored project.

## 4. Restoration Plan (Completed)

This section outlines the steps that were taken to complete the restoration.

1.  **Project Initialization:** Started with a completely empty directory after deleting all previous files.
2.  **HTML Structure Replication:** Created a new `index.html` file and meticulously replicated the exact DOM structure of the reference site, including all necessary tags, classes, and `data-i18n` attributes for localization.
3.  **JavaScript Functionality Replication:** Created a new `main.js` file. Implemented the full logic for the language switcher and the interactive chatbot. All text content, including translations and chat responses, was extracted and stored in a `translations` object for easy management.
4.  **CSS Design Replication:** Created a new `style.css` file. Wrote all CSS rules from scratch to match the reference site's design, including colors, fonts, layout, responsive breakpoints, and the fixed positioning of the chatbot icon.
5.  **Blueprint Creation:** Created this `blueprint.md` file to document the successful restoration.
6.  **Deployment:** The fully restored application is now ready for deployment.
