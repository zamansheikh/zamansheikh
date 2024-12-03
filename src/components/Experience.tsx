import React from 'react';
import { Briefcase, Calendar, ArrowRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Flutter Developer Intern",
      company: "TechForing Ltd.",
      period: "June 2023 - Present",
      location: "Dhaka, Bangladesh",
      description: [
        "Developed and maintained multiple Flutter applications with clean architecture",
        "Implemented complex UI designs and animations",
        "Integrated REST APIs and Firebase services",
        "Collaborated with the design team to improve UX"
      ]
    },
    {
      title: "Freelance Mobile Developer",
      company: "Self-employed",
      period: "Jan 2022 - May 2023",
      location: "Remote",
      description: [
        "Built custom mobile applications for various clients",
        "Managed entire development lifecycle from planning to deployment",
        "Implemented payment gateway integrations",
        "Maintained high client satisfaction and repeat business"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="group relative bg-slate-800/30 p-6 rounded-xl hover:bg-slate-800/50 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex gap-4">
                <div className="mt-1">
                  <Briefcase className="w-6 h-6 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-gray-300">{exp.company}</p>
                  <div className="flex flex-wrap items-center gap-x-4 mt-2 text-gray-400">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                    <span>{exp.location}</span>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {exp.description.map((item, i) => (
                      <li 
                        key={i}
                        className="flex items-start gap-2 text-gray-300 group-hover:translate-x-1 transition-transform duration-300"
                        style={{ transitionDelay: `${i * 50}ms` }}
                      >
                        <ArrowRight className="w-4 h-4 mt-1 text-cyan-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;