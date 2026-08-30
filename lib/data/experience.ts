export interface ExperienceRole {
  title: string;
  duration: string;
  type: "internship" | "full-time";
  highlights: string[];
}

export interface Experience {
  company: string;
  totalDuration: string;
  roles: ExperienceRole[];
}

export const experience: Experience[] = [
  {
    company: "Codely.AI",
    totalDuration: "Jul 2025 – Mar 2026",
    roles: [
      {
        title: "Full Stack Developer",
        duration: "Jan 2026 – Mar 2026",
        type: "full-time",
        highlights: [
          "Designed and maintained front-end and back-end components of production web applications",
          "Built responsive UIs and developed APIs, integrated databases",
          "Collaborated with cross-functional teams on scalable, efficient software solutions",
          "Received Award of Excellence within first 90 days",
        ],
      },
      {
        title: "MERN Stack Intern",
        duration: "Jul 2025 – Dec 2025",
        type: "internship",
        highlights: [
          "Completed structured MERN stack program (MongoDB, Express.js, React.js, Node.js)",
          "Built RESTful APIs, server-side routing, and NoSQL schema design",
          "Delivered a capstone MERN application with Azure DevOps CI/CD deployment",
        ],
      },
    ],
  },
];
