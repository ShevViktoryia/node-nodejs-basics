import path from "path";
import { fileURLToPath } from "url";
import { fork } from "child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "files", "script.js");

const spawnChildProcess = async (args) => {
  // Write your code here
  const childProcess = fork(filePath, args, { silent: true });
  process.stdin.pipe(childProcess.stdin);
  childProcess.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["someArgument1", "someArgument2"]);
