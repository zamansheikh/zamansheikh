import { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, Instagram, Mail, ArrowUp, Heart, Facebook } from 'lucide-react';

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <Github size={20} />, url: 'https://github.com/zamansheikh', label: 'GitHub', color: 'hover:text-white' },
    { icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/zamansheikh/', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: <Facebook size={20} />, url: 'https://facebook.com/zamansheikh.404', label: 'Facebook', color: 'hover:text-blue-500' },
    { icon: <Twitter size={20} />, url: 'https://x.com/zamansheikh_404', label: 'Twitter', color: 'hover:text-sky-400' },
    { icon: <Instagram size={20} />, url: 'https://instagram.com/zamansheikh_error', label: 'Instagram', color: 'hover:text-pink-400' },
    { icon: <Mail size={20} />, url: 'mailto:zaman6545@gmail.com', label: 'Email', color: 'hover:text-cyan-400' }
  ];

  const navItems = ['Home', 'About', 'Projects', 'Experience', 'Skills', 'Education', 'Contact'];

  const techStack = ['Flutter', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'];

  return (
    <footer className="relative bg-slate-900/90 border-t border-white/10">
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full shadow-lg transition-all duration-300 z-40 hover:scale-110 hover:glow-lg ${showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
          }`}
        aria-label="Back to top"
      >
        <ArrowUp size={24} />
      </button>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4 gradient-text-animated">Zaman Sheikh</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Flutter Developer specializing in creating beautiful and performant mobile applications with clean architecture.
            </p>
            <div className="flex justify-center md:justify-start gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 transition-all hover:scale-110 ${link.color}`}
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-cyan-400 transition-colors inline-block hover:translate-x-1"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Built With */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4 text-white">Built With</h3>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="glass-card px-3 py-1 rounded-full text-xs text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2 flex-wrap">
            <span>© {new Date().getFullYear()} Zaman Sheikh. All rights reserved.</span>
            <span className="hidden sm:inline">|</span>
            <span className="flex items-center gap-1">
              Made with <Heart size={16} className="text-red-500 fill-current animate-pulse" /> by Zaman
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;