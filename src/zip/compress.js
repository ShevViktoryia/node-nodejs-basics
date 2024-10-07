import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import zlib from "zlib";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "files", "fileToCompress.txt");
const outputPath = path.join(__dirname, "files", "archive.gz");
const stream = fs.createReadStream(filePath);
const output = fs.createWriteStream(outputPath);
const gzip = zlib.createGzip();

const compress = async () => {
  // Write your code here
  stream
    .pipe(gzip)
    .pipe(output)
    .on("error", () => {
      console.log("error");
    });
};

await compress();
