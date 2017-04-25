var http=require("http");
var urls=process.argv.slice(2,process.argv.length);

function printResponse(urls,n){
    if(n>urls.length-1)
        return;
    http.get(urls[n],function(res){
        res.setEncoding('utf8');
        var result="";
        res.on("data",function(x){
            result+=x;
        })
        res.on('end',function(){
            console.log(result.toString());
            printResponse(urls,n+1);
        })
    });
    
}

printResponse(urls,0);


