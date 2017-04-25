var arr=[];

// console.log(process.argv[2]);
// console.log(process.argv[3]);
// console.log(process.argv[4]);
//console.log(process.argv[5]);

var n=process.argv.length;

//console.log("hhhh"+n);



for(var i=0;i<n-2;i++){
    arr.push(Number(process.argv[2+i]));
}

console.log(arr.reduce((a,b)=>a+b)) ;
