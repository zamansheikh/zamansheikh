import React from 'react';
import { Project } from './types';

interface ProjectNavigatorProps {
  projects: Project[];
  currentIndex: number;
  onSelect: (index: number) => void;
}

export const ProjectNavigator: React.FC<ProjectNavigatorProps> = ({
  projects,
  currentIndex,
  onSelect,
}) => {
  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
      {projects.map((project, index) => (
        <button
          key={index}
          onClick={() => onSelect(index)}
          className={`w-3 h-3 rounded-full transition-all ${
            index === currentIndex
              ? 'bg-cyan-400 scale-125'
              : 'bg-slate-600 hover:bg-slate-500'
          }`}
          aria-label={`Go to project ${index + 1}`}
        />
      ))}
    </div>
  );
};