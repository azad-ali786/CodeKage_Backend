import express, { Application } from "express";
import mongoose, { ConnectOptions } from "mongoose";
import codeRoutes from "./routes/codeRoutes";
import terminalRoutes from "./routes/terminalRoutes";

require("dotenv").config();

const app: Application = express();
const PORT = process.env.PORT || 8000; // Set your desired port number

mongoose
  .connect(
    "mongodb+srv://azad:uWJzbWCVcFbFTchE@codekage.4olzqk7.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions
  )
  .then((res) => {
    console.log("Connected to API Database - Initial Connection");
  })
  .catch((err) => {
    console.log(`Initial API Database connection error occured -`, err);
  });

// Middleware
app.use(express.json());

// Routes
app.get("/", function requestHandler(req, res) {
  res.send("Pingggg");
});
app.use("/code", codeRoutes);
app.use("/terminal", terminalRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
