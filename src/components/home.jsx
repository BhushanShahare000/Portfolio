import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import img from "../assets/developer.png";
import { Image } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { FaDownload } from "react-icons/fa";
import pdf from "../assets/Bhushan_Shahare_Resume.pdf";
const Home = () => {
  return (
    <div
      className="flex pb-24 lg:pb-8 items-center lg:mt-8 md:mt-20  justify-center px-4 md:px-32"
      id="home"
    >
      <div className="mt-6 md:mt-0">
        <p className="flex items-center md:text-xl  text-lg font-fira-code ">
          Hi There, I am <FaArrowRightLong className="ml-4" />
        </p>
        <p className="font-poppins text-4xl md:text-5xl md:mt-3 font-bold leading-normal ">
          Bhushan Shahare.
        </p>
        <p className="font-poppinss lg:text-[40px] text-xl md:mt-3 font-bold leading-normal text-custom-blue  ">
          I build stunning websites.
        </p>

        <p className="font-poppinss text-lg md:text-[20px] md:mt-[9px] font-normal leading-normal text-custom-white">
          I'm a frontend developer creating responsive web interfaces, improving
          my skills, and preparing for placements while supporting others in
          their development.
        </p>

        <Button
          className="bg-gradient-to-r from-violet-500 to-blue-500 text-white flex mt-5 p-2 md:mt-[44px] rounded-md md:text-xl text-base font-fira-code"
          endContent={<FaDownload className="ml-2" />}
        >
          <a href={pdf}> Download Resume</a>
        </Button>
      </div>

      <div className="">
        <Image src={img} className="m-5 hidden md:flex md:w-[1200px]" />
      </div>
    </div>
  );
};
export default Home;
