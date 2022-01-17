const config = require('../config.json');
const Sequelize = require('sequelize');
const setAssociations = require('./setAssociations.sequelize');
const initializeDatabase = require('./initializeDatabase.sequelize');

const sequelize = new Sequelize(
    {
        database: config.sequelize.database,
        dialect: config.sequelize.dialect,
        host: config.sequelize.host,
        username: config.sequelize.username,
        password: config.sequelize.password
    }
);

const modelsToDefine = [
    require('./models/Chapter.sequelize'),
    require('./models/Comment.sequelize'),
    require('./models/Lesson.sequelize'),
    require('./models/User_Read_Chapter.sequelize'),
    require('./models/User.sequelize')
];

for (const modelToDefine of modelsToDefine) {
    modelToDefine(sequelize);
}

setAssociations(sequelize);

initializeDatabase(sequelize);

module.exports = sequelize;
