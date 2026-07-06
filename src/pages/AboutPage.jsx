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

  const stats = [
    { n: '25', u: isFr ? 'ans' : 'yrs', l: t('stats.experience.label', "d'expérience") },
    { n: '2 400', u: 'm²', l: t('stats.warehouses.label', "d'entrepôts") },
    { n: '4', u: isFr ? 'filiales' : 'branches', l: isFr ? "en Afrique de l'Ouest, portée mondiale" : 'in West Africa, worldwide reach' },
    { n: '15', u: '+', l: t('stats.employees.label', 'employés formés') },
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
      title: "À Propos | Elite Cargo — Transitaire & Logistique en Afrique de l'Ouest depuis 1997",
      description: "Depuis 1997, Elite Cargo est un groupe leader du fret aérien et de la logistique en Afrique de l'Ouest, avec des filiales en Guinée, Mali, Bénin et Sierra Leone.",
      keywords: 'à propos Elite Cargo, transitaire Guinée, entreprise fret Conakry, logistique Afrique Ouest',
    },
    en: {
      title: 'About | Elite Cargo — Freight Forwarder & Logistics in West Africa since 1997',
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
        title={isFr ? 'Vingt-cinq ans à relier les continents.' : 'Twenty-five years connecting continents.'}
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
              <Frame src="https://images.unsplash.com/photo-1605732562742-3023a888e56e?q=80&w=1600&auto=format&fit=crop" alt="Elite Cargo" caption={isFr ? 'Aérogare de fret — Conakry' : 'Cargo terminal — Conakry'} code="CKY" className="aspect-[4/5]" />
            </Reveal>
          </div>
        </section>

        {/* Stats */}
        <section className="py-[clamp(3.5rem,8vw,6rem)] border-t border-ink/10">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
            <span className="eyebrow mb-10 block">{isFr ? 'En chiffres' : 'By the numbers'}</span>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
              {stats.map((st, i) => (
                <Reveal key={i} delay={i * 0.08} className="border-t border-ink/15 pt-5">
                  <div className="font-display font-bold tracking-[-0.04em] leading-none text-[clamp(2.8rem,8vw,5rem)] tabular-nums">
                    {st.n}<span className="font-serif italic font-normal text-[0.32em] text-sand ml-1">{st.u}</span>
                  </div>
                  <p className="text-ink-soft mt-3 max-w-[18ch]">{st.l}</p>
                </Reveal>
              ))}
            </div>
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
