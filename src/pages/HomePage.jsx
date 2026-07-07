import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SectionTitle from '../components/SectionTitle';
import PillButton from '../components/PillButton';
import Reveal from '../components/Reveal';
import Frame from '../components/Frame';
import SEO from '../components/SEO';

// Stock placeholders (air-freight focused) — swap for real Elite Cargo photography (HD).
const IMG = {
  hero: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2400&auto=format&fit=crop',
  about: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1600&auto=format&fit=crop',
  air: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=1600&auto=format&fit=crop',
  customs: 'https://images.unsplash.com/photo-1595246140625-573b715d11dc?q=80&w=1600&auto=format&fit=crop',
  moving: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1600&auto=format&fit=crop',
};

const heroContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const heroItem = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 0.9, 0.24, 1] } },
};

export default function HomePage() {
  const { t, i18n } = useTranslation();
  const { lang } = useParams();
  const currentLang = ['fr', 'en'].includes(lang) ? lang : 'fr';
  const isFr = currentLang === 'fr';

  useEffect(() => {
    if (lang && ['fr', 'en'].includes(lang) && i18n.language !== lang) {
      i18n.changeLanguage(lang);
      localStorage.setItem('language', lang);
    }
  }, [lang, i18n]);

  const services = [
    { title: t('services.freight.title'), desc: t('services.freight.description'), img: IMG.air, cap: isFr ? 'Chargement 737F — Conakry' : 'Loading 737F — Conakry', code: 'AWB · 057', idx: '01' },
    { title: t('services.customs.title'), desc: t('services.customs.description'), img: IMG.customs, cap: isFr ? 'Aérogare de fret, Gbessia' : 'Cargo terminal, Gbessia', code: 'DAU · GN', idx: '02' },
    { title: t('services.moving.title'), desc: t('services.moving.description'), img: IMG.moving, cap: isFr ? 'Porte-à-porte international' : 'Door-to-door, worldwide', code: 'WHS · 01', idx: '03' },
  ];

  const stats = [
    { n: '25', u: isFr ? 'ans' : 'yrs', l: t('stats.experience.label', "d'expérience") },
    { n: '2 400', u: 'm²', l: t('stats.warehouses.label', "d'entrepôts") },
    { n: '4', u: isFr ? 'filiales' : 'branches', l: isFr ? "en Afrique de l'Ouest, portée mondiale" : 'in West Africa, worldwide reach' },
    { n: '15', u: '+', l: t('stats.employees.label', 'employés formés') },
  ];

  const reasons = [
    { title: t('reasons.reliability.title'), desc: t('reasons.reliability.desc') },
    { title: t('reasons.reactivity.title'), desc: t('reasons.reactivity.desc') },
    { title: t('reasons.network.title'), desc: t('reasons.network.desc') },
    { title: t('reasons.expertise.title'), desc: t('reasons.expertise.desc') },
  ];

  const network = [
    { code: 'CKY', city: 'Conakry', name: t('branches.guinea.name'), meta: 'Guinée · 9.576°N' },
    { code: 'BKO', city: 'Bamako', name: t('branches.mali.name'), meta: 'Mali · 12.634°N' },
    { code: 'COO', city: 'Cotonou', name: t('branches.benin.name'), meta: 'Bénin · 6.357°N' },
    { code: 'FNA', city: 'Freetown', name: t('branches.sierraLeone.name'), meta: 'Sierra Leone · 8.484°N' },
  ];

  const partners = [
    { name: 'Air France', logo: 'https://cdn.brandfetch.io/idddYhP85r/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B' },
    { name: 'Ethiopian Airlines', logo: 'https://cdn.brandfetch.io/idA9s40f4v/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B' },
    { name: 'Royal Air Maroc', logo: 'https://cdn.brandfetch.io/idelgXOOOS/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B' },
    { name: 'Brussels Airlines', logo: 'https://cdn.brandfetch.io/idiZLXv-wz/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B' },
    { name: 'Asky', logo: 'https://cdn.brandfetch.io/idFPXMyIRS/w/400/h/167/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B' },
  ];

  const seo = {
    fr: {
      title: "Elite Cargo | Leader du Fret Aérien & Logistique en Afrique de l'Ouest depuis 1997",
      description: "Elite Cargo, société leader en fret aérien, maritime et terrestre depuis 1997. Expert en transit, douane et déménagement international en Guinée, Mali, Bénin et Sierra Leone.",
      keywords: 'Elite Cargo, fret aérien Guinée, fret maritime Conakry, logistique Afrique Ouest, transit douane Guinée',
    },
    en: {
      title: 'Elite Cargo | Air Freight & Logistics Leader in West Africa since 1997',
      description: 'Elite Cargo, leading company in air, sea and land freight since 1997. Expert in customs, transit and international moving in Guinea, Mali, Benin and Sierra Leone.',
      keywords: 'Elite Cargo, air freight Guinea, sea freight Conakry, West Africa logistics, customs transit Guinea',
    },
  };
  const s = seo[currentLang] || seo.fr;

  return (
    <main className="bg-paper text-ink">
      <SEO title={s.title} description={s.description} keywords={s.keywords} canonical={`https://elite-cargo.net/${currentLang}`} lang={currentLang} />
      <Header />

      {/* ==================== HERO ==================== */}
      <section className="relative min-h-svh flex items-end overflow-hidden text-band-ink grain bg-band isolate">
        <div className="absolute inset-0 z-0">
          <img src={IMG.hero} alt={isFr ? 'Avion cargo au coucher du soleil' : 'Cargo plane at dusk'} fetchPriority="high" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-band via-band/60 to-band/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-band/80 via-band/20 to-transparent" />
        </div>

        {/* top metadata */}
        <div className="absolute top-[6.5rem] inset-x-0 z-10">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 flex justify-between text-band-ink/70">
            <span className="mono-meta">CKY · 9.576°N 13.612°O</span>
            <span className="mono-meta hidden sm:block">CDG · DXB · JFK · YUL · CMN</span>
          </div>
        </div>

        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="show"
          className="relative z-10 w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 pb-[clamp(3rem,7vw,5rem)]"
        >
          <motion.p variants={heroItem} className="font-serif italic text-[clamp(1.05rem,2.4vw,1.5rem)] text-band-ink/85 mb-5">
            {isFr ? "Transitaire & commissionnaire de fret en Afrique de l'Ouest" : 'Freight forwarder & customs broker in West Africa'}
          </motion.p>

          <motion.h1
            variants={heroItem}
            className="font-display font-bold tracking-[-0.04em] leading-[0.92] text-[clamp(2.8rem,10vw,8.5rem)] max-w-[15ch] text-balance"
          >
            {t('hero.title')}
          </motion.h1>

          <motion.div variants={heroItem} className="mt-[clamp(1.5rem,4vw,2.5rem)] flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <p className="max-w-[42ch] text-band-ink/80 text-[clamp(1rem,1.5vw,1.15rem)] leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <PillButton to={`/${currentLang}/contact`} variant="light" magnetic>
                {t('hero.cta')}
              </PillButton>
              <PillButton href="tel:+224622652511" variant="ghost" showIcon={false}>
                +224 622 65 25 11
              </PillButton>
            </div>
          </motion.div>
        </motion.div>

        <div className="absolute z-10 bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-band-ink/55">
          <span className="mono-meta">{t('hero.scroll', 'Défiler')}</span>
          <motion.span
            animate={{ scaleY: [0.4, 1, 0.4], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="w-px h-8 bg-band-ink/50 origin-top"
          />
        </div>
      </section>

      {/* ==================== MANIFESTO / ABOUT ==================== */}
      <section id="about" className="py-[clamp(4.5rem,12vw,9rem)]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-[clamp(2rem,5vw,5rem)] items-center">
            <div>
              <Reveal>
                <span className="eyebrow mb-6">{isFr ? 'À propos' : 'About us'}</span>
                <h2 className="font-display font-semibold tracking-tight leading-[1.02] text-[clamp(1.9rem,5vw,3.6rem)] max-w-[18ch] text-balance">
                  {isFr ? (
                    <>Nous connaissons chaque <span className="font-serif italic font-normal text-accent">étape</span> du voyage.</>
                  ) : (
                    <>We know every <span className="font-serif italic font-normal text-accent">step</span> of the journey.</>
                  )}
                </h2>
              </Reveal>
              <Reveal delay={0.1} className="mt-8 text-ink-soft text-[1.02rem] leading-relaxed max-w-[50ch]">
                <p>
                  {isFr
                    ? "Du colis express à l'expédition la plus sensible, Elite Cargo fait voyager votre fret aérien depuis Conakry vers le monde entier — de Paris à Dubaï, de New York à Johannesburg. À l'import comme à l'export, depuis 1997."
                    : 'From an express parcel to your most sensitive shipment, Elite Cargo flies your air freight from Conakry to the whole world — from Paris to Dubai, New York to Johannesburg. Import and export alike, since 1997.'}
                </p>
                <div className="mt-8">
                  <PillButton to={`/${currentLang}/about`} variant="outline">{isFr ? 'Notre histoire' : 'Our story'}</PillButton>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.15} className="relative">
              <Frame
                src={IMG.about}
                alt="Elite Cargo"
                caption={isFr ? 'Entrepôt sécurisé — 2 400 m²' : 'Secured warehouse — 2,400 m²'}
                code="WHS · 01"
                className="aspect-[4/5]"
              />
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-paper rounded-2xl shadow-xl px-6 py-5 flex items-center gap-4">
                <span className="font-display font-bold text-4xl text-accent">25+</span>
                <span className="text-sm text-ink-soft max-w-[10ch] leading-tight">
                  {isFr ? "années d'expérience" : 'years of experience'}
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ==================== SERVICES ==================== */}
      <section id="services" className="py-[clamp(4.5rem,12vw,9rem)] border-t border-ink/10">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-[clamp(2.5rem,6vw,4rem)]">
            <SectionTitle label={isFr ? 'Services' : 'Services'} subtitle={t('services.subtitle')}>
              {t('services.title')}
            </SectionTitle>
            <Reveal delay={0.1}>
              <PillButton to={`/${currentLang}/services`} variant="outline">{isFr ? 'Tous nos services' : 'All services'}</PillButton>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {services.map((svc, i) => (
              <Reveal key={i} delay={i * 0.1} className="group">
                <Frame src={svc.img} alt={svc.title} caption={svc.cap} code={svc.code} className="aspect-[3/4]" />
                <div className="mt-5">
                  <span className="mono-meta text-accent">{svc.idx} / {svc.title}</span>
                  <h3 className="font-display font-semibold tracking-tight text-2xl mt-2 mb-2">{svc.title}</h3>
                  <p className="text-ink-soft leading-relaxed max-w-[38ch]">{svc.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== STATS (light) ==================== */}
      <section id="stats" className="py-[clamp(4.5rem,12vw,9rem)] border-t border-ink/10">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <Reveal><span className="eyebrow mb-10 block">{isFr ? 'En chiffres' : 'By the numbers'}</span></Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {stats.map((st, i) => (
              <Reveal key={i} delay={i * 0.08} className="border-t border-ink/15 pt-5">
                <div className="font-display font-bold tracking-[-0.04em] leading-none text-[clamp(2.8rem,8vw,5.5rem)] tabular-nums">
                  {st.n}<span className="font-serif italic font-normal text-[0.32em] text-sand ml-1">{st.u}</span>
                </div>
                <p className="text-ink-soft mt-3 max-w-[18ch]">{st.l}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WHY US ==================== */}
      <section className="py-[clamp(4.5rem,12vw,9rem)] border-t border-ink/10">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <SectionTitle label={isFr ? 'Pourquoi nous' : 'Why us'} subtitle={t('reasons.subtitle')}>
            {t('reasons.title')}
          </SectionTitle>
          <div className="mt-[clamp(2.5rem,6vw,4rem)] grid md:grid-cols-2 gap-x-[clamp(2rem,5vw,5rem)]">
            {reasons.map((r, i) => (
              <Reveal key={i} delay={(i % 2) * 0.1} className="group flex gap-6 py-7 border-t border-ink/12">
                <span className="mono-meta text-accent pt-1.5">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="font-display font-semibold tracking-tight text-2xl mb-2 transition-colors group-hover:text-accent">{r.title}</h3>
                  <p className="text-ink-soft leading-relaxed max-w-[42ch]">{r.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== NETWORK ==================== */}
      <section id="network" className="py-[clamp(4.5rem,12vw,9rem)] border-t border-ink/10">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <SectionTitle label={isFr ? 'Notre réseau' : 'Our network'} subtitle={t('branches.subtitle')}>
            {t('branches.title')}
          </SectionTitle>
          <div className="mt-[clamp(2rem,5vw,3.5rem)]">
            {network.map((b, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-4 sm:gap-8 py-6 border-t border-ink/12 last:border-b transition-[padding] duration-500 hover:pl-3 hover:text-accent">
                  <span className="font-mono text-[clamp(1.4rem,3vw,2.1rem)] tracking-wide">{b.code}</span>
                  <span className="font-display font-semibold tracking-tight text-[clamp(1.4rem,3vw,2.1rem)] leading-tight">
                    {b.city}<span className="block font-body font-normal text-sm text-ink-soft tracking-normal group-hover:text-accent/70">{b.name}</span>
                  </span>
                  <span className="mono-meta text-right">{b.meta}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== MAP ==================== */}
      <section className="py-[clamp(4.5rem,12vw,9rem)] border-t border-ink/10">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <SectionTitle label={isFr ? 'Localisation' : 'Location'} subtitle={isFr ? "Retrouvez-nous à l'aéroport de Conakry" : 'Find us at Conakry airport'}>
            {isFr ? 'Notre localisation' : 'Our location'}
          </SectionTitle>
          <Reveal delay={0.1} className="mt-10 rounded-lg overflow-hidden border border-ink/10">
            <iframe
              title="Elite Cargo Location"
              src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Ahmed%20sekou%20toure%20internatioinal%20airport+(Elite%20cargo)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
              width="100%" height="460" loading="lazy" className="w-full block"
            />
          </Reveal>
        </div>
      </section>

      {/* ==================== PARTNERS (marquee) ==================== */}
      <section id="partners" className="py-[clamp(4.5rem,12vw,9rem)] border-t border-ink/10 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <SectionTitle label={isFr ? 'Partenaires' : 'Partners'} subtitle={t('partners.description')}>
            {t('partners.title')}
          </SectionTitle>
        </div>
        <div className="mt-[clamp(2.5rem,6vw,4rem)] [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
          <div className="flex w-max animate-marquee gap-16">
            {[...partners, ...partners].map((p, i) => (
              <div key={i} className="w-40 flex items-center justify-center shrink-0">
                <img src={p.logo} alt={p.name} className="h-9 w-auto object-contain grayscale opacity-55 hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
