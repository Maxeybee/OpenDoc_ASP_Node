const usersService = require('../services/user.service');

const getAll = function(req, res){
    //console.log("controller lessons => " + JSON.stringify(lessonsService.getAll()))
    res.send(usersService.getAll())
}

module.exports = {
    getAll
};