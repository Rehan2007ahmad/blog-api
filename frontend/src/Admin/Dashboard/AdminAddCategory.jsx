import React, { useState } from 'react'
import AdminSideBar from '../AdminComponents/AdminSideBar'
import AdminHeader from '../AdminComponents/AdminHeader'

const AdminAddCategory = () => {
  let [categories, setcategories] = useState([])
  return (
        <>
    <div className="min-h-screen bg-gray-100 flex">
    <AdminSideBar/>
        <div className="flex-1 flex flex-col min-h-screen">

        <AdminHeader/>

        <main className="flex-1 overflow-y-auto">

        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Categories</h1>
            
            <div className="bg-white rounded-lg shadow mb-6 p-6">
              {/* <h2 className="text-lg font-semibold mb-4">{editingCategory ? 'Edit Category' : 'Add New Category'}</h2> */}
              <h2 className="text-lg font-semibold mb-4">Add New Category</h2>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Category name"
                  className="flex-grow border-none bg-gray-100 rounded-l-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button
                  className="bg-indigo-600 text-white py-2 px-4 rounded-r-lg hover:bg-indigo-700 !rounded-button whitespace-nowrap cursor-pointer"
                >
                Add Category
                </button>
              </div>
                <button
                  className="mt-2 text-gray-600 hover:text-gray-800 !rounded-button whitespace-nowrap cursor-pointer"
                >
                  Cancel
                </button>
            </div>
            
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-700">All Categories</h2>
              </div>
              
              {categories.length === 0 ? (
                <div className="p-6 text-center text-gray-500">
                  No categories found. Add your first category above.
                </div>
              ) : (
                <div className="divide-y divide-gray-200">
                  {categories.map(category => (
                    <div key={category.id} className="px-6 py-4 flex items-center justify-between">
                      <div>
                        <h3 className="font-medium text-gray-900">{category.name}</h3>
                        <p className="text-sm text-gray-500 mt-1">
                          {/* {posts.filter(post => post.categoryId === category.id).length} posts */}
                          11 posts
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <button
                          className="text-indigo-600 hover:text-indigo-800 !rounded-button whitespace-nowrap cursor-pointer"
                        >
                          <i className="fas fa-edit"></i>
                        </button>
                        <button
                          className="text-red-600 hover:text-red-800 !rounded-button whitespace-nowrap cursor-pointer"
                        >
                          <i className="fas fa-trash"></i>
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
  )
}

export default AdminAddCategory