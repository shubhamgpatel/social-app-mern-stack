const User = require('../models/User');

// Get own profile
exports.getProfile = async (req, res) => {
  const user = await User.findById(req.user);
  res.json(user);
};

// Update user details
exports.updateUser = async (req, res) => {
  try {
    const updated = await User.findByIdAndUpdate(req.user, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ msg: 'Update error' });
  }
};
