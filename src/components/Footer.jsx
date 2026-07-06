import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams, Link } from 'react-router-dom';
import PillButton from './PillButton';
import Reveal from './Reveal';

export default function Footer() {
  const { t } = useTranslation();
  const { lang } = useParams();
  const currentLang = ['fr', 'en'].includes(lang) ? lang : 'fr';
  const isFr = currentLang === 'fr';
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-band text-band-ink overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 pt-[clamp(4.5rem,12vw,8rem)] pb-10">
        {/* Big CTA */}
        <Reveal>
          <p className="eyebrow eyebrow--bare mb-6" style={{ color: 'var(--color-band-accent)' }}>
            /Contact
          </p>
          <h2 className="font-display font-bold tracking-tight leading-[0.98] text-[clamp(2.4rem,8vw,6rem)] max-w-[15ch] text-balance">
            Parlons de votre{' '}
            <span className="font-serif italic font-normal text-band-sand">prochaine</span>{' '}
            expédition.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <PillButton href="mailto:info@elite-cargo.net" variant="light" magnetic>
            {t('hero.cta', 'Demander un devis')}
          </PillButton>
        </Reveal>

        {/* Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-[clamp(3rem,7vw,5rem)] pt-10 border-t border-band-ink/15">
          <div>
            <h4 className="mono-meta text-band-ink/50 mb-4">Contact</h4>
            <a href="tel:+224622652511" className="block text-band-ink/85 hover:text-band-sand transition-colors mb-2">
              +224 622 65 25 11
            </a>
            <a href="mailto:info@elite-cargo.net" className="block text-band-ink/85 hover:text-band-sand transition-colors">
              info@elite-cargo.net
            </a>
          </div>
          <div>
            <h4 className="mono-meta text-band-ink/50 mb-4">Adresse</h4>
            <p className="text-band-ink/85 leading-relaxed">
              Aérogare de fret<br />Aéroport de Gbessia<br />Conakry, Guinée
            </p>
          </div>
          <div>
            <h4 className="mono-meta text-band-ink/50 mb-4">Horaires</h4>
            <p className="text-band-ink/85 leading-relaxed">
              Lun – Ven · 8h – 18h<br />Samedi · 8h – 13h
            </p>
          </div>
          <div>
            <h4 className="mono-meta text-band-ink/50 mb-4">Navigation</h4>
            <Link to={`/${currentLang}/services`} className="block text-band-ink/85 hover:text-band-sand transition-colors mb-2">
              {t('nav.services', 'Services')}
            </Link>
            <Link to={`/${currentLang}/about`} className="block text-band-ink/85 hover:text-band-sand transition-colors mb-2">
              {t('nav.about', 'À propos')}
            </Link>
            <Link to={`/${currentLang}/gallery`} className="block text-band-ink/85 hover:text-band-sand transition-colors mb-2">
              {t('nav.gallery', 'Galerie')}
            </Link>
            <Link to={`/${currentLang}/contact`} className="block text-band-ink/85 hover:text-band-sand transition-colors">
              {t('nav.contact', 'Contact')}
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-14 pt-6 border-t border-band-ink/15">
          <span className="mono-meta text-band-ink/50">© {year} Elite Cargo — {isFr ? 'Depuis' : 'Since'} 1997</span>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link to={`/${currentLang}/legal`} className="mono-meta text-band-ink/50 hover:text-band-sand transition-colors">
              {isFr ? 'Mentions légales' : 'Legal notice'}
            </Link>
            <Link to={`/${currentLang}/privacy`} className="mono-meta text-band-ink/50 hover:text-band-sand transition-colors">
              {isFr ? 'Confidentialité' : 'Privacy'}
            </Link>
          </div>
          <span className="mono-meta text-band-ink/50">
            {isFr ? 'Créé par' : 'Built by'}{' '}
            <a href="https://imrane.tech" target="_blank" rel="noopener noreferrer" className="text-band-sand hover:text-band-ink transition-colors">
              IMRANE TECH
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
