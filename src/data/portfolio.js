import img0 from "../images/Dial for need.png";
import img1 from "../images/FoodCall.jpg";
import img2 from "../images/Speedy.jpg";
import img3 from "../images/Crud.jpg";
import img4 from "../images/adTech.jpg";
import img5 from "../images/vimeo.jpg";
import img6 from "../images/Linkup.jpg";
import img7 from "../images/weatherio.jpg";
import img8 from "../images/Telegraph.jpg";

const emailAddress = "saravanan23official@gmail.com";

export const Bio = {
  name: "Saravanan",
  title: "Full stack developer",
  description:
    "Full stack developer with 2+ years of experience building fast and reliable web applications, from idea to deployment. I enjoy trying new technologies and building small proof-of-concepts to test ideas before starting full development. I keep learning and improving my skills with every project. I work well in fast-paced teams and adapt quickly to change.",
  github: "https://github.com/Saro9033",
  resume:
    "https://drive.google.com/file/d/17jYdzxyhB9IqWhxo5hQfFbfG6q6UJfi_/view?usp=drive_link",
  linkedin: "https://www.linkedin.com/in/saravanan2310/",
  call: "tel:+9042338199",
  whatsapp: "https://wa.me/919042338199",
  email: `mailto:${emailAddress}`,
  emailAddress,
};

export const content = {
  hero: {
    headline: ["Building", "thoughtful", "digital", "experiences."],
    experienceYears: 2,
    experienceSuffix: "Years Experience",
    viewWork: "View Work",
    contact: "Contact Me",
    resume: "Download Resume",
    resumeAriaLabel: "Download resume (opens in a new tab)",
    availability: "OPEN TO COLLABORATION",
    projectCountLabel: "PROJECTS",
    ideaToDeployment: "Idea to Deployment",
  },
  skills: {
    eyebrow: "What I work with",
    title: "Tools for building from idea to launch.",
    description:
      "A practical mix of frontend, backend, and integration skills, plus a habit of testing ideas early.",
  },
  experience: {
    eyebrow: "Selected experience",
    title: "Building systems that work in the real world.",
    description:
      "A few highlights from products and platform capabilities I've helped bring to life.",
    cardLabel: "Product work",
  },
  projects: {
    eyebrow: "Selected work",
    title: "A selection of things I've built.",
    description:
      "Personal and collaborative projects that helped me explore ideas and turn them into useful products.",
    sourceLabel: "Source",
    liveLabel: "Live",
    backendLabel: "Backend",
    backendLiveLabel: "Backend live",
    detailsLabel: "View details",
    dialogCloseLabel: "Close project details",
    filters: [
      { label: "All", value: "all" },
      { label: "Web apps", value: "web app" },
      { label: "Landing pages", value: "landing page" },
    ],
  },
  education: {
    eyebrow: "Education",
    title: "Learning is part of the work.",
    description:
      "The academic foundation behind my curiosity for building and improving digital products.",
  },
  contact: {
    eyebrow: "Get in touch",
    title: "Have an idea? Let's make it real.",
    description:
      "If you're building something interesting or want to talk through an opportunity, send me a note.",
    formTitle: "Send a message",
    nameLabel: "Your name",
    emailLabel: "Your email",
    subjectLabel: "Subject",
    messageLabel: "Message",
    namePlaceholder: "Jane Smith",
    emailPlaceholder: "jane@example.com",
    subjectPlaceholder: "What would you like to discuss?",
    messagePlaceholder: "A few details about your project or opportunity...",
    sendButton: "Send message",
    sendingButton: "Sending...",
    sentMessage: "Thanks! Your message has been sent.",
    errorMessage:
      "Your message could not be sent. Please email me directly instead.",
  },
  footer: {
    tagline: "Building thoughtful digital experiences.",
    copyrightSuffix: "Built with care.",
  },
};

