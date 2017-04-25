
var url = 'mongodb://localhost:27017/learnyoumongo';
var mongo=require("mongodb").MongoClient;

mongo.connect(url,function(err,db){
    if(err) throw err;
    var collection=db.collection('prices');
    collection.aggregate([
        {$match:{size:process.argv[2]}},
         {$group:{_id:'average',average:{$avg: '$price' }}}
        ]).toArray(function(err,data){
        if(err) throw err;
        if(!data.length){
            throw new Error("no result found");    
        }
        var average=Number(data[0].average).toFixed(2);
        console.log(average);
        db.close();
    })
})