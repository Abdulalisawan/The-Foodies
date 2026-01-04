import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { Authcontext } from '../Context/Authcontext';
import { toast } from 'react-toastify';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { FaGoogle, FaEye, FaEyeSlash, FaSpinner, FaCheckCircle } from 'react-icons/fa';

import { auth } from '../Context/Auth';
const provider= new GoogleAuthProvider()

const DEMO_EMAIL = 'demo@example.com'
const DEMO_PASSWORD = 'Demo@123456'

const Login = () => {
  const {Signin}=useContext(Authcontext)
  const [loading, setLoading] = useState(false)
  const [googleLoading, setGoogleLoading] = useState(false)
  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  
  const navigate= useNavigate()
  const location= useLocation()
  // prefer `from` query param (set by loaders) then fallback to location.state (Privaterouter)
  const params = new URLSearchParams(location.search)
  const fromQuery = params.get('from')
  const fromState = location.state?.from?.pathname
  const from = fromQuery ? decodeURIComponent(fromQuery) : (fromState || '/')
  console.log('redirect after login ->', from)
  

  const handlesignin=(e)=>{
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccessMessage('')
    
    const email= e.target.email.value
    const password= e.target.pass.value
    
    if (!email || !password) {
      setError('Please fill in all fields')
      setLoading(false)
      return
    }
    
    Signin(email, password).then((result)=>{
      setSuccessMessage('Login successful! Redirecting...')
      setTimeout(() => {
        navigate(from, {replace: true})
      }, 500)
    }).catch((err)=>{
      console.log(err)
      const errorMessage = err.code === 'auth/invalid-credential' 
        ? 'Invalid email or password'
        : err.code === 'auth/user-not-found'
        ? 'No account found with this email'
        : err.code === 'auth/too-many-requests'
        ? 'Too many login attempts. Please try again later'
        : 'Login failed. Please try again'
      setError(errorMessage)
      toast.error(errorMessage)
    }).finally(() => {
      setLoading(false)
    })
  }

  const handleDemoLogin = () => {
    setLoading(true)
    setError('')
    setSuccessMessage('')
    
    Signin(DEMO_EMAIL, DEMO_PASSWORD).then((result) => {
      setSuccessMessage('Demo login successful! Redirecting...')
      setTimeout(() => {
        navigate(from, {replace: true})
      }, 500)
    }).catch((err) => {
      console.log(err)
      setError('Demo login unavailable. Please try standard login.')
      toast.error('Demo login failed. Please try standard login.')
    }).finally(() => {
      setLoading(false)
    })
  }

  const signinGoogle = () => {
    setGoogleLoading(true)
    setError('')
    setSuccessMessage('')

    signInWithPopup(auth, provider).then((result)=>{
      setSuccessMessage('Google login successful! Redirecting...')
      setTimeout(() => {
        navigate(from, {replace: true})
      }, 500)
    }).catch(err=>{
      console.log(err)
      const errorMessage = err.code === 'auth/popup-closed-by-user'
        ? 'Login popup was closed'
        : err.code === 'auth/network-request-failed'
        ? 'Network error. Please check your connection'
        : 'Google login failed. Please try again'
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
              Welcome Back
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Sign in to discover your favourite dishes
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

          {/* Email/Password Form */}
          <form onSubmit={handlesignin} className="w-full flex flex-col gap-4 mb-6">
            
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

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Password
                </label>
                <Link to="/forgot-password" className="text-xs text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="••••••••" 
                  name='pass' 
                  disabled={loading}
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
            </div>

            {/* Sign In Button */}
            <button 
              type='submit'
              disabled={loading}
              className="w-full h-12 rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 dark:from-emerald-600 dark:to-emerald-700 text-white font-semibold transition-all duration-200 hover:shadow-lg hover:from-emerald-600 hover:to-emerald-700 dark:hover:from-emerald-700 dark:hover:to-emerald-800 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <FaSpinner className="animate-spin" />
                  Signing in...
                </>
              ) : (
                'Sign In'
              )}
            </button>

            {/* Register Link */}
            <div className='flex gap-1 justify-center text-sm'>
              <p className="text-gray-600 dark:text-gray-400">Don't have an account?</p>
              <Link to={'/Register'} className='text-emerald-600 dark:text-emerald-400 font-semibold hover:text-emerald-700 dark:hover:text-emerald-300'>
                Register
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
                Or continue with
              </span>
            </div>
          </div>

          {/* Social Auth Buttons */}
          <div className="w-full flex flex-col gap-3 mb-6">
            {/* Google Button */}
            <button 
              type="button"
              onClick={signinGoogle}
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
                  <span>Google</span>
                </>
              )}
            </button>

            {/* Demo User Button */}
            <button 
              type="button"
              onClick={handleDemoLogin}
              disabled={loading}
              className="w-full h-12 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 dark:from-purple-600 dark:to-purple-700 text-white font-semibold transition-all duration-200 hover:shadow-lg hover:from-purple-600 hover:to-purple-700 dark:hover:from-purple-700 dark:hover:to-purple-800 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <FaSpinner className="animate-spin" />
                  Loading...
                </>
              ) : (
                '👤 Try Demo Account'
              )}
            </button>
          </div>

          {/* Demo Credentials Info */}
          <div className="w-full p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
            <p className="text-blue-700 dark:text-blue-300 text-xs font-medium mb-2">
              Demo Account Available
            </p>
            <p className="text-blue-600 dark:text-blue-400 text-xs">
              Email: <span className="font-mono">demo@example.com</span><br/>
              Password: <span className="font-mono">Demo@123456</span>
            </p>
          </div>
        </div>
      </div>
    );
};

export default Login;