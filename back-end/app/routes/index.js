const check = require ('./check');
const sendImages = require('./sendImg');

module.exports = function (app, db){
    check(app,db);
    sendImages(app,db);
}