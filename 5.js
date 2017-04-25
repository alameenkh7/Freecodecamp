var port=process.argv[2];
var express=require("express");
// var http=require("http");
// var jade = require("jade");
// var path=require("path");
// var bodyparser=require("body-parser");
var stylus=require("stylus");
var filepath=process.argv[3];
var app=new express();

app.use(express.static(filepath));
app.use(stylus.middleware(filepath));

// app.set('views',process.argv[3]||path.join(__dirname,'templates'))
// app.set('view engine','jade')

app.listen(port);
