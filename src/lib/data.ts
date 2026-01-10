// Types
export interface Profile {
  name: string;
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

// Dummy Data
export const profile: Profile = {
  name: "Ameya",
  location: "Pune, India",
  tagline: "Full stack developer specializing in React, Python, and AI/ML. I build web apps and research solutions that solve real problems.",
  bio: "A passionate developer and researcher focused on creating impactful technology solutions.",
  heroPhoto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  aboutPhoto: "/images/about-photo.jpg",
  aboutText: `Hey there! I'm Ameya, a developer and researcher based in Pune, India. When I'm not coding or working on research papers, you'll find me exploring new music, playing chess, or diving into a good book.

I believe in building technology that makes a difference. My journey has taken me through various projects spanning AI, web development, and systems design. Each project is an opportunity to learn something new and push the boundaries of what's possible.

Outside of work, I'm an avid chess player (always up for a game!), a music enthusiast with eclectic taste, and someone who values meaningful conversations over coffee.`,
  resumeUrl: "/resume.pdf",
  professionalLinks: [
    { name: "LeetCode", url: "https://leetcode.com", icon: "Code" },
    { name: "GitHub", url: "https://github.com", icon: "Github" },
    { name: "LinkedIn", url: "https://linkedin.com", icon: "Linkedin" },
    { name: "Email", url: "mailto:hello@example.com", icon: "Mail" },
  ],
  personalLinks: [
    { name: "Instagram", url: "https://instagram.com", icon: "Instagram" },
    { name: "Spotify", url: "https://spotify.com", icon: "Music" },
    { name: "Chess.com", url: "https://chess.com", icon: "Trophy" },
    { name: "Goodreads", url: "https://goodreads.com", icon: "BookOpen" },
  ],
};

export const experiences: Experience[] = [
  {
    id: "exp-1",
    slug: "tech-innovations-swe-intern",
    company: "Tech Innovations Inc.",
    logo: "/images/company1.png",
    role: "Software Engineer Intern",
    location: "Pune, India",
    startDate: "May 2025",
    endDate: "August 2025",
    description: [
      "Developed and deployed machine learning models for predictive analytics, improving accuracy by 25%",
      "Built RESTful APIs using Python and FastAPI, handling 10K+ requests daily",
      "Collaborated with cross-functional teams to deliver features on tight deadlines",
    ],
    longDescription: `## About the Role

As a Software Engineer Intern at Tech Innovations Inc., I worked on the Data Science team to develop and deploy machine learning solutions for enterprise clients.

## Key Achievements

### Machine Learning Pipeline
Designed and implemented an end-to-end ML pipeline for predictive analytics:
- Built data preprocessing pipelines handling 1M+ records daily
- Developed custom feature engineering modules
- Implemented model versioning and A/B testing framework
- Achieved 25% improvement in prediction accuracy over baseline

### API Development
Built production-ready APIs serving ML predictions:
- Designed RESTful endpoints using FastAPI
- Implemented caching with Redis for low-latency responses
- Set up monitoring and alerting with Prometheus/Grafana
- Handled 10K+ requests daily with 99.9% uptime

### Team Collaboration
- Participated in daily standups and sprint planning
- Conducted code reviews for fellow interns
- Presented technical findings to stakeholders

## What I Learned
This internship gave me hands-on experience with production ML systems and taught me the importance of writing maintainable, testable code.`,
    technologies: ["Python", "TensorFlow", "FastAPI", "PostgreSQL", "Docker"],
  },
  {
    id: "exp-2",
    slug: "startupxyz-fullstack",
    company: "StartupXYZ",
    logo: "/images/company2.png",
    role: "Full Stack Developer",
    location: "Remote",
    startDate: "January 2025",
    endDate: "April 2025",
    description: [
      "Led the development of a real-time dashboard using React and WebSockets",
      "Optimized database queries, reducing page load times by 40%",
      "Mentored junior developers and conducted code reviews",
    ],
    longDescription: `## About the Role

At StartupXYZ, I worked as a Full Stack Developer building real-time analytics tools for e-commerce businesses.

## Key Projects

### Real-time Analytics Dashboard
Led the development of a live dashboard showing business metrics:
- Built React frontend with real-time WebSocket updates
- Implemented efficient data aggregation on the backend
- Created customizable widget system for user preferences
- Dashboard used by 50+ enterprise clients

### Performance Optimization
Significantly improved application performance:
- Profiled and optimized slow database queries
- Implemented query result caching
- Added database indexes for common access patterns
- Reduced average page load time by 40%

### Team Leadership
- Mentored 2 junior developers
- Established code review practices
- Wrote technical documentation

## Impact
The dashboard became the company's flagship product and was instrumental in closing several enterprise deals.`,
    technologies: ["React", "Node.js", "MongoDB", "WebSocket", "AWS"],
  },
];

export const education: Education[] = [
  {
    id: "edu-1",
    institution: "University of Technology",
    logo: "/images/university1.png",
    degree: "Master of Science",
    field: "Computer Science",
    startDate: "August 2024",
    endDate: "May 2026 (Expected)",
    gpa: "3.9/4.0",
    highlights: [
      "Specialization in Machine Learning and Artificial Intelligence",
      "Graduate Research Assistant - NLP Lab",
      "Teaching Assistant for Data Structures course",
    ],
    location: "Pune, India",
  },
  {
    id: "edu-2",
    institution: "State Engineering College",
    logo: "/images/university2.png",
    degree: "Bachelor of Engineering",
    field: "Computer Engineering",
    startDate: "August 2020",
    endDate: "May 2024",
    gpa: "3.8/4.0",
    highlights: [
      "Dean's List - All semesters",
      "President of Computer Science Club",
      "Hackathon Winner - Smart India Hackathon 2023",
    ],
    location: "Mumbai, India",
  },
];

export const projects: Project[] = [
  {
    id: "proj-1",
    slug: "ai-medical-imaging",
    title: "AI Medical Imaging System",
    shortDescription: "Deep learning system for detecting anomalies in X-ray images with 94% accuracy",
    longDescription: `# AI Medical Imaging System

## Overview
A comprehensive deep learning solution designed to assist radiologists in detecting anomalies in medical X-ray images. The system achieves 94% accuracy in identifying potential health issues.

## Features
- **Real-time Analysis**: Process X-ray images in under 2 seconds
- **High Accuracy**: 94% detection rate with minimal false positives
- **User-friendly Interface**: Intuitive dashboard for medical professionals
- **HIPAA Compliant**: Built with healthcare data security in mind

## Technical Details
The system uses a custom CNN architecture based on ResNet-50, fine-tuned on a dataset of over 100,000 labeled X-ray images. The model was trained using transfer learning techniques to achieve high accuracy with limited computational resources.

### Architecture
- Frontend: React with TypeScript
- Backend: Python FastAPI
- ML Pipeline: TensorFlow, OpenCV
- Database: PostgreSQL for metadata, S3 for images

## Future Scope
- Expand to CT scan analysis
- Mobile application for remote consultations
- Integration with hospital management systems`,
    images: [
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&h=600&fit=crop",
    ],
    demoVideo: "https://www.youtube.com/watch?v=aircAruvnKk",
    liveUrl: "https://medical-ai-demo.vercel.app",
    codeUrl: "https://github.com/example/medical-ai",
    technologies: ["Python", "TensorFlow", "React", "FastAPI", "PostgreSQL"],
    tags: ["AI/ML", "Healthcare", "Deep Learning"],
    featured: true,
    hasResearchPaper: true,
    hasPatent: true,
    relatedResearch: ["research-1", "patent-1"],
    createdAt: "2025-06-15",
  },
  {
    id: "proj-2",
    slug: "smart-city-dashboard",
    title: "Smart City Analytics Dashboard",
    shortDescription: "Real-time IoT dashboard for monitoring urban infrastructure and traffic patterns",
    longDescription: `# Smart City Analytics Dashboard

## Overview
A comprehensive IoT-powered dashboard for city administrators to monitor and analyze urban infrastructure in real-time.

## Features
- **Live Traffic Monitoring**: Real-time traffic flow visualization
- **Environmental Sensors**: Air quality, noise levels, temperature tracking
- **Predictive Analytics**: ML-based predictions for traffic congestion
- **Alert System**: Automated alerts for anomalies

## Technical Details
Built using a microservices architecture to handle data from thousands of IoT sensors deployed across the city.

## Future Scope
- Expand sensor network coverage
- Add predictive maintenance for infrastructure`,
    images: [
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=600&fit=crop",
    ],
    liveUrl: "https://smartcity-demo.vercel.app",
    codeUrl: "https://github.com/example/smart-city",
    technologies: ["React", "Node.js", "InfluxDB", "Kafka", "D3.js"],
    tags: ["IoT", "Data Visualization", "Hackathon Winner"],
    featured: true,
    hasResearchPaper: true,
    hasPatent: false,
    relatedResearch: ["research-2"],
    createdAt: "2025-03-20",
  },
  {
    id: "proj-3",
    slug: "nlp-sentiment-analyzer",
    title: "NLP Sentiment Analyzer",
    shortDescription: "Multi-language sentiment analysis tool for social media monitoring",
    longDescription: `# NLP Sentiment Analyzer

## Overview
A powerful NLP tool that analyzes sentiment across multiple languages for social media monitoring and brand analytics.

## Features
- **Multi-language Support**: Works with 12+ languages
- **Real-time Processing**: Analyze thousands of posts per minute
- **Trend Detection**: Identify emerging topics and sentiment shifts
- **API Access**: RESTful API for integration

## Technical Details
Uses transformer-based models fine-tuned on multilingual datasets.`,
    images: [
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    ],
    codeUrl: "https://github.com/example/sentiment-analyzer",
    technologies: ["Python", "PyTorch", "Transformers", "FastAPI", "Redis"],
    tags: ["NLP", "AI/ML", "Python"],
    featured: true,
    hasResearchPaper: false,
    hasPatent: false,
    relatedResearch: [],
    createdAt: "2025-01-10",
  },
  {
    id: "proj-4",
    slug: "blockchain-supply-chain",
    title: "Blockchain Supply Chain Tracker",
    shortDescription: "Decentralized supply chain management system using Ethereum smart contracts",
    longDescription: `# Blockchain Supply Chain Tracker

## Overview
A decentralized application for transparent supply chain tracking using blockchain technology.

## Features
- **Immutable Records**: Tamper-proof tracking history
- **Smart Contracts**: Automated verification and payments
- **QR Code Scanning**: Easy product verification
- **Real-time Updates**: Live tracking across supply chain

## Technical Details
Built on Ethereum with Solidity smart contracts and a React frontend.`,
    images: [
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?w=800&h=600&fit=crop",
    ],
    liveUrl: "https://supply-chain-demo.vercel.app",
    codeUrl: "https://github.com/example/supply-chain",
    technologies: ["Solidity", "Ethereum", "React", "Web3.js", "IPFS"],
    tags: ["Blockchain", "Web3", "Hackathon"],
    featured: true,
    hasResearchPaper: false,
    hasPatent: false,
    relatedResearch: [],
    createdAt: "2024-11-05",
  },
  {
    id: "proj-5",
    slug: "task-management-app",
    title: "TaskFlow - Project Management Tool",
    shortDescription: "A collaborative task management application with real-time updates and team features",
    longDescription: `# TaskFlow - Project Management Tool

## Overview
A modern project management tool designed for teams to collaborate effectively.

## Features
- **Real-time Collaboration**: Live updates across all team members
- **Kanban Boards**: Visual task organization
- **Time Tracking**: Built-in time logging
- **Integrations**: Slack, GitHub, and more

## Technical Details
Built with Next.js and Socket.io for real-time features, with PostgreSQL for data persistence.`,
    images: [
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&h=600&fit=crop",
    ],
    liveUrl: "https://taskflow-demo.vercel.app",
    codeUrl: "https://github.com/example/taskflow",
    technologies: ["Next.js", "Socket.io", "PostgreSQL", "Prisma", "TailwindCSS"],
    tags: ["Full Stack", "SaaS", "Productivity"],
    featured: true,
    hasResearchPaper: false,
    hasPatent: false,
    relatedResearch: [],
    createdAt: "2024-09-15",
  },
  {
    id: "proj-6",
    slug: "ai-code-reviewer",
    title: "CodeSense - AI Code Reviewer",
    shortDescription: "An intelligent code review assistant powered by GPT-4 for automated PR reviews",
    longDescription: `# CodeSense - AI Code Reviewer

## Overview
An AI-powered tool that automatically reviews pull requests and suggests improvements.

## Features
- **Automated Reviews**: AI analyzes code changes automatically
- **Best Practices**: Suggests improvements based on coding standards
- **Security Scanning**: Identifies potential vulnerabilities
- **GitHub Integration**: Seamless integration with GitHub PRs

## Technical Details
Uses OpenAI's GPT-4 API with custom prompts for code analysis, integrated via GitHub Actions.`,
    images: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
    ],
    codeUrl: "https://github.com/example/codesense",
    technologies: ["Python", "OpenAI", "GitHub Actions", "FastAPI", "Redis"],
    tags: ["AI/ML", "DevTools", "Automation"],
    featured: true,
    hasResearchPaper: false,
    hasPatent: false,
    relatedResearch: [],
    createdAt: "2024-08-20",
  },
];

