import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import { Timeline, TimelineItem } from './Timeline';

const Education = () => {
  const education: TimelineItem[] = [
    {
      title: "Bachelor of Science in Computer Science and Engineering",
      subtitle: "Daffodil International University",
      period: "Graduated: 2024",
      description: "CGPA: 3.64",
      icon: <GraduationCap size={16} />,
      achievements: [
        "Cyber Security Club",
        "Result Based Waiver"
      ]
    },
    {
      title: "Higher Secondary Certificate (HSC)",
      subtitle: "Cantonment Public School and College",
      period: "2019",
      description: "GPA: 4.08",
      icon: <GraduationCap size={16} />,
      achievements: [
        "Computer Club"
      ]
    },
    {
      title: "Secondary School Certificate (SSC)",
      subtitle: "Kandania High School",
      period: "2017",
      description: "GPA: 5.00",
      icon: <GraduationCap size={16} />,
      achievements: [
        "Science Club"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 px-4 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text-animated">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <Timeline items={education} />
      </div>
    </section>
  );
};

export default Education;