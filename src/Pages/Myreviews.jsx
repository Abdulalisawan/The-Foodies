import React from 'react';
import { FaCross } from 'react-icons/fa';
import { MdEdit } from 'react-icons/md';
import { RxCross1 } from 'react-icons/rx';

const Myreviews = () => {
    return (
        <>
        <div className='text-center my-10'>
            <h1 className='text-4xl text-white font-extrabold '> Find your <br /> all your reviews Here </h1>
        </div>

            <div className="overflow-x-auto  border-2 mx-10">
  <table className="table">
    
    <thead>
      <tr className=' text-gray-800 font-semibold'>
        
        <th>Food Name</th>
        <th>Restaurant Name</th>
        <th>Restaurant Location</th>
        <th>Date</th>
        <th>Delet/edit</th>
      </tr>
    </thead>
    <tbody>

        

      </tbody>

    
    
  </table>
</div>
            
        </>
    );
};

export default Myreviews;