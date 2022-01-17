const express = require('express');
// import routes
const lessons = require('./lesson.route');
const users = require('./user.route');

// use express router
const router = express.Router();

// use imported routes use = get as default
router.use('/api/lessons', lessons);
router.post('/api/lessons', index.route.js);
router.use('/api/users', users);

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