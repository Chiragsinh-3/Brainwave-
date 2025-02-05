const mongoose = require("mongoose");

const mongoURI = "mongodb://localhost:27017/keepnotes";

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("::::::Connected to MongoDB::::::");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

module.exports = connectToMongo;
