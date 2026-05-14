const axios = require('axios');

const API_KEY = 'AIzaSyCLF8UtCqBm-dduMVUM37EfLAatFoz2ILk';

async function listModels() {
  try {
    const response = await axios.get(`https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`);
    console.log("Available Models:");
    response.data.models.forEach(model => {
      console.log(`- ${model.name} (supportedGenerationMethods: ${model.supportedGenerationMethods})`);
    });
  } catch (error) {
    console.error("Error listing models:", error.response ? error.response.data : error.message);
  }
}

listModels();
