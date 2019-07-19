const mainMenu = require('../models/mainMenuModel');
const subMenu = require('../models/subMenuModel');
const subSubMenu = require('../models/subSubMenuModel');

module.exports.getMenu = (req, res) => {
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
            res.render('menus', {
                menus,
                pageTitle: 'Menu',
                path: '/menus'
            });
        })
        .catch(error => {
            console.log(error);
        });
};

// Add Main Menu
module.exports.getAddMainMenu = (req, res) => {
    res.render('add-menu', {
        pageTitle: 'Add Menu',
        path: '/add-main-menu',
        parentId: ''
    });
};
module.exports.postAddMainMenu = (req, res) => {
    const { name, link, order } = req.body;

    mainMenu
        .create({ name, link, order })
        .then(() => {
            res.redirect('/');
        })
        .catch(error => {
            console.log(error);
        });
};

// Edit Main Menu
module.exports.getEditMainMenu = (req, res) => {
    const id = req.params.id;
    mainMenu
        .findByPk(id)
        .then(menu => {
            res.render('edit-menu', {
                menu,
                pageTitle: 'Edit Menu',
                path: '/edit-main-menu'
            });
        })
        .catch(error => {
            console.log(error);
        });
};
module.exports.postEditMainMenu = (req, res) => {
    const { id, name, link, order } = req.body;
    mainMenu
        .update(
            { name, link, order },
            {
                where: {
                    id
                }
            }
        )
        .then(() => {
            res.redirect('/');
        })
        .catch(error => {
            console.log(error);
        });
};
//Delete Main Menu
module.exports.deleteMainMenu = (req, res) => {
    const id = req.body.menuId;
    mainMenu
        .destroy({
            where: {
                id
            }
        })
        .then(() => {
            res.redirect('/');
        })
        .catch(error => console.log(error));
};

// Add sub menu
module.exports.getAddSubMenu = (req, res) => {
    const parentId = req.params.parentId;
    res.render('add-menu', {
        parentId,
        pageTitle: 'Add Sub Menu',
        path: '/add-sub-menu'
    });
};
module.exports.postAddSubMenu = (req, res) => {
    const { name, link, order, parentId: mainmenuId } = req.body;
    subMenu
        .create({ name, link, order, mainmenuId })
        .then(() => {
            res.redirect('/');
        })
        .catch(error => {
            console.log(error);
        });
};

// Edit sub menu
module.exports.getEditSubMenu = (req, res) => {
    const id = req.params.id;
    subMenu
        .findByPk(id)
        .then(menu => {
            res.render('edit-menu', {
                menu,
                pageTitle: 'Edit Menu',
                path: '/edit-sub-menu'
            });
        })
        .catch(error => {
            console.log(error);
        });
};
module.exports.postEditSubMenu = (req, res) => {
    const { id, name, link, order } = req.body;
    subMenu
        .update(
            { name, link, order },
            {
                where: {
                    id
                }
            }
        )
        .then(() => {
            res.redirect('/');
        })
        .catch(error => {
            console.log(error);
        });
};
//Delete sub menu
module.exports.deleteSubMenu = (req, res) => {
    const id = req.body.subMenuId;
    subMenu
        .destroy({
            where: {
                id
            }
        })
        .then(() => {
            res.redirect('/');
        })
        .catch(error => console.log(error));
};

// Add sub sub menu
module.exports.getAddSubSubMenu = (req, res) => {
    const parentId = req.params.parentId;

    res.render('add-menu', {
        parentId,
        pageTitle: 'Add Sub Sub Menu',
        path: '/add-sub-sub-menu'
    });
};
module.exports.postAddSubSubMenu = (req, res) => {
    const { name, link, order, parentId: submenuId } = req.body;
    subSubMenu
        .create({ name, link, order, submenuId })
        .then(() => {
            res.redirect('/');
        })
        .catch(error => {
            console.log(error);
        });
};

// Edit sub sub menu
module.exports.getEditSubSubMenu = (req, res) => {
    const id = req.params.id;
    subSubMenu
        .findByPk(id)
        .then(menu => {
            res.render('edit-menu', {
                menu,
                pageTitle: 'Edit Menu',
                path: '/edit-sub-sub-menu'
            });
        })
        .catch(error => {
            console.log(error);
        });
};
module.exports.postEditSubSubMenu = (req, res) => {
    const { id, name, link, order } = req.body;
    subSubMenu
        .update(
            { name, link, order },
            {
                where: {
                    id
                }
            }
        )
        .then(() => {
            res.redirect('/');
        })
        .catch(error => {
            console.log(error);
        });
};
//Delete sub menu
module.exports.deleteSubSubMenu = (req, res) => {
    const id = req.body.subSubMenuId;
    subSubMenu
        .destroy({
            where: {
                id
            }
        })
        .then(() => {
            res.redirect('/');
        })
        .catch(error => console.log(error));
};
