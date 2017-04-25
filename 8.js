var http=require("http");
var bl=require("bl");
var url=process.argv[2];

// console.log(process.argv[2]);
// console.log(process.argv[3]);
// console.log(process.argv[4]);
// var n=process.argv.length-2;
// var arr=[];
// for (var i=0;i<n;i++)
// {
//     arr[i]=process.argv[i+2];
// }

// console.log(arr);

//console.log(url);



http.get(url,function(response){
    response.setEncoding('utf8');
    response.pipe(bl(function(err,data){
        if(err) throw err;
        var newData=data.toString();
        
        console.log(newData.length)
        console.log(newData);
    }));
    response.on('error',console.error)
})