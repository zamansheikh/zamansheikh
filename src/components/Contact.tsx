import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Contact</h2>
        <div className="space-y-6 mb-12">
          <a 
            href="tel:+8801735069723" 
            className="flex items-center justify-center gap-2 text-lg sm:text-xl text-gray-300 hover:text-cyan-400 transition-colors group"
          >
            <Phone className="flex-shrink-0 text-cyan-400 group-hover:rotate-12 transition-transform" />
            <span>+8801735069723</span>
          </a>
          <a 
            href="mailto:shamsuzzaman15-4031@diu.edu.bd" 
            className="flex items-center justify-center gap-2 text-lg sm:text-xl text-gray-300 hover:text-cyan-400 transition-colors group"
          >
            <Mail className="flex-shrink-0 text-cyan-400 group-hover:scale-110 transition-transform" />
            <span className="break-all">shamsuzzaman15-4031@diu.edu.bd</span>
          </a>
          <a 
            href="https://maps.google.com/?q=Mondol+Para+Ashulia+Dhaka" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-lg sm:text-xl text-gray-300 hover:text-cyan-400 transition-colors group"
          >
            <MapPin className="flex-shrink-0 text-cyan-400 group-hover:translate-y-[-2px] transition-transform" />
            <span>Mondol Para, Ashulia, Dhaka</span>
            <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <a 
            href="https://github.com/zamansheikh" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-slate-800/50 px-6 py-3 rounded-full hover:bg-slate-800 hover:scale-105 transition-all"
          >
            <Github size={20} className="group-hover:rotate-12 transition-transform" />
            GitHub
          </a>
          <a 
            href="https://linkedin.com/in/zamansheikh" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-slate-800/50 px-6 py-3 rounded-full hover:bg-slate-800 hover:scale-105 transition-all"
          >
            <Linkedin size={20} className="group-hover:rotate-12 transition-transform" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;