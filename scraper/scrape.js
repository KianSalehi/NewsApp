const sendDataToDB = require('../database/sendDataToDB');
// Get bbc data
function getBBC() {

    sendDataToDB.sendBBC();
}
// Get nbc data
function getNBC(){

    sendDataToDB.sendNBC();
}
// Get cnn data
function getCNN(){

    sendDataToDB.sendCNN();
}
module.exports={getBBC, getCNN, getNBC}