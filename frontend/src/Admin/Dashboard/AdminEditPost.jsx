import React, { useState } from 'react'
import AdminSideBar from '../AdminComponents/AdminSideBar'
import AdminHeader from '../AdminComponents/AdminHeader'
const AdminEditPost = () => {
    let [posts, setposts] = useState([])
  return (
    <>
    <div className="min-h-screen bg-gray-100 flex">
    <AdminSideBar/>
    <div className="flex-1 flex flex-col min-h-screen">

      <AdminHeader/>

    <main className="flex-1 overflow-y-auto">
         <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Posts</h1>
            
            <div className="bg-white rounded-lg shadow mb-6 p-6">
              <h2 className="text-lg font-semibold mb-4">Edit Post</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                  <input
                    type="text"
                    placeholder="Post title"
                    className="w-full border-none bg-gray-100 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Author</label>
                  <input
                    type="text"
                    placeholder="Author name"
                    className="w-full border-none bg-gray-100 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select
                  className="w-full border-none bg-gray-100 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value={0}>Select a category</option>
                    <option>Cat 1</option>
                </select>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                <input
                  type="text"
                  placeholder="Image URL (optional)"
                  className="w-full border-none bg-gray-100 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
                <textarea
                  placeholder="Post content"
                  rows={6}
                  className="w-full border-none bg-gray-100 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                ></textarea>
              </div>
              
              <div className="flex justify-end">
                <button
                  className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 !rounded-button whitespace-nowrap cursor-pointer"
                >
                Add Post
                </button>
              </div>
            </div>
            
          </div>
    </main>
      </div>
    </div>
    </>
  )
}

export default AdminEditPost