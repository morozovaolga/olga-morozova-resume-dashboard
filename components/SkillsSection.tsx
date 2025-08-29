import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export function SkillsSection() {
  const { t } = useLanguage();
  
  const skills = [
    t('skills.projectManagement'),
    t('skills.contentStrategy'),
    t('skills.productThinking'),
    t('skills.dataAnalytics'),
    t('skills.systemThinking'),
    t('skills.teamManagement')
  ];

  const technicalSkills = [
    {
      category: t('skills.analytics'),
      skills: ["Python", "SQL", "Яндекс.Метрика", "Superset", "Excel"]
    },
    {
      category: t('skills.projectManagementCat'),
      skills: ["Jira", "Confluence", "Kaiten", "Trello"]
    },
    {
      category: t('skills.contentCreation'),
      skills: ["Tilda", "Google Docs", "Figma"]
    },
    {
      category: t('skills.automation'),
      skills: [t('skills.processes'), t('skills.systems'), t('skills.documentation')]
    }
  ];

  const languages = [
    { name: t('skills.russian'), level: t('skills.native') },
    { name: t('skills.english'), level: 'C1' },
    { name: t('skills.french'), level: 'B2' }
  ];

  return (
    <section id="skills" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-light mb-4">{t('skills.title')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('skills.subtitle')}</p>
        </motion.div>

        {/* Основные навыки */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-8 mb-12 shadow-sm"
        >
          <h3 className="text-2xl mb-8 text-gray-900 text-center">{t('skills.professional')}</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center p-4 bg-gray-50 rounded-xl"
              >
                <div className="w-2 h-2 bg-gray-900 rounded-full mr-3 flex-shrink-0"></div>
                <span className="text-gray-900">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Технические навыки */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl p-8 mb-12 shadow-sm"
        >
          <h3 className="text-2xl mb-8 text-gray-900 text-center">{t('skills.technical')}</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalSkills.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-xl"
              >
                <h4 className="mb-4 text-gray-900 font-medium">{category.category}</h4>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm mr-1 mb-1"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Языки */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl p-8 shadow-sm"
        >
          <h3 className="text-2xl mb-8 text-gray-900 text-center">{t('skills.languages')}</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {languages.map((language, index) => (
              <motion.div
                key={language.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-xl"
              >
                <h4 className="text-gray-900 font-medium mb-2">{language.name}</h4>
                <span className="inline-block bg-gray-900 text-white px-4 py-1 rounded-full text-sm">
                  {language.level}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}