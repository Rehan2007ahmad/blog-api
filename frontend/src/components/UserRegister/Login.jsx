import React from "react";
import { FaSignInAlt, FaEnvelope, FaLock  } from "react-icons/fa";


const Login = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-50 text-gray-800">
        {/* Login Section */}
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-lg">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-indigo-600">
                Insight<span className="text-gray-800">Blog</span>
              </h1>
              <h2 className="mt-6 text-3xl font-bold text-gray-900">
                Welcome back
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Sign in to access your account
              </p>
            </div>
            <form className="mt-8 space-y-6">
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <div className="mt-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaEnvelope className="fas fa-envelope text-gray-400"/>
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="appearance-none block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                      placeholder="Enter your email"
                      
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <div className="mt-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaLock className="fas fa-lock text-gray-400"/>
                    </div>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="appearance-none block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                      placeholder="Enter your password"
                      
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded cursor-pointer"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900 cursor-pointer"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors !rounded-button whitespace-nowrap cursor-pointer"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <FaSignInAlt  className="fas fa-sign-in-alt text-indigo-300 group-hover:text-indigo-200" />
                  </span>
                  Sign in
                </button>
              </div>

              <div className="text-center text-sm">
                <span className="text-gray-600">Don't have an account?</span>{" "}
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer"
                >
                  Sign up now
                </a>
              </div>

            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
