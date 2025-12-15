import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const askAiAssistant = async (query: string): Promise<string> => {
  if (!apiKey) {
    return "AI Service is currently unavailable (Missing API Key).";
  }

  try {
    const model = "gemini-2.5-flash";
    const systemInstruction = `You are an expert Immigration Consultant AI for 'GlobalPath Immigration'. 
    Answer user questions about visa types (Student, Work, Tourist, PR), immigration processes for countries like Canada, UK, USA, Australia, and Europe.
    Keep answers concise, professional, and encouraging. 
    Always add a disclaimer that you are an AI and they should book a consultation for legal advice.`;

    const response = await ai.models.generateContent({
      model: model,
      contents: query,
      config: {
        systemInstruction: systemInstruction,
      }
    });

    return response.text || "I apologize, I couldn't process that request right now.";
  } catch (error) {
    console.error("AI Request Failed:", error);
    return "Sorry, I am having trouble connecting to the server. Please try again later.";
  }
};