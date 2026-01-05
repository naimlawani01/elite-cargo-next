import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Camera, ZoomIn } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function GalleryPage() {
  const { t, i18n } = useTranslation();
  const { lang } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentCategory, setCurrentCategory] = useState('operations');

  // Synchroniser la langue avec l'URL
  useEffect(() => {
    if (lang && ['fr', 'en'].includes(lang) && i18n.language !== lang) {
      i18n.changeLanguage(lang);
      localStorage.setItem('language', lang);
    }
  }, [lang, i18n]);

  const categories = [
    {
      id: 'operations',
      title: t('gallery.categories.operations'),
      images: [
        { src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=3270&auto=format&fit=crop', alt: 'Opérations aériennes' },
        { src: 'https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=3202&auto=format&fit=crop', alt: 'Logistique' },
        { src: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=3270&auto=format&fit=crop', alt: 'Fret aérien' },
        { src: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=3270&auto=format&fit=crop', alt: 'Entrepôt' }
      ]
    },
    {
      id: 'facilities',
      title: t('gallery.categories.facilities'),
      images: [
        { src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=3270&auto=format&fit=crop', alt: 'Entrepôt' },
        { src: 'https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=3202&auto=format&fit=crop', alt: 'Installations' },
        { src: 'https://images.unsplash.com/photo-1586528116493-c2f7c67a869d?q=80&w=3270&auto=format&fit=crop', alt: 'Équipements' }
      ]
    },
    {
      id: 'team',
      title: t('gallery.categories.team'),
      images: [
        { src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=3270&auto=format&fit=crop', alt: 'Équipe' },
        { src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=3270&auto=format&fit=crop', alt: 'Collaboration' },
        { src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=3270&auto=format&fit=crop', alt: "Travail d'équipe" }
      ]
    }
  ];

  const currentCategoryData = categories.find(cat => cat.id === currentCategory);
  const currentImages = currentCategoryData?.images || [];

  return (
    <div className="min-h-screen flex flex-col bg-white font-body">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-[#004D40] py-20 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] bg-[#00695C]/30 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <Camera className="w-4 h-4 text-white" />
              <span className="text-white/90 text-sm font-medium">
                {lang === 'fr' ? 'Découvrez nos installations' : 'Discover our facilities'}
              </span>
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              {t('gallery.title')}
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              {t('gallery.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      <main className="flex-grow py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          {/* Navigation des catégories */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center mb-12 flex-wrap gap-3"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setCurrentCategory(category.id)}
                className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  currentCategory === category.id
                    ? 'bg-[#004D40] text-white shadow-lg shadow-[#004D40]/25'
                    : 'bg-white text-slate-600 hover:bg-slate-100 shadow-sm border border-slate-200'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {category.title}
              </motion.button>
            ))}
          </motion.div>

          {/* Galerie */}
          <div className="relative">
            <button 
              onClick={() => {
                const container = document.querySelector('.gallery-container');
                container?.scrollBy({ left: -400, behavior: 'smooth' });
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center z-10 cursor-pointer hover:bg-slate-50 transition-colors hidden lg:flex border border-slate-200"
              aria-label={t('accessibility.scrollLeft')}
            >
              <ChevronLeft className="w-6 h-6 text-[#004D40]" />
            </button>

            <motion.div
              key={currentCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory gallery-container scroll-smooth scrollbar-hide"
            >
              {currentImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative flex-none w-[350px] lg:w-[420px] aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 snap-center"
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#004D40]/90 via-[#004D40]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                    <div className="p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-white text-lg font-semibold mb-1">{image.alt}</p>
                      <span className="text-white/70 text-sm flex items-center gap-2">
                        <ZoomIn className="w-4 h-4" />
                        {t('gallery.clickToEnlarge')}
                      </span>
                    </div>
                  </div>
                  
                  {/* Corner accent */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ZoomIn className="w-5 h-5 text-white" />
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <button 
              onClick={() => {
                const container = document.querySelector('.gallery-container');
                container?.scrollBy({ left: 400, behavior: 'smooth' });
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center z-10 cursor-pointer hover:bg-slate-50 transition-colors hidden lg:flex border border-slate-200"
              aria-label={t('accessibility.scrollRight')}
            >
              <ChevronRight className="w-6 h-6 text-[#004D40]" />
            </button>
          </div>

          {/* Scroll hint */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-8 text-sm text-slate-500 flex items-center justify-center gap-3"
          >
            <motion.div 
              animate={{ x: [0, 5, 0] }} 
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-[#004D40]"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.div>
            <span className="font-medium">{t('gallery.scrollHint')}</span>
            <motion.div 
              animate={{ x: [0, -5, 0] }} 
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-[#004D40]"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.div>
          </motion.div>

          {/* Stats or additional info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { 
                value: '2400 m²', 
                label: lang === 'fr' ? 'd\'entrepôts modernes' : 'of modern warehouses' 
              },
              { 
                value: '25+', 
                label: lang === 'fr' ? 'années d\'expérience' : 'years of experience' 
              },
              { 
                value: '4', 
                label: lang === 'fr' ? 'pays couverts' : 'countries covered' 
              }
            ].map((stat, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-2xl shadow-sm border border-slate-100">
                <p className="text-4xl font-bold text-[#004D40] mb-2">{stat.value}</p>
                <p className="text-slate-600">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </main>

      <Footer />

      {/* Modal pour l'image sélectionnée */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#0F172A]/95 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full"
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute -top-14 right-0 flex items-center gap-2 text-white/70 hover:text-white transition-colors p-2"
                onClick={() => setSelectedImage(null)}
              >
                <span className="text-sm">{lang === 'fr' ? 'Fermer' : 'Close'}</span>
                <X className="w-6 h-6" />
              </button>
              <div className="relative">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-auto rounded-2xl shadow-2xl max-h-[80vh] object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#004D40]/80 to-transparent rounded-b-2xl p-6">
                  <p className="text-white text-xl font-display font-semibold">{selectedImage.alt}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
