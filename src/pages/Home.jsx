import React from 'react'
import HeroCarousel from '../components/HeroCarousel'
import Section from '../components/Section'
import ProductCard from '../components/ProductCard'
import {serviceVehicles, familyVehicles, luxuryVehicles} from '../data/vehicles'
import Intro from '../components/Intro'
import newsData from '../data/newsData'   
import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  return (
    <div>
      <HeroCarousel/>
      {/* Dải sản phẩm */}
      <Section title="VINFAST XE KINH DOANH DỊCH VỤ" subtitle="Giải pháp xanh cho dịch vụ thông minh, tiết kiệm chi phí – tối đa lợi nhuận">
        <div className="home-grid">
          {serviceVehicles.slice(0, 15).map(v => (
            <ProductCard key={v.id} car={v} />
          ))}
        </div>
      </Section>

      <Section title="VINFAST XE CÁ NHÂN - GIA ĐÌNH" subtitle="Không gian tiện nghi, an toàn vượt trội – đồng hành cùng gia đình Việt">
        <div className="home-grid">
          {familyVehicles.slice(0, 15).map(v => (
            <ProductCard key={v.id} car={v} />
          ))}
        </div>
      </Section>

      <Section title="VINFAST XE HẠNG SANG - THƯƠNG GIA" subtitle="Biểu trưng của giá trị kinh điển, vượt thời gian">
        <div className="home-grid">
          {luxuryVehicles.slice(0, 15).map(v => (
            <ProductCard key={v.id} car={v} />
          ))}
        </div>
      </Section>

      <Intro />

      {/* Tin tức nổi bật */}
      <Section title="Tin tức nổi bật" subtitle="Cập nhật hoạt động & ưu đãi">
        <div className="home-grid">
          {newsData.slice(0, 3).map(item => (
            <article key={item.id} className="home-article">
              <div className="home-article-img">
                 <img src={item.img} alt={item.title}/>
              </div>
              <div className="home-article-body">
                <h4 className="home-article-title">{item.title}</h4>
                <p className="home-article-desc">{item.desc}</p>
                <Link to="/news" className="home-article-btn">Đọc tiếp</Link>
              </div>
            </article>
          ))}
        </div>

        {/* Nút Xem tất cả */}
        <div className="home-news-more">
          <Link to="/news" className="btn-viewall">Xem thêm...</Link>
        </div>
      </Section>
    </div>
  )
}
