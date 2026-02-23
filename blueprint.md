
# Blueprint: CHECKIT Website

## 1. Project Overview

CHECKIT is a concierge service that assists foreigners with the health check-up process in Korea. It is not a medical service. The goal is to provide a smooth, transparent, and convenient experience for a set service fee.

## 2. Implemented Features & Design

*   **Multi-Page Architecture:** Main landing page (`index.html`) and a dedicated page for individual customers (`individual.html`).
*   **Language & Currency Toggle:** Switch between Korean, English, Chinese, and Vietnamese, with prices dynamically converting from a USD base.
*   **Uniform Pricing Display:** All service packages are presented equally without a 'recommended' highlight for balanced consideration.
*   **Modular Options:** Add-on services are available separately from the main packages.

## 3. Final Plan: Implement "Expectation vs. Reality" Narrative

The primary goal is to completely redesign the `individual.html` page to create a powerful "Expectation vs. Reality" narrative that highlights the problems CHECKIT solves.

**This involves:**

1.  **New Storytelling Structure:**
    *   **Expectation Section:** Show the positive expectations foreigners have about Korean healthcare (e.g., cost, convenience), using formatted quotes and references (like Reddit posts) from the provided images.
    *   **Reality Section:** Contrast the expectation by showing the real-world problems they face (e.g., No English Support, Confusing Process, Unreliable Scheduling). This will be structured in clear, problem-focused cards.
    *   **Removal of Redundant Sections:** The generic "Process" section will be removed from `individual.html` to focus purely on this new, persuasive narrative flow leading into the service plans.

2.  **Content and Translation Overhaul:**
    *   Transcribe all new English text from the provided "Expectation vs. Reality" images.
    *   Create new i18n keys and provide full, accurate translations for all new content into Korean, Chinese, and Vietnamese.

3.  **CSS Refinements:**
    *   Create distinct, clean styles for the new "Expectation" and "Reality" sections.
    *   Ensure all pricing cards are styled uniformly, removing any highlights or scaling effects from the 'popular' plan.
    *   Review and adjust overall typography and line breaks for consistency and improved readability across the entire page.
