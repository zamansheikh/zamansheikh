import React from 'react';
import { motion } from 'framer-motion';
import { Project } from './types';
import { StatusBadge } from './StatusBadge';
import { Calendar, Users, ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <motion.article
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="bg-slate-800/30 rounded-xl overflow-hidden cursor-pointer group"
    >
      <div className="relative aspect-[16/9]">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <StatusBadge status={project.status} />
          <h3 className="text-2xl font-bold mt-2 group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <p className="text-gray-300 line-clamp-2">{project.description}</p>

        <div className="flex flex-wrap gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <Users className="text-cyan-400" size={16} />
            <span>{project.role}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="text-cyan-400" size={16} />
            <span>{project.startDate} - {project.endDate || 'Present'}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-gray-300"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-gray-300">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        <div className="pt-4 flex items-center text-cyan-400 group/link">
          <span className="text-sm font-medium">View Details</span>
          <ArrowRight size={16} className="ml-2 transform group-hover/link:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.article>
  );
};