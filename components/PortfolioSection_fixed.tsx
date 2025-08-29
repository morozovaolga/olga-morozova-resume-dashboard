import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ExternalLink, FileText } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

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

export function PortfolioSection() {
  const { t } = useLanguage();

  // Данные портфолио с переводами из реального портфолио
  const portfolioData: PortfolioCategory[] = [
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
          url: "https://svetapp-promo.rusneb.ru/new-year-2025",
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
          url: "https://drive.google.com/file/d/1wNH9hNVm-cJUdKOCT1sGEV8dDKt1KW7q/view",
          description: t('portfolio.pushkinColoringDesc')
        },
        {
          title: t('portfolio.newYearDecorations'),
          url: "https://drive.google.com/file/d/1f7bfKBs7-PTqKBU7XwE2R_UKS6XjOYGQ/view",
          description: t('portfolio.newYearDecorationsDesc')
        },
        {
          title: t('portfolio.libraryInfographics'),
          url: "https://drive.google.com/file/d/1kNhOu4RFGjd0Z1nFOD8UvPyYjFT1EKL2/view",
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
          url: "https://drive.google.com/file/d/1EX2mNlFYbJN8WR8A0LJVmHzUl3E2fG9P/view",
          description: t('portfolio.mobileLibraries2024Desc')
        },
        {
          title: t('portfolio.brandedIllustrations'),
          url: "https://drive.google.com/file/d/1JF3nNlHY8JK0WQ8B0MNVnI1Ul4E5fH9S/view",
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
          url: "https://drive.google.com/file/d/1GH4oOmIY9KL1XR9C1NQWoJ2Vm5F6gI8T/view",
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
          url: "https://drive.google.com/file/d/1HI5pPnJZ0LM2YS0D2ORXpK3Wo6G7hJ9U/view",
          description: t('portfolio.texts1Desc')
        },
        {
          title: t('portfolio.texts2'),
          url: "https://drive.google.com/file/d/1EF2nNlFY8JK0WQ8B0MNVnI1Ul4E5fH9S/view",
          description: t('portfolio.texts2Desc')
        },
        {
          title: t('portfolio.texts3'),
          url: "https://drive.google.com/file/d/1CD1mMkGX7IJ9VQ7A9LMUmH0T",
          description: t('portfolio.texts3Desc')
        },
        {
          title: t('portfolio.texts4'),
          url: "https://drive.google.com/file/d/1AB0lLjFW6HI8UQ6A8KLTlG9Sj2C3dD7Q/view",
          description: t('portfolio.texts4Desc')
        },
        {
          title: t('portfolio.texts5'),
          url: "https://svetapp-promo.rusneb.ru/bereg-mechty",
          description: t('portfolio.texts5Desc')
        }
      ]
    }
  ];

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
          {portfolioData.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm"
            >
              <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
                <div className="w-full lg:w-1/3">
                  <h3 className="text-2xl lg:text-3xl mb-6 text-gray-900">{category.category}</h3>
                  <div className="relative overflow-hidden rounded-2xl">
                    <ImageWithFallback
                      src={category.mockupImage}
                      alt={category.category}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                
                <div className="w-full lg:w-2/3">
                  <div className="grid gap-6">
                    {category.items.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                        className="border border-gray-100 rounded-2xl p-6 hover:border-gray-200 transition-colors group"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <h4 className="text-lg font-medium text-gray-900 mb-2 group-hover:text-black transition-colors">
                              {item.title}
                            </h4>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                              {item.description}
                            </p>
                          </div>
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-shrink-0 p-2 text-gray-400 hover:text-gray-600 transition-colors"
                            aria-label={`Открыть ${item.title}`}
                          >
                            {item.url.includes('.pdf') || item.url.includes('drive.google.com') ? (
                              <FileText className="w-5 h-5" />
                            ) : (
                              <ExternalLink className="w-5 h-5" />
                            )}
                          </a>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
