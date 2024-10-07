import path from "path";
import { fileURLToPath } from "url";
import { Worker } from "worker_threads";
import os from "os";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "worker.js");
const promises = [];

const performCalculations = async () => {
  // Write your code here
  for (let i = 0; i < os.cpus().length; i++) {
    const num = 10 + i;
    const worker = new Worker(filePath, { workerData: num });
    const data = new Promise((resolve) => {
      worker.on("message", (data) => resolve({ status: "resolved", data }));
      worker.on("error", () => resolve({ status: "error", data: null }));
    });
    promises.push(data);
  }
  Promise.all(promises)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

await performCalculations();
