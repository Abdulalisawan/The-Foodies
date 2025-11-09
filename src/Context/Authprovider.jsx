import React, { useEffect, useState } from 'react';
import { Authcontext } from './Authcontext';
import { auth } from './Auth';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';


const Authprovider = ({children}) => {
    const [loading ,setloading]=useState(true)
    const [Userdata ,setuserdata]=useState(null)

    const Register=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)

    }
    const Signin=( email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)

    }
    const Signout=()=>{
        return signOut(auth)

    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged( auth,(user)=>{
            if(user){
                setuserdata(user)
                console.log('user is available',user)
            
            }else{
                setuserdata(null)
                
            }
            setloading(false)


        })
        return ()=> unsubscribe()
    },[])
if(loading){
    return <span className="loading loading-ring loading-md"></span>
}
    const allData={
        Userdata,
        Register,
        Signin,
        Signout,
        
    }
    return (
        <Authcontext value={allData}>
            {children}
        </Authcontext>
            
        
    );
};

export default Authprovider;