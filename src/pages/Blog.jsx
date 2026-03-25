import React from 'react'
import blogData from '../data/blogData'
import './Blog.css'

export default function Blog() {
  return (
    <div className="container page-blog">
      <h1 className="page-title">Cộng đồng VinFast</h1>
      <p className="page-subtitle">Câu chuyện, chia sẻ từ cộng đồng người dùng VinFast.</p>

      <div className="blog-grid">
        {blogData.map((item) => (
          <div key={item.id} className="blog-card">
            <img src={item.img} alt={item.title} className="blog-img" />
            <div className="blog-body">
              <div className="blog-date">{item.date}</div>
              <h3 className="blog-title">{item.title}</h3>
              <p className="blog-desc">{item.desc}</p>
              <a href={item.url} target="_blank" rel="noopener noreferrer" className="btn-readmore">Đọc thêm</a> 
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

