import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import AppRoutes from './router'
import ScrollToTop from "./components/ScrollToTop";
import Chatbot from './components/Chatbot';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />
      <Chatbot/>
      <main className="flex-1">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  )
}
