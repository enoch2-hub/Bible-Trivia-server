const express = require('express');
const router = express.Router();
const Puzzle = require('../models/Puzzle');

// GET all puzzles
router.get('/', async (req, res) => {
  try {
    const puzzles = await Puzzle.find();
    res.json(puzzles);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// GET daily puzzle (or a specific puzzle)
router.get('/daily', async (req, res) => {
  try {
    const puzzle = await Puzzle.findOne(); // You can adjust the query to fetch the specific puzzle
    res.json(puzzle);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});



// POST a new puzzle
router.post('/', async (req, res) => {
  const { title, grid, clues } = req.body;
  try {
    const newPuzzle = new Puzzle({
      title,
      grid,
      clues,
    });
    await newPuzzle.save();
    res.json(newPuzzle);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
