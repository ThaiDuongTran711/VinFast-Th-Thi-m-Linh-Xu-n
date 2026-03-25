import React from "react"
import { Link, useLocation } from "react-router-dom"
import "./Breadcrumb.css"

export default function Breadcrumb() {
  const location = useLocation()
  const pathnames = location.pathname.split("/").filter(x => x)

  const getLabel = (name) => {
    switch (name) {
      case "vehicles": return "Sản phẩm"
      case "service": return "Dòng xe dịch vụ"
      case "family": return "Dòng xe cá nhân"
      case "luxury": return "Dòng xe hạng sang"
      default: return name.charAt(0).toUpperCase() + name.slice(1)
    }
  }

  return (
    <nav className="breadcrumb">
      <Link to="/">Trang chủ</Link>
      {pathnames.map((name, index) => {
        const routeTo = "/" + pathnames.slice(0, index + 1).join("/")
        const isLast = index === pathnames.length - 1

        return (
          <React.Fragment key={routeTo}>
            <span className="breadcrumb-separator">›</span>
            {isLast ? (
              <span>{getLabel(name)}</span>
            ) : (
              <Link to={routeTo}>{getLabel(name)}</Link>
            )}
          </React.Fragment>
        )
      })}
    </nav>
  )
}
