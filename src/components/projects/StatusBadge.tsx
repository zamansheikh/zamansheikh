import React from 'react';
import { ProjectStatus } from './types';

interface StatusBadgeProps {
  status: ProjectStatus;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const getStatusColor = (status: ProjectStatus) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500/20 text-green-300';
      case 'ongoing':
        return 'bg-blue-500/20 text-blue-300';
      case 'development':
        return 'bg-yellow-500/20 text-yellow-300';
    }
  };

  return (
    <span className={`${getStatusColor(status)} px-3 py-1 rounded-full text-sm font-medium`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};