# Blueprint: CHECKIT - Comprehensive Multilingual Service Platform

## 1. Project Overview and Capabilities

This project is a comprehensive, multilingual platform designed to assist foreigners with the entire health check-up process, excluding medical acts. Its core value proposition focuses on non-medical processes and removing language barriers.

The platform provides a user-friendly experience with:
*   Multilingual support (Korean, English, Chinese, Vietnamese) across the entire site and chatbot.
*   Dedicated pages for individual and corporate clients.
*   A robust login and authentication system with role-based access control (RBAC).
*   Personalized "My Page" for individual clients to manage their health check-up process.
*   A corporate portal for administrators to manage employee health check-ups.
*   Real-time updates and persistent chat functionalities.
*   Secure data management with Firebase Firestore and Authentication.

## 2. Core Features & Design (PERMANENTLY LOCKED - TOTAL LOCK - STAGE 2)

**IMPORTANT**: The following elements are **PERMANENTLY LOCKED**. The AI must **NOT** modify the structure, design, layout, text, or logic of these elements, as per user instructions and `GEMINI.md`.

*   **ALL PAGES (`index.html`, `individual.html`, `corporate.html`, `mypage_corporate.html`, `mypage_individual.html`, `platform.html`)**:
    *   **LOCKED**: All hero sections, character placements, margins, text structures, and line breaks.
    *   **LOCKED**: All sub-sections (Necessity, Welfare, Reality, Solutions, Pricing, Testimonials).
    *   **LOCKED**: Multilingual content and `data-lang-key` mappings.

*   **CHATBOT & LANGUAGE SWITCHER**:
    *   **LOCKED**: Chatbot UI height, position, header layout, and intelligent response logic.
    *   **LOCKED**: Language buttons' design, position, and functional real-time switching logic.

### **A. Main Page (`index.html`) - LOCKED**
*   **Purpose:** Entry point for all users, providing an overview of services.
*   **Key Sections:** Hero, Necessity, Welfare, Reality, Solutions, Pricing, Testimonials.
*   **Multilingual Support:** All content dynamically translated based on selected language.

### **B. Individual Page (`individual.html`) - LOCKED**
*   **Purpose:** Details services tailored for individual clients.
*   **Key Sections:** Similar structure to main page but focused on individual benefits.

### **C. Corporate Page (`corporate.html`) - LOCKED**
*   **Purpose:** Details services tailored for corporate clients.
*   **Key Sections:** Similar structure to main page but focused on corporate benefits.

### **D. My Page for Individual Clients (`mypage_individual.html`) - LOCKED Visuals/Structure**
*   **Purpose:** Personalized dashboard for individual clients to track their health check-up process.
*   **LOCKED Elements:** The overall layout, structural elements (e.g., package name/items display areas) are locked. Content within these areas is dynamic.
*   **Dynamic Content:** User-specific data such as `fullName`, `email`, `packageName`, and `packageItems` are fetched from Firestore and displayed.

### **E. My Page for Corporate Clients (`mypage_corporate.html`) - LOCKED Visuals/Structure**
*   **Purpose:** Dashboard for corporate administrators to manage employee health check-ups.
*   **LOCKED Elements:** The overall layout, structural elements (e.g., summary statistics, employee table) are locked. Content within these areas is dynamic.
*   **Dynamic Content:** Displays summary statistics, employee management table, and supports filtering based on active `siteId`.

### **F. Platform Dashboard (`platform.html`) - LOCKED**
*   **Purpose:** Centralized internal platform for managing health check-up processes.

### **G. Chatbot (`Check봇`) & Multilingual Switcher - LOCKED**
*   **Design:** Compact 85vh UI, right-aligned buttons, language-specific text alignment.
*   **Logic:** Dynamic welcome translation, greeting detection, preset FAQ answers.
*   **Multilingual Support:** Chatbot responses and UI elements are fully localized.

## 3. Active Development Area: Login & Authentication System (STAGE 3)

This is the **ONLY PERMITTED AREA FOR MODIFICATION**. Any changes must have **ZERO IMPACT** on the visual or structural integrity of the locked pages.

