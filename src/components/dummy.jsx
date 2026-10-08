import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextui, SiPrisma } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { GrGraphQl } from "react-icons/gr";
import { BiLogoPostgresql } from "react-icons/bi";
import achive1 from "../assets/codecode.jpeg";
import achive2 from "../assets/codecode1.jpeg";
import achive3 from "../assets/appathon.jpeg";
import achive4 from "../assets/appathon1.jpeg";
import achive5 from "../assets/chase.jpeg";
import achive6 from "../assets/chase1.jpeg";
import achive7 from "../assets/info1.jpeg";
import achive8 from "../assets/info.jpeg";
import advitaImg from "../assets/advita.png";
import aptyreImg from "../assets/aptyre.png";
import smartschoolImg from "../assets/smartschool.png";

export const menu = [
  {
    name: "<Home/>",
    link: "home",
  },
  {
    name: "<About/>",
    link: "about",
  },
  {
    name: "<Experience/>",
    link: "experience",
  },
  {
    name: "<Skill/>",
    link: "skill",
  },
  {
    name: "<Project/>",
    link: "project",
  },
  {
    name: "<Achivement/>",
    link: "achivement",
  },

  {
    name: "<Contact/>",
    link: "contact",
  },
];

export const Skill1 = [
  {
    id: 1,
    icon: <FaHtml5 />,
    color: "text-violet-500",
  },
  {
    id: 2,
    icon: <FaCss3Alt />,
    color: "text-violet-500",
  },
  {
    id: 3,
    icon: <TbBrandJavascript />,
    color: "text-violet-500",
  },
  {
    id: 4,
    icon: <FaReact />,
    color: "text-violet-500",
  },
];

export const Skill2 = [
  {
    id: 1,
    icon: <FaBootstrap />,
    color: "text-violet-500",
  },
  {
    id: 2,
    icon: <RiTailwindCssFill />,
    color: "text-violet-500",
  },
  {
    id: 3,
    icon: <SiNextui />,
    color: "text-violet-500",
  },
  {
    id: 4,
    icon: <FaGitAlt />,
    color: "text-violet-500",
  },
];

export const Skill3 = [
  {
    id: 1,
    icon: <RiNextjsFill />,
    color: "text-violet-500",
  },
  {
    id: 2,
    icon: <SiPrisma />,
    color: "text-violet-500",
  },
  {
    id: 3,
    icon: <GrGraphQl />,
    color: "text-violet-500",
  },
  {
    id: 4,
    icon: <BiLogoPostgresql />,
    color: "text-violet-500",
  },
];

