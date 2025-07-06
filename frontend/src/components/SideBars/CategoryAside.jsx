import React from 'react'

const CategoryAside = () => {
  return (
    <>
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
              <h3 className="text-lg font-bold mb-4 border-b pb-2">
                Categories
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center py-2 text-indigo-600 font-medium cursor-pointer">
                  <i className="fas fa-laptop-code mr-3"></i>
                  <span>Technology</span>
                  <span className="ml-auto bg-indigo-100 text-indigo-600 text-xs px-2 py-1 rounded-full">
                    24
                  </span>
                </li>
                <li className="flex items-center py-2 hover:text-indigo-600 transition-colors cursor-pointer">
                  <i className="fas fa-flask mr-3"></i>
                  <span>Science</span>
                  <span className="ml-auto bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                    18
                  </span>
                </li>
                <li className="flex items-center py-2 hover:text-indigo-600 transition-colors cursor-pointer">
                  <i className="fas fa-paint-brush mr-3"></i>
                  <span>Culture</span>
                  <span className="ml-auto bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                    15
                  </span>
                </li>
                <li className="flex items-center py-2 hover:text-indigo-600 transition-colors cursor-pointer">
                  <i className="fas fa-chart-line mr-3"></i>
                  <span>Business</span>
                  <span className="ml-auto bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                    12
                  </span>
                </li>
                <li className="flex items-center py-2 hover:text-indigo-600 transition-colors cursor-pointer">
                  <i className="fas fa-globe-americas mr-3"></i>
                  <span>Travel</span>
                  <span className="ml-auto bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                    9
                  </span>
                </li>
                <li className="flex items-center py-2 hover:text-indigo-600 transition-colors cursor-pointer">
                  <i className="fas fa-utensils mr-3"></i>
                  <span>Food</span>
                  <span className="ml-auto bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                    7
                  </span>
                </li>
              </ul>
            </div>
    </>
)
}

export default CategoryAside