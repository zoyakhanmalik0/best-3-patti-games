import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Games from './pages/Games';
import GameDetails from './pages/GameDetails';
import Blog from './pages/Blog';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import HowToPlay from './pages/HowToPlay';
import PrivacyPolicy from './pages/PrivacyPolicy';
import InstallationGuide from './pages/InstallationGuide';
import WinningTrick from './Blogs/TeenPattiWinningTrick';  
import Troubleshooting from './pages/Troubleshooting';  
import TermsofService from './pages/termofservices';  

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<Games />} />
            <Route path="/games/:id" element={<GameDetails />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/wining-trick" element={<WinningTrick />} /> 
            <Route path="/how-to-play" element={<HowToPlay />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/installation-guide" element={<InstallationGuide />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
            <Route path="/troubleshooting" element={<Troubleshooting/>} />
            <Route path="/terms-of-service" element={<TermsofService/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
