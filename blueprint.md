# CHECKIT Website Blueprint

## 1. Project Overview

CHECKIT is a service that helps foreigners navigate the complexities of the Korean healthcare system for medical check-ups. The website aims to attract and inform individual and corporate clients about the services offered.

## 2. Design and Style Guide

### 2.1. Aesthetics & Feel

The design will be modern, clean, and trustworthy. It will use a professional color palette, high-quality images, and clear typography to build confidence and guide the user.

*   **Color Palette:**
    *   Primary: #007BFF (A trustworthy blue)
    *   Secondary: #6C757D (A calm gray)
    *   Accent: #28A745 (A reassuring green for success states or CTAs)
    *   Background: #FFFFFF (Clean white)
    *   Text: #212529 (Dark, readable gray)
*   **Typography:**
    *   Headings: A clean, modern sans-serif font like **Montserrat** or **Lato**.
    *   Body: A highly readable sans-serif font like **Open Sans** or **Roboto**.
*   **Iconography:** Use modern, universally understood icons (e.g., from Font Awesome) to visually support key features and benefits.

### 2.2. Layout

The layout will be responsive and mobile-first, using a combination of CSS Grid and Flexbox for structure. It will be organized into clear, scannable sections with ample whitespace.

## 3. Feature Implementation

### 3.1. Core Pages

*   **`index.html`**: The main landing page, directing users to either the "Individual" or "Corporate" sections.
*   **`individual.html`**: The page detailing the problems and solutions for individual users.
*   **`corporate.html`**: The page for corporate clients.

### 3.2. Web Components

To create a modular and maintainable codebase, I will use Web Components for the following:

*   **`language-switcher`**: A reusable component for switching the language.
*   **`pricing-card`**: A component for displaying the different service plans.
*   **`reality-card`**: A component to showcase the "reality" of the current situation.
*   **`story-card`**: A component for the personal story section.
*   **`faq-accordion`**: An interactive FAQ section.

### 3.3. Interactivity

*   **Smooth Scrolling:** For anchor links.
*   **Hover Effects:** On buttons and cards to provide visual feedback.
*   **Subtle Animations:** On-scroll animations to make the content appear more dynamic.
*   **Interactive "How it Works" Section:** A step-by-step visual guide to the CHECKIT process.

## 4. Current Task: Revamp `individual.html`

### 4.1. Plan

1.  **Redesign the Hero Section:** Create a more impactful and visually appealing hero section with a clear value proposition.
2.  **Restructure the "Expectation vs. Reality" Section:** Use a more engaging, side-by-side comparison or a card-based layout.
3.  **Create a "How It Works" Section:** A clear, step-by-step guide to using CHECKIT's service.
4.  **Redesign the Pricing Section:** Make the plans easier to compare and understand.
5.  **Add a Testimonials Section:** Include social proof to build trust (using placeholders for now).
6.  **Add an FAQ Section:** Address common questions with an interactive accordion.
7.  **Improve the Footer:** Add more useful links and information.

### 4.2. Execution

*   **HTML (`individual.html`):** Restructure the HTML to be more semantic and to accommodate the new design.
*   **CSS (`style.css`):** Rewrite the CSS to implement the new design, using modern features like CSS Variables, Flexbox, and Grid.
*   **JavaScript (`individual.js`):** Create the necessary Web Components and add any required interactivity.
