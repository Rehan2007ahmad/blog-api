const { image } = require('../config/cloudinary');
const Post = require('../models/post.models');
const slugify = require('slugify');
const User = require('../models/user.models');
const { post } = require('../routes/post.routes');

exports.createPost = async (req, res) => {
  try {
    const  images  = req.files;
    const { title, description, author, category } = req.body;

    if (!images || images.length === 0) {
      return res.status(400).json({ message: "No images uploaded" });
    }
    if(images.length > 10) {
      return res.status(400).json({ message: "You can upload a maximum of 10 images" });
    }

    if (!title || !description || !author || !category) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const imageData = images.map((file) => ({
      filename: file.originalname,
      url: file.path, 
      size: file.size,
      mimetype: file.mimetype,
    }));

    const data = {
      title,
      description,
      author,
      category,
      image: imageData,
      slug: slugify(title, { lower: true, strict: true }) + '-' + Math.floor(10000 + Math.random() * 90000), 
    };

    const savedPost = await Post.create(data);

    res.status(201).json({
      message: "Post created successfully",
      post: savedPost,
    });
    
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

exports.getposts = async (req, res) => {
  try {
    const posts = await Post.find()
    .populate('author', 'firstName lastName email role')
    .populate('category')
    .sort({ createdAt: -1 });

    res.status(200).json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

exports.getPostById = async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await Post.findById(postId)
      .populate('author', 'firstName lastName email role')
      .populate('category', 'name');

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json(post);
  } catch (error) {
    console.error("Error fetching post:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

exports.deletePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await Post.findByIdAndDelete(postId);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    console.error("Error deleting post:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

exports.updatePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const images = req.files;
    const { title, description, author, category  } = req.body;



   const imageData = images ? images.map((file) => ({
      filename: file.originalname,
      url: file.path, 
      size: file.size,
      mimetype: file.mimetype,
    })) : undefined;


    const updatedData = {
      title,
      description,
      author,
      category,
      image: imageData
    };

    const updatedPost = await Post.findByIdAndUpdate(postId, updatedData, { new: true });

    if (!updatedPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json({
      message: "Post updated successfully",
      post: updatedPost,
    });
  } catch (error) {
    console.error("Error updating post:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

exports.getPostsBySlug = async (req,res)=>{
  try {
    const slug = req.params.slug;
    const post = await Post.findOne({ slug })
      .populate('author', 'firstName lastName email role')
      .populate('category', 'name');

      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }
    res.status(200).json(post);

  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}