const mongoose = require("mongoose");

async function connectDB() {
  try {
    const mongoUri = process.env.MONGO_URI;
    
    if (!mongoUri) {
      console.error("MongoDB connection error: MONGO_URI environment variable is not set");
      console.error("Please set MONGO_URI in your environment variables");
      process.exit(1);
    }
    
    await mongoose.connect(mongoUri, { dbName: "furnify" });
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  }
}

module.exports = { connectDB };



