import React, { use, useEffect, useState } from "react";
import AdminSideBar from "../AdminComponents/AdminSideBar";
import AdminHeader from "../AdminComponents/AdminHeader";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

const AdminAddPosts = () => {
  const token = Cookies.get("auth_token");
  const decodedToken = jwtDecode(token);
  const userId = decodedToken.id;

  let [posts, setPosts] = useState([]);
  const [images, setImages] = useState([]);

  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    author: "",
  });

  const [category, setCategory] = useState([]);

  const fetchCategory = async () => {
    axios
      .get("http://localhost:3000/api/category")
      .then((res) => setCategory(res.data.categories));
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  const handlechange = (e) => {
    const { name, value } = e.target;
    setForm((perv) => ({ ...perv, [name]: value }));
  };

  const handleImageChange = (e)=>{
    setImages(e.target.files);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("description", form.description);
    formData.append("author", userId);
    formData.append("category", form.category);

    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }

    try {
      const response = await axios.post("http://localhost:3000/api/post", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);
      setForm({ title: "", description: "", category: "", author: "" });
      setImages([]);

    } catch (error) {
      console.error(error);
    }
  
  }

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
                      value={userId}
                      onChange={handlechange}
                      placeholder="Author name"
                      className="w-full border-none bg-gray-100 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
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
                    type="file"
                    name="images"
                    onChange={handleImageChange}
                    multiple
                    accept="image/*"
                    className="w-full border-none bg-gray-100 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Content
                  </label>
                  <textarea
                    onChange={handlechange}
                    name="description"
                    value={form.description}
                    placeholder="Post content"
                    rows={6}
                    className="w-full border-none bg-gray-100 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  ></textarea>
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
                      <div key={post.id} className="p-6">
                        <div className="flex flex-col md:flex-row">
                          <div className="md:w-1/4 mb-4 md:mb-0 md:mr-6">
                            <img
                              src={post.image}
                              alt={post.title}
                              className="w-full h-40 object-cover rounded-lg"
                            />
                          </div>
                          <div className="md:w-3/4">
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="text-xl font-semibold text-gray-900">
                                {post.title}
                              </h3>
                              <div className="flex space-x-2">
                                <button className="text-indigo-600 hover:text-indigo-800 !rounded-button whitespace-nowrap cursor-pointer">
                                  <i className="fas fa-edit"></i>
                                </button>
                                <button className="text-red-600 hover:text-red-800 !rounded-button whitespace-nowrap cursor-pointer">
                                  <i className="fas fa-trash"></i>
                                </button>
                              </div>
                            </div>
                            <div className="flex items-center mb-2">
                              <span className="text-sm text-gray-500 mr-3">
                                <i className="fas fa-user mr-1"></i>{" "}
                                {post.author}
                              </span>
                              <span className="text-sm text-gray-500 mr-3">
                                <i className="fas fa-folder mr-1"></i>{" "}
                                Uncategorized
                              </span>
                              <span className="text-sm text-gray-500">
                                <i className="fas fa-calendar mr-1"></i> 11
                              </span>
                            </div>
                            <p className="text-gray-600 line-clamp-3">Hello </p>
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
