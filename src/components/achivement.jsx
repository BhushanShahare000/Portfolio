import React from "react";
import { achivement } from "./dummy";
import { useContext } from "react";
import { ThemeContext } from "../components/themeContext";

import {Button} from "@nextui-org/react";
const Achivement= ()=>{
    const { theme } = useContext(ThemeContext);
    return (
        <div
        className=" pb-24 justify-center items-center  px-4 md:px-32"
        id="achivement"
      >
           <div className="font-poppins pb-6 flex items-center gap-x-4 justify-center  text-2xl md:text-5xl  font-bold leading-normal">
            <div
              className="Flex items-center w-10 md:w-20 h-1 justify-center bg-[#9975FB] 
    "
            ></div>
            <p>Achivement</p>
            <div
              className="Flex items-center w-10 md:w-20 h-1 justify-center bg-[#9975FB]
    "
            ></div>
          </div>


          <div className='flex items-center justify-center  p-4'>
  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
    {achivement.map((item) => (
      <div
        key={item.id}
        className={`max-w-xs rounded-lg border border-gray-300 p-4 hover:border-gray-400 hover:shadow-2xl ${
          theme === 'dark' ? 'bg-[#2A3B5F] text-white' : 'bg-[#f9f9f9] text-black'
        }`}
      >
        <img src={item.img1} alt="" className='w-full h-40 object-cover rounded-t-lg mb-4 shadow-md'/>
        <div className="flex items-center justify-between">
          <div className='flex-col flex justify-between'>
            <p className="font-fira-code text-lg font-semibold">{item.rank}</p>
            <p className='text-base font-medium mb-1'>{item.title}</p>
            <p className='text-xs text-gray-400'>{item.date}</p>
          </div>
          <div>
            <Button className="bg-gradient-to-r from-violet-500 to-blue-500 text-white py-2 px-4 rounded-md shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform">
              <a href={item.certificate} className="text-white no-underline">Certificate</a>
            </Button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


            </div>

     
    )
}

export default Achivement;