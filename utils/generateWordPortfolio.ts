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
    texts: Array<{
      title: string;
      description: string;
      url?: string;
    }>;
  };
}

export class WordPortfolioGenerator {
  private data: PortfolioData;

  constructor(data: PortfolioData) {
    this.data = data;
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
      this.createSectionTitle("Контактная информация"),
      this.createBodyParagraph(`Телефон: ${this.data.contacts.phone}`),
      this.createBodyParagraph(`Email: ${this.data.contacts.email}`),
      this.createBodyParagraph(`Telegram: ${this.data.contacts.telegram}`),
      this.createBodyParagraph(`Местоположение: ${this.data.contacts.location}`),

      // О себе
      this.createSectionTitle("О себе"),
      this.createBodyParagraph(this.data.about.description),
      this.createBodyParagraph(this.data.about.experience),
      this.createSubSectionTitle("Ключевые качества:"),
    ];

    // Добавляем пункты о себе
    this.data.about.points.forEach(point => {
      children.push(this.createBulletPoint(point));
    });

    // Опыт работы
    children.push(
      this.createSectionTitle("Профессиональный опыт"),
      this.createBodyParagraph(this.data.experience.position, true),
      this.createBodyParagraph(`${this.data.experience.company} • ${this.data.experience.period} • ${this.data.experience.location}`),
      this.createBodyParagraph(this.data.experience.description),
      this.createSubSectionTitle("Ключевые достижения:")
    );

    this.data.experience.achievements.forEach(achievement => {
      children.push(this.createBulletPoint(achievement));
    });

    // Навыки
    children.push(
      this.createSectionTitle("Ключевые компетенции"),
      this.createSubSectionTitle("Профессиональные навыки:"),
      this.createBodyParagraph(this.data.skills.professional.join(" • ")),
      this.createSubSectionTitle("Технические компетенции:"),
      this.createBodyParagraph(this.data.skills.technical.join(" • ")),
      this.createSubSectionTitle("Языковые навыки:"),
      this.createBodyParagraph(this.data.skills.languages.join(" • "))
    );

    // Образование
    children.push(
      this.createSectionTitle("Образование и повышение квалификации"),
      this.createSubSectionTitle("Образование:")
    );

    this.data.education.degrees.forEach(degree => {
      children.push(
        this.createBodyParagraph(`${degree.degree}\n${degree.institution}${degree.program ? `\nПрограмма: ${degree.program}` : ''}`)
      );
    });

    children.push(this.createSubSectionTitle("Повышение квалификации:"));

    this.data.education.certifications.forEach(cert => {
      children.push(this.createBulletPoint(cert));
    });

    // Портфолио
    children.push(this.createSectionTitle("Тексты и публикации"));

    this.data.portfolio.texts.forEach(text => {
      children.push(
        this.createSubSectionTitle(text.title),
        this.createBodyParagraph(text.description)
      );
      if (text.url) {
        children.push(this.createBodyParagraph(`Ссылка: ${text.url}`));
      }
    });

    // Подвал
    children.push(
      new Paragraph({
        text: `Документ сгенерирован ${new Date().toLocaleDateString('ru-RU')}`,
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
