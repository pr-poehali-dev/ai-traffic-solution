import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from 'recharts';

const Index = () => {
  const trafficData = [
    { time: '00:00', входящий: 45, обработанный: 42 },
    { time: '04:00', входящий: 67, обработанный: 65 },
    { time: '08:00', входящий: 120, обработанный: 118 },
    { time: '12:00', входящий: 180, обработанный: 177 },
    { time: '16:00', входящий: 150, обработанный: 148 },
    { time: '20:00', входящий: 95, обработанный: 93 },
  ];

  const efficiencyData = [
    { месяц: 'Янв', эффективность: 85 },
    { месяц: 'Фев', эффективность: 88 },
    { месяц: 'Мар', эффективность: 92 },
    { месяц: 'Апр', эффективность: 95 },
    { месяц: 'Май', эффективность: 97 },
    { месяц: 'Июн', эффективность: 98 },
  ];

  const teamMembers = [
    { 
      name: 'Анна Петрова', 
      role: 'Главный архитектор ИИ',
      experience: '8 лет в ML',
      avatar: 'A'
    },
    { 
      name: 'Дмитрий Иванов', 
      role: 'Tech Lead',
      experience: '12 лет в разработке',
      avatar: 'Д'
    },
    { 
      name: 'Мария Сидорова', 
      role: 'Product Manager',
      experience: '6 лет в продуктах',
      avatar: 'М'
    },
  ];

  const features = [
    {
      icon: 'Bot',
      title: 'ИИ-Администратор',
      description: 'Автоматически обрабатывает входящие запросы, анализирует контекст и предоставляет персонализированные ответы'
    },
    {
      icon: 'Users',
      title: 'Замена консультантов',
      description: 'Обучается на базе знаний компании и консультирует клиентов 24/7 с качеством эксперта'
    },
    {
      icon: 'TrendingUp',
      title: 'Умный менеджмент',
      description: 'Приоритизирует задачи, распределяет ресурсы и оптимизирует бизнес-процессы в режиме реального времени'
    },
  ];

  const workflowSteps = [
    { step: 1, title: 'Получение запроса', description: 'ИИ принимает входящий трафик' },
    { step: 2, title: 'Анализ контекста', description: 'Обрабатывает и понимает суть обращения' },
    { step: 3, title: 'Генерация ответа', description: 'Создает персонализированный ответ' },
    { step: 4, title: 'Обучение', description: 'Совершенствуется на основе взаимодействий' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-blue-600/20 text-blue-300 border-blue-500/30">
              ИИ Трафик Процессор
            </Badge>
            <h1 className="text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Будущее обработки клиентского трафика
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Наш ИИ-ассистент заменяет администраторов, консультантов и менеджеров, 
              обрабатывая входящий трафик с эффективностью 98% и скоростью света
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Начать работу
              </Button>
              <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                Демо
              </Button>
            </div>
          </motion.div>

          {/* Traffic Analytics */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
          >
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Icon name="Activity" className="text-blue-400" />
                  Обработка трафика в реальном времени
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={trafficData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="time" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Area 
                      type="monotone" 
                      dataKey="входящий" 
                      stroke="#3B82F6" 
                      fill="#3B82F6" 
                      fillOpacity={0.2}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="обработанный" 
                      stroke="#10B981" 
                      fill="#10B981" 
                      fillOpacity={0.2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Icon name="TrendingUp" className="text-purple-400" />
                  Эффективность ИИ по месяцам
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={efficiencyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="месяц" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Line 
                      type="monotone" 
                      dataKey="эффективность" 
                      stroke="#8B5CF6" 
                      strokeWidth={3}
                      dot={{ fill: '#8B5CF6', strokeWidth: 2, r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Команда экспертов</h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Профессионалы с многолетним опытом в области ИИ и обработки данных
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                      {member.avatar}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-blue-400 mb-2">{member.role}</p>
                    <p className="text-slate-400 text-sm">{member.experience}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Возможности системы</h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Полная автоматизация клиентского сервиса с помощью передовых технологий ИИ
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                      <Icon name={feature.icon} className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-slate-300">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Как это работает</h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Простой и эффективный процесс обработки входящего трафика
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-slate-300 text-sm">{step.description}</p>
                {index < workflowSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform -translate-y-1/2"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Готовы к революции в обработке трафика?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Присоединяйтесь к сотням компаний, которые уже автоматизировали свой клиентский сервис
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Начать бесплатно
              </Button>
              <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                Связаться с нами
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;