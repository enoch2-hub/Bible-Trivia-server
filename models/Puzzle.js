const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const PuzzleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  grid: {
    type: Array,
    required: true
  },
  clues: {
    across: {
      type: Array,
      required: true
    },
    down: {
      type: Array,
      required: true
    }
  }
});

module.exports = mongoose.model('Puzzle', PuzzleSchema);
