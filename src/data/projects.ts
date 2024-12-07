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
    endDate: "On-going",
    status: "ongoing",
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
        url: "https://github.com/zamansheikh/campus_saga/blob/main/assets/mockup/1.jpg?raw=true?auto=format&fit=crop&q=80&w=1200",
        caption: "Home Screen",
      },
      {
        type: "image",
        url: "https://github.com/zamansheikh/campus_saga/blob/main/assets/mockup/2.jpg?raw=true?auto=format&fit=crop&q=80&w=1200",
        caption: "Promotions",
      },
      {
        type: "image",
        url: "https://github.com/zamansheikh/campus_saga/blob/main/assets/mockup/3.jpg?raw=true?auto=format&fit=crop&q=80&w=1200",
        caption: "Post",
      },
      {
        type: "image",
        url: "https://github.com/zamansheikh/campus_saga/blob/main/assets/mockup/4.jpg?raw=true?auto=format&fit=crop&q=80&w=1200",
        caption: "Rankings",
      },
      {
        type: "image",
        url: "https://github.com/zamansheikh/campus_saga/blob/main/assets/mockup/5.jpg?raw=true?auto=format&fit=crop&q=80&w=1200",
        caption: "Profile",
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
        type: "image",
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
    status: "completed",
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
    title: "Number trivia",
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
        caption: "Number trivia - Home Screen",
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
  {
    id: "Khola Chithi",
    title: "Khola Chithi",
    thumbnail: "https://i.ytimg.com/vi/Sc3s6nm1vxg/maxresdefault.jpg",
    description:
      "Khola Chithi is an app, where you can write letters to your loved ones. You can write letters to your friends, family, and loved ones. You can also read letters from others. You can also share your letters with others.",
    role: "Solo Developer",
    technologies: ["Flutter", "BLoC", "Clean Architecture", "REST API", "Dio", "Equatable"],
    startDate: "Dec 2023",
    endDate: "ongoing",
    status: "ongoing",
    githubUrl: "https://github.com/zamansheikh/khola_chithi",
    downloadUrl: "https://github.com/zamansheikh/khola_chithi/releases/latest",
    features: [
      "Khola Chithi is an app, where you can write letters to your loved ones.",
      "You can write letters to your friends, family, and loved ones.",
      "You can also read letters from others.",
      "You can also share your letters with others.",
      "User can also like and comment on letters.",
    ],
    gallery: [
      {
        type: "image",
        url: "https://i.ytimg.com/vi/Sc3s6nm1vxg/maxresdefault.jpg",
        caption: "Khola Chithi - Home Screen",
      },
    ],
    challenges: [
      "Ensuring compliance with GitHub's API and policies.",
      "Implementing cross-platform compatibility.",
      "Optimizing performance for large repositories.",
    ],
    teamSize: 1,
    achievements: [
      "Appreciated for the idea of writing letters to loved ones.",
    ],
  },
  {
    id: "7SegmentDisplayWithArduino",
    title: "Ultrasonic Distance Meter with Arduino",
    thumbnail: "https://raw.githubusercontent.com/zamansheikh/7SegmentDisplayWithArduino/main/7%20Seg%20Display.png",
    description: "This Arduino program uses an ultrasonic sensor to measure distances and displays the results on a 7-segment LED display. The system calculates distance values in meters and rounds them for easy visualization.",
    role: "Solo Developer",
    technologies: ["Arduino", "Ultrasonic Sensor", "7-Segment Display"],
    startDate: "May 2023",
    endDate: "May 2023",
    status: "completed",
    githubUrl: "https://github.com/zamansheikh/7SegmentDisplayWithArduino/",
    downloadUrl: "https://github.com/zamansheikh/7SegmentDisplayWithArduino/blob/main/7%20Seg%20Display.pdf",
    demoUrl: "https://github.com/zamansheikh/7SegmentDisplayWithArduino/blob/main/7seg_preview.gif",
    features: [
      "Measures distance using an HC-SR04 ultrasonic sensor.",
      "Displays the rounded distance on a 7-segment display in real-time."
    ],
    gallery: [
      {
        type: "image",
        url: "https://github.com/zamansheikh/7SegmentDisplayWithArduino/blob/main/Screenshot_11.png?raw=true",
        caption: "Project Setup",
      },
    ],
    challenges: [
      "Understanding the working principles of the ultrasonic sensor.",
      "Calibrating the sensor to ensure accurate and consistent distance measurements."
    ],
    teamSize: 1,
    achievements: [
      "Gained practical knowledge of Arduino programming and interfacing hardware components.",
      "Developed a fully functional real-time distance measurement and display system."
    ]
  },
  {
    id: "Boi Chokro",
    title: "Boi Chokro",
    thumbnail: "https://github.com/zamansheikh/boi_chokro/blob/main/assets/play_store_feature_graphic.png?raw=true",
    description: "Boi Chokro is a book exchange platform where users can exchange books with others. Users can also donate books to the platform. The app also has a feature to search for books.",
    role: "Solo Developer",
    technologies: ["Flutter", "Firebase", "BloC", "Map", "Hive", "Material Design"],
    startDate: "Nov 2024",
    endDate: "Ongoing",
    status: "ongoing",
    features: [
      "User registration and authentication.",
      "User can exchange books with others.",
      "User can donate books to the platform.",
      "User can search for books.",
      "User can see the location of the book.",
      "User can see the details of the book.",
      "User can see the reviews of the book.",
    ],
    gallery: [
      {
        type: "image",
        url: "https://github.com/zamansheikh/boi_chokro/blob/main/assets/play_store_feature_graphic.png?raw=true",
        caption: "Project Setup",
      },
    ],
    challenges: [
      "Understanding the working principles of Map.",
    ],
    teamSize: 1,
    achievements: [
      "Gained practical knowledge of Flutter programming and interfacing hardware components.",
    ]
  }
];