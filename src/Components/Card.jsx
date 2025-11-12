import React from 'react';
import { FaStar } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router';

const Card = ({eachdata}) => {
    return (
       <div className="bg-gradient-to-b h-[380px] from-[#f5f7f6] to-[#ebf0ec] w-full rounded-3xl p-4 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center relative">
      {/* Image */}
      <img
        src={eachdata.photo}
        alt={'food'}
        className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-md -mt-10"
      />

      {/* Rating */}
      <div className="flex items-center justify-center gap-1 mt-3 text-xl text-emerald-900  font-semibold">
        
        {eachdata.foodName}
      </div>

      {/* Title */}
      <h3 className=" font-bold text-gray-800 mt-1 uppercase tracking-wide">
    {eachdata.restaurantName}
      </h3>

      {/* Description */}
      <p className="text-gray-500 flex gap-1 items-center text-sm  px-3 leading-tight">
      {eachdata.restaurantLocation}<FaLocationDot></FaLocationDot>
      </p>

      {/* Price and Add button */}
      <div className=" items-center w-full mt-4  px-3">
       
        <p className="text-lg font-semibold text-gray-800">  Reviewer: <br />{eachdata.reviewerName}</p>
          <div>
        <p className="text-lg flex items-center justify-center font-semibold text-gray-800"> Date: {eachdata.reviewDate}</p>
        </div>
        <div className='flex items-center  mt-4 justify-between'>
         <div>
        <p className="text-lg flex items-center justify-center font-semibold text-gray-800"> {eachdata.rating} <FaStar></FaStar></p>
        </div>

        <div>
        <Link to={`/review-detail/${eachdata._id}`} className='px-5 py-3 rounded-xl bg-emerald-800 font-semibold text-white my-3 '>Detail</Link>
      </div>
      </div>
        
      </div>
      
      
    </div>
    );
};

export default Card;