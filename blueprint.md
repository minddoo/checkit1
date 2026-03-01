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
*   **Hero Section Standardization (March 2026):**
    *   **Uniform Height:** Both individual and corporate hero sections are set to a consistent **400px height** for a balanced look across the site.
    *   **Text Clarity:** Hero titles and subtitles are set to **absolute black (#000)** for maximum readability.
    *   **Character Visibility:** Original character assets (`체킷 캐릭터.png` for individual, `기.png` for corporate) are restored and scaled to fit the standardized height.
*   **Restored Design integrity:** All section paddings (90px), mobile sliders, and responsive grid layouts have been restored to their original stable state to maintain design consistency.

### **Feature 1: Expanded Language Support**

*   **Languages Added:** Chinese (CN) and Vietnamese (VN) will be added to the existing Korean and English options.
*   **Website Translation:** The header navigation will include buttons for all four languages (KR, EN, CN, VN). All text content on the main page and new dedicated pages will be translatable.
*   **Chatbot Translation:** The "Check봇" will also support conversations in all four languages, with corresponding buttons in the chat window.

### **Feature 2: Check봇 (Chatbot)**

*   The chatbot's Q&A database will be updated to include information from the new sections and will be fully translatable into all four supported languages.

## 3. File Structure

*   `index.html`: Updated with new sections (Process, Why CHECKIT, Reviews), a contact form, and links to the new pages.
*   `individual.html`: Dedicated page for individual client services.
*   `corporate.html`: Dedicated page for corporate client services.
*   `style.css`: Restored to stable design with standardized 400px hero sections.
*   `script.js`: Significantly updated to manage translations for four languages (KR, EN, CN, VN) across the entire site and the chatbot.
*   `blueprint.md`: This document, outlining the project scope and design standards.
