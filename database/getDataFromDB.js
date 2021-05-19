const MongoClient = require('mongodb').MongoClient;
const secrets = require('secretsDB.json');
const uri = `mongodb+srv://${secrets.DBUsername}:${secrets.DBPassword}@cluster0.7aovf.mongodb.net/News?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });



//data from bbc
function fromBBC(){

}
//data from nbc
function fromNBC(){

}
//data from cnn
function fromCNN(){

}

module.exports={fromBBC, fromCNN, fromNBC}