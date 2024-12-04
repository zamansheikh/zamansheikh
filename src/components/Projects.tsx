import React from 'react';
import { ProjectSection } from './projects/ProjectSection';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my portfolio of innovative mobile and web applications, showcasing my expertise in Flutter development and problem-solving capabilities.
          </p>
        </motion.div>
        <ProjectSection projects={projects} />
      </div>
    </section>
  );
};

export default Projects;