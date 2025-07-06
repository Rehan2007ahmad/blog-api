import React from 'react'

const SideNewsletter = () => {
  return (
    <>
        <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl shadow-sm p-6 mb-4 mt-4 text-white">
              <h3 className="text-lg font-bold mb-3">
                Subscribe to Newsletter
              </h3>
              <p className="text-indigo-100 text-sm mb-4">
                Get the latest articles and insights delivered to your inbox
                weekly.
              </p>
              <form>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg px-4 py-2 mb-3 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 border-none"
                  
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-white text-indigo-600 font-medium rounded-lg py-2 hover:bg-indigo-50 transition-colors !rounded-button whitespace-nowrap cursor-pointer"
                >
                  Subscribe Now
                </button>
              </form>
            </div>
    </>
)
}

export default SideNewsletter