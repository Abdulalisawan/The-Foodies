import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { Authcontext } from '../Context/Authcontext';
import { toast } from 'react-toastify';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

import { auth } from '../Context/Auth';
const provider= new GoogleAuthProvider()

const Login = () => {
  const {Signin}=useContext(Authcontext)
  
  const navigate= useNavigate()
  const location= useLocation()
  const from=location.state?.from?.pathname || '/'
  console.log(from)
  

  const handlesignin=(e)=>{
    e.preventDefault();
    const email= e.target.email.value
    const password= e.target.pass.value
    Signin(email,password).then((result)=>[
      
      console.log(result.user),
      navigate(from,{replace: true})
      
    ]).catch((err)=>{
      console.log(err),
      toast('Login failed')
    })



  }

  
     const signingogle = ()=>{

      signInWithPopup(auth,provider).then((result)=>{
        console.log(result.user)
        navigate(from,{replace:true})
      }).catch(err=>{
        console.log(err)
      })
    
    

     }

    return (
         <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-white/70 backdrop-blur-xl shadow-lg rounded-3xl p-8 w-[350px] flex flex-col items-center">
        

        <h2 className="text-2xl font-bold text-gray-900 mb-2">Sign in with email</h2>
        <p className="text-gray-600 text-sm mb-6 text-center">
          SIgnin to know where your favourite dish is 
        </p>

        <form onSubmit={(e)=>{
            handlesignin(e)
          }} className="w-full flex flex-col gap-4">
          

          <input type="email" placeholder="Email" name='email' className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-600 outline-none placeholder-gray-500" />
          <input type="password" placeholder="Password" name='pass' className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-600 outline-none placeholder-gray-500" />
         


          

         
          <button 
          type='submit'
            className="flex items-center justify-center w-full h-[50px] rounded-[30px] border border-[#2f2f2f] bg-[linear-gradient(to_top,_#0a0a0a_0%,_#1a1a1a_80%,_#2a2a2a_100%)] transition-all duration-200 ease-in-out font-semibold text-[14px] text-[#f1f1f1] [text-shadow:0_1px_#000] hover:bg-white  hover:shadow-[0_4px_6px_rgba(0,0,0,0.3)] active:shadow-[inset_0_0_10px_#777]"
          >
             Sign In
          </button>
          <div className='flex gap-2'>
          <p>Dont have an acoount?</p> <Link to={'/Register'} className='text-emerald-800'>Register</Link>
          </div>
        </form>

        <div  className="mt-6 text-gray-500 text-sm">Or sign in with</div>

        <div className="flex justify-center gap-4 mt-4">
          <button onClick={signingogle} className="w-10 h-10 rounded-xl bg-white shadow hover:shadow-md flex items-center justify-center">
            <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" className="w-5" />
          </button>
         
        </div>
      </div>
    </div>
    );
};

export default Login;