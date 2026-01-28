import { GoogleGenAI, ChatSession } from "@google/genai";
import { Product } from "../types";

let aiClient: GoogleGenAI | null = null;

const getGeminiClient = (): GoogleGenAI | null => {
  if (aiClient) return aiClient;

  const apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.warn("Gemini API Key is missing. AI features will be disabled.");
    return null;
  }

  aiClient = new GoogleGenAI({ apiKey });
  return aiClient;
};

export const createProductChatSession = (product: Product): ChatSession | null => {
  const ai = getGeminiClient();
  if (!ai) return null;

  try {
    return ai.chats.create({
      model: 'gemini-1.5-flash',
      config: {
        systemInstruction: `You are a highly skilled and persuasive sales assistant for 'Nova Dropship', a premium lifestyle store.
        
        You are currently assisting a customer who is looking at the following product:
        Name: ${product.name}
        Price: $${product.price}
        Category: ${product.category}
        Description: ${product.description}
        Key Features: ${product.features.join(', ')}
  
        Your Goal:
        1. Answer any questions the customer has about the product accurately.
        2. If asked about shipping, say we offer free worldwide shipping on orders over $50, and standard shipping is 3-5 business days.
        3. Be concise, friendly, and professional. Use emojis sparingly.
        4. Gently encourage the user to add the item to their cart if they seem interested.
        5. Do not make up facts that are not in the description, but you can infer reasonable benefits (e.g., if it's waterproof, it's good for rain).
        
        Keep your responses under 3 sentences unless detailed technical info is requested.`
      }
    });
  } catch (err) {
    console.error("Failed to create chat session:", err);
    return null;
  }
};

export const sendMessageToAI = async (chatSession: ChatSession | null, message: string): Promise<string> => {
  if (!chatSession) {
    return "I'm currently offline because the AI service is not configured. Please contact support.";
  }

  try {
    const response = await chatSession.sendMessage({ message });
    return response.text || "I'm sorry, I didn't catch that. Could you repeat?";
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    return `I'm currently having trouble connecting to the server. (Error: ${error.message || 'Unknown'})`;
  }
};