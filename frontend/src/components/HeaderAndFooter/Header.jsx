import React, { Component, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { Route, Routes, useNavigate } from "react-router-dom";

import SinglePost from "../../Pages/Posts/SinglePost";
import PostsByCategory from "../../Pages/Posts/PostsByCategory";

import Login from "../UserRegister/Login";
import SignUp from "../UserRegister/SignUp";

import RequestOtp from "../UserRegister/RequestOtp";
import Home from "../../Home";
import NewPassword from "../UserRegister/NewPassword";
import VerifyOtp from "../UserRegister/VerifyOtp";

// admin Component
import AdminHome from "../../Admin/AdminComponents/AdminHome";
import AdminAddPosts from "../../Admin/Dashboard/AdminAddPosts";
import AdminAddCategory from "../../Admin/Dashboard/AdminAddCategory";
import PublicRoute from "../Hooks/PublicRoute";

import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import ProtectedRoute from "../Hooks/ProtectedRoute";
import AdminEditCategory from "../../Admin/Dashboard/AdminEditCategory";
import AdminEditPost from "../../Admin/Dashboard/AdminEditPost";

const Header = () => {
  let navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const token = Cookies.get("auth_token");

  const handleLogout = () => {
    Object.keys(Cookies.get()).forEach((cookie) => {
      Cookies.remove(cookie);
    });
    navigate("/login");
  };
  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-indigo-600">
                Insight<span className="text-gray-800">Blog</span>
              </h1>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-600 hover:text-gray-800 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <span className="text-xl font-bold">×</span>
              ) : (
                <IoMdMenu className="text-xl" />
              )}
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <a
                href="/"
                className="font-medium hover:text-indigo-600 transition-colors cursor-pointer"
              >
                Home
              </a>
              <a
                href="/"
                className="font-medium hover:text-indigo-600 transition-colors cursor-pointer"
              >
                Technology
              </a>
              <a
                href="/"
                className="font-medium hover:text-indigo-600 transition-colors cursor-pointer"
              >
                Science
              </a>
              <a
                href="#"
                className="font-medium hover:text-indigo-600 transition-colors cursor-pointer"
              >
                Culture
              </a>
              <a
                href="#"
                className="font-medium hover:text-indigo-600 transition-colors cursor-pointer"
              >
                Business
              </a>
            </nav>

            {/* Desktop Search and Sign In */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-gray-100 rounded-full py-2 px-4 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 border-none"
                />
                <FaSearch className=" absolute left-3 top-2.5 text-gray-400 text-md" />
              </div>
              {token ? (
                <button
                  onClick={handleLogout}
                  className="bg-red-400 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-red-700 transition-colors !rounded-button whitespace-nowrap cursor-pointer"
                >
                  Log out
                </button>
              ) : (
                <button
                  onClick={() => navigate("/login")}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-indigo-700 transition-colors !rounded-button whitespace-nowrap cursor-pointer"
                >
                  Sign In
                </button>
              )}
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden ${
              isMobileMenuOpen ? "block" : "hidden"
            } mt-4`}
          >
            <nav className="flex flex-col space-y-4 py-4 border-t border-gray-100">
              <a
                href="#"
                className="font-medium hover:text-indigo-600 transition-colors cursor-pointer"
              >
                Home
              </a>
              <a
                href="#"
                className="font-medium hover:text-indigo-600 transition-colors cursor-pointer"
              >
                Technology
              </a>
              <a
                href="#"
                className="font-medium hover:text-indigo-600 transition-colors cursor-pointer"
              >
                Science
              </a>
              <a
                href="#"
                className="font-medium hover:text-indigo-600 transition-colors cursor-pointer"
              >
                Culture
              </a>
              <a
                href="#"
                className="font-medium hover:text-indigo-600 transition-colors cursor-pointer"
              >
                Business
              </a>
            </nav>

            <div className="py-4 border-t border-gray-100">
              <div className="relative mb-4">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full bg-gray-100 rounded-full py-2 px-4 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 border-none"
                />
                <i className="fas fa-search absolute left-3 top-2.5 text-gray-400 text-sm"></i>
              </div>
              {token ? (
                <button className="w-[80px] bg-red-600 text-white px-4 py-2 mt-3 rounded-full text-sm font-medium hover:bg-red-700 transition-colors !rounded-button whitespace-nowrap cursor-pointer">
                  Log Out
                </button>
              ) : (
                <button className="w-[80px] bg-indigo-600 text-white px-4 m-3 py-2 rounded-full text-sm font-medium hover:bg-indigo-700 transition-colors !rounded-button whitespace-nowrap cursor-pointer">
                  Sign In
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      <Routes>
        <Route path="/singlepost" element={<SinglePost />} />
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<PostsByCategory />} />

        <Route path="/request-otp" element={<RequestOtp />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
        <Route path="/newpassword" element={<NewPassword />} />

        {/* if user is logged in then don't allow to access these routes */}
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoute>
              <SignUp />
            </PublicRoute>
          }
        />

        {/* admin panel  */}
        <Route path="/admin" element={<ProtectedRoute allowedRoles={['admin', 'editor']}><AdminHome/></ProtectedRoute>} />
        <Route path="/admin/addpost" element={<ProtectedRoute allowedRoles={['admin', 'editor']}><AdminAddPosts /></ProtectedRoute>} />
        <Route path="/admin/addcategory" element={<ProtectedRoute allowedRoles={['admin', 'editor']}><AdminAddCategory /></ProtectedRoute>} />
        <Route path="/admin/editcategory" element={<ProtectedRoute allowedRoles={['admin', 'editor']}><AdminEditCategory /></ProtectedRoute>} />
        <Route path="/admin/editpost" element={<ProtectedRoute allowedRoles={['admin', 'editor']}><AdminEditPost /></ProtectedRoute>} />
        
      </Routes>
    </>
  );
};
export default Header;
