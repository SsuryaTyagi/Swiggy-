import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div>
          <div className="min-h-screen flex items-center justify-center bg-orange-50">
      <div className="bg-white p-10 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold text-orange-500 mb-6 text-center">Swiggy Login</h1>
        
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <button
            type="submit"
            className="bg-orange-500 text-white p-3 rounded-md font-semibold hover:bg-orange-600"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-orange-500 font-semibold">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
    </div>
  )
}
