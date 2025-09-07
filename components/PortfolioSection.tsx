import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ExternalLink, FileText } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useEffect, useState } from 'react';

// Типы для портфолио
type PortfolioItem = {
  title: string;
  url: string;
  description: string;
};
type PortfolioCategory = {
  category: string;
  mockupImage: string;
  items: PortfolioItem[];
};

// Исправляем типизацию t
function getDefaultPortfolio(t: (key: any) => string, language: string): PortfolioCategory[] {
  // Временные переводы для нового раздела с поддержкой всех языков
  const tempTranslations: { [lang: string]: { [key: string]: string } } = {
    ru: {
      'portfolio.graphicDesign': 'Графический дизайн',
      'portfolio.socialIllustrations': 'Иллюстрации для соцсетей', 
      'portfolio.socialIllustrationsDesc': 'Коллекция иллюстраций для постов в социальных сетях и рекламных материалов',
      'portfolio.bookCovers': 'Книжные обложки',
      'portfolio.bookCoversDesc': 'Креативные дизайны обложек книг с современной типографикой и визуальными элементами',
      'portfolio.postersAndDiplomas': 'Постеры и дипломы',
      'portfolio.postersAndDiplomasDesc': 'Постеры для мероприятий, сертификаты и дипломы для различных организаций'
    },
    en: {
      'portfolio.graphicDesign': 'Graphic Design',
      'portfolio.socialIllustrations': 'Social Media Illustrations',
      'portfolio.socialIllustrationsDesc': 'Collection of illustrations for social media posts and promotional materials',
      'portfolio.bookCovers': 'Book Covers',
      'portfolio.bookCoversDesc': 'Creative book cover designs with modern typography and visual elements',
      'portfolio.postersAndDiplomas': 'Posters and Diplomas',
      'portfolio.postersAndDiplomasDesc': 'Event posters, certificates, and diploma designs for various organizations'
    },
    fr: {
      'portfolio.graphicDesign': 'Design Graphique',
      'portfolio.socialIllustrations': 'Illustrations pour les Réseaux Sociaux',
      'portfolio.socialIllustrationsDesc': 'Collection d\'illustrations pour les publications sur les réseaux sociaux et matériaux promotionnels',
      'portfolio.bookCovers': 'Couvertures de Livres',
      'portfolio.bookCoversDesc': 'Designs créatifs de couvertures de livres avec typographie moderne et éléments visuels',
      'portfolio.postersAndDiplomas': 'Affiches et Diplômes',
      'portfolio.postersAndDiplomasDesc': 'Affiches d\'événements, certificats et diplômes pour diverses organisations'
    }
  };
  
  const getTempTranslation = (key: string) => {
    const langTranslations = tempTranslations[language] || tempTranslations['ru'];
    return langTranslations[key] || t(key);
  };
  return [
    {
      category: t('portfolio.landingProjects'),
      mockupImage: "https://ladobor.ru/olga/portfolio/img/landing.jpg",
      items: [
        {
          title: t('portfolio.loveBooks'),
          url: "https://svetapp-promo.rusneb.ru/love",
          description: t('portfolio.loveBooksDesc')
        },
        {
          title: t('portfolio.readingInSky'),
          url: "https://svetapp-promo.rusneb.ru/chitaem-v-nebe",
          description: t('portfolio.readingInSkyDesc')
        },
        {
          title: t('portfolio.gamzatov100'),
          url: "https://svetapp-promo.rusneb.ru/gamzatov2023",
          description: t('portfolio.gamzatov100Desc')
        },
        {
          title: t('portfolio.newYear2025'),
          url: "https://svetapp-promo.rusneb.ru/newyear2025",
          description: t('portfolio.newYear2025Desc')
        },
        {
          title: t('portfolio.pushkin225'),
          url: "https://svetapp-promo.rusneb.ru/pushkin225",
          description: t('portfolio.pushkin225Desc')
        }
      ]
    },
    {
      category: t('portfolio.posters'),
      mockupImage: "https://ladobor.ru/olga/portfolio/img/info.jpg",
      items: [
        {
          title: t('portfolio.pushkinColoring'),
          url: "https://disk.yandex.ru/d/XCfmQktXu9ytLg",
          description: t('portfolio.pushkinColoringDesc')
        },
        {
          title: t('portfolio.newYearDecorations'),
          url: "https://disk.yandex.ru/i/qhCeGcFgh3YsyA",
          description: t('portfolio.newYearDecorationsDesc')
        },
        {
          title: t('portfolio.libraryInfographics'),
          url: "https://disk.yandex.ru/i/qhCeGcFgh3YsyA",
          description: t('portfolio.libraryInfographicsDesc')
        }
      ]
    },
    {
      category: t('portfolio.manuals'),
      mockupImage: "https://ladobor.ru/olga/portfolio/img/manual.jpg",
      items: [
        {
          title: t('portfolio.mobileLibraries2024'),
          url: "https://disk.yandex.ru/d/S6RC-IAFt7DUhg",
          description: t('portfolio.mobileLibraries2024Desc')
        },
        {
          title: t('portfolio.brandedIllustrations'),
          url: "https://www.figma.com/design/Ajp2RdBEAulVsDtnoMSCOi/Макеты-иллюстраций-для-Света?node-id=1219-4",
          description: t('portfolio.brandedIllustrationsDesc')
        }
      ]
    },
    {
      category: t('portfolio.digitalMerch'),
      mockupImage: "https://ladobor.ru/olga/portfolio/img/merch.jpg",
      items: [
        {
          title: t('portfolio.telegramStickers'),
          url: "https://svetapp-promo.rusneb.ru/kopilka#stickers",
          description: t('portfolio.telegramStickersDesc')
        }
      ]
    },
    {
      category: t('portfolio.texts'),
      mockupImage: "https://ladobor.ru/olga/portfolio/img/texts.jpg",
      items: [
        {
          title: t('portfolio.texts1'),
          url: 'https://www.rsl.ru/ru/events/afisha/vistavki/dni-kultury-tadzhikistana-v-rgb',
          description: t('portfolio.texts1Desc')
        },
        {
          title: t('portfolio.texts2'),
          url: 'https://www.rsl.ru/ru/all-news/xviii-fedorovskie-chtenia',
          description: t('portfolio.texts2Desc')
        },
        {
          title: t('portfolio.texts3'),
          url: 'https://www.rsl.ru/ru/events/afisha/meetings/kruglyij-stol-unikalnyij-lingvisticheskij-fond',
          description: t('portfolio.texts3Desc')
        },
        {
          title: t('portfolio.texts4'),
          url: 'https://www.rsl.ru/ru/events/afisha/meetings/kruglyij-stol-den-oon-v-rgb-2019',
          description: t('portfolio.texts4Desc')
        },
        {
          title: t('portfolio.texts5'),
          url: 'https://www.rsl.ru/ru/all-news/fotovyistavka-pejzazhej-yuzhnogo-berega-kryima',
          description: t('portfolio.texts5Desc')
        }
      ]
    },
    {
      category: getTempTranslation('portfolio.graphicDesign'),
      mockupImage: "https://ladobor.ru/olga/portfolio/img/cover.jpg",
      items: [
        {
          title: getTempTranslation('portfolio.socialIllustrations'),
          url: "https://morozova31.tilda.ws/social",
          description: getTempTranslation('portfolio.socialIllustrationsDesc')
        },
        {
          title: getTempTranslation('portfolio.bookCovers'),
          url: "https://morozova31.tilda.ws/covers",
          description: getTempTranslation('portfolio.bookCoversDesc')
        },
        {
          title: getTempTranslation('portfolio.postersAndDiplomas'),
          url: "https://morozova31.tilda.ws/posters",
          description: getTempTranslation('portfolio.postersAndDiplomasDesc')
        }
      ]
    }
  ];
}

