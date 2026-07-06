import React, { useRef } from 'react';

/**
 * Wraps a child so it eases toward the cursor within its bounds (magnetic
 * effect). No-op on touch / reduced motion. Child stays inline-block.
 */
export default function Magnetic({ children, strength = 0.35, className = '' }) {
  const ref = useRef(null);

  const canMagnetize = () =>
    window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const onMove = (e) => {
    if (!canMagnetize()) return;
    const el = ref.current;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = 'translate(0, 0)';
  };

  return (
    <span
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`inline-block will-change-transform transition-transform duration-300 ${className}`}
    >
      {children}
    </span>
  );
}
