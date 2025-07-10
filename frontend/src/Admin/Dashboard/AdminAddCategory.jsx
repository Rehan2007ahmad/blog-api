import React, { useEffect, useState } from "react";
import AdminSideBar from "../AdminComponents/AdminSideBar";
import AdminHeader from "../AdminComponents/AdminHeader";
import axios from "axios";
import toast from 'react-hot-toast';
import { FaEdit, FaTrash, FaTags, FaUser, FaCalendar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AdminAddCategory = () => {
  const navigate = useNavigate();
  let [categories, setcategories] = useState([]);
  let [posts, setPosts] = useState([]);
  let [category, setCategory] = useState({ name: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategory((perv) => ({ ...perv, [name]: value }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  const createCategory = async () => {
    const res = await axios.post("http://localhost:3000/api/category/create", category);
    fetchCategories();
    setCategory({ name: "" });
    return res;
  };

  toast.promise(
    createCategory(),
    {
      loading: 'Adding category...',
      success: <b>Category added!</b>,
      error: <b>Could not add category.</b>,
    }
  );
};


  const fetchCategories = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/category");
      setcategories(res.data.categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const fetchPosts = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/post");
      setPosts(res.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchPosts();
  }, []);

  const handleDeleteCategory = async (categoryId) => {
    if (categories.length <= 1) {
      alert("You must have at least one category. Deletion is not allowed.");
      return;
    }

   const deleteCategory = async () =>{
     try {
      const res = await axios.delete(
        `http://localhost:3000/api/category/${categoryId}`
      );
      fetchCategories();
    } catch (error) {
      console.error("Error deleting category:", error);
    }
   }

     toast.promise(
    deleteCategory(),
    {
      loading: 'Deleting category...',
      success: <b>Category deleted!</b>,
      error: <b>Could not delete category.</b>,
    }
  );
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex">
        <AdminSideBar />
        <div className="flex-1 flex flex-col min-h-screen">
          <AdminHeader />

          <main className="flex-1 overflow-y-auto">
            <div className="p-6">
              <h1 className="text-2xl font-bold mb-6">Categories</h1>

              <div className="bg-white rounded-lg shadow mb-6 p-6">
                <h2 className="text-lg font-semibold mb-4">Add New Category</h2>
                <div className="flex">
                  <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    placeholder="Category name"
                    className="flex-grow border-none bg-gray-100 rounded-l-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <button
                    onClick={handleSubmit}
                    className="bg-indigo-600 text-white py-2 px-4 rounded-r-lg hover:bg-indigo-700 !rounded-button whitespace-nowrap cursor-pointer"
                  >
                    Add Category
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h2 className="text-lg font-semibold text-gray-700">
                    All Categories
                  </h2>
                </div>

                {categories.length === 0 ? (
                  <div className="p-6 text-center text-gray-500">
                    No categories found. Add your first category above.
                  </div>
                ) : (
                  <div className="divide-y divide-gray-200">
                    {categories.map((category) => (
                      <div
                        key={category._id}
                        className="px-6 py-4 flex items-center justify-between"
                      >
                        <div>
                          <h3 className="font-medium text-gray-900 capitalize">
                            {category.name}
                          </h3>
                          <p className="text-sm text-gray-500 mt-1">
                            {
                              posts.filter(
                                (post) => post.category._id === category._id
                              ).length
                            }{" "}
                            posts
                          </p>
                        </div>
                        <div className="flex space-x-2">
                          <button
                            onClick={() =>
                              navigate(`/admin/editcategory/${category._id}`)
                            }
                            className="text-indigo-600 hover:text-indigo-800 !rounded-button whitespace-nowrap cursor-pointer"
                          >
                            <FaEdit className="text-xl" />
                          </button>
                          <button
                            onClick={() => handleDeleteCategory(category._id)}
                            className="text-red-600 hover:text-red-800 !rounded-button whitespace-nowrap cursor-pointer"
                          >
                            <FaTrash className="text-xl" />
                          </button>
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

export default AdminAddCategory;
