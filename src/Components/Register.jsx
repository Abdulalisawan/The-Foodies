import React, { useContext, useState } from 'react';
import { Link, useNavigate, } from 'react-router';
import { Authcontext } from '../Context/Authcontext';
import { GoogleAuthProvider, signInWithPopup, updateProfile } from 'firebase/auth';
import { auth } from '../Context/Auth';
import { toast } from 'react-toastify';

const provider = new GoogleAuthProvider()


const Register = () => {
  const{ Register,Userdata}= useContext(Authcontext)
  const[errror, saterrror]=useState('')
  const navigate= useNavigate()
 
 
  const hadnleregister= async(e)=>{
    
    e.preventDefault()
    const email= e.target.email.value
    const username= e.target.username.value
    const password= e.target.pass.value
    const photo= e.target.photo.value
    
    const  upeprregex=/^(?=.*[A-Z]).+$/
    const lowerregex=  /^(?=.*[a-z]).+$/
    const numberregex= /^.{6,}$/
    if(!upeprregex.test(password)){
      saterrror(`Atleast One Uppercase letter`)
      return
      
    }
    if(!lowerregex.test(password)){
      saterrror(`Atleast One lowercase letter`)
      return

    }
    if(!numberregex.test(password)){
        saterrror(`Atleast 6 character long`)
        return

    }
    
    saterrror("")
    Register(email,password).then((result)=>{
      console.log(result.user)
      navigate('/')
      
      updateProfile(auth.currentUser,{
        displayName:username,
        photoURL:photo,
      })
    }).catch((err)=>{
      console.log(err)
      toast('Signed UP Failed')
    })
    e.target.reset()


   

  }


  const googlesignin=()=>{
    signInWithPopup(auth,provider).then((result)=>{
      console.log(result.user)
    }).catch((err)=>{
      console.log(err)
    })

  }


  
    return (
        
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-white/70 backdrop-blur-xl shadow-lg rounded-3xl p-8 w-[350px] flex flex-col items-center">
        

        <h2 className="text-2xl font-bold text-gray-900 mb-2">Sign UP with email</h2>
        <p className="text-gray-600 text-sm mb-6 text-center">
          SIgnup to know where your favourite dish is 
        </p>

        <form onSubmit={(e)=>{
          hadnleregister(e)
        }} className="w-full flex flex-col gap-4">
          <input type="text" name='username' placeholder="Enter your name" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-600 outline-none placeholder-gray-500" />

          <input type="email" placeholder="Email" name='email' className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-600 outline-none placeholder-gray-500" />
          <input onChange={()=>{
            saterrror("")
          }} type="password" placeholder="Password" name='pass' className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-600 outline-none placeholder-gray-500" />
          <p className=' text-red-500'> {errror}</p>
          <input type="text" placeholder="Enter Your photourl" name='photo' className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-600 outline-none placeholder-gray-500" />


          

         
          <button
          type='submit'
            className="flex items-center justify-center w-full h-[50px] rounded-[30px] border border-[#2f2f2f] bg-[linear-gradient(to_top,_#0a0a0a_0%,_#1a1a1a_80%,_#2a2a2a_100%)] transition-all duration-200 ease-in-out font-semibold text-[14px] text-[#f1f1f1] [text-shadow:0_1px_#000] hover:bg-white  hover:shadow-[0_4px_6px_rgba(0,0,0,0.3)] active:shadow-[inset_0_0_10px_#777]"
          >
            Get Started
          </button>
          <div className='flex gap-2'>
          <p>All raedy have an acoount?</p><Link to={'/Login'} className='text-emerald-800'>Login</Link>
          </div>
        </form>

        <div className="mt-6 text-gray-500 text-sm">Or sign Up with</div>

        <div onClick={googlesignin} className="flex justify-center gap-4 mt-4">
          <button className="w-10 h-10 rounded-xl bg-white shadow hover:shadow-md flex items-center justify-center">
            <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" className="w-5" />
          </button>
         
        </div>
      </div>
    </div>
  );
};


    


export default Register;