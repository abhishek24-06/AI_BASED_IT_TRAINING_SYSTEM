const mongoose = require("mongoose");

const MONGO_URI =
  "mongodb+srv://thephoneix9090:sampledb@cluster0.uqltv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB connected successfully!"))
  .catch((err) => console.error("MongoDB connection error:", err));

module.exports = mongoose;
