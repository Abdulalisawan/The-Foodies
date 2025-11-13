import React from 'react';
import { FaFacebookF, FaGoogle, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-emerald-950 mx-10 rounded-t-3xl h-[30vh] flex flex-col justify-center text-white py-10">
      
      
      <div className="flex justify-center items-center space-x-6 mb-6">
        <div className="p-3 bg-white text-black rounded-full cursor-pointer hover:opacity-80">
          <FaFacebookF size={18} />
        </div>
        <div className="p-3 bg-white text-black rounded-full cursor-pointer hover:opacity-80">
          <FaInstagram size={18} />
        </div>
        <div className="p-3 bg-white text-black rounded-full cursor-pointer hover:opacity-80">
          <FaTwitter size={18} />
        </div>
        <div className="p-3 bg-white text-black rounded-full cursor-pointer hover:opacity-80">
          <FaGoogle size={18} />
        </div>
        <div className="p-3 bg-white text-black rounded-full cursor-pointer hover:opacity-80">
          <FaYoutube   size={18} />
        </div>
      </div>

 
      <ul className="flex justify-center space-x-8 text-sm mb-4">
        <li className="cursor-pointer hover:text-gray-300">Home</li>
        <li className="cursor-pointer hover:text-gray-300">News</li>
        <li className="cursor-pointer hover:text-gray-300">About</li>
        <li className="cursor-pointer hover:text-gray-300">Contact Us</li>
        <li className="cursor-pointer hover:text-gray-300">Our Team</li>
      </ul>

     
      <p className="text-center text-xs text-gray-400">
        Copyright ©2025
      </p>
    </footer>
        
    )
};

export default Footer;