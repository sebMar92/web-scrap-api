const pageScraper = require('./pageScraper.js');

const scrapeAll = async function (browserInstance) {
  try {
    const browser = await browserInstance;
    const pageInfo = await pageScraper.scraper(browser);
    return pageInfo;
  } catch (err) {
    console.log('Could not resolve the browser instance => ', err);
  }
};

module.exports = scrapeAll;
