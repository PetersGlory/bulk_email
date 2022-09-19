const express = require('express');
const router = express.Router();
const sendController = require('../controllers/sendController');

router.post('/send_mail', sendController.sendMail) // For sending bulk emails

module.exports = router