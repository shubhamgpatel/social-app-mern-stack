const router = require('express').Router();
const auth = require('../middleware/authMiddleware');
const eventController = require('../controllers/eventsController');

// // Create event
// router.post('/', auth, async (req, res) => {
//   const event = new Event({ ...req.body, createdBy: req.user });
//   const saved = await event.save();
//   res.json(saved);
// });

// // RSVP
// router.post('/:id/rsvp', auth, async (req, res) => {
//   const event = await Event.findById(req.params.id);
//   if (!event.attendees.includes(req.user)) {
//     event.attendees.push(req.user);
//     await event.save();
//   }
//   res.json(event);
// });

// // Get all events
// router.get('/', async (req, res) => {
//   const events = await Event.find().populate('createdBy', 'name');
//   res.json(events);
// });

// Create event
router.post('/', auth, eventController.createEvent);

// RSVP to event
router.post('/:id/rsvp', auth, eventController.rsvpEvent);

// Get all events
router.get('/', auth, eventController.getAllEvents);

module.exports = router;

