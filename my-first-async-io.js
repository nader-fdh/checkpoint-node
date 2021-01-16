const fs = require("fs");

let countLines = fs.readFile(process.argv[2], (err, data) => {
  if (err) {
    console.log("error", err);
  }
  console.log(data.toString().split("\n").length - 1);
});
