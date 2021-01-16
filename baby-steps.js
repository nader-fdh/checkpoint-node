const process = require("process");
let total = 0;
// console.log(process.argv);
process.argv.map((num) => {
  !isNaN(num) ? (total += parseInt(num)) : num;
});
console.log(total);
