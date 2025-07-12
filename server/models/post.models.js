const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    shortDescription: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    slug:{
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
