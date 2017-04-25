var fs=require("fs");
var path=require("path");

module.exports=function(Dir,ext,callback){
    fs.readdir(Dir,function(err,data){
        if(err) return callback(err,null);
        var arr=[];
        data.forEach(function(file){
            var ext1=path.extname(file)
           
            if(ext1==='.'+ext)
            arr.push(file);    
        });
        callback(null,arr);
    })
}

