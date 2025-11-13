import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { useLoaderData } from 'react-router';
import FAvcard from './FAvcard';

const Favourite = () => {
    const Alldata=useLoaderData()
    console.log(Alldata)
    return (
        <>
        <div className='text-center my-10'>
            <h1 className='text-4xl text-white font-extrabold '> Find your <br /> favourite  Authentic food Here </h1>
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
    </div>):(<div className=' grid mt-15 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-2 gap-10 '>

            {
               Alldata.length == 0 ?(''):(Alldata.map(eachdata=><FAvcard key={eachdata._id} eachdata={eachdata}></FAvcard>))
            }
            
        </div>)
        }

            
        </>
    );
};

export default Favourite;