const router = require('express').Router();
const auth = require('../middleware/authMiddleware');
const { getProfile, updateUser } = require('../controllers/usersController');

router.get('/me', auth, getProfile);
router.put('/update', auth, updateUser);

module.exports = router;

// router.get('/me', auth, async (req, res) => {
//   try {
//     const user = await User.findById(req.user).select('-password');
//     res.json(user);
//   } catch (err) {
//     res.status(500).json({ msg: 'Server error' });
//   }
// });
// PUT /api/users/profile — Update profile fields
// router.put('/profile', auth, async (req, res) => {
//     const updates = {
//       dob: req.body.dob,
//       gender: req.body.gender,
//       location: req.body.location,
//       about: req.body.about,
//       website: req.body.website,
//       school: req.body.school,
//       currentStatus: req.body.currentStatus,
//       phone: req.body.phone,
//       profilePic: req.body.profilePic,
//       coverPic: req.body.coverPic
//     };
  
//     try {
//       const user = await User.findByIdAndUpdate(req.user, updates, { new: true });
//       res.json(user);
//     } catch (err) {
//       res.status(500).json({ msg: 'Server error' });
//     }
//   });
// module.exports = router;
