import React from 'react';
import { Link } from 'react-router-dom'; // For navigation

const COMPANY_COLOR = '#29ab87'; // Assuming you define this somewhere or pass as prop

function Login() {
  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login button clicked (placeholder)');
    // In a real app, integrate Appwrite login here
    // On successful login, you'd update the isAuthenticated state in App.js
    localStorage.setItem('user_logged_in', 'true'); // For simulation
    window.location.reload(); // To trigger App.js re-render and auth check
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Welcome Back!</h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="sr-only">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-gray-900">
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <Link to="/Auth/forgot-password" className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </Link>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              style={{ backgroundColor: COMPANY_COLOR }}
            >
              Sign In
            </button>
          </div>
        </form>
        <div className="mt-6 text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/Auth/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;