import React from 'react'

const MainContent = () => {
  return (
    <>
         <div className="lg:w-3/5">
            <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Article Card 1 */}
              <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://readdy.ai/api/search-image?query=Modern%20quantum%20computing%20lab%20with%20futuristic%20equipment%2C%20blue%20and%20purple%20lighting%2C%20clean%20minimal%20design%2C%20high-tech%20environment%20with%20scientists%20working%2C%20professional%20photography%20with%20dramatic%20lighting&width=400&height=200&seq=article1&orientation=landscape"
                    alt="Quantum Computing"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <span className="bg-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-full">
                    Science
                  </span>
                  <h3 className="text-xl font-bold mt-3 mb-2">
                    Quantum Computing Breakthrough: The Next Computing
                    Revolution
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Scientists have achieved a significant milestone in quantum
                    computing that could transform how we process information.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="mr-3">July 5, 2025</span>
                    <span>
                      <i className="far fa-clock mr-1"></i>5 min read
                    </span>
                  </div>
                </div>
              </article>
              {/* Article Card 2 */}
              <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://readdy.ai/api/search-image?query=Sustainable%20green%20business%20office%20with%20plants%2C%20natural%20light%2C%20solar%20panels%2C%20eco-friendly%20design%20elements%2C%20modern%20architecture%20with%20wooden%20elements%2C%20professional%20photography%20with%20bright%20natural%20lighting&width=400&height=200&seq=article2&orientation=landscape"
                    alt="Sustainable Business"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <span className="bg-green-100 text-green-600 text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-full">
                    Business
                  </span>
                  <h3 className="text-xl font-bold mt-3 mb-2">
                    How Sustainable Practices Are Reshaping Corporate Strategy
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Leading companies are integrating environmental
                    considerations into their core business models with
                    impressive results.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="mr-3">July 4, 2025</span>
                    <span>
                      <i className="far fa-clock mr-1"></i>7 min read
                    </span>
                  </div>
                </div>
              </article>
              {/* Article Card 3 */}
              <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://readdy.ai/api/search-image?query=Digital%20art%20exhibition%20with%20interactive%20displays%2C%20visitors%20engaging%20with%20virtual%20reality%20installations%2C%20modern%20gallery%20space%20with%20colorful%20projections%2C%20high-tech%20art%20experience%2C%20professional%20photography%20with%20artistic%20lighting&width=400&height=200&seq=article3&orientation=landscape"
                    alt="Digital Art"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <span className="bg-purple-100 text-purple-600 text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-full">
                    Culture
                  </span>
                  <h3 className="text-xl font-bold mt-3 mb-2">
                    The Rise of Digital Art: NFTs and Beyond
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Exploring how blockchain technology is revolutionizing the
                    art world and creating new opportunities for creators.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="mr-3">July 3, 2025</span>
                    <span>
                      <i className="far fa-clock mr-1"></i>6 min read
                    </span>
                  </div>
                </div>
              </article>
              {/* Article Card 4 */}
              <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://readdy.ai/api/search-image?query=Advanced%20robotics%20laboratory%20with%20robotic%20arms%20and%20autonomous%20machines%2C%20engineers%20working%20on%20next-generation%20robots%2C%20clean%20high-tech%20environment%2C%20professional%20photography%20with%20technical%20details%20visible&width=400&height=200&seq=article4&orientation=landscape"
                    alt="Robotics"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <span className="bg-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-full">
                    Technology
                  </span>
                  <h3 className="text-xl font-bold mt-3 mb-2">
                    Robotics in Healthcare: Transforming Patient Care
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    How advanced robotics and automation are improving surgical
                    precision and patient outcomes in hospitals worldwide.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="mr-3">July 2, 2025</span>
                    <span>
                      <i className="far fa-clock mr-1"></i>8 min read
                    </span>
                  </div>
                </div>
              </article>
            </div>
            <div className="mt-10 flex justify-center">
              <button className="bg-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:bg-indigo-700 transition-colors !rounded-button whitespace-nowrap cursor-pointer">
                Load More Articles
              </button>
            </div>
          </div>
    </>
)
}

export default MainContent