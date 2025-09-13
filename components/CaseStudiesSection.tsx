import { motion } from "motion/react";
import { useLanguage } from '../contexts/LanguageContext';
import { useState } from 'react';

export function CaseStudiesSection() {
  const { t } = useLanguage();
  const [expandedCase, setExpandedCase] = useState<string | null>(null);

  const toggleCase = (caseId: string) => {
    setExpandedCase(expandedCase === caseId ? null : caseId);
  };

  const cases = [
    {
      id: 'aeroflot',
      backgroundImage: 'https://ladobor.ru/olga/portfolio/img/case-afl.jpg',
      title: t('cases.aeroflot.title'),
      background: t('cases.aeroflot.background'),
      role: {
        title: t('cases.aeroflot.roleTitle'),
        items: [
          t('cases.aeroflot.role1'),
          t('cases.aeroflot.role2'),
          t('cases.aeroflot.role3'),
          t('cases.aeroflot.role4')
        ]
      },
      process: {
        title: t('cases.aeroflot.processTitle'),
        items: [
          t('cases.aeroflot.process1'),
          t('cases.aeroflot.process2'),
          t('cases.aeroflot.process3'),
          t('cases.aeroflot.process4')
        ]
      },
      results: {
        title: t('cases.aeroflot.resultsTitle'),
        items: [
          t('cases.aeroflot.result1'),
          t('cases.aeroflot.result2'),
          t('cases.aeroflot.result3'),
          t('cases.aeroflot.result4')
        ]
      },
      highlights: [
        t('cases.aeroflot.highlight1'),
        t('cases.aeroflot.highlight2'),
        t('cases.aeroflot.highlight3'),
        t('cases.aeroflot.highlight4')
      ]
    },
    {
      id: 'mesh',
      backgroundImage: 'https://ladobor.ru/olga/portfolio/img/case-mesh.jpg',
      title: t('cases.mesh.title'),
      background: t('cases.mesh.background'),
      role: {
        title: t('cases.mesh.roleTitle'),
        items: [
          t('cases.mesh.role1'),
          t('cases.mesh.role2'),
          t('cases.mesh.role3'),
          t('cases.mesh.role4')
        ]
      },
      process: {
        title: t('cases.mesh.processTitle'),
        items: [
          t('cases.mesh.process1'),
          t('cases.mesh.process2'),
          t('cases.mesh.process3'),
          t('cases.mesh.process4')
        ]
      },
      results: {
        title: t('cases.mesh.resultsTitle'),
        items: [
          t('cases.mesh.result1'),
          t('cases.mesh.result2'),
          t('cases.mesh.result3'),
          t('cases.mesh.result4')
        ]
      },
      highlights: [
        t('cases.mesh.highlight1'),
        t('cases.mesh.highlight2'),
        t('cases.mesh.highlight3'),
        t('cases.mesh.highlight4')
      ]
    },
    {
      id: 'metro',
      backgroundImage: 'https://ladobor.ru/olga/portfolio/img/case-metro.jpg',
      title: t('cases.metro.title'),
      background: t('cases.metro.background'),
      role: {
        title: t('cases.metro.roleTitle'),
        items: [
          t('cases.metro.role1'),
          t('cases.metro.role2'),
          t('cases.metro.role3'),
          t('cases.metro.role4')
        ]
      },
      process: {
        title: t('cases.metro.processTitle'),
        items: [
          t('cases.metro.process1'),
          t('cases.metro.process2'),
          t('cases.metro.process3'),
          t('cases.metro.process4')
        ]
      },
      results: {
        title: t('cases.metro.resultsTitle'),
        items: [
          t('cases.metro.result1'),
          t('cases.metro.result2'),
          t('cases.metro.result3'),
          t('cases.metro.result4')
        ]
      },
      highlights: [
        t('cases.metro.highlight1'),
        t('cases.metro.highlight2'),
        t('cases.metro.highlight3'),
        t('cases.metro.highlight4')
      ]
    },
    {
      id: 'pushkin',
      backgroundImage: 'https://ladobor.ru/olga/portfolio/img/case-pushkin.jpg',
      title: t('cases.pushkin.title'),
      background: t('cases.pushkin.background'),
      role: {
        title: t('cases.pushkin.roleTitle'),
        items: [
          t('cases.pushkin.role1'),
          t('cases.pushkin.role2'),
          t('cases.pushkin.role3'),
          t('cases.pushkin.role4')
        ]
      },
      process: {
        title: t('cases.pushkin.processTitle'),
        items: [
          t('cases.pushkin.process1'),
          t('cases.pushkin.process2'),
          t('cases.pushkin.process3'),
          t('cases.pushkin.process4')
        ]
      },
      results: {
        title: t('cases.pushkin.resultsTitle'),
        items: [
          t('cases.pushkin.result1'),
          t('cases.pushkin.result2'),
          t('cases.pushkin.result3'),
          t('cases.pushkin.result4')
        ]
      },
      highlights: [
        t('cases.pushkin.highlight1'),
        t('cases.pushkin.highlight2'),
        t('cases.pushkin.highlight3'),
        t('cases.pushkin.highlight4')
      ]
    }
  ];

  return (
    <section id="case-studies" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            {t('cases.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('cases.subtitle')}
          </p>
        </motion.div>

        {/* Case Studies */}
        <div className="space-y-16">
          {cases.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-2xl overflow-hidden"
            >
              {/* Case Study Header */}
              <div className="relative h-64 lg:h-80 overflow-hidden">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url('${caseStudy.backgroundImage}')`
                  }}
                />
                
                {/* Dark overlay like in portfolio */}
                <div className="absolute inset-0 bg-black/70"></div>
                
                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <h3 className="text-2xl mb-2">
                      {caseStudy.title}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="p-8">
                {/* Background */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-8"
                >
                  <h4 className="text-2xl mb-6 text-gray-900">
                    {caseStudy.id === 'aeroflot' ? t('cases.aeroflot.backgroundTitle') : 
                     caseStudy.id === 'mesh' ? t('cases.mesh.backgroundTitle') : 
                     caseStudy.id === 'metro' ? t('cases.metro.backgroundTitle') :
                     t('cases.pushkin.backgroundTitle')}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {caseStudy.background}
                  </p>
                </motion.div>

                {/* Expand/Collapse Button */}
                <div className="text-center mb-8">
                  <button
                    onClick={() => toggleCase(caseStudy.id)}
                    className="inline-flex items-center px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    {expandedCase === caseStudy.id ? 'Скрыть детали' : 'Показать детали'}
                    <svg 
                      className={`ml-2 w-4 h-4 transition-transform ${expandedCase === caseStudy.id ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>

                {/* Expandable Content */}
                <motion.div
                  initial={false}
                  animate={{
                    height: expandedCase === caseStudy.id ? "auto" : 0,
                    opacity: expandedCase === caseStudy.id ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ overflow: "hidden" }}
                >
                  {/* Content Grid */}
                  <div className="grid lg:grid-cols-2 gap-8 mb-8">
                    {/* My Role */}
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors"
                    >
                      <h4 className="text-2xl mb-6 text-gray-900">
                        {caseStudy.role.title}
                      </h4>
                      <ul className="space-y-3">
                        {caseStudy.role.items.map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-gray-600 leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* Process */}
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors"
                    >
                      <h4 className="text-2xl mb-6 text-gray-900">
                        {caseStudy.process.title}
                      </h4>
                      <ul className="space-y-3">
                        {caseStudy.process.items.map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-gray-600 leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                  {/* Results */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="bg-gray-50 p-6 rounded-xl mb-8 hover:bg-gray-100 transition-colors"
                  >
                    <h4 className="text-2xl mb-6 text-gray-900">
                      {caseStudy.results.title}
                    </h4>
                    <ul className="space-y-3">
                      {caseStudy.results.items.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-gray-600 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Highlights */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="border-t border-gray-200 pt-6"
                  >
                    <h4 className="text-2xl mb-6 text-gray-900">
                      {caseStudy.id === 'aeroflot' ? t('cases.aeroflot.highlightsTitle') : 
                       caseStudy.id === 'mesh' ? t('cases.mesh.highlightsTitle') : 
                       caseStudy.id === 'metro' ? t('cases.metro.highlightsTitle') :
                       t('cases.pushkin.highlightsTitle')}
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {caseStudy.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                          <div className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-gray-600 leading-relaxed">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}