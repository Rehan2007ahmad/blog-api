import React from 'react'
import AdminSideBar from './AdminSideBar'
import AdminHeader from './AdminHeader'

const AdminHome = () => {
  return (
    <>
    <div className="min-h-screen bg-gray-100 flex">
    <AdminSideBar/>
        <div className="flex-1 flex flex-col min-h-screen">

        <AdminHeader/>

        <main className="flex-1 overflow-y-auto">

          <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-700">Total Posts</h2>
                  <span className="text-indigo-600">
                    <i className="fas fa-file-alt text-xl"></i>
                  </span>
                </div>
                {/* <p className="text-3xl font-bold">{posts.length}</p>
                <p className="text-sm text-gray-500 mt-2">Last post on {posts.length > 0 ? posts[posts.length - 1].createdAt : 'N/A'}</p>
              </div> */}

                <p className="text-3xl font-bold">11</p>
                <p className="text-sm text-gray-500 mt-2">Last post on 1</p>
              </div> 
              
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-700">Categories</h2>
                  <span className="text-indigo-600">
                    <i className="fas fa-folder text-xl"></i>
                  </span>
                </div>
                {/* <p className="text-3xl font-bold">{categories.length}</p> */}
                <p className="text-sm text-gray-500 mt-2">Manage your content categories</p>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-700">Authors</h2>
                  <span className="text-indigo-600">
                    <i className="fas fa-users text-xl"></i>
                  </span>
                </div>
                {/* <p className="text-3xl font-bold">{new Set(posts.map(post => post.author)).size}</p> */}
                <p className="text-sm text-gray-500 mt-2">Contributing to your blog</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-700">Recent Posts</h2>
              </div>
              {/* <div className="divide-y divide-gray-200">
                {posts.slice(0, 5).map(post => (
                  <div key={post.id} className="px-6 py-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium text-gray-900">{post.title}</h3>
                        <div className="flex items-center mt-1">
                          <span className="text-sm text-gray-500 mr-3">
                            <i className="fas fa-user mr-1"></i> {post.author}
                          </span>
                          <span className="text-sm text-gray-500 mr-3">
                            <i className="fas fa-folder mr-1"></i> {categories.find(c => c.id === post.categoryId)?.name || 'Uncategorized'}
                          </span>
                          <span className="text-sm text-gray-500">
                            <i className="fas fa-calendar mr-1"></i> {post.createdAt}
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
              </div> */}
            </div>
          </div>
        

        </main>
      </div>
    </div>
    </>
  )
}

export default AdminHome