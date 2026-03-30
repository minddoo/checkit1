# AI Development Blueprint for CHECKIT Project

## Overview
This blueprint outlines the development plan for the CHECKIT web project, focusing on modern web standards (Baseline) and Firebase integration within the Firebase Studio environment. The goal is to create an efficient, automated, and error-resilient application with a visually appealing and accessible user interface.

## Project Outline
The CHECKIT project is a framework-less web application (HTML, CSS, JavaScript) designed to assist foreigners with the health check-up process in Korea. It features:
*   **Multilingual Support:** Implemented via a `translations` object in `script.js` to provide content in Korean, English, Chinese, and Vietnamese.
*   **Web Components:** Utilizes custom elements for reusable UI components (though explicit custom element definitions are not widely used, the principle of modularity is applied).
*   **Modern CSS:** Leverages features like CSS variables and responsive design principles.
*   **Modern JavaScript:** Employs ES Modules (conceptually, though not explicitly `import/export` in `script.js`), `async/await`, `fetch` API, and modern syntax.
*   **Firebase Integration:** Uses Firebase Authentication, Firestore, and Storage for user management, data storage, and file handling.
*   **Chatbot:** An interactive chatbot for user queries.
*   **Login Modal:** A modal-based login/signup/password reset system with different user roles (individual, corporate, master admin).
*   **My Page:** Personalized pages for individual users, corporate admins, and super admins.

**Design & Features:**
*   **Aesthetics:** Modern, clean design with emphasis on user experience and accessibility.
*   **Responsiveness:** Adapts to different screen sizes.
*   **Iconography:** Uses Font Awesome icons.
*   **Interactive Elements:** Buttons, forms, and chat interface.
*   **Accessibility (A11Y):** Implicitly considered through semantic HTML and clear UI.

**Locked Elements (as per user instruction):**
*   ALL PAGES (`index.html`, `individual.html`, `corporate.html`): All hero sections, character placements, margins, text structures, and line breaks.
*   All sub-sections (Necessity, Welfare, Reality, Solutions, Pricing, Testimonials).
*   Multilingual content and `data-lang-key` mappings.
*   CHATBOT & LANGUAGE SWITCHER: Chatbot UI height, position, header layout, and intelligent response logic.
*   Language buttons' design, position, and functional real-time switching logic.

**Permitted Modification:**
*   Login/Authentication logic, Login Modals, and associated User Profile (RBAC) handling.
*   **EXPLICIT EXCEPTION**: The user has requested the removal of the Chatbot from the Corporate Page (`corporate.html`), superseding the previous lock on this element for that specific page.
*   **EXPLICIT EXCEPTION**: Hospital registration forms and worker portal data display (removed address/phone fields and added real-time Kakao Map API integration).

## Previous Task: Enhance Individual Customer My Page (Add Process Tracker)

### Problem Description
The user wanted the individual customer's "My Page" to fully reflect and facilitate the entire health check-up process provided by CHECKIT. This includes assistance without language barriers, communication issues, or confusion, focusing on non-medical aspects like day-of-exam support and simple translation of results. All these processes should be integrated into "My Page".

### Process Steps Defined by User:
1.  **고객의 폼 작성 (Customer Form Completion):** We send a form, provide hospital and check-up item lists.
2.  **예약 (Appointment Booking)**
3.  **검사 전 준비사항 완료 (Pre-exam Preparation Completion)**
4.  **검사 (Examination/Check-up)**
5.  **결과 및 서류 완료 (Results and Document Completion)**

### Solution
Added an HTML structure for a process tracker with five steps to `mypage_individual.html` and applied basic styling in `style.css`.

## Current Task: Refine Individual Customer My Page Design

### Problem Description
The user wants to refine the design of `mypage_individual.html`. The existing process tracker framework is good. The chat room should be the main focus, and the rest of the page should be neatly organized. The user suggested referencing the "HELPME platform" for design inspiration, but direct examples were not found. Therefore, I will proceed with general clean and neat design principles.

### Plan
1.  **Review existing `style.css` and `mypage_individual.html`**: Understand current styles and layout. (Done in previous step, but will re-evaluate with design goals in mind).
2.  **Maximize Chat Area (`chat-main`)**:
    *   Adjust CSS to ensure the `chat-main` area takes up most of the available space, making it visually prominent.
    *   Ensure its height is sufficient for comfortable chat interaction.
