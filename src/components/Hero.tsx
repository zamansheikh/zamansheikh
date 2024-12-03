import React from 'react';
import { FileDown, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  // Determine the CV path based on the environment first one is for github without custom domain and second one is for custom domain
  // const cvPath = import.meta.env.MODE === 'github'
  //   ? "/zamansheikh/zaman_cv.pdf"
  //   : "/zaman_cv.pdf";
  // const cvPath = "https://github.com/zamansheikh/zamansheikh/blob/main/Zaman_CV.pdf";
  const cvPath = import.meta.env.MODE === 'github'
    ? "/zaman_cv.pdf"
    : "/zaman_cv.pdf";
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative px-4 py-20">
      <div className="max-w-4xl w-full mx-auto text-center space-y-12">
        <div className="relative inline-block group">
          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-cyan-400/20 hover:border-cyan-400/40 transition-colors duration-300 mx-auto shadow-lg shadow-cyan-500/10">
            <img
              src="https://i.imgur.com/WLLm0qQ.jpeg?auto=format&fit=crop&q=80&w=400"
              alt="Zaman Sheikh - Flutter Developer"
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/10 to-cyan-500/10 animate-pulse" />
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 animate-gradient bg-300% whitespace-nowrap">
              Md. Shamsuzzaman
            </span>
            <span className="block mt-4 text-3xl sm:text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Flutter Developer
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300/90 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating innovative and performant mobile solutions with Flutter
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
          <a
            href="#projects"
            className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-3.5 rounded-full font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/20"
          >
            View My Projects
          </a>
          <a
            href={cvPath}
            className="w-full sm:w-auto border border-white/20 px-8 py-3.5 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center group"
          >
            Download Resume
            <FileDown className="ml-2 w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <a
          href="#about"
          className="inline-flex flex-col items-center text-gray-400 hover:text-cyan-400 transition-colors group"
        >
          <span className="text-sm font-medium mb-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
            Scroll Down
          </span>
          <ChevronDown size={24} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;