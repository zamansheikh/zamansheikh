import React from 'react';
import { motion } from 'framer-motion';
import { Project } from './types';
import { ProjectHero } from './ProjectHero';
import { TechStack } from './TechStack';
import { ProjectLinks } from './ProjectLinks';
import { ProjectGallery } from './ProjectGallery';

interface ProjectSlideProps {
  project: Project;
}

export const ProjectSlide: React.FC<ProjectSlideProps> = ({ project }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <ProjectHero
        title={project.title}
        thumbnail={project.thumbnail}
        status={project.status}
        role={project.role}
        startDate={project.startDate}
        endDate={project.endDate}
        teamSize={project.teamSize}
      />

      <div className="flex-1 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Overview</h3>
                <p className="text-gray-300 leading-relaxed">{project.description}</p>
              </div>

              <TechStack technologies={project.technologies} />

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Key Features</h3>
                <ul className="grid gap-3">
                  {project.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="flex items-start gap-2"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                      <span className="text-gray-300">{feature}</span>
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-12"
            >
              <ProjectGallery items={project.gallery} />

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Challenges & Solutions</h3>
                <ul className="space-y-4">
                  {project.challenges.map((challenge, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
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
                      transition={{ delay: 0.1 * index }}
                      className="flex items-start gap-2"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                      <span className="text-gray-300">{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};