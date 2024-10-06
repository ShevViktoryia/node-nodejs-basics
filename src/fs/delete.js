import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "files", "fileToRemove.txt");

const remove = async () => {
  // Write your code here
  fs.unlink(filePath, (err) => {
    if (err) {
      console.log("file to remove not found");
      throw new Error("FS operation failed");
    }
  });
};

await remove();
