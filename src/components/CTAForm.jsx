import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./CTAForm.css";

export default function CTAForm({ formType }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    car: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_mels8o9", 
        "template_h618023",   
        formData,
        "r6doaSgOiMHGujOoB"
      )
      .then(
        () => {
          alert("Cảm ơn bạn! Thông tin đã được gửi.");
          setFormData({ name: "", phone: "", email: "", car: "" });
        },
        (error) => {
          console.error("Email error:", error);
          alert("Có lỗi xảy ra khi gửi thông tin, vui lòng thử lại.");
        }
      )
      .finally(() => setLoading(false));
  };

  // Đổi tiêu đề & mô tả theo formType
  const title =
    formType === "laithu"
      ? "Đăng ký lái thử"
      : formType === "tuvan"
      ? "Đăng ký tư vấn"
      : "Đăng ký tư vấn & lái thử";

  const desc =
    formType === "laithu"
      ? "Để lại thông tin để đặt lịch lái thử xe VinFast gần bạn."
      : formType === "tuvan"
      ? "Để lại thông tin, chuyên viên VinFast sẽ tư vấn cho bạn ngay."
      : "Để lại thông tin, chuyên viên VinFast sẽ liên hệ với bạn ngay.";

  return (
    <section className="cta">
      <h2>{title}</h2>
      <p>{desc}</p>

      <form className="cta-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Họ và tên"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Số điện thoại"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <select
          name="car"
          value={formData.car}
          onChange={handleChange}
          required
        >
          <option value="">Chọn mẫu xe quan tâm</option>
          <option value="MinioGreen">Minio Green</option>
          <option value="HerioGreen">Herio Green</option>
          <option value="NerioGreen">Nerio Green</option>
          <option value="LimoGreen">Limo Green</option>
          <option value="ECVan">VinFast EC Van</option>
          <option value="VFWild">VinFast VF Wild</option>
          <option value="VF3">VinFast VF 3</option>
          <option value="VF5">VinFast VF 5</option>
          <option value="VF6">VinFast VF 6</option>
          <option value="VF7">VinFast VF 7</option>
          <option value="MPV7">VinFast MPV7</option>
          <option value="VF8">VinFast VF 8</option>
          <option value="VF9">VinFast VF 9</option>
          <option value="lh900lx">Lạc Hồng 900LX</option>
          <option value="lh900s">Lạc Hồng 900S</option>
          <option value="lh800s">Lạc Hồng 800S</option>
        </select>
        <button type="submit" disabled={loading}>
          {loading ? "Đang gửi..." : "Gửi thông tin"}
        </button>
      </form>
    </section>
  );
}
