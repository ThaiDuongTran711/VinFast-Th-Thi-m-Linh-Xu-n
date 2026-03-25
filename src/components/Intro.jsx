import React from "react"
import "./Intro.css"

export default function Intro() {
  return (
    <section id="intro">
      <div className="intro-container">
        <div className="intro-image">
          <img src="/images/avatar.png" alt="Tư vấn viên" />
        </div>
        <div className="intro-content">
          <h2>VINFAST Thủ Thiêm - Linh Xuân</h2>
          <p className="intro-name">Trần Bùi Phước Lộc</p>
          <p className="intro-role">Chuyên Viên Tư Vấn Bán Hàng</p>
          <p className="intro-hotline">Hotline: 03333 760 51</p>
          <p className="intro-desc">
            Cam kết mang đến trải nghiệm dịch vụ tốt nhất, hỗ trợ tư vấn và giải đáp mọi thắc mắc.
          </p>
          <p className="intro-udai">
            Ưu đãi đặc biệt cho khách hàng đặt xe trong tháng này!
          </p>
        </div>
      </div>
    </section>
  )
}
