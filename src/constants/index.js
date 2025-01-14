import {
  frontend,
  backend,
  api,
  uiux,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextjs,
  tailwind,
  nodejs,
  express,
  mongodb,
  git,
  figma,
  future,
  gsu,
  guimaras,
  tcs,
  gtip,
  netflux,
  engjap,
  threejs,
  blender,
  mysql,
  vscode,
  portfolio,
  thready
} from "../assets";

export const navLinks = [
  {
    id: "home",
    url: "/home",
  },
  {
    id: "about",
    title: "About",
    url: "/about",
  },
  {
    id: "work",
    title: "Work",
    url: "/work",
  },
  {
    id: "tech",
    title: "Tech",
    url: "/tech",
  },
  {
    id: "projects",
    title: "Project",
    url: "/projects",
  },
  {
    id: "contact",
    title: "Contact",
    url: "/contact",
  },
];

const services = [
  {
    title: "Web Development",
    icon: frontend,
  },
  {
    title: "API Development",
    icon: api,
  },
  {
    title: "Backend Development",
    icon: backend,
  },
  {
    title: "UI/UX Design",
    icon: uiux,
  },
];

const technologies = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Express",
    icon: express,
  },
  {
    name: "Github",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Blender",
    icon: blender,
  },
  {
    name: "VS Code",
    icon: vscode,
  },  
];

const experiences = [
  {
    id: 1,
    title: "Bachelors Degree in IT",
    company_name: "Guimaras State University",
    icon: gsu,
    iconBg: "#2e373e",
    date: "Jun 2016 - Aug 2020",
    points: [
      "Attended and graduated a 4 year studies in IT and completed a capstone project in which I am the Project Manager and UI designer.",
      "Collaborated with my fellow co-student to develop and implement our Capstone Thesis Project Guimaras Province Tourism Office web portal.",
      "Relevant coursework: Data Structures & Algorithms, Web Development, Database, OOP, Operating Systems, Computer Networks, Multimedia & Graphic Design."
    ],
  },
  { 
    id: 2,
    title: "IT Intern",
    company_name: "Guimaras Provincial Capitol",
    icon: guimaras,
    iconBg: "#2e373e",
    date: "Mar 2020 - May 2020",
    points: [
      "Maintaining web portal and database that uses MySQL. This includes designing, developing, and maintaining the web portal and ensuring that it is up-to-date, user-friendly, and accessible.",
      "Work alongside senior IT staff to learn and assist with their tasks and support the IT team in maintaining hardware, software, and other systems.",
      "Assist with troubleshooting issues and provide technical support. Organize and maintain IT resources.",
    ],
  },
  {
    id: 3,
    title: "BPO Stints",
    company_name: "Foundever,  TTec, Telus, HGS",
    icon: tcs,
    iconBg: "#2e373e",
    date: "Dec 2020 - April 2024",
    points: [
      "During this time I took a customer and tech support role in the following companies: HGS, Telus, TTec, and the most recent is Foundever.",
      "Worked on a critical role to revolutionize and elevate the customer service experience for our valued customers. Spearheading problem resolution.",
      "Participating in daily team scrums, reviews customer experience satisfaction and individual performances and provide feedbacks.",
    ],
  },
  {
    id: 4,
    title: "Frontend Software Engineer",
    company_name: "Euroland IR",
    icon: future,
    iconBg: "#2e373e",
    date: "Present",
    points: [
      "I provided technical support for web applications, utilizing HTML, CSS, JavaScript, and XML-templates to troubleshoot and resolve issues.",
      "Managed frontend bug tickets and resolved them in a timely manner. Worked with the team to develop new features and improve existing ones.",
      "Create and develop frontend components and features based on the UI/UX design and requirements.",
    ],
  },
  {
    id: 5,
    title: ["Frontend Developer", "API Developer", "Backend Developer", "UI/UX & Graphic Design", "Any Job opening?", "Hire me!"],
    company_name: "? ? ? ? ?",
    icon: future,
    iconBg: "#2e373e",
    date: "Future",
    points: [
      "You might be wondering why there is an empty space in this section, offcourse to have your company listed here so hire me.",
      "Kidding aside I am open for any opportunity related to my current skillset and qualifications.",
      "What I can do: Frontend Development, API Development, Backend and UI/UX Design. I can also do Graphics and visuals.",
      "Think we could work together? Hit me up.",
    ],
  },
];

const projects = [
  {
    name: "Portfolio",
    description:
      "Full-blown responsive portfolio website with a landing page and a contact page. Built with React, Framer Motion, Tailwind CSS and Vite. This portfolio project is made to showcase what I can do.",
    tags: [
      {
        name: "react",
        color: "orange-text-gradient",
      },
      {
        name: "framer",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "yellow-text-gradient",
      },
    ],
    img: portfolio,
    source_code_link: "https://github.com/Cedrix-code/cedricgalila-portfolio",
    site_link: "https://cedricgalila.netlify.app/",
  },
  {
    name: "Thready",
    description:
      "We know that 'Threads' have been an overnight success after it was launch by Meta, so I recreated a clone for it for me to explore how social media architecture works. From auth to webhooks & so on.",
    tags: [
      {
        name: "nextjs",
        color: "orange-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "monggodb",
        color: "yellow-text-gradient",
      },
    ],
    img: thready,
    source_code_link: "https://github.com/Cedrix-code/threads-clone",
    site_link: "https://threads-clone-theta.vercel.app/",
  },
  {
    name: "Netflux",
    description:
      "Simple side project to practice HTML, JavaScript, and CSS. Also implemented the use of API, specifically TMDb API to fetch movie datas. I learned different React hooks doing this project.",
    tags: [
      {
        name: "html",
        color: "orange-text-gradient",
      },
      { 
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "yellow-text-gradient",
      },
    ],
    img: netflux,
    source_code_link: "https://github.com/Cedrix-code",
    site_link: "https://netflux-react.netlify.app/",
  },
  {
    name: "Speech Translator",
    description:
      "Simple English to Japanese Speech Translator built with Python, Google Text-to-Speech, and Playsound. Worked on this simple side project to hone my skills and get a dip on other programming language.",
    tags: [
      {
        name: "python",
        color: "orange-text-gradient",
      },
      { 
        name: "gtts",
        color: "green-text-gradient",
      },
      {
        name: "playsound",
        color: "yellow-text-gradient",
      },
    ],
    img: engjap,
    source_code_link: "https://github.com/Cedrix-code/japanese-translate-python",
  },
  {
    name: "G-Tip",
    description:
      "A Web-based social media style platform name “G-TIP” that lets people share their travel moments in Guimaras Island. This was our capstone project that we proposed to Guimaras Tourism Office.",
    tags: [
      {
        name: "html",
        color: "orange-text-gradient",
      },
      { 
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "yellow-text-gradient",
      },
    ],
    img: gtip,
    source_code_link: "https://github.com/Cedrix-code",
  },
];

export { services, technologies, experiences, projects };