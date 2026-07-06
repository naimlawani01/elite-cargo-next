import { useEffect, useRef } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Lenis from 'lenis'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import GalleryPage from './pages/GalleryPage'
import ServicesPage from './pages/ServicesPage'
import AboutPage from './pages/AboutPage'
import LegalPage from './pages/LegalPage'
import Cursor from './components/Cursor'
import CookieConsent from './components/CookieConsent'

function App() {
  const location = useLocation()
  const lenisRef = useRef(null)

  // Inertial smooth scroll (Palier A). Skipped when reduced motion is requested.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true })
    lenisRef.current = lenis
    let raf
    const loop = (time) => {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  // Reset scroll to top on route change.
  useEffect(() => {
    if (lenisRef.current) lenisRef.current.scrollTo(0, { immediate: true })
    else window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      <Cursor />
      <CookieConsent />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 0.9, 0.24, 1] }}
        >
          <Routes location={location}>
            <Route path="/" element={<Navigate to="/fr" replace />} />
            {/* Parameterized so useParams().lang is populated (fr | en). */}
            <Route path="/:lang" element={<HomePage />} />
            <Route path="/:lang/services" element={<ServicesPage />} />
            <Route path="/:lang/about" element={<AboutPage />} />
            <Route path="/:lang/gallery" element={<GalleryPage />} />
            <Route path="/:lang/contact" element={<ContactPage />} />
            <Route path="/:lang/legal" element={<LegalPage doc="legal" />} />
            <Route path="/:lang/privacy" element={<LegalPage doc="privacy" />} />
            <Route path="*" element={<Navigate to="/fr" replace />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default App
