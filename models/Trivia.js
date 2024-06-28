const mongoose = require('mongoose');

const triviaSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  options: [{
    text: {
      type: String,
      required: true
    },
    isCorrect: {
      type: Boolean,
      required: true,
      default: false
    }
  }]
});

const Trivia = mongoose.model('Trivia', triviaSchema);

module.exports = Trivia;
