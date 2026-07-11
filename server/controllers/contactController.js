const pool = require('../db');

const submitContactForm = async (req, res) => {
  console.log('📬 Contact API hit: Received a message submission request');
  try {
    const { name, email, message } = req.body;

    // 1. Validation Checks
    if (!name || !email || !message) {
      console.warn('⚠️ Validation Failed: Missing required fields.');
      return res.status(400).json({ error: 'All fields (name, email, message) are required.' });
    }

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      console.warn('⚠️ Validation Failed: Fields cannot be empty strings.');
      return res.status(400).json({ error: 'Name, email, and message cannot be empty.' });
    }

    // Email format regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      console.warn(`⚠️ Validation Failed: Invalid email format (${trimmedEmail}).`);
      return res.status(400).json({ error: 'Please enter a valid email address.' });
    }

    console.log(`✉️ Processing message from ${trimmedName} (${trimmedEmail})...`);

    // 2. Insert into PostgreSQL
    const newSubmission = await pool.query(
      'INSERT INTO contact_messages (name, email, message, created_at) VALUES ($1, $2, $3, NOW()) RETURNING *',
      [trimmedName, trimmedEmail, trimmedMessage]
    );

    console.log('✅ Insert success: Contact message saved successfully in PostgreSQL database.');

    // 3. Return Success response JSON
    res.status(201).json({ 
      success: true, 
      message: 'Message sent successfully',
      data: newSubmission.rows[0]
    });

  } catch (err) {
    console.error('❌ Insert error: Error inside POST /api/contact route handler:', err.message);
    console.error('Full Error Details:', err);
    res.status(500).json({ error: 'Server error. Please try again later.' });
  }
};

module.exports = {
  submitContactForm,
};
