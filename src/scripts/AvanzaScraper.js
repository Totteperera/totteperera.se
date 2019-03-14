const puppeteer = require("puppeteer")
const $ = require("cheerio")
const fs = require("fs")
const FILEPATH = __dirname + '/../../content/assets/stocks.json';

async function Scrape() {

    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        
        var contents = fs.readFileSync(FILEPATH,'utf8');
        
        const parsedContent = JSON.parse(contents);
        let trendingToday,latest = "";
    
        await asyncForEach(parsedContent.stocks, async (element) => {
            await page.goto(element.url);
            await page.content()
            .then(function(html) {
                trendingToday = $('#main',html).find('#surface .quoteWrapper .changePercent').text();
                latest = $('#main', html).find('#surface .quoteWrapper .lastPrice').text();
                element.trendingToday = trendingToday;
                element.latest = latest;
    
                return element;
            })
        });
    
        fs.writeFileSync(FILEPATH, JSON.stringify(parsedContent), function (err) {
            if (err) throw err;
        })

        page.close();
        browser.close();
    
    } catch (error) {
        console.log(error);
    }
   
}

async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array);
    }
}

module.exports = Scrape;