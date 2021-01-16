const fs = require("fs");
const file = process.argv[2];
const extension = process.argv[3];
const readFile = fs.readdir(file, (err, list) => {
  list.map((file) => {
    file.split(".")[1] === extension ? console.log(file) : file;
  });
});
