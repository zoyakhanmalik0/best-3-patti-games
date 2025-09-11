import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download,
  Gift,
  CreditCard,
  Users,
  CheckCircle,
  Star,
  ChevronDown,
} from "lucide-react";

const FlyingChessPage: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      q: "Is Flying Chess Mod APK available?",
      a: "Official APKs are provided by the publisher — avoid unofficial mods as they may be unsafe.",
    },
    {
      q: "Is Flying Chess real?",
      a: "The app is designed for entertainment. Always check reviews and terms before using real funds.",
    },
    {
      q: "Is Flying Chess safe to download?",
      a: "Download only from trusted sources. Enable unknown sources only briefly and scan files if possible.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white pb-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden mb-8 md:mb-12"
        >
          <div className="flex flex-col md:flex-row items-center bg-black p-4 md:p-8">
            {/* Image */}
            <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
              <img
                src="https://flyprochess.com/wp-content/uploads/2025/09/cropped-Faviconfc.png"
                alt="Flying Chess – Fun board game with rewards"
                className="w-48 h-48 md:w-64 md:h-64 object-contain"
              />
            </div>

            {/* Content */}
            <div className="w-full md:w-2/3 flex flex-col items-center md:items-start text-center md:text-left px-2 md:px-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent leading-snug">
                Flying Chess APK
              </h1>
              <p className="text-gray-200 text-sm sm:text-base md:text-lg max-w-2xl mb-4 md:mb-6">
                Download, register and enjoy classic board game action with rewards in Pakistan.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto justify-center md:justify-start">
                <a
                  href="https://flyingchess.org/?from_gameid=7167825&channelCode=7167783"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-cyan-600 text-white font-semibold rounded-xl flex items-center justify-center gap-2 hover:bg-cyan-500 transition"
                  aria-label="Download Flying Chess APK"
                >
                  <Download className="h-5 w-5" /> Download APK
                </a>
                <a
                  href="https://flyingchess.org/?from_gameid=7167825&channelCode=7167783"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-purple-600/80 text-white font-semibold rounded-xl flex items-center justify-center gap-2 hover:bg-purple-500 transition"
                  aria-label="Claim welcome bonus"
                >
                  <Gift className="h-5 w-5" /> Claim Bonus
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quick Info */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-900/60 rounded-xl p-4 md:p-6 border border-gray-700 mb-8 md:mb-12 shadow-lg"
        >
          <h2 className="text-xl md:text-2xl font-semibold mb-4">App Information</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-gray-300 border border-gray-700 rounded-lg overflow-hidden">
              <tbody>
                <tr className="bg-gray-800/50">
                  <td className="px-3 py-2 md:px-4 md:py-3 font-medium">Name</td>
                  <td className="px-3 py-2 md:px-4 md:py-3">Flying Chess</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 md:px-4 md:py-3 font-medium">Publisher</td>
                  <td className="px-3 py-2 md:px-4 md:py-3">FlyingChess</td>
                </tr>
                <tr className="bg-gray-800/50">
                  <td className="px-3 py-2 md:px-4 md:py-3 font-medium">Version</td>
                  <td className="px-3 py-2 md:px-4 md:py-3">v1.0.0</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 md:px-4 md:py-3 font-medium">Size</td>
                  <td className="px-3 py-2 md:px-4 md:py-3">50MB</td>
                </tr>
                <tr className="bg-gray-800/50">
                  <td className="px-3 py-2 md:px-4 md:py-3 font-medium">Rating Count</td>
                  <td className="px-3 py-2 md:px-4 md:py-3">12,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-6 text-center">
            Why Choose Flying Chess?
          </h3>
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {[
              {
                icon: <CreditCard className="h-6 w-6 text-cyan-300" />,
                title: "Play & Earn",
                desc: "Install the app, play Flying Chess, and unlock rewards as you play.",
              },
              {
                icon: <Gift className="h-6 w-6 text-purple-300" />,
                title: "Refer & Earn",
                desc: "Invite friends via WhatsApp or Telegram and get bonuses.",
              },
              {
                icon: <Users className="h-6 w-6 text-green-300" />,
                title: "Multiple Games",
                desc: "Includes Flying Chess, Ludo, Monopoly and more.",
              },
              {
                icon: <Star className="h-6 w-6 text-yellow-300" />,
                title: "24/7 Support",
                desc: "Live support on Telegram + instant app updates.",
              },
            ].map((f, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="bg-gray-900/60 p-4 md:p-5 rounded-xl border border-gray-700 flex gap-3 md:gap-4"
              >
                {f.icon}
                <div>
                  <h4 className="font-semibold text-white text-sm md:text-base">{f.title}</h4>
                  <p className="text-gray-400 text-xs md:text-sm">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-purple-400 mb-6 text-center">
            Gameplay Previews
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {[
              { src: "DTCscreenshot1.jpg", alt: "Flying Chess gameplay screenshot 1" },
              { src: "DTCscreenshot2.jpg", alt: "Flying Chess gameplay screenshot 2" },
              { src: "DTCscreenshot3.jpg", alt: "Flying Chess gameplay screenshot 3" },
            ].map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="rounded-xl border border-gray-700 shadow-lg overflow-hidden"
              >
                <img src={img.src} alt={img.alt} className="w-full h-48 md:h-64 object-cover" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-6 flex items-center gap-2 justify-center md:justify-start">
            <CheckCircle className="h-6 w-6 md:h-7 md:w-7 text-cyan-400" /> FAQs
          </h3>
          <div className="space-y-3 md:space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-gray-900/60 rounded-lg border border-gray-700 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                  className="w-full flex justify-between items-center px-4 py-3 font-medium text-left text-sm md:text-base"
                  aria-expanded={openFAQ === idx}
                  aria-controls={`faq-answer-${idx}`}
                >
                  {faq.q}
                  <ChevronDown
                    className={`h-5 w-5 transform transition ${
                      openFAQ === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFAQ === idx && (
                    <motion.div
                      id={`faq-answer-${idx}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-4 pb-4 text-gray-400 text-sm md:text-base">{faq.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Final Thoughts */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-900/60 rounded-xl p-4 md:p-6 shadow-lg"
        >
          <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
            Final Thoughts
          </h3>
          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            <a
              href="https://flyingchess.org/?from_gameid=7167825&channelCode=7167783"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 underline hover:text-cyan-300 transition"
            >
              Flying Chess
            </a>{" "}
            is one of the most fun board-game style apps in Pakistan, offering engaging gameplay and rewards. Download today and start enjoying classic board fun with friends!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default FlyingChessPage;
