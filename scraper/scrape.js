const sendDataToDB = require('../database/sendDataToDB');
const axios = require('axios');
const cheerio = require('cheerio');

// Get bbc data
function getBBC() {
    const url = 'https://www.bbc.com/news'
    axios(url)
        .then(response=>{
            const html = response.data;
            const $ = cheerio.load(html);
            let newsTable=$('.gel-layout__item > li');
            let topNews=[];
            newsTable.each(function (){
                const title = $(this).find('.gs-c-promo-heading > span').text();
                const link = "https://www.bbc.com"+ $(this).find('.gs-o-media__body > a').attr("href");
                topNews.push({
                    title: title,
                    link: link
                });
            });
            sendDataToDB.sendBBC(topNews);
            console.log(topNews);


        });
}
// Get nbc data

function getNBC(){
    const url = 'https://www.nbcnews.com/'
    axios(url)
        .then(response=>{
            const html = response.data;
            const $ = cheerio.load(html);
            let newsTable=$('.alacarte__items > li');
            let topNews=[];
            newsTable.each(function (){
                const title = $(this).find('.alacarte__headline').text();
                const link = $(this).find('.alacarte__text-wrapper > a').attr("href");
                topNews.push({
                    title: title,
                    link: link
                });
            });
            sendDataToDB.sendNBC(topNews);
            console.log(topNews);


        });
}
// Get cnn data, need to finish this
function getCNN(){
    const url = 'https://www.bbc.com/news'
    axios(url)
        .then(response=>{
            const html = response.data;
            const $ = cheerio.load(html);
            let newsTable=$('.gel-layout__item > li');
            let topNews=[];
            newsTable.each(function (index,value){
                const title = $(this).find('.gs-c-promo-heading > span').text();
                const link = "https://www.bbc.com"+ $(this).find('.gs-o-media__body > a').attr("href");
                topNews.push({
                    title: title,
                    link: link
                });
            });
            sendDataToDB.sendBBC(topNews);
            console.log(topNews);


        });
}
module.exports={getBBC, getCNN, getNBC}