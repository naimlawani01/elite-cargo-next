import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import PillButton from './PillButton';
import { Link, useLocation, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const { t } = useTranslation();
  const location = useLocation();
  const { lang } = useParams();
  const currentLang = ['fr', 'en'].includes(lang) ? lang : 'fr';
  const isFr = currentLang === 'fr';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isHome = location.pathname === `/${currentLang}`;
  // Transparent over the hero; solid otherwise or while the mobile menu is open.
  const transparent = isHome && !isScrolled && !isMenuOpen;

  const navItems = [
    { id: 'home', label: t('nav.home', 'Accueil') },
    { id: 'services', label: t('nav.services', 'Services') },
    { id: 'about', label: t('nav.about', 'À propos') },
    { id: 'gallery', label: t('nav.gallery') },
    { id: 'contact', label: t('nav.contact') },
  ];

  const pathFor = (id) => (id === 'home' ? `/${currentLang}` : `/${currentLang}/${id}`);
  const isActive = (id) => location.pathname === pathFor(id);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
        transparent
          ? 'bg-transparent'
          : 'bg-paper/85 backdrop-blur-md border-b border-ink/10'
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-[5.5rem]">
          {/* Brand */}
          <Link to={`/${currentLang}`} className="flex items-center gap-3 shrink-0 group">
            <img
              src="/images/elite.svg"
              alt="Elite Cargo"
              className={`h-9 w-auto transition-all duration-500 ${transparent ? 'brightness-0 invert' : ''}`}
            />
            <span className="flex items-baseline gap-2">
              <span
                className={`font-display font-bold text-lg tracking-tight transition-colors duration-500 ${
                  transparent ? 'text-band-ink' : 'text-accent'
                }`}
              >
                Elite Cargo
              </span>
              <span
                className={`hidden sm:inline font-mono text-[0.58rem] tracking-[0.2em] transition-colors duration-500 ${
                  transparent ? 'text-band-ink/60' : 'text-ink-soft'
                }`}
              >
                {isFr ? 'DEPUIS 1997' : 'SINCE 1997'}
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={pathFor(item.id)}
                className={`relative text-sm font-medium transition-colors duration-300 group ${
                  transparent
                    ? 'text-band-ink/85 hover:text-band-ink'
                    : isActive(item.id)
                      ? 'text-accent'
                      : 'text-ink-soft hover:text-ink'
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1.5 left-0 h-px bg-current transition-transform duration-300 origin-left ${
                    isActive(item.id) ? 'w-full scale-x-100' : 'w-full scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Desktop right */}
          <div className="hidden lg:flex items-center gap-5 shrink-0">
            <a
              href="tel:+224622652511"
              className={`hidden xl:inline font-mono text-xs tracking-wide transition-colors ${
                transparent ? 'text-band-ink/80 hover:text-band-ink' : 'text-ink-soft hover:text-ink'
              }`}
            >
              +224 622 65 25 11
            </a>
            <LanguageSwitcher inverted={transparent} />
            <PillButton
              to={`/${currentLang}/contact`}
              variant={transparent ? 'light' : 'solid'}
              showIcon={false}
            >
              {t('hero.cta', 'Demander un devis')}
            </PillButton>
          </div>

          {/* Mobile toggles */}
          <div className="flex lg:hidden items-center gap-3 shrink-0">
            <LanguageSwitcher inverted={transparent} />
            <button
              onClick={() => setIsMenuOpen((v) => !v)}
              aria-label="Menu"
              className={`p-2 rounded-full transition-colors ${
                transparent ? 'text-band-ink hover:bg-band-ink/10' : 'text-ink hover:bg-ink/10'
              }`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-paper border-t border-ink/10"
          >
            <div className="px-5 sm:px-8 py-6 flex flex-col gap-1">
              {navItems.map((item, i) => (
                <motion.div key={item.id} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }}>
                  <Link
                    to={pathFor(item.id)}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block py-3 text-2xl font-display font-semibold tracking-tight transition-colors ${
                      isActive(item.id) ? 'text-accent' : 'text-ink hover:text-accent'
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-5 pt-5 border-t border-ink/10 flex flex-col gap-4">
                <PillButton
                  to={`/${currentLang}/contact`}
                  variant="solid"
                  showIcon={false}
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full"
                >
                  {t('hero.cta', 'Demander un devis')}
                </PillButton>
                <a href="tel:+224622652511" className="font-mono text-xs tracking-wide text-ink-soft">
                  +224 622 65 25 11
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
