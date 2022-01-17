const sequelize = require('../../database/database.sequelize');

const getAll = async function(){
    const lessons = await sequelize.models.lesson.findAll();
    console.log(lessons);
    return JSON.stringify(lessons);
}
module.exports = {
    getAll
};