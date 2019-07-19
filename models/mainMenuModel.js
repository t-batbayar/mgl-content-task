const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const mainMenu = sequelize.define(
    'mainmenu',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: Sequelize.STRING,
        link: {
            type: Sequelize.STRING,
            allowNull: true,
            defaultValue: '/#'
        },
        order: {
            defaultValue: 0,
            type: Sequelize.INTEGER
        }
    },
    {
        timestamps: false
    }
);

module.exports = mainMenu;
