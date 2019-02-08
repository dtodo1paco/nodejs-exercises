var fs = require("fs");

fs.readFile('./input.txt', function (err, data) {
   if (err) return console.error(err);
   console.log(data.toString());
});
// This will be executed BEFORE the file is read
console.log("-- Program Ended --");
