import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  // Intersection Observer для отслеживания активной секции
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observerOptions = {
      rootMargin: '-10% 0px -50% 0px', // Более мягкие настройки
      threshold: [0.1, 0.3, 0.5] // Множественные пороги
    };

    const observer = new IntersectionObserver((entries) => {
      // Найдем секцию с наибольшим пересечением
      let maxIntersection = 0;
      let activeSection = '';
      
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > maxIntersection) {
          maxIntersection = entry.intersectionRatio;
          activeSection = entry.target.id;
        }
      });

      if (activeSection) {
        console.log('Active section:', activeSection); // Добавляем лог для отладки
        setActiveSection(activeSection);
      }
    }, observerOptions);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  // Smooth scroll к секции
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Учитываем высоту навигации
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setActiveSection(sectionId);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation 
        activeSection={activeSection} 
        setActiveSection={scrollToSection} 
      />
      
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <CaseStudiesSection />
        <PortfolioSection />
        <EducationSection />
        <ContactSection />
      </main>
    </div>
  );
}