export const research: Research[] = [
  {
    id: "research-1",
    slug: "deep-learning-medical-imaging",
    type: "paper",
    title: "Deep Learning Approaches for Automated Medical Image Analysis: A Comprehensive Study",
    abstract: "This paper presents a comprehensive study of deep learning techniques applied to medical image analysis. We propose a novel CNN architecture that achieves state-of-the-art results in X-ray anomaly detection while maintaining computational efficiency suitable for clinical deployment.",
    authors: ["Ameya", "Dr. Smith", "Prof. Johnson"],
    venue: "IEEE Journal of Biomedical and Health Informatics",
    date: "2025-06-01",
    thumbnail: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
    pdfUrl: "/papers/medical-imaging.pdf",
    externalLinks: {
      doi: "https://doi.org/10.1234/example",
      arxiv: "https://arxiv.org/abs/2501.12345",
      ieee: "https://ieeexplore.ieee.org/example",
      googleScholar: "https://scholar.google.com/example",
    },
    relatedProject: "proj-1",
    status: "Published",
  },
  {
    id: "research-2",
    slug: "iot-smart-cities",
    type: "paper",
    title: "IoT-Enabled Smart City Infrastructure: Challenges and Solutions",
    abstract: "We present a scalable IoT architecture for smart city applications, addressing challenges in data aggregation, real-time processing, and privacy. Our system demonstrates 40% improvement in response time compared to existing solutions.",
    authors: ["Ameya", "Dr. Patel"],
    venue: "ACM Conference on Embedded Networked Sensor Systems",
    date: "2025-03-15",
    thumbnail: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400&h=300&fit=crop",
    pdfUrl: "/papers/smart-city.pdf",
    externalLinks: {
      doi: "https://doi.org/10.1234/smartcity",
      arxiv: "https://arxiv.org/abs/2503.67890",
    },
    relatedProject: "proj-2",
    status: "Published",
  },
  {
    id: "research-3",
    slug: "efficient-transformers",
    type: "paper",
    title: "Efficient Transformer Architectures for Edge Deployment",
    abstract: "This work introduces novel compression techniques for transformer models, enabling deployment on resource-constrained edge devices without significant accuracy loss. We achieve 8x compression with only 2% accuracy reduction.",
    authors: ["Ameya", "Prof. Williams", "Dr. Chen"],
    venue: "NeurIPS Workshop on Efficient Deep Learning",
    date: "2024-12-01",
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
    externalLinks: {
      arxiv: "https://arxiv.org/abs/2412.11111",
      googleScholar: "https://scholar.google.com/example2",
    },
    status: "Published",
  },
  {
    id: "patent-1",
    slug: "real-time-medical-detection",
    type: "patent",
    title: "Method and System for Real-time Medical Image Anomaly Detection",
    abstract: "A system and method for real-time detection of anomalies in medical images using a novel deep learning architecture optimized for clinical environments. The invention includes techniques for reducing inference time while maintaining diagnostic accuracy.",
    authors: ["Ameya", "Tech Innovations Inc."],
    venue: "United States Patent and Trademark Office",
    date: "2025-08-01",
    thumbnail: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=400&h=300&fit=crop",
    externalLinks: {
      patentOffice: "https://patents.google.com/patent/US12345678",
    },
    relatedProject: "proj-1",
    status: "Granted",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "blog-1",
    slug: "getting-started-with-ml",
    title: "Getting Started with Machine Learning: A Practical Guide",
    excerpt: "A comprehensive guide for beginners looking to dive into the world of machine learning, covering essential concepts, tools, and your first project.",
    content: `# Getting Started with Machine Learning: A Practical Guide

Machine learning has become one of the most exciting fields in technology. In this post, I'll share my journey and provide a practical roadmap for beginners.

## Why Machine Learning?

Machine learning is transforming industries from healthcare to finance. Understanding these fundamentals opens doors to countless opportunities.

## Prerequisites

Before diving in, make sure you have:
- Basic Python programming skills
- Understanding of linear algebra and statistics
- Curiosity and patience!

## Your First Steps

1. **Learn Python**: If you haven't already, master Python basics
2. **Understand the Math**: Linear algebra, calculus, and statistics
3. **Pick a Framework**: Start with scikit-learn, then move to TensorFlow or PyTorch
4. **Build Projects**: Apply what you learn to real problems

## Resources I Recommend

- Andrew Ng's Coursera course
- Fast.ai practical deep learning
- Kaggle competitions for practice

## Final Thoughts

The key is consistency. Spend time every day learning and building. The field is vast, but every expert started as a beginner.`,
    coverImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    date: "2025-09-15",
    tags: ["Machine Learning", "Tutorial", "Python"],
    readingTime: "8 min read",
  },
  {
    id: "blog-2",
    slug: "building-scalable-systems",
    title: "Lessons Learned Building Scalable Systems",
    excerpt: "Insights from building systems that handle millions of requests, including architecture decisions, pitfalls to avoid, and best practices.",
    content: `# Lessons Learned Building Scalable Systems

After working on several high-traffic applications, I've gathered some insights that might help others facing similar challenges.

## Start Simple, Scale Later

One of the biggest mistakes I see is over-engineering from day one. Start with a monolith, understand your bottlenecks, then optimize.

## Key Principles

### 1. Measure Everything
You can't optimize what you don't measure. Implement comprehensive logging and monitoring from the start.

### 2. Cache Aggressively
Most read-heavy applications benefit enormously from caching. Redis is your friend.

### 3. Database Design Matters
Spend time on your schema. Bad database design is expensive to fix later.

## Tools That Helped

- **Prometheus + Grafana**: For monitoring
- **Redis**: For caching
- **Kafka**: For async processing

## Conclusion

Building scalable systems is an iterative process. Learn from your metrics, and don't be afraid to refactor.`,
    coverImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
    date: "2025-08-20",
    tags: ["System Design", "Architecture", "Backend"],
    readingTime: "6 min read",
  },
  {
    id: "blog-3",
    slug: "research-to-production",
    title: "From Research Paper to Production: Bridging the Gap",
    excerpt: "The journey of taking a research prototype and turning it into a production-ready system, with all the challenges in between.",
    content: `# From Research Paper to Production: Bridging the Gap

The gap between a research prototype and a production system is often underestimated. Here's what I learned deploying our medical imaging model.

## The Reality Check

Research code is optimized for experimentation. Production code needs to be:
- Reliable
- Maintainable
- Scalable
- Secure

## Challenges We Faced

### 1. Data Quality
Research datasets are clean. Real-world data is messy. We spent weeks building data validation pipelines.

### 2. Latency Requirements
Our model worked great offline but was too slow for real-time use. Model optimization became crucial.

### 3. Integration
Healthcare systems have strict requirements. HIPAA compliance added complexity.

## What Worked

- **Iterative deployment**: Start with a small pilot
- **Feedback loops**: Work closely with end users
- **Monitoring**: Catch issues before users report them

## Key Takeaway

Production is a different beast. Plan for it from the start of your research project.`,
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
    date: "2025-07-10",
    tags: ["Research", "MLOps", "Production"],
    readingTime: "7 min read",
  },
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
