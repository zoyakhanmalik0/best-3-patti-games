import React, { useState } from 'react';
import { Search, Filter, Star, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const Games = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

 
  const games = [
    {
      id: 1,
      title: "Dragon Tiger Club",
      description: "Experience thrilling card-based action with strategic gameplay and vibrant visuals",
      image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=358,fit=crop/mv02znxE9VIjQByW/1000002709-AoPqxJoxNnivbrLo.png",
      category: "card",
      rating: 4.7,
      downloads: "500K+",
      link: "https://dragontigerclub.net/?from_gameid=5129078&channelCode=5128469"
    },
    {
      id: 2,
      title: "3 Patti No 1",
      description: "Classic Indian card game with competitive multiplayer and exciting rewards",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRER8EFNBuzPVKI1QWCFPjGZyl4ttYQKCAOzg&s",
      category: "card",
      rating: 4.8,
      downloads: "800K+",
      link: "https://3pattino1.com/?from_gameid=6372811&channelCode=6362528"
    },
    {
      id: 3,
      title: "Flying Chess",
      description: "Fun and engaging board game with strategic moves and multiplayer fun",
      image: "https://flyingchess.com.pk/wp-content/uploads/2025/02/flying-chess-apk.webp",
      category: "board",
      rating: 4.5,
      downloads: "300K+",
      link: "https://flyingchess.org/?from_gameid=7167825&channelCode=7167783"
    },
    {
      id: 4,
      title: "Teen Patti Gold",
      description: "Premium Teen Patti experience with golden rewards",
      image: "https://megafav.com/wp-content/uploads/2025/01/teen-patti-gold1-2.webp",
      category: "card",
      rating: 4.6,
      downloads: "700K+",
      link: "https://teenpattigold99.com/?from_gameid=4984716&channelCode=3853633"
    },
    {
      id: 5,
      title: "Flying Chess Pro",
      description: "Professional version of Flying Chess with enhanced features",
      image: "https://flyingchess.com.pk/wp-content/uploads/2025/02/flying-chess-apk.webp",
      category: "board",
      rating: 4.7,
      downloads: "400K+",
      link: "https://flychesspro.com/?from_gameid=7820458&channelCode=4216639"
    },
    {
      id: 6,
      title: "S9 Pro",
      description: "Advanced gaming platform with multiple game options",
      image: "https://s9game.com.pk/wp-content/uploads/2024/06/S9-Game.webp",
      category: "platform",
      rating: 4.8,
      downloads: "1M+",
      link: "https://s9game.vip/?from_gameid=5013691&channelCode=100000"
    },
    {
      id: 7,
      title: "Teen Patti Real",
      description: "Authentic Teen Patti experience with real players",
      image: "https://is5-ssl.mzstatic.com/image/thumb/Purple125/v4/58/92/f6/5892f63a-c4e2-e429-ef99-3fc6ffc357bc/source/512x512bb.jpg",
      category: "card",
      rating: 4.6,
      downloads: "600K+",
      link: "https://pkteenpattireal.com/?from_gameid=5529088&channelCode=5524996"
    },
    {
      id: 8,
      title: "3 Card Fly",
      description: "Fast-paced card game with flying animations",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb2eLcvR-S3-D6g4nWq2uPM39jLT7Cc1wS0A&s",
      category: "card",
      rating: 4.5,
      downloads: "350K+",
      link: "https://3cardfly.com/?from_gameid=4390009&channelCode=100000"
    },
    {
      id: 9,
      title: "3 Patti Super",
      description: "Supercharged Teen Patti with enhanced features",
      image: "https://image.winudf.com/v2/image1/Y29tLnNwcmVhZGVydGVjaC50cHdpbl9pY29uXzE3MTIxMjM5OTJfMDI5/icon.png?w=280&fakeurl=1",
      category: "card",
      rating: 4.7,
      downloads: "550K+",
      link: "https://3pattisupera1.com/?from_gameid=7290012&channelCode=7225507"
    },
    {
      id: 10,
      title: "Yallah Rummy",
      description: "Exciting rummy card game with Middle Eastern flair",
      image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1200,h=630,fit=crop,f=jpeg/A3QO6LP24pFJqnLN/screenshot_2025-02-04-14-02-22-31_40deb401b9ffe8e1df2f1cc5ba480b12-removebg-preview-1-ALp7y1eV34Tea1XA.png",
      category: "card",
      rating: 4.4,
      downloads: "250K+",
      link: "https://yallarummy.com/?from_gameid=6378408&channelCode=6362002"
    },
    {
      id: 11,
      title: "PK 555",
      description: "Exciting card game with multiple variations and rewards",
      image: "https://pk555game.net/wp-content/uploads/2024/09/PK555-Game-2.webp",
      category: "card",
      rating: 4.6,
      downloads: "450K+",
      link: "https://pk555vip.com/?from_gameid=7245477&channelCode=5153321"
    },
    {
      id: 12,
      title: "3 Patti BestBet",
      description: "Premium betting experience with classic Indian card game",
      image: "https://www.saferwap.com/images/1732996938.webp",
      category: "card",
      rating: 4.5,
      downloads: "380K+",
      link: "https://pkbestbet.com/?from_gameid=7502235&channelCode=300000"
    },
    {
      id: 13,
      title: "Teen Patti Mela",
      description: "Festive card gaming experience with special events",
      image: "https://play-lh.googleusercontent.com/5q4tG87QSA_prbH5D-rOCop0bonA96gboe4SruFNqB0IktruKOV9nM3QcJAXcYzjcZ8A",
      category: "card",
      rating: 4.4,
      downloads: "320K+",
      link: "https://teenpattimela.com/?from_gameid=4909585&channelCode=100000"
    },
    {
      id: 14,
      title: "3 Patti LudoBounty",
      description: "Combine Ludo and Teen Patti for double the excitement",
      image: "https://3pattibounty.xyz/wp-content/uploads/2025/03/Logo-3-Patti-Bounty-Game-APK-Pakistan.png",
      category: "hybrid",
      rating: 4.7,
      downloads: "520K+",
      link: "https://megaludobounty.com/?from_gameid=4384732&channelCode=4727636"
    },
    {
      id: 15,
      title: "3 Patti Room",
      description: "Private rooms for playing with friends and family",
      image: "https://image.winudf.com/v2/image1/ZGV0YWlsZWRseS53aGF0c29ldmVyLm91cnNlbGZfaWNvbl8xNjY4MDU3NTUyXzAzOA/icon.png?w=280&fakeurl=1",
      category: "card",
      rating: 4.3,
      downloads: "280K+",
      link: "https://3pattiroom.com/?from_gameid=5088456&channelCode=100000"
    },
    {
      id: 16,
      title: "3 Patti Blue",
      description: "Premium blue-themed Teen Patti experience",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjrU9P8mO6NykgT9saQ7eal7qH5so9W20_LQ&s",
      category: "card",
      rating: 4.5,
      downloads: "420K+",
      link: "https://pk3pattiblue.com/?from_gameid=5085123&channelCode=100000"
    },
    {
      id: 17,
      title: "Card Rummy",
      description: "Classic rummy card game with modern twists",
      image: "https://img.utdstc.com/icon/c83/f5e/c83f5e9bbae291d6a6c27e32d7953b0cfa965098fa9043db06e1b00e9d77122c:200",
      category: "card",
      rating: 4.4,
      downloads: "310K+",
      link: "https://pkcardrummy.com/?from_gameid=5270962&channelCode=5107910"
    },
    {
      id: 18,
      title: "3 Patti Sky",
      description: "High-flying Teen Patti experience with sky-high rewards",
      image: "https://3pattiskyapk.com/wp-content/uploads/2024/08/sky.webp",
      category: "card",
      rating: 4.6,
      downloads: "480K+",
      link: "https://3pattiskypk1.com/?from_gameid=4861821&channelCode=4040533"
    },
    {
      id: 19,
      title: "3 Patti Online",
      description: "The classic Teen Patti experience optimized for online play",
      image: "https://play-lh.googleusercontent.com/cg2JgAN16YE-kBn02qYs-fGocboJ6c-rTsdUX8Mg6b-xJXkdyNvrCx5YNcC8RKWt7KPY",
      category: "card",
      rating: 4.8,
      downloads: "950K+",
      link: "https://3pattionline.com/?from_gameid=3358141&channelCode=100000"
    },
    {
      id: 20,
      title: "3 Patti Winner",
      description: "Prove your skills and become the ultimate Teen Patti champion",
      image: "https://lh3.googleusercontent.com/ICen6EtNpreL9yyWdns_1EkLn3vJBiWCKoolGxJ5S3zhJOK5h2kpml6E-DFHiSRocjA=h512",
      category: "card",
      rating: 4.7,
      downloads: "650K+",
      link: "https://3pattiwinner456.com/?from_gameid=3010808&channelCode=2987005"
    },
    {
      id: 21,
      title: "3 Patti Land",
      description: "Enter the world of Teen Patti with immersive gameplay",
      image: "https://3pattiland.net/wp-content/uploads/2024/07/3pattiland.net-1.webp",
      category: "card",
      rating: 4.5,
      downloads: "430K+",
      link: "https://3pattiland.com/?from_gameid=4103316&channelCode=2987005"
    },
    {
      id: 22,
      title: "Teen Patti Spin",
      description: "Spin to win special bonuses in this exciting Teen Patti variant",
      image: "https://teenpatti.pk/wp-content/uploads/teen-patti-spin-logo.webp",
      category: "card",
      rating: 4.4,
      downloads: "370K+",
      link: "https://spinteenpatti.com/?from_gameid=5065387&channelCode=4040533"
    },
    {
      id: 23,
      title: "3 Patti Crown",
      description: "Royal Teen Patti experience fit for a king",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiPDsomXICi_0hUrrBBIPKTiGlF-QSX9osUg&s",
      category: "card",
      rating: 4.6,
      downloads: "510K+",
      link: "https://3patticrown.net/?from_gameid=5375268&channelCode=3267635"
    },
    {
      id: 24,
      title: "3 Patti Boss",
      description: "Become the boss of Teen Patti with this premium app",
      image: "https://3pattibosspk.pro/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-10-at-12.11.37_bdfb58e1.jpg",
      category: "card",
      rating: 4.7,
      downloads: "590K+",
      link: "https://3pattiboss.app/?from_gameid=4745711&channelCode=4704615"
    },
    {
      id: 25,
      title: "3 Patti Loot",
      description: "Loot big rewards in this exciting Teen Patti game",
      image: "https://teenpatti.pk/wp-content/uploads/3patti-loot-logo.webp",
      category: "card",
      rating: 4.5,
      downloads: "440K+",
      link: "https://3pattilootpkk1.com/?from_gameid=4449682&channelCode=4040533"
    },
    {
      id: 26,
      title: "3 Patti Pearl",
      description: "Discover precious wins in this gem-themed Teen Patti",
      image: "https://3pattiaz.com/wp-content/uploads/2025/02/3patti-pearl.jpg",
      category: "card",
      rating: 4.4,
      downloads: "360K+",
      link: "https://3pattipearl.com/?from_gameid=4468195&channelCode=100000"
    },
    {
      id: 27,
      title: "3 Patti Slot777",
      description: "Combine slots excitement with Teen Patti gameplay",
      image: "https://www.master-apps.in/wp-content/uploads/2024/08/jahds.jpg",
      category: "hybrid",
      rating: 4.6,
      downloads: "490K+",
      link: "https://svipslots777.com/?from_gameid=5058580&channelCode=200000"
    },
    {
      id: 28,
      title: "3 Patti Best",
      description: "The best Teen Patti experience with premium features",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXOwIyRRF6YEqSLJkBTjZmERZzTNZOIUeYNeqRxbysW3Qa682Pln3Wkfoyv1kkMl4A3Ns&usqp=CAU",
      category: "card",
      rating: 4.8,
      downloads: "880K+",
      link: "https://teenpattibest888.com/?from_gameid=4950961&channelCode=4727636"
    },
    {
      id: 29,
      title: "3 Patti Vegas",
      description: "Las Vegas style Teen Patti with high-stakes action",
      image: "https://www.3patti.biz/images/1740581382.webp",
      category: "card",
      rating: 4.7,
      downloads: "620K+",
      link: "https://teenpattivegas.com/?from_gameid=4084992&channelCode=100000"
    },
    {
      id: 30,
      title: "3 Patti LudoTiger",
      description: "Wild combination of Ludo and Teen Patti with tiger-themed bonuses",
      image: "https://ludotiger.net/wp-content/uploads/2024/11/Ludo-Tiger-1.webp",
      category: "hybrid",
      rating: 4.5,
      downloads: "410K+",
      link: "https://megaludotiger.com/?from_gameid=4667699&channelCode=100000"
    },
    {
      id: 31,
      title: "3 Patti World",
      description: "Global Teen Patti experience with players worldwide",
      image: "https://image.winudf.com/v2/image1/ZmFza2xlLnNiZ2VzLmJyc3NmLmdlcmhnZV9pY29uXzE2NzgyNTg4ODhfMDAx/icon.png?w=280&fakeurl=1",
      category: "card",
      rating: 4.6,
      downloads: "530K+",
      link: "https://3pattiworldpkk.com/?from_gameid=4479766&channelCode=100000"
    },
    {
      id: 32,
      title: "3 Patti Lucky",
      description: "Test your luck in this fortune-focused Teen Patti variant",
      image: "https://3pattilucky.net/wp-content/uploads/2025/08/3-Patti-Lucky.webp",
      category: "card",
      rating: 4.4,
      downloads: "340K+",
      link: "https://pk3pattilucky.com/?from_gameid=4557366&channelCode=4068266"
    },
    {
      id: 33,
      title: "3 Patti Royal/Happy Club",
      description: "Royal treatment and happy gaming in this premium club",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQmlDYmPwM4OpoYVJCNtcs9vceEx_E6p7gQcBHXio9JOr4-iMI1RT6VSqNTIN40OeY6t4&usqp=CAU",
      category: "card",
      rating: 4.7,
      downloads: "580K+",
      link: "https://3pattiroyal.com/?from_gameid=5570111&channelCode=2950163"
    },
    {
      id: 34,
      title: "3 Patti Free",
      description: "Enjoy free-to-play Teen Patti with real rewards",
      image: "https://3pattifree.net/wp-content/uploads/2024/12/3-Patti-Free.webp",
      category: "card",
      rating: 4.3,
      downloads: "290K+",
      link: "https://3pattifree.com/?from_gameid=7820458&channelCode=4216639"
    },
    {
      id: 35,
      title: "3 Patti Blue One",
      description: "Another premium blue-themed Teen Patti experience",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVoQpMSRC_vJywoMOZMdC7DNIll5KjpE12c_Re6WodZlP8g19Dv-2SnLv7PBZVHuH6Uwk&usqp=CAU",
      category: "card",
      rating: 4.5,
      downloads: "460K+",
      link: "https://3pattiblue1.com/?from_gameid=2971368&channelCode=100000"
    },
    {
      id: 36,
      title: "3 Patti LudoBonus",
      description: "Bonus-filled combination of Ludo and Teen Patti",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtD7K2Rx3BvSVXSU--pYeeiB69lkIGpdK4kA&s",
      category: "hybrid",
      rating: 4.6,
      downloads: "470K+",
      link: "https://megaludobonus.com/?from_gameid=4578606&channelCode=100000"
    },
    {
      id: 37,
      title: "3 Patti Lucky Go",
      description: "On-the-go lucky Teen Patti experience",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3hsfmFgKOWkwf5Y1JKxYmY_LN5FQSQxWLvg&s",
      category: "card",
      rating: 4.4,
      downloads: "330K+",
      link: "https://3pattiilucky.com/?from_gameid=4303489&channelCode=250000"
    },
    {
      id: 38,
      title: "3 Patti Poker",
      description: "Poker meets Teen Patti in this exciting card game hybrid",
      image: "https://m.media-amazon.com/images/I/81q6cNeUZxL.png",
      category: "card",
      rating: 4.7,
      downloads: "570K+",
      link: "https://pokeremag.com/?from_gameid=5136700&channelCode=200000"
    },
    {
      id: 39,
      title: "3 Patti Live",
      description: "Live dealer Teen Patti for an authentic casino experience",
      image: "https://img.utdstc.com/icon/68f/223/68f22395c642640f917d825f03a0b2afab9d4f20e08f58c24a6de06bea184088:200",
      category: "card",
      rating: 4.8,
      downloads: "920K+",
      link: "https://3pattilive11.com/?from_gameid=2990882&channelCode=2990658"
    },
    {
      id: 40,
      title: "3 Patti Max",
      description: "Maximum excitement with this high-intensity Teen Patti",
      image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=289,h=264,fit=crop/AwvD94lMJxh7O8ow/1000181634-photoaidcom-2x-ai-zoom-1-YD0BwlJbB7TK37p0.webp",
      category: "card",
      rating: 4.7,
      downloads: "640K+",
      link: "https://teenpattimax999.com/?from_gameid=5078433&channelCode=5013691"
    },
    {
      id: 41,
      title: "3 Patti Master",
      description: "Master the art of Teen Patti with this premium app",
      image: "https://i.pinimg.com/564x/0b/07/11/0b07110d4cd445662aae876f9a147732.jpg",
      category: "card",
      rating: 4.6,
      downloads: "540K+",
      link: "https://casino654.com/?from_gameid=3098539&channelCode=2950163"
    },
    {
      id: 42,
      title: "3 Patti Showy",
      description: "Show off your skills in this stylish Teen Patti variant",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVxr4p53upgjka450P_50lAu23OkFTiR3-2Wi5vvwHRuzcUXmn4jtGe313mhi-NnaF6_Y&usqp=CAU",
      category: "card",
      rating: 4.5,
      downloads: "390K+",
      link: "https://teenpattishowy.com/?from_gameid=5153659&channelCode=100000"
    },
    {
      id: 43,
      title: "3 Patti Elite",
      description: "Elite Teen Patti experience for premium players",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfBoRBc56L3xG8MhqIE3ZVG7yJNNBWBzqaAg&s",
      category: "card",
      rating: 4.8,
      downloads: "890K+",
      link: "https://teenpattielite888.com/?from_gameid=5529807&channelCode=5223898"
    },
    {
      id: 44,
      title: "3 Patti Wingo",
      description: "Wing your way to victory in this fast-paced Teen Patti",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf_E2V39Og3nhiEsqktk_70mpiXpkEnGXQSg&s",
      category: "card",
      rating: 4.5,
      downloads: "400K+",
      link: "https://3pattiwingo.com/?from_gameid=3318375&channelCode=3355835"
    },
    {
      id: 45,
      title: "3 Card Guru",
      description: "Become a card guru with this strategic Teen Patti variant",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbA1RNUhbQ5bW3Gl0cN406casdT-XxlVFoZw&s",
      category: "card",
      rating: 4.7,
      downloads: "560K+",
      link: "https://3cardguru.com/?from_gameid=3174030&channelCode=700000"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Games' },
    { id: 'card', label: 'Card Games' },
    { id: 'board', label: 'Board Games' },
    { id: 'platform', label: 'Platform' },
    { id: 'hybrid', label: 'Hybrid Games' }
  ];

  const filteredGames = games.filter(game => {
    const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || game.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Game Library
            </span>
          </h1>
          <p className="text-gray-400 text-lg">Discover amazing games for every type of gamer</p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search games..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-gray-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGames.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-black rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="relative">
                <img 
                  src={game.image} 
                  alt={game.title}
                  className="w-full h-48 object-contain group-hover:scale-110 transition-transform duration-500 bg-black"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="absolute top-4 right-4 bg-black/70 px-2 py-1 rounded-lg flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-white text-sm font-medium">{game.rating}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{game.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{game.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-green-400 font-medium flex items-center space-x-1">
                    <Download className="h-4 w-4" />
                    <span>{game.downloads}</span>
                  </span>
                  <span className="text-xs text-gray-500 uppercase tracking-wide bg-gray-800 px-2 py-1 rounded">
                    {game.category}
                  </span>
                </div>
                <a
                  href={game.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white py-3 rounded-lg font-medium transition-all duration-200 block text-center"
                >
                  Download Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredGames.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No games found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Games;