
// npm modules
var express = require('express');

// local modules
var routes = require('./routes');


exports.createServer = function createServer () {
    
    // initalize http server
    var server = express();
    
    // specify middleware
    server.use(express.bodyParser());
    
    // attach router handlers
    routes.attachHandlers(server);
    
    // return server instance
    return server;
    
};
