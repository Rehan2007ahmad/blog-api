import React, { useEffect, useState } from "react";
import AdminSideBar from "../AdminComponents/AdminSideBar";
import AdminHeader from "../AdminComponents/AdminHeader";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../lib/axios";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import MDEditor from "@uiw/react-md-editor";

const AdminEditPost = () => {
  let token = Cookies.get("auth_token");
  let { id } = useParams();
  let navigate = useNavigate();
  const [post, setPost] = useState({});
  const [categories, setCategories] = useState([]);

  const fetchPost = async () => {
    try {
      const res = await api.get(`/post/${id}`);
      setPost(res.data);
    } catch (error) {
      console.error("Error fetching post:", error);
    }
  };

  const fetchCategories = async () => {
    try {
      const res = await api.get(`/category`);
      setCategories(res.data.categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchPost();
    fetchCategories();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/post/${id}`, post, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Post updated successfully!");
      setTimeout(() => {
        navigate("/admin/addpost");
      }, 2000);
    } catch (error) {
      console.error("Error updating post:", error);
      toast.error("Could not update post.");
    }
  };
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex">
        <AdminSideBar />
        <div className="flex-1 flex flex-col min-h-screen">
          <AdminHeader />

          <main className="flex-1 overflow-y-auto">
            <div className="p-6">
              <h1 className="text-2xl font-bold mb-6">Posts</h1>

              <div className="bg-white rounded-lg shadow mb-6 p-6">
                <h2 className="text-lg font-semibold mb-4">Edit Post</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      onChange={handleChange}
                      value={post.title || ""}
                      placeholder="Post title"
                      className="w-full border-none bg-gray-100 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Author
                    </label>
                    <input
                      type="text"
                      name="author"
                      onChange={handleChange}
                      readOnly
                      value={post.author?._id || ""}
                      placeholder="Author name"
                      className="w-full border-none bg-gray-100 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Short Description
                  </label>
                  <input
                    type="text"
                    name="shortDescription"
                    onChange={handleChange}
                    value={post.shortDescription || ""}
                    placeholder="Short description of the post in 160 characters"
                    className="w-full border-none bg-gray-100 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <select
                    name="category"
                    value={post.category || 0}
                    onChange={handleChange}
                    className="w-full border-none bg-gray-100 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value={0}>Select a category</option>
                    {categories.map((a) => (
                      <option key={a._id} value={a._id}>
                        {a.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Image URL
                  </label>
                  <input
                    type="text"
                    name="image"
                    onChange={handleChange}
                    value={post.image || ""}
                    placeholder="Image URL (optional)"
                    className="w-full border-none bg-gray-100 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Content
                  </label>
                  <MDEditor
                  value={post.description || ""}
                  height={300}
                  onChange={(value) =>
                    setPost((prev) => ({ ...prev, description: value || "" }))
                  }
                />
                </div>

                
                <div className="flex justify-end">
                  <button
                    onClick={handleSubmit}
                    className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 !rounded-button whitespace-nowrap cursor-pointer"
                  >
                    Update Post
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default AdminEditPost;
