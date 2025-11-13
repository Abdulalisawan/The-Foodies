import React from 'react';
import { Link, useLoaderData } from 'react-router';
import Card from './Card';

const MIddlepart = () => {
    const data= useLoaderData()
    console.log(data)
    const carddata= data.sort((a,b)=>b.rating - a.rating).slice(0,6)
    console.log(carddata)
    return (
        <> <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mx-4 md:mx-10 mt-10 gap-10 justify-between items-center'>
            {
                carddata.map(eachdata=><Card key={eachdata._id} eachdata={eachdata}></Card>)
            }
           
            
        </div>
        <div className='text-center mt-[5vh]'>
        <Link to={'/reviews'}
  className="  items-center justify-center  px-10 py-4  rounded-[30px] border border-[#2f2f2f] bg-emerald-700 transition-all duration-200 ease-in-out font-semibold text-[14px] text-[#f1f1f1] [text-shadow:0_1px_#000] hover:bg-emerald-900  hover:shadow-[0_4px_6px_rgba(0,0,0,0.3)] active:shadow-[inset_0_0_10px_#777]"
>
  Show ALL
</Link>
      </div>
        </>

    );
};

export default MIddlepart;