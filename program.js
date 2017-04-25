var mymodule = require('./mymodule.js') ;

var http = require('http');
var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];
var bl=require('bl');
var requestArray=[];
//console.log(process.argv.length);
var n=process.argv.length-2;
for(var i=0;i<n;i++){
    requestArray.push(process.argv[2+i]);
}
console.log(requestArray);
// console.log(url1);
// console.log(url2);
// console.log(url3);
// http.get(url,function callback(response){
    
//     response.pipe(bl(function(err,data){
//         if(err) throw err;
//         var newData=data.toString();
//         console.log(newData.length);
//         console.log(newData);
        
//     }))
    
// }).on('error',console.error)


