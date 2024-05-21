import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextui } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import achive1 from "../assets/codecode.jpeg";
import achive2 from "../assets/codecode1.jpeg";
import achive3 from "../assets/appathon.jpeg";
import achive4 from "../assets/appathon1.jpeg";
import achive5 from "../assets/chase.jpeg";
import achive6 from "../assets/chase1.jpeg";
import achive7 from "../assets/info1.jpeg";
import achive8 from "../assets/info.jpeg";




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
]

export const Skill2 = [
  {
    id: 1,
    icon: <FaBootstrap/>,
    color: "text-violet-500",
  },
  {
    id: 2,
    icon: <RiTailwindCssFill  />,
    color: "text-violet-500",
  },
  {
    id: 3,
    icon: <SiNextui />,
    color: "text-violet-500",
  },
  {
    id: 4,
    icon: < FaGitAlt  />,
    color: "text-violet-500",
  },

];


export const Project1= [
  {
    "id": 1,
    "title": "ToDo",
    "description": "A simple and  efficient to-do list project that allows users to add, manage, and track their tasks seamlessly.",
    "skills": ["html", "css", "javascript"],
    "projectLink": "https://to-do-list-rho-topaz.vercel.app/",
    "githubLink": "https://github.com/BhushanShahare000/To-Do-List"
  },
  {
    "id": 2,
    "title": "Beat_Wave",
    "description": "A streamlined  music app for easy track playing and changing. Focused on a simple interface for seamless control.",
    "skills": ["html", "css", "javascript", "tailwind"],
    "projectLink": "https://gunna-b.vercel.app/",
    "githubLink": "https://github.com/BhushanShahare000/Beat_Wave"
  },
  {
    "id": 3,
    "title": "Restro_Order",
    "description": "A simple and intuitive UI design for a restaurant ordering system. Users easily place, customize, and manage orders efficiently.",
    "skills": ["html", "css", "javascript", "tailwind"],
    "projectLink": "http://example.com/restro_order",
    "githubLink": "http://github.com/user/restro_order"
  },
  {
    "id": 4,
    "title": "WebTekdi",
    "description": "WebTekdi offers seamless online retail and service solutions. Empower your business with efficient e-commerce management.",
    "skills": ["html", "React", "tailwind", "next ui"],
    "projectLink": "http://example.com/webtekdi",
    "githubLink": "http://github.com/user/webtekdi"
  },
  {
    "id": 4,
    "title": "WebTekdi",
    "description": "WebTekdi offers seamless online retail and service solutions. Empower your business with efficient e-commerce management.",
    "skills": ["html", "React", "tailwind", "next ui"],
    "projectLink": "http://example.com/webtekdi",
    "githubLink": "http://github.com/user/webtekdi"
  },
  {
    "id": 6,
    "title": "WebTekdi",
    "description": "WebTekdi offers seamless online retail and service solutions. Empower your business with efficient e-commerce management.",
    "skills": ["html", "React", "tailwind", "next ui"],
    "projectLink": "http://example.com/webtekdi",
    "githubLink": "http://github.com/user/webtekdi"
  }
]


export const achivement = [
  {
    id:"1",
    img1:achive1,
    rank:"Second winner",
    title:"Codecode",
    date:"Feb 22, 2023",
    certificate:achive2,
  },
  {
    img1:achive3,
    id:"2",
    rank:"first winner",
    title:"Appathon'23 Winner",
    date:"Feb 22, 2023",
    certificate:achive4,
  },
  {
    img1:achive5,
    id:"3",
    rank:"first winner",
    title:"Chase The web",
    date:"Feb 22, 2023",
    certificate:achive6,
  },
  {
    img1:achive8,
    id:"4",
    rank:"Awarded",
    title:"infomatrix",
    date:"Feb 22, 2023",
    certificate:achive7,
  },


  
]
