const Application = require('../models/Application');
const Contact = require('../models/Contact');
const Waitlist = require('../models/Waitlist');

const submitApplication = async (req, res) => {
  try {
    const { name, email, portfolio, jobId } = req.body;
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }
    const newApp = new Application({ name, email, portfolio, jobId });
    await newApp.save();
    res.status(201).json({ message: 'Application submitted successfully', success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit application' });
  }
};

const submitContact = async (req, res) => {
  try {
    const { name, email, organization, message, type } = req.body;
    if (!email || !message) {
      return res.status(400).json({ error: 'Email and message are required' });
    }
    const newContact = new Contact({ name, email, organization, message, type });
    await newContact.save();
    res.status(201).json({ message: 'Message sent successfully', success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send message' });
  }
};

const joinWaitlist = async (req, res) => {
  try {
    const { email, role } = req.body;
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }
    const newWaitlist = new Waitlist({ email, role });
    await newWaitlist.save();
    res.status(201).json({ message: 'Joined waitlist successfully', success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to join waitlist' });
  }
};

module.exports = { submitApplication, submitContact, joinWaitlist };
