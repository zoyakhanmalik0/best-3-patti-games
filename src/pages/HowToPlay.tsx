import React from "react";
import { motion } from "framer-motion";

const HowToPlay = () => {
  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-400 to-yellow-500 bg-clip-text text-transparent">
              How to Play
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Whether you are a beginner or an experienced player, follow this
            simple guide to learn the basics of playing and enjoy the game to
            the fullest.
          </p>
        </div>

        {/* Playing Steps */}
        <div className="space-y-10 text-gray-300 leading-relaxed">
          {[
            {
              step: "1. Launch the Game",
              desc: "Open the installed game by tapping its icon on your device or selecting it from the menu on our website.",
            },
            {
              step: "2. Understand the Objective",
              desc: "Each game has a specific goal – it could be scoring points, defeating opponents, or completing levels. Read the game’s rules to understand your objective clearly.",
            },
            {
              step: "3. Learn the Controls",
              desc: "Familiarize yourself with game controls. On mobile, this may include tap, swipe, or tilt. On PC, controls usually involve the keyboard and mouse.",
            },
            {
              step: "4. Start with Beginner Mode",
              desc: "Many games offer a tutorial or practice mode. Start there to understand the mechanics before playing in competitive or advanced levels.",
            },
            {
              step: "5. Develop a Strategy",
              desc: "Pay attention to game rules and patterns. Creating a strategy will improve your chances of winning and make gameplay more fun.",
            },
            {
              step: "6. Play Responsibly",
              desc: "Enjoy the game for entertainment. Take breaks regularly and make sure you play responsibly without overextending your time.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h2 className="text-2xl font-semibold text-white mb-3">
                {item.step}
              </h2>
              <p>{item.desc}</p>
            </motion.div>
          ))}

          {/* Extra Tips Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700"
          >
            <h2 className="text-2xl font-semibold text-white mb-3">
              Pro Tips for Better Gameplay
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Read the game rules carefully before starting.</li>
              <li>Practice regularly to improve your skills.</li>
              <li>Watch tutorials or guides if available.</li>
              <li>Play with friends for a more enjoyable experience.</li>
              <li>Stay calm and avoid rushing moves – patience wins games.</li>
            </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-10 text-center"
          >
            <p>
              Need help with a specific game? Visit the{" "}
              <a
                href="/installation-guide"
                className="text-yellow-400 hover:underline font-medium"
              >
                Game Guides
              </a>{" "}
              section or contact us through the{" "}
              <a
                href="/contact"
                className="text-pink-400 hover:underline font-medium"
              >
                Contact Page
              </a>
              .
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HowToPlay;
