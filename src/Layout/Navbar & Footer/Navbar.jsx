import React, { useContext, useState, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router';
import { Authcontext } from '../../Context/Authcontext';
import ThemeToggle from '../../Components/ThemeToggle';

const Navbar = () => {
  const { Userdata, Signout } = useContext(Authcontext);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handlesignout = () => {
    Signout()
      .then(() => {
        console.log(`signout succeful`);
        setOpen(false);
      })
      .catch(err => {
        console.log(err);
      });
  };

  // click outside to close
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div className='sticky top-0 z-50 bg-white dark:bg-gray-800 border-b-2 border-gray-200 dark:border-gray-700 md:flex-row flex-col shadow-lg px-5 py-4 items-center shadow-3xl flex justify-between rounded-b-3xl mx-10 transition-colors duration-200'>

      <div className='text-black dark:text-white text-3xl font-bold'>
        𝕿𝖍𝖊-𝖋𝖔𝖔𝖉𝖎𝖊𝖘
      </div>

      <div className='flex gap-2'>
        <NavLink className={({ isActive }) => isActive ? 'text-emerald-600 dark:text-emerald-400 font-semibold border-b-2 border-emerald-600' : 'text-black dark:text-white font-semibold hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors'} to={'/'}>Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'text-emerald-600 dark:text-emerald-400 font-semibold border-b-2 border-emerald-600' : 'text-black dark:text-white font-semibold hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors'} to={'/reviews'}>All Reviews</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'text-emerald-600 dark:text-emerald-400 font-semibold border-b-2 border-emerald-600' : 'text-black dark:text-white font-semibold hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors'} to={'/Alldeals'}>Deals</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'text-emerald-600 dark:text-emerald-400 font-semibold border-b-2 border-emerald-600' : 'text-black dark:text-white font-semibold hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors'} to={'/about'}>About</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'text-emerald-600 dark:text-emerald-400 font-semibold border-b-2 border-emerald-600' : 'text-black dark:text-white font-semibold hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors'} to={'/contact'}>Contact</NavLink>
      </div>

      <div className='flex items-center gap-4'>
        <ThemeToggle />

        {Userdata ? (
          <div ref={dropdownRef} className="relative">
            {/* Trigger */}
            <div
              onClick={() => setOpen(prev => !prev)}
              className="flex items-center gap-3 cursor-pointer"
            >
              <p className="font-semibold text-xl text-black dark:text-white">
                {Userdata.displayName}
              </p>

              <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-300">
                <img
                  src={Userdata.photoURL}
                  alt="User Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Dropdown Menu */}
            {open && (
              <ul className="absolute right-0 py-3 bg-white px-3 mt-3 w-52 rounded-box bg-base-100 shadow-lg">
                <li>
                  <NavLink
                    to="/Dashboard"
                    className="font-semibold hover:text-emerald-600 dark:hover:text-emerald-400"
                    onClick={() => setOpen(false)}
                  >
                    Dashboard
                  </NavLink>
                </li>

              

                <li>
                  <button
                    onClick={handlesignout}
                    className="font-semibold text-left hover:text-emerald-600 dark:hover:text-emerald-400"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            )}
          </div>
        ) : (
          <div className='flex gap-2'>
            <Link to={'/Login'} className="items-center justify-center px-10 py-2 rounded-[30px] border border-[#2f2f2f] bg-emerald-700 transition-all duration-200 ease-in-out font-semibold text-[14px] text-[#f1f1f1] hover:bg-emerald-900 hover:shadow-[0_4px_6px_rgba(0,0,0,0.3)] active:shadow-[inset_0_0_10px_#777]">
              Login
            </Link>
            <Link to={'/Register'} className="items-center justify-center px-10 py-2 rounded-[30px] border border-[#2f2f2f] bg-emerald-700 transition-all duration-200 ease-in-out font-semibold text-[14px] text-[#f1f1f1] hover:bg-emerald-900 hover:shadow-[0_4px_6px_rgba(0,0,0,0.3)] active:shadow-[inset_0_0_10px_#777]">
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
