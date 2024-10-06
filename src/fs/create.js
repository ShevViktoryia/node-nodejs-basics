import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "files", "fresh.txt");

const create = async () => {
  // Write your code here
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (!err) {
      console.log("FS operation failed");
      throw new Error("FS operation failed");
    }
    fs.writeFile(filePath, "I am fresh and young", (err) => {
      if (err) console.log("err");
      else console.log("File was written");
    });
  });
};

await create();
