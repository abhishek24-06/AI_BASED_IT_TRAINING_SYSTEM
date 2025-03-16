// filepath: /workspaces/AI_BASED_IT_TRAINING_SYSTEM/models/quizQuestion.js
const mongoose = require("mongoose");

const quizQuestionSchema = new mongoose.Schema({
  category: { type: String, required: true },
  question: { type: String, required: true },
  options: [{ type: String, required: true }],
  correctAnswer: { type: String, required: true },
});

const QuizQuestion = mongoose.model("QuizQuestion", quizQuestionSchema);

module.exports = QuizQuestion;
