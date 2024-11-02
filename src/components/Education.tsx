import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science and Engineering",
      institution: "Daffodil International University",
      period: "Expected Graduation: 2024",
      grade: "CGPA: 3.64 (9 out of 10 semesters)"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Cantonment Public School and College",
      period: "2019",
      grade: "GPA: 4.08"
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Kandania High School",
      period: "2017",
      grade: "GPA: 5.00"
    }
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-slate-800/30 p-6 rounded-xl flex gap-4">
              <div className="mt-1">
                <GraduationCap className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                <p className="text-gray-300">{edu.institution}</p>
                <div className="flex flex-wrap gap-x-4 mt-2 text-gray-400">
                  <span>{edu.period}</span>
                  <span>{edu.grade}</span>
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