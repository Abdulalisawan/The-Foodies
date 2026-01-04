import React from 'react';
import { FaStar } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router';

const FAvcard = ({eachdata}) => {
    return (
        <div className="bg-white dark:bg-gray-800 w-full rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center relative hover:-translate-y-2">
        
      
      <img
        src={eachdata.photo}
        alt={eachdata.foodName}
        className="w-40 h-40 object-cover rounded-full border-4 border-emerald-100 dark:border-gray-700 shadow-md -mt-12 hover:shadow-lg transition-shadow"
      />
     

      
      <div className="flex items-center justify-center gap-1 mt-6 text-xl text-emerald-900 dark:text-emerald-400 font-semibold">
        
        {eachdata.foodName}
      </div>

      <h3 className="font-bold text-gray-800 dark:text-gray-200 mt-2 uppercase tracking-wide text-sm">
    {eachdata.restaurantName}
      </h3>

     
      <p className="text-gray-600 dark:text-gray-400 flex gap-1 items-center text-sm px-3 leading-tight mt-2">
      {eachdata.restaurantLocation}<FaLocationDot></FaLocationDot>
      </p>

      
      <div className="w-full mt-6 px-3">
       
        <p className="text-base font-semibold text-gray-800 dark:text-gray-200">Reviewer: <br className='md:hidden' />{eachdata.reviewerName}</p>
          <div>
        <p className="text-base flex items-center justify-center font-semibold text-gray-800 dark:text-gray-200 mt-2">Date: {eachdata.reviewDate}</p>
        </div>
        <div className='flex items-center mt-6 justify-center gap-6'>
          <div className='flex gap-1 items-center'>
        <p className="text-base flex items-center justify-center font-semibold text-gray-800 dark:text-gray-200 gap-1">{eachdata.rating} <FaStar className='text-yellow-400'></FaStar></p>
        </div>
       

        
        

        <div>
        <Link to={`/review-detail/${eachdata._id}`} className='inline-block px-5 py-2.5 rounded-lg bg-emerald-700 dark:bg-emerald-600 font-semibold text-white hover:bg-emerald-800 dark:hover:bg-emerald-700 transition-colors duration-200 mt-4'>View</Link>
      </div>
      </div>
        
      </div>
      
      
    </div>
    );
};

export default FAvcard;