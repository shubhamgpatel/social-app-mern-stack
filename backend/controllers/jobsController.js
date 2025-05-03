const Job = require('../models/Job');

exports.createJob = async (req, res) => {
  const job = new Job({ ...req.body, postedBy: req.user });
  const saved = await job.save();
  res.json(saved);
};

exports.getJobs = async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
};
