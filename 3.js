var port=process.argv[2];
var express=require("express");
// var http=require("http");
// var jade = require("jade");
var path=require("path");


var app=new express();

app.set('views',process.argv[3]||path.join(__dirname,'templates'));
app.set('view engine','jade');
app.get('/home',function(req,res){
   res.render('index',{date:new Date().toDateString()});
});
app.listen(port);
