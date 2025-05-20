'use client'
import React, { useState } from "react";
import { Users, Plane, Truck, Warehouse, BadgeCheck, Clock, Globe, Network, ShieldCheck, Zap, Phone, MapPin, Mail, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import Header from './Header';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SectionTitle from './SectionTitle';
import Footer from './Footer';

export default function EliteCargoLandingPage() {
  const { t } = useTranslation();
  const [formStatus, setFormStatus] = useState(null);
  const pathname = usePathname();
  const currentLang = pathname.split('/')[1];

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };
  const services = [
    {
      icon: <Plane className="w-10 h-10 text-[#007d6f] mb-4" />,
      title: t('services.freight.title'),
      description: t('services.freight.description')
    },
    {
      icon: <Truck className="w-10 h-10 text-[#007d6f] mb-4" />,
      title: t('services.customs.title'),
      description: t('services.customs.description')
    },
    {
      icon: <Users className="w-10 h-10 text-[#007d6f] mb-4" />,
      title: t('services.moving.title'),
      description: t('services.moving.description')
    }
  ];
  const reasons = [
    { 
      icon: <ShieldCheck className="w-8 h-8 text-[#00a199] mb-3" />, 
      title: t('reasons.reliability.title'), 
      desc: t('reasons.reliability.desc') 
    },
    { 
      icon: <Zap className="w-8 h-8 text-[#00a199] mb-3" />, 
      title: t('reasons.reactivity.title'), 
      desc: t('reasons.reactivity.desc') 
    },
    { 
      icon: <Globe className="w-8 h-8 text-[#00a199] mb-3" />, 
      title: t('reasons.network.title'), 
      desc: t('reasons.network.desc') 
    },
    { 
      icon: <Users className="w-8 h-8 text-[#00a199] mb-3" />, 
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
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: t('team.members.operations.name'),
      role: t('team.members.operations.role'),
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];
  const stats = [
    {
      icon: <Warehouse className="w-10 h-10 text-white mb-4" />,
      value: t('stats.warehouses.value'),
      label: t('stats.warehouses.label')
    },
    {
      icon: <BadgeCheck className="w-10 h-10 text-white mb-4" />,
      value: t('stats.employees.value'),
      label: t('stats.employees.label')
    },
    {
      icon: <Clock className="w-10 h-10 text-white mb-4" />,
      value: t('stats.experience.value'),
      label: t('stats.experience.label')
    }
  ];
  const partners = [
    { name: "Air France", logo: "https://cdn.brandfetch.io/idddYhP85r/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B" },
    { name: "Ethiopian airlines", logo: "https://cdn.brandfetch.io/idA9s40f4v/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B" },
    { name: "Royal Air Maroc", logo: "https://cdn.brandfetch.io/idelgXOOOS/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B" },
    { name: "Brussels Airlines", logo: "https://cdn.brandfetch.io/idiZLXv-wz/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B" },
    { name: "Asky", logo: "https://cdn.brandfetch.io/idFPXMyIRS/w/400/h/167/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B" }
  ];
  const branches = [
    { 
      country: t('branches.guinea.country'), 
      name: t('branches.guinea.name'), 
      note: t('branches.guinea.note'), 
      flag: "https://flagcdn.com/16x12/gn.png"
    },
    { 
      country: t('branches.mali.country'), 
      name: t('branches.mali.name'), 
      note: t('branches.mali.note'), 
      flag: "https://flagcdn.com/16x12/ml.png" 
    },
    { 
      country: t('branches.senegal.country'), 
      name: t('branches.senegal.name'), 
      note: t('branches.senegal.note'), 
      flag: "https://flagcdn.com/16x12/sn.png" 
    },
    { 
      country: t('branches.benin.country'), 
      name: t('branches.benin.name'), 
      note: t('branches.benin.note'), 
      flag: "https://flagcdn.com/16x12/bj.png"
    },
    { 
      country: t('branches.ivoryCoast.country'), 
      name: t('branches.ivoryCoast.name'), 
      note: t('branches.ivoryCoast.note'), 
      flag: "https://flagcdn.com/16x12/ci.png"
    }
  ];

  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans">
      <Header />

      {/* Hero amélioré */}
      <section className="relative h-screen text-white">
        <img
          src="https://images.unsplash.com/photo-1599741977044-82663d0d5500?q=80&w=3270&auto=format&fit=crop"
          alt="Aéroport"
          className="absolute inset-0 w-full h-full object-cover z-0 brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-transparent z-10" />

        <motion.div
          className="relative z-20 flex flex-col items-start justify-center h-full px-6 md:px-20 text-left max-w-5xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.div 
            className="h-1 w-24 bg-gradient-to-r from-[#007d6f] to-[#00a199] mb-8"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-[1.1] break-words"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {t('hero.title')}
          </motion.h1>
          <motion.p 
            className="text-sm md:text-base max-w-3xl text-white/70 mb-12 font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {t('hero.subtitle')}
          </motion.p>
          <motion.button 
            className="bg-white text-[#007d6f] font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:bg-[#f8f8f8] transform hover:-translate-y-0.5 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <a href="#contact" className="flex items-center gap-2">
              {t('hero.cta')}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <span className="text-sm text-white/70">Scroll</span>
          <motion.div 
            className="w-6 h-10 border-2 border-white/30 rounded-full p-1"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="w-1.5 h-1.5 bg-white/70 rounded-full mx-auto" />
          </motion.div>
        </motion.div>
      </section>

      {/* About section */}
      <section id="about" className="py-32 px-6 bg-gradient-to-b from-[#f9fafb] to-white relative overflow-hidden">
        {/* Effet de fond décoratif */}
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
        
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <SectionTitle>{t('about.title')}</SectionTitle>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-center relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <motion.p 
                  className="text-gray-600 text-lg leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {t('about.text1')}
                </motion.p>
                
                <motion.p 
                  className="text-gray-600 text-lg leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  {t('about.text2')}
                </motion.p>
              </div>

              {/* Ligne décorative */}
              <motion.div 
                className="w-24 h-1 bg-gradient-to-r from-[#007d6f] to-[#00a199] rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.8 }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative group"
            >
              {/* Effet de brillance au survol */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#007d6f]/10 to-[#00a199]/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-700 group-hover:shadow-[#007d6f]/20">
                <img
                  src="https://images.unsplash.com/photo-1605732562742-3023a888e56e?q=80&w=3135&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Fret Elite Cargo"
                  className="w-full h-full object-cover scale-105 brightness-90 transition-all duration-700 group-hover:brightness-100 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#007d6f]/20 via-transparent to-[#00a199]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>

              {/* Effets décoratifs */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#00a199]/5 rounded-full blur-2xl group-hover:bg-[#00a199]/10 transition-colors duration-700" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#007d6f]/5 rounded-full blur-xl group-hover:bg-[#007d6f]/10 transition-colors duration-700" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services section */}
      <section id="services" className="py-32 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <SectionTitle>{t('services.title')}</SectionTitle>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto mb-8 text-center"
          >
            {t('services.subtitle')}
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                className="group h-full"
              >
                <div className="bg-white border border-gray-100 hover:border-[#00a199]/20 hover:shadow-xl p-8 rounded-2xl transition-all duration-500 transform hover:-translate-y-1 h-full flex flex-col">
                  <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-[#007d6f] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  <div className="mt-4 h-0.5 w-0 bg-gradient-to-r from-[#007d6f] to-[#00a199] group-hover:w-full transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats section */}
      <section id="stats" className="py-32 px-6 bg-gradient-to-r from-[#007d6f] to-[#00a199] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
        <div className="max-w-6xl mx-auto relative">
          <SectionTitle isDark={true}>{t('stats.title')}</SectionTitle>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-4 text-lg text-white/90 max-w-2xl mx-auto mb-8 text-center"
          >
            {t('stats.subtitle')}
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 1,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 50,
                  damping: 15
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.4 }
                }}
                className="group relative flex items-center gap-6 p-8 bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden"
              >
                {/* Effet de brillance au survol */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                />
                
                {/* Icône avec rotation */}
                <motion.div 
                  className="flex-shrink-0"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 1 }}
                >
                  {item.icon}
                </motion.div>

                <div className="text-left relative z-10">
                  <motion.p 
                    className="text-4xl font-bold text-white mb-2"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 1, 
                      delay: index * 0.2 + 0.4,
                      type: "spring",
                      stiffness: 100,
                      damping: 15
                    }}
                  >
                    {item.value}
                  </motion.p>
                  <motion.p 
                    className="text-white/90 text-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: index * 0.2 + 0.6 }}
                  >
                    {item.label}
                  </motion.p>
                </div>

                {/* Ligne de soulignement animée */}
                <motion.div 
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-white/30"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: index * 0.2 + 0.8 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi nous choisir section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionTitle>{t('reasons.title')}</SectionTitle>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto mb-8 text-center"
          >
            {t('reasons.subtitle')}
          </motion.p>
          <div className="space-y-12">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className="flex-shrink-0 w-16 h-16 bg-[#f0fdfa] rounded-full flex items-center justify-center">
                  {reason.icon}
                </div>
                <div className={`flex-1 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                  <h3 className="text-xl font-bold text-[#007d6f] mb-2">{reason.title}</h3>
                  <p className="text-gray-600">{reason.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filiales section */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <SectionTitle>{t('branches.title')}</SectionTitle>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto mb-8 text-center"
          >
            {t('branches.subtitle')}
          </motion.p>
          
          {/* Conteneur de défilement horizontal */}
          <div className="relative">
            {/* Indicateur de défilement à gauche */}
            <button 
              onClick={() => {
                const container = document.querySelector('.branches-container');
                container.scrollBy({ left: -400, behavior: 'smooth' });
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center z-10 cursor-pointer hover:bg-white transition-colors hover:scale-110 active:scale-95"
            >
              <ChevronLeft className="w-6 h-6 text-[#007d6f]" />
            </button>

            {/* Masque de défilement */}
            <div className="overflow-x-auto pb-8 -mx-6 px-6 scrollbar-hide scroll-smooth branches-container">
              {/* Indicateur de défilement en bas */}
              <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none" />
              
              {/* Grille des filiales */}
              <div className="flex gap-8 min-w-max">
                {branches.map((branch, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative w-[350px] flex-shrink-0"
                  >
                    <div className="relative bg-white rounded-2xl p-8 overflow-hidden h-full flex flex-col items-center text-center">
                      {/* Effet de brillance au survol */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#007d6f]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* En-tête avec drapeau */}
                      <div className="relative mb-4">
                        <div className="absolute -top-1 -right-1 w-8 h-8 bg-[#00a199]/5 rounded-full blur-lg group-hover:bg-[#00a199]/10 transition-colors duration-500" />
                        <div className="relative w-6 h-4 rounded-sm overflow-hidden shadow-sm transform group-hover:scale-105 transition-transform duration-500">
                          <img 
                            src={branch.flag} 
                            alt={branch.country} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Contenu */}
                      <div className="relative flex-1 flex flex-col items-center">
                        <h3 className="text-xl font-bold text-[#007d6f] mb-2 group-hover:text-[#00a199] transition-colors duration-300">
                          {branch.name}
                        </h3>
                        <p className="text-sm text-gray-500 mb-4">
                          {branch.country}
                        </p>
                        <p className="text-base text-gray-600 leading-relaxed">
                          {branch.note}
                        </p>
                      </div>

                      {/* Ligne décorative */}
                      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#007d6f] to-[#00a199] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Indicateur de défilement à droite */}
            <button 
              onClick={() => {
                const container = document.querySelector('.branches-container');
                container.scrollBy({ left: 400, behavior: 'smooth' });
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center z-10 cursor-pointer hover:bg-white transition-colors hover:scale-110 active:scale-95"
            >
              <ChevronRight className="w-6 h-6 text-[#007d6f]" />
            </button>

            {/* Indicateur de défilement en bas */}
            <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none" />
          </div>

          {/* Indicateur de défilement textuel avec animation */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-6 text-sm text-gray-500 flex items-center justify-center space-x-2"
          >
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronLeft className="w-4 h-4" />
            </motion.div>
            <span className="font-medium">Faites défiler pour découvrir nos branches</span>
            <motion.div
              animate={{ x: [0, -5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronRight className="w-4 h-4" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team section */}
      <section id="team" className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <SectionTitle>{t('team.title')}</SectionTitle>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto mb-8 text-center"
          >
            {t('team.subtitle')}
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.2 }}
                className="group relative"
              >
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  {/* Effet de brillance */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#007d6f]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Image avec effet de zoom */}
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#007d6f] to-[#00a199] rounded-full transform rotate-3 group-hover:rotate-6 transition-transform duration-500" />
                    <img
                      src={member.image}
                      alt={member.name}
                      className="relative w-full h-full rounded-full object-cover border-4 border-white shadow-lg transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Informations */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#007d6f] transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{member.role}</p>
                    
                    {/* Ligne décorative */}
                    <div className="w-16 h-1 bg-gradient-to-r from-[#007d6f] to-[#00a199] mx-auto mb-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                    
                    {/* Icônes sociales (optionnel) */}
                    <div className="flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <a href="#" className="text-gray-400 hover:text-[#007d6f] transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                      <a href="#" className="text-gray-400 hover:text-[#007d6f] transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                      </a>
                      <a href="#" className="text-gray-400 hover:text-[#007d6f] transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-lg">
          <iframe
            width="100%"
            height="600"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Ahmed%20sekou%20toure%20internatioinal%20airport+(Elite%20cargo)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            title="Elite Cargo Location"
            />

          </div>
        </div>
      </section>
      {/* Partenaires modernisés */}
      <section id="partners" className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <SectionTitle>{t('partners.title')}</SectionTitle>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto mb-8 text-center"
          >
            {t('partners.subtitle')}
          </motion.p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group relative bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden"
              >
                {/* Background gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#007d6f]/5 via-transparent to-[#00a199]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-24">
                  <motion.img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="h-12 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="text-xs text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {partner.name}
                  </span>
                </div>

                {/* Hover effects */}
                <div className="absolute inset-0 border border-transparent group-hover:border-[#007d6f]/10 rounded-xl transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#007d6f] to-[#00a199] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#007d6f]/5 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00a199]/5 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionTitle>{t('contact.title')}</SectionTitle>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto mb-8 text-center"
          >
            {t('contact.subtitle')}
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contact Info Cards */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#007d6f]/10 to-[#00a199]/10 rounded-2xl blur opacity-15 group-hover:opacity-25 transition duration-300" />
                    <div className="relative bg-white rounded-xl p-6">
                      <Phone className="h-6 w-6 text-[#007d6f]/80 mb-3" />
                      <h4 className="text-base font-semibold text-gray-800 mb-1">
                        {t('contact.phone.title')}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {t('contact.phone.value')}
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#007d6f]/10 to-[#00a199]/10 rounded-2xl blur opacity-15 group-hover:opacity-25 transition duration-300" />
                    <div className="relative bg-white rounded-xl p-6">
                      <Mail className="h-6 w-6 text-[#007d6f]/80 mb-3" />
                      <h4 className="text-base font-semibold text-gray-800 mb-1">
                        {t('contact.email.title')}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {t('contact.email.value')}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#007d6f]/10 to-[#00a199]/10 rounded-2xl blur opacity-15 group-hover:opacity-25 transition duration-300" />
                  <div className="relative bg-white rounded-xl p-6">
                    <MapPin className="h-6 w-6 text-[#007d6f]/80 mb-3" />
                    <h4 className="text-base font-semibold text-gray-800 mb-1">
                      {t('contact.address.title')}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {t('contact.address.value')}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form Link */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-[#007d6f]/10 to-[#00a199]/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative bg-white rounded-2xl p-8 shadow-xl">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {t('contact.form.title')}
                  </h3>
                  <p className="text-sm text-gray-600 mb-6">
                    {t('contact.subtitle')}
                  </p>
                  <Link 
                    href={`/${currentLang}/contact`}
                    className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-xl text-white bg-gradient-to-r from-[#007d6f] to-[#00a199] hover:from-[#006b5f] hover:to-[#008a84] transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    {t('contact.form.submit')}
                    <svg className="ml-2 -mr-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Section transitions */}
      <style jsx global>{`
        section {
          scroll-margin-top: 80px;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </main>
  );
}
