
document.addEventListener('DOMContentLoaded', () => {

    // --- TRANSLATION DATA (Only chatbot header is changed) ---
    const translations = {
        ko: {
            // ... (main page content is untouched)
            'chatbot_header': 'CHECK봇', // << EDITED as requested
            // ... (other chatbot translations remain the same)
        },
        en: { /* ... */ }, cn: { /* ... */ }, vn: { /* ... */ }
        // NOTE: The full, correct translation data from the previous step is assumed here.
        // For brevity, only showing the single line that was edited.
    };

    let currentLang = 'ko';
    let chatHistory = [];

    // --- DOM Elements ---
    const allTranslatableElements = document.querySelectorAll('[data-lang-key]');
    const mainLangButtons = document.querySelectorAll('#language-switcher .lang-btn');
    const chatbotContainer = document.getElementById('chatbot-container');
    const openChatbotBtn = document.getElementById('open-chatbot');
    const closeChatbotBtn = document.getElementById('close-chatbot');
    const messagesContainer = document.getElementById('chatbot-messages');
    const inputElem = document.getElementById('chatbot-input');
    const sendBtn = document.getElementById('chatbot-send');
    const chatbotLangButtons = document.querySelectorAll('#chatbot-lang-buttons .chatbot-lang-btn');
    const suggestedQuestionsContainer = document.getElementById('chatbot-suggested-questions');

    // --- Core Functions ---

    // Main site language switcher (remains unchanged)
    const switchMainLanguage = (newLang) => {
        // ... (this function is untouched)
    };

    // Toggles the chatbot visibility with animation
    const toggleChatbot = (show) => {
        if (show) {
            chatbotContainer.classList.add('show');
            document.body.classList.add('chatbot-open');
            if (chatHistory.length === 0) {
                // ... (initial message logic)
            }
        } else {
            chatbotContainer.classList.remove('show');
            document.body.classList.remove('chatbot-open');
        }
    };
    
    // Adds a message and ensures view scrolls to the bottom
    const addMessage = (sender, keyOrText, isKey = true) => {
        const langData = translations[currentLang] || translations['ko'];
        const text = isKey ? (langData[keyOrText] || keyOrText) : keyOrText;
        
        chatHistory.push({ sender, key: isKey ? keyOrText : null, text: isKey ? null : text });

        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', sender);
        messageDiv.textContent = text;
        messagesContainer.appendChild(messageDiv);

        // --- AUTO-SCROLL for visual focus ---
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    };

    // Displays suggested questions (remains unchanged)
    const displaySuggestedQuestions = () => {
         // ... (this function is untouched)
    };
    
    // Handles sending a user message (remains unchanged)
    const handleSendMessage = () => {
        // ... (this function is untouched)
    };

    // --- Event Listeners (remains unchanged) ---
    openChatbotBtn.addEventListener('click', () => toggleChatbot(true));
    closeChatbotBtn.addEventListener('click', () => toggleChatbot(false));
    // ... (other listeners are untouched)

    // --- Initial Load (remains unchanged) ---
    // switchMainLanguage('ko'); // Already set up
});
