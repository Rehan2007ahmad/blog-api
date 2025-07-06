import React from 'react'

const RelatedArticels = () => {
  return (
    <>
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
              <h3 className="text-lg font-bold mb-4 border-b pb-2">Related Articles</h3>
              <div className="space-y-4">
                <div className="flex gap-3 cursor-pointer">
                  <img
                    src="https://readdy.ai/api/search-image?query=Machine%20learning%20algorithms%20visualization%20with%20data%20points%20and%20neural%20networks%2C%20abstract%20technology%20concept%20with%20blue%20color%20scheme%2C%20clean%20digital%20design&width=80&height=80&seq=related1&orientation=squarish"
                    alt="Machine Learning"
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <h4 className="font-medium text-sm">Machine Learning Models: A Beginner's Guide</h4>
                    <div className="flex items-center text-xs text-gray-500 mt-1">
                      <span>July 2, 2025</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-3 cursor-pointer">
                  <img
                    src="https://readdy.ai/api/search-image?query=Ethical%20considerations%20in%20AI%20development%2C%20diverse%20team%20discussing%20technology%20ethics%2C%20modern%20conference%20room%20setting%2C%20professional%20photography%20with%20natural%20lighting&width=80&height=80&seq=related2&orientation=squarish"
                    alt="AI Ethics"
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <h4 className="font-medium text-sm">The Ethics of AI: Navigating the Gray Areas</h4>
                    <div className="flex items-center text-xs text-gray-500 mt-1">
                      <span>June 28, 2025</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-3 cursor-pointer">
                  <img
                    src="https://readdy.ai/api/search-image?query=Natural%20language%20processing%20concept%20with%20text%20analysis%20visualization%2C%20AI%20reading%20and%20understanding%20human%20language%2C%20digital%20text%20streams%2C%20clean%20technology%20design&width=80&height=80&seq=related3&orientation=squarish"
                    alt="NLP"
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <h4 className="font-medium text-sm">Natural Language Processing: How Computers Understand Us</h4>
                    <div className="flex items-center text-xs text-gray-500 mt-1">
                      <span>June 25, 2025</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-3 cursor-pointer">
                  <img
                    src="https://readdy.ai/api/search-image?query=AI%20in%20education%20with%20students%20using%20tablets%20and%20interactive%20displays%2C%20modern%20classroom%20with%20technology%20integration%2C%20bright%20educational%20environment%2C%20professional%20photography&width=80&height=80&seq=related4&orientation=squarish"
                    alt="AI in Education"
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <h4 className="font-medium text-sm">How AI is Transforming Education and Learning</h4>
                    <div className="flex items-center text-xs text-gray-500 mt-1">
                      <span>June 20, 2025</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <button className="w-full mt-6 text-indigo-600 hover:text-indigo-800 text-sm font-medium cursor-pointer">
                View All Related Articles
              </button>
            </div>
    </>
)
}

export default RelatedArticels