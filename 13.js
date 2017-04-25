var http=require("http");
var portnumber=process.argv[2];
var fs=require("fs");
var file=process.argv[3];
var map=require("through2-map");
var url=require("url");



var server=http.createServer(function (req,res){
    res.writeHead(200,{'Content-Type': 'application/json'})
    var link=url.parse(req.url,true);
    var date=new Date(link.query.iso);
    if(req.method==='GET'&& link.pathname==="/api/parsetime"){
        var json=JSON.stringify({
           "hour": date.getHours(),
           "minute":date.getMinutes(),
           "second":date.getSeconds()
        });
        
        res.end(json);
    }
    
    if(req.method==='GET' && link.pathname==="/api/unixtime"){
        var json=JSON.stringify({"unixtime":date.getTime()});
        res.end(json);
        
    }
    
   
    
}).listen(portnumber);