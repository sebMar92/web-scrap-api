const { Router } = require('express');
const scrap = require('./scrap.js');

const router = Router();

router.use('/scrap', scrap);

module.exports = router;
