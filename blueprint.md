
# CHECKIT Web Application Blueprint

## **1. Project Overview**

A web application for **CHECKIT**, a service that assists foreigners in Korea with the non-medical aspects of their health check-ups. The site aims to be clean, professional, and user-friendly, providing clear information and an easy way to request consultations. It is multilingual, supporting Korean, English, Chinese, and Vietnamese.

---

## **2. Implemented Styles & Features**

### **Design & Layout**
*   **Color Palette:** Primary Green (`#00A67E`), secondary gray, dark text, light backgrounds.
*   **Typography:** Modern sans-serif font (`-apple-system`, `Segoe UI`, etc.).
*   **Header:** Sticky header with a logo, navigation links, and a language switcher.
*   **Hero Section:** Large, impactful headline and a clear call-to-action (CTA) button.
*   **Customer-Type Section:** Side-by-side cards for `Individuals` and `Business` users.
*   **Process Section:** A step-by-step guide explaining how the service works.
*   **Testimonials Section:** User reviews to build trust.
*   **Contact Section:** A simple and clear form for consultation requests.
*   **Footer:** Standard footer with copyright information.
*   **Responsiveness:** The layout is fully responsive and adapts to mobile, tablet, and desktop screens. A hamburger menu is used for mobile navigation.

### **Functionality**
*   **Internationalization (i18n):** The site content can be switched between Korean, English, Chinese, and Vietnamese using a language switcher. This is implemented in `main.js` and `individual.js`.
*   **Interactive Chatbot:**
    *   A floating chatbot icon is present on all pages.
    *   The chatbot provides answers to frequently asked questions (FAQs).
    *   It has a welcome message and options for users to click.
    *   It includes a typing indicator to simulate a real conversation.
    *   The chatbot window can be opened and closed.
*   **Individual Service Page (`individual.html`):**
    *   Details the common issues foreigners face (Expectation vs. Reality).
    *   Provides a detailed breakdown of different service plans (`No-Confusion`, `Zero-Mistake`, `Total-Safe`).
    *   Lists optional add-on services.
    *   Includes a contact form for inquiries.

---

## **3. Current Task: Main Page Visual Enhancement**

**Objective:** To refine the main page design for a softer, more professional, and visually engaging user experience.

**Plan:**

1.  **Apply Light Mint Background:**
    *   **Target:** Hero section and Contact section.
    *   **Action:** Change the background color of `.hero` and `.contact-section` from white/dark to a light mint color (`#f0fff8`) to create a gentle and welcoming feel.

2.  **Redesign Process Section:**
    *   **Target:** `.process-section`.
    *   **Action:** Convert the linear, arrow-connected steps into a modern card-based design. Each `.step` will become a distinct card with a shadow and rounded corners, improving readability and visual appeal. The arrows will be removed.

3.  **Enhance Testimonials Section:**
    *   **Target:** `.testimonial-cards`.
    *   **Action:**
        *   Change the background of the testimonial cards to the primary green color (`--primary-color`) with white text for better contrast and emphasis.
        *   Enrich the review content to be more specific and compelling.
        *   Add a third testimonial from the perspective of a corporate health manager to highlight the B2B benefits of the service.

4.  **Update HTML and JS:**
    *   **Target:** `index.html`, `main.js`.
    *   **Action:** Update the HTML structure to remove process arrows and add the new testimonial. Update the i18n translation keys in `main.js` to reflect the new and updated review texts.

