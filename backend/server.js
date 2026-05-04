import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import User from "./models/User.js";
import authRoutes from "./routes/authRoutes.js";
import violationRoutes from "./routes/violationRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// 🔹 Test route
app.get("/", (req, res) => {
  res.send("Traffic Violation Backend is Running 🚦");
});

// 🔹 Connect auth routes
app.use("/api/auth", authRoutes);   // ← THIS LINE IS REQUIRED
app.use("/api/violations", violationRoutes);

// 🔹 Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// 🔹 Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
