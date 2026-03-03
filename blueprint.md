# Blueprint: CHECKIT - Comprehensive Multilingual Service Platform

## 1. Project Overview

This project expands the CHECKIT website into a comprehensive, multilingual platform. Key enhancements include the addition of Chinese and Vietnamese language support across the entire site and chatbot, the creation of three new content sections on the main page (Process, Why Us, Reviews), and the development of dedicated pages for individual and corporate clients. A new contact form will also be added to streamline user inquiries.

## 2. Core Features & Design

### **Visual & Structural Enhancements**

*   **New Main Page Sections:** The `index.html` page will be enriched with three new, card-based sections:
    1.  **Process:** Visually outlines the steps for using the service.
    2.  **Why CHECKIT:** Highlights key benefits and reasons to choose the service.
    3.  **Reviews:** Showcases testimonials from satisfied clients.
*   **Dedicated Client Pages:** 
    *   `individual.html` & `corporate.html` have been implemented with modern, responsive designs tailored to each client type.
    *   `individual.html` focuses on personal health check-up support with 1:1 manager services.
    *   `corporate.html` focuses on health management for groups of foreign employees, productivity enhancement, and workload reduction for health managers.
*   **Design Standardization (March 2026):**
    *   **Unified Margins:** All pages use a standard `.container` with `max-width: 1200px` and consistent horizontal padding.
    *   **Hero Alignment:** Corporate and Individual hero sections are perfectly aligned.
    *   **Text Clarity:** Hero titles and subtitles use high-contrast colors for maximum readability.
*   **Mobile App-Like Experience:**
    *   **Horizontal Sliders:** Multi-card sections (Packages, Features, Testimonials) use horizontal sliders on mobile with `scroll-snap-type`.
    *   **Snap Behavior:** Cards land centered with a preview of adjacent cards.

*   **B2B Process Slide (March 2026):**
    *   **Image-Based Slider:** PPT-style image slider displaying PNG exports of the official service process.
    *   **Interactive UI:** Full-screen modal with navigation buttons and a page indicator.

## 3. Multilingual Support

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
*   **Centralized Inquiries:** All "Contact Us" submissions are saved to the `contact_inquiries` collection.
*   **Metadata Tracking:** Captures email, phone, company, message, timestamp, source URL, and user language preference.

### **Data Schema (Firestore)**
*   **`users/{uid}`**: `{ role: "user" | "super_admin" | "company_admin", email: string, companyId: string, fullName: string, nationality: string, dob: string, onboardingComplete: boolean, managerNotes: string }`
*   **`user_process/{uid}`**: 
    *   `name`: string
    *   `companyId`: string
    *   `siteId`: string
    *   `status`: "pending" | "reserved" | "completed" | "expired"
    *   `examDate`: string (YYYY-MM-DD)
    *   `expiryDate`: string (YYYY-MM-DD)
    *   `language`: string (KO, EN, CN, VN)
    *   `updatedAt`: serverTimestamp
    *   `steps`: [{ title, description, status, icon }] // Legacy support
*   **`user_process/{uid}/messages/{msgId}`**: `{ text, sender: "user" | "bot", timestamp: serverTimestamp }`
*   **`contact_inquiries/{id}`**: `{ email, phone, company, message, timestamp, source, language, status: "new" | "resolved" }`

### **Corporate Portal (Enriched)**
*   **Real-time Dashboard:** Displays summary statistics (Total, Pending, Reserved, Completed, Expired).
*   **Employee Management Table:** Detailed view of employee status, site assignments, and examination dates.
*   **Search & Filtering:** Dynamic filtering by name, site ID, and service status.
*   **Reporting:** CSV export functionality for corporate administrators to download health check-up status reports.
*   **Secure Access:** Promotion to `company_admin` via specialized security keys during authentication.

### **Security Rules**
*   **Role-Based Access Control (RBAC)**: Defined in `firestore.rules`.
*   **Privacy**: Users can only read/write their own process and messages.
*   **Admin Access**: `super_admin` can manage all documents; `company_admin` can view documents belonging to their `companyId`.

## 5. Service Scope Enforcement
*   Strictly non-medical administrative support.
*   No hospital payment processing (direct payment to hospitals by users).
*   No medical advice or recommendations.
