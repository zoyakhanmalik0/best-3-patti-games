import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Download, Star, Users, Calendar, ArrowLeft, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const GameDetails = () => {
  const { id } = useParams();

  // Mock game data - in a real app, this would come from an API
  const games = {
    1: {
      title: "Cyber Strike",
      description: "Immerse yourself in the neon-lit streets of Neo Tokyo in this fast-paced cyberpunk action game. Battle through corporate districts, hack security systems, and uncover a conspiracy that threatens the digital world.",
      fullDescription: "Cyber Strike combines intense gunplay with hacking mechanics in a beautifully crafted cyberpunk world. Master different weapon types, upgrade your cybernetic implants, and navigate through a story-driven campaign filled with moral choices that impact the ending.",
      image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Action",
      rating: 4.8,
      downloads: "2.5M+",
      releaseDate: "2024",
      size: "12.5 GB",
      requirements: {
        minimum: "Windows 10, 8GB RAM, GTX 1060",
        recommended: "Windows 11, 16GB RAM, RTX 3070"
      },
      features: [
        "Story-driven campaign with multiple endings",
        "Advanced cybernetic upgrade system",
        "Realistic hacking mini-games",
        "Stunning neon-lit environments",
        "Dynamic weather and day/night cycle",
        "Customizable character builds"
      ],
      tips: [
        "Start with stealth missions to learn enemy patterns",
        "Invest in hacking skills early for easier progression",
        "Use cover effectively during firefights",
        "Explore side alleys for hidden upgrades and loot"
      ]
    }
  };

  const game = games[parseInt(id || '1') as keyof typeof games] || games[1];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/games"
          className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 mb-8 transition-colors duration-200"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Games</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Game Image */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-xl overflow-hidden border border-gray-700"
            >
              <img 
                src={game.image} 
                alt={game.title}
                className="w-full h-64 lg:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
            </motion.div>
          </div>

          {/* Game Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <h1 className="text-3xl md:text-4xl font-bold text-white">{game.title}</h1>
                <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                  {game.category}
                </span>
              </div>

              <div className="flex items-center space-x-6 mb-6 text-sm text-gray-400">
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-white font-medium">{game.rating}</span>
                  <span>Rating</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4 text-green-400" />
                  <span className="text-white font-medium">{game.downloads}</span>
                  <span>Downloads</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4 text-purple-400" />
                  <span className="text-white font-medium">{game.releaseDate}</span>
                </div>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {game.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 transform hover:scale-105 flex items-center space-x-2 justify-center shadow-xl">
                  <Download className="h-5 w-5" />
                  <span>Download Now - Free</span>
                </button>
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Shield className="h-4 w-4 text-green-400" />
                    <span>Virus-Free</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Zap className="h-4 w-4 text-yellow-400" />
                    <span>Fast Download</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Detailed Information */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {/* Game Description */}
          <div className="lg:col-span-2 space-y-8">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gray-900/50 rounded-xl p-6 border border-gray-700"
            >
              <h2 className="text-2xl font-bold mb-4 text-white">About This Game</h2>
              <p className="text-gray-300 leading-relaxed">
                {game.fullDescription}
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gray-900/50 rounded-xl p-6 border border-gray-700"
            >
              <h2 className="text-2xl font-bold mb-4 text-white">Game Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {game.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gray-900/50 rounded-xl p-6 border border-gray-700"
            >
              <h2 className="text-2xl font-bold mb-4 text-white">Gameplay Tips</h2>
              <div className="space-y-3">
                {game.tips.map((tip, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    <p className="text-gray-300">{tip}</p>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gray-900/50 rounded-xl p-6 border border-gray-700 sticky top-24"
            >
              <h3 className="text-xl font-bold mb-4 text-white">Game Information</h3>
              <div className="space-y-4">
                <div>
                  <span className="text-gray-400 text-sm">File Size</span>
                  <p className="text-white font-medium">{game.size}</p>
                </div>
                <div>
                  <span className="text-gray-400 text-sm">Category</span>
                  <p className="text-white font-medium">{game.category}</p>
                </div>
                <div>
                  <span className="text-gray-400 text-sm">Release Year</span>
                  <p className="text-white font-medium">{game.releaseDate}</p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-700">
                <h4 className="text-lg font-semibold mb-3 text-white">System Requirements</h4>
                <div className="space-y-3">
                  <div>
                    <span className="text-gray-400 text-sm">Minimum</span>
                    <p className="text-gray-300 text-sm">{game.requirements.minimum}</p>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">Recommended</span>
                    <p className="text-gray-300 text-sm">{game.requirements.recommended}</p>
                  </div>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white py-3 rounded-lg font-bold transition-all duration-200 transform hover:scale-105 flex items-center space-x-2 justify-center mt-6 shadow-xl">
                <Download className="h-5 w-5" />
                <span>Download {game.title}</span>
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;