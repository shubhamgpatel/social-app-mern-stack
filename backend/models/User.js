const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profilePic: { type: String, default: '' },
  coverPic: { type: String, default: '' },
  dob: { type: Date },
  gender: { type: String, enum: ['male', 'female', 'other'] },
  location: { type: String },
  about: { type: String },
  website: { type: String },
  school: { type: String },
  currentStatus: { type: String },
  phone: { type: String },
  friendRequests: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
