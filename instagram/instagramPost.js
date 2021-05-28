const Instagram = require('instagram-web-api');
const credentials = require('./credentials.json');
const getDataFromDB = require('../database/getDataFromDB');
const user = credentials.username;
const pass = credentials.password;

async function instagramPost(){
    let nbcNewsArray = await getDataFromDB.fromNBC();
    let nbcPhoto = "https://pbs.twimg.com/profile_images/1376939630394634241/Wk8ucyn9_400x400.jpg";
    let nbcFeedCaption = "";

    let ctvNewsArray = await getDataFromDB.fromCTV();
    let ctvPhoto = "https://www.ctvnews.ca/polopoly_fs/1.4860018.1605665042!/httpImage/image.jpg_gen/derivatives/landscape_960/image.jpg";
    let ctvFeedCaption = "";

    let bbcNewsArray = await getDataFromDB.fromBBC();
    let bbcPhoto = "https://media.wired.co.uk/photos/606d9a5b751ea43ccd988507/1:1/w_1998,h_1998,c_limit/bbc-netflix.jpg";
    let bbcFeedCaption = "";

    const client = new Instagram({username:user, password:pass});
    await client.login();

    //Post on feed
    for (let i=0;i<nbcNewsArray.length;i++){
        nbcFeedCaption =  nbcFeedCaption + "\n\n" +` ${i+1}- `+ nbcNewsArray[i].title;
        ctvFeedCaption =  ctvFeedCaption + "\n\n" +` ${i+1}- `+ ctvNewsArray[i].title;
        bbcFeedCaption =  bbcFeedCaption + "\n\n" +` ${i+1}- `+ bbcNewsArray[i].title;
    }

    await client.uploadPhoto({photo:bbcPhoto, caption:bbcFeedCaption, post:'feed'});
    await client.uploadPhoto({photo:ctvPhoto, caption:ctvFeedCaption, post:'feed'});
    await client.uploadPhoto({photo:nbcPhoto, caption:nbcFeedCaption, post:'feed'});

}


module.exports={instagramPost}