import React from 'react';
import { Link, useLoaderData } from 'react-router';
import Card from './Card';

const MIddlepart = () => {
    const data= useLoaderData()
    console.log(data)
    const carddata= data.sort((a,b)=>b.rating - a.rating).slice(0,6)
    console.log(carddata)
    return (
        <> 
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-4 md:mx-10 gap-10 justify-between items-center'>
            {
                carddata.map(eachdata=><Card key={eachdata._id} eachdata={eachdata}></Card>)
            }
           
            
        </div>
        <div className='text-center mt-12 md:mt-16'>
        <Link to={'/reviews'}
  className="inline-flex items-center justify-center px-10 py-3 md:py-4 rounded-lg border-2 border-emerald-700 bg-emerald-700 transition-all duration-200 ease-in-out font-semibold text-base text-white hover:bg-emerald-800 hover:border-emerald-800 hover:shadow-lg active:shadow-inner dark:bg-emerald-600 dark:border-emerald-600 dark:hover:bg-emerald-700"
>
  View All Reviews
</Link>
      </div>
        </>

    );
};

export default MIddlepart;