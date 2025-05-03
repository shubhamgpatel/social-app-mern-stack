const router = require('express').Router();
const auth = require('../middleware/authMiddleware');
const Item = require('../models/MarketplaceItem');

// Create item
router.post('/', auth, async (req, res) => {
  const newItem = new Item({ ...req.body, seller: req.user });
  const saved = await newItem.save();
  res.json(saved);
});

// Get all items
router.get('/', async (req, res) => {
  const items = await Item.find().populate('seller', 'name');
  res.json(items);
});


module.exports = router;