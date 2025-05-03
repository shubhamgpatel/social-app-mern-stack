const router = require('express').Router();
const { register, login } = require('../controllers/authController');

// Register
// router.post('/register', async (req, res) => {
//   const { name, email, password } = req.body;
//   try {
//     const existing = await User.findOne({ email });
//     if (existing) return res.status(400).json({ msg: 'Email already exists' });

//     const salt = await bcrypt.genSalt(10);
//     const hashed = await bcrypt.hash(password, salt);

//     const newUser = new User({ name, email, password: hashed });
//     await newUser.save();
//     res.status(201).json({ msg: 'User registered' });
//   } catch (err) {
//     res.status(500).json({ msg: 'Server error' });
//   }
// });

router.post('/register', register);
router.post('/login', login);

module.exports = router;
