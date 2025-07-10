import React, { useEffect, useState } from "react";
import AdminSideBar from "./AdminSideBar";
import AdminHeader from "./AdminHeader";
import axios from "axios";
import { FaTags } from "react-icons/fa6";
import { PiArticleNyTimesFill } from "react-icons/pi";
import { FaUser,FaCalendar} from "react-icons/fa";



const AdminHome = () => {
  let [posts, setPosts] = useState([]);
  let [categories, setCategories] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/post");
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };
  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/category");
      setCategories(response.data.categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
    fetchCategories();
  }, []);

  const formatDate = (date) =>
    new Date(date).toLocaleString("en-US", {
      timeZone: "Asia/Kathmandu",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex">
        <AdminSideBar />
        <div className="flex-1 flex flex-col min-h-screen">
          <AdminHeader />

          <main className="flex-1 overflow-y-auto">
            <div className="p-6">
              <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-gray-700">
                      Total Posts
                    </h2>
                    <span className="text-indigo-600">
                      <PiArticleNyTimesFill className="text-xl" />
                    </span>
                  </div>
                  <p className="text-3xl font-bold text-center">{posts.length}</p>
                  <p className="text-sm text-gray-500 mt-2 text-center">
                    Last post on{" "}
                    {posts.length > 0
                      ? formatDate(posts[0].createdAt)
                      : "N/A"}
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-gray-700"> Total 
                      Categories
                    </h2>
                    <span className="text-indigo-600">
                      <FaTags className="text-xl" />
                    </span>
                  </div>
                  <p className="text-3xl font-bold text-center">{categories.length}</p>
                  <p className="text-sm text-gray-500 mt-2 text-center">
                    Manage your content categories
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-gray-700">
                      Authors
                    </h2>
                    <span className="text-indigo-600">
                      <FaUser className="text-xl" />
                    </span>
                  </div>
                  <p className="text-3xl font-bold text-center">{new Set(posts.map(post => post.author)).size}</p>
                  <p className="text-sm text-gray-500 mt-2 text-center">
                    Contributing to your blog
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-700">Recent Posts</h2>
              </div>
              <div className="divide-y divide-gray-200">
                {posts.slice(0, 5).map(post => (
                  <div key={post._id} className="px-6 py-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium text-gray-900">{post.title}</h3>
                        <div className="flex items-center mt-1">
                          <span className="text-sm text-gray-500 mr-3">
                            <FaUser className="mr-1"/> {post.author.firstName}
                          </span>
                          <span className="text-sm text-gray-500 mr-3">
                            <FaTags className="mr-1"/> {categories.find(c => c.id === post.categoryId)?.name || 'Uncategorized'}
                          </span>
                          <span className="text-sm text-gray-500">
                            <FaCalendar className="mr-1"/> {formatDate(post.createdAt)}
                          </span>
                        </div>
                      </div>
                      <button 
                        onClick={() => {
                          setEditingPost(post);
                          setActiveTab('posts');
                        }}
                        className="text-indigo-600 hover:text-indigo-800 !rounded-button whitespace-nowrap cursor-pointer"
                      >
                        <i className="fas fa-edit"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default AdminHome;
