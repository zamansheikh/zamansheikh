import React from 'react';

interface TechStackProps {
  technologies: string[];
}

export const TechStack: React.FC<TechStackProps> = ({ technologies }) => {
  return (
    <div>
      <h4 className="text-lg font-semibold mb-2 text-cyan-400">Technologies</h4>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-slate-700/50 text-gray-300 px-3 py-1 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};