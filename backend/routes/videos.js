const router = require('express').Router();
const axios = require('axios');

// For now, dummy videos
router.get('/', async (req, res) => {
  try {
    const videos = [
      { id: 1, title: "Cool Drone Shot", url: "https://www.youtube.com/embed/abc123" },
      { id: 2, title: "Nature Walk", url: "https://www.youtube.com/embed/xyz789" },
    ];
    res.json(videos);
  } catch (err) {
    res.status(500).json({ msg: 'Error fetching videos' });
  }
});

module.exports = router;
