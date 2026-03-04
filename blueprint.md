# Blueprint: CHECKIT - Comprehensive Multilingual Service Platform

## 1. Project Overview

This project expands the CHECKIT website into a comprehensive, multilingual platform. Key enhancements include the addition of Chinese and Vietnamese language support across the entire site and chatbot, the creation of three new content sections on the main page (Process, Why Us, Reviews), and the development of dedicated pages for individual and corporate clients. A new contact form will also be added to streamline user inquiries.

## 2. Core Features & Design (LOCKED - TOTAL PRESERVATION)

The designs, functionalities, and text for the following sections are finalized and **STRICTLY LOCKED**. No modifications of any kind are permitted without a "Force Override". Any system update must ensure zero impact on these elements.

### **A. Main Page (`index.html`) - Design Identity: "Trust & Overview"**
*   **Hero Section:** High-contrast white text on a dark overlay, emphasizing the primary CTA.
*   **Service For:** Symmetrical card layout for Individual and Corporate entry points.
*   **Why CHECKIT:** Grid-based features with a "Blinking Character" asset to add life to the page.
*   **Process:** Clean, numbered step-by-step guide for general users.
*   **Testimonials:** Professional card layout showcasing client success.

### **B. Individual Page (`individual.html`) - Design Identity: "Empathy & Solution"**
*   **Hero Section:** Features a large `hero_character.png` for a friendly, approachable 1:1 feel.
*   **Expectation Section:** Image-heavy vertical list using `#1` to `#4` tags to mirror common foreigner concerns.
*   **Reality Section:** Diary-style "Pain Point" list with a dark/contrasting background to emphasize the difficulties foreigners face.
*   **Price Structure Section:** Unique light-yellow radial gradient background. This is a text-centric section designed for deep clarity and trust regarding hospital pricing.
*   **Packages:** Three-tier card layout (No-Confusion, Zero-Mistake, Total-Safe) with specific feature checklists.

### **C. Corporate Page (`corporate.html`) - Design Identity: "Efficiency & B2B Professionalism"**
*   **Hero Section:** Corporate-blue and white theme focusing on productivity and workload reduction. Includes a specialized "Process Slide Modal" button.
*   **Necessity & Welfare Sections:** Focus on legal compliance, ESG management, and employee retention using professional iconography.
*   **Reality Pain Section:** Comparison layout highlighting the "Management Gap" between hospital output and corporate needs.
*   **Solution Value:** A "Hospital/Corporate vs CHECKIT" comparison table to clearly define the non-medical administrative role.
*   **Operational Roadmap:** A vertical timeline (01 to 06) detailing the exact B2B workflow from list reception to final reporting.

### **D. Chatbot (`Check봇`) - Design Identity: "Multilingual Instant Support"**
*   **Expanded UI:** Optimized container height (85vh) with a compact header and message area to maximize conversation visibility.
*   **Intelligent Logic:** Automated responses including multilingual greeting detection and a helpful fallback message directing users to the contact form.
*   **Preset Knowledge:** Five standard B2B/B2C questions (Reservation, Contracts, Medical Scope, Day-of-Support, Results) with verified multilingual answers.
*   **Interface:** Right-aligned language switcher buttons in the header for quick accessibility.

### **E. Global Design Standards**
*   **Unified Margins:** All pages use a standard `.container` with `max-width: 1200px` and consistent horizontal padding.
*   **Mobile Experience:** Multi-card sections use horizontal sliders with `scroll-snap-type`.
*   **Typography:** Expressive use of Pretendard and Noto Sans SC for multilingual clarity.

## 3. Multilingual Support
... (rest of the file remains unchanged)

*   **Languages:** Korean (KO), English (EN), Chinese (CN), Vietnamese (VN).
*   **Real-time Switch:** Entire UI, including the Platform Dashboard and Chatbot, updates instantly when the language is changed.

## 4. Platform Backend & Data Architecture

### **Authentication System (Firebase Auth)**
*   **Methods:** Google OAuth 2.0 and Email/Password authentication.
*   **User Profiles:** Automatic creation of a profile in the `users` collection upon signup to store roles and metadata.

### **Service Management Platform (My Page)**
*   **Real-time Dashboard:** Uses Firestore `onSnapshot` to update the service timeline and active step details instantly when changed by a manager.
*   **Persistent 1:1 Chat:** A dedicated support chat per user, stored in a subcollection. History is preserved across sessions.
*   **Automatic Initialization:** New users automatically receive a default service process template upon registration.

### **Lead Management (Contact Forms)**
*   **Centralized Inquiries:** All "Contact Us" submissions are saved to the `contact_inquiries` collection (and now additionally via Formspree).
*   **Metadata Tracking:** Captures email, phone, company, message, timestamp, source URL, and user language preference.

### **Data Schema (Firestore) - v2.0 (March 2026)**

#### **`users/{uid}`**
*   `role`: "user" | "super_admin" | "company_admin"
*   `email`: string
*   `companyId`: string (For corporate admins)
*   `fullName`: string
*   `nationality`: string
*   `dob`: string
*   `onboardingComplete`: boolean

#### **`user_process/{docId}` (Restructured)**
*   **Basic Info**
    *   `name`: string (Employee name)
    *   `companyId`: string (SAMSUNG, HYUNDAI, etc.)
    *   `site`: string (Worksite/Branch location)
*   **Schedule (Timestamps)**
    *   `reservationStart`: timestamp (Start of booking window)
    *   `reservationEnd`: timestamp (End of booking window)
    *   `examStart`: timestamp (Actual examination start date)
    *   `examEnd`: timestamp (Actual examination end date)
*   **Service Details**
    *   `contactMethod`: string (Prefered communication channel)
    *   `hospital`: string (Assigned hospital name)
    *   `examType`: string (e.g., General, Special, New-hire)
    *   `supportAmount`: number (Subsidy/Support amount in KRW)
*   **Administrative**
    *   `requiredDocument`: string (List of documents needed)
    *   `specialNote`: string (Notes for the manager/admin)
    *   `status`: string (pending, reserved, completed, expired)
    *   `updatedAt`: timestamp (Auto-updated on change)

#### **`user_process/{docId}/messages/{msgId}`**
*   `text`: string
*   `sender`: "user" | "bot"
*   `timestamp`: serverTimestamp
*   **`contact_inquiries/{id}`**: `{ email, phone, company, message, timestamp, source, language, status: "new" | "resolved" }`

### **Corporate Portal (Enriched)**
*   **Real-time Dashboard:** Displays summary statistics (Total, Pending, Reserved, Completed, Expired) globally or per site.
*   **Site-Specific Management (Step 2):** 
    *   **Dynamic Site Filtering:** A dedicated filter that automatically populates based on active `siteId` values in the employee data.
    *   **Contextual Stats:** Summary cards automatically recalculate statistics based on the selected site.
    *   **Granular Reporting:** CSV exports now support exporting data for a specific site or all sites combined.
*   **Employee Management Table:** Detailed view of employee status, site assignments, and examination dates.
*   **Search & Filtering:** Dynamic filtering by name, site ID, and service status.
*   **Secure Access:** Promotion to `company_admin` via specialized security keys (`COMP_ID` format) during authentication.

### **Security Rules**
*   **Role-Based Access Control (RBAC)**: Defined in `firestore.rules`.
*   **Privacy**: Users can only read/write their own process and messages.
*   **Admin Access**: `super_admin` can manage all documents; `company_admin` can view documents belonging to their `companyId`.

## 5. Service Scope Enforcement
*   Strictly non-medical administrative support.
*   No hospital payment processing (direct payment to hospitals by users).
*   No medical advice or recommendations.
