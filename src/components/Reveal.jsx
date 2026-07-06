import React from 'react';
import { motion } from 'framer-motion';

/**
 * Scroll-triggered reveal. Fades + rises into place once, when it enters view.
 * framer-motion automatically respects prefers-reduced-motion for transforms
 * when the user has it enabled via its reducedMotion config; we keep the
 * distance small so it degrades gracefully.
 */
export default function Reveal({
  children,
  as = 'div',
  delay = 0,
  y = 28,
  className = '',
  once = true,
  ...rest
}) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.9, ease: [0.16, 0.9, 0.24, 1], delay }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
