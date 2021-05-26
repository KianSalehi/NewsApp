//const instagramPost = require('instagram/instagramPost');
const scrape = require('./scraper/scrape.js');
main();
async function main(){
await scrape.getBBC();
await scrape.getCTV();
await scrape.getNBC();}
//instagramPost.instagramPost();

