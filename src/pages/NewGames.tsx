import React from "react";

interface Game {
  id: number;
  title: string;
  description: string;
  image: string;
  rating: number;
  link: string;
}

const games: Game[] = [
  {
    id: 1,
    title: "Dragon Tiger Club",
    description:
      "Experience thrilling card-based action with strategic gameplay and vibrant visuals",
    image:
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=358,fit=crop/mv02znxE9VIjQByW/1000002709-AoPqxJoxNnivbrLo.png",
    rating: 4.7,
    link: "/dragon-tiger-club",
  },
  {
    id: 2,
    title: "3 Patti No 1",
    description:
      "Classic Indian card game with competitive multiplayer and exciting rewards",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRER8EFNBuzPVKI1QWCFPjGZyl4ttYQKCAOzg&s",
    rating: 4.8,
    link: "/3-patti-no1",
  },
  {
    id: 3,
    title: "Flying Chess",
    description:
      "Fun and engaging board game with strategic moves and multiplayer fun",
    image:
      "https://flyingchess.com.pk/wp-content/uploads/2025/02/flying-chess-apk.webp",
    rating: 4.5,
    link: "/flying-chess",
  },
  {
    id: 4,
    title: "3 Patti Boss",
    description: "Become the boss of Teen Patti with this premium app",
    image:
      "https://3pattibosspk.pro/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-10-at-12.11.37_bdfb58e1.jpg",
    rating: 4.7,
    link: "https://3pattiboss.app/?from_gameid=4745711&channelCode=4704615",
  },
  {
    id: 5,
    title: "3 Patti Crown",
    description: "Royal Teen Patti experience fit for a king",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiPDsomXICi_0hUrrBBIPKTiGlF-QSX9osUg&s",
    rating: 4.6,
    link: "https://3patticrown.net/?from_gameid=5375268&channelCode=3267635",
  },
  {
    id: 6,
    title: "3 Patti Pearl",
    description: "Discover precious wins in this gem-themed Teen Patti",
    image: "/3 Patti pearl.jpg",
    rating: 4.4,
    link: "https://3pattipearl.com/?from_gameid=4468195&channelCode=100000",
  },
  {
    id: 7,
    title: "Teen Patti Real",
    description: "Authentic Teen Patti experience with real players",
    image: "https://3pattihomes.com/wp-content/uploads/2024/09/images-2.jpeg",
    rating: 4.6,
    link: "https://pkteenpattireal.com/?from_gameid=5529088&channelCode=5524996",
  },
  {
    id: 8,
    title: "3 Patti Super",
    description: "Supercharged Teen Patti with enhanced features",
    image:
      "https://3patiisuper.com/wp-content/uploads/2024/11/Screenshot_2024-10-29_094807-removebg-preview.png",
    rating: 4.7,
    link: "https://3pattisupera1.com/?from_gameid=7290012&channelCode=7225507",
  },
  {
    id: 9,
    title: "Yallah Rummy",
    description: "Exciting rummy card game with Middle Eastern flair",
    image:
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1200,h=630,fit=crop,f=jpeg/A3QO6LP24pFJqnLN/screenshot_2025-02-04-14-02-22-31_40deb401b9ffe8e1df2f1cc5ba480b12-removebg-preview-1-ALp7y1eV34Tea1XA.png",
    rating: 4.4,
    link: "https://yallarummy.com/?from_gameid=6378408&channelCode=6362002",
  },
  {
    id: 10,
    title: "3 Patti Free",
    description: "Enjoy free-to-play Teen Patti with real rewards",
    image: "https://3pattifree.net/wp-content/uploads/2024/12/3-Patti-Free.webp",
    rating: 4.3,
    link: "https://3pattifree.com/?from_gameid=7820458&channelCode=4216639",
  },
];

const NewGamesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              New Games
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-6">
            Check out the latest games added to our collection. Fresh excitement awaits you!
          </p>
        </div>

        {/* Game Cards */}
        <div className="flex flex-col gap-5">
          {games.map((game: Game) => (
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

                {/* Download Button */}
                <div className="mt-2 flex justify-end">
                  <a
                    href={game.link}
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 px-3 py-1.5
                               rounded-lg text-xs sm:text-sm font-medium
                               hover:from-cyan-600 hover:to-purple-700 transition-all
                               flex items-center shadow-lg shadow-cyan-500/30"
                  >
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      ></path>
                    </svg>
                    Download
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewGamesPage;
