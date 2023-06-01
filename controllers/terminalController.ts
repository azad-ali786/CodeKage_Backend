import { spawn, IPty } from "node-pty";

let terminal: IPty | null = null;

export const createTerminal = (req:any, res:any) => {
  // Create a new terminal process
  terminal = spawn(process.platform === "win32" ? "cmd.exe" : "bash", [], {
    name: "xterm-color",
    cols: 80,
    rows: 30,
    cwd: process.cwd(),
    env: process.env as { [key: string]: string },
  });

  // Listen to terminal data events
  terminal.onData((data) => {
    // Send the terminal output to the frontend
    res.write(data);
  });

  // Listen to terminal exit events
  terminal.onExit(() => {
    res.end();
  });

  // Handle incoming commands from the frontend
  req.on("data", (data:any) => {
    // Write the command to the terminal
    if (terminal) {
      terminal.write(data);
    }
  });

  // Handle connection close events
  req.on("close", () => {
    if (terminal) {
      terminal.kill();
    }
  });
};
