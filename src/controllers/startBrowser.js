const puppeteer = require('puppeteer');

const startBrowser = async function () {
  let browser;
  try {
    browser = await puppeteer.launch({
      headless: true,
      args: ['--disable-setuid-sandbox'],
      'ignoreHTTPSErrors': true,
    });
  } catch (err) {
    console.log('Could not create a browser instance => : ', err);
  }
  return browser;
};

module.exports = startBrowser;
