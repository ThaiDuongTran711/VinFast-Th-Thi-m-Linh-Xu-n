import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

import nav from '../data/nav'
import Modal from '../components/Modal'
import CTAForm from '../components/CTAForm'   
import './Header.css'

function NavItem({ item, close, openForm }) {
  const [open, setOpen] = useState(false)

  // Nếu có children -> dropdown
  if (item.children?.length) {
    return (
      <div className="nav-item">
        <button
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          onClick={() => setOpen(o => !o)}
          className="nav-link"
        >
          {item.label}
          <ChevronDown size={16} />
        </button>

        {open && (
          <div
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            className="dropdown"
          >
            {item.children.map((c) =>
              c.action ? (
                <button
                  key={c.label}
                  className="dropdown-item"
                  onClick={() => openForm(c.action)}
                >
                  <div className="dropdown-label">{c.label}</div>
                  <div className="dropdown-desc">{c.desc}</div>
                </button>
              ) : (
                <Link
                  key={c.to}
                  to={c.to}
                  onClick={close}
                  className="dropdown-item"
                >
                  <div className="dropdown-label">{c.label}</div>
                  <div className="dropdown-desc">{c.desc}</div>
                </Link>
              )
            )}
          </div>
        )}
      </div>
    )
  }

  // Nếu chỉ có to (ví dụ "Về VinFast")
  if (item.to) {
    return (
      <div className="nav-item">
        <Link to={item.to} className="nav-link" onClick={close}>
          {item.label}
        </Link>
      </div>
    )
  }

  return null
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const [showForm, setShowForm] = useState(false) 
  const [formType, setFormType] = useState("")

  const openForm = (type) => {
    setFormType(type)
    setShowForm(true)
  }

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <span className="logo-icon">
            <img src="/images/logo_vinfast-removebg-preview.png" alt="logo"/>
          </span>
          VinFast
        </Link>

        <nav className="nav">
          {nav.map((item) => (
            <NavItem 
              key={item.label} 
              item={item} 
              openForm={openForm}   
            />
          ))}
        </nav> 

       <div className="btn-zalo">
  <a href="#intro" className="zalo btn-contact">Liên hệ ngay</a>
  <button className="zalo btn-testdrive" onClick={() => openForm("laithu")}>
    Đăng kí lái thử
  </button>
</div>


        <div className="mobile-menu-btn">
          <button aria-label="Menu" onClick={() => setOpen(o => !o)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      
      {/* Hiện Modal CTA */}
      {showForm && (
        <Modal onClose={() => setShowForm(false)}>
          <CTAForm formType={formType} />
        </Modal>
      )}
    </header>
  )
}
  