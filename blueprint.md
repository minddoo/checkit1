
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
*   **Testimonials Section:** Trust-building user reviews displayed in eye-catching green cards with white text.
*   **Contact Section:** A clear contact form with the same light mint background as the hero section.

### **Individual Service Page (`individual.html`)**
*   **Expectation vs. Reality Theme:** Visually distinguishes between the positive expectations (light sky blue cards) and the challenging realities (light red cards) of the Korean healthcare system for foreigners.
*   **Clear Call to Action:** A prominent contact section with a mint background invites users to get started.
*   **Structured Plans & Options:** Service tiers and add-ons are presented in a clear, card-based layout.

### **Functionality**
*   **Internationalization (i18n):** The site content can be switched between Korean, English, Chinese, and Vietnamese. This is managed via `main.js` and `individual.js`.
*   **Interactive Chatbot:** A persistent floating chatbot provides FAQ answers and is available on all pages.

---

## **3. Current Task: Individual Page Readability & Layout Refinement**

**Objective:** To improve the visual clarity and professional look of the `individual.html` page by simplifying the layout and standardizing card styles.

**Plan:**

1.  **Update `blueprint.md`:** Reflect the new layout refinement tasks.

2.  **Adjust Hero Section Text (`individual.js`):**
    *   Modify the `individual-hero-title` translation to remove the `<br>` tag, making the title a single line.
    *   Modify the `individual-hero-subtitle` translation to add a line break before "CHECKIT" for emphasis.

3.  **Update Styles (`style.css`):**
    *   **Center-align Titles:** Apply `text-align: center` to the `.pricing-header h3` rule to center the titles of service plans and options cards.
    *   **Standardize Card Backgrounds:**
        *   Change the background color of `.expectation-card` back to white (`--white-color`).
        *   Change the background color of `.reality-card` back to white (`--white-color`), removing the previous color-coding to create a cleaner aesthetic.

4.  **Review & Verify:** Check the live preview to ensure all changes are applied correctly and the layout is visually balanced.
