
# Blueprint: CHECKIT Website

## 1. Project Overview

CHECKIT is a concierge service that assists foreigners with the health check-up process in Korea. It is not a medical service. The goal is to provide a smooth, transparent, and convenient experience for a set service fee.

## 2. Implemented Features & Design

*   **Multi-Page Architecture:** The site uses separate pages for the main landing page (`index.html`) and a dedicated page for individual customers (`individual.html`).
*   **Language Toggle:** Switch between Korean, English, Chinese, and Vietnamese with preference saved across sessions.
*   **Modern & Clean UI:** A visually appealing design with a hero section, process steps, and contact forms.
*   **Homepage with Customer Segmentation:** Users can choose between "For Individuals" and "For Business" paths.
*   **Storytelling Narrative:** The `individual.html` page uses a "Before vs. After" narrative to build empathy and demonstrate the value of the service.

## 3. Final Plan: Implement Definitive Packages, Options, and Currency Conversion

The current goal is to finalize the `individual.html` page by implementing the exact product structure, pricing, and features as provided, and to add dynamic currency conversion.

**This involves:**

1.  **Rebuilding the Pricing Section:**
    *   Create a three-tier package structure based on the provided images:
        *   **No-Confusion Plan:** 400 USD
        *   **Zero-Mistake Plan:** 500 USD
        *   **Total-Safe Plan:** 700 USD
    *   Accurately list all included features for each plan and the "Best for:" description.

2.  **Creating an Add-On Options Section:**
    *   Add a distinct "+Option" section below the main packages.
    *   List all optional add-ons with their USD prices, as specified in the images (e.g., English Receipt Request, Schedule Change Options).

3.  **Implementing Dynamic Currency Conversion:**
    *   The base currency will be **USD**.
    *   Prices will be dynamically converted and displayed in the user's selected language's currency:
        *   **KR (Korean):** KRW
        *   **EN (English):** USD
        *   **CN (Chinese):** CNY
        *   **VI (Vietnamese):** VND
    *   This will be handled in `main.js` by reading a `data-price-usd` attribute from the HTML and applying a stored exchange rate.

4.  **Complete Overhaul of Content and Translations:**
    *   Transcribe all text from the provided images into the `translations` object in `main.js`.
    *   Provide full and accurate translations for Korean, Chinese, and Vietnamese for all new package names, features, option details, and descriptions.

5.  **Final CSS Adjustments:**
    *   Refine the styles for the new, detailed pricing cards and the new options section to ensure clarity, readability, and a premium feel.
