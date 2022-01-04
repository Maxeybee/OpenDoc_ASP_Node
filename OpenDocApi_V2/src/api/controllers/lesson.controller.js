const lessonsService = require('../services/lesson.service');

const getAll = function(req, res){
    console.log("controller lessons => " + JSON.stringify(lessonsService.getAll()))
    res.send(lessonsService.getAll())
}

module.exports = {
    getAll
};