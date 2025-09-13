import { 
  Document, 
  Paragraph, 
  TextRun, 
  HeadingLevel, 
  AlignmentType, 
  BorderStyle,
  SectionType,
  ISectionOptions
} from 'docx';
import { getDocxTranslation, type Language } from '../translations/docxTranslations';

interface PortfolioData {
  name: string;
  title: string;
  description: string;
  contacts: {
    phone: string;
    email: string;
    telegram: string;
    location: string;
  };
  about: {
    description: string;
    experience: string;
    points: string[];
  };
  experience: {
    position: string;
    company: string;
    period: string;
    location: string;
    description: string;
    achievements: string[];
  };
  skills: {
    professional: string[];
    technical: string[];
    languages: string[];
  };
  education: {
    degrees: Array<{
      degree: string;
      institution: string;
      program?: string;
    }>;
    certifications: string[];
  };
  portfolio: {
    landingProjects: Array<{
      title: string;
      description: string;
      url?: string;
    }>;
    posters: Array<{
      title: string;
      description: string;
      url?: string;
    }>;
    manuals: Array<{
      title: string;
      description: string;
      url?: string;
    }>;
    digitalMerch: Array<{
      title: string;
      description: string;
      url?: string;
    }>;
    texts: Array<{
      title: string;
      description: string;
      url?: string;
    }>;
    graphicDesign: Array<{
      title: string;
      description: string;
      url?: string;
    }>;
  };
  caseStudies: Array<{
    id: string;
    title: string;
    background: string;
    role: {
      title: string;
      items: string[];
    };
    process: {
      title: string;
      items: string[];
    };
    results: {
      title: string;
      items: string[];
    };
  }>;
}

export class WordPortfolioGenerator {
  private data: PortfolioData;
  private currentLanguage: Language;

  constructor(data: PortfolioData, currentLanguage: Language = 'ru') {
    this.data = data;
    this.currentLanguage = currentLanguage;
  }

  private t(key: string): string {
    return getDocxTranslation(this.currentLanguage, key as any) || key;
  }

  private createSectionTitle(text: string): Paragraph {
    return new Paragraph({
      text: text,
      heading: HeadingLevel.HEADING_1,
      spacing: {
        before: 400,
        after: 200,
      },
      border: {
        bottom: {
          color: "4472C4",
          size: 6,
          style: BorderStyle.SINGLE,
        },
      },
    });
  }

  private createSubSectionTitle(text: string): Paragraph {
    return new Paragraph({
      text: text,
      heading: HeadingLevel.HEADING_2,
      spacing: {
        before: 300,
        after: 150,
      },
    });
  }

  private createBodyParagraph(text: string, bold: boolean = false): Paragraph {
    return new Paragraph({
      children: [
        new TextRun({
          text: text,
          bold: bold,
        }),
      ],
      spacing: {
        after: 120,
      },
    });
  }

  private createBulletPoint(text: string): Paragraph {
    return new Paragraph({
      children: [
        new TextRun({
          text: `• ${text}`,
        }),
      ],
      spacing: {
        after: 80,
      },
      indent: {
        left: 360,
      },
    });
  }

