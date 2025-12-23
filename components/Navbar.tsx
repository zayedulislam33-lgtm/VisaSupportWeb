import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Search, ChevronRight } from 'lucide-react';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
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
    { name: 'Home' },
    { name: 'Services' },
    { name: 'Destinations' },
    { name: 'Process' },
    { name: 'Reviews' },
    { name: 'Blog' },
  ];

  const handleNavigation = (viewName: string) => {
    onNavigate(viewName);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Fixed Heights: Initial h-24 (96px), Sticky h-20 (80px)
  const navClasses = scrolled 
    ? 'bg-white/95 backdrop-blur-xl shadow-lg h-20 border-b border-gray-100' 
    : 'bg-brand-900 shadow-none h-24 border-b border-white/5';
  
  const logoText = scrolled ? 'text-brand-900' : 'text-white';
  const linkText = scrolled ? 'text-gray-600 hover:text-brand-600 hover:bg-brand-50' : 'text-gray-200 hover:text-white hover:bg-white/10';
  const activeLink = 'bg-brand-600 text-white shadow-md shadow-brand-600/20';

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out flex items-center ${navClasses}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex justify-between items-center h-full">
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center cursor-pointer group" onClick={() => handleNavigation('Home')}>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-3 shadow-lg transition-colors ${scrolled ? 'bg-brand-600 text-white' : 'bg-white/10 text-white backdrop-blur-sm'}`}>
                <Globe className="h-7 w-7" />
              </div>
              <span className={`font-extrabold text-2xl tracking-tight transition-colors ${logoText}`}>
                Global<span className={scrolled ? 'text-brand-600' : 'text-brand-400'}>Path</span>
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavigation(link.name)}
                  className={`px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wide transition-all duration-300 ${
                    currentView === link.name ? activeLink : linkText
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* Right Actions */}
            <div className="hidden lg:flex items-center space-x-4">
               <button className={`p-2.5 rounded-full transition-all ${scrolled ? 'text-gray-400 hover:text-brand-600 hover:bg-gray-100' : 'text-gray-300 hover:text-white hover:bg-white/10'}`}>
                 <Search className="w-5 h-5" />
               </button>
               <button 
                 onClick={() => handleNavigation('Process')}
                 className={`px-5 py-2.5 rounded-lg text-sm font-bold border transition-all ${
                 scrolled
                  ? 'border-gray-200 text-gray-700 hover:border-brand-600 hover:text-brand-600'
                  : 'border-white/20 text-white hover:bg-white/10'
               }`}>
                 Track App
               </button>
               <button 
                 onClick={() => handleNavigation('Services')}
                 className="px-6 py-2.5 rounded-lg font-bold text-sm bg-accent-500 text-white shadow-lg shadow-accent-500/30 hover:bg-accent-600 hover:-translate-y-0.5 transition-all"
               >
                 Book Consultation
               </button>
            </div>

            {/* Mobile Toggle */}
            <div className="lg:hidden flex items-center">
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className={`p-2 rounded-lg transition-colors ${scrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
              >
                {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
         className={`fixed inset-0 z-[55] bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
         onClick={() => setIsOpen(false)}
      ></div>

      <div 
        className={`fixed inset-y-0 left-0 z-[60] w-[85%] max-w-sm bg-white shadow-2xl transform transition-transform duration-300 cubic-bezier(0.4, 0, 0.2, 1) lg:hidden flex flex-col ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
           <div className="flex items-center">
              <div className="w-10 h-10 bg-brand-600 rounded-lg flex items-center justify-center text-white mr-3">
                <Globe className="h-6 w-6" />
              </div>
              <span className="font-extrabold text-2xl text-brand-900">Menu</span>
           </div>
           <button onClick={() => setIsOpen(false)} className="p-2 bg-gray-50 rounded-full hover:bg-gray-100 text-gray-500 transition-colors">
             <X className="w-6 h-6" />
           </button>
        </div>

        <div className="flex-grow overflow-y-auto py-6 px-6 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavigation(link.name)}
              className={`w-full flex items-center justify-between px-5 py-4 rounded-xl text-lg font-bold transition-all ${
                currentView === link.name 
                  ? 'bg-brand-50 text-brand-700' 
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              {link.name}
              {currentView === link.name && <ChevronRight className="w-5 h-5 text-brand-600" />}
            </button>
          ))}
          
          <div className="mt-8 space-y-4 pt-8 border-t border-gray-100">
             <button onClick={() => handleNavigation('Services')} className="w-full py-4 bg-accent-500 text-white font-bold rounded-xl shadow-lg shadow-accent-500/20 active:scale-95 transition-transform text-lg">
               Book Free Consultation
             </button>
             <button onClick={() => handleNavigation('Process')} className="w-full py-4 border-2 border-gray-200 text-gray-700 font-bold rounded-xl active:bg-gray-50 transition-colors text-lg">
               Track Application
             </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;