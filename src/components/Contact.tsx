import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Contact</h2>
        <div className="space-y-6 mb-12">
          <div className="flex items-center justify-center gap-2 text-lg sm:text-xl text-gray-300">
            <Phone className="flex-shrink-0 text-cyan-400" />
            <span>+8801735069723</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-lg sm:text-xl text-gray-300">
            <Mail className="flex-shrink-0 text-cyan-400" />
            <span className="break-all">shamsuzzaman15-4031@diu.edu.bd</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-lg sm:text-xl text-gray-300">
            <MapPin className="flex-shrink-0 text-cyan-400" />
            <span>Mondol Para, Ashulia, Dhaka</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <a 
            href="https://github.com/zamansheikh" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-slate-800/50 px-6 py-3 rounded-full hover:bg-slate-800 transition-colors"
          >
            <Github size={20} />
            GitHub
          </a>
          <a 
            href="https://linkedin.com/in/zamansheikh" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-slate-800/50 px-6 py-3 rounded-full hover:bg-slate-800 transition-colors"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;