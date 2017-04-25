var port=process.argv[2];
var express=require("express");
var crypto=require("crypto");
var app=new express();

app.put('/message/:NAME',function(req,res){
    res.end(crypto.createHash('sha1').update(new Date().toDateString()+req.params.NAME).digest('hex'));
});


app.listen(port);