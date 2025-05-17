'use client'

import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '@/components/Header';
import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';

// Composant client qui gère l'interface utilisateur
const ContactPage = ({ params }) => {
  const { t } = useTranslation();
  const { lang } = params;

  return (
    <>
      <Header />
      <main className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#007d6f]/5 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00a199]/5 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Page Title */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="relative">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {t('contact.title')}
              </h1>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#007d6f] rounded-full" />
            </div>
            <p className="mt-8 text-lg text-gray-600 max-w-2xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#007d6f]/10 to-[#00a199]/10 rounded-2xl blur opacity-15 group-hover:opacity-25 transition duration-300" />
                  <div className="relative">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">
                      {t('contact.info')}
                    </h2>
                    
                    <div className="space-y-8">
                      <div className="flex items-start space-x-4 group/item">
                        <div className="flex-shrink-0 w-12 h-12 bg-[#007d6f]/10 rounded-xl flex items-center justify-center group-hover/item:bg-[#007d6f]/20 transition-colors">
                          <MapPin className="h-6 w-6 text-[#007d6f]/80" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800">
                            {t('contact.address.title')}
                          </h3>
                          <p className="text-gray-500 mt-1">
                            {t('contact.address.value')}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4 group/item">
                        <div className="flex-shrink-0 w-12 h-12 bg-[#007d6f]/10 rounded-xl flex items-center justify-center group-hover/item:bg-[#007d6f]/20 transition-colors">
                          <Phone className="h-6 w-6 text-[#007d6f]/80" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800">
                            {t('contact.phone.title')}
                          </h3>
                          <p className="text-gray-500 mt-1">
                            {t('contact.phone.value')}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4 group/item">
                        <div className="flex-shrink-0 w-12 h-12 bg-[#007d6f]/10 rounded-xl flex items-center justify-center group-hover/item:bg-[#007d6f]/20 transition-colors">
                          <Mail className="h-6 w-6 text-[#007d6f]/80" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800">
                            {t('contact.email.title')}
                          </h3>
                          <p className="text-gray-500 mt-1">
                            {t('contact.email.value')}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Branches */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#007d6f]/10 to-[#00a199]/10 rounded-2xl blur opacity-15 group-hover:opacity-25 transition duration-300" />
                  <div className="relative">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">
                      {t('branches.title')}
                    </h2>
                    <div className="space-y-6">
                      {Object.entries(t('branches', { returnObjects: true }))
                        .filter(([key]) => key !== 'title')
                        .map(([key, branch], index) => (
                          <motion.div 
                            key={key}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group/item border-b border-gray-100 pb-6 last:border-0 last:pb-0"
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <h3 className="font-semibold text-gray-800 group-hover/item:text-[#007d6f] transition-colors">
                                  {branch.country}
                                </h3>
                                <p className="text-gray-500 mt-1">{branch.name}</p>
                                <p className="text-sm text-gray-400 mt-1">{branch.note}</p>
                              </div>
                              <div className="w-8 h-8 bg-[#007d6f]/10 rounded-full flex items-center justify-center group-hover/item:bg-[#007d6f]/20 transition-colors">
                                <svg className="w-4 h-4 text-[#007d6f]/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-[#007d6f]/10 to-[#00a199]/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative bg-white rounded-2xl p-8 shadow-xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                  {t('contact.form.title')}
                </h2>
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage; 