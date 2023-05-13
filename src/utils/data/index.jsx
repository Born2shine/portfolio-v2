import * as ICONS from "../../assets/icons";

export const SideBarLinks = [
  { url: "/", text: "Home", icon: <ICONS.AiOutlineHome /> },
  { url: "/about", text: "About", icon: <ICONS.AiOutlineInfoCircle /> },
  { url: "/resume", text: "Resume", icon: <ICONS.AiFillContainer /> },
  { url: "/portfolio", text: "Portfolio", icon: <ICONS.BsBriefcase /> },
  { url: "/contact", text: "Contact", icon: <ICONS.MdPermContactCalendar /> },
];

export const GitHubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    fill="currentColor"
    className="social__icon"
    viewBox="0 0 50 50"
  >
    <path d="M17.791 46.836A1.999 1.999 0 0019 45v-5.4c0-.197.016-.402.041-.61A.611.611 0 0119 39h-3.6c-1.5 0-2.8-.6-3.4-1.8-.7-1.3-1-3.5-2.8-4.7-.3-.2-.1-.5.5-.5.6.1 1.9.9 2.7 2 .9 1.1 1.8 2 3.4 2 2.487 0 3.82-.125 4.622-.555C21.356 34.056 22.649 33 24 33v-.025c-5.668-.182-9.289-2.066-10.975-4.975-3.665.042-6.856.405-8.677.707a21.537 21.537 0 01-.151-.987c1.797-.296 4.843-.647 8.345-.714a8.162 8.162 0 01-.291-.849c-3.511-.178-6.541-.039-8.187.097-.02-.332-.047-.663-.051-.999 1.649-.135 4.597-.27 8.018-.111a9.832 9.832 0 01-.13-1.543c0-1.7.6-3.5 1.7-5-.5-1.7-1.2-5.3.2-6.6 2.7 0 4.6 1.3 5.5 2.1C21 13.4 22.9 13 25 13s4 .4 5.6 1.1c.9-.8 2.8-2.1 5.5-2.1 1.5 1.4.7 5 .2 6.6 1.1 1.5 1.7 3.2 1.6 5 0 .484-.045.951-.11 1.409 3.499-.172 6.527-.034 8.204.102-.002.337-.033.666-.051.999-1.671-.138-4.775-.28-8.359-.089a8.272 8.272 0 01-.325.98c3.546.046 6.665.389 8.548.689-.043.332-.093.661-.151.987-1.912-.306-5.171-.664-8.879-.682-1.665 2.878-5.22 4.755-10.777 4.974V33c2.6 0 5 3.9 5 6.6V45c0 .823.498 1.53 1.209 1.836C41.37 43.804 48 35.164 48 25 48 12.318 37.683 2 25 2S2 12.318 2 25c0 10.164 6.63 18.804 15.791 21.836z"></path>
  </svg>
);
export const LinkdinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="27"
    height="30"
    fill="currentColor"
    className="social__icon"
    viewBox="0 0 26 26"
  >
    <path d="M21.125 0H4.875A4.876 4.876 0 000 4.875v16.25A4.876 4.876 0 004.875 26h16.25A4.876 4.876 0 0026 21.125V4.875A4.876 4.876 0 0021.125 0zM8.039 22.07H4L3.977 9.977h4.039zM5.918 8.395h-.023c-1.32 0-2.172-.91-2.172-2.043 0-1.16.879-2.04 2.222-2.04 1.344 0 2.168.88 2.196 2.04 0 1.132-.856 2.043-2.223 2.043zM22.043 22.07h-4.074V15.5c0-1.59-.422-2.672-1.844-2.672-1.086 0-1.672.73-1.953 1.438-.106.254-.133.601-.133.957v6.847H9.945L9.922 9.977h4.094l.023 1.707c.524-.809 1.395-1.954 3.48-1.954 2.586 0 4.52 1.688 4.52 5.317v7.023z"></path>
  </svg>
);
export const MailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    fill="currentColor"
    className="social__icon"
    viewBox="0 0 1024 1024"
  >
    <path d="M810.667 170.667H213.333a128 128 0 00-128 128v426.666a128 128 0 00128 128h597.334a128 128 0 00128-128V298.667a128 128 0 00-128-128zM782.08 256L512 458.667 241.92 256zm28.587 512H213.333a42.667 42.667 0 01-42.666-42.667v-416l315.733 236.8a42.667 42.667 0 0025.6 8.534 42.667 42.667 0 0025.6-8.534l315.733-236.8v416A42.667 42.667 0 01810.667 768z"></path>
  </svg>
);
export const Twittericon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    fill="currentColor"
    className="social__icon"
    viewBox="0 0 48 48"
  >
    <path d="M44.719 10.305a.998.998 0 00-1.136-.214l-.164.075-.418.191c.407-.649.73-1.343.953-2.061a.999.999 0 00-1.474-1.151c-1.141.693-2.237 1.192-3.37 1.54A9.463 9.463 0 0032.5 6a9.5 9.5 0 00-9.5 9.5v.5l-.999-.08C12.278 14.77 9.51 8.23 9.395 7.948a1.5 1.5 0 00-2.456-.509C6.741 7.638 5 9.48 5 13c0 2.508 1.118 4.542 2.565 6.124a9.094 9.094 0 01-1.077-.753 1.504 1.504 0 00-1.669-.208 1.503 1.503 0 00-.813 1.473c.019.211.445 4.213 5.068 7.235l-.843.153A1.5 1.5 0 007.3 29.4c.105.141 2.058 2.68 6.299 4.14A28.848 28.848 0 014.5 35a1.5 1.5 0 00-1.129 2.487C3.532 37.672 7.435 42 17.5 42 34.213 42 42 26.485 42 16v-.5c0-.148-.016-.293-.022-.439 2.092-2.022 2.879-3.539 2.917-3.614a1 1 0 00-.176-1.142z"></path>
  </svg>
);
export const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    fill="currentColor"
    className="social__icon"
    viewBox="0 0 24 24"
  >
    <path d="M8 3C5.243 3 3 5.243 3 8v8c0 2.757 2.243 5 5 5h8c2.757 0 5-2.243 5-5V8c0-2.757-2.243-5-5-5H8zm0 2h8c1.654 0 3 1.346 3 3v8c0 1.654-1.346 3-3 3H8c-1.654 0-3-1.346-3-3V8c0-1.654 1.346-3 3-3zm9 1a1 1 0 00-1 1 1 1 0 001 1 1 1 0 001-1 1 1 0 00-1-1zm-5 1c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm0 2c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3z"></path>
  </svg>
);

