import React from 'react'
import newsData from '../data/newsData'
import './News.css'

export default function News() {
  return (
    <div className="container page-news">
      <h1 className="page-title">Tin tức</h1>
      <p className="page-subtitle"> Cập nhật tin tức mới nhất từ VinFast</p>

      <div className="news-list">
        {newsData.map((item) => (
          <div key={item.id} className="news-card">
            {item.img && (
              <img src={item.img} alt={item.title} className="news-img" />
            )}
            <div className="news-body">
              <div className="news-date">{item.date}</div>
              <div className="news-title">{item.title}</div>
              <p className="news-desc">{item.desc}</p>
              <a href={item.url} target="_blank" rel="noopener noreferrer" className="btn-readmore">Đọc thêm</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
