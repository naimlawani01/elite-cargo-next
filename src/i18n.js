import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import fr from './locales/fr.json';
import en from './locales/en.json';

// Configuration de base
const config = {
  resources: {
    fr: { translation: fr },
    en: { translation: en }
  },
  fallbackLng: 'fr',
  debug: process.env.NODE_ENV === 'development',
  interpolation: {
    escapeValue: false
  },
  react: {
    useSuspense: false
  }
};

// Initialiser i18n
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init(config);

export default i18n; 