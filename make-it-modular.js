const myModule = require("./mymodule");
let dirName = process.argv[2];
let fileExt = process.argv[3];
myModule(dirName, fileExt, (err, files) => {
  files.map((file) => console.log(file));
});
