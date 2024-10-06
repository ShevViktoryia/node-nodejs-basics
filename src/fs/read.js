import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "files", "fileToRead.txt");

const read = async () => {
  // Write your code here
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      console.log("file to read not found");
      throw new Error("FS operation failed");
    }
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) console.log("Can't read this file");
      else console.log(data);
    });
  });
};

await read();
