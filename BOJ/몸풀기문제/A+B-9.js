const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ");

const A = BigInt(input[0]);
const B = BigInt(input[1]);

const answer = String(A + B);

console.log(answer);
