var port=process.argv[2];
var express=require("express");
var app=new express();
var file=process.argv[3];
var fs=require("fs");

app.get('/books',function(req,res){
 
  fs.readFile(file,'utf8',function(err,data){
      if (err) res.send(500);
    //   console.log(data);
      try{var object=JSON.parse(data);}
      catch(e){
          res.send(500);
      }
       res.json(object);
  });

});


app.listen(port);