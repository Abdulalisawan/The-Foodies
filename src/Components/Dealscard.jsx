import React from 'react';
import { FaStar } from 'react-icons/fa';

const Dealscard = ({deal}) => {
    return (
        <div
            key={deal.id}
            className="relative bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
           
            <div className="absolute top-3 left-3 bg-rose-500 text-white px-2 py-1 rounded-md flex items-center gap-1 text-sm font-semibold">
              <FaStar className="text-white" size={12} /> {deal.rating}
            </div>

           
            <img
              src={deal.img}
              alt={deal.name}
              className="h-80 w-full object-cover"
            />

            <div className="p-4 flex flex-col gap-2">
              <p className="text-sm text-gray-500">{deal.category}</p>
              <h3 className="font-bold text-lg text-gray-800">{deal.name}</h3>
              <p className="text-sm text-gray-500">{deal.address}</p>
              <div className="flex justify-between items-center mt-3 text-gray-600 text-sm">
                <span>{deal.time}</span>
                <span>{deal.price}</span>
              </div>
            </div>
          </div>
    );
};

export default Dealscard;