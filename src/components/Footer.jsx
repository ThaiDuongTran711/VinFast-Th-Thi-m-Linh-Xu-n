import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <div className="footer-logo">VinFast</div>
          <p className="footer-sub"> VinFast Thủ Thiêm - Linh Xuân </p>
          <div className="footer-text">☏ Hotline: 03333.760.51 (Lộc.VinFast) </div>
          <div className="footer-text">Địa chỉ: 239 Quốc Lộ 1K, Phường Linh Xuân, TP. Thủ Đức, TP. Hồ Chí Minh </div>
          <div className="footer-MXH">
            <img className="footer-zalo" src="/images/zalo.jpg"/>
            <img className="footer-zalo" src="/images/FB.png"/>
            <img className="footer-zalo" src="/images/tiktok.png"/>
          </div>
        </div>

        <div>
          <div className="footer-title"> Dịch Vụ </div>
          <ul className="footer-list">
            <li><Link to="/vehicles">Ô tô điện</Link></li>
            <li><Link to="/news">Báo chí</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/support">Bảo hành</Link></li>
          </ul>
        </div>

       <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d489.75157956482536!2d106.7730492030206!3d10.886643029193388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d9d09fb5264f%3A0x46b92524a1c1bbdc!2zVmluRmFzdCBMaW5oIFh1w6JuIC0gVGjhu6cgxJDhu6lj!5e0!3m2!1svi!2s!4v1774407566195!5m2!1svi!2s"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="google"
      ></iframe>

      </div>
      <div className="footer-bottom">
        <div className="footer-copy">
          © Bản Quyền WebSize Thuộc Về Trần Bùi Phước Lộc .
        </div>
      </div>
    </footer>
  )
}
