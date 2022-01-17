const express = require('express');
const router = express.Router({ mergeParams: true });

const usersController = require('../controllers/user.controller');

router.route('/')
    .get(usersController.getAll);

module.exports = router;