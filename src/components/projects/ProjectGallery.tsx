import React, { useState } from 'react';
import { GalleryItem } from './types';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface ProjectGalleryProps {
  items: GalleryItem[];
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ items }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openModal = (index: number) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);
  
  const navigate = (direction: 'prev' | 'next') => {
    if (selectedIndex === null) return;
    const newIndex = direction === 'prev' 
      ? (selectedIndex - 1 + items.length) % items.length
      : (selectedIndex + 1) % items.length;
    setSelectedIndex(newIndex);
  };

  return (
    <div>
      <h4 className="text-lg font-semibold mb-2 text-cyan-400">Gallery</h4>
      
      {/* Thumbnails */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative aspect-video cursor-pointer group"
            onClick={() => openModal(index)}
          >
            {item.type === 'image' ? (
              <img
                src={item.url}
                alt={item.caption}
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <video
                src={item.url}
                className="w-full h-full object-cover rounded-lg"
              />
            )}
            <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg">
              <span className="text-white text-sm">{item.caption}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white hover:text-cyan-400 transition-colors"
          >
            <X size={24} />
          </button>
          
          <button
            onClick={() => navigate('prev')}
            className="absolute left-4 text-white hover:text-cyan-400 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={() => navigate('next')}
            className="absolute right-4 text-white hover:text-cyan-400 transition-colors"
          >
            <ChevronRight size={24} />
          </button>

          <div className="max-w-4xl max-h-[80vh] p-4">
            {items[selectedIndex].type === 'image' ? (
              <img
                src={items[selectedIndex].url}
                alt={items[selectedIndex].caption}
                className="max-w-full max-h-[70vh] object-contain"
              />
            ) : (
              <video
                src={items[selectedIndex].url}
                controls
                className="max-w-full max-h-[70vh]"
              />
            )}
            <p className="text-white text-center mt-4">{items[selectedIndex].caption}</p>
          </div>
        </div>
      )}
    </div>
  );
};