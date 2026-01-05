import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

// ============================================
// CONFIGURATION EMAILJS - À REMPLIR
// ============================================
// 1. Créez un compte sur https://www.emailjs.com/
// 2. Ajoutez un service email (SMTP avec vos identifiants)
// 3. Créez un template avec les variables: {{from_name}}, {{from_email}}, {{subject}}, {{message}}
// 4. Remplacez les valeurs ci-dessous par vos IDs
const EMAILJS_SERVICE_ID = 'service_tr3vism';     // Ex: 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'template_b5t2u2g';   // Ex: 'template_xyz789'
const EMAILJS_PUBLIC_KEY = 'VQrOuZyfMUjdygmni';     // Ex: 'abcdefghijk123456'
// ============================================

export default function ContactPage() {
  const { t, i18n } = useTranslation();
  const { lang } = useParams();
  const formRef = useRef();
  
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  // Synchroniser la langue avec l'URL
  useEffect(() => {
    if (lang && ['fr', 'en'].includes(lang) && i18n.language !== lang) {
      i18n.changeLanguage(lang);
      localStorage.setItem('language', lang);
    }
  }, [lang, i18n]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    // Vérifier si EmailJS est configuré
    if (EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID' || 
        EMAILJS_TEMPLATE_ID === 'YOUR_TEMPLATE_ID' || 
        EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
      setStatus({ 
        type: 'error', 
        message: lang === 'fr' 
          ? 'Le service d\'email n\'est pas encore configuré. Veuillez nous contacter par téléphone.'
          : 'Email service is not yet configured. Please contact us by phone.'
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        setStatus({ 
          type: 'success', 
          message: lang === 'fr' 
            ? 'Message envoyé avec succès ! Nous vous répondrons rapidement.'
            : 'Message sent successfully! We will respond shortly.'
        });
        setFormData({ from_name: '', from_email: '', subject: '', message: '' });
      } else {
        throw new Error('Email send failed with status: ' + result.status);
      }
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: lang === 'fr'
          ? `Erreur: ${error.text || error.message || 'Veuillez réessayer.'}`
          : `Error: ${error.text || error.message || 'Please try again.'}`
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus({ type: '', message: '' }), 8000);
    }
  };

  const inputClasses = "w-full px-4 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004D40]/20 focus:border-[#004D40] transition-all duration-300 text-slate-700 placeholder-slate-400";
  const labelClasses = "block text-sm font-semibold text-slate-700 mb-2 transition-colors duration-300";

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: t('contact.phone.title'),
      value: t('contact.phone.value'),
      href: `tel:${t('contact.phone.value').replace(/\s/g, '')}`
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: t('contact.email.title'),
      value: t('contact.email.value'),
      href: `mailto:${t('contact.email.value')}`
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: t('contact.address.title'),
      value: t('contact.address.value'),
      href: null
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: lang === 'fr' ? 'Horaires' : 'Hours',
      value: lang === 'fr' ? 'Lun - Ven: 8h - 18h' : 'Mon - Fri: 8am - 6pm',
      href: null
    }
  ];

  const seoData = {
    fr: {
      title: 'Contact | Elite Cargo - Fret Aérien & Logistique Guinée',
      description: 'Contactez Elite Cargo pour vos besoins en fret aérien, maritime et transit douane. Devis gratuit. Aéroport Gbessia, Conakry, Guinée. Tél: +224 622 65 25 11',
      keywords: 'contact Elite Cargo, devis fret Guinée, téléphone Elite Cargo, adresse Conakry'
    },
    en: {
      title: 'Contact | Elite Cargo - Air Freight & Logistics Guinea',
      description: 'Contact Elite Cargo for your air freight, sea freight and customs needs. Free quote. Gbessia Airport, Conakry, Guinea. Tel: +224 622 65 25 11',
      keywords: 'contact Elite Cargo, freight quote Guinea, Elite Cargo phone, Conakry address'
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white font-body">
      <SEO
        title={seoData[lang]?.title || seoData.fr.title}
        description={seoData[lang]?.description || seoData.fr.description}
        keywords={seoData[lang]?.keywords || seoData.fr.keywords}
        canonical={`https://elite-cargo.net/${lang}/contact`}
        lang={lang}
      />
      <Header />

      {/* Hero Section */}
      <section className="relative bg-[#004D40] py-20 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div className="absolute -bottom-1/2 -right-1/4 w-[600px] h-[600px] bg-[#00695C]/30 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-medium">
                {lang === 'fr' ? 'Nous sommes là pour vous' : 'We are here for you'}
              </span>
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              {t('contact.title')}
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      <main className="flex-grow py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="mb-8">
                <h2 className="text-2xl font-display font-bold text-slate-900 mb-2">
                  {t('contact.info', 'Informations de contact')}
                </h2>
                <p className="text-slate-600">
                  {lang === 'fr' 
                    ? 'N\'hésitez pas à nous contacter par téléphone, email ou à nous rendre visite.'
                    : 'Feel free to contact us by phone, email or visit us.'
                  }
                </p>
              </div>

              {contactInfo.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="group"
                >
                  {item.href ? (
                    <a href={item.href} className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 hover:border-[#004D40]/20">
                      <div className="w-12 h-12 rounded-lg bg-[#004D40]/10 flex items-center justify-center text-[#004D40] group-hover:bg-[#004D40] group-hover:text-white transition-all duration-300">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900 mb-1">{item.title}</h4>
                        <p className="text-slate-600">{item.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm border border-slate-100">
                      <div className="w-12 h-12 rounded-lg bg-[#004D40]/10 flex items-center justify-center text-[#004D40]">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900 mb-1">{item.title}</h4>
                        <p className="text-slate-600">{item.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Trust badges */}
              <div className="pt-6 border-t border-slate-200 mt-8">
                <div className="flex flex-wrap gap-4">
                  {[
                    lang === 'fr' ? 'Réponse rapide' : 'Quick response',
                    lang === 'fr' ? 'Devis gratuit' : 'Free quote',
                    lang === 'fr' ? 'Support 7j/7' : '24/7 Support'
                  ].map((badge, index) => (
                    <span key={index} className="inline-flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-[#00897B]" />
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-xl border border-slate-100">
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-2">
                  {t('contact.form.title')}
                </h3>
                <p className="text-slate-600 mb-8">
                  {lang === 'fr' 
                    ? 'Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.'
                    : 'Fill out the form below and we will get back to you as soon as possible.'
                  }
                </p>
                
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="from_name" className={`${labelClasses} ${focusedField === 'from_name' ? 'text-[#004D40]' : ''}`}>
                        {t('contact.form.name')} *
                      </label>
                      <input
                        type="text"
                        id="from_name"
                        name="from_name"
                        value={formData.from_name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('from_name')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className={inputClasses}
                        placeholder={lang === 'fr' ? 'Votre nom complet' : 'Your full name'}
                      />
                    </div>

                    <div>
                      <label htmlFor="from_email" className={`${labelClasses} ${focusedField === 'from_email' ? 'text-[#004D40]' : ''}`}>
                        {t('contact.form.email')} *
                      </label>
                      <input
                        type="email"
                        id="from_email"
                        name="from_email"
                        value={formData.from_email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('from_email')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className={inputClasses}
                        placeholder={lang === 'fr' ? 'votre@email.com' : 'your@email.com'}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className={`${labelClasses} ${focusedField === 'subject' ? 'text-[#004D40]' : ''}`}>
                      {t('contact.form.subject')} *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={inputClasses}
                      placeholder={lang === 'fr' ? 'Objet de votre demande' : 'Subject of your request'}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className={`${labelClasses} ${focusedField === 'message' ? 'text-[#004D40]' : ''}`}>
                      {t('contact.form.message')} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows={5}
                      className={`${inputClasses} resize-none`}
                      placeholder={lang === 'fr' ? 'Décrivez votre besoin en détail...' : 'Describe your needs in detail...'}
                    />
                  </div>

                  {status.message && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-4 rounded-xl flex items-center gap-3 ${
                        status.type === 'success' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 
                        status.type === 'error' ? 'bg-red-50 text-red-700 border border-red-200' : 
                        'bg-slate-50 text-slate-700 border border-slate-200'
                      }`}
                    >
                      {status.type === 'success' && <CheckCircle2 className="w-5 h-5 flex-shrink-0" />}
                      {status.type === 'error' && <AlertCircle className="w-5 h-5 flex-shrink-0" />}
                      {status.message}
                    </motion.div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-3 py-4 px-6 bg-[#004D40] text-white font-semibold rounded-xl shadow-lg hover:bg-[#00695C] hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.99 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        {t('form.sending')}
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        {t('form.submit')}
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-display font-bold text-slate-900 mb-6 text-center">
              {lang === 'fr' ? 'Notre Localisation' : 'Our Location'}
            </h3>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <iframe
                width="100%"
                height="400"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Ahmed%20sekou%20toure%20internatioinal%20airport+(Elite%20cargo)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                title="Elite Cargo Location"
                className="w-full"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
