import { motion } from 'motion/react';
import { GraduationCap, Award, Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function EducationSection() {
  const { t } = useLanguage();
  
  const education = [
    {
      degree: t('education.degree1'),
      institution: t('education.institution1'),
      year: '2005',
      program: t('education.program1')
    },
    {
      degree: t('education.degree2'),
      institution: t('education.institution2'),
      year: '2004'
    }
  ];

  const certifications = [
    { name: t('education.cert1'), org: 'Simulative', year: '2025' },
    { name: t('education.cert2'), org: 'Simulative', year: '2025' },
    { name: t('education.cert3'), org: 'Atlassian', year: '2025' },
    { name: t('education.cert4'), org: t('education.certOrg4'), year: '2025' },
    { name: t('education.cert5'), org: t('education.certOrg5'), year: '2024' },
    { name: t('education.cert6'), org: t('education.certOrg6'), year: '2023' },
    { name: t('education.cert7'), org: t('education.certOrg7'), year: '2014' }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl mb-6 text-gray-900">
            {t('education.title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Основное образование */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 rounded-2xl p-8"
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl text-gray-900">{t('education.education')}</h3>
            </div>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative">
                  <div className="flex space-x-4">
                    <div className="w-3 h-3 rounded-full bg-gray-900 mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-lg text-gray-900 mb-2">{edu.degree}</h4>
                      <p className="text-gray-600 mb-2">{edu.institution}</p>
                      {edu.program && (
                        <p className="text-sm text-gray-500 mb-2">{edu.program}</p>
                      )}
                      <div className="flex items-center space-x-2 text-gray-500 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.year}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Сертификации */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gray-50 rounded-2xl p-8"
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl text-gray-900">{t('education.certifications')}</h3>
            </div>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white p-4 rounded-xl">
                  <h4 className="text-gray-900 mb-2">{cert.name}</h4>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 text-sm">{cert.org}</span>
                    <span className="text-gray-500 text-sm bg-gray-100 px-2 py-1 rounded">
                      {cert.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}