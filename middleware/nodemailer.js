const nodemailer = require('nodemailer');

const sending = nodemailer.createTransport({
    host: 'mail.techtacloud.com',
    port: 465,
    secure: true,
    auth: {
        user: 'support@techtacloud.com',
        pass: 'support@techtacloud.com',
    }
});


module.exports = sending