import React from 'react';
import { motion } from 'framer-motion';
import { Project } from './types';
import { StatusBadge } from './StatusBadge';
import { TechStack } from './TechStack';
import { ProjectLinks } from './ProjectLinks';
import { ProjectGallery } from './ProjectGallery';

interface ProjectSlideProps {
  project: Project;
}

export const ProjectSlide: React.FC<ProjectSlideProps> = ({ project }) => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 h-full py-20 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-slate-800/30 rounded-xl overflow-hidden shadow-xl"
      >
        <div className="relative h-72 sm:h-96">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <StatusBadge status={project.status} />
            <h2 className="text-4xl font-bold mt-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {project.title}
            </h2>
          </div>
        </div>

        <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Overview</h3>
              <p className="text-gray-300 leading-relaxed">{project.description}</p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Key Features</h3>
              <ul className="grid gap-3">
                {project.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-2"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                    <span className="text-gray-300">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <TechStack technologies={project.technologies} />
            
            <ProjectGallery items={project.gallery} />
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Challenges & Solutions</h3>
              <ul className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-gray-300 pl-4 border-l-2 border-cyan-400"
                  >
                    {challenge}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Achievements</h3>
              <ul className="space-y-3">
                {project.achievements.map((achievement, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-2"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                    <span className="text-gray-300">{achievement}</span>
                  </motion.li>
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
        </div>
      </motion.div>
    </div>
  );
};