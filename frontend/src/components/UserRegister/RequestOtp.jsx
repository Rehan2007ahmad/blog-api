import React, { useState } from "react";
import { FaEnvelope, FaCheckCircle, FaExclamation } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import api from '../../lib/axios';
import toast from "react-hot-toast";

const RequestOtp = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/user/send-otp", { email });
      setEmail("");
      toast.success("OTP sent successfully! Please check your email.");
      navigate("/verify-otp");
    } catch (error) {
      setEmail("");
      toast.error("Failed to send OTP. Please try again.");
    }
  };

  console.log(email);
  return (
    <>
      <div className="min-h-screen bg-gray-50 text-gray-800">
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

            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="otpEmail"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className=" text-gray-400" />
                  </div>
                  <input
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    required
                    className="appearance-none block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <button className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors !rounded-button whitespace-nowrap cursor-pointer">
                <span className="flex items-center">
                  <FaCheckCircle className="mr-2" />
                  Request OTP
                </span>
              </button>
              <div className="text-center text-sm">
                <span className="text-gray-600">Already have an account?</span>{" "}
                <Link
                  to="/login"
                  className="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer"
                >
                  Sign in
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestOtp;
