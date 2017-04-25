var port=process.argv[2];
var express=require("express");
var app=new express();

app.get('/search',function(req,res){
    var temp=req.query;
    
    res.send(temp);
});


app.listen(port);