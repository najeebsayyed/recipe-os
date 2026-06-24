import { GoogleGenAI } from '@google/genai';
import { Recipe } from '../../types/recipe';
import { GEMINI_API_KEY } from '@env';
console.log('API KEY:', GEMINI_API_KEY);
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

export const generateRecipe = async (
  ingredients: string[],
): Promise<Recipe> => {
  try {
    const prompt = `
You are a recipe generator.

Return ONLY valid JSON.
Do NOT include markdown.
Do NOT include explanation.

Format:
{
  "name": "string",
  "ingredients": ["string"],
  "steps": ["string"],
  "missing": ["string"]
}

User ingredients: ${ingredients.join(', ')}
`;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });

    const text = response.text;

    if (!text) {
      throw new Error('No response from Gemini');
    }

    const cleaned = text.replace(/```json|```/g, '').trim();

    return JSON.parse(cleaned);
  } catch (error) {
    console.log('Gemini Error:', error);
    throw error;
  }
};
