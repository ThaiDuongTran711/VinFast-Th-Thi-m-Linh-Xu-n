import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import VehicleDetail from './pages/VehicleDetail'
import Intro from './components/Intro'   // thêm Intro

const Home = lazy(() => import('./pages/Home'))
const Vehicles = lazy(() => import('./pages/Vehicles'))
const News = lazy(() => import('./pages/News'))
const Support = lazy(() => import('./pages/Support'))
const About = lazy(() => import('./pages/About'))
const Blog = lazy(() => import('./pages/Blog'))

export default function AppRoutes() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Đang tải...</div>}>
      <Routes>
        {/* Home KHÔNG có Intro */}
        <Route path="/" element={<Home />} />

        {/* Các trang khác CÓ Intro */}
        <Route path="/vehicles" element={<><Vehicles /><Intro /></>} />
        <Route path="/vehicles/service" element={<><Vehicles group="service" /><Intro /></>} />
        <Route path="/vehicles/family" element={<><Vehicles group="family" /><Intro /></>} />
        <Route path="/vehicles/luxury" element={<><Vehicles group="luxury" /><Intro /></>} />
        <Route path="/vehicles/:id" element={<><VehicleDetail /><Intro /></>} />
        <Route path="/news" element={<><News /><Intro /></>} />
        <Route path="/support" element={<><Support /><Intro /></>} />
        <Route path="/about" element={<><About /><Intro /></>} />
        <Route path="/blog" element={<><Blog /><Intro /></>} /> 
      </Routes>
    </Suspense>
  )
}
