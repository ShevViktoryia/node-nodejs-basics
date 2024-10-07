import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "files", "fileToWrite.txt");
const output = fs.createWriteStream(filePath, { flags: "a" });

const write = async () => {
  // Write your code here
  process.stdin.pipe(output);
  output.on("error", () => {
    console.log("error");
  });
};

await write();