*   **Authentication:** Firebase Auth (Google & Email/Password).
*   **User Roles:** User, Corporate Admin, Super Admin.
*   **Profile Handling:** Onboarding and Metadata management.

### **A. Individual Customer My Page Logic (`script.js` & `mypage_individual.html` interactions)**
*   **File (`mypage_individual.html`):** Displays user-specific data; structure is locked, content is dynamic.
*   **Styling (`style.css`):** Styles related to `.profile-picture-container` and `.profile-picture` were removed (historical context).
*   **Logic (`script.js`):**
    *   The `renderMyPage` function's error handling for individual users was simplified to directly redirect to `mypage_individual.html`.
    *   The `renderUser` function (generic user My Page rendering) was removed, its functionality now integrated into `mypage_individual.html`.
    *   `loadMyPageIndividualData(user, db)`: An asynchronous function created to fetch the current user's profile data (`fullName`, `email`, `packageName`, `packageItems`) from Firestore and dynamically populate `mypage_individual.html`.
    *   `loadMyPageIndividualData` is called upon `DOMContentLoaded` when `mypage_individual.html` is the active page.
    *   `handleSuccess` function updated to set default values for `packageName` ("기본 패키지") and `packageItems` (e.g., ["상담 지원", "예약 대행"]) in the user's Firestore document upon new user signup.

## 4. Platform Backend & Data Architecture

### **A. Authentication System (Firebase Auth)**
*   **Methods:** Google OAuth 2.0 and Email/Password authentication.
*   **User Profiles:** Automatic creation of a profile in the `users` collection upon signup to store roles and metadata.

### **B. Service Management Platform (My Page)**
*   **Real-time Dashboard:** Uses Firestore `onSnapshot` to update the service timeline and active step details instantly.
*   **Persistent 1:1 Chat:** Dedicated support chat per user, stored in a subcollection, with history preserved.
*   **Automatic Initialization:** New users automatically receive a default service process template upon registration.

### **C. Lead Management (Contact Forms)**
*   **Centralized Inquiries:** All "Contact Us" submissions are saved to the `contact_inquiries` collection (and now additionally via Formspree).
*   **Metadata Tracking:** Captures email, phone, company, message, timestamp, source URL, and user language preference.

### **D. Data Schema (Firestore) - v2.0 (March 2026)**

#### **`users/{uid}`**
*   `role`: "user" | "super_admin" | "company_admin"
*   `email`: string
*   `companyId`: string (For corporate admins)
*   `fullName`: string
*   `nationality`: string
*   `dob`: string
*   `onboardingComplete`: boolean
*   `packageName`: string (Name of the package purchased by the customer)
*   `packageItems`: array of strings (List of service items included in the package)

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

### **E. Corporate Portal (Enriched)**
*   **Real-time Dashboard:** Displays summary statistics (Total, Pending, Reserved, Completed, Expired) globally or per site.
*   **Site-Specific Management:**
    *   **Dynamic Site Filtering:** A dedicated filter that automatically populates based on active `siteId` values in employee data.
    *   **Contextual Stats:** Summary cards automatically recalculate statistics based on the selected site.
    *   **Granular Reporting:** CSV exports now support exporting data for a specific site or all sites combined.
*   **Employee Management Table:** Detailed view of employee status, site assignments, and examination dates.
*   **Search & Filtering:** Dynamic filtering by name, site ID, and service status.
*   **Secure Access:** Promotion to `company_admin` via specialized security keys (`COMP_ID` format) during authentication.

### **F. Security Rules (`firestore.rules`)**
*   **Role-Based Access Control (RBAC)**: Defined in `firestore.rules`.
*   **Privacy**: Users can only read/write their own process and messages.
*   **Admin Access**: `super_admin` can manage all documents; `company_admin` can view documents belonging to their `companyId`.

## 5. Service Scope Enforcement
*   Strictly non-medical administrative support.
*   No hospital payment processing (direct payment to hospitals by users).
*   No medical advice or recommendations.

## 6. Current Task

No active task. Awaiting user instructions.