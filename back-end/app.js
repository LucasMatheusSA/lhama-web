const express = require('express');
const bodyParser = require ('body-parser');
const routes = require('./routes');
const config = require('./app-config');

const app = express();

// Enable CORS
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// application/json
app.use(bodyParser.json())

app.use('/', routes);
app.use(express.static('public'));

const startServer = (port = config.config_web.port) => {
    const server = app.listen(port, function () {
      console.log(`Server running on port ${server.address().port}`);
    });
};

module.exports = startServer;