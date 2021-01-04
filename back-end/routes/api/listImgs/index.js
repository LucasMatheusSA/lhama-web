const routes = require('express').Router({ mergeParams: true });
const listImgs = require('../../../controllers/listImgs/listImgs');

routes.post('/', listImgs);

module.exports = routes;
