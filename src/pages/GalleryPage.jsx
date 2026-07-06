import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import Reveal from '../components/Reveal';

export default function GalleryPage() {
  const { t, i18n } = useTranslation();
  const { lang } = useParams();
  const currentLang = ['fr', 'en'].includes(lang) ? lang : 'fr';
  const isFr = currentLang === 'fr';
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentCategory, setCurrentCategory] = useState('operations');

  useEffect(() => {
    if (['fr', 'en'].includes(lang) && i18n.language !== lang) {
      i18n.changeLanguage(lang);
      localStorage.setItem('language', lang);
    }
  }, [lang, i18n]);

  const categories = [
    {
      id: 'operations',
      title: t('gallery.categories.operations'),
      images: [
        { src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&auto=format&fit=crop', alt: isFr ? 'Opérations aériennes' : 'Air operations' },
        { src: 'https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=1600&auto=format&fit=crop', alt: isFr ? 'Logistique' : 'Logistics' },
        { src: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1600&auto=format&fit=crop', alt: isFr ? 'Fret aérien' : 'Air freight' },
        { src: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1600&auto=format&fit=crop', alt: isFr ? 'Entrepôt' : 'Warehouse' },
      ],
    },
    {
      id: 'facilities',
      title: t('gallery.categories.facilities'),
      images: [
        { src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&auto=format&fit=crop', alt: isFr ? 'Entrepôt' : 'Warehouse' },
        { src: 'https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=1600&auto=format&fit=crop', alt: isFr ? 'Installations' : 'Facilities' },
        { src: 'https://images.unsplash.com/photo-1586528116493-c2f7c67a869d?q=80&w=1600&auto=format&fit=crop', alt: isFr ? 'Équipements' : 'Equipment' },
      ],
    },
    {
      id: 'team',
      title: t('gallery.categories.team'),
      images: [
        { src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1600&auto=format&fit=crop', alt: isFr ? 'Équipe' : 'Team' },
        { src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop', alt: isFr ? 'Collaboration' : 'Collaboration' },
        { src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop', alt: isFr ? "Travail d'équipe" : 'Teamwork' },
      ],
    },
  ];

  const currentImages = categories.find((c) => c.id === currentCategory)?.images || [];

  const stats = [
    { value: '2 400', unit: 'm²', label: isFr ? "d'entrepôts modernes" : 'of modern warehouses' },
    { value: '25', unit: isFr ? 'ans' : 'yrs', label: isFr ? "d'expérience" : 'of experience' },
    { value: '4', unit: isFr ? 'filiales' : 'branches', label: isFr ? "en Afrique de l'Ouest" : 'in West Africa' },
  ];

  const seoData = {
    fr: {
      title: 'Galerie | Elite Cargo - Nos Installations & Opérations',
      description: "Découvrez les installations et opérations d'Elite Cargo en images. Entrepôts modernes de 2400m², équipe professionnelle et équipements de pointe pour le fret aérien.",
      keywords: 'galerie Elite Cargo, photos entrepôt Guinée, installations fret Conakry',
    },
    en: {
      title: 'Gallery | Elite Cargo - Our Facilities & Operations',
      description: 'Discover Elite Cargo facilities and operations in pictures. Modern 2400m² warehouses, professional team and state-of-the-art equipment for air freight.',
      keywords: 'Elite Cargo gallery, Guinea warehouse photos, Conakry freight facilities',
    },
  };
  const s = seoData[currentLang] || seoData.fr;

  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink font-body pt-[5.5rem]">
      <SEO title={s.title} description={s.description} keywords={s.keywords} canonical={`https://elite-cargo.net/${currentLang}/gallery`} lang={currentLang} />
      <Header />

      {/* Editorial intro */}
      <section className="pt-[clamp(3rem,8vw,6rem)] pb-[clamp(1.5rem,4vw,3rem)]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <Reveal>
            <span className="eyebrow mb-6">{isFr ? 'Galerie' : 'Gallery'}</span>
            <h1 className="font-display font-bold tracking-tight leading-[0.98] text-[clamp(2.6rem,8vw,6rem)] max-w-[14ch] text-balance">
              {t('gallery.title')}
            </h1>
            <p className="mt-6 text-ink-soft text-lg max-w-[52ch] leading-relaxed">{t('gallery.subtitle')}</p>
          </Reveal>
        </div>
      </section>

      <main className="flex-grow pb-[clamp(4rem,10vw,7rem)]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 pt-8 border-t border-ink/10">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setCurrentCategory(c.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  currentCategory === c.id ? 'bg-ink text-paper' : 'text-ink-soft hover:text-ink border border-ink/15 hover:border-ink/40'
                }`}
              >
                {c.title}
              </button>
            ))}
          </div>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCategory}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4, ease: [0.16, 0.9, 0.24, 1] }}
              className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-[minmax(0,1fr)]"
            >
              {currentImages.map((image, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(image)}
                  className={`frame grain group text-left ${i % 5 === 0 ? 'sm:col-span-2 aspect-[16/10]' : 'aspect-[4/5]'}`}
                >
                  <img src={image.src} alt={image.alt} loading="lazy" className="frame__img" />
                  <div className="frame__shade" />
                  <div className="frame__cap">
                    <span className="font-serif italic text-[0.95rem]">{image.alt}</span>
                    <span className="mono-meta text-band-ink/80 inline-flex items-center gap-1">
                      <ZoomIn className="w-3.5 h-3.5" /> {t('gallery.clickToEnlarge')}
                    </span>
                  </div>
                </button>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Stats */}
          <div className="mt-[clamp(3.5rem,8vw,6rem)] grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-10 pt-10 border-t border-ink/10">
            {stats.map((st, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="font-display font-bold tracking-[-0.04em] leading-none text-[clamp(2.6rem,7vw,4.5rem)] tabular-nums">
                  {st.value}<span className="font-serif italic font-normal text-[0.32em] text-sand ml-1">{st.unit}</span>
                </div>
                <p className="text-ink-soft mt-3">{st.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </main>

      <Footer />

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-band/95 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 0.9, 0.24, 1] }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-12 right-0 flex items-center gap-2 text-band-ink/70 hover:text-band-ink transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <span className="mono-meta">{isFr ? 'Fermer' : 'Close'}</span>
                <X className="w-6 h-6" />
              </button>
              <div className="relative rounded-lg overflow-hidden">
                <img src={selectedImage.src} alt={selectedImage.alt} className="w-full h-auto max-h-[80vh] object-contain" />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-band/85 to-transparent p-6">
                  <p className="font-serif italic text-band-ink text-xl">{selectedImage.alt}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
