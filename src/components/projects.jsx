import React from 'react'
import { FaMinus } from "react-icons/fa6";
import { MdOutlineRectangle } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { BsGlobe2 } from "react-icons/bs";
import { MdOpenInNew } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { Project1 } from './dummy';
import { useContext } from "react";
import { ThemeContext } from "../components/themeContext";
const Projects =()=> {
    const { theme } = useContext(ThemeContext);
  return (
    <div
    className=" pb-24 justify-center items-center  px-4 md:px-32"
    id="project"
  >
       <div className="font-poppins pb-6 flex items-center gap-x-4 justify-center  text-2xl md:text-5xl  font-bold leading-normal">
        <div
          className="Flex items-center w-10 md:w-20 h-1 justify-center bg-[#9975FB] 
"
        ></div>
        <p>Projects</p>
        <div
          className="Flex items-center w-10 md:w-20 h-1 justify-center bg-[#9975FB]
"
        ></div>
      </div>

      <div className='flex flex-wrap m-3 gap-8 justify-center'>
      {Project1.map((item) => (
        <div
          key={item.id}
          className={`flex-1 sm:flex-none sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/3 max-w-xs rounded-md border border-gray-500 transition-all duration-300 transform hover:scale-105 hover:border-gray-400 hover:shadow-lg ${
            theme === 'dark' ? 'bg-[#212C44] text-white' : 'bg-white text-black'
          }`}
        >
          <div className='flex gap-2 p-2 text-sm flex-row-reverse'>
            <RxCross1 className='hover:text-violet-400'/>
            <MdOutlineRectangle className='hover:text-violet-400'/>
            <FaMinus className='hover:text-violet-400'/>
          </div>
          <div className='w-auto h-[1px] bg-gray-500'></div>
          <div className='flex justify-between p-2'>
            <p className='text-xl font-semibold'>{item.title}</p>
            <BsGlobe2 className='text-2xl'/>
          </div>
          <p className='p-2'>{item.description}</p>
          <ul className='text-[#6191B2] flex p-2 gap-4'>
            {item.skills.map((skill, key) => (
              <li key={key}>{skill}</li>
            ))}
          </ul>
          <div className='flex flex-row-reverse text-4xl gap-4 p-2'>
            <a href={item.projectLink} target='_blank' rel='noopener noreferrer'>
              <MdOpenInNew className='cursor-pointer'/>
            </a>
            <a href={item.githubLink} target='_blank' rel='noopener noreferrer'>
              <FaGithub className='cursor-pointer'/>
            </a>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Projects;