const sendDataToDB = require('../database/sendDataToDB');
const axios = require('axios');
const cheerio = require('cheerio');

// Get bbc data
async function getBBC() {
    const url = 'https://www.bbc.com/news'
    let response=await axios(url)

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
            await sendDataToDB.sendBBC(topNews);
            console.log("done");



}
// Get nbc data

async function getNBC(){
    const url = 'https://www.nbcnews.com/'
    let response = await axios(url)
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
            await sendDataToDB.sendNBC(topNews);
            console.log("done");


}
// Get cnn data, need to finish this
async function getCTV(){
    const url = 'https://toronto.ctvnews.ca/'
    let response = await axios(url)
            const html = response.data;
            const $ = cheerio.load(html);
            let newsTable=$('ul.c-list.c-list--2Columns > li');
            let topNews=[];
            newsTable.each(function (index){
                let title = $(this).find('.c-list__item__title > a').text();
                title = title.trim();
                const link = $(this).find('.c-list__item__title > a').attr("href");
                    topNews.push({
                        title: title,
                        link: link
                    });
            });
            await sendDataToDB.sendCTV(topNews);
            console.log("done");


}
module.exports={getBBC, getCTV, getNBC}