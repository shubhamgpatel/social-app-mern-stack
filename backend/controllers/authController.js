const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Register
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const hash = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hash });
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (err) {
    console.log(err)
    res.status(500).json({ msg: 'Registration error' });
  }
};

// Login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // console.log(req.body)
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password)))
      return res.status(401).json({ msg: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    console.log("token",token)
    console.log(user)
    res.json({ token, user , msg:"Login Successful"});
  } catch (err) {
    res.status(500).json({ msg: 'Login error' });
  }
};