3.  **Neatly Organize Other Elements (`chat-sidebar` and `process-tracker`)**:
    *   **Profile/Package Info (`chat-sidebar`)**:
        *   Ensure this section is concise, well-spaced, and visually appealing without taking up excessive vertical space.
        *   Apply clean typography and subtle borders/shadows.
    *   **Process Tracker**:
        *   Integrate it cleanly into the `chat-main` area.
        *   Use subtle colors for inactive steps and a clear highlight for the active step.
        *   Ensure it is responsive and potentially horizontally scrollable on smaller screens without appearing cluttered.
    *   **Overall Typography and Spacing**:
        *   Ensure consistent font sizes, line heights, and padding across all elements for readability and a polished look.
        *   Minimize unnecessary whitespace while maintaining visual balance.
    *   **Color Palette**: Stick to the existing color palette defined in `:root` variables to maintain consistency with the rest of the application.
    *   **Interactive Elements**: Enhance existing buttons and input fields with subtle hover effects and clear states.
4.  **Implement specific CSS changes:**
    *   Adjust `chat-container` to better utilize space.
    *   Refine `chat-sidebar` styling.
    *   Enhance `chat-main` styling for prominence.
    *   Improve the `process-tracker` visual appearance.
    *   Ensure responsiveness.
5.  **Verify**: Manually test the page in a browser to ensure the design is clean, functional, and prioritizes the chat as requested.
6.  **Commit and Push**: Commit the changes and push to the repository.

### Step-by-step Implementation
*   **Subtask 1: Modify `style.css` to refine the layout and appearance of `mypage_individual.html` components.**
    *   Adjust `chat-container` properties for better layout.
    *   Update styling for `chat-sidebar` elements (profile card, package details).
    *   Enhance `chat-main`, `chat-messages`, and `chat-input-area` to prioritize chat.
    *   Refine `process-tracker` styling.
*   **Subtask 2: Verify the changes.**
    *   Manually test `mypage_individual.html` in the browser.
*   **Subtask 3: Commit and push changes.**
    *   Use `git status` to see modified files.
    *   `git add` the modified file.
    *   `git commit` with a descriptive message.
    *   `git push`.

## Current Task: Refine Login Security Key Label Style

### Problem Description
The user wants to further refine the security key label in the login modal:
- Break it into 3 lines: "암호키", "관리자는 부여받은 암호키 입력", and "근로자는 회원가입 시 등록한 worker로 시작하는 암호키 입력".
- Center align the text.
- Maintain the original font size for "암호키" and use a smaller font size for the other two lines.

### Solution
1.  **`style.css`**: Added `.label-subtext` class for smaller text and updated `.form-group label` to be center-aligned by default or via this new structure.
2.  **`script.js`**: Updated the `login_security_key_label` translation string to include `<br>` and `<span class="label-subtext">`.
3.  **`index.html` & `corporate.html`**: Updated the hardcoded label text to match the new structure.
4.  **`platform.html`**: Added internal style for `.label-subtext` and updated the label in the login section.

### Implementation Details
- Used `display: block` and `text-align: center` on labels to ensure centering.
- Used `font-size: 0.8em` for subtext.

### Current Task: Master Dashboard Enhancement & Persistence Fix

#### Problem Description
The user requested several improvements to the Master Dashboard (`platform.html`) and reported issues with site functionality and data persistence:
*   **Site Functionality:** Text and buttons were not working due to a syntax error in `script.js`.
*   **Master Dashboard UI:** Needed an "Auto-generate" feature for corporate admin keys.
*   **Persistence:** The company list disappeared after logout/refresh due to a collection migration and Firestore permission issues.
*   **User Experience:** Requested a visual loading effect during the registration process to signify security processing.

#### Solution
1.  **Critical Fix:** Resolved a major syntax error in `script.js` caused by a malformed code block during a previous edit. This restored all multilingual text and button functionality across the entire site.
2.  **Admin Key Auto-generation:** Added a `generateAdminKey` function and a corresponding UI button in `platform.html`. It generates a secure key starting with "admin" (required for role identification) combined with random alphanumeric and special characters.
3.  **Robust Persistence (Dual-Collection):** Implemented a merged fetching strategy in `loadCompanyList`. It now listens to both the legacy `companies` collection and the new `company_info` collection simultaneously using `onSnapshot`. This ensures that all historical data is preserved while new data is stored in the correct standardized location.
4.  **Security Loading Effect:** Updated the `saveAndGenerate` function to trigger the `pageLoader` with a custom message ("보안 키 발급 및 데이터 암호화 중...") for exactly 1 second before finalizing the database write.
5.  **Firestore Rules:** Updated `firestore.rules` to explicitly grant the `master` role full access to the `company_info` collection, ensuring data remains visible after logging back in.

