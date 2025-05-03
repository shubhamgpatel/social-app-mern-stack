const MarketplaceItem = require('../models/MarketplaceItem');

exports.createMarketplaceItem = async (req, res) => {
  const MarketplaceItem = new MarketplaceItem({ ...req.body, user: req.user });
  const saved = await MarketplaceItem.save();
  res.json(saved);
};

exports.getMarketplaceItems = async (req, res) => {
  const MarketplaceItems = await MarketplaceItem.find();
  res.json(MarketplaceItems);
};
