import img from "../assets/profile.jpg";
import { Button } from "@nextui-org/react";
import { FaDownload } from "react-icons/fa";
import pdf from "../assets/Bhushan_Shahare_Resume2.pdf";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="justify-center pb-24 px-4 md:px-32 relative overflow-hidden" id="about">
      {/* Background glow orb */}
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-poppins pb-10 flex items-center gap-x-4 justify-center text-3xl md:text-5xl font-bold leading-normal"
      >
        <div className="flex items-center w-12 md:w-20 h-1 justify-center bg-[#9975FB]"></div>
        <p>About me</p>
        <div className="flex items-center w-12 md:w-20 h-1 justify-center bg-[#9975FB]"></div>
      </motion.div>

      <div className="font-poppins flex flex-col md:gap-16 md:flex-row items-center justify-center text-base md:text-[20px] md:mt-[9px] font-normal leading-normal z-10 relative">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative group"
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-violet-600 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
          <img width={450} src={img} className="relative rounded-2xl shadow-2xl object-cover" alt="About Me" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="mt-10 md:mt-0 max-w-xl text-center md:text-left flex flex-col items-center md:items-start"
        >
          <p className="font-poppins text-3xl md:text-5xl md:mt-3 font-bold leading-tight">
            I can give the Best that you always wanted.
          </p>

          <p className="text-gray-400 text-base md:text-lg mt-6 leading-relaxed">
            Hello Geeks! I'm passionate about frontend development and currently
            seeking job opportunities. I specialize in creating and improving
            responsive, user-friendly websites with beautiful interactive elements.
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-8">
            <Button
              className="bg-gradient-to-r from-violet-500 to-blue-500 text-white flex p-6 rounded-lg md:text-xl text-base font-fira-code shadow-lg shadow-blue-500/30"
              endContent={<FaDownload className="ml-2" />}
            >
              <a href={pdf}>Download Resume</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
