import express, { Application } from "express";
const cors = require("cors");
import mongoose, { ConnectOptions } from "mongoose";
import codeRoutes from "./routes/codeRoutes";
import codeRunnerRoutes from "./routes/codeRunnerRoutes";

require("dotenv").config();

const app: Application = express();
const PORT = process.env.PORT || 8000; // Set your desired port number

mongoose
  .connect(process.env.MONGODB_URI!, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)
  .then((res) => {
    console.log("Connected to API Database - Initial Connection");
  })
  .catch((err) => {
    console.log(`Initial API Database connection error occured -`, err);
  });

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.get("/", function requestHandler(req, res) {
  res.send("Pingggg");
});
app.use("/code", codeRoutes);
app.use("/runCode", codeRunnerRoutes);

export default app;