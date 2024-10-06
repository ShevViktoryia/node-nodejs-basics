import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "files");
const fileCopyPath = path.join(__dirname, "files_copy");

const copy = async () => {
  // Write your code here
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      console.log("files folder not found");
      throw new Error("FS operation failed");
    }
    fs.access(fileCopyPath, fs.constants.F_OK, (err) => {
      if (!err) {
        console.log("files_copy folder was already created");
        throw new Error("FS operation failed");
      }
      fs.mkdir(fileCopyPath, { recursive: true }, (err) => {
        if (err) {
          console.log("files_copy err");
        }
        fs.readdir(filePath, (err, files) => {
          if (err) {
            console.log("files reading fall");
          }
          files.forEach((file) => {
            fs.copyFile(
              path.join(filePath, file),
              path.join(fileCopyPath, file),
              (err) => {
                if (err) {
                  console.log("copy err");
                }
              }
            );
          });
        });
      });
    });
  });
};

await copy();
