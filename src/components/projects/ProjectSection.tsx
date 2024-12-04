import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from './types';
import { ProjectGrid } from './ProjectGrid';
import { ChevronDown } from 'lucide-react';

interface ProjectSectionProps {
  projects: Project[];
}

export const ProjectSection: React.FC<ProjectSectionProps> = ({ projects }) => {
  const [showAll, setShowAll] = useState(false);
  const initialProjects = projects.slice(0, 6);
  const remainingProjects = projects.slice(6);
  const hasMoreProjects = projects.length > 6;

  return (
    <div className="space-y-8">
      <ProjectGrid projects={initialProjects} />
      
      <AnimatePresence>
        {showAll && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <ProjectGrid projects={remainingProjects} />
          </motion.div>
        )}
      </AnimatePresence>

      {hasMoreProjects && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-center"
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="group flex items-center gap-2 bg-slate-800/50 hover:bg-slate-800/70 px-6 py-3 rounded-full transition-all duration-300"
          >
            <span className="text-gray-300 group-hover:text-white">
              {showAll ? 'Show Less' : 'View All Projects'}
            </span>
            <ChevronDown 
              className={`w-5 h-5 text-cyan-400 transition-transform duration-300 ${
                showAll ? 'rotate-180' : ''
              }`}
            />
          </button>
        </motion.div>
      )}
    </div>
  );
};