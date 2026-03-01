# Blueprint: CHECKIT - Comprehensive Multilingual Service Platform

## 1. Project Overview

This project expands the CHECKIT website into a comprehensive, multilingual platform. Key enhancements include the addition of Chinese and Vietnamese language support across the entire site and chatbot, the creation of three new content sections on the main page (Process, Why Us, Reviews), and the development of dedicated pages for individual and corporate clients. A new contact form will also be added to streamline user inquiries.

## 2. Core Features & Design

### **Visual & Structural Enhancements**

*   **New Main Page Sections:** The `index.html` page will be enriched with three new, card-based sections:
    1.  **Process:** Visually outlines the steps for using the service.
    2.  **Why CHECKIT:** Highlights key benefits and reasons to choose the service.
    3.  **Reviews:** Showcases testimonials from satisfied clients.
*   **Dedicated Client Pages:** 
    *   `individual.html` & `corporate.html` have been implemented with modern, responsive designs tailored to each client type.
    *   `individual.html` focuses on personal health check-up support with 1:1 manager services.
    *   `corporate.html` focuses on health management for groups of foreign employees, productivity enhancement, and workload reduction for health managers.
    *   "Learn More" buttons on the main page link correctly to these dedicated pages.
    *   **Note:** The refund policy section has been removed from `individual.html` per user request.
*   **Contact Form:** A new section will be added, featuring a simple and clean form for users to submit inquiries (Email, Phone, Message).

### **Feature 1: Expanded Language Support**

*   **Languages Added:** Chinese (CN) and Vietnamese (VN) will be added to the existing Korean and English options.
*   **Website Translation:** The header navigation will include buttons for all four languages (KR, EN, CN, VN). All text content on the main page and new dedicated pages will be translatable.
*   **Chatbot Translation:** The "Check봇" will also support conversations in all four languages, with corresponding buttons in the chat window.

### **Feature 2: Check봇 (Chatbot)**

*   The chatbot's Q&A database will be updated to include information from the new sections and will be fully translatable into all four supported languages.

## 3. File Structure

*   `index.html`: Updated with new sections (Process, Why CHECKIT, Reviews), a contact form, and links to the new pages.
*   `individual.html`: **New file.** Dedicated page for individual client services.
*   `corporate.html`: **New file.** Dedicated page for corporate client services.
*   `style.css`: Updated with styles for the new sections, the contact form, and any necessary layout adjustments.
*   `script.js`: Significantly updated to manage translations for four languages (KR, EN, CN, VN) across the entire site and the chatbot. It will also contain the logic for the new pages if needed.
*   `blueprint.md`: This document, outlining the expanded project scope.

## 4. Development Plan

1.  **Phase 1: Structure & New Pages:** Update `blueprint.md`. Create `individual.html` and `corporate.html` with basic placeholder content. Update `index.html` with the new sections, contact form, and language buttons.
2.  **Phase 2: Styling:** Update `style.css` to ensure all new elements are visually consistent with the existing design system.
3.  **Phase 3: Translation & Logic:**
    *   Populate the `translations` object in `script.js` with all text content in Korean, English, Chinese, and Vietnamese.
    *   Update the chatbot's response object with translations for all four languages.
## 5. Recent Design Updates (March 2026)

*   **Design Restoration:** Successfully restored the overall design of individual and corporate client pages from a stable version after unintended style deletions.
*   **Hero Section Optimization:**
    *   **Individual Hero:** Fixed height at 400px for consistency.
    *   **Corporate Hero:** Implemented an **ultra-slim (banner-like) design** with a minimum height of 40px, reduced padding, and significantly smaller font sizes and character images to minimize vertical space at the top of the page.
*   **Vertical Spacing Compression:** Reduced the padding of all sections on the corporate page (`corporate.html`) from 90px to 20px to create a more compact and streamlined user experience.
*   **Mobile Optimization:** All design restorations and hero optimizations have been applied to mobile views, ensuring consistent slim layouts across all devices.
