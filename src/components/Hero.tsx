import React from 'react';
import { FileDown, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  // Determine the CV path based on the environment
  // const cvPath = import.meta.env.MODE === 'github' 
  //   ? "/zamansheikh/Zaman_CV.pdf" 
  //   : "/Zaman_CV.pdf";
  const cvPath = "https://github.com/zamansheikh/zamansheikh/blob/main/Zaman_CV.pdf";

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative px-4 pt-16">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6">
          Hi, I'm Md. Shamsuzzaman
          <span className="block mt-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Flutter Developer
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 mb-8 px-4">
          Passionate about creating innovative mobile solutions with Flutter
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#projects" 
            className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity text-center"
          >
            View My Projects
          </a>
          <a 
            href={cvPath} 
            className="w-full sm:w-auto border border-white/20 px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center"
          >
            Download Resume
            <FileDown className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 animate-bounce">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;