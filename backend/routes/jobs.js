// const router = require('express').Router();
// const auth = require('../middleware/authMiddleware');
// const Job = require('../models/Job');

// // Post a job
// router.post('/', auth, async (req, res) => {
//   const job = new Job({ ...req.body, postedBy: req.user });
//   const saved = await job.save();
//   res.json(saved);
// });

// // Get jobs
// router.get('/', async (req, res) => {
//   const jobs = await Job.find().populate('postedBy', 'name');
//   res.json(jobs);
// });

const router = require('express').Router();
const auth = require('../middleware/authMiddleware');
const { createJob, getJobs } = require('../controllers/jobsController');

router.post('/', auth, createJob);
router.get('/', auth, getJobs);

module.exports = router;
