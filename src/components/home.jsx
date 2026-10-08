import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import img from "../assets/developer.png";
import { Button } from "@nextui-org/react";
import { FaDownload } from "react-icons/fa";
import pdf from "../assets/Bhushan_Shahare_Resume2.pdf";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div
      className="flex flex-col-reverse md:flex-row pb-24 lg:pb-8 items-center lg:mt-8 md:mt-20 justify-center px-4 md:px-32 relative overflow-hidden"
      id="home"
    >
      {/* Background glow orb */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#9975FB]/20 rounded-full blur-[120px] pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mt-10 md:mt-0 z-10 text-center md:text-left flex flex-col items-center md:items-start"
      >
        <p className="flex items-center md:text-xl text-lg font-fira-code text-gray-400">
          Hi There, I am <FaArrowRightLong className="ml-4 text-[#9975FB]" />
        </p>
        <h1 className="font-poppins text-4xl md:text-6xl md:mt-3 font-extrabold leading-tight tracking-tight">
          Bhushan Shahare.
        </h1>
        <h2 className="font-poppins lg:text-[40px] text-2xl md:mt-2 font-bold leading-normal text-transparent bg-clip-text bg-gradient-to-r from-[#9975FB] to-blue-400">
          I build stunning websites.
        </h2>

        <p className="font-poppins text-base md:text-lg md:mt-6 mt-4 font-normal leading-relaxed text-gray-300 max-w-xl">
          I'm a frontend developer creating responsive web interfaces, improving
          my skills, and preparing for placements while supporting others in
          their development.
        </p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            className="bg-gradient-to-r from-violet-500 to-blue-500 text-white flex mt-8 p-6 rounded-lg md:text-xl text-base font-fira-code shadow-lg shadow-violet-500/30"
            endContent={<FaDownload className="ml-2" />}
          >
            <a href={pdf}>Download Resume</a>
          </Button>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="z-10 relative"
      >
        <motion.img 
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          src={img} 
          className="m-5 w-64 md:w-full max-w-[500px] object-contain drop-shadow-2xl" 
          alt="Developer Illustration" 
        />
      </motion.div>
    </div>
  );
};
export default Home;
