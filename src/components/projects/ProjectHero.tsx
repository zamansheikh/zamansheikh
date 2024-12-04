import React from 'react';
import { motion } from 'framer-motion';
import { StatusBadge } from './StatusBadge';
import { Calendar, Users } from 'lucide-react';

interface ProjectHeroProps {
  title: string;
  thumbnail: string;
  status: string;
  role: string;
  startDate: string;
  endDate?: string;
  teamSize?: number;
}

export const ProjectHero: React.FC<ProjectHeroProps> = ({
  title,
  thumbnail,
  status,
  role,
  startDate,
  endDate,
  teamSize,
}) => {
  return (
    <div className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh]">
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0"
      >
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
      </motion.div>
      
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          <StatusBadge status={status} />
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {title}
          </h2>
          
          <div className="flex flex-wrap gap-6 mt-6 text-gray-300">
            <div className="flex items-center gap-2">
              <Users className="text-cyan-400" size={20} />
              <span>{role}</span>
              {teamSize && <span className="text-gray-400">(Team of {teamSize})</span>}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="text-cyan-400" size={20} />
              <span>{startDate} - {endDate || 'Present'}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};