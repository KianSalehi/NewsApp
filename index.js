//const instagramPost = require('instagram/instagramPost');
const scrape = require('./scraper/scrape.js');
const data = require('./database/getDataFromDB');
//data.fromBBC();
scrape.getBBC();
//scrape.getCNN();
//scrape.getNBC();
//instagramPost.instagramPost();

