import express from "express";
import { createTerminal } from "../controllers/terminalController";

const router = express.Router();

// Create a new terminal process
router.post("/", createTerminal);

export default router;
