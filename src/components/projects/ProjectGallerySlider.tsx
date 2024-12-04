import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { GalleryItem } from './types';

interface ProjectGallerySliderProps {
  items: GalleryItem[];
  onClose: () => void;
  initialIndex: number;
}

export const ProjectGallerySlider: React.FC<ProjectGallerySliderProps> = ({
  items,
  onClose,
  initialIndex,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const navigate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + items.length) % items.length);
  };

  return (
    <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white hover:text-cyan-400 transition-colors p-4 z-50"
      >
        <X size={24} />
      </button>

      <button
        onClick={() => navigate(-1)}
        className="absolute left-6 text-white hover:text-cyan-400 transition-colors p-4 z-50"
      >
        <ChevronLeft size={32} />
      </button>

      <button
        onClick={() => navigate(1)}
        className="absolute right-6 text-white hover:text-cyan-400 transition-colors p-4 z-50"
      >
        <ChevronRight size={32} />
      </button>

      <div className="relative w-full h-full flex items-center justify-center px-16 py-12">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute w-full h-full flex items-center justify-center"
          >
            <div className="relative max-w-6xl w-full h-full px-8">
              {items[currentIndex].type === 'image' ? (
                <img
                  src={items[currentIndex].url}
                  alt={items[currentIndex].caption}
                  className="w-full h-full object-contain rounded-xl shadow-2xl"
                />
              ) : (
                <video
                  src={items[currentIndex].url}
                  controls
                  className="w-full h-full rounded-xl shadow-2xl"
                />
              )}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent"
              >
                <p className="text-white text-center text-xl font-medium">
                  {items[currentIndex].caption}
                </p>
                <div className="flex justify-center mt-6 gap-3">
                  {items.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setDirection(index > currentIndex ? 1 : -1);
                        setCurrentIndex(index);
                      }}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? 'bg-cyan-400 w-6'
                          : 'bg-white/50 hover:bg-white/80'
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};