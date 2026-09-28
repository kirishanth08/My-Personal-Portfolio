/**
 * PORTFOLIO DATA CONFIGURATION
 * -------------------------------------------------------------
 * Hey Kirishanth! You can easily customize any of your details here.
 * You don't need to touch complex HTML - just update the text and links below!
 */

const portfolioData = {
  // Personal & Hero Info
  profile: {
    name: "Kirishanth",
    surname: "", // Can add full name here if desired
    title: "Software Developer",
    status: "Available for new opportunities",
    location: "Global / Remote",
    timezone: "Asia/Colombo (UTC +5:30)",
    bio: "Passionate Software Developer with an eye for high-performance architecture, elegant user interfaces, and robust full-stack engineering. Transforming complex problems into intuitive, scalable digital solutions.",
    roles: [
      "Software Developer",
      "Full-Stack Engineer",
      "Backend & Database Enthusiast",
      "Creative Problem Solver"
    ],
    resumeUrl: "#", // Replace with your resume PDF link or path
    socials: {
      github: "https://github.com/kirishanth08",
      linkedin: "https://www.linkedin.com/in/kirishanth-g-s/",
      email: "kirishanth0706@gmail.com"
    }
  },

  // Key Statistics
  stats: [
    { value: "1+", label: "Years Experience" },
    { value: "15+", label: "Projects Completed" },
    { value: "10+", label: "Tech Stacks Mastered" },
    { value: "99.9%", label: "Quality & Delivery Focus" }
  ],

  // Core Strengths & Philosophy
  principles: [
    {
      icon: "⚡",
      title: "Performance First",
      description: "Writing lightweight, optimized code with lightning-fast load times and silky smooth 60fps animations."
    },
    {
      icon: "🛡️",
      title: "Clean Architecture",
      description: "Building scalable, maintainable systems using modern architectural patterns, strict types, and robust testing."
    },
    {
      icon: "🎨",
      title: "Intuitive UI/UX",
      description: "Crafting beautiful interfaces with responsive layouts, accessible elements, and delightful micro-interactions."
    },
    {
      icon: "🚀",
      title: "Continuous Growth",
      description: "Constantly exploring cutting-edge technologies, AI tooling, and cloud paradigms to stay ahead of the curve."
    }
  ],

  // Technical Skills Matrix
  skills: {
    frontend: [
      { name: "JavaScript (ES6+)", level: 92, icon: "js" },
      { name: "TypeScript", level: 88, icon: "ts" },
      { name: "React.js / Next.js", level: 90, icon: "react" },
      { name: "HTML5 & Modern CSS3", level: 95, icon: "html" },
      { name: "Tailwind & Glassmorphism", level: 85, icon: "css" },
      { name: "Vue.js", level: 75, icon: "vue" }
    ],
    backend: [
      { name: "Node.js & Express", level: 92, icon: "node" },
      { name: "Python / FastAPI", level: 85, icon: "python" },
      { name: "RESTful & GraphQL APIs", level: 90, icon: "api" },
      { name: "Authentication & Security (JWT, OAuth)", level: 88, icon: "auth" },
      { name: "Microservices Architecture", level: 82, icon: "microservices" },
      { name: "WebSockets & Real-Time Sync", level: 86, icon: "socket" }
    ],
    database: [
      { name: "PostgreSQL", level: 90, icon: "postgresql" },
      { name: "MySQL", level: 88, icon: "mysql" },
      { name: "MongoDB", level: 86, icon: "mongodb" },
      { name: "Redis & In-Memory Caching", level: 84, icon: "redis" },
      { name: "Schema Design & Indexing", level: 88, icon: "schema" },
      { name: "Prisma & Mongoose ORMs", level: 85, icon: "orm" }
    ]
  },

  // Featured Real-World Projects
  projects: [
    {
      id: "asterra",
      title: "Asterra Legal Document Attestation Portal",
      category: "fullstack",
      categoryLabel: "Full-Stack & LegalTech",
      image: "assets/images/asterra.jpg",
      summary: "Comprehensive document notarization and apostille platform with automated verification intake, multi-stage legal workflows, and administrative review dashboard.",
      description: "Architected a full legal document attestation lifecycle. Features dynamic service selection (affidavits, power of attorney, embassy legalization), multi-step intake validation, live status tracking, and a dedicated admin portal for document officers.",
      tags: ["JavaScript (ES6)", "Admin Dashboard", "Attestation Workflows", "Dynamic Forms", "Responsive UI"],
      liveUrl: "https://asterra-three.vercel.app/",
      featured: true,
      metrics: "Multi-stage verification • Complete admin portal"
    },
    {
      id: "vetcare",
      title: "VetCare Pro Hospital Platform",
      category: "fullstack",
      categoryLabel: "Healthcare & Full-Stack",
      image: "assets/images/vetcare.jpg",
      summary: "Compassionate veterinary hospital platform featuring online pet appointment scheduling, medical history tracking, billing records, and dual RTL/LTR internationalization.",
      description: "Designed a patient-centered veterinary web system with comprehensive booking engines, patient appointment management, emergency triage workflows, billing archives, and bi-directional layout alignment supporting English and Arabic (RTL).",
      tags: ["JavaScript", "Appointment System", "Patient Portal", "RTL/LTR Support", "CSS Glassmorphism"],
      liveUrl: "https://pet-hospital-three.vercel.app/",
      featured: true,
      metrics: "100% form validation • Dual RTL/LTR localization"
    },
    {
      id: "sonicdrop",
      title: "SonicDrop Live Audio & DJ Service",
      category: "web",
      categoryLabel: "Interactive & Media UI",
      image: "assets/images/sonicdrop.jpg",
      summary: "High-energy live event audio and DJ production portal featuring sound package builders, booking fee calculators, and celebration FX showcase.",
      description: "Crafted an immersive event audio production platform. Includes interactive sound equipment packages, booking inquiry calculator, live celebration FX showcase, and customer testimonials for festivals, weddings, and club events.",
      tags: ["JavaScript (ES6)", "Audio Production UI", "Booking Flow", "Interactive Showcase", "Modern CSS"],
      liveUrl: "https://dj-rental-xi.vercel.app/",
      featured: true,
      metrics: "Interactive package builder • Rich multimedia UI"
    },
    {
      id: "auravisa",
      title: "AuraVisa Global Immigration & Visa Portal",
      category: "fullstack",
      categoryLabel: "Full-Stack & LegalTech",
      image: "assets/images/auravisa.jpg",
      summary: "Global visa consultancy and immigration lifecycle portal featuring interactive visa eligibility assessments, multi-country destination roadmaps, client case tracking, and consultation booking.",
      description: "Engineered a full-featured international visa and immigration platform. Features dynamic visa category assessment (work, study, permanent residency, business), streamlined application intake forms, country destination guides, and seamless consultation appointment booking.",
      tags: ["JavaScript (ES6)", "Immigration Tech", "Eligibility Calculator", "Interactive UI", "Dynamic Workflows"],
      liveUrl: "https://aura-visa.vercel.app/",
      featured: true,
      metrics: "Multi-category visa intake • Real-time status tracking"
    },
    {
      id: "lexvanguard",
      title: "LexVanguard IP & Patent Consultancy",
      category: "fullstack",
      categoryLabel: "LegalTech & IP Systems",
      image: "assets/images/lexvanguard.jpg",
      summary: "Enterprise intellectual property consultancy portal facilitating trademark registrations, patent search, copyright defense, and consultative legal advisory.",
      description: "Engineered a streamlined legal filing intake platform. Features trademark classification browsing, consultation booking, multi-step filing wizards, and comprehensive IP resource documentation.",
      tags: ["JavaScript", "LegalTech", "Document Intake", "Interactive Forms", "Enterprise CSS"],
      liveUrl: "https://lex-vanguard.vercel.app/",
      featured: true,
      metrics: "Comprehensive IP workflows • Enterprise UX"
    },
    {
      id: "kaimartialarts",
      title: "KAI Martial Arts Academy",
      category: "web",
      categoryLabel: "Sports & Fitness UI",
      image: "assets/images/kaimartialarts.jpg",
      summary: "Martial arts academy portal with interactive weekly class schedules, belt progression tracking, trial class booking, and multi-discipline curriculum showcase.",
      description: "Built an engaging academy hub with interactive class timetables (Karate, Taekwondo, Self-Defense), instructor profiles, trial class reservation system, and belt curriculum overviews.",
      tags: ["JavaScript", "Interactive Timetable", "Class Booking", "Mobile First", "CSS Grid"],
      liveUrl: "https://kai-three-swart.vercel.app/",
      featured: true,
      metrics: "Instant trial booking • Dynamic schedule engine"
    }
  ],

  // Work Experience & Milestones (1 Year 3 Months Experience)
  experience: [
    {
      period: "Nov 2025 - Present",
      role: "Software Developer",
      company: "Full-Stack Web & Client Solutions",
      location: "Remote / Hybrid",
      description: "Developing robust full-stack web applications, database architecture, and high-performance customer portals.",
      highlights: [
        "Architected scalable RESTful APIs and optimized database schemas across PostgreSQL and MySQL.",
        "Built responsive client portals, service booking workflows, and dynamic administrative dashboards.",
        "Engineered accessible, cross-browser interfaces with clean modern CSS, glassmorphism, and dual RTL/LTR internationalization."
      ]
    },
    {
      period: "Jun 2025 - Oct 2025",
      role: "Junior Web Developer",
      company: "Digital Solutions & Web Systems",
      location: "Remote",
      description: "Focused on frontend UI development, component architecture, API integrations, and code optimization.",
      highlights: [
        "Developed modular, reusable UI components using Vanilla JavaScript (ES6+) and modern HTML5/CSS3.",
        "Integrated client-side state handling and form validation routines ensuring zero-error submissions.",
        "Collaborated on responsive design testing and performance tuning, improving Core Web Vitals scores."
      ]
    }
  ],

  // Education & Certifications
  education: [
    {
      degree: "Bachelor of Science in Computer Science / IT",
      institution: "University Institute of Technology",
      year: "2021 - 2025",
      details: "Focused on Software Engineering, Data Structures & Algorithms, Distributed Systems, and Database Management."
    },
    {
      degree: "Full Stack Software Engineering Certification",
      institution: "Professional Tech Academy",
      year: "2025",
      details: "Comprehensive specialization covering Modern JavaScript, React, Node.js, and Cloud Infrastructure."
    }
  ]
};
