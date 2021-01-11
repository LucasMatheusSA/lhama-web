const routes = require('express').Router({ mergeParams: true });
const listTemp = require('../../../controllers/listTemp/listTemp');

routes.get('/', listTemp);

module.exports = routes;
