import { Project } from '../components/projects/types';

export const projects: Project[] = [
  {
    id: 'campus-saga',
    title: "Campus Saga",
    thumbnail:
      "https://repository-images.githubusercontent.com/683700586/c9588022-3742-4dcc-ae7a-5e0765a9a33b?auto=format&fit=crop&q=80&w=1200",
    description:
      "Revolutionize university life with our app, enabling students to post, solve, and discuss academic challenges. Admins review and rate solutions, fostering collaboration. With Clean architecture and BloC state management, enjoy smooth navigation, user profiles, problem showcases, promotions, and university rankings!",
    role: "Lead Developer",
    technologies: ["Flutter", "Firebase", "BLoC", "Cloud Functions", "FCM", "Material Design", "SharedPreferences", "Local Notifications"],
    startDate: "Jan 2023",
    endDate: "Dec 2023",
    status: "completed",
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
        type: "image",
        url: "https://github.com/zamansheikh/campus_saga/blob/main/assets/screenshots/1.jpg?raw=true?auto=format&fit=crop&q=80&w=1200",
        caption: "Home Screen",
      },
      {
        type: "image",
        url: "https://github.com/zamansheikh/campus_saga/blob/main/assets/screenshots/2.jpg?raw=true?auto=format&fit=crop&q=80&w=1200",
        caption: "Promotions",
      },
      {
        type: "image",
        url: "https://github.com/zamansheikh/campus_saga/blob/main/assets/screenshots/3.jpg?raw=true?auto=format&fit=crop&q=80&w=1200",
        caption: "Post",
      },
      {
        type: "image",
        url: "https://github.com/zamansheikh/campus_saga/blob/main/assets/screenshots/4.jpg?raw=true?auto=format&fit=crop&q=80&w=1200",
        caption: "Rankings",
      },
      {
        type: "image",
        url: "https://github.com/zamansheikh/campus_saga/blob/main/assets/screenshots/5.jpg?raw=true?auto=format&fit=crop&q=80&w=1200",
        caption: "Profile",
      },
      {
        type: "image",
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
    id: "Calcu",
    title: "Calcu",
    thumbnail:
      "https://repository-images.githubusercontent.com/680168202/a16ee3c0-aec3-4be4-a785-7534c117947b?auto=format&fit=crop&q=80&w=1200",
    description:
      "A modern scientific calculator app with advanced mathematical functions and a beautiful Material You design. Features include complex calculations, unit conversions, and history tracking.",
    role: "Solo Developer",
    technologies: ["Flutter", "Provider", "Hive", "Material Design"],
    startDate: "Aug 2023",
    endDate: "Oct 2023",
    status: "completed",
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
        type: "image" ,
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
    id: "GitTimeChanger",
    title: "GitTimeChanger",
    thumbnail: "https://raw.github.com/public-contributions/HACK/master/hack.png",
    description:
      "A tool to manipulate your GitHub contribution graph effortlessly. Hack your GitHub graph in just 20 seconds using automated scripts!",
    role: "Solo Developer",
    technologies: ["Node.js", "Simple-Git", "Moment.js", "Random.js", "JSON File"],
    startDate: "Dec 2023",
    endDate: "Jan 2024",
    status: "completed" ,
    githubUrl: "https://github.com/zamansheikh/GitTimeChanger",
    features: [
      "Automates GitHub contributions with ease.",
      "Flexible configuration through simple commands.",
      "Integration with multiple NPM packages.",
      "Efficiently bypass manual graph updates.",
    ],
    gallery: [
      {
        type: "image",
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
    id: "NumberTrivia",
    title: "number_trivia_clean_arch_tdd_bloc_restAPI",
    thumbnail: "https://repository-images.githubusercontent.com/844388623/c815e67a-ed79-4b71-aa56-ccf94d2b6c1a",
    description:
      "Number Trivia is a simple Flutter application that displays trivia about numbers. The app uses the clean architecture pattern, TDD, BLoC for state management, and a REST API for fetching trivia data.",
    role: "Solo Developer",
    technologies: ["Flutter", "BLoC", "Clean Architecture", "TDD", "REST API", "Dio", "Equatable"],
    startDate: "Dec 2023",
    endDate: "Jan 2024",
    status: "completed",
    githubUrl: "https://github.com/zamansheikh/number_trivia_clean_arch_tdd_bloc_restAPI",
    downloadUrl: "https://github.com/zamansheikh/number_trivia_clean_arch_tdd_bloc_restAPI/releases/latest",
    features: [
      "Fetches trivia data from a REST API.",
      "Displays trivia for a specific number.",
      "Allows users to get random trivia.",
      "Supports offline mode with cached data.",
    ],
    gallery: [
      {
        type: "image",
        url: "https://repository-images.githubusercontent.com/844388623/c815e67a-ed79-4b71-aa56-ccf94d2b6c1a",
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
      "Get trivia data for any number.",
      "Recognized for clean architecture and TDD practices.",
    ],
  },
];