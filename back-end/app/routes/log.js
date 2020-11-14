const Date = require('./date');

module.exports = {
    msg: function(msg){
        console.log(Date.date() + " : " + msg);
    }
}