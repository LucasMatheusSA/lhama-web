const lhama = require('./lhama'); 
const listImgs = require('./listImgs'); 
const router = require('express').Router();

router.use('/lhama', lhama);
router.use('/listImgs', listImgs);

module.exports = router;