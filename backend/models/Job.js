const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: String,
  company: String,
  location: String,
  description: String,
  type: { type: String, enum: ['Full-Time', 'Part-Time', 'Contract', 'Internship'] },
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Job', jobSchema);
