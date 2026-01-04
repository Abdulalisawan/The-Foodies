import React, { useContext, useState } from 'react';
import { Link, useNavigate, } from 'react-router';
import { Authcontext } from '../Context/Authcontext';
import { GoogleAuthProvider, signInWithPopup, updateProfile } from 'firebase/auth';
import { auth } from '../Context/Auth';
import { toast } from 'react-toastify';
import { FaGoogle, FaEye, FaEyeSlash, FaSpinner, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const provider = new GoogleAuthProvider()

const Register = () => {
  const{ Register,Userdata}= useContext(Authcontext)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [googleLoading, setGoogleLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  
  const [passwordValidation, setPasswordValidation] = useState({
    hasUppercase: false,
    hasLowercase: false,
    hasMinLength: false
  })
  
  const navigate= useNavigate()
 
  const validatePassword = (password) => {
    const validation = {
      hasUppercase: /^(?=.*[A-Z]).+$/.test(password),
      hasLowercase: /^(?=.*[a-z]).+$/.test(password),
      hasMinLength: /^.{6,}$/.test(password)
    }
    setPasswordValidation(validation)
    return Object.values(validation).every(v => v === true)
  }

  const hadnleregister = async(e) => {
    e.preventDefault()
    setError('')
    setSuccessMessage('')
    setLoading(true)
    
    const email = e.target.email.value?.trim()
    const username = e.target.username.value?.trim()
    const password = e.target.pass.value
    const photo = e.target.photo.value?.trim()
    
    // Validation
    if (!email || !username || !password || !photo) {
      setError('Please fill in all fields')
      setLoading(false)
      return
    }

    if (!validatePassword(password)) {
      setError('Password must contain uppercase, lowercase, and be at least 6 characters')
      setLoading(false)
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address')
      setLoading(false)
      return
    }

    if (username.length < 2) {
      setError('Username must be at least 2 characters')
      setLoading(false)
      return
    }
    
    Register(email, password).then((result) => {
      console.log(result.user)
      
      // Update profile
      updateProfile(auth.currentUser, {
        displayName: username,
        photoURL: photo,
      }).then(() => {
        setSuccessMessage('Registration successful! Redirecting to home...')
        setTimeout(() => {
          navigate('/')
        }, 1500)
      })
      
    }).catch((err) => {
      console.log(err)
      const errorMessage = err.code === 'auth/email-already-in-use'
        ? 'This email is already registered'
        : err.code === 'auth/invalid-email'
        ? 'Please enter a valid email address'
        : err.code === 'auth/weak-password'
        ? 'Password is too weak'
        : 'Registration failed. Please try again'
      setError(errorMessage)
      toast.error(errorMessage)
    }).finally(() => {
      setLoading(false)
      e.target.reset()
      setPasswordValidation({ hasUppercase: false, hasLowercase: false, hasMinLength: false })
    })
  }

  const googlesignin = () => {
    setGoogleLoading(true)
    setError('')
    
    signInWithPopup(auth, provider).then((result) => {
      console.log(result.user)
      setSuccessMessage('Registration successful! Redirecting...')
      setTimeout(() => {
        navigate('/')
      }, 500)
    }).catch((err) => {
      console.log(err)
      const errorMessage = err.code === 'auth/popup-closed-by-user'
        ? 'Login popup was closed'
        : 'Google registration failed. Please try again'
      setError(errorMessage)
      toast.error(errorMessage)
    }).finally(() => {
      setGoogleLoading(false)
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="bg-white dark:bg-gray-800 shadow-xl rounded-3xl p-8 w-full max-w-[420px] flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Join The Foodies
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Create an account to share your food experiences
          </p>
        </div>

        {/* Success Message */}
        {successMessage && (
          <div className="w-full mb-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center gap-3">
            <FaCheckCircle className="text-green-600 dark:text-green-400 flex-shrink-0" />
            <p className="text-green-700 dark:text-green-300 text-sm font-medium">{successMessage}</p>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="w-full mb-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
            <p className="text-red-700 dark:text-red-300 text-sm font-medium">{error}</p>
          </div>
        )}

        {/* Registration Form */}
        <form onSubmit={hadnleregister} className="w-full flex flex-col gap-4 mb-6">
          
          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Full Name
            </label>
            <input 
              type="text" 
              name='username' 
              placeholder="John Doe"
              disabled={loading}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 outline-none placeholder-gray-500 dark:placeholder-gray-400 disabled:opacity-50 disabled:cursor-not-allowed transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email Address
            </label>
            <input 
              type="email" 
              placeholder="you@example.com" 
              name='email'
              disabled={loading}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 outline-none placeholder-gray-500 dark:placeholder-gray-400 disabled:opacity-50 disabled:cursor-not-allowed transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Password
            </label>
            <div className="relative mb-3">
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="••••••••" 
                name='pass'
                disabled={loading}
                onChange={(e) => validatePassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 outline-none placeholder-gray-500 dark:placeholder-gray-400 disabled:opacity-50 disabled:cursor-not-allowed transition pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                disabled={loading}
              >
                {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </button>
            </div>

            {/* Password Requirements */}
            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3 space-y-2">
              <div className="flex items-center gap-2">
                {passwordValidation.hasUppercase ? (
                  <FaCheckCircle className="text-green-500 text-sm flex-shrink-0" />
                ) : (
                  <FaTimesCircle className="text-gray-300 dark:text-gray-500 text-sm flex-shrink-0" />
                )}
                <span className={`text-xs ${passwordValidation.hasUppercase ? 'text-green-600 dark:text-green-400' : 'text-gray-600 dark:text-gray-400'}`}>
                  At least one uppercase letter
                </span>
              </div>
              <div className="flex items-center gap-2">
                {passwordValidation.hasLowercase ? (
                  <FaCheckCircle className="text-green-500 text-sm flex-shrink-0" />
                ) : (
                  <FaTimesCircle className="text-gray-300 dark:text-gray-500 text-sm flex-shrink-0" />
                )}
                <span className={`text-xs ${passwordValidation.hasLowercase ? 'text-green-600 dark:text-green-400' : 'text-gray-600 dark:text-gray-400'}`}>
                  At least one lowercase letter
                </span>
              </div>
              <div className="flex items-center gap-2">
                {passwordValidation.hasMinLength ? (
                  <FaCheckCircle className="text-green-500 text-sm flex-shrink-0" />
                ) : (
                  <FaTimesCircle className="text-gray-300 dark:text-gray-500 text-sm flex-shrink-0" />
                )}
                <span className={`text-xs ${passwordValidation.hasMinLength ? 'text-green-600 dark:text-green-400' : 'text-gray-600 dark:text-gray-400'}`}>
                  At least 6 characters
                </span>
              </div>
            </div>
          </div>

          {/* Photo URL */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Profile Photo URL
            </label>
            <input 
              type="url" 
              placeholder="https://example.com/photo.jpg" 
              name='photo'
              disabled={loading}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 outline-none placeholder-gray-500 dark:placeholder-gray-400 disabled:opacity-50 disabled:cursor-not-allowed transition"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Must be a valid image URL (jpg, png, etc.)
            </p>
          </div>

          {/* Register Button */}
          <button
            type='submit'
            disabled={loading}
            className="w-full h-12 rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 dark:from-emerald-600 dark:to-emerald-700 text-white font-semibold transition-all duration-200 hover:shadow-lg hover:from-emerald-600 hover:to-emerald-700 dark:hover:from-emerald-700 dark:hover:to-emerald-800 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
          >
            {loading ? (
              <>
                <FaSpinner className="animate-spin" />
                Creating Account...
              </>
            ) : (
              'Create Account'
            )}
          </button>

          {/* Login Link */}
          <div className='flex gap-1 justify-center text-sm'>
            <p className="text-gray-600 dark:text-gray-400">Already have an account?</p>
            <Link to={'/Login'} className='text-emerald-600 dark:text-emerald-400 font-semibold hover:text-emerald-700 dark:hover:text-emerald-300'>
              Login
            </Link>
          </div>
        </form>

        {/* Divider */}
        <div className="relative w-full mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
              Or sign up with
            </span>
          </div>
        </div>

        {/* Google Button */}
        <button 
          type="button"
          onClick={googlesignin}
          disabled={googleLoading || loading}
          className="w-full h-12 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-white font-semibold transition-all duration-200 hover:bg-gray-50 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {googleLoading ? (
            <>
              <FaSpinner className="animate-spin text-emerald-600 dark:text-emerald-400" />
              Connecting...
            </>
          ) : (
            <>
              <FaGoogle className="text-emerald-600 dark:text-emerald-400" size={18} />
              <span>Sign up with Google</span>
            </>
          )}
        </button>

        {/* Terms Notice */}
        <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-6">
          By creating an account, you agree to our<br/>
          <Link to="/terms" className="text-emerald-600 dark:text-emerald-400 hover:underline">Terms of Service</Link> and 
          <Link to="/privacy" className="text-emerald-600 dark:text-emerald-400 hover:underline"> Privacy Policy</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;