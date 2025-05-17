'use client'
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

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
    setStatus({ type: 'sending', message: t('form.sending') });

    try {
      const res = await fetch("https://cargo-elite.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nom: formData.name,
          email: formData.email,
          objet: formData.subject,
          message: formData.message
        })
      });
      
      const result = await res.json();
      
      if (result.success) {
        setStatus({ type: 'success', message: t('form.success') });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({ type: 'error', message: t('form.error') });
      }
    } catch (error) {
      console.error(error);
      setStatus({ type: 'error', message: t('form.serverError') });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus({ type: '', message: '' }), 5000);
    }
  };

  const inputClasses = "w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#007d6f]/20 focus:border-[#007d6f] transition-all duration-300 text-gray-700 placeholder-gray-400";
  const labelClasses = "block text-sm font-medium text-gray-700 mb-2 transition-colors duration-300";

  return (
    <motion.form 
      onSubmit={handleSubmit} 
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <label htmlFor="name" className={`${labelClasses} ${focusedField === 'name' ? 'text-[#007d6f]' : ''}`}>
            {t('contact.form.name')}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onFocus={() => setFocusedField('name')}
            onBlur={() => setFocusedField(null)}
            required
            className={inputClasses}
            placeholder={t('contact.form.name')}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <label htmlFor="email" className={`${labelClasses} ${focusedField === 'email' ? 'text-[#007d6f]' : ''}`}>
            {t('contact.form.email')}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onFocus={() => setFocusedField('email')}
            onBlur={() => setFocusedField(null)}
            required
            className={inputClasses}
            placeholder={t('contact.form.email')}
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <label htmlFor="subject" className={`${labelClasses} ${focusedField === 'subject' ? 'text-[#007d6f]' : ''}`}>
          {t('contact.form.subject')}
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
          placeholder={t('contact.form.subject')}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <label htmlFor="message" className={`${labelClasses} ${focusedField === 'message' ? 'text-[#007d6f]' : ''}`}>
          {t('contact.form.message')}
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          onFocus={() => setFocusedField('message')}
          onBlur={() => setFocusedField(null)}
          required
          rows={4}
          className={`${inputClasses} resize-none`}
          placeholder={t('contact.form.message')}
        />
      </motion.div>

      {status.message && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-4 rounded-xl ${
            status.type === 'success' ? 'bg-green-50 text-green-700' : 
            status.type === 'error' ? 'bg-red-50 text-red-700' : 
            'bg-gray-50 text-gray-700'
          }`}
        >
          {status.message}
        </motion.div>
      )}

      <motion.button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 py-4 px-6 bg-gradient-to-r from-[#007d6f] to-[#00a199] text-white font-medium rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none disabled:hover:shadow-lg"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
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
    </motion.form>
  );
};

export default ContactForm; 