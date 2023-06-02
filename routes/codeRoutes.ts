import express from "express";
import { Router } from "express";
import { saveCode, getCode } from "../controllers/codeController";

const router: Router = express.Router();

// Save code to the database
router.post("/", saveCode);

// Retrieve code from the database
router.get("/:fileName/:userId", getCode);

export default router;