export const navigation = [
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Education", href: "#education", id: "education" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export const skillGroups = [
  {
    title: "Frontend",
    description: "Accessible, responsive interfaces and modern web experiences.",
    skills: [
      { name: "HTML5", icon: "html" },
      { name: "CSS3", icon: "css" },
      { name: "JavaScript (ES6+)", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "React JS", icon: "react" },
      { name: "Next JS", icon: "next" },
    ],
  },
  {
    title: "Backend & data",
    description: "Reliable APIs, integrations, and data-driven applications.",
    skills: [
      { name: "Node.js", icon: "node" },
      { name: "Express.js", icon: "express" },
      { name: "MongoDB", icon: "database" },
      { name: "PostgreSQL", icon: "database" },
      { name: "Drizzle ORM", icon: "database" },
      { name: "Webhooks", icon: "webhook" },
      { name: "Socket.io (Real-time apps)", icon: "realtime" },
    ],
  },
  {
    title: "Workflow & innovation",
    description: "Practical experimentation from first idea through delivery.",
    skills: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Research & Development (R&D)", icon: "research" },
      { name: "Proof of Concept (POC) Development", icon: "poc" },
    ],
  },
];

export const experiences = [
  {
    id: "marketplace",
    title: "Marketplace Platform",
    description:
      "Integrated Razorpay for India and PayPal for the USA, with automated PDF invoice generation and email notifications. Connected Zoho Books APIs for customer entry and invoice creation, and built SEO-ready blogs with Strapi CMS.",
    stack: [
      "Razorpay",
      "PayPal",
      "Zoho Books API",
      "PDF invoices",
      "Email automation",
      "Strapi CMS",
      "SEO",
    ],
  },
  {
    id: "ecommerce",
    title: "Ecommerce Platform",
    description:
      "Implemented a salesman delivery prioritization system that determines an efficient delivery order based on route efficiency, delivery priority, and the salesman's current location.",
    stack: ["Route efficiency", "Priority scheduling", "Location-aware delivery"],
  },
  {
    id: "school",
    title: "School Website",
    description:
      'Integrated a "Join Us" form that sends submissions and file attachments to an Outlook email. Built an email newsletter subscription flow that stores subscriber emails directly in a SharePoint Excel workbook.',
    stack: ["Outlook", "File attachments", "SharePoint", "Excel", "Email newsletter"],
  },
  {
    id: "dap",
    title: "Digital Adoption Platform (DAP)",
    description:
      "Implemented enterprise authentication with AD/LDAP and Microsoft SSO using SAML and OIDC. Automated synchronization of users, groups, and roles from AD and Microsoft Entra ID, with SCIM for real-time updates. Built a cross-browser extension using WXT for Chrome, Edge, Firefox, and Safari from one codebase. Developed a no-code walkthrough builder and launcher with 13 types of guidance components, including tooltips, modals, and beacons.",
    stack: [
      "AD/LDAP",
      "Microsoft Entra ID",
      "SAML",
      "OIDC",
      "SCIM",
      "WXT",
      "Chrome",
      "Edge",
      "Firefox",
      "Safari",
    ],
  },
];

