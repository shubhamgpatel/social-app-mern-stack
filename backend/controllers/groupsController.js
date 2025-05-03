const Group = require('../models/Group');

// Create group
exports.createGroup = async (req, res) => {
  try {
    const group = new Group({ ...req.body, createdBy: req.user, members: [req.user] });
    const savedGroup = await group.save();
    res.json(savedGroup);
  } catch (err) {
    res.status(500).json({ msg: 'Error creating group' });
  }
};

// Join group
exports.joinGroup = async (req, res) => {
  try {
    const group = await Group.findById(req.params.id);
    if (!group.members.includes(req.user)) {
      group.members.push(req.user);
      await group.save();
    }
    res.json(group);
  } catch (err) {
    res.status(500).json({ msg: 'Error joining group' });
  }
};

// Remove member from group
exports.removeMember = async (req, res) => {
  try {
    const group = await Group.findById(req.params.groupId);
    if (!group.members.includes(req.params.userId)) {
      return res.status(400).json({ msg: 'User not in group' });
    }
    group.members = group.members.filter(member => member.toString() !== req.params.userId);
    await group.save();
    res.json(group);
  } catch (err) {
    res.status(500).json({ msg: 'Error removing member' });
  }
};

// Get all groups
exports.getAllGroups = async (req, res) => {
  try {
    const groups = await Group.find().populate('createdBy', 'name');
    res.json(groups);
  } catch (err) {
    res.status(500).json({ msg: 'Error fetching groups' });
  }
};
