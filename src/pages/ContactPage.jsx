import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import Reveal from '../components/Reveal';

// ============================================
// CONFIGURATION EMAILJS
// ============================================
const EMAILJS_SERVICE_ID = 'service_tr3vism';
const EMAILJS_TEMPLATE_ID = 'template_b5t2u2g';
const EMAILJS_PUBLIC_KEY = 'VQrOuZyfMUjdygmni';
// ============================================

export default function ContactPage() {
  const { t, i18n } = useTranslation();
  const { lang } = useParams();
  const currentLang = ['fr', 'en'].includes(lang) ? lang : 'fr';
  const isFr = currentLang === 'fr';
  const formRef = useRef();

  const [formData, setFormData] = useState({ from_name: '', from_email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  useEffect(() => {
    if (['fr', 'en'].includes(lang) && i18n.language !== lang) {
      i18n.changeLanguage(lang);
      localStorage.setItem('language', lang);
    }
  }, [lang, i18n]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    if (EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID' || EMAILJS_TEMPLATE_ID === 'YOUR_TEMPLATE_ID' || EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
      setStatus({
        type: 'error',
        message: isFr
          ? "Le service d'email n'est pas encore configuré. Veuillez nous contacter par téléphone."
          : 'Email service is not yet configured. Please contact us by phone.',
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY);
      if (result.status === 200) {
        setStatus({
          type: 'success',
          message: isFr ? 'Message envoyé avec succès ! Nous vous répondrons rapidement.' : 'Message sent successfully! We will respond shortly.',
        });
        setFormData({ from_name: '', from_email: '', subject: '', message: '' });
      } else {
        throw new Error('Email send failed with status: ' + result.status);
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: isFr ? `Erreur: ${error.text || error.message || 'Veuillez réessayer.'}` : `Error: ${error.text || error.message || 'Please try again.'}`,
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus({ type: '', message: '' }), 8000);
    }
  };

  const inputClasses =
    'w-full px-4 py-3.5 bg-paper border border-ink/15 rounded-xl focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/15 transition-all duration-300 text-ink placeholder-ink-soft/60';
  const labelClasses = 'block mono-meta mb-2 transition-colors duration-300';

  const details = [
    { label: t('contact.phone.title'), value: t('contact.phone.value'), href: `tel:${t('contact.phone.value').replace(/\s/g, '')}` },
    { label: t('contact.email.title'), value: t('contact.email.value'), href: `mailto:${t('contact.email.value')}` },
    { label: t('contact.address.title'), value: t('contact.address.value'), href: null },
    { label: isFr ? 'Horaires' : 'Hours', value: isFr ? 'Lun – Ven · 8h – 18h · Sam · 8h – 13h' : 'Mon – Fri · 8am – 6pm · Sat · 8am – 1pm', href: null },
  ];

  const badges = isFr ? ['Réponse rapide', 'Devis gratuit', 'Support 7j/7'] : ['Quick response', 'Free quote', '24/7 support'];

  const seoData = {
    fr: {
      title: 'Contact | Elite Cargo - Fret Aérien & Logistique Guinée',
      description: 'Contactez Elite Cargo pour vos besoins en fret aérien, maritime et transit douane. Devis gratuit. Aéroport Gbessia, Conakry, Guinée. Tél: +224 622 65 25 11',
      keywords: 'contact Elite Cargo, devis fret Guinée, téléphone Elite Cargo, adresse Conakry',
    },
    en: {
      title: 'Contact | Elite Cargo - Air Freight & Logistics Guinea',
      description: 'Contact Elite Cargo for your air freight, sea freight and customs needs. Free quote. Gbessia Airport, Conakry, Guinea. Tel: +224 622 65 25 11',
      keywords: 'contact Elite Cargo, freight quote Guinea, Elite Cargo phone, Conakry address',
    },
  };
  const s = seoData[currentLang] || seoData.fr;

  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink font-body pt-[5.5rem]">
      <SEO title={s.title} description={s.description} keywords={s.keywords} canonical={`https://elite-cargo.net/${currentLang}/contact`} lang={currentLang} />
      <Header />

      {/* Editorial intro */}
      <section className="pt-[clamp(3rem,8vw,6rem)] pb-[clamp(2rem,5vw,3.5rem)]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <Reveal>
            <span className="eyebrow mb-6">{isFr ? 'Contact' : 'Contact'}</span>
            <h1 className="font-display font-bold tracking-tight leading-[0.98] text-[clamp(2.6rem,8vw,6rem)] max-w-[14ch] text-balance">
              {t('contact.title')}
            </h1>
            <p className="mt-6 text-ink-soft text-lg max-w-[52ch] leading-relaxed">{t('contact.subtitle')}</p>
          </Reveal>
          <Reveal delay={0.1} className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {badges.map((b, i) => (
              <span key={i} className="inline-flex items-center gap-2 mono-meta">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                {b}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      <main className="flex-grow pb-[clamp(4rem,10vw,7rem)]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-5 gap-[clamp(2rem,5vw,4.5rem)] pt-10 border-t border-ink/10">
            {/* Details */}
            <Reveal className="lg:col-span-2">
              <span className="mono-meta text-accent">{isFr ? 'Nos coordonnées' : 'Reach us'}</span>
              <div className="mt-8 flex flex-col">
                {details.map((d, i) => {
                  const inner = (
                    <>
                      <span className="mono-meta text-ink-soft/70">{d.label}</span>
                      <span className="mt-1 block text-lg text-ink group-hover:text-accent transition-colors">{d.value}</span>
                    </>
                  );
                  return d.href ? (
                    <a key={i} href={d.href} className="group py-5 border-t border-ink/12 first:border-t-0 block">
                      {inner}
                    </a>
                  ) : (
                    <div key={i} className="py-5 border-t border-ink/12 first:border-t-0">{inner}</div>
                  );
                })}
              </div>
            </Reveal>

            {/* Form */}
            <Reveal delay={0.1} className="lg:col-span-3">
              <div className="bg-paper-2 rounded-3xl p-6 sm:p-9 border border-ink/10">
                <h2 className="font-display font-semibold tracking-tight text-2xl mb-2">{t('contact.form.title')}</h2>
                <p className="text-ink-soft mb-8">
                  {isFr
                    ? 'Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.'
                    : 'Fill out the form below and we will get back to you as soon as possible.'}
                </p>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="from_name" className={`${labelClasses} ${focusedField === 'from_name' ? 'text-accent' : ''}`}>{t('contact.form.name')} *</label>
                      <input type="text" id="from_name" name="from_name" value={formData.from_name} onChange={handleChange} onFocus={() => setFocusedField('from_name')} onBlur={() => setFocusedField(null)} required className={inputClasses} placeholder={isFr ? 'Votre nom complet' : 'Your full name'} />
                    </div>
                    <div>
                      <label htmlFor="from_email" className={`${labelClasses} ${focusedField === 'from_email' ? 'text-accent' : ''}`}>{t('contact.form.email')} *</label>
                      <input type="email" id="from_email" name="from_email" value={formData.from_email} onChange={handleChange} onFocus={() => setFocusedField('from_email')} onBlur={() => setFocusedField(null)} required className={inputClasses} placeholder={isFr ? 'votre@email.com' : 'your@email.com'} />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className={`${labelClasses} ${focusedField === 'subject' ? 'text-accent' : ''}`}>{t('contact.form.subject')} *</label>
                    <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} onFocus={() => setFocusedField('subject')} onBlur={() => setFocusedField(null)} required className={inputClasses} placeholder={isFr ? 'Objet de votre demande' : 'Subject of your request'} />
                  </div>
                  <div>
                    <label htmlFor="message" className={`${labelClasses} ${focusedField === 'message' ? 'text-accent' : ''}`}>{t('contact.form.message')} *</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} onFocus={() => setFocusedField('message')} onBlur={() => setFocusedField(null)} required rows={5} className={`${inputClasses} resize-none`} placeholder={isFr ? 'Décrivez votre besoin en détail...' : 'Describe your needs in detail...'} />
                  </div>

                  {status.message && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-4 rounded-xl flex items-center gap-3 ${
                        status.type === 'success' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : status.type === 'error' ? 'bg-red-50 text-red-700 border border-red-200' : 'bg-paper text-ink border border-ink/15'
                      }`}
                    >
                      {status.type === 'success' && <CheckCircle2 className="w-5 h-5 flex-shrink-0" />}
                      {status.type === 'error' && <AlertCircle className="w-5 h-5 flex-shrink-0" />}
                      {status.message}
                    </motion.div>
                  )}

                  <button type="submit" disabled={isSubmitting} className="pill pill--solid w-full disabled:opacity-50 disabled:cursor-not-allowed">
                    {isSubmitting ? (
                      <>
                        <span className="w-5 h-5 border-2 border-paper border-t-transparent rounded-full animate-spin" />
                        {t('form.sending')}
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        {t('form.submit')}
                      </>
                    )}
                  </button>
                </form>
              </div>
            </Reveal>
          </div>

          {/* Map */}
          <Reveal delay={0.1} className="mt-[clamp(3rem,7vw,5rem)]">
            <span className="eyebrow mb-6">{isFr ? 'Localisation' : 'Location'}</span>
            <div className="relative mt-4 rounded-lg overflow-hidden border border-ink/10 aspect-[16/9] sm:aspect-[16/7]">
              <iframe
                title="Elite Cargo Location"
                src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Ahmed%20sekou%20toure%20internatioinal%20airport+(Elite%20cargo)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                className="absolute inset-0 w-full h-full grayscale-[0.2]"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </main>

      <Footer />
    </div>
  );
}
