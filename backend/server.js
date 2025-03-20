const express = require("express");
const cors = require("cors");
const connectDB = require("./src/config/db"); // Updated path
const eventRoutes = require("./src/routes/eventRoutes");
const authRoutes = require("./src/routes/authRoutes");

require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(
  cors({
    origin: "http://localhost:3000", // Frontend URL (Change in production)
    credentials: true, // Allow cookies/auth tokens
  })
);
app.use(express.json());

// Database connection
connectDB();

// Routes
app.use("/api/events", eventRoutes);
app.use("/api/auth", authRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
