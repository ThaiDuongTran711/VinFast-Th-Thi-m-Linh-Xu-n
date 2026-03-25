import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './HeroCarousel.css'

const slides = [
  { video: "/images/The company behind VinFast electric cars.mp4" },
  { id: 1, title: "Miễn Phí Sạc Lên Tới 3 Năm", desc: "Ưu đãi lớn chỉ tới 31/03/2026", cta: "Khám phá xe", to: "/vehicles", img: "/images/mienphisacpin.webp" },
  { id: 2, title: "Mãnh Liệt Vì Tương Lai Xanh", desc: "Ưu đãi lên tới 10%  khi mua xe điện VinFast", cta: "Tìm hiểu hỗ trợ", to: "/support", img: "/images/thuxangdoidien2.webp" },
  { id: 3, title: "Tin nóng mỗi ngày", desc: "Cập nhật sản phẩm và ưu đãi", cta: "Xem tin tức", to: "/news", img: "/images/ramatlachong.webp" },
  { id: 4, title: "Thu Xăng Đổi Điện", desc: "Nhiều ưu đãi lớn trong tháng", cta: "Khám phá xe", to: "/vehicles", img: "/images/thuxangdoidien.webp" },
]

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const len = slides.length
  const autoRef = useRef(null)
  const videoTimeoutRef = useRef(null)

  useEffect(() => {
    if (len <= 1) return
    if (isPaused) return

    // Nếu là video thì không setInterval, để video tự điều khiển
    if (slides[current].video) return

    autoRef.current = setInterval(() => {
      setCurrent(c => (c + 1) % len)
    }, 5000)

    return () => clearInterval(autoRef.current)
  }, [isPaused, len, current])

  const prev = () => setCurrent(c => (c - 1 + len) % len)
  const next = () => setCurrent(c => (c + 1) % len)
  const goTo = (i) => setCurrent(i)

  if (len === 0) return null

  return (
    <div
      className="hero"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="carousel" role="region" aria-roledescription="carousel" aria-label="Hero carousel">
        {slides.map((s, i) => (
          <div
            key={s.id || i}
            className={`slide ${i === current ? 'active' : ''}`}
            aria-hidden={i === current ? "false" : "true"}
          >
            {s.video ? (
              <video
                ref={el => {
                  if (el) {
                    if (i === current) {
                      el.currentTime = 0
                      el.play().catch(() => {})

                      // Clear timeout cũ nếu có
                      if (videoTimeoutRef.current) {
                        clearTimeout(videoTimeoutRef.current)
                      }

                      // Sau 10s thì next slide
                      videoTimeoutRef.current = setTimeout(() => {
                        next()
                      }, 10000)
                    } else {
                      el.pause()
                    }
                  }
                }}
                src={s.video}
                muted
                playsInline
                className="slide-video"
              />
            ) : (
              <img
                src={s.img}
                alt={s.title}
                className="slide-img"
                onError={(e) => { e.currentTarget.src = '/images/fallback.jpg' }} 
              />
            )}
            <div className="slide-overlay" />
            <div className="slide-content">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={i === current ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="slide-text"
              >
                <h2 className="slide-title">{s.title}</h2>
                <p className="slide-desc">{s.desc}</p>
                {s.cta && <Link to={s.to} className="slide-btn">{s.cta}</Link>}
              </motion.div>
            </div>
          </div>
        ))}

        {/* Arrow buttons */}
        <button
          className="carousel-arrow left"
          onClick={() => { prev(); setIsPaused(true) }}
          aria-label="Previous slide"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M15 6L9 12L15 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <button
          className="carousel-arrow right"
          onClick={() => { next(); setIsPaused(true) }}
          aria-label="Next slide"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Dots */}
        <div className="carousel-controls" aria-hidden="false">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => { goTo(i); setIsPaused(true) }}
              className={`dot ${i === current ? 'active' : ''}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
