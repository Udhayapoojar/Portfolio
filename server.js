require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create Express App
const app = express();
const PORT = process.env.PORT || 5000; // Use PORT from .env or default to 5000

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
const mongoURI = process.env.MONGO_URI; // Use MONGO_URI from .env
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Create the Contact model
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Contact = mongoose.model('Contact', contactSchema); // Now the Contact model is created

// Create the API endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate inputs
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    // Create a new contact document
    const newContact = new Contact({ name, email, message });
    await newContact.save(); // Save the contact to the database

    res.status(200).json({ message: 'Contact information saved successfully.' });
  } catch (error) {
    console.error('Error saving contact information:', error);
    res.status(500).json({ error: 'Internal server error. Please try again later.' });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
