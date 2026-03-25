import React, { useState, useEffect, useRef } from "react";
import "./Chatbot.css";
import { serviceVehicles, familyVehicles } from "../data/vehicles";

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [lastVehicle, setLastVehicle] = useState(null);

  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  const hasRun = useRef(false);

  const allVehicles = [...serviceVehicles, ...familyVehicles];

  // Intro messages
  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    const introMessages = [
      "Xin chào quý khách",
      "Em là Phước Lộc tư vấn viên VinFast (03333.760.51)",
      "Quý khách đang quan tâm mẫu xe nào ạ",
    ];

    introMessages.forEach((text, index) => {
      setTimeout(() => {
        setMessages((prev) => [...prev, { sender: "bot", typing: true }]);
      }, index * 4000);

      setTimeout(() => {
        setMessages((prev) => {
          const copy = [...prev];
          copy[copy.length - 1] = { sender: "bot", text };
          return copy;
        });
      }, index * 4000 + 2000);
    });
  }, []);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    let finalInput = input;

    // Nếu user hỏi "chi tiết / còn gì / thêm" mà không nhắc tên xe → thêm context
    if (/chi tiết|còn gì|thêm/.test(input.toLowerCase()) && lastVehicle) {
      finalInput = `Người dùng đang hỏi thêm chi tiết về ${lastVehicle.name}.
Câu hỏi gốc: "${input}".
Vui lòng trả lời liên quan đến ${lastVehicle.name}.`;
    }

    // Nếu user nhắc đến tên xe → lưu lại
    const foundVehicle = allVehicles.find((v) =>
      input.toLowerCase().includes(v.name.toLowerCase())
    );
    if (foundVehicle) {
      setLastVehicle(foundVehicle);
    }

    // Chuẩn bị dữ liệu xe cho Gemini
    const carInfo = allVehicles
      .map(
        (car) =>
          `${car.name} - ${car.price} - Tầm hoạt động: ${car.range} - ${car.description}`
      )
      .join("\n");

    try {
      const response = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=" +
          apiKey,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `
Bạn là Phước Lộc tư vấn viên xe VinFast, chỉ giởi thiệu 1 lần, đừng giới thiệu nhiều lần. 
Dùng danh xưng là em, không được xưng tôi.
Chỉ sử dụng dữ liệu dưới đây để tư vấn cho khách hàng, không được bịa thêm.

Danh sách xe VinFast:
${carInfo}

Câu hỏi: ${finalInput}
                    `,
                  },
                ],
              },
            ],
          }),
        }
      );

      const data = await response.json();
      const botReply =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Xin lỗi, mình chưa hiểu được câu hỏi này 😢";

      setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
    } catch (error) {
      console.error("Gemini API error:", error);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "⚠️ Có lỗi xảy ra khi gọi API." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button className="chat-toggle-btn" onClick={() => setOpen(!open)}>
        💬
      </button>

      {open && (
        <div className="chatbox">
          <div className="chat-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-message ${msg.sender}`}>
                {msg.sender === "bot" && <img src="public/images/avatar.jpg" className="avatar"></img>}
                <div className="bubble">
                  {msg.typing ? (
                    <span className="typing">
                      <span></span><span></span><span></span>
                    </span>
                  ) : (
                    msg.text
                  )}
                </div>
              </div>
            ))}
            {loading && (
              <div className="chat-message bot">
                <img src="public/images/avatar.jpg" className="avatar"></img>
                <div className="bubble typing">
                  <span></span><span></span><span></span>
                </div>
              </div>
            )}
          </div>
          <div className="chat-input">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Nhập tin nhắn..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>Gửi</button>
          </div>
        </div>
      )}
    </>
  );
}
