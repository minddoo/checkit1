# Blueprint: CHECKIT - Comprehensive Multilingual Service Platform

## 1. Project Overview

This project expands the CHECKIT website into a comprehensive, multilingual platform. Key enhancements include the addition of Chinese and Vietnamese language support across the entire site and chatbot, the creation of three new content sections on the main page (Process, Why Us, Reviews), and the development of dedicated pages for individual and corporate clients. A new contact form will also be added to streamline user inquiries.

## 2. Core Features & Design (PERMANENTLY LOCKED)

The designs, functionalities, and text for the entire site (Main, Individual, Corporate, Chatbot, and Language Switcher) are finalized and **PERMANENTLY LOCKED**. No modifications are permitted. 

**Future scope is strictly limited to Stage 3: Login/Authentication System.**

### **A. Main Page (`index.html`) - LOCKED**
... (all sub-points remain locked)

### **B. Individual Page (`individual.html`) - LOCKED**
... (all sub-points remain locked)

### **C. Corporate Page (`corporate.html`) - LOCKED**
... (all sub-points remain locked)

### **D. Chatbot (`Check봇`) & Multilingual Switcher - LOCKED**
*   **Design:** Compact 85vh UI, right-aligned buttons, language-specific text alignment.
*   **Logic:** Dynamic welcome translation, greeting detection, preset FAQ answers.

## 3. Stage 3: Login & Authentication System (ACTIVE WORK AREA)
This is the only area permitted for modification.
*   **Authentication:** Firebase Auth (Google & Email).
*   **User Roles:** User, Corporate Admin, Super Admin.
*   **Profile Handling:** Onboarding and Metadata management.
*   **Individual Customer My Page:**
    *   **File:** `mypage_individual.html` created for individual user profiles.
    *   **Styling:** Basic CSS added to `style.css` for the profile page layout.
    *   **Redirection Logic (`script.js`):**
        *   Upon successful login as an 'Individual' user (`loginType === 'user'`), users are now redirected to `mypage_individual.html`.
        *   The `renderMyPage` function has been modified to redirect individual users (`userData.role === 'user'`) to `mypage_individual.html`.
        *   Ensured that the user's role is explicitly set to 'user' in the database if `loginType` is 'user' during the `handleSuccess` process.

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
