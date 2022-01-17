'use strict';


// Setup & Start Sequelize
const sequelize = require('./src/database/database.sequelize');
global.sequelize = sequelize;

// Import Express & Http
const express = require('express');
const http = require('http');
const https = require('https');
const cors = require('cors');

// Import config from config.js
const config = require('./src/config');
const { https: { key, cert }, port, isHttps, serviceName } = config;
const credentials = { key, cert };

// Setup App & its routes (with Express)
const app = express();
app.use(cors());
const routes = require('./src/api/routes/index.route');
app.use(routes);

// Start Http server
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