export function PortfolioSection() {
  const { t, language } = useLanguage();
  const [portfolio, setPortfolio] = useState<PortfolioCategory[]>([]);

  // Инициализация из localStorage или дефолт
  useEffect(() => {
    // Всегда используем переводы для текущего языка
    setPortfolio(getDefaultPortfolio(t, language));
  }, [t, language]);

  // ...далее используем portfolio вместо portfolioItems

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl mb-6 text-gray-900">
            {t('portfolio.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('portfolio.subtitle')}
          </p>
        </motion.div>

        <div className="space-y-16">
          {portfolio.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-stretch gap-0">
                {/* Заглушка изображения */}
                <div className="relative h-64 lg:h-auto lg:overflow-hidden">
                  <ImageWithFallback
                    src={category.mockupImage}
                    alt={`${category.category} mockup`}
                    className="w-full h-full object-cover lg:absolute lg:inset-0 lg:w-full lg:h-full"
                  />
                  <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                    <div className="text-white text-center">
                      <h3 className="text-2xl mb-2">{category.category}</h3>
                    </div>
                  </div>
                </div>
                
                {/* Содержимое */}
                <div className="p-8">
                  <h3 className="text-2xl mb-6 text-gray-900">{category.category}</h3>
                  
                  <div className="space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="group bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                            <FileText className="w-4 h-4 text-white" />
                          </div>
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-gray-600 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                        
                        <h4 className="mb-2 text-gray-900 leading-snug">{item.title}</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          
        </motion.div>
      </div>
    </section>
  );
}
