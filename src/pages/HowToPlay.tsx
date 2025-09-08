import React, { useState } from "react";

const games = [
  {
    id: 1,
    title: "Dragon Tiger Club",
    description:
      "Experience thrilling card-based action with strategic gameplay and vibrant visuals.",
    image:
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=358,fit=crop/mv02znxE9VIjQByW/1000002709-AoPqxJoxNnivbrLo.png",
    rating: 4.7,
    link: "https://dragontigerclub.net/?from_gameid=5129078&channelCode=5128469",
  },
  {
    id: 2,
    title: "3 Patti No1",
    description:
      "Classic Indian card game with competitive multiplayer and exciting rewards.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRER8EFNBuzPVKI1QWCFPjGZyl4ttYQKCAOzg&s",
    rating: 4.8,
    link: "https://3pattino1.com/?from_gameid=6372811&channelCode=6362528",
  },
  {
    id: 3,
    title: "Flying Chess",
    description:
      "Fun and engaging board game with strategic moves and multiplayer fun.",
    image:
      "https://flyingchess.com.pk/wp-content/uploads/2025/02/flying-chess-apk.webp",
    rating: 4.5,
    link: "https://flyingchess.org/?from_gameid=7167825&channelCode=7167783",
  },
  // 👉 keep adding the rest of your games here
];

const generalRules = [
  "Start the game and join a table or room.",
  "Each player gets cards, tokens, or dice depending on the game type.",
  "Follow the turn order to play moves or place bets.",
  "Use strategies to beat your opponents.",
  "The winner is decided based on the highest hand, best move, or reaching the target first.",
];

const HowToPlay = () => {
  const [activeGame, setActiveGame] = useState(games[0]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">🎮 How to Play</h1>

      {/* Game Selector */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {games.map((game) => (
          <button
            key={game.id}
            onClick={() => setActiveGame(game)}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
              activeGame.id === game.id
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            {game.title}
          </button>
        ))}
      </div>

      {/* Active Game Display */}
      <div className="max-w-4xl mx-auto bg-gray-900 rounded-2xl shadow-lg overflow-hidden">
        <img
          src={activeGame.image}
          alt={activeGame.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">{activeGame.title}</h2>
          <p className="text-gray-300 mb-4">{activeGame.description}</p>

          <h3 className="text-xl font-semibold mb-2">How to Play:</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-400">
            {generalRules.map((rule, index) => (
              <li key={index}>{rule}</li>
            ))}
          </ul>

          <div className="mt-6">
            <a
              href={activeGame.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg font-semibold transition"
            >
              Play Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToPlay;
