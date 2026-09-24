const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  id: String,
  title: String,
  department: String,
  location: String,
  type: String,
  description: String,
  responsibilities: [String],
  requirements: [String]
}, { timestamps: true });

module.exports = mongoose.model('Job', JobSchema);
