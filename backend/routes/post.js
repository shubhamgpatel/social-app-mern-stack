const router = require('express').Router();
const auth = require('../middleware/authMiddleware');
const { createPost, getAllPosts, createComment, getComments, likePost,  toggleLike, addCommentToPost, } = require('../controllers/postsController');

router.post('/', auth, createPost);
router.get('/', auth, getAllPosts);

router.post('/createcomment', auth, createComment);
router.get('/:postId', auth, getComments);

router.post('/:postId', auth, likePost);
router.put('/:id/like', auth, toggleLike);           // for like/unlike
router.post('/:id/comment', auth, addCommentToPost); // direct comment to a post
module.exports = router;


// Like/Unlike Post
// router.put('/:id/like', auth, async (req, res) => {
//   try {
//     const post = await Post.findById(req.params.id);
//     if (post.likes.includes(req.user)) {
//       post.likes.pull(req.user);
//     } else {
//       post.likes.push(req.user);
//     }
//     await post.save();
//     res.json(post);
//   } catch (err) {
//     res.status(500).json({ msg: 'Server error' });
//   }
// });

// Comment on Post
// router.post('/:id/comment', auth, async (req, res) => {
//   const { text } = req.body;
//   try {
//     const comment = new Comment({ post: req.params.id, user: req.user, text });
//     await comment.save();

//     const post = await Post.findById(req.params.id);
//     post.comments.push(comment._id);
//     await post.save();

//     res.status(201).json(comment);
//   } catch (err) {
//     res.status(500).json({ msg: 'Server error' });
//   }
// });

// Get all posts (Feed)
// router.get('/feed', auth, async (req, res) => {
//   try {
//     const posts = await Post.find().populate('user', 'name profilePic').sort({ createdAt: -1 });
//     res.json(posts);
//   } catch (err) {
//     res.status(500).json({ msg: 'Server error' });
//   }
// });

// module.exports = router;

// // Create Post
// router.post('/', auth, async (req, res) => {
//   const { content, image } = req.body;
//   try {
//     const newPost = new Post({ user: req.user, content, image });
//     await newPost.save();
//     res.status(201).json(newPost);
//   } catch (err) {
//     res.status(500).json({ msg: 'Server error' });
//   }
// });