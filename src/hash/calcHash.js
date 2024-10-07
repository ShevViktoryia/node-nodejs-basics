import fs from "fs";
import path from "path";
import crypto from "crypto";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "files", "fileToCalculateHashFor.txt");
const stream = fs.createReadStream(filePath);
const hash = crypto.createHash("sha256");

const calculateHash = async () => {
  // Write your code here
  stream.on("data", (data) => {
    hash.update(data);
  });
  stream.on("end", () => {
    console.log(hash.digest("hex"));
  });
  stream.on("error", () => {
    console.log("error");
  });
};

await calculateHash();
