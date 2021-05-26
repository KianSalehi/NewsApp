const MongoClient = require('mongodb').MongoClient;
const secrets = require('./secretsDB.json');
const uri = `mongodb+srv://${secrets.DBUsername}:${secrets.DBPassword}@cluster0.7aovf.mongodb.net/GamblerBot?retryWrites=true&w=majority`



//data from bbc
async function fromBBC(){
    const MClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    let client = await MClient.connect();
    let bbcNews = await client.db("News").collection("bbc").find().sort({time:-1}).toArray();
    bbcNews=bbcNews[0];
    await client.close();
    return bbcNews.news;

}
//data from nbc
async function fromNBC(){
    const MClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    let client = await MClient.connect();
    let nbcNews = await client.db("News").collection("nbc").find().sort({time:-1}).toArray();
    nbcNews=nbcNews[0];
    await client.close();
    return nbcNews.news;
}
//data from ctv
async function fromCTV(){
    const MClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    let client = await MClient.connect();
    let ctvNews = await client.db("News").collection("ctv").find().sort({time:-1}).toArray();
    ctvNews=ctvNews[0];
    await client.close();
    return ctvNews.news;
}

module.exports={fromBBC, fromCTV, fromNBC}