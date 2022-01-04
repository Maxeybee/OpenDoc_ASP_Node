const express = require('express');
const router = express.Router({ mergeParams: true });

const lessonsController = require('../controllers/lesson.controller');

router.route('/')
    .get(lessonsController.getAll);

module.exports = router;