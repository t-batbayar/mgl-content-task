const mainMenu = require('../models/mainMenuModel');
const subMenu = require('../models/subMenuModel');
const subSubMenu = require('../models/subSubMenuModel');

module.exports.getHome = async (req, res) => {
    mainMenu
        .findAll({
            include: [
                {
                    model: subMenu,
                    include: [
                        {
                            model: subSubMenu
                        }
                    ],
                    order: [[{ model: subSubMenu }, 'order', 'asc']]
                }
            ],
            order: [['order', 'asc'], [{ model: subMenu }, 'order', 'asc']]
        })
        .then(menus => {
            res.render('index', {
                menus,
                pageTitle: 'Main Menu',
                path: '/'
            });
        })
        .catch(error => {
            console.log(error);
        });
};
