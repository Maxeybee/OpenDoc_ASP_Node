const express = require('express');

// import routes
// const cars = require('./cars.route');
// const accounts = require('./accounts.route');
// const swagger = require('./swagger.route');

// use express router
const router = express.Router();

// use imported routes
// router.use('/cars', cars);
// router.use('/accounts', accounts);
// router.use('/', swagger);

router.get('/', (req, res) => res.send('OpenDoc API Version 1'));
router.get('/health', (req, res) => {
  const healthcheck = {
		uptime: process.uptime(),
		message: 'OK',
		timestamp: Date.now()
  };
  res.send(JSON.stringify(healthcheck));
});

module.exports = router;