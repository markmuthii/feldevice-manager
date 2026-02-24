import express, { json } from "express";
import "dotenv/config";
import { PORT } from "./constants/index.js";
import { v1Router } from "./routes/v1/index.js";
import { connectDB } from "./db/config.js";
import { logRequest } from "./middleware/index.js";

const app = express();

// Middleware
app.use(json());

// Connect to the database
connectDB();

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Silence is golden",
  });
});

app.use("/api/v1", v1Router);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
