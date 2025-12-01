import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Rocket, Award, Users } from 'lucide-react';
import { StatsCard } from './StatsCard';

const About = () => {
  const stats = [
    { value: 3, label: "Years Experience", suffix: "+", icon: <Rocket size={24} /> },
    { value: 19, label: "Projects Completed", suffix: "+", icon: <Code2 size={24} /> },
    { value: 11, label: "Technologies", suffix: "+", icon: <Award size={24} /> },
    { value: 9, label: "Happy Clients", suffix: "+", icon: <Users size={24} /> },
  ];

  const techStack = [
    "Flutter", "Dart", "Firebase",
    "BLoC", "GetX", "Provider",
    "REST APIs", "Git", "SQLite"
  ];

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text-animated">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate <span className="text-cyan-400 font-semibold">Flutter Developer</span> with
              a strong foundation in <span className="text-cyan-400 font-semibold">competitive programming</span> and{' '}
              <span className="text-cyan-400 font-semibold">cybersecurity</span>.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Through personal and professional projects, I have honed my skills in developing
              robust and scalable mobile applications. My competitive programming background has
              enhanced my <span className="text-cyan-400 font-semibold">problem-solving abilities</span> and
              algorithmic thinking.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              I'm eager to contribute to innovative projects in the tech industry, bringing
              creativity, technical expertise, and a passion for excellence to every challenge.
            </p>

            {/* Tech Stack */}
            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-4 text-gray-200">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="glass-card-hover px-4 py-2 rounded-full text-sm font-medium text-gray-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <StatsCard
                key={stat.label}
                value={stat.value}
                label={stat.label}
                suffix={stat.suffix}
                icon={stat.icon}
                delay={index * 0.1}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;