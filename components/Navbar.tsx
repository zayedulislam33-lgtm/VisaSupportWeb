import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Search, User } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Destinations', href: '#destinations' },
    { name: 'Process', href: '#process' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Blog', href: '#blog' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="w-10 h-10 bg-brand-600 rounded-lg flex items-center justify-center text-white mr-2">
              <Globe className="h-6 w-6" />
            </div>
            <span className={`font-extrabold text-2xl tracking-tight ${scrolled ? 'text-brand-900' : 'text-white'}`}>
              Global<span className="text-brand-500">Path</span>
            </span>
          </div>
          
          <div className="hidden lg:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold uppercase tracking-wide transition-colors duration-200 ${
                  scrolled 
                    ? 'text-gray-600 hover:text-brand-600' 
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
             <button className={`text-sm font-medium ${scrolled ? 'text-gray-600' : 'text-white'} hover:text-brand-500`}>
               <Search className="w-5 h-5" />
             </button>
             <a href="#track" className={`px-4 py-2 rounded-lg text-sm font-bold border transition-all ${
               scrolled
                ? 'border-brand-600 text-brand-600 hover:bg-brand-50'
                : 'border-white text-white hover:bg-white/10'
             }`}>
               Track App
             </a>
             <a href="#contact" className="px-5 py-2 rounded-lg font-bold text-sm bg-accent-500 text-white shadow-lg hover:bg-accent-600 hover:shadow-accent-500/30 transition-all transform hover:-translate-y-0.5">
               Book Consultation
             </a>
          </div>

          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className={`${scrolled ? 'text-gray-800' : 'text-white'}`}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-xl absolute w-full border-t border-gray-100">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-3 rounded-lg text-base font-semibold text-gray-700 hover:text-brand-600 hover:bg-brand-50"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col space-y-3">
              <a href="#track" className="w-full text-center px-4 py-3 rounded-lg border border-brand-200 text-brand-700 font-bold">
                Track Application
              </a>
              <a href="#contact" className="w-full text-center px-4 py-3 rounded-lg bg-accent-500 text-white font-bold">
                Book Free Consultation
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;