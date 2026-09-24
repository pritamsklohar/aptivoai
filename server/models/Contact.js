const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  organization: String,
  message: String,
  type: String,
}, { timestamps: true });

module.exports = mongoose.model('Contact', ContactSchema);
