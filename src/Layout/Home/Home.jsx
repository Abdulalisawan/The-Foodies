import React from 'react';
import Navbar from '../Navbar & Footer/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Navbar & Footer/Footer';

const Home = () => {
    return (
       
        <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-200">
        <Navbar />
       
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        </div>
    )
};

export default Home;