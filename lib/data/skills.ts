export interface SkillGroup {
  category: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "Python",
      "Flask",
      "Django REST Framework",
      "REST API design",
    ],
  },
  {
    category: "Databases",
    items: ["MongoDB", "MySQL"],
  },
  {
    category: "Tools & Cloud",
    items: ["Git", "GitHub", "Azure DevOps CI/CD", "JWT Auth"],
  },
  {
    category: "AI/ML & Integrations",
    items: [
      "GPT-4o integration",
      "Map/Geolocation APIs",
      "Third-party API integration",
    ],
  },
];
