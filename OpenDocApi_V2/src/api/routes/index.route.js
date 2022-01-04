const express = require('express');
// import routes
const lessons = require('./lesson.route');

// use express router
const router = express.Router();

// use imported routes
router.use('/lessons', lessons);

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