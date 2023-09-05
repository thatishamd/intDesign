const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI);
    console.log("DB connected successfully!");
  } catch (error) {
    console.error("Failed to connect DB!");
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;
