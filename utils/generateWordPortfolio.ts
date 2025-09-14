import { 
  Document, 
  Paragraph, 
  TextRun, 
  AlignmentType, 
  BorderStyle,
  SectionType,
  ISectionOptions,
  convertMillimetersToTwip
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
      year?: string;
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
      children: [
        new TextRun({
          text: text,
          bold: true,
          size: 24, // 12pt шрифт для основных заголовков
        }),
      ],
      spacing: {
        before: 200, // Еще больше уменьшили
        after: 100,  // Еще больше уменьшили
      },
      border: {
        bottom: {
          color: "4472C4",
          size: 3, // Еще тоньше линия
          style: BorderStyle.SINGLE,
        },
      },
    });
  }

  private createSubSectionTitle(text: string): Paragraph {
    return new Paragraph({
      children: [
        new TextRun({
          text: text,
          bold: true,
          size: 22, // 11pt шрифт для подзаголовков
        }),
      ],
      spacing: {
        before: 160, // Уменьшили еще больше
        after: 80,   // Уменьшили еще больше
      },
    });
  }

  private createBodyParagraph(text: string, bold: boolean = false): Paragraph {
    return new Paragraph({
      children: [
        new TextRun({
          text: text,
          bold: bold,
          size: 18, // 9pt шрифт (уменьшили с 20)
        }),
      ],
      spacing: {
        after: 60, // Уменьшили с 80
      },
    });
  }

  private createBulletPoint(text: string): Paragraph {
    return new Paragraph({
      children: [
        new TextRun({
          text: `• ${text}`,
          size: 18, // 9pt шрифт (уменьшили с 20)
        }),
      ],
      spacing: {
        after: 40, // Уменьшили с 60
      },
      indent: {
        left: 240, // Уменьшили отступ с 280
      },
    });
  }

  private createProjectBulletPoint(title: string, description: string, url?: string): Paragraph[] {
    const paragraphs = [
      new Paragraph({
        children: [
          new TextRun({
            text: `• ${title}`,
            bold: true,
            size: 17, // 8.5pt для заголовков проектов (уменьшили с 19)
          }),
        ],
        spacing: {
          after: 20, // Уменьшили с 30
        },
        indent: {
          left: 240, // Уменьшили с 280
        },
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: description,
            size: 16, // 8pt для описаний (уменьшили с 18)
          }),
        ],
        spacing: {
          after: url ? 15 : 40, // Уменьшили
        },
        indent: {
          left: 320, // Уменьшили с 360
        },
      }),
    ];

    if (url) {
      paragraphs.push(
        new Paragraph({
          children: [
            new TextRun({
              text: `${this.t('portfolio.linkPrefix')} ${url}`,
              size: 14, // 7pt для ссылок (уменьшили с 16)
              color: "4472C4",
              italics: true,
            }),
          ],
          spacing: {
            after: 40, // Уменьшили с 60
          },
          indent: {
            left: 320, // Уменьшили с 360
          },
        })
      );
    }

    return paragraphs;
  }

  private createCompactBulletPoint(text: string): Paragraph {
    return new Paragraph({
      children: [
        new TextRun({
          text: `• ${text}`,
          size: 16, // 8pt шрифт для компактности (уменьшили с 18)
        }),
      ],
      spacing: {
        after: 30, // Уменьшили с 40
      },
      indent: {
        left: 240, // Уменьшили с 280
      },
    });
  }

  public generateDocument(): Document {
    const children = [
      // Заголовок
      new Paragraph({
        children: [
          new TextRun({
            text: this.data.name,
            bold: true,
            size: 28, // 14pt шрифт для имени
          }),
        ],
        alignment: AlignmentType.CENTER,
        spacing: {
          after: 80, // Уменьшили с 120
        },
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: this.data.title,
            size: 20, // 10pt шрифт (уменьшили с 22)
            bold: true,
          }),
        ],
        alignment: AlignmentType.CENTER,
        spacing: {
          after: 80, // Уменьшили с 100
        },
      }),
      this.createBodyParagraph(this.data.description),

      // Контакты
      this.createSectionTitle(this.t('contact.sectionTitle')),
      this.createCompactBulletPoint(`${this.t('contact.phone')}: ${this.data.contacts.phone}`),
      this.createCompactBulletPoint(`${this.t('contact.email')}: ${this.data.contacts.email}`),
      this.createCompactBulletPoint(`${this.t('contact.telegram')}: ${this.data.contacts.telegram}`),
      this.createCompactBulletPoint(`${this.t('contact.location')}: ${this.data.contacts.location}`),

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
      this.createSubSectionTitle(this.t('skills.professional'))
    );
    
    // Профессиональные навыки как маркированный список
    this.data.skills.professional.forEach(skill => {
      children.push(this.createCompactBulletPoint(skill));
    });

    children.push(this.createSubSectionTitle(this.t('skills.technical')));
    
    // Технические навыки как маркированный список
    this.data.skills.technical.forEach(skill => {
      children.push(this.createCompactBulletPoint(skill));
    });

    children.push(this.createSubSectionTitle(this.t('skills.languages')));
    
    // Языки как маркированный список
    this.data.skills.languages.forEach(lang => {
      children.push(this.createCompactBulletPoint(lang));
    });

    // Образование
    children.push(
      this.createSectionTitle(this.t('education.sectionTitle')),
      this.createSubSectionTitle(this.t('education.degrees'))
    );

    this.data.education.degrees.forEach(degree => {
      children.push(
        this.createBodyParagraph(`${degree.degree}\n${degree.institution}${degree.program ? `\nПрограмма: ${degree.program}` : ''}${degree.year ? `\nГод окончания: ${degree.year}` : ''}`)
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
        const projectParagraphs = this.createProjectBulletPoint(item.title, item.description, item.url);
        children.push(...projectParagraphs);
      });
    }

    // Постеры
    if (this.data.portfolio.posters && this.data.portfolio.posters.length > 0) {
      children.push(this.createSubSectionTitle(this.t('portfolio.posters')));
      this.data.portfolio.posters.forEach(item => {
        const projectParagraphs = this.createProjectBulletPoint(item.title, item.description, item.url);
        children.push(...projectParagraphs);
      });
    }

    // Пособия
    if (this.data.portfolio.manuals && this.data.portfolio.manuals.length > 0) {
      children.push(this.createSubSectionTitle(this.t('portfolio.manuals')));
      this.data.portfolio.manuals.forEach(item => {
        const projectParagraphs = this.createProjectBulletPoint(item.title, item.description, item.url);
        children.push(...projectParagraphs);
      });
    }

    // Цифровой мерч
    if (this.data.portfolio.digitalMerch && this.data.portfolio.digitalMerch.length > 0) {
      children.push(this.createSubSectionTitle(this.t('portfolio.digitalMerch')));
      this.data.portfolio.digitalMerch.forEach(item => {
        const projectParagraphs = this.createProjectBulletPoint(item.title, item.description, item.url);
        children.push(...projectParagraphs);
      });
    }

    // Тексты
    if (this.data.portfolio.texts && this.data.portfolio.texts.length > 0) {
      children.push(this.createSubSectionTitle(this.t('portfolio.texts')));
      this.data.portfolio.texts.forEach(item => {
        const projectParagraphs = this.createProjectBulletPoint(item.title, item.description, item.url);
        children.push(...projectParagraphs);
      });
    }

    // Графический дизайн
    if (this.data.portfolio.graphicDesign && this.data.portfolio.graphicDesign.length > 0) {
      children.push(this.createSubSectionTitle(this.t('portfolio.graphicDesign')));
      this.data.portfolio.graphicDesign.forEach(item => {
        const projectParagraphs = this.createProjectBulletPoint(item.title, item.description, item.url);
        children.push(...projectParagraphs);
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
        page: {
          margin: {
            top: convertMillimetersToTwip(10),    // Еще меньше поля до 1см
            right: convertMillimetersToTwip(10),
            bottom: convertMillimetersToTwip(10),
            left: convertMillimetersToTwip(10),
          },
        },
      },
      children: children,
    };

    const doc = new Document({
      sections: [section],
    });

    return doc;
  }
}
