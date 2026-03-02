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
*   **Design Standardization (March 2026):**
    *   **Unified Margins:** All pages now use a standard `.container` with `max-width: 1200px` and consistent horizontal padding for a professional, centered look.
    *   **Hero Alignment:** Corporate and Individual hero sections are now perfectly aligned. Spacing between text and characters is synchronized across both pages.
    *   **Corporate Hero Character:** The character size in the corporate hero section has been increased by 1.5x (from 600px to 900px) to create a more impactful and professional first impression for business clients.
    *   **Text Clarity:** Hero titles and subtitles are set to **absolute black (#000)** for maximum readability on the green hero background.
*   **Mobile App-Like Experience:**
    *   **Horizontal Sliders:** All multi-card sections (Packages, Features, Testimonials) are transformed into horizontal "App-like" sliders on mobile.
    *   **Snap Behavior:** Uses `scroll-snap-type: x mandatory` to ensure cards always land centered.
    *   **Preview Structure:** Cards are sized at 80% width with 10% preview of adjacent cards, creating a modern "swipable" feel.
    *   **Dynamic Scaling:** The centered card is slightly larger (scale 1.05) than side cards (scale 0.95) for focus.
    *   **Scroll Stability:** Vertical scrolling is prioritized, ensuring horizontal sliders never block the user from moving down the page.

### **Feature 1: Expanded Language Support**

*   **Languages Added:** Chinese (CN) and Vietnamese (VN) will be added to the existing Korean and English options.
*   **Website Translation:** The header navigation will include buttons for all four languages (KR, EN, CN, VN). All text content on the main page and new dedicated pages will be translatable.
*   **Chatbot Translation:** The "Check봇" will also support conversations in all four languages, with corresponding buttons in the chat window.

### **Feature 2: Check봇 (Chatbot)**

*   The chatbot's Q&A database will be updated to include information from the new sections and will be fully translatable into all four supported languages.

## 4. Platform Functionality (Implementation Plan)

### **Process Flow**
1.  **Authentication:** User registration and login (Firebase Auth).
2.  **Package Selection:** Link existing package cards to the service flow.
3.  **CHECKIT Service Payment:** Payment integration for CHECKIT fees only.
4.  **Information Intake:** Collect user data (Name, DOB, Language, Travel dates, Budget).
5.  **Service Execution:** Step-by-step progress from hospital list provision to result translation.
6.  **My Page Dashboard:** Real-time status tracking, 1:1 administrative chat, and file management.

### **Data Architecture**
*   **Users:** Stores profile, selected package, and current status.
*   **Applications:** Manages individual service requests and progress milestones.
*   **Chats:** Real-time messaging for administrative support (non-medical).

### **Service Scope Enforcement**
*   Strictly non-medical administrative support.
*   No hospital payment processing (direct payment to hospitals by users).
*   No medical advice or recommendations.
