import React, { useContext } from 'react';
import { FaClover, FaPerson } from 'react-icons/fa6';
import { Link, NavLink, Outlet } from 'react-router';
import FAvcard from '../Components/FAvcard';
import { IoMdAdd, IoMdPerson } from 'react-icons/io';
import { Authcontext } from '../Context/Authcontext';
import { FaHome, FaSignOutAlt } from 'react-icons/fa';

const Dashboard = () => {
      const {Userdata}= useContext(Authcontext)
    return (
       <div className="drawer lg:drawer-open">
  
  <div className="drawer-content">
   
    <nav className="navbar w-full bg-base-300">
    
    
      <Link to={`/`} className="px-4 flex items-center gap-1.5"> <FaHome />Back to home</Link>
    </nav>
   
    <div className="p-4"><Outlet></Outlet></div>
  </div>

  
</div>
    );
};

export default Dashboard;