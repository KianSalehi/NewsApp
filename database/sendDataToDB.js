const MongoClient = require('mongodb').MongoClient;
const secrets = require('./secretsDB.json');
const uri = `mongodb+srv://${secrets.DBUsername}:${secrets.DBPassword}@cluster0.7aovf.mongodb.net/GamblerBot?retryWrites=true&w=majority`


//data to bbc
async function sendBBC(newsList){
    const MClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    let client = await MClient.connect();
    let today = new Date();
    newsList=newsList.splice(0,5);
    let bbcNewsDB={
        news: newsList,
        time: today
    }
    await client.db("News").collection("bbc").insertOne(bbcNewsDB);
    await client.close();
}
//data to nbc
async function sendNBC(newsList){
    const MClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    let client = await MClient.connect();
    let today = new Date();
    newsList=newsList.splice(0,5);
    let nbcNewsDB={
        news: newsList,
        time: today
    }
    await client.db("News").collection("nbc").insertOne(nbcNewsDB);
    await client.close();
}
//data to cnn
async function sendCTV(newsList){
    const MClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    let client = await MClient.connect();
    let today = new Date();
    newsList=newsList.splice(0,5);
    let cnnNewsDB={
        news: newsList,
        time: today
    }
    await client.db("News").collection("ctv").insertOne(cnnNewsDB);
    await client.close();
}

module.exports={sendBBC, sendCTV, sendNBC}