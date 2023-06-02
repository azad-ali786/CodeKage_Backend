import express from "express";
import { runCode } from "../controllers/codeRunnerController";

const router = express.Router();

// Create a new terminal process
router.post("/", runCode);

export default router;
