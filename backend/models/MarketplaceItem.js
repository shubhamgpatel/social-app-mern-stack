const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  images: [String],
  location: String,
  seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('MarketplaceItem', itemSchema);
