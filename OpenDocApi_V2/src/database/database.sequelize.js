const config = require('../config');
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
    // require('./entities/Chapter'),
    // //require('./entities/Role'),
    // require('./entities/Comments'),
    // require('./entities/Lesson'),
    // require('./entities/User_Read_Chapter'),
    // require('./entities/User')
];

for (const modelToDefine of modelsToDefine) {
    modelToDefine(sequelize);
}

//setAssociations(sequelize);

//initializeDatabase(sequelize);


//module.exports = sequelize;
