import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Search } from 'lucide-react';
import { CartItem } from '../types';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
  onHomeClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, onCartClick, onHomeClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 py-4' : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center cursor-pointer group" onClick={onHomeClick}>
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center mr-2 transition-transform group-hover:rotate-12">
              <span className="text-white font-bold text-xl">L</span>
            </div>
            <span className={`text-2xl font-bold tracking-tighter ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`}>
              LUMIERE
            </span>
          </div>

          {/* Desktop Links - Hidden as requested */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Links removed */}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* <button className="p-2 text-slate-600 hover:text-black transition-colors">
              <Search className="w-5 h-5" />
            </button> */}
            <button
              className="p-2 text-slate-600 hover:text-black transition-colors relative"
              onClick={onCartClick}
            >
              <ShoppingBag className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-black rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Removed */}
    </nav>
  );
};

export default Navbar;