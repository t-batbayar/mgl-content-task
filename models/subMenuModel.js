const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const subMenu = sequelize.define(
    'submenu',
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

module.exports = subMenu;
