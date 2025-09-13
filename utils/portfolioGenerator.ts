import { Packer } from 'docx';
import { WordPortfolioGenerator } from './generateWordPortfolio';

export function getPortfolioDataFromLanguageContext(t: (key: string) => string) {
  return {
    name: t('hero.name'),
    title: t('hero.title'),
    description: t('hero.description'),
    contacts: {
      phone: "+7 (916) 841-32-16",
      email: "morozova31@gmail.com",
      telegram: "@oljona",
      location: t('hero.location') || "Москва / Удалённо"
    },
    about: {
      description: t('about.description'),
      experience: t('about.experience'),
      points: [
        t('about.point1'),
        t('about.point2'),
        t('about.point3'),
        t('about.point4'),
        t('about.point5')
      ].filter(Boolean)
    },
    experience: {
      position: t('experience.position'),
      company: t('experience.company'),
      period: t('experience.period'),
      location: t('experience.location'),
      description: t('experience.description'),
      achievements: [
        t('experience.achievement1'),
        t('experience.achievement2'),
        t('experience.achievement3'),
        t('experience.achievement4'),
        t('experience.achievement5'),
        t('experience.achievement6')
      ].filter(Boolean)
    },
    skills: {
      professional: [
        t('skills.project_management'),
        t('skills.content_strategy'),
        t('skills.product_thinking'),
        t('skills.data_analytics'),
        t('skills.system_thinking'),
        t('skills.team_management')
      ].filter(Boolean),
      technical: [
        'Tilda',
        'Figma', 
        'Kaiten',
        'Google Analytics',
        'Power BI',
        'Python',
        'HTML/CSS',
        'JavaScript'
      ],
      languages: [
        t('skills.russian'),
        t('skills.english'),
        t('skills.french')
      ].filter(Boolean)
    },
    education: {
      degrees: [
        {
          degree: t('education.degree1'),
          institution: t('education.institution1'),
          program: t('education.program1')
        },
        {
          degree: t('education.degree2'),
          institution: t('education.institution2')
        }
      ].filter(deg => deg.degree && deg.institution),
      certifications: [
        t('education.cert1'),
        t('education.cert2'),
        t('education.cert3'),
        t('education.cert4'),
        t('education.cert5')
      ].filter(Boolean)
    },
    portfolio: {
      texts: [
        {
          title: t('portfolio.texts1'),
          description: t('portfolio.texts1Desc'),
          url: t('portfolio.texts1Url')
        },
        {
          title: t('portfolio.texts2'),
          description: t('portfolio.texts2Desc'),
          url: t('portfolio.texts2Url')
        },
        {
          title: t('portfolio.texts3'),
          description: t('portfolio.texts3Desc'),
          url: t('portfolio.texts3Url')
        },
        {
          title: t('portfolio.texts4'),
          description: t('portfolio.texts4Desc'),
          url: t('portfolio.texts4Url')
        },
        {
          title: t('portfolio.texts5'),
          description: t('portfolio.texts5Desc'),
          url: t('portfolio.texts5Url')
        },
        {
          title: t('portfolio.texts6'),
          description: t('portfolio.texts6Desc'),
          url: t('portfolio.texts6Url')
        },
        {
          title: t('portfolio.texts7'),
          description: t('portfolio.texts7Desc'),
          url: t('portfolio.texts7Url')
        },
        {
          title: t('portfolio.texts8'),
          description: t('portfolio.texts8Desc'),
          url: t('portfolio.texts8Url')
        },
        {
          title: t('portfolio.texts9'),
          description: t('portfolio.texts9Desc'),
          url: t('portfolio.texts9Url')
        }
      ].filter(text => text.title && text.description)
    }
  };
}

export async function generateWordDocument(t: (key: string) => string): Promise<Blob> {
  const portfolioData = getPortfolioDataFromLanguageContext(t);
  const generator = new WordPortfolioGenerator(portfolioData);
  const doc = generator.generateDocument();
  
  const buffer = await Packer.toBuffer(doc);
  return new Blob([new Uint8Array(buffer)], { 
    type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' 
  });
}

export function downloadWordDocument(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
