var url='mongodb://localhost:27017/learnyoumongo';
var mongo=require("mongodb").MongoClient;
var arg=parseInt(process.argv[2]);

mongo.connect(url,function(err,db){
    if(err) throw err;
    db.collection('parrots').find({
        age:{$gt:arg}
    }).toArray(function(err,doc){
        if(err) throw err;
        console.log(doc);
        db.close();
    })
    
})


