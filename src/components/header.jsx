import React, { useContext, useState } from "react";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import { FaRegCopyright } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { ThemeContext } from "./themeContext";
import { menu } from "./dummy";
import { Link } from "react-scroll";
import { RxCross1 } from "react-icons/rx";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sticky top-0 z-50 shadow-md flex p-2 lg:px-10 justify-between items-center transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <div className="flex items-center text-center text-lg">
        <FaRegCopyright />
        <p className="font-semibold ml-2 text-xl">Bhushan Shahare</p>
      </div>

      <div className="hidden gap-6 lg:flex text-lg">
        {menu.map((item, index) => (
          <div key={index} className="hover:text-violet-500  ">
            <Link
              className="cursor-pointer"
              to={item.link}
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={-80}
              duration={500}
              isDynamic={true}
            >
              {item.name}
            </Link>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-3 justify-center">
        <button onClick={toggleTheme} className="p-2 rounded-full text-3xl">
          {theme === "dark" ? (
            <MdOutlineLightMode />
          ) : (
            <MdDarkMode />
          )}
        </button>

        <button className="lg:hidden flex text-3xl" onClick={toggleMenu}>
          {isOpen ? <RxCross1 /> : <CiMenuFries />}
        </button>
        {isOpen && (
          <div className={`flex flex-col lg:hidden absolute top-0 left-0 w-full h-screen items-center transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
            <button
              className="lg:hidden flex absolute top-3 right-3 text-3xl"
              onClick={toggleMenu}
            >
              <RxCross1 />
            </button>
            {menu.map((item, index) => (
              <Link
                key={index}
                className="text-xl mt-9 hover:text-violet-500"
                onClick={toggleMenu}
                to={item.link}
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-100}
                duration={500}
                isDynamic={true}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
