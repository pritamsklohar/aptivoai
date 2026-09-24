const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
  name: String,
  email: String,
  portfolio: String,
  jobId: String,
}, { timestamps: true });

module.exports = mongoose.model('Application', ApplicationSchema);
