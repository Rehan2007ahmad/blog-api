import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { readingTime } from 'reading-time-estimator'


const MainContent = () => {
  const CategoryStyle = [
    "bg-blue-100 text-blue-600",
    "bg-green-100 text-green-600",
    "bg-red-100 text-red-600",
    "bg-yellow-100 text-yellow-600",
  ];
  
    let [post, setPost] = useState([])
    let [postcount, setPostcount] = useState(4)

  useEffect(()=>{
    axios.get('https://blog-api-kag3.onrender.com/api/post')
      .then(response => {
        setPost(response.data)
      })
      .catch(error => {
        console.error("Error fetching featured post:", error)
      })
  }, [])

  const handlemore = () =>{
    setPostcount(prev => prev+4)
  }
  return (
    <>
         <div className="lg:w-3/5">
            <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {post.slice(1, postcount + 1).map((a,i) =>(
                <>
                 <article key={a._id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <div className="h-48 overflow-hidden">
                  <img
                    src={a.image}
                    alt={a.title}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <span className={`${CategoryStyle[i]} text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-full`}>
                   <Link to={`/category/${a.category?.name}`}>{a.category?.name}</Link> 
                  </span>
                  <Link to={`/post/${a.slug}`}>
                  <h3 className="text-xl font-bold mt-3 mb-2">
                    {a.title}
                  </h3></Link>
                  <Link to={`/post/${a.slug}`}>
                  <p className="text-gray-600 text-sm mb-4">
                    {a.shortDescription}
                  </p>
                  </Link>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="mr-3">{new Date(a.createdAt).toLocaleDateString()}</span>
                    <span>
                     {readingTime((a.description), 50).text}
                    </span>
                  </div>
                </div>
              </article>
              </>
              ))}
            </div>
              {postcount + 1 < post.length &&(
                <div className="mt-10 flex justify-center">
              <button onClick={handlemore} className="bg-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:bg-indigo-700 transition-colors !rounded-button whitespace-nowrap cursor-pointer">
                Load More Articles
              </button>
            </div>
              )}
            
          </div>
    </>
)
}

export default MainContent