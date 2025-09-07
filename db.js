const {MongoClient,ObjectId}= require('mongodb')

let database;
let client;

const getDatabase=async ()=>{
    if(!database){
        client=await MongoClient.connect("mongodb://localhost:27017")
        database=client.db('library')
        console.log("✅ Database Connected");
    }
    return database;
}

module.exports={
    getDatabase,
    ObjectId
}
