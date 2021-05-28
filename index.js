const instagramPost = require('./instagram/instagramPost.js');
const scrape = require('./scraper/scrape.js');

main();

// Posts every 12 hours
setInterval(async ()=>{
    await main()
}, 43200000);


async function main(){
await scrape.getBBC();
await scrape.getCTV();
await scrape.getNBC();
await instagramPost.instagramPost();}

