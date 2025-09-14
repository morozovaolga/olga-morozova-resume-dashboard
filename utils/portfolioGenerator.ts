import { Packer } from 'docx';
import { WordPortfolioGenerator } from './generateWordPortfolio';

export function getPortfolioDataFromLanguageContext(t: (key: any) => string) {
  return {
    name: t('hero.title'),
    title: t('hero.subtitle'),
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
        t('about.p1'),
        t('about.p2'),
        t('about.p3'),
        t('about.systematicDesc'),
        t('about.resultDesc')
      ].filter(Boolean)
    },
    experience: {
      position: t('experience.position'),
      company: t('experience.company'),
      period: t('experience.period'),
      location: t('experience.location'),
      description: t('experience.description'),
      achievements: [
        t('experience.ach1'),
        t('experience.ach2'),
        t('experience.ach3'),
        t('experience.ach4'),
        t('experience.ach5'),
        t('experience.ach6')
      ].filter(Boolean)
    },
    skills: {
      professional: [
        t('skills.projectManagement'),
        t('skills.contentStrategy'),
        t('skills.productThinking'),
        t('skills.dataAnalytics'),
        t('skills.systemThinking'),
        t('skills.teamManagement')
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
          program: t('education.program1'),
          year: '2005'
        },
        {
          degree: t('education.degree2'),
          institution: t('education.institution2'),
          year: '2004'
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
      landingProjects: [
        {
          title: t('portfolio.loveBooks'),
          description: t('portfolio.loveBooksDesc'),
          url: "https://svetapp-promo.rusneb.ru/love"
        },
        {
          title: t('portfolio.readingInSky'),
          description: t('portfolio.readingInSkyDesc'),
          url: "https://svetapp-promo.rusneb.ru/chitaem-v-nebe"
        },
        {
          title: t('portfolio.gamzatov100'),
          description: t('portfolio.gamzatov100Desc'),
          url: "https://svetapp-promo.rusneb.ru/gamzatov2023"
        },
        {
          title: t('portfolio.newYear2025'),
          description: t('portfolio.newYear2025Desc'),
          url: "https://svetapp-promo.rusneb.ru/newyear2025"
        },
        {
          title: t('portfolio.pushkin225'),
          description: t('portfolio.pushkin225Desc'),
          url: "https://svetapp-promo.rusneb.ru/pushkin225"
        }
      ].filter(item => item.title && item.description),
      posters: [
        {
          title: t('portfolio.pushkinColoring'),
          description: t('portfolio.pushkinColoringDesc'),
          url: "https://disk.yandex.ru/d/XCfmQktXu9ytLg"
        },
        {
          title: t('portfolio.newYearDecorations'),
          description: t('portfolio.newYearDecorationsDesc'),
          url: "https://disk.yandex.ru/i/qhCeGcFgh3YsyA"
        },
        {
          title: t('portfolio.libraryInfographics'),
          description: t('portfolio.libraryInfographicsDesc'),
          url: "https://disk.yandex.ru/i/qhCeGcFgh3YsyA"
        }
      ].filter(item => item.title && item.description),
      manuals: [
        {
          title: t('portfolio.mobileLibraries2024'),
          description: t('portfolio.mobileLibraries2024Desc'),
          url: "https://disk.yandex.ru/d/S6RC-IAFt7DUhg"
        },
        {
          title: t('portfolio.brandedIllustrations'),
          description: t('portfolio.brandedIllustrationsDesc'),
          url: "https://www.figma.com/design/Ajp2RdBEAulVsDtnoMSCOi/Макеты-иллюстраций-для-Света?node-id=1219-4"
        }
      ].filter(item => item.title && item.description),
      digitalMerch: [
        {
          title: t('portfolio.telegramStickers'),
          description: t('portfolio.telegramStickersDesc'),
          url: "https://svetapp-promo.rusneb.ru/kopilka#stickers"
        }
      ].filter(item => item.title && item.description),
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
      ].filter(item => item.title && item.description),
      graphicDesign: [
        {
          title: t('portfolio.socialIllustrations'),
          description: t('portfolio.socialIllustrationsDesc'),
          url: "https://morozova31.tilda.ws/social"
        },
        {
          title: t('portfolio.bookCovers'), 
          description: t('portfolio.bookCoversDesc'),
          url: "https://morozova31.tilda.ws/covers"
        },
        {
          title: t('portfolio.postersAndDiplomas'),
          description: t('portfolio.postersAndDiplomasDesc'),
          url: "https://morozova31.tilda.ws/posters"
        }
      ].filter(item => item.title && item.description)
    },
    caseStudies: [
      {
        id: 'aeroflot',
        title: t('cases.aeroflot.title'),
        background: t('cases.aeroflot.background'),
        role: {
          title: t('cases.aeroflot.roleTitle'),
          items: [
            t('cases.aeroflot.role1'),
            t('cases.aeroflot.role2'),
            t('cases.aeroflot.role3'),
            t('cases.aeroflot.role4')
          ].filter(Boolean)
        },
        process: {
          title: t('cases.aeroflot.processTitle'),
          items: [
            t('cases.aeroflot.process1'),
            t('cases.aeroflot.process2'),
            t('cases.aeroflot.process3'),
            t('cases.aeroflot.process4')
          ].filter(Boolean)
        },
        results: {
          title: t('cases.aeroflot.resultsTitle'),
          items: [
            t('cases.aeroflot.result1'),
            t('cases.aeroflot.result2'),
            t('cases.aeroflot.result3'),
            t('cases.aeroflot.result4')
          ].filter(Boolean)
        }
      },
      {
        id: 'mesh',
        title: t('cases.mesh.title'),
        background: t('cases.mesh.background'),
        role: {
          title: t('cases.mesh.roleTitle'),
          items: [
            t('cases.mesh.role1'),
            t('cases.mesh.role2'),
            t('cases.mesh.role3'),
            t('cases.mesh.role4')
          ].filter(Boolean)
        },
        process: {
          title: t('cases.mesh.processTitle'),
          items: [
            t('cases.mesh.process1'),
            t('cases.mesh.process2'),
            t('cases.mesh.process3'),
            t('cases.mesh.process4')
          ].filter(Boolean)
        },
        results: {
          title: t('cases.mesh.resultsTitle'),
          items: [
            t('cases.mesh.result1'),
            t('cases.mesh.result2'),
            t('cases.mesh.result3'),
            t('cases.mesh.result4')
          ].filter(Boolean)
        }
      },
      {
        id: 'metro',
        title: t('cases.metro.title'),
        background: t('cases.metro.background'),
        role: {
          title: t('cases.metro.roleTitle'),
          items: [
            t('cases.metro.role1'),
            t('cases.metro.role2'),
            t('cases.metro.role3'),
            t('cases.metro.role4')
          ].filter(Boolean)
        },
        process: {
          title: t('cases.metro.processTitle'),
          items: [
            t('cases.metro.process1'),
            t('cases.metro.process2'),
            t('cases.metro.process3'),
            t('cases.metro.process4')
          ].filter(Boolean)
        },
        results: {
          title: t('cases.metro.resultsTitle'),
          items: [
            t('cases.metro.result1'),
            t('cases.metro.result2'),
            t('cases.metro.result3'),
            t('cases.metro.result4')
          ].filter(Boolean)
        }
      },
      {
        id: 'pushkin',
        title: t('cases.pushkin.title'),
        background: t('cases.pushkin.background'),
        role: {
          title: t('cases.pushkin.roleTitle'),
          items: [
            t('cases.pushkin.role1'),
            t('cases.pushkin.role2'),
            t('cases.pushkin.role3'),
            t('cases.pushkin.role4')
          ].filter(Boolean)
        },
        process: {
          title: t('cases.pushkin.processTitle'),
          items: [
            t('cases.pushkin.process1'),
            t('cases.pushkin.process2'),
            t('cases.pushkin.process3'),
            t('cases.pushkin.process4')
          ].filter(Boolean)
        },
        results: {
          title: t('cases.pushkin.resultsTitle'),
          items: [
            t('cases.pushkin.result1'),
            t('cases.pushkin.result2'),
            t('cases.pushkin.result3'),
            t('cases.pushkin.result4')
          ].filter(Boolean)
        }
      }
    ]
  };
}

export async function generateWordDocument(t: (key: any) => string, currentLanguage: string = 'ru'): Promise<Blob> {
  const portfolioData = getPortfolioDataFromLanguageContext(t);
  const language = (currentLanguage === 'en' || currentLanguage === 'fr') ? currentLanguage : 'ru';
  const generator = new WordPortfolioGenerator(portfolioData, language as any);
  const doc = generator.generateDocument();
  
  // Use toBlob for browser environment instead of toBuffer
  const blob = await Packer.toBlob(doc);
  return blob;
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