export const Project1 = [
  {
    id: 7,
    title: "Advita – FinTech Platform",
    description: "Role-based dashboards for Cooperative Banks. Developed workflows for loans, EMI management, and Razorpay integrations.",
    skills: ["React", "Tailwind", "Zustand"],
    image: advitaImg,
    projectLink: "",
    githubLink: "",
  },
  {
    id: 8,
    title: "AP Tyre – Business ERP",
    description: "Modules for Sales, Purchases, Employees, and Invoices. Included GST, E-Invoice, and E-Way Bill workflows.",
    skills: ["React", "Tailwind", "Zustand"],
    image: aptyreImg,
    projectLink: "",
    githubLink: "",
  },
  {
    id: 9,
    title: "Smart School – SaaS",
    description: "Scalable Multi-School ERP platform with modules for Students, Staff, Attendance, Exams, and centralized dashboards.",
    skills: ["React", "Tailwind", "Zustand"],
    image: smartschoolImg,
    projectLink: "",
    githubLink: "",
  },
  {
    id: 10,
    title: "Grablo",
    description: "A food restaurant finder app that allows users to see and filter the nearest food shops efficiently.",
    skills: ["React", "Tailwind CSS"],
    projectLink: "https://grablo-23lm.vercel.app/",
    githubLink: "",
  },
  {
    id: 11,
    title: "Ecom",
    description: "A fully functional e-commerce website designed for seamless online shopping and inventory display.",
    skills: ["React", "Tailwind CSS"],
    projectLink: "https://swift-sell-rosy.vercel.app/",
    githubLink: "",
  },
  {
    id: 2,
    title: "Beat_Wave",
    description:
      "A streamlined  music app for easy track playing and changing. Focused on a simple interface for seamless control.",
    skills: ["html", "css", "javascript", "tailwind"],
    projectLink: "https://gunna-b.vercel.app/",
    githubLink: "https://github.com/BhushanShahare000/Beat_Wave",
  },
  {
    id: 3,
    title: "Restro_Order",
    description:
      "A simple and intuitive UI design for a restaurant ordering system. Users easily place, customize, and manage orders efficiently.",
    skills: ["html", "css", "javascript", "tailwind"],
    projectLink: "https://restro-order.vercel.app/#home",
    githubLink: "https://github.com/BhushanShahare000/Restro_Order",
  },
  {
    id: 4,
    title: "WebTekdi",
    description:
      "WebTekdi offers seamless online retail and service solutions. Empower your business with efficient e-commerce management.",
    skills: ["html", "React", "tailwind", "next ui"],
    projectLink: "https://web-tekdi-plus.vercel.app/categories",
    githubLink: "https://github.com/BhushanShahare000/WebTekdi-plus",
  },
  {
    id: 6,
    title: "My-Portfolio",
    description:
      "Skilled professional with diverse talents, focused on innovation and quality. Passionate about making a difference and achieving success.",
    skills: ["html", "React", "tailwind", "next ui"],
    projectLink: "https://bhushan-portfolio-phi.vercel.app/",
    githubLink: "https://github.com/BhushanShahare000/Portfolio",
  },
];

export const achivement = [
  {
    id: "1",
    img1: achive1,
    rank: "Second winner",
    title: "Codecode",
    date: "Feb 22, 2023",
    certificate: achive2,
  },
  {
    img1: achive3,
    id: "2",
    rank: "first winner",
    title: "Appathon'23 Winner",
    date: "Feb 22, 2023",
    certificate: achive4,
  },
  {
    img1: achive5,
    id: "3",
    rank: "first winner",
    title: "Chase The web",
    date: "Feb 22, 2023",
    certificate: achive6,
  },
  {
    img1: achive8,
    id: "4",
    rank: "Awarded",
    title: "infomatrix",
    date: "Feb 22, 2023",
    certificate: achive7,
  },
];

export const social = [
  {
    link1: "https://www.linkedin.com/in/bhushan-shahare-454127253/",
    link2: "https://github.com/BhushanShahare000",
    link3:
      "https://www.instagram.com/bhushanshahare000?igsh=MWI3eHp5Zm1wd2w0eA==",
    link4: "https://www.facebook.com/bhushan.shahare.129",
  },
];

export const experience = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TalentRise Technokrate",
    location: "Nagpur, Maharashtra",
    duration: "Present",
    description: [
      "Developing scalable frontend applications using React.js, Next.js, Tailwind CSS, Zustand, and REST APIs.",
      "Building responsive dashboards, reusable components, and role-based user interfaces.",
      "Working on enterprise applications including FinTech, ERP, and Multi-School SaaS platforms."
    ]
  },
  {
    id: 2,
    title: "Web Developer",
    company: "Skillfinity Infoventures Pvt. Ltd.",
    location: "Remote",
    duration: "Aug 2024 – Feb 2025",
    description: [
      "Developed responsive web applications and interfaces using React.js.",
      "Implemented responsive design, SEO practices, cross-browser compatibility, accessibility, and bug fixes."
    ]
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "Informatrix IT Solution Pvt. Ltd.",
    location: "Nagpur, Maharashtra",
    duration: "June 2023 – Feb 2024",
    description: [
      "Developed responsive frontend interfaces using React.js.",
      "Integrated frontend applications with backend APIs and improved user experience."
    ]
  },
  {
    id: 4,
    title: "Web Developer Intern",
    company: "Take It Ideas",
    location: "Remote",
    duration: "Aug 2022 – Oct 2022",
    description: [
      "Developed responsive web interfaces using HTML, CSS, and JavaScript.",
      "Assisted in frontend development and implementation of modern website designs."
    ]
  }
];
