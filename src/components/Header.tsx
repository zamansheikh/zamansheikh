import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = ['Home', 'About', 'Projects', 'Experience', 'Skills', 'Education', 'Contact'];

  useEffect(() => {
    const handleScroll = () => {
      // Update scroll state for header background
      setIsScrolled(window.scrollY > 50);

      // Track active section
      const sections = navItems.map(item => item.toLowerCase());
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 border-b transition-all duration-300 ${isScrolled
          ? 'glass-card border-white/10 shadow-lg'
          : 'bg-transparent border-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={scrollToTop}
            className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent truncate max-w-[200px] sm:max-w-none hover:scale-105 transition-transform cursor-pointer"
          >
            Zaman Sheikh
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => {
              const sectionId = item.toLowerCase();
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={item}
                  href={`#${sectionId}`}
                  className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${isActive
                      ? 'text-cyan-400 bg-cyan-400/10'
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-white/5'
                    }`}
                >
                  {item}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-cyan-400 hover:scale-110 transition-all p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden glass-card border-t border-white/10 transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="px-4 py-2 space-y-1">
          {navItems.map((item) => {
            const sectionId = item.toLowerCase();
            const isActive = activeSection === sectionId;

            return (
              <a
                key={item}
                href={`#${sectionId}`}
                className={`block py-3 px-4 rounded-lg transition-all ${isActive
                    ? 'text-cyan-400 bg-cyan-400/10 translate-x-2'
                    : 'text-gray-300 hover:text-cyan-400 hover:translate-x-2 hover:bg-white/5'
                  }`}
                onClick={handleNavClick}
              >
                {item}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Header;