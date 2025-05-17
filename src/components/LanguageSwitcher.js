'use client';

import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter, usePathname } from 'next/navigation';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();
  const [currentLang, setCurrentLang] = useState('fr');

  useEffect(() => {
    // Extraire la langue actuelle du pathname
    const lang = pathname.split('/')[1] || 'fr';
    setCurrentLang(lang);
    i18n.changeLanguage(lang);
  }, [pathname, i18n]);

  const changeLanguage = (lng) => {
    // Changer la langue dans i18n
    i18n.changeLanguage(lng);
    // Sauvegarder la préférence
    localStorage.setItem('language', lng);
    
    // Préserver la page actuelle lors du changement de langue
    const currentPath = pathname.split('/').slice(2).join('/');
    const newPath = currentPath ? `/${lng}/${currentPath}` : `/${lng}`;
    router.push(newPath);
  };

  return (
    <div className="flex items-center space-x-1 text-sm">
      <button
        onClick={() => changeLanguage('fr')}
        className={`px-2 py-1 rounded ${currentLang === 'fr' ? 'text-[#007d6f] font-medium' : 'text-gray-500 hover:text-[#007d6f]'}`}
      >
        FR
      </button>
      <span className="text-gray-300">|</span>
      <button
        onClick={() => changeLanguage('en')}
        className={`px-2 py-1 rounded ${currentLang === 'en' ? 'text-[#007d6f] font-medium' : 'text-gray-500 hover:text-[#007d6f]'}`}
      >
        EN
      </button>
    </div>
  );
} 