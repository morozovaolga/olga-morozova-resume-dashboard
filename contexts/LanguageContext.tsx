import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ru' | 'fr';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Переводы
const translations = {
  en: {
  // Education Section
  'education.title': 'Education and Professional Development',
  'education.education': 'Education',
  'education.certifications': 'Certifications',
  'education.degree1': 'Master of Journalism',
  'education.institution1': 'Lomonosov Moscow State University',
  'education.program1': 'International program: Mastère franco-russe de journalisme',
  'education.degree2': 'Philology',
  'education.institution2': 'Novosibirsk State University',
  'education.cert1': 'Data Analyst',
  'education.cert2': 'Product Analytics',
  'education.cert3': 'Agile Development (Agile) with Jira',
  'education.cert4': 'Copyright Law',
  'education.certOrg4': 'VOIS',
  'education.cert5': 'Data Analysis Tools',
  'education.certOrg5': 'Yandex Practicum',
  'education.cert6': 'Project Manager',
  'education.certOrg6': 'Yandex Practicum',
  'education.cert7': 'Content Marketing',
  'education.certOrg7': 'Netology',
  // About highlights
  'about.systematic': 'Systematic approach',
  'about.systematicDesc': 'I build processes, automate routine, and create order in information chaos.',
  'about.result': 'Result-oriented',
  'about.resultDesc': 'I focus on measurable results and business value.',
  'about.team': 'Teamwork',
  'about.teamDesc': 'I know how to build and motivate teams for complex projects.',
  'about.projects': 'Successful projects',
  'about.projectsDesc': 'I have launched and managed dozens of digital products and services.',
  'about.p1': 'I help organizations and people find, structure, and use knowledge.',
  'about.p2': 'My experience includes digital libraries, educational platforms, and content strategies.',
  'about.p3': 'I am passionate about making knowledge accessible and useful for everyone.',
  'about.desiredTitle': 'Desired Position',
  'about.desiredPosition': 'Digital Knowledge Manager / Content Strategist',
  'about.employment': 'Full-time, remote or hybrid, project work.',
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.skills': 'Skills',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Olga Morozova',
  'hero.subtitle': 'Editor-in-Chief, Content Strategist, and Project Manager',
  'hero.description': 'I help companies create strong content that drives audience and business growth.',
    'hero.phone': '+7 (916) 841-32-16',
    'hero.email': 'morozova31@gmail.com',
    'hero.telegram': '@oljona',
    'hero.location': 'Moscow / Remote',
    'hero.portfolioButton': 'View Portfolio',
    'hero.githubButton': 'GitHub',
    
  // About Section
  'about.title': 'Who am I',
  'about.description': 'Digital knowledge manager with 10+ years of experience in digital libraries, content strategy, and educational projects.',
  'about.experience': 'I organize information systems, create user-friendly interfaces, and develop content strategies to make knowledge accessible to everyone.',
    
  // Skills Section
  'skills.title': 'Key Competencies',
  'skills.subtitle': 'Professional skills and expertise in various fields',
  'skills.professional': 'Professional Skills',
  'skills.technical': 'Technical Skills',
  'skills.languages': 'Language Skills',
  'skills.projectManagement': 'Project Management',
  'skills.contentStrategy': 'Content Strategy',
  'skills.productThinking': 'Product Thinking',
  'skills.dataAnalytics': 'Data Analytics',
  'skills.systemThinking': 'System Thinking',
  'skills.teamManagement': 'Team Management',
  'skills.analytics': 'Analytics',
  'skills.projectManagementCat': 'Project Management',
  'skills.contentCreation': 'Content Creation',
  'skills.automation': 'Automation',
  'skills.processes': 'Processes',
  'skills.systems': 'Systems',
  'skills.documentation': 'Documentation',
  'skills.russian': 'Russian',
  'skills.english': 'English',
  'skills.french': 'French',
  'skills.native': 'Native',
    'skills.digitalLibraries': 'Digital Libraries',
  // ...ключи уже добавлены ниже...
    'skills.userExperience': 'User Experience',
    'skills.informationArchitecture': 'Information Architecture',
    'skills.digitalTransformation': 'Digital Transformation',
    
  // Experience Section
  'experience.title': 'Work Experience',
  'experience.company': 'Russian State Library',
  'experience.position': 'Editor-in-Chief of the "Svet" mobile app',
  'experience.location': 'Moscow',
  'experience.period': 'February 2022 — January 2025',
  'experience.description': 'Led the product team responsible for content, analytics, and development of a digital service for millions of users.',
  'experience.achievements': 'Key achievements:',
  'experience.ach1': 'Increased KPI (book loans) 3x (up to 2.5–3 million per year) through content strategy, partnerships, and analytics',
  'experience.ach2': 'Developed and coordinated 17 major partnership projects',
  'experience.ach3': 'Cooperation with Moscow Electronic School — 3 million potential users, 100,000 book loans in 2024',
  'experience.ach4': '“Summer with Pyaterochka” campaign — coverage of 1,350 stores, 10x increase in website visits in a month',
  'experience.ach5': 'Built a data collection and visualization system (Yandex.Metrica, Superset, Excel)',
  'experience.ach6': 'Created internal automation services — reduced text preparation time from 2 days to 30 minutes',
  'experience.ach7': 'Moved the team to a Russian tool (Kaiten), creating a process control system',
  'experience.ach8': 'Developed 11 landing pages in Tilda',
  'experience.ach9': 'Managed an editorial team of 5 people',
    'experience.current': 'Current',
    'experience.digitalKnowledgeManager': 'Digital Knowledge Manager',
    'experience.rusneb': 'Russian State Library',
    'experience.digitalLibraries': 'Managing digital library projects and content strategies',
    'experience.contentStrategy': 'Developing content strategies for educational platforms',
    
  // Portfolio Section
  'portfolio.title': 'Portfolio',
  'portfolio.subtitle': 'Examples of my projects: landing pages, promo sites, instructions, and design systems',
    'portfolio.landingProjects': 'Special Project Landing Pages',
  'portfolio.texts': 'Texts & Photos',
    'portfolio.loveBooks': 'Books about Happy Love',
    'portfolio.loveBooksDesc': 'Thematic landing page for promoting a collection of love books',
    'portfolio.readingInSky': 'Reading in the Sky',
    'portfolio.readingInSkyDesc': 'Promo site for a joint reading project',
    'portfolio.gamzatov100': '100 Years of Rasul Gamzatov',
    'portfolio.gamzatov100Desc': 'Anniversary project for the poet\'s centenary',
    'portfolio.newYear2025': 'New Year Predictions',
    'portfolio.newYear2025Desc': 'Interactive New Year project',
    'portfolio.pushkin225': 'Quiz for the 225th Anniversary of A.S. Pushkin',
    'portfolio.pushkin225Desc': 'Online quiz for the great poet\'s anniversary',
    'portfolio.posters': 'Posters and Handouts',
    'portfolio.pushkinColoring': 'Coloring Pages for A.S. Pushkin\'s Anniversary',
    'portfolio.pushkinColoringDesc': 'Children\'s coloring pages for popularizing Pushkin\'s work',
    'portfolio.newYearDecorations': 'New Year Decorations with Project Symbolism',
    'portfolio.newYearDecorationsDesc': 'Branded New Year materials',
    'portfolio.libraryInfographics': 'Library Infographics',
    'portfolio.libraryInfographicsDesc': 'Information materials for partner libraries',
    'portfolio.manuals': 'Instructions and Manuals',
    'portfolio.mobileLibraries2024': 'Mobile Libraries Manual 2024',
    'portfolio.mobileLibraries2024Desc': 'Detailed instructions for working with mobile libraries',
    'portfolio.brandedIllustrations': 'Branded Illustration Templates',
    'portfolio.brandedIllustrationsDesc': 'Figma templates for creating project posters in a unified style',
    'portfolio.digitalMerch': 'Digital Merchandise',
    'portfolio.telegramStickers': 'Telegram Stickers',
    'portfolio.telegramStickersDesc': 'Set of branded stickers for Telegram messenger',
    'portfolio.additionalMaterials': 'Additional Materials',
    'portfolio.githubProfile': 'GitHub Profile',

  // Portfolio Texts (articles)
  'portfolio.texts1': 'Days of Tajikistan Culture at the Russian State Library',
  'portfolio.texts1Desc': 'Report from the opening of two exhibitions dedicated to the Days of Culture of the Republic of Tajikistan in Russia.',
  'portfolio.texts2': '18th International Scientific Readings in Memory of Nikolai Fedorov',
  'portfolio.texts2Desc': 'Solemn opening of the 18th International Scientific Readings in memory of philosopher N. F. Fedorov.',
  'portfolio.texts3': 'Round Table “Unique Linguistic Heritage of Indigenous Peoples of the North”',
  'portfolio.texts3Desc': 'Round table dedicated to the International Year of Indigenous Languages of the North.',
  'portfolio.texts4': 'Round Table “UN Day at the Russian State Library — 2019”',
  'portfolio.texts4Desc': 'Round table dedicated to UN Day and the 74th session of the UN General Assembly.',
  'portfolio.texts5': 'Photo Exhibition of Southern Crimea Landscapes at the Russian State Library',
  'portfolio.texts5Desc': 'Opening of the banner exhibition “Dream Coast. Cultural and Natural Heritage of the Southern Coast of Crimea.”',
    
  // Contact Section
  'contact.title': 'Contact Me',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.telegram': 'Telegram',
    'contact.linkedin': 'LinkedIn',
    'contact.footer': '2025 • Olga Morozova • Created in Make',
    
    // Admin
    'admin.title': 'Admin Panel',
    'admin.siteTitle': 'Site Title (in header)',
    'admin.save': 'Save',
    'admin.saved': 'Saved',
    
    // Language Toggle
    'language.ru': 'RU',
    'language.en': 'EN',
  } as const,
  ru: {
  // Education Section
  'education.title': 'Образование и повышение квалификации',
  'education.education': 'Образование',
  'education.certifications': 'Повышение квалификации',
  'education.degree1': 'Магистр журналистики',
  'education.institution1': 'Московский государственный университет им. М.В. Ломоносова',
  'education.program1': 'Международная программа: Mastère franco-russe de journalisme',
  'education.degree2': 'Филология',
  'education.institution2': 'Новосибирский национальный исследовательский государственный университет',
  'education.cert1': 'Аналитик данных',
  'education.cert2': 'Продуктовая аналитика',
  'education.cert3': 'Гибкая разработка (Agile) с Jira',
  'education.cert4': 'Авторское право',
  'education.certOrg4': 'ВОИС',
  'education.cert5': 'Инструменты анализа данных',
  'education.certOrg5': 'Яндекс Практикум',
  'education.cert6': 'Менеджер проектов',
  'education.certOrg6': 'Яндекс Практикум',
  'education.cert7': 'Контент-маркетинг',
  'education.certOrg7': 'Нетология',
  // About highlights
  'about.systematic': 'Системный подход',
  'about.systematicDesc': 'Строю процессы, автоматизирую рутину, навожу порядок в информационном хаосе.',
  'about.result': 'Ориентация на результат',
  'about.resultDesc': 'Работаю на измеримый результат и пользу для бизнеса.',
  'about.team': 'Командная работа',
  'about.teamDesc': 'Умею строить и мотивировать команды для сложных проектов.',
  'about.projects': 'Успешные проекты',
  'about.projectsDesc': 'Запустила и вела десятки цифровых продуктов и сервисов.',
  'about.p1': 'Помогаю организациям и людям находить, структурировать и использовать знания.',
  'about.p2': 'В моём опыте — цифровые библиотеки, образовательные платформы, контент-стратегии.',
  'about.p3': 'Меня вдохновляет делать знания доступными и полезными для всех.',
  'about.desiredTitle': 'Желаемая позиция',
  'about.desiredPosition': 'Руководитель цифровых знаний / Контент-стратег',
  'about.employment': 'Полная занятость, удалённо или гибрид, проектная работа.',
    // Navigation
    'nav.home': 'Главная',
    'nav.about': 'О себе',
    'nav.experience': 'Опыт',
    'nav.skills': 'Навыки',
    'nav.portfolio': 'Портфолио',
    'nav.contact': 'Контакты',
    
    // Hero Section
    'hero.title': 'Ольга Морозова',
    'hero.subtitle': 'Главный редактор, контент-стратег и руководитель проектов',
    'hero.description': 'Помогаю компаниям создавать сильный контент, который работает на рост аудитории и бизнеса.',
    'hero.phone': '+7 (916) 841-32-16',
    'hero.email': 'morozova31@gmail.com',
    'hero.telegram': '@oljona',
    'hero.location': 'Москва / Удалённо',
    'hero.portfolioButton': 'Посмотреть портфолио',
    'hero.githubButton': 'GitHub',
    
    // About Section
    'about.title': 'О себе',
    'about.description': 'Я руководитель цифровых знаний с более чем 10-летним опытом создания и управления цифровыми библиотеками, контент-стратегиями и образовательными проектами.',
    'about.experience': 'Специализируюсь на организации информационных систем, создании удобных интерфейсов и разработке контент-стратегий, которые делают знания доступными для всех.',
    
  // Skills Section
  'skills.title': 'Ключевые компетенции',
  'skills.subtitle': 'Профессиональные навыки и экспертиза в различных областях',
  'skills.professional': 'Профессиональные навыки',
  'skills.technical': 'Технические компетенции',
  'skills.languages': 'Языковые навыки',
  'skills.projectManagement': 'Управление проектами',
  'skills.contentStrategy': 'Контент-стратегия',
  'skills.productThinking': 'Продуктовое мышление',
  'skills.dataAnalytics': 'Аналитика данных',
  'skills.systemThinking': 'Системное мышление',
  'skills.teamManagement': 'Управление командой',
  'skills.analytics': 'Аналитика',
  'skills.projectManagementCat': 'Управление проектами',
  'skills.contentCreation': 'Создание контента',
  'skills.automation': 'Автоматизация',
  'skills.processes': 'Процессы',
  'skills.systems': 'Системы',
  'skills.documentation': 'Документация',
  'skills.russian': 'Русский',
  'skills.english': 'Английский',
  'skills.french': 'Французский',
  'skills.native': 'Родной',
    'skills.digitalLibraries': 'Цифровые библиотеки',
  // ...ключи уже добавлены ниже...
    'skills.userExperience': 'Пользовательский опыт',
    'skills.informationArchitecture': 'Информационная архитектура',
    'skills.digitalTransformation': 'Цифровая трансформация',
    
    // Experience Section
    'experience.title': 'Профессиональный опыт',
  'experience.company': 'Российская государственная библиотека',
  'experience.position': 'Главный редактор мобильного приложения «Свет»',
  'experience.location': 'Москва',
  'experience.period': 'Февраль 2022 — Январь 2025',
  'experience.description': 'Возглавляла продуктовую команду, отвечающую за контент, аналитику и развитие цифрового сервиса для миллионов пользователей.',
  'experience.achievements': 'Ключевые достижения:',
  'experience.ach1': 'Увеличила KPI (книговыдачи) в 3 раза (до 2,5-3 млн в год) за счет стратегии контента, партнерств и аналитики',
  'experience.ach2': 'Разработала и координировала 17 крупных партнерских проектов',
  'experience.ach3': 'Сотрудничество с Московской электронной школой — 3 млн потенциальных пользователей, 100 тыс. книговыдач в 2024',
  'experience.ach4': 'Акция «Лето с Пятерочкой» — охват 1350 магазинов, рост переходов на сайт в 10 раз за месяц',
  'experience.ach5': 'Построила систему сбора и визуализации данных (Яндекс.Метрика, Superset, Excel)',
  'experience.ach6': 'Создала внутренние сервисы для автоматизации — сокращение времени подготовки текстов с 2 дней до 30 минут',
  'experience.ach7': 'Перевела команду на российский инструмент (Kaiten), создав систему контроля процессов',
  'experience.ach8': 'Разработала 11 лендингов в Tilda',
  'experience.ach9': 'Управляла редакцией из 5 человек',
    'experience.current': 'Текущий',
    'experience.digitalKnowledgeManager': 'Руководитель цифровых знаний',
    'experience.rusneb': 'Российская государственная библиотека',
    'experience.digitalLibraries': 'Управление проектами цифровых библиотек и контент-стратегиями',
  'experience.contentStrategy': 'Разработка контент-стратегий для образовательных платформ',
    
  // Portfolio Section
    'portfolio.title': 'Портфолио',
    'portfolio.subtitle': 'Примеры моих проектов: от лендингов и промо-сайтов до инструкций и дизайн-системы',
    'portfolio.landingProjects': 'Лендинги спецпроектов',
    'portfolio.texts': 'Тексты и фотографии',
    'portfolio.loveBooks': 'Книги о счастливой любви',
    'portfolio.loveBooksDesc': 'Тематический лендинг для продвижения коллекции книг о любви',
    'portfolio.readingInSky': 'Читаем в небе',
    'portfolio.readingInSkyDesc': 'Промо-сайт проекта совместного чтения',
    'portfolio.gamzatov100': '100 лет Расулу Гамзатову',
    'portfolio.gamzatov100Desc': 'Юбилейный проект к столетию поэта',
    'portfolio.newYear2025': 'Новогодние предсказания',
    'portfolio.newYear2025Desc': 'Интерактивный новогодний проект',
    'portfolio.pushkin225': 'Квиз к 225-летию А.С. Пушкина',
    'portfolio.pushkin225Desc': 'Онлайн-викторина к юбилею великого поэта',
    'portfolio.posters': 'Плакаты и раздатки',
    'portfolio.pushkinColoring': 'Раскраски к юбилею А.С. Пушкина',
    'portfolio.pushkinColoringDesc': 'Детские раскраски для популяризации творчества поэта',
    'portfolio.newYearDecorations': 'Новогодние украшения с символикой проекта',
    'portfolio.newYearDecorationsDesc': 'Брендированные новогодние материалы',
    'portfolio.libraryInfographics': 'Инфографика для библиотек',
    'portfolio.libraryInfographicsDesc': 'Информационные материалы для партнерских библиотек',
    'portfolio.manuals': 'Инструкции и руководства',
    'portfolio.mobileLibraries2024': 'Руководство для мобильных библиотек 2024',
    'portfolio.mobileLibraries2024Desc': 'Подробные инструкции для работы с мобильными библиотеками',
    'portfolio.brandedIllustrations': 'Макеты брендированных иллюстраций',
    'portfolio.brandedIllustrationsDesc': 'Figma-макеты для создания плакатов в едином стиле проекта',
    'portfolio.digitalMerch': 'Цифровой мерч',
    'portfolio.telegramStickers': 'Стикеры для Telegram',
    'portfolio.telegramStickersDesc': 'Набор брендированных стикеров для мессенджера Telegram',
    'portfolio.additionalMaterials': 'Дополнительные материалы',
    'portfolio.githubProfile': 'GitHub профиль',

  // Portfolio Texts (articles)
  'portfolio.texts1': 'Дни культуры Таджикистана в РГБ',
  'portfolio.texts1Desc': 'Репортаж с открытия двух выставок, приуроченных к Дням культуры Республики Таджикистан в России.',
  'portfolio.texts2': 'XVIII Международные научные чтения памяти Николая Фёдоровича Фёдорова',
  'portfolio.texts2Desc': 'Торжественное открытие XVIII Международных научных чтений памяти философа Н. Ф. Фёдорова.',
  'portfolio.texts3': 'Круглый стол «Уникальный лингвистический фонд коренных народов cеверных территорий — мировая сокровищница культуры»',
  'portfolio.texts3Desc': 'Круглый стол, посвящённый Международному году языков коренных народов Севера.',
  'portfolio.texts4': 'Круглый стол «День ООН в РГБ — 2019»',
  'portfolio.texts4Desc': 'Круглый стол, посвящённый Дню ООН и 74-й сессии Генеральной Ассамблеи ООН.',
  'portfolio.texts5': 'В РГБ открылась фотовыставка пейзажей Южного берега Крыма',
  'portfolio.texts5Desc': 'Торжественное открытие баннерной выставки «Берег мечты. Культурное и природное наследие Южного берега Крыма».',
    
    // Contact Section
    'contact.title': 'Свяжитесь со мной',
    'contact.phone': 'Телефон',
    'contact.email': 'Email',
    'contact.telegram': 'Telegram',
    'contact.linkedin': 'LinkedIn',
    'contact.footer': '2025 год • Ольга Морозова • Создано в Make',
    
    // Admin
    'admin.title': 'Админка',
    'admin.siteTitle': 'Название сайта (в шапке)',
    'admin.save': 'Сохранить',
    'admin.saved': 'Сохранено',
    
    // Language Toggle
    'language.ru': 'RU',
    'language.en': 'EN',
  } as const,
  fr: {
  // Education Section
  'education.title': 'Éducation et développement professionnel',
  'education.education': 'Éducation',
  'education.certifications': 'Certifications',
  'education.degree1': 'Master en journalisme',
  'education.institution1': 'Université d’État de Moscou Lomonossov',
  'education.program1': 'Programme international : Mastère franco-russe de journalisme',
  'education.degree2': 'Philologie',
  'education.institution2': 'Université d’État de Novossibirsk',
  'education.cert1': 'Analyste de données',
  'education.cert2': 'Analyse produit',
  'education.cert3': 'Développement Agile avec Jira',
  'education.cert4': 'Droit d’auteur',
  'education.certOrg4': 'VOIS',
  'education.cert5': 'Outils d’analyse de données',
  'education.certOrg5': 'Yandex Practicum',
  'education.cert6': 'Chef de projet',
  'education.certOrg6': 'Yandex Practicum',
  'education.cert7': 'Content marketing',
  'education.certOrg7': 'Netology',
  // About highlights
  'about.systematic': 'Approche systémique',
  'about.systematicDesc': 'Je construis des processus, j’automatise la routine et j’organise le chaos informationnel.',
  'about.result': 'Orientation résultat',
  'about.resultDesc': 'Je vise des résultats mesurables et la valeur pour l’entreprise.',
  'about.team': 'Travail en équipe',
  'about.teamDesc': 'Je sais constituer et motiver des équipes pour des projets complexes.',
  'about.projects': 'Projets réussis',
  'about.projectsDesc': 'J’ai lancé et géré des dizaines de produits et services numériques.',
  'about.p1': 'J’aide les organisations et les personnes à trouver, structurer et utiliser le savoir.',
  'about.p2': 'Mon expérience inclut les bibliothèques numériques, les plateformes éducatives et les stratégies de contenu.',
  'about.p3': 'Je veux rendre le savoir accessible et utile à tous.',
  'about.desiredTitle': 'Poste souhaité',
  'about.desiredPosition': 'Responsable des connaissances numériques / Content strategist',
  'about.employment': 'Temps plein, télétravail ou hybride, travail par projet.',
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.experience': 'Expérience',
    'nav.skills': 'Compétences',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contact',

    // Hero Section
    'hero.title': 'Olga Morozova',
    'hero.subtitle': 'Responsable des connaissances numériques',
    'hero.description': 'Créer de l’ordre à partir du chaos. Transformer des systèmes complexes en solutions claires et efficaces.',
    'hero.phone': '+7 (916) 841-32-16',
    'hero.email': 'morozova31@gmail.com',
    'hero.telegram': '@oljona',
    'hero.location': 'Moscou / Télétravail',
    'hero.portfolioButton': 'Voir le portfolio',
    'hero.githubButton': 'GitHub',

  // About Section
  'about.title': 'Qui suis-je',
  'about.description': 'Responsable des connaissances numériques avec plus de 10 ans d’expérience dans les bibliothèques numériques, la stratégie de contenu et les projets éducatifs.',
  'about.experience': 'J’organise des systèmes d’information, crée des interfaces conviviales et développe des stratégies de contenu pour rendre le savoir accessible à tous.',

  // Skills Section
  'skills.title': 'Compétences clés',
  'skills.subtitle': 'Compétences professionnelles et expertise dans divers domaines',
  'skills.professional': 'Compétences professionnelles',
  'skills.technical': 'Compétences techniques',
  'skills.languages': 'Compétences linguistiques',
  'skills.projectManagement': 'Gestion de projet',
  'skills.contentStrategy': 'Stratégie de contenu',
  'skills.productThinking': 'Pensée produit',
  'skills.dataAnalytics': 'Analyse de données',
  'skills.systemThinking': 'Pensée systémique',
  'skills.teamManagement': 'Gestion d’équipe',
  'skills.analytics': 'Analytique',
  'skills.projectManagementCat': 'Gestion de projet',
  'skills.contentCreation': 'Création de contenu',
  'skills.automation': 'Automatisation',
  'skills.processes': 'Processus',
  'skills.systems': 'Systèmes',
  'skills.documentation': 'Documentation',
  'skills.russian': 'Russe',
  'skills.english': 'Anglais',
  'skills.french': 'Français',
  'skills.native': 'Natif',
    'skills.digitalLibraries': 'Bibliothèques numériques',
  // ...ключи уже добавлены ниже...
    'skills.userExperience': 'Expérience utilisateur',
    'skills.informationArchitecture': 'Architecture de l’information',
    'skills.digitalTransformation': 'Transformation numérique',

  // Experience Section
  'experience.title': 'Expérience professionnelle',
  'experience.company': 'Bibliothèque d’État de Russie',
  'experience.position': 'Rédactrice en chef de l’application mobile «Svet»',
  'experience.location': 'Moscou',
  'experience.period': 'Février 2022 — Janvier 2025',
  'experience.description': 'Dirigé l’équipe produit responsable du contenu, de l’analyse et du développement d’un service numérique pour des millions d’utilisateurs.',
  'experience.achievements': 'Principaux résultats :',
  'experience.ach1': 'Augmentation du KPI (prêts de livres) par 3 (jusqu’à 2,5–3 millions par an) grâce à la stratégie de contenu, aux partenariats et à l’analyse',
  'experience.ach2': 'Développé et coordonné 17 grands projets de partenariat',
  'experience.ach3': 'Coopération avec l’École électronique de Moscou — 3 millions d’utilisateurs potentiels, 100 000 prêts de livres en 2024',
  'experience.ach4': 'Campagne «Été avec Pyaterochka» — couverture de 1 350 magasins, multiplication par 10 des visites du site en un mois',
  'experience.ach5': 'Créé un système de collecte et de visualisation des données (Yandex.Metrica, Superset, Excel)',
  'experience.ach6': 'Créé des services internes d’automatisation — réduction du temps de préparation des textes de 2 jours à 30 minutes',
  'experience.ach7': 'Transféré l’équipe sur un outil russe (Kaiten), création d’un système de contrôle des processus',
  'experience.ach8': 'Développé 11 landing pages sur Tilda',
  'experience.ach9': 'Géré une équipe éditoriale de 5 personnes',
    'experience.current': 'Actuel',
    'experience.digitalKnowledgeManager': 'Responsable des connaissances numériques',
    'experience.rusneb': 'Bibliothèque d’État de Russie',
    'experience.digitalLibraries': 'Gestion de projets de bibliothèques numériques et de stratégies de contenu',
    'experience.contentStrategy': 'Développement de stratégies de contenu pour des plateformes éducatives',

  // Portfolio Section
  'portfolio.title': 'Portfolio',
  'portfolio.subtitle': 'Exemples de mes projets : landing pages, sites promo, instructions et design systems',
    'portfolio.landingProjects': 'Pages d’atterrissage de projets spéciaux',
  'portfolio.texts': 'Textes et photos',
    'portfolio.loveBooks': 'Livres sur l’amour heureux',
    'portfolio.loveBooksDesc': 'Page thématique pour promouvoir une collection de livres sur l’amour',
    'portfolio.readingInSky': 'Lire dans le ciel',
    'portfolio.readingInSkyDesc': 'Site promo pour un projet de lecture en commun',
    'portfolio.gamzatov100': '100 ans de Rasul Gamzatov',
    'portfolio.gamzatov100Desc': 'Projet anniversaire pour le centenaire du poète',
    'portfolio.newYear2025': 'Prédictions du Nouvel An',
    'portfolio.newYear2025Desc': 'Projet interactif du Nouvel An',
    'portfolio.pushkin225': 'Quiz pour le 225e anniversaire d’A.S. Pouchkine',
    'portfolio.pushkin225Desc': 'Quiz en ligne pour l’anniversaire du grand poète',
    'portfolio.posters': 'Affiches et dépliants',
    'portfolio.pushkinColoring': 'Coloriages pour l’anniversaire de Pouchkine',
    'portfolio.pushkinColoringDesc': 'Coloriages pour enfants pour populariser l’œuvre de Pouchkine',
    'portfolio.newYearDecorations': 'Décorations du Nouvel An avec la symbolique du projet',
    'portfolio.newYearDecorationsDesc': 'Matériel de Nouvel An de marque',
    'portfolio.libraryInfographics': 'Infographies pour bibliothèques',
    'portfolio.libraryInfographicsDesc': 'Matériel d’information pour les bibliothèques partenaires',
    'portfolio.manuals': 'Instructions et manuels',
    'portfolio.mobileLibraries2024': 'Manuel des bibliothèques mobiles 2024',
    'portfolio.mobileLibraries2024Desc': 'Instructions détaillées pour travailler avec les bibliothèques mobiles',
    'portfolio.brandedIllustrations': 'Modèles d’illustrations de marque',
    'portfolio.brandedIllustrationsDesc': 'Modèles Figma pour créer des affiches dans un style unifié',
    'portfolio.digitalMerch': 'Goodies numériques',
    'portfolio.telegramStickers': 'Stickers Telegram',
    'portfolio.telegramStickersDesc': 'Ensemble de stickers de marque pour Telegram',
    'portfolio.additionalMaterials': 'Matériel supplémentaire',
    'portfolio.githubProfile': 'Profil GitHub',

  // Portfolio Texts (articles)
  'portfolio.texts1': 'Journées de la culture du Tadjikistan à la Bibliothèque d’État de Russie',
  'portfolio.texts1Desc': 'Reportage sur l’ouverture de deux expositions consacrées aux Journées de la culture de la République du Tadjikistan en Russie.',
  'portfolio.texts2': '18e Lectures scientifiques internationales à la mémoire de Nikolaï Fiodorov',
  'portfolio.texts2Desc': 'Ouverture solennelle des 18e Lectures scientifiques internationales à la mémoire du philosophe N. F. Fiodorov.',
  'portfolio.texts3': 'Table ronde « Le fonds linguistique unique des peuples autochtones du Nord »',
  'portfolio.texts3Desc': 'Table ronde consacrée à l’Année internationale des langues autochtones du Nord.',
  'portfolio.texts4': 'Table ronde « Journée de l’ONU à la Bibliothèque d’État de Russie — 2019 »',
  'portfolio.texts4Desc': 'Table ronde consacrée à la Journée de l’ONU et à la 74e session de l’Assemblée générale de l’ONU.',
  'portfolio.texts5': 'Exposition photo de paysages de la Crimée du Sud à la Bibliothèque d’État de Russie',
  'portfolio.texts5Desc': 'Ouverture de l’exposition « Côte du rêve. Patrimoine culturel et naturel de la côte sud de la Crimée ».',

  // Contact Section
  'contact.title': 'Contactez-moi',
    'contact.phone': 'Téléphone',
    'contact.email': 'Email',
    'contact.telegram': 'Telegram',
    'contact.linkedin': 'LinkedIn',
    'contact.footer': '2025 • Olga Morozova • Créé dans Make',

    // Admin
    'admin.title': 'Panneau d’administration',
    'admin.siteTitle': 'Titre du site (dans l’en-tête)',
    'admin.save': 'Enregistrer',
    'admin.saved': 'Enregistré',

    // Language Toggle
    'language.ru': 'RU',
    'language.en': 'EN',
    'language.fr': 'FR',
  } as const
} as const;

type TranslationKey = keyof typeof translations['en']
  | 'about.systematic' | 'about.systematicDesc' | 'about.result' | 'about.resultDesc' | 'about.team' | 'about.teamDesc' | 'about.projects' | 'about.projectsDesc' | 'about.p1' | 'about.p2' | 'about.p3' | 'about.desiredTitle' | 'about.desiredPosition' | 'about.employment';

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Определяем язык из параметра lang в URL, если есть
  function getInitialLanguage(): Language {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const lang = params.get('lang');
      if (lang === 'ru' || lang === 'en' || lang === 'fr') {
        return lang;
      }
    }
    return 'en';
  }

  const [language, setLanguage] = useState<Language>(getInitialLanguage());

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ru' : prev === 'ru' ? 'fr' : 'en');
  };

  const t = (key: TranslationKey): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
