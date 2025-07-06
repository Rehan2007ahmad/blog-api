import React, { useState } from "react";

const RequestOtp = () => {

  return (
    <>
      <div className="min-h-screen bg-gray-50 text-gray-800">
        {/* OTP Request Section */}
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-lg">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-indigo-600">
                Insight<span className="text-gray-800">Blog</span>
              </h1>
              <h2 className="mt-6 text-3xl font-bold text-gray-900">
                Request OTP
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Enter your email to receive a one-time password
              </p>
            </div>

            <form className="mt-8 space-y-6">
              <div>
                <label
                  htmlFor="otpEmail"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-envelope text-gray-400"></i>
                  </div>
                  <input
                    id="otpEmail"
                    name="otpEmail"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                    placeholder="Enter your email"
                  />
                </div>
              </div>              
               
                <button
                  className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors !rounded-button whitespace-nowrap cursor-pointer"
                >
                  <span className="flex items-center">
                    <i className="fas fa-check-circle mr-2"></i>
                   Request OTP
                  </span>
                </button>

                <div className="text-sm text-center text-green-600">
                  <i className="fas fa-check-circle mr-1"></i>
                  OTP sent successfully! Please check your email.
                </div>

                <div className="text-sm text-center text-red-600">
                  <i className="fas fa-exclamation-circle mr-1"></i>
                  Failed to send OTP. Please try again.
                </div>

              <div className="text-center text-sm">
                <span className="text-gray-600">Already have an account?</span>{" "}
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer"
                >
                  Sign in
                </a>
              </div>
            </form>
          </div>
        </div>

      </div>
    </>
  );
};

export default RequestOtp;
