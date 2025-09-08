import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Gamepad2, Download } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-black/95 backdrop-blur-sm border-b border-neutral-800 sticky top-0 z-50 shadow-lg shadow-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg group-hover:from-cyan-400 group-hover:to-purple-500 transition-all duration-300 shadow-md shadow-purple-500/30">
              <Gamepad2 className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-purple-300 transition-all duration-300">
              3 Patti Club
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { path: "/", label: "Home" },
              { path: "/games", label: "Games" },
              { path: "/blog", label: "Blog" },
              { path: "/faq", label: "FAQ" },
              { path: "/contact", label: "Contact" },
            ].map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(path)
                    ? "text-cyan-400"
                    : "text-gray-300 hover:text-purple-400"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Download Button */}
          <div className="hidden md:block">
            <Link to="/games">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-lg shadow-cyan-500/30">
                <Download className="h-4 w-4" />
                <span>Download Now</span>
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-neutral-800 transition-colors"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-cyan-400" />
            ) : (
              <Menu className="h-6 w-6 text-cyan-400" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-neutral-800">
            <nav className="flex flex-col space-y-4">
              {[
                { path: "/", label: "Home" },
                { path: "/games", label: "Games" },
                { path: "/blog", label: "Blog" },
                { path: "/faq", label: "FAQ" },
                { path: "/contact", label: "Contact" },
              ].map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive(path)
                      ? "text-cyan-400"
                      : "text-gray-300 hover:text-purple-400"
                  }`}
                >
                  {label}
                </Link>
              ))}
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 justify-center mt-4 shadow-lg shadow-cyan-500/30">
                <Download className="h-4 w-4" />
                <span>Download Now</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
