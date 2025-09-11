import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Trophy,
  Star,
  Users,
  CheckCircle,
  Image as ImageIcon,
} from "lucide-react";

const TeenPattiComparison: React.FC = () => {
  return (
    <div className="min-h-screen bg-black py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Teen Patti Gold vs Teen Patti Real – Which is Better?
            </span>
          </h1>
          <p className="text-gray-400 text-lg">
            A complete head-to-head guide comparing features, gameplay, and
            experience of the two most popular Teen Patti apps.
          </p>
        </div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-black rounded-xl p-6 border border-gray-700 mb-10"
        >
          <p className="text-gray-300 leading-relaxed text-lg">
            Teen Patti is a favorite card game in India and Pakistan, enjoyed by
            millions worldwide. Among the various apps available,{" "}
            <strong>Teen Patti Gold</strong> and{" "}
            <strong>Teen Patti Real</strong> dominate the charts. But{" "}
            <em>which one suits you better?</em> Let’s explore in detail.
          </p>
        </motion.div>

        {/* Teen Patti Gold */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-black rounded-xl border border-cyan-600/30 mb-10 overflow-hidden"
        >
          <img
            src="https://i.ibb.co/TL2LkS1/teen-patti-gold.jpg"
            alt="Teen Patti Gold"
            className="w-full h-60 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center space-x-2">
              <BookOpen className="h-6 w-6" />
              <span>What is Teen Patti Gold?</span>
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Smooth gameplay with beginner-friendly controls.</li>
              <li>Engaging social features like chat, emojis, and friend invites.</li>
              <li>Modes like Joker, Muflis, AK47, Royal, Poker & Rummy.</li>
              <li>Massive user base with active tables anytime.</li>
            </ul>
            <p className="text-sm text-gray-400 mt-4 italic">
              Keywords: Teen Patti Gold download, Teen Patti Gold game, best Teen
              Patti apps.
            </p>
          </div>
        </motion.div>

        {/* Teen Patti Real */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-black rounded-xl border border-purple-600/30 mb-10 overflow-hidden"
        >
          <img
            src="https://i.ibb.co/mGQhLZB/teen-patti-real.jpg"
            alt="Teen Patti Real"
            className="w-full h-60 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-purple-400 mb-4 flex items-center space-x-2">
              <Trophy className="h-6 w-6" />
              <span>What is Teen Patti Real?</span>
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Classic Teen Patti with competitive variations.</li>
              <li>High-quality, realistic graphics.</li>
              <li>Designed for experienced players seeking challenges.</li>
              <li>Private tables to play with friends securely.</li>
            </ul>
            <p className="text-sm text-gray-400 mt-4 italic">
              Keywords: Teen Patti Real app, Teen Patti Real features, best Teen
              Patti online game.
            </p>
          </div>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="overflow-x-auto mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
            <Star className="h-6 w-6 text-yellow-400" />
            <span>Head-to-Head Comparison</span>
          </h2>
          <table className="min-w-full border border-gray-700 text-gray-300 rounded-lg overflow-hidden">
            <thead className="bg-gray-800">
              <tr>
                <th className="px-4 py-3 text-left">Feature</th>
                <th className="px-4 py-3 text-left">Teen Patti Gold</th>
                <th className="px-4 py-3 text-left">Teen Patti Real</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Gameplay", "Beginner-friendly with multiple modes", "More realistic & competitive"],
                ["Graphics", "Colorful, casual, easy interface", "High-quality, realistic design"],
                ["Game Modes", "Classic + Joker, Muflis, AK47, Royal", "Primarily Classic & competitive"],
                ["Audience", "Casual and new players", "Experienced and competitive players"],
                ["Social Features", "Chat, emojis, friends invite", "Private tables, focused play"],
                ["Popularity", "Widely known, huge downloads", "Smaller but dedicated base"],
              ].map(([feature, gold, real], index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-900" : "bg-black"}
                >
                  <td className="px-4 py-3 font-medium text-white">{feature}</td>
                  <td className="px-4 py-3">{gold}</td>
                  <td className="px-4 py-3">{real}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Verdict */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-xl p-6 mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
            <Users className="h-6 w-6 text-green-400" />
            <span>Which is Better?</span>
          </h2>
          <p className="text-gray-300 leading-relaxed">
            If you’re a <strong>beginner or casual player</strong>,{" "}
            <span className="text-cyan-400">Teen Patti Gold</span> is perfect
            thanks to its simple interface and fun game modes.
            <br />
            If you’re an <strong>experienced player</strong> seeking realism and
            competition, <span className="text-purple-400">Teen Patti Real</span>{" "}
            is a better fit.
          </p>
        </motion.div>

        {/* FAQs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-black rounded-xl p-6 border border-gray-700"
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
            <CheckCircle className="h-6 w-6 text-cyan-400" />
            <span>FAQs</span>
          </h2>
          <div className="space-y-4 text-gray-300">
            <p>
              <strong>Q1:</strong> Which app is better for beginners?
              <br />👉 Teen Patti Gold is easier for new players.
            </p>
            <p>
              <strong>Q2:</strong> Which app has better graphics?
              <br />👉 Teen Patti Real offers realistic visuals.
            </p>
            <p>
              <strong>Q3:</strong> Can I play both for free?
              <br />👉 Yes, both allow free play with virtual chips.
            </p>
            <p>
              <strong>Q4:</strong> Which is more popular?
              <br />👉 Teen Patti Gold has a much larger user base.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TeenPattiComparison;
