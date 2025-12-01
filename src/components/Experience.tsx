import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { Timeline, TimelineItem } from './Timeline';

const Experience = () => {
  const experiences: TimelineItem[] = [
    {
      title: "Flutter Developer & Next.js Developer",
      subtitle: "BowlersNetwork Inc.",
      period: "May 2025 - Current",
      description: "(REMOTE) 4064 Intrepid Cir Bismarck, ND 58504-8851 United States",
      icon: <Briefcase size={16} />,
      achievements: [
        "Developed and maintained multiple Flutter applications with GetX state management",
        "Implemented complex UI designs and animations",
        "Integrated REST APIs and Firebase services",
        "Collaborated with cross-functional teams to define, design, and ship new features",
        "Worked on Next.js projects for web applications, ensuring seamless integration with Flutter apps"
      ]
    },
    {
      title: "Flutter Developer & Team Lead",
      subtitle: "Join Venture AI",
      period: "Jan 2025 - Jul 2025",
      description: "Dhaka, Bangladesh",
      icon: <Briefcase size={16} />,
      achievements: [
        "Developed and maintained multiple Flutter applications with GetX state management",
        "Implemented complex UI designs and animations",
        "Integrated REST APIs and Firebase services",
        "Led the development team and collaborated with the design team to improve UX"
      ]
    },
    {
      title: "Flutter Developer Intern",
      subtitle: "Acro Nation",
      period: "Nov 2024 - Jan 2025",
      description: "Remote",
      icon: <Briefcase size={16} />,
      achievements: [
        "Developed and maintained multiple Flutter applications with clean architecture",
        "Implemented complex UI designs and animations",
        "Integrated REST APIs and Firebase services",
        "Collaborated with the design team to improve UX"
      ]
    },
    {
      title: "Team Leader & Flutter Developer",
      subtitle: "deCoders Family",
      period: "Jan 2023 - Present",
      description: "Remote",
      icon: <Briefcase size={16} />,
      achievements: [
        "Led a team of developers to build mobile applications using Flutter",
        "Managed project timelines and deliverables",
        "Provided technical guidance and code reviews",
        "Final Year University Project: Campus Saga"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-slate-900/50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
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
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <Timeline items={experiences} />
      </div>
    </section>
  );
};

export default Experience;