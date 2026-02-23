
# Blueprint: CHECKIT Website

## 1. Project Overview

CHECKIT is a concierge service that assists foreigners with the health check-up process in Korea. It is not a medical service. The goal is to provide a smooth, transparent, and convenient experience for a set service fee.

## 2. Target Audience & Value Proposition

The website caters to two distinct customer segments with different narratives.

### 2.1. Individual Customers (B2C)
- **Target:** Foreign residents in Korea and foreigners abroad interested in medical tourism in Korea.
- **Pain Points:** Language barriers, complicated booking systems, uncertainty about costs, and difficulty understanding results.
- **Value Proposition:** Find the right check-up within your budget at the same price as locals. We provide booking assistance and translated results for a seamless experience.

### 2.2. Corporate Customers (B2B)
- **Target:** Companies employing foreign workers.
- **Pain Points:** Language barriers causing misunderstanding of health results, and overburdened managers.
- **Value Proposition:** Minimize industrial accidents and enable efficient health management for all foreign staff.

## 3. Implemented Features & Design

*   **Multi-Page Architecture:** The site now uses separate pages for the main landing page and for detailed customer segments (starting with individuals).
*   **Homepage with Customer Segmentation:** Users can choose between "For Individuals" and "For Business" paths.
*   **Language Toggle:** Switch between Korean, English, Chinese, and Vietnamese.
*   **Modern & Clean UI:** A visually appealing design with a hero section, service description, process steps, and FAQ.
*   **FAQ Section & Chatbot:** Dynamically loaded FAQ content and a chatbot provide instant answers.

## 4. Current Plan: Create Dedicated Page for Individual Customers

The current goal is to create a new, separate page entirely dedicated to individual customers, providing a focused experience.

**This involves:**

1.  **Create `individual.html`:**
    *   Create a new HTML file for individual customers.
    *   Design a unique layout including a tailored hero section, "Why Choose Us?", detailed service descriptions, the user process, and a contact form.
    *   Ensure the header, footer, and all necessary assets (CSS, JS) are correctly linked.

2.  **Update `index.html` (Main Page):
    *   Modify the link on the "For Individuals" card to point to the new `individual.html`.
    *   Remove the now-redundant `#individual-services` section from the main page to simplify its structure.

3.  **Refactor `main.js`:**
    *   Remove the JavaScript logic that was responsible for showing and hiding the service details section on the main page, as it is no longer needed.
