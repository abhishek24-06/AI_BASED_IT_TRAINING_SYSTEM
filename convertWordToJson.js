const mongoose = require("./db");
const QuizQuestion = require("./models/quizQuestion");
const fs = require("fs");
const path = require("path");
const mammoth = require("mammoth");

async function convertWordToJson(inputFilePaths, outputFilePath) {
  try {
    let allQuestions = [];
    for (const inputFilePath of inputFilePaths) {
      const result = await mammoth.extractRawText({ path: inputFilePath });
      const text = result.value;
      const questions = text.split("\n").map((line) => {
        const [category, question, ...options] = line.split(";");
        const correctAnswer = options.pop();
        return {
          category: category.trim(),
          question: question.trim(),
          options: options.map((option) => option.trim()),
          correctAnswer: correctAnswer.trim(),
        };
      });
      allQuestions = allQuestions.concat(questions);
    }
    fs.writeFileSync(outputFilePath, JSON.stringify(allQuestions, null, 2));
    console.log("Quiz questions converted to JSON successfully!");
  } catch (error) {
    console.error("Error converting Word files to JSON:", error);
  }
}

// Define the absolute paths for input files
const inputFilePaths = [
  "/workspaces/AI_BASED_IT_TRAINING_SYSTEM/DOC.docx",
  "/workspaces/AI_BASED_IT_TRAINING_SYSTEM/DOC2.docx",
  "/workspaces/AI_BASED_IT_TRAINING_SYSTEM/DOC3.docx",
];

// Define the output JSON file path
const outputFilePath = "C:\\Users\\vaishnavi\\Desktop\\quizQuestions.json";

// Convert the Word files to JSON
convertWordToJson(inputFilePaths, outputFilePath);

async function seedDB() {
  try {
    const quizQuestions = JSON.parse(
      fs.readFileSync("quizQuestions.json", "utf-8")
    );
    await QuizQuestion.deleteMany({});
    await QuizQuestion.insertMany(quizQuestions);
    console.log("Database seeded successfully!");
    mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}

seedDB();
