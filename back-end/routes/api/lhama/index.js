const routes = require('express').Router({ mergeParams: true });
const lhama = require('../../../controllers/lhama/lhama');

routes.post('/', lhama);

module.exports = routes;
