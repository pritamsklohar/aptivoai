const express = require('express');
const router = express.Router();
const { submitApplication, submitContact, joinWaitlist } = require('../controllers/formController');

router.post('/applications', submitApplication);
router.post('/contact', submitContact);
router.post('/waitlist', joinWaitlist);

module.exports = router;
