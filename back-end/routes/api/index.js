const router = require('express').Router();

const lhama = require('./lhama'); 
const listImgs = require('./listImgs'); 
const listTemp = require('./listTemp'); 
const saveFields = require('./saveFields'); 

router.use('/lhama', lhama);
router.use('/listImgs', listImgs);
router.use('/listTemp', listTemp);
router.use('/saveFields', saveFields);

module.exports = router;