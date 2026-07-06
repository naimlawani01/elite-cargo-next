import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

const STORAGE_KEY = 'cookie-consent';

const noConsentYet = () => {
  try {
    return !localStorage.getItem(STORAGE_KEY);
  } catch {
    return false;
  }
};

/**
 * RGPD cookie banner. Google Analytics runs under Consent Mode with
 * analytics_storage denied by default (set in index.html); this grants it only
 * after the user accepts. Choice is remembered in localStorage.
 */
export default function CookieConsent() {
  const { i18n } = useTranslation();
  const location = useLocation();
  const isFr = (i18n.language || 'fr').startsWith('fr');
  const [visible, setVisible] = useState(noConsentYet);

  const langPrefix = location.pathname.startsWith('/en') ? '/en' : '/fr';

  const decide = (granted) => {
    try {
      localStorage.setItem(STORAGE_KEY, granted ? 'granted' : 'denied');
    } catch { /* localStorage unavailable */ }
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        analytics_storage: granted ? 'granted' : 'denied',
      });
    }
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.4, ease: [0.16, 0.9, 0.24, 1] }}
          role="dialog"
          aria-live="polite"
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:max-w-md z-[70] bg-band text-band-ink rounded-2xl shadow-2xl border border-band-ink/15 p-6"
        >
          <p className="text-sm text-band-ink/85 leading-relaxed">
            {isFr
              ? 'Nous utilisons des cookies de mesure d’audience pour améliorer votre expérience. '
              : 'We use analytics cookies to improve your experience. '}
            <Link to={`${langPrefix}/privacy`} className="underline text-band-sand hover:text-band-ink">
              {isFr ? 'En savoir plus' : 'Learn more'}
            </Link>
          </p>
          <div className="mt-4 flex gap-3">
            <button onClick={() => decide(true)} className="pill pill--light text-sm">
              {isFr ? 'Accepter' : 'Accept'}
            </button>
            <button onClick={() => decide(false)} className="pill pill--ghost text-sm">
              {isFr ? 'Refuser' : 'Decline'}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
