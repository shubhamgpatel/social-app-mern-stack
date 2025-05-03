const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  text: { type: String },
  createdAt: { type: Date, default: Date.now }
});

const chatSchema = new mongoose.Schema({
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  messages: [messageSchema]
}, { timestamps: true });

module.exports = mongoose.model('Chat', chatSchema);
