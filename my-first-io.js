const fs = require("fs");

let countLines = fs.readFileSync(process.argv[2]).toString().split("\n").length;
console.log(countLines - 1);
