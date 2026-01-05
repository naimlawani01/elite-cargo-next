import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import GalleryPage from './pages/GalleryPage'

// Composant pour les routes de langue uniquement
const LangRoute = ({ element }) => {
  return element;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/fr" replace />} />
      <Route path="/fr" element={<HomePage />} />
      <Route path="/en" element={<HomePage />} />
      <Route path="/fr/contact" element={<ContactPage />} />
      <Route path="/en/contact" element={<ContactPage />} />
      <Route path="/fr/gallery" element={<GalleryPage />} />
      <Route path="/en/gallery" element={<GalleryPage />} />
      {/* Rediriger les routes inconnues vers /fr */}
      <Route path="*" element={<Navigate to="/fr" replace />} />
    </Routes>
  )
}

export default App
