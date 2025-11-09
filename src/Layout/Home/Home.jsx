import React from 'react';
import Navbar from '../Navbar & Footer/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Navbar & Footer/Footer';

const Home = () => {
    return (
        <div className="bg-gradient-to-b from-emerald-800 to-white">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
        </div>
    )
};

export default Home;