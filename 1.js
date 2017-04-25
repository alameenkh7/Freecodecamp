var port=process.argv[2];
var express=require("express");
// var http=require("http");

var app=new express();

app.use(function(req,res){
    if(req.url==='/home'){
       res.end("Hello World!");
    }
});
app.listen(port);
