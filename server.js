const express = require("express");
const mongoose = require("./db");
const QuizQuestion = require("./models/quizQuestion");
const cors = require("cors");

const app = express();
const port = 3000;

// Enable CORS
app.use(cors());

app.get("/api/quizQuestions", async (req, res) => {
  const category = req.query.category;
  try {
    console.log("Received request for category:", category);
    const quizQuestions = await QuizQuestion.find({ category });
    console.log("Found questions:", quizQuestions.length);
    res.json(quizQuestions);
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).send("Server error");
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
