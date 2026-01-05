import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ children, isDark = false, subtitle = null, align = 'center' }) => {
  const alignClasses = {
    center: 'text-center',
    left: 'text-left',
    right: 'text-right'
  };

  const lineAlignClasses = {
    center: 'mx-auto',
    left: 'mr-auto',
    right: 'ml-auto'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`mb-12 ${alignClasses[align]}`}
    >
      {/* Label tag */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`inline-flex items-center gap-2 mb-4 ${lineAlignClasses[align]}`}
      >
        <span className={`w-8 h-px ${isDark ? 'bg-white/50' : 'bg-[#004D40]'}`} />
        <span className={`text-xs font-semibold uppercase tracking-[0.2em] ${isDark ? 'text-white/70' : 'text-[#004D40]'}`}>
          Elite Cargo
        </span>
        <span className={`w-8 h-px ${isDark ? 'bg-white/50' : 'bg-[#004D40]'}`} />
      </motion.div>

      {/* Main Title */}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
        {children}
      </h2>

      {/* Subtitle if provided */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`mt-4 text-lg max-w-2xl ${alignClasses[align] === 'text-center' ? 'mx-auto' : ''} ${isDark ? 'text-white/80' : 'text-slate-600'}`}
        >
          {subtitle}
        </motion.p>
      )}

      {/* Decorative line */}
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: 80 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className={`mt-6 h-1 rounded-full ${lineAlignClasses[align]} overflow-hidden`}
        style={{ width: 80 }}
      >
        <div className={`h-full w-full ${isDark ? 'bg-gradient-to-r from-white/80 to-white/40' : 'bg-gradient-to-r from-[#004D40] to-[#00897B]'}`} />
      </motion.div>
    </motion.div>
  );
};

export default SectionTitle;
