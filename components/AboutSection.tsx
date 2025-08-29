
import { motion } from 'motion/react';
import { Target, Users, TrendingUp, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function AboutSection() {
  const { t } = useLanguage();
  
  const highlights = [
    {
      icon: Target,
      title: t('about.systematic'),
      description: t('about.systematicDesc')
    },
    {
      icon: TrendingUp,
      title: t('about.result'),
      description: t('about.resultDesc')
    },
    {
      icon: Users,
      title: t('about.team'),
      description: t('about.teamDesc')
    },
    {
      icon: Award,
      title: t('about.projects'),
      description: t('about.projectsDesc')
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl mb-6 text-gray-900">
            {t('about.title')}
          </h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed space-y-4">
            <p>{t('about.p1')}</p>
            <p>{t('about.p2')}</p>
            <p>{t('about.p3')}</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="mb-3 text-gray-900">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl mb-6 text-gray-900">{t('about.desiredTitle')}</h3>
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>{t('about.desiredPosition')}</strong>
              <br />
              {t('about.employment')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}