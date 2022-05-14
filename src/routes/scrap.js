const router = require('express').Router();
const startBrowser = require('../controllers/startBrowser.js');
const scrapeAll = require('../controllers/scrapeAll.js');

router.get('', async function (req, res) {
  try {
    const browserInstance = startBrowser();

    res.status(200).json(await scrapeAll(browserInstance));
  } catch (err) {
    console.log(err);
    res.status(500);
  }
});

module.exports = router;
