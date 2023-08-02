import {
  frontend,
  backend,
  api,
  uiux,
  indev,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
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
    id: "tech",
    title: "Tech",
    url: "/tech",
  },
  {
    id: "work",
    title: "Work",
    url: "/work",
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
    title: "Web Developer",
    icon: frontend,
  },
  {
    title: "API Developer",
    icon: api,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
    icon: uiux,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
    description: "Here’s a fun fact about HTML: Did you know that the first version of HTML was created by Tim Berners-Lee in 1989 while he was working at CERN, the European Organization for Nuclear Research? He created it as a way to share information between scientists and researchers. Isn’t that cool? 😎",
  },
  {
    name: "CSS 3",
    icon: css,
    description: "Here’s a fun fact about CSS: Did you know that CSS stands for Cascading Style Sheets? It’s a style sheet language used to describe the look and formatting of a document written in HTML. The first version of CSS was released in 1996, and it has since become an essential part of web design, allowing developers to create beautiful and engaging websites. Isn’t that cool? 😎",
  },
  {
    name: "JavaScript",
    icon: javascript,
    description: "Here’s a fun fact about JavaScript: Did you know that JavaScript was created in just 10 days in May 1995 by Brendan Eich while he was working at Netscape Communications Corporation? Originally, it was called Mocha, then renamed to LiveScript, and finally to JavaScript. Despite its name, it has no relation to the Java programming language. Isn’t that cool? 😎",
  },

  {
    name: "React JS",
    icon: reactjs,
    description: "Here’s a fun fact about React: Did you know that React is a JavaScript library for building user interfaces? It was developed by Facebook and first released in 2013. One of the key features of React is its ability to efficiently update and render components when data changes, making it a popular choice for building fast and responsive web applications. Isn’t that cool? 😎",
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    description: "Here’s a fun fact about Tailwind CSS: Did you know that Tailwind CSS is a utility-first CSS framework for rapidly building custom designs? It was created by Adam Wathan, Jonathan Reinink, David Hemphill, and Steve Schoger and first released in 2017. Unlike traditional CSS frameworks that provide pre-designed components, Tailwind provides low-level utility classes that let you build completely custom designs without ever leaving your HTML. Isn’t that cool? 😎",
  },
  {
    name: "Node JS",
    icon: nodejs,
    description: " Here’s a fun fact about Node.js: Did you know that Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that executes JavaScript code outside a web browser? It was created by Ryan Dahl in 2009, and its development and maintenance are sponsored by the OpenJS Foundation. One of the key features of Node.js is its ability to handle asynchronous I/O operations, making it a popular choice for building fast and scalable network applications. Isn’t that cool? 😎",
  },
  {
    name: "MySQL",
    icon: mysql,
    description: "Here’s a fun fact about MySQL: Did you know that MySQL is an open-source relational database management system based on SQL (Structured Query Language)? It was created by the Swedish founders Michael Widenius and David Axmark in 1995, and its development and maintenance are now sponsored by Oracle Corporation. MySQL is one of the most popular database systems in the world, used by millions of websites and applications for storing, organizing, and retrieving data. Isn’t that cool? 😎",
  },
  {
    name: "MongoDB",
    icon: mongodb,
    description: "Here’s a fun fact about MongoDB: Did you know that MongoDB is a cross-platform document-oriented database program? It was developed by MongoDB Inc. and first released in 2009. Unlike traditional relational databases, MongoDB uses JSON-like documents with optional schemas, making it a popular choice for building modern web applications. Isn’t that cool? 😎",
  },
  {
    name: "Three JS",
    icon: threejs,
    description: "Here’s a fun fact about Three.js: Did you know that Three.js is a cross-browser JavaScript library and application programming interface (API) used to create and display animated 3D computer graphics in a web browser? It was created by Ricardo Cabello (also known as Mr.doob) and first released in 2010. Three.js makes it easy to create complex 3D scenes and animations using WebGL, without having to write low-level WebGL code. Isn’t that cool? 😎",
  },
  {
    name: "Git",
    icon: git,
    description: "Here’s a fun fact about Git: Did you know that Git is a distributed version control system for tracking changes in source code during software development? It was created by Linus Torvalds, the creator of the Linux operating system, in 2005. Git is designed to handle everything from small to very large projects with speed and efficiency, making it a popular choice for developers all over the world. Isn’t that cool? 😎",
  },
  {
    name: "Figma",
    icon: figma,
    description: "Here’s a fun fact about Figma: Did you know that Figma is a vector graphics editor and prototyping tool that is primarily web-based, with additional offline features enabled by desktop applications for macOS and Windows? It was founded in 2012 by Dylan Field and Evan Wallace. Figma has become popular among designers due to its easy-to-use interface, powerful design tools, and real-time collaboration features. Isn’t that cool? 😎",
  },
  {
    name: "Blender",
    icon: blender,
    description: "Here’s a fun fact about Blender: Did you know that Blender is a free and open-source 3D creation suite? It was first developed by the Dutch animation studio NeoGeo and Ton Roosendaal in 1995. Blender supports the entirety of the 3D pipeline—modeling, rigging, animation, simulation, rendering, compositing and motion tracking, video editing and 2D animation pipeline. It has become popular among artists and designers due to its powerful features and active community. Isn’t that cool? 😎",
  },
  {
    name: "VS Code",
    icon: vscode,
    description: "Here’s a fun fact about Visual Studio Code (VS Code): Did you know that VS Code is a free source-code editor made by Microsoft for Windows, Linux, and macOS? It was first released in 2015 and has since become one of the most popular code editors among developers. VS Code includes features such as debugging, intelligent code completion, snippets, and code refactoring, making it a powerful tool for writing and editing code. Isn’t that cool? 😎",
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
    title: "BPM/BPO Role",
    company_name: "TCS,  TTec, Telus, HGS, WNS",
    icon: tcs,
    iconBg: "#2e373e",
    date: "Dec 2020 - May 2023",
    points: [
      "During this time I took a customer and tech support role in the following companies: WNS, HGS, Telus, TTec, and the most recent is Tata(TCS) an IT-BPM company.",
      "Worked on a critical role to revolutionize and elevate the customer service experience for our valued customers. Spearheading problem resolution.",
      "Participating in daily team scrums, reviews customer experience satisfaction and individual performances and provide feedbacks.",
    ],
  },
  {
    id: 4,
    title: ["Frontend Developer", "API & Backend", "UI/UX Design & Graphics", "Any Job opening?", "Hire me!"],
    company_name: "? ? ? ? ?",
    icon: future,
    iconBg: "#2e373e",
    date: "Present",
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
        color: "pink-text-gradient",
      },
    ],
    img: portfolio,
    source_code_link: "https://github.com/Cedrix-code/cedricgalila-portfolio",
    site_link: "https://cedricgalila.netlify.app/",
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
        color: "pink-text-gradient",
      },
    ],
    img: gtip,
    source_code_link: "https://github.com/Cedrix-code",
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
        color: "pink-text-gradient",
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
        color: "pink-text-gradient",
      },
    ],
    img: engjap,
    source_code_link: "https://github.com/Cedrix-code/japanese-translate-python",
  },
  {
    name: "in Development",
    description:
      "Upcoming projects are in the works. The developer is busy coding new ideas. Come back soon to check out new projects. < coffee eat code code code sleep(zzzZZ) repeat >",
    tags: [
      {
        name: "stay",
        color: "orange-text-gradient",
      },
      {

        name: "tuned",
        color: "green-text-gradient",
      },
      {
        name: "for more",
        color: "pink-text-gradient",
      },
    ],
    img: {indev},
    source_code_link: "https://github.com/Cedrix-code",
  },
];

export { services, technologies, experiences, projects };