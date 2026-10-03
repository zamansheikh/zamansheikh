// Facts about Zaman, used across the site. Edit here, not in components.

export const profile = {
  name: "Zaman Sheikh",
  legalName: "Md. Shamsuzzaman",
  role: "Founder, Silifton",
  headline: "Flutter & full-stack engineer",
  location: "Dhaka, Bangladesh",
  email: "shamsuzzaman15-4031@diu.edu.bd",
  cv: "/zaman_cv.pdf",
  site: "https://zamansheikh.com",
  photo: "/hero_dp.jpg",
  githubSince: 2020,
};

export const links = {
  github: "https://github.com/zamansheikh",
  linkedin: "https://www.linkedin.com/in/zamansheikh/",
  x: "https://x.com/zamansheikh_404",
  instagram: "https://www.instagram.com/zamansheikh_error",
  youtube: "https://www.youtube.com/@zaman-sheikh",
  facebook: "https://fb.com/zamansheikh.404",
  silifton: "https://silifton.com",
  discord: "https://discord.gg/Wj3keGKWus",
};

export type Role = {
  org: string;
  url?: string;
  title: string;
  period: string;
  place: string;
  current?: boolean;
  points: string[];
};

export const experience: Role[] = [
  {
    org: "Silifton",
    url: "https://silifton.com",
    title: "Founder",
    period: "2025 – Present",
    place: "Dhaka · Seoul",
    current: true,
    points: [
      "Founded a senior engineering studio that builds web, mobile and backend software for clients from first commit to production.",
      "Built Voxa RTC, an Agora-compatible real-time video engine on self-hosted LiveKit, and moved the studio's live-streaming apps onto it.",
      "Shipped 15 live products across EdTech, live streaming and developer tools, plus Postora, the studio's own social scheduler.",
      "Run the Silifton community (formerly deCoders Family), teaching Flutter for free.",
    ],
  },
  {
    org: "BowlersNetwork Inc.",
    url: "https://www.bowlersnetwork.com",
    title: "Software Engineer",
    period: "May 2025 – 2026",
    place: "Remote · Bismarck, ND, USA",
    points: [
      "Built the BowlersNetwork mobile app in Flutter and its web platform in Next.js, following clean architecture and the BLoC pattern.",
      "Implemented complex UI and animations, and integrated REST APIs and Firebase services.",
      "Worked with a cross-functional team to define, design and ship new features across web and mobile.",
    ],
  },
  {
    org: "Join Venture AI",
    title: "Junior Flutter Developer & Team Lead",
    period: "Dec 2024 – Sep 2025",
    place: "Rampura, Dhaka",
    points: [
      "Led the Flutter team building responsive apps with GetX, REST APIs and Socket.IO for real-time features.",
      "Shipped Gestion, a hotel booking app on Google Play and the App Store, and Zen Active, a fitness app with payments and CI/CD.",
      "Worked with the design team to improve UX across products.",
    ],
  },
  {
    org: "Acro Nation",
    title: "Flutter Developer Intern",
    period: "Nov 2024 – Jan 2025",
    place: "Remote",
    points: [
      "Built and maintained Flutter apps with clean architecture.",
      "Implemented UI designs and animations, and integrated REST APIs and Firebase.",
    ],
  },
  {
    org: "deCoders Family",
    title: "Team Leader & Flutter Developer",
    period: "2023 – 2025",
    place: "Remote",
    points: [
      "Led a developer team building Flutter apps: NU Result, Calcu and the Campus Saga final-year project.",
      "Managed timelines, ran code reviews and gave technical guidance. The community continues as Silifton's.",
    ],
  },
];

export const education = [
  { school: "Jahangirnagar University", degree: "MSc in Computer Science", period: "2026 – Present" },
  { school: "Daffodil International University", degree: "BSc in Computer Science & Engineering", period: "2021 – 2024", note: "CGPA 3.64" },
  { school: "Cantonment Public School and College", degree: "Higher Secondary Certificate", period: "2019" },
  { school: "Kandania High School", degree: "Secondary School Certificate", period: "2017" },
];

// Grouped by what the work needs, not by language.
export const toolbox: { group: string; items: string[] }[] = [
  { group: "Mobile", items: ["Flutter", "Dart", "BLoC", "GetX", "Riverpod", "Kotlin", "Swift", "Platform channels"] },
  { group: "Real-time & media", items: ["WebRTC", "LiveKit", "Agora", "ZegoCloud", "Socket.IO", "SVGA", "Camera pipelines"] },
  { group: "Backend", items: ["NestJS", "Node.js", "Express", "Go", "PostgreSQL", "MongoDB", "Redis", "BullMQ"] },
  { group: "Web", items: ["Next.js", "React", "TypeScript", "Astro", "Tailwind CSS"] },
  { group: "Infrastructure", items: ["Linux", "Docker", "nginx", "PM2", "GitHub Actions", "Cloudflare", "VPS ops"] },
  { group: "Craft", items: ["Clean architecture", "Text shaping (OpenType)", "PDF generation", "MCP servers", "CLI tools"] },
];
