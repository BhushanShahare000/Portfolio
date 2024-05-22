import React from "react";
import { FaLinkedin ,FaGithub , FaInstagram,FaFacebook } from "react-icons/fa";
import {social} from "./dummy";

const Social =()=>{
    return(
        
        <div>
        {social.map((item, index) => (
          <div key={index} className="md:flex items-center hidden md:flex-col gap-10 text-3xl top-24 ml-5 fixed">
            <div className="h-40 w-[2px] bg-violet-500"></div>
            <a href={item.link1}>
              <FaLinkedin className="cursor-pointer hover:text-violet-500" />
            </a>
            <a href={item.link2}>
              <FaGithub className="cursor-pointer hover:text-violet-500" />
            </a>
            <a href={item.link3}>
              <FaInstagram className="cursor-pointer hover:text-violet-500" />
            </a>
            <a href={item.link4}>
              <FaFacebook className="cursor-pointer hover:text-violet-500" />
            </a>
            <div className="h-40 w-[2px] bg-violet-500"></div>
          </div>
        ))}
      </div>
        
       
    )
}
export default Social;