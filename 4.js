var port=process.argv[2];
var express=require("express");
// var http=require("http");
// var jade = require("jade");
// var path=require("path");
 var bodyparser=require("body-parser");




var app=new express();

// app.set('views',process.argv[3]||path.join(__dirname,'templates'))
// app.set('view engine','jade')
app.use(bodyparser.urlencoded({extended:false}));
app.post('/form',function(req,res){
   res.end(req.body.str.split('').reverse().join(''));
});
app.listen(port);
