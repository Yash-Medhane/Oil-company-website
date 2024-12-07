const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: 'http://localhost:5173', // Ensure this matches the port your React app runs on
  methods: 'POST',
  allowedHeaders: 'Content-Type'
}));
app.use(bodyParser.json());

app.post('/send', async (req, res) => {
  const { email, message } = req.body;

  // Create a Nodemailer transporter using the App Password
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'softwareengineer612@gmail.com', // replace with your email
      pass: 'vygk iryb tnmb jaln' // replace with the App Password
    }
  });

  // Configure the email details
  const mailOptions = {
    from: 'softwareengineer612@gmail.com', // replace with your email
    to: 'softwareengineer612@gmail.com', // replace with recipient email
    subject: 'Website Contact',
    text: `Email: ${email}\n\nMessage: ${message}`
  };

  try {
    // Send mail with defined transport object
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email: ' + error.toString());
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
