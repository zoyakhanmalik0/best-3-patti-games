import React from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Games from './pages/Games';
import Blog from './pages/Blog';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import HowToPlay from './pages/HowToPlay';
import PrivacyPolicy from './pages/PrivacyPolicy';
import InstallationGuide from './pages/InstallationGuide';
import TeenPattiGoldvs3PattiReal from './Blogs/3pattigolgVS3Pattireal';  
import DragonTigerClub from './Games/DragonTigerClub';  
import TeenPattiNo1 from './Games/3PattiNo1';  
import FlyingChess from './Games/FlyingChess';  
import Troubleshooting from './pages/Troubleshooting';  
import TermsofService from './pages/termofservices';  
import Top10Games from './pages/Top10Games';  
import NewGames from './pages/NewGames';  

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <Header />
        <main>
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<Games />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/3pattigold-vs-3pattireal" element={<TeenPattiGoldvs3PattiReal />} />
            <Route path="/how-to-play" element={<HowToPlay />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/installation-guide" element={<InstallationGuide />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/troubleshooting" element={<Troubleshooting />} />
            <Route path="/terms-of-service" element={<TermsofService />} />

            {/* Top 10 Games + Nested Game Pages */}
            <Route path="/top-10-games" element={<Top10Games />} />
            <Route path="/top-10-games/dragon-tiger-club" element={<DragonTigerClub />} />
            <Route path="/top-10-games/3-patti-no1" element={<TeenPattiNo1 />} />

            {/* New Games + Nested Game Pages */}
            <Route path="/new-games" element={<NewGames />} />
            <Route path="/new-games/flying-chess" element={<FlyingChess />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
