import React, { useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const RelatedArticels = () => {
  let [posts, setPosts] = useState([])

  const fetchPosts = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/api/post/`);
      setPosts(res.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  }

  useEffect(()=>{
    fetchPosts();
  },[])

  const getRandomPosts = (posts, count) => {
    if (posts.length <= count) return posts;
    const shuffled = posts.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  } 

  const randomPosts = useMemo(() => getRandomPosts(posts, 5), [posts]);

  return (
    <>
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
              <h3 className="text-lg font-bold mb-4 border-b pb-2">Related Articles</h3>
              <div className="space-y-4">

                {randomPosts.map((a, i) => (
                  <div className="flex gap-3 cursor-pointer" key={a._id}>
                      <img
                        src={a.image}
                        alt={a.title}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                  <div>
                    <h4 className="font-medium text-sm"><Link to={`/post/${a.slug}`}>{a.title}</Link></h4>
                    <div className="flex items-center text-xs text-gray-500 mt-1">
                      <span>{new Date(a.createdAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
                ))}
                
              

              </div>
            </div>
    </>
)
}

export default RelatedArticels