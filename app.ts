import express, { Application } from "express";
import mongoose, { ConnectOptions } from "mongoose";
import codeRoutes from "./routes/codeRoutes";

require("dotenv").config();

const app: Application = express();
const PORT = process.env.PORT || 8000; // Set your desired port number

mongoose
  .connect(process.env.MONGO_URI!, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Middleware
app.use(express.json());

// Routes
app.use("/code", codeRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
