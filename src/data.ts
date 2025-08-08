import { BtnListType, ProjectListType } from "./types";

export const projectsData: ProjectListType[] = [
  {
    id: 1,
    name: "GoodBreach",
    subHeading: "An ui /ux design project for react native",
    description:
      "Goodbreach is a sleek React Native app with a vibrant splash screen, secure login, and dynamic home screen. Powered by AsyncStorage, it delivers a fast, user-friendly experience with seamless data persistence.",
    demoLink: "#",
    sourceLink: "https://github.com/umang9720/demo-goodbreach",
    techStack: ["React Native", "JavaScript", "Git"],
  },
  {
    id: 2,
    name: "Imaginary Ink",
    subHeading: "Frontend design made with Next js",
    description:
      "Imaginary Ink is a captivating React Native app that transforms your ideas into stunning visuals with an intuitive splash screen, secure login, and dynamic home screen. Despite its powerful frontend, built to generate text-to-image and 3D model outputs, the app is currently facing backend issues with AsyncStorage, impacting seamless data persistence and retrieval.",
    demoLink: "https://imaginaryink.netlify.app/",
    sourceLink: "https://github.com/umang9720/Imaginary-Ink-reloaded",
    techStack: [
      "Next.js",
      "Typescript",
      "Shadcn",
      "Git",
    ],
  },
  {
    id: 3,
    name: "Buy me a Coffee",
    subHeading: "A Fund raiser for creators",
    description:
      "Buy Me a Coffee is a Next.js-powered web app, inspired by Patreon, featuring a sleek splash screen, secure login, and dynamic home page to support creators. With Razorpay integration, it offers seamless, secure one-time or recurring payments for fans to back their favorite creators.",
    demoLink: "https://buy-me-a-latte.netlify.app/",
    sourceLink: "https://github.com/umang9720/Buy-me-a-coffee",
    techStack: ["Next js", "Javascript", "Mongo db", "Razorpay"],
  },
  {
    id: 4,
    name: "Cloth Brand",
    subHeading: "React + Tailwind Product Display UI",
    description:
      "A modern and responsive cloth brand listing page built with React and Tailwind CSS. This project showcases products in a clean grid layout, with support for styling via Tailwind and fast bundling using Vite.",
    demoLink: "/",
    sourceLink: "https://github.com/umang9720/clothing-brand",
    techStack: ["React", "Tailwind CSS", "Vite", "JavaScript", "ESLint"],
  },
  {
    id: 5,
    name: "Autoreply Bot",
    subHeading: "A bot that auto replies to messages",
    description:
      "A bot that auto replies to messages . This project uses Python and Open AI to create a simple chatbot that responds to user input based on thier chat conversion.",
    demoLink: "/",
    sourceLink: "https://github.com/umang9720/clothing-brand",
    techStack: ["Python", "Open AI", "Git"],
  },
  {
    id: 6,
    name: "Imaginary Ink",
    subHeading: "Focused on generating high-quality visuals using AI and user-driven feedback.",
    description:"Developed/Utilized a generative AI tool that leverages large-scale user preference data to synthesize high-quality 2D and 3D images from input images. The system integrates deep learning models with user feedback loops to improve visual fidelity, style alignment, and realism over time.",
    demoLink: "/",
    sourceLink: "/",
    techStack: [
      "Next.js",
      "Typescript",
      "Shadcn",
      "Git",
    "Python"
    ],
  },
];

export const BtnList: BtnListType[] = [
  // {
  //   label: "Blog",
  //   link: "/",
  //   icon: "blog",
  //   newTab: true,
  // },
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
  { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  {
    label: "Github",
    link: "https://github.com/umang9720",
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/umang-garg-980320208/",
    icon: "linkedin",
    newTab: true,
  },
  // {
  //   label: "X",
  //   link: "/",
  //   icon: "twitter",
  //   newTab: true,
  // },
  {
    label: "Resume",
    link: "Umang Resume.pdf",
    icon: "resume",
    newTab: true,
  },
];
