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
  bpo,
  euroland,
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
      "Survived 4 years of IT studies and even managed to graduate! Led a capstone project as the Project Manager and UI designer. No big deal.",
      "Teamed up with fellow students to create a web portal for the Guimaras Province Tourism Office. We made it happen!",
      "Relevant coursework: Data Structures & Algorithms, Web Development, Database, OOP, Operating Systems, Computer Networks, Multimedia & Graphic Design. Basically, I learned everything.",
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
      "Kept the web portal and database running smoothly with MySQL. Designed, developed, and maintained the web portal like a pro.",
      "Worked alongside senior IT staff, learning the ropes and assisting with their tasks. Supported the IT team in maintaining hardware, software, and other systems. Basically, I was their right-hand person.",
      "Troubleshot issues and provided technical support. Organized and maintained IT resources. I was the go-to problem solver.",
    ],
  },
  {
    id: 3,
    title: "BPO/IT Helpdesk Stints",
    company_name: "Foundever, TTec, Telus, HGS",
    icon: bpo,
    iconBg: "#2e373e",
    date: "Dec 2020 - April 2024",
    points: [
      "Took on customer and tech support roles at HGS, Telus, TTec, and Foundever. Revolutionized and elevated the customer service experience. No pressure.",
      "Spearheaded problem resolution and participated in daily team scrums. Reviewed customer experience satisfaction and individual performances. Gave feedback like a boss.",
    ],
  },
  {
    id: 4,
    title: "Frontend Software Engineer",
    company_name: "Euroland IR",
    icon: euroland,
    iconBg: "#2e373e",
    date: "Present",
    points: [
      "Provided technical support for web applications using HTML, CSS, JavaScript, and XML-templates. Troubleshot and resolved issues like a champ.",
      "Managed frontend bug tickets and resolved them in a timely manner. Developed new features and improved existing ones with the team. Teamwork makes the dream work.",
      "Created and developed frontend components and features based on UI/UX design and requirements. Made things look pretty and work well.",
    ],
  },
  {
    id: 5,
    title: ["Frontend Developer", "Wordpress Developer", "Backend Developer", "Virtual Assistant", "Any Job opening?", "Hire me!"],
    company_name: "? ? ? ? ?",
    icon: future,
    iconBg: "#2e373e",
    date: "Future",
    points: [
      "Wondering why there's an empty space here? It's for your company! Hire me, and let's make magic happen.",
      "Jokes aside, I'm open to any opportunity related to my skillset and qualifications. Let's chat!",
      "What I can do: Frontend Development, API Development, Backend and Virtual assistance. I can also create stunning graphics and visuals.",
      "Think we could work together? Hit me up. Let's make it happen!",
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