import React from 'react';
import { FaFacebookF, FaGoogle, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { NavLink } from 'react-router';

const Footer = () => {
    return (
        <footer className="bg-emerald-950 dark:bg-gray-900 mx-10 mt-10 mb-0 rounded-t-3xl py-10 md:py-12 flex flex-col justify-center text-white transition-colors duration-200">
           
      <div className="flex justify-center items-center space-x-6 mb-6">
        <div className="p-3 bg-white text-emerald-900 dark:text-emerald-600 rounded-full cursor-pointer hover:opacity-80 transition-opacity">
          <FaFacebookF size={18} />
        </div>
        <div className="p-3 bg-white text-emerald-900 dark:text-emerald-600 rounded-full cursor-pointer hover:opacity-80 transition-opacity">
          <FaInstagram size={18} />
        </div>
      
        <div className="p-3 bg-white text-emerald-900 dark:text-emerald-600 rounded-full cursor-pointer hover:opacity-80 transition-opacity">
          <FaGoogle size={18} />
        </div>
        <div className="p-3 bg-white text-emerald-900 dark:text-emerald-600 rounded-full cursor-pointer hover:opacity-80 transition-opacity">
          <FaYoutube size={18} />
        </div>
      </div>

      <ul className="flex flex-wrap justify-center gap-4 md:gap-8 text-white mb-6 md:mb-8">
        <NavLink className={({isActive}) => isActive ? 'font-semibold text-emerald-300' : 'font-semibold hover:text-emerald-300 transition-colors'} to={'/'}>Home</NavLink>
        <NavLink className={({isActive}) => isActive ? 'font-semibold text-emerald-300' : 'font-semibold hover:text-emerald-300 transition-colors'} to={'/reviews'}>All Reviews</NavLink>
        <NavLink className={({isActive}) => isActive ? 'font-semibold text-emerald-300' : 'font-semibold hover:text-emerald-300 transition-colors'} to={'/Alldeals'}>Deals</NavLink>
        <NavLink className={({isActive}) => isActive ? 'font-semibold text-emerald-300' : 'font-semibold hover:text-emerald-300 transition-colors'} to={'/about'}>About</NavLink>
        <NavLink className={({isActive}) => isActive ? 'font-semibold text-emerald-300' : 'font-semibold hover:text-emerald-300 transition-colors'} to={'/contact'}>Contact</NavLink>
      </ul>

      <ul className="flex flex-wrap justify-center gap-4 md:gap-8 text-gray-300 dark:text-gray-400 mb-6 md:mb-8 text-sm">
        <NavLink className="hover:text-emerald-300 transition-colors" to={'/terms'}>Terms of Service</NavLink>
        <NavLink className="hover:text-emerald-300 transition-colors" to={'/privacy'}>Privacy Policy</NavLink>
      </ul>

      <p className="text-center text-white text-2xl md:text-3xl font-semibold">
        𝕿𝖍𝖊-𝖋𝖔𝖔𝖎𝖎𝖊𝖘
      </p>

      <p className="text-center text-gray-300 dark:text-gray-400 text-sm mt-6 md:mt-8">
        © 2026 The Foodies. All rights reserved. Made with ❤️
      </p>
    </footer>
        
    )
};

export default Footer;