function convert(ip = "127.0.0.1") {
  return ip
    .split(".")
    .map(Number)
    .reduce((result, byte) => (result << 8) + byte, 0);
}

console.log(convert());
console.log(convert("10.0.0.1"));
console.log(convert("67.67.67.67"));