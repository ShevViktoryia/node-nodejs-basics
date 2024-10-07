import stream from "stream";

const transform = async () => {
  // Write your code here
  const reverseStream = new stream.Transform({
    transform(chunk, encoding, callback) {
      const reverseStr = chunk
        .toString()
        .split("")
        .reverse()
        .concat("\n")
        .join("");
      callback(null, reverseStr);
    },
  });
  process.stdin.pipe(reverseStream).pipe(process.stdout);
};

await transform();
