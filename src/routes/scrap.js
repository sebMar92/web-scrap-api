const router = require('express').Router();
const startBrowser = require('../controllers/startBrowser.js');
const pageController = require('../controllers/pageController.js');

router.get('', async function (req, res) {
  try {
    let browserInstance = startBrowser();

    res.status(200).json(await pageController(browserInstance));
  } catch (err) {
    console.log(err);
    res.status(500);
  }
});

module.exports = router;
