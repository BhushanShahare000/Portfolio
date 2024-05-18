import React from "react";
import { FaLinkedin ,FaGithub , FaInstagram,FaFacebook } from "react-icons/fa";

const Social =()=>{
    return(
        <div className="md:flex items-center hidden md:flex-col gap-10 text-3xl top-24  ml-5 fixed">
            <div className="h-40 w-[2px] bg-violet-500 "></div>
 <FaLinkedin className="cursor-pointer hover:text-violet-500"/>
< FaGithub className="cursor-pointer hover:text-violet-500"/>
<FaInstagram className="cursor-pointer hover:text-violet-500"/>
<FaFacebook className="cursor-pointer hover:text-violet-500"/>

      
<div className="h-40 w-[2px] bg-violet-500 "></div>
</div>
       
    )
}
export default Social;