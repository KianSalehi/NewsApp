const MongoClient = require('mongodb').MongoClient;
const secrets = require('./secretsDB.json');
const uri = `mongodb+srv://${secrets.DBUsername}:${secrets.DBPassword}@cluster0.7aovf.mongodb.net/GamblerBot?retryWrites=true&w=majority`
const MClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });



//data from bbc
async function fromBBC(){
    let client = await MClient.connect();
    let bbcNews = await client.db("News").collection("bbc").find().sort({time:-1}).toArray();
    bbcNews=bbcNews[0];
    await client.close();
    return bbcNews.news;

}
//data from nbc
async function fromNBC(){
    let client = await MClient.connect();
    let nbcNews = await client.db("News").collection("nbc").find().sort({time:-1}).toArray();
    nbcNews=nbcNews[0];
    await client.close();
    return nbcNews.news;
}
//data from cnn
async function fromCNN(){
    let client = await MClient.connect();
    let cnnNews = await client.db("News").collection("cnn").find().sort({time:-1}).toArray();
    cnnNews=cnnNews[0];
    await client.close();
    return cnnNews.news;
}

module.exports={fromBBC, fromCNN, fromNBC}