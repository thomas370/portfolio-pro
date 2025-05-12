const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');
const app = express();
const dotenv = require('dotenv');

app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, '../build')));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.post('/mailer', (req, res) => {
    const { name, email, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
        host: process.env.SNTP_HOST,
        port: 587,
        secure: false,
        auth: {
            user: 'thomasbortolato5@thomasbortolato.fr',
            pass: process.env.PASS_MAILER
        }
    });

    const mailOptions = {
        from: email,
        to: 'thomasbortolato5@thomasbortolato.fr',
        subject: subject,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send(error);
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent');
        }
    });
});

let ip = process.env.IP || '0.0.0.0';  // Utilisez l'IP fournie par alwaysdata ou écoutez sur toutes les interfaces
let port = process.env.PORT || 587;   // Utilisez le port fourni par alwaysdata ou 8100 par défaut


app.listen(port, ip, () => {
    console.log('Server is running on ' + ip + ':' + port);
});