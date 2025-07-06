import React from 'react'

const Featured = () => {
  return (
    <>
    <a href="/singlepost">
         <div className="relative h-[500px] mb-12 rounded-xl overflow-hidden shadow-lg">
          <img
            src="https://readdy.ai/api/search-image?query=A%20modern%20technology%20workspace%20with%20sleek%20devices%2C%20soft%20ambient%20lighting%2C%20minimalist%20design%2C%20clean%20desk%20setup%20with%20a%20laptop%2C%20coffee%20cup%2C%20and%20plants%2C%20high-resolution%20professional%20photography%20with%20shallow%20depth%20of%20field&width=1200&height=500&seq=featured1&orientation=landscape"
            alt="Featured post"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-end">
            <div className="p-8 text-white max-w-2xl">
              <span className="bg-indigo-600 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full cursor-pointer">
                Technology
              </span>
              <h2 className="text-4xl font-bold mt-4 mb-4">
                The Future of Artificial Intelligence in Everyday Life
              </h2>
              <p className="text-gray-200 mb-6">
                Exploring how AI is transforming our daily routines and what we
                can expect in the coming decade as technology continues to
                evolve.
              </p>
              <div className="flex items-center">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20young%20tech%20journalist%20with%20neutral%20background%2C%20high%20quality%20portrait%20with%20soft%20lighting%2C%20professional%20appearance&width=50&height=50&seq=author1&orientation=squarish"
                  alt="Author"
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div>
                  <p className="font-medium">Sarah Johnson</p>
                  <p className="text-sm text-gray-300">
                    July 5, 2025 · 8 min read
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
     </a>   
    </>
  )
}

export default Featured