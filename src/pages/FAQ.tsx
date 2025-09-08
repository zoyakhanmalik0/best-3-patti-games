import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Shield, Download, Cpu, HelpCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData = [
    {
      category: "Game Downloads & Safety",
      icon: Shield,
      questions: [
        {
          question: "Are your game downloads safe and virus-free?",
          answer: "Absolutely! All our games are thoroughly scanned and verified before upload. We use advanced security protocols and work only with trusted developers to ensure 100% safe downloads."
        },
        {
          question: "How do I download games from your platform?",
          answer: "Simply click the 'Download Now' button on any game page, and our secure download manager will handle the rest. No registration required for free games."
        },
        {
          question: "What if my antivirus flags a game download?",
          answer: "Some antivirus programs may show false positives for game files. All our downloads are safe, but you can temporarily disable your antivirus during installation if needed."
        }
      ]
    },
    {
      category: "Game Requirements",
      icon: Cpu,
      questions: [
        {
          question: "What are the minimum system requirements for these games?",
          answer: "Requirements vary by game. Check each game's detail page for specific requirements. Generally, Android 8.0 or iOS 12 and above are recommended for mobile games."
        },
        {
          question: "Do these games work on both Android and iOS?",
          answer: "Most of our games are available for both platforms. Check individual game pages for compatibility information and download links for each platform."
        },
        {
          question: "My game is running slowly, what can I do?",
          answer: "Try closing other apps, clearing cache, updating your device OS, and ensuring your device meets the game's requirements. For card games like Teen Patti, a stable internet connection is crucial."
        }
      ]
    },
    {
      category: "Game Installation & Support",
      icon: Download,
      questions: [
        {
          question: "How do I install downloaded games on my mobile device?",
          answer: "After downloading the APK file, enable 'Install from unknown sources' in your security settings, then open the file to install. For iOS, you may need to use TestFlight or enterprise certificates."
        },
        {
          question: "I'm having trouble installing a game, what should I do?",
          answer: "First, make sure you have sufficient storage space. Try disabling Google Play Protect temporarily during installation. If issues persist, contact our support team."
        },
        {
          question: "Are in-game purchases available in these games?",
          answer: "Yes, most of our games offer in-app purchases for premium features, chips, or cosmetics. All transactions are secure and handled by the official app stores."
        }
      ]
    },
    {
      category: "Game-Specific Questions",
      icon: HelpCircle,
      questions: [
        {
          question: "What is the difference between all the Teen Patti variants?",
          answer: "Different Teen Patti games offer unique features, interfaces, bonus systems, and tournament styles. Some focus on traditional gameplay while others incorporate elements from slots, ludo, or other games."
        },
        {
          question: "Are these games available in my country?",
          answer: "Most of our games are available globally, but some may have regional restrictions due to local gambling laws. Check each game's description for availability in your region."
        },
        {
          question: "Can I play these games with friends?",
          answer: "Yes! Many of our games like Teen Patti, Rummy, and Ludo variants support multiplayer modes where you can invite friends or join tables together."
        },
        {
          question: "How do I earn rewards in these games?",
          answer: "Games offer various reward systems including daily bonuses, referral programs, tournament winnings, and achievement unlocks. Most games start you with free chips to begin playing."
        },
        {
          question: "Are these games free to play?",
          answer: "Yes, all games listed are free to download and play. Many offer optional in-app purchases for enhanced gameplay experiences."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h1>
          <p className="text-gray-400 text-lg">Find answers to common questions about our games</p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqData.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="bg-black rounded-xl border border-gray-700 overflow-hidden"
              >
                <div className="p-6 border-b border-gray-700">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <h2 className="text-xl font-bold text-white">{category.category}</h2>
                  </div>
                </div>
                
                <div className="divide-y divide-gray-700">
                  {category.questions.map((faq, index) => {
                    const globalIndex = categoryIndex * 10 + index;
                    const isOpen = openIndex === globalIndex;

                    return (
                      <div key={index}>
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                          className="w-full px-6 py-4 text-left hover:bg-gray-800/50 transition-colors duration-200 flex items-center justify-between"
                        >
                          <span className="font-medium text-white pr-4">{faq.question}</span>
                          {isOpen ? (
                            <ChevronUp className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                          )}
                        </button>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="px-6 pb-4"
                          >
                            <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                          </motion.div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-black rounded-2xl p-8 text-center mt-12 border border-gray-700"
        >
          <h3 className="text-2xl font-bold mb-4 text-white">Still Have Questions?</h3>
          <p className="text-gray-300 mb-6">
            Can't find what you're looking for? Our support team is here to help!
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 inline-flex items-center space-x-2"
          >
            <span>Contact Support</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;