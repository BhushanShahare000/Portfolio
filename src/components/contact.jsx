import React, { useContext, useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { social } from "./dummy";
import { ThemeContext } from "./themeContext";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

function Contact() {
  const { theme } = useContext(ThemeContext);

  const initialFormData = {
    name: "",
    email: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      Toastify({
        text: "Please fill out all fields",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        className:
          "bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg max-w-full sm:max-w-sm",
        stopOnFocus: true,
      }).showToast();
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        "https://portfolio-903cf-default-rtdb.firebaseio.com/setFormData.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, message }),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      Toastify({
        text: "Message Sent",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        className:
          "bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg max-w-full sm:max-w-sm",
        stopOnFocus: true,
      }).showToast();

      setFormData(initialFormData); // Reset form data
    } catch (error) {
      console.error("Error submitting form:", error);
      Toastify({
        text: "Error occurred: " + error.message,
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        className:
          "bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg max-w-full sm:max-w-sm",
        stopOnFocus: true,
      }).showToast();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pb-4 justify-center items-center px-4 md:px-32" id="contact">
      <div className="font-poppins pb-6 flex items-center gap-x-4 justify-center text-2xl md:text-5xl font-bold leading-normal">
        <div className="Flex items-center w-10 md:w-20 h-1 justify-center bg-[#9975FB]"></div>
        <p>Contact</p>
        <div className="Flex items-center w-10 md:w-20 h-1 justify-center bg-[#9975FB]"></div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-around p-4">
        <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8 hidden lg:block">
          <h2 className="text-3xl font-bold mb-4">Drop me a message!</h2>
          <p className="mb-4 font-sans">
            You can contact me using below details!
            <br />
            Or
            <br />
            Just fill that form and hit that send button
          </p>
          <p className="text-xl mt-8 font-medium flex items-center gap-2">
            <FaMapLocationDot />
            Gawasi Manapur, Wardha road, Nagpur-441108
          </p>
          <p className="text-xl font-medium mt-4 flex items-center gap-2">
            <IoMdMail />
            bhushanshahare9284@gmail.com
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <form
            method="POST"
            onSubmit={handleSubmit}
            className={`p-6 rounded-2xl shadow-lg max-w-sm mx-auto ${
              theme === "dark" ? "bg-gray-200 text-white" : "bg-white text-black"
            }`}
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="shadow appearance-none border rounded-full w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow appearance-none border rounded-full w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="shadow appearance-none border rounded-xl w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
                placeholder="Enter your message"
                rows="4"
              ></textarea>
            </div>

            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-violet-500 to-blue-500 text-white py-2 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </div>
          </form>
        </div>
        {social.map((social, index) => (
          <div key={index} className="flex gap-6 text-4xl lg:hidden pt-20">
            <a href={social.link1}>
              <FaLinkedin className="cursor-pointer hover:text-violet-500 transition duration-300 delay-150 ease-in-out" />
            </a>
            <a href={social.link2}>
              <FaGithub className="cursor-pointer hover:text-violet-500 transition duration-300 delay-150 ease-in-out" />
            </a>
            <a href={social.link3}>
              <FaInstagram className="cursor-pointer hover:text-violet-500 transition duration-300 delay-150 ease-in-out" />
            </a>
            <a href={social.link4}>
              <FaFacebook className="cursor-pointer hover:text-violet-500 transition duration-300 delay-150 ease-in-out" />
            </a>
          </div>
        ))}
      </div>
      <div className="flex justify-center sticky mt-10 md:mt-16">
        <p className="text-center text-sm md:text-xl">
        Developed by Bhushan Shahare with
          <span className="text-red-500 ml-2">&hearts;</span>
        </p>
      </div>
    </div>
  );
}

export default Contact;
