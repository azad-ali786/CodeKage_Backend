import { spawnSync } from "child_process";
import { Request, Response } from "express";

export const runCode = (req: Request, res: Response): void => {
  const { code } = req.body;
  const result = spawnSync("node", ["-e", code]);
  const output = result.stdout.toString() || result.stderr.toString();
  const trimmedOutput = output.trim();
  res.send(trimmedOutput);
};
