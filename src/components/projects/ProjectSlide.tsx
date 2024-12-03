import React from 'react';
import { motion } from 'framer-motion';
import { Project } from './types';
import { StatusBadge } from './StatusBadge';
import { TechStack } from './TechStack';
import { ProjectLinks } from './ProjectLinks';

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
        className="bg-slate-800/30 rounded-xl overflow-hidden"
      >
        <div className="relative h-64">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <StatusBadge status={project.status} />
            <h2 className="text-3xl font-bold mt-2">{project.title}</h2>
          </div>
        </div>

        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-cyan-400">Overview</h3>
              <p className="text-gray-300 leading-relaxed">{project.description}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 text-cyan-400">Key Features</h3>
              <ul className="grid gap-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <TechStack technologies={project.technologies} />
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-cyan-400">Challenges</h3>
              <ul className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="text-gray-300 pl-4 border-l-2 border-cyan-400">
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 text-cyan-400">Achievements</h3>
              <ul className="space-y-2">
                {project.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                    <span className="text-gray-300">{achievement}</span>
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
        </div>
      </motion.div>
    </div>
  );
};