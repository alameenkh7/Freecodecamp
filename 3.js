var fs=require("fs");
var filename=process.argv[2];

var buffer=fs.readFileSync(filename);

var string=buffer.toString();

var array=string.split("\n");



console.log(array.length-1)
;



