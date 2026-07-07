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
        ? "Notre cœur de métier. Nous acheminons votre fret aérien depuis Conakry vers le monde entier — Amérique du Nord, Europe, Golfe, Asie et Afrique. Taxation, documentation et suivi maîtrisés, à l'import comme à l'export. Le maritime et le terrestre viennent en complément."
        : 'Our core business. We carry your air freight from Conakry to the whole world — North America, Europe, the Gulf, Asia and Africa. Cargo rating, documentation and tracking under control, import and export. Sea and land come as a complement.',
      features: isFr ? ['Export mondial', 'Import', 'Suivi', 'Express'] : ['Worldwide export', 'Import', 'Tracking', 'Express'],
      img: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=1600&auto=format&fit=crop',
      cap: isFr ? 'Chargement export — Conakry' : 'Export loading — Conakry',
    },
    {
      code: '02',
      name: isFr ? 'Représentation fret (GSA / CSA)' : 'Cargo representation (GSA / CSA)',
      desc: isFr
        ? "Vente et traitement du fret pour les compagnies aériennes : acceptation, manifeste export, réception et suivi des documents import. Providing airline cargo sales and service management — sur système Cargo Spot."
        : 'Cargo sales and handling for airlines: acceptance, export manifest, import document receipt and tracking. Providing airline cargo sales and service management — on the Cargo Spot system.',
      features: isFr ? ['GSA', 'CSA', 'Cargo Spot', 'Acceptation'] : ['GSA', 'CSA', 'Cargo Spot', 'Acceptance'],
      img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1600&auto=format&fit=crop',
      cap: isFr ? 'Traitement fret export' : 'Export cargo handling',
    },
    {
      code: '03',
      name: isFr ? 'Transit & Douane' : 'Transit & Customs',
      desc: isFr
        ? "Dédouanement import/export, formalités, documentation spécialisée, livraison et intermédiation. Forts de notre expérience de transitaire, nous levons les frictions administratives pour que vos marchandises circulent sans délai."
        : 'Import/export clearance, formalities, specialised documentation, delivery and brokerage. With our freight-forwarding experience, we remove administrative friction so your goods move without delay.',
      features: isFr ? ['Dédouanement', 'Documentation', 'Livraison', 'Intermédiation'] : ['Clearance', 'Documentation', 'Delivery', 'Brokerage'],
      img: 'https://images.unsplash.com/photo-1595246140625-573b715d11dc?q=80&w=1600&auto=format&fit=crop',
      cap: isFr ? 'Aérogare de fret, Gbessia' : 'Cargo terminal, Gbessia',
    },
    {
      code: '04',
      name: isFr ? 'Fret périssable & chaîne du froid' : 'Perishables & cold chain',
      desc: isFr
        ? "Traitement du fret périssable avec accès aux chambres froides (positive et négative) côté piste. Poisson frais et produits de la mer vers l'Europe — dans le strict respect de la chaîne du froid, par un personnel formé."
        : 'Perishable freight handling with access to planeside cold rooms (positive and negative). Fresh fish and seafood to Europe — under a strict cold chain, by trained staff.',
      features: isFr ? ['Chaîne du froid', 'Chambres froides', 'Poisson frais', 'Périssable'] : ['Cold chain', 'Cold rooms', 'Fresh fish', 'Perishable'],
      img: 'https://images.unsplash.com/photo-1474302770737-173ee21bab63?q=80&w=1600&auto=format&fit=crop',
      cap: isFr ? 'Chaîne du froid — côté piste' : 'Cold chain — planeside',
    },
    {
      code: '05',
      name: isFr ? 'Marchandises spéciales & réglementées' : 'Special & regulated cargo',
      desc: isFr
        ? "Marchandises réglementées (DGR), animaux vivants, échantillons miniers et métaux précieux — dont l'or vers le Golfe. Un personnel certifié en acceptation du fret, sûreté aéroportuaire et taxation pour vos envois les plus sensibles."
        : 'Regulated goods (DGR), live animals, mining samples and precious metals — including gold to the Gulf. Staff certified in freight acceptance, airport security and cargo rating for your most sensitive shipments.',
      features: isFr ? ['DGR', 'Animaux vivants', 'Échantillons miniers', 'Métaux précieux'] : ['DGR', 'Live animals', 'Mining samples', 'Precious metals'],
      img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1600&auto=format&fit=crop',
      cap: isFr ? 'Entrepôt sécurisé — 2 400 m²' : 'Secured warehouse — 2,400 m²',
    },
    {
      code: '06',
      name: isFr ? 'Déménagement & garde-meuble' : 'Moving & storage',
      desc: isFr
        ? "Déménagement local et international : emballage et déballage, fournitures, convoyage et garde-meuble sécurisé. Enlèvement et livraison à domicile, pour les particuliers comme pour les entreprises."
        : 'Local and international moving: packing and unpacking, supplies, convoyage and secure furniture storage. Home pickup and delivery, for individuals and companies alike.',
      features: isFr ? ['International', 'Emballage', 'Garde-meuble', 'Porte-à-porte'] : ['International', 'Packing', 'Storage', 'Door-to-door'],
      img: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1600&auto=format&fit=crop',
      cap: isFr ? 'Emballage & convoyage' : 'Packing & convoyage',
    },
  ];

  const seoData = {
    fr: {
      title: 'Nos Services | Fret Aérien & Maritime, Transit, GSA — Elite Cargo',
      description: "Fret aérien et maritime, transit et douane, représentation GSA/CSA, chaîne du froid, marchandises réglementées et déménagement à Conakry, Guinée. Elite Cargo depuis 1997.",
      keywords: 'fret aérien Guinée, fret maritime Conakry, transit douane Guinée, dédouanement Conakry, GSA fret Conakry, chaîne du froid Guinée, fret périssable poisson, déménagement international Guinée',
    },
    en: {
      title: 'Our Services | Air & Sea Freight, Transit, GSA — Elite Cargo',
      description: 'Air and sea freight, transit and customs, GSA/CSA representation, cold chain, regulated cargo and moving in Conakry, Guinea. Elite Cargo since 1997.',
      keywords: 'air freight Guinea, sea freight Conakry, customs transit Guinea, cargo GSA Conakry, cold chain Guinea, perishable freight fish, international moving Guinea',
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
