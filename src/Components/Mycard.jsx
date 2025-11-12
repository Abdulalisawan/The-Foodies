import React from 'react';
import { FaEdit } from 'react-icons/fa';
import { RxCross1 } from 'react-icons/rx';

const Mycard = ({eachdata}) => {
    return (
        <>
        {/* <tr className=' md:hidden'>
          <td>
          <div className="flex  items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
      
              <div className="font-bold">{eachdata.foodName}</div>
              
           
          </div>
        </td>

        <td className=''>
          {eachdata.restaurantName}
          <br />
          {eachdata.restaurantLocation}
          <br />
          {eachdata.reviewDate}
          <br />
           <button className=" bg-red-700 text-white px-2 py-2 rounded-full "><RxCross1></RxCross1></button>
          <button className=" bg-green-800 px-2 py-2 rounded-full  "><FaEdit></FaEdit></button>
          
       
        </td>


        </tr> */}
        <tr className='  '>
        
        <td>
          <div className="flex  items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
      
              <div className="font-bold">{eachdata.foodName}</div>
              
           
          </div>
        </td>
        <td>
          {eachdata.restaurantName}
          
       
        </td>
        <td className=''>{eachdata.restaurantLocation}</td>
        <th>
          <button className="btn btn-ghost btn-xs">{eachdata.reviewDate}</button>
        </th>
        <th className='flex gap-2'>
          <button className=" bg-red-700 text-white px-2 py-2 rounded-full "><RxCross1></RxCross1></button>
          <button className=" bg-green-800 px-2 py-2 rounded-full  "><FaEdit></FaEdit></button>
        </th>
      </tr>
    
            
        </>
    );
};

export default Mycard;

  