const Instagram = require('instagram-web-api');
const credentials = require('credentials.json');
const user = credentials.user;
const pass = credentials.password;
const client = new Instagram({user, pass});

function instagramPost(){

}


module.exports={instagramPost}