const MongoClient = require('mongodb').MongoClient;
const secrets = require('secretsDB.json');
const uri = `mongodb+srv://${secrets.DBUsername}:${secrets.DBPassword}@cluster0.7aovf.mongodb.net/News?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });



//data to bbc
function sendBBC(){

}
//data to nbc
function sendNBC(){

}
//data to cnn
function sendCNN(){

}

module.exports={sendBBC, sendCNN, sendNBC}