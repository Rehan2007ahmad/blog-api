import React, { useEffect, useState } from "react";
import { FaRegThumbsUp, FaTwitter } from "react-icons/fa6";
import {
  FaRegBookmark,
  FaFacebookF,
  FaLinkedinIn,
  FaLink,
} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import RelatedArticels from "../../components/SideBars/RelatedArticels";
import CategoryAside from "../../components/SideBars/CategoryAside";
import SideNewsletter from "../../components/NewsLetter/SideNewsletter";
import { useParams } from "react-router-dom";
import axios from "axios";
import { readingTime } from "reading-time-estimator";
import MDEditor from "@uiw/react-md-editor";
import ReactMarkdown from "react-markdown";

const SinglePost = () => {
  let { slug } = useParams();
  let [post, setPost] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3000/api/post/slug/${slug}`).then((res) => {
      setPost(res.data);
    });
  }, [slug]);
  return (
    <>
      <div className="min-h-screen bg-gray-50 text-gray-800">
        <main className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-3/4">
              {/* Article Header */}
              <div className="mb-8">
                <div className="flex items-center space-x-2 mb-4">
                  <a
                    href="#"
                    className="text-indigo-600 hover:text-indigo-800 font-medium cursor-pointer"
                  >
                    <i className="fas fa-home mr-2"></i>Home
                  </a>
                  <span className="text-gray-400">/</span>
                  <a
                    href="#"
                    className="text-indigo-600 hover:text-indigo-800 font-medium cursor-pointer"
                  >
                    {post.category?.name}
                  </a>
                </div>

                <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

                <div className="flex items-center mb-6">
                  <img
                    src="https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20young%20tech%20journalist%20with%20neutral%20background%2C%20high%20quality%20portrait%20with%20soft%20lighting%2C%20professional%20appearance&width=50&height=50&seq=author1&orientation=squarish"
                    alt="Author"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-medium">
                      {post.author?.firstName} {post.author?.lastName}
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="mr-4">
                        {new Date(post.createdAt).toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                      <span className="mr-4 capitalize">
                        {readingTime(post.description, 50).text}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Featured Image */}
              <div className="mb-8 rounded-xl overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-auto object-cover"
                />
                <p className="text-sm text-gray-500 mt-2 italic">
                  {post.title}
                </p>
              </div>

              {/* Article Content */}
              <article
                id="article-content"
                className="prose prose-lg max-w-none mb-12"
              >
                <div className="mt-4">
                  <MDEditor.Markdown
                    source={post.description}
                    style={{
                      whiteSpace: "pre-wrap",
                      background: "white",
                      color: "black",
                      padding: "20px",
                      borderRadius: "8px",
                    }}
                  />
                </div>
              </article>

              {/* Author Bio */}
              <div className="bg-gray-50 rounded-xl p-6 mb-12 border border-gray-200">
                <div className="flex items-start">
                  <img
                    src="https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20young%20female%20tech%20journalist%20with%20neutral%20background%2C%20high%20quality%20portrait%20with%20soft%20lighting%2C%20professional%20appearance%20with%20glasses&width=100&height=100&seq=author-bio&orientation=squarish"
                    alt="Sarah Johnson"
                    className="w-20 h-20 rounded-full object-cover mr-6"
                  />
                  <div>
                    <h3 className="text-xl font-bold mb-2">About the Author</h3>
                    <p className="text-gray-600 mb-4">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Inventore suscipit cumque unde, veniam nesciunt, et
                      necessitatibus odio, a fugiat dicta sapiente corrupti.
                      Iusto harum est aliquam autem itaque fugit officiis!
                    </p>
                    <div className="flex space-x-4">
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-800 cursor-pointer"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-800 cursor-pointer"
                      >
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-800 cursor-pointer"
                      >
                        <i className="fas fa-globe"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Share and Reactions */}
              <div className="flex flex-col sm:flex-row justify-between items-center bg-white rounded-xl p-6 mb-12 shadow-sm">
                <div className="flex items-center space-x-6 mb-4 sm:mb-0">
                  <button className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors cursor-pointer">
                    <FaRegThumbsUp className="text-2xl" />
                    <span>142</span>
                  </button>

                  <button className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors cursor-pointer">
                    <FaRegBookmark className="text-2xl" />
                    <span>Save</span>
                  </button>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-gray-600 text-sm hidden sm:inline">
                    Share:
                  </span>
                  <div className="flex space-x-3">
                    <a
                      href="#"
                      className="text-gray-600 hover:text-[#1DA1F2] transition-colors cursor-pointer"
                    >
                      <FaTwitter className="text-2xl" />
                    </a>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-[#4267B2] transition-colors cursor-pointer"
                    >
                      <FaFacebookF className="text-2xl" />
                    </a>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-[#0077B5] transition-colors cursor-pointer"
                    >
                      <FaLinkedinIn className="text-2xl" />
                    </a>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-[#25D366] transition-colors cursor-pointer"
                    >
                      <IoLogoWhatsapp className="text-2xl" />
                    </a>
                    <button className="text-gray-600 hover:text-indigo-600 transition-colors cursor-pointer">
                      <FaLink className="text-2xl" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:w-1/4">
              {/* Related Articles */}
              <RelatedArticels />

              {/* Popular Tags */}
              <CategoryAside />
              {/* Newsletter Subscription */}
              <SideNewsletter />
            </aside>
          </div>
        </main>
      </div>
    </>
  );
};

export default SinglePost;
