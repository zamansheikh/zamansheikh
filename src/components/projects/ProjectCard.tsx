import { motion } from 'framer-motion';
import { Project } from './types';
import { StatusBadge } from './StatusBadge';
import { Calendar, Users, ArrowRight, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="glass-card-hover rounded-2xl overflow-hidden cursor-pointer group relative"
    >
      {/* Image Section */}
      <div className="relative aspect-[16/9] overflow-hidden">
        {/* Shimmer effect */}
        <div className="absolute inset-0 shimmer" />

        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <StatusBadge status={project.status} />
          <h3 className="text-2xl font-bold mt-2 text-white group-hover:text-cyan-400 transition-colors duration-300">
            {project.title}
          </h3>
        </div>

        {/* Corner Accent */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-4">
        <p className="text-gray-300 line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        {/* Meta Information */}
        <div className="flex flex-wrap gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-2 group/meta">
            <Users className="text-cyan-400 group-hover/meta:scale-110 transition-transform" size={16} />
            <span>{project.role}</span>
          </div>
          <div className="flex items-center gap-2 group/meta">
            <Calendar className="text-cyan-400 group-hover/meta:scale-110 transition-transform" size={16} />
            <span>{project.startDate} - {project.endDate || 'Present'}</span>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="glass-card px-3 py-1 rounded-full text-xs font-medium text-gray-300 hover:text-cyan-400 hover:border-cyan-400/30 transition-colors"
            >
              {tech}
            </motion.span>
          ))}
          {project.technologies.length > 4 && (
            <span className="glass-card px-3 py-1 rounded-full text-xs font-medium text-cyan-400">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Call to Action */}
        <div className="pt-4 flex items-center justify-between">
          <div className="flex items-center text-cyan-400 group/link">
            <span className="text-sm font-semibold">View Details</span>
            <ArrowRight
              size={16}
              className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300"
            />
          </div>

          {project.links && project.links.live && (
            <ExternalLink
              size={16}
              className="text-gray-400 group-hover:text-cyan-400 transition-colors"
            />
          )}
        </div>
      </div>

      {/* Hover Border Glow */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-cyan-400/30 transition-colors duration-500 pointer-events-none" />
    </motion.article>
  );
};