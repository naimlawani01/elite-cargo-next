'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Header from './Header';
import Image from 'next/image';
import Footer from './Footer';

const Gallery = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentCategory, setCurrentCategory] = useState('operations');
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 6;

  // Catégories d'images
  const categories = [
    {
      id: 'operations',
      title: t('gallery.categories.operations'),
      images: [
        {
          src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=3270&auto=format&fit=crop',
          alt: 'Opérations aériennes'
        },
        {
          src: 'https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=3202&auto=format&fit=crop',
          alt: 'Logistique'
        },
        {
          src: 'https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=3202&auto=format&fit=crop',
          alt: 'Logistique'
        },
        {
          src: 'https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=3202&auto=format&fit=crop',
          alt: 'Logistique'
        }
      ]
    },
    {
      id: 'facilities',
      title: t('gallery.categories.facilities'),
      images: [
        {
          src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=3270&auto=format&fit=crop',
          alt: 'Entrepôt'
        },
        {
          src: 'https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=3202&auto=format&fit=crop',
          alt: 'Installations'
        },
        {
          src: 'https://images.unsplash.com/photo-1586528116493-c2f7c67a869d?q=80&w=3270&auto=format&fit=crop',
          alt: 'Équipements'
        }
      ]
    },
    {
      id: 'team',
      title: t('gallery.categories.team'),
      images: [
        {
          src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=3270&auto=format&fit=crop',
          alt: 'Équipe'
        },
        {
          src: 'https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=3202&auto=format&fit=crop',
          alt: 'Collaboration'
        },
        {
          src: 'https://images.unsplash.com/photo-1586528116493-c2f7c67a869d?q=80&w=3270&auto=format&fit=crop',
          alt: 'Travail d\'équipe'
        }
      ]
    }
  ];

  const currentCategoryData = categories.find(cat => cat.id === currentCategory);
  const totalPages = Math.ceil(currentCategoryData.images.length / imagesPerPage);
  const startIndex = (currentPage - 1) * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;
  const currentImages = currentCategoryData.images.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50 text-gray-800 font-sans">
      <Header />

      <main className="flex-grow py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* En-tête */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {t('gallery.title')}
              </h1>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#007d6f] rounded-full" />
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto mt-8"
            >
              {t('gallery.subtitle')}
            </motion.p>
          </div>

          {/* Navigation des catégories */}
          <div className="flex justify-center mb-12 space-x-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => {
                  setCurrentCategory(category.id);
                  setCurrentPage(1);
                }}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  currentCategory === category.id
                    ? 'bg-gradient-to-r from-[#007d6f] to-[#00a199] text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.title}
              </motion.button>
            ))}
          </div>

          {/* Galerie */}
          <div className="relative">
            {/* Bouton de navigation gauche */}
            <button 
              onClick={() => {
                const container = document.querySelector('.gallery-container');
                container.scrollBy({ left: -400, behavior: 'smooth' });
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center z-10 cursor-pointer hover:bg-white transition-colors hover:scale-110 active:scale-95"
            >
              <ChevronLeft className="w-6 h-6 text-[#007d6f]" />
            </button>

            <motion.div
              key={currentCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory gallery-container scroll-smooth"
            >
              {currentImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative flex-none w-[400px] aspect-[4/3] overflow-hidden rounded-lg cursor-pointer shadow-md hover:shadow-lg transition-all duration-300 snap-center"
                  onClick={() => setSelectedImage(image)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="w-full h-full object-cover transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                    <div className="p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white text-lg font-medium">{image.alt}</p>
                      <span className="text-white/70 text-sm block mt-1">Cliquez pour agrandir</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Bouton de navigation droite */}
            <button 
              onClick={() => {
                const container = document.querySelector('.gallery-container');
                container.scrollBy({ left: 400, behavior: 'smooth' });
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center z-10 cursor-pointer hover:bg-white transition-colors hover:scale-110 active:scale-95"
            >
              <ChevronRight className="w-6 h-6 text-[#007d6f]" />
            </button>

            {/* Indicateur de défilement textuel avec animation */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center mt-6 text-sm text-gray-500 flex items-center justify-center space-x-2"
            >
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ChevronLeft className="w-4 h-4" />
              </motion.div>
              <span className="font-medium">Faites défiler pour voir plus d&apos;images</span>
              <motion.div
                animate={{ x: [0, -5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ChevronRight className="w-4 h-4" />
              </motion.div>
            </motion.div>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-12 space-x-4">
              <motion.button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`p-2 rounded-full ${
                  currentPage === 1
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-[#007d6f] hover:bg-[#007d6f]/10'
                }`}
                whileHover={{ scale: currentPage === 1 ? 1 : 1.1 }}
                whileTap={{ scale: currentPage === 1 ? 1 : 0.95 }}
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>

              <div className="flex space-x-2">
                {[...Array(totalPages)].map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handlePageChange(index + 1)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                      currentPage === index + 1
                        ? 'bg-gradient-to-r from-[#007d6f] to-[#00a199] text-white shadow-lg'
                        : 'bg-white text-gray-600 hover:bg-gray-50'
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {index + 1}
                  </motion.button>
                ))}
              </div>

              <motion.button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`p-2 rounded-full ${
                  currentPage === totalPages
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-[#007d6f] hover:bg-[#007d6f]/10'
                }`}
                whileHover={{ scale: currentPage === totalPages ? 1 : 1.1 }}
                whileTap={{ scale: currentPage === totalPages ? 1 : 0.95 }}
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>
          )}
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
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
                className="absolute -top-16 right-0 text-white hover:text-gray-300 transition-colors p-2"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-8 h-8" />
              </button>
              <div className="relative">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="w-full h-auto rounded-2xl shadow-2xl"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl" />
                <p className="absolute bottom-6 left-6 right-6 text-white text-xl font-medium">
                  {selectedImage.alt}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery; 