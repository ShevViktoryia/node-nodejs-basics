import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "files", "fileToRead.txt");
const outputPath = path.join(__dirname, "files", "process.stdout");
const stream = fs.createReadStream(filePath);
const output = fs.createWriteStream(outputPath);

const read = async () => {
  // Write your code here
  stream.on("data", (data) => {
    output.write(data);
  });
  stream.on("end", () => {
    output.end();
  });
  stream.on("error", () => {
    console.log("read error");
  });
  output.on("error", () => {
    console.log("write error");
  });
};

await read();
