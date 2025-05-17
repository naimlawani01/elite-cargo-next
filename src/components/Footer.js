'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="text-center py-8 text-gray-500 text-sm bg-white mt-auto">
      {t('footer.rights')} <br />
      {t('footer.madeBy')} <a href="https://imrane.tech" target="_blank" rel="noopener noreferrer" className="text-[#007d6f] font-semibold hover:underline">IMRANE TECH SOLUTIONS</a>
    </footer>
  );
};

export default Footer; 