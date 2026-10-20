export interface Project {
  id: string;
  title: string;
  glyph: string;
  description: string;
  tech: string[];
  gradient: string;
  githubUrl: string;
  liveUrl: string;
  type: "web" | "mobile" | "automation";
  screenshots: string[];

  workflowJson?: string;

  problem?: string;
  howItWorks?: string;
  aiUsage?: string;
  integrations?: string[];
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
    screenshots: ["projects/starkson/ss1.jpg",
      "projects/starkson/ss2.jpg",
      "projects/starkson/ss3.jpg",
      "projects/starkson/ss4.jpg",
      "projects/starkson/ss5.jpg",
      "projects/starkson/ss6.jpg",
    ],

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
  {
  id: "gmail-automation",
  title: "Multi-Label Gmail to Google Sheets & Drive Automation",
  glyph: "n8n",
  description:
    "An n8n automation that processes labeled Gmail messages, records email information in Google Sheets, and automatically organizes email attachments in Google Drive using label, date, and sender-based folders.",
  tech: [
    "n8n",
    "Gmail",
    "Google Sheets",
    "Google Drive"
  ],
  gradient: "linear-gradient(135deg,#EA4335,#7C2D12)",
  githubUrl: "#",
  liveUrl: "#",
  type: "automation",
  screenshots: [
    "/projects/workflow1.jpg"
  ],
  workflowJson:
    "/workflows/Workflow 1_ Multi-Label Gmail to Google Sheets & Drive Automation.json",
  problem:
    "Manually checking labeled Gmail messages, recording email information, and organizing attachments in Google Drive is repetitive and can lead to inconsistent file organization or duplicate folders.",
  howItWorks:
    "The workflow periodically checks Gmail for labeled messages, identifies the applicable label, processes the email information, and records the required data in Google Sheets. If the email contains attachments, they are downloaded and organized in Google Drive using a structured Label → Date → Sender folder hierarchy while avoiding duplicate folders.",
  aiUsage:
    "No AI is required for the core workflow. The automation focuses on reliable email processing, label-based routing, structured data handling, attachment management, and duplicate folder prevention.",
  integrations: [
    "Gmail",
    "Google Sheets",
    "Google Drive"
  ]
},
{
  id: "telegram-receipt",
  title: "Telegram Receipt Processing & AI Data Extraction",
  glyph: "n8n",
  description:
    "An n8n automation that receives receipt photos through Telegram, uses Google Gemini to extract key receipt information, saves the original image to Google Drive, and records the extracted data in Google Sheets.",
  tech: [
    "n8n",
    "Telegram",
    "Google Gemini",
    "Google Drive",
    "Google Sheets"
  ],
  gradient: "linear-gradient(135deg,#4285F4,#1E3A8A)",
  githubUrl: "#",
  liveUrl: "#",
  type: "automation",
  screenshots: [
    "/projects/workflow2.jpg"
  ],
  workflowJson:
    "/workflows/Workflow 2_ Telegram Receipt Photo Processing.json",
  problem:
    "Manually transferring information from receipt photos into spreadsheets is repetitive and can introduce data-entry errors.",
  howItWorks:
    "A receipt photo is sent through Telegram. n8n receives the image, sends it to Google Gemini for structured extraction, saves the original receipt to Google Drive, and records the extracted information in Google Sheets.",
  aiUsage:
    "Google Gemini analyzes the receipt image and extracts structured information such as merchant name, total amount, and transaction date.",
  integrations: [
    "Telegram",
    "Google Gemini",
    "Google Drive",
    "Google Sheets"
  ]
}
];

export const filterTags = [
  "all",
  "React Native",
  "Next.js",
  "Express.js",
  "PostgreSQL",
  "MySQL",
  "n8n",
];
