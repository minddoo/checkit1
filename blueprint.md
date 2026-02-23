
# Blueprint: CHECKIT Website

## 1. Project Overview

CHECKIT is a concierge service that assists foreigners with the health check-up process in Korea. It is not a medical service. The goal is to provide a smooth, transparent, and convenient experience for a set service fee.

## 2. Target Audience & Value Proposition

### 2.1. Individual Customers (B2C)
- **Target:** Foreign residents in Korea and foreigners abroad interested in medical tourism in Korea.
- **Pain Points:** Language barriers, complicated booking systems, uncertainty about costs, and difficulty understanding results.
- **Value Proposition:** Find the right check-up within your budget at the same price as locals. We provide booking assistance and translated results for a seamless experience, with clear, tiered service plans.

### 2.2. Corporate Customers (B2B)
- **Target:** Companies employing foreign workers.
- **Pain Points:** Language barriers causing misunderstanding of health results, and overburdened managers.
- **Value Proposition:** Minimize industrial accidents and enable efficient health management for all foreign staff.

## 3. Implemented Features & Design

*   **Multi-Page Architecture:** The site uses separate pages for the main landing page (`index.html`) and a dedicated page for individual customers (`individual.html`).
*   **Homepage with Customer Segmentation:** Users can choose between "For Individuals" and "For Business" paths.
*   **Language Toggle:** Switch between Korean, English, Chinese, and Vietnamese with preference saved across sessions.
*   **Modern & Clean UI:** A visually appealing design with a hero section, service description, process steps, and FAQ.
*   **FAQ Section & Chatbot:** Dynamically loaded FAQ content and a chatbot provide instant answers on the main page.

## 4. Current Plan: Redesign `individual.html` with Tiered Pricing

The current goal is to completely redesign the `individual.html` page to be more professional and informative, based on the tiered service model from the reference link. The centerpiece will be a premium pricing table.

**This involves:**

1.  **Re-structure `individual.html`:**
    *   Replace the current generic service list with a sophisticated **pricing table**.
    *   The table will feature three distinct plans: **LITE**, **STANDARD**, and **PREMIUM**.
    *   Each plan will clearly display its price and list of features using icons (e.g., checkmarks) for easy comparison.
    *   The **STANDARD** plan will be visually highlighted as the "Most Popular" choice.
    *   The CTA button for each plan will link directly to the contact section of the page.

2.  **Enhance CSS in `style.css`:**
    *   Create new styles for the pricing table, including plan headers, feature lists, and buttons.
    *   Use modern design principles (shadows, colors, typography) to create a premium, trustworthy look and feel.
    *   Ensure the new pricing table is fully responsive and optimized for mobile viewing.

3.  **Update `main.js` with New Content:**
    *   Add all new text strings from the pricing table (plan names, prices, feature descriptions) to the `translations` object.
    *   Provide complete translations for Korean, English, Chinese, and Vietnamese.
