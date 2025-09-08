import projectOne from "@/images/projectOne.png";
import projectTwo from "@/images/projectTwo.png";
import projectThree from "@/images/projectThree.png";

export const NavbarData = [
  { title: "Home", href: "/" },
  { title: "Services", href: "/services" },
  { title: "Resume", href: "/resume" },
  { title: "Work", href: "/work" },
  { title: "Contact", href: "/contact" },
];

export const statsData = [
  { num: 2, text: "years of experience" },
  { num: 30, text: "completed projects" },
  { num: 8, text: "Technologies Expert" },
  { num: 607, text: "Code commits" },
];

export const servicesData = [
  {
    _id: "01",
    title: "Web Development",
    description:
      "Building responsive and user-friendly websites using Next.js, React, and TypeScript for modern businesses.",
    href: "",
  },
  {
    _id: "02",
    title: "API Development",
    description:
      "Creating secure and scalable RESTful APIs with Node.js and Express.js to connect your applications seamlessly.",
    href: "",
  },
  {
    _id: "03",
    title: "Database Management",
    description:
      "Designing and managing efficient MongoDB databases with optimized schemas for performance and scalability.",
    href: "",
  },
  {
    _id: "04",
    title: "Frontend Engineering",
    description:
      "Developing clean, interactive, and reusable UI components with React, Next.js, and Tailwind CSS.",
    href: "",
  },
];

export const tabContent = {
  experience: {
    title: "Professional Experience",
    items: [
      {
        role: "Full Jacquard Operator",
        company: "Beximco",
        period: "2022 - 2025",
        description:
          "Operated and maintained Jacquard machines to ensure efficient textile production. Gained hands-on experience in industrial workflow, attention to detail, and meeting production deadlines.",
        highlights: [
          "Machine Operation",
          "Quality Control",
          "Team Collaboration",
        ],
      },
      {
        role: "Salesman",
        company: "Tasty Treat",
        period: "2021 - 2022",
        description:
          "Worked in a customer-facing role, managing sales and assisting customers with product choices. Developed strong communication, problem-solving, and time-management skills.",
        highlights: ["Customer Service", "Sales", "Communication Skills"],
      },
    ],
  },
  education: {
    title: "Educational Background",
    items: [
      {
        degree: "Bachelor of Business Administration (BBA)",
        institution: "Palash Shilpanchal Government University and College",
        period: "2020 - 2024",
        description:
          "Focused on developing a strong foundation in business management while expanding my technical skills in web development. Alongside academics, I actively pursued programming courses and hands-on projects to bridge business knowledge with technology.",
        achievements: [
          "Accounting",
          "Management",
          "Marketing"
        ],
      },
      {
        degree: "Intermediate in Business Studies",
        institution: "Govt. Tolaram College",
        period: "2016 - 2018",
        description:
          "Built core understanding of business principles, accounting, and economics while nurturing an early interest in technology and problem-solving. Balanced academics with extracurricular learning in computer literacy and digital tools.",
        achievements: [
          "Business",
          "Entrepreneur",
        ],
      },
      {
        degree: "Complete Web Development Level-1",
        institution: "Programming Hero",
        period: "2023",
        description:
              "Completed a comprehensive, hands-on web development course covering HTML, CSS, JavaScript, and React. Gained foundational skills for full-stack development and built multiple mini-projects, laying the groundwork for MERN stack applications including Node.js, Express, and MongoDB integration.",

        achievements: [
          "Level-1 Certificate",
          "Built responsive web applications and UI components",
          "Gained foundational knowledge",
        ],
      },
    ],
  },
  skills: {
    title: "Technical Skills",
    categories: [
      {
        name: "Frontend Development",
        description:
          "I craft modern, responsive, and user-friendly interfaces using React and Next.js. With a strong focus on clean design and performance, I build component-driven applications, leverage TypeScript for reliability, and use tools like Tailwind CSS and Framer Motion to deliver smooth, interactive user experiences.",
        skills: [
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Framer Motion",
          "JavaScript (ES6+)",
        ],
      },
      {
        name: "Backend Development",
        description:
          "I develop robust and scalable server-side applications using Node.js and Express. From designing RESTful APIs to implementing secure authentication with JWT, I ensure smooth communication between frontend and backend. My expertise with MongoDB and Mongoose enables efficient database management and optimized data flow.",
        skills: [
          "Node.js",
          "Express",
          "Mongoose",
          "Authentication(JWT)",
          "MongoDB",
        ],
      },
      {
        name: "Tools & Others",
        description:
          "Beyond coding, I utilize a range of tools that streamline development and enhance productivity. From version control with Git to deployment on Vercel and Netlify, I ensure seamless project delivery. I also rely on Postman for API testing, Figma for design collaboration, and follow clean code practices for maintainable, scalable solutions.",

        skills: [
          "Git",
          "vercel",
          "Netlify",
          "Clean Code & Best Practices",
          "VsCode",
          "Postman",
          "Figma",
        ],
      },
    ],
  },
  about: {
    title: "About Me",
    bio: "MERN Stack web developer with a passion for building scalable, responsive, and user-centered applications. Known for delivering high-performance solutions that enhance user experience and support business growth. Continuously learning and adapting to the latest trends in web development, with a focus on clean code, collaborative problem-solving, and innovative thinking.",
    interests: [
      "Data Science",
      "Docker",
      "Devops",
      "Business Analytics",
      "Cloud Computing (AWS, Azure)",
    ],
    languages: ["Bengali (Native)", "English(Fluent)", "Hindi(Fluent)"],
  },
}; 



// Dummy data for projects
export const projects = [
  {
    id: "01",
    title: "E-commerce Platform",
    category: "Full Stack",
    description:
      "A modern e-commerce platform built with ReactJS, featuring a responsive design, user authentication, and integration with a headless CMS for easy content management.",
    stack: ["ReactJS", "Tailwind CSS", "Express", "MongoDB"],
    image: projectOne,
    liveUrl: "https://woman-three-piece.web.app/",
    githubUrl: "https://github.com/imonsheikh/women-three-piece-client",
  },
  {
    id: "02",
    title: "Multi Vendor Medicine",
    category: "Full stack",
    description:
      "A robust, secure, and intuitive multi-vendor platform designed for the online sale of medicines.",
    stack: ["React", "MongoDB", "Tailwind", "Stripe"],
    image: projectTwo,
    liveUrl: "https://multi-vendor-medicine.web.app/",
    githubUrl: "https://github.com/imonsheikh/a12-Medi-Mall-Client",
  },
  {
    id: "03",
    title: "Sports Website",
    category: "Frontend",
    description:
      "A modern restaurant management system built with MongoDB, Express.js, React.js, and Node.js, designed to enhance efficiency and user experience.",
    stack: ["CSS3", "ReactJS", "Firebase", "JWT"],
    image: projectThree,
    liveUrl: "https://sports-king-5c148.web.app/",
    githubUrl: "https://github.com/imonsheikh/a10-Sports-Equipment-Store-Client",
  },
];
