export interface Project {
  title: string;
  oneLiner: string;
  role: string;
  stack: string[];
  outcome: string;
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "ONROAD",
    oneLiner:
      "Full-stack backend for a real-time breakdown assistance and EV charging platform, built as Bachelor's thesis",
    role: "Backend lead, team of four",
    stack: [
      "Django REST Framework",
      "MySQL",
      "JWT",
      "Row-level locking",
      "Haversine geolocation matching",
    ],
    outcome: "Load tested to 50 concurrent users with zero booking-race failures",
    githubUrl: "https://github.com/mahil23/ev-breakdown-chain",
    featured: true,
  },
  {
    title: "Water Service Station Finder",
    oneLiner:
      "Locates nearby water service stations by city name or live location, using map API integration",
    role: "Full-stack developer",
    stack: ["JavaScript", "Node.js", "Map API", "Geolocation"],
    outcome: "Fully working search by entered city or current location",
    githubUrl: "https://github.com/mahil23/water-station",
    featured: true,
  },
  {
    title: "PartFinderGo",
    oneLiner:
      "Marketplace connecting buyers to spare parts sellers with AI-assisted matching",
    role: "Backend developer",
    stack: [
      "JavaScript",
      "Node.js",
      "MySQL",
      "GPT-4o",
      "Geospatial recommendation engine",
    ],
    outcome: "AI-driven part matching with location-aware ranking",
    githubUrl: "",
    featured: false,
  },
  {
    title: "gradual_push",
    oneLiner:
      "Python tool to automate gradual, realistic publishing of local projects to GitHub",
    role: "Sole developer",
    stack: ["Python", "GitHub API"],
    outcome: "Automated commit-history generation for local project migration",
    githubUrl: "",
    featured: false,
  },
];
