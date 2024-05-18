import React from "react";
import { FaReact } from "react-icons/fa";
const Skill= ()=>{
    return(
        
      <div className="   justify-center  md:min-h-screen px-4 md:px-32" id="skill">
      <div className="font-poppins pb-6 flex items-center justify-center underline text-3xl md:text-5xl  font-bold leading-normal">
    Skill
      </div>

      <div className="h-20 flex items-center justify-center w-32 p-3 shadow-md  shadow-gray-500 border border-violet-400  ">
<FaReact className="text-3xl text-violet-500 "/>
<p className="text-3xl">React
    </p>
 </div>
 
        </div>
    )
}
export default Skill;