// Централизованные переводы для генерации DOCX документов
// Этот файл содержит все ключи переводов, используемые в WordPortfolioGenerator

export const docxTranslations = {
  en: {
    // Document structure
    'document.footer': 'Document generated on',
    
    // Contact section
    'contact.sectionTitle': 'Contact Information',
    'contact.phone': 'Phone',
    'contact.email': 'Email', 
    'contact.telegram': 'Telegram',
    'contact.location': 'Location',
    
    // About section
    'about.sectionTitle': 'About Me',
    'about.highlights': 'Key Qualities:',
    
    // Experience section
    'experience.sectionTitle': 'Professional Experience',
    'experience.achievements': 'Key Achievements:',
    
    // Skills section
    'skills.sectionTitle': 'Key Competencies',
    'skills.professional': 'Professional Skills:',
    'skills.technical': 'Technical Skills:',
    'skills.languages': 'Language Skills:',
    
    // Education section
    'education.sectionTitle': 'Education and Professional Development',
    'education.degrees': 'Education:',
    'education.certifications': 'Certifications:',
    
    // Case studies section
    'cases.sectionTitle': 'Case Studies and Projects',
    
    // Portfolio section
    'portfolio.sectionTitle': 'Portfolio',
    'portfolio.landingProjects': 'Landing Pages',
    'portfolio.posters': 'Posters and Infographics',
    'portfolio.manuals': 'Manuals and Guides',
    'portfolio.digitalMerch': 'Digital Merchandise',
    'portfolio.texts': 'Texts and Publications',
    'portfolio.graphicDesign': 'Graphic Design',
    'portfolio.linkPrefix': 'Link:'
  },
  
  ru: {
    // Document structure
    'document.footer': 'Документ сгенерирован',
    
    // Contact section
    'contact.sectionTitle': 'Контактная информация',
    'contact.phone': 'Телефон',
    'contact.email': 'Email',
    'contact.telegram': 'Telegram', 
    'contact.location': 'Местоположение',
    
    // About section
    'about.sectionTitle': 'О себе',
    'about.highlights': 'Ключевые качества:',
    
    // Experience section
    'experience.sectionTitle': 'Профессиональный опыт',
    'experience.achievements': 'Ключевые достижения:',
    
    // Skills section
    'skills.sectionTitle': 'Ключевые компетенции',
    'skills.professional': 'Профессиональные навыки:',
    'skills.technical': 'Технические компетенции:',
    'skills.languages': 'Языковые навыки:',
    
    // Education section
    'education.sectionTitle': 'Образование и повышение квалификации',
    'education.degrees': 'Образование:',
    'education.certifications': 'Повышение квалификации:',
    
    // Case studies section
    'cases.sectionTitle': 'Кейсы и проекты',
    
    // Portfolio section
    'portfolio.sectionTitle': 'Портфолио',
    'portfolio.landingProjects': 'Лендинги и промо-страницы',
    'portfolio.posters': 'Постеры и инфографики',
    'portfolio.manuals': 'Пособия и руководства',
    'portfolio.digitalMerch': 'Цифровой мерч',
    'portfolio.texts': 'Тексты и публикации',
    'portfolio.graphicDesign': 'Графический дизайн',
    'portfolio.linkPrefix': 'Ссылка:'
  },
  
  fr: {
    // Document structure
    'document.footer': 'Document généré le',
    
    // Contact section
    'contact.sectionTitle': 'Informations de contact',
    'contact.phone': 'Téléphone',
    'contact.email': 'Email',
    'contact.telegram': 'Telegram',
    'contact.location': 'Lieu',
    
    // About section
    'about.sectionTitle': 'À propos de moi',
    'about.highlights': 'Qualités clés :',
    
    // Experience section
    'experience.sectionTitle': 'Expérience professionnelle',
    'experience.achievements': 'Réalisations clés :',
    
    // Skills section
    'skills.sectionTitle': 'Compétences clés',
    'skills.professional': 'Compétences professionnelles :',
    'skills.technical': 'Compétences techniques :',
    'skills.languages': 'Compétences linguistiques :',
    
    // Education section
    'education.sectionTitle': 'Formation et développement professionnel',
    'education.degrees': 'Formation :',
    'education.certifications': 'Certifications :',
    
    // Case studies section
    'cases.sectionTitle': 'Études de cas et projets',
    
    // Portfolio section
    'portfolio.sectionTitle': 'Portfolio',
    'portfolio.landingProjects': 'Pages d\'atterrissage',
    'portfolio.posters': 'Affiches et infographies',
    'portfolio.manuals': 'Manuels et guides',
    'portfolio.digitalMerch': 'Merchandising numérique',
    'portfolio.texts': 'Textes et publications',
    'portfolio.graphicDesign': 'Design graphique',
    'portfolio.linkPrefix': 'Lien :'
  }
} as const;

// Типы для TypeScript
export type DocxTranslationKey = keyof typeof docxTranslations.en;
export type Language = keyof typeof docxTranslations;

// Утилитарная функция для получения перевода
export function getDocxTranslation(language: Language, key: DocxTranslationKey): string {
  return docxTranslations[language]?.[key] || docxTranslations.en[key] || key;
}

// Маппинг из ключей LanguageContext в ключи DOCX переводов
export const keyMapping = {
  // Contact mappings
  'contact.title': 'contact.sectionTitle',
  'contact.phone': 'contact.phone',
  'contact.email': 'contact.email',
  'contact.telegram': 'contact.telegram',
  'contact.location': 'contact.location',
  
  // About mappings
  'about.title': 'about.sectionTitle',
  'about.highlights': 'about.highlights',
  
  // Experience mappings
  'experience.title': 'experience.sectionTitle', 
  'experience.achievements': 'experience.achievements',
  
  // Skills mappings
  'skills.title': 'skills.sectionTitle',
  'skills.professional': 'skills.professional',
  'skills.technical': 'skills.technical', 
  'skills.languages': 'skills.languages',
  
  // Education mappings
  'education.title': 'education.sectionTitle',
  'education.education': 'education.degrees',
  'education.certifications': 'education.certifications',
  
  // Cases mappings
  'cases.title': 'cases.sectionTitle',
  
  // Portfolio mappings
  'portfolio.title': 'portfolio.sectionTitle'
} as const;
