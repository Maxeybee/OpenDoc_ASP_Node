const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('comment', {
        id: {
            type: DataTypes.INTEGER, 
            primaryKey: true, 
            autoIncrement: true
        },
        comment: {
            type: DataTypes.TEXT, 
            allowNull: false
        },
        reputation: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    }, {
        timestamps: false, 
        freezeTableName: true
    });
};