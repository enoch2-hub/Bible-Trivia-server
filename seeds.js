// insertPuzzles.js
const mongoose = require('mongoose');
const Puzzle = require('./models/Puzzle'); // Adjust path as needed

// MongoDB connection URI
const mongoURI = process.env.DB_URI;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/puzzles', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('MongoDB connected');

    // Sample puzzle data
    const samplePuzzles = [
      {
        title: 'Example Crossword',
        grid: [
          [{ number: 1, black: false }, { number: 2, black: false },],
          [{ number: 3, black: false }, { number: 4, black: true },],
        ],
        clues: {
          across: [
            { number: 1, clue: 'Across clue 1' },
            { number: 2, clue: 'Across clue 2' },
          ],
          down: [
            { number: 1, clue: 'Down clue 1' },
            { number: 2, clue: 'Down clue 2' },
          ]
        }
      },
      // Add more puzzles as needed
    ];

    // Insert sample puzzles into database
    Puzzle.insertMany(samplePuzzles)
      .then(() => {
        console.log('Sample puzzles inserted successfully');
        mongoose.connection.close(); // Close MongoDB connection after insertion
      })
      .catch(err => {
        console.error('Error inserting puzzles:', err);
        mongoose.connection.close();
      });

  })
  .catch(err => console.error('MongoDB connection error:', err));
