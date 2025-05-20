'use client'

import React from 'react';
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

const SectionTitle = ({ children, isDark = false }) => {
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mb-8 text-center"
    >
      <div className="relative inline-block">
        <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-1 ${isDark ? 'bg-white/30' : 'bg-gradient-to-r from-[#007d6f] to-[#00a199]'} rounded-full`} />
        <h2 className={`text-3xl md:text-4xl font-bold ${isDark ? 'text-white' : 'bg-gradient-to-r from-[#007d6f] to-[#00a199] bg-clip-text text-transparent'}`}>
          {children}
        </h2>
        <div className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-1 ${isDark ? 'bg-white/30' : 'bg-gradient-to-r from-[#00a199] to-[#007d6f]'} rounded-full`} />
      </div>
    </motion.div>
  );
};

export default SectionTitle; 