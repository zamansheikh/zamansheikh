import { motion } from 'framer-motion';
import { Smartphone, Code2, Shield, Brain, GitBranch } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Smartphone className="w-8 h-8 text-cyan-400" />,
      title: "Mobile Development",
      skills: [
        { name: "Flutter", level: 90 },
        { name: "Firebase", level: 85 },
        { name: "Clean Architecture (BLoC)", level: 80 },
        { name: "GetX State Management", level: 85 },
        { name: "Provider Pattern", level: 80 },
        { name: "REST API Integration", level: 75 },
        { name: "Local Storage (Hive/SQLite)", level: 85 },
        { name: "Push Notifications", level: 70 },
        { name: "Google Maps Integration", level: 70 },
        { name: "Social Auth", level: 80 }
      ]
    },
    {
      icon: <Code2 className="w-8 h-8 text-cyan-400" />,
      title: "Programming Languages",
      skills: [
        { name: "Dart", level: 90 },
        { name: "C", level: 70 },
        { name: "C++", level: 75 },
        { name: "Java", level: 70 },
        { name: "Python", level: 65 }
      ]
    },
    {
      icon: <GitBranch className="w-8 h-8 text-cyan-400" />,
      title: "Tools & DevOps",
      skills: [
        { name: "Git", level: 85 },
        { name: "VS Code", level: 95 },
        { name: "Android Studio", level: 80 },
        { name: "Firebase Console", level: 85 },
        { name: "Play Console", level: 75 }
      ]
    },
    {
      icon: <Shield className="w-8 h-8 text-cyan-400" />,
      title: "Cybersecurity",
      skills: [
        { name: "Entry-level knowledge", level: 60 },
        { name: "Security best practices", level: 70 },
        { name: "Linux basics", level: 65 }
      ]
    },
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: "Competitive Programming",
      skills: [
        { name: "Algorithm design", level: 85 },
        { name: "Problem-solving", level: 90 },
        { name: "Data Structures", level: 85 },
        { name: "Time Complexity Analysis", level: 80 }
      ]
    },
    {
      icon: <Code2 className="w-8 h-8 text-cyan-400" />,
      title: "Web Development",
      skills: [
        { name: "Next.js", level: 75 },
        { name: "Tailwind CSS", level: 85 },
        { name: "React", level: 70 },
        { name: "TypeScript", level: 70 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-slate-900/50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
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
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="glass-card-hover p-6 rounded-2xl group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 group-hover:glow transition-all">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              <ul className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    className="group/item"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                      <span className="text-cyan-400 text-xs font-semibold">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.2, ease: "easeOut" }}
                        className="skill-bar-fill"
                      />
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;