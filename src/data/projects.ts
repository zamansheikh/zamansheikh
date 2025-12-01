import { Project } from '../components/projects/types';

export const projects: Project[] = [
  {
    id: 'nu-result',
    title: "NU Result: NU CGPA & Marksheet",
    thumbnail: "https://play-lh.googleusercontent.com/3PEZHZBuvAqtnyxaJsrLazMlZ41x0vAuG3E32iVkLl1UrDeKTrdEmf2eetfuTP8SWzbdmaaJ0XqYwgDSV_5GIQ=w240-h480-rw",
    description: "The Ultimate Academic Companion for National University Students. NU Result is a comprehensive, modern application specifically designed for National University (Bangladesh) students to effortlessly calculate CGPA and generate professional academic marksheets.",
    role: "Lead Developer",
    technologies: ["Flutter", "Firebase", "BLoC", "Material Design 3", "PDF Generation", "Charts", "SharedPreferences"],
    startDate: "2024",
    endDate: "2025",
    status: "completed",
    downloadUrl: "https://play.google.com/store/apps/details?id=com.decodersfamily.nu_result",
    features: [
      "Advanced CGPA Calculator with real-time SGPA and CGPA calculations",
      "Support for multiple semesters with flexible credit systems (1-6 credits)",
      "Complete grading scale from A+ to F with accurate grade point calculations",
      "Data persistence - academic data saved securely on device",
      "Professional Marksheet Generator - generate university-standard academic transcripts in PDF format",
      "Visual SGPA trend charts showing semester-wise performance",
      "Credit distribution analysis with interactive bar charts",
      "Performance tracking with highest/lowest SGPA monitoring",
      "Material Design 3 Implementation with beautiful gradient color schemes",
      "Responsive design optimized for all Android screen sizes"
    ],
    gallery: [
      {
        type: "image",
        url: "https://play-lh.googleusercontent.com/R2Lpt_1NUlo8OlAJtVyM7fz-VyBG8xEG14rcgzYr5k9AwveDchXrjCGu7FoUo89MEIbw6dUVQjAsjZ2bW-gDlA=w416-h235-rw",
        caption: "CGPA Calculator Interface",
      },
    ],
    challenges: [
      "Implementing accurate CGPA calculations for NU grading scale",
      "Designing professional PDF marksheet generation",
      "Creating intuitive UI for complex academic calculations",
    ],
    teamSize: 1,
    achievements: [
      "Successfully deployed to Google Play Store",
      "Helping thousands of NU students with accurate CGPA calculations",
      "Professional marksheet generation for academic records",
    ],
  },
  {
    id: 'plotcalc',
    title: "PlotCalc",
    thumbnail: "https://play-lh.googleusercontent.com/_A8rca2p7_5xcoSCrImTWQwMG2NMChyP2rDGycokuQEpXd1w6pkZTqF1JIAMjce4UMqLys3jnS54rMSadzJz=w240-h480-rw",
    description: "PlotCalc is a comprehensive land and property calculation application designed to help users quickly calculate plot areas, dimensions, and property-related metrics with precision and ease.",
    role: "Lead Developer",
    technologies: ["Flutter", "Provider", "Material Design 3", "LocalStorage", "Calculations Engine"],
    startDate: "2025",
    endDate: "2025",
    status: "completed",
    downloadUrl: "https://play.google.com/store/apps/details?id=com.programmernexus.plotcalc",
    features: [
      "Quick plot area calculations",
      "Property dimension measurements",
      "Real-time calculation results",
      "Multiple unit support (sqft, sqm, katha, bigha, etc.)",
      "Calculation history tracking",
      "Material Design 3 interface",
      "Offline support for all calculations",
      "User-friendly input forms",
      "Result sharing and export functionality",
    ],
    gallery: [
      {
        type: "image",
        url: "https://play-lh.googleusercontent.com/SD_AUWLw9B-mez1hTCjxa-L2re9hT-c4XImTjs8a2b4qQuvIoKTMk888p1Vjy8xuuOCtU-EEUFbIJRRfVOYB=w416-h235-rw",
        caption: "PlotCalc Calculator Interface",
      },
    ],
    challenges: [
      "Implementing accurate property calculation algorithms",
      "Supporting multiple land measurement units",
      "Creating intuitive UI for property calculations",
    ],
    teamSize: 1,
    achievements: [
      "Successfully deployed to Google Play Store",
      "Helping property professionals with quick calculations",
      "Positive user feedback for accuracy and usability",
    ],
  },
  {
    id: 'bowlersnetwork',
    title: "BowlersNetwork",
    thumbnail: "https://play-lh.googleusercontent.com/-UlPoXtAed-gXFoByawfl_ZULjjz9pJ5_5hPe9sm4qNo9_C1SfkxFGcKsrTEVdsE4zpd9_-bwmBRXiwnWKq76g=w240-h480-rw",
    description: "BowlersNetwork is a comprehensive platform connecting bowling enthusiasts worldwide. Available as both web and mobile app, it enables users to connect, compete, and share their passion for bowling.",
    role: "Lead Developer",
    technologies: ["Flutter", "React", "Node.js", "Firebase", "BLoC", "REST API", "Material Design 3"],
    startDate: "2025",
    endDate: "Pre-launch",
    status: "ongoing",
    downloadUrl: "https://play.google.com/store/apps/details?id=com.bowlersnetwork.bowlersnetworkapp",
    links: {
      live: "https://www.bowlersnetwork.com/"
    },
    features: [
      "User profiles and authentication",
      "Connect with other bowling enthusiasts",
      "Competition tracking and scoring",
      "Bowling statistics and analytics",
      "Event management and registration",
      "Social feed and community interaction",
      "In-app messaging and notifications",
      "Responsive web and mobile experience",
      "Real-time score updates",
      "Player rankings and leaderboards"
    ],
    gallery: [
      {
        type: "image",
        url: "https://play-lh.googleusercontent.com/XVpstHa1JWLgWqTyp-QQZy3Q__DXuYuHPy3iLkfiGHRHM-_hMeWHgrPC0rpQKnw1ErM6oum5xSo9i1Zs063zdQ=w416-h235-rw",
        caption: "BowlersNetwork App Interface",
      },
    ],
    challenges: [
      "Building cross-platform web and mobile experience",
      "Implementing real-time score tracking",
      "Managing large-scale user community",
      "Ensuring seamless synchronization between web and mobile",
    ],
    teamSize: 2,
    achievements: [
      "Successfully developed cross-platform solution",
      "Pre-launched with community feedback integration",
      "Comprehensive bowling community platform",
    ],
  },
  {
    id: 'lifeque',
    title: "LifeQue",
    thumbnail:
      "https://play-lh.googleusercontent.com/lg29460iZJcchkQ76z8w0cxlAlZ1U0w2I4AwHLdPIQAjMVAoHpSdJSErl9BXs5cIoaCM5OfjpgcI6wdxMLURwA=w240-h480-rw",
    description:
      "LifeQue is a Flutter app built with Clean Architecture, BLoC pattern, GoRouter, and dependency injection. It is your complete companion for Islamic practices, productivity, and task management, offering advanced features for the modern Muslim lifestyle.",
    role: "Lead Developer",
    technologies: [
      "Flutter",
      "Firebase",
      "BLoC",
      "GoRouter",
      "Dependency Injection",
      "Cloud Functions",
      "FCM",
      "Material Design",
      "SharedPreferences",
      "Local Notifications"
    ],
    startDate: "Jan 2025",
    endDate: "2025",
    status: "completed",
    downloadUrl: "https://play.google.com/store/apps/details?id=com.programmernexus.lifeque",
    githubUrl: "https://github.com/zamansheikh/lifeque",
    features: [
      "Accurate prayer times with GPS location support.",
      "Interactive Qibla direction compass with rotating N,E,S,W markings.",
      "Smart prayer alarms with before prayer end and fixed time modes.",
      "Educational info about Makruh (discouraged) prayer times.",
      "Automatic and manual location detection.",
      "Support for multiple Islamic calculation methods.",
      "Study timer with Pomodoro technique, customizable sessions, and audio alerts.",
      "Full-featured task management with timeline, progress tracking, and status categories.",
      "System-level notifications for prayer, study sessions, and tasks.",
      "Persistent and guided notification permission management."
    ],
    gallery: [
     
      {
        type: "image",
        url: "https://play-lh.googleusercontent.com/rxvx91hAHd64i3WAUasuGIF3xItqQiCD1jw8N-Y8pElPN3z6JRCiu5D1nU6kwdSF1hgNXPTG9u35EM4uNifabw=w416-h235-rw",
        caption: "Banner Image",
      },
    ],
    challenges: [
      "Implementing accurate prayer time calculations for various locations.",
      "Integrating advanced notification and alarm systems.",
      "Designing a seamless user experience for productivity and Islamic features.",
      "Ensuring secure user authentication and data privacy.",
    ],
    teamSize: 2,
    achievements: [
      "Successfully deployed to Google Play Store with positive user feedback.",
      "Achieved over 500 downloads within the first three months of launch.",
      "Maintained a 4.5+ star rating with consistent updates and feature enhancements.",
    ],
  },
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
        url: "https://github.com/zamansheikh/campus_saga/blob/main/assets/mockup/4.jpg?raw=true?auto=format&fit=crop&q=80&w=1200",
        caption: "Issue Manipulation",
      },
      {
        type: "image",
        url: "https://github.com/zamansheikh/campus_saga/blob/main/assets/mockup/5.jpg?raw=true?auto=format&fit=crop&q=80&w=1200",
        caption: "Admin Panel",
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
      "A modern calculator app a beautiful Material You design. Features include Dark and Light theme and history tracking.",
    role: "Solo Developer",
    technologies: ["Flutter", "Provider", "Hive", "Material Design"],
    startDate: "Aug 2023",
    endDate: "Oct 2023",
    status: "completed",
    downloadUrl: "https://play.google.com/store/apps/details?id=com.decodersfamily.calcu",
    features: [
      "History tracking",
      "Dark and Light themes",
      "Offline support",
      "Result Saving",
    ],
    gallery: [
      {
        type: "image",
        url: "https://github.com/zamansheikh/Calcu/blob/main/assets/mockup/1.jpg?raw=true?auto=format&fit=crop&q=80&w=1200",
        caption: "Calculator Dark Theme",
      },
      {
        type: "image",
        url: "https://github.com/zamansheikh/Calcu/blob/main/assets/mockup/2.jpg?raw=true?auto=format&fit=crop&q=80&w=1200",
        caption: "Calculator Light Theme",
      },
    ],
    challenges: [
      "Implementing precise decimal calculations",
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