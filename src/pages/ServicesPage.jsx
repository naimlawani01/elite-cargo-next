import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import PageIntro from '../components/PageIntro';
import Reveal from '../components/Reveal';
import Frame from '../components/Frame';
import PillButton from '../components/PillButton';

export default function ServicesPage() {
  const { t, i18n } = useTranslation();
  const { lang } = useParams();
  const currentLang = ['fr', 'en'].includes(lang) ? lang : 'fr';
  const isFr = currentLang === 'fr';

  useEffect(() => {
    if (['fr', 'en'].includes(lang) && i18n.language !== lang) {
      i18n.changeLanguage(lang);
      localStorage.setItem('language', lang);
    }
  }, [lang, i18n]);

  const services = [
    {
      code: '01',
      name: isFr ? 'Fret aérien' : 'Air freight',
      desc: isFr
        ? "Gestion complète du fret aérien depuis l'aéroport de Conakry sur les principales compagnies (Air France, Ethiopian Airlines, Royal Air Maroc, Brussels Airlines, ASKY). Suivi en temps réel, assurance cargo et solutions express pour vos envois urgents."
        : 'End-to-end air freight from Conakry airport on major carriers (Air France, Ethiopian Airlines, Royal Air Maroc, Brussels Airlines, ASKY). Real-time tracking, cargo insurance and express solutions for urgent shipments.',
      features: isFr ? ['Suivi temps réel', 'Assurance cargo', 'Import / Export', 'Express'] : ['Real-time tracking', 'Cargo insurance', 'Import / Export', 'Express'],
      img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1600&auto=format&fit=crop',
      cap: isFr ? 'Chargement 737F — Conakry' : 'Loading 737F — Conakry',
    },
    {
      code: '02',
      name: isFr ? 'Fret maritime & terrestre' : 'Sea & land freight',
      desc: isFr
        ? 'Groupage (LCL) ou conteneur complet (FCL), et acheminement routier régional en Afrique de l\'Ouest. Des solutions au budget maîtrisé pour vos volumes les plus lourds, du port à la porte.'
        : 'Groupage (LCL) or full container load (FCL), plus regional road haulage across West Africa. Budget-controlled solutions for your heaviest volumes, from port to door.',
      features: isFr ? ['FCL / LCL', 'Porte-à-porte', 'Régional', 'Suivi'] : ['FCL / LCL', 'Door-to-door', 'Regional', 'Tracking'],
      img: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1600&auto=format&fit=crop',
      cap: isFr ? 'Terminal à conteneurs' : 'Container terminal',
    },
    {
      code: '03',
      name: isFr ? 'Transit & Douane' : 'Transit & Customs',
      desc: isFr
        ? "Formalités douanières, dédouanement import/export, documentation spécialisée et conseil réglementaire. Forts de notre expérience de transitaire, nous levons les frictions administratives pour que vos marchandises circulent sans délai."
        : 'Customs formalities, import/export clearance, specialised documentation and regulatory advice. With our freight-forwarding experience, we remove administrative friction so your goods move without delay.',
      features: isFr ? ['Dédouanement', 'Documentation', 'Conseil réglementaire', 'Import / Export'] : ['Clearance', 'Documentation', 'Regulatory advice', 'Import / Export'],
      img: 'https://images.unsplash.com/photo-1605732562742-3023a888e56e?q=80&w=1600&auto=format&fit=crop',
      cap: isFr ? 'Aérogare de fret, Gbessia' : 'Cargo terminal, Gbessia',
    },
    {
      code: '04',
      name: isFr ? 'Déménagement international' : 'International moving',
      desc: isFr
        ? 'Emballage professionnel, stockage sécurisé et service porte-à-porte pour les particuliers comme pour les entreprises. Nous accompagnons chaque étape de votre déménagement à l\'international.'
        : 'Professional packing, secure storage and door-to-door service for individuals and companies alike. We handle every step of your international relocation.',
      features: isFr ? ['Emballage pro', 'Stockage sécurisé', 'Porte-à-porte', 'Assurance'] : ['Pro packing', 'Secure storage', 'Door-to-door', 'Insurance'],
      img: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1600&auto=format&fit=crop',
      cap: isFr ? 'Porte-à-porte international' : 'Door-to-door, worldwide',
    },
    {
      code: '05',
      name: isFr ? 'Entreposage & Distribution' : 'Warehousing & Distribution',
      desc: isFr
        ? "2 400 m² d'entrepôts sécurisés pour le stockage, la préparation de commandes et la distribution de vos marchandises en Afrique de l'Ouest. Des options flexibles adaptées à vos flux."
        : '2,400 m² of secured warehousing for storage, order preparation and distribution across West Africa. Flexible options tailored to your flows.',
      features: isFr ? ['2 400 m²', 'Stockage sécurisé', 'Préparation', 'Distribution'] : ['2,400 m²', 'Secure storage', 'Fulfilment', 'Distribution'],
      img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1600&auto=format&fit=crop',
      cap: isFr ? 'Entrepôt sécurisé — 2 400 m²' : 'Secured warehouse — 2,400 m²',
    },
  ];

  const seoData = {
    fr: {
      title: 'Nos Services | Fret Aérien, Maritime, Transit & Douane — Elite Cargo',
      description: "Fret aérien et maritime, transit et dédouanement, déménagement international et entreposage à Conakry, Guinée. Découvrez les services logistiques d'Elite Cargo depuis 1997.",
      keywords: 'fret aérien Guinée, fret maritime Conakry, transit douane Guinée, dédouanement Conakry, déménagement international Guinée, entreposage Conakry',
    },
    en: {
      title: 'Our Services | Air & Sea Freight, Transit & Customs — Elite Cargo',
      description: 'Air and sea freight, transit and customs clearance, international moving and warehousing in Conakry, Guinea. Discover Elite Cargo logistics services since 1997.',
      keywords: 'air freight Guinea, sea freight Conakry, customs transit Guinea, clearance Conakry, international moving Guinea, warehousing Conakry',
    },
  };
  const s = seoData[currentLang] || seoData.fr;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: services.map((sv, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: { '@type': 'Service', name: sv.name, description: sv.desc, provider: { '@type': 'Organization', name: 'Elite Cargo' }, areaServed: 'West Africa' },
    })),
  };

  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink font-body pt-[5.5rem]">
      <SEO title={s.title} description={s.description} keywords={s.keywords} canonical={`https://elite-cargo.net/${currentLang}/services`} lang={currentLang} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />

      <PageIntro
        label={isFr ? 'Services' : 'Services'}
        title={isFr ? 'Un maillon pour chaque trajet.' : 'A link for every journey.'}
        subtitle={t('services.subtitle')}
      />

      <main className="flex-grow pb-[clamp(4rem,10vw,7rem)]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          {services.map((sv, i) => (
            <article key={sv.code} className={`grid lg:grid-cols-2 gap-[clamp(1.5rem,5vw,4.5rem)] items-center py-[clamp(2.5rem,6vw,4.5rem)] border-t border-ink/10 ${i === services.length - 1 ? 'border-b' : ''}`}>
              <Reveal className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <Frame src={sv.img} alt={sv.name} caption={sv.cap} code={`SVC · ${sv.code}`} className="aspect-[4/3]" />
              </Reveal>
              <Reveal delay={0.1} className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <span className="mono-meta text-accent">{sv.code} / {sv.name}</span>
                <h2 className="font-display font-semibold tracking-tight text-[clamp(1.8rem,4vw,2.8rem)] mt-3 mb-4">{sv.name}</h2>
                <p className="text-ink-soft leading-relaxed max-w-[48ch]">{sv.desc}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {sv.features.map((f) => (
                    <li key={f} className="mono-meta px-3 py-1.5 border border-ink/15 rounded-full">{f}</li>
                  ))}
                </ul>
              </Reveal>
            </article>
          ))}

          <Reveal className="mt-[clamp(3rem,7vw,5rem)] flex flex-col sm:flex-row sm:items-center gap-6 justify-between">
            <p className="font-display font-semibold tracking-tight text-[clamp(1.6rem,4vw,2.4rem)] max-w-[20ch] text-balance">
              {isFr ? 'Un besoin logistique précis ?' : 'A specific logistics need?'}
            </p>
            <PillButton to={`/${currentLang}/contact`} variant="solid" magnetic>{t('hero.cta')}</PillButton>
          </Reveal>
        </div>
      </main>

      <Footer />
    </div>
  );
}
