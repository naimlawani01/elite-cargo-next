import React, { useEffect } from 'react';
import { 
  Users, Plane, Ship, Truck, Warehouse, BadgeCheck, Clock, Globe, 
  ShieldCheck, Zap, Phone, MapPin, Mail, ChevronLeft, ChevronRight,
  Package, FileCheck, ArrowRight, CheckCircle2
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SectionTitle from '../components/SectionTitle';
import SEO from '../components/SEO';

export default function HomePage() {
  const { t, i18n } = useTranslation();
  const { lang } = useParams();

  // Synchroniser la langue avec l'URL
  useEffect(() => {
    if (lang && ['fr', 'en'].includes(lang) && i18n.language !== lang) {
      i18n.changeLanguage(lang);
      localStorage.setItem('language', lang);
    }
  }, [lang, i18n]);

  const services = [
    {
      icon: <Plane className="w-8 h-8" />,
      title: t('services.freight.title'),
      description: t('services.freight.description'),
      features: ['Suivi en temps réel', 'Assurance cargo', 'Livraison rapide']
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: t('services.customs.title'),
      description: t('services.customs.description'),
      features: ['Déclarations douanières', 'Documentation', 'Conseil réglementaire']
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: t('services.moving.title'),
      description: t('services.moving.description'),
      features: ['Emballage professionnel', 'Stockage sécurisé', 'Service porte-à-porte']
    }
  ];

  const reasons = [
    { 
      icon: <ShieldCheck className="w-7 h-7" />, 
      title: t('reasons.reliability.title'), 
      desc: t('reasons.reliability.desc') 
    },
    { 
      icon: <Zap className="w-7 h-7" />, 
      title: t('reasons.reactivity.title'), 
      desc: t('reasons.reactivity.desc') 
    },
    { 
      icon: <Globe className="w-7 h-7" />, 
      title: t('reasons.network.title'), 
      desc: t('reasons.network.desc') 
    },
    { 
      icon: <Users className="w-7 h-7" />, 
      title: t('reasons.expertise.title'), 
      desc: t('reasons.expertise.desc') 
    }
  ];

  const team = [
    {
      name: t('team.members.director.name'),
      role: t('team.members.director.role'),
      image: "/images/team/aminouLawani.png"
    },
    {
      name: t('team.members.admin.name'),
      role: t('team.members.admin.role'),
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=3280&auto=format&fit=crop"
    },
    {
      name: t('team.members.operations.name'),
      role: t('team.members.operations.role'),
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=3280&auto=format&fit=crop"
    }
  ];

  const stats = [
    {
      icon: <Clock className="w-8 h-8" />,
      value: "25+",
      label: t('stats.experience.label'),
      suffix: lang === 'fr' ? "ans" : "years"
    },
    {
      icon: <Warehouse className="w-8 h-8" />,
      value: "2400",
      label: t('stats.warehouses.label'),
      suffix: "m²"
    },
    {
      icon: <BadgeCheck className="w-8 h-8" />,
      value: "15+",
      label: t('stats.employees.label'),
      suffix: ""
    },
    {
      icon: <Globe className="w-8 h-8" />,
      value: "4",
      label: lang === 'fr' ? "pays couverts" : "countries covered",
      suffix: ""
    }
  ];

  const partners = [
    { name: "Air France", logo: "https://cdn.brandfetch.io/idddYhP85r/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B" },
    { name: "Ethiopian Airlines", logo: "https://cdn.brandfetch.io/idA9s40f4v/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B" },
    { name: "Royal Air Maroc", logo: "https://cdn.brandfetch.io/idelgXOOOS/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B" },
    { name: "Brussels Airlines", logo: "https://cdn.brandfetch.io/idiZLXv-wz/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B" },
    { name: "Asky", logo: "https://cdn.brandfetch.io/idFPXMyIRS/w/400/h/167/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B" }
  ];

  const branches = [
    { 
      country: t('branches.guinea.country'), 
      name: t('branches.guinea.name'), 
      note: t('branches.guinea.note'), 
      flag: "https://flagcdn.com/48x36/gn.png"
    },
    { 
      country: t('branches.mali.country'), 
      name: t('branches.mali.name'), 
      note: t('branches.mali.note'), 
      flag: "https://flagcdn.com/48x36/ml.png" 
    },
    { 
      country: t('branches.benin.country'), 
      name: t('branches.benin.name'), 
      note: t('branches.benin.note'), 
      flag: "https://flagcdn.com/48x36/bj.png"
    },
    { 
      country: t('branches.sierraLeone.country'), 
      name: t('branches.sierraLeone.name'), 
      note: t('branches.sierraLeone.note'), 
      flag: "https://flagcdn.com/48x36/sl.png"
    }
  ];

  const seoData = {
    fr: {
      title: 'Elite Cargo | Leader du Fret Aérien & Logistique en Afrique de l\'Ouest depuis 1997',
      description: 'Elite Cargo, société leader en fret aérien, maritime et terrestre depuis 1997. Expert en transit, douane et déménagement international en Guinée, Mali, Bénin et Sierra Leone.',
      keywords: 'Elite Cargo, fret aérien Guinée, fret maritime Conakry, logistique Afrique Ouest, transit douane Guinée'
    },
    en: {
      title: 'Elite Cargo | Air Freight & Logistics Leader in West Africa since 1997',
      description: 'Elite Cargo, leading company in air, sea and land freight since 1997. Expert in customs, transit and international moving in Guinea, Mali, Benin and Sierra Leone.',
      keywords: 'Elite Cargo, air freight Guinea, sea freight Conakry, West Africa logistics, customs transit Guinea'
    }
  };

  return (
    <main className="min-h-screen bg-white font-body">
      <SEO
        title={seoData[lang]?.title || seoData.fr.title}
        description={seoData[lang]?.description || seoData.fr.description}
        keywords={seoData[lang]?.keywords || seoData.fr.keywords}
        canonical={`https://elite-cargo.net/${lang}`}
        lang={lang}
      />
      <Header />

      {/* ==================== HERO SECTION ==================== */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=3274&auto=format&fit=crop"
            alt="Avion cargo"
            className="w-full h-full object-cover"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#004D40]/95 via-[#004D40]/80 to-[#004D40]/40" />
          {/* Pattern overlay */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8"
            >
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-medium">
                {lang === 'fr' ? 'Leader du fret aérien depuis 1997' : 'Air freight leader since 1997'}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] mb-6"
            >
              {t('hero.title')}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed"
            >
              {t('hero.subtitle')}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to={`/${lang}/contact`}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-[#004D40] font-semibold rounded-xl hover:bg-slate-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                {t('hero.cta')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+224622652511"
                className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                +224 622 65 25 11
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="mt-16 flex flex-wrap items-center gap-8"
            >
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span className="text-white/70 text-sm">{lang === 'fr' ? 'Service 7j/7' : '24/7 Service'}</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span className="text-white/70 text-sm">{lang === 'fr' ? 'Couverture régionale' : 'Regional coverage'}</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span className="text-white/70 text-sm">{lang === 'fr' ? 'Devis gratuit' : 'Free quote'}</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/50 text-sm">{t('hero.scroll')}</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full p-1"
          >
            <div className="w-1.5 h-1.5 bg-white/60 rounded-full mx-auto" />
          </motion.div>
        </motion.div>
      </section>

      {/* ==================== ABOUT SECTION ==================== */}
      <section id="about" className="py-24 lg:py-32 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-slate-50 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <SectionTitle align="left">{t('about.title')}</SectionTitle>
              
              <div className="space-y-6 mt-8">
                <p className="text-slate-600 text-lg leading-relaxed">
                  {t('about.text1')}
                </p>
                <p className="text-slate-600 text-lg leading-relaxed">
                  {t('about.text2')}
                </p>
              </div>

              {/* Key points */}
              <div className="mt-10 grid grid-cols-2 gap-6">
                {[
                  { icon: <Plane className="w-5 h-5" />, text: lang === 'fr' ? 'Fret aérien' : 'Air freight' },
                  { icon: <Ship className="w-5 h-5" />, text: lang === 'fr' ? 'Fret maritime' : 'Sea freight' },
                  { icon: <Truck className="w-5 h-5" />, text: lang === 'fr' ? 'Fret terrestre' : 'Land freight' },
                  { icon: <FileCheck className="w-5 h-5" />, text: lang === 'fr' ? 'Transit & Douane' : 'Customs' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#004D40]/10 flex items-center justify-center text-[#004D40]">
                      {item.icon}
                    </div>
                    <span className="font-medium text-slate-800">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2 relative"
            >
              <div className="relative">
                {/* Main image */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1605732562742-3023a888e56e?q=80&w=3135&auto=format&fit=crop"
                    alt="Fret Elite Cargo"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#004D40]/30 to-transparent" />
                </div>
                
                {/* Floating card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-xl p-6 max-w-xs"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-[#004D40] flex items-center justify-center">
                      <Clock className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-[#004D40]">25+</p>
                      <p className="text-slate-500 text-sm">{lang === 'fr' ? 'Années d\'expérience' : 'Years of experience'}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== SERVICES SECTION ==================== */}
      <section id="services" className="py-24 lg:py-32 bg-slate-50 relative">
        {/* Pattern background */}
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, rgba(0, 77, 64, 0.03) 2%, transparent 0%)`,
          backgroundSize: '50px 50px'
        }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionTitle subtitle={t('services.subtitle')}>
            {t('services.title')}
          </SectionTitle>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 h-full shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 hover:border-[#004D40]/20 relative overflow-hidden">
                  {/* Hover background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#004D40]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Icon */}
                  <div className="relative w-16 h-16 rounded-xl bg-[#004D40]/10 flex items-center justify-center text-[#004D40] mb-6 group-hover:bg-[#004D40] group-hover:text-white transition-all duration-300">
                    {service.icon}
                  </div>

                  {/* Content */}
                  <h3 className="relative text-xl font-display font-bold text-slate-900 mb-3 group-hover:text-[#004D40] transition-colors">
                    {service.title}
                  </h3>
                  <p className="relative text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="relative space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-slate-500">
                        <CheckCircle2 className="w-4 h-4 text-[#00897B]" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Bottom line */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#004D40] to-[#00897B] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== STATS SECTION ==================== */}
      <section id="stats" className="py-24 lg:py-32 bg-[#004D40] relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,...')] opacity-10" />
          <div className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] bg-[#00695C]/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] bg-[#003D33]/50 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionTitle isDark={true} subtitle={t('stats.subtitle')}>
            {t('stats.title')}
          </SectionTitle>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 text-white mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.value}
                  {stat.suffix && <span className="text-2xl text-white/70 ml-1">{stat.suffix}</span>}
                </div>
                <p className="text-white/70">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WHY CHOOSE US ==================== */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle={t('reasons.subtitle')}>
            {t('reasons.title')}
          </SectionTitle>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group flex gap-6 p-6 rounded-2xl hover:bg-slate-50 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#004D40]/10 flex items-center justify-center text-[#004D40] group-hover:bg-[#004D40] group-hover:text-white transition-all duration-300">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-slate-900 mb-2 group-hover:text-[#004D40] transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{reason.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== BRANCHES SECTION ==================== */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle={t('branches.subtitle')}>
            {t('branches.title')}
          </SectionTitle>

          <div className="relative mt-16">
            {/* Navigation buttons */}
            <button 
              onClick={() => {
                const container = document.querySelector('.branches-container');
                container.scrollBy({ left: -400, behavior: 'smooth' });
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center z-10 hover:bg-slate-50 transition-colors hidden lg:flex"
              aria-label={t('accessibility.scrollLeft')}
            >
              <ChevronLeft className="w-6 h-6 text-[#004D40]" />
            </button>

            <div className="overflow-x-auto scrollbar-hide branches-container -mx-4 px-4">
              <div className="flex gap-6 min-w-max pb-4">
                {branches.map((branch, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="w-[300px] flex-shrink-0"
                  >
                    <div className="bg-white rounded-2xl p-8 h-full shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 text-center group">
                      {/* Flag */}
                      <div className="mb-6">
                        <img 
                          src={branch.flag} 
                          alt={branch.country}
                          className="w-12 h-9 mx-auto rounded shadow-sm"
                        />
                      </div>
                      
                      {/* Content */}
                      <p className="text-sm text-slate-500 mb-2">{branch.country}</p>
                      <h3 className="text-xl font-display font-bold text-[#004D40] mb-3 group-hover:text-[#00695C] transition-colors">
                        {branch.name}
                      </h3>
                      <p className="text-slate-600 text-sm">{branch.note}</p>

                      {/* Decorative line */}
                      <div className="mt-6 w-12 h-1 bg-gradient-to-r from-[#004D40] to-[#00897B] mx-auto rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <button 
              onClick={() => {
                const container = document.querySelector('.branches-container');
                container.scrollBy({ left: 400, behavior: 'smooth' });
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center z-10 hover:bg-slate-50 transition-colors hidden lg:flex"
              aria-label={t('accessibility.scrollRight')}
            >
              <ChevronRight className="w-6 h-6 text-[#004D40]" />
            </button>
          </div>

          {/* Scroll hint for mobile */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-6 text-sm text-slate-500 lg:hidden"
          >
            {t('branches.scrollHint')}
          </motion.p>
        </div>
      </section>

      {/* ==================== TEAM SECTION ==================== */}
      <section id="team" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle={t('team.subtitle')}>
            {t('team.title')}
          </SectionTitle>

          <div className="grid md:grid-cols-3 gap-10 mt-16">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group text-center"
              >
                {/* Photo */}
                <div className="relative mb-6 mx-auto w-48 h-48">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#004D40] to-[#00897B] transform rotate-6 group-hover:rotate-12 transition-transform duration-500" />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="relative w-full h-full rounded-full object-cover border-4 border-white shadow-lg"
                  />
                </div>

                {/* Info */}
                <h3 className="text-xl font-display font-bold text-slate-900 group-hover:text-[#004D40] transition-colors">
                  {member.name}
                </h3>
                <p className="text-[#004D40] font-medium mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== MAP SECTION ==================== */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle={lang === 'fr' ? 'Retrouvez-nous à l\'aéroport de Conakry' : 'Find us at Conakry Airport'}>
            {lang === 'fr' ? 'Notre Localisation' : 'Our Location'}
          </SectionTitle>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 rounded-2xl overflow-hidden shadow-xl"
          >
            <iframe
              width="100%"
              height="500"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Ahmed%20sekou%20toure%20internatioinal%20airport+(Elite%20cargo)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              title="Elite Cargo Location"
              className="w-full"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* ==================== PARTNERS SECTION ==================== */}
      <section id="partners" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle={t('partners.description')}>
            {t('partners.title')}
          </SectionTitle>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center mt-16">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-[#004D40]/20">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-12 w-auto object-contain mx-auto filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CONTACT CTA SECTION ==================== */}
      <section id="contact" className="py-24 lg:py-32 bg-[#004D40] relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#00695C]/30 to-transparent" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#003D33]/50 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <SectionTitle isDark={true} align="left">
                {t('contact.title')}
              </SectionTitle>
              <p className="text-white/80 text-lg mt-6 mb-10 max-w-lg">
                {t('contact.subtitle')}
              </p>

              {/* Contact cards */}
              <div className="space-y-4">
                <motion.a
                  href="tel:+224622652511"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">{t('contact.phone.title')}</p>
                    <p className="text-white font-semibold">{t('contact.phone.value')}</p>
                  </div>
                </motion.a>

                <motion.a
                  href="mailto:contact@elite-cargo.net"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">{t('contact.email.title')}</p>
                    <p className="text-white font-semibold">{t('contact.email.value')}</p>
                  </div>
                </motion.a>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl"
                >
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">{t('contact.address.title')}</p>
                    <p className="text-white font-semibold">{t('contact.address.value')}</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-10 shadow-2xl"
            >
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">
                {t('contact.form.title')}
              </h3>
              <p className="text-slate-600 mb-8">
                {lang === 'fr' 
                  ? 'Cliquez ci-dessous pour accéder à notre formulaire de contact et recevoir un devis personnalisé.'
                  : 'Click below to access our contact form and receive a personalized quote.'
                }
              </p>
              <Link
                to={`/${lang}/contact`}
                className="group w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#004D40] text-white font-semibold rounded-xl hover:bg-[#00695C] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {t('contact.form.submit')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
