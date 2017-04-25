var fs=require("fs");
var Dir=process.argv[2];
var fileext=process.argv[3];

var mymodule=require("./mymodule.js");

mymodule(Dir,fileext,function(err,data){
    if (err) console.error;
    data.forEach(function(file){
        console.log(file);
    })
})