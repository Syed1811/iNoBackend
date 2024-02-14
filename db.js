// db.js
const mongoose = require("mongoose");
const color = require("colors");

const db = async () => {
  try {
    const connectToDb = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `Connected to MongoDB ${connectToDb.connection.host}`.bgGreen.black
    );
  } catch (error) {
    console.warn(`${error}`.bgRed.black);
    throw error;
  }
};

module.exports = db;
