import {
  SiReact,
  SiRender,
  SiVercel,
  SiPostman,
  SiClaude,
  SiDeepseek,
} from "react-icons/si";

export interface StackItem {
  name: string;
  devicon?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export interface StackGroup {
  label: string;
  items: StackItem[];
}

export const stackGroups: StackGroup[] = [
  {
    label: "Frontend",
    items: [
      { name: "React Native", icon: SiReact },
      { name: "Next.js", devicon: "nextjs-plain" },
      { name: "JavaScript", devicon: "javascript-plain colored" },
      { name: "HTML", devicon: "html5-plain colored" },
      { name: "CSS", devicon: "css3-plain colored" },
      { name: "Tailwind CSS", devicon: "tailwindcss-plain colored" }
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js", devicon: "nodejs-plain colored" },
      { name: "Express.js", devicon: "express-original" },
    ],
  },
  {
    label: "Database",
    items: [
      { name: "MySQL", devicon: "mysql-plain colored" },
      { name: "PostgreSQL", devicon: "postgresql-plain colored" },
    ],
  },
  {
    label: "Cloud",
    items: [
      { name: "Vercel", icon: SiVercel },
      { name: "Render", icon: SiRender },
    ],
  },
  {
    label: "Tools",
    items: [
      { name: "Git", devicon: "git-plain colored" },
      { name: "GitHub", devicon: "github-original" },
      { name: "VS Code", devicon: "vscode-plain colored" },
      { name: "Postman", icon: SiPostman },
      { name: "Claude", icon: SiClaude},
      { name: "DeepSeek", icon: SiDeepseek},
    ],
  },
];