export const SocialLinks = [
  {
    id: 1,
    name: "GitHub",
    icon: <GitHubIcon/>,
    link: "https://github.com/Born2shine"
  },
  {
    id: 2,
    name: "Linkedin",
    icon: <LinkdinIcon/>,
    link: "https://www.linkedin.com/in/friday-odoh-574452131/"
  },
  {
    id: 3,
    name: "Mail",
    icon: <MailIcon/>,
    link: "mailto:odohfriday9@gmail.com?body=Hello Friday,"
  },
  {
    id: 4,
    name: "Twitter",
    icon: <Twittericon/>,
    link: "https://twitter.com/odoh_thomas"
  },
  {
    id: 5,
    name: "Instagram",
    icon: <InstagramIcon/>,
    link: 'https://www.instagram.com/i_am_tom33'
  }
] 

export const AboutMe = [
  {
    id: 1,
    text: "A Frontend Developer with wealth of experience in web development."
  },
  {
    id: 2,
    text: "A detail-oriented, organized, strong problem-solver with continous learning mindset"
  },
  {
    id: 3,
    text: "A Bachelor's Degree holder in Computer Science."
  },
  {
    id: 4,
    text: "Currently working at"
  },
]

export const WorkExperience = [
  {
    duration: 'Febuary 2023 - Present', 
    title: 'FRONT-END ENGINEER',
    company: 'Dowkaa intelligent solutions.', 
    tasks: [
      'Building a logistics platform for easy, fast, reliable and secure same-day freight across Africa.'
    ]
  },
  {
    duration: 'July 2022 - January 2023', 
    title: 'FRONT-END DEVELOPER',
    company: 'Standard Life Organization.', 
    tasks: [
      'Worked with a team to build a Helpdesk System and a CBS for Micro Insurance',
      'Created and translated mockup designs to high-quality codes.',
      'Fixing and improving existing application performance.',
    ]
  },
  {
    duration: 'August 2021 - December 2021', 
    title: 'FRONT-END DEVELOPER',
    company: 'Toonifique Company.', 
    tasks: [
      'Collaborated with a team of developers to define, design, and built a Logistic System',
      'Created reusable components and pages of mockup designs.',
      'Integrated features and consumed API.',
      'Worked closely with the design team to reproduce designs.',
    ]
  },
  {
    duration: 'February 2020 — April 2020', 
    title: 'FRONT-END DEVELOPER',
    company: 'Systematrixx.', 
    tasks: [
      'Evaluated existing Web applications and performed updates and modifications',
      'Ensured consistent page appearance/behavior across multiple browsers (IE6+, FF, Chrome, Safari).',
    ]
  },
]

