import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams, Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Plane, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const currentLang = lang || 'fr';
  const currentYear = new Date().getFullYear();

  const branches = [
    { country: 'Guinée', name: 'Elite Cargo Guinée' },
    { country: 'Mali', name: 'Mali Cargo Handling' },
    { country: 'Bénin', name: 'Elite Cargo Bénin' },
    { country: 'Sierra Leone', name: 'Sea & Air Services' }
  ];

  const services = [
    t('services.freight.title', 'Fret aérien'),
    t('services.customs.title', 'Transit & Douane'),
    t('services.moving.title', 'Déménagement'),
    'Import / Export',
    'Conseil logistique'
  ];

  const partners = ['Air France', 'Ethiopian Airlines', 'Royal Air Maroc', 'Brussels Airlines', 'ASKY'];

  return (
    <footer className="bg-[#0F172A] text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#004D40]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#004D40]/5 rounded-full blur-3xl" />
      </div>

      {/* CTA Section */}
      <div className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row items-center justify-between gap-8"
          >
            <div className="text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-3">
                {currentLang === 'fr' ? 'Prêt à expédier ?' : 'Ready to ship?'}
              </h3>
              <p className="text-slate-400 max-w-lg">
                {currentLang === 'fr' 
                  ? 'Contactez nos experts pour un devis personnalisé adapté à vos besoins logistiques.'
                  : 'Contact our experts for a customized quote tailored to your logistics needs.'
                }
              </p>
            </div>
            <Link 
              to={`/${currentLang}/contact`}
              className="group flex items-center gap-3 px-8 py-4 bg-[#004D40] hover:bg-[#00695C] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <span>{t('hero.cta', 'Demander un devis')}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to={`/${currentLang}`} className="flex items-center gap-3 mb-6">
              <img 
                src="/images/elite.svg" 
                alt="Elite Cargo" 
                className="h-10 w-auto brightness-0 invert"
              />
              <div>
                <span className="text-xl font-display font-bold block">Elite Cargo</span>
                <span className="text-xs text-slate-400 uppercase tracking-wider">Depuis 1997</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {currentLang === 'fr'
                ? 'Leader du fret aérien et de la logistique en Afrique de l\'Ouest. Plus de 25 ans d\'expertise au service de votre satisfaction.'
                : 'Leader in air freight and logistics in West Africa. Over 25 years of expertise at your service.'
              }
            </p>
            {/* Stats */}
            <div className="flex gap-6">
              <div>
                <p className="text-2xl font-bold text-[#00897B]">25+</p>
                <p className="text-xs text-slate-500">{currentLang === 'fr' ? 'Années' : 'Years'}</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#00897B]">4</p>
                <p className="text-xs text-slate-500">{currentLang === 'fr' ? 'Pays' : 'Countries'}</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#00897B]">2400m²</p>
                <p className="text-xs text-slate-500">{currentLang === 'fr' ? 'Entrepôts' : 'Warehouses'}</p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-6">
              {t('services.title', 'Nos Services')}
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-slate-400 hover:text-white transition-colors text-sm cursor-default flex items-center gap-2">
                    <span className="w-1 h-1 bg-[#00897B] rounded-full" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Branches */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-6">
              {t('branches.title', 'Nos Filiales')}
            </h4>
            <ul className="space-y-3">
              {branches.map((branch, index) => (
                <li key={index} className="text-sm">
                  <span className="text-slate-400">{branch.country}</span>
                  <span className="block text-slate-300 font-medium">{branch.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-6">
              {t('contact.title', 'Contact')}
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+224622652511" className="flex items-start gap-3 text-slate-400 hover:text-white transition-colors group">
                  <Phone className="w-4 h-4 mt-0.5 text-[#00897B] group-hover:text-white transition-colors" />
                  <span className="text-sm">+224 622 65 25 11</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@elite-cargo.net" className="flex items-start gap-3 text-slate-400 hover:text-white transition-colors group">
                  <Mail className="w-4 h-4 mt-0.5 text-[#00897B] group-hover:text-white transition-colors" />
                  <span className="text-sm">info@elite-cargo.net</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-4 h-4 mt-0.5 text-[#00897B]" />
                <span className="text-sm">
                  Aérogare de fret<br />
                  Aéroport Gbessia<br />
                  Conakry, Guinée
                </span>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <Clock className="w-4 h-4 mt-0.5 text-[#00897B]" />
                <span className="text-sm">
                  Lun - Ven: 8h - 18h<br />
                  Sam: 8h - 13h
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Partners */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <span className="text-xs text-slate-500 uppercase tracking-wider">
              {t('partners.title', 'Partenaires')}:
            </span>
            {partners.map((partner, index) => (
              <span key={index} className="text-sm text-slate-500 hover:text-slate-300 transition-colors">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10 bg-[#0B1120]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <span>© {currentYear} Elite Cargo.</span>
              <span>{t('footer.rights', 'Tous droits réservés.')}</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-slate-500">
              <Link to={`/${currentLang}`} className="hover:text-white transition-colors">
                {t('nav.home', 'Accueil')}
              </Link>
              <Link to={`/${currentLang}/gallery`} className="hover:text-white transition-colors">
                {t('nav.gallery', 'Galerie')}
              </Link>
              <Link to={`/${currentLang}/contact`} className="hover:text-white transition-colors">
                {t('nav.contact', 'Contact')}
              </Link>
            </div>
            <div className="text-sm text-slate-500">
              {t('footer.madeBy', 'Créé par')}{' '}
              <a 
                href="https://imrane.tech" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#00897B] hover:text-white font-medium transition-colors"
              >
                IMRANE TECH
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
