import React, { useEffect, useState } from 'react';
import Dealscard from '../Components/Dealscard';

const Deals = () => {

    const[value , setvalue]=useState([])
      
      useEffect(()=>{
      
          fetch(`http://localhost:3000/deals`).then(res=>res.json()).then(datu=>setvalue(datu))
        
      },[])
    return (
        <>
        <div className='text-center my-10'>
            <h1 className='text-4xl text-white font-extrabold '> All of the  <br /> Best Deals are here for you</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mx-10 gap-5 shadow-lg'>
            {
                value.map(deal=><Dealscard key={deal._id} deal={deal}></Dealscard>)

            }
        </div>
            
        </>
    );
};

export default Deals;