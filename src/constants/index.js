import {
  mobile,
  backend,
  creator,
  web,

  java,
  python,
  html,
  css,
  javascript,
  reactjs,
  selenium,
  mongodb,
  nodejs,
  git,

  sunrise,
  carrent,
  jobit,
  tripguide,
} from "../assets";

export const navLinks = [
  {
    title: "Resume",
    url: "https://drive.google.com/file/d/100KrMvEjF7u-9d7RzvI5tHuF2hPZuuNY/view?usp=sharing",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "project",
    title: "Project",
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];



const experiences = [
  {
    title: "Web Development Intern",
    company_name: "Sunrise Group",
    icon: sunrise,
    iconBg: "#383E56",
    date: "February 2022 - May 2022",
    points: [
      "Increased website traffic by 35% through the development and design of an e-commerce website for a furniture company.",
      "Created a WordPress ecommerce website along with over 10 blog posts.",
      "Implemented new plug-ins and extensions, increasing website traffic by 30%."
    ],
  },
];

const technologies = [
  { name: "java", icon: java },
  { name: "Python", icon: python },
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "Javascript", icon: javascript },
  { name: "ReactJs", icon: reactjs },
  { name: "Selenium", icon: selenium },
  { name : "MongoDB", icon : mongodb },
  { name : "NodeJS", icon : nodejs },
  { name : "git", icon : git }
];


const projects = [
  {
    name: "Tender Allocation Website using Blockchain",
    description:
      "Utilized smart contracts for enhanced fairness and transparency, resulting in over 98% accuracy and a 16.7% reduction in processing time for tenders.",
    tags: [
      {
        name: "blockchain",
        color: "blue-text-gradient",
      },
      {
        name: "solidity",
        color: "green-text-gradient",
      },
      {
        name: "web3",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Converting Handwritten into Editable Text using Machine Learning",
    description:
      "Employed CNN and VGG16 models to convert handwritten forms into editable text, achieving an 82% accuracy rate.",
    tags: [
      {
        name: "machinelearning",
        color: "blue-text-gradient",
      },
      {
        name: "androidstudio",
        color: "green-text-gradient",
      },
      {
        name: "reactjs",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Fashion Fiesta Website using PHP and MYSQL",
    description:
      "Crafted an e-commerce fashion website with PHP and MySQL, incorporating Inter-Portal transactions through API integration.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Space Invader Game using Pygame, Python",
    description:
      "Developed a feature-rich Space Invaders game in Python, showcasing skills in Pygame with object tracking, scoring, dynamic difficulty levels, and ammunition updates.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "pygame",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "3D Portfolio Website using React.js and Three.js",
    description:
      "Created a visually stunning web app by integrating ThreeJS and React Three Fiber, blending frontend design with backend features for email communication and user-friendly forms.",
    tags: [
      {
        name: "threejs",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Web Scraping using Scrapy and MongoDB",
    description:
      "Developed a robust web scraping solution using Python and Scrapy, efficiently extracting targeted data from diverse websites.",
    tags: [
      {
        name: "scrapy",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

const testimonials = [
  {
    testimonial: "Elevated our furniture e-commerce site in 2 months with WordPress perfection.",
    name: "Ghanshyam Agarawal",
    designation: "Managing Director",
    company: "Sunrise Group",
    image: "src/assets/Testimonial/Ghanshyam Agarwal.jpeg"
  },
];

export { services, technologies, experiences, testimonials, projects };
