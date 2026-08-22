// Types
export interface Profile {
  name: string;
  lastName: string;
  location: string;
  tagline: string;
  bio: string;
  heroPhoto: string;
  aboutPhoto: string;
  aboutText: string;
  resumeUrl: string;
  professionalLinks: SocialLink[];
  personalLinks: SocialLink[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Experience {
  id: string;
  slug: string;
  company: string;
  logo: string;
  role: string;
  location?: string;
  startDate: string;
  endDate: string;
  description: string[];
  longDescription?: string;
  technologies: string[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  features?: string[];
  images: string[];
  demoVideo?: string;
  liveUrl?: string;
  codeUrl?: string;
  technologies: string[];
  tags: string[];
  featured: boolean;
  hasResearchPaper: boolean;
  hasPatent: boolean;
  relatedResearch: string[];
  createdAt: string;
}

export interface Research {
  id: string;
  slug: string;
  type: 'paper' | 'patent';
  title: string;
  abstract: string;
  authors: string[];
  venue: string;
  date: string;
  thumbnail: string;
  pdfUrl?: string;
  externalLinks: {
    doi?: string;
    arxiv?: string;
    ieee?: string;
    googleScholar?: string;
    patentOffice?: string;
  };
  relatedProject?: string;
  status: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  date: string;
  tags: string[];
  readingTime: string;
}

export interface Education {
  id: string;
  institution: string;
  logo?: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  highlights?: string[];
  location: string;
}

export interface Skill {
  name: string;
}

// Dummy Data
export const profile: Profile = {
  name: "Ameya",
  lastName: "Morgaonkar",
  location: "Pune, India",
  tagline: "Full stack developer with a stronger interest in backend.",
  bio: "A passionate developer and researcher focused on creating impactful technology solutions.",
  heroPhoto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  aboutPhoto: "/images/Ameya Morgaonkar.jpeg",
  aboutText: `Hey there! I'm Ameya, a developer and researcher based in Pune, India. When I'm not coding or working on research papers, you'll find me exploring new music, playing chess, or diving into a good book.

I believe in building technology that makes a difference. My journey has taken me through various projects spanning AI, web development, and systems design. Each project is an opportunity to learn something new and push the boundaries of what's possible.`,
  resumeUrl: "/resume.pdf",
  professionalLinks: [
    { name: "LeetCode", url: "https://leetcode.com/AmeyaMorgaonkar", icon: "LucideCode" },
    { name: "GitHub", url: "https://github.com/AmeyaMorgaonkar", icon: "Github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/ameyamorgaonkar/", icon: "Linkedin" },
    { name: "Email", url: "mailto:ameyamorgaonkar@gmail.com", icon: "Mail" },
  ],
  personalLinks: [
    { name: "Instagram", url: "https://www.instagram.com/ameyamorgaonkar/", icon: "Instagram" },
    // { name: "Spotify", url: "https://spotify.com", icon: "Music" },
    // { name: "Chess.com", url: "https://chess.com", icon: "Trophy" },
    // { name: "Goodreads", url: "https://goodreads.com", icon: "BookOpen" },
  ],
};

export const experiences: Experience[] = [
  //   {
  //     id: "exp-3",
  //     slug: "tech-innovations-swe-intern",
  //     company: "Tech Innovations Inc.",
  //     logo: "/images/company1.png",
  //     role: "Software Engineer Intern",
  //     location: "Pune, India",
  //     startDate: "May 2025",
  //     endDate: "August 2025",
  //     description: [
  //       "Developed and deployed machine learning models for predictive analytics, improving accuracy by 25%",
  //       "Built RESTful APIs using Python and FastAPI, handling 10K+ requests daily",
  //       "Collaborated with cross-functional teams to deliver features on tight deadlines",
  //     ],
  //     longDescription: `## About the Role

  // As a Software Engineer Intern at Tech Innovations Inc., I worked on the Data Science team to develop and deploy machine learning solutions for enterprise clients.

  // ## Key Achievements

  // ### Machine Learning Pipeline
  // Designed and implemented an end-to-end ML pipeline for predictive analytics:
  // - Built data preprocessing pipelines handling 1M+ records daily
  // - Developed custom feature engineering modules
  // - Implemented model versioning and A/B testing framework
  // - Achieved 25% improvement in prediction accuracy over baseline

  // ### API Development
  // Built production-ready APIs serving ML predictions:
  // - Designed RESTful endpoints using FastAPI
  // - Implemented caching with Redis for low-latency responses
  // - Set up monitoring and alerting with Prometheus/Grafana
  // - Handled 10K+ requests daily with 99.9% uptime

  // ### Team Collaboration
  // - Participated in daily standups and sprint planning
  // - Conducted code reviews for fellow interns
  // - Presented technical findings to stakeholders

  // ## What I Learned
  // This internship gave me hands-on experience with production ML systems and taught me the importance of writing maintainable, testable code.`,
  //     technologies: ["Python", "TensorFlow", "FastAPI", "PostgreSQL", "Docker"],
  //   },
  //   {
  //     id: "exp-2",
  //     slug: "tech-innovations-swe-intern",
  //     company: "Tech Innovations Inc.",
  //     logo: "/images/company1.png",
  //     role: "Software Engineer Intern",
  //     location: "Pune, India",
  //     startDate: "May 2025",
  //     endDate: "August 2025",
  //     description: [
  //       "Developed and deployed machine learning models for predictive analytics, improving accuracy by 25%",
  //       "Built RESTful APIs using Python and FastAPI, handling 10K+ requests daily",
  //       "Collaborated with cross-functional teams to deliver features on tight deadlines",
  //     ],
  //     longDescription: `## About the Role

  // As a Software Engineer Intern at Tech Innovations Inc., I worked on the Data Science team to develop and deploy machine learning solutions for enterprise clients.

  // ## Key Achievements

  // ### Machine Learning Pipeline
  // Designed and implemented an end-to-end ML pipeline for predictive analytics:
  // - Built data preprocessing pipelines handling 1M+ records daily
  // - Developed custom feature engineering modules
  // - Implemented model versioning and A/B testing framework
  // - Achieved 25% improvement in prediction accuracy over baseline

  // ### API Development
  // Built production-ready APIs serving ML predictions:
  // - Designed RESTful endpoints using FastAPI
  // - Implemented caching with Redis for low-latency responses
  // - Set up monitoring and alerting with Prometheus/Grafana
  // - Handled 10K+ requests daily with 99.9% uptime

  // ### Team Collaboration
  // - Participated in daily standups and sprint planning
  // - Conducted code reviews for fellow interns
  // - Presented technical findings to stakeholders

  // ## What I Learned
  // This internship gave me hands-on experience with production ML systems and taught me the importance of writing maintainable, testable code.`,
  //     technologies: ["Python", "TensorFlow", "FastAPI", "PostgreSQL", "Docker"],
  //   },
  //   {
  //     id: "exp-1",
  //     slug: "startupxyz-fullstack",
  //     company: "StartupXYZ",
  //     logo: "/images/company2.png",
  //     role: "Full Stack Developer",
  //     location: "Remote",
  //     startDate: "January 2025",
  //     endDate: "April 2025",
  //     description: [
  //       "Led the development of a real-time dashboard using React and WebSockets",
  //       "Optimized database queries, reducing page load times by 40%",
  //       "Mentored junior developers and conducted code reviews",
  //     ],
  //     longDescription: `## About the Role

  // At StartupXYZ, I worked as a Full Stack Developer building real-time analytics tools for e-commerce businesses.

  // ## Key Projects

  // ### Real-time Analytics Dashboard
  // Led the development of a live dashboard showing business metrics:
  // - Built React frontend with real-time WebSocket updates
  // - Implemented efficient data aggregation on the backend
  // - Created customizable widget system for user preferences
  // - Dashboard used by 50+ enterprise clients

  // ### Performance Optimization
  // Significantly improved application performance:
  // - Profiled and optimized slow database queries
  // - Implemented query result caching
  // - Added database indexes for common access patterns
  // - Reduced average page load time by 40%

  // ### Team Leadership
  // - Mentored 2 junior developers
  // - Established code review practices
  // - Wrote technical documentation

  // ## Impact
  // The dashboard became the company's flagship product and was instrumental in closing several enterprise deals.`,
  //     technologies: ["React", "Node.js", "MongoDB", "WebSocket", "AWS"],
  //   },
];

export const education: Education[] = [
  {
    id: "edu-1",
    institution: "Vishwakarma Institute of Technology, Pune",
    logo: "/images/university1.png",
    degree: "B. Tech",
    field: "Computer Engineering",
    startDate: "September 2025",
    endDate: "May 2029",
    gpa: "9.38/10",
    highlights: [
      "Followed a project-based curriculum with hands-on implementation across all semesters",
      "Completed course projects for every subject, applying theoretical concepts to real-world problems",
      "Built working prototypes / full-stack applications with emphasis on usability and scalability",
    ],
    location: "Pune, India",
  },
  {
    id: "edu-2",
    institution: "Arham Juniour College",
    logo: "/images/university2.png",
    degree: "High School",
    field: "Science",
    startDate: "June 2023",
    endDate: "May 2025",
    gpa: "7.8/10",
    highlights: [
      "Built a strong foundation in Physics, Chemistry, and Mathematics with focus on analytical problem-solving",
      "Completed subject-level projects and practical files as part of curriculum",
      "Prepared for engineering entrance exams like JEE Main, JEE Advanced, MHT-CET, etc.",
    ],
    location: "Pune, India",
  },
];

export const skills: Skill[] = [
  { name: "Next.js" },
  { name: "React" },
  { name: "Tailwind CSS" },
  { name: "TypeScript" },
  { name: "JavaScript" },
  { name: "Node.js" },
  { name: "Python" },
  { name: "Django" },
  { name: "FastAPI" },
  { name: "PostgreSQL" },
  { name: "MongoDB" },
  { name: "Docker" },
  { name: "Git" },
];

export const projects: Project[] = [
  {
    id: "proj-krypsis",
    slug: "krypsis-adaptive-privacy-threat-detection",
    title: "Krypsis: Adaptive Privacy & Threat Detection System",
    shortDescription: "A real-time desktop security application that monitors Wi-Fi safety, detects web trackers, profiles system behavior.",
    longDescription: `Built Krypsis, a comprehensive real-time desktop security platform that monitors Wi-Fi networks, evaluates system behavior, tracks web privacy risks, for anomalies using Z-score statistics, and calculates dynamic threat scores with automated responses.

The system features a modular architecture combining Wi-Fi scanning (detecting rogue APs and evil twins), statistical behavioral profiling (Z-score anomaly detection on CPU, memory, and processes), and DNS-level web tracker monitoring. Threat scores are calculated using a weighted aggregation engine (Wi-Fi 35%, Behavioral 40%, Web 25%) categorized into dynamic risk tiers.

Equipped with an automated responder for threat mitigation (VPN triggers, DNS hardening, escalation alerts), exportable session reports (JSON/TXT), and a modern PySide6 glassmorphic desktop dashboard with live metrics and real-time visualization charts.

**Features**
- Real-time Wi-Fi threat analysis & rogue AP / evil twin detection
- System behavioral profiling with Z-score anomaly detection on CPU/RAM/process counts
- Web tracker & browser fingerprinting detection across DNS & network connections
- Unified weighted threat scoring engine (0–100 score with dynamic severity tiers)
- Automated threat auto-responder with VPN triggers, DNS hardening, and alerts
- Exportable privacy session reports (JSON/TXT) with hardening recommendations`,
    features: [
      "Real-time Wi-Fi threat analysis & rogue AP / evil twin detection",
      "Z-score anomaly detection on CPU/RAM/process counts",
      "Browser fingerprinting detection across DNS & network connections",
      "Automated threat responder with VPN triggers, DNS hardening, and alerts",
      "Exportable privacy reports (JSON/TXT) with hardening recommendations",
    ],
    images: [
      "/images/projects/proj-krypsis/dashboard.png",
      "/images/projects/proj-krypsis/wifi.png",
      "/images/projects/proj-krypsis/behaviour.png",
      "/images/projects/proj-krypsis/web.png",
      "/images/projects/proj-krypsis/report.png",
      "/images/projects/proj-krypsis/settings.png",
      "/images/projects/proj-krypsis/notif.png",
    ],
    codeUrl: "https://github.com/AmeyaMorgaonkar/adaptive-privacy-threat-detection",
    technologies: ["Python", "PySide6", "OpenVPN", "Scikit-Learn"],
    tags: ["Cyber Security", "AIML", "Full Stack"],
    featured: true,
    hasResearchPaper: false,
    hasPatent: false,
    relatedResearch: [],
    createdAt: "2026-03-01",
  },
  {
    id: "proj-4",
    slug: "face-recognition",
    title: "Face recognition Attendence System",
    shortDescription: "Face recognition-based attendance system with anti-spoofing, enabling secure, real-time attendance marking.",
    longDescription: `Built a secure face recognition attendance system that automates attendance marking using real-time computer vision, enhanced with anti-spoofing mechanisms to prevent fraudulent identification attempts. The system captures facial data, trains recognition models, and verifies users through live detection before marking attendance.

Implemented a complete pipeline including face detection, recognition, and liveness verification, ensuring that only genuine users (not images or recorded videos) are authenticated. Integrated real-time processing to deliver fast and reliable identification.

Attendance data is automatically recorded with timestamps and stored in structured formats for tracking and analysis. The project demonstrates strong understanding of computer vision, security-focused ML systems, and real-time application design, making it suitable for deployment in educational institutions or workplaces.

**Features**
- Real-time face detection and recognition
- Anti-spoofing (liveness detection) to prevent photo/video-based fraud
- Automated attendance marking with accurate timestamp logging
- Efficient computer vision processing using OpenCV and ML techniques
- End-to-end pipeline from data collection to real-time deployment`,
    features: [
      "Real-time face detection and recognition",
      "Anti-spoofing (liveness detection) to prevent photo/video-based fraud",
      "Automated attendance marking with accurate timestamp logging",
    ],
    images: [
      "/images/projects/proj-4/img1.png",
      "/images/projects/proj-4/img2.png",
      "/images/projects/proj-4/img3.png",
      "/images/projects/proj-4/img4.png",
    ],
    demoVideo: "https://www.youtube.com/watch?v=ldsA45p05M0",
    codeUrl: "https://github.com/AmeyaMorgaonkar/face-recognition-attendance-system",
    technologies: ["Python", "OpenCV", "Django", "MySQL", "CNN",],
    tags: ["AIML", "Full Stack"],
    featured: true,
    hasResearchPaper: false,
    hasPatent: false,
    relatedResearch: [],
    createdAt: "2024-11-05",
  },
    {
    id: "proj-campuscoin",
    slug: "campuschain",
    title: "CampusCoin: Campus Payments on Blockchain",
    shortDescription: "Unifying campus payments: event tickets, library fees, and canteen orders on-chain, with student wallets funded via UPI-style top-ups.",
    longDescription: `Built CampusChain, a Web3-based campus payments platform that consolidates event ticketing, library transactions, and canteen payments into a single blockchain-backed system. Every transaction on campus, booking an event ticket, paying a library fine, or ordering food is recorded on-chain, giving a transparent and tamper-proof transaction history.

At the core of the system is a custodial student wallet that abstracts away crypto complexity. Parents don't need a MetaMask or any external crypto wallet, the platform manages wallet keys internally, while parents and students can load funds through a simple UPI-style top-up flow, with the underlying conversion to on-chain balance handled transparently by the system.

The platform doubles as a unified campus portal: students can browse upcoming events and book tickets, view the library catalog and reserve or return books, and check the live canteen menu to place food orders: all from within the same interface, with payment settled instantly from their on-chain wallet balance.

**Features**
- Custodial student wallets abstracting away MetaMask/crypto complexity
- UPI-style fund top-ups from parents and students (no external wallet needed)
- On-chain transaction ledger for events, library, and canteen payments
- Event browsing & ticket booking with blockchain-recorded purchases
- Library catalog with book browsing, reservation, and fine payments
- Live canteen menu with in-app ordering and instant wallet-based payment`,
    features: [
      "UPI-style wallet top-ups for parents and students",
      "On-chain ledger for events, library, and canteen transactions",
      "Event browsing, library catalog and live canteen menu along with booking",
    ],
    images: [
      "/images/projects/proj-campus_coin/1.png",
      "/images/projects/proj-campus_coin/2.png",
      "/images/projects/proj-campus_coin/3.png",
      "/images/projects/proj-campus_coin/4.png",
      "/images/projects/proj-campus_coin/5.png",
    ],
    liveUrl: "https://campus-coin-dapp.vercel.app/",
    codeUrl: "https://github.com/AmeyaMorgaonkar/campus-coin",
    technologies: ["Solidity", "Ethereum", "Ether.js", "Vite"],
    tags: ["Web3", "Full Stack"],
    featured: true,
    hasResearchPaper: false,
    hasPatent: false,
    relatedResearch: [],
    createdAt: "",
  },
    {
    id: "proj-mrs",
    slug: "movie-recommendation-system",
    title: "Hybrid Movie Recommendation System",
    shortDescription: "Engine combining content-based filtering, popularity ranking, and collaborative filtering.",
    longDescription: `Built a hybrid movie recommendation system that suggests films using three complementary approaches: content similarity, popularity ranking, and collaborative filtering, unified behind a single API and an interactive web interface.

The system processes movie metadata, cast/crew credits, and user ratings into engineered feature sets. Content-based recommendations use TF-IDF vectorization over genres, cast, crew, and keywords with cosine similarity, while popularity-based ranking applies a weighted rating formula that balances vote count against vote average to avoid bias toward low-sample outliers. Collaborative filtering builds a user-item ratings matrix to surface recommendations based on behavioral patterns across users.

The entire ML pipeline is documented across staged Jupyter notebooks covering data exploration, preprocessing, and each recommendation method, with trained artifacts exported for fast inference. A lightweight FastAPI backend loads precomputed models at startup and serves recommendations through REST endpoints, paired with a custom-designed frontend that lets users compare all three recommendation strategies side by side for the same movie.

**Features**
- Content-based recommendations via TF-IDF + cosine similarity on genres, cast, crew, and keywords
- Popularity-based ranking using a weighted rating formula (vote count vs. vote average)
- Collaborative filtering on a user-item ratings matrix
- Side-by-side comparison view across all three recommendation methods
- FastAPI backend serving precomputed model artifacts for fast inference
- Documented end-to-end ML pipeline across staged Jupyter notebooks`,
    features: [
      "Content-based recommendations via TF-IDF + cosine similarity",
      // "Popularity-based ranking using a weighted rating formula",
      "Collaborative filtering on a user-item ratings matrix",
      "Side-by-side comparison across all recommendation methods",
      // "End-to-end ML pipeline across staged Jupyter notebooks",
    ],
    images: [
      "/images/projects/proj-mrs/1.jpg",
      "/images/projects/proj-mrs/2.png",
      "/images/projects/proj-mrs/3.jpg",
      "/images/projects/proj-mrs/4.jpg",
      "/images/projects/proj-mrs/5.png",
    ],
    codeUrl: "https://github.com/AmeyaMorgaonkar/movie-recommendation-system",
    technologies: ["Python", "Pandas", "Scikit-Learn", "FastAPI", "JavaScript"],
    tags: ["AIML", "Full Stack"],
    featured: true,
    hasResearchPaper: false,
    hasPatent: false,
    relatedResearch: [],
    createdAt: "2026-08-21",
  },
  {
    id: "proj-nlp",
    slug: "nlp",
    title: "Natural Language Processing",
    shortDescription: "An NLP tool that analyzes text to surface word frequency patterns, optional stop-word filtering, and overall sentiment/tone.",
    longDescription: `Built a lightweight NLP-based text analysis tool that takes a paragraph as input and returns key linguistic insights, including word frequency distribution, and sentiment tone classification.

The system tokenizes and preprocesses input text (case normalization, punctuation stripping, lemmatization), then computes word occurrence counts with a toggleable option to include or exclude common stop words for cleaner frequency analysis. A sentiment/tone classification layer, built on top of a pretrained NLP pipeline, evaluates the overall emotional tone of the paragraph (e.g., positive, negative, neutral) along with a confidence score.

Designed with a clean, minimal interface for quick text analysis, it is useful for writers, students, and researchers looking to quickly understand word usage patterns and the emotional tone of their writing.

**Features**
- Word frequency analysis with occurrence counts, sorted by usage
- Toggleable stop-word inclusion/exclusion for refined results
- Tone/sentiment detection (positive, negative, neutral) with confidence scoring
- Text preprocessing pipeline (tokenization, normalization, lemmatization)
- Simple, interactive UI for pasting text and viewing instant results`,
    features: [
      "Word frequency analysis with occurrence counts",
      "Toggleable stop-word inclusion/exclusion",
      "Sentiment/tone detection with confidence scoring",
    ],
    images: [
      "/images/projects/proj-nlp/1.png",
      "/images/projects/proj-nlp/2.png",
    ],
    liveUrl: "https://npl-basic-ameya.streamlit.app/",
    codeUrl: "https://github.com/AmeyaMorgaonkar/NLP",
    technologies: ["Python", "NLTK"],
    tags: ["AIML"],
    featured: false,
    hasResearchPaper: false,
    hasPatent: false,
    relatedResearch: [],
    createdAt: "",
  },
  {
    id: "proj-todo-on-chain",
    slug: "decentralized-todo-app",
    title: "Decentralized On-Chain Todo App",
    shortDescription: "Todo application where tasks are created, completed, and stored directly on the blockchain.",
    longDescription: `Built ChainTask, a decentralized todo application that stores tasks on-chain instead of a traditional database. Every task a user adds, marks complete, or deletes is recorded as a blockchain transaction, giving a persistent and tamper-proof task history tied to the user's wallet address.

Users connect their crypto wallet (e.g. MetaMask) to authenticate and interact with the app. A smart contract handles the core todo logic: adding tasks, toggling completion status, and removing tasks with each action reflected transparently on-chain. Since data is scoped to the connected wallet address, each user has their own private, wallet-linked task list without needing a separate backend or login system.

ChainTask demonstrates core dApp concepts: smart contract interaction, wallet-based authentication, and on-chain state management, through a familiar, everyday use case.

**Features**
- Wallet-based authentication (MetaMask) with no separate login system
- Smart contract-managed task creation, completion, and deletion
- On-chain, tamper-proof task history per wallet address
- Real-time UI sync with blockchain transaction state
- Minimal, clean interface for quick task management`,
    features: [
      "Wallet-based authentication (MetaMask), no separate login",
      "On-chain, tamper-proof task history per wallet",
      "Real-time UI sync with blockchain transaction state",
    ],
    images: [
      "/images/projects/proj-todo-on-chain/1.png",
      "/images/projects/proj-todo-on-chain/2.png",
    ],
    liveUrl: "https://todo-list-on-chain-dapp.vercel.app/",
    codeUrl: "https://github.com/AmeyaMorgaonkar/ToDo-dApp",
    technologies: ["Solidity", "Ethereum"],
    tags: ["Web3"],
    featured: false,
    hasResearchPaper: false,
    hasPatent: false,
    relatedResearch: [],
    createdAt: "",
  },
  {
    id: "proj-digitalitem",
    slug: "digitalitem",
    title: "DigitalItem: On-Chain Digital Marketplace",
    shortDescription: "A simple Web3 marketplace where transactions are recorded on-chain.",
    longDescription: `Built DigitalItem, a blockchain-based marketplace that enables users to buy digital items in a fully decentralized manner. Every listing, purchase, and ownership transfer is executed as a smart contract transaction, giving a transparent and verifiable record of who owns what and how it changed hands.

Sellers can buy a digital item with a name, description, and price, which gets recorded on-chain and made visible to all users. Buyers can browse available listings and purchase an item directly through their connected wallet. The smart contract handles payment transfer to the seller and reassigns ownership of the item atomically, ensuring the transaction either fully completes or fails safely.

Designed as a focused Web3 project, DigitalItem demonstrates core marketplace mechanics. Listing, ownership tracking, and peer-to-peer payment, using smart contracts instead of a centralized backend, with wallet-based identity replacing traditional user accounts.

**Features**
- Wallet-based authentication (MetaMask) with no centralized accounts
- On-chain item listing with name, description, and price
- Smart contract-driven buy flow with atomic payment & ownership transfer
- Transparent, verifiable ownership history per item
- Browse-and-buy marketplace interface for available listings`,
    features: [
      "Wallet-based authentication (MetaMask), no centralized accounts",
      "On-chain items with price and description",
      "Atomic smart contract buy flow (payment + ownership transfer)",
      "Browse-and-buy marketplace interface",
    ],
    images: [
      "/images/projects/proj-trans-chain/1.png",
      "/images/projects/proj-trans-chain/2.png",
      "/images/projects/proj-trans-chain/3.png",
    ],
    codeUrl: "https://github.com/AmeyaMorgaonkar/transaction-on-blockchain",
    technologies: ["Solidity", "Ethereum","Ethers.js"],
    tags: ["Web3"],
    featured: false,
    hasResearchPaper: false,
    hasPatent: false,
    relatedResearch: [],
    createdAt: "",
  },
  {
    id: "proj-1",
    slug: "monolity",
    title: "Monolity - The pinnacle of Modern Living",
    shortDescription: "Developed a modern real estate web application UI featuring property listings, interactive browsing, and responsive design, built with a scalable frontend architecture and deployed on Vercel.000",
    longDescription: `Built a high-performance real estate platform UI that enables users to explore, filter, and view property listings through a clean and intuitive interface. The application focuses on modern UX patterns such as smooth navigation, responsive layouts, and visually rich property cards.

  Implemented using a component-based architecture, the project emphasizes scalability and reusability of UI elements. Designed key sections including featured listings, property detail pages, and structured navigation to simulate a production-level real estate product.

  Optimized for performance and deployment using modern frontend tooling, ensuring fast load times and seamless user experience across devices. The project demonstrates strong skills in frontend development, UI/UX design, and real-world product thinking.
  
  ## Features
  - Responsive real estate UI optimized for mobile, tablet, and desktop
  - Dynamic property listing interface with clean, card-based layout
  - Smooth navigation and transitions for enhanced user experience
  - Optimized performance with fast load times via Vercel deployment
  - *EO-friendly structure for improved discoverability`,
    features: [
      "Responsive real estate UI optimized for mobile, tablet, and desktop",
      "Dynamic property listing interface with clean, card-based layout",
      "Smooth navigation and transitions for enhanced user experience",
    ],
    images: [
      "/images/projects/proj-1/img1.png",
      "/images/projects/proj-1/img2.png",
      "/images/projects/proj-1/img3.png",
      "/images/projects/proj-1/img4.png",
      "/images/projects/proj-1/img5.jpg",
    ],
    // demoVideo: "https://www.youtube.com/watch?v=aircAruvnKk",
    liveUrl: "https://monolith-estates-ui.vercel.app/",
    codeUrl: "https://github.com/AmeyaMorgaonkar/monolith-estates-ui",
    technologies: ["Next.js", "Typescript", "React", "Vercel"],
    tags: ["Web Development"],
    featured: false,
    hasResearchPaper: false,
    hasPatent: false,
    relatedResearch: ["research-1", "patent-1"],
    createdAt: "2026-02-15",
  },
  {
    id: "proj-3",
    slug: "aurelia",
    title: "Aurelia - Premium Luxury",
    shortDescription: "Built a modern real estate agency web platform enabling users to explore, buy, sell, and evaluate properties through a structured, high-conversion UI with service-focused sections.",
    longDescription: `Developed a full-scale real estate agency web application UI that simulates a production-ready platform for buying, selling, and renting properties. The platform includes structured property browsing, service offerings, and conversion-focused sections such as pricing models, lead capture forms, and call-to-action flows.

Designed a high-converting user experience with clear information hierarchy, showcasing features like property listings, agent services, and value propositions (e.g., flat-fee selling model). Integrated visually rich sections, dynamic layouts, and responsive design to ensure a seamless experience across devices.

Built using a component-driven architecture, enabling scalable development and reusable UI elements across multiple pages. The project demonstrates strong understanding of frontend engineering, product thinking, and real-world business-oriented design, particularly for service-based platforms

**Features**
- Structured property listings with categorized browsing and location-based filtering
- Lead generation forms and strong call-to-action components for user conversion
- Modern, responsive UI optimized for mobile, tablet, and desktop devices
- Component-based architecture for scalable and maintainable frontend development`,
    features: [
      "Structured property listings with categorized browsing and location-based filtering",
      "Lead generation forms and strong call-to-action components for user conversion",
      "Modern, responsive UI optimized for mobile, tablet, and desktop devices",
    ],
    images: [
      "/images/projects/proj-3/img1.png",
      "/images/projects/proj-3/img2.jpeg",
      "/images/projects/proj-3/img3.png",
      "/images/projects/proj-3/img4.png",
    ],
    liveUrl: "https://real-estate-agency-fixed-ia48.vercel.app/",
    codeUrl: "https://github.com/AmeyaMorgaonkar/real-estate-agency",
    technologies: ["Next.js", "TypeScript", "React", "Tailwind"],
    tags: ["Web Development"],
    featured: true,
    hasResearchPaper: false,
    hasPatent: false,
    relatedResearch: [],
    createdAt: "2025-01-10",
  },
  {
    id: "proj-2",
    slug: "sterling",
    title: "STERLING - Visionary Living.",
    shortDescription: "Developed a modern, responsive real estate web application UI with structured property browsing, interactive navigation, and production-level design, deployed on Vercel.",
    longDescription: `Built a high-fidelity real estate web application UI that simulates a production-grade property platform, enabling users to explore listings through a structured and visually rich interface. Designed a complete user flow including homepage, property listings, and detailed property views with clear information hierarchy.

Implemented a scalable component-based architecture to ensure reusability and maintainability across the application. Focused heavily on modern UI/UX principles, incorporating smooth transitions, responsive layouts, and high-quality visuals to create a premium user experience suitable for real-world clients.

Optimized the application for performance and seamless deployment, leveraging modern frontend practices to achieve fast load times and consistent behavior across devices. The project demonstrates strong capabilities in frontend engineering, design systems, and building production-ready interfaces.

**Features**
- Advanced property browsing with structured listing and detail pages
- Scalable component-based architecture for reusable UI elements
- Production-level layout mimicking real-world real estate platforms
- Optimized frontend performance with fast loading and routing`,
    features: [
      "Advanced property browsing with structured listing and detail pages",
      "Scalable component-based architecture for reusable UI elements",
      "Production-level layout mimicking real-world real estate platforms",
    ],
    images: [
      "/images/projects/proj-2/img1.png",
      "/images/projects/proj-2/img2.png",
      "/images/projects/proj-2/img3.jpeg",
    ],
    liveUrl: "https://monolith-estates-ui-5k16.vercel.app/",
    codeUrl: "https://github.com/AmeyaMorgaonkar/sterling-estates-ui",
    technologies: ["React", "Node.js", "InfluxDB", "Next.js", "TypeScript"],
    tags: ["Web Development"],
    featured: false,
    hasResearchPaper: false,
    hasPatent: false,
    relatedResearch: ["research-2"],
    createdAt: "2025-03-20",
  },
];

export const research: Research[] = [
  // {
  //   id: "research-1",
  //   slug: "deep-learning-medical-imaging",
  //   type: "paper",
  //   title: "Deep Learning Approaches for Automated Medical Image Analysis: A Comprehensive Study",
  //   abstract: "This paper presents a comprehensive study of deep learning techniques applied to medical image analysis. We propose a novel CNN architecture that achieves state-of-the-art results in X-ray anomaly detection while maintaining computational efficiency suitable for clinical deployment.",
  //   authors: ["Ameya", "Dr. Smith", "Prof. Johnson"],
  //   venue: "IEEE Journal of Biomedical and Health Informatics",
  //   date: "2025-06-01",
  //   thumbnail: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
  //   pdfUrl: "/papers/medical-imaging.pdf",
  //   externalLinks: {
  //     doi: "https://doi.org/10.1234/example",
  //     arxiv: "https://arxiv.org/abs/2501.12345",
  //     ieee: "https://ieeexplore.ieee.org/example",
  //     googleScholar: "https://scholar.google.com/example",
  //   },
  //   relatedProject: "proj-1",
  //   status: "Published",
  // },
  // {
  //   id: "research-2",
  //   slug: "iot-smart-cities",
  //   type: "paper",
  //   title: "IoT-Enabled Smart City Infrastructure: Challenges and Solutions",
  //   abstract: "We present a scalable IoT architecture for smart city applications, addressing challenges in data aggregation, real-time processing, and privacy. Our system demonstrates 40% improvement in response time compared to existing solutions.",
  //   authors: ["Ameya", "Dr. Patel"],
  //   venue: "ACM Conference on Embedded Networked Sensor Systems",
  //   date: "2025-03-15",
  //   thumbnail: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400&h=300&fit=crop",
  //   pdfUrl: "/papers/smart-city.pdf",
  //   externalLinks: {
  //     doi: "https://doi.org/10.1234/smartcity",
  //     arxiv: "https://arxiv.org/abs/2503.67890",
  //   },
  //   relatedProject: "proj-2",
  //   status: "Published",
  // },
  // {
  //   id: "research-3",
  //   slug: "efficient-transformers",
  //   type: "paper",
  //   title: "Efficient Transformer Architectures for Edge Deployment",
  //   abstract: "This work introduces novel compression techniques for transformer models, enabling deployment on resource-constrained edge devices without significant accuracy loss. We achieve 8x compression with only 2% accuracy reduction.",
  //   authors: ["Ameya", "Prof. Williams", "Dr. Chen"],
  //   venue: "NeurIPS Workshop on Efficient Deep Learning",
  //   date: "2024-12-01",
  //   thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
  //   externalLinks: {
  //     arxiv: "https://arxiv.org/abs/2412.11111",
  //     googleScholar: "https://scholar.google.com/example2",
  //   },
  //   status: "Published",
  // },
  // {
  //   id: "patent-1",
  //   slug: "real-time-medical-detection",
  //   type: "patent",
  //   title: "Method and System for Real-time Medical Image Anomaly Detection",
  //   abstract: "A system and method for real-time detection of anomalies in medical images using a novel deep learning architecture optimized for clinical environments. The invention includes techniques for reducing inference time while maintaining diagnostic accuracy.",
  //   authors: ["Ameya", "Tech Innovations Inc."],
  //   venue: "United States Patent and Trademark Office",
  //   date: "2025-08-01",
  //   thumbnail: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=400&h=300&fit=crop",
  //   externalLinks: {
  //     patentOffice: "https://patents.google.com/patent/US12345678",
  //   },
  //   relatedProject: "proj-1",
  //   status: "Granted",
  // },
];

export const blogPosts: BlogPost[] = [
  //   {
  //     id: "blog-1",
  //     slug: "getting-started-with-ml",
  //     title: "Getting Started with Machine Learning: A Practical Guide",
  //     excerpt: "A comprehensive guide for beginners looking to dive into the world of machine learning, covering essential concepts, tools, and your first project.",
  //     content: `# Getting Started with Machine Learning: A Practical Guide

  // Machine learning has become one of the most exciting fields in technology. In this post, I'll share my journey and provide a practical roadmap for beginners.

  // ## Why Machine Learning?

  // Machine learning is transforming industries from healthcare to finance. Understanding these fundamentals opens doors to countless opportunities.

  // ## Prerequisites

  // Before diving in, make sure you have:
  // - Basic Python programming skills
  // - Understanding of linear algebra and statistics
  // - Curiosity and patience!

  // ## Your First Steps

  // 1. **Learn Python**: If you haven't already, master Python basics
  // 2. **Understand the Math**: Linear algebra, calculus, and statistics
  // 3. **Pick a Framework**: Start with scikit-learn, then move to TensorFlow or PyTorch
  // 4. **Build Projects**: Apply what you learn to real problems

  // ## Resources I Recommend

  // - Andrew Ng's Coursera course
  // - Fast.ai practical deep learning
  // - Kaggle competitions for practice

  // ## Final Thoughts

  // The key is consistency. Spend time every day learning and building. The field is vast, but every expert started as a beginner.`,
  //     coverImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
  //     date: "2025-09-15",
  //     tags: ["Machine Learning", "Tutorial", "Python"],
  //     readingTime: "8 min read",
  //   },
  //   {
  //     id: "blog-2",
  //     slug: "building-scalable-systems",
  //     title: "Lessons Learned Building Scalable Systems",
  //     excerpt: "Insights from building systems that handle millions of requests, including architecture decisions, pitfalls to avoid, and best practices.",
  //     content: `# Lessons Learned Building Scalable Systems

  // After working on several high-traffic applications, I've gathered some insights that might help others facing similar challenges.

  // ## Start Simple, Scale Later

  // One of the biggest mistakes I see is over-engineering from day one. Start with a monolith, understand your bottlenecks, then optimize.

  // ## Key Principles

  // ### 1. Measure Everything
  // You can't optimize what you don't measure. Implement comprehensive logging and monitoring from the start.

  // ### 2. Cache Aggressively
  // Most read-heavy applications benefit enormously from caching. Redis is your friend.

  // ### 3. Database Design Matters
  // Spend time on your schema. Bad database design is expensive to fix later.

  // ## Tools That Helped

  // - **Prometheus + Grafana**: For monitoring
  // - **Redis**: For caching
  // - **Kafka**: For async processing

  // ## Conclusion

  // Building scalable systems is an iterative process. Learn from your metrics, and don't be afraid to refactor.`,
  //     coverImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
  //     date: "2025-08-20",
  //     tags: ["System Design", "Architecture", "Backend"],
  //     readingTime: "6 min read",
  //   },
  //   {
  //     id: "blog-3",
  //     slug: "research-to-production",
  //     title: "From Research Paper to Production: Bridging the Gap",
  //     excerpt: "The journey of taking a research prototype and turning it into a production-ready system, with all the challenges in between.",
  //     content: `# From Research Paper to Production: Bridging the Gap

  // The gap between a research prototype and a production system is often underestimated. Here's what I learned deploying our medical imaging model.

  // ## The Reality Check

  // Research code is optimized for experimentation. Production code needs to be:
  // - Reliable
  // - Maintainable
  // - Scalable
  // - Secure

  // ## Challenges We Faced

  // ### 1. Data Quality
  // Research datasets are clean. Real-world data is messy. We spent weeks building data validation pipelines.

  // ### 2. Latency Requirements
  // Our model worked great offline but was too slow for real-time use. Model optimization became crucial.

  // ### 3. Integration
  // Healthcare systems have strict requirements. HIPAA compliance added complexity.

  // ## What Worked

  // - **Iterative deployment**: Start with a small pilot
  // - **Feedback loops**: Work closely with end users
  // - **Monitoring**: Catch issues before users report them

  // ## Key Takeaway

  // Production is a different beast. Plan for it from the start of your research project.`,
  //     coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
  //     date: "2025-07-10",
  //     tags: ["Research", "MLOps", "Production"],
  //     readingTime: "7 min read",
  //   },
];

// Helper functions
export function getFeaturedProjects(): Project[] {
  return projects.filter(p => p.featured);
}

export function getFeaturedResearch(): Research[] {
  return research.slice(0, 4);
}

export function getLatestPosts(): BlogPost[] {
  return blogPosts.slice(0, 3);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}

export function getResearchBySlug(slug: string): Research | undefined {
  return research.find(r => r.slug === slug);
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug);
}

export function getAllTechnologies(): string[] {
  const techs = new Set<string>();
  projects.forEach(p => p.technologies.forEach(t => techs.add(t)));
  return Array.from(techs).sort();
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  projects.forEach(p => p.tags.forEach(t => tags.add(t)));
  return Array.from(tags).sort();
}
