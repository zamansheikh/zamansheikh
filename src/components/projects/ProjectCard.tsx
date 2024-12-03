import React from 'react';
import { ExternalLink, Github, Calendar, Users, Download, ShoppingCart, Clock } from 'lucide-react';
import { ProjectStatus } from './types';
import { StatusBadge } from './StatusBadge';
import { TechStack } from './TechStack';
import { ProjectLinks } from './ProjectLinks';
import { ProjectGallery } from './ProjectGallery';

interface ProjectCardProps {
  project: {
    title: string;
    thumbnail: string;
    description: string;
    role: string;
    technologies: string[];
    startDate: string;
    endDate?: string;
    status: ProjectStatus;
    demoUrl?: string;
    githubUrl?: string;
    downloadUrl?: string;
    purchaseUrl?: string;
    features: string[];
    gallery: Array<{ type: 'image' | 'video'; url: string; caption: string }>;
    challenges: string[];
    teamSize?: number;
    achievements: string[];
  };
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article className="bg-slate-800/30 rounded-xl overflow-hidden hover:transform hover:scale-[1.01] transition-all duration-300">
      {/* Hero Section */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={project.thumbnail} 
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <StatusBadge status={project.status} />
          <h3 className="text-2xl font-bold mt-2">{project.title}</h3>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Project Overview */}
        <div>
          <h4 className="text-lg font-semibold mb-2 text-cyan-400">Overview</h4>
          <p className="text-gray-300 leading-relaxed">{project.description}</p>
        </div>

        {/* Role & Timeline */}
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <Users className="text-cyan-400" size={18} />
            <span className="text-gray-300">Role: {project.role}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="text-cyan-400" size={18} />
            <span className="text-gray-300">
              {project.startDate} - {project.endDate || 'Present'}
            </span>
          </div>
          {project.teamSize && (
            <div className="flex items-center gap-2">
              <Users className="text-cyan-400" size={18} />
              <span className="text-gray-300">Team Size: {project.teamSize}</span>
            </div>
          )}
        </div>

        {/* Tech Stack */}
        <TechStack technologies={project.technologies} />

        {/* Features */}
        <div>
          <h4 className="text-lg font-semibold mb-2 text-cyan-400">Key Features</h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Gallery */}
        <ProjectGallery items={project.gallery} />

        {/* Challenges & Solutions */}
        <div>
          <h4 className="text-lg font-semibold mb-2 text-cyan-400">Challenges & Solutions</h4>
          <ul className="space-y-3">
            {project.challenges.map((challenge, index) => (
              <li key={index} className="text-gray-300 pl-4 border-l-2 border-cyan-400">
                {challenge}
              </li>
            ))}
          </ul>
        </div>

        {/* Achievements */}
        <div>
          <h4 className="text-lg font-semibold mb-2 text-cyan-400">Achievements</h4>
          <ul className="space-y-2">
            {project.achievements.map((achievement, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                <span className="text-gray-300">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Links */}
        <ProjectLinks
          demoUrl={project.demoUrl}
          githubUrl={project.githubUrl}
          downloadUrl={project.downloadUrl}
          purchaseUrl={project.purchaseUrl}
        />
      </div>
    </article>
  );
};