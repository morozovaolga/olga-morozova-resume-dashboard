
import { motion } from 'motion/react';
import { Calendar, MapPin, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function ExperienceSection() {
  const { t } = useLanguage();
  
  const experiences = [
    {
      company: t('experience.company'),
      position: t('experience.position'),
      location: t('experience.location'),
      period: t('experience.period'),
      description: t('experience.description'),
      achievements: [
        t('experience.ach1'),
        t('experience.ach2'),
        t('experience.ach3'),
        t('experience.ach4'),
        t('experience.ach5'),
        t('experience.ach6'),
        t('experience.ach7'),
        t('experience.ach8'),
        t('experience.ach9')
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl mb-6 text-gray-900">
            {t('experience.title')}
          </h2>
        </motion.div>

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-32 bg-gray-200 hidden md:block"></div>
              )}
              
              <div className="bg-gray-50 rounded-2xl p-8 relative">
                {/* Timeline dot */}
                
                
                <div className="md:ml-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl lg:text-2xl mb-2 text-gray-900">{exp.position}</h3>
                      <h4 className="text-lg text-gray-700 mb-3">{exp.company}</h4>
                    </div>
                    <div className="flex flex-col lg:items-end space-y-2">
                      <div className="flex items-center space-x-2 text-gray-500 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-500 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div>
                    <div className="flex items-center space-x-2 mb-4">
                      <TrendingUp className="w-5 h-5 text-gray-900" />
                      <span className="text-gray-900">{t('experience.achievements')}</span>
                    </div>
                    <ul className="grid grid-cols-1 gap-4 ml-[10px] mt-[0px] mr-[0px] mb-[0px]">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
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