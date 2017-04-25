var net=require("net");
var portnumber=process.argv[2];

function zerofill(i){
    return (i<10?'0':'')+i
}



var date=new Date();
// console.log(date.getDate());
// console.log(date.getMonth()+1);
// console.log(date.getFullYear());
var d=zerofill(date.getDate());
var M=zerofill(date.getMonth()+1);
var y=zerofill(date.getFullYear())
var h=zerofill(date.getHours());
var m=zerofill(date.getMinutes());

var completedate=y+"-"+M+"-"+d+" "+h+":"+m+"\n";



var server=net.createServer(function (socket){
    
    socket.end(completedate);
});
server.listen(portnumber);


