import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  content: { 
    type: String,
    required: true
  },
  author: {
     type: String
    },
});

const blogSchema = new mongoose.Schema({
  title: { 
    type: String,
    required: true 
  },
  content: { 
    type: String,
    required: true 
  },
  author: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: "User" 
  },
  creationDate: { 
    type: Date,
    default: Date.now
  },
  comments: [commentSchema],
});

const Blog = mongoose.model("Blog", blogSchema);
export default Blog;
