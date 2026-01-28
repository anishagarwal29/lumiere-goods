import { GoogleGenAI, ChatSession } from "@google/genai";
import { Product } from "../types";

export const createProductChatSession = (product: Product): ChatSession => {
  // Initialize the client here to ensure we capture the API key at runtime
  // and avoid top-level module initialization issues.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

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
};

export const sendMessageToAI = async (chatSession: ChatSession, message: string): Promise<string> => {
  try {
    const response = await chatSession.sendMessage({ message });
    return response.text || "I'm sorry, I didn't catch that. Could you repeat?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    // Provide a slightly more specific error if possible, but keep it user-friendly
    return "I'm currently having trouble connecting to the server. Please check your connection or try again later.";
  }
};