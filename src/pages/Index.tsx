import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const announcements = [
    {
      id: 1,
      category: 'important',
      title: 'Плановое отключение воды',
      date: '15 декабря 2024',
      content: 'Уважаемые жители! 20 декабря с 10:00 до 16:00 будет производиться плановое отключение холодного водоснабжения.',
      author: 'Техническая служба'
    },
    {
      id: 2,
      category: 'info',
      title: 'Новогоднее украшение двора',
      date: '10 декабря 2024',
      content: 'Приглашаем всех жителей принять участие в украшении двора к Новому году. Встречаемся 18 декабря в 14:00.',
      author: 'Управляющая компания'
    },
    {
      id: 3,
      category: 'payment',
      title: 'Тарифы на отопление',
      date: '5 декабря 2024',
      content: 'С 1 января 2025 года изменятся тарифы на отопление. Подробности на сайте поставщика.',
      author: 'Бухгалтерия'
    },
    {
      id: 4,
      category: 'info',
      title: 'График дежурств консьержей',
      date: '1 декабря 2024',
      content: 'Обновлен график работы консьержей. Теперь дежурство круглосуточное.',
      author: 'Управляющая компания'
    }
  ];

  const staff = [
    { name: 'Иванов Петр Сергеевич', position: 'Управляющий', phone: '+7 (495) 123-45-67', email: 'ivanov@uk.ru' },
    { name: 'Смирнова Анна Ивановна', position: 'Главный бухгалтер', phone: '+7 (495) 123-45-68', email: 'smirnova@uk.ru' },
    { name: 'Кузнецов Дмитрий Петрович', position: 'Главный инженер', phone: '+7 (495) 123-45-69', email: 'kuznetsov@uk.ru' },
    { name: 'Попова Елена Андреевна', position: 'Специалист по работе с жителями', phone: '+7 (495) 123-45-70', email: 'popova@uk.ru' }
  ];

  const events = [
    { id: 1, date: '2024-12-20', title: 'Отключение воды', time: '10:00-16:00', type: 'water', description: 'Плановое отключение холодного водоснабжения' },
    { id: 2, date: '2024-12-22', title: 'Перекрытие въезда', time: '09:00-18:00', type: 'road', description: 'Ремонт дорожного покрытия во дворе' },
    { id: 3, date: '2024-12-25', title: 'Отключение электричества', time: '14:00-16:00', type: 'electricity', description: 'Плановые работы на электросетях' },
    { id: 4, date: '2024-12-27', title: 'Уборка подъездов', time: '12:00-15:00', type: 'cleaning', description: 'Генеральная уборка всех подъездов' },
    { id: 5, date: '2025-01-10', title: 'Проверка отопления', time: '10:00-17:00', type: 'heating', description: 'Техническая проверка системы отопления' },
    { id: 6, date: '2025-01-15', title: 'Отключение воды', time: '08:00-12:00', type: 'water', description: 'Замена стояков' }
  ];

  const filteredAnnouncements = selectedCategory === 'all' 
    ? announcements 
    : announcements.filter(a => a.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'important': return 'bg-secondary text-secondary-foreground';
      case 'payment': return 'bg-accent text-accent-foreground';
      case 'info': return 'bg-primary text-primary-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'important': return 'Важное';
      case 'payment': return 'Оплата';
      case 'info': return 'Информация';
      default: return category;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-lg shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-lg">
                <Icon name="Building2" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  Управляющая Компания
                </h1>
                <p className="text-sm text-muted-foreground">Сервис для жителей</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-2">
              <Button 
                variant={activeSection === 'home' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('home')}
                className="transition-all"
              >
                <Icon name="Home" size={18} className="mr-2" />
                Главная
              </Button>
              <Button 
                variant={activeSection === 'announcements' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('announcements')}
              >
                <Icon name="Bell" size={18} className="mr-2" />
                Объявления
              </Button>
              <Button 
                variant={activeSection === 'requests' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('requests')}
              >
                <Icon name="FileText" size={18} className="mr-2" />
                Заявки
              </Button>
              <Button 
                variant={activeSection === 'calendar' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('calendar')}
              >
                <Icon name="Calendar" size={18} className="mr-2" />
                Календарь
              </Button>
              <Button 
                variant={activeSection === 'staff' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('staff')}
              >
                <Icon name="Users" size={18} className="mr-2" />
                Сотрудники
              </Button>
              <Button 
                variant={activeSection === 'contacts' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('contacts')}
              >
                <Icon name="Phone" size={18} className="mr-2" />
                Контакты
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {activeSection === 'home' && (
          <div className="space-y-8 animate-fade-in">
            <section className="relative overflow-hidden rounded-3xl bg-gradient-primary p-12 text-white shadow-2xl">
              <div className="relative z-10 max-w-3xl">
                <h2 className="text-5xl font-bold mb-4 animate-slide-up">
                  Добро пожаловать!
                </h2>
                <p className="text-xl mb-8 text-white/90 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                  Платформа для комфортного взаимодействия с управляющей компанией. 
                  Подавайте заявки, следите за объявлениями и будьте в курсе всех событий вашего дома.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    size="lg" 
                    variant="secondary"
                    onClick={() => setActiveSection('requests')}
                    className="shadow-lg hover:shadow-xl transition-all"
                  >
                    <Icon name="Plus" size={20} className="mr-2" />
                    Подать заявку
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    onClick={() => setActiveSection('announcements')}
                    className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                  >
                    <Icon name="Bell" size={20} className="mr-2" />
                    Объявления
                  </Button>
                </div>
              </div>
              <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute -left-20 -top-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
            </section>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 animate-scale-in">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <Icon name="FileText" className="text-primary" size={24} />
                  </div>
                  <CardTitle>Быстрые заявки</CardTitle>
                  <CardDescription>Сообщите о проблеме в один клик</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="w-full" 
                    onClick={() => setActiveSection('requests')}
                  >
                    Создать заявку
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 animate-scale-in" style={{ animationDelay: '0.1s' }}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                    <Icon name="Bell" className="text-accent" size={24} />
                  </div>
                  <CardTitle>Доска объявлений</CardTitle>
                  <CardDescription>Актуальная информация для жителей</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="w-full" 
                    variant="outline"
                    onClick={() => setActiveSection('announcements')}
                  >
                    Смотреть все
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-3">
                    <Icon name="Users" className="text-secondary" size={24} />
                  </div>
                  <CardTitle>Наши сотрудники</CardTitle>
                  <CardDescription>Контакты специалистов компании</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="w-full" 
                    variant="outline"
                    onClick={() => setActiveSection('staff')}
                  >
                    Посмотреть
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeSection === 'announcements' && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-4xl font-bold mb-2">Доска объявлений</h2>
                <p className="text-muted-foreground">Актуальная информация для жителей</p>
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Категория" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все категории</SelectItem>
                  <SelectItem value="important">Важное</SelectItem>
                  <SelectItem value="info">Информация</SelectItem>
                  <SelectItem value="payment">Оплата</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-6">
              {filteredAnnouncements.map((announcement, index) => (
                <Card 
                  key={announcement.id} 
                  className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-3">
                          <Badge className={getCategoryColor(announcement.category)}>
                            {getCategoryLabel(announcement.category)}
                          </Badge>
                          <span className="text-sm text-muted-foreground">{announcement.date}</span>
                        </div>
                        <CardTitle className="text-2xl">{announcement.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-foreground/80 leading-relaxed">{announcement.content}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="User" size={16} />
                      <span>{announcement.author}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'requests' && (
          <div className="max-w-3xl mx-auto animate-fade-in">
            <div className="mb-8">
              <h2 className="text-4xl font-bold mb-2">Подать заявку</h2>
              <p className="text-muted-foreground">Опишите проблему, и мы оперативно её решим</p>
            </div>

            <Card className="shadow-xl border-2">
              <CardHeader>
                <CardTitle>Новая заявка</CardTitle>
                <CardDescription>Заполните форму для отправки обращения</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Тип проблемы</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите тип заявки" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="plumbing">Сантехника</SelectItem>
                      <SelectItem value="electricity">Электричество</SelectItem>
                      <SelectItem value="heating">Отопление</SelectItem>
                      <SelectItem value="elevator">Лифт</SelectItem>
                      <SelectItem value="cleaning">Уборка</SelectItem>
                      <SelectItem value="other">Другое</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Адрес</label>
                  <Input placeholder="Корпус, подъезд, квартира" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Описание проблемы</label>
                  <Textarea 
                    placeholder="Подробно опишите ситуацию..." 
                    rows={6}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Контактный телефон</label>
                  <Input placeholder="+7 (___) ___-__-__" type="tel" />
                </div>

                <Button className="w-full" size="lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'calendar' && (
          <div className="space-y-6 animate-fade-in">
            <div className="mb-8">
              <h2 className="text-4xl font-bold mb-2">Календарь событий</h2>
              <p className="text-muted-foreground">Плановые работы и отключения</p>
            </div>

            <div className="grid gap-4">
              {events.map((event, index) => {
                const eventDate = new Date(event.date);
                const today = new Date();
                const isUpcoming = eventDate >= today;
                const isPast = eventDate < today;
                
                const getEventIcon = (type: string) => {
                  switch (type) {
                    case 'water': return 'Droplet';
                    case 'electricity': return 'Zap';
                    case 'road': return 'Construction';
                    case 'heating': return 'Flame';
                    case 'cleaning': return 'Sparkles';
                    default: return 'Calendar';
                  }
                };

                const getEventColor = (type: string) => {
                  switch (type) {
                    case 'water': return 'bg-blue-500';
                    case 'electricity': return 'bg-yellow-500';
                    case 'road': return 'bg-orange-500';
                    case 'heating': return 'bg-red-500';
                    case 'cleaning': return 'bg-purple-500';
                    default: return 'bg-gray-500';
                  }
                };

                return (
                  <Card 
                    key={event.id}
                    className={`hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up ${isPast ? 'opacity-60' : ''}`}
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex flex-col items-center min-w-[80px]">
                          <div className="text-3xl font-bold text-primary">
                            {eventDate.getDate()}
                          </div>
                          <div className="text-sm text-muted-foreground uppercase">
                            {eventDate.toLocaleDateString('ru-RU', { month: 'short' })}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {eventDate.getFullYear()}
                          </div>
                        </div>

                        <div className="flex-1">
                          <div className="flex items-start gap-3 mb-3">
                            <div className={`w-10 h-10 rounded-lg ${getEventColor(event.type)} flex items-center justify-center flex-shrink-0`}>
                              <Icon name={getEventIcon(event.type)} className="text-white" size={20} />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-semibold mb-1">{event.title}</h3>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                                <Icon name="Clock" size={16} />
                                <span>{event.time}</span>
                              </div>
                              <p className="text-foreground/80">{event.description}</p>
                            </div>
                          </div>
                          
                          {isUpcoming && (
                            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                              <Icon name="Bell" size={14} className="mr-1" />
                              Предстоящее
                            </Badge>
                          )}
                          {isPast && (
                            <Badge variant="outline" className="bg-muted">
                              <Icon name="Check" size={14} className="mr-1" />
                              Завершено
                            </Badge>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        )}

        {activeSection === 'staff' && (
          <div className="space-y-6 animate-fade-in">
            <div className="mb-8">
              <h2 className="text-4xl font-bold mb-2">Наши сотрудники</h2>
              <p className="text-muted-foreground">Команда специалистов управляющей компании</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {staff.map((person, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                        {person.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl">{person.name}</CardTitle>
                        <CardDescription className="text-base mt-1">{person.position}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-3 text-foreground/80">
                      <Icon name="Phone" size={18} className="text-primary" />
                      <span>{person.phone}</span>
                    </div>
                    <div className="flex items-center gap-3 text-foreground/80">
                      <Icon name="Mail" size={18} className="text-primary" />
                      <span>{person.email}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'contacts' && (
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <div className="mb-8">
              <h2 className="text-4xl font-bold mb-2">Контакты</h2>
              <p className="text-muted-foreground">Свяжитесь с нами удобным способом</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-xl border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="Building2" className="text-primary" size={24} />
                    Управляющая компания
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Icon name="MapPin" className="text-primary mt-1" size={20} />
                      <div>
                        <p className="font-medium">Адрес офиса</p>
                        <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 1</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Phone" className="text-primary mt-1" size={20} />
                      <div>
                        <p className="font-medium">Телефон</p>
                        <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Mail" className="text-primary mt-1" size={20} />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-muted-foreground">info@uk-example.ru</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Clock" className="text-primary mt-1" size={20} />
                      <div>
                        <p className="font-medium">Режим работы</p>
                        <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                        <p className="text-muted-foreground">Сб-Вс: выходной</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-xl border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="AlertCircle" className="text-secondary" size={24} />
                    Аварийная служба
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-secondary/10 rounded-lg border-2 border-secondary/20">
                    <p className="font-semibold text-lg mb-2">Круглосуточный телефон</p>
                    <p className="text-3xl font-bold text-secondary">+7 (495) 911-11-11</p>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>• Протечки и затопления</p>
                    <p>• Отключение электричества</p>
                    <p>• Проблемы с отоплением</p>
                    <p>• Поломка лифта</p>
                    <p>• Другие аварийные ситуации</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="shadow-xl border-2">
              <CardHeader>
                <CardTitle>Написать нам</CardTitle>
                <CardDescription>Задайте вопрос или оставьте отзыв</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Ваше имя</label>
                    <Input placeholder="Иван Иванов" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input placeholder="ivan@example.com" type="email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Сообщение</label>
                  <Textarea placeholder="Ваше сообщение..." rows={5} />
                </div>
                <Button className="w-full" size="lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить сообщение
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      <footer className="mt-16 border-t bg-white/50 backdrop-blur">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Icon name="Building2" className="text-white" size={20} />
              </div>
              <div>
                <p className="font-semibold">Управляющая Компания</p>
                <p className="text-sm text-muted-foreground">© 2024 Все права защищены</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" size="sm">
                <Icon name="Phone" size={16} className="mr-2" />
                Связаться
              </Button>
              <Button variant="outline" size="sm">
                <Icon name="Mail" size={16} className="mr-2" />
                Написать
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;