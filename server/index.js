const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
require('dotenv').config();
const connectDB = require('./config/db');
const seedDatabase = require('./config/seeder');

const jobRoutes = require('./routes/jobRoutes');
const articleRoutes = require('./routes/articleRoutes');
const formRoutes = require('./routes/formRoutes');

const app = express();

// Security Middleware
app.use(helmet()); // Sets security HTTP headers

// Rate Limiting (Prevent DDoS/Brute Force)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});
app.use('/api', limiter);

// Data Sanitization (Handled via Mongoose schemas for NoSQL Injection)
// app.use(mongoSanitize()); // Removed because Vercel IncomingMessage req.query is read-only

// Standard Middleware
app.use(cors({ 
  origin: process.env.NODE_ENV === 'production' ? 'https://your-production-url.com' : 'http://localhost:5173',
  credentials: true 
}));
app.use(express.json({ limit: '10kb' })); // Limit body payload to prevent DOS

// Connect Database and Seed
connectDB().then(() => {
  seedDatabase();
});

// Routes
app.use('/api/jobs', jobRoutes);
app.use('/api/articles', articleRoutes);
app.use('/api', formRoutes);

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Aptivo AI MongoDB backend is running' });
});

const PORT = process.env.PORT || 5000;
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
}

module.exports = app;
