import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const { lang } = useParams();
  const currentLang = lang || 'fr';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { id: 'home', label: t('nav.home', 'Accueil') },
    { id: 'gallery', label: t('nav.gallery') },
    { id: 'contact', label: t('nav.contact') }
  ];

  const handleNavigation = (id) => {
    const newPath = id === 'home' ? `/${currentLang}` : `/${currentLang}/${id}`;
    navigate(newPath);
    setIsMenuOpen(false);
  };

  const isActive = (id) => {
    if (id === 'home') return location.pathname === `/${currentLang}`;
    return location.pathname === `/${currentLang}/${id}`;
  };

  return (
    <>
      {/* Top Bar - Contact Info */}
      <div className="hidden lg:block bg-[#004D40] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-10 text-sm">
            <div className="flex items-center gap-6">
              <a href="tel:+224622652511" className="flex items-center gap-2 hover:text-white/80 transition-colors">
                <Phone className="w-3.5 h-3.5" />
                <span>+224 622 65 25 11</span>
              </a>
              <a href="mailto:contact@elite-cargo.net" className="flex items-center gap-2 hover:text-white/80 transition-colors">
                <Mail className="w-3.5 h-3.5" />
                <span>contact@elite-cargo.net</span>
              </a>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-white/70">Leader du fret aérien depuis 1997</span>
              <div className="w-px h-4 bg-white/30" />
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={`sticky top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-lg' 
            : 'bg-white/95 backdrop-blur-lg'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo and Title */}
            <Link to={`/${currentLang}`} className="flex items-center space-x-4 min-w-0 group">
              <div className="relative">
                <div className="absolute inset-0 bg-[#004D40]/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" />
                <img
                  src="/images/elite.svg"
                  alt="Elite Cargo"
                  className="h-12 w-auto flex-shrink-0 relative z-10"
                />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-2xl font-bold text-[#004D40] font-display tracking-tight">
                  Elite Cargo
                </span>
                <span className="text-xs text-slate-500 font-medium tracking-wide uppercase">
                  Transport & Logistique
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`relative px-5 py-2.5 text-sm font-semibold rounded-lg transition-all duration-300 whitespace-nowrap group
                    ${isActive(item.id)
                      ? 'text-[#004D40]' 
                      : 'text-slate-600 hover:text-[#004D40]'
                    }`}
                >
                  {item.label}
                  {/* Active indicator */}
                  <span 
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-[#004D40] rounded-full transition-all duration-300 ${
                      isActive(item.id) ? 'w-6' : 'w-0 group-hover:w-4'
                    }`}
                  />
                </button>
              ))}
              
              {/* CTA Button */}
              <Link 
                to={`/${currentLang}/contact`}
                className="ml-4 px-6 py-2.5 bg-[#004D40] text-white text-sm font-semibold rounded-lg hover:bg-[#00695C] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                {t('hero.cta', 'Demander un devis')}
              </Link>
            </nav>

            {/* Mobile: Language + Menu */}
            <div className="flex md:hidden items-center gap-3">
              <LanguageSwitcher />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2.5 text-slate-700 hover:text-[#004D40] hover:bg-slate-100 rounded-lg transition-colors"
                aria-label="Menu"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
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
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-2">
                {navigationItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleNavigation(item.id)}
                    className={`w-full text-left px-4 py-3 text-base font-medium rounded-lg transition-all duration-300
                      ${isActive(item.id)
                        ? 'text-[#004D40] bg-[#004D40]/5 font-semibold' 
                        : 'text-slate-700 hover:text-[#004D40] hover:bg-slate-50'
                      }`}
                  >
                    {item.label}
                  </motion.button>
                ))}
                
                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navigationItems.length * 0.1 }}
                  className="pt-4 mt-4 border-t border-slate-100"
                >
                  <Link 
                    to={`/${currentLang}/contact`}
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full text-center px-4 py-3 bg-[#004D40] text-white font-semibold rounded-lg hover:bg-[#00695C] transition-colors"
                  >
                    {t('hero.cta', 'Demander un devis')}
                  </Link>
                </motion.div>

                {/* Mobile Contact Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="pt-4 mt-4 border-t border-slate-100 space-y-3"
                >
                  <a href="tel:+224622652511" className="flex items-center gap-3 px-4 py-2 text-slate-600 hover:text-[#004D40] transition-colors">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">+224 622 65 25 11</span>
                  </a>
                  <a href="mailto:contact@elite-cargo.net" className="flex items-center gap-3 px-4 py-2 text-slate-600 hover:text-[#004D40] transition-colors">
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">contact@elite-cargo.net</span>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
