const mongoose = require('mongoose');

const theoryQuestionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: [{ type: String, required: true }],
  correctAnswer: { type: Number, required: true },
  explanation: String,
  category: { type: String, required: true },
  difficulty: { type: String, enum: ['easy', 'medium', 'hard'], default: 'medium' },
  language: { type: String, default: 'en' },
  translations: {
    krio: {
      question: String,
      options: [String],
      explanation: String
    },
    de: {
      question: String,
      options: [String],
      explanation: String
    }
  }
});

module.exports = mongoose.model('TheoryQuestion', theoryQuestionSchema);