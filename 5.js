var fs=require("fs");
var Dir=process.argv[2];
var fileext="."+process.argv[3];
var path=require("path");

fs.readdir(Dir,function(err,data){
    if(err) throw err;
    //console.log(data);
    data.forEach(function(file){
        var ext1=path.extname(file);
        if(ext1==fileext)
        console.log(file);
    })
})

