const { GoogleGenerativeAI } = require("@google/generative-ai");

async function listModels() {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || 'HIDDEN_API_KEY');
  try {
    // We can't easily list models from the SDK without a special method, 
    // but we can try to initialize with the most basic 'gemini-pro' first to see if it works.
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    console.log("Attempting to initialize gemini-1.5-flash...");
    // Just a dummy call
    console.log("Success: Model initialized (client-side check)");
  } catch (e) {
    console.error("Error:", e);
  }
}

listModels();
