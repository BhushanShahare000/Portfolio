import React from "react";
import { FaLinkedin ,FaGithub , FaInstagram,FaFacebook } from "react-icons/fa";

const Social =()=>{
    return(
        <div className="md:flex hidden md:flex-col gap-10 text-3xl top-80 ml-5 fixed">
 <FaLinkedin className="cursor-pointer hover:text-violet-500"/>
< FaGithub className="cursor-pointer hover:text-violet-500"/>
<FaInstagram className="cursor-pointer hover:text-violet-500"/>
<FaFacebook className="cursor-pointer hover:text-violet-500"/>

        </div>
    )
}
export default Social;