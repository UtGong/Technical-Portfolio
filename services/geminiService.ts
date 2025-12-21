
import { GoogleGenAI } from "@google/genai";
import { Project } from "../types";

export class GeminiService {
  private ai: GoogleGenAI;
  private model = "gemini-3-flash-preview";

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async chatAboutProject(project: Project, history: { role: 'user' | 'assistant', content: string }[], userMessage: string) {
    const systemInstruction = `
      You are an expert technical interviewer and lead engineer reviewing the portfolio of a Creative Technologist.
      The user is asking about the following project: ${project.title}.
      Project Description: ${project.description}
      Technical Documentation: ${project.fullDocumentation}
      Tech Stack: ${project.techStack.join(', ')}
      
      Your goal is to provide deep technical insights about this project as if you were the creator. 
      Be professional, highly technical but accessible, and enthusiastic about the engineering challenges.
      If the user asks something not in the documentation, use your technical intuition to infer how such a system would likely work based on the provided stack.
    `;

    try {
      const chat = this.ai.chats.create({
        model: this.model,
        config: { systemInstruction }
      });

      // Map history to the format expected by the API if needed, 
      // but here we are using a simple chat interface.
      const response = await chat.sendMessage({ message: userMessage });
      return response.text;
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "I'm having trouble connecting to my technical knowledge base right now. Please try again in a moment.";
    }
  }
}

export const geminiService = new GeminiService();
