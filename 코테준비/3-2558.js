const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

console.log(Number(input[0]) + Number(input[1]));
