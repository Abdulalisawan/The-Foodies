import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router';

const Reviewdetail = () => {
    const data= useLoaderData()
    console.log(data)

    return (
        <div className="flex flex-col md:flex-row items-center md:items-start bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl shadow-lg p-6 md:p-10 max-w-4xl mx-auto my-10">
      
      <div className="w-full  flex justify-center mb-6 md:mb-0">
        <img
          src={data.photo}
          alt={data.foodName}
          className="rounded-2xl w-64 h-64 object-cover shadow-md"
        />
      </div>

      
      <div className="md:ml-8 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-3">
          {data.foodName}
        </h2>
        <p className="text-gray-300 leading-relaxed">
         {data.description}
        </p>
        <p className="text-white  leading-relaxed">
         Restaurant Name: {data.restaurantName}
        </p>
        <p className="text-white leading-relaxed">
        Location :  {data.restaurantLocation}
        </p>
        <p className="text-white
          leading-relaxed">
         Reviewer Name : {data.reviewerName}
        </p>
        <p className="text-white flex gap-2 items-center leading-relaxed">
         Rating : {data.rating}<FaStar></FaStar>
        </p>
        <div className=' flex  items-center justify-between '>        
          <p className="text-white leading-relaxed">
          Date : {data.reviewDate}
        </p>

        <div>
        <Link to={`/reviews`} className='px-5 py-3 rounded-xl bg-emerald-800 font-semibold text-white my-3 '>Back</Link>
      </div>
        </div>

      </div>
    </div>
    );
};

export default Reviewdetail;