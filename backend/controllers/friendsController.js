const User = require('../models/User');
const FriendRequest = require('../models/FriendRequest');

// Send a friend request
exports.sendRequest = async (req, res) => {
  const { id: receiverId } = req.params;
  const existing = await FriendRequest.findOne({
    from: req.user,
    to: receiverId,
  });

  if (existing)
    return res.status(400).json({ msg: 'Request already sent or exists' });

  const request = new FriendRequest({ from: req.user, to: receiverId });
  await request.save();
  res.status(201).json(request);
};

// Accept a friend request
exports.acceptRequest = async (req, res) => {
  const request = await FriendRequest.findById(req.params.id);
  if (!request || request.to.toString() !== req.user)
    return res.status(403).json({ msg: 'Unauthorized or invalid request' });

  request.status = 'accepted';
  await request.save();

  // Add each other as friends
  await User.findByIdAndUpdate(req.user, { $addToSet: { friends: request.from } });
  await User.findByIdAndUpdate(request.from, { $addToSet: { friends: request.to } });

  res.json({ msg: 'Friend request accepted' });
};

// Reject or cancel a request
exports.cancelOrRejectRequest = async (req, res) => {
  const request = await FriendRequest.findById(req.params.id);
  if (!request || (request.from.toString() !== req.user && request.to.toString() !== req.user)) {
    return res.status(403).json({ msg: 'Unauthorized' });
  }

  await FriendRequest.findByIdAndDelete(req.params.id);
  res.json({ msg: 'Request removed' });
};

// Get pending requests sent to the logged-in user
exports.getIncomingRequests = async (req, res) => {
  const requests = await FriendRequest.find({ to: req.user, status: 'pending' }).populate('from', 'name email');
  res.json(requests);
};

// Get pending requests sent by the user
exports.getSentRequests = async (req, res) => {
  const requests = await FriendRequest.find({ from: req.user, status: 'pending' }).populate('to', 'name email');
  res.json(requests);
};

// Get list of friends
exports.getFriends = async (req, res) => {
  const user = await User.findById(req.user).populate('friends', 'name email');
  res.json(user.friends);
};

// Remove a friend
exports.removeFriend = async (req, res) => {
  const { id: friendId } = req.params;
  await User.findByIdAndUpdate(req.user, { $pull: { friends: friendId } });
  await User.findByIdAndUpdate(friendId, { $pull: { friends: req.user } });
  res.json({ msg: 'Friend removed' });
};
