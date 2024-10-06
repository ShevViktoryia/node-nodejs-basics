const parseArgs = () => {
  // Write your code here
  const args = process.argv.slice(2);
  const obj = {};
  for (let i = 0; i < args.length; i += 2) {
    const key = args[i].replace(/^--/, "");
    const value = args[i + 1];
    obj[key] = value;
  }
  const res = Object.entries(obj)
    .map(([key, value]) => `${key} is ${value}`)
    .join(", ");
  console.log(res);
};

parseArgs();
