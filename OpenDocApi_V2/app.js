'use strict';
// Import Express & Http
const express = require('express');
const http = require('http');
const https = require('https');
const cors = require('cors');

// lauch config from params
const config = require('./src/config');
const { https: { key, cert }, port, isHttps, serviceName } = config;
const credentials = { key, cert };

//setup app & its routes
const app = express();
app.use(cors());
const routes = require('./src/api/routes/index.route');
app.use(routes);

//start http server
const httpServer = http.createServer(app);
httpServer.listen(port);
console.log(`[${serviceName}] http server listening at port ${port}`);

//remove comment for start https server
// if(isHttps) {
//   const httpsServer = https.createServer(credentials, app);
//   httpsServer.listen(port+1);
//   console.log(`[${serviceName}] https server listening at port ${port + 1}`);
// }

module.exports = { app };