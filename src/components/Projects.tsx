import React from 'react';
import { ProjectSlideshow } from './projects/ProjectSlideshow';

const Projects = () => {
  const projects = [
    {
      title: "Campus Saga",
      thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200",
      description: "A comprehensive campus management system that streamlines administrative tasks, enhances student-teacher communication, and provides real-time academic tracking. Built with Flutter and Firebase, it serves as a one-stop solution for educational institutions.",
      role: "Lead Developer",
      technologies: ["Flutter", "Firebase", "BLoC", "GetX", "Cloud Functions", "FCM"],
      startDate: "Jan 2023",
      endDate: "Dec 2023",
      status: "completed" as const,
      demoUrl: "https://campus-saga.web.app",
      githubUrl: "https://github.com/zamansheikh/campus-saga",
      features: [
        "Real-time attendance tracking",
        "Course management system",
        "Interactive student-teacher portal",
        "Automated grade calculation",
        "Push notifications for updates",
        "Offline support"
      ],
      gallery: [
        {
          type: "image",
          url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200",
          caption: "Dashboard Overview"
        },
        {
          type: "image",
          url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200",
          caption: "Course Management Interface"
        }
      ],
      challenges: [
        "Implementing efficient offline data synchronization while maintaining data consistency",
        "Optimizing app performance with large datasets",
        "Ensuring secure user authentication and data privacy"
      ],
      teamSize: 3,
      achievements: [
        "Successfully deployed to 5 educational institutions",
        "Reduced administrative workload by 40%",
        "Achieved 95% user satisfaction rate",
        "Featured in local tech community showcase"
      ]
    },
    {
      title: "Calcu",
      thumbnail: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?auto=format&fit=crop&q=80&w=1200",
      description: "A modern scientific calculator app with advanced mathematical functions and a beautiful Material You design. Features include complex calculations, unit conversions, and history tracking.",
      role: "Solo Developer",
      technologies: ["Flutter", "Provider", "SQLite", "Material Design"],
      startDate: "Aug 2023",
      endDate: "Oct 2023",
      status: "completed" as const,
      downloadUrl: "https://play.google.com/store/apps/details?id=com.zamansheikh.calcu",
      features: [
        "Scientific calculations",
        "Unit conversion",
        "History tracking",
        "Custom themes",
        "Expression evaluation",
        "Offline support"
      ],
      gallery: [
        {
          type: "image",
          url: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?auto=format&fit=crop&q=80&w=1200",
          caption: "Calculator Interface"
        }
      ],
      challenges: [
        "Implementing precise decimal calculations",
        "Creating an intuitive user interface for complex operations",
        "Optimizing memory usage for calculation history"
      ],
      achievements: [
        "10,000+ downloads on Play Store",
        "4.8/5 average user rating",
        "Featured in Play Store's 'New & Updated Apps'"
      ]
    }
  ];

  return (
    <section id="projects" className="h-screen">
      <ProjectSlideshow projects={projects} />
    </section>
  );
};

export default Projects;