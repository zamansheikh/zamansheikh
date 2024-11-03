import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Campus Saga",
      description: "A comprehensive campus management application built with Flutter and Firebase, featuring real-time updates and offline support.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
      tags: ["Flutter", "Firebase", "BLoC", "GetX"],
      github: "https://github.com/zamansheikh/campus-saga"
    },
    {
      title: "Calcu",
      description: "Scientific calculator app available on Play Store with advanced mathematical functions and a beautiful Material You design.",
      image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?auto=format&fit=crop&q=80&w=800",
      tags: ["Flutter", "Provider", "Material Design"],
      playStore: "https://play.google.com/store/apps/details?id=com.zamansheikh.calcu"
    },
    {
      title: "Number Trivia",
      description: "Android app using BLoC pattern for state management and clean architecture principles.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      tags: ["Flutter", "BLoC", "Clean Architecture"],
      github: "https://github.com/zamansheikh/number-trivia"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-800/50 rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-transform">
              <div className="relative">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                <div className="flex gap-2 flex-wrap mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" 
                       className="inline-flex items-center text-cyan-400 hover:text-cyan-300">
                      <Github className="mr-1" size={16} /> View on GitHub
                    </a>
                  )}
                  {project.playStore && (
                    <a href={project.playStore} target="_blank" rel="noopener noreferrer"
                       className="inline-flex items-center text-cyan-400 hover:text-cyan-300">
                      <ExternalLink className="mr-1" size={16} /> Play Store
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a 
            href="https://github.com/zamansheikh" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-slate-800/50 px-8 py-3 rounded-full hover:bg-slate-800 transition-colors"
          >
            <Github className="mr-2" /> View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;