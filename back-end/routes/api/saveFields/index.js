const routes = require('express').Router({ mergeParams: true });
const saveFields = require('../../../controllers/saveFields/saveFields');

routes.post('/', saveFields);

module.exports = routes;
