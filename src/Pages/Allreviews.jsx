import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useRevalidator } from 'react-router';

import Card from '../Components/Card';
import { FaSearch } from 'react-icons/fa';

const Allreviews = () => {
    const data=useLoaderData();
    const revalidator= useRevalidator()
    console.log(data)
    const navigate = useNavigate()
    const [search,setsearch]=useState('')
    const Alldata= data.sort((a,b)=> b.reviewDate - a.reviewDate)

    useEffect(()=>{
      const intervel =setTimeout(() => {
        revalidator.revalidate()
        
      }, 3000);
      return()=>clearTimeout(intervel)
    },[revalidator])

    useEffect(()=>{
        const delay = setTimeout(() => {
            navigate(`/reviews?search=${search}`)
            
        }, 500);
        return ()=> clearTimeout(delay)

    },[search,navigate])
    return (
        <>
        <div className='text-center my-10'>
            <h1 className='text-4xl text-white font-extrabold '> Find your <br /> favourite  Authentic food Here </h1>
        </div>
        <div className='flex px-10 justify-between'>
            <div><h2 className='text-2xl text-white'>Total reviews9({Alldata.length})</h2></div>
            <div>
                <input onChange={(e)=>setsearch(e.target.value)} className=' rounded-3xl bg-white px-3 w-[15vw] py-3 shadow-2xl' type="text" placeholder='Search now' />
            </div>
        </div>
        {
            Alldata.length == 0 ?( <div className="flex flex-col items-center justify-center text-center py-16">
      
      <div className="flex items-center justify-center mb-3">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-700">
          Whoops, no matches
        </h2>
        <span className="ml-2 text-green-500 text-2xl sm:text-3xl">
          <FaSearch></FaSearch>
        </span>
      </div>

      
      <p className="text-gray-500 text-base sm:text-lg">
        We couldn't find any search results.
        <br />
        <span className="text-gray-600 font-medium">Give it another go</span>
      </p>
    </div>):(<div className=' grid mt-15 grid-cols-3 mx-20 gap-5 '>

            {
               Alldata.length == 0 ?(''):(Alldata.map(eachdata=><Card key={eachdata._id} eachdata={eachdata}></Card>))
            }
            
        </div>)
        }
            
        </>
    );
};

export default Allreviews;