import React, { useContext } from 'react';
import { Authcontext } from './Authcontext';
import Login from '../Components/Login';

const Privaterouter = ({children}) => {
    const{userdata}=useContext(Authcontext)
    if(userdata){
        return children
    }else{
        return <Login></Login>
    }
};

export default Privaterouter;