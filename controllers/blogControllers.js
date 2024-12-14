import Blog from '../models/Blog.js';

export const createBlog = async (req, res) => {
  console.log(req.body);
  const blog = new Blog({ ...req.body, author: req.user.id });
  await blog.save();
  res.status(201).json(blog);
};

export const updateBlog = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (!blog || blog.author.toString() !== req.user.id) {
    return res.status(404).json({ message: 'Blog not found or not authorized' });
  }
  Object.assign(blog, req.body);
  await blog.save();
  res.json(blog);
};

export const deleteBlog = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (!blog || blog.author.toString() !== req.user.id) {
    return res.status(404).json({ message: 'Blog not found or not authorized' });
  }
  await blog.deleteOne();
  res.json({ message: 'Blog deleted' });
};

export const getAllBlogs = async (req, res) => {
  const blogs = await Blog.find().populate('author', 'name');
  res.json(blogs);
};

export const addComment = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  blog.comments.push(req.body);
  await blog.save();
  res.status(201).json(blog);
};
