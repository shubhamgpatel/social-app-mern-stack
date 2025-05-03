const router = require('express').Router();
const auth = require('../middleware/authMiddleware');
const groupController = require('../controllers/groupsController');
// const Group = require('../models/Group');

// // Create group
// router.post('/', auth, async (req, res) => {
//   const group = new Group({ ...req.body, createdBy: req.user, members: [req.user] });
//   const saved = await group.save();
//   res.json(saved);
// });

// // Join group
// router.post('/:id/join', auth, async (req, res) => {
//   const group = await Group.findById(req.params.id);
//   if (!group.members.includes(req.user)) {
//     group.members.push(req.user);
//     await group.save();
//   }
//   res.json(group);
// });

// // Get all groups
// router.get('/', async (req, res) => {
//   const groups = await Group.find().populate('createdBy', 'name');
//   res.json(groups);
// });
//--------------------------------------------------

// Create group
router.post('/', auth, groupController.createGroup);

// Join group
router.post('/:id/join', auth, groupController.joinGroup);

// Remove member from group
router.post('/:groupId/remove/:userId', auth, groupController.removeMember);

// Get all groups
router.get('/', auth, groupController.getAllGroups);

module.exports = router;
