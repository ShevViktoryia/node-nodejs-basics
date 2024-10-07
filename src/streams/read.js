import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "files", "fileToRead.txt");
const stream = fs.createReadStream(filePath, { encoding: "utf8" });

const read = async () => {
  // Write your code here
  stream.on("data", (data) => {
    process.stdout.write(data);
  });
  stream.on("end", () => {
    console.log("\n reading completed.");
  });
  stream.on("error", () => {
    console.log("read error");
  });
};

await read();
