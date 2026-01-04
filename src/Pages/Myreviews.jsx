
import { FaCross, FaEdit, FaTrash, FaStar } from 'react-icons/fa';
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
    const [sortBy, setSortBy] = useState('date')
    
    console.log(data)
    
    const handlemodal=(id)=>{
      modalref.current.showModal()
      setid(id)
    }
    
    const handledelet= async()=>{
      const res= await fetch(`https://the-foodies-server-sigma.vercel.app/myreview/${id}`,{
        method: "DELETE"
        
      })
      const data= await res.json()
      console.log(data)

      if(data.deletedCount> 0){
        toast('Deleted successfully')
        modalref.current.close()
      }

      setreviews((prev)=>prev.filter(item=> item._id !== id ))
    }

    const sortedReviews = [...reviews].sort((a, b) => {
      if (sortBy === 'date') {
        return new Date(b.reviewDate) - new Date(a.reviewDate)
      } else if (sortBy === 'name') {
        return a.foodName.localeCompare(b.foodName)
      } else if (sortBy === 'rating') {
        return (b.rating || 0) - (a.rating || 0)
      }
      return 0
    })
    
    return (
        <>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 w-full">
      <div className="text-center mb-10 px-4 pt-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-2">
          My Reviews
        </h1>
        <p className="text-gray-600 dark:text-gray-400">Manage and track all your food reviews</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-8">
        {/* Controls Bar */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Total Reviews: <span className="text-emerald-600 dark:text-emerald-400 font-bold">{reviews.length}</span>
            </div>
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Sort by:</label>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-emerald-500"
              >
                <option value="date">Latest First</option>
                <option value="name">Food Name</option>
                <option value="rating">Highest Rating</option>
              </select>
            </div>
          </div>
        </div>
    
        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto rounded-lg shadow-lg bg-white dark:bg-gray-800">
          <table className="w-full">
            <thead className="bg-gray-100 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Food Name</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Restaurant</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Category</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white">Rating</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Date</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {sortedReviews.map((eachdata) => (
                <tr key={eachdata._id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={eachdata.photo}
                        alt={eachdata.foodName}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">{eachdata.foodName}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-300">{eachdata.restaurantName}</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300">
                      {eachdata.category || 'N/A'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center gap-1">
                      <span className="text-yellow-500">★</span>
                      <span className="font-semibold text-gray-900 dark:text-white">{eachdata.rating || 'N/A'}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-300 text-sm">{eachdata.reviewDate}</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2 justify-center">
                      <Link 
                        to={`/dashboard/edit-review/${eachdata._id}`}
                        className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg transition-colors text-sm font-medium"
                        title="Edit"
                      >
                        <FaEdit />
                        <span>Edit</span>
                      </Link>
                      <button
                        onClick={() => handlemodal(eachdata._id)}
                        className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg transition-colors text-sm font-medium"
                        title="Delete"
                      >
                        <FaTrash />
                        <span>Delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          {sortedReviews.map((eachdata) => (
            <div key={eachdata._id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={eachdata.photo}
                  alt={eachdata.foodName}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white truncate">{eachdata.foodName}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{eachdata.restaurantName}</p>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300">
                      {eachdata.category || 'N/A'}
                    </span>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-500">★</span>
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">{eachdata.rating || 'N/A'}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-4 text-sm text-gray-600 dark:text-gray-400 font-medium">
                {eachdata.reviewDate}
              </div>

              <div className="flex gap-2">
                <Link
                  to={`/dashboard/edit-review/${eachdata._id}`}
                  className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors font-semibold text-sm"
                >
                  <FaEdit /> Edit
                </Link>
                <button
                  onClick={() => handlemodal(eachdata._id)}
                  className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors font-semibold text-sm"
                >
                  <FaTrash /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {reviews.length === 0 && (
          <div className="text-center py-20 bg-white dark:bg-gray-800 rounded-lg">
            <p className="text-gray-700 dark:text-gray-300 text-lg mb-4">No reviews found</p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">Start reviewing your favorite foods!</p>
            <Link to="/dashboard/addreview" className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Add Your First Review
            </Link>
          </div>
        )}
      </div>
    </div>

    {/* Delete Confirmation Modal */}
    <dialog ref={modalref} className="modal">
      <div className="modal-box bg-white dark:bg-gray-800 max-w-md">
        <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-4">Delete Review</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-6">Are you sure you want to delete this review? This action cannot be undone.</p>
        <div className="flex gap-3 justify-end">
          <button
            onClick={() => modalref.current.close()}
            className="px-6 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors font-medium"
          >
            Cancel
          </button>
          <button
            onClick={handledelet}
            className="px-6 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white transition-colors font-medium flex items-center gap-2"
          >
            <FaTrash /> Delete
          </button>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button onClick={() => modalref.current.close()}>Close</button>
      </form>
    </dialog>
        </>
    );
};

export default Myreviews;