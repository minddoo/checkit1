
# Blueprint: CHECKIT Website

## 1. Project Overview

CHECKIT is a concierge service that assists foreigners, both residing in and outside of Korea, with the health check-up process in Korea. It is not a medical service and does not involve commissions or brokerage. The service aims to solve issues foreigners face, such as language barriers, lack of information, and unfair pricing. The goal is to provide a smooth, transparent, and convenient experience for a set service fee, whether they are visiting for medical tourism or are residents.

## 2. Target Audience & Value Proposition

The website caters to two distinct customer segments with different narratives.

### 2.1. Individual Customers (B2C)
- **Target:** Foreign residents in Korea and foreigners abroad interested in medical tourism in Korea.
- **Pain Points:** Language barriers, complicated booking systems, uncertainty about costs, and difficulty understanding results.
- **Value Proposition:** Find the right check-up within your budget at the same price as locals. We provide booking assistance and translated results for a seamless experience.

### 2.2. Corporate Customers (B2B)
- **Target:** Companies employing foreign workers (e.g., from China, Vietnam).
- **Pain Points:**
    - Language barriers leading to misunderstanding of health results, potentially causing industrial accidents.
    - Overburdened health managers struggling to handle the specific needs of many foreign employees.
- **Value Proposition:** Minimize industrial accidents by ensuring foreign employees understand their health status. Enable efficient and consistent health management for all foreign staff, reducing the workload on internal managers without compromising quality.

## 3. Implemented Features & Design

*   **Homepage with Customer Segmentation:** Users can choose between "For Individuals" and "For Business" paths.
*   **Language Toggle:** Switch between Korean and English.
*   **Modern & Clean UI:** A visually appealing design with a hero section, service description, process steps, and FAQ.
*   **FAQ Section:** Dynamically loaded FAQ content based on the selected language.
*   **Interactive Header:** The header changes background on scroll.
*   **Chatbot:** A floating chatbot provides answers to common questions.

## 4. Current Plan: Develop Personalized Content Sections

The current goal is to create dedicated content sections for each customer type that are revealed when a user makes a selection on the homepage.

**This involves:**

1.  **Create `individual-services` Section:**
    *   Design a new section in `index.html` that is initially hidden.
    *   Add a "Why Choose Us?" subsection tailored to individual users, addressing their specific pain points.
    *   Add a "Services for Individuals" subsection that details the services relevant to them.

2.  **Create `business-services` Section (Placeholder):**
    *   Create a placeholder section for business customers that will be developed later.

3.  **Implement Dynamic Display in `main.js`:**
    *   Write a script that shows the relevant section (`individual-services` or `business-services`) and hides the other sections when a user clicks the corresponding "Learn More" button.
    *   The page will smoothly scroll to the revealed section.

4.  **Add Translations:**
    *   Populate `main.js` with multilingual text for all new content.

5.  **Style New Sections in `style.css`:**
    *   Add CSS to style the new sections and manage their visibility.
