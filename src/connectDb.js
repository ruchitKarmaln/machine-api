import mongoose from "mongoose";
import { db } from "./config/config.js";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(db.url);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
