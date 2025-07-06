import React from 'react'

const TrendingPosts = () => {
  return (
    <>
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
              <h3 className="text-lg font-bold mb-4 border-b pb-2">
                Trending Posts
              </h3>
              <div className="space-y-4">
                <div className="flex gap-3 cursor-pointer">
                  <img
                    src="https://readdy.ai/api/search-image?query=Wearable%20technology%20smartwatch%20and%20fitness%20trackers%20on%20minimal%20background%2C%20modern%20tech%20gadgets%20with%20health%20monitoring%20features%2C%20clean%20product%20photography%20with%20soft%20shadows&width=80&height=80&seq=trending1&orientation=squarish"
                    alt="Wearable Tech"
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <h4 className="font-medium text-sm">
                      The Next Generation of Wearable Tech
                    </h4>
                    <div className="flex items-center text-xs text-gray-500 mt-1">
                      <span>
                        <i className="far fa-eye mr-1"></i>4.2K views
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3 cursor-pointer">
                  <img
                    src="https://readdy.ai/api/search-image?query=Remote%20work%20setup%20with%20laptop%2C%20coffee%2C%20plants%20in%20cozy%20home%20office%2C%20natural%20light%2C%20productive%20workspace%20design%2C%20professional%20photography%20with%20warm%20tones&width=80&height=80&seq=trending2&orientation=squarish"
                    alt="Remote Work"
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <h4 className="font-medium text-sm">
                      Remote Work Culture: The New Normal
                    </h4>
                    <div className="flex items-center text-xs text-gray-500 mt-1">
                      <span>
                        <i className="far fa-eye mr-1"></i>3.8K views
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3 cursor-pointer">
                  <img
                    src="https://readdy.ai/api/search-image?query=Cryptocurrency%20and%20blockchain%20concept%20with%20digital%20coins%2C%20financial%20technology%20visualization%2C%20secure%20digital%20transactions%2C%20professional%20photography%20with%20blue%20technology%20lighting&width=80&height=80&seq=trending3&orientation=squarish"
                    alt="Cryptocurrency"
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <h4 className="font-medium text-sm">
                      Cryptocurrency: Beyond Bitcoin
                    </h4>
                    <div className="flex items-center text-xs text-gray-500 mt-1">
                      <span>
                        <i className="far fa-eye mr-1"></i>3.5K views
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3 cursor-pointer">
                  <img
                    src="https://readdy.ai/api/search-image?query=Mental%20health%20and%20wellness%20concept%20with%20meditation%2C%20mindfulness%20practice%2C%20peaceful%20environment%20with%20natural%20elements%2C%20professional%20photography%20with%20calming%20colors&width=80&height=80&seq=trending4&orientation=squarish"
                    alt="Mental Health"
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <h4 className="font-medium text-sm">
                      Digital Wellness: Balancing Tech and Mental Health
                    </h4>
                    <div className="flex items-center text-xs text-gray-500 mt-1">
                      <span>
                        <i className="far fa-eye mr-1"></i>3.1K views
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </>
  )
}

export default TrendingPosts