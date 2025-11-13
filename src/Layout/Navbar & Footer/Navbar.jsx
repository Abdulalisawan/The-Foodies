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
        <div className='bg-white border-b-2 md:flex-row flex-col shadow-2xl px-5 py-4 items-center shadow-3xl  flex justify-between  rounded-b-3xl mx-10 '>

            <div className=' text-black text-3xl'>𝕿𝖍𝖊-𝖋𝖔𝖔𝖉𝖎𝖊𝖘</div>

            <div className='flex gap-2'>
              <NavLink className={'text-black font-semibold'} to={'/'}>Home</NavLink>
              <NavLink className={'text-black font-semibold'} to={'/reviews'}>All Reviews</NavLink>
              <NavLink className={'text-black font-semibold'} to={'/Alldeals'}>Alldeals</NavLink>
            
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
    <li> <NavLink className={'text-black font-semibold'} to={`/myreview/${Userdata?.email}`}>My reviews</NavLink></li>
    <li> <NavLink className={'text-black font-semibold'} to={`/my-favourite`}>Favourite Review</NavLink></li>
    <li> 
              <NavLink className={'text-black font-semibold'} to={'/addreview'}>Add Reviews</NavLink></li>
    <li onClick={handlesignout}><button> Logout </button></li>
  </ul>
</div>
</div>
</>):(
   <div className='flex gap-2'>
    <Link to={'/Login'}
  className=" items-center justify-center  px-10 py-4  rounded-[30px] border border-[#2f2f2f] bg-emerald-700 transition-all duration-200 ease-in-out font-semibold text-[14px] text-[#f1f1f1] [text-shadow:0_1px_#000] hover:bg-emerald-900  hover:shadow-[0_4px_6px_rgba(0,0,0,0.3)] active:shadow-[inset_0_0_10px_#777]"
>
  Login
</Link>
<Link to={'/Register'}
  className=" items-center justify-center  px-10 py-4  rounded-[30px] border border-[#2f2f2f] bg-emerald-700 transition-all duration-200 ease-in-out font-semibold text-[14px] text-[#f1f1f1] [text-shadow:0_1px_#000] hover:bg-emerald-900  hover:shadow-[0_4px_6px_rgba(0,0,0,0.3)] active:shadow-[inset_0_0_10px_#777]"
>
  Register
</Link>
</div>)
              }
                

            
            
        </div>
    );
};

export default Navbar;