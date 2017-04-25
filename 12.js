var http=require("http");
var portnumber=process.argv[2];
var fs=require("fs");
var file=process.argv[3];
var map=require("through2-map");

var server=http.createServer(function (req,res){
    if(req.method!='POST'){
        return res.end('send me a POST\n')
    }
    req.pipe(map(function(chunk){
       return chunk.toString().toUpperCase();
    })).pipe(res);
}).listen(portnumber);