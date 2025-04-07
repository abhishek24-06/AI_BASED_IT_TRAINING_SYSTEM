const mongoose = require("./db");
const QuizQuestion = require("./models/quizQuestion");
const fs = require("fs");
const path = require("path");

async function seedDB() {
  try {
    const dirPath = __dirname;
    console.log(`Listing files in directory: ${dirPath}`);
    const files = fs.readdirSync(dirPath);
    console.log("Files in directory:", files);

    const filePath = path.join(__dirname, "quizQuestions.json");
    console.log(`Reading file from: ${filePath}`);
    const quizQuestions = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    console.log("File read successfully. Seeding database...");
    await QuizQuestion.deleteMany({});
    await QuizQuestion.insertMany(quizQuestions);
    console.log("Database seeded successfully!");
    mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}

seedDB();
