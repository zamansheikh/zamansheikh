import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ProjectSlide } from './ProjectSlide';
import { ProjectNavigator } from './ProjectNavigator';
import { Project } from './types';

interface ProjectSlideshowProps {
  projects: Project[];
}

export const ProjectSlideshow: React.FC<ProjectSlideshowProps> = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + projects.length) % projects.length);
  };

  return (
    <div className="relative h-screen overflow-hidden bg-slate-900/50">
      <div className="absolute inset-0 flex items-center justify-center">
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
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="absolute w-full h-full flex items-center justify-center"
          >
            <ProjectSlide project={projects[currentIndex]} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-800/50 text-white hover:bg-slate-800 transition-colors z-10"
        onClick={() => paginate(-1)}
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-800/50 text-white hover:bg-slate-800 transition-colors z-10"
        onClick={() => paginate(1)}
      >
        <ChevronRight size={24} />
      </button>

      {/* Project Navigator */}
      <ProjectNavigator
        projects={projects}
        currentIndex={currentIndex}
        onSelect={(index) => {
          setDirection(index > currentIndex ? 1 : -1);
          setCurrentIndex(index);
        }}
      />
    </div>
  );
};