  public generateDocument(): Document {
    const children = [
      // Заголовок
      new Paragraph({
        text: this.data.name,
        heading: HeadingLevel.TITLE,
        alignment: AlignmentType.CENTER,
        spacing: {
          after: 200,
        },
      }),
      new Paragraph({
        text: this.data.title,
        alignment: AlignmentType.CENTER,
        spacing: {
          after: 150,
        },
      }),
      this.createBodyParagraph(this.data.description),

      // Контакты
      this.createSectionTitle(this.t('contact.sectionTitle')),
      this.createBodyParagraph(`${this.t('contact.phone')}: ${this.data.contacts.phone}`),
      this.createBodyParagraph(`${this.t('contact.email')}: ${this.data.contacts.email}`),
      this.createBodyParagraph(`${this.t('contact.telegram')}: ${this.data.contacts.telegram}`),
      this.createBodyParagraph(`${this.t('contact.location')}: ${this.data.contacts.location}`),

      // О себе
      this.createSectionTitle(this.t('about.sectionTitle')),
      this.createBodyParagraph(this.data.about.description),
      this.createBodyParagraph(this.data.about.experience),
      this.createSubSectionTitle(this.t('about.highlights')),
    ];

    // Добавляем пункты о себе
    this.data.about.points.forEach(point => {
      children.push(this.createBulletPoint(point));
    });

    // Опыт работы
    children.push(
      this.createSectionTitle(this.t('experience.sectionTitle')),
      this.createBodyParagraph(this.data.experience.position, true),
      this.createBodyParagraph(`${this.data.experience.company} • ${this.data.experience.period} • ${this.data.experience.location}`),
      this.createBodyParagraph(this.data.experience.description),
      this.createSubSectionTitle(this.t('experience.achievements'))
    );

    this.data.experience.achievements.forEach(achievement => {
      children.push(this.createBulletPoint(achievement));
    });

    // Навыки
    children.push(
      this.createSectionTitle(this.t('skills.sectionTitle')),
      this.createSubSectionTitle(this.t('skills.professional')),
      this.createBodyParagraph(this.data.skills.professional.join(" • ")),
      this.createSubSectionTitle(this.t('skills.technical')),
      this.createBodyParagraph(this.data.skills.technical.join(" • ")),
      this.createSubSectionTitle(this.t('skills.languages')),
      this.createBodyParagraph(this.data.skills.languages.join(" • "))
    );

    // Образование
    children.push(
      this.createSectionTitle(this.t('education.sectionTitle')),
      this.createSubSectionTitle(this.t('education.degrees'))
    );

    this.data.education.degrees.forEach(degree => {
      children.push(
        this.createBodyParagraph(`${degree.degree}\n${degree.institution}${degree.program ? `\nПрограмма: ${degree.program}` : ''}`)
      );
    });

    children.push(this.createSubSectionTitle(this.t('education.certifications')));

    this.data.education.certifications.forEach(cert => {
      children.push(this.createBulletPoint(cert));
    });

    // Кейсы
    if (this.data.caseStudies && this.data.caseStudies.length > 0) {
      children.push(this.createSectionTitle(this.t('cases.sectionTitle')));

      this.data.caseStudies.forEach(caseStudy => {
        children.push(
          this.createSubSectionTitle(caseStudy.title),
          this.createBodyParagraph(caseStudy.background)
        );

        // Роль
        if (caseStudy.role && caseStudy.role.items.length > 0) {
          children.push(this.createSubSectionTitle(caseStudy.role.title));
          caseStudy.role.items.forEach(item => {
            children.push(this.createBulletPoint(item));
          });
        }

        // Процесс
        if (caseStudy.process && caseStudy.process.items.length > 0) {
          children.push(this.createSubSectionTitle(caseStudy.process.title));
          caseStudy.process.items.forEach(item => {
            children.push(this.createBulletPoint(item));
          });
        }

        // Результаты
        if (caseStudy.results && caseStudy.results.items.length > 0) {
          children.push(this.createSubSectionTitle(caseStudy.results.title));
          caseStudy.results.items.forEach(item => {
            children.push(this.createBulletPoint(item));
          });
        }

        // Добавляем отступ между кейсами
        children.push(new Paragraph({ text: "" }));
      });
    }

    // Портфолио
    children.push(this.createSectionTitle(this.t('portfolio.sectionTitle')));

    // Лендинги
    if (this.data.portfolio.landingProjects && this.data.portfolio.landingProjects.length > 0) {
      children.push(this.createSubSectionTitle(this.t('portfolio.landingProjects')));
      this.data.portfolio.landingProjects.forEach(item => {
        children.push(
          this.createSubSectionTitle(item.title),
          this.createBodyParagraph(item.description)
        );
        if (item.url) {
          children.push(this.createBodyParagraph(`${this.t('portfolio.linkPrefix')} ${item.url}`));
        }
      });
    }

    // Постеры
    if (this.data.portfolio.posters && this.data.portfolio.posters.length > 0) {
      children.push(this.createSubSectionTitle(this.t('portfolio.posters')));
      this.data.portfolio.posters.forEach(item => {
        children.push(
          this.createSubSectionTitle(item.title),
          this.createBodyParagraph(item.description)
        );
        if (item.url) {
          children.push(this.createBodyParagraph(`${this.t('portfolio.linkPrefix')} ${item.url}`));
        }
      });
    }

    // Пособия
    if (this.data.portfolio.manuals && this.data.portfolio.manuals.length > 0) {
      children.push(this.createSubSectionTitle(this.t('portfolio.manuals')));
      this.data.portfolio.manuals.forEach(item => {
        children.push(
          this.createSubSectionTitle(item.title),
          this.createBodyParagraph(item.description)
        );
        if (item.url) {
          children.push(this.createBodyParagraph(`${this.t('portfolio.linkPrefix')} ${item.url}`));
        }
      });
    }

    // Цифровой мерч
    if (this.data.portfolio.digitalMerch && this.data.portfolio.digitalMerch.length > 0) {
      children.push(this.createSubSectionTitle(this.t('portfolio.digitalMerch')));
      this.data.portfolio.digitalMerch.forEach(item => {
        children.push(
          this.createSubSectionTitle(item.title),
          this.createBodyParagraph(item.description)
        );
        if (item.url) {
          children.push(this.createBodyParagraph(`${this.t('portfolio.linkPrefix')} ${item.url}`));
        }
      });
    }

    // Тексты
    if (this.data.portfolio.texts && this.data.portfolio.texts.length > 0) {
      children.push(this.createSubSectionTitle(this.t('portfolio.texts')));
      this.data.portfolio.texts.forEach(item => {
        children.push(
          this.createSubSectionTitle(item.title),
          this.createBodyParagraph(item.description)
        );
        if (item.url) {
          children.push(this.createBodyParagraph(`${this.t('portfolio.linkPrefix')} ${item.url}`));
        }
      });
    }

    // Графический дизайн
    if (this.data.portfolio.graphicDesign && this.data.portfolio.graphicDesign.length > 0) {
      children.push(this.createSubSectionTitle(this.t('portfolio.graphicDesign')));
      this.data.portfolio.graphicDesign.forEach(item => {
        children.push(
          this.createSubSectionTitle(item.title),
          this.createBodyParagraph(item.description)
        );
        if (item.url) {
          children.push(this.createBodyParagraph(`${this.t('portfolio.linkPrefix')} ${item.url}`));
        }
      });
    }

    // Подвал
    children.push(
      new Paragraph({
        text: `${this.t('document.footer')} ${new Date().toLocaleDateString(this.currentLanguage === 'ru' ? 'ru-RU' : this.currentLanguage === 'fr' ? 'fr-FR' : 'en-US')}`,
        alignment: AlignmentType.CENTER,
        spacing: {
          before: 400,
        },
      })
    );

    const section: ISectionOptions = {
      properties: {
        type: SectionType.CONTINUOUS,
      },
      children: children,
    };

    const doc = new Document({
      sections: [section],
    });

    return doc;
  }
}
