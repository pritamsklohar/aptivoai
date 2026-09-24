const mongoose = require('mongoose');

const WaitlistSchema = new mongoose.Schema({
  email: String,
  role: String,
}, { timestamps: true });

module.exports = mongoose.model('Waitlist', WaitlistSchema);
