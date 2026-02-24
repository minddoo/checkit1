# Blueprint: CHECKIT - Advanced Service Website

## 1. Project Overview

This project will overhaul the CHECKIT website into an advanced, feature-rich platform. The redesign focuses on a professional green color scheme and a clear, card-based layout to present detailed information for both individual and corporate clients. 

Key new features include full site-wide language translation and an interactive chatbot named "Check봇" to provide immediate user assistance, significantly improving user engagement and support.

## 2. Core Features & Design

### **Visual Design**

*   **Primary Color:** The entire website theme will be shifted to a professional and calming **green**.
*   **Card-Based Layout:** All major content sections, especially for client services, will use a modern card design to enhance readability and visual separation.
*   **Chatbot Icon:** A distinct chatbot icon will be placed in the bottom-right corner of the screen, providing a constant, accessible point of contact.

### **Content Structure**

*   **Detailed Service Sections:** The main page will be divided into clear sections for:
    *   **Individual Clients:** Targeting foreigners residing in or visiting Korea, focusing on overcoming language barriers and confusion.
    *   **Corporate Clients:** Highlighting the benefits for businesses, such as systematic health management for foreign employees, prevention of industrial accidents, and improved employee participation and satisfaction.

### **Feature 1: Check봇 (Chatbot)**

*   **Name:** Check봇 (Checkbot)
*   **Location:** Fixed to the bottom-right corner of the viewport.
*   **Functionality:**
    1.  **Interactive Chat Room:** Users can type questions and receive answers.
    2.  **Basic AI:** The chatbot will respond to predefined questions based on the website's service content (e.g., "What services do you offer?", "Tell me about corporate plans.").
    3.  **In-Chat Language Switching:** The chatbot window will contain its own language selection buttons, allowing the conversation itself to be translated and conducted in the user's preferred language.

### **Feature 2: Website Language Translation**

*   **Trigger:** Header navigation will include language buttons (e.g., KR, EN, CN, VI).
*   **Functionality:** Clicking a language button will dynamically translate all major text content on the website to the selected language without a page reload. This will be managed via JavaScript and a language data object.

## 3. File Structure

*   `index.html`: Will be updated to include the new content sections, card structures, and the HTML for the chatbot icon and container.
*   `style.css`: Will be completely revised to implement the new **green** color theme, updated card designs, and styles for the chatbot UI.
*   `script.js`: Will be significantly expanded to include all logic for:
    *   The chatbot's visibility and interaction.
    *   The chatbot's Q&A engine.
    *   The chatbot's internal language switching.
    *   The main website's language translation.
*   `blueprint.md`: This document, outlining the complete project plan and features.

## 4. Development Plan

1.  **Phase 1: Foundation & Design Overhaul:** Update HTML with new content and CSS with the green theme and card styles. Add chatbot placeholders.
2.  **Phase 2: Implement Checkbot:** Build the chatbot's UI and its core Q&A and internal language-switching logic.
3.  **Phase 3: Implement Website Translation:** Create the data structure for all site text and write the JavaScript function to dynamically translate the page content based on header language selection.
