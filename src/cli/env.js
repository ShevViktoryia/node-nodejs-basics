const parseEnv = () => {
  // Write your code here
  const res = Object.entries(process.env)
    .map(([key, value]) => `RSS_${key}=${value}`)
    .join("; ");
  console.log(res);
};

parseEnv();
