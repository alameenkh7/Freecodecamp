var port=process.argv[2];
var express=require("express");
// var http=require("http");
// var path=require("path");

var app=new express();

app.use(express.static(process.argv[3]));
app.listen(port);
