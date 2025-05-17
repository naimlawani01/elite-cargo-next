'use client';

import { useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';

export default function I18nProvider({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Forcer le français comme langue par défaut
    const savedLanguage = localStorage.getItem('language') || 'fr';
    if (savedLanguage !== 'fr') {
      localStorage.setItem('language', 'fr');
    }
    i18n.changeLanguage('fr');
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <I18nextProvider i18n={i18n}>
      {children}
    </I18nextProvider>
  );
}
