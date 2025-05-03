const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
  name: String,
  description: String,
  privacy: { type: String, enum: ['Public', 'Private'], default: 'Public' },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Group', groupSchema);
