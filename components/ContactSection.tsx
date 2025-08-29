import { motion } from "motion/react";
import {
  Mail,
  Phone,
  MessageCircle,
  ExternalLink,
} from "lucide-react";
import { useLanguage } from '../contexts/LanguageContext';

export function ContactSection() {
  const { t } = useLanguage();
  
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