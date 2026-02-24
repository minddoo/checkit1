# CHECKIT-FE

## Project Overview

A simple, multi-language landing page for CHECKIT services, a company that assists foreigners with health check-ups in Korea. The site features a language switcher (KR, EN, CN, VI) and an interactive chatbot to answer frequently asked questions.

## Style, Design, and Features

*   **Overall Aesthetics:** Clean, modern, and trustworthy design using a green primary color (`#00A97F`) and a sans-serif font family (Poppins, Roboto).
*   **Layout:** Fully responsive, single-page layout with a sticky header, hero section, and various content sections (Services, Process, Reviews, Contact).
*   **Header:** Contains the logo, navigation links, and a language switcher.
*   **Hero Section:** Features a prominent title and subtitle that changes based on the selected language.
*   **Chatbot:** 
    *   A floating action button is fixed to the bottom-right of the screen.
    *   Clicking the button opens a chat window.
    *   The chat window has its own language switcher.
    *   It displays a welcome message and a list of frequently asked questions.
    *   Users can click on FAQs or type their own questions to get pre-defined answers.
*   **Responsiveness:** The layout adapts to mobile devices, including a hamburger menu for navigation and a full-screen chat window.

## Current Restoration Plan

**Goal:** Perform a full and complete restoration of the website to make it **identical** to the reference URL: `https://faf9a52c.checkit1111.pages.dev/`.

**Justification:** Previous incremental fixes have failed to resolve persistent UI bugs, including the chatbot icon's visibility and text rendering issues. A full code overwrite is necessary to establish a clean, known-good baseline and ensure stability.

**Action Steps:**

1.  **Overwrite `index.html`:** Re-create the HTML structure from scratch to match the reference site exactly, ensuring all elements and IDs are correct.
2.  **Overwrite `main.js`:** Re-write the JavaScript, including:
    *   The 4-language translation object. The `<br>` tag will be removed from the Chinese `hero-title` as requested to prevent wrapping issues.
    *   Robust logic for the language switcher.
    *   Clean, simple, and correct logic for the chatbot's open/close/messaging functionality.
3.  **Overwrite `style.css`:** Re-write all CSS from scratch to:
    *   **Force Chatbot Icon Position:** Use `position: fixed` and a high `z-index` to ensure the chatbot toggle button is always visible in the bottom-right corner, no matter what.
    *   **Fix Hero Title Font Size:** Adjust the `font-size` of the hero title to ensure it fits on two lines without awkward wrapping, especially for the Chinese translation.
    *   **Correct Chat UI:** Ensure the FAQ buttons within the chat window are appropriately sized to allow the conversation to be easily visible.
4.  **Deploy:** After all files are overwritten, commit the changes and deploy the site to Firebase Hosting to make the restored version live.
