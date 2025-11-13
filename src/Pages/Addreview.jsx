;
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Authcontext } from '../Context/Authcontext';
import { toast } from 'react-toastify';
 


const Addreview=()=> {
  
      const { register, handleSubmit, reset , setValue }=useForm();
    const {Userdata}=useContext(Authcontext)
    console.log(Userdata)
    const[date ,setdate]=useState('')
    

    useEffect(()=>{
      const today= new Date().toISOString().split('T')[0]
      setdate(today)
      setValue('reviewDate',today)
    },[setValue])
  
 const handles= async(data)=>{
  console.log(data)
    try{
        const res = await fetch('https://the-foodies-server-sigma.vercel.app/Add-review',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        return res.json(),
        toast(`Review submited done`),
        reset()
        
    }catch(error){
        console.log(`error happend`, error)
    }
   
    

 }

 
  return (
    <div className="flex justify-center items-center min-h-screen  p-4">
      <div className="bg-white rounded-2xl shadow-md w-full max-w-lg overflow-hidden">

        <div className="bg-gradient-to-b from-emerald-500 to-white text-center py-8">
          <h1 className="text-3xl font-semibold text-gray-800">𝕿𝖍𝖊-𝖋𝖔𝖔𝖉𝖎𝖊𝖘</h1>
        </div>


        <form onSubmit={handleSubmit(handles)}  className="p-8 space-y-5">
          <h2 className="text-2xl font-semibold text-center text-gray-800">Add a Review</h2>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Food  Name</label>
              <input
                {...register('foodName')}
              
                placeholder="Food name"
                className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-300 outline-none"
              />
       
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Food Image</label>
              <input
              {...register('photo')}
                placeholder="Enter Image URL"
                className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-300 outline-none"
              />
            
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Restaurants  Name</label>
              <input
              {...register('restaurantName')}
                placeholder="Restaurants  Name"
                className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-300 outline-none"
              />
       
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Restaurants location </label>
              <input
              {...register('restaurantLocation')}
            
              
                placeholder="Restaurants  location"
                className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-300 outline-none"
              />
            
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Reviewer Email</label>
              <input
              defaultValue={Userdata?.email}
              readOnly
              {...register('ReviewerEmail')}
                placeholder="Email"
                className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-300 outline-none"
              />
       
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Date</label>
              <input
              {...register('reviewDate')}
              value={date}
              
                placeholder="Date"
                className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-300 outline-none"
              />
            
            </div>
          </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Reviewer Name</label>
              <input
             
           
              {...register('reviewerName')}
                placeholder="Reviewer Name"
                className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-300 outline-none"
              />
       
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Rating</label>
              <input
              {...register('rating')}
           
              
                placeholder="Rating"
                className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-300 outline-none"
              />
            
            </div>
          </div>

          
           

          
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Enter a review</label>
            <textarea
            {...register('description')}
             
              placeholder="write here"
              rows="4"
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-300 outline-none"
            ></textarea>
          </div>

         
          <button
            type="submit"
            className="w-full bg-emerald-500 text-gray-800 font-semibold py-2 rounded-md hover:bg-indigo-300 transition"
          >
            Submit
          </button>
        </form>

       
      </div>
    </div>
  );
}


export default Addreview;