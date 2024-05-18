import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import img from "../assets/profile.jpg";
import { Image } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { FaDownload } from "react-icons/fa";
import pdf from "../assets/BhushanFinal2.pdf";

const About = () => {
  return (
    <div className="   justify-center  md:min-h-screen px-4 md:px-32" id="about">
      <div className="font-poppins pb-6 flex items-center justify-center underline text-3xl md:text-5xl  font-bold leading-normal">
        About me
      </div>

      <div className="font-poppinss flex  flex-col md:gap-6 md:flex-row items-center justify-center text-base md:text-[20px] md:mt-[9px] font-normal leading-normal text-custom-white">
        <div>
          <Image width={750} src={img} className="" />
        </div>

        <div className="mt-6 md:mt-0">
          <p className="font-poppins text-3xl md:text-5xl md:mt-3 font-bold leading-normal ">
            I can give the Best that you always wanted.
          </p>

          <p className="font-poppinss text-base md:text-[20px] md:mt-[9px] font-normal leading-normal text-custom-white">
            Hello Geeks, I'm Bhushan Shahare! I'm passionate about frontend
            development and currently seeking job opportunities. I specialize in
            creating and improving responsive, user-friendly websites.
          </p>

          <Button
            className="bg-[#9975FB] flex mt-4 p-2 md:mt-[44px] rounded-md md:text-xl text-base font-fira-code"
            endContent={<FaDownload className="ml-2" />}
          >
            <a href={pdf}> Download Resume</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
