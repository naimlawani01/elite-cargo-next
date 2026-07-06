import React from 'react';
import { motion } from 'framer-motion';

/**
 * Editorial section header: mono eyebrow (with a leading rule) + oversized
 * display headline + optional lede. Prop API kept stable: children, subtitle,
 * align, isDark, label.
 */
export default function SectionTitle({
  children,
  isDark = false,
  subtitle = null,
  align = 'left',
  label = 'Elite Cargo',
}) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.8, ease: [0.16, 0.9, 0.24, 1] }}
      className={`flex flex-col ${alignClass}`}
    >
      <span
        className="eyebrow mb-6"
        style={isDark ? { color: 'var(--color-band-accent)' } : undefined}
      >
        {label}
      </span>
      <h2
        className={`font-display font-bold tracking-tight leading-[0.98] text-4xl sm:text-5xl lg:text-6xl max-w-[16ch] text-balance ${
          isDark ? 'text-band-ink' : 'text-ink'
        }`}
      >
        {children}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-lg max-w-[46ch] ${
            isDark ? 'text-band-ink-soft' : 'text-ink-soft'
          } ${align === 'center' ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
