import React, { useContext } from 'react';
import { Authcontext } from './Authcontext';
import Login from '../Components/Login';
import { Navigate, useLocation } from 'react-router';

const Privaterouter = ({children}) => {
    const{Userdata}=useContext(Authcontext)
    const loacation=useLocation()
    if(Userdata){
        return children;
    }


       
    return <Navigate to='/Login' replace state={{from: loacation}}></Navigate>
    
};

export default Privaterouter;