export const projects = [
  {
    id: "dial-for-need",
    title: "Product Management and Delivery App",
    description:
      "A product and delivery platform with distinct admin, employee, and customer workflows for catalog management, order fulfillment, feedback, and Razorpay payments.",
    image: img0,
    tags: ["Node.js", "Express.js", "MongoDB", "React", "Redux Toolkit", "Firebase"],
    category: "web app",
    github: "https://github.com/Saro9033/DialForNeed_MERN",
    webapp: "https://mern-dialforneed.onrender.com/",
  },
  {
    id: "foodcall",
    title: "FoodCall - Recipe App",
    description:
      "An online food ordering experience with Firebase, phone OTP verification, and an account area for viewing previous orders.",
    image: img1,
    tags: ["React", "Firebase", "Bootstrap", "React Router"],
    category: "web app",
    github: "https://github.com/Saro9033/food-ordering-site",
    webapp: "https://food-call.vercel.app/",
  },
  {
    id: "speedy",
    title: "Speedy - Bike Taxi Site",
    description:
      "A responsive, animated landing page built to present a bike taxi service with a smooth browsing experience across devices.",
    image: img2,
    tags: ["React", "Bootstrap"],
    category: "landing page",
    github: "https://github.com/Saro9033/Speedy-LandingPage",
    webapp: "https://landing-page-senchola.vercel.app/",
  },
  {
    id: "crud",
    title: "CRUD Operation App",
    description:
      "A full-stack CRUD application with a React interface, Node.js API, and cloud deployment.",
    image: img3,
    tags: ["React", "Node.js", "Axios", "Bootstrap"],
    category: "web app",
    github: "https://github.com/Saro9033/CRUD_operation",
    backendGithub: "https://github.com/Saro9033/CRUD_operation_API",
    backendUrl: "https://crud-oper-api.onrender.com/items",
    webapp: "https://crud-operation-roan-psi.vercel.app/",
  },
  {
    id: "vimeo",
    title: "Vimeo - Streaming Site",
    description:
      "A responsive streaming-site landing page with routed browsing for films and TV shows.",
    image: img5,
    tags: ["React", "React Router", "Bootstrap", "CSS"],
    category: "landing page",
    github: "https://github.com/Saro9033/Landing-page-with-router",
    webapp: "https://landing-page-with-router.vercel.app/",
  },
  {
    id: "adtech",
    title: "AdTech - Advertising Technology",
    description:
      "A responsive recreation of an advertising technology homepage, focused on layout, navigation, and interactive details.",
    image: img4,
    tags: ["React", "Bootstrap", "CSS"],
    category: "landing page",
    github: "https://github.com/Saro9033/AdTech",
    webapp: "https://adroll-clone2.vercel.app/",
  },
  {
    id: "weatherio",
    title: "Weatherio - Weather App",
    description:
      "A weather dashboard with current conditions, sunrise and sunset times, and a multi-day forecast.",
    image: img7,
    tags: ["React", "OpenWeatherMap API", "Bootstrap", "CSS"],
    category: "web app",
    github: "https://github.com/Saro9033/weather-app",
    webapp: "https://weather-app-xvrj.vercel.app/",
  },
  {
    id: "linkup",
    title: "LinkUp - Social Media App",
    description:
      "A Firebase-powered social feed with Google authentication and support for sharing text, images, and videos.",
    image: img6,
    tags: ["React", "Firebase", "Bootstrap", "CSS"],
    category: "web app",
    github: "https://github.com/Saro9033/Linkup-socialMedia",
    webapp: "https://fb-clone2-aaeef.web.app/",
  },
  {
    id: "telegraph",
    title: "Telegraph - Blogging Site",
    description:
      "A blogging application for creating and sharing posts, backed by a Node.js API.",
    image: img8,
    tags: ["React", "Node.js", "React Router", "CSS"],
    category: "web app",
    github: "https://github.com/Saro9033/TeleGraph",
    backendGithub: "https://github.com/Saro9033/TeleGraph_JSONAPI",
    backendUrl: "https://telegraph-jsonapi.onrender.com/posts",
    webapp: "https://telegraphh.netlify.app/",
  },
];

export const education = [
  {
    id: "bsc-computer-science",
    school: "PERI College of Arts and Science",
    date: "June 2021 - May 2024",
    grade: "7.71 CGPA",
    degree: "Bachelor of Computer Science - B.Sc Computer Science",
    description:
      "As a dedicated student at PERI College of Arts and Science, I pursued a Bachelor of Computer Science degree. Through hands-on projects and collaborative learning experiences, I gained practical skills in problem-solving, critical thinking, and project management. This educational background has equipped me with the knowledge and skills necessary to excel in computer science and contribute to innovative technological solutions.",
  },
  {
    id: "hsc",
    school: "SSKV Boys Matric and Higher Secondary School",
    date: "Apr 2019 - Apr 2025",
    grade: "93.3%",
    degree: "HSC - (XII std)",
    description:
      "I completed my Higher Secondary Certificate (HSC) with distinction from April 2020 to April 2021, achieving an outstanding grade of 93.3%. During this period, I demonstrated a strong aptitude for academic excellence, excelling in subjects such as mathematics, physics, chemistry, and computer science.",
  },
  {
    id: "sslc",
    school: "SSKV Boys Matric and Higher Secondary School",
    date: "Apr 2017 - Apr 2019",
    grade: "90.3%",
    degree: "SSLC - (X std)",
    description:
      "I completed my Secondary School Leaving Certificate (SSLC) program from April 2018 to April 2019, securing an impressive grade of 90.3%. During this period, I distinguished myself as a diligent and dedicated student, consistently achieving high marks across various subjects. Through a combination of classroom learning, self-study, and extracurricular activities, I developed a well-rounded skill set and a strong academic foundation that prepared me for further educational pursuits.",
  },
];

export const skills = skillGroups.map((group) => ({
  title: group.title,
  skills: group.skills.map(({ name }) => ({ name })),
}));
