import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export async function askGemini(prompt) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); 
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (err) {
    console.error("Gemini API error:", err);
    return "Xin chào quý khách. Đây là dịch vụ trả lời tự động của đại lý. Hệ thống đang kết nối với tư vấn viên. Quý khách vui lòng chờ trong ít phút. Xin Cảm Ơn";
  }
}
