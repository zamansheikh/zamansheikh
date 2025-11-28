import React from 'react';
import { FileDown, ChevronDown, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { TypingAnimation } from './TypingAnimation';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const cvPath = import.meta.env.MODE === 'github'
    ? "/zaman_cv.pdf"
    : "/zaman_cv.pdf";

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: "https://github.com/zamansheikh",
      label: "GitHub",
      color: "hover:text-white"
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/zamansheikh/",
      label: "LinkedIn",
      color: "hover:text-blue-400"
    },
    {
      icon: <Mail size={20} />,
      href: "mailto:zaman6545@gmail.com",
      label: "Email",
      color: "hover:text-cyan-400"
    }
  ];

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative px-4 py-20">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-5xl w-full mx-auto text-center space-y-8 md:space-y-12 relative z-10">
        {/* Profile Image with Premium Effects */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="relative inline-block group"
        >
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 mx-auto">
            {/* Glow rings */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-500 opacity-50 blur-xl animate-pulse" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 opacity-30 blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }} />

            {/* Image container */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-cyan-400/30 group-hover:border-cyan-400/60 transition-all duration-500 shadow-2xl">
              <img
                src="https://github.com/zamansheikh/zamansheikh/blob/main/hero_dp.jpg?raw=true"
                alt="Zaman Sheikh - Flutter Developer"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Floating animation wrapper */}
            <div className="absolute inset-0 animate-[float_3s_ease-in-out_infinite]" />
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-6"
        >
          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
            <MapPin size={16} className="text-cyan-400" />
            <span>Dhaka, Bangladesh</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight">
            <span className="block mb-2">Hi, I'm</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 animate-gradient bg-300%">
              Md. Shamsuzzaman
            </span>
          </h1>

          {/* Typing Animation */}
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold min-h-[3rem]">
            <TypingAnimation
              phrases={[
                "Flutter Developer 📱",
                "Mobile App Specialist 🚀",
                "Problem Solver 💡",
                "Tech Enthusiast 💻"
              ]}
              className="gradient-text-animated"
            />
          </div>

          <p className="text-lg sm:text-xl text-gray-300/90 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating <span className="text-cyan-400 font-semibold">innovative</span> and{' '}
            <span className="text-cyan-400 font-semibold">performant</span> mobile solutions with Flutter
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex justify-center gap-4"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className={`glass-card p-3 rounded-full ${link.color} text-gray-300 transition-all duration-300 hover:scale-110 glow-lg`}
              aria-label={link.label}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto btn-primary"
          >
            View My Projects
          </a>
          <a
            href={cvPath}
            className="w-full sm:w-auto glass-card-hover px-8 py-3.5 rounded-full font-semibold inline-flex items-center justify-center group"
          >
            Download Resume
            <FileDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          className="inline-flex flex-col items-center text-gray-400 hover:text-cyan-400 transition-colors group"
        >
          <span className="text-sm font-medium mb-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
            Scroll Down
          </span>
          <ChevronDown size={24} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;