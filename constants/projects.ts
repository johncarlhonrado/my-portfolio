export interface Project {
  id: string;
  title: string;
  glyph: string;
  description: string;
  tech: string[];
  gradient: string;
  githubUrl: string;
  liveUrl: string;
  type: "web" | "mobile";
  screenshots: string[];
}

export const projects: Project[] = [
  {
    id: "wastewise",
    title: "WasteWise - Waste Management Information Application",
    glyph: "WasteWise",
    description:
      "A mobile application that helps citizen in maintaining proper waste management in the community. Has various features like complaint posting, post and waste collection tracker,  learning materials, notifications, and a helpful chatbot. The application also implements strict registration by checking your current location while registering using Geolocation API. Built with React Native for native development, Express.js, and PostgreSQL for the database",
    tech: ["React Native", "Express.js", "PostgreSQL"],
    gradient: "linear-gradient(135deg,#3B82F6,#1E3A8A)",
    githubUrl: "https://github.com/Jeysi17/WasteWise.git",
    liveUrl: "#",
    type: "mobile",
    screenshots: ["projects/wastewise/ww1.jpg",
      "projects/wastewise/ww2.jpg",
      "projects/wastewise/ww3.jpg",
      "projects/wastewise/ww4.jpg",
      "projects/wastewise/ww5.jpg",
      "projects/wastewise/ww6.jpg",
      "projects/wastewise/ww7.jpg",
      "projects/wastewise/ww8.jpg",
      "projects/wastewise/ww9.jpg",
      "projects/wastewise/ww10.jpg"
    ],
  },
  {
    id: "starkson",
    title: "Starkson Paper and Packaging — Centralized IT Support and Incident Reporting System",
    glyph: "Internship",
    description:
      "A web application that act as a standalone it support ticket management and also an incident reporting system for Starkson Paper and Packaging. Built using Next.js for the front-end and Express.js for the back-end while the database uses PostgreSQL.",
    tech: ["Next.js", "Express.js", "PostgreSQL"],
    gradient: "linear-gradient(135deg,#10B981,#064E3B)",
    githubUrl: "https://github.com/johncarlhonrado/Starkson-It-Support-and-Incident-Reporting.git",
    liveUrl: "#",
    type: "web",
    screenshots: []

  },
  {
    id: "digi-cog",
    title: "Digital Cog - Game Showcase Web Application",
    glyph: "Digi-Cog",
    description:
      "A web application that showcases different games while also implementing various features like discussion page, game listings, and many more. Built using HTML, CSS, JavaScript",
    tech: ["HTML", "CSS", "JavaScript", "MySQL"],
    gradient: "linear-gradient(135deg,#F59E0B,#7C2D12)",
    githubUrl: "https://github.com/Sephsuu/DigitalCog.git",
    liveUrl: "#",
    type: "web",
    screenshots: ["/projects/digi-cog/dg1.jpg", 
      "/projects/digi-cog/dg2.jpg", 
      "/projects/digi-cog/dg3.jpg", 
      "/projects/digi-cog/dg4.jpg", 
      "/projects/digi-cog/dg5.jpg", 
      "/projects/digi-cog/dg6.jpg", 
      "/projects/digi-cog/dg7.jpg", 
      "/projects/digi-cog/dg8.jpg", 
      "/projects/digi-cog/dg9.jpg"
    ],
  },
];

export const filterTags = ["all", "React Native", "Next.js", "Express.js", "PostgreSQL", "MySQL"];