#### Implementation Details
*   **Data Handling:** Used a JavaScript `Map` to merge data from two collections in real-time, preventing duplicates and supporting legacy fields (`code`/`key`) alongside new fields (`companyKey`/`adminKey`).
*   **UX:** The registration process now feels more secure and "official" with the intentional 1-second processing delay.

### Verification Results
*   Verified that `script.js` has no syntax errors and the site loads correctly.
*   Verified that the "Auto-generate" button works and produces valid keys.
*   Verified that the company list persists and merges data from both collections after logout/login.
*   Verified the 1-second loading animation triggers correctly upon clicking "저장 및 발급".

## Final Review & Quality Assurance
The project is now stable with a fully functional Master Dashboard that supports historical data and provides an improved administrative experience. All changes have been pushed to the main repository.

## Current Task: Reconstruct "Why Choose CHECKIT" for B2B

### Problem Description
The user wants to refocus the "Why choose CHECKIT" section on the main page (`index.html`) to target B2B customers (Corporate/HR admins). Currently, the section is general-purpose, but the goal is to highlight management efficiency, legal compliance, and specialized administrative support.

### Proposed Changes
1.  **`index.html`**: Update Font Awesome icons in the features grid to match B2B themes (monitoring, professional support, medical results, legal safety).
2.  **`script.js`**: Update translations for `why_us_title`, `why_us_subtitle_new`, and the 4 feature items in all 4 languages (KO, EN, CN, VN) to reflect B2B value propositions.

### Detailed B2B Content Plan (Korean)
- **Title**: 왜 CHECKIT 기업 보건관리 솔루션을 선택해야 할까요?
- **Feature 1**: 실시간 보건관리 모니터링 (HR 관리 효율 극대화)
- **Feature 2**: 1:1 모국어 전담 매니저 매칭 (행정 공백 및 소통 장벽 제거)
- **Feature 3**: 모국어 결과지 번역 및 데이터화 (투명한 데이터 분석 및 관리)
- **Feature 4**: 법적 리스크 및 OHS 완벽 대응 (기업의 법적 의무 이행 지원)

### Plan
1.  **Finalize translations** for all 4 languages based on the B2B focus.
2.  **Update `index.html`** with new icons.
3.  **Update `script.js`** with new translation strings.
4.  **Verify** across all languages and ensure no structural or visual regressions.

## Completed Task: Update Corporate Hero Background with `건건.png`

### Problem Description
The user wanted to change the corporate hero background to a custom construction site image (`건건.png`) while maintaining text readability. 

### Implemented Changes
1.  **Saved Asset**: Copied provided construction site image to `assets/건건.png`.
2.  **`style.css`**:
    *   Set `background-image` to `url('assets/건건.png')` with a 45% dark-tinted overlay (`rgba(0,0,0,0.45)`) for a premium, high-contrast look.
    *   Updated text colors (`hero-title`, `hero-subtitle`) to white (`#ffffff`) with strong dark shadows for maximum legibility.
    *   Consolidated redundant CSS blocks for `#corporate-hero`.
3.  **Deployment**: All changes staged and pushed to the repository.

### Status: Completed

## Current Task: Hospital Data Optimization & UI Cleanup

### Problem Description
1.  **Simplified Hospital Registration**: Corporate admins found it tedious to manually enter hospital addresses and phone numbers. They only want to enter the hospital name.
2.  **Real-time Worker Portal Data**: The worker portal should fetch the actual address and contact information for the registered hospital names in real-time using an external API.
3.  **UI Refinement**: Removed "Checking..." loading states in the worker portal and improved the visibility of prompts directing users to external portals (Naver/Kakao Maps).
4.  **Chatbot Removal**: The user requested to remove the chatbot from the Corporate Page (`corporate.html`) to simplify the interface.

### Implemented Changes
1.  **`company_dashboard.html`**:
    *   Removed "Address" and "Contact Number" input fields from the hospital registration form.
    *   Updated `saveHospitalInfo` to exclude these fields from Firestore.
2.  **`worker_portal.html`**:
    *   Implemented `fetchHospitalLiveInfo` using the **Kakao Maps API (Places Services)** to dynamically fetch address and category/phone data based on the hospital name.
    *   Removed the "In Treatment/Closed" status logic and replaced it with a prominent Info Box prompting users to check real-time details on portals.
    *   Added direct links to Naver Maps and Kakao Maps for each hospital card.
    *   Cleaned up "Checking..." loading indicators for a smoother UI.
3.  **`corporate.html`**:
    *   Removed the floating chatbot button (`#open-chatbot`) and the chatbot container (`#chatbot-container`).
4.  **`style.css`**:
    *   Cleaned up all redundant chatbot-related CSS variables and style rules.

### Status: Completed