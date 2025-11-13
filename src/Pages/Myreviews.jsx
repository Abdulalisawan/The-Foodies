
import { FaCross, FaEdit } from 'react-icons/fa';
import { MdEdit } from 'react-icons/md';
import { RxCross1 } from 'react-icons/rx';
import { Link, useLoaderData } from 'react-router';
import Mycard from '../Components/Mycard';
import { useRef, useState } from 'react';
import { toast } from 'react-toastify';

const Myreviews = () => {
    const data= useLoaderData()
    const[id ,setid]=useState('')
    const[reviews ,setreviews]=useState(data)
    const modalref=useRef()
    console.log(data)
    const handlemodal=(id)=>{
      modalref.current.showModal()
      setid(id)
    }
    const handledelet= async()=>{
      const res= await fetch(`http://localhost:3000/myreview/${id}`,{
        method: "DELETE"
        
      })
      const data= await res.json()
      console.log(data)

      if(data.deletedCount> 0){
        toast('deleted succesfully')
        modalref.current.close()
      }

      setreviews((prev)=>prev.filter(item=> item._id !== id ))
      
      
    }
    return (
        <>
        <div className=" w-full">
      <div className="text-center mb-10 px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl my-10 text-white font-extrabold">
          Find All Your Reviews Here
        </h1>
      </div>

      <div className=" mx-auto px-4">
    
        <div className="hidden md:block overflow-x-auto   ">
          <table className="table w-full">
            <thead>
              <tr className="">
                <th className="text-gray-800 font-semibold">Food Name</th>
                <th className="text-gray-800 font-semibold">Restaurant Name</th>
                <th className="text-gray-800 font-semibold">Date</th>
                <th className="text-gray-800 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((eachdata) => (
                <tr  className="hover:bg-base-200 transition-colors">
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={eachdata.photo}
                            alt={eachdata.foodName}
                          />
                        </div>
                      </div>
                      <div className="font-bold">{eachdata.foodName}</div>
                    </div>
                  </td>
                  <td className="font-medium">{eachdata.restaurantName}</td>
                  <td>
                    <span className="badge badge-ghost">{eachdata.reviewDate}</span>
                  </td>
                  <td>
                    <div  className="flex gap-2">

                      <button
                     
                      

                      

                          onClick={()=>{
                            handlemodal(eachdata._id)
                          }}
                       
                        className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition-colors"
                        title="Delete"
                      >
                        <RxCross1></RxCross1>
                       
                      </button>
                      <Link 
                      to={`/edit-review/${eachdata._id}`}
                        
                        className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-full transition-colors"
                        title="Edit"
                      >
                        <FaEdit></FaEdit>
                        
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View - Visible only on mobile */}
        <div className="md:hidden space-y-4">
          {data.map((eachdata) => (
            <div key={eachdata.id} className="bg-base-100 rounded-lg shadow-xl p-4">
              <div className="flex items-start gap-4 mb-4">
                <div className="avatar">
                  <div className="mask mask-squircle h-20 w-20">
                    <img
                      src={eachdata.photo}
                      alt={eachdata.foodName}
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-1">{eachdata.foodName}</h3>
                  <p className="text-sm opacity-70">{eachdata.restaurantName}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="text-xs font-semibold uppercase opacity-60 mb-1">Review Date</div>
                  <div className="badge badge-ghost">{eachdata.reviewDate}</div>
                </div>

                <div className="flex gap-2 pt-2">
                  <button



                  onClick={()=>{
                            handlemodal(eachdata._id)
                          }}
                   
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors font-semibold"
                  >

                    <RxCross1></RxCross1>
                    
                    
                  </button>
                  <button
                    
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors font-semibold"
                  >
                  <FaEdit></FaEdit>
                   
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {data.length === 0 && (
          <div className="text-center py-20">
            <p className="text-white text-xl opacity-70">No reviews found. Start reviewing your favorite foods!</p>
          </div>
        )}
      </div>
    </div>

    {/* Open the modal using document.getElementById('ID').showModal() method */}

<dialog ref={modalref} id="my_modal_1" className="modal">
  <div className="modal-box bg-emerald-900">
           <h1 className='text-3xl font-semibold text-white'>Edit or Delet your review</h1>
           <div className='flex gap-2 justify-center items-center mt-5'>
           <button


                   onClick={()=>modalref.current.close()}
                  
                   
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors font-semibold"
                  >

                   Cancel
                    
                    
                  </button>
                  <button
                  onClick={handledelet}
                  
                    
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors font-semibold"
                  >
                  Confirm
                   
                  </button>
                  </div>
    <div className="modal-action">
      <form method="dialog">
        
        
      </form>
    </div>
  </div>
</dialog>
  
            
        </>
    );
};

export default Myreviews;