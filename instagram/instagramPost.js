const Instagram = require('instagram-web-api');
const credentials = require('credentials.json');
const getDataFromDB = require('../database/getDataFromDB');
const user = credentials.user;
const pass = credentials.password;
const client = new Instagram({user, pass});

function instagramPost(){
    getDataFromDB.fromNBC();
    getDataFromDB.fromCNN();
    getDataFromDB.fromBBC();

}


module.exports={instagramPost}