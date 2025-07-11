import React from 'react'
import { useParams } from 'react-router-dom'

const PostsByCategory = () => {
     const posts =[
      {
        id: 1,
        title: 'The Future of Artificial Intelligence in Everyday Life',
        excerpt: 'Artificial Intelligence has rapidly evolved from a niche technological concept to a ubiquitous presence in our daily lives...',
        author: 'Sarah Johnson',
        date: 'July 5, 2025',
        readTime: '8 min read',
        views: '4.8K',
        image: 'https://readdy.ai/api/search-image?query=Futuristic%20smart%20home%20with%20AI%20assistants%2C%20robots%2C%20and%20automated%20systems%20integrated%20seamlessly%20into%20daily%20life%2C%20modern%20interior%20design%20with%20holographic%20displays%2C%20clean%20aesthetic%20with%20soft%20ambient%20lighting%2C%20photorealistic%20rendering%20with%20high%20detail&width=400&height=250&seq=tech-post1&orientation=landscape',
        tags: ['ArtificialIntelligence', 'Technology', 'Future']
      },
      {
        id: 2,
        title: 'Quantum Computing: The Next Technological Revolution',
        excerpt: 'Quantum computing promises to solve complex problems that are beyond the capabilities of classical computers...',
        author: 'David Chen',
        date: 'July 3, 2025',
        readTime: '6 min read',
        views: '3.2K',
        image: 'https://readdy.ai/api/search-image?query=Quantum%20computer%20with%20intricate%20circuitry%20and%20cooling%20systems%2C%20futuristic%20laboratory%20setting%20with%20blue%20lighting%2C%20high-tech%20scientific%20equipment%2C%20photorealistic%20rendering%20with%20technical%20details&width=400&height=250&seq=tech-post2&orientation=landscape',
        tags: ['QuantumComputing', 'Technology', 'Innovation']
      },
      {
        id: 3,
        title: 'The Rise of Edge Computing in IoT Ecosystems',
        excerpt: 'As Internet of Things devices proliferate, edge computing is becoming essential for real-time data processing...',
        author: 'Priya Sharma',
        date: 'June 28, 2025',
        readTime: '5 min read',
        views: '2.7K',
        image: 'https://readdy.ai/api/search-image?query=Edge%20computing%20infrastructure%20with%20connected%20IoT%20devices%2C%20smart%20city%20concept%20with%20data%20processing%20nodes%2C%20modern%20technology%20visualization%2C%20clean%20technical%20aesthetic%20with%20blue%20lighting&width=400&height=250&seq=tech-post3&orientation=landscape',
        tags: ['EdgeComputing', 'IoT', 'Technology']
      },
      {
        id: 4,
        title: 'Blockchain Beyond Cryptocurrency: Enterprise Applications',
        excerpt: 'While blockchain is known for powering cryptocurrencies, its potential applications extend far beyond digital currencies...',
        author: 'Marcus Johnson',
        date: 'June 25, 2025',
        readTime: '7 min read',
        views: '3.5K',
        image: 'https://readdy.ai/api/search-image?query=Blockchain%20technology%20visualization%20with%20connected%20blocks%20and%20data%20flow%2C%20enterprise%20application%20concept%2C%20modern%20digital%20design%20with%20blue%20and%20purple%20lighting%2C%20clean%20technical%20aesthetic&width=400&height=250&seq=tech-post4&orientation=landscape',
        tags: ['Blockchain', 'Enterprise', 'Technology']
      },
      {
        id: 5,
        title: 'The Evolution of Cybersecurity in a Connected World',
        excerpt: 'As digital systems become more interconnected, cybersecurity strategies must evolve to address new vulnerabilities...',
        author: 'Elena Rodriguez',
        date: 'June 20, 2025',
        readTime: '9 min read',
        views: '4.1K',
        image: 'https://readdy.ai/api/search-image?query=Cybersecurity%20concept%20with%20digital%20lock%20and%20shield%20protecting%20data%2C%20network%20security%20visualization%2C%20modern%20technical%20design%20with%20blue%20lighting%2C%20clean%20digital%20aesthetic&width=400&height=250&seq=tech-post5&orientation=landscape',
        tags: ['Cybersecurity', 'Technology', 'DigitalSecurity']
      },
      {
        id: 6,
        title: 'Augmented Reality: Transforming How We See the World',
        excerpt: 'Augmented reality technologies are creating new ways to interact with both digital information and physical environments...',
        author: 'James Wilson',
        date: 'June 15, 2025',
        readTime: '6 min read',
        views: '3.8K',
        image: 'https://readdy.ai/api/search-image?query=Person%20using%20augmented%20reality%20glasses%20with%20digital%20overlay%20information%2C%20interactive%20AR%20experience%20in%20modern%20environment%2C%20high-tech%20visualization%20with%20holographic%20elements%2C%20clean%20futuristic%20aesthetic&width=400&height=250&seq=tech-post6&orientation=landscape',
        tags: ['AugmentedReality', 'Technology', 'DigitalTransformation']
      }
    ]

    let {name} = useParams();
    
    // http://localhost:3000/api/category/by-name/Technology
  return (
     <div className="min-h-screen bg-gray-50 text-gray-800">
     
      <div className="bg-indigo-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{name}</h1>
          <p className="text-indigo-100 text-lg md:text-xl max-w-3xl">
            Explore the latest innovations, breakthroughs, and trends shaping the future of technology and digital transformation.
          </p>
        </div>
      </div>

       <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Technology</h2>
            <div className="flex items-center">
              <button className="text-indigo-600 hover:text-indigo-800 font-medium mr-4 cursor-pointer">
                Latest
              </button>
              <button className="text-gray-500 hover:text-indigo-600 font-medium mr-4 cursor-pointer">
                Popular
              </button>
              <button className="text-gray-500 hover:text-indigo-600 font-medium cursor-pointer">
                Trending
              </button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {posts.map(post => (
              <div key={post.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover object-top transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="bg-indigo-100 text-indigo-600 px-2 py-1 text-xs rounded-full">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mr-2">
                        {post.author.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-medium">{post.author}</p>
                        <div className="flex items-center text-xs text-gray-500">
                          <span>{post.date}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <span className="mr-3"><i className="far fa-clock mr-1"></i>{post.readTime}</span>
                      <span><i className="far fa-eye mr-1"></i>{post.views}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:bg-indigo-700 transition-colors !rounded-button whitespace-nowrap cursor-pointer">
              Load More Articles
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostsByCategory