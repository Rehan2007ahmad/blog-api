import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaArrowLeftLong, FaArrowRightLong, FaTags } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";

import { MdDashboard } from "react-icons/md";
import { PiArticleNyTimesFill } from "react-icons/pi";

const AdminSideBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("");
  const location = useLocation();

  useEffect(() => {
    // Set active tab based on current route
    if (
      location.pathname.includes("/admin/addcategory")
    ) {
      setActiveTab("categories");
    } else if (location.pathname === "/admin") {
      setActiveTab("dashboard");
    } else if (location.pathname.includes("/admin/addpost")) {
      setActiveTab("posts");
    } else if(location.pathname.includes("/admin/editcategory")){
      setActiveTab('editcategory')
    }else if(location.pathname.includes("/admin/editpost")){
      setActiveTab("editpost")
    }
  }, [location.pathname]);

  return (
    <div
      className={`bg-indigo-800 text-white transition-all duration-300 ${
        sidebarOpen ? "w-64" : "w-20"
      }`}
    >
      <div className="p-4 flex items-center justify-between">
        <div
          className={`font-bold text-xl ${sidebarOpen ? "block" : "hidden"}`}
        >
          InsightBlog
        </div>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-1 rounded-full hover:bg-indigo-700 !rounded-button whitespace-nowrap cursor-pointer"
        >
          <div>{sidebarOpen ? <FaArrowLeftLong /> : <FaArrowRightLong />}</div>
        </button>
      </div>

      <nav className="mt-6">
        <Link to="/admin">
          <div
            className={`flex items-center p-4 cursor-pointer ${
              activeTab === "dashboard"
                ? "bg-indigo-900"
                : "hover:bg-indigo-700"
            }`}
          >
            <MdDashboard className="text-2xl" />
            <span className={`ml-4 ${sidebarOpen ? "block" : "hidden"}`}>
              Dashboard
            </span>
          </div>
        </Link>

        <Link to="/admin/addcategory">
          <div
            className={`flex items-center p-4 cursor-pointer ${
              activeTab === "categories"
                ? "bg-indigo-900"
                : "hover:bg-indigo-700"
            }`}
          >
            <FaTags className="text-2xl" />
            <span className={`ml-4 ${sidebarOpen ? "block" : "hidden"}`}>
              Categories
            </span>
          </div>
        </Link>

        <Link to="/admin/addpost">
          <div
            className={`flex items-center p-4 cursor-pointer ${
              activeTab === "posts" ? "bg-indigo-900" : "hover:bg-indigo-700"
            }`}
          >
            <PiArticleNyTimesFill className="text-2xl" />
            <span className={`ml-4 ${sidebarOpen ? "block" : "hidden"}`}>
              Posts
            </span>
          </div>
        </Link>

       
      </nav>
    </div>
  );
};

export default AdminSideBar;
