import { motion } from "motion/react";
import {
  Mail,
  Phone,
  MessageCircle,
  ExternalLink,
} from "lucide-react";
import { useLanguage } from '../contexts/LanguageContext';
import { useState } from 'react';

// Динамический импорт для проверки
async function importUtils() {
  try {
    console.log('Attempting dynamic import...');
    const module = await import('../utils/portfolioGenerator');
    console.log('Import successful:', module);
    return module;
  } catch (error) {
    console.error('Dynamic import failed:', error);
    return null;
  }
}

export function ContactSection() {
  const { t, currentLanguage } = useLanguage();
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownloadDocx = async () => {
    try {
      console.log('Starting DOCX generation...'); 
      setIsGenerating(true);
      
      // Динамический импорт
      const utils = await importUtils();
      if (!utils) {
        throw new Error('Could not import utils');
      }
      
      console.log('Calling generateWordDocument...');
      const blob = await utils.generateWordDocument(t, currentLanguage);
      console.log('Generated blob:', blob);
      
      const filename = `Olga_Morozova_Portfolio_${currentLanguage}_${new Date().toISOString().split('T')[0]}.docx`;
      console.log('Downloading with filename:', filename);
      
      utils.downloadWordDocument(blob, filename);
      console.log('Download initiated');
    } catch (error) {
      console.error('Error generating DOCX:', error);
      const errorMessage = error instanceof Error ? error.message : String(error);
      alert('Ошибка при генерации документа: ' + errorMessage);
    } finally {
      setIsGenerating(false);
    }
  };
  
  const contactMethods = [
    {
      icon: Phone,
      label: t('contact.phone'),
      value: "+7 (916) 841-32-16",
      href: "tel:+79168413216",
    },
    {
      icon: Mail,
      label: t('contact.email'),
      value: "morozova31@gmail.com",
      href: "mailto:morozova31@gmail.com",
    },
    {
      icon: MessageCircle,
      label: t('contact.telegram'),
      value: "@oljona",
      href: "https://t.me/oljona",
    },
    {
      icon: () => (
        <svg
          className="w-4 h-4"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      label: t('contact.linkedin'),
      value: "linkedin.com/in/olga-morozova",
      href: "https://linkedin.com/in/olga-morozova",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gray-900 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl mb-6">
            {t('contact.title')}
          </h2>
        </motion.div>

        <div className="flex justify-center">
          {/* Контактная информация */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 w-full max-w-lg"
          >
            {contactMethods.map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                }}
                className="flex items-center space-x-4 p-4 rounded-xl bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <contact.icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">
                    {contact.label}
                  </div>
                  {contact.href ? (
                    <a
                      href={contact.href}
                      className="text-white hover:text-gray-300 transition-colors flex items-center space-x-2"
                    >
                      <span>{contact.value}</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <div className="text-white">
                      {contact.value}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* DOCX Download Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <button
            onClick={handleDownloadDocx}
            disabled={isGenerating}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 bg-gray-900 text-white hover:bg-gray-800 hover:scale-105 shadow-lg hover:shadow-xl border border-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            {isGenerating ? t('pdf.generating') : t('pdf.button')}
          </button>
          <p className="mt-2 text-sm text-gray-500">
            {t('pdf.description')}
          </p>
        </motion.div>

        {/* Дополнительная информация */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-gray-800 text-center"
        >
          <p className="text-gray-400 text-sm mb-4">
            {t('contact.footer')}
          </p>
          <div className="flex justify-center items-center space-x-4 text-gray-500"></div>
        </motion.div>
      </div>
    </section>
  );
}