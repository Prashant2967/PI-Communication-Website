import { GoogleGenAI, Type } from "@google/genai";
import { BrandInsightResponse } from "../types";

const apiKey = process.env.API_KEY || '';

export const generateBrandInsights = async (
  businessName: string,
  businessType: string
): Promise<BrandInsightResponse> => {
  if (!apiKey) {
    // Return a mock response if no API key is present to prevent app crash in preview without keys
    console.warn("No API_KEY found. Returning mock data.");
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          slogans: [
            `${businessName}: Redefining Excellence`,
            `Experience the Future with ${businessName}`,
            `Your Partner in ${businessType} Success`
          ],
          strategyTip: "Focus on building a community around your core values. Authentic engagement on social platforms often yields higher ROI than broad advertising for this sector.",
          colorPaletteSuggestion: ["#1e293b", "#3b82f6", "#f59e0b"]
        });
      }, 1500);
    });
  }

  const ai = new GoogleGenAI({ apiKey });

  try {
    const prompt = `
      Act as a world-class brand strategist for "The PI Communication". 
      A user needs quick branding insights for their business.
      
      Business Name: ${businessName}
      Business Type/Industry: ${businessType}
      
      Provide:
      1. 3 catchy, professional slogans or taglines.
      2. 1 actionable, high-impact marketing strategy tip specific to their industry.
      3. A recommended color palette (3 hex codes) that suits their industry vibe.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            slogans: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "3 catchy slogans"
            },
            strategyTip: {
              type: Type.STRING,
              description: "One powerful marketing tip"
            },
            colorPaletteSuggestion: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "3 hex color codes"
            }
          },
          required: ["slogans", "strategyTip", "colorPaletteSuggestion"]
        }
      }
    });

    const text = response.text;
    if (!text) {
        throw new Error("No response from AI");
    }
    
    return JSON.parse(text) as BrandInsightResponse;

  } catch (error) {
    console.error("Gemini API Error:", error);
    // Fallback in case of API error
    return {
      slogans: ["Innovation for Tomorrow", "Quality You Can Trust", "Building Better Brands"],
      strategyTip: "Ensure your digital presence is mobile-optimized and leverage user-generated content.",
      colorPaletteSuggestion: ["#000000", "#FFFFFF", "#FF0000"]
    };
  }
};
