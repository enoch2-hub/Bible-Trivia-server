const express = require('express');
const router = express.Router();
const Trivia = require('../models/Trivia'); // Adjust the path as per your project structure

// Route to fetch trivia data
router.get('/', async (req, res) => {
  try {
    const triviaData = await Trivia.find();
    res.json(triviaData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
