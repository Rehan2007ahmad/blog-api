import React from 'react'
import { FaBell } from "react-icons/fa";

import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
const AdminHeader = () => {

  const token = Cookies.get("auth_token");
  const decodedToken = jwtDecode(token);
  return (
     <header className="bg-white shadow">
          <div className="flex justify-between items-center px-6 py-4">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-800">
                Admin Panel
              </h1>
            </div>
            
            <div className="flex items-center space-x-4">
                          
              <div className="relative">
                <button className="relative p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 !rounded-button whitespace-nowrap cursor-pointer">
                  <FaBell/>
                  <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
                </button>
              </div>
              
              <div className="flex items-center">
                <img
                  src="https://readdy.ai/api/search-image?query=professional%20headshot%20portrait%20of%20a%20person%20with%20neutral%20expression%2C%20clean%20background%2C%20high%20quality%20professional%20photo%2C%20business%20attire%2C%20soft%20lighting&width=40&height=40&seq=5&orientation=squarish"
                  alt="User"
                  className="h-8 w-8 rounded-full object-cover"
                />
                <span className="ml-2 font-medium text-gray-700 capitalize">Hello, {decodedToken?.role} {decodedToken?.firstName}</span>
              </div>
            </div>
          </div>
        </header>
  )
}

export default AdminHeader