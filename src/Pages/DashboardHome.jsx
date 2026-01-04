import React, { useContext, useEffect, useState } from 'react'
import { Authcontext } from '../Context/Authcontext'
import { FaEdit, FaPlus, FaHeart, FaBook, FaUser } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { getAuth, updateProfile } from 'firebase/auth'
import { Link } from 'react-router'

const DashboardHome = () => {
  const { Userdata } = useContext(Authcontext)

  const [isEditing, setIsEditing] = useState(false)
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    displayName: '',
    photoURL: '',
    email: ''
  })

  /* 🔥 FIX 1: Sync when Userdata loads */
  useEffect(() => {
    if (Userdata) {
      setFormData({
        displayName: Userdata.displayName || '',
        photoURL: Userdata.photoURL || '',
        email: Userdata.email || ''
      })
    }
  }, [Userdata])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  /* 🔥 FIX 2: Proper profile update */
  const handleProfileUpdate = async () => {
    try {
      setLoading(true)
      const auth = getAuth()
      const user = auth.currentUser

      if (!user) {
        toast.error('User not authenticated')
        return
      }

      await updateProfile(user, {
        displayName: formData.displayName,
        photoURL: formData.photoURL
      })

      await user.reload() // CRITICAL

      toast.success('Profile updated successfully!')
      setIsEditing(false)

    } catch (err) {
      console.error(err)
      toast.error('Profile update failed')
    } finally {
      setLoading(false)
    }
  }

  if (!Userdata) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-emerald-500"></span>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Welcome back, {Userdata.displayName}!
          </p>
        </div>

        {/* Profile */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-6">
              <div className="relative">
                <img
                  src={formData.photoURL || 'https://via.placeholder.com/120'}
                  alt="Profile"
                  className="w-24 h-24 rounded-full object-cover border-4 border-emerald-500"
                />
                <div className="absolute bottom-0 right-0 bg-emerald-500 text-white p-2 rounded-full">
                  <FaUser className="text-sm" />
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {formData.displayName}
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  {formData.email}
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsEditing(!isEditing)}
              className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg"
            >
              <FaEdit /> Edit Profile
            </button>
          </div>

          {isEditing && (
            <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  name="displayName"
                  value={formData.displayName}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  className="px-4 py-2 rounded-lg border dark:bg-gray-800"
                />

                <input
                  name="photoURL"
                  value={formData.photoURL}
                  onChange={handleInputChange}
                  placeholder="Photo URL"
                  className="px-4 py-2 rounded-lg border dark:bg-gray-800"
                />
              </div>

              <div className="flex gap-3 mt-4">
                <button
                  onClick={handleProfileUpdate}
                  disabled={loading}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg disabled:opacity-50"
                >
                  Save Changes
                </button>

                <button
                  onClick={() => setIsEditing(false)}
                  className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-2 rounded-lg"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Quick Actions */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
         <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Quick Actions</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link to="/dashboard/addreview" className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg transition-colors font-medium">
              <FaPlus /> Add New Review
            </Link>

            <Link to={`my-favourite/${Userdata.email}`} className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors font-medium">
              <FaBook /> View My Reviews
            </Link>

            <Link to={`my-favourite/${Userdata.email}`} className="flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg transition-colors font-medium">
              <FaHeart /> View Favorites
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default DashboardHome
