const input = require("fs").readFileSync("../input.txt").toString().split(" ");

const A = parseInt(input[0]);
const B = parseInt(input[1]);

console.log(A * B);
