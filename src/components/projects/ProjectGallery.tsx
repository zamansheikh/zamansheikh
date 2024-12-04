import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Maximize2 } from 'lucide-react';
import { GalleryItem } from './types';
import { ProjectGallerySlider } from './ProjectGallerySlider';

interface ProjectGalleryProps {
  items: GalleryItem[];
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ items }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-semibold text-cyan-400">Gallery</h3>
      
      <div className="grid grid-cols-1 gap-6">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative aspect-[16/9] group cursor-pointer rounded-xl overflow-hidden shadow-lg shadow-black/20"
            onClick={() => setSelectedIndex(index)}
          >
            {item.type === 'image' ? (
              <img
                src={item.url}
                alt={item.caption}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <video
                src={item.url}
                className="w-full h-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-base sm:text-lg font-medium">{item.caption}</p>
              </div>
              <Maximize2 className="absolute top-6 right-6 w-6 h-6 text-white transform scale-0 group-hover:scale-100 transition-transform duration-300" />
            </div>
          </motion.div>
        ))}
      </div>

      {selectedIndex !== null && (
        <ProjectGallerySlider
          items={items}
          initialIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
        />
      )}
    </div>
  );
};