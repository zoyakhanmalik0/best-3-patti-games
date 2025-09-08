import React, { useState, useEffect } from 'react';
import { 
  Download, Star, Shield, Users, ChevronRight, 
  Calendar, User, Eye, BookOpen, ArrowUp, Gamepad2 
} from 'lucide-react';
import { motion } from 'framer-motion';
import GameSection1 from "../pages/gamesection1"

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Teen Patti Games to Play in 2025",
      excerpt: "Explore the most popular Teen Patti games of 2025. Find out which ones offer the best features, gameplay, and rewards.",
      image: "https://www.baltana.com/files/wallpapers-29/Card-HD-Wallpapers-88804.jpg",
      author: "Game Masters Team",
      date: "Jan 12, 2025",
      category: "Teen Patti",
      readTime: "6 min read",
      views: "15.2K",
      link: "#"
    },
    {
      id: 2,
      title: "Best Teen Patti Winning Tricks That Actually Work",
      excerpt: "Discover proven strategies and tricks to increase your chances of winning in Teen Patti. Perfect for both beginners and pros.",
      image: "https://e1.pxfuel.com/desktop-wallpaper/186/783/desktop-wallpaper-card-%E2%9D%A4-for-ultra-tv-%E2%80%A2-tablet-king-card.jpg",
      author: "Strategy Experts",
      date: "Jan 15, 2025",
      category: "Tips & Tricks",
      readTime: "5 min read",
      views: "23.8K",
      link: "#"
    },
    {
      id: 3,
      title: "How to Master Dragon Tiger – Complete Guide",
      excerpt: "Dragon Tiger is fast and thrilling. Learn the rules, strategies, and tips to become a pro player in no time.",
      image: "https://www.filmink.com.au/wp-content/uploads/2024/08/dt1.jpg",
      author: "Casino Guide",
      date: "Jan 18, 2025",
      category: "Dragon Tiger",
      readTime: "7 min read",
      views: "31.5K",
      link: "#"
    },
    {
      id: 4,
      title: "Flying Chess for Beginners – Step by Step Guide",
      excerpt: "Learn how to play Flying Chess, the fun and exciting board game. This beginner's guide covers everything you need to know.",
      image: "https://media.istockphoto.com/id/1310296063/photo/the-chess-queen-breaks-the-defense-of-the-black-pieces.jpg?s=612x612&w=0&k=20&c=t6TGHyiyRw5t1T_g_pbisfcXZYf_iugQDxivxK5Jc_E=",
      author: "Board Games Hub",
      date: "Jan 20, 2025",
      category: "Board Games",
      readTime: "4 min read",
      views: "18.9K",
      link: "#"
    },
    {
      id: 5,
      title: "Teen Patti Gold vs Teen Patti Real – Which is Better?",
      excerpt: "Compare Teen Patti Gold and Teen Patti Real. Find out which game gives you the best experience, graphics, and rewards.",
      image: "https://lh3.googleusercontent.com/GC8Zn1n6QMYILivVCszFwZCJwNoh3TioIRCf3JcF_MxsGg1B00k7ClWqZG1gUx-WAq9E=h310",
      author: "Comparison Team",
      date: "Jan 22, 2025",
      category: "Teen Patti",
      readTime: "6 min read",
      views: "42.1K",
      link: "#"
    },
    {
      id: 6,
      title: "Advanced Strategies for Teen Patti Tournaments",
      excerpt: "Take your Teen Patti skills to the next level with these advanced tournament strategies used by professional players.",
      image: "https://teen-patti-real-cash.net/wp-content/uploads/How-to-play-Teen-Patti.jpg",
      author: "Pro Players Association",
      date: "Jan 25, 2025",
      category: "Teen Patti",
      readTime: "8 min read",
      views: "67.3K",
      link: "#"
    }
  ];

  const categories = ["All", "Teen Patti", "Tips & Tricks", "Dragon Tiger", "Board Games"];

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <GameSection1/>
      
      {/* Blog Section */}
      <section id="blog" className="py-24 bg-black relative">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Heading */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                3 Patti Club Blogs
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Expert articles, guides, and tips for Teen Patti, Dragon Tiger & more
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div 
            className="flex flex-wrap gap-3 mb-12 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/30"
                    : "bg-gray-900 text-gray-300 hover:bg-gray-800 hover:text-white border border-gray-800"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Featured Post */}
          {filteredPosts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="relative mb-16 rounded-2xl overflow-hidden group cursor-pointer"
              onClick={() => window.open(filteredPosts[0].link, '_blank')}
            >
              <div className="relative h-[500px] overflow-hidden">
                <img
                  src={filteredPosts[0].image}
                  alt={filteredPosts[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1.5 rounded-full text-xs font-medium">
                    {filteredPosts[0].category}
                  </span>
                  <span className="flex items-center text-gray-300 text-sm">
                    <Eye className="h-4 w-4 mr-1" />
                    {filteredPosts[0].views}
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-4 max-w-3xl">
                  {filteredPosts[0].title}
                </h2>
                
                <p className="text-gray-300 mb-6 max-w-3xl text-lg">
                  {filteredPosts[0].excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <User size={16} />
                    <span>{filteredPosts[0].author}</span>
                    <span className="mx-2">•</span>
                    <Calendar size={16} />
                    <span>{filteredPosts[0].date}</span>
                    <span className="mx-2">•</span>
                    <span>{filteredPosts[0].readTime}</span>
                  </div>
                  
                  <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    <span className="font-medium mr-2">Read More</span>
                    <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Blog Posts Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {filteredPosts.slice(1).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
                className="bg-gradient-to-br from-neutral-900/80 to-neutral-800/80 rounded-3xl overflow-hidden border border-neutral-700 hover:border-cyan-500/50 transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer backdrop-blur-xl"
                onClick={() => window.open(post.link, '_blank')}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
                  <div className="absolute top-4 left-4 bg-black/80 text-cyan-400 px-3 py-1.5 rounded-full text-xs font-medium">
                    {post.category}
                  </div>
                  <div className="absolute top-4 right-4 bg-black/80 text-gray-300 px-2.5 py-1.5 rounded-full text-xs flex items-center">
                    <Eye size={12} className="mr-1" />
                    {post.views}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-5 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-5">
                    <div className="flex items-center gap-2">
                      <User size={14} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-gray-400 text-xs">
                      {post.readTime}
                    </div>
                    <div className="flex items-center text-cyan-500 group-hover:text-cyan-400 transition-colors text-sm font-medium">
                      <span className="mr-2">Read article</span>
                      <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Scroll to Top */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/30 transition-all duration-300 transform hover:scale-110 z-50 group"
      >
        <ArrowUp className="h-6 w-6 text-white group-hover:animate-bounce" />
      </button>
    </div>
  );
};

export default Home;