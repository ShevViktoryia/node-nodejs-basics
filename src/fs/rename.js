import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "files", "wrongFilename.txt");
const newFilePath = path.join(__dirname, "files", "properFilename.md");

const rename = async () => {
  // Write your code here
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      console.log("wrong file not found");
      throw new Error("FS operation failed");
    }
    fs.access(newFilePath, fs.constants.F_OK, (err) => {
      if (!err) {
        console.log("properFilename.md already exists");
        throw new Error("FS operation failed");
      }
      fs.rename(filePath, newFilePath, (err) => {
        if (err) {
          console.log("Rename Error");
        }
      });
    });
  });
};

await rename();
