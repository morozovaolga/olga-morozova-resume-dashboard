import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useLanguage } from '../contexts/LanguageContext';

type PortfolioItem = {
  title: string;
  url: string;
  description: string;
};

type PortfolioSubcategory = {
  title: string;
  items: PortfolioItem[];
};

type PortfolioCategory = {
  category: string;
  mockupImage: string;
  items: PortfolioItem[];
  subcategories?: PortfolioSubcategory[];
};

const ADMIN_PASSWORD = 'REMOVED_PASSWORD';

export default function AdminPage() {
  const { t } = useLanguage();
  const [siteTitle, setSiteTitle] = useState('Ольга Морозова');
  const [saved, setSaved] = useState(false);
  const [portfolio, setPortfolio] = useState<PortfolioCategory[]>([]);
  const [newSubcategory, setNewSubcategory] = useState<{cat: number | null, title: string}>({cat: null, title: ''});
  const [newCategory, setNewCategory] = useState({ category: '', mockupImage: '' });
  const [newItem, setNewItem] = useState<{cat: number | null, sub: number | null, title: string, url: string, description: string}>({cat: null, sub: null, title: '', url: '', description: ''});
  
  // Auth
  const [isAuth, setIsAuth] = useState(false);
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');

  useEffect(() => {
    const existing = localStorage.getItem('siteTitle');
    if (existing) {
      setSiteTitle(existing);
    } else {
      setSiteTitle(t('hero.title'));
    }
    
    // Portfolio
    const savedPortfolio = localStorage.getItem('portfolioData');
    if (savedPortfolio) {
      try {
        setPortfolio(JSON.parse(savedPortfolio));
      } catch {
        setPortfolio([]);
      }
    }
  }, [t]);

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAuth(true);
      setAuthError('');
    } else {
      setAuthError('Неверный пароль');
    }
  };

  const handleLogout = () => {
    setIsAuth(false);
    setPassword('');
  };

  const handleSave = () => {
    localStorage.setItem('siteTitle', siteTitle);
    window.dispatchEvent(new Event('storage'));
    setSaved(true);
    setTimeout(() => setSaved(false), 1500);
  };

  const savePortfolio = (data: PortfolioCategory[]) => {
    setPortfolio(data);
    localStorage.setItem('portfolioData', JSON.stringify(data));
    window.dispatchEvent(new Event('storage'));
  };

  // Категории
  const handleAddCategory = () => {
    if (!newCategory.category) return;
    const updated = [...portfolio, { ...newCategory, items: [], subcategories: [] }];
    savePortfolio(updated);
    setNewCategory({ category: '', mockupImage: '' });
  };

  // Подразделы
  const handleAddSubcategory = () => {
    if (newSubcategory.cat === null || !newSubcategory.title) return;
    const updated = [...portfolio];
    if (!updated[newSubcategory.cat].subcategories) updated[newSubcategory.cat].subcategories = [];
    updated[newSubcategory.cat].subcategories!.push({ title: newSubcategory.title, items: [] });
    savePortfolio(updated);
    setNewSubcategory({cat: null, title: ''});
  };

  // Элементы подразделов
  const handleAddSubItem = () => {
    if (newItem.cat === null || newItem.sub === null || !newItem.title) return;
    const updated = [...portfolio];
    if (!updated[newItem.cat].subcategories) return;
    updated[newItem.cat].subcategories![newItem.sub].items.push({ title: newItem.title, url: newItem.url, description: newItem.description });
    savePortfolio(updated);
    setNewItem({cat: null, sub: null, title: '', url: '', description: ''});
  };

  const updateSubItem = (catIdx: number, subIdx: number, itemIdx: number, field: keyof PortfolioItem, value: string) => {
    const updated = [...portfolio];
    updated[catIdx].subcategories![subIdx].items[itemIdx][field] = value;
    savePortfolio(updated);
  };

  const deleteSubItem = (catIdx: number, subIdx: number, itemIdx: number) => {
    const updated = [...portfolio];
    updated[catIdx].subcategories![subIdx].items.splice(itemIdx, 1);
    savePortfolio(updated);
  };

  if (!isAuth) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-2xl font-bold text-center mb-6">Вход в админку</h1>
          <div className="space-y-4">
            <Input
              type="password"
              placeholder="Введите пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
            />
            {authError && <p className="text-red-500 text-sm">{authError}</p>}
            <Button onClick={handleLogin} className="w-full">
              Войти
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Админ-панель</h1>
            <div className="space-x-2">
              <Button onClick={handleLogout} variant="outline">
                Выход
              </Button>
              <a href="#/" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                На сайт
              </a>
            </div>
          </div>

          {/* Управление заголовком */}
          <div className="mb-8 p-4 border rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Заголовок сайта</h2>
            <div className="flex space-x-2">
              <Input
                value={siteTitle}
                onChange={(e) => setSiteTitle(e.target.value)}
                placeholder="Заголовок сайта"
                className="flex-1"
              />
              <Button onClick={handleSave}>
                {saved ? 'Сохранено!' : 'Сохранить'}
              </Button>
            </div>
          </div>

          {/* Управление портфолио */}
          <div className="mb-8 p-4 border rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Управление портфолио</h2>
            
            {/* Добавить категорию */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium mb-2">Добавить категорию</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <Input
                  placeholder="Название категории"
                  value={newCategory.category}
                  onChange={(e) => setNewCategory({...newCategory, category: e.target.value})}
                />
                <Input
                  placeholder="URL изображения"
                  value={newCategory.mockupImage}
                  onChange={(e) => setNewCategory({...newCategory, mockupImage: e.target.value})}
                />
                <Button onClick={handleAddCategory}>Добавить</Button>
              </div>
            </div>

            {/* Добавить подраздел */}
            <div className="mb-6 p-4 bg-blue-50 rounded-lg">
              <h3 className="font-medium mb-2">Добавить подраздел</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <select 
                  value={newSubcategory.cat || ''} 
                  onChange={(e) => setNewSubcategory({...newSubcategory, cat: e.target.value ? parseInt(e.target.value) : null})}
                  className="px-3 py-2 border rounded-md"
                >
                  <option value="">Выберите категорию</option>
                  {portfolio.map((cat, idx) => (
                    <option key={idx} value={idx}>{cat.category}</option>
                  ))}
                </select>
                <Input
                  placeholder="Название подраздела"
                  value={newSubcategory.title}
                  onChange={(e) => setNewSubcategory({...newSubcategory, title: e.target.value})}
                />
                <Button onClick={handleAddSubcategory}>Добавить</Button>
              </div>
            </div>

            {/* Структура портфолио */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="font-medium">Структура портфолио:</h3>
                <Button
                  onClick={() => {
                    const demoData = [
                      {
                        category: "Контент-стратегия",
                        mockupImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400",
                        items: [],
                        subcategories: [
                          {
                            title: "Бренд-контент",
                            items: [
                              {
                                title: "Разработка контент-стратегии для IT-компании",
                                url: "https://example.com/strategy-1",
                                description: "Полный аудит контента, разработка стратегии и рекомендаций по контенту для роста органического трафика на 40%"
                              },
                              {
                                title: "Создание брендбука для стартапа",
                                url: "https://example.com/brandbook",
                                description: "Разработка единого стиля коммуникации, tone of voice и визуальной идентификации для молодой компании"
                              }
                            ]
                          },
                          {
                            title: "SEO-оптимизация",
                            items: [
                              {
                                title: "SEO-аудит и оптимизация блога",
                                url: "https://example.com/seo-blog",
                                description: "Комплексный аудит контента, оптимизация под поисковые системы, рост позиций в топ-10 на 35%"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        category: "Редактирование и корректура",
                        mockupImage: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=400",
                        items: [],
                        subcategories: [
                          {
                            title: "Тексты для бизнеса",
                            items: [
                              {
                                title: "Редактирование презентаций для инвесторов",
                                url: "https://example.com/presentations",
                                description: "Профессиональная корректура и редактура презентационных материалов для привлечения инвестиций"
                              },
                              {
                                title: "Создание продающих текстов",
                                url: "https://example.com/sales-copy",
                                description: "Написание и оптимизация продающих текстов для увеличения конверсии на 25%"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        category: "Управление проектами",
                        mockupImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400",
                        items: [],
                        subcategories: [
                          {
                            title: "Координация команд",
                            items: [
                              {
                                title: "Управление командой контент-маркетологов",
                                url: "https://example.com/team-management",
                                description: "Координация работы команды из 5 человек, планирование задач, контроль сроков и качества"
                              }
                            ]
                          }
                        ]
                      }
                    ];
                    savePortfolio(demoData);
                  }}
                  variant="outline"
                  size="sm"
                >
                  Создать демо-портфолио
                </Button>
              </div>
              {portfolio.length === 0 ? (
                <p className="text-gray-500 text-sm">Нет созданных категорий</p>
              ) : (
                portfolio.map((cat, catIdx) => (
                  <div key={catIdx} className="border rounded-lg p-4">
                    <div className="font-semibold text-lg mb-2">{cat.category}</div>
                    
                    {/* Подразделы */}
                    {cat.subcategories && cat.subcategories.length > 0 ? (
                      <div className="ml-4 mb-4">
                        <div className="font-semibold mb-2">Подразделы:</div>
                        {cat.subcategories.map((sub, subIdx) => (
                          <div key={subIdx} className="border-l-2 border-blue-300 pl-4 mb-3">
                            <div className="font-medium text-blue-700">{sub.title}</div>
                            {sub.items.map((item, itemIdx) => (
                              <div key={itemIdx} className="ml-4 mt-2 p-2 bg-gray-50 rounded text-sm">
                                <Input
                                  value={item.title}
                                  onChange={(e) => updateSubItem(catIdx, subIdx, itemIdx, 'title', e.target.value)}
                                  className="mb-1"
                                  placeholder="Название"
                                />
                                <Input
                                  value={item.url}
                                  onChange={(e) => updateSubItem(catIdx, subIdx, itemIdx, 'url', e.target.value)}
                                  className="mb-1"
                                  placeholder="URL"
                                />
                                <Input
                                  value={item.description}
                                  onChange={(e) => updateSubItem(catIdx, subIdx, itemIdx, 'description', e.target.value)}
                                  className="mb-1"
                                  placeholder="Описание"
                                />
                                <Button
                                  onClick={() => deleteSubItem(catIdx, subIdx, itemIdx)}
                                  variant="outline"
                                  size="sm"
                                >
                                  Удалить
                                </Button>
                              </div>
                            ))}
                            
                            {/* Добавить элемент в подраздел */}
                            <div className="mt-2 p-2 bg-blue-50 rounded">
                              <div className="text-xs font-medium mb-1">Добавить в подраздел:</div>
                              <div className="grid grid-cols-1 gap-1">
                                <Input
                                  placeholder="Название"
                                  value={newItem.cat === catIdx && newItem.sub === subIdx ? newItem.title : ''}
                                  onChange={(e) => setNewItem({cat: catIdx, sub: subIdx, title: e.target.value, url: newItem.url, description: newItem.description})}
                                  className="text-xs"
                                />
                                <Input
                                  placeholder="URL"
                                  value={newItem.cat === catIdx && newItem.sub === subIdx ? newItem.url : ''}
                                  onChange={(e) => setNewItem({...newItem, cat: catIdx, sub: subIdx, url: e.target.value})}
                                  className="text-xs"
                                />
                                <Input
                                  placeholder="Описание"
                                  value={newItem.cat === catIdx && newItem.sub === subIdx ? newItem.description : ''}
                                  onChange={(e) => setNewItem({...newItem, cat: catIdx, sub: subIdx, description: e.target.value})}
                                  className="text-xs"
                                />
                                <Button onClick={handleAddSubItem} size="sm">+</Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-500 text-sm ml-4">Подразделы не созданы</p>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}