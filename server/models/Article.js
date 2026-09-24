const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  id: String,
  title: String,
  category: String,
  readTime: String,
  date: String,
  summary: String,
  content: [String]
}, { timestamps: true });

module.exports = mongoose.model('Article', ArticleSchema);
