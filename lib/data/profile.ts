export interface Socials {
  github: string;
  linkedin: string;
  email: string;
}

export interface Profile {
  name: string;
  tagline: string;
  socials: Socials;
}

export const profile: Profile = {
  name: "Mahil",
  tagline:
    "Backend-Focused Full Stack Engineer — APIs, integrations, and systems that don't fall over under load",
  socials: {
    github: "https://github.com/mahil23",
    linkedin: "https://www.linkedin.com/in/mahil-assan-e/",
    email: "mahil.assan@gmail.com",
  },
};
