import React, { useEffect, useState } from "react";
import AdminSideBar from "../AdminComponents/AdminSideBar";
import AdminHeader from "../AdminComponents/AdminHeader";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../lib/axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";


const AdminEditCategory = () => {
  const token = Cookies.get("auth_token");
  const { id } = useParams();
  const navigate = useNavigate();

  const [input, setInput] = useState({ name: "" });

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await api.get(
          `/category/${id}`
        );
        setInput({ name: response.data.category.name });
      } catch (error) {
        console.error("Error fetching category:", error);
      }
    };
    fetchCategory();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.put(
        `/category/${id}`,
        input,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    toast.success('Category updated successfully!');
      setTimeout(() => {
        navigate("/admin/addcategory");
      }, 2000);
    } catch (error) {
      console.error("Error updating category:", error);
      toast.error('')
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <AdminSideBar />
      <div className="flex-1 flex flex-col min-h-screen">
        <AdminHeader />
        <main className="flex-1 overflow-y-auto">
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Edit Category</h1>
            <div className="bg-white rounded-lg shadow mb-6 p-6">
              <h2 className="text-lg font-semibold mb-4">Edit Category</h2>
              <form onSubmit={handleSubmit} className="flex">
                <input
                  type="text"
                  name="name"
                  value={input.name}
                  onChange={handleChange}
                  placeholder="Category name"
                  className="flex-grow border-none bg-gray-100 rounded-l-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button
                  type="submit"
                  className="bg-indigo-600 text-white py-2 px-4 rounded-r-lg hover:bg-indigo-700"
                >
                  Update Category
                </button>
              </form>
              <button
                onClick={() => navigate("/admin/addcategory")}
                className="mt-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminEditCategory;
