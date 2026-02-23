
# CHECKIT Web Application Blueprint

## **1. Project Overview**

A web application for **CHECKIT**, a service that assists foreigners in Korea with the non-medical aspects of their health check-ups. The site aims to be clean, professional, and user-friendly, providing clear information and an easy way to request consultations. It is multilingual, supporting Korean, English, Chinese, and Vietnamese.

---

## **2. Implemented Styles & Features**

### **Design & Layout**
*   **Color Palette:** Primary Green (`#00A67E`), secondary gray, dark text, light backgrounds, and a soft mint (`#f0fff8`).
*   **Typography:** Modern sans-serif font (`-apple-system`, `Segoe UI`, etc.).
*   **Header:** Sticky header with a logo, navigation links, and a language switcher.
*   **Responsiveness:** The layout is fully responsive and adapts to mobile, tablet, and desktop screens.

### **Main Page (`index.html`)**
*   **Hero Section:** Features a light mint background for a welcoming feel.
*   **Customer-Type Section:** Side-by-side cards for `Individuals` and `Business` users.
*   **Process Section:** A step-by-step guide presented in a modern, readable card format.
*   **Testimonials Section:** Trust-building user reviews displayed in eye-catching green cards with white text. Includes a testimonial from a corporate HR manager.
*   **Contact Section:** A clear contact form with the same light mint background as the hero section.

### **Functionality**
*   **Internationalization (i18n):** The site content can be switched between Korean, English, Chinese, and Vietnamese. This is managed via `main.js` and `individual.js`.
*   **Interactive Chatbot:** A persistent floating chatbot provides FAQ answers and is available on all pages.
*   **Individual Service Page (`individual.html`):** Details service plans and common challenges for foreigners.

---

## **3. Current Task: Individual Page Visual & Content Refinement**

**Objective:** To improve the clarity and emotional impact of the `individual.html` page by visually distinguishing the "Expectation" and "Reality" sections and refining content.

**Plan:**

1.  **Update Page `blueprint.md`:** Reflect the new changes for the individual page.

2.  **Refine "Expectation" Section:**
    *   **Content:** Remove the word "꿈:" (Dream:) from the section title for a more direct heading.
    *   **Style:** Change the background color of the expectation cards (`.expectation-card`) to a light sky blue to evoke a positive, hopeful feeling.

3.  **Emphasize "Reality" Section:**
    *   **Style (`.reality-intro`):** Change the background of the "하지만, 현실은 다릅니다" (But, the reality is different) section to a light red to create a clear visual warning.
    *   **Style (`.reality-card`):** Change the background of the reality cards to the same light red, grouping the challenges together visually.

4.  **Adjust "Options" Section:**
    *   **Content:** Change the section title from "추가 서비스" (Additional Services) to "옵션" (Options).
    *   **Style:** Modify the title style to be simple blue text without a background, distinguishing it from other primary section titles.

5.  **Unify Contact Section:**
    *   **Style:** Change the background of the final contact section ("Ready to start?") to the light mint color (`--mint-bg`) used on the main page for design consistency.

6.  **Update Translations (`individual.js`):**
    *   Apply all content changes to the translation files to ensure multilingual support is up-to-date.
