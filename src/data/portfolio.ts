// all portfolio data in one place
// types, projects, skills, timeline and personal info

// what a project looks like
export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tag: string;
  tech: string[];
  image?: string;
  gradient: string;
  link?: string;
  github?: string;
  year: string;
  role: string;
  highlights: string[];
}

// skill card shape
export interface Skill {
  icon: string;
  name: string;
  description: string;
  technologies: string[];
}

// timeline entries for the about page
export interface TimelineEntry {
  year: string;
  title: string;
  organization: string;
  description: string;
  type: "education" | "work";
}

// --- projects ---
// only showing a few for now, will add more as i finish them

export const projects: Project[] = [
  {
    slug: "moi-mon-cerveau",
    title: "Moi Mon Cerveau",
    description:
      "Redesigning a research association's website and rebuilding their mental health quiz. Still ongoing.",
    longDescription:
      "i'm working on a full redesign for a research association that focuses on mental health. the biggest part is rebuilding their self-assessment quiz with modern tech while keeping it accessible and private. trying to make medical info feel less intimidating with a clean, calm design.",
    tag: "Web App",
    tech: ["Sass", "JSON", "JavaScript"],
    gradient: "linear-gradient(135deg, #6b21a8 0%, #4c1d95 100%)",
    year: "2025",
    role: "Full-Stack Developer",
    highlights: [
      "redesigned the whole UI to be more accessible",
      "built the mental health quiz with dynamic scoring",
      "made it responsive for all screen sizes",
      "used Sass to keep the stylesheets organized",
    ],
  },
  {
    slug: "jazz-in-marciac",
    title: "Jazz in Marciac",
    description:
      "School project at IIM where I was the dev on a team redesigning the Jazz in Marciac festival site. We won first place.",
    longDescription:
      "team project at IIM where we had to redesign the Jazz in Marciac festival website. i was the main dev, so i had to take the designers' mockups and actually build them. it was pretty intense with the deadline but we pulled it off and won first place which was cool.",
    tag: "Website Design",
    tech: ["HTML5", "CSS3", "JavaScript"],
    gradient: "linear-gradient(135deg, #1e3a5f 0%, #4a90d9 100%)",
    year: "2025",
    role: "Lead Developer",
    highlights: [
      "won first place out of all the teams",
      "added smooth scroll animations and transitions",
      "built the whole layout from Figma mockups",
      "worked with designers and PMs on the team",
    ],
  },
  {
    slug: "3d-airpods",
    title: "3D AirPods",
    description:
      "Built a 3D AirPods model and interactive landing page inspired by Apple's product pages. Wanted to recreate that smooth, immersive feel.",
    longDescription:
      "i really like apple's product pages so i tried to make something similar. modeled airpods in 3D and built a landing page around them that reacts to scrolling and mouse movement. the goal was to get that premium apple feel working in a browser.",
    tag: "Solo Project",
    tech: ["Three.js", "Spline", "React"],
    gradient: "linear-gradient(135deg, #2d1b4e 0%, #8b5cf6 100%)",
    year: "2024",
    role: "Developer & 3D Artist",
    highlights: [
      "modeled the airpods in Spline",
      "used Three.js for realtime 3D in the browser",
      "scroll-triggered animations for the immersive effect",
      "had to optimize the 3D stuff a lot for performance",
    ],
  },
];

// --- skills ---
// the stuff i actually know how to use

export const skills: Skill[] = [
  {
    icon: "💻",
    name: "Web Development",
    description: "building websites and web apps",
    technologies: ["React", "Next.js", "TypeScript", "Node.js"],
  },
  {
    icon: "🎨",
    name: "UI/UX Design",
    description: "making interfaces that look good and make sense",
    technologies: ["Figma", "Adobe XD", "Prototyping", "Design Systems"],
  },
  {
    icon: "📱",
    name: "Responsive Design",
    description: "making layouts work on all screen sizes",
    technologies: ["CSS Grid", "Flexbox", "Tailwind CSS", "Media Queries"],
  },
  {
    icon: "⚡",
    name: "Performance",
    description: "keeping things fast and smooth",
    technologies: ["Lighthouse", "Core Web Vitals", "Lazy Loading", "Caching"],
  },
  {
    icon: "🚀",
    name: "Modern Frameworks",
    description: "using the latest tools out there",
    technologies: ["Next.js",  "Three.js", "Sass"],
  },
  {
    icon: "✨",
    name: "Animations",
    description: "adding motion and life to interfaces",
    technologies: ["CSS Animations", "Framer Motion", "GSAP", "Spline"],
  },
];

// --- timeline ---
// school + work stuff in order

export const timeline: TimelineEntry[] = [
  {
    year: "2025 - Present",
    title: "Master's in Coding & Digital Innovation",
    organization: "IIM Digital School",
    description:
      "doing my master's right now, focused on web dev, software architecture and digital stuff.",
    type: "education",
  },
  {
    year: "2023 - 2025",
    title: "Bachelor in Web Development",
    organization: "IIM Digital School",
    description:
      "learned web dev, UI/UX and project management. did a bunch of team projects and hackathons.",
    type: "education",
  },
  {
    year: "2025",
    title: "Web Developer ",
    organization: "various school projects",
    description:
      "i made different websites and web apps for school projects, with different languages and frameworks and learning how to use them in different ways",
    type: "education",
  },
  {
    year: "2024",
    title: "Research Association Website",
    organization: "Moi Mon Cerveau",
    description:
      "i was redesigning their website and building out the mental health quiz .",
    type: "work",
  },
];

// --- personal info ---
// basic info about me, shows up in a bunch of places

export const personalInfo = {
  name: "Xavier Carrier",
  title: "Web Developer",
  email: "xavier.carrier16@gmail.com",
  bio: "hi, i'm xavier carrier. second year at iim, doing my master's in coding. i work on projects that mix tech and creativity. lived in different countries which kinda shaped how i think about problem-solving and design.",
  bioExtended:
    "i focus on building things that work well and look good. clean code, thoughtful design, that's what i'm about. from interactive 3D stuff to full-stack web apps, i like trying to push what you can do on the web.",
  socialLinks: {
    email: "mailto:xavier.carrier16@gmail.com",
    linkedin: "https://www.linkedin.com/in/xavier-carrier/",
    github: "https://github.com/xavier-16th",
    
  },
};
