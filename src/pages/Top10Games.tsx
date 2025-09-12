import React from "react";
import { Link } from "react-router-dom";

const games = [
  {
    id: 1,
    title: "Dragon Tiger Club",
    description:
      "Experience thrilling card-based action with strategic gameplay and vibrant visuals",
    image:
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=358,fit=crop/mv02znxE9VIjQByW/1000002709-AoPqxJoxNnivbrLo.png",
    rating: 4.7,
    link: "/dragon-tiger-club", // ✅ matches your App.js
  },
  {
    id: 2,
    title: "3 Patti No 1",
    description:
      "Classic Indian card game with competitive multiplayer and exciting rewards",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRER8EFNBuzPVKI1QWCFPjGZyl4ttYQKCAOzg&s",
    rating: 4.8,
    link: "/3-patti-no1", // ✅ matches your App.js
  },
  {
    id: 3,
    title: "Flying Chess",
    description:
      "Fun and engaging board game with strategic moves and multiplayer fun",
    image:
      "https://flyingchess.com.pk/wp-content/uploads/2025/02/flying-chess-apk.webp",
    rating: 4.5,
    link: "/flying-chess", // ✅ matches your App.js
  },
  {
    id: 4,
    title: "Teen Patti Gold",
    description: "Premium Teen Patti experience with golden rewards",
    image:
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=369,fit=crop,trim=0;21.056451612903224;0;18.048387096774192/AVLprkQNPJSyVQvN/screenshot_2024-12-01_-removebg-preview-YZ9VqrLgxqhValWo.png",
    rating: 4.6,
    link: "https://teenpattigold99.com/?from_gameid=4984716&channelCode=3853633", // external ✅
  },
  {
    id: 16,
    title: "3 Patti Blue",
    description: "Premium blue-themed Teen Patti experience",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjrU9P8mO6NykgT9saQ7eal7qH5so9W20_LQ&s",
    rating: 4.5,
    link: "https://pk3pattiblue.com/?from_gameid=5085123&channelCode=100000",
  },
  {
    id: 31,
    title: "3 Patti World",
    description: "Global Teen Patti experience with players worldwide",
    image:
      "https://image.winudf.com/v2/image1/ZmFza2xlLnNiZ2VzLmJyc3NmLmdlcmhnZV9pY29uXzE2NzgyNTg4ODhfMDAx/icon.png?w=280&fakeurl=1",
    rating: 4.6,
    link: "https://3pattiworldpkk.com/?from_gameid=4479766&channelCode=100000",
  },
  {
    id: 24,
    title: "3 Patti Boss",
    description: "Become the boss of Teen Patti with this premium app",
    image:
      "https://3pattibosspk.pro/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-10-at-12.11.37_bdfb58e1.jpg",
    rating: 4.7,
    link: "https://3pattiboss.app/?from_gameid=4745711&channelCode=4704615",
  },
  {
    id: 23,
    title: "3 Patti Crown",
    description: "Royal Teen Patti experience fit for a king",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiPDsomXICi_0hUrrBBIPKTiGlF-QSX9osUg&s",
    rating: 4.6,
    link: "https://3patticrown.net/?from_gameid=5375268&channelCode=3267635",
  },
  {
    id: 26,
    title: "3 Patti Pearl",
    description: "Discover precious wins in this gem-themed Teen Patti",
    image: "/3 Patti pearl.jpg",
    rating: 4.4,
    link: "https://3pattipearl.com/?from_gameid=4468195&channelCode=100000",
  },
  {
    id: 17,
    title: "Card Rummy",
    description: "Classic rummy card game with modern twists",
    image:
      "https://img.utdstc.com/icon/c83/f5e/c83f5e9bbae291d6a6c27e32d7953b0cfa965098fa9043db06e1b00e9d77122c:200",
    rating: 4.4,
    link: "https://pkcardrummy.com/?from_gameid=5270962&channelCode=5107910",
  },
];

const GamesPage = () => {
  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Top 10 Games
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-6">
            Here are the most popular games you should try today. Download and enjoy endless fun!
          </p>
        </div>

        {/* Game Cards */}
        <div className="flex flex-col gap-5">
          {games.map((game) => {
            const isExternal = game.link.startsWith("http");
            return (
              <div
                key={game.id}
                className="flex flex-row bg-neutral-900 rounded-xl shadow-lg overflow-hidden
                           hover:scale-[1.02] transition-transform duration-300
                           border border-neutral-800 hover:border-cyan-500/50"
              >
                {/* Left Image */}
                <div className="w-24 sm:w-40 flex-shrink-0 flex items-center justify-center bg-black">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-24 sm:h-40 object-contain"
                  />
                </div>

                {/* Right Content */}
                <div className="flex flex-col justify-between p-3 sm:p-5 flex-1">
                  <div>
                    <h2 className="text-sm sm:text-lg font-semibold mb-1 text-white">
                      {game.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-400 line-clamp-2 mb-2">
                      {game.description}
                    </p>
                    <span className="text-yellow-400 font-bold text-xs sm:text-sm">
                      ⭐ {game.rating}
                    </span>
                  </div>

                  {/* Button */}
                  <div className="mt-2 flex justify-end">
                    {isExternal ? (
                      <a
                        href={game.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-cyan-500 to-purple-600 px-3 py-1.5
                                   rounded-lg text-xs sm:text-sm font-medium
                                   hover:from-cyan-600 hover:to-purple-700 transition-all
                                   flex items-center shadow-lg shadow-cyan-500/30"
                      >
                        Download
                      </a>
                    ) : (
                      <Link
                        to={game.link}
                        className="bg-gradient-to-r from-cyan-500 to-purple-600 px-3 py-1.5
                                   rounded-lg text-xs sm:text-sm font-medium
                                   hover:from-cyan-600 hover:to-purple-700 transition-all
                                   flex items-center shadow-lg shadow-cyan-500/30"
                      >
                        Download
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GamesPage;
