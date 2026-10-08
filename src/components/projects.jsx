import React, { useContext, useState } from 'react'
import { FaMinus } from "react-icons/fa6";
import { MdOutlineRectangle } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { BsGlobe2 } from "react-icons/bs";
import { MdOpenInNew } from "react-icons/md";
import { FaGithub, FaEye } from "react-icons/fa";
import { Project1 } from './dummy';
import { ThemeContext } from "../components/themeContext";

const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div
      className="pb-24 justify-center items-center px-4 md:px-32 relative"
      id="project"
    >
      <div className="font-poppins pb-6 flex items-center gap-x-4 justify-center text-2xl md:text-5xl font-bold leading-normal">
        <div className="flex items-center w-10 md:w-20 h-1 justify-center bg-[#9975FB]"></div>
        <p>Projects</p>
        <div className="flex items-center w-10 md:w-20 h-1 justify-center bg-[#9975FB]"></div>
      </div>

      <div className='flex flex-wrap m-3 gap-8 justify-center'>
        {Project1.map((item) => (
          <div
            key={item.id}
            className={`flex flex-col flex-1 sm:flex-none sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/3 max-w-xs rounded-lg border border-gray-500/50 transition-all duration-300 transform hover:scale-[1.03] hover:border-[#9975FB]/50 hover:shadow-xl hover:shadow-[#9975FB]/10 overflow-hidden ${
              theme === 'dark' ? 'bg-[#212C44]/80 backdrop-blur-md text-white' : 'bg-white/80 backdrop-blur-md text-black'
            }`}
          >
            <div className='flex gap-2 p-3 text-sm flex-row-reverse bg-black/10'>
              <RxCross1 className='hover:text-violet-400 cursor-pointer'/>
              <MdOutlineRectangle className='hover:text-violet-400 cursor-pointer'/>
              <FaMinus className='hover:text-violet-400 cursor-pointer'/>
            </div>
            <div className='w-full h-[1px] bg-gray-500/50'></div>
            
            {item.image && (
              <div 
                className="w-full h-40 overflow-hidden cursor-pointer relative group"
                onClick={() => setSelectedImage(item.image)}
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FaEye className="text-white text-3xl" />
                </div>
              </div>
            )}

            <div className='flex justify-between p-4 items-center'>
              <p className='text-xl font-bold'>{item.title}</p>
              <BsGlobe2 className='text-xl text-[#9975FB]'/>
            </div>
            <p className='px-4 pb-2 text-sm opacity-90 flex-grow'>{item.description}</p>
            <ul className='text-[#9975FB] font-medium flex flex-wrap px-4 pb-4 gap-3 text-xs'>
              {item.skills.map((skill, key) => (
                <li key={key} className="bg-[#9975FB]/10 px-2 py-1 rounded-md">{skill}</li>
              ))}
            </ul>
            <div className='flex flex-row-reverse text-2xl gap-4 p-4 mt-auto border-t border-gray-500/20'>
              {item.image && (
                 <button 
                   onClick={() => setSelectedImage(item.image)}
                   className="text-gray-400 hover:text-[#9975FB] transition-colors"
                   title="View Dashboard"
                 >
                   <FaEye />
                 </button>
              )}
              {item.projectLink && (
                <a href={item.projectLink} target='_blank' rel='noopener noreferrer' className="text-gray-400 hover:text-[#9975FB] transition-colors">
                  <MdOpenInNew />
                </a>
              )}
              {item.githubLink && (
                <a href={item.githubLink} target='_blank' rel='noopener noreferrer' className="text-gray-400 hover:text-[#9975FB] transition-colors">
                  <FaGithub />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] flex justify-center items-center">
            <button 
              className="absolute -top-10 right-0 text-white text-3xl hover:text-red-400 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <RxCross1 />
            </button>
            <img 
              src={selectedImage} 
              alt="Dashboard Preview" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl border border-gray-700"
              onClick={(e) => e.stopPropagation()} 
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default Projects;