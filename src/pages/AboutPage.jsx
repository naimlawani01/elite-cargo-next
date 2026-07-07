import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import PageIntro from '../components/PageIntro';
import Reveal from '../components/Reveal';
import Frame from '../components/Frame';
import SectionTitle from '../components/SectionTitle';
import PillButton from '../components/PillButton';

export default function AboutPage() {
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

  const journey = [
    {
      year: '1996',
      h: isFr ? 'Les débuts, avec Royal Air Maroc' : 'The beginning, with Royal Air Maroc',
      d: isFr
        ? "Notre parcours de représentant fret (GSA) commence à l'aéroport de Conakry avec Royal Air Maroc."
        : 'Our journey as a cargo GSA begins at Conakry airport with Royal Air Maroc.',
    },
    {
      year: '1997',
      h: isFr ? 'Naissance d\'Elite Cargo' : 'Elite Cargo is born',
      d: isFr
        ? "De Guinée Handling à Guinée Cargo Handling, puis Elite Cargo : une structure dédiée au fret aérien, au transit et au déménagement."
        : 'From Guinée Handling to Guinée Cargo Handling, then Elite Cargo: a structure dedicated to air freight, transit and moving.',
    },
    {
      year: '2003',
      h: isFr ? 'GSA à Conakry' : 'GSA in Conakry',
      d: isFr
        ? "Contrat de représentation GSA à Conakry et reconnaissance de notre savoir-faire dans le traitement du fret."
        : 'GSA representation contract in Conakry and recognition of our cargo-handling expertise.',
    },
    {
      year: '2014',
      h: isFr ? "Certificat d'excellence" : 'Certificate of excellence',
      d: isFr
        ? "Brussels Airlines Cargo nous décerne un certificat d'excellence pour la qualité de notre traitement fret."
        : 'Brussels Airlines Cargo awards us a certificate of excellence for our cargo-handling quality.',
    },
    {
      year: '2018',
      h: isFr ? 'GSA Ethiopian Airlines' : 'Ethiopian Airlines GSA',
      d: isFr
        ? "Nous devenons GSA d'Ethiopian Airlines, élargissant notre réseau de compagnies représentées."
        : 'We become Ethiopian Airlines GSA, expanding our network of represented carriers.',
    },
    {
      year: isFr ? "Aujourd'hui" : 'Today',
      h: isFr ? 'Un réseau mondial' : 'A worldwide network',
      d: isFr
        ? "Quatre filiales (Conakry, Bamako, Cotonou, Freetown), 2 400 m² d'entrepôts et membre du World Freight Network — plus de 150 partenaires pour expédier et réceptionner partout dans le monde."
        : 'Four branches (Conakry, Bamako, Cotonou, Freetown), 2,400 m² of warehousing and a member of the World Freight Network — over 150 partners to ship and receive anywhere in the world.',
    },
  ];

  const values = [
    { title: t('reasons.reliability.title'), desc: t('reasons.reliability.desc') },
    { title: t('reasons.reactivity.title'), desc: t('reasons.reactivity.desc') },
    { title: t('reasons.network.title'), desc: t('reasons.network.desc') },
    { title: t('reasons.expertise.title'), desc: t('reasons.expertise.desc') },
  ];

  const team = [
    { name: t('team.members.director.name'), role: t('team.members.director.role'), img: '/images/team/aminouLawani.png' },
    { name: t('team.members.admin.name'), role: t('team.members.admin.role'), img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop' },
    { name: t('team.members.operations.name'), role: t('team.members.operations.role'), img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1200&auto=format&fit=crop' },
  ];

  const seoData = {
    fr: {
      title: "À Propos | Elite Cargo — Transitaire & Logistique depuis 1997",
      description: "Depuis 1997, Elite Cargo est un groupe leader du fret aérien et de la logistique en Afrique de l'Ouest, avec des filiales en Guinée, Mali, Bénin et Sierra Leone.",
      keywords: 'à propos Elite Cargo, transitaire Guinée, entreprise fret Conakry, logistique Afrique Ouest',
    },
    en: {
      title: 'About | Elite Cargo — Freight Forwarder & Logistics since 1997',
      description: 'Since 1997, Elite Cargo is a leading air freight and logistics group in West Africa, with branches in Guinea, Mali, Benin and Sierra Leone.',
      keywords: 'about Elite Cargo, freight forwarder Guinea, Conakry freight company, West Africa logistics',
    },
  };
  const s = seoData[currentLang] || seoData.fr;

  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink font-body pt-[5.5rem]">
      <SEO title={s.title} description={s.description} keywords={s.keywords} canonical={`https://elite-cargo.net/${currentLang}/about`} lang={currentLang} />
      <Header />

      <PageIntro
        label={isFr ? 'À propos' : 'About us'}
        title={isFr ? 'Une histoire de confiance, depuis 1997.' : 'A story of trust, since 1997.'}
        subtitle={t('about.text1')}
      />

      <main className="flex-grow">
        {/* Story + image */}
        <section className="pb-[clamp(3rem,8vw,6rem)]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 grid lg:grid-cols-2 gap-[clamp(2rem,5vw,4.5rem)] items-center">
            <Reveal className="order-2 lg:order-1">
              <p className="text-ink-soft leading-relaxed max-w-[52ch]">{t('about.text2')}</p>
              <div className="mt-8">
                <PillButton to={`/${currentLang}/services`} variant="outline">{isFr ? 'Nos services' : 'Our services'}</PillButton>
              </div>
            </Reveal>
            <Reveal delay={0.1} className="order-1 lg:order-2">
              <Frame src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1600&auto=format&fit=crop" alt="Elite Cargo" caption={isFr ? 'Aérogare de fret — Conakry' : 'Cargo terminal — Conakry'} code="CKY" className="aspect-[4/5]" />
            </Reveal>
          </div>
        </section>

        {/* Journey / timeline */}
        <section className="py-[clamp(3.5rem,8vw,6rem)] border-t border-ink/10">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
            <SectionTitle label={isFr ? 'Notre parcours' : 'Our journey'}>
              {isFr ? 'De Conakry, vers le monde.' : 'From Conakry, to the world.'}
            </SectionTitle>
            <div className="mt-[clamp(2.5rem,6vw,4rem)]">
              {journey.map((step, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="grid md:grid-cols-[minmax(0,10rem)_1fr] gap-2 md:gap-10 py-8 border-t border-ink/12 last:border-b">
                    <span className="font-display font-bold tracking-tight text-2xl text-accent">{step.year}</span>
                    <div>
                      <h3 className="font-display font-semibold tracking-tight text-xl mb-2">{step.h}</h3>
                      <p className="text-ink-soft leading-relaxed max-w-[52ch]">{step.d}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Commitment / mission */}
        <section className="py-[clamp(4rem,10vw,7rem)] bg-band text-band-ink">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
            <Reveal>
              <span className="eyebrow eyebrow--bare mb-6" style={{ color: 'var(--color-band-accent)' }}>
                /{isFr ? 'Notre engagement' : 'Our commitment'}
              </span>
              <p className="font-display font-semibold tracking-tight leading-[1.05] text-[clamp(1.8rem,4.5vw,3.2rem)] max-w-[24ch] text-balance">
                {isFr ? (
                  <>Faire voyager vos marchandises par les airs avec la même exigence, du simple colis à l'expédition la plus sensible — <span className="font-serif italic font-normal text-band-sand">à chaque étape.</span></>
                ) : (
                  <>Flying your goods with the same care, from a single parcel to your most sensitive shipment — <span className="font-serif italic font-normal text-band-sand">at every step.</span></>
                )}
              </p>
            </Reveal>
          </div>
        </section>

        {/* Values */}
        <section className="py-[clamp(3.5rem,8vw,6rem)] border-t border-ink/10">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
            <SectionTitle label={isFr ? 'Nos valeurs' : 'Our values'} subtitle={t('reasons.subtitle')}>{t('reasons.title')}</SectionTitle>
            <div className="mt-[clamp(2.5rem,6vw,4rem)] grid md:grid-cols-2 gap-x-[clamp(2rem,5vw,5rem)]">
              {values.map((v, i) => (
                <Reveal key={i} delay={(i % 2) * 0.1} className="group flex gap-6 py-7 border-t border-ink/12">
                  <span className="mono-meta text-accent pt-1.5">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="font-display font-semibold tracking-tight text-2xl mb-2 transition-colors group-hover:text-accent">{v.title}</h3>
                    <p className="text-ink-soft leading-relaxed max-w-[42ch]">{v.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-[clamp(3.5rem,8vw,6rem)] border-t border-ink/10">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
            <SectionTitle label={isFr ? 'Équipe' : 'Team'} subtitle={t('team.subtitle')}>{t('team.title')}</SectionTitle>
            <div className="mt-[clamp(2.5rem,6vw,4rem)] grid sm:grid-cols-3 gap-6">
              {team.map((m, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <Frame src={m.img} alt={m.name} className="aspect-[4/5]" />
                  <h3 className="font-display font-semibold tracking-tight text-xl mt-4">{m.name}</h3>
                  <p className="mono-meta text-accent mt-1">{m.role}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
