import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  django,
  python,
  nuxt,
  sql,
  flask,
  vuejs,
  meta,
  shopify,
  carrent,
  jobit,
  tripguide,
  paradoxai,
  ew
  // starbucks,
  // tesla,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Python",
    icon: backend,
  },
  {
    title: "Javascript",
    icon: mobile,
  },
  {
    title: "Typescript",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Nuxt",
    icon: nuxt,
  },
  {
    name: "Flask",
    icon: flask,
  },
  {
    name: "Vuejs",
    icon: vuejs,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web developer",
    company_name: "Edge-work software",
    icon: ew,
    iconBg: "#383E56",
    date: "March 2021 - March 2022",
    points: [
      "Developing and maintaining web applications using React.js and Flask and other related technologies.",
      "Analyst requirement to build database.",
      "Collaborating with cross-functional teams including BA, product managers, and other developers to create high-quality products.",
    ],
  },
  {
    title: "Full-stack Developer",
    company_name: "Paradox Ai",
    icon: paradoxai,
    iconBg: "#E6DEDD",
    date: "March 2022 - Now",
    points: [
      "Developing and maintaining web applications using Django, Vuejs and other related technologies.",
      "Implement micro-service and integrate into existing large application",
      "Solve application performance issues",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Project Manager",
    company_name: "Google",
    icon: shopify,
    iconBg: "#383E56",
    date: "In The Future",
    points: [
      "I'm not hired here yet, so I don't know what to do here.",
    ],
  },
  {
    title: "Solution Architecture",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "In The Future",
    points: [
      "I'm not hired here yet, so I don't know what to do here.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Coming soon",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    tags: [
      {
        name: "Nuxt",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Coming soon",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Javscript",
        color: "green-text-gradient",
      },
      {
        name: "Elasticsearch",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    tags: [
      {
        name: "Nuxt",
        color: "green-text-gradient",
      },
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
