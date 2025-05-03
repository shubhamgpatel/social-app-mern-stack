const Event = require('../models/Event');

// Create event
exports.createEvent = async (req, res) => {
  try {
    const event = new Event({ ...req.body, createdBy: req.user });
    const savedEvent = await event.save();
    res.json(savedEvent);
  } catch (err) {
    res.status(500).json({ msg: 'Error creating event' });
  }
};

// RSVP to event
exports.rsvpEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event.attendees.includes(req.user)) {
      event.attendees.push(req.user);
      await event.save();
    }
    res.json(event);
  } catch (err) {
    res.status(500).json({ msg: 'Error RSVP-ing to event' });
  }
};

// Get all events
exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.find().populate('createdBy', 'name');
    res.json(events);
  } catch (err) {
    res.status(500).json({ msg: 'Error fetching events' });
  }
};
