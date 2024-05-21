import React, { useState } from 'react';
import { FaLinkedin ,FaGithub , FaInstagram,FaFacebook } from "react-icons/fa";

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
      };
    

   
      return (
        <div
        className=" pb-24 justify-center items-center  px-4 md:px-32"
        id="contact"
      >
           <div className="font-poppins pb-6 flex items-center gap-x-4 justify-center  text-2xl md:text-5xl  font-bold leading-normal">
            <div
              className="Flex items-center w-10 md:w-20 h-1 justify-center bg-[#9975FB] 
    "
            ></div>
            <p>Contact</p>
            <div
              className="Flex items-center w-10 md:w-20 h-1 justify-center bg-[#9975FB]
    "
            ></div>
          </div>

        <div className="flex flex-col lg:flex-row items-center justify-around   p-4">
  <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8 hidden lg:block">
    <h2 className="text-3xl font-bold mb-4">Drop me a message!</h2>
    <p className="mb-4 font-serif">
      You can contact me using below details!
      <br />
      Or
      <br />
      Just fill that form and hit that send button
    </p>
    <p className="text-lg font-medium">
   Gawasi Manapur, Wardha road, Nagpur-441108
    </p>
    <p className="text-lg font-medium mt-4">
  bhushanshahare9284@gmail.com
    </p>
    <div className='flex gap-4 text-3xl mt-8'>
    <FaLinkedin className="cursor-pointer hover:text-violet-500"/>
< FaGithub className="cursor-pointer hover:text-violet-500"/>
<FaInstagram className="cursor-pointer hover:text-violet-500"/>
<FaFacebook className="cursor-pointer hover:text-violet-500"/> 
    </div>
  </div>
  <div className="w-full lg:w-1/2">
    <form 
      onSubmit={handleSubmit} 
      className="bg-white p-6 rounded-2xl shadow-lg max-w-sm mx-auto transition-transform transform hover:scale-105"
    >
      <h2 className="text-2xl font-semibold mb-4 text-center">Contact Us</h2>
      
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
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
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
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
        <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
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
        >
          Send
        </button>
      </div>
    </form>
  </div>
  <div className='flex gap-4 text-3xl  lg:hidden mt-9'>
    <FaLinkedin className="cursor-pointer hover:text-violet-500"/>
< FaGithub className="cursor-pointer hover:text-violet-500"/>
<FaInstagram className="cursor-pointer hover:text-violet-500"/>
<FaFacebook className="cursor-pointer hover:text-violet-500"/> 
    </div>
</div>


   
        </div>
  )
}

export default Contact