"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const TeenPattiStrategies = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<(number | null)[]>([null, null, null]);
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const strategies = [
    {
      title: "Master the Art of the Bluff",
      content:
        "Bluffing is the cornerstone of Teen Patti strategy. A well-executed bluff can win you a pot with a weak hand, but a bad bluff can be costly. Your bluff must tell a believable story. If you've been playing conservatively, a sudden large bet will seem credible.",
      tip: "Bluff from a late position after everyone has checked. This allows you to represent strength and steal the pot.",
    },
    {
      title: "Adopt a Tight-Aggressive Playing Style",
      content:
        "The most successful players are 'Tight-Aggressive' (TAG). This means you play fewer hands but bet aggressively when you do. Be selective with your starting hands. Fold weak hands like low-value pairs or unconnected low cards.",
      tip: "Only enter pots with strong hands like high pairs (A-A, K-K) or potential sequences/flushes.",
    },
    {
      title: "Manage Your Bankroll Ruthlessly",
      content:
        "This is the most overlooked yet critical Teen Patti winning trick. Bankroll management isn't about a single hand; it's about surviving the game. Set strict limits before you start playing.",
      tip: "Never chase your losses. Playing emotionally to win back lost money is the fastest way to lose even more.",
    },
    {
      title: "Become a Master of Observation",
      content:
        "Teen Patti is a people game. Your biggest advantage comes from reading your opponents, not just your cards. Identify player types: The Rock (plays only premium hands), The Fish (plays too many hands), and The Maniac (bets constantly).",
      tip: "Don't try to bluff The Fish; instead, value bet your strong hands, as they will likely call.",
    },
    {
      title: "Use Your Table Position as a Weapon",
      content:
        "Your position—where you are seated in the betting order—is a powerful strategic tool. If you are in a late position (acting after most players), you have a major advantage.",
      tip: "Play more cautiously from an early position. Since you have no information, only play your very strongest hands.",
    },
    {
      title: "Perfect Your Poker Face",
      content:
        "Your body language and reactions can give away the strength of your hand. Controlling your 'tells' is a crucial Teen Patti winning trick. Stay consistent whether you have a terrible hand or a pure sequence.",
      tip: "Use reverse psychology by acting disappointed when you have a great hand to lure opponents into a trap.",
    },
    {
      title: "Know When to Fold",
      content:
        "The ability to fold a losing hand is what separates amateurs from pros. Don't get emotionally attached to a hand or chase losses hoping for a miracle card.",
      tip: "If you're facing confident, heavy betting from multiple players and your hand hasn't improved, it's time to let it go.",
    },
  ];

  const quizQuestions = [
    {
      question: "When is the best time to bluff in Teen Patti?",
      options: [
        "When you're in early position",
        "Against multiple opponents",
        "When you're in late position and others have checked",
        "Always bluff as much as possible",
      ],
      correct: 2,
    },
    {
      question: "What does 'Tight-Aggressive' play style mean?",
      options: [
        "Playing many hands but betting small",
        "Playing few hands but betting aggressively",
        "Playing cautiously and rarely betting",
        "Changing strategies every hand",
      ],
      correct: 1,
    },
    {
      question: "What should you do if you're on a losing streak?",
      options: [
        "Increase your bets to win back losses",
        "Take a break and stick to your bankroll limits",
        "Bluff more frequently",
        "Play every hand regardless of quality",
      ],
      correct: 1,
    },
  ];

  const handleAnswerSelect = (qIndex: number, oIndex: number) => {
    const newAnswers = [...quizAnswers];
    newAnswers[qIndex] = oIndex;
    setQuizAnswers(newAnswers);
  };

  const calculateScore = () => {
    return quizQuestions.reduce(
      (score, q, i) => (quizAnswers[i] === q.correct ? score + 1 : score),
      0
    );
  };

  const resetQuiz = () => {
    setQuizAnswers([null, null, null]);
    setQuizSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white py-16 px-6 lg:px-24">
      {/* Header */}
      <motion.header
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          7 Proven Teen Patti Winning Tricks That Actually Work
        </h1>
        <p className="text-gray-300 mt-4 max-w-3xl mx-auto">
          Master these strategies to improve your Teen Patti game and increase
          your chances of winning.
        </p>
      </motion.header>

      {/* Tabs */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Tab Navigation */}
        <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible space-x-4 lg:space-x-0 lg:space-y-4 pb-4 lg:pb-0">
          {strategies.map((s, index) => (
            <motion.div
              key={index}
              className={`cursor-pointer px-4 py-3 rounded-xl border ${
                activeTab === index
                  ? "bg-yellow-500 text-black font-bold shadow-lg"
                  : "bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700"
              }`}
              onClick={() => setActiveTab(index)}
              whileHover={{ scale: 1.05 }}
            >
              {index + 1}. {s.title}
            </motion.div>
          ))}
        </div>

        {/* Active Strategy */}
        <motion.div
          className="lg:col-span-3 bg-gray-800/60 border border-gray-700 rounded-2xl p-6 shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          key={activeTab}
        >
          <h2 className="text-2xl font-semibold text-yellow-400 mb-3">
            {strategies[activeTab].title}
          </h2>
          <p className="text-gray-300 mb-4">{strategies[activeTab].content}</p>
          <p className="italic text-orange-400">
            <strong>Pro Tip:</strong> {strategies[activeTab].tip}
          </p>
        </motion.div>
      </div>

      {/* Quiz */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center text-yellow-300 mb-6">
          Test Your Teen Patti Knowledge 🎯
        </h2>
        <div className="text-center">
          <button
            className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-xl shadow-lg hover:scale-105 transition"
            onClick={() => setShowQuiz(!showQuiz)}
          >
            {showQuiz ? "Hide Quiz" : "Take Quick Quiz"}
          </button>
        </div>

        {showQuiz && (
          <motion.div
            className="mt-10 grid gap-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {quizQuestions.map((q, qIndex) => (
              <div
                key={qIndex}
                className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-md"
              >
                <h3 className="text-lg font-semibold mb-4">{q.question}</h3>
                <div className="grid gap-3">
                  {q.options.map((opt, oIndex) => {
                    const isSelected = quizAnswers[qIndex] === oIndex;
                    const isCorrect = quizSubmitted && oIndex === q.correct;
                    const isWrong =
                      quizSubmitted &&
                      isSelected &&
                      oIndex !== q.correct;

                    return (
                      <div
                        key={oIndex}
                        className={`px-4 py-2 rounded-lg cursor-pointer border transition ${
                          isCorrect
                            ? "bg-green-600 border-green-500"
                            : isWrong
                            ? "bg-red-600 border-red-500"
                            : isSelected
                            ? "bg-yellow-500/80 border-yellow-400"
                            : "bg-gray-700 border-gray-600 hover:bg-gray-600"
                        }`}
                        onClick={() =>
                          !quizSubmitted && handleAnswerSelect(qIndex, oIndex)
                        }
                      >
                        {opt}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}

            {!quizSubmitted ? (
              <button
                className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow hover:scale-105 transition disabled:opacity-50"
                onClick={() => setQuizSubmitted(true)}
                disabled={quizAnswers.includes(null)}
              >
                Submit Answers
              </button>
            ) : (
              <div className="text-center mt-6">
                <h3 className="text-xl font-bold text-yellow-400">
                  Your Score: {calculateScore()} / {quizQuestions.length}
                </h3>
                <p className="text-gray-300 mt-2">
                  {calculateScore() === quizQuestions.length
                    ? "🔥 Excellent! You're a Teen Patti expert!"
                    : calculateScore() >= quizQuestions.length / 2
                    ? "👏 Good job! You know quite a bit about Teen Patti strategy."
                    : "📚 Keep learning! Review the strategies and try again."}
                </p>
                <button
                  className="mt-4 px-6 py-2 bg-yellow-500 text-black rounded-lg font-semibold shadow hover:scale-105 transition"
                  onClick={resetQuiz}
                >
                  Try Again
                </button>
              </div>
            )}
          </motion.div>
        )}
      </div>

      {/* Keywords Section */}
      <div className="mt-20">
        <h3 className="text-2xl font-bold text-yellow-400 mb-4 text-center">
          SEO Keywords for Teen Patti
        </h3>
        <div className="flex flex-wrap justify-center gap-2">
          {[
            "Teen Patti winning tricks",
            "how to win at Teen Patti",
            "Teen Patti strategy",
            "Teen Patti tips",
            "best Teen Patti tricks",
            "Teen Patti bluffing techniques",
            "Teen Patti bankroll management",
            "how to read opponents in Teen Patti",
            "online Teen Patti winning tips",
            "Teen Patti game tricks",
            "3 Patti tips",
            "Indian poker",
            "real money Teen Patti",
          ].map((keyword, i) => (
            <span
              key={i}
              className="px-4 py-2 bg-gray-700 rounded-full text-sm text-gray-200 border border-gray-600"
            >
              {keyword}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeenPattiStrategies;
