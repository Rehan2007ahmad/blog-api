import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
const PostsByCategory = () => {
  let { name } = useParams();
  let [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/post/category/${name}`)
      .then((res) => setPosts(res.data));
  }, [name]);

      let [postcount, setPostcount] = useState(2)
    const handlemore = () =>{
    setPostcount(prev => prev + 2)
  }
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <div className="bg-indigo-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{name}</h1>
          <p className="text-indigo-100 text-lg md:text-xl max-w-3xl">
            Explore the latest innovations, breakthroughs, and trends related to {name}
          </p>
        </div>
      </div>

      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Technology</h2>
            <div className="flex items-center">
              <button className="text-indigo-600 hover:text-indigo-800 font-medium mr-4 cursor-pointer">
                Latest
              </button>
              <button className="text-gray-500 hover:text-indigo-600 font-medium mr-4 cursor-pointer">
                Popular
              </button>
              <button className="text-gray-500 hover:text-indigo-600 font-medium cursor-pointer">
                Trending
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {posts.slice(0, postcount + 1).map((post) => (
              <div
                key={post._id}
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover object-top transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="bg-indigo-100 text-indigo-600 px-2 py-1 text-xs rounded-full">
                      #{post.category?.name}
                    </span>
                  </div>
                  <Link to={`/post/${post.slug}`}>
                    <h3 className="text-xl font-bold mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                  </Link>
                  <Link to={`/post/${post.slug}`}>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {post.shortDescription}
                    </p>
                  </Link>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img
                        src="https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20young%20female%20tech%20journalist%20with%20neutral%20background%2C%20high%20quality%20portrait%20with%20soft%20lighting%2C%20professional%20appearance%20with%20glasses&width=100&height=100&seq=author-bio&orientation=squarish"
                        alt="Sarah Johnson"
                        className="w-8 h-8 rounded-full object-cover mr-2"
                      />
                      <div>
                        <p className="text-sm font-medium">
                          {post.author?.firstName} {post.author?.lastName}
                        </p>
                        <div className="flex items-center text-xs text-gray-500">
                          <span>
                            {new Date(post.createdAt).toLocaleDateString(
                              "en-US",
                              {
                                weekday: "long",
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              }
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <span className="mr-3">
                        <i className="far fa-clock mr-1"></i>8 min
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {postcount + 1 < posts.length && (
            <div className="mt-10 flex justify-center">
              <button
                onClick={handlemore}
                className="bg-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:bg-indigo-700 transition-colors !rounded-button whitespace-nowrap cursor-pointer"
              >
                Load More Articles
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostsByCategory;
