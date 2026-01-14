import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, Heart, Trophy, Users, Gift, Camera, Music, Pizza, Coffee, TrendingUp, Award, ChevronRight, Menu, X, Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [pupuVotes, setPupuVotes] = useState(1247)
  const [lupuVotes, setLupuVotes] = useState(1189)
  const [hasVoted, setHasVoted] = useState(false)

  const handleVote = (character) => {
    if (!hasVoted) {
      if (character === 'pupu') {
        setPupuVotes(pupuVotes + 1)
      } else {
        setLupuVotes(lupuVotes + 1)
      }
      setHasVoted(true)
    }
  }

  const galleryItems = [
    { id: 1, image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80', title: 'Пупа на пляже' },
    { id: 2, image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&q=80', title: 'Лупа в парке' },
    { id: 3, image: 'https://images.unsplash.com/photo-1573865526739-10c1dd7aa1e0?w=800&q=80', title: 'Вместе навсегда' },
    { id: 4, image: 'https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=800&q=80', title: 'Приключения Пупы' },
    { id: 5, image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=800&q=80', title: 'Лупа-путешественник' },
    { id: 6, image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=800&q=80', title: 'Праздник друзей' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-cyan-100">
      {/* HEADER */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-lg z-50 border-b-4 border-pupu shadow-xl">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-pupu to-pink-600 rounded-full flex items-center justify-center transform -rotate-12">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-lupu to-teal-600 rounded-full flex items-center justify-center transform rotate-12 -ml-3">
                  <Star className="w-7 h-7 text-white" />
                </div>
              </div>
              <span className="text-3xl font-black bg-gradient-to-r from-pupu to-lupu bg-clip-text text-transparent">
                Пупа & Лупа
              </span>
            </motion.div>

            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-pupu font-bold transition-colors text-lg">О нас</a>
              <a href="#voting" className="text-gray-700 hover:text-lupu font-bold transition-colors text-lg">Голосование</a>
              <a href="#gallery" className="text-gray-700 hover:text-pupu font-bold transition-colors text-lg">Галерея</a>
              <a href="#contact" className="text-gray-700 hover:text-lupu font-bold transition-colors text-lg">Контакты</a>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-8 h-8 text-pupu" /> : <Menu className="w-8 h-8 text-pupu" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden mt-4 pb-4 space-y-3"
            >
              <a href="#about" className="block text-gray-700 hover:text-pupu font-bold text-lg">О нас</a>
              <a href="#voting" className="block text-gray-700 hover:text-lupu font-bold text-lg">Голосование</a>
              <a href="#gallery" className="block text-gray-700 hover:text-pupu font-bold text-lg">Галерея</a>
              <a href="#contact" className="block text-gray-700 hover:text-lupu font-bold text-lg">Контакты</a>
            </motion.div>
          )}
        </nav>
      </header>

      {/* HERO */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-7xl md:text-9xl font-black mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-pupu via-purple-500 to-lupu bg-clip-text text-transparent">
                Пупа & Лупа
              </span>
            </h1>
            <p className="text-3xl md:text-4xl font-bold text-gray-700 mb-8">
              Самые яркие персонажи интернета! 🎉
            </p>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Добро пожаловать в удивительный мир Пупы и Лупы! Здесь вас ждут веселые истории, 
              крутые приключения и море позитива! Присоединяйтесь к нашему сообществу!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-pupu to-pink-600 hover:from-pink-600 hover:to-pupu text-white px-10 py-5 rounded-full text-xl font-black transition-all shadow-lg shadow-pupu/50 flex items-center justify-center gap-2"
              >
                Узнать больше
                <ChevronRight className="w-6 h-6" />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-lupu to-teal-600 hover:from-teal-600 hover:to-lupu text-white px-10 py-5 rounded-full text-xl font-black transition-all shadow-lg shadow-lupu/50"
              >
                Голосовать
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-6 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto">
          <h2 className="text-6xl font-black text-center mb-16">
            Кто такие <span className="text-pupu">Пупа</span> и <span className="text-lupu">Лупа?</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="bg-gradient-to-br from-pink-200 to-pupu/30 p-10 rounded-3xl border-4 border-pupu shadow-2xl"
            >
              <div className="bg-pupu w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-4xl font-black text-gray-800 mb-4">Пупа</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Веселая и энергичная! Пупа обожает приключения, танцы и все яркое! 
                Она всегда в центре внимания и знает, как поднять настроение друзьям.
              </p>
              <div className="flex gap-3 flex-wrap">
                <span className="bg-white px-4 py-2 rounded-full text-pupu font-bold">Танцы</span>
                <span className="bg-white px-4 py-2 rounded-full text-pupu font-bold">Музыка</span>
                <span className="bg-white px-4 py-2 rounded-full text-pupu font-bold">Веселье</span>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="bg-gradient-to-br from-cyan-200 to-lupu/30 p-10 rounded-3xl border-4 border-lupu shadow-2xl"
            >
              <div className="bg-lupu w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <Star className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-4xl font-black text-gray-800 mb-4">Лупа</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Умный и творческий! Лупа любит изобретать, рисовать и исследовать мир. 
                Он всегда придумывает что-то новое и интересное!
              </p>
              <div className="flex gap-3 flex-wrap">
                <span className="bg-white px-4 py-2 rounded-full text-lupu font-bold">Творчество</span>
                <span className="bg-white px-4 py-2 rounded-full text-lupu font-bold">Наука</span>
                <span className="bg-white px-4 py-2 rounded-full text-lupu font-bold">Искусство</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VOTING */}
      <section id="voting" className="py-20 px-6 bg-gradient-to-br from-purple-100 to-pink-100">
        <div className="container mx-auto">
          <h2 className="text-6xl font-black text-center mb-8">
            <Trophy className="w-16 h-16 inline-block mb-2 text-yellow-500" />
            <br />
            Кто круче?
          </h2>
          <p className="text-2xl text-center text-gray-700 mb-12 font-bold">
            Голосуй за своего любимого персонажа!
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-3xl border-4 border-pupu shadow-2xl"
            >
              <div className="text-center">
                <div className="bg-gradient-to-br from-pupu to-pink-600 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <Heart className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-4xl font-black text-gray-800 mb-4">Пупа</h3>
                <div className="text-6xl font-black text-pupu mb-6">{pupuVotes}</div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleVote('pupu')}
                  disabled={hasVoted}
                  className={`w-full py-4 rounded-full text-xl font-black transition-all ${
                    hasVoted 
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                      : 'bg-pupu hover:bg-pink-600 text-white shadow-lg shadow-pupu/50'
                  }`}
                >
                  {hasVoted ? '✓ Проголосовано' : 'Голосовать'}
                </motion.button>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-3xl border-4 border-lupu shadow-2xl"
            >
              <div className="text-center">
                <div className="bg-gradient-to-br from-lupu to-teal-600 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <Star className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-4xl font-black text-gray-800 mb-4">Лупа</h3>
                <div className="text-6xl font-black text-lupu mb-6">{lupuVotes}</div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleVote('lupu')}
                  disabled={hasVoted}
                  className={`w-full py-4 rounded-full text-xl font-black transition-all ${
                    hasVoted 
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                      : 'bg-lupu hover:bg-teal-600 text-white shadow-lg shadow-lupu/50'
                  }`}
                >
                  {hasVoted ? '✓ Проголосовано' : 'Голосовать'}
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-6 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto">
          <h2 className="text-6xl font-black text-center mb-16">
            Что вас <span className="text-pupu">ждет?</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Music, title: 'Музыка', desc: 'Крутые треки', color: 'pupu' },
              { icon: Camera, title: 'Фото', desc: 'Яркие моменты', color: 'lupu' },
              { icon: Gift, title: 'Призы', desc: 'Конкурсы', color: 'pupu' },
              { icon: Users, title: 'Сообщество', desc: 'Тысячи фанатов', color: 'lupu' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className={`bg-gradient-to-br from-${item.color}/20 to-white p-6 rounded-2xl border-4 border-${item.color} shadow-lg`}
              >
                <div className={`bg-${item.color} w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 font-bold">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-20 px-6 bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100">
        <div className="container mx-auto">
          <h2 className="text-6xl font-black text-center mb-16">
            <Camera className="w-16 h-16 inline-block mb-2 text-pupu" />
            <br />
            Галерея приключений
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {galleryItems.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white cursor-pointer group"
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <h3 className="text-white text-2xl font-black">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-pupu to-lupu">
        <div className="container mx-auto text-center">
          <h2 className="text-6xl font-black text-white mb-6">
            Присоединяйся к нам!
          </h2>
          <p className="text-2xl text-white/90 mb-10 max-w-2xl mx-auto font-bold">
            Стань частью самого веселого сообщества! Подписывайся на наши соцсети!
          </p>
          <div className="flex gap-4 justify-center mb-8">
            <motion.button whileHover={{ scale: 1.2 }} className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-xl">
              <Facebook className="w-8 h-8 text-pupu" />
            </motion.button>
            <motion.button whileHover={{ scale: 1.2 }} className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-xl">
              <Twitter className="w-8 h-8 text-lupu" />
            </motion.button>
            <motion.button whileHover={{ scale: 1.2 }} className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-xl">
              <Instagram className="w-8 h-8 text-pupu" />
            </motion.button>
            <motion.button whileHover={{ scale: 1.2 }} className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-xl">
              <Youtube className="w-8 h-8 text-lupu" />
            </motion.button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="bg-gray-900 py-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-pupu rounded-full flex items-center justify-center transform -rotate-12">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <div className="w-10 h-10 bg-lupu rounded-full flex items-center justify-center transform rotate-12 -ml-2">
                  <Star className="w-5 h-5 text-white" />
                </div>
              </div>
              <span className="text-2xl font-black text-white">Пупа & Лупа</span>
            </div>
            <div className="flex gap-6 text-gray-400">
              <a href="#about" className="hover:text-pupu transition-colors">О нас</a>
              <a href="#voting" className="hover:text-lupu transition-colors">Голосование</a>
              <a href="#gallery" className="hover:text-pupu transition-colors">Галерея</a>
            </div>
          </div>
          <div className="text-center text-gray-500 text-sm">
            © 2024 Пупа & Лупа. Все права защищены. Создано с ❤️ для взрослой аудитории 18+
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App