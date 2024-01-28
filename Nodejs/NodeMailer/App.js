var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '210101120022@cutm.ac.in',
        pass: '7488048437'
    }
});

var mailOptions = {
    from: '210101120022@cutm.ac.in',
    to: 'tiwaryabhishek74@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log("error");
    } else {
        console.log('Email sent: ' + info.response);
    }
});