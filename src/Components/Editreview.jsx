import React, { useContext, useEffect, useState } from 'react';

import { Navigate, useNavigate, useParams } from 'react-router';
import { Authcontext } from '../Context/Authcontext';
import { toast } from 'react-toastify';

const Editreview = () => {

    const [datu ,setdatu]=useState('')
    
    const navigate= useNavigate()

    
    const{id}=useParams()
    console.log(id)
    useEffect(()=>{
        fetch(`https://the-foodies-server-sigma.vercel.app/review-detail/${id}`).then(res=>res.json()).then(data=>setdatu(data))
    },[id])
    const {Userdata}=useContext(Authcontext)
        console.log(Userdata)
        const[date ,setdate]=useState('')
        
    
        useEffect(()=>{
          const today= new Date().toISOString().split('T')[0]
          setdate(today)
          
        },[])
      
   const handlesubmit=async(e)=>{
    e.preventDefault();
    const foodName=e.target.foodname.value 
    const photo= e.target.photo.value 
    const restaurantName= e.target.resturantsname.value 
    const restaurantLocation = e.target.location.value 
    const ReviewerEmail =e.target.email.value 
    const reviewDate = e.target.date.value
    const reviewerName = e.target.reviewername.value 
    const rating = e.target.rating.value
    const description = e.target.des.value
    const data={foodName,photo,restaurantLocation,restaurantName ,ReviewerEmail,reviewDate,reviewerName,rating,description}

   const res= await fetch(`https://the-foodies-server-sigma.vercel.app/edit-review/${id}`,{
        method:'PUT',
        headers:{
             "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    const value= await res.json()
    if (value.modifiedCount > 0) {
    toast.success("Review updated successfully!");
    navigate("/reviews");
  }


   }



    return (
        <div className="flex justify-center items-center min-h-screen  p-4">
      <div className="bg-white rounded-2xl shadow-md w-full max-w-lg overflow-hidden">

        <div className="bg-gradient-to-b from-emerald-500 to-white text-center py-8">
          <h1 className="text-3xl font-semibold text-gray-800">𝕿𝖍𝖊-𝖋𝖔𝖔𝖉𝖎𝖊𝖘</h1>
        </div>


        <form onSubmit={(e)=>{
            handlesubmit(e)
        }}  className="p-8 space-y-5">
          <h2 className="text-2xl font-semibold text-center text-gray-800">Edit Review</h2>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Food  Name</label>
              <input
              
                defaultValue={datu.foodName}
                name='foodname'
              
                placeholder="Food name"
                className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-300 outline-none"
              />
       
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Food Image</label>
              <input
            
              defaultValue={datu.photo}
              name='photo'
                placeholder="Enter Image URL"
                className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-300 outline-none"
              />
            
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Restaurants  Name</label>
              <input
             
              defaultValue={datu.restaurantName}
              name='resturantsname'
                placeholder="Restaurants  Name"
                className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-300 outline-none"
              />
       
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Restaurants location </label>
              <input
              
              defaultValue={datu.restaurantLocation}
              name='location'
            
              
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
             
                placeholder="Email"
                name='email'
                className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-300 outline-none"
              />
       
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Date</label>
              <input
             
              value={date}
              
                placeholder="Date"
                name='date'
                className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-300 outline-none"
              />
            
            </div>
          </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Reviewer Name</label>
              <input
             
           
         
               defaultValue={datu.reviewerName}
                placeholder="Reviewer Name"
                name='reviewername'
                className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-300 outline-none"
              />
       
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Rating</label>
              <input
          
              defaultValue={datu.rating}
              
                  name='rating'
           
              
                placeholder="Rating"
                className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-300 outline-none"
              />
            
            </div>
          </div>

          
           

          
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Enter a review</label>
            <textarea
        
            defaultValue={datu.description}
            name='des'
             
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
};

export default Editreview;