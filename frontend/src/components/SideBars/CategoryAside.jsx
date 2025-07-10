import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CategoryAside = () => {
  let [category, setCategory] = useState([]);
  let [posts, setPosts] = useState([]);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/category");
      setCategory(response.data.categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const fetchPosts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/post");
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchPosts();
  }, []);
  return (
    <>
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <h3 className="text-lg font-bold mb-4 border-b pb-2">Categories</h3>
        <ul className="space-y-2">
          {category.slice(0, 1).map((a) => (
            <li
              className="flex items-center py-2 text-indigo-600 font-medium cursor-pointer"
              key={a._id}
            >
              <span className="capitalize"><Link to={`/category/${a.name}`}>{a.name}</Link></span>
              <span className="ml-auto bg-indigo-100 text-indigo-600 text-xs px-2 py-1 rounded-full">
                {posts.filter((post) => post.category?._id === a._id).length}{" "}
                posts
              </span>
            </li>
          ))}
          {category.slice(1, 10).map((a) => (
            <li
              className="flex items-center py-2 hover:text-indigo-600 transition-colors cursor-pointer"
              key={a._id}
            >
              <span className="capitalize"><Link to={`/category/${a.name}`}>{a.name}</Link></span>
              <span className="ml-auto bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                {posts.filter((post) => post.category?._id === a._id).length}{" "}
                posts
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CategoryAside;
