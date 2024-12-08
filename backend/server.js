const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: 'http://localhost:5173', // Update this to match your frontend URL
  methods: ['POST', 'GET'],
  allowedHeaders: ['Content-Type']
}));
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
  res.json("Hello");
});

app.post('/send', async (req, res) => {
  const { email, message } = req.body;

  if (!email || !message) {
    return res.status(400).send('Email and message are required.');
  }

  try {
    // Create a Nodemailer transporter using environment variables
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER, // Use your environment variable
        pass: process.env.EMAIL_PASS  // Use your environment variable
      }
    });

    // Configure email details
    const mailOptions = {
      from: process.env.EMAIL_OWNER, // Dynamic email from environment
      to: process.env.EMAIL_OWNER,   // Replace with recipient email
      subject: 'Website Contact',
      text: `
        New Inquiry Received!

        Customer Email: ${email}

        Message Details:
        "${message}"
      `
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    res.status(200).send('Email sent successfully.');
  } catch (error) {
    console.error('Error sending email:', error.message);
    res.status(500).send(`Error sending email: ${error.message}`);
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
