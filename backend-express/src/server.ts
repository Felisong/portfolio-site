import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes";

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

app.use("/api", userRoutes);

// Test route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello from TypeScript + Express!");
});

// Set up server port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} : http://localhost:5000`);
});
