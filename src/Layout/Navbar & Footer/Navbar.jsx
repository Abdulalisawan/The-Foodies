import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { Authcontext } from '../../Context/Authcontext';

const Navbar = () => {
  const {Userdata,Signout}= useContext(Authcontext)

const handlesignout=()=>{
  Signout().then(()=>{
    console.log(`signout succeful`)

  }).catch(err=>{
    console.log(err)
  })
}
    return (
        <div className='bg-white border-b-2 shadow-2xl px-5 py-4 items-center shadow-3xl  flex justify-between  rounded-b-3xl mx-10 '>

            <div className=' text-black text-3xl'>𝕿𝖍𝖊-𝖋𝖔𝖔𝖉𝖎𝖊𝖘</div>

            <div>
              <NavLink className={'text-black'} to={'/'}>Home</NavLink>
            </div>
            
           


              {
                Userdata ? (
                <>
                <div className='flex gap-3'>    
                <p className='font-semibold text-xl text-black'>{Userdata.displayName}</p>            
                
                <div className="dropdown dropdown-end">
  <div
    tabIndex={0}
    role="button"
    className="btn btn-ghost btn-circle avatar w-[30px] h-[30px] p-0 overflow-hidden"
  >
    <div className="w-full h-full rounded-fulloverflow-hidden">
      
      <img
        src={Userdata.photoURL}
        className="w-full h-full object-cover object-center"
      />
    </div>
  </div>

  <ul
    tabIndex={0}
    className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow-lg"
  >
    <li><a>Profile</a></li>
    <li><a>Dashboard</a></li>
    <li onClick={handlesignout}><a>Logout</a></li>
  </ul>
</div>
</div>
</>):(
   <div className='flex gap-2'>
    <Link to={'/Register'}
  className="flex px-7 items-center justify-center w-full h-[50px] rounded-[30px] border border-[#2f2f2f] bg-[linear-gradient(to_top,_#0a0a0a_0%,_#1a1a1a_80%,_#2a2a2a_100%)] transition-all duration-200 ease-in-out font-semibold text-[14px] text-[#f1f1f1] [text-shadow:0_1px_#000] hover:bg-white  hover:shadow-[0_4px_6px_rgba(0,0,0,0.3)] active:shadow-[inset_0_0_10px_#777]"
>
  Login
</Link>
<Link to={'/Login'}
  className="flex px-5 items-center justify-center w-full h-[50px] rounded-[30px] border border-[#2f2f2f] bg-[linear-gradient(to_top,_#0a0a0a_0%,_#1a1a1a_80%,_#2a2a2a_100%)] transition-all duration-200 ease-in-out font-semibold text-[14px] text-[#f1f1f1] [text-shadow:0_1px_#000] hover:bg-white  hover:shadow-[0_4px_6px_rgba(0,0,0,0.3)] active:shadow-[inset_0_0_10px_#777]"
>
  Register
</Link>
</div>)
              }
                

            
            
        </div>
    );
};

export default Navbar;