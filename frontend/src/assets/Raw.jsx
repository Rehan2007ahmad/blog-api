// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState, useEffect, useRef } from 'react';

const Raw = () => {
  // State for sidebar
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  
  // State for categories
  const [categories, setCategories] = useState([
    { id: 1, name: 'Technology' },
    { id: 2, name: 'Science' },
    { id: 3, name: 'Business' },
    { id: 4, name: 'Culture' }
  ]);
  const [newCategory, setNewCategory] = useState('');
  const [editingCategory, setEditingCategory] = useState(null);
  
  // State for posts
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'The Future of AI in Healthcare',
      content: 'Artificial intelligence is revolutionizing healthcare in numerous ways...',
      categoryId: 1,
      author: 'John Doe',
      image: 'https://readdy.ai/api/search-image?query=futuristic%20medical%20technology%20with%20AI%20integration%2C%20clean%20modern%20hospital%20setting%20with%20holographic%20displays%20showing%20patient%20data%2C%20soft%20blue%20lighting%2C%20minimalist%20design%2C%20high%20tech%20medical%20equipment&width=800&height=500&seq=1&orientation=landscape',
      createdAt: '2025-07-01'
    },
    {
      id: 2,
      title: 'Climate Change: New Research Findings',
      content: 'Recent studies have shown alarming trends in global temperature increases...',
      categoryId: 2,
      author: 'Jane Smith',
      image: 'https://readdy.ai/api/search-image?query=climate%20research%20visualization%20with%20scientists%20analyzing%20data%2C%20environmental%20monitoring%20station%20with%20advanced%20equipment%2C%20clean%20laboratory%20setting%2C%20charts%20showing%20temperature%20trends%2C%20professional%20scientific%20environment&width=800&height=500&seq=2&orientation=landscape',
      createdAt: '2025-07-03'
    },
    {
      id: 3,
      title: 'Market Trends for Q3 2025',
      content: 'Financial analysts predict significant shifts in market dynamics for the coming quarter...',
      categoryId: 3,
      author: 'Robert Johnson',
      image: 'https://readdy.ai/api/search-image?query=modern%20financial%20district%20with%20skyscrapers%2C%20stock%20market%20data%20visualization%20on%20large%20screens%2C%20professional%20business%20setting%2C%20clean%20corporate%20environment%20with%20blue%20tinted%20glass%2C%20financial%20charts%20and%20graphs&width=800&height=500&seq=3&orientation=landscape',
      createdAt: '2025-07-05'
    }
  ]);
  
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    categoryId: 0,
    author: '',
    image: ''
  });
  
  const [editingPost, setEditingPost] = useState({
  });
  
 

  useEffect(() => {

  }, []);


  
  // Category management functions
  const addCategory = () => {
    if (newCategory.trim()) {
      const newId = categories.length > 0 ? Math.max(...categories.map(c => c.id)) + 1 : 1;
      setCategories([...categories, { id: newId, name: newCategory }]);
      setNewCategory('');
    }
  };
  
  const updateCategory = () => {
    if (editingCategory && editingCategory.name.trim()) {
      setCategories(categories.map(cat => 
        cat.id === editingCategory.id ? editingCategory : cat
      ));
      setEditingCategory(null);
    }
  };
  
  const deleteCategory = (id) => {
    setCategories(categories.filter(cat => cat.id !== id));
  };
  
  // Post management functions
  const addPost = () => {
    if (newPost.title.trim() && newPost.content.trim() && newPost.categoryId && newPost.author.trim()) {
      const newId = posts.length > 0 ? Math.max(...posts.map(p => p.id)) + 1 : 1;
      const now = new Date();
      const formattedDate = now.toISOString().split('T')[0];
      
      setPosts([...posts, {
        ...newPost,
        id: newId,
        createdAt: formattedDate,
        image: newPost.image || 'https://readdy.ai/api/search-image?query=abstract%20content%20placeholder%20with%20soft%20gradient%20background%2C%20minimalist%20design%2C%20professional%20layout%2C%20subtle%20texture%2C%20clean%20and%20modern%20appearance&width=800&height=500&seq=4&orientation=landscape'
      }]);
      
      setNewPost({
        title: '',
        content: '',
        categoryId: 0,
        author: '',
        image: ''
      });
    }
  };
  
  const updatePost = () => {
    if (editingPost && editingPost.title.trim() && editingPost.content.trim() && editingPost.categoryId && editingPost.author.trim()) {
      setPosts(posts.map(post => 
        post.id === editingPost.id ? {
          ...editingPost,
          createdAt: post.createdAt
        } : post
      ));
      setEditingPost(null);
    }
  };
  
  const deletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };
  
  // Render different content based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
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
                <p className="text-3xl font-bold">{posts.length}</p>
                <p className="text-sm text-gray-500 mt-2">Last post on {posts.length > 0 ? posts[posts.length - 1].createdAt : 'N/A'}</p>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-700">Categories</h2>
                  <span className="text-indigo-600">
                    <i className="fas fa-folder text-xl"></i>
                  </span>
                </div>
                <p className="text-3xl font-bold">{categories.length}</p>
                <p className="text-sm text-gray-500 mt-2">Manage your content categories</p>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-700">Authors</h2>
                  <span className="text-indigo-600">
                    <i className="fas fa-users text-xl"></i>
                  </span>
                </div>
                <p className="text-3xl font-bold">{new Set(posts.map(post => post.author)).size}</p>
                <p className="text-sm text-gray-500 mt-2">Contributing to your blog</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-700">Recent Posts</h2>
              </div>
              <div className="divide-y divide-gray-200">
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
              </div>
            </div>
          </div>
        );
        
      case 'categories':
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Categories</h1>
            
            <div className="bg-white rounded-lg shadow mb-6 p-6">
              <h2 className="text-lg font-semibold mb-4">{editingCategory ? 'Edit Category' : 'Add New Category'}</h2>
              <div className="flex">
                <input
                  type="text"
                  value={editingCategory ? editingCategory.name : newCategory}
                  onChange={(e) => editingCategory 
                    ? setEditingCategory({...editingCategory, name: e.target.value})
                    : setNewCategory(e.target.value)
                  }
                  placeholder="Category name"
                  className="flex-grow border-none bg-gray-100 rounded-l-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button
                  onClick={editingCategory ? updateCategory : addCategory}
                  className="bg-indigo-600 text-white py-2 px-4 rounded-r-lg hover:bg-indigo-700 !rounded-button whitespace-nowrap cursor-pointer"
                >
                  {editingCategory ? 'Update' : 'Add'} Category
                </button>
              </div>
              {editingCategory && (
                <button
                  onClick={() => setEditingCategory(null)}
                  className="mt-2 text-gray-600 hover:text-gray-800 !rounded-button whitespace-nowrap cursor-pointer"
                >
                  Cancel
                </button>
              )}
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
                          {posts.filter(post => post.categoryId === category.id).length} posts
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => setEditingCategory(category)}
                          className="text-indigo-600 hover:text-indigo-800 !rounded-button whitespace-nowrap cursor-pointer"
                        >
                          <i className="fas fa-edit"></i>
                        </button>
                        <button
                          onClick={() => deleteCategory(category.id)}
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
        );
        
      case 'posts':
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Posts</h1>
            
            <div className="bg-white rounded-lg shadow mb-6 p-6">
              <h2 className="text-lg font-semibold mb-4">{editingPost ? 'Edit Post' : 'Add New Post'}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                  <input
                    type="text"
                    value={editingPost ? editingPost.title : newPost.title}
                    onChange={(e) => editingPost 
                      ? setEditingPost({...editingPost, title: e.target.value})
                      : setNewPost({...newPost, title: e.target.value})
                    }
                    placeholder="Post title"
                    className="w-full border-none bg-gray-100 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Author</label>
                  <input
                    type="text"
                    value={editingPost ? editingPost.author : newPost.author}
                    onChange={(e) => editingPost 
                      ? setEditingPost({...editingPost, author: e.target.value})
                      : setNewPost({...newPost, author: e.target.value})
                    }
                    placeholder="Author name"
                    className="w-full border-none bg-gray-100 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select
                  value={editingPost ? editingPost.categoryId : newPost.categoryId}
                  onChange={(e) => editingPost 
                    ? setEditingPost({...editingPost, categoryId: parseInt(e.target.value)})
                    : setNewPost({...newPost, categoryId: parseInt(e.target.value)})
                  }
                  className="w-full border-none bg-gray-100 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value={0}>Select a category</option>
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                  ))}
                </select>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                <input
                  type="text"
                  value={editingPost ? editingPost.image : newPost.image}
                  onChange={(e) => editingPost 
                    ? setEditingPost({...editingPost, image: e.target.value})
                    : setNewPost({...newPost, image: e.target.value})
                  }
                  placeholder="Image URL (optional)"
                  className="w-full border-none bg-gray-100 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
                <textarea
                  value={editingPost ? editingPost.content : newPost.content}
                  onChange={(e) => editingPost 
                    ? setEditingPost({...editingPost, content: e.target.value})
                    : setNewPost({...newPost, content: e.target.value})
                  }
                  placeholder="Post content"
                  rows={6}
                  className="w-full border-none bg-gray-100 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                ></textarea>
              </div>
              
              <div className="flex justify-end">
                {editingPost && (
                  <button
                    onClick={() => setEditingPost(null)}
                    className="mr-2 bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 !rounded-button whitespace-nowrap cursor-pointer"
                  >
                    Cancel
                  </button>
                )}
                <button
                  onClick={editingPost ? updatePost : addPost}
                  className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 !rounded-button whitespace-nowrap cursor-pointer"
                >
                  {editingPost ? 'Update' : 'Add'} Post
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-700">All Posts</h2>
              </div>
              
              {posts.length === 0 ? (
                <div className="p-6 text-center text-gray-500">
                  No posts found. Add your first post above.
                </div>
              ) : (
                <div className="divide-y divide-gray-200">
                  {posts.map(post => (
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
                            <h3 className="text-xl font-semibold text-gray-900">{post.title}</h3>
                            <div className="flex space-x-2">
                              <button
                                onClick={() => setEditingPost(post)}
                                className="text-indigo-600 hover:text-indigo-800 !rounded-button whitespace-nowrap cursor-pointer"
                              >
                                <i className="fas fa-edit"></i>
                              </button>
                              <button
                                onClick={() => deletePost(post.id)}
                                className="text-red-600 hover:text-red-800 !rounded-button whitespace-nowrap cursor-pointer"
                              >
                                <i className="fas fa-trash"></i>
                              </button>
                            </div>
                          </div>
                          <div className="flex items-center mb-2">
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
                          <p className="text-gray-600 line-clamp-3">{post.content}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        );
        
      
      default:
        return <div className="p-6">Select a tab from the sidebar</div>;
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className={`bg-indigo-800 text-white transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-20'}`}>
        <div className="p-4 flex items-center justify-between">
          <div className={`font-bold text-xl ${sidebarOpen ? 'block' : 'hidden'}`}>
            InsightBlog
          </div>
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1 rounded-full hover:bg-indigo-700 !rounded-button whitespace-nowrap cursor-pointer"
          >
            <i className={`fas ${sidebarOpen ? 'fa-chevron-left' : 'fa-chevron-right'}`}></i>
          </button>
        </div>
        
        <nav className="mt-6">
          <div 
            className={`flex items-center p-4 cursor-pointer ${activeTab === 'dashboard' ? 'bg-indigo-900' : 'hover:bg-indigo-700'}`}
            onClick={() => setActiveTab('dashboard')}
          >
            <i className="fas fa-tachometer-alt text-xl"></i>
            <span className={`ml-4 ${sidebarOpen ? 'block' : 'hidden'}`}>Dashboard</span>
          </div>
          
          <div 
            className={`flex items-center p-4 cursor-pointer ${activeTab === 'categories' ? 'bg-indigo-900' : 'hover:bg-indigo-700'}`}
            onClick={() => setActiveTab('categories')}
          >
            <i className="fas fa-folder text-xl"></i>
            <span className={`ml-4 ${sidebarOpen ? 'block' : 'hidden'}`}>Categories</span>
          </div>
          
          <div 
            className={`flex items-center p-4 cursor-pointer ${activeTab === 'posts' ? 'bg-indigo-900' : 'hover:bg-indigo-700'}`}
            onClick={() => setActiveTab('posts')}
          >
            <i className="fas fa-file-alt text-xl"></i>
            <span className={`ml-4 ${sidebarOpen ? 'block' : 'hidden'}`}>Posts</span>
          </div>
          
          <div 
            className={`flex items-center p-4 cursor-pointer ${activeTab === 'verification' ? 'bg-indigo-900' : 'hover:bg-indigo-700'}`}
            onClick={() => setActiveTab('verification')}
          >
            <i className="fas fa-shield-alt text-xl"></i>
            <span className={`ml-4 ${sidebarOpen ? 'block' : 'hidden'}`}>Verification</span>
          </div>
        </nav>
      </div>
      
      {/* Main content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Header */}
        <header className="bg-white shadow">
          <div className="flex justify-between items-center px-6 py-4">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-800">
                {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
              </h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-gray-100 rounded-full py-2 px-4 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              </div>
              
              <div className="relative">
                <button className="relative p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 !rounded-button whitespace-nowrap cursor-pointer">
                  <i className="fas fa-bell"></i>
                  <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
                </button>
              </div>
              
              <div className="flex items-center">
                <img
                  src="https://readdy.ai/api/search-image?query=professional%20headshot%20portrait%20of%20a%20person%20with%20neutral%20expression%2C%20clean%20background%2C%20high%20quality%20professional%20photo%2C%20business%20attire%2C%20soft%20lighting&width=40&height=40&seq=5&orientation=squarish"
                  alt="User"
                  className="h-8 w-8 rounded-full object-cover"
                />
                <span className="ml-2 font-medium text-gray-700">Admin User</span>
              </div>
            </div>
          </div>
        </header>
        
        {/* Content area */}
        <main className="flex-1 overflow-y-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Raw;
