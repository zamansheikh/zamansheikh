import { Project } from '../components/projects/types';

export const projects: Project[] = [
  {
    id: 'campus-saga',
    title: "Campus Saga",
    thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200",
    description: "A comprehensive campus management system that streamlines administrative tasks, enhances student-teacher communication, and provides real-time academic tracking. Built with Flutter and Firebase, it serves as a one-stop solution for educational institutions.",
    role: "Lead Developer",
    technologies: ["Flutter", "Firebase", "BLoC", "GetX", "Cloud Functions", "FCM"],
    startDate: "Jan 2023",
    endDate: "Dec 2023",
    status: "completed",
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
    id: 'calcu',
    title: "Calcu",
    thumbnail: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?auto=format&fit=crop&q=80&w=1200",
    description: "A modern scientific calculator app with advanced mathematical functions and a beautiful Material You design. Features include complex calculations, unit conversions, and history tracking.",
    role: "Solo Developer",
    technologies: ["Flutter", "Provider", "SQLite", "Material Design"],
    startDate: "Aug 2023",
    endDate: "Oct 2023",
    status: "completed",
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
  },
  {
    id: 'git-time-changer',
    title: "Campus Saga",
    thumbnail:
      "https://repository-images.githubusercontent.com/683700586/c9588022-3742-4dcc-ae7a-5e0765a9a33b?auto=format&fit=crop&q=80&w=1200",
    description:
      "Revolutionize university life with our app, enabling students to post, solve, and discuss academic challenges. Admins review and rate solutions, fostering collaboration. With Clean architecture and BloC state management, enjoy smooth navigation, user profiles, problem showcases, promotions, and university rankings!",
    role: "Lead Developer",
    technologies: ["Flutter", "Firebase", "BLoC", "Cloud Functions", "FCM", "Material Design", "SharedPreferences", "Local Notifications"],
    startDate: "Jan 2023",
    endDate: "Dec 2023",
    status: "completed" as const,
    downloadUrl: "https://github.com/zamansheikh/campus_saga/releases/latest",
    githubUrl: "https://github.com/zamansheikh/campus-saga",
    features: [
      "User registration and authentication.",
      "Anonymous posting of university-related issues.",
      "Rating of universities based on user reviews.",
      "Interaction between users and university authorities.",
      "Voting on the credibility of posted issues.",
      "Prioritization of issues based on urgency",
      "Viewing and posting advertisements or promotions.",
      "Push notifications for new issues and promotions.",
      "Dark mode and light mode themes.",
      "Institute identification via student ID cards."

    ],
    gallery: [
      {
        type: "image" as const,
        url: "https://github.com/zamansheikh/campus_saga/blob/main/assets/screenshots/1.jpg?raw=true?auto=format&fit=crop&q=80&w=1200",
        caption: "Home Screen",
      },
      {
        type: "image" as const,
        url: "https://github.com/zamansheikh/campus_saga/blob/main/assets/screenshots/2.jpg?raw=true?auto=format&fit=crop&q=80&w=1200",
        caption: "Promotions",
      },
      {
        type: "image" as const,
        url: "https://github.com/zamansheikh/campus_saga/blob/main/assets/screenshots/3.jpg?raw=true?auto=format&fit=crop&q=80&w=1200",
        caption: "Post",
      },
      {
        type: "image" as const,
        url: "https://github.com/zamansheikh/campus_saga/blob/main/assets/screenshots/4.jpg?raw=true?auto=format&fit=crop&q=80&w=1200",
        caption: "Rankings",
      },
      {
        type: "image" as const,
        url: "https://github.com/zamansheikh/campus_saga/blob/main/assets/screenshots/5.jpg?raw=true?auto=format&fit=crop&q=80&w=1200",
        caption: "Profile",
      },
      {
        type: "image" as const,
        url: "https://github.com/zamansheikh/campus_saga/blob/main/assets/screenshots/6.jpg?raw=true?auto=format&fit=crop&q=80&w=1200",
        caption: "Voting System",
      },

    ],
    challenges: [
      "Implementing efficient offline data synchronization while maintaining data consistency",
      "Optimizing app performance with large datasets",
      "Ensuring secure user authentication and data privacy",
    ],
    teamSize: 2,
    achievements: [
      "Successfully deployed to educational institutions",
      "Reduced administrative workload by 20%",
      "Achieved 95% user satisfaction rate",
    ],
  },
  {
    id: "Seven Segment display",
    title: "Calcu",
    thumbnail:
      "https://repository-images.githubusercontent.com/680168202/a16ee3c0-aec3-4be4-a785-7534c117947b?auto=format&fit=crop&q=80&w=1200",
    description:
      "A modern scientific calculator app with advanced mathematical functions and a beautiful Material You design. Features include complex calculations, unit conversions, and history tracking.",
    role: "Solo Developer",
    technologies: ["Flutter", "Provider", "Hive", "Material Design"],
    startDate: "Aug 2023",
    endDate: "Oct 2023",
    status: "completed" as const,
    downloadUrl: "https://play.google.com/store/apps/details?id=com.decodersfamily.calcu",
    features: [
      "History tracking",
      "Dark and Light themes",
      "Expression evaluation",
      "Offline support",
      "Result Saving",
    ],
    gallery: [
      {
        type: "image" as const,
        url: "https://github.com/zamansheikh/Calcu/blob/main/assets/screenshots/4.png?raw=true?auto=format&fit=crop&q=80&w=1200",
        caption: "Calculator Interface",
      },
    ],
    challenges: [
      "Implementing precise decimal calculations",
      "Creating an intuitive user interface for complex operations",
      "Optimizing memory usage for calculation history",
    ],
    achievements: [
      "100+ downloads on Play Store",
      "4.8/5 average user rating",
      "Featured in Play Store's 'New & Updated Apps'",
    ],
  },
  {
    id: "GitTimeChangerRepo",
    title: "GitTimeChanger",
    thumbnail: "https://raw.github.com/public-contributions/HACK/master/hack.png",
    description:
      "A tool to manipulate your GitHub contribution graph effortlessly. Hack your GitHub graph in just 20 seconds using automated scripts!",
    role: "Solo Developer",
    technologies: ["Node.js", "Simple-Git", "Moment.js", "Random.js", "JSON File"],
    startDate: "Dec 2023",
    endDate: "Jan 2024",
    status: "completed" as const,
    githubUrl: "https://github.com/zamansheikh/GitTimeChanger",
    features: [
      "Automates GitHub contributions with ease.",
      "Flexible configuration through simple commands.",
      "Integration with multiple NPM packages.",
      "Efficiently bypass manual graph updates.",
    ],
    gallery: [
      {
        type: "image" as const,
        url: "https://raw.github.com/public-contributions/HACK/master/hack.png",
        caption: "GitTimeChanger Hack in Action",
      },
    ],
    challenges: [
      "Ensuring compliance with GitHub's API and policies.",
      "Implementing cross-platform compatibility.",
      "Optimizing performance for large repositories.",
    ],
    teamSize: 1,
    achievements: [
      "Received community recognition for innovative use of GitHub automation.",
      "Helped users streamline contribution graph customization.",
    ],
  },
  {
    id: "GitTimeChangerRepo",
    title: "GitTimeChanger",
    thumbnail: "https://raw.github.com/public-contributions/HACK/master/hack.png",
    description:
      "A tool to manipulate your GitHub contribution graph effortlessly. Hack your GitHub graph in just 20 seconds using automated scripts!",
    role: "Solo Developer",
    technologies: ["Node.js", "Simple-Git", "Moment.js", "Random.js", "JSON File"],
    startDate: "Dec 2023",
    endDate: "Jan 2024",
    status: "completed" as const,
    githubUrl: "https://github.com/zamansheikh/GitTimeChanger",
    features: [
      "Automates GitHub contributions with ease.",
      "Flexible configuration through simple commands.",
      "Integration with multiple NPM packages.",
      "Efficiently bypass manual graph updates.",
    ],
    gallery: [
      {
        type: "image" as const,
        url: "https://raw.github.com/public-contributions/HACK/master/hack.png",
        caption: "GitTimeChanger Hack in Action",
      },
    ],
    challenges: [
      "Ensuring compliance with GitHub's API and policies.",
      "Implementing cross-platform compatibility.",
      "Optimizing performance for large repositories.",
    ],
    teamSize: 1,
    achievements: [
      "Received community recognition for innovative use of GitHub automation.",
      "Helped users streamline contribution graph customization.",
    ],
  },
  {
    id: "GitTimeChangerRepo",
    title: "GitTimeChanger",
    thumbnail: "https://raw.github.com/public-contributions/HACK/master/hack.png",
    description:
      "A tool to manipulate your GitHub contribution graph effortlessly. Hack your GitHub graph in just 20 seconds using automated scripts!",
    role: "Solo Developer",
    technologies: ["Node.js", "Simple-Git", "Moment.js", "Random.js", "JSON File"],
    startDate: "Dec 2023",
    endDate: "Jan 2024",
    status: "completed" as const,
    githubUrl: "https://github.com/zamansheikh/GitTimeChanger",
    features: [
      "Automates GitHub contributions with ease.",
      "Flexible configuration through simple commands.",
      "Integration with multiple NPM packages.",
      "Efficiently bypass manual graph updates.",
    ],
    gallery: [
      {
        type: "image" as const,
        url: "https://raw.github.com/public-contributions/HACK/master/hack.png",
        caption: "GitTimeChanger Hack in Action",
      },
    ],
    challenges: [
      "Ensuring compliance with GitHub's API and policies.",
      "Implementing cross-platform compatibility.",
      "Optimizing performance for large repositories.",
    ],
    teamSize: 1,
    achievements: [
      "Received community recognition for innovative use of GitHub automation.",
      "Helped users streamline contribution graph customization.",
    ],
  },
];