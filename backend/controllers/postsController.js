const Post = require('../models/Post');
const Comment = require('../models/Comment');
const Like = require('../models/Like');

// Create post
exports.createPost = async (req, res) => {
  const post = new Post({ ...req.body, user: req.user });
  const saved = await post.save();
  res.json(saved);
};

// Get all posts
exports.getAllPosts = async (req, res) => {
  const posts = await Post.find().populate('user', 'name');
  res.json(posts);
};

// Comment Controller
exports.createComment = async (req, res) => {
  const comment = new Comment({ ...req.body, user: req.user });
  const saved = await comment.save();
  res.json(saved);
};

exports.getComments = async (req, res) => {
  const comments = await Comment.find({ post: req.params.postId }).populate('user', 'name');
  res.json(comments);
};

// Like Controller
exports.likePost = async (req, res) => {
  const like = new Like({ post: req.params.postId, user: req.user });
  const saved = await like.save();
  res.json(saved);
};

exports.toggleLike = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ msg: 'Post not found' });

    if (post.likes.includes(req.user)) {
      post.likes.pull(req.user);
    } else {
      post.likes.push(req.user);
    }

    await post.save();
    res.json(post);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.addCommentToPost = async (req, res) => {
  const { text } = req.body;
  try {
    const comment = new Comment({
      post: req.params.id,
      user: req.user,
      text,
    });
    await comment.save();

    const post = await Post.findById(req.params.id);
    post.comments.push(comment._id);
    await post.save();

    res.status(201).json(comment);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};