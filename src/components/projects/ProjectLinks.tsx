import React from 'react';
import { ExternalLink, Github, Download, ShoppingCart } from 'lucide-react';

interface ProjectLinksProps {
  demoUrl?: string;
  githubUrl?: string;
  downloadUrl?: string;
  purchaseUrl?: string;
}

export const ProjectLinks: React.FC<ProjectLinksProps> = ({
  demoUrl,
  githubUrl,
  downloadUrl,
  purchaseUrl,
}) => {
  return (
    <div className="flex flex-wrap gap-4">
      {demoUrl && (
        <a
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 px-4 py-2 rounded-full transition-colors"
        >
          <ExternalLink size={18} />
          Live Demo
        </a>
      )}
      {githubUrl && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-slate-700/50 hover:bg-slate-700/70 text-gray-300 px-4 py-2 rounded-full transition-colors"
        >
          <Github size={18} />
          View Source
        </a>
      )}
      {downloadUrl && (
        <a
          href={downloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 px-4 py-2 rounded-full transition-colors"
        >
          <Download size={18} />
          Download
        </a>
      )}
      {purchaseUrl && (
        <a
          href={purchaseUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-500/20 hover:bg-green-500/30 text-green-300 px-4 py-2 rounded-full transition-colors"
        >
          <ShoppingCart size={18} />
          Purchase
        </a>
      )}
    </div>
  );
};