import React from 'react';
import { Github, Linkedin, Twitter, Instagram, Mail, ExternalLink, Facebook } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Github size={20} />, url: 'https://github.com/zamansheikh', label: 'GitHub' },
    { icon: <Linkedin size={20} />, url: 'https://linkedin.com/in/zamansheikh', label: 'LinkedIn' },
    { icon: <Facebook size={20} />, url: 'https://facebook.com/zamansheikh.404', label: 'Facebook' },
    { icon: <Twitter size={20} />, url: 'https://x.com/zamansheikh_404', label: 'Twitter' },
    { icon: <Instagram size={20} />, url: 'https://instagram.com/zamansheikh_error', label: 'Instagram' },
    { icon: <Mail size={20} />, url: 'mailto:shamsuzzaman15-4031@diu.edu.bd', label: 'Email' }
  ];

  const navItems = ['Home', 'About', 'Projects', 'Experience', 'Skills', 'Education', 'Contact'];

  return (
    <footer className="bg-slate-900/90 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Zaman Sheikh</h3>
            <p className="text-gray-400 mb-4">
              Flutter Developer specializing in creating beautiful and performant mobile applications.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 hover:scale-110 transition-all"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-cyan-400 hover:translate-x-2 inline-flex items-center gap-1 transition-all"
                  >
                    <ExternalLink size={14} />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Zaman Sheikh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;