import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation, useParams } from 'react-router-dom';

export default function LanguageSwitcher({ inverted = false }) {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const { lang } = useParams();
  const currentLang = lang || 'fr';

  const changeLanguage = (lng) => {
    // Changer la langue dans i18n
    i18n.changeLanguage(lng);
    // Sauvegarder la préférence
    localStorage.setItem('language', lng);
    
    // Préserver la page actuelle lors du changement de langue
    const pathParts = location.pathname.split('/');
    pathParts[1] = lng; // Remplacer la langue
    const newPath = pathParts.join('/') || `/${lng}`;
    navigate(newPath);
  };

  return (
    <div className="flex items-center space-x-1 text-sm">
      <button
        onClick={() => changeLanguage('fr')}
        className={`px-2 py-1 rounded ${currentLang === 'fr' ? (inverted ? 'text-white font-medium' : 'text-[#007d6f] font-medium') : (inverted ? 'text-white/60 hover:text-white' : 'text-gray-500 hover:text-[#007d6f]')}`}
      >
        FR
      </button>
      <span className={inverted ? 'text-white/30' : 'text-gray-300'}>|</span>
      <button
        onClick={() => changeLanguage('en')}
        className={`px-2 py-1 rounded ${currentLang === 'en' ? (inverted ? 'text-white font-medium' : 'text-[#007d6f] font-medium') : (inverted ? 'text-white/60 hover:text-white' : 'text-gray-500 hover:text-[#007d6f]')}`}
      >
        EN
      </button>
    </div>
  );
}

