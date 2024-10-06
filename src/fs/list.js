import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "files");

const list = async () => {
  // Write your code here
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      console.log("files folder not found");
      throw new Error("FS operation failed");
    }
    fs.readdir(filePath, (err, files) => {
      if (err) {
        console.log("files read fall");
      }
      files.forEach((file) => {
        console.log(file);
      });
    });
  });
};

await list();
