import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science and Engineering",
      institution: "Daffodil International University",
      period: "Expected Graduation: 2024",
      grade: "CGPA: 3.64 (9 out of 10 semesters)",
      achievements: ["Dean's List", "Merit-based Scholarship"]
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Cantonment Public School and College",
      period: "2019",
      grade: "GPA: 4.08",
      achievements: ["Science Club President"]
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Kandania High School",
      period: "2017",
      grade: "GPA: 5.00",
      achievements: ["Board Merit List"]
    }
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div 
              key={index} 
              className="group bg-slate-800/30 p-6 rounded-xl hover:bg-slate-800/50 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex gap-4">
                <div className="mt-1">
                  <GraduationCap className="w-6 h-6 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-300">{edu.institution}</p>
                  <div className="flex flex-wrap gap-x-4 mt-2 text-gray-400">
                    <span>{edu.period}</span>
                    <span className="font-semibold text-cyan-400">{edu.grade}</span>
                  </div>
                  {edu.achievements.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {edu.achievements.map((achievement, i) => (
                        <span 
                          key={i}
                          className="inline-flex items-center gap-1 text-sm bg-slate-700/50 text-cyan-300 px-3 py-1 rounded-full group-hover:bg-slate-700 transition-colors"
                        >
                          <Award className="w-3 h-3" />
                          {achievement}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;