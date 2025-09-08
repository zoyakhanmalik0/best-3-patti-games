import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Heart,
  Shield,
  Download,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 overflow-hidden border-t border-neutral-800 shadow-inner shadow-cyan-500/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4 group">
              <div className="p-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg group-hover:from-cyan-400 group-hover:to-purple-500 transition-all duration-300 shadow-md shadow-purple-500/30">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-purple-300 transition-all duration-300">
                3 Patti Club
              </span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Your premier destination for 3 Patti games. Download the latest
              versions with safe, secure, and fast downloads. Join millions of
              players enjoying this exciting and popular card game.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Youtube, href: "#" },
              ].map(({ icon: Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="p-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-110 shadow-md shadow-cyan-500/30"
                >
                  <Icon className="h-5 w-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Game Variants
            </h3>
            <div className="space-y-2">
              {[
                {
                  path: "https://teenpattigold99.com/?from_gameid=4984716&channelCode=3853633",
                  label: "Teen Patti Gold",
                },
                {
                  path: "https://flyingchess.org/?from_gameid=7167825&channelCode=7167783",
                  label: "Flying Chess",
                },
                {
                  path: "https://3pattino1.com/?from_gameid=6372811&channelCode=6362528",
                  label: "3 Patti No 1",
                },
                {
                  path: "https://dragontigerclub.net/?from_gameid=5129078&channelCode=5128469",
                  label: "Dragon Tiger Club",
                },
                { path: "/games", label: "All 3 Patti Games" },
              ].map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className="block text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Support</h3>
            <div className="space-y-2">
              <Link to="/how-to-play"
                className="block text-gray-400 hover:text-purple-400 transition-colors duration-200"
              >
                How to Play
              </Link>
              <Link
                to="/installation-guide"
                className="block text-gray-400 hover:text-purple-400 transition-colors duration-200"
              >
                Installation Guide
              </Link>
              <Link
                to="/troubleshooting"
                className="block text-gray-400 hover:text-purple-400 transition-colors duration-200"
              >
                Troubleshooting
              </Link>
              <Link
                to="/privacy-policy"
                className="block text-gray-400 hover:text-purple-400 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
                className="block text-gray-400 hover:text-purple-400 transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2025 3 Patti Club. All rights reserved. Safe & Secure Downloads.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <div className="flex items-center space-x-1 text-cyan-400">
              <Shield className="h-4 w-4" />
              <span className="text-sm">100% Secure</span>
            </div>
            <div className="flex items-center space-x-1 text-purple-400">
              <Download className="h-4 w-4" />
              <span className="text-sm">Fast Downloads</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
