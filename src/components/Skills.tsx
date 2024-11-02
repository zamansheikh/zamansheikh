import React from 'react';
import { Smartphone, Code2, Shield, Brain, GitBranch } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Smartphone className="w-8 h-8 text-cyan-400" />,
      title: "Mobile Development",
      skills: [
        "Flutter",
        "Firebase",
        "Clean Architecture (BLoC)",
        "GetX State Management",
        "Provider Pattern",
        "REST API Integration",
        "Local Storage (Hive/SQLite)",
        "Push Notifications(Learning)",
        "Google Maps Integration(Learning)",
        "Social Auth(Intermidiate)"
      ]
    },
    {
      icon: <Code2 className="w-8 h-8 text-cyan-400" />,
      title: "Programming Languages",
      skills: ["Dart", "C", "C++", "Java", "Python"]
    },
    {
      icon: <GitBranch className="w-8 h-8 text-cyan-400" />,
      title: "Tools & DevOps",
      skills: [
        "Git",
        "VS Code",
        "Android Studio",
        "Firebase Console",
        "Play Console"
      ]
    },
    {
      icon: <Shield className="w-8 h-8 text-cyan-400" />,
      title: "Cybersecurity",
      skills: [
        "Entry-level knowledge",
        "Security best practices",
        "Secure Storage"
      ]
    },
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: "Competitive Programming",
      skills: [
        "Algorithm design",
        "Problem-solving",
        "Data Structures",
        "Time Complexity Analysis"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-slate-800/30 p-6 rounded-xl transform hover:scale-[1.02] transition-transform">
              <div className="flex items-center gap-3">
                {category.icon}
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              <ul className="mt-4 space-y-2">
                {category.skills.map((skill, i) => (
                  <li key={i} className="text-gray-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;