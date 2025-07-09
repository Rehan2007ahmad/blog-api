import React, { useState } from 'react'
import AdminSideBar from '../AdminComponents/AdminSideBar'
import AdminHeader from '../AdminComponents/AdminHeader'
const AdminEditCategory = () => {
    let [categories, setcategories] = useState([])

  return (
     <div className="min-h-screen bg-gray-100 flex">
    <AdminSideBar/>
        <div className="flex-1 flex flex-col min-h-screen">

        <AdminHeader/>

        <main className="flex-1 overflow-y-auto">

        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Categories</h1>
            
            <div className="bg-white rounded-lg shadow mb-6 p-6">
              <h2 className="text-lg font-semibold mb-4">Edit Category</h2>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Category name"
                  className="flex-grow border-none bg-gray-100 rounded-l-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button
                  className="bg-indigo-600 text-white py-2 px-4 rounded-r-lg hover:bg-indigo-700 !rounded-button whitespace-nowrap cursor-pointer"
                >
                Update Category
                </button>
              </div>
                <button
                  className="mt-2 text-gray-600 hover:text-gray-800 !rounded-button whitespace-nowrap cursor-pointer"
                >
                  Cancel
                </button>
            </div>
        </div>

        </main>
      </div>
    </div>

)
}

export default AdminEditCategory