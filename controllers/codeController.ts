import { Request, Response } from "express";
import Code, { ICode } from "../models/codeModel";

// Save code to the database
export const saveCode = async (req: Request, res: Response): Promise<void> => {
  try {
    const { fileName, code, userId } = req.body;
    const newCode: ICode = new Code({ fileName, code, userId });
    await newCode.save();
    res.status(200).json({ message: "Code saved successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Retrieve code from the database
// Retrieve code from the database
export const getCode = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId } = req.params;
    const code: ICode | null = await Code.findOne({ userId });
    if (!code) {
      res.status(404).json({ message: "Code not found" });
    } else {
      res.status(200).json({ fileName: code.fileName,code: code.code });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