export const EducationInformation = [
  {
    duration: 'Mar 2021 - Jun 2021', 
    title: 'FRONTEND DEVELOPER (INTERN)',
    school: 'Redi School of Digital Integration, Munich.', 
    description: 'This program taught concept of programming and how to build web applications using React Library',
    summaries: [
      'Functional Programming.',
      'React Components.',
      'Interaction between components.',
      'Lifecycle methods.',
      'Mixing components with/without state.',
      'React Style, PropTypes, Forms.',
    ]
  },
  {
    duration: 'Feb 2014 - Sep 2019', 
    title: 'BSC. IN COMPUTER SCIENCE',
    school: 'University of Benin, Nigeria.', 
    description: 'Graduated with Second Class Honours.',
    summaries: [
      'Relevant Coursework: Fundamentals of Software Engineering, Introduction to Computing, Information Technology: Design, Policy and Application, Computer Architecture, Algorithms and Data Structures, Operating Systems, Systems Programming, Programming in Machine and Assembly Languages, Web Technology & Applications, Systems Analysis and Design, Microprocessors & Microcomputers, Database Management, Computer Networks, Data Communications and Networks',
    ]
  },
]

export const TechStacks = [
  {
    name: 'Javascript',
    imgLink: 'https://i.ibb.co/kK5Qy8m/javascript-081325c6.png'
  },
  {
    name: 'React',
    imgLink: 'https://i.ibb.co/28BhRtJ/react-e7574af2.png'
  },
  {
    name: 'HTML',
    imgLink: 'https://i.ibb.co/R4t4Y3z/html5-c1bb84e0.png'
  },
  {
    name: 'CSS',
    imgLink: 'https://i.ibb.co/bsnmQhS/css3-3ec32022.png'
  },
  {
    name: 'SASS',
    imgLink: 'https://i.ibb.co/CwRcCJv/sass-icon.png'
  },
  {
    name: 'Bootstrap',
    imgLink: 'https://i.ibb.co/0rCbsdK/bootstrap-4-icon.png'
  },
  {
    name: 'Tailwind',
    imgLink: 'https://i.ibb.co/xzx3XzX/tailwind-css-icon.png'
  },
  {
    name: 'Figma',
    imgLink: 'https://i.ibb.co/LRVnyzD/figma-icon.png'
  },
  {
    name: 'Git',
    imgLink: 'https://i.ibb.co/7yNfF9p/git-43d387b7.png'
  },
]

export const MyPortfolio = [
  {
    name: 'Design Sprint Master',
    img_url: 'https://i.ibb.co/JrDRMDX/dezyit-ui-design.png',
    slug: 'design-sprint-master',
    site_url: 'https://roadx-dashboard.netlify.app/',
    code_url: 'https://github.com/Born2shine/roadx-dashboard',
    description: "Converted mockup design to website using react library. It's responsive on different viewports."
  },
  {
    name: 'RoadX Admin',
    img_url: 'https://i.ibb.co/cy64QCt/bluecube-design.png',
    slug: 'roadx-admin',
    site_url: 'https://roadx-dashboard.netlify.app/',
    code_url: 'https://github.com/Born2shine/roadx-dashboard',
    description: "Converted mockup design to website using react library. It's responsive on different viewports."
  },
]
