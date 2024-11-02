import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 text-center text-gray-400 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          {['Home', 'About', 'Projects', 'Skills', 'Education', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-cyan-400 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
        <p className="text-sm sm:text-base">© 2024 Zaman Sheikh. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;