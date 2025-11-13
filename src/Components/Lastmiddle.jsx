import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import Dealscard from "./Dealscard";


const Lastmiddle = () => {
  const[value , setvalue]=useState([])
  
  useEffect(()=>{
  
      fetch(`https://the-foodies-server-sigma.vercel.app/deals`).then(res=>res.json()).then(datu=>setvalue(datu))
    
  },[])

  const deals=value.slice((a,b)=>b.rating - a.rating).slice(0,6)

  return (
    <section className="px-6 md:px-12 py-12 mt-10 bg-emerald-900 rounded-4xl border-white shadow-2xl  mx-3 md:mx-10 ">
    
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-white">Best value</h2>
          <p className="text-white text-2xl">
            We also share the best value you can get in your near right now 
           
          </p>
        </div>
       
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {deals.map((deal) =><Dealscard key={deal._id} deal={deal}></Dealscard> )}
      </div>
    </section>
  );
};

export default Lastmiddle;
