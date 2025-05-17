'use client'
import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const Header = () => {
  const { t } = useTranslation();
  const pathname = usePathname();
  const router = useRouter();
  const currentLang = pathname.split('/')[1] || 'fr';
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { id: 'home', label: t('nav.home', 'Home') },
    { id: 'gallery', label: t('nav.gallery') },
    { id: 'contact', label: t('nav.contact') }
  ];

  const handleNavigation = (id) => {
    const newPath = id === 'home' ? `/${currentLang}` : `/${currentLang}/${id}`;
    router.push(newPath);
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 w-full z-50 bg-white/95 backdrop-blur-lg shadow-lg overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Title */}
          <Link href={`/${currentLang}`} className="flex items-center space-x-3 min-w-0">
            <Image
              src="/images/elite.svg"
              alt="Elite Cargo"
              width={40}
              height={40}
              className="h-10 w-auto flex-shrink-0"
              priority
            />
            <div className="flex flex-col min-w-0">
              <span className="text-xl font-bold text-[#007d6f] truncate">Elite Cargo</span>
              <span className="text-xs text-gray-500 truncate">Transport & Logistique</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors whitespace-nowrap
                  ${(item.id === 'home' ? pathname === `/${currentLang}` : pathname === `/${currentLang}/${item.id}`)
                    ? 'text-[#007d6f] font-bold' 
                    : 'text-gray-700 hover:text-[#007d6f]'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-[#007d6f] transition-colors flex-shrink-0"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Language Switcher */}
          <div className="hidden md:flex items-center space-x-6 flex-shrink-0">
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 sm:px-6 py-4 space-y-4">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`w-full text-left px-4 py-2 text-sm font-medium rounded-md transition-colors
                    ${(item.id === 'home' ? pathname === `/${currentLang}` : pathname === `/${currentLang}/${item.id}`)
                      ? 'text-[#007d6f] font-bold bg-[#007d6f]/5' 
                      : 'text-gray-700 hover:text-[#007d6f] hover:bg-gray-50'
                    }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t">
                <LanguageSwitcher />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header; 