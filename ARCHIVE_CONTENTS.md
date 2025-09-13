# Содержимое архива cv_v2_deploy_2025-09-13.zip

## Информация о деплое
- **Дата создания**: 13 сентября 2025
- **Размер архива**: 6.27 MB
- **Коммит**: 9d4e6b5 - feat: expand portfolio texts section and improve UX

## Что включено в архив

### Основные файлы проекта
- `package.json` - зависимости и скрипты
- `vite.config.ts` - конфигурация сборщика
- `tsconfig.json` - настройки TypeScript
- `vercel.json` - настройки для Vercel
- `index.html` - входная точка
- `main.tsx` - точка входа React
- `App.tsx` - основной компонент

### Стили
- `index.css` - глобальные стили
- `styles/globals.css` - дополнительные стили
- `postcss.config.js` - настройки PostCSS

### Компоненты React
- `components/AboutSection.tsx`
- `components/ContactSection.tsx`
- `components/EducationSection.tsx`
- `components/ExperienceSection.tsx`
- `components/HeroSection.tsx`
- `components/Navigation.tsx`
- `components/PortfolioSection.tsx` ✨ *обновлен - кликабельные блоки*
- `components/SkillsSection.tsx`
- `components/ui/` - библиотека UI компонентов
- `components/figma/ImageWithFallback.tsx`

### Контексты и типы
- `contexts/LanguageContext.tsx` ✨ *обновлен - добавлены тексты 6-9*
- `types/` - TypeScript типы

### Ресурсы
- `assets/olga.jpg` - фотография

### Документация
- `README.md` - описание проекта
- `DEPLOY_INSTRUCTIONS.md` - инструкции по развертыванию
- `PORTFOLIO_README.md` - документация портфолио
- `Attributions.md` - авторские права

### Python скрипты (для генерации Word)
- `generate_portfolio_word.py` ✨ *новый - генерация Word документов*
- `create_portfolio.py` ✨ *новый - создание портфолио*

## Ключевые изменения в этом релизе

### ✨ Новый функционал
1. **Расширен раздел "Тексты"** - теперь 9 статей вместо 5
2. **Кликабельные блоки** - вся область текста кликабельна, не только иконки
3. **Обновлены сертификаты** - первый сертификат изменен на Certified Agile Professional
4. **Word генерация** - добавлены скрипты для создания портфолио в Word

### 🔧 Технические улучшения
- Все тексты доступны на трех языках (ru/en/fr)
- Добавлены hover-эффекты для лучшего UX
- Оптимизирована структура данных в LanguageContext

## Исключено из архива
- `node_modules/` - зависимости (устанавливаются через npm install)
- `dist/` - сборка (создается через npm run build)  
- `.git/` - история git
- `__pycache__/` - кеш Python
- `.vscode/` - настройки редактора
- `Olga_Morozova_Portfolio.docx` - сгенерированный Word документ

---
*Для развертывания следуйте инструкциям в DEPLOY_INSTRUCTIONS.md*
