#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Скрипт для создания портфолио в Word формате
на основе данных из лендинга Ольги Морозовой
"""

import os
import sys
from datetime import datetime

# Импортируем генератор Word документов
try:
    from generate_portfolio_word import PortfolioWordGenerator
except ImportError as e:
    print(f"Ошибка импорта: {e}")
    print("Убедитесь, что файл generate_portfolio_word.py находится в той же папке")
    sys.exit(1)

def create_portfolio_files():
    """Создание портфолио в Word формате"""
    print("=" * 60)
    print("🚀 ГЕНЕРАЦИЯ WORD ПОРТФОЛИО ОЛЬГИ МОРОЗОВОЙ")
    print("=" * 60)
    print(f"📅 Дата создания: {datetime.now().strftime('%d.%m.%Y %H:%M')}")
    print()
    
    created_files = []
    errors = []
    
    # Создание Word документа  
    try:
        print("📝 Создание Word документа...")
        word_generator = PortfolioWordGenerator("Olga_Morozova_Portfolio.docx")
        word_file = word_generator.generate_docx()
        created_files.append(word_file)
        print("✅ Word создан успешно!")
    except Exception as e:
        error_msg = f"Ошибка создания Word: {e}"
        errors.append(error_msg)
        print(f"❌ {error_msg}")
    
    print()
    print("=" * 60)
    print("📊 ИТОГОВЫЙ ОТЧЕТ")
    print("=" * 60)
    
    # Отчет о созданных файлах
    if created_files:
        print(f"✅ Успешно создано файлов: {len(created_files)}")
        for file in created_files:
            if os.path.exists(file):
                file_size = os.path.getsize(file) / 1024
                file_path = os.path.abspath(file)
                print(f"   📁 {file} ({file_size:.1f} KB)")
                print(f"      📍 {file_path}")
    
    # Отчет об ошибках
    if errors:
        print(f"\n❌ Ошибки ({len(errors)}):")
        for error in errors:
            print(f"   • {error}")
    
    print()
    
    # Содержимое портфолио
    print("📋 СОДЕРЖИМОЕ ПОРТФОЛИО:")
    content_sections = [
        "• Контактная информация",
        "• О себе и ключевые качества", 
        "• Профессиональный опыт (РГБ, 2022-2025)",
        "• Ключевые компетенции (профессиональные, технические, языки)",
        "• Образование и сертификаты",
        "• 4 детальных кейса:",
        "  - Аудиокниги на борту Аэрофлота",
        "  - Интеграция с Московской электронной школой", 
        "  - Московское метро «Подземный читальный зал»",
        "  - Проект к юбилею Александра Пушкина",
        "• Портфолио проектов:",
        "  - Лендинги спецпроектов (5 проектов)",
        "  - Дизайн-материалы (5 видов)",
        "  - Документация и руководства (2 типа)",
        "  - Тексты (9 статей: 5 репортажей из РГБ + 4 статьи с заголовками и ссылками)"
    ]
    
    for item in content_sections:
        print(f"  {item}")
    
    print()
    print("🎯 Портфолио готово к использованию!")
    
    return created_files, errors

def main():
    """Основная функция"""
    try:
        created_files, errors = create_portfolio_files()
        
        if created_files and not errors:
            print("🎉 Все файлы созданы успешно!")
            return 0
        elif created_files and errors:
            print("⚠️ Созданы не все файлы, есть ошибки.")
            return 1
        else:
            print("💥 Не удалось создать ни одного файла.")
            return 2
            
    except KeyboardInterrupt:
        print("\n🛑 Прервано пользователем.")
        return 3
    except Exception as e:
        print(f"\n💥 Критическая ошибка: {e}")
        return 4

if __name__ == "__main__":
    exit_code = main()
    sys.exit(exit_code)
