const instagramPost = require('instagram/instagramPost');
const scrape = require('scraper/scrape');


setInterval(()=>{
     scrape.getBBC();
     scrape.getCNN();
     scrape.getNBC();
     instagramPost.instagramPost();
    },43200000);
