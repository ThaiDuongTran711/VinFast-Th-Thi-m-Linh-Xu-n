import React from 'react'
import './About.css'   

export default function About() {
  const aboutItems = [
    {
      title: "Sứ mệnh",
      desc: "Mang đến các giải pháp di chuyển thông minh, bền vững, an toàn cho môi trường và cho mọi người.",
      img: "/images/sumenh.jpg"
    },
    {
      title: "Tầm nhìn",
      desc: "Trở thành hãng xe điện thông minh toàn cầu, tiên phong trong xu thế xanh.",
      img: "/images/tamnhin.jpg"
    },
    {
      title: "Giá trị",
      desc: "Khách hàng là trung tâm – Sáng tạo – Chất lượng – Bền vững.",
      img: "/images/giatri.jpg"
    }
  ]

  return (
    <div className="about-container">
      <h1 className="about-title">Về VinFast</h1>
      <p className="about-desc">
        VinFast là công ty thành viên thuộc tập đoàn Vingroup, một trong những Tập đoàn Kinh tế tư nhân đa ngành lớn nhất Châu Á.
      </p>
      <div className="about-grid">
        {aboutItems.map((item, i) => (
          <div 
            key={i} 
            className="about-card"
            style={{ backgroundImage: `url(${item.img})` }}
          >
            <div className="about-overlay">
              <div className="about-card-title">{item.title}</div>
              <p className="about-card-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
