
# Blueprint: CHECKIT Website

## 1. Project Overview

CHECKIT is a concierge service that assists foreigners, both residing in and outside of Korea, with the health check-up process in Korea. It is not a medical service and does not involve commissions or brokerage. The service aims to solve issues foreigners face, such as language barriers, lack of information, and unfair pricing. The goal is to provide a smooth, transparent, and convenient experience for a set service fee, whether they are visiting for medical tourism or are residents.

## 2. Target Audience & Value Proposition

The website will cater to two distinct customer segments with different narratives.

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

*   **Language Toggle:** Switch between Korean and English.
*   **Modern & Clean UI:** A visually appealing design with a hero section, service description, process steps, and FAQ.
*   **FAQ Section:** Dynamically loaded FAQ content based on the selected language.
*   **Interactive Header:** The header changes background on scroll.
*   **Chatbot:** A floating chatbot provides answers to common questions.

## 4. Current Plan: Implement Customer Segmentation

The immediate goal is to restructure the homepage to guide users into two distinct paths: "For Individuals" and "For Business".

**Steps:**

1.  **Update `index.html`:** Modify the hero section or add a new section immediately after it to present two clear choices to the user.
2.  **Create Separate Sections/Pages:** Develop distinct content and user flows for each segment.
3.  **Refine Messaging:** Tailor the language and calls-to-action for each path.
