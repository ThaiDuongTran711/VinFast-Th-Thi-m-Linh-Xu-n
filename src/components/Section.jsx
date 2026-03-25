import React from 'react'
import './Section.css'

export default function Section({ title, subtitle, children, id }) {
  return (
    <section id={id} className="section">
      <div className="section-header">
        <h3 className="section-title">{title}</h3>
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
      </div>
      {children}
    </section>
  )
}
