import React, { useState } from "react";
import { Calendar, User, ArrowRight, TrendingUp, Clock, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  link: string;
}

const Blog = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Top 10 Teen Patti Games to Play in 2025",
      excerpt:
        "Explore the most popular Teen Patti games of 2025. Find out which ones offer the best features, gameplay, and rewards.",
      image:
        "https://www.baltana.com/files/wallpapers-29/Card-HD-Wallpapers-88804.jpg", 
      author: "Game Masters Team",
      date: "2025-01-12",
      category: "Teen Patti",
      readTime: "6 min read",
      link: "#",
    },
    {
      id: 2,
      title: "Dragon Tiger Club APK Pakistan Free Download for Android",
      excerpt:
        "Discover proven strategies and tricks to increase your chances of winning in Teen Patti. Perfect for both beginners and pros.",
      image:
        "https://www.filmink.com.au/wp-content/uploads/2024/08/dt1.jpg", 
      author: "Strategy Experts",
      date: "2025-01-15",
      category: "Tips & Tricks",
      readTime: "5 min read",
      link: "/Dragon-tiger-club",
    },
    {
      id: 3,
      title: "How to Master Dragon Tiger – Complete Guide",
      excerpt:
        "Dragon Tiger is fast and thrilling. Learn the rules, strategies, and tips to become a pro player in no time.",
      image:
        "https://www.filmink.com.au/wp-content/uploads/2024/08/dt1.jpg", // Dragon Tiger table game
      author: "Casino Guide",
      date: "2025-01-18",
      category: "Dragon Tiger",
      readTime: "7 min read",
      link: "#",
    },
    {
      id: 4,
      title: "Flying Chess for Beginners – Step by Step Guide",
      excerpt:
        "Learn how to play Flying Chess, the fun and exciting board game. This beginner's guide covers everything you need to know.",
      image:
        "https://media.istockphoto.com/id/1310296063/photo/the-chess-queen-breaks-the-defense-of-the-black-pieces.jpg?s=612x612&w=0&k=20&c=t6TGHyiyRw5t1T_g_pbisfcXZYf_iugQDxivxK5Jc_E=", // Colorful board game pieces
      author: "Board Games Hub",
      date: "2025-01-20",
      category: "Board Games",
      readTime: "4 min read",
      link: "#",
    },
    {
      id: 5,
      title: "Teen Patti Gold vs Teen Patti Real – Which is Better?",
      excerpt:
        "Compare Teen Patti Gold and Teen Patti Real. Find out which game gives you the best experience, graphics, and rewards.",
      image:
        "https://lh3.googleusercontent.com/GC8Zn1n6QMYILivVCszFwZCJwNoh3TioIRCf3JcF_MxsGg1B00k7ClWqZG1gUx-WAq9E=h310", // Gold playing cards
      author: "Comparison Team",
      date: "2025-01-22",
      category: "Teen Patti",
      readTime: "6 min read",
      link: "/3pattigold-vs-3pattireal",
    },
    {
      id: 6,
      title: "Advanced Strategies for Teen Patti Tournaments",
      excerpt:
        "Take your Teen Patti skills to the next level with these advanced tournament strategies used by professional players.",
      image:
        "https://teen-patti-real-cash.net/wp-content/uploads/How-to-play-Teen-Patti.jpg", // Tournament setting with cards
      author: "Pro Players Association",
      date: "2025-01-25",
      category: "Teen Patti",
      readTime: "8 min read",
      link: "#",
    },
  ];

  const categories: string[] = [
    "All",
    "Teen Patti",
    "Tips & Tricks",
    "Dragon Tiger",
    "Board Games",
  ];

  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredPosts: BlogPost[] =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-rose-500 bg-clip-text text-transparent">
              Gaming Blog & Strategies
            </span>
          </motion.h1>
          <motion.p 
            className="text-gray-400 text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Expert articles, guides, and tips for Teen Patti, Dragon Tiger & more
          </motion.p>
        </div>

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
                  <Clock size={14} className="mr-1" />
                  {filteredPosts[0].readTime}
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
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
              className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-cyan-500/40 transition-all duration-300 group cursor-pointer"
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
                  <Clock size={12} className="mr-1" />
                  {post.readTime}
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
                
                <div className="flex items-center text-cyan-500 group-hover:text-cyan-400 transition-colors text-sm font-medium">
                  <span className="mr-2">Read article</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Newsletter Subscription */}
        <motion.div 
          className="mt-20 p-8 rounded-2xl bg-gradient-to-r from-gray-900 to-black border border-gray-800 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">Stay Updated with Gaming Tips</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest strategies, game updates, and exclusive tips.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
            <button className="px-5 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-0.5">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;