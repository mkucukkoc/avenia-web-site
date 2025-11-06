import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../data/mock';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#232323]/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-8 h-8 flex-shrink-0">
              <img 
                src="https://customer-assets.emergentagent.com/job_9c2c30a6-4c42-4be2-b356-1e17020be294/artifacts/hjthkko2_icon.png"
                alt="Avenia"
                className="w-full h-full object-contain transition-transform group-hover:scale-110"
              />
            </div>
            <span className="text-xl font-bold text-white group-hover:text-[#00c896] transition-colors">
              Avenia
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-gray-300 hover:text-[#00c896] transition-colors duration-200 font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Button 
              className="bg-[#00c896] hover:bg-[#00b085] text-white px-6 py-2 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-[#00c896]/25"
            >
              Try for Free
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-[#232323]/95 backdrop-blur-md border-b border-white/10">
            <div className="px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block text-gray-300 hover:text-[#00c896] transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button 
                className="w-full bg-[#00c896] hover:bg-[#00b085] text-white py-3 rounded-xl font-semibold mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Try for Free
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};