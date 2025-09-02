import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowDown, Mail, Phone, MessageCircle, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const image_olga = 'https://ladobor.ru/olga/portfolio/img/olga.jpg';

export function HeroSection() {
  const { t, language } = useLanguage();
  
  const scrollToPortfolio = () => {
    setTimeout(() => {
      const portfolioElement = document.getElementById('portfolio');
      if (portfolioElement) {
        portfolioElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // Мета-данные для языков
  const meta = {
    ru: {
      title: 'Ольга Морозова — Главный редактор, контент-стратег и руководитель проектов',
      description: 'Помогаю компаниям создавать сильный контент, который работает на рост аудитории и бизнеса.'
    },
    en: {
      title: 'Olga Morozova — Editor-in-Chief, Content Strategist, and Project Manager',
      description: 'I help companies create strong content that drives audience and business growth.'
    },
    fr: {
      title: 'Olga Morozova — Rédactrice en chef, content strategist et cheffe de projet',
      description: "J'aide les entreprises à créer un contenu fort qui favorise la croissance de l'audience et du business."
    }
  };
  const currentMeta = meta[language] || meta.ru;

  return (
    <>
      <Helmet>
        <html lang={language} />
        <title>{currentMeta.title}</title>
        <meta name="description" content={currentMeta.description} />
        <meta property="og:title" content={currentMeta.title} />
        <meta property="og:description" content={currentMeta.description} />
        <meta property="twitter:title" content={currentMeta.title} />
        <meta property="twitter:description" content={currentMeta.description} />
      </Helmet>
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-white pt-24">
        <div className="max-w-6xl mx-auto px-6 py-4 sm:py-8 lg:py-12 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          
          {/* Текстовая часть */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-4 sm:mb-6"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4 text-gray-900">
                {t('hero.title')}
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-4 sm:mb-6">
                {t('hero.subtitle')}
              </p>
              <p className="text-base sm:text-lg text-gray-500 mb-6 sm:mb-8 leading-relaxed">
                {t('hero.description')}
              </p>
            </motion.div>

            {/* Контактная информация и кнопки - компактная мобильная версия */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-4 sm:space-y-6"
            >
              {/* Контакты в две колонки */}
              <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">
                <div className="flex items-center justify-center lg:justify-start space-x-2">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span className="truncate">{t('hero.phone')}</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-2">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span className="truncate">{t('hero.email')}</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-2">
                  <MessageCircle className="w-4 h-4 flex-shrink-0" />
                  <span className="truncate">{t('hero.telegram')}</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-2">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span className="truncate">{t('hero.location')}</span>
                </div>
              </div>

              {/* Кнопки в две колонки на мобильных */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.button 
                  onClick={scrollToPortfolio} 
                  className="w-full bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  {t('hero.portfolioButton')}
                </motion.button>
                <motion.a
                  href="https://github.com/morozovaolga"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors border border-gray-300 px-6 py-3 rounded-lg hover:border-gray-400"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>{t('hero.githubButton')}</span>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Изображение - адаптивная ориентация */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative order-first lg:order-last"
          >
            {/* Мобильная версия - горизонтальная */}
            <div className="relative w-72 h-52 sm:w-80 sm:h-60 lg:w-96 lg:h-72 mx-auto lg:hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white p-2 rounded-3xl shadow-2xl h-full">
                <ImageWithFallback
                  src={image_olga}
                  alt={t('hero.title')}
                  className="w-full h-full object-cover object-top rounded-2xl"
                />
              </div>
            </div>
            
            {/* Десктопная версия - вертикальная */}
            <div className="relative w-80 h-[24rem] lg:w-96 lg:h-[28rem] mx-auto hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl transform rotate-6"></div>
              <div className="relative bg-white p-2 rounded-3xl shadow-2xl h-full">
                <ImageWithFallback
                  src={image_olga}
                  alt={t('hero.title')}
                  className="w-full h-full object-cover object-top rounded-2xl"
                />
              </div>
            </div>
            
            {/* Дополнительный отступ снизу для стрелки - убираем лишний отступ */}
          </motion.div>
        </div>

        {/* Анимированная стрелка - возвращаем в нижнюю часть экрана */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-6 h-6 text-gray-400" />
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}