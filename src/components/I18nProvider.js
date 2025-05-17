'use client';

import { useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';

export default function I18nProvider({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Récupérer la langue sauvegardée ou utiliser le français par défaut
    const savedLanguage = localStorage.getItem('language') || 'fr';
    i18n.changeLanguage(savedLanguage);
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
