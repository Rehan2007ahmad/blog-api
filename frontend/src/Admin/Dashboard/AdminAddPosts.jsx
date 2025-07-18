import React, { useEffect, useState } from "react";
import AdminSideBar from "../AdminComponents/AdminSideBar";
import AdminHeader from "../AdminComponents/AdminHeader";
import api from "../../lib/axios";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { FaEdit, FaTrash, FaTags, FaUser, FaCalendar } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";

const AdminAddPosts = () => {
  let navigate = useNavigate();
  const token = Cookies.get("auth_token");
  const decodedToken = jwtDecode(token);
  const userId = decodedToken.id;

  let [posts, setPosts] = useState([]);

  const [form, setForm] = useState({
    title: "",
    category: "",
    description: "",
    author: userId,
    image: "",
    shortDescription: "",
  });
  let [markdown, setMarkdown] = useState("");
  const [category, setCategory] = useState([]);

  const fetchCategory = async () => {
    api
      .get("/category")
      .then((res) => setCategory(res.data.categories));
  };

  const fetchPosts = async () => {
    try {
      const res = await api
        .get("/post")
        .then((res) => setPosts(res.data));
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const handleDeletePost = async (postId) => {
    try {
      await api.delete(`/post/${postId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchPosts();
      toast.success("Post deleted successfully!");
    } catch (error) {
      console.error("Error deleting post:", error);
      toast.error("Could not delete post.");
    }
  };

  const handlechange = (e) => {
    const { name, value } = e.target;
    setForm((perv) => ({ ...perv, [name]: value }));
  };

  const handleMarkdownChange = (value) => {
    setMarkdown(value);
    setForm((prev) => ({ ...prev, description: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post(
        "/post",
        { ...form, description: markdown },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setForm({
        title: "",
        description: "",
        category: "",
        image: "",
        shortDescription: "",
        author: userId,
      });
      setMarkdown("");

      fetchPosts();
      toast.success("Post added successfully!");
      navigate("/admin/addpost");
    } catch (error) {
      console.error(error);
      toast.error("Could not add post.");
    }
  };

  useEffect(() => {
    fetchCategory();
    fetchPosts();
  }, []);
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
                <h2 className="text-lg font-semibold mb-4">Add New Post</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={form.title}
                      onChange={handlechange}
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
                      value={form.author}
                      readOnly
                      onChange={handlechange}
                      className="w-full border-none bg-gray-100 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    shortDescription
                  </label>
                  <input
                    type="text"
                    name="shortDescription"
                    value={form.shortDescription}
                    maxLength={160}
                    minLength={30}
                    required
                    placeholder="Short description of the post in 160 characters"
                    onChange={handlechange}
                    className="w-full border-none bg-gray-100 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <select
                    value={form.category}
                    name="category"
                    onChange={handlechange}
                    className="w-full border-none bg-gray-100 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="">Select Category</option>
                    {category.map((a) => (
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
                    value={form.image}
                    onChange={handlechange}
                    placeholder="Image URL"
                    className="w-full border-none bg-gray-100 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Content
                  </label>
                  <MDEditor
                    onChange={handleMarkdownChange}
                    value={markdown}
                    height={300}
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={handleSubmit}
                    className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 !rounded-button whitespace-nowrap cursor-pointer"
                  >
                    Add Post
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h2 className="text-lg font-semibold text-gray-700">
                    All Posts
                  </h2>
                </div>

                {posts.length === 0 ? (
                  <div className="p-6 text-center text-gray-500">
                    No posts found. Add your first post above.
                  </div>
                ) : (
                  <div className="divide-y divide-gray-200">
                    {posts.map((post) => (
                      <div key={post._id} className="p-6">
                        <div className="flex flex-col md:flex-row">
                          <div className="md:w-1/4 mb-4 md:mb-0 md:mr-6">
                            <img
                              src={post.image}
                              alt={post.title}
                              className="w-full h-30 object-cover rounded-lg"
                            />
                          </div>
                          <div className="md:w-3/4">
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="text-xl font-semibold text-gray-900">
                                <Link to={`/post/${post.slug}`} className="hover:underline">
                                  {post.title}
                                </Link>
                              </h3>
                              <div className="flex space-x-2">
                                <button
                                  onClick={() =>
                                    navigate(`/admin/editpost/${post._id}`)
                                  }
                                  className="text-indigo-600 hover:text-indigo-800 !rounded-button whitespace-nowrap cursor-pointer"
                                >
                                  <FaEdit className="text-xl" />
                                </button>
                                <button
                                  onClick={() => handleDeletePost(post._id)}
                                  className="text-red-600 hover:text-red-800 !rounded-button whitespace-nowrap cursor-pointer"
                                >
                                  <FaTrash className="text-xl" />
                                </button>
                              </div>
                            </div>
                            <div className="flex items-center mb-2">
                              <span className="text-sm text-gray-500 mr-3">
                                <FaUser className="mr-1 text-md" />{" "}
                                {post.author?.firstName}{" "}
                              </span>
                              <span className="text-sm text-gray-500 mr-3">
                                <FaTags className="mr-1 text-md" />{" "}
                                {post.category?.name}
                              </span>
                              <span className="text-sm text-gray-500">
                                <FaCalendar className="mr-1 text-md" />
                                {new Date(post.createdAt).toLocaleDateString()}
                              </span>
                            </div>
                            <p className="text-gray-600 line-clamp-3">
                              {post.shortDescription}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default AdminAddPosts;
