import React from "react";
import { Skill1 } from "./dummy";
import { Skill2 } from "./dummy";

const Skill = () => {
  return (
    <div
      className=" min-h-screen justify-center items-center  px-4 md:px-32"
      id="skill"
    >
      <div className="font-poppins pb-6 flex items-center gap-x-4 justify-center  text-2xl md:text-5xl  font-bold leading-normal">
        <div
          className="Flex items-center w-10 md:w-20 h-1 justify-center bg-[#9975FB] 
"
        ></div>
        <p>Skills</p>
        <div
          className="Flex items-center w-10 md:w-20 h-1 justify-center bg-[#9975FB]
"
        ></div>
      </div>
      
<div className="flex-col flex gap-8 justify-center items-center md:mt-24 ">
      <div className="font-poppinss gap-8 md:gap-16 flex-row flex flex-wrap items-center justify-center text-base md:text-[20px] md:mt-[9px] font-normal leading-normal text-custom-white">
        {Skill1.map((item) => {
          return (
            <div key={item.id} className=" flex items-center justify-center transition-all duration-300 transform md:hover:scale-125 hover:scale-100 lg:text-7xl text-5xl p-8 shadow-md shadow-gray-500   border-violet-400">
              <div className={`hover:${item.color}`}>{item.icon}</div>
            </div>
          );
        })}
      </div>

      <div className="font-poppinss gap-8 md:gap-16 flex-row flex flex-wrap items-center justify-center text-base md:text-[20px] md:mt-[9px] font-normal leading-normal text-custom-white">
        {Skill2.map((item) => {
          return (
            <div key={item.id} className="transition-all duration-300 transform hover:scale-100  md:hover:scale-125  flex items-center justify-center lg:text-7xl text-5xl  p-8 shadow-md shadow-gray-500   border-violet-400">
              <div className={`hover:${item.color}`}>{item.icon}</div>
            </div>
          );
        })}
      </div>
      </div>
      
    </div>
  );
};
export default Skill;
