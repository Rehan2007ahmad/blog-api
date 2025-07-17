import React, { useEffect, useState } from 'react'
import api from '../lib/axios';
import { Link } from 'react-router-dom'

const Featured = () => {
  let [post, setPost] = useState([])

  useEffect(()=>{
    api.get('/post')
      .then(response => {
        setPost(response.data)
      })
      .catch(error => {
        console.error("Error fetching featured post:", error)
      })
  }, [])
  return (
    <>
    {post.slice(0, 1).map((item, index) => (
      
      
        <div  key={index}  className="relative h-[500px] mb-12 rounded-xl overflow-hidden shadow-lg">
          <img
            src={item.image}
            alt="Featured post"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-end">
            <div className="p-8 text-white max-w-2xl">
              <span className="bg-indigo-600 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full cursor-pointer">
                {item.category.name}
              </span>
              <Link to={`/post/${item.slug}`}>
                <h2 className="text-4xl font-bold mt-4 mb-4">
                  {item.title}
                </h2>
                <p className="text-gray-200 mb-6">
                  {item.shortDescription}
                </p>
              </Link>
              <div className="flex items-center">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20young%20tech%20journalist%20with%20neutral%20background%2C%20high%20quality%20portrait%20with%20soft%20lighting%2C%20professional%20appearance&width=50&height=50&seq=author1&orientation=squarish"
                  alt="Author"
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div>
                  <p className="font-medium">{item.author?.firstName} {item.author?.lastName}</p>
                  <p className="text-sm text-gray-300">
                    {new Date(item.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    ))}
    </>
  )
}

export default Featured