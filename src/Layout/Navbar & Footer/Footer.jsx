import React from 'react';
import { FaFacebookF, FaGoogle, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { NavLink } from 'react-router';

const Footer = () => {
    return (
        <footer className="bg-emerald-950  mx-10  rounded-t-3xl h-[30vh] flex flex-col justify-center text-white ">
           
            
      
      
      <div className="flex justify-center items-center space-x-6 mb-6">
        <div className="p-3 bg-white text-black rounded-full cursor-pointer hover:opacity-80">
          <FaFacebookF size={18} />
        </div>
        <div className="p-3 bg-white text-black rounded-full cursor-pointer hover:opacity-80">
          <FaInstagram size={18} />
        </div>
      
        <div className="p-3 bg-white text-black rounded-full cursor-pointer hover:opacity-80">
          <FaGoogle size={18} />
        </div>
        <div className="p-3 bg-white text-black rounded-full cursor-pointer hover:opacity-80">
          <FaYoutube   size={18} />
        </div>
      </div>

 
      <ul className="flex justify-center space-x-8  text-white mb-4">
        <NavLink className={' font-semibold'} to={'/'}>Home</NavLink>
        <NavLink className={' font-semibold'} to={'/reviews'}>All Reviews</NavLink>
        <NavLink className={' font-semibold'} to={'/Alldeals'}>Alldeals</NavLink>
      </ul>

     
      <p className="text-center  text-white text-3xl font-semibold">
        𝕿𝖍𝖊-𝖋𝖔𝖔𝖉𝖎𝖊𝖘
      </p>
    
     

    </footer>
        
    )
};

export default Footer;