import React, { useContext } from "react";
import { ThemeContext } from "../components/themeContext";
import { experience } from "./dummy";

const Experience = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className="pb-24 justify-center items-center px-4 md:px-32"
      id="experience"
    >
      <div className="font-poppins pb-6 flex items-center gap-x-4 justify-center text-2xl md:text-5xl font-bold leading-normal">
        <div className="flex items-center w-10 md:w-20 h-1 justify-center bg-[#9975FB]"></div>
        <p>Experience</p>
        <div className="flex items-center w-10 md:w-20 h-1 justify-center bg-[#9975FB]"></div>
      </div>

      <div className="flex flex-col gap-6 m-3 justify-center items-center">
        {experience.map((item) => (
          <div
            key={item.id}
            className={`w-full max-w-4xl p-6 rounded-lg border border-gray-500/50 transition-all duration-300 transform hover:scale-[1.02] hover:border-[#9975FB]/50 hover:shadow-xl hover:shadow-[#9975FB]/10 ${
              theme === "dark" ? "bg-[#212C44]/80 backdrop-blur-md text-white" : "bg-white/80 backdrop-blur-md text-black"
            }`}
          >
            <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
              <div>
                <h3 className="text-xl md:text-2xl font-bold">{item.title}</h3>
                <p className="text-lg text-[#9975FB] font-semibold">{item.company}</p>
              </div>
              <div className="text-sm md:text-base md:text-right text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                <p className="font-medium">{item.duration}</p>
                <p>{item.location}</p>
              </div>
            </div>
            <ul className="list-disc ml-5 space-y-2 text-sm md:text-base opacity-90">
              {item.description.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
