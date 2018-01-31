var fs = require("fs");
var data = fs.readFileSync(process.argv[2]);
var bufVal = data.toString();
var output = bufVal.split("\n");
console.log(output.length - 1);
