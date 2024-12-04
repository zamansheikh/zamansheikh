import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Project } from './types';
import { X } from 'lucide-react';
import { ProjectGallery } from './ProjectGallery';
import { TechStack } from './TechStack';
import { ProjectLinks } from './ProjectLinks';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/90 z-50 p-4 overflow-y-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-6xl mx-auto bg-slate-900 rounded-xl overflow-hidden my-8"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-black/20 text-white hover:bg-black/40 transition-colors z-10"
        >
          <X size={24} />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
          <div className="space-y-8 order-2 lg:order-1">
            <div>
              <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
              <p className="text-gray-300 leading-relaxed">{project.description}</p>
            </div>

            <TechStack technologies={project.technologies} />

            <div>
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Key Features</h3>
              <ul className="grid gap-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <ProjectLinks
              demoUrl={project.demoUrl}
              githubUrl={project.githubUrl}
              downloadUrl={project.downloadUrl}
              purchaseUrl={project.purchaseUrl}
            />
          </div>

          <div className="order-1 lg:order-2">
            <ProjectGallery items={project.gallery} />
          </div>
        </div>

        <div className="p-8 space-y-8 bg-black/20">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">Challenges & Solutions</h3>
            <ul className="space-y-4">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="text-gray-300 pl-4 border-l-2 border-cyan-400">
                  {challenge}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">Achievements</h3>
            <ul className="grid gap-3">
              {project.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                  <span className="text-gray-300">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};