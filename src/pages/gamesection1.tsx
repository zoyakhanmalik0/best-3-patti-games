import React from "react";

const games = [
  {
    id: 1,
    title: "Dragon Tiger Club",
    description:
      "Experience thrilling card-based action with strategic gameplay and vibrant visuals",
    image:
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=358,fit=crop/mv02znxE9VIjQByW/1000002709-AoPqxJoxNnivbrLo.png",
    rating: 4.7,
    link: "https://dragontigerclub.net/?from_gameid=5129078&channelCode=5128469",
  },
  {
    id: 2,
    title: "3 Patti No 1",
    description:
      "Classic Indian card game with competitive multiplayer and exciting rewards",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRER8EFNBuzPVKI1QWCFPjGZyl4ttYQKCAOzg&s",
    rating: 4.8,
    link: "https://3pattino1.com/?from_gameid=6372811&channelCode=6362528",
  },
  {
    id: 3,
    title: "Flying Chess",
    description:
      "Fun and engaging board game with strategic moves and multiplayer fun",
    image: "https://flyingchess.com.pk/wp-content/uploads/2025/02/flying-chess-apk.webp",
    rating: 4.5,
    link: "https://flyingchess.org/?from_gameid=7167825&channelCode=7167783",
  },
  {
    id: 4,
    title: "Teen Patti Gold",
    description: "Premium Teen Patti experience with golden rewards",
    image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=369,fit=crop,trim=0;21.056451612903224;0;18.048387096774192/AVLprkQNPJSyVQvN/screenshot_2024-12-01_-removebg-preview-YZ9VqrLgxqhValWo.png",
    rating: 4.6,
    link: "https://teenpattigold99.com/?from_gameid=4984716&channelCode=3853633",
  },
  {
    id: 5,
    title: "Flying Chess Pro",
    description: "Professional version of Flying Chess with enhanced features",
    image: "https://flyingchess.com.pk/wp-content/uploads/2025/02/flying-chess-apk.webp",
    rating: 4.7,
    link: "https://flychesspro.com/?from_gameid=7820458&channelCode=4216639",
  },
  {
    id: 6,
    title: "S9 Pro",
    description: "Advanced gaming platform with multiple game options",
    image: "https://s9game.com.pk/wp-content/uploads/2024/06/S9-Game.webp",
    rating: 4.8,
    link: "https://s9game.vip/?from_gameid=5013691&channelCode=100000",
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
    title: "3 Card Fly",
    description: "Fast-paced card game with flying animations",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb2eLcvR-S3-D6g4nWq2uPM39jLT7Cc1wS0A&s",
    rating: 4.5,
    link: "https://3cardfly.com/?from_gameid=4390009&channelCode=100000",
  },
  {
    id: 9,
    title: "3 Patti Super",
    description: "Supercharged Teen Patti with enhanced features",
    image: "https://3patiisuper.com/wp-content/uploads/2024/11/Screenshot_2024-10-29_094807-removebg-preview.png",
    rating: 4.7,
    link: "https://3pattisupera1.com/?from_gameid=7290012&channelCode=7225507",
  },
  {
    id: 10,
    title: "Yallah Rummy",
    description: "Exciting rummy card game with Middle Eastern flair",
    image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1200,h=630,fit=crop,f=jpeg/A3QO6LP24pFJqnLN/screenshot_2025-02-04-14-02-22-31_40deb401b9ffe8e1df2f1cc5ba480b12-removebg-preview-1-ALp7y1eV34Tea1XA.png",
    rating: 4.4,
    link: "https://yallarummy.com/?from_gameid=6378408&channelCode=6362002",
  },
  {
    id: 11,
    title: "PK 555",
    description: "Exciting card game with multiple variations and rewards",
    image: "https://pk555game.net/wp-content/uploads/2024/09/PK555-Game-2.webp",
    rating: 4.6,
    link: "https://pk555vip.com/?from_gameid=7245477&channelCode=5153321",
  },
  {
    id: 12,
    title: "3 Patti BestBet",
    description: "Premium betting experience with classic Indian card game",
    image: "/3PattiBestBet.jpg",
    rating: 4.5,
    link: "https://pkbestbet.com/?from_gameid=7502235&channelCode=300000",
  },
  {
    id: 13,
    title: "Teen Patti Mela",
    description: "Festive card gaming experience with special events",
    image: "https://teenpattimela.net/wp-content/uploads/2024/08/Teen-Patti-Mela.webp",
    rating: 4.4,
    link: "https://teenpattimela.com/?from_gameid=4909585&channelCode=100000",
  },
  {
    id: 14,
    title: "3 Patti LudoBounty",
    description: "Combine Ludo and Teen Patti for double the excitement",
    image: "https://3pattibounty.xyz/wp-content/uploads/2025/03/Logo-3-Patti-Bounty-Game-APK-Pakistan.png",
    rating: 4.7,
    link: "https://megaludobounty.com/?from_gameid=4384732&channelCode=4727636",
  },
  {
    id: 15,
    title: "3 Patti Room",
    description: "Private rooms for playing with friends and family",
    image: "https://image.winudf.com/v2/image1/ZGV0YWlsZWRseS53aGF0c29ldmVyLm91cnNlbGZfaWNvbl8xNjY4MDU3NTUyXzAzOA/icon.png?w=280&fakeurl=1",
    rating: 4.3,
    link: "https://3pattiroom.com/?from_gameid=5088456&channelCode=100000",
  },
  {
    id: 16,
    title: "3 Patti Blue",
    description: "Premium blue-themed Teen Patti experience",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjrU9P8mO6NykgT9saQ7eal7qH5so9W20_LQ&s",
    rating: 4.5,
    link: "https://pk3pattiblue.com/?from_gameid=5085123&channelCode=100000",
  },
  {
    id: 17,
    title: "Card Rummy",
    description: "Classic rummy card game with modern twists",
    image: "https://img.utdstc.com/icon/c83/f5e/c83f5e9bbae291d6a6c27e32d7953b0cfa965098fa9043db06e1b00e9d77122c:200",
    rating: 4.4,
    link: "https://pkcardrummy.com/?from_gameid=5270962&channelCode=5107910",
  },
  {
    id: 18,
    title: "3 Patti Sky",
    description: "High-flying Teen Patti experience with sky-high rewards",
    image: "/3PattiSky.jpg",
    rating: 4.6,
    link: "https://3pattiskypk1.com/?from_gameid=4861821&channelCode=4040533",
  },
  {
    id: 19,
    title: "3 Patti Online",
    description: "The classic Teen Patti experience optimized for online play",
    image: "https://play-lh.googleusercontent.com/cg2JgAN16YE-kBn02qYs-fGocboJ6c-rTsdUX8Mg6b-xJXkdyNvrCx5YNcC8RKWt7KPY",
    rating: 4.8,
    link: "https://3pattionline.com/?from_gameid=3358141&channelCode=100000",
  },
  {
    id: 20,
    title: "3 Patti Winner",
    description: "Prove your skills and become the ultimate Teen Patti champion",
    image: "/3 Patti Winner.jpg",
    rating: 4.7,
    link: "https://3pattiwinner456.com/?from_gameid=3010808&channelCode=2987005",
  },
  {
    id: 21,
    title: "3 Patti Land",
    description: "Enter the world of Teen Patti with immersive gameplay",
    image: "/3 Patti land.jpg",
    rating: 4.5,
    link: "https://3pattiland.com/?from_gameid=4103316&channelCode=2987005",
  },
  {
    id: 22,
    title: "Teen Patti Spin",
    description: "Spin to win special bonuses in this exciting Teen Patti variant",
    image: "https://teenpatti.pk/wp-content/uploads/teen-patti-spin-logo.webp",
    rating: 4.4,
    link: "https://spinteenpatti.com/?from_gameid=5065387&channelCode=4040533",
  },
  {
    id: 23,
    title: "3 Patti Crown",
    description: "Royal Teen Patti experience fit for a king",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiPDsomXICi_0hUrrBBIPKTiGlF-QSX9osUg&s",
    rating: 4.6,
    link: "https://3patticrown.net/?from_gameid=5375268&channelCode=3267635",
  },
  {
    id: 24,
    title: "3 Patti Boss",
    description: "Become the boss of Teen Patti with this premium app",
    image: "https://3pattibosspk.pro/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-10-at-12.11.37_bdfb58e1.jpg",
    rating: 4.7,
    link: "https://3pattiboss.app/?from_gameid=4745711&channelCode=4704615",
  },
  {
    id: 25,
    title: "3 Patti Loot",
    description: "Loot big rewards in this exciting Teen Patti game",
    image: "https://teenpatti.pk/wp-content/uploads/3patti-loot-logo.webp",
    rating: 4.5,
    link: "https://3pattilootpkk1.com/?from_gameid=4449682&channelCode=4040533",
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
    id: 27,
    title: "3 Patti Slot777",
    description: "Combine slots excitement with Teen Patti gameplay",
    image: "/3 Patti Slot777.jpg",
    rating: 4.6,
    link: "https://svipslots777.com/?from_gameid=5058580&channelCode=200000",
  },
  {
    id: 28,
    title: "3 Patti Best",
    description: "The best Teen Patti experience with premium features",
    image: "/3 Patti best.jpg",
    rating: 4.8,
    link: "https://teenpattibest888.com/?from_gameid=4950961&channelCode=4727636",
  },
  {
    id: 29,
    title: "3 Patti Vegas",
    description: "Las Vegas style Teen Patti with high-stakes action",
    image: "https://www.3patti.biz/images/1740581382.webp",
    rating: 4.7,
    link: "https://teenpattivegas.com/?from_gameid=4084992&channelCode=100000",
  },
  {
    id: 30,
    title: "3 Patti LudoTiger",
    description: "Wild combination of Ludo and Teen Patti with tiger-themed bonuses",
    image: "https://ludotiger.net/wp-content/uploads/2024/11/Ludo-Tiger-1.webp",
    rating: 4.5,
    link: "https://megaludotiger.com/?from_gameid=4667699&channelCode=100000",
  },
  {
    id: 31,
    title: "3 Patti World",
    description: "Global Teen Patti experience with players worldwide",
    image: "https://image.winudf.com/v2/image1/ZmFza2xlLnNiZ2VzLmJyc3NmLmdlcmhnZV9pY29uXzE2NzgyNTg4ODhfMDAx/icon.png?w=280&fakeurl=1",
    rating: 4.6,
    link: "https://3pattiworldpkk.com/?from_gameid=4479766&channelCode=100000",
  },
  {
    id: 32,
    title: "3 Patti Lucky",
    description: "Test your luck in this fortune-focused Teen Patti variant",
    image: "https://3pattilucky.net/wp-content/uploads/2025/08/3-Patti-Lucky.webp",
    rating: 4.4,
    link: "https://pk3pattilucky.com/?from_gameid=4557366&channelCode=4068266",
  },
  {
    id: 33,
    title: "3 Patti Royal/Happy Club",
    description: "Royal treatment and happy gaming in this premium club",
    image: "/3 Patti Royal.jpg",
    rating: 4.7,
    link: "https://3pattiroyal.com/?from_gameid=5570111&channelCode=2950163",
  },
  {
    id: 34,
    title: "3 Patti Free",
    description: "Enjoy free-to-play Teen Patti with real rewards",
    image: "https://3pattifree.net/wp-content/uploads/2024/12/3-Patti-Free.webp",
    rating: 4.3,
    link: "https://3pattifree.com/?from_gameid=7820458&channelCode=4216639",
  },
  {
    id: 35,
    title: "3 Patti Blue One",
    description: "Another premium blue-themed Teen Patti experience",
    image: "/3 Patti Blue one.jpg",
    rating: 4.5,
    link: "https://3pattiblue1.com/?from_gameid=2971368&channelCode=100000",
  },
  {
    id: 36,
    title: "3 Patti LudoBonus",
    description: "Bonus-filled combination of Ludo and Teen Patti",
    image: "/3 Patti LudoBonus.jpg",
    rating: 4.6,
    link: "https://megaludobonus.com/?from_gameid=4578606&channelCode=100000",
  },
  {
    id: 37,
    title: "3 Patti Lucky Go",
    description: "On-the-go lucky Teen Patti experience",
    image: "/3 Patti Lucky Go.jpg",
    rating: 4.4,
    link: "https://3pattiilucky.com/?from_gameid=4303489&channelCode=250000",
  },
  {
    id: 38,
    title: "3 Patti Poker",
    description: "Poker meets Teen Patti in this exciting card game hybrid",
    image: "/3 Patti Poker.jpg",
    rating: 4.7,
    link: "https://pokeremag.com/?from_gameid=5136700&channelCode=200000",
  },
  {
    id: 39,
    title: "3 Patti Live",
    description: "Live dealer Teen Patti for an authentic casino experience",
    image: "https://img.utdstc.com/icon/68f/223/68f22395c642640f917d825f03a0b2afab9d4f20e08f58c24a6de06bea184088:200",
    rating: 4.8,
    link: "https://3pattilive11.com/?from_gameid=2990882&channelCode=2990658",
  },
  {
    id: 40,
    title: "3 Patti Max",
    description: "Maximum excitement with this high-intensity Teen Patti",
    image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=289,h=264,fit=crop/AwvD94lMJxh7O8ow/1000181634-photoaidcom-2x-ai-zoom-1-YD0BwlJbB7TK37p0.webp",
    rating: 4.7,
    link: "https://teenpattimax999.com/?from_gameid=5078433&channelCode=5013691",
  },
  {
    id: 41,
    title: "3 Patti Master",
    description: "Master the art of Teen Patti with this premium app",
    image: "/3 Patti master.jpg",
    rating: 4.6,
    link: "https://casino654.com/?from_gameid=3098539&channelCode=2950163",
  },
  {
    id: 42,
    title: "3 Patti Showy",
    description: "Show off your skills in this stylish Teen Patti variant",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVxr4p53upgjka450P_50lAu23OkFTiR3-2Wi5vvwHRuzcUXmn4jtGe313mhi-NnaF6_Y&usqp=CAU",
    rating: 4.5,
    link: "https://teenpattishowy.com/?from_gameid=5153659&channelCode=100000",
  },
  {
    id: 43,
    title: "3 Patti Elite",
    description: "Elite Teen Patti experience for premium players",
    image: "/3 Patti Elite.jpg",
    rating: 4.8,
    link: "https://teenpattielite888.com/?from_gameid=5529807&channelCode=5223898",
  },
  {
    id: 44,
    title: "3 Patti Wingo",
    description: "Wing your way to victory in this fast-paced Teen Patti",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf_E2V39Og3nhiEsqktk_70mpiXpkEnGXQSg&s",
    rating: 4.5,
    link: "https://3pattiwingo.com/?from_gameid=3318375&channelCode=3355835",
  },
  {
    id: 45,
    title: "3 Card Guru",
    description: "Become a card guru with this strategic Teen Patti variant",
    image: "/3 card guru.jpg",
    rating: 4.7,
    link: "https://3cardguru.com/?from_gameid=3174030&channelCode=700000",
  },
];

const GamesPage = () => {
  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Popular Game Collection
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Discover our top-rated games with immersive gameplay and stunning
            visuals. Download now to start playing!
          </p>
        </div>

        {/* Game Cards */}
        <div className="flex flex-col gap-5">
          {games.map((game) => (
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
                  <h2 className="text-sm sm:text-lg font-semibold mb-1 text-white group-hover:text-cyan-400 transition-colors truncate">
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
                    target="_blank"
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

export default GamesPage;
