import express, { json, urlencoded } from "express";
import userRoutes from "./modules/user/userRoutes.js";
import connectDB from "./connectDb.js";

const app = express();

// Middleware
app.use(urlencoded({ extended: false }));
app.use(json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/user", userRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
