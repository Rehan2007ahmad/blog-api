import React from 'react'

const PopularTags = () => {
  return (
    <>
        <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-bold mb-4 border-b pb-2">
                Popular Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-800 px-3 py-1 text-sm rounded-full hover:bg-indigo-100 hover:text-indigo-600 transition-colors cursor-pointer">
                  #AI
                </span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 text-sm rounded-full hover:bg-indigo-100 hover:text-indigo-600 transition-colors cursor-pointer">
                  #MachineLearning
                </span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 text-sm rounded-full hover:bg-indigo-100 hover:text-indigo-600 transition-colors cursor-pointer">
                  #Climate
                </span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 text-sm rounded-full hover:bg-indigo-100 hover:text-indigo-600 transition-colors cursor-pointer">
                  #Startups
                </span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 text-sm rounded-full hover:bg-indigo-100 hover:text-indigo-600 transition-colors cursor-pointer">
                  #Design
                </span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 text-sm rounded-full hover:bg-indigo-100 hover:text-indigo-600 transition-colors cursor-pointer">
                  #Productivity
                </span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 text-sm rounded-full hover:bg-indigo-100 hover:text-indigo-600 transition-colors cursor-pointer">
                  #Remote
                </span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 text-sm rounded-full hover:bg-indigo-100 hover:text-indigo-600 transition-colors cursor-pointer">
                  #Future
                </span>
              </div>
            </div>
    </>
)
}

export default PopularTags