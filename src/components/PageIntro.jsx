import React from 'react';
import Reveal from './Reveal';

/**
 * Editorial page header used by inner pages (Services, About, Legal…):
 * mono eyebrow + oversized Archivo title + optional lede. Sits on the paper
 * ground below the fixed header.
 */
export default function PageIntro({ label, title, subtitle, children }) {
  return (
    <section className="pt-[clamp(3rem,8vw,6rem)] pb-[clamp(1.5rem,4vw,3rem)]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        <Reveal>
          <span className="eyebrow mb-6">{label}</span>
          <h1 className="font-display font-bold tracking-tight leading-[0.98] text-[clamp(2.6rem,8vw,6rem)] max-w-[15ch] text-balance">
            {title}
          </h1>
          {subtitle && <p className="mt-6 text-ink-soft text-lg max-w-[52ch] leading-relaxed">{subtitle}</p>}
        </Reveal>
        {children && <Reveal delay={0.1} className="mt-8">{children}</Reveal>}
      </div>
    </section>
